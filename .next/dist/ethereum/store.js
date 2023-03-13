"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("./web3");

var _web2 = _interopRequireDefault(_web);

var _Store = require("./build/Store.json");

var _Store2 = _interopRequireDefault(_Store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
  return new _web2.default.eth.Contract(_Store2.default.abi, address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3N0b3JlLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJTdG9yZSIsImFkZHJlc3MiLCJldGgiLCJDb250cmFjdCIsImFiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQWtCLEFBQWxCLEFBRUE7Ozs7OztrQkFBZSxVQUFDLEFBQUQsU0FBYSxBQUMxQjtTQUFPLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUFzQixnQkFBTSxBQUE1QixLQUFpQyxBQUFqQyxBQUFQLEFBQ0Q7QUFGRCIsImZpbGUiOiJzdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWVocmRhZC9HY29vbm9teS9zdG9yZV9wcm9qZWN0L3N0b3JlX3YzX01hdGljX2ZlZXMifQ==