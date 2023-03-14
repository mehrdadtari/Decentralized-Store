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

var _ProductRow = require("../../../components/ProductRow");

var _ProductRow2 = _interopRequireDefault(_ProductRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/mehrdad/Gcoonomy/store_project/store_v3_Membership_fees/pages/stores/products/index.js?entry";


var ProductIndex = function (_Component) {
  (0, _inherits3.default)(ProductIndex, _Component);

  function ProductIndex() {
    (0, _classCallCheck3.default)(this, ProductIndex);

    return (0, _possibleConstructorReturn3.default)(this, (ProductIndex.__proto__ || (0, _getPrototypeOf2.default)(ProductIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(ProductIndex, [{
    key: "renderRows",
    value: function renderRows() {
      var _this2 = this;

      return this.props.commodities.map(function (commodity, index) {
        return _react2.default.createElement(_ProductRow2.default, {
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
      }, _react2.default.createElement(Header, { style: { marginBottom: 15, color: "DarkCyan" }, as: "h3", __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, "Products:"), _react2.default.createElement(_semanticUiReact.Table, { celled: true, padded: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement(HeaderCell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, "ID"), _react2.default.createElement(HeaderCell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, "Name"), _react2.default.createElement(HeaderCell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, "Price (ETH)"), _react2.default.createElement(HeaderCell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, "Seller Address"), _react2.default.createElement(HeaderCell, { textAlign: "center", singleLine: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, "Rating Score"), _react2.default.createElement(HeaderCell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, "Total Ratings"), _react2.default.createElement(HeaderCell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, "Sold Items"), _react2.default.createElement(HeaderCell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, "Buy"), _react2.default.createElement(HeaderCell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, "Your Rating"))), _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, this.renderRows())), _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, "Found", " ", _react2.default.createElement("span", { style: { fontWeight: "bold" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, this.props.commoditiesCount), " ", "products."));
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

  return ProductIndex;
}(_react.Component);

exports.default = ProductIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3N0b3Jlcy9wcm9kdWN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIlRhYmxlIiwiTGF5b3V0IiwiTGluayIsIndlYjMiLCJTdG9yZSIsIlByb2R1Y3RSb3ciLCJQcm9kdWN0SW5kZXgiLCJwcm9wcyIsImNvbW1vZGl0aWVzIiwibWFwIiwiY29tbW9kaXR5IiwiaW5kZXgiLCJhZGRyZXNzIiwiSGVhZGVyIiwiUm93IiwiSGVhZGVyQ2VsbCIsIkJvZHkiLCJtYXJnaW5Cb3R0b20iLCJjb2xvciIsInJlbmRlclJvd3MiLCJmb250V2VpZ2h0IiwiY29tbW9kaXRpZXNDb3VudCIsInF1ZXJ5Iiwic3RvcmUiLCJtZXRob2RzIiwiZ2V0UHJvZHVjdHNDb3VudCIsImNhbGwiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsImVsZW1lbnQiLCJwcm9kdWN0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFROztBQUNqQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFZOztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBZ0I7Ozs7Ozs7OztJLEFBRWpCOzs7Ozs7Ozs7OztpQ0E2QlM7bUJBQ1g7O2tCQUFPLEFBQUssTUFBTCxBQUFXLFlBQVgsQUFBdUIsSUFBSSxVQUFBLEFBQUMsV0FBRCxBQUFZLE9BQVUsQUFDdEQ7K0JBQ0UsQUFBQztlQUFELEFBQ08sTUFEUCxBQUNjO0FBQVosWUFDQSxXQUZGLEFBRWEsQUFDWDttQkFBUyxPQUFBLEFBQUssTUFIaEIsQUFHc0IsQUFDcEI7Y0FKRixBQUlNOztzQkFKTjt3QkFERixBQUNFLEFBT0g7QUFQRztTQUFBO0FBRkosQUFBTyxBQVVSLE9BVlE7Ozs7NkJBWUE7VUFBQSxBQUNDLFNBREQsQUFDbUMsdUJBRG5DLEFBQ0M7VUFERCxBQUNTLE1BRFQsQUFDbUMsdUJBRG5DLEFBQ1M7VUFEVCxBQUNjLGFBRGQsQUFDbUMsdUJBRG5DLEFBQ2M7VUFEZCxBQUMwQixPQUQxQixBQUNtQyx1QkFEbkMsQUFDMEIsQUFFakM7OzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0csY0FBRCxVQUFRLE9BQU8sRUFBRSxjQUFGLEFBQWdCLElBQUksT0FBbkMsQUFBZSxBQUEyQixjQUFjLElBQXhELEFBQTJEO29CQUEzRDtzQkFBQTtBQUFBO1NBREYsQUFDRSxBQUdBLDhCQUFBLEFBQUMsd0NBQU0sUUFBUCxNQUFjLFFBQWQ7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsY0FBWSxXQUFaLEFBQXNCO29CQUF0QjtzQkFBQTtBQUFBO1NBREYsQUFDRSxBQUNBLHVCQUFDLGNBQUQsY0FBWSxXQUFaLEFBQXNCO29CQUF0QjtzQkFBQTtBQUFBO1NBRkYsQUFFRSxBQUNBLHlCQUFDLGNBQUQsY0FBWSxXQUFaLEFBQXNCO29CQUF0QjtzQkFBQTtBQUFBO1NBSEYsQUFHRSxBQUNBLGdDQUFDLGNBQUQsY0FBWSxXQUFaLEFBQXNCO29CQUF0QjtzQkFBQTtBQUFBO1NBSkYsQUFJRSxBQUNBLG1DQUFDLGNBQUQsY0FBWSxXQUFaLEFBQXNCLFVBQVMsWUFBL0I7b0JBQUE7c0JBQUE7QUFBQTtTQUxGLEFBS0UsQUFHQSxpQ0FBQyxjQUFELGNBQVksV0FBWixBQUFzQjtvQkFBdEI7c0JBQUE7QUFBQTtTQVJGLEFBUUUsQUFDQSxrQ0FBQyxjQUFELGNBQVksV0FBWixBQUFzQjtvQkFBdEI7c0JBQUE7QUFBQTtTQVRGLEFBU0UsQUFDQSwrQkFBQyxjQUFELGNBQVksV0FBWixBQUFzQjtvQkFBdEI7c0JBQUE7QUFBQTtTQVZGLEFBVUUsQUFDQSx3QkFBQyxjQUFELGNBQVksV0FBWixBQUFzQjtvQkFBdEI7c0JBQUE7QUFBQTtTQWJOLEFBQ0UsQUFDRSxBQVdFLEFBR0osa0NBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsY0FwQkosQUFJRSxBQWdCRSxBQUFPLEFBQUssQUFFZCxnQ0FBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FDUSxTQURSLEFBR0kscUJBQUEsY0FBQSxVQUFNLE9BQU8sRUFBRSxZQUFmLEFBQWEsQUFBYztvQkFBM0I7c0JBQUEsQUFDRztBQURIO2NBQ0csQUFBSyxNQUpaLEFBR0ksQUFDYyxBQUVkLG1CQU5KLEtBdkJKLEFBQ0UsQUFzQkUsQUFXTDs7Ozs7MkcsQUE5RTRCOzs7OzttQkFDbkI7QSwwQkFBWSxNLEFBQU0sTUFFcEIsQSxBQUZFO0Esd0JBRU0scUIsQUFBQSxBQUFNLEFBQ3BCOzs7Ozs7O3VCQUkrQixNQUFBLEFBQU0sUUFBTixBQUFjLG1CLEFBQWQsQUFBaUM7O21CQUExRDtBOzt5Q0FFb0IsQUFBUSxVQUMxQixTQUFOLEFBQU0sQUFBUyxtQkFBZixBQUNHLE9BREgsQUFFRyxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUN2Qjt5QkFBTyxNQUFBLEFBQU0sUUFBTixBQUFjLFNBQWQsQUFBdUIsT0FBOUIsQUFBTyxBQUE4QixBQUN0QztBQUpILEFBS0EsaUJBTEE7QSxBQUR3Qjs7Ozs7O0FBQUE7O21CQUFwQjtBO2lEQWNDLEVBQUUsU0FBRixTQUFXLGFBQVgsYUFBd0Isa0IsQUFBeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5RFgsQSxBQWxGMkI7O2tCQWtGM0IsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWVocmRhZC9HY29vbm9teS9zdG9yZV9wcm9qZWN0L3N0b3JlX3YzX01lbWJlcnNoaXBfZmVlcyJ9