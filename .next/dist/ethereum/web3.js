"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0; /*
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

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  //It means if we are in the browser and the user has Metamask running and the web3 in automatically injected by Metamask.
  web3 = new _web2.default(window.web3.currentProvider);
} else {
  //We are on the server OR the user is not running Metamask.
  var provider = new _web2.default.providers.HttpProvider(
  //We make our own provider using a remote Etehreum node such as infura node
  //"https://rinkeby.infura.io/v3/2a416ee9192d417f98510ba67234769e"
  "https://rpc-mumbai.maticvigil.com/");
  web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBY0EsQUFBTzs7Ozs7O0FBRVAsSUFBSSxZQUFKLEdBaEJBOzs7Ozs7Ozs7Ozs7OztBQWtCQSxJQUFJLE9BQUEsQUFBTyxXQUFQLEFBQWtCLGVBQWUsT0FBTyxPQUFQLEFBQWMsU0FBbkQsQUFBNEQsYUFBYSxBQUN2RTtBQUNBO1NBQU8sQUFBSSxrQkFBSyxPQUFBLEFBQU8sS0FBdkIsQUFBTyxBQUFxQixBQUM3QjtBQUhELE9BR08sQUFDTDtBQUNBO01BQU0sV0FBVyxJQUFJLGNBQUEsQUFBSyxVQUFULEFBQW1CLEFBQ2xDO0FBQ0E7QUFDQTtBQUhGLEFBQWlCLEFBS2pCO1NBQU8sQUFBSSxrQkFBWCxBQUFPLEFBQVMsQUFDakI7QUFFRDs7a0JBQUEsQUFBZSIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tZWhyZGFkX3dvcmsvd29ya19zcGFjZS9zdG9yZV92M19NYXRpYyJ9