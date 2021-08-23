"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

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

var _Layout = require("../../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require("../../../routes");

var _web = require("../../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _store = require("../../../ethereum/store");

var _store2 = _interopRequireDefault(_store);

var _RequestRow = require("../../../components/RequestRow");

var _RequestRow2 = _interopRequireDefault(_RequestRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/mehrdad_work/work_space/new_store/pages/stores/products/index.js?entry";


var RequestIndex = function (_Component) {
  (0, _inherits3.default)(RequestIndex, _Component);

  function RequestIndex() {
    (0, _classCallCheck3.default)(this, RequestIndex);

    return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(RequestIndex, [{
    key: "renderRows",
    value: function renderRows() {
      var _this2 = this;

      return this.props.commodities.map(function (commodity, index) {
        return _react2.default.createElement(_RequestRow2.default, {
          key: index //key property is a default property for React that we should use whenever we are rendering a list of components.
          , commodity: commodity,
          address: _this2.props.address,
          id: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var Header = _semanticUiReact.Table.Header,
          Row = _semanticUiReact.Table.Row,
          HeaderCell = _semanticUiReact.Table.HeaderCell,
          Body = _semanticUiReact.Table.Body;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, "Products:"), _react2.default.createElement(_routes.Link, { route: "/stores/" + this.props.address + "/products/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, floated: "left", style: { marginBottom: 10 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, "Add Product"))), _react2.default.createElement(_semanticUiReact.Table, { celled: true, padded: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement(HeaderCell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, "ID"), _react2.default.createElement(HeaderCell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, "Name"), _react2.default.createElement(HeaderCell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, "Price in Ether"), _react2.default.createElement(HeaderCell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, "Seller Address"), _react2.default.createElement(HeaderCell, { textAlign: "center", singleLine: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, "Rating Score"), _react2.default.createElement(HeaderCell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, "Total Ratings"), _react2.default.createElement(HeaderCell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, "Sold Items"), _react2.default.createElement(HeaderCell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, "Buy"), _react2.default.createElement(HeaderCell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, "Your Rating"), _react2.default.createElement(HeaderCell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, "Available"))), _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, this.renderRows())), _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, "Found ", this.props.commoditiesCount, " products."));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var address, store, commoditiesCount, commodities;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = props.query.address;
                store = (0, _store2.default)(address);
                /*
                    solidity cannnot return array of struct which in this case is requests. So, instead, we get number of requests 
                    from the smart contract and loop over it to read each request.
                */

                _context.next = 4;
                return store.methods.getProductsCount().call();

              case 4:
                commoditiesCount = _context.sent;
                _context.next = 7;
                return _promise2.default.all(Array(parseInt(commoditiesCount)).fill().map(function (element, index) {
                  return store.methods.products(index).call();
                })
                /*
                  Array(requestCount).fill() creates an array with the size of requestsCount. map method fills the elements of this
                  array with the mapped values.
                  getRequestsCount returns a number inside a string, but the Array constructor expects to be passed a number, 
                  not a string. To fix this, we can use the parseInt function on requestCount before passing it into Array.
                  */
                );

              case 7:
                commodities = _context.sent;
                return _context.abrupt("return", { address: address, commodities: commodities, commoditiesCount: commoditiesCount });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RequestIndex;
}(_react.Component);

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3N0b3Jlcy9wcm9kdWN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIlRhYmxlIiwiTGF5b3V0IiwiTGluayIsIndlYjMiLCJTdG9yZSIsIlJlcXVlc3RSb3ciLCJSZXF1ZXN0SW5kZXgiLCJwcm9wcyIsImNvbW1vZGl0aWVzIiwibWFwIiwiY29tbW9kaXR5IiwiaW5kZXgiLCJhZGRyZXNzIiwiSGVhZGVyIiwiUm93IiwiSGVhZGVyQ2VsbCIsIkJvZHkiLCJtYXJnaW5Cb3R0b20iLCJyZW5kZXJSb3dzIiwiY29tbW9kaXRpZXNDb3VudCIsInF1ZXJ5Iiwic3RvcmUiLCJtZXRob2RzIiwiZ2V0UHJvZHVjdHNDb3VudCIsImNhbGwiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsImVsZW1lbnQiLCJwcm9kdWN0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFROztBQUNqQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFZOztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBZ0I7Ozs7Ozs7OztJQUVqQixBOzs7Ozs7Ozs7OztpQ0E2QlM7bUJBQ1g7O2tCQUFPLEFBQUssTUFBTCxBQUFXLFlBQVgsQUFBdUIsSUFBSSxVQUFBLEFBQUMsV0FBRCxBQUFZLE9BQVUsQUFDdEQ7K0JBQ0UsQUFBQztlQUFELEFBQ08sTUFEUCxBQUNjO0FBQVosWUFDQSxXQUZGLEFBRWEsQUFDWDttQkFBUyxPQUFBLEFBQUssTUFIaEIsQUFHc0IsQUFDcEI7Y0FKRixBQUlNOztzQkFKTjt3QkFERixBQUNFLEFBT0g7QUFQRztTQUFBO0FBRkosQUFBTyxBQVVSLE9BVlE7Ozs7NkJBWUE7VUFBQSxBQUNDLFNBREQsQUFDbUMsdUJBRG5DLEFBQ0M7VUFERCxBQUNTLE1B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