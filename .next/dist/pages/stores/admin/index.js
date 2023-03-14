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

var _Layout = require("../../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require("../../../routes");

var _web = require("../../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _store = require("../../../ethereum/store");

var _store2 = _interopRequireDefault(_store);

var _AdminRow = require("../../../components/AdminRow");

var _AdminRow2 = _interopRequireDefault(_AdminRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/mehrdad/Gcoonomy/store_project/store_v3_Membership_fees/pages/stores/admin/index.js?entry";


var ProductAdmin = function (_Component) {
  (0, _inherits3.default)(ProductAdmin, _Component);

  function ProductAdmin() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ProductAdmin);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ProductAdmin.__proto__ || (0, _getPrototypeOf2.default)(ProductAdmin)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      errorMessage: "",
      loadingAddManager: false,
      loadingRemoveManager: false,
      loadingStoreName: false,
      loading: false,
      managerAddress: "",
      storeNewName: ""
    }, _this.onAddManager = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var store, accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                _this.setState({ loadingAddManager: true, errorMessage: "" });

                _context.prev = 2;
                store = (0, _store2.default)(_this.props.address);
                _context.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context.sent;
                _context.next = 9;
                return store.methods.addManager(_this.state.managerAddress).send({
                  from: accounts[0]
                });

              case 9:
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](2);

                _this.setState({ errorMessage: _context.t0.message });

              case 14:
                _this.setState({ loadingAddManager: false });
                _this.setState({ managerAddress: "" });
                Router.pushRoute("/stores/" + _this.props.address + "/nimda");

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 11]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.onRemoveManager = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
        var store, accounts;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();

                _this.setState({ loadingRemoveManager: true, errorMessage: "" });

                _context2.prev = 2;
                store = (0, _store2.default)(_this.props.address);
                _context2.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context2.sent;
                _context2.next = 9;
                return store.methods.deleteManager(_this.state.managerAddress).send({
                  from: accounts[0]
                });

              case 9:
                _context2.next = 14;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](2);

                _this.setState({ errorMessage: _context2.t0.message });

              case 14:
                _this.setState({ loadingRemoveManager: false });
                _this.setState({ managerAddress: "" });
                Router.pushRoute("/stores/" + _this.props.address + "/nimda");

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[2, 11]]);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }(), _this.onNameChange = function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(event) {
        var store, accounts;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                event.preventDefault();

                _this.setState({ loadingStoreName: true, errorMessage: "" });

                _context3.prev = 2;
                store = (0, _store2.default)(_this.props.address);
                _context3.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context3.sent;
                _context3.next = 9;
                return store.methods.changeStoreName(_this.state.storeNewName).send({
                  from: accounts[0]
                });

              case 9:
                _context3.next = 14;
                break;

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](2);

                _this.setState({ errorMessage: _context3.t0.message });

              case 14:
                _this.setState({ loadingStoreName: false });
                _this.setState({ storeNewName: "" });
                Router.pushRoute("/stores/" + _this.props.address + "/nimda");

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, _this2, [[2, 11]]);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ProductAdmin, [{
    key: "renderCards",
    value: function renderCards() {
      var _this3 = this;

      var _props = this.props,
          commoditiesCount = _props.commoditiesCount,
          bestSeller = _props.bestSeller,
          bestSellerQuantity = _props.bestSellerQuantity,
          storeName = _props.storeName,
          storeScore = _props.storeScore,
          numStoreReviews = _props.numStoreReviews;

      return _react2.default.createElement(_semanticUiReact.Card.Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, _react2.default.createElement(_semanticUiReact.Card, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, storeName), _react2.default.createElement(_semanticUiReact.Card.Meta, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, "Store Name"), _react2.default.createElement(_semanticUiReact.Card.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, "This store offers ", commoditiesCount, " products."))), _react2.default.createElement(_semanticUiReact.Card, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Content, { style: { overflowWrap: "break-word" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, this.props.address), _react2.default.createElement(_semanticUiReact.Card.Meta, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, "Store Address"), _react2.default.createElement(_semanticUiReact.Card.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, "The authorized managers can create new products."))), _react2.default.createElement(_semanticUiReact.Card, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, bestSeller), _react2.default.createElement(_semanticUiReact.Card.Meta, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, "Best Seller Product"), _react2.default.createElement(_semanticUiReact.Card.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, "This store has sold ", _react2.default.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, bestSellerQuantity), " ", bestSeller, "s."))), _react2.default.createElement(_semanticUiReact.Card, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, storeScore + " / 5"), _react2.default.createElement(_semanticUiReact.Card.Meta, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, "Store Rating"), _react2.default.createElement(_semanticUiReact.Card.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, "This rating is calculated from ", _react2.default.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, numStoreReviews), " reviews. Click the button to see all the reviews.", _react2.default.createElement(_routes.Link, { route: "/stores/" + this.props.address + "/reviews", __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { basic: true, color: "teal", style: { marginTop: 15 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, "Reviews!")))))), _react2.default.createElement(_semanticUiReact.Card, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, "Add New Manager"), _react2.default.createElement(_semanticUiReact.Card.Meta, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, "Accessible by existing managers."), _react2.default.createElement(_semanticUiReact.Card.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, _react2.default.createElement(_semanticUiReact.Form, {
        size: "mini",
        onSubmit: this.onAddManager,
        error: !!this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }, _react2.default.createElement(_semanticUiReact.Input, {
        placeholder: "New Manager Address ...",
        value: this.state.managerAddress,
        onChange: function onChange(event) {
          return _this3.setState({ managerAddress: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      })), _react2.default.createElement(_semanticUiReact.Message, {
        error: true,
        header: "Oops!",
        content: this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loadingAddManager, __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      }, "Submit!"))))), _react2.default.createElement(_semanticUiReact.Card, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }, "Remove a Manager"), _react2.default.createElement(_semanticUiReact.Card.Meta, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }, "Accessible by existing managers."), _react2.default.createElement(_semanticUiReact.Card.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }, _react2.default.createElement(_semanticUiReact.Form, {
        size: "mini",
        onSubmit: this.onRemoveManager,
        error: !!this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }, _react2.default.createElement(_semanticUiReact.Input, {
        placeholder: "Manager Address to be Removed ...",
        value: this.state.managerAddress,
        onChange: function onChange(event) {
          return _this3.setState({ managerAddress: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      })), _react2.default.createElement(_semanticUiReact.Message, {
        error: true,
        header: "Oops!",
        content: this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loadingRemoveManager, __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }, "Submit!"))))), _react2.default.createElement(_semanticUiReact.Card, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        }
      }, "Change Store Name"), _react2.default.createElement(_semanticUiReact.Card.Meta, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        }
      }, "Accessible by existing managers."), _react2.default.createElement(_semanticUiReact.Card.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        }
      }, _react2.default.createElement(_semanticUiReact.Form, {
        size: "mini",
        onSubmit: this.onNameChange,
        error: !!this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        }
      }, _react2.default.createElement(_semanticUiReact.Input, {
        placeholder: "Enter New Name ...",
        value: this.state.storeNewName,
        onChange: function onChange(event) {
          return _this3.setState({ storeNewName: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        }
      })), _react2.default.createElement(_semanticUiReact.Message, {
        error: true,
        header: "Oops!",
        content: this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loadingStoreName, __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        }
      }, "Submit!"))))), _react2.default.createElement(_semanticUiReact.Card, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        }
      }, "Update Products"), _react2.default.createElement(_semanticUiReact.Card.Meta, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        }
      }, "See and Update Exisitng Products"), _react2.default.createElement(_semanticUiReact.Card.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        }
      }, "Click the Following button to be redirected to the product management console.", _react2.default.createElement(_routes.Link, { route: "/stores/" + this.props.address + "/nimda/products", __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { basic: true, color: "teal", style: { marginTop: 15 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        }
      }, "Redirect!")))))), _react2.default.createElement(_semanticUiReact.Card, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        }
      }, "New Product"), _react2.default.createElement(_semanticUiReact.Card.Meta, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        }
      }, "Add a new product"), _react2.default.createElement(_semanticUiReact.Card.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        }
      }, "Click the Following button to be redirected to new product management console.", _react2.default.createElement(_routes.Link, { route: "/stores/" + this.props.address + "/nimda/products/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { basic: true, color: "teal", style: { marginTop: 15 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        }
      }, "Redirect!")))))));
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        }
      }, _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        }
      }, _react2.default.createElement("h3", { style: { marginBottom: 15, color: "DarkCyan" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        }
      }, "Store Management Console --", " ", _react2.default.createElement("span", { style: { color: "cadetblue" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        }
      }, this.props.storeName), ":")), _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        }
      }, this.renderCards()));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(props) {
        var address, store, summary;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                address = props.query.address;
                store = (0, _store2.default)(address);
                _context4.next = 4;
                return store.methods.getStoreSummary().call();

              case 4:
                summary = _context4.sent;
                return _context4.abrupt("return", {
                  address: address,
                  commoditiesCount: summary[0],
                  bestSeller: summary[1],
                  bestSellerQuantity: summary[2],
                  storeName: summary[3],
                  storeScore: summary[4],
                  numStoreReviews: summary[5]
                });

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getInitialProps(_x4) {
        return _ref5.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return ProductAdmin;
}(_react.Component);

exports.default = ProductAdmin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3N0b3Jlcy9hZG1pbi9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIkNhcmQiLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiTGF5b3V0IiwiTGluayIsIndlYjMiLCJTdG9yZSIsIkFkbWluUm93IiwiUHJvZHVjdEFkbWluIiwic3RhdGUiLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nQWRkTWFuYWdlciIsImxvYWRpbmdSZW1vdmVNYW5hZ2VyIiwibG9hZGluZ1N0b3JlTmFtZSIsImxvYWRpbmciLCJtYW5hZ2VyQWRkcmVzcyIsInN0b3JlTmV3TmFtZSIsIm9uQWRkTWFuYWdlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsInN0b3JlIiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJhZGRNYW5hZ2VyIiwic2VuZCIsImZyb20iLCJtZXNzYWdlIiwiUm91dGVyIiwicHVzaFJvdXRlIiwib25SZW1vdmVNYW5hZ2VyIiwiZGVsZXRlTWFuYWdlciIsIm9uTmFtZUNoYW5nZSIsImNoYW5nZVN0b3JlTmFtZSIsImNvbW1vZGl0aWVzQ291bnQiLCJiZXN0U2VsbGVyIiwiYmVzdFNlbGxlclF1YW50aXR5Iiwic3RvcmVOYW1lIiwic3RvcmVTY29yZSIsIm51bVN0b3JlUmV2aWV3cyIsIm92ZXJmbG93V3JhcCIsIm1hcmdpblRvcCIsInRhcmdldCIsInZhbHVlIiwibWFyZ2luQm90dG9tIiwiY29sb3IiLCJyZW5kZXJDYXJkcyIsInF1ZXJ5IiwiZ2V0U3RvcmVTdW1tYXJ5IiwiY2FsbCIsInN1bW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFRLEFBQU0sQUFBTSxBQUFPOztBQUNwQyxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxB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