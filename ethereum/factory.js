import web3 from "./web3";
import StoreFactory from "./build/StoreFactory.json";

const instance = new web3.eth.Contract(
  StoreFactory.abi,
  "0xE56c5D726F157c2c2964d025eb369344Fc8DAE54"
  //Above address is inside the Sepolia test network.
);

export default instance;
