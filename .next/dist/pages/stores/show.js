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

var _Layout = require("../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _store = require("../../ethereum/store");

var _store2 = _interopRequireDefault(_store);

var _semanticUiReact = require("semantic-ui-react");

var _web = require("../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _routes = require("../../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/mehrdad/Gcoonomy/store_project/store_v3_Matic_fees/pages/stores/show.js?entry";


var StoreShow = function (_Component) {
  (0, _inherits3.default)(StoreShow, _Component);

  function StoreShow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, StoreShow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = StoreShow.__proto__ || (0, _getPrototypeOf2.default)(StoreShow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      rating: 0,
      errorMessage: "",
      loading: false,
      review: ""
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

                _this.setState({ loading: true, errorMessage: "" }); // We update errornessage to clear previous errors

                _context.prev = 2;
                _context.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                accounts = _context.sent;
                store = (0, _store2.default)(_this.props.address);
                _context.next = 9;
                return store.methods.reviewStore(_this.state.rating, _this.state.review).send({
                  from: accounts[0]
                  //When we use Metamask, we don't need to define "gas". Metamask do it automatically.
                });

              case 9:
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](2);

                _this.setState({ errorMessage: _context.t0.message });

              case 14:

                _this.setState({ review: "" });
                _this.setState({ loading: false });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 11]]);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(StoreShow, [{
    key: "renderCards",
    value: function renderCards() {
      var _props = this.props,
          manager = _props.manager,
          commoditiesCount = _props.commoditiesCount,
          bestSeller = _props.bestSeller,
          bestSellerQuantity = _props.bestSellerQuantity,
          storeName = _props.storeName,
          storeScore = _props.storeScore,
          numStoreReviews = _props.numStoreReviews;

      return _react2.default.createElement(_semanticUiReact.Card.Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react2.default.createElement(_semanticUiReact.Card, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, storeName), _react2.default.createElement(_semanticUiReact.Card.Meta, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, "Store Name"), _react2.default.createElement(_semanticUiReact.Card.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, "This store offers ", commoditiesCount, " products."))), _react2.default.createElement(_semanticUiReact.Card, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Content, { style: { overflowWrap: "break-word" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, this.props.address), _react2.default.createElement(_semanticUiReact.Card.Meta, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, "Store Address"), _react2.default.createElement(_semanticUiReact.Card.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, "The manager created this store and can create new products."))), _react2.default.createElement(_semanticUiReact.Card, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, bestSeller), _react2.default.createElement(_semanticUiReact.Card.Meta, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, "Best Seller Product"), _react2.default.createElement(_semanticUiReact.Card.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, "This store has sold ", _react2.default.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, bestSellerQuantity), " ", bestSeller, "s."))), _react2.default.createElement(_semanticUiReact.Card, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, storeScore + " / 5"), _react2.default.createElement(_semanticUiReact.Card.Meta, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, "Store Rating"), _react2.default.createElement(_semanticUiReact.Card.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, "This rating is calculated from ", _react2.default.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, numStoreReviews), " reviews.", " ", _react2.default.createElement(_routes.Link, { route: "/stores/" + this.props.address + "/reviews", __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, "Click to See All the Reviews."))))));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, _react2.default.createElement("h3", { style: { marginBottom: 15, color: "DarkCyan" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, "Store Details:"), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { floated: "right", width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, _react2.default.createElement(_semanticUiReact.Form, {
        size: "huge",
        onSubmit: this.onSubmit,
        error: !!this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, _react2.default.createElement("label", { style: { marginBottom: 15 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }, "Your Store Rating:"), _react2.default.createElement(_semanticUiReact.Rating, {
        style: { marginBottom: 15 },
        size: "massive",
        icon: "star",
        maxRating: 5,
        onRate: this.onRate,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }), _react2.default.createElement(_semanticUiReact.TextArea, {
        placeholder: "Write a Review...",
        value: this.state.review,
        onChange: function onChange(event) {
          return _this3.setState({ review: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      })), _react2.default.createElement(_semanticUiReact.Message, {
        error: true,
        header: "Oops!",
        content: this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { size: "large", primary: true, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }, "Submit!")))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      }, _react2.default.createElement(_routes.Link, { route: "/stores/" + this.props.address + "/products", __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { size: "large", primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      }, "View Products")))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
        var store, summary;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                store = (0, _store2.default)(props.query.address);
                _context2.next = 3;
                return store.methods.getStoreSummary().call();

              case 3:
                summary = _context2.sent;
                return _context2.abrupt("return", {
                  address: props.query.address,
                  //Only getInitialProps has access to props.query.address. So, we have to return it too use it in render method.
                  commoditiesCount: summary[0],
                  bestSeller: summary[1],
                  bestSellerQuantity: summary[2],
                  storeName: summary[3],
                  storeScore: summary[4],
                  numStoreReviews: summary[5]
                });

              case 5:
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
    /*
      getInitialProps has its own props which is different from the component's props. props of
      getInitialProps has a property called "query" which gives us access to token out of the url which we
      could access it before using routes.js
    */

  }]);

  return StoreShow;
}(_react.Component);

exports.default = StoreShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3N0b3Jlcy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiU3RvcmUiLCJCdXR0b24iLCJDYXJkIiwiRm9ybSIsIkdyaWQiLCJNZXNzYWdlIiwiUmF0aW5nIiwiVGV4dEFyZWEiLCJ3ZWIzIiwiTGluayIsIlN0b3JlU2hvdyIsInN0YXRlIiwicmF0aW5nIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsInJldmlldyIsIm9uUmF0ZSIsImUiLCJtYXhSYXRpbmciLCJzZXRTdGF0ZSIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJzdG9yZSIsInByb3BzIiwiYWRkcmVzcyIsIm1ldGhvZHMiLCJyZXZpZXdTdG9yZSIsInNlbmQiLCJmcm9tIiwibWVzc2FnZSIsIm1hbmFnZXIiLCJjb21tb2RpdGllc0NvdW50IiwiYmVzdFNlbGxlciIsImJlc3RTZWxsZXJRdWFudGl0eSIsInN0b3JlTmFtZSIsInN0b3JlU2NvcmUiLCJudW1TdG9yZVJldmlld3MiLCJvdmVyZmxvd1dyYXAiLCJtYXJnaW5Cb3R0b20iLCJjb2xvciIsInJlbmRlckNhcmRzIiwidGFyZ2V0IiwidmFsdWUiLCJxdWVyeSIsImdldFN0b3JlU3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFDRSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQTs7QUFFRixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFZOzs7Ozs7O0ksQUFFZjs7Ozs7Ozs7Ozs7Ozs7O2tOLEFBQ0o7Y0FBUSxBQUNFLEFBQ1I7b0JBRk0sQUFFUSxBQUNkO2VBSE0sQUFHRyxBQUNUO2MsQUFKTSxBQUlFO0FB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QUEsQUFBSyxNQUEzQyxBQUFpRDtvQkFBakQ7c0JBQUE7QUFBQTtTQWhDUixBQUNFLEFBRUUsQUFDRSxBQTRCRSxBQU9OLCtCQUFDLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLDhCQUFLLG9CQUFrQixLQUFBLEFBQUssTUFBdkIsQUFBNkIsVUFBbkM7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMseUNBQU8sTUFBUixBQUFhLFNBQVEsU0FBckI7b0JBQUE7c0JBQUE7QUFBQTtTQTlDZCxBQUNFLEFBRUUsQUF1Q0UsQUFDRSxBQUNFLEFBQ0UsQUFDRSxBQVVmOzs7Ozs2RyxBQW5LNEI7Ozs7O21CQUNyQjtBLHdCQUFRLHFCQUFNLE1BQUEsQUFBTSxNLEFBQVosQUFBa0I7O3VCQUNWLE1BQUEsQUFBTSxRQUFOLEFBQWMsa0IsQUFBZCxBQUFnQzs7bUJBQWhEO0E7OzJCQU9LLE1BQUEsQUFBTSxNQURWLEFBQ2dCLEFBQ3JCO0FBQ0E7b0NBQWtCLFFBSGIsQUFHYSxBQUFRLEFBQzFCOzhCQUFZLFFBSlAsQUFJTyxBQUFRLEFBQ3BCO3NDQUFvQixRQUxmLEFBS2UsQUFBUSxBQUM1Qjs2QkFBVyxRQU5OLEFBTU0sQUFBUSxBQUNuQjs4QkFBWSxRQVBQLEFBT08sQUFBUSxBQUNwQjttQ0FBaUIsUSxBQVJaLEFBUVksQUFBUTtBQVJwQixBQUNMOzs7Ozs7Ozs7Ozs7Ozs7QUFVSjs7Ozs7Ozs7OztBLEFBM0JzQixBQThLeEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWVocmRhZC9HY29vbm9teS9zdG9yZV9wcm9qZWN0L3N0b3JlX3YzX01hdGljX2ZlZXMifQ==