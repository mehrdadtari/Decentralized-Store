import web3 from "./web3";
import StoreFactory from "./build/StoreFactory.json";

const instance = new web3.eth.Contract(
  StoreFactory.abi,
  //"0x9D68d92d3be7e6F1d390F7F335f9EcB659c98248"
  "0xd0285B583D4a2F8e2a992318dEBf2413A41eFd92"
  //Above address is inside the Rinkeby test network which we previously deployed our contract to.
);

export default instance;
