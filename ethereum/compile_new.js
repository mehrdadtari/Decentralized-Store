const path = require("path");
const solc = require("solc");
const fs = require("fs-extra"); //fs-extra has more functions than fs module.

const buildPath = path.resolve(__dirname, "build");
/*
    __dirname means current directory which in this case is "ethereum". otehr arguments of resolve method
    are subdirectories.
*/
fs.removeSync(buildPath); //It removes a folder and everything inside it.

const storePath = path.resolve(__dirname, "contracts", "Store.sol");
const source = fs.readFileSync(storePath, "utf8");
/*
    Above lines reads the smart contract.
*/
let input = {
  language: "Solidity",
  sources: {
    "Store.sol": {
      content: source,
    },
  },
  settings: {
    optimizer: {
      enabled: true,
    },
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};
const output = JSON.parse(solc.compile(JSON.stringify(input)));

//output contains the compiled contracts for any contract written inside Campaign.sol

fs.ensureDirSync(buildPath); //To recreate 'build' folder.

for (let contract in output.contracts["Store.sol"]) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(":", "") + ".json"),
    output.contracts["Store.sol"][contract]
  );
}
/*
    output is an object containing all the compiled contracts inside .sol file. the syntax
    "let contract in output" iterates over the keys of output object. In this case, the keys are
    ":Campaign" and ":CampaignFactory".
    The syntax "fs.outputJsonSync" creates json files. It receives 2 arguments. The first one is 
    the file name to save the contract. The second one is the contract itself. Since "output" is an object and "contract"
    is a key, we can access the value of this key with "output[contract]". Notice that the syntax
    ".replace(":", "")" removes the ":" from the file name.
*/
