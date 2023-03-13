import web3 from "./web3";
import StoreFactory from "./build/StoreFactory.json";

const instance = new web3.eth.Contract(
  StoreFactory.abi,
  //"0x9D68d92d3be7e6F1d390F7F335f9EcB659c98248"
  "0xE56c5D726F157c2c2964d025eb369344Fc8DAE54"
  //Above address is inside the Rinkeby test network which we previously deployed our contract to.
);

export default instance;
