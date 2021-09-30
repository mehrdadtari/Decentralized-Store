import web3 from "./web3";
import StoreFactory from "./build/StoreFactory.json";

const instance = new web3.eth.Contract(
  StoreFactory.abi,
  //"0x9D68d92d3be7e6F1d390F7F335f9EcB659c98248"
  "0x40aB42cE90e63e37E135BEa55A3F0f9C8B3F34da"
  //Above address is inside the Rinkeby test network which we previously deployed our contract to.
);

export default instance;
