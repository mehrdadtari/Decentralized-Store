"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Header = require("./Header");

var _Header2 = _interopRequireDefault(_Header);

var _semanticUiReact = require("semantic-ui-react");

var _head = require("next/dist/lib/head.js");

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/mehrdad/Gcoonomy/store_project/store_v3_Matic_fees/components/Layout.js";

/*
    Head module creates <Head> tag that puts everything inside it to the header of
    HTML file.
*/

exports.default = function (props) {
  return _react2.default.createElement(_semanticUiReact.Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement("link", {
    async: true,
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  })), _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), props.children);
};

//Functional components get called with props argument.
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiSGVhZGVyIiwiQ29udGFpbmVyIiwiSGVhZCIsInByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUzs7QUFDVCxBQUFPOzs7Ozs7OztBQUNQLEFBS0E7Ozs7O2tCQUFlLFVBQUEsQUFBQyxPQUFVLEFBQ3hCO3lCQUNFLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUE7V0FDRSxBQUVFO1NBRkYsQUFFTSxBQUNKO1VBSEYsQUFHTzs7Z0JBSFA7a0JBRkosQUFDRSxBQUNFLEFBTUY7QUFORTtBQUNFLHVCQUtKLEFBQUM7O2dCQUFEO2tCQVJGLEFBUUUsQUFDQztBQUREO0FBQUEsWUFUSixBQUNFLEFBU1MsQUFHWjtBQWREOztBQWdCQSIsImZpbGUiOiJMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21laHJkYWQvR2Nvb25vbXkvc3RvcmVfcHJvamVjdC9zdG9yZV92M19NYXRpY19mZWVzIn0=