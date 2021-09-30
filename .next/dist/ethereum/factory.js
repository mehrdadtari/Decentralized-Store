"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("./web3");

var _web2 = _interopRequireDefault(_web);

var _StoreFactory = require("./build/StoreFactory.json");

var _StoreFactory2 = _interopRequireDefault(_StoreFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(_StoreFactory2.default.abi,
//"0x9D68d92d3be7e6F1d390F7F335f9EcB659c98248"
"0x0bfe9B5c68CE60D6b221C570e27bA1ee9b1f40c8"
//Above address is inside the Rinkeby test network which we previously deployed our contract to.
);

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIlN0b3JlRmFjdG9yeSIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJhYmkiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWtCOzs7Ozs7QUFFekIsSUFBTSxlQUFlLGNBQUEsQUFBSyxJQUFULEFBQWEsU0FDNUIsdUJBRGUsQUFDRjtBQUNiO0FBQ0E7QUFIRixBQUFpQixBQUlmLEFBR0Y7QUFQaUI7O2tCQU9qQixBQUFlIiwiZmlsZSI6ImZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21laHJkYWRfd29yay93b3JrX3NwYWNlL3N0b3JlX3YzX01hdGljX2ZlZXMifQ==