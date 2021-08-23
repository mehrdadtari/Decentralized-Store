import web3 from "./web3";
import Store from "./build/Store.json";

export default (address) => {
  return new web3.eth.Contract(JSON.parse(Store.interface), address);
};
