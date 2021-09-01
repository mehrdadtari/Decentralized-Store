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

var _factory = require("../ethereum/factory");

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = require("semantic-ui-react");

var _Layout = require("../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require("../routes");

var _store = require("../ethereum/store");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/mehrdad_work/work_space/store/pages/index.js?entry";


var StoreIndex = function (_Component) {
  (0, _inherits3.default)(StoreIndex, _Component);

  function StoreIndex() {
    (0, _classCallCheck3.default)(this, StoreIndex);

    return (0, _possibleConstructorReturn3.default)(this, (StoreIndex.__proto__ || (0, _getPrototypeOf2.default)(StoreIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(StoreIndex, [{
    key: "renderStores",

    //commodity.reviewScore}/{5} <br />

    //   <Card.Content extra textAlign={"right"}>
    //   <Rating
    //     floated="right"
    //     icon="star"
    //     defaultRating={3}
    //     maxRating={5}
    //     disabled
    //   />
    // </Card.Content>

    //   <Container textAlign="left">
    //   {this.props.storeNames[index]}
    // </Container>
    // <Container textAlign="right">
    //   <Rating icon="star" defaultRating={3} maxRating={5} disabled />
    // </Container>

    value: function renderStores() {
      var _this2 = this;

      var items = this.props.stores.map(function (address, index) {
        return _react2.default.createElement(_semanticUiReact.Card, { fluid: true, key: index, __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          }
        }, _react2.default.createElement(_semanticUiReact.Card.Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          }
        }, _react2.default.createElement(_semanticUiReact.Card.Header, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          }
        }, _react2.default.createElement(_semanticUiReact.Container, { textAlign: "left", __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        }, _this2.props.storeNames[index]), _react2.default.createElement(_semanticUiReact.Header, { floated: "right", __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          }
        }, _react2.default.createElement(_semanticUiReact.Rating, {
          size: "huge",
          icon: "star",
          defaultRating: _this2.props.storeRatings[index],
          maxRating: 5,
          disabled: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          }
        }))), _react2.default.createElement(_semanticUiReact.Card.Meta, { style: { marginTop: 5 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          }
        }, address), _react2.default.createElement(_semanticUiReact.Card.Description, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          }
        }, _react2.default.createElement(_routes.Link, { route: "/stores/" + address, __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          }
        }, _react2.default.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          }
        }, "View Store")))));
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, items);
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, "Open Stores:"), _react2.default.createElement(_routes.Link, { route: "/stores/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        style: { marginLeft: 15 },
        floated: "right",
        content: "Create Store",
        icon: "add circle",
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      })))), _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, this.renderStores()));
    }
  }], [{
    key: "getInitialProps",

    /*
    async componentDidMount() {
      const campaigns = await factory.methods.getDeployedCampaigns().call();
      console.log(campaigns);
    }
    In next.js, we have server side rendering which cannot execute componentDidMount() life cycle method.
    Instead, we use another life cycle method called getInitialProps() which is specific to next.js.
    */
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var stores, storesCount, storeList, storeDetails, storeNames, storeRatings;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getDeployedStores().call();

              case 2:
                stores = _context.sent;
                storesCount = stores.length;
                _context.next = 6;
                return stores.map(function (address) {
                  return (0, _store2.default)(address);
                });

              case 6:
                storeList = _context.sent;
                _context.next = 9;
                return _promise2.default.all(Array(storesCount).fill().map(function (element, index) {
                  return storeList[index].methods.getStoreSummary().call();
                }));

              case 9:
                storeDetails = _context.sent;
                storeNames = storeDetails.map(function (myStores) {
                  return myStores[4];
                });
                storeRatings = storeDetails.map(function (myStores) {
                  return myStores[5];
                });
                return _context.abrupt("return", { stores: stores, storeNames: storeNames, storeRatings: storeRatings });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return StoreIndex;
}(_react.Component);
//In render() method, primary is equivalent to primary="true"
//Card.Group and Button are components from semantic-ui-react.
//NOTICE!: The semantic-ui-react documentation gives a wrong href for css file!
/*
  All the JSX code written inside <Layout> tag is passed to Layout component as
  props.children property.
*/
/*
  In order to make "create campaign" button to appear on the right side, we have to 
  add floated="right" property to Button tag and also render Button before {this.renderCampaigns()}.
*/

exports.default = StoreIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmFjdG9yeSIsIkNhcmQiLCJCdXR0b24iLCJSYXRpbmciLCJDb250YWluZXIiLCJIZWFkZXIiLCJMYXlvdXQiLCJMaW5rIiwiU3RvcmUiLCJTdG9yZUluZGV4IiwiaXRlbXMiLCJwcm9wcyIsInN0b3JlcyIsIm1hcCIsImFkZHJlc3MiLCJpbmRleCIsInN0b3JlTmFtZXMiLCJzdG9yZVJhdGluZ3MiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwicmVuZGVyU3RvcmVzIiwibWV0aG9kcyIsImdldERlcGxveWVkU3RvcmVzIiwiY2FsbCIsInN0b3Jlc0NvdW50IiwibGVuZ3RoIiwic3RvcmVMaXN0IiwiYWxsIiwiQXJyYXkiLCJmaWxsIiwiZWxlbWVudCIsImdldFN0b3JlU3VtbWFyeSIsInN0b3JlRGV0YWlscyIsIm15U3RvcmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBUyxBQUFNLEFBQVEsQUFBUSxBQUFXOztBQUMxQyxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFZOztBQUNyQixBQUFPLEFBQVc7Ozs7Ozs7OztJLEFBRVo7Ozs7Ozs7Ozs7U0F1Q0o7O0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OzttQ0FFZTttQkFDYjs7VUFBTSxhQUFRLEFBQUssTUFBTCxBQUFXLE9BQVgsQUFBa0IsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFDdEQ7K0JBQ0UsQUFBQyx1Q0FBSyxPQUFOLE1BQVksS0FBWixBQUFpQjtzQkFBakI7d0JBQUEsQUFDRTtBQURGO1NBQUEsa0JBQ0csY0FBRCxzQkFBQSxBQUFNOztzQkFBTjt3QkFBQSxBQUNF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