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

var _jsxFileName = "/Users/mehrdad_work/work_space/store_v3_Matic_fees/components/ProductRow.js";


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
          lineNumber: 22
        }
      }, _react2.default.createElement(Cell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, id), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: "h4", textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, commodity.description)), _react2.default.createElement(Cell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _web2.default.utils.fromWei(commodity.price, "ether")), _react2.default.createElement(Cell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, commodity.seller), _react2.default.createElement(Cell, { textAlign: "center", singleLine: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement(_semanticUiReact.Rating, {
        icon: "star",
        defaultRating: commodity.reviewScore,
        maxRating: 5,
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), " ", _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }), _react2.default.createElement(_routes.Link, {
        route: "/stores/" + this.props.address + "/products/" + id + "/allReviews",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { color: "yellow", size: "tiny", basic: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, "See Reviews")))), _react2.default.createElement(Cell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, commodity.totalReviews), _react2.default.createElement(Cell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, commodity.numSoldProduct), _react2.default.createElement(Cell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, !commodity.available ? "Not Available" : _react2.default.createElement(_semanticUiReact.Button, { color: "green", basic: true, onClick: this.onBuy, __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, "Buy")), _react2.default.createElement(Cell, { textAlign: "center", singleLine: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement(_routes.Link, { route: "/stores/" + this.props.address + "/products/" + id + "/review", __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { color: "teal", basic: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, "Review")))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUHJvZHVjdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIlRhYmxlIiwiUmF0aW5nIiwiSGVhZGVyIiwid2ViMyIsIlN0b3JlIiwiTGluayIsIlByb2R1Y3RSb3ciLCJvbkJ1eSIsInN0b3JlIiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJidXkiLCJpZCIsInNlbmQiLCJmcm9tIiwidmFsdWUiLCJjb21tb2RpdHkiLCJwcmljZSIsIlJvdyIsIkNlbGwiLCJkZXNjcmlwdGlvbiIsInV0aWxzIiwiZnJvbVdlaSIsInNlbGxlciIsInJldmlld1Njb3JlIiwidG90YWxSZXZpZXdzIiwibnVtU29sZFByb2R1Y3QiLCJhdmFpbGFibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFRLEFBQU8sQUFBUTs7QUFDaEMsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBVzs7OztBQUNsQixBQUFTLEFBQVk7Ozs7Ozs7SSxBQUVmOzs7Ozs7Ozs7Ozs7Ozs7b05BQ0osQSxpRkFBUSxtQkFBQTtpQkFBQTtvRUFBQTtrQkFBQTsyQ0FBQTtpQkFDQTtBQURBLHNCQUNRLHFCQUFNLE1BQUEsQUFBSyxNQURuQixBQUNRLEFBQWlCOzhCQUR6QjtxQkFFaUIsY0FBQSxBQUFLLElBRnRCLEFBRWlCLEFBQVM7O2lCQUExQjtBQUZBLGtDQUFBOzhCQUFBOzJCQUdBLEFBQU0sUUFBTixBQUFjLElBQUksTUFBQSxBQUFLLE1BQXZCLEFBQTZCLElBQTdCLEFBQWlDO3NCQUMvQixTQURvQyxBQUNwQyxBQUFTLEFBQ2Y7dUJBQU8sTUFBQSxBQUFLLE1BQUwsQUFBVyxVQUxkLEFBR0EsQUFBc0MsQUFFZDtBQUZjLEFBQzFDLGVBREk7O2lCQUhBO2lCQUFBOzhCQUFBOztBQUFBO2tCQUFBO0E7Ozs7OzZCQVNDO1VBQUEsQUFDQyxNQURELEFBQ2UsdUJBRGYsQUFDQztVQURELEFBQ00sT0FETixBQUNlLHVCQURmLEFBQ007bUJBQ2EsS0FGbkIsQUFFd0I7VUFGeEIsQUFFQyxZQUZELEFBRUM7VUFGRCxBQUVLLG1CQUZMLEFBRUssQUFFWjs7NkJBQ0csY0FBRDs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRyxjQUFELFFBQU0sV0FBTixBQUFnQjtvQkFBaEI7c0JBQUEsQUFBMEI7QUFBMUI7U0FERixBQUNFLEFBQ0EscUJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyx5Q0FBTyxJQUFSLEFBQVcsTUFBSyxXQUFoQixBQUEwQjtvQkFBMUI7c0JBQUEsQUFDRztBQURIO21CQUhKLEFBRUUsQUFDRSxBQUNhLEFBR2YsK0JBQUMsY0FBRCxRQUFNLFdBQU4sQUFBZ0I7b0JBQWhCO3NCQUFBLEFBQ0c7QUFESDt1QkFDRyxBQUFLLE1BQUwsQUFBVyxRQUFRLFVBQW5CLEFBQTZCLE9BUmxDLEFBT0UsQUFDRyxBQUFvQyxBQUV2QywyQkFBQyxjQUFELFFBQU0sV0FBTixBQUFnQjtvQkFBaEI7c0JBQUEsQUFBMEI7QUFBMUI7bUJBVkYsQUFVRSxBQUFvQyxBQUNwQyx5QkFBQyxjQUFELFFBQU0sV0FBTixBQUFnQixVQUFTLFlBQXpCO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDO2NBQUQsQUFDTyxBQUNMO3VCQUFlLFVBRmpCLEFBRTJCLEFBQ3pCO21CQUhGLEFBR2EsQUFDWDtrQkFKRjs7b0JBQUE7c0JBREYsQUFDRSxBQUtHO0FBTEg7QUFDRSxVQUZKLEFBT0U7O29CQUFBO3NCQVBGLEFBT0UsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQzs0QkFDbUIsS0FBQSxBQUFLLE1BQXZCLEFBQTZCLHlCQUE3QixBQUFpRCxLQURuRDs7b0JBQUE7c0JBQUEsQUFHRTtBQUhGO0FBQ0UseUJBRUEsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyx5Q0FBTyxPQUFSLEFBQWMsVUFBUyxNQUF2QixBQUE0QixRQUFPLE9BQW5DO29CQUFBO3NCQUFBO0FBQUE7U0F2QlIsQUFXRSxBQVFFLEFBR0UsQUFDRSxBQU1OLG1DQUFDLGNBQUQsUUFBTSxXQUFOLEFBQWdCO29CQUFoQjtzQkFBQSxBQUEwQjtBQUExQjttQkE3QkYsQUE2QkUsQUFBb0MsQUFDcEMsK0JBQUMsY0FBRCxRQUFNLFdBQU4sQUFBZ0I7b0JBQWhCO3NCQUFBLEFBQTBCO0FBQTFCO21CQTlCRixBQThCRSxBQUFvQyxBQUNwQyxpQ0FBQyxjQUFELFFBQU0sV0FBTixBQUFnQjtvQkFBaEI7c0JBQUEsQUFDRztBQURIO1VBQ0ksVUFBRCxBQUFXLFlBQVgsQUFDQyxrQ0FFQSxBQUFDLHlDQUFPLE9BQVIsQUFBYyxTQUFRLE9BQXRCLE1BQTRCLFNBQVMsS0FBckMsQUFBMEM7b0JBQTFDO3NCQUFBO0FBQUE7T0FBQSxFQW5DTixBQStCRSxBQUlJLEFBS0oseUJBQUMsY0FBRCxRQUFNLFdBQU4sQUFBZ0IsVUFBUyxZQUF6QjtvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyw4QkFBSyxvQkFBa0IsS0FBQSxBQUFLLE1BQXZCLEFBQTZCLHlCQUE3QixBQUFpRCxLQUF2RDtvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyx5Q0FBTyxPQUFSLEFBQWMsUUFBTyxPQUFyQjtvQkFBQTtzQkFBQTtBQUFBO1NBNUNWLEFBQ0UsQUF3Q0UsQUFDRSxBQUNFLEFBQ0UsQUFRWDs7Ozs7QUFsRXNCLEE7QUFvRXpCLEFBVUE7Ozs7Ozs7Ozs7a0JBQUEsQUFBZSIsImZpbGUiOiJQcm9kdWN0Um93LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tZWhyZGFkX3dvcmsvd29ya19zcGFjZS9zdG9yZV92M19NYXRpY19mZWVzIn0=