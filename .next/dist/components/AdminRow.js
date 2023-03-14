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

var _jsxFileName = "/Users/mehrdad/Gcoonomy/store_project/store_v3_Membership_fees/components/AdminRow.js";


var AdminRow = function (_Component) {
  (0, _inherits3.default)(AdminRow, _Component);

  function AdminRow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AdminRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AdminRow.__proto__ || (0, _getPrototypeOf2.default)(AdminRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      updateInventory: "",
      errorMessage: "",
      loading: false
    }, _this.onClickPositive = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
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
              return store.methods.productAvailable(_this.props.id, true).send({
                from: accounts[0]
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _this.onClickNegative = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
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
              return store.methods.productAvailable(_this.props.id, false).send({
                from: accounts[0]
              });

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  // onSubmit = async (event) => {
  //   event.preventDefault();

  //   this.setState({ loading: true, errorMessage: "" });

  //   try {
  //     const store = Store(this.props.address);
  //     const accounts = await web3.eth.getAccounts();
  //     await store.methods
  //       .updateInventory(this.props.id, this.state.updateInventory)
  //       .send({
  //         from: accounts[0],
  //       });
  //   } catch (err) {
  //     this.setState({ errorMessage: err.message });
  //   }
  //   this.setState({ loading: false });
  //   this.setState({ updateInventory: "" });
  //   Router.pushRoute(`/stores/${this.props.address}/nimda`);
  // };

  (0, _createClass3.default)(AdminRow, [{
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
          lineNumber: 65
        }
      }, _react2.default.createElement(Cell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, id), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: "h4", textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, commodity.description)), _react2.default.createElement(Cell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _web2.default.utils.fromWei(commodity.price, "ether")), _react2.default.createElement(Cell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, commodity.seller), _react2.default.createElement(Cell, { textAlign: "center", singleLine: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement(_semanticUiReact.Rating, {
        icon: "star",
        defaultRating: commodity.reviewScore,
        maxRating: 5,
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }), " ", _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }), _react2.default.createElement(_routes.Link, {
        route: "/stores/" + this.props.address + "/products/" + id + "/allReviews",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { color: "yellow", size: "tiny", basic: true, style: { marginTop: 5 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, "See Reviews")))), _react2.default.createElement(Cell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, commodity.totalReviews), _react2.default.createElement(Cell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, commodity.numSoldProduct), _react2.default.createElement(Cell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, commodity.availableInventory), _react2.default.createElement(Cell, { textAlign: "center", singleLine: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, "Current State: ", commodity.available ? "Yes!" : "No!", _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }), _react2.default.createElement(_semanticUiReact.Button.Group, { size: "tiny", style: { marginTop: 5 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { positive: true, onClick: this.onClickPositive, __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, "Yes"), _react2.default.createElement(_semanticUiReact.Button.Or, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { negative: true, onClick: this.onClickNegative, __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, "No"))), _react2.default.createElement(Cell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, _react2.default.createElement(_routes.Link, {
        route: "/stores/" + this.props.address + "/nimda/products/" + id + "/updateProduct",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { color: "teal", basic: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, "Update")))));
    }
  }]);

  return AdminRow;
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

exports.default = AdminRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWRtaW5Sb3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJCdXR0b24iLCJUYWJsZSIsIlJhdGluZyIsIkhlYWRlciIsIkZvcm0iLCJJbnB1dCIsIk1lc3NhZ2UiLCJ3ZWIzIiwiU3RvcmUiLCJMaW5rIiwiUm91dGVyIiwiQWRtaW5Sb3ciLCJzdGF0ZSIsInVwZGF0ZUludmVudG9yeSIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJvbkNsaWNrUG9zaXRpdmUiLCJzdG9yZSIsInByb3BzIiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwicHJvZHVjdEF2YWlsYWJsZSIsImlkIiwic2VuZCIsImZyb20iLCJvbkNsaWNrTmVnYXRpdmUiLCJSb3ciLCJDZWxsIiwiY29tbW9kaXR5IiwiZGVzY3JpcHRpb24iLCJ1dGlscyIsImZyb21XZWkiLCJwcmljZSIsInNlbGxlciIsInJldmlld1Njb3JlIiwibWFyZ2luVG9wIiwidG90YWxSZXZpZXdzIiwibnVtU29sZFByb2R1Y3QiLCJhdmFpbGFibGVJbnZlbnRvcnkiLCJhdmFpbGFibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFDRSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQTs7QUFFRixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQVMsQUFBWSxBQUNyQixBQUFTLEFBQWM7Ozs7Ozs7SSxBQUVqQjs7Ozs7Ozs7Ozs7Ozs7O2dOLEFBQ0o7dUJBQVEsQUFDVyxBQUNqQjtvQkFGTSxBQUVRLEFBQ2Q7ZSxBQUhNLEFBR0c7QUFISCxBQUNOLGEsQUEwQkYsMkZBQWtCLG1CQUFBO2lCQUFBO29FQUFBO2tCQUFBOzJDQUFBO2lCQUNWO0FBRFUsc0JBQ0YscUJBQU0sTUFBQSxBQUFLLE1BRFQsQUFDRixBQUFpQjs4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