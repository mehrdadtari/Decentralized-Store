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

var _semanticUiReact = require("semantic-ui-react");

var _web = require("../../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _store = require("../../../ethereum/store");

var _store2 = _interopRequireDefault(_store);

var _routes = require("../../../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/mehrdad_work/work_space/store_v2/pages/stores/products/review.js?entry";


var storeratings = function (_Component) {
  (0, _inherits3.default)(storeratings, _Component);

  function storeratings() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, storeratings);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = storeratings.__proto__ || (0, _getPrototypeOf2.default)(storeratings)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      rating: 0,
      review: "",
      errorMessage: "",
      loading: false
    }, _this.onRate = function (e, _ref2) {
      var rating = _ref2.rating,
          maxRating = _ref2.maxRating;

      _this.setState({ rating: rating, maxRating: maxRating });
    }, _this.onSubmit = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accounts, store;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                _this.setState({ loading: true, errorMessage: "" });

                _context.prev = 2;
                _context.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                accounts = _context.sent;
                _context.next = 8;
                return (0, _store2.default)(_this.props.address);

              case 8:
                store = _context.sent;
                _context.next = 11;
                return store.methods.reviewProduct(_this.props.product_id, _this.state.rating, _this.state.review).send({
                  from: accounts[0]
                  //When we use Metamask, we don't need to define "gas". Metamask do it automatically.
                });

              case 11:
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](2);

                _this.setState({ errorMessage: _context.t0.message });

              case 16:

                _this.setState({ loading: false });
                _this.setState({ review: "" });
                _routes.Router.pushRoute("/stores/" + _this.props.address + "/products");

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 13]]);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(storeratings, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, "Create a Rating"), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, this.props.product.description), _react2.default.createElement(_semanticUiReact.Rating, {
        size: "massive",
        icon: "star",
        maxRating: 5,
        onRate: this.onRate,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.review,
        onChange: function onChange(event) {
          return _this3.setState({ review: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: "Oops!", content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, "Submit!")));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
        var _props$query, address, product_id, store, product;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _props$query = props.query, address = _props$query.address, product_id = _props$query.product_id;
                store = (0, _store2.default)(address);
                _context2.next = 4;
                return store.methods.products(product_id).call();

              case 4:
                product = _context2.sent;
                return _context2.abrupt("return", { address: address, product_id: product_id, product: product });

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x2) {
        return _ref4.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return storeratings;
}(_react.Component);

exports.default = storeratings;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3N0b3Jlcy9wcm9kdWN0cy9yZXZpZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiQnV0dG9uIiwiUmF0aW5nIiwid2ViMyIsIlN0b3JlIiwiUm91dGVyIiwic3RvcmVyYXRpbmdzIiwic3RhdGUiLCJyYXRpbmciLCJyZXZpZXciLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwib25SYXRlIiwiZSIsIm1heFJhdGluZyIsInNldFN0YXRlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsInByb3BzIiwiYWRkcmVzcyIsInN0b3JlIiwibWV0aG9kcyIsInJldmlld1Byb2R1Y3QiLCJwcm9kdWN0X2lkIiwic2VuZCIsImZyb20iLCJtZXNzYWdlIiwicHVzaFJvdXRlIiwicHJvZHVjdCIsImRlc2NyaXB0aW9uIiwidGFyZ2V0IiwidmFsdWUiLCJxdWVyeSIsInByb2R1Y3RzIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFNLEFBQU8sQUFBUyxBQUFROztBQUN2QyxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQVMsQUFBYzs7Ozs7OztJLEFBRWpCOzs7Ozs7Ozs7Ozs7Ozs7d04sQUFDSjtjQUFRLEFBQ0UsQUFDUjtjQUZNLEFBRUUsQUFDUjtvQkFITSxBQUdRLEFBQ2Q7ZUFKTSxBLEFBSUc7QUFKSCxBQUNOLGEsQUFjRixTQUFTLFVBQUEsQUFBQyxVQUE2QjtVQUF4QixBQUF3QixlQUF4QixBQUF3QjtVQUFoQixBQUFnQixrQkFBaEIsQUFBZ0IsQUFDckM7O1lBQUEsQUFBSyxTQUFTLEVBQUUsUUFBRixRQUFVLFdBQXhCLEFBQWMsQUFDZjtBLGFBRUQsQTsyRkFBVyxpQkFBQSxBQUFPLE9BQVA7c0JBQUE7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQ1Q7c0JBQUEsQUFBTSxBQUVOOztzQkFBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVcsTUFBTSxjQUh0QixBQUdULEFBQWMsQUFBK0I7O2dDQUhwQztnQ0FBQTt1QkFNZ0IsY0FBQSxBQUFLLElBTnJCLEFBTWdCLEFBQVM7O21CQUExQjtBQU5DLG9DQUFBO2dDQUFBO3VCQU9hLHFCQUFNLE1BQUEsQUFBSyxNQVB4QixBQU9hLEFBQWlCOzttQkFBL0I7QUFQQyxpQ0FBQTtnQ0FBQTs2QkFRRCxBQUFNLFFBQU4sQUFDSCxjQUNDLE1BQUEsQUFBSyxNQUZILEFBRVMsWUFDWCxNQUFBLEFBQUssTUFISCxBQUdTLFFBQ1gsTUFBQSxBQUFLLE1BSkgsQUFJUyxRQUpULEFBTUg7d0JBQ08sU0FBQSxBQUFTLEFBQ2Y7QUFoQkcsQUFRRCxBQU1FO0FBQUEsQUFDSixpQkFQRTs7bUJBUkM7Z0NBQUE7QUFBQTs7bUJBQUE7Z0NBQUE7Z0RBcUJQOztzQkFBQSxBQUFLLFNBQVMsRUFBRSxjQUFjLFlBckJ2QixBQXFCUCxBQUFjLEFBQW9COzttQkFHcEM7O3NCQUFBLEFBQUssU0FBUyxFQUFFLFNBQWhCLEFBQWMsQUFBVyxBQUN6QjtzQkFBQSxBQUFLLFNBQVMsRUFBRSxRQUFoQixBQUFjLEFBQVUsQUFDeEI7K0JBQUEsQUFBTyx1QkFBcUIsTUFBQSxBQUFLLE1BQWpDLEFBQXVDLFVBMUI5Qjs7bUJBQUE7bUJBQUE7Z0NBQUE7O0FBQUE7aUNBQUE7QTs7Ozs7Ozs7Ozs2QkE2QkY7bUJBQ1A7OzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLG9DQUFBLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDtvQkFBbkQ7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFBUTtBQUFSO0FBQUEsY0FBUSxBQUFLLE1BQUwsQUFBVyxRQURyQixBQUNFLEFBQTJCLEFBQzNCLDhCQUFBLEFBQUM7Y0FBRCxBQUNPLEFBQ0w7Y0FGRixBQUVPLEFBQ0w7bUJBSEYsQUFHYSxBQUNYO2dCQUFRLEtBSlYsQUFJZTs7b0JBSmY7c0JBRkYsQUFFRSxBQU1BO0FBTkE7QUFDRSwwQkFLRixBQUFDO2VBQ1EsS0FBQSxBQUFLLE1BRGQsQUFDb0IsQUFDbEI7a0JBQVUsa0JBQUEsQUFBQyxPQUFEO2lCQUNSLE9BQUEsQUFBSyxTQUFTLEVBQUUsUUFBUSxNQUFBLEFBQU0sT0FEdEIsQUFDUixBQUFjLEFBQXVCO0FBSHpDOztvQkFBQTtzQkFUSixBQUNFLEFBUUUsQUFRRjtBQVJFO0FBQ0UsMkJBT0osQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixTQUFRLFNBQVMsS0FBQSxBQUFLLE1BQTVDLEFBQWtEO29CQUFsRDtzQkFqQkYsQUFpQkUsQUFDQTtBQURBOzBCQUNBLEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFTLEtBQUEsQUFBSyxNQUE5QixBQUFvQztvQkFBcEM7c0JBQUE7QUFBQTtTQXJCTixBQUNFLEFBRUUsQUFrQkUsQUFNUDs7Ozs7NkdBckU0QixBOzs7Ozs7OytCQUNLLE1BQU0sQSxPQUE5QixBLHVCLEFBQUEsU0FBUyxBLDBCQUFBLEEsQUFDWDtBLHdCQUFRLHFCQUFBLEFBQU0sQTs7dUJBQ0EsTUFBQSxBQUFNLFFBQU4sQUFBYyxTQUFkLEFBQXVCLFlBQVksQSxBQUFuQzs7bUJBQWhCO0E7a0RBRUcsRUFBRSxTQUFGLFNBQVcsWUFBWCxZQUF1QixTQUF2QixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYmdCLEEsQUFnRjNCOztrQkFBQSxBQUFlIiwiZmlsZSI6InJldmlldy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWVocmRhZF93b3JrL3dvcmtfc3BhY2Uvc3RvcmVfdjIifQ==