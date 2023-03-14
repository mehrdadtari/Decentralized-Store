import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  //It means if we are in the browser and the user has Metamask running and the web3 in automatically injected by Metamask.
  web3 = new Web3(window.web3.currentProvider);
} else {
  //We are on the server OR the user is not running Metamask.
  const provider = new Web3.providers.HttpProvider(
    //We make our own provider using a remote Etehreum node such as infura node
    "https://rpc.sepolia.org"
  );
  web3 = new Web3(provider);
}

export default web3;
