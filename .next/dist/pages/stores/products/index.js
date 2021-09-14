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

var _jsxFileName = "/Users/mehrdad_work/work_space/store_v2/pages/stores/products/index.js?entry";


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
      }, _react2.default.createElement(Header, { as: "h3", __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, "Products:"), _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement(_routes.Link, { route: "/stores/" + this.props.address + "/products/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        primary: true,
        style: { position: "absolute", left: 1431, top: 80 },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, "Add Product")))), _react2.default.createElement(_semanticUiReact.Table, { celled: true, padded: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement(HeaderCell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, "ID"), _react2.default.createElement(HeaderCell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, "Name"), _react2.default.createElement(HeaderCell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, "Price (Ether)"), _react2.default.createElement(HeaderCell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, "Seller Address"), _react2.default.createElement(HeaderCell, { textAlign: "center", singleLine: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, "Rating Score"), _react2.default.createElement(HeaderCell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, "Total Ratings"), _react2.default.createElement(HeaderCell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, "Sold Items"), _react2.default.createElement(HeaderCell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, "Buy"), _react2.default.createElement(HeaderCell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, "Your Rating"), _react2.default.createElement(HeaderCell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, "Available"))), _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, this.renderRows())), _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, "Found", " ", _react2.default.createElement("span", { style: { fontWeight: "bold" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 91
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3N0b3Jlcy9wcm9kdWN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIlRhYmxlIiwiTGF5b3V0IiwiTGluayIsIndlYjMiLCJTdG9yZSIsIlByb2R1Y3RSb3ciLCJQcm9kdWN0SW5kZXgiLCJwcm9wcyIsImNvbW1vZGl0aWVzIiwibWFwIiwiY29tbW9kaXR5IiwiaW5kZXgiLCJhZGRyZXNzIiwiSGVhZGVyIiwiUm93IiwiSGVhZGVyQ2VsbCIsIkJvZHkiLCJwb3NpdGlvbiIsImxlZnQiLCJ0b3AiLCJyZW5kZXJSb3dzIiwiZm9udFdlaWdodCIsImNvbW1vZGl0aWVzQ291bnQiLCJxdWVyeSIsInN0b3JlIiwibWV0aG9kcyIsImdldFByb2R1Y3RzQ291bnQiLCJjYWxsIiwiYWxsIiwiQXJyYXkiLCJwYXJzZUludCIsImZpbGwiLCJlbGVtZW50IiwicHJvZHVjdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBUTs7QUFDakIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBWTs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQWdCOzs7Ozs7Ozs7SUFFakIsQTs7Ozs7Ozs7Ozs7aUNBNkJTO21CQUNYOztrQkFBTyxBQUFLLE1BQUwsQUFBVyxZQUFYLEFBQXVCLElBQUksVUFBQSxBQUFDLFdBQUQsQUFBWSxPQUFVLEFBQ3REOytCQUNFLEFBQUM7ZUFBRCxBQUNPLE1BRFAsQUFDYztBQUFaLFlBQ0EsV0FGRixBQUVhLEFBQ1g7bUJBQVMsT0FBQSxBQUFLLE1BSGhCLEFBR3NCLEFBQ3BCO2NBSkYsQUFJTTs7c0JBSk47d0JBREYsQUFDRSxBQU9IO0FBUEc7U0FBQTtBQUZKLEFBQU8sQUFVUixPQVZROzs7OzZCQVlBO1VBQUEsQUFDQyxTQURELEFBQ21DLHVCQURuQyxBQUNDO1VBREQsQUFDUyxNQURULEFBQ21DLHVCQURuQyxBQUNTO1VBRFQsQUFDYyxhQURkLEFBQ21DLHVCQURuQyxBQUNjO1VBRGQsQUFDMEIsT0FEMUIsQUFDbUMsdUJBRG5DLEFBQzBCLEFBRWpDOzs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNHLGNBQUQsVUFBUSxJQUFSLEFBQVc7b0JBQVg7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFDQSw4QkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLDhCQUFLLG9CQUFrQixLQUFBLEFBQUssTUFBdkIsQUFBNkIsVUFBbkM7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7aUJBQUQsQUFFRTtlQUFPLEVBQUUsVUFBRixBQUFZLFlBQVksTUFBeEIsQUFBOEIsTUFBTSxLQUY3QyxBQUVTLEFBQXlDOztvQkFGbEQ7c0JBQUE7QUFBQTtBQUNFLFNBTlYsQUFFRSxBQUNFLEFBQ0UsQUFDRSxBQVNOLG1DQUFBLEFBQUMsd0NBQU0sUUFBUCxNQUFjLFFBQWQ7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsY0FBWSxXQUFaLEFBQXNCO29CQUF0QjtzQkFBQTtBQUFBO1NBREYsQUFDRSxBQUNBLHVCQUFDLGNBQUQsY0FBWSxXQUFaLEFBQXNCO29CQUF0QjtzQkFBQTtBQUFBO1NBRkYsQUFFRSxBQUNBLHlCQUFDLGNBQUQsY0FBWSxXQUFaLEFBQXNCO29CQUF0QjtzQkFBQTtBQUFBO1NBSEYsQUFHRSxBQUNBLGtDQUFDLGNBQUQsY0FBWSxXQUFaLEFBQXNCO29CQUF0QjtzQkFBQTtBQUFBO1NBSkYsQUFJRSxBQUNBLG1DQUFDLGNBQUQsY0FBWSxXQUFaLEFBQXNCLFVBQVMsWUFBL0I7b0JBQUE7c0JBQUE7QUFBQTtTQUxGLEFBS0UsQUFHQSxpQ0FBQyxjQUFELGNBQVksV0FBWixBQUFzQjtvQkFBdEI7c0JBQUE7QUFBQTtTQVJGLEFBUUUsQUFDQSxrQ0FBQyxjQUFELGNBQVksV0FBWixBQUFzQjtvQkFBdEI7c0JBQUE7QUFBQTtTQVRGLEFBU0UsQUFDQSwrQkFBQyxjQUFELGNBQVksV0FBWixBQUFzQjtvQkFBdEI7c0JBQUE7QUFBQTtTQVZGLEFBVUUsQUFDQSx3QkFBQyxjQUFELGNBQVksV0FBWixBQUFzQjtvQkFBdEI7c0JBQUE7QUFBQTtTQVhGLEFBV0UsQUFDQSxnQ0FBQyxjQUFELGNBQVksV0FBWixBQUFzQjtvQkFBdEI7c0JBQUE7QUFBQTtTQWROLEFBQ0UsQUFDRSxBQVlFLEFBR0osZ0NBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsY0EvQkosQUFjRSxBQWlCRSxBQUFPLEFBQUssQUFFZCxnQ0FBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FDUSxTQURSLEFBR0kscUJBQUEsY0FBQSxVQUFNLE9BQU8sRUFBRSxZQUFmLEFBQWEsQUFBYztvQkFBM0I7c0JBQUEsQUFDRztBQURIO2NBQ0csQUFBSyxNQUpaLEFBR0ksQUFDYyxBQUVkLG1CQU5KLEtBbENKLEFBQ0UsQUFpQ0UsQUFXTDs7Ozs7MkcsQUF6RjRCOzs7OzttQkFDbkI7QSwwQkFBWSxNLEFBQU0sTSxBQUFsQixBQUVGO0Esd0JBQVEscUJBQUEsQUFBTSxBLEFBQ3BCOzs7Ozs7O3VCQUkrQixNQUFBLEFBQU0sUUFBTixBQUFjLG1CLEFBQWQsQUFBaUM7O21CQUExRDtBOzt5Q0FFb0IsQUFBUSxVQUMxQixTQUFOLEFBQU0sQUFBUyxtQkFBZixBQUNHLE9BREgsQUFFRyxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUN2Qjt5QkFBTyxNQUFBLEFBQU0sUUFBTixBQUFjLFNBQWQsQUFBdUIsT0FBOUIsQUFBTyxBQUE4QixBQUN0QztBQUpILEFBS0EsaUJBTEE7QUFEd0IsQTs7Ozs7O0FBQUE7O21CQUFwQjtBO2lEQWNDLEVBQUUsU0FBRixTQUFXLGFBQVgsYUFBd0Isa0IsQUFBeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF6QmdCLEEsQUE2RjNCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tZWhyZGFkX3dvcmsvd29ya19zcGFjZS9zdG9yZV92MiJ9