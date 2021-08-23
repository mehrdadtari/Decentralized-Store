/*
    BEFORE RUNNNG ANY TEST, WE HAVE TO FIRST GO TO PACKAGE.JSON FILE
    AND REMOVE THE "TEST" LINE FROM "SCRIPTS" SECTION AND REPLACE IT WITH "TEST": "MOCHA"
*/
const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const provider = ganache.provider();
const web3 = new Web3(provider);
/*
    web3 is an instance of Web3 which is a cosntructor for web3 library. web3 needs
    a provider.
*/

const compiledFactory = require("../ethereum/build/CampaignFactory.json");
//It imports the compiled smart contract
const compiledCampaign = require("../ethereum/build/Campaign.json");
const { send } = require("process");

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: accounts[0], gas: "1000000" });
  /*
    Above line deploys a new instance of factory smart contract. To do so, we use Contract constructor from
    web3.eth library. We should give the ABI (interface) of compiled Factory smart contract to this constructor.
    Since the interface of compiled smart contract is JSON file, we have to parse it.
    Then, we should specify the data of the smart contract for deploy method and the address that want to deploy
    this smart contract and the amount of gas he wants to pay in send method.
  */

  await factory.methods.createCampaign("100").send({
    from: accounts[0],
    gas: "1000000",
  });

  [campaignAddress] = await factory.methods.getDeployedCampaigns().call();
  /*
  The above code is refactored verion of below code uing ES6. [campaignAddress] means store the first element of 
  the output of the syntax in this variable.
    const addresses = await factory.methods.getDeployedCampaigns().call();
    campaignAddress = addresses[0];
  */

  campaign = await new web3.eth.Contract(
    JSON.parse(compiledCampaign.interface),
    campaignAddress
  );
  /*
    This smart contract is already deployed by factory smart contract. So, instead of using deploy and send methods,
    we just give the address that the campaign smart contract is deployed to as an input argument.
  */
});

describe("Campaigns", () => {
  it("deploys a factory and a campaign", () => {
    assert.ok(factory.options.address);
    assert.ok(factory.options.address);
  });

  it("marks caller as the campaign manager", async () => {
    const manager = await campaign.methods.manager().call();
    assert.strictEqual(accounts[0], manager);
  });
  //whenever we use call or send on a smart contract method we have to use async and await.
  //Notice that for any variable defined in smart contract, automatically, a function with the sam ename is created during compiling.

  it("allows people to contribute money and marks them as approvers", async () => {
    await campaign.methods.contribute().send({
      from: accounts[1],
      value: "200",
    });
    const isContributer = await campaign.methods.approvers(accounts[1]).call();
    assert(isContributer);
    //if the input of assert() function is truthy, the assert will pass.
  });

  it("requires a minimum contribution", async () => {
    try {
      await campaign.methods.contribute().send({
        from: accounts[1],
        value: "205",
      });
      assert(false);
    } catch (err) {
      assert(err);
      //THIS IS ACTUALY WRONG!!! BECAUSE assert(false) will result in err as well!
    }
  });

  it("allows manager to make a payment request", async () => {
    await campaign.methods
      .createRequest("Buy batteries", "100", accounts[1])
      .send({
        from: accounts[0],
        gas: "1000000",
      });

    const request = await campaign.methods.requests(0).call();
    //requests(0) returns the 0 index from requests array.
    assert.strictEqual("Buy batteries", request.description);
  });

  it("processes requests", async () => {
    await campaign.methods.contribute().send({
      from: accounts[0],
      value: web3.utils.toWei("10", "ether"),
    });

    await campaign.methods
      .createRequest("A", web3.utils.toWei("5", "ether"), accounts[1])
      .send({
        from: accounts[0],
        gas: "1000000",
      });
    await campaign.methods.approveRequest(0).send({
      from: accounts[0],
      gas: "1000000",
    });

    await campaign.methods.finalizeRequest(0).send({
      from: accounts[0],
      gas: "1000000",
    });

    let balance = await web3.eth.getBalance(accounts[1]);
    //above line returns the balance of accounts[1].
    balance = web3.utils.fromWei(balance, "ether");
    balance = parseFloat(balance);
    //balance is originally a string. parseFloat is a built-in function that converts a string to a float number.
    console.log(balance);
    assert(balance > 104);
  });
});
