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

var _Layout = require("../../../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _store = require("../../../../ethereum/store");

var _store2 = _interopRequireDefault(_store);

var _semanticUiReact = require("semantic-ui-react");

var _web = require("../../../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _routes = require("../../../../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/mehrdad_work/work_space/store_v2/pages/stores/admin/products/update.js?entry";


var ProductUpdate = function (_Component) {
  (0, _inherits3.default)(ProductUpdate, _Component);

  function ProductUpdate() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ProductUpdate);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ProductUpdate.__proto__ || (0, _getPrototypeOf2.default)(ProductUpdate)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      errorMessageInventory: "",
      errorMessageName: "",
      errorMessageSeller: "",
      errorMessagePrice: "",
      errorMessageAvailablity: "",
      loadingUpdateInventory: false,
      loadingUpdateName: false,
      loadingUpdateSeller: false,
      loadingUpdatePrice: false,
      loadingPositive: false,
      loadingNegative: false,
      updateInventory: "",
      updateName: "",
      updateSeller: "",
      updatePrice: ""
    }, _this.onInventoryChange = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var store, accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                _this.setState({ loadingUpdateInventory: true, errorMessageInventory: "" });

                _context.prev = 2;
                store = (0, _store2.default)(_this.props.address);
                _context.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context.sent;
                _context.next = 9;
                return store.methods.updateInventory(_this.props.product_id, _this.state.updateInventory).send({
                  from: accounts[0]
                });

              case 9:
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](2);

                _this.setState({ errorMessageInventory: _context.t0.message });

              case 14:
                _this.setState({ loadingUpdateInventory: false });
                _this.setState({ updateInventory: "" });
                _routes.Router.pushRoute("/stores/" + _this.props.address + "/nimda/products");

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
    }(), _this.onNameChange = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
        var store, accounts;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();

                _this.setState({ loadingUpdateName: true, errorMessageName: "" });

                _context2.prev = 2;
                store = (0, _store2.default)(_this.props.address);
                _context2.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context2.sent;
                _context2.next = 9;
                return store.methods.updateProductName(_this.props.product_id, _this.state.updateName).send({
                  from: accounts[0]
                });

              case 9:
                _context2.next = 14;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](2);

                _this.setState({ errorMessageName: _context2.t0.message });

              case 14:
                _this.setState({ loadingUpdateName: false });
                _this.setState({ updateName: "" });
                _routes.Router.pushRoute("/stores/" + _this.props.address + "/nimda/products");

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
    }(), _this.onSellerChange = function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(event) {
        var store, accounts;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                event.preventDefault();

                _this.setState({ loadingUpdateSeller: true, errorMessageSeller: "" });

                _context3.prev = 2;
                store = (0, _store2.default)(_this.props.address);
                _context3.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context3.sent;
                _context3.next = 9;
                return store.methods.updateProductSeller(_this.props.product_id, _this.state.updateSeller).send({
                  from: accounts[0]
                });

              case 9:
                _context3.next = 14;
                break;

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](2);

                _this.setState({ errorMessageSeller: _context3.t0.message });

              case 14:
                _this.setState({ loadingUpdateSeller: false });
                _this.setState({ updateSeller: "" });
                _routes.Router.pushRoute("/stores/" + _this.props.address + "/nimda/products");

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
    }(), _this.onPriceChange = function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(event) {
        var store, accounts;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                event.preventDefault();

                _this.setState({ loadingUpdatePrice: true, errorMessagePrice: "" });

                _context4.prev = 2;
                store = (0, _store2.default)(_this.props.address);
                _context4.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context4.sent;
                _context4.next = 9;
                return store.methods.updateProductPrice(_this.props.product_id, _web2.default.utils.toWei(_this.state.updatePrice, "ether")).send({
                  from: accounts[0]
                });

              case 9:
                _context4.next = 14;
                break;

              case 11:
                _context4.prev = 11;
                _context4.t0 = _context4["catch"](2);

                _this.setState({ errorMessagePrice: _context4.t0.message });

              case 14:
                _this.setState({ loadingUpdatePrice: false });
                _this.setState({ updatePrice: "" });
                _routes.Router.pushRoute("/stores/" + _this.props.address + "/nimda/products");

              case 17:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, _this2, [[2, 11]]);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }(), _this.onClickPositive = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
      var store, accounts;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _this.setState({ loadingPositive: true, errorMessageAvailablity: "" });

              _context5.prev = 1;
              store = (0, _store2.default)(_this.props.address);
              _context5.next = 5;
              return _web2.default.eth.getAccounts();

            case 5:
              accounts = _context5.sent;
              _context5.next = 8;
              return store.methods.productAvailable(_this.props.product_id, true).send({
                from: accounts[0]
              });

            case 8:
              _context5.next = 13;
              break;

            case 10:
              _context5.prev = 10;
              _context5.t0 = _context5["catch"](1);

              _this.setState({ errorMessageAvailablity: _context5.t0.message });

            case 13:
              _this.setState({ loadingPositive: false });
              _routes.Router.pushRoute("/stores/" + _this.props.address + "/nimda/products");

            case 15:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, _this2, [[1, 10]]);
    })), _this.onClickNegative = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
      var store, accounts;
      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _this.setState({ loadingNegative: true, errorMessageAvailablity: "" });

              _context6.prev = 1;
              store = (0, _store2.default)(_this.props.address);
              _context6.next = 5;
              return _web2.default.eth.getAccounts();

            case 5:
              accounts = _context6.sent;
              _context6.next = 8;
              return store.methods.productAvailable(_this.props.product_id, false).send({
                from: accounts[0]
              });

            case 8:
              _context6.next = 13;
              break;

            case 10:
              _context6.prev = 10;
              _context6.t0 = _context6["catch"](1);

              _this.setState({ errorMessageAvailablity: _context6.t0.message });

            case 13:
              _this.setState({ loadingNegative: false });
              _routes.Router.pushRoute("/stores/" + _this.props.address + "/nimda/products");

            case 15:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, _this2, [[1, 10]]);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ProductUpdate, [{
    key: "renderCards",
    value: function renderCards() {
      var _this3 = this;

      var _props$product = this.props.product,
          description = _props$product.description,
          price = _props$product.price,
          seller = _props$product.seller,
          available = _props$product.available,
          availableInventory = _props$product.availableInventory;

      return _react2.default.createElement(_semanticUiReact.Card.Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, _react2.default.createElement(_semanticUiReact.Card, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }, "Update Product Name:"), _react2.default.createElement(_semanticUiReact.Card.Meta, { style: { marginTop: 5 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }, "Current Name:", " ", _react2.default.createElement("span", { style: { color: "DimGrey", fontWeight: "bold" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }, description)), _react2.default.createElement(_semanticUiReact.Card.Description, { style: { marginTop: 15 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      }, _react2.default.createElement(_semanticUiReact.Form, {
        size: "mini",
        onSubmit: this.onNameChange,
        error: !!this.state.errorMessageName,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }, _react2.default.createElement(_semanticUiReact.Input, {
        placeholder: "Enter New Name ...",
        value: this.state.updateName,
        onChange: function onChange(event) {
          return _this3.setState({ updateName: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      })), _react2.default.createElement(_semanticUiReact.Message, {
        error: true,
        header: "Oops!",
        content: this.state.errorMessageName,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loadingUpdateName, __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }, "Submit!"))))), _react2.default.createElement(_semanticUiReact.Card, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Content, { style: { overflowWrap: "break-word" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }, "Update Seller Address:"), _react2.default.createElement(_semanticUiReact.Card.Meta, { style: { marginTop: 5 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }, "Current Seller Address:", " ", _react2.default.createElement("span", { style: { color: "DimGrey", fontWeight: "bold" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      }, seller)), _react2.default.createElement(_semanticUiReact.Card.Description, { style: { marginTop: 15 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        }
      }, _react2.default.createElement(_semanticUiReact.Form, {
        size: "mini",
        onSubmit: this.onSellerChange,
        error: !!this.state.errorMessageSeller,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        }
      }, _react2.default.createElement(_semanticUiReact.Input, {
        placeholder: "Enter New Seller Address ...",
        value: this.state.updateSeller,
        onChange: function onChange(event) {
          return _this3.setState({ updateSeller: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        }
      })), _react2.default.createElement(_semanticUiReact.Message, {
        error: true,
        header: "Oops!",
        content: this.state.errorMessageSeller,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loadingUpdateSeller, __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        }
      }, "Submit!"))))), _react2.default.createElement(_semanticUiReact.Card, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        }
      }, "Update Product's Price:"), _react2.default.createElement(_semanticUiReact.Card.Meta, { style: { marginTop: 5 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        }
      }, "Current Price:", " ", _react2.default.createElement("span", { style: { color: "DimGrey", fontWeight: "bold" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        }
      }, _web2.default.utils.fromWei(price, "ether"), " Eth", " ")), _react2.default.createElement(_semanticUiReact.Card.Description, { style: { marginTop: 15 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        }
      }, _react2.default.createElement(_semanticUiReact.Form, {
        size: "mini",
        onSubmit: this.onPriceChange,
        error: !!this.state.errorMessagePrice,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        }
      }, _react2.default.createElement(_semanticUiReact.Input, {
        placeholder: "Enter New Price ...",
        value: this.state.updatePrice,
        onChange: function onChange(event) {
          return _this3.setState({ updatePrice: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        }
      })), _react2.default.createElement(_semanticUiReact.Message, {
        error: true,
        header: "Oops!",
        content: this.state.errorMessagePrice,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loadingUpdatePrice, __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        }
      }, "Submit!"))))), _react2.default.createElement(_semanticUiReact.Card, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        }
      }, "Update Product's Inventory:"), _react2.default.createElement(_semanticUiReact.Card.Meta, { style: { marginTop: 5 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        }
      }, "Current Inventory:", " ", _react2.default.createElement("span", { style: { color: "DimGrey", fontWeight: "bold" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        }
      }, availableInventory)), _react2.default.createElement(_semanticUiReact.Card.Description, { style: { marginTop: 15 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        }
      }, _react2.default.createElement(_semanticUiReact.Form, {
        size: "mini",
        onSubmit: this.onInventoryChange,
        error: !!this.state.errorMessageInventory,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        }
      }, _react2.default.createElement(_semanticUiReact.Input, {
        placeholder: "Enter New Inventory ...",
        value: this.state.updateInventory,
        onChange: function onChange(event) {
          return _this3.setState({ updateInventory: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        }
      })), _react2.default.createElement(_semanticUiReact.Message, {
        error: true,
        header: "Oops!",
        content: this.state.errorMessageInventory,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loadingUpdateInventory, __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        }
      }, "Submit!"))))), _react2.default.createElement(_semanticUiReact.Card, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        }
      }, "Update Product's Availablity:"), _react2.default.createElement(_semanticUiReact.Card.Meta, { style: { marginTop: 5 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        }
      }, "Current State:", " ", _react2.default.createElement("span", { style: { color: "DimGrey", fontWeight: "bold" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        }
      }, available ? "Yes!" : "No!")), _react2.default.createElement(_semanticUiReact.Card.Description, { style: { marginTop: 5 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        }
      }, _react2.default.createElement(_semanticUiReact.Button.Group, {
        size: "small",
        error: !!this.state.errorMessageAvailablity,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        }
      }, _react2.default.createElement(_semanticUiReact.Message, {
        error: true,
        header: "Oops!",
        content: this.state.errorMessageAvailablity,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        }
      }), _react2.default.createElement(_semanticUiReact.Button, {
        positive: true,
        loading: this.state.loadingPositive,
        onClick: this.onClickPositive,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        }
      }, "Yes"), _react2.default.createElement(_semanticUiReact.Button.Or, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        }
      }), _react2.default.createElement(_semanticUiReact.Button, {
        negative: true,
        loading: this.state.loadingNegative,
        onClick: this.onClickNegative,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        }
      }, "No"))))));
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        }
      }, _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        }
      }, _react2.default.createElement("h3", { style: { marginBottom: 15, color: "DarkCyan" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        }
      }, "Product Management Console --", " ", _react2.default.createElement("span", { style: { color: "cadetblue" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        }
      }, this.props.product.description), ":")), _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374
        }
      }, this.renderCards()));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(props) {
        var _props$query, address, product_id, store, product;

        return _regenerator2.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _props$query = props.query, address = _props$query.address, product_id = _props$query.product_id;
                store = (0, _store2.default)(address);
                _context7.next = 4;
                return store.methods.products(product_id).call();

              case 4:
                product = _context7.sent;
                return _context7.abrupt("return", {
                  address: address,
                  product_id: product_id,
                  product: product
                });

              case 6:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function getInitialProps(_x5) {
        return _ref8.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return ProductUpdate;
}(_react.Component);

exports.default = ProductUpdate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3N0b3Jlcy9hZG1pbi9wcm9kdWN0cy91cGRhdGUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJTdG9yZSIsIkJ1dHRvbiIsIkNhcmQiLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwid2ViMyIsIlJvdXRlciIsIlByb2R1Y3RVcGRhdGUiLCJzdGF0ZSIsImVycm9yTWVzc2FnZUludmVudG9yeSIsImVycm9yTWVzc2FnZU5hbWUiLCJlcnJvck1lc3NhZ2VTZWxsZXIiLCJlcnJvck1lc3NhZ2VQcmljZSIsImVycm9yTWVzc2FnZUF2YWlsYWJsaXR5IiwibG9hZGluZ1VwZGF0ZUludmVudG9yeSIsImxvYWRpbmdVcGRhdGVOYW1lIiwibG9hZGluZ1VwZGF0ZVNlbGxlciIsImxvYWRpbmdVcGRhdGVQcmljZSIsImxvYWRpbmdQb3NpdGl2ZSIsImxvYWRpbmdOZWdhdGl2ZSIsInVwZGF0ZUludmVudG9yeSIsInVwZGF0ZU5hbWUiLCJ1cGRhdGVTZWxsZXIiLCJ1cGRhdGVQcmljZSIsIm9uSW52ZW50b3J5Q2hhbmdlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwic3RvcmUiLCJwcm9wcyIsImFkZHJlc3MiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsInByb2R1Y3RfaWQiLCJzZW5kIiwiZnJvbSIsIm1lc3NhZ2UiLCJwdXNoUm91dGUiLCJvbk5hbWVDaGFuZ2UiLCJ1cGRhdGVQcm9kdWN0TmFtZSIsIm9uU2VsbGVyQ2hhbmdlIiwidXBkYXRlUHJvZHVjdFNlbGxlciIsIm9uUHJpY2VDaGFuZ2UiLCJ1cGRhdGVQcm9kdWN0UHJpY2UiLCJ1dGlscyIsInRvV2VpIiwib25DbGlja1Bvc2l0aXZlIiwicHJvZHVjdEF2YWlsYWJsZSIsIm9uQ2xpY2tOZWdhdGl2ZSIsInByb2R1Y3QiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwic2VsbGVyIiwiYXZhaWxhYmxlIiwiYXZhaWxhYmxlSW52ZW50b3J5IiwibWFyZ2luVG9wIiwiY29sb3IiLCJmb250V2VpZ2h0IiwidGFyZ2V0IiwidmFsdWUiLCJvdmVyZmxvd1dyYXAiLCJmcm9tV2VpIiwibWFyZ2luQm90dG9tIiwicmVuZGVyQ2FyZHMiLCJxdWVyeSIsInByb2R1Y3RzIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQVMsQUFBUSxBQUFNLEFBQU0sQUFBTzs7QUFDcEMsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBYzs7Ozs7OztJLEFBRWpCOzs7Ozs7Ozs7Ozs7Ozs7ME4sQUFDSjs2QkFBUSxBQUNpQixBQUN2Qjt3QkFGTSxBQUVZLEFBQ2xCOzBCQUhNLEFBR2MsQUFDcEI7eUJBSk0sQUFJYSxBQUNuQjsrQkFMTSxBQUttQixBQUN6Qjs4QkFOTSxBQU1rQixBQUN4Qjt5QkFQTSxBQU9hLEFBQ25COzJCQVJNLEFBUWUsQUFDckI7MEJBVE0sQUFTYyxBQUNwQjt1QkFWTSxBQVVXLEFBQ2pCO3VCQVhNLEFBV1csQUFDakI7dUJBWk0sQUFZVyxBQUNqQjtrQkFiTSxBQWFNLEFBQ1o7b0JBZE0sQUFjUSxBQUNkO21CLEFBZk0sQUFlTztBQWZQLEFBQ04sYUE2QkYsQTsyRkFBb0IsaUJBQUEsQUFBTyxPQUFQO21CQUFBO3NFQUFBO29CQUFBOzZDQUFBO21CQUNsQjtzQkFBQSxBQUFNLEFBRU47O3NCQUFBLEFBQUssU0FBUyxFQUFFLHdCQUFGLEFBQTBCLE1BQU0sdUJBSDVCLEFBR2xCLEFBQWMsQUFBdUQ7O2dDQUc3RDtBQU5VLHdCQU1GLHFCQUFNLE1BQUEsQUFBSyxNQU5ULEFBTUYsQUFBaUI7Z0NBTmY7dUJBT08sY0FBQSxBQUFLLElBUFosQUFPTyxBQUFTOzttQkFBMUI7QUFQVSxvQ0FBQTtnQ0FBQTs2QkFRVixBQUFNLFFBQU4sQUFDSCxnQkFBZ0IsTUFBQSxB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QUFHSSxBQUN3QixBQUk1Qix5QkFBQyxjQUFELHNCQUFBLEFBQU0sZUFBWSxPQUFPLEVBQUUsV0FBM0IsQUFBeUIsQUFBYTtvQkFBdEM7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQsd0JBQUEsQUFBUTtjQUFSLEFBQ08sQUFDTDtlQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFGaEIsQUFFc0I7O29CQUZ0QjtzQkFBQSxBQUlFO0FBSkY7QUFDRSx5QkFHQSxBQUFDO2VBQUQsQUFFRTtnQkFGRixBQUVTLEFBQ1A7aUJBQVMsS0FBQSxBQUFLLE1BSGhCLEFBR3NCOztvQkFIdEI7c0JBSkYsQUFJRSxBQUtBO0FBTEE7QUFDRSwwQkFJRixBQUFDO2tCQUFELEFBRUU7aUJBQVMsS0FBQSxBQUFLLE1BRmhCLEFBRXNCLEFBQ3BCO2lCQUFTLEtBSFgsQUFHZ0I7O29CQUhoQjtzQkFBQTtBQUFBO0FBQ0UsU0FWSixBQVNFLEFBT0Esc0NBQUEsQUFBQyx3QkFBRCxBQUFROztvQkFBUjtzQkFoQkYsQUFnQkUsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQztrQkFBRCxBQUVFO2lCQUFTLEtBQUEsQUFBSyxNQUZoQixBQUVzQixBQUNwQjtpQkFBUyxLQUhYLEFBR2dCOztvQkFIaEI7c0JBQUE7QUFBQTtBQUNFLFNBeExkLEFBQ0UsQUF5SkUsQUFDRSxBQVVFLEFBQ0UsQUFpQkUsQUFhYjs7Ozs2QkFFUSxBQUNQOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQSxRQUFJLE9BQU8sRUFBRSxjQUFGLEFBQWdCLElBQUksT0FBL0IsQUFBVyxBQUEyQjtvQkFBdEM7c0JBQUE7QUFBQTtTQUNnQyxpQ0FEaEMsQUFHSSxxQkFBQSxjQUFBLFVBQU0sT0FBTyxFQUFFLE9BQWYsQUFBYSxBQUFTO29CQUF0QjtzQkFBQSxBQUNHO0FBREg7Y0FDRyxBQUFLLE1BQUwsQUFBVyxRQUpsQixBQUdJLEFBQ3NCLGNBTjlCLEFBQ0UsQUFDRSxBQVVGLHVCQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBQU07QUFBTjtBQUFBLGNBYkosQUFDRSxBQVlFLEFBQU0sQUFBSyxBQUdoQjs7Ozs7NkdBOVY0QixBOzs7Ozs7OytCQUNLLE0sQUFBTSxPLEFBQTlCLHVCQUFBLEEsUyxBQUFTLDBCQUFBLEEsQUFDWDtBLHdCQUFRLHFCLEFBQUEsQUFBTTs7dUJBQ0UsTUFBQSxBQUFNLFFBQU4sQUFBYyxTQUFkLEFBQXVCLFlBQXZCLEFBQW1DLEE7O21CQUFuRDtBOzsyQkFFQyxBQUVMOzhCQUZLLEFBR0w7MkIsQUFISztBQUFBLEFBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF6QnNCLEEsQUFvWDVCOztrQkFBQSxBQUFlIiwiZmlsZSI6InVwZGF0ZS5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWVocmRhZF93b3JrL3dvcmtfc3BhY2Uvc3RvcmVfdjIifQ==