webpackHotUpdate(5,{

/***/ 1524:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(1495);

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = __webpack_require__(569);

var _web = __webpack_require__(642);

var _web2 = _interopRequireDefault(_web);

var _store = __webpack_require__(1512);

var _store2 = _interopRequireDefault(_store);

var _routes = __webpack_require__(911);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3N0b3Jlcy9wcm9kdWN0cy9yZXZpZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiQnV0dG9uIiwiUmF0aW5nIiwid2ViMyIsIlN0b3JlIiwiUm91dGVyIiwic3RvcmVyYXRpbmdzIiwic3RhdGUiLCJyYXRpbmciLCJyZXZpZXciLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwib25SYXRlIiwiZSIsIm1heFJhdGluZyIsInNldFN0YXRlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsInByb3BzIiwiYWRkcmVzcyIsInN0b3JlIiwibWV0aG9kcyIsInJldmlld1Byb2R1Y3QiLCJwcm9kdWN0X2lkIiwic2VuZCIsImZyb20iLCJtZXNzYWdlIiwicHVzaFJvdXRlIiwicHJvZHVjdCIsImRlc2NyaXB0aW9uIiwidGFyZ2V0IiwidmFsdWUiLCJxdWVyeSIsInByb2R1Y3RzIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFNLEFBQU8sQUFBUyxBQUFROztBQUN2QyxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQVMsQUFBYzs7Ozs7OztJLEFBRWpCOzs7Ozs7Ozs7Ozs7Ozs7d04sQUFDSjtjQUFRLEFBQ0UsQUFDUjtjQUZNLEFBRUUsQUFDUjtvQkFITSxBQUdRLEFBQ2Q7ZUFKTSxBLEFBSUc7QUFKSCxBQUNOLGEsQUFjRixTQUFTLFVBQUEsQUFBQyxVQUE2QjtVQUF4QixBQUF3QixlQUF4QixBQUF3QjtVQUFoQixBQUFnQixrQkFBaEIsQUFBZ0IsQUFDckM7O1lBQUEsQUFBSyxTQUFTLEVBQUUsUUFBRixRQUFVLFdBQXhCLEFBQWMs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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/mehrdad_work/work_space/store_v2/pages/stores/products/review.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mehrdad_work/work_space/store_v2/pages/stores/products/review.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/stores/products/review")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5lODU4MWEyYmE0N2Q4OGE5MzgzZC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvc3RvcmVzL3Byb2R1Y3RzL3Jldmlldy5qcz84MDRhNGVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgTWVzc2FnZSwgQnV0dG9uLCBSYXRpbmcgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi8uLi8uLi9ldGhlcmV1bS93ZWIzXCI7XG5pbXBvcnQgU3RvcmUgZnJvbSBcIi4uLy4uLy4uL2V0aGVyZXVtL3N0b3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiLi4vLi4vLi4vcm91dGVzXCI7XG5cbmNsYXNzIHN0b3JlcmF0aW5ncyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHJhdGluZzogMCxcbiAgICByZXZpZXc6IFwiXCIsXG4gICAgZXJyb3JNZXNzYWdlOiBcIlwiLFxuICAgIGxvYWRpbmc6IGZhbHNlLFxuICB9O1xuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcbiAgICBjb25zdCB7IGFkZHJlc3MsIHByb2R1Y3RfaWQgfSA9IHByb3BzLnF1ZXJ5O1xuICAgIGNvbnN0IHN0b3JlID0gU3RvcmUoYWRkcmVzcyk7XG4gICAgbGV0IHByb2R1Y3QgPSBhd2FpdCBzdG9yZS5tZXRob2RzLnByb2R1Y3RzKHByb2R1Y3RfaWQpLmNhbGwoKTtcblxuICAgIHJldHVybiB7IGFkZHJlc3MsIHByb2R1Y3RfaWQsIHByb2R1Y3QgfTtcbiAgfVxuXG4gIG9uUmF0ZSA9IChlLCB7IHJhdGluZywgbWF4UmF0aW5nIH0pID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgcmF0aW5nLCBtYXhSYXRpbmcgfSk7XG4gIH07XG5cbiAgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUsIGVycm9yTWVzc2FnZTogXCJcIiB9KTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgICBjb25zdCBzdG9yZSA9IGF3YWl0IFN0b3JlKHRoaXMucHJvcHMuYWRkcmVzcyk7XG4gICAgICBhd2FpdCBzdG9yZS5tZXRob2RzXG4gICAgICAgIC5yZXZpZXdQcm9kdWN0KFxuICAgICAgICAgIHRoaXMucHJvcHMucHJvZHVjdF9pZCxcbiAgICAgICAgICB0aGlzLnN0YXRlLnJhdGluZyxcbiAgICAgICAgICB0aGlzLnN0YXRlLnJldmlld1xuICAgICAgICApXG4gICAgICAgIC5zZW5kKHtcbiAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXSxcbiAgICAgICAgICAvL1doZW4gd2UgdXNlIE1ldGFtYXNrLCB3ZSBkb24ndCBuZWVkIHRvIGRlZmluZSBcImdhc1wiLiBNZXRhbWFzayBkbyBpdCBhdXRvbWF0aWNhbGx5LlxuICAgICAgICB9KTtcblxuICAgICAgLy9BYm92ZSBjb2RlIHJlZGlyZWN0cyB1c2VyIHRvIHRoZSByb290IGRpcmVjdG9yeSAoaW5kZXguanMpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHJldmlldzogXCJcIiB9KTtcbiAgICBSb3V0ZXIucHVzaFJvdXRlKGAvc3RvcmVzLyR7dGhpcy5wcm9wcy5hZGRyZXNzfS9wcm9kdWN0c2ApO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPGgzPkNyZWF0ZSBhIFJhdGluZzwvaDM+XG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fSBlcnJvcj17ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0+XG4gICAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgICA8bGFiZWw+e3RoaXMucHJvcHMucHJvZHVjdC5kZXNjcmlwdGlvbn08L2xhYmVsPlxuICAgICAgICAgICAgPFJhdGluZ1xuICAgICAgICAgICAgICBzaXplPVwibWFzc2l2ZVwiXG4gICAgICAgICAgICAgIGljb249XCJzdGFyXCJcbiAgICAgICAgICAgICAgbWF4UmF0aW5nPXs1fVxuICAgICAgICAgICAgICBvblJhdGU9e3RoaXMub25SYXRlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5yZXZpZXd9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJldmlldzogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuXG4gICAgICAgICAgPE1lc3NhZ2UgZXJyb3IgaGVhZGVyPVwiT29wcyFcIiBjb250ZW50PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0gLz5cbiAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfT5cbiAgICAgICAgICAgIFN1Ym1pdCFcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzdG9yZXJhdGluZ3M7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9zdG9yZXMvcHJvZHVjdHMvcmV2aWV3LmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBSEE7QUFjQTtBQUFBO0FBQ0E7QUFBQTs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUpBO0FBQUE7QUFNQTtBQUNBO0FBREE7QUFOQTtBQUFBO0FBT0E7QUFDQTtBQURBO0FBUEE7QUFBQTtBQVFBO0FBT0E7QUFEQTtBQUNBO0FBQ0E7QUFoQkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBcUJBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBM0JBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQTZCQTtBQUNBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7O0FBSkE7QUFNQTtBQU5BO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFIQTs7QUFBQTtBQVFBO0FBUkE7QUFDQTtBQU9BO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBTUE7Ozs7Ozs7Ozs7OztBQXBFQTtBQUNBOztBQUNBO0FBQ0E7QUFEQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9