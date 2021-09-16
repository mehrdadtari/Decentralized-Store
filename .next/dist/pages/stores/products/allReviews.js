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

var _Layout = require("../../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _store = require("../../../ethereum/store");

var _store2 = _interopRequireDefault(_store);

var _semanticUiReact = require("semantic-ui-react");

var _web = require("../../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/mehrdad_work/work_space/store_v2/pages/stores/products/allReviews.js?entry";


var ProductReviews = function (_React$Component) {
  (0, _inherits3.default)(ProductReviews, _React$Component);

  function ProductReviews() {
    (0, _classCallCheck3.default)(this, ProductReviews);

    return (0, _possibleConstructorReturn3.default)(this, (ProductReviews.__proto__ || (0, _getPrototypeOf2.default)(ProductReviews)).apply(this, arguments));
  }

  (0, _createClass3.default)(ProductReviews, [{
    key: "renderCards",
    value: function renderCards() {
      var _props = this.props,
          writtenReviews = _props.writtenReviews,
          reviewersAddress = _props.reviewersAddress,
          ratings = _props.ratings;

      var items = reviewersAddress.map(function (customerAddress, index) {
        return _react2.default.createElement(_semanticUiReact.Card, { fluid: true, key: index, __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        }, _react2.default.createElement(_semanticUiReact.Card.Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }, _react2.default.createElement(_semanticUiReact.Card.Header, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          }
        }, _react2.default.createElement(_semanticUiReact.Container, { textAlign: "left", __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        }, customerAddress), _react2.default.createElement(_semanticUiReact.Header, { floated: "right", __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        }, _react2.default.createElement(_semanticUiReact.Rating, {
          size: "huge",
          icon: "star",
          defaultRating: ratings[index],
          maxRating: 5,
          disabled: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        }))), _react2.default.createElement(_semanticUiReact.Card.Meta, { style: { marginTop: 5 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }, "Customer Address"), _react2.default.createElement(_semanticUiReact.Card.Description, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        }, writtenReviews[index])));
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, items);
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement("h3", { style: { marginBottom: 15, color: "DarkCyan" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, this.props.product.description, " Reviews:")), _react2.default.createElement("div", { style: { marginTop: 20 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, this.renderCards()));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var _props$query, address, product_id, store, product, productReviews;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _props$query = props.query, address = _props$query.address, product_id = _props$query.product_id;
                store = (0, _store2.default)(address);
                _context.next = 4;
                return store.methods.products(product_id).call();

              case 4:
                product = _context.sent;
                _context.next = 7;
                return store.methods.getProductsReviews(product_id).call();

              case 7:
                productReviews = _context.sent;
                return _context.abrupt("return", {
                  address: address,
                  product: product,
                  writtenReviews: productReviews[0],
                  reviewersAddress: productReviews[1],
                  ratings: productReviews[2]
                });

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

  return ProductReviews;
}(_react2.default.Component);

exports.default = ProductReviews;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3N0b3Jlcy9wcm9kdWN0cy9hbGxSZXZpZXdzLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiU3RvcmUiLCJCdXR0b24iLCJDYXJkIiwiRm9ybSIsIkdyaWQiLCJNZXNzYWdlIiwiUmF0aW5nIiwiVGV4dEFyZWEiLCJDb250YWluZXIiLCJIZWFkZXIiLCJ3ZWIzIiwiUHJvZHVjdFJldmlld3MiLCJwcm9wcyIsIndyaXR0ZW5SZXZpZXdzIiwicmV2aWV3ZXJzQWRkcmVzcyIsInJhdGluZ3MiLCJpdGVtcyIsIm1hcCIsImN1c3RvbWVyQWRkcmVzcyIsImluZGV4IiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiY29sb3IiLCJwcm9kdWN0IiwiZGVzY3JpcHRpb24iLCJyZW5kZXJDYXJkcyIsInF1ZXJ5IiwiYWRkcmVzcyIsInByb2R1Y3RfaWQiLCJzdG9yZSIsIm1ldGhvZHMiLCJwcm9kdWN0cyIsImNhbGwiLCJnZXRQcm9kdWN0c1Jldmlld3MiLCJwcm9kdWN0UmV2aWV3cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQ0UsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBOztBQUVGLEFBQU8sQUFBVTs7Ozs7Ozs7O0ksQUFFWDs7Ozs7Ozs7Ozs7a0NBc0JVO21CQUMwQyxLQUQxQyxBQUMrQztVQUQvQyxBQUNKLHdCQURJLEFBQ0o7VUFESSxBQUNZLDBCQURaLEFBQ1k7VUFEWixBQUM4QixpQkFEOUIsQUFDOEIsQUFDMUM7O1VBQU0seUJBQVEsQUFBaUIsSUFBSSxVQUFBLEFBQUMsaUJBQUQsQUFBa0IsT0FBVSxBQUM3RDsrQkFDRSxBQUFDLHVDQUFLLE9BQU4sTUFBWSxLQUFaLEFBQWlCO3NCQUFqQjt3QkFBQSxBQUNFO0FBREY7U0FBQSxrQkFDRyxjQUFELHNCQUFBLEFBQU07O3NCQUFOO3dCQUFBLEFBQ0U7QUFERjtBQUFBLDJCQUNHLGNBQUQsc0JBQUEsQUFBTTs7c0JBQU47d0JBQUEsQUFDRTtBQURGO0FBQUEsMkJBQ0UsQUFBQyw0Q0FBVSxXQUFYLEFBQXFCO3NCQUFyQjt3QkFBQSxBQUE2QjtBQUE3QjtXQURGLEFBQ0UsQUFDQSxrQ0FBQSxBQUFDLHlDQUFPLFNBQVIsQUFBZ0I7c0JBQWhCO3dCQUFBLEFBQ0U7QUFERjsyQkFDRSxBQUFDO2dCQUFELEFBQ08sQUFDTDtnQkFGRixBQUVPLEFBQ0w7eUJBQWUsUUFIakIsQUFHaUIsQUFBUSxBQUN2QjtxQkFKRixBQUlhLEFBQ1g7b0JBTEY7O3NCQUFBO3dCQUpOLEFBQ0UsQUFFRSxBQUNFLEFBU0o7QUFUSTtBQUNFLDhCQVFMLGNBQUQsc0JBQUEsQUFBTSxRQUFLLE9BQU8sRUFBRSxXQUFwQixBQUFrQixBQUFhO3NCQUEvQjt3QkFBQTtBQUFBO1dBYkYsQUFhRSxBQUNBLHFDQUFDLGNBQUQsc0JBQUEsQUFBTTs7c0JBQU47d0JBQUEsQUFBbUI7QUFBbkI7QUFBQSwwQkFoQk4sQUFDRSxBQUNFLEFBY0UsQUFBbUIsQUFBZSxBQUl6QztBQXJCRCxBQUFjLEFBdUJkLE9BdkJjOzs2QkF1Qk4sY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUFhO0FBQWI7QUFBQSxPQUFBLEVBQVAsQUFBTyxBQUNSOzs7OzZCQUVRLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBLFFBQUksT0FBTyxFQUFFLGNBQUYsQUFBZ0IsSUFBSSxPQUEvQixBQUFXLEFBQTJCO29CQUF0QztzQkFBQSxBQUNHO0FBREg7Y0FDRyxBQUFLLE1BQUwsQUFBVyxRQURkLEFBQ3NCLGFBSDFCLEFBQ0UsQUFDRSxBQUlGLCtCQUFBLGNBQUEsU0FBSyxPQUFPLEVBQUUsV0FBZCxBQUFZLEFBQWE7b0JBQXpCO3NCQUFBLEFBQWdDO0FBQWhDO2NBUEosQUFDRSxBQU1FLEFBQWdDLEFBQUssQUFHMUM7Ozs7OzJHQTVENEIsQTs7Ozs7OzsrQkFDSyxNQUFNLEEsT0FBOUIsQSx1QixBQUFBLFMsQUFBUywwQkFBQSxBLEFBQ1g7QSx3QkFBUSxxQkFBQSxBQUFNLEE7O3VCQUNFLE1BQUEsQUFBTSxRQUFOLEFBQWMsU0FBZCxBQUF1QixZQUF2QixBLEFBQW1DOzttQkFBbkQ7QTs7dUJBQ3VCLE1BQUEsQUFBTSxRQUFOLEFBQzFCLG1CQUQwQixBQUNQLFksQUFETyxBQUUxQjs7bUJBRkc7QTs7MkJBUUMsQUFFTDsyQkFGSyxBQUdMO2tDQUFnQixlQUhYLEFBR1csQUFBZSxBQUMvQjtvQ0FBa0IsZUFKYixBQUlhLEFBQWUsQUFDakM7MkJBQVMsZUFMSixBQUtJLEFBQWUsQTtBQUxuQixBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBZHVCLGdCQUFNLEEsQUFnRW5DOztrQkFBQSxBQUFlIiwiZmlsZSI6ImFsbFJldmlld3MuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL21laHJkYWRfd29yay93b3JrX3NwYWNlL3N0b3JlX3YyIn0=