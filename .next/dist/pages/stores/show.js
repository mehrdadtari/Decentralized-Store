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

var _jsxFileName = "/Users/mehrdad_work/work_space/store/pages/stores/show.js?entry";


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

                _this.setState({ loading: true, errorMessage: "" }); // We update errornessage to clear previous errors

                _context.prev = 2;
                _context.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                accounts = _context.sent;
                store = (0, _store2.default)(_this.props.address);
                _context.next = 9;
                return store.methods.reviewStore(_this.state.rating).send({
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

                _this.setState({ loading: false });

              case 15:
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
          lineNumber: 75
        }
      }, _react2.default.createElement(_semanticUiReact.Card, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, storeName), _react2.default.createElement(_semanticUiReact.Card.Meta, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, "Store Name"), _react2.default.createElement(_semanticUiReact.Card.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, "This store offers ", commoditiesCount, " products."))), _react2.default.createElement(_semanticUiReact.Card, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Content, { style: { overflowWrap: "break-word" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, manager), _react2.default.createElement(_semanticUiReact.Card.Meta, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, "Address of Manager"), _react2.default.createElement(_semanticUiReact.Card.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, "The manager created this store and can create new products."))), _react2.default.createElement(_semanticUiReact.Card, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, bestSeller), _react2.default.createElement(_semanticUiReact.Card.Meta, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, "Best Seller Product"), _react2.default.createElement(_semanticUiReact.Card.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, "This store has sold ", _react2.default.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, bestSellerQuantity), " ", bestSeller, "s."))), _react2.default.createElement(_semanticUiReact.Card, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, storeScore + " / 5"), _react2.default.createElement(_semanticUiReact.Card.Meta, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, "Store Rating"), _react2.default.createElement(_semanticUiReact.Card.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, "This rating is calculated from ", _react2.default.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, numStoreReviews), " reviews."))));
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, "Store Show"), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { floated: "right", width: 4, __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, _react2.default.createElement(_semanticUiReact.Form, {
        size: "huge",
        onSubmit: this.onSubmit,
        error: !!this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, _react2.default.createElement("label", { style: { marginBottom: 15 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, "Your Store Rating:"), _react2.default.createElement(_semanticUiReact.Rating, {
        size: "massive",
        icon: "star",
        maxRating: 5,
        onRate: this.onRate,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      })), _react2.default.createElement(_semanticUiReact.Message, {
        error: true,
        header: "Oops!",
        content: this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { size: "large", primary: true, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }, "Submit!")))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, _react2.default.createElement(_routes.Link, { route: "/stores/" + this.props.address + "/products", __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { size: "large", primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 155
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
                  manager: summary[1],
                  bestSeller: summary[2],
                  bestSellerQuantity: summary[3],
                  storeName: summary[4],
                  storeScore: summary[5],
                  numStoreReviews: summary[6]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3N0b3Jlcy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiU3RvcmUiLCJCdXR0b24iLCJDYXJkIiwiRm9ybSIsIkdyaWQiLCJNZXNzYWdlIiwiUmF0aW5nIiwid2ViMyIsIkxpbmsiLCJTdG9yZVNob3ciLCJzdGF0ZSIsInJhdGluZyIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJvblJhdGUiLCJlIiwibWF4UmF0aW5nIiwic2V0U3RhdGUiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwic3RvcmUiLCJwcm9wcyIsImFkZHJlc3MiLCJtZXRob2RzIiwicmV2aWV3U3RvcmUiLCJzZW5kIiwiZnJvbSIsIm1lc3NhZ2UiLCJtYW5hZ2VyIiwiY29tbW9kaXRpZXNDb3VudCIsImJlc3RTZWxsZXIiLCJiZXN0U2VsbGVyUXVhbnRpdHkiLCJzdG9yZU5hbWUiLCJzdG9yZVNjb3JlIiwibnVtU3RvcmVSZXZpZXdzIiwib3ZlcmZsb3dXcmFwIiwicmVuZGVyQ2FyZHMiLCJtYXJnaW5Cb3R0b20iLCJxdWVyeSIsImdldFN0b3JlU3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBUyxBQUFRLEFBQU0sQUFBTSxBQUFNLEFBQVM7O0FBQzVDLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQVk7Ozs7Ozs7SSxBQUVmOzs7Ozs7Ozs7Ozs7Ozs7a04sQUFDSjtjQUFRLEFBQ0UsQUFDUjtvQkFGTSxBQUVRLEFBQ2Q7ZUFITSxBQUdHLEE7QUFISCxBQUNOLGEsQUE4QkYsU0FBUyxVQUFBLEFBQUMsVUFBNkI7VUFBeEIsQUFBd0IsZUFBeEIsQUFBd0I7VUFB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QkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBLFdBQU8sT0FBTyxFQUFFLGNBQWhCLEFBQWMsQUFBZ0I7b0JBQTlCO3NCQUFBO0FBQUE7U0FERixBQUNFLEFBQ0EsdUNBQUEsQUFBQztjQUFELEFBQ08sQUFDTDtjQUZGLEFBRU8sQUFDTDttQkFIRixBQUdhLEFBQ1g7Z0JBQVEsS0FKVixBQUllOztvQkFKZjtzQkFQSixBQUtFLEFBRUUsQUFRRjtBQVJFO0FBQ0UsMkJBT0osQUFBQztlQUFELEFBRUU7Z0JBRkYsQUFFUyxBQUNQO2lCQUFTLEtBQUEsQUFBSyxNQUhoQixBQUdzQjs7b0JBSHRCO3NCQWZGLEFBZUUsQUFLQTtBQUxBO0FBQ0UsMEJBSUYsQUFBQyx5Q0FBTyxNQUFSLEFBQWEsU0FBUSxTQUFyQixNQUE2QixTQUFTLEtBQUEsQUFBSyxNQUEzQyxBQUFpRDtvQkFBakQ7c0JBQUE7QUFBQTtTQXhCUixBQUNFLEFBRUUsQUFDRSxBQW9CRSxBQU9OLCtCQUFDLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLDhCQUFLLG9CQUFrQixLQUFBLEFBQUssTUFBdkIsQUFBNkIsVUFBbkM7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMseUNBQU8sTUFBUixBQUFhLFNBQVEsU0FBckI7b0JBQUE7c0JBQUE7QUFBQTtTQXRDZCxBQUNFLEFBRUUsQUErQkUsQUFDRSxBQUNFLEFBQ0UsQUFDRSxBQVVmOzs7Ozs2RyxBQXRKNEI7Ozs7O21CQUNyQjtBLHdCQUFRLHFCQUFNLE1BQUEsQUFBTSxNLEFBQVosQUFBa0I7O3VCQUNWLE1BQUEsQUFBTSxRQUFOLEFBQWMsa0IsQUFBZCxBQUFnQzs7bUJBQWhEO0E7OzJCQU9LLE1BQUEsQUFBTSxNQURWLEFBQ2dCLEFBQ3JCO0FBQ0E7b0NBQWtCLFFBSGIsQUFHYSxBQUFRLEFBQzFCOzJCQUFTLFFBSkosQUFJSSxBQUFRLEFBQ2pCOzhCQUFZLFFBTFAsQUFLTyxBQUFRLEFBQ3BCO3NDQUFvQixRQU5mLEFBTWUsQUFBUSxBQUM1Qjs2QkFBVyxRQVBOLEFBT00sQUFBUSxBQUNuQjs4QkFBWSxRQVJQLEFBUU8sQUFBUSxBQUNwQjttQ0FBaUIsUUFUWixBQVNZLEFBQVEsQTtBQVRwQixBQUNMOzs7Ozs7Ozs7Ozs7Ozs7QUFXSjs7Ozs7Ozs7OztBQTNCc0IsQSxBQWdLeEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWVocmRhZF93b3JrL3dvcmtfc3BhY2Uvc3RvcmUifQ==