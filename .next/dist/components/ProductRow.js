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

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ProductRow.__proto__ || (0, _getPrototypeOf2.default)(ProductRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = { rating: 0 }, _this.onBuy = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
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
    })), _this.onRate = function (e, _ref3) {
      var rating = _ref3.rating,
          maxRating = _ref3.maxRating;

      _this.setState({ rating: rating, maxRating: maxRating });
    }, _this.onReview = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
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
              return store.methods.reviewProduct(_this.props.id, _this.state.rating).send({
                from: accounts[0]
              });

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    })), _this.onClickPositive = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
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
              return store.methods.productAvailable(_this.props.id, true).send({
                from: accounts[0]
              });

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, _this2);
    })), _this.onClickNegative = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
      var store, accounts;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              store = (0, _store2.default)(_this.props.address);
              _context4.next = 3;
              return _web2.default.eth.getAccounts();

            case 3:
              accounts = _context4.sent;
              _context4.next = 6;
              return store.methods.productAvailable(_this.props.id, false).send({
                from: accounts[0]
              });

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, _this2);
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
          lineNumber: 52
        }
      }, _react2.default.createElement(Cell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, id), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: "h4", textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, commodity.description)), _react2.default.createElement(Cell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _web2.default.utils.fromWei(commodity.price, "ether")), _react2.default.createElement(Cell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, commodity.seller), _react2.default.createElement(Cell, { textAlign: "center", singleLine: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, commodity.reviewScore, "/", 5, " ", _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }), _react2.default.createElement(_semanticUiReact.Rating, {
        icon: "star",
        defaultRating: commodity.reviewScore,
        maxRating: 5,
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      })), _react2.default.createElement(Cell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, commodity.totalReviews), _react2.default.createElement(Cell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, commodity.numSoldProduct), _react2.default.createElement(Cell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, !commodity.available ? "Not Available" : _react2.default.createElement(_semanticUiReact.Button, { color: "green", basic: true, onClick: this.onBuy, __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, "Buy")), _react2.default.createElement(Cell, { textAlign: "center", singleLine: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement(_semanticUiReact.Rating, { size: "huge", icon: "star", maxRating: 5, onRate: this.onRate, __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }), " ", _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }), _react2.default.createElement(_semanticUiReact.Button, {
        style: { marginTop: 3 },
        size: "small",
        color: "teal",
        basic: true,
        onClick: this.onReview,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, "Submit!")), _react2.default.createElement(Cell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react2.default.createElement(_semanticUiReact.Button.Group, { size: "tiny", __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { positive: true, onClick: this.onClickPositive, __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, "Yes"), _react2.default.createElement(_semanticUiReact.Button.Or, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { negative: true, onClick: this.onClickNegative, __source: {
          fileName: _jsxFileName,
          lineNumber: 102
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUHJvZHVjdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIlRhYmxlIiwiUmF0aW5nIiwiSGVhZGVyIiwid2ViMyIsIlN0b3JlIiwiTGluayIsIlByb2R1Y3RSb3ciLCJzdGF0ZSIsInJhdGluZyIsIm9uQnV5Iiwic3RvcmUiLCJwcm9wcyIsImFkZHJlc3MiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImJ1eSIsImlkIiwic2VuZCIsImZyb20iLCJ2YWx1ZSIsImNvbW1vZGl0eSIsInByaWNlIiwib25SYXRlIiwiZSIsIm1heFJhdGluZyIsInNldFN0YXRlIiwib25SZXZpZXciLCJyZXZpZXdQcm9kdWN0Iiwib25DbGlja1Bvc2l0aXZlIiwicHJvZHVjdEF2YWlsYWJsZSIsIm9uQ2xpY2tOZWdhdGl2ZSIsIlJvdyIsIkNlbGwiLCJkZXNjcmlwdGlvbiIsInV0aWxzIiwiZnJvbVdlaSIsInNlbGxlciIsInJldmlld1Njb3JlIiwidG90YWxSZXZpZXdzIiwibnVtU29sZFByb2R1Y3QiLCJhdmFpbGFibGUiLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFRLEFBQU8sQUFBUTs7QUFDaEMsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBVzs7OztBQUNsQixBQUFTLEFBQVk7Ozs7Ozs7SSxBQUVmOzs7Ozs7Ozs7Ozs7Ozs7b05BQ0osQSxRQUFRLEVBQUUsUSxBQUFGLEFBQVUsV0FFbEIsQSxpRkFBUSxtQkFBQTtpQkFBQTtvRUFBQTtrQkFBQTsyQ0FBQTtpQkFDQTtBQURBLHNCQUNRLHFCQUFNLE1BQUEsQUFBSyxNQURuQixBQUNRLEFBQWlCOzhCQUR6QjtxQkFFaUIsY0FBQSxBQUFLLElBRnRCLEFBRWlCLEFBQVM7O2lCQUExQjtBQUZBLGtDQUFBOzhCQUFB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QUNOO2VBSkYsQUFLRTtpQkFBUyxLQUxYLEFBS2dCOztvQkFMaEI7c0JBQUE7QUFBQTtBQUNFLFNBbkNOLEFBK0JFLEFBR0UsQUFVRiw2QkFBQyxjQUFELFFBQU0sV0FBTixBQUFnQjtvQkFBaEI7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQsd0JBQUEsQUFBUSxTQUFNLE1BQWQsQUFBbUI7b0JBQW5CO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHlDQUFPLFVBQVIsTUFBaUIsU0FBUyxLQUExQixBQUErQjtvQkFBL0I7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFHQSxzQ0FBQSxBQUFDLHdCQUFELEFBQVE7O29CQUFSO3NCQUpGLEFBSUUsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQyx5Q0FBTyxVQUFSLE1BQWlCLFNBQVMsS0FBMUIsQUFBK0I7b0JBQS9CO3NCQUFBO0FBQUE7U0FuRFIsQUFDRSxBQTRDRSxBQUNFLEFBS0UsQUFPVDs7Ozs7QUF0R3NCLEE7QUF3R3pCLEFBVUE7Ozs7Ozs7Ozs7a0JBQUEsQUFBZSIsImZpbGUiOiJQcm9kdWN0Um93LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tZWhyZGFkX3dvcmsvd29ya19zcGFjZS9zdG9yZV92MiJ9