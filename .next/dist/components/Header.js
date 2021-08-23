"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/mehrdad_work/work_space/new_store/components/Header.js";

/*
export default () => {
  return (
    <Menu style={{ marginTop: "10px" }}>
      <Menu.Item>CrowdCoin</Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item>Campaigns</Menu.Item>

        <Menu.Item>+</Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};
*/
//Menu.Item tag and Link tag have conflicting styling so we replace Menu.Item as below:

exports.default = function () {
  return _react2.default.createElement(_semanticUiReact.Menu, { style: { marginTop: "10px" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, _react2.default.createElement(_routes.Link, { route: "/", __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, _react2.default.createElement("a", { className: "item", __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "BitMall")), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: "right", __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, _react2.default.createElement(_routes.Link, { route: "/", __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, _react2.default.createElement("a", { className: "item", __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, "Stores")), _react2.default.createElement(_routes.Link, { route: "/stores/new", __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, _react2.default.createElement("a", { className: "item", __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, "+"))));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTWVudSIsIkxpbmsiLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTOztBQUNULEFBQVMsQUFBWTs7Ozs7O0FBQ3JCOzs7Ozs7Ozs7Ozs7Ozs7QUFlQSxBQUVBOztrQkFBZSxZQUFNLEFBQ25CO3lCQUNFLEFBQUMsdUNBQUssT0FBTyxFQUFFLFdBQWYsQUFBYSxBQUFhO2dCQUExQjtrQkFBQSxBQUNFO0FBREY7R0FBQSxrQkFDRSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtnQkFBWjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxPQUFHLFdBQUgsQUFBYTtnQkFBYjtrQkFBQTtBQUFBO0tBRkosQUFDRSxBQUNFLEFBR0YsNkJBQUMsY0FBRCxzQkFBQSxBQUFNLFFBQUssVUFBWCxBQUFvQjtnQkFBcEI7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUMsOEJBQUssT0FBTixBQUFZO2dCQUFaO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLE9BQUcsV0FBSCxBQUFhO2dCQUFiO2tCQUFBO0FBQUE7S0FGSixBQUNFLEFBQ0UsQUFHRiw0QkFBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtnQkFBWjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxPQUFHLFdBQUgsQUFBYTtnQkFBYjtrQkFBQTtBQUFBO0tBWlIsQUFDRSxBQUtFLEFBS0UsQUFDRSxBQUtUO0FBbEJEIiwiZmlsZSI6IkhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWVocmRhZF93b3JrL3dvcmtfc3BhY2UvbmV3X3N0b3JlIn0=