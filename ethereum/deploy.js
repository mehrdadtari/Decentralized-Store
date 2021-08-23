//Deploy to Rinkeby test network
/*
    In this code, we will deploy our contract into a real public test network like Rinkeby. We can deploy
    our contract in the same way to the mainnet. however, for deploying the contract to the mainnet, we should 
    pay for it! There are several differences between deploying the contract into a local test network and a
    public test network. While in local test network on our computer, we can create unlocked accounts which 
    are authomatically created by the ganache provider, in public test networks, we deal with real accounts 
    with password, mnemonic, and ethereum balance. For public test network, we need to give 'account mnemonic'
    to the provider. While Ganache is used or the local test network, we use Infura for test network. Instead of
    running a full local rinkeby ethereum node on our own machine, we use Infura. Infura is a public API that gives
    us access to a node hosted on rinkeby by infura. Essentially, Infura is like a portal to rinkeby network. Infura
    is also used to conect to other public test networks and mainnet.
    How to access Infura? "infura.io"
*/

const HDWalletProvider = require("truffle-hdwallet-provider");
// To unlock our wallet and allow us to connect to rinkeby test network (the public network API).
const Web3 = require("web3");
const compiledFactory = require("./build/StoreFactory.json");

const provider = new HDWalletProvider(
  // Our Metamask account mnemonic
  "boy apart roof awful grass turkey donkey image property dust satisfy stamp",
  // The url for the API that we want to connect to. In this case is Rinkeby by infura. We could use 'geth' to directly connect.
  "https://rinkeby.infura.io/v3/2a416ee9192d417f98510ba67234769e"
);
const web3 = new Web3(provider);

/*
    We need to make 2 asynchronous calls to get list of the accounts and deploy our contract. To avoid using
    promises, we arbitrarily define a function to use 'async await' syntax. Notice that we cannot use 'await' 
    syntax outside a function. 
*/
const deploy = async () => {
  const accounts = await web3.eth.getAccounts(); // Mnemonic creates multiple accounts.

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode }) //the constructor does not need any arguments.
    .send({ gas: "1000000", from: accounts[0] });

  console.log("Contract deployed to", result.options.address);
};
deploy();

/*
    We can see our deployed contract information on "rinkeby.etherscan.io".
    We can interact with our contract on remix by using 'injected web3' environment instead of JavaScript VM 
    and entering our contract address. WE HAVE TO USE CHROME because 'injected web3' is connected to metamask 
    which is an extension on chrome.
*/
