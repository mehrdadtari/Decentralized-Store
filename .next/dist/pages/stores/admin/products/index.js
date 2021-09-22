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

var _Layout = require("../../../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require("../../../../routes");

var _web = require("../../../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _store = require("../../../../ethereum/store");

var _store2 = _interopRequireDefault(_store);

var _AdminRow = require("../../../../components/AdminRow");

var _AdminRow2 = _interopRequireDefault(_AdminRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/mehrdad_work/work_space/store_v2/pages/stores/admin/products/index.js?entry";


var ProductAdmin = function (_Component) {
  (0, _inherits3.default)(ProductAdmin, _Component);

  function ProductAdmin() {
    (0, _classCallCheck3.default)(this, ProductAdmin);

    return (0, _possibleConstructorReturn3.default)(this, (ProductAdmin.__proto__ || (0, _getPrototypeOf2.default)(ProductAdmin)).apply(this, arguments));
  }

  (0, _createClass3.default)(ProductAdmin, [{
    key: "renderRows",
    value: function renderRows() {
      var _this2 = this;

      return this.props.commodities.map(function (commodity, index) {
        return _react2.default.createElement(_AdminRow2.default, {
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
      }, "Products:"), _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement(_routes.Link, { route: "/stores/" + this.props.address + "/nimda/products/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        primary: true,
        style: { position: "absolute", left: 1431, top: 80 },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, "Add Product")))), _react2.default.createElement(_semanticUiReact.Table, { celled: true, padded: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement(HeaderCell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, "ID"), _react2.default.createElement(HeaderCell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, "Name"), _react2.default.createElement(HeaderCell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, "Price (Ether)"), _react2.default.createElement(HeaderCell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, "Seller Address"), _react2.default.createElement(HeaderCell, { textAlign: "center", singleLine: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, "Rating Score"), _react2.default.createElement(HeaderCell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, "Total Ratings"), _react2.default.createElement(HeaderCell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, "Sold Items"), _react2.default.createElement(HeaderCell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, "Current Inventory"), _react2.default.createElement(HeaderCell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, "Availablity"), _react2.default.createElement(HeaderCell, { textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, "Update Product"))), _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, this.renderRows())), _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, "Found", " ", _react2.default.createElement("span", { style: { fontWeight: "bold" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 93
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

  return ProductAdmin;
}(_react.Component);

exports.default = ProductAdmin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3N0b3Jlcy9hZG1pbi9wcm9kdWN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIlRhYmxlIiwiTGF5b3V0IiwiTGluayIsIndlYjMiLCJTdG9yZSIsIkFkbWluUm93IiwiUHJvZHVjdEFkbWluIiwicHJvcHMiLCJjb21tb2RpdGllcyIsIm1hcCIsImNvbW1vZGl0eSIsImluZGV4IiwiYWRkcmVzcyIsIkhlYWRlciIsIlJvdyIsIkhlYWRlckNlbGwiLCJCb2R5IiwibWFyZ2luQm90dG9tIiwiY29sb3IiLCJwb3NpdGlvbiIsImxlZnQiLCJ0b3AiLCJyZW5kZXJSb3dzIiwiZm9udFdlaWdodCIsImNvbW1vZGl0aWVzQ291bnQiLCJxdWVyeSIsInN0b3JlIiwibWV0aG9kcyIsImdldFByb2R1Y3RzQ291bnQiLCJjYWxsIiwiYWxsIiwiQXJyYXkiLCJwYXJzZUludCIsImZpbGwiLCJlbGVtZW50IiwicHJvZHVjdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBUTs7QUFDakIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBWTs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQWM7Ozs7Ozs7OztJLEFBRWY7Ozs7Ozs7Ozs7O2lDQTZCUzttQkFDWDs7a0JBQU8sQUFBSyxNQUFMLEFBQVcsWUFBWCxBQUF1QixJQUFJLFVBQUEsQUFBQyxXQUFELEFBQVksT0FBVSxBQUN0RDsrQkFDRSxBQUFDO2VBQUQsQUFDTyxNQURQLEFBQ2M7QUFBWixZQUNBLFdBRkYsQUFFYSxBQUNYO21CQUFTLE9BQUEsQUFBSyxNQUhoQixBQUdzQixBQUNwQjtjQUpGLEFBSU07O3NCQUpOO3dCQURGLEFBQ0UsQUFPSDtBQVBHO1NBQUE7QUFGSixBQUFPLEFBVVIsT0FWUTs7Ozs2QkFZQTtVQUFBLEFBQ0MsU0FERCxBQUNtQyx1QkFEbkMsQUFDQztVQURELEFBQ1MsTUFEVCxBQUNtQyx1QkFEbkMsQUFDUztVQURULEFBQ2MsYUFEZCxBQUNtQyx1QkFEbkMsQUFDYztVQURkLEFBQzBCLE9BRDFCLEFBQ21DLHVCQURuQyxBQUMwQixBQUVqQzs7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRyxjQUFELFVBQVEsT0FBTyxFQUFFLGNBQUYsQUFBZ0IsSUFBSSxPQUFuQyxBQUFlLEFBQTJCLGNBQWMsSUFBeEQsQUFBMkQ7b0JBQTNEO3NCQUFBO0FBQUE7U0FERixBQUNFLEFBR0EsOEJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyw4QkFBSyxvQkFBa0IsS0FBQSxBQUFLLE1BQXZCLEFBQTZCLFVBQW5DO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDO2lCQUFELEFBRUU7ZUFBTyxFQUFFLFVBQUYsQUFBWSxZQUFZLE1BQXhCLEFBQThCLE1BQU0sS0FGN0MsQUFFUyxBQUF5Qzs7b0JBRmxEO3NCQUFBO0FBQUE7QUFDRSxTQVJWLEFBSUUsQUFDRSxBQUNFLEFBQ0UsQUFTTixtQ0FBQSxBQUFDLHdDQUFNLFFBQVAsTUFBYyxRQUFkO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFELGNBQVksV0FBWixBQUFzQjtvQkFBdEI7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFDQSx1QkFBQyxjQUFELGNBQVksV0FBWixBQUFzQjtvQkFBdEI7c0JBQUE7QUFBQTtTQUZGLEFBRUUsQUFDQSx5QkFBQyxjQUFELGNBQVksV0FBWixBQUFzQjtvQkFBdEI7c0JBQUE7QUFBQTtTQUhGLEFBR0UsQUFDQSxrQ0FBQyxjQUFELGNBQVksV0FBWixBQUFzQjtvQkFBdEI7c0JBQUE7QUFBQTtTQUpGLEFBSUUsQUFDQSxtQ0FBQyxjQUFELGNBQVksV0FBWixBQUFzQixVQUFTLFlBQS9CO29CQUFBO3NCQUFBO0FBQUE7U0FMRixBQUtFLEFBR0EsaUNBQUMsY0FBRCxjQUFZLFdBQVosQUFBc0I7b0JBQXRCO3NCQUFBO0FBQUE7U0FSRixBQVFFLEFBQ0Esa0NBQUMsY0FBRCxjQUFZLFdBQVosQUFBc0I7b0JBQXRCO3NCQUFBO0FBQUE7U0FURixBQVNFLEFBQ0EsK0JBQUMsY0FBRCxjQUFZLFdBQVosQUFBc0I7b0JBQXRCO3NCQUFBO0FBQUE7U0FWRixBQVVFLEFBQ0Esc0NBQUMsY0FBRCxjQUFZLFdBQVosQUFBc0I7b0JBQXRCO3NCQUFBO0FBQUE7U0FYRixBQVdFLEFBQ0EsZ0NBQUMsY0FBRCxjQUFZLFdBQVosQUFBc0I7b0JBQXRCO3NCQUFBO0FBQUE7U0FkTixBQUNFLEFBQ0UsQUFZRSxBQUdKLHFDQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQU87QUFBUDtBQUFBLGNBakNKLEFBZ0JFLEFBaUJFLEFBQU8sQUFBSyxBQUVkLGdDQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUNRLFNBRFIsQUFHSSxxQkFBQSxjQUFBLFVBQU0sT0FBTyxFQUFFLFlBQWYsQUFBYSxBQUFjO29CQUEzQjtzQkFBQSxBQUNHO0FBREg7Y0FDRyxBQUFLLE1BSlosQUFHSSxBQUNjLEFBRWQsbUJBTkosS0FwQ0osQUFDRSxBQW1DRSxBQVdMOzs7OzsyR0EzRjRCLEE7Ozs7O21CQUNuQjtBLDBCQUFZLE1BQU0sQSxNLEFBQWxCLEFBRUY7QSx3QkFBUSxxQkFBQSxBLEFBQU0sQUFDcEI7Ozs7Ozs7dUJBSStCLE1BQUEsQUFBTSxRQUFOLEFBQWMsbUJBQWQsQUFBaUMsQTs7bUJBQTFEO0E7O3lDQUVvQixBQUFRLFVBQzFCLFNBQU4sQUFBTSxBQUFTLG1CQUFmLEFBQ0csT0FESCxBQUVHLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxPQUFVLEFBQ3ZCO3lCQUFPLE1BQUEsQUFBTSxRQUFOLEFBQWMsU0FBZCxBQUF1QixPQUE5QixBQUFPLEFBQThCLEFBQ3RDO0FBSkgsQUFLQSxpQkFMQTtBQUR3QixBOzs7Ozs7QUFBQTs7bUJBQXBCO0E7aURBY0MsRUFBRSxTQUFGLFNBQVcsYUFBWCxhQUF3QixrQkFBeEIsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXpCZ0IsQSxBQStGM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL21laHJkYWRfd29yay93b3JrX3NwYWNlL3N0b3JlX3YyIn0=