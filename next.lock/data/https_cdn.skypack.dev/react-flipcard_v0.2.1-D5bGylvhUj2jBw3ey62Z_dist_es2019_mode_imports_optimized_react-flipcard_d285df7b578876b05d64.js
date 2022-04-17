import _react from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2019,mode=imports/optimized/react.js";
import _reactDom from "/-/react-dom@v17.0.1-oZ1BXZ5opQ1DbTh7nu9r/dist=es2019,mode=imports/optimized/react-dom.js";
import _classnames from "/-/classnames@v2.3.1-AVmExr2NyGxFcH9Gb7e1/dist=es2019,mode=imports/optimized/classnames.js";
function createCommonjsModule(fn, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function(path, base) {
      return commonjsRequire(path, base === void 0 || base === null ? module.path : base);
    }
  }, fn(module, module.exports), module.exports;
}
function commonjsRequire() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var contains = function contains2(parent, child) {
  do {
    if (parent === child) {
      return true;
    }
  } while (child && (child = child.parentNode));
  return false;
};
var injectStyle = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var CSS = "\n.ReactFlipCard {\n  -webkit-perspective: 1000;\n  -moz-perspective: 1000;\n  -ms-perspective: 1000;\n  perspective: 1000;\n\n  -ms-transform: perspective(1000px);\n  -moz-transform: perspective(1000px);\n  -moz-transform-style: preserve-3d;\n  -ms-transform-style: preserve-3d;\n\n  display: inline-block;\n}\n\n/* START: Accommodating for IE */\n.ReactFlipCard--enabled.ReactFlipCard:hover .ReactFlipCard__Back,\n.ReactFlipCard--flipped .ReactFlipCard__Back {\n  -webkit-transform: rotateY(0deg);\n  -moz-transform: rotateY(0deg);\n  -ms-transform: rotateY(0deg);\n  -o-transform: rotateY(0deg);\n  transform: rotateY(0deg);\n}\n\n.ReactFlipCard--enabled.ReactFlipCard:hover .ReactFlipCard__Front,\n.ReactFlipCard--flipped .ReactFlipCard__Front {\n  -webkit-transform: rotateY(180deg);\n  -moz-transform: rotateY(180deg);\n  -ms-transform: rotateY(180deg);\n  -o-transform: rotateY(180deg);\n  transform: rotateY(180deg);\n}\n/* END: Accommodating for IE */\n\n.ReactFlipCard__Flipper {\n  -webkit-transition: 0.6s;\n  -webkit-transform-style: preserve-3d;\n  -ms-transition: 0.6s;\n\n  -moz-transition: 0.6s;\n  -moz-transform: perspective(1000px);\n  -moz-transform-style: preserve-3d;\n  -ms-transform-style: preserve-3d;\n\n  transition: 0.6s;\n  transform-style: preserve-3d;\n\n  position: relative;\n}\n\n.ReactFlipCard__Front, .ReactFlipCard__Back {\n  -webkit-backface-visibility: hidden;\n  -moz-backface-visibility: hidden;\n  -ms-backface-visibility: hidden;\n  backface-visibility: hidden;\n\n  -webkit-transition: 0.6s;\n  -webkit-transform-style: preserve-3d;\n  -webkit-transform: rotateY(0deg);\n\n  -moz-transition: 0.6s;\n  -moz-transform-style: preserve-3d;\n  -moz-transform: rotateY(0deg);\n\n  -o-transition: 0.6s;\n  -o-transform-style: preserve-3d;\n  -o-transform: rotateY(0deg);\n\n  -ms-transition: 0.6s;\n  -ms-transform-style: preserve-3d;\n  -ms-transform: rotateY(0deg);\n\n  transition: 0.6s;\n  transform-style: preserve-3d;\n  transform: rotateY(0deg);\n\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ReactFlipCard__Front {\n  -webkit-transform: rotateY(0deg);\n  -moz-transform: rotateY(0deg);\n  -ms-transform: rotateY(0deg);\n  -o-transform: rotateY(0deg);\n  z-index: 2;\n}\n\n.ReactFlipCard__Back {\n  -webkit-transform: rotateY(-180deg);\n  -moz-transform: rotateY(-180deg);\n  -ms-transform: rotateY(-180deg);\n  -o-transform: rotateY(-180deg);\n    transform: rotateY(-180deg);\n}\n\n/* vertical */\n.ReactFlipCard--vertical {\n  position: relative;\n}\n\n.ReactFlipCard--vertical .ReactFlipCard__Back {\n  -webkit-transform: rotateX(180deg);\n  -moz-transform: rotateX(180deg);\n  -ms-transform: rotateX(180deg);\n  -o-transform: rotateX(180deg);\n  transform: rotateX(180deg);\n}\n\n.ReactFlipCard--vertical .ReactFlipCard__Flipper {\n  -webkit-transform-origin: 100% 150px;\n  -moz-transform-origin: 100% 150px;\n  -ms-transform-origin: 100% 150px;\n  -o-transform-origin: 100% 150px;\n  transform-origin: 100% 150px;\n}\n\n/* START: Accommodating for IE */\n.ReactFlipCard--enabled.ReactFlipCard--vertical:hover .ReactFlipCard__Back,\n.ReactFlipCard--vertical.ReactFlipCard--flipped .ReactFlipCard__Back {\n  -webkit-transform: rotateX(0deg);\n  -moz-transform: rotateX(0deg);\n  -ms-transform: rotateX(0deg);\n  -o-transform: rotateX(0deg);\n  transform: rotateX(0deg);\n}\n\n.ReactFlipCard--enabled.ReactFlipCard--vertical:hover .ReactFlipCard__Front,\n.ReactFlipCard--vertical.ReactFlipCard--flipped .ReactFlipCard__Front {\n  -webkit-transform: rotateX(180deg);\n  -moz-transform: rotateX(180deg);\n  -ms-transform: rotateX(180deg);\n  -o-transform: rotateX(180deg);\n  transform: rotateX(180deg);\n}\n/* END: Accommodating for IE */\n";
  exports["default"] = function() {
    var style = document.getElementById("react-flipcard-style");
    if (!style) {
      style = document.createElement("style");
      style.setAttribute("id", "react-flipcard-style");
      var head = document.querySelector("head");
      head.insertBefore(style, head.firstChild);
    }
    style.innerHTML = CSS;
  };
  module.exports = exports["default"];
});
var FlipCard = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  var _react2 = _interopRequireDefault(_react);
  var _classnames2 = _interopRequireDefault(_classnames);
  var _helpersContains2 = _interopRequireDefault(contains);
  var _helpersInjectStyle2 = _interopRequireDefault(injectStyle);
  (0, _helpersInjectStyle2["default"])();
  exports["default"] = _react2["default"].createClass({
    displayName: "ReactFlipCard",
    propTypes: {
      type: _react.PropTypes.string,
      flipped: _react.PropTypes.bool,
      disabled: _react.PropTypes.bool,
      onFlip: _react.PropTypes.func,
      onKeyDown: _react.PropTypes.func,
      children: function children(props, propName, componentName) {
        var prop = props[propName];
        if (_react2["default"].Children.count(prop) !== 2) {
          return new Error("`" + componentName + "` should contain exactly two children. The first child represents the front of the card. The second child represents the back of the card.");
        }
      }
    },
    getDefaultProps: function getDefaultProps() {
      return {
        type: "horizontal",
        flipped: false,
        disabled: false
      };
    },
    getInitialState: function getInitialState() {
      return {
        hasFocus: false,
        isFlipped: this.props.flipped
      };
    },
    componentDidMount: function componentDidMount() {
      this._hideFlippedSide();
    },
    componentWillReceiveProps: function componentWillReceiveProps(newProps) {
      var _this = this;
      this._showBothSides();
      setTimeout(function() {
        _this.setState({
          isFlipped: newProps.flipped
        });
      }, 0);
    },
    componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
      if (!this.props.flipped && nextProps.flipped) {
        this.focusElement = document.activeElement;
        this.focusBack = true;
      }
      if (this.state.isFlipped !== nextState.isFlipped) {
        this.notifyFlip = true;
      }
    },
    componentDidUpdate: function componentDidUpdate() {
      if (!this.props.flipped && this.focusElement && (0, _helpersContains2["default"])((0, _reactDom.findDOMNode)(this), document.activeElement)) {
        this.focusElement.focus();
        this.focusElement = null;
      } else if (this.focusBack) {
        this.refs.back.focus();
        this.focusBack = false;
      }
      if (this.notifyFlip && typeof this.props.onFlip === "function") {
        this.props.onFlip(this.state.isFlipped);
        this.notifyFlip = false;
      }
      setTimeout(this._hideFlippedSide, 600);
    },
    handleFocus: function handleFocus() {
      if (this.props.disabled)
        return;
      this.setState({
        isFlipped: true
      });
    },
    handleBlur: function handleBlur() {
      if (this.props.disabled)
        return;
      this.setState({
        isFlipped: false
      });
    },
    handleKeyDown: function handleKeyDown(e) {
      if (typeof this.props.onKeyDown === "function") {
        this.props.onKeyDown(e);
      }
    },
    render: function render() {
      return _react2["default"].createElement("div", {
        className: (0, _classnames2["default"])({
          ReactFlipCard: true,
          "ReactFlipCard--vertical": this.props.type === "vertical",
          "ReactFlipCard--horizontal": this.props.type !== "vertical",
          "ReactFlipCard--flipped": this.state.isFlipped,
          "ReactFlipCard--enabled": !this.props.disabled
        }),
        tabIndex: 0,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onKeyDown: this.handleKeyDown
      }, _react2["default"].createElement("div", {
        className: "ReactFlipCard__Flipper"
      }, _react2["default"].createElement("div", {
        className: "ReactFlipCard__Front",
        ref: "front",
        tabIndex: -1,
        "aria-hidden": this.state.isFlipped
      }, this.props.children[0]), _react2["default"].createElement("div", {
        className: "ReactFlipCard__Back",
        ref: "back",
        tabIndex: -1,
        "aria-hidden": !this.state.isFlipped
      }, this.props.children[1])));
    },
    _showBothSides: function _showBothSides() {
      this.refs.front.style.display = "";
      this.refs.back.style.display = "";
    },
    _hideFlippedSide: function _hideFlippedSide() {
      if (this.props.disabled) {
        if (this.state.isFlipped) {
          this.refs.front.style.display = "none";
        } else {
          this.refs.back.style.display = "none";
        }
      }
    }
  });
  module.exports = exports["default"];
});
var main = FlipCard;
export default main;
