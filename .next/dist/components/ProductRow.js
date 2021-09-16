"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _web = require("../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _store = require("../ethereum/store");

var _store2 = _interopRequireDefault(_store);

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/mehrdad_work/work_space/store_v2/components/ProductRow.js";


var ProductRow = function (_Component) {
  (0, _inherits3.default)(ProductRow, _Component);

  function ProductRow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ProductRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ProductRow.__proto__ || (0, _getPrototypeOf2.default)(ProductRow)).call.apply(_ref, [this].concat(args))), _this), _this.onBuy = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var store, accounts;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              store = (0, _store2.default)(_this.props.address);
              _context.next = 3;
              return _web2.default.eth.getAccounts();

            case 3:
              accounts = _context.sent;
              _context.next = 6;
              return store.methods.buy(_this.props.id).send({
                from: accounts[0],
                value: _this.props.commodity.price
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _this.onClickPositive = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var store, accounts;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              store = (0, _store2.default)(_this.props.address);
              _context2.next = 3;
              return _web2.default.eth.getAccounts();

            case 3:
              accounts = _context2.sent;
              _context2.next = 6;
              return store.methods.productAvailable(_this.props.id, true).send({
                from: accounts[0]
              });

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    })), _this.onClickNegative = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      var store, accounts;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              store = (0, _store2.default)(_this.props.address);
              _context3.next = 3;
              return _web2.default.eth.getAccounts();

            case 3:
              accounts = _context3.sent;
              _context3.next = 6;
              return store.methods.productAvailable(_this.props.id, false).send({
                from: accounts[0]
              });

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ProductRow, [{
    key: "render",
    value: function render() {
      var Row = _semanticUiReact.Table.Row,
          Cell = _semanticUiReact.Table.Cell;
      var _props = this.props,
          id = _props.id,
          commodity = _props.commodity;

      return _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement(Cell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, id), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: "h4", textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, commodity.description)), _react2.default.createElement(Cell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _web2.default.utils.fromWei(commodity.price, "ether")), _react2.default.createElement(Cell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, commodity.seller), _react2.default.createElement(Cell, { textAlign: "center", singleLine: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(_semanticUiReact.Rating, {
        icon: "star",
        defaultRating: commodity.reviewScore,
        maxRating: 5,
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }), " ", _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }), _react2.default.createElement(_routes.Link, {
        route: "/stores/" + this.props.address + "/products/" + id + "/allReviews",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { color: "yellow", size: "tiny", basic: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, "See Reviews")))), _react2.default.createElement(Cell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, commodity.totalReviews), _react2.default.createElement(Cell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, commodity.numSoldProduct), _react2.default.createElement(Cell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, !commodity.available ? "Not Available" : _react2.default.createElement(_semanticUiReact.Button, { color: "green", basic: true, onClick: this.onBuy, __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, "Buy")), _react2.default.createElement(Cell, { textAlign: "center", singleLine: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement(_routes.Link, { route: "/stores/" + this.props.address + "/products/" + id + "/review", __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { color: "teal", basic: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, "Review")))), _react2.default.createElement(Cell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react2.default.createElement(_semanticUiReact.Button.Group, { size: "tiny", __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { positive: true, onClick: this.onClickPositive, __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, "Yes"), _react2.default.createElement(_semanticUiReact.Button.Or, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { negative: true, onClick: this.onClickNegative, __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, "No"))));
    }
  }]);

  return ProductRow;
}(_react.Component);
/*
            { request.complete ? null : (
          <Button color="green" basic onClick={this.onApprove}>
            Approve
          </Button>
            )}
Above code means that if request.complete is true, return null whcih means deleting the button. However, if it is
false, it will return the button.
*/

exports.default = ProductRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUHJvZHVjdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIlRhYmxlIiwiUmF0aW5nIiwiSGVhZGVyIiwid2ViMyIsIlN0b3JlIiwiTGluayIsIlByb2R1Y3RSb3ciLCJvbkJ1eSIsInN0b3JlIiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJidXkiLCJpZCIsInNlbmQiLCJmcm9tIiwidmFsdWUiLCJjb21tb2RpdHkiLCJwcmljZSIsIm9uQ2xpY2tQb3NpdGl2ZSIsInByb2R1Y3RBdmFpbGFibGUiLCJvbkNsaWNrTmVnYXRpdmUiLCJSb3ciLCJDZWxsIiwiZGVzY3JpcHRpb24iLCJ1dGlscyIsImZyb21XZWkiLCJzZWxsZXIiLCJyZXZpZXdTY29yZSIsInRvdGFsUmV2aWV3cyIsIm51bVNvbGRQcm9kdWN0IiwiYXZhaWxhYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBUSxBQUFPLEFBQVE7O0FBQ2hDLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBUyxBQUFZOzs7Ozs7O0lBRWYsQTs7Ozs7Ozs7Ozs7Ozs7O29OLEFBQ0osaUZBQVEsbUJBQUE7aUJBQUE7b0VBQUE7a0JBQUE7MkNBQUE7aUJBQ0E7QUFEQSxzQkFDUSxxQkFBTSxNQUFBLEFBQUssTUFEbkIsQUFDUSxBQUFpQjs4QkFEekI7cUJBRWlCLGNBQUEsQUFBSyxJQUZ0QixBQUVpQixBQUFTOztpQkFBMUI7QUFGQSxrQ0FBQTs4QkFBQTsyQkFHQSxBQUFNLFFBQU4sQUFBYyxJQUFJLE1BQUEsQUFBSyxNQUF2QixBQUE2QixJQUE3QixBQUFpQztzQkFDL0IsU0FEb0MsQUFDcEMsQUFBUyxBQUNmO3VCQUFPLE1BQUEsQUFBSyxNQUFMLEFBQVcsVUFMZCxB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