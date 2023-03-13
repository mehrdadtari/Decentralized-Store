/*
import Web3 from "web3";

const web3 = new Web3(window.web3.currentProvider);

export default web3;
    Above code assumes the user is using Metamask and Metamask is still automatically
    injecting a web3 provider to user's web page. However, in future, user may use other 
    wallets or Metamask may stop this feature. In that case, we should change the above code.
    In addition, "window" object is only defined on user's browser and it is not defined on 
    the server side. So, node.js cannot read this code during rendering the server. so, we change
    the above code to below.
*/

import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  //It means if we are in the browser and the user has Metamask running and the web3 in automatically injected by Metamask.
  web3 = new Web3(window.web3.currentProvider);
} else {
  //We are on the server OR the user is not running Metamask.
  const provider = new Web3.providers.HttpProvider(
    //We make our own provider using a remote Etehreum node such as infura node
    //"https://rinkeby.infura.io/v3/2a416ee9192d417f98510ba67234769e"
    //"https://rpc-mumbai.maticvigil.com/"
    "https://rpc.sepolia.org"
  );
  web3 = new Web3(provider);
}

export default web3;
