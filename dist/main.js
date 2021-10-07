/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _components_Display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _components_Controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);




class App extends _core_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  setup() {
		this.state = {
			displayedNumber: 0,
			firstOperand: undefined,
			secondOperand: undefined,
			recentOperand: 0,
			operator: undefined,
			isDot: false,
			clearButtonText: 'AC',
		};
	}

	template() {
		return `
      <header><h1>Calculator</h1></header>
      <main>
        <div data-component="display" class="display"></div>
        <div data-component="controller"></div>
      </main>
      <footer>
        <h5>Made with ☕️ by <a href="https://github.com/srngch">srngch</a></h5>
      </footer>
    `;
	}

	mount() {
		const {
			displayNumber,
			handleNumberButton,
			handleDotButton,
			handleOperatorButton,
			handleResultButton,
			handleClearButton,
			toggleSignButton,
			handlePercentButton,
		} = this;
		const { displayedNumber, clearButtonText } = this.state;
		const display = this.target.querySelector('[data-component="display"]');
		const controller = this.target.querySelector(
			'[data-component="controller"]'
		);

		new _components_Display_js__WEBPACK_IMPORTED_MODULE_1__["default"](display, {
			displayedNumber,
			displayNumber: displayNumber.bind(this),
		});

		new _components_Controller_js__WEBPACK_IMPORTED_MODULE_2__["default"](controller, {
			clearButtonText,
			handleClearButton: handleClearButton.bind(this),
			toggleSignButton: toggleSignButton.bind(this),
			handlePercentButton: handlePercentButton.bind(this),
			handleNumberButton: handleNumberButton.bind(this),
			handleDotButton: handleDotButton.bind(this),
			handleOperatorButton: handleOperatorButton.bind(this),
			handleResultButton: handleResultButton.bind(this),
		});
		console.table(this.state);
	}

	setEvent() {
		document.addEventListener('keydown', (e) => {
			if (e.key === 'Shift' || e.key === ' ') {
				return;
			}
			console.dir(e);
			const {
				handleClearButton,
				toggleSignButton,
				handlePercentButton,
				handleNumberButton,
				handleDotButton,
				handleOperatorButton,
				handleResultButton,
			} = this;
			if (isNaN(e.key)) {
				const executes = {
					Escape: handleClearButton.bind(this),
					Enter: handleResultButton.bind(this),
					'+': handleOperatorButton.bind(this),
					'-': handleOperatorButton.bind(this),
					'*': handleOperatorButton.bind(this),
					'/': handleOperatorButton.bind(this),
					'%': handlePercentButton.bind(this),
					',': toggleSignButton.bind(this),
					'.': handleDotButton.bind(this),
				};
				const params = {
					'+': 'plus',
					'-': 'minus',
					'*': 'multiply',
					'/': 'divide',
				};
				executes[e.key](params[e.key]);
				return;
			}

			handleNumberButton.bind(this)(Number(e.key));
		});
	}

	displayNumber(newNumber) {
		this.setState({
			displayedNumber: newNumber,
		});
	}

	handleNumberButton(selectedNumber) {
		const { firstOperand,secondOperand,  recentOperand, operator, isDot } = this.state;
		let number;
		let prevNumber =
			operator && secondOperand === undefined ? 0 : recentOperand;

		if (!isDot) {
			number =
				prevNumber === 0
					? selectedNumber
					: prevNumber * 10 + selectedNumber;
		} else {
      const string = prevNumber.toString();
      const pow = string.indexOf('.') === -1 ? 1 : string.length - string.indexOf('.');

      console.log(prevNumber.toString(), prevNumber, pow);
      console.log(
				prevNumber.toString().length,
				prevNumber.toString().indexOf('.')
			);

			selectedNumber /= (10 ** pow);
			number =
				prevNumber === 0 ? selectedNumber : prevNumber + selectedNumber;
		}

    this.setState({
			displayedNumber: number,
			firstOperand: operator ? firstOperand : number,
			secondOperand: operator ? number : secondOperand,
			recentOperand: number,
			clearButtonText: 'C',
		});
	}

	handleDotButton() {
		this.setState({
			displayedNumber: this.state.displayedNumber + '.',
			isDot: true,
		});
	}

	handleOperatorButton(selectedOperator) {
		const { firstOperand, secondOperand } = this.state;

		this.setState({
			operator: selectedOperator,
			isDot: false,
		});
		if (firstOperand && secondOperand) {
			this.handleResultButton();
		}
	}

	handleResultButton() {
		this.setState({
			displayedNumber: this._getResult(),
			firstOperand: this._getResult(),
			secondOperand: undefined,
      
		});
	}

	_getResult() {
		const { firstOperand, secondOperand, recentOperand, operator } = this.state;
		const first = firstOperand ? firstOperand : 0;
		const second = secondOperand ? secondOperand : recentOperand;
		let result = undefined;

		switch (operator) {
			case 'plus':
				result = first + second;
				break;
			case 'minus':
				result = first - second;
				break;
			case 'multiply':
				result = first * second;
				break;
			case 'divide':
				result = first / second;
				break;
			default:
				result = first;
				break;
		}
		return result;
	}

	// TODO: Add a operation after After getting the results
	handleClearButton() {
		const { displayedNumber, firstOperand, secondOperand, operator } =
			this.state;
		let newDisplayedNumber = displayedNumber;
		let newFirstOperand = firstOperand;
		let newSecondOperand = secondOperand;
		let newOperator = operator;

		if (secondOperand) {
			newDisplayedNumber = 0;
			newSecondOperand = undefined;
		} else {
			if (operator) {
				newOperator = undefined;
			} else {
				newDisplayedNumber = 0;
				newFirstOperand = undefined;
			}
		}

		this.setState({
      displayedNumber: newDisplayedNumber,
			firstOperand: newFirstOperand,
			secondOperand: newSecondOperand,
			recentOperand: 0,
			operator: newOperator,
			isDot: false,
			clearButtonText: 'AC',
		});
	}

	toggleSignButton() {
		const { displayedNumber, firstOperand } = this.state;
		this.setState({
			firstOperand: firstOperand ? -firstOperand : 0,
			displayedNumber: displayedNumber === 0 ? 0 : -displayedNumber,
		});
	}

	handlePercentButton() {
		const { displayedNumber, firstOperand, operator } = this.state;
		if (operator) {
			this.setState({
				displayedNumber: (displayedNumber * firstOperand) / 100,
				secondOperand: (displayedNumber * displayedNumber) / 100,
			});
		} else {
			this.setState({
				displayedNumber: (displayedNumber * 1) / 100,
			});
		}
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Component {
	constructor(target, props) {
		this.target = target;
		this.props = props;
		this.setup();
		this.setEvent();
		this.render();
	}

	setup() {}

	template() {
		return '';
	}

	mount() {}

	render() {
		this.target.innerHTML = this.template();
		this.mount();
	}

	setState(newState) {
		this.state = { ...this.state, ...newState };
		this.render();
	}

	setEvent() {}

	addEvent(eventType, selector, callback) {
		const children = [...this.target.querySelectorAll(selector)];
		const isTarget = (target) =>
			children.includes(target) || target.closest(selector);
		this.target.addEventListener(eventType, (event) => {
			if (!isTarget(event.target)) return false;
			callback(event);
		});
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class Display extends _core_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	template() {
		const { displayedNumber } = this.props;
		return `
      <span class="display-number">${displayedNumber}</span>
		`;
	}

	setEvent() {
		const { displayNumber } = this.props;

		this.addEvent('click', 'div', (e) => {
			displayNumber();
		});
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Display);


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class Controller extends _core_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  template() {
    const { clearButtonText } = this.props;
    return `
			<div class="controllers">
        <div class="controllers-row">
          <button class="btn-function clear">${clearButtonText}</button>
          <button class="btn-function sign">+/-</button>
          <button class="btn-function percent">%</button>  
          <button class="btn-operator" data-operator="divide">÷</button>  
        </div>
        <div class="controllers-row">
        	<button class="btn-number" data-number="7">7</button>
					<button class="btn-number" data-number="8">8</button>
					<button class="btn-number" data-number="9">9</button>
          <button class="btn-operator" data-operator="multiply">×</button>
        </div>
        <div class="controllers-row">
        	<button class="btn-number" data-number="4">4</button>
					<button class="btn-number" data-number="5">5</button>
					<button class="btn-number" data-number="6">6</button>
          <button class="btn-operator" data-operator="minus">-</button>
        </div>
        <div class="controllers-row">
          <button class="btn-number" data-number="1">1</button>
					<button class="btn-number" data-number="2">2</button>
					<button class="btn-number" data-number="3">3</button>
          <button class="btn-operator" data-operator="plus">+</button>
        </div>
        <div class="controllers-row">
          <button class="btn-number" data-number="0">0</button>
          <button class="btn-dot">.</button>
          <button class="btn-result" data-operator="equal">=</button>
        </div>
			</div>
		`;
  }

  setEvent() {
    const {
      handleClearButton,
      handleNumberButton,
      handleDotButton,
      handleOperatorButton,
      handleResultButton,
      toggleSignButton,
      handlePercentButton,
    } = this.props;

    this.addEvent('click', '.clear', (e) => {
      handleClearButton();
    });
    this.addEvent('click', '.btn-number', (e) => {
			handleNumberButton(Number(e.target.dataset.number));
		});
		this.addEvent('click', '.btn-dot', (e) => {
			handleDotButton();
		});
		this.addEvent('click', '.btn-operator', (e) => {
			handleOperatorButton(e.target.dataset.operator);
		});
		this.addEvent('click', '[data-operator="equal"]', (e) => {
			handleResultButton();
		});
    this.addEvent('click', '.sign', (e) => {
      toggleSignButton();
    });
    this.addEvent('click', '.percent', (e) => {
      handlePercentButton();
    });
    
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Controller);


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 6 */
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),
/* 8 */
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),
/* 9 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 10 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),
/* 11 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),
/* 12 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "div {\n\tbox-sizing: border-box;\n}\n\n#app {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-content: center;\n\tflex-wrap: wrap;\n\talign-items: center;\n}\n\n.display {\n\twidth: 20rem;\n\theight: 5rem;\n\tmargin-bottom: 0.1rem;\n\tpadding: 0.2rem;\n\tbackground: #4a4a4a;\n\tborder-radius: 10px;\n\tcolor: white;\n\tfont-family: monospace;\n\tfont-size: 4.5rem;\n\ttext-align: right;\n\tline-height: 1;\n}\n\n.display-number {\n\tanimation: flickerAnimation .2s;\n\tanimation-timing-function: cubic-bezier(0.46, 0.03, 0.52, 0.96);\n}\n\n@keyframes flickerAnimation {\n  0%   { opacity:1; }\n  30%  { opacity:0; }\n  40% { opacity:1; }\n  100% { opacity:1; }\n}\n\nbutton {\n\t-webkit-appearance: none;\n\t-moz-appearance: none;\n\tappearance: none;\n\tflex: 1;\n\tdisplay: inline-block;\n\tborder: 1px solid white;\n\tborder-radius: 10px;\n\ttext-align: center;\n\ttext-decoration: none;\n\tcursor: pointer;\n}\n\nbutton:active {\n\tbox-shadow: inset 3px 3px 3px rgb(71 71 71 / 25%);\n\tborder: 1;\n}\n\n.btn-function {\n\tfont-size: 1.5rem;\n\tfont-weight: 600;\n\tbackground-color: #bbbbbb;\n}\n\n.btn-operator,\n.btn-result {\n\tbackground-color: #ffd978;\n}\n\n.btn-number,\n.btn-dot,\n.btn-operator,\n.btn-result {\n\tfont-size: 2.25rem;\n\tfont-weight: 500;\n}\n\n.btn-number[data-number='0'] {\n\tflex-basis: 50%;\n\tmax-width: 50%;\n}\n\n.controllers-row {\n\tdisplay: flex;\n\twidth: calc(5rem * 4);\n\theight: 5rem;\n\tjustify-content: space-between;\n}\n", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;CACC,sBAAsB;AACvB;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,qBAAqB;CACrB,eAAe;CACf,mBAAmB;AACpB;;AAEA;CACC,YAAY;CACZ,YAAY;CACZ,qBAAqB;CACrB,eAAe;CACf,mBAAmB;CACnB,mBAAmB;CACnB,YAAY;CACZ,sBAAsB;CACtB,iBAAiB;CACjB,iBAAiB;CACjB,cAAc;AACf;;AAEA;CACC,+BAA+B;CAC/B,+DAA+D;AAChE;;AAEA;EACE,OAAO,SAAS,EAAE;EAClB,OAAO,SAAS,EAAE;EAClB,MAAM,SAAS,EAAE;EACjB,OAAO,SAAS,EAAE;AACpB;;AAEA;CACC,wBAAwB;CACxB,qBAAqB;CACrB,gBAAgB;CAChB,OAAO;CACP,qBAAqB;CACrB,uBAAuB;CACvB,mBAAmB;CACnB,kBAAkB;CAClB,qBAAqB;CACrB,eAAe;AAChB;;AAEA;CACC,iDAAiD;CACjD,SAAS;AACV;;AAEA;CACC,iBAAiB;CACjB,gBAAgB;CAChB,yBAAyB;AAC1B;;AAEA;;CAEC,yBAAyB;AAC1B;;AAEA;;;;CAIC,kBAAkB;CAClB,gBAAgB;AACjB;;AAEA;CACC,eAAe;CACf,cAAc;AACf;;AAEA;CACC,aAAa;CACb,qBAAqB;CACrB,YAAY;CACZ,8BAA8B;AAC/B","sourcesContent":["div {\n\tbox-sizing: border-box;\n}\n\n#app {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-content: center;\n\tflex-wrap: wrap;\n\talign-items: center;\n}\n\n.display {\n\twidth: 20rem;\n\theight: 5rem;\n\tmargin-bottom: 0.1rem;\n\tpadding: 0.2rem;\n\tbackground: #4a4a4a;\n\tborder-radius: 10px;\n\tcolor: white;\n\tfont-family: monospace;\n\tfont-size: 4.5rem;\n\ttext-align: right;\n\tline-height: 1;\n}\n\n.display-number {\n\tanimation: flickerAnimation .2s;\n\tanimation-timing-function: cubic-bezier(0.46, 0.03, 0.52, 0.96);\n}\n\n@keyframes flickerAnimation {\n  0%   { opacity:1; }\n  30%  { opacity:0; }\n  40% { opacity:1; }\n  100% { opacity:1; }\n}\n\nbutton {\n\t-webkit-appearance: none;\n\t-moz-appearance: none;\n\tappearance: none;\n\tflex: 1;\n\tdisplay: inline-block;\n\tborder: 1px solid white;\n\tborder-radius: 10px;\n\ttext-align: center;\n\ttext-decoration: none;\n\tcursor: pointer;\n}\n\nbutton:active {\n\tbox-shadow: inset 3px 3px 3px rgb(71 71 71 / 25%);\n\tborder: 1;\n}\n\n.btn-function {\n\tfont-size: 1.5rem;\n\tfont-weight: 600;\n\tbackground-color: #bbbbbb;\n}\n\n.btn-operator,\n.btn-result {\n\tbackground-color: #ffd978;\n}\n\n.btn-number,\n.btn-dot,\n.btn-operator,\n.btn-result {\n\tfont-size: 2.25rem;\n\tfont-weight: 500;\n}\n\n.btn-number[data-number='0'] {\n\tflex-basis: 50%;\n\tmax-width: 50%;\n}\n\n.controllers-row {\n\tdisplay: flex;\n\twidth: calc(5rem * 4);\n\theight: 5rem;\n\tjustify-content: space-between;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 13 */
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),
/* 14 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);



new _app_js__WEBPACK_IMPORTED_MODULE_0__["default"](document.querySelector('#app'));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7O0FDTjJCO0FBQ0Q7O0FBRTFCLElBQUksK0NBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vc3JjL2pzL2NvcmUvQ29tcG9uZW50LmpzIiwid2VicGFjazovL2NhbGN1bGF0b3IvLi9zcmMvanMvY29tcG9uZW50cy9EaXNwbGF5LmpzIiwid2VicGFjazovL2NhbGN1bGF0b3IvLi9zcmMvanMvY29tcG9uZW50cy9Db250cm9sbGVyLmpzIiwid2VicGFjazovL2NhbGN1bGF0b3IvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL2NhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2NhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2NhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL2NhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vc3JjL2pzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL2NvcmUvQ29tcG9uZW50LmpzJztcbmltcG9ydCBEaXNwbGF5IGZyb20gJy4vY29tcG9uZW50cy9EaXNwbGF5LmpzJztcbmltcG9ydCBDb250cm9sbGVyIGZyb20gJy4vY29tcG9uZW50cy9Db250cm9sbGVyLmpzJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc2V0dXAoKSB7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGRpc3BsYXllZE51bWJlcjogMCxcblx0XHRcdGZpcnN0T3BlcmFuZDogdW5kZWZpbmVkLFxuXHRcdFx0c2Vjb25kT3BlcmFuZDogdW5kZWZpbmVkLFxuXHRcdFx0cmVjZW50T3BlcmFuZDogMCxcblx0XHRcdG9wZXJhdG9yOiB1bmRlZmluZWQsXG5cdFx0XHRpc0RvdDogZmFsc2UsXG5cdFx0XHRjbGVhckJ1dHRvblRleHQ6ICdBQycsXG5cdFx0fTtcblx0fVxuXG5cdHRlbXBsYXRlKCkge1xuXHRcdHJldHVybiBgXG4gICAgICA8aGVhZGVyPjxoMT5DYWxjdWxhdG9yPC9oMT48L2hlYWRlcj5cbiAgICAgIDxtYWluPlxuICAgICAgICA8ZGl2IGRhdGEtY29tcG9uZW50PVwiZGlzcGxheVwiIGNsYXNzPVwiZGlzcGxheVwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEtY29tcG9uZW50PVwiY29udHJvbGxlclwiPjwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPGg1Pk1hZGUgd2l0aCDimJXvuI8gYnkgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9zcm5nY2hcIj5zcm5nY2g8L2E+PC9oNT5cbiAgICAgIDwvZm9vdGVyPlxuICAgIGA7XG5cdH1cblxuXHRtb3VudCgpIHtcblx0XHRjb25zdCB7XG5cdFx0XHRkaXNwbGF5TnVtYmVyLFxuXHRcdFx0aGFuZGxlTnVtYmVyQnV0dG9uLFxuXHRcdFx0aGFuZGxlRG90QnV0dG9uLFxuXHRcdFx0aGFuZGxlT3BlcmF0b3JCdXR0b24sXG5cdFx0XHRoYW5kbGVSZXN1bHRCdXR0b24sXG5cdFx0XHRoYW5kbGVDbGVhckJ1dHRvbixcblx0XHRcdHRvZ2dsZVNpZ25CdXR0b24sXG5cdFx0XHRoYW5kbGVQZXJjZW50QnV0dG9uLFxuXHRcdH0gPSB0aGlzO1xuXHRcdGNvbnN0IHsgZGlzcGxheWVkTnVtYmVyLCBjbGVhckJ1dHRvblRleHQgfSA9IHRoaXMuc3RhdGU7XG5cdFx0Y29uc3QgZGlzcGxheSA9IHRoaXMudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNvbXBvbmVudD1cImRpc3BsYXlcIl0nKTtcblx0XHRjb25zdCBjb250cm9sbGVyID0gdGhpcy50YXJnZXQucXVlcnlTZWxlY3Rvcihcblx0XHRcdCdbZGF0YS1jb21wb25lbnQ9XCJjb250cm9sbGVyXCJdJ1xuXHRcdCk7XG5cblx0XHRuZXcgRGlzcGxheShkaXNwbGF5LCB7XG5cdFx0XHRkaXNwbGF5ZWROdW1iZXIsXG5cdFx0XHRkaXNwbGF5TnVtYmVyOiBkaXNwbGF5TnVtYmVyLmJpbmQodGhpcyksXG5cdFx0fSk7XG5cblx0XHRuZXcgQ29udHJvbGxlcihjb250cm9sbGVyLCB7XG5cdFx0XHRjbGVhckJ1dHRvblRleHQsXG5cdFx0XHRoYW5kbGVDbGVhckJ1dHRvbjogaGFuZGxlQ2xlYXJCdXR0b24uYmluZCh0aGlzKSxcblx0XHRcdHRvZ2dsZVNpZ25CdXR0b246IHRvZ2dsZVNpZ25CdXR0b24uYmluZCh0aGlzKSxcblx0XHRcdGhhbmRsZVBlcmNlbnRCdXR0b246IGhhbmRsZVBlcmNlbnRCdXR0b24uYmluZCh0aGlzKSxcblx0XHRcdGhhbmRsZU51bWJlckJ1dHRvbjogaGFuZGxlTnVtYmVyQnV0dG9uLmJpbmQodGhpcyksXG5cdFx0XHRoYW5kbGVEb3RCdXR0b246IGhhbmRsZURvdEJ1dHRvbi5iaW5kKHRoaXMpLFxuXHRcdFx0aGFuZGxlT3BlcmF0b3JCdXR0b246IGhhbmRsZU9wZXJhdG9yQnV0dG9uLmJpbmQodGhpcyksXG5cdFx0XHRoYW5kbGVSZXN1bHRCdXR0b246IGhhbmRsZVJlc3VsdEJ1dHRvbi5iaW5kKHRoaXMpLFxuXHRcdH0pO1xuXHRcdGNvbnNvbGUudGFibGUodGhpcy5zdGF0ZSk7XG5cdH1cblxuXHRzZXRFdmVudCgpIHtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcblx0XHRcdGlmIChlLmtleSA9PT0gJ1NoaWZ0JyB8fCBlLmtleSA9PT0gJyAnKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnNvbGUuZGlyKGUpO1xuXHRcdFx0Y29uc3Qge1xuXHRcdFx0XHRoYW5kbGVDbGVhckJ1dHRvbixcblx0XHRcdFx0dG9nZ2xlU2lnbkJ1dHRvbixcblx0XHRcdFx0aGFuZGxlUGVyY2VudEJ1dHRvbixcblx0XHRcdFx0aGFuZGxlTnVtYmVyQnV0dG9uLFxuXHRcdFx0XHRoYW5kbGVEb3RCdXR0b24sXG5cdFx0XHRcdGhhbmRsZU9wZXJhdG9yQnV0dG9uLFxuXHRcdFx0XHRoYW5kbGVSZXN1bHRCdXR0b24sXG5cdFx0XHR9ID0gdGhpcztcblx0XHRcdGlmIChpc05hTihlLmtleSkpIHtcblx0XHRcdFx0Y29uc3QgZXhlY3V0ZXMgPSB7XG5cdFx0XHRcdFx0RXNjYXBlOiBoYW5kbGVDbGVhckJ1dHRvbi5iaW5kKHRoaXMpLFxuXHRcdFx0XHRcdEVudGVyOiBoYW5kbGVSZXN1bHRCdXR0b24uYmluZCh0aGlzKSxcblx0XHRcdFx0XHQnKyc6IGhhbmRsZU9wZXJhdG9yQnV0dG9uLmJpbmQodGhpcyksXG5cdFx0XHRcdFx0Jy0nOiBoYW5kbGVPcGVyYXRvckJ1dHRvbi5iaW5kKHRoaXMpLFxuXHRcdFx0XHRcdCcqJzogaGFuZGxlT3BlcmF0b3JCdXR0b24uYmluZCh0aGlzKSxcblx0XHRcdFx0XHQnLyc6IGhhbmRsZU9wZXJhdG9yQnV0dG9uLmJpbmQodGhpcyksXG5cdFx0XHRcdFx0JyUnOiBoYW5kbGVQZXJjZW50QnV0dG9uLmJpbmQodGhpcyksXG5cdFx0XHRcdFx0JywnOiB0b2dnbGVTaWduQnV0dG9uLmJpbmQodGhpcyksXG5cdFx0XHRcdFx0Jy4nOiBoYW5kbGVEb3RCdXR0b24uYmluZCh0aGlzKSxcblx0XHRcdFx0fTtcblx0XHRcdFx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdFx0XHRcdCcrJzogJ3BsdXMnLFxuXHRcdFx0XHRcdCctJzogJ21pbnVzJyxcblx0XHRcdFx0XHQnKic6ICdtdWx0aXBseScsXG5cdFx0XHRcdFx0Jy8nOiAnZGl2aWRlJyxcblx0XHRcdFx0fTtcblx0XHRcdFx0ZXhlY3V0ZXNbZS5rZXldKHBhcmFtc1tlLmtleV0pO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGhhbmRsZU51bWJlckJ1dHRvbi5iaW5kKHRoaXMpKE51bWJlcihlLmtleSkpO1xuXHRcdH0pO1xuXHR9XG5cblx0ZGlzcGxheU51bWJlcihuZXdOdW1iZXIpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGRpc3BsYXllZE51bWJlcjogbmV3TnVtYmVyLFxuXHRcdH0pO1xuXHR9XG5cblx0aGFuZGxlTnVtYmVyQnV0dG9uKHNlbGVjdGVkTnVtYmVyKSB7XG5cdFx0Y29uc3QgeyBmaXJzdE9wZXJhbmQsc2Vjb25kT3BlcmFuZCwgIHJlY2VudE9wZXJhbmQsIG9wZXJhdG9yLCBpc0RvdCB9ID0gdGhpcy5zdGF0ZTtcblx0XHRsZXQgbnVtYmVyO1xuXHRcdGxldCBwcmV2TnVtYmVyID1cblx0XHRcdG9wZXJhdG9yICYmIHNlY29uZE9wZXJhbmQgPT09IHVuZGVmaW5lZCA/IDAgOiByZWNlbnRPcGVyYW5kO1xuXG5cdFx0aWYgKCFpc0RvdCkge1xuXHRcdFx0bnVtYmVyID1cblx0XHRcdFx0cHJldk51bWJlciA9PT0gMFxuXHRcdFx0XHRcdD8gc2VsZWN0ZWROdW1iZXJcblx0XHRcdFx0XHQ6IHByZXZOdW1iZXIgKiAxMCArIHNlbGVjdGVkTnVtYmVyO1xuXHRcdH0gZWxzZSB7XG4gICAgICBjb25zdCBzdHJpbmcgPSBwcmV2TnVtYmVyLnRvU3RyaW5nKCk7XG4gICAgICBjb25zdCBwb3cgPSBzdHJpbmcuaW5kZXhPZignLicpID09PSAtMSA/IDEgOiBzdHJpbmcubGVuZ3RoIC0gc3RyaW5nLmluZGV4T2YoJy4nKTtcblxuICAgICAgY29uc29sZS5sb2cocHJldk51bWJlci50b1N0cmluZygpLCBwcmV2TnVtYmVyLCBwb3cpO1xuICAgICAgY29uc29sZS5sb2coXG5cdFx0XHRcdHByZXZOdW1iZXIudG9TdHJpbmcoKS5sZW5ndGgsXG5cdFx0XHRcdHByZXZOdW1iZXIudG9TdHJpbmcoKS5pbmRleE9mKCcuJylcblx0XHRcdCk7XG5cblx0XHRcdHNlbGVjdGVkTnVtYmVyIC89ICgxMCAqKiBwb3cpO1xuXHRcdFx0bnVtYmVyID1cblx0XHRcdFx0cHJldk51bWJlciA9PT0gMCA/IHNlbGVjdGVkTnVtYmVyIDogcHJldk51bWJlciArIHNlbGVjdGVkTnVtYmVyO1xuXHRcdH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0ZGlzcGxheWVkTnVtYmVyOiBudW1iZXIsXG5cdFx0XHRmaXJzdE9wZXJhbmQ6IG9wZXJhdG9yID8gZmlyc3RPcGVyYW5kIDogbnVtYmVyLFxuXHRcdFx0c2Vjb25kT3BlcmFuZDogb3BlcmF0b3IgPyBudW1iZXIgOiBzZWNvbmRPcGVyYW5kLFxuXHRcdFx0cmVjZW50T3BlcmFuZDogbnVtYmVyLFxuXHRcdFx0Y2xlYXJCdXR0b25UZXh0OiAnQycsXG5cdFx0fSk7XG5cdH1cblxuXHRoYW5kbGVEb3RCdXR0b24oKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRkaXNwbGF5ZWROdW1iZXI6IHRoaXMuc3RhdGUuZGlzcGxheWVkTnVtYmVyICsgJy4nLFxuXHRcdFx0aXNEb3Q6IHRydWUsXG5cdFx0fSk7XG5cdH1cblxuXHRoYW5kbGVPcGVyYXRvckJ1dHRvbihzZWxlY3RlZE9wZXJhdG9yKSB7XG5cdFx0Y29uc3QgeyBmaXJzdE9wZXJhbmQsIHNlY29uZE9wZXJhbmQgfSA9IHRoaXMuc3RhdGU7XG5cblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdG9wZXJhdG9yOiBzZWxlY3RlZE9wZXJhdG9yLFxuXHRcdFx0aXNEb3Q6IGZhbHNlLFxuXHRcdH0pO1xuXHRcdGlmIChmaXJzdE9wZXJhbmQgJiYgc2Vjb25kT3BlcmFuZCkge1xuXHRcdFx0dGhpcy5oYW5kbGVSZXN1bHRCdXR0b24oKTtcblx0XHR9XG5cdH1cblxuXHRoYW5kbGVSZXN1bHRCdXR0b24oKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRkaXNwbGF5ZWROdW1iZXI6IHRoaXMuX2dldFJlc3VsdCgpLFxuXHRcdFx0Zmlyc3RPcGVyYW5kOiB0aGlzLl9nZXRSZXN1bHQoKSxcblx0XHRcdHNlY29uZE9wZXJhbmQ6IHVuZGVmaW5lZCxcbiAgICAgIFxuXHRcdH0pO1xuXHR9XG5cblx0X2dldFJlc3VsdCgpIHtcblx0XHRjb25zdCB7IGZpcnN0T3BlcmFuZCwgc2Vjb25kT3BlcmFuZCwgcmVjZW50T3BlcmFuZCwgb3BlcmF0b3IgfSA9IHRoaXMuc3RhdGU7XG5cdFx0Y29uc3QgZmlyc3QgPSBmaXJzdE9wZXJhbmQgPyBmaXJzdE9wZXJhbmQgOiAwO1xuXHRcdGNvbnN0IHNlY29uZCA9IHNlY29uZE9wZXJhbmQgPyBzZWNvbmRPcGVyYW5kIDogcmVjZW50T3BlcmFuZDtcblx0XHRsZXQgcmVzdWx0ID0gdW5kZWZpbmVkO1xuXG5cdFx0c3dpdGNoIChvcGVyYXRvcikge1xuXHRcdFx0Y2FzZSAncGx1cyc6XG5cdFx0XHRcdHJlc3VsdCA9IGZpcnN0ICsgc2Vjb25kO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ21pbnVzJzpcblx0XHRcdFx0cmVzdWx0ID0gZmlyc3QgLSBzZWNvbmQ7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnbXVsdGlwbHknOlxuXHRcdFx0XHRyZXN1bHQgPSBmaXJzdCAqIHNlY29uZDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdkaXZpZGUnOlxuXHRcdFx0XHRyZXN1bHQgPSBmaXJzdCAvIHNlY29uZDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXN1bHQgPSBmaXJzdDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHQvLyBUT0RPOiBBZGQgYSBvcGVyYXRpb24gYWZ0ZXIgQWZ0ZXIgZ2V0dGluZyB0aGUgcmVzdWx0c1xuXHRoYW5kbGVDbGVhckJ1dHRvbigpIHtcblx0XHRjb25zdCB7IGRpc3BsYXllZE51bWJlciwgZmlyc3RPcGVyYW5kLCBzZWNvbmRPcGVyYW5kLCBvcGVyYXRvciB9ID1cblx0XHRcdHRoaXMuc3RhdGU7XG5cdFx0bGV0IG5ld0Rpc3BsYXllZE51bWJlciA9IGRpc3BsYXllZE51bWJlcjtcblx0XHRsZXQgbmV3Rmlyc3RPcGVyYW5kID0gZmlyc3RPcGVyYW5kO1xuXHRcdGxldCBuZXdTZWNvbmRPcGVyYW5kID0gc2Vjb25kT3BlcmFuZDtcblx0XHRsZXQgbmV3T3BlcmF0b3IgPSBvcGVyYXRvcjtcblxuXHRcdGlmIChzZWNvbmRPcGVyYW5kKSB7XG5cdFx0XHRuZXdEaXNwbGF5ZWROdW1iZXIgPSAwO1xuXHRcdFx0bmV3U2Vjb25kT3BlcmFuZCA9IHVuZGVmaW5lZDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKG9wZXJhdG9yKSB7XG5cdFx0XHRcdG5ld09wZXJhdG9yID0gdW5kZWZpbmVkO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bmV3RGlzcGxheWVkTnVtYmVyID0gMDtcblx0XHRcdFx0bmV3Rmlyc3RPcGVyYW5kID0gdW5kZWZpbmVkO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGlzcGxheWVkTnVtYmVyOiBuZXdEaXNwbGF5ZWROdW1iZXIsXG5cdFx0XHRmaXJzdE9wZXJhbmQ6IG5ld0ZpcnN0T3BlcmFuZCxcblx0XHRcdHNlY29uZE9wZXJhbmQ6IG5ld1NlY29uZE9wZXJhbmQsXG5cdFx0XHRyZWNlbnRPcGVyYW5kOiAwLFxuXHRcdFx0b3BlcmF0b3I6IG5ld09wZXJhdG9yLFxuXHRcdFx0aXNEb3Q6IGZhbHNlLFxuXHRcdFx0Y2xlYXJCdXR0b25UZXh0OiAnQUMnLFxuXHRcdH0pO1xuXHR9XG5cblx0dG9nZ2xlU2lnbkJ1dHRvbigpIHtcblx0XHRjb25zdCB7IGRpc3BsYXllZE51bWJlciwgZmlyc3RPcGVyYW5kIH0gPSB0aGlzLnN0YXRlO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Zmlyc3RPcGVyYW5kOiBmaXJzdE9wZXJhbmQgPyAtZmlyc3RPcGVyYW5kIDogMCxcblx0XHRcdGRpc3BsYXllZE51bWJlcjogZGlzcGxheWVkTnVtYmVyID09PSAwID8gMCA6IC1kaXNwbGF5ZWROdW1iZXIsXG5cdFx0fSk7XG5cdH1cblxuXHRoYW5kbGVQZXJjZW50QnV0dG9uKCkge1xuXHRcdGNvbnN0IHsgZGlzcGxheWVkTnVtYmVyLCBmaXJzdE9wZXJhbmQsIG9wZXJhdG9yIH0gPSB0aGlzLnN0YXRlO1xuXHRcdGlmIChvcGVyYXRvcikge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGRpc3BsYXllZE51bWJlcjogKGRpc3BsYXllZE51bWJlciAqIGZpcnN0T3BlcmFuZCkgLyAxMDAsXG5cdFx0XHRcdHNlY29uZE9wZXJhbmQ6IChkaXNwbGF5ZWROdW1iZXIgKiBkaXNwbGF5ZWROdW1iZXIpIC8gMTAwLFxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRkaXNwbGF5ZWROdW1iZXI6IChkaXNwbGF5ZWROdW1iZXIgKiAxKSAvIDEwMCxcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJjbGFzcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcih0YXJnZXQsIHByb3BzKSB7XG5cdFx0dGhpcy50YXJnZXQgPSB0YXJnZXQ7XG5cdFx0dGhpcy5wcm9wcyA9IHByb3BzO1xuXHRcdHRoaXMuc2V0dXAoKTtcblx0XHR0aGlzLnNldEV2ZW50KCk7XG5cdFx0dGhpcy5yZW5kZXIoKTtcblx0fVxuXG5cdHNldHVwKCkge31cblxuXHR0ZW1wbGF0ZSgpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRtb3VudCgpIHt9XG5cblx0cmVuZGVyKCkge1xuXHRcdHRoaXMudGFyZ2V0LmlubmVySFRNTCA9IHRoaXMudGVtcGxhdGUoKTtcblx0XHR0aGlzLm1vdW50KCk7XG5cdH1cblxuXHRzZXRTdGF0ZShuZXdTdGF0ZSkge1xuXHRcdHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIC4uLm5ld1N0YXRlIH07XG5cdFx0dGhpcy5yZW5kZXIoKTtcblx0fVxuXG5cdHNldEV2ZW50KCkge31cblxuXHRhZGRFdmVudChldmVudFR5cGUsIHNlbGVjdG9yLCBjYWxsYmFjaykge1xuXHRcdGNvbnN0IGNoaWxkcmVuID0gWy4uLnRoaXMudGFyZ2V0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXTtcblx0XHRjb25zdCBpc1RhcmdldCA9ICh0YXJnZXQpID0+XG5cdFx0XHRjaGlsZHJlbi5pbmNsdWRlcyh0YXJnZXQpIHx8IHRhcmdldC5jbG9zZXN0KHNlbGVjdG9yKTtcblx0XHR0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgKGV2ZW50KSA9PiB7XG5cdFx0XHRpZiAoIWlzVGFyZ2V0KGV2ZW50LnRhcmdldCkpIHJldHVybiBmYWxzZTtcblx0XHRcdGNhbGxiYWNrKGV2ZW50KTtcblx0XHR9KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvcmUvQ29tcG9uZW50LmpzJztcblxuY2xhc3MgRGlzcGxheSBleHRlbmRzIENvbXBvbmVudCB7XG5cdHRlbXBsYXRlKCkge1xuXHRcdGNvbnN0IHsgZGlzcGxheWVkTnVtYmVyIH0gPSB0aGlzLnByb3BzO1xuXHRcdHJldHVybiBgXG4gICAgICA8c3BhbiBjbGFzcz1cImRpc3BsYXktbnVtYmVyXCI+JHtkaXNwbGF5ZWROdW1iZXJ9PC9zcGFuPlxuXHRcdGA7XG5cdH1cblxuXHRzZXRFdmVudCgpIHtcblx0XHRjb25zdCB7IGRpc3BsYXlOdW1iZXIgfSA9IHRoaXMucHJvcHM7XG5cblx0XHR0aGlzLmFkZEV2ZW50KCdjbGljaycsICdkaXYnLCAoZSkgPT4ge1xuXHRcdFx0ZGlzcGxheU51bWJlcigpO1xuXHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERpc3BsYXk7XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvcmUvQ29tcG9uZW50LmpzJztcblxuY2xhc3MgQ29udHJvbGxlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHRlbXBsYXRlKCkge1xuICAgIGNvbnN0IHsgY2xlYXJCdXR0b25UZXh0IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiBgXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29udHJvbGxlcnNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xsZXJzLXJvd1wiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tZnVuY3Rpb24gY2xlYXJcIj4ke2NsZWFyQnV0dG9uVGV4dH08L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLWZ1bmN0aW9uIHNpZ25cIj4rLy08L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLWZ1bmN0aW9uIHBlcmNlbnRcIj4lPC9idXR0b24+ICBcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLW9wZXJhdG9yXCIgZGF0YS1vcGVyYXRvcj1cImRpdmlkZVwiPsO3PC9idXR0b24+ICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sbGVycy1yb3dcIj5cbiAgICAgICAgXHQ8YnV0dG9uIGNsYXNzPVwiYnRuLW51bWJlclwiIGRhdGEtbnVtYmVyPVwiN1wiPjc8L2J1dHRvbj5cblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYnRuLW51bWJlclwiIGRhdGEtbnVtYmVyPVwiOFwiPjg8L2J1dHRvbj5cblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYnRuLW51bWJlclwiIGRhdGEtbnVtYmVyPVwiOVwiPjk8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLW9wZXJhdG9yXCIgZGF0YS1vcGVyYXRvcj1cIm11bHRpcGx5XCI+w5c8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sbGVycy1yb3dcIj5cbiAgICAgICAgXHQ8YnV0dG9uIGNsYXNzPVwiYnRuLW51bWJlclwiIGRhdGEtbnVtYmVyPVwiNFwiPjQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYnRuLW51bWJlclwiIGRhdGEtbnVtYmVyPVwiNVwiPjU8L2J1dHRvbj5cblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYnRuLW51bWJlclwiIGRhdGEtbnVtYmVyPVwiNlwiPjY8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLW9wZXJhdG9yXCIgZGF0YS1vcGVyYXRvcj1cIm1pbnVzXCI+LTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xsZXJzLXJvd1wiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tbnVtYmVyXCIgZGF0YS1udW1iZXI9XCIxXCI+MTwvYnV0dG9uPlxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJidG4tbnVtYmVyXCIgZGF0YS1udW1iZXI9XCIyXCI+MjwvYnV0dG9uPlxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJidG4tbnVtYmVyXCIgZGF0YS1udW1iZXI9XCIzXCI+MzwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tb3BlcmF0b3JcIiBkYXRhLW9wZXJhdG9yPVwicGx1c1wiPis8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sbGVycy1yb3dcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLW51bWJlclwiIGRhdGEtbnVtYmVyPVwiMFwiPjA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLWRvdFwiPi48L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLXJlc3VsdFwiIGRhdGEtb3BlcmF0b3I9XCJlcXVhbFwiPj08L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRgO1xuICB9XG5cbiAgc2V0RXZlbnQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaGFuZGxlQ2xlYXJCdXR0b24sXG4gICAgICBoYW5kbGVOdW1iZXJCdXR0b24sXG4gICAgICBoYW5kbGVEb3RCdXR0b24sXG4gICAgICBoYW5kbGVPcGVyYXRvckJ1dHRvbixcbiAgICAgIGhhbmRsZVJlc3VsdEJ1dHRvbixcbiAgICAgIHRvZ2dsZVNpZ25CdXR0b24sXG4gICAgICBoYW5kbGVQZXJjZW50QnV0dG9uLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgdGhpcy5hZGRFdmVudCgnY2xpY2snLCAnLmNsZWFyJywgKGUpID0+IHtcbiAgICAgIGhhbmRsZUNsZWFyQnV0dG9uKCk7XG4gICAgfSk7XG4gICAgdGhpcy5hZGRFdmVudCgnY2xpY2snLCAnLmJ0bi1udW1iZXInLCAoZSkgPT4ge1xuXHRcdFx0aGFuZGxlTnVtYmVyQnV0dG9uKE51bWJlcihlLnRhcmdldC5kYXRhc2V0Lm51bWJlcikpO1xuXHRcdH0pO1xuXHRcdHRoaXMuYWRkRXZlbnQoJ2NsaWNrJywgJy5idG4tZG90JywgKGUpID0+IHtcblx0XHRcdGhhbmRsZURvdEJ1dHRvbigpO1xuXHRcdH0pO1xuXHRcdHRoaXMuYWRkRXZlbnQoJ2NsaWNrJywgJy5idG4tb3BlcmF0b3InLCAoZSkgPT4ge1xuXHRcdFx0aGFuZGxlT3BlcmF0b3JCdXR0b24oZS50YXJnZXQuZGF0YXNldC5vcGVyYXRvcik7XG5cdFx0fSk7XG5cdFx0dGhpcy5hZGRFdmVudCgnY2xpY2snLCAnW2RhdGEtb3BlcmF0b3I9XCJlcXVhbFwiXScsIChlKSA9PiB7XG5cdFx0XHRoYW5kbGVSZXN1bHRCdXR0b24oKTtcblx0XHR9KTtcbiAgICB0aGlzLmFkZEV2ZW50KCdjbGljaycsICcuc2lnbicsIChlKSA9PiB7XG4gICAgICB0b2dnbGVTaWduQnV0dG9uKCk7XG4gICAgfSk7XG4gICAgdGhpcy5hZGRFdmVudCgnY2xpY2snLCAnLnBlcmNlbnQnLCAoZSkgPT4ge1xuICAgICAgaGFuZGxlUGVyY2VudEJ1dHRvbigpO1xuICAgIH0pO1xuICAgIFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xsZXI7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJkaXYge1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiNhcHAge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kaXNwbGF5IHtcXG5cXHR3aWR0aDogMjByZW07XFxuXFx0aGVpZ2h0OiA1cmVtO1xcblxcdG1hcmdpbi1ib3R0b206IDAuMXJlbTtcXG5cXHRwYWRkaW5nOiAwLjJyZW07XFxuXFx0YmFja2dyb3VuZDogIzRhNGE0YTtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRmb250LWZhbWlseTogbW9ub3NwYWNlO1xcblxcdGZvbnQtc2l6ZTogNC41cmVtO1xcblxcdHRleHQtYWxpZ246IHJpZ2h0O1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG4uZGlzcGxheS1udW1iZXIge1xcblxcdGFuaW1hdGlvbjogZmxpY2tlckFuaW1hdGlvbiAuMnM7XFxuXFx0YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNDYsIDAuMDMsIDAuNTIsIDAuOTYpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZsaWNrZXJBbmltYXRpb24ge1xcbiAgMCUgICB7IG9wYWNpdHk6MTsgfVxcbiAgMzAlICB7IG9wYWNpdHk6MDsgfVxcbiAgNDAlIHsgb3BhY2l0eToxOyB9XFxuICAxMDAlIHsgb3BhY2l0eToxOyB9XFxufVxcblxcbmJ1dHRvbiB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcblxcdC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG5cXHRhcHBlYXJhbmNlOiBub25lO1xcblxcdGZsZXg6IDE7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcblxcdGJveC1zaGFkb3c6IGluc2V0IDNweCAzcHggM3B4IHJnYig3MSA3MSA3MSAvIDI1JSk7XFxuXFx0Ym9yZGVyOiAxO1xcbn1cXG5cXG4uYnRuLWZ1bmN0aW9uIHtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHRmb250LXdlaWdodDogNjAwO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNiYmJiYmI7XFxufVxcblxcbi5idG4tb3BlcmF0b3IsXFxuLmJ0bi1yZXN1bHQge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmQ5Nzg7XFxufVxcblxcbi5idG4tbnVtYmVyLFxcbi5idG4tZG90LFxcbi5idG4tb3BlcmF0b3IsXFxuLmJ0bi1yZXN1bHQge1xcblxcdGZvbnQtc2l6ZTogMi4yNXJlbTtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uYnRuLW51bWJlcltkYXRhLW51bWJlcj0nMCddIHtcXG5cXHRmbGV4LWJhc2lzOiA1MCU7XFxuXFx0bWF4LXdpZHRoOiA1MCU7XFxufVxcblxcbi5jb250cm9sbGVycy1yb3cge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0d2lkdGg6IGNhbGMoNXJlbSAqIDQpO1xcblxcdGhlaWdodDogNXJlbTtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0Msc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qix1QkFBdUI7Q0FDdkIscUJBQXFCO0NBQ3JCLGVBQWU7Q0FDZixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osWUFBWTtDQUNaLHFCQUFxQjtDQUNyQixlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLG1CQUFtQjtDQUNuQixZQUFZO0NBQ1osc0JBQXNCO0NBQ3RCLGlCQUFpQjtDQUNqQixpQkFBaUI7Q0FDakIsY0FBYztBQUNmOztBQUVBO0NBQ0MsK0JBQStCO0NBQy9CLCtEQUErRDtBQUNoRTs7QUFFQTtFQUNFLE9BQU8sU0FBUyxFQUFFO0VBQ2xCLE9BQU8sU0FBUyxFQUFFO0VBQ2xCLE1BQU0sU0FBUyxFQUFFO0VBQ2pCLE9BQU8sU0FBUyxFQUFFO0FBQ3BCOztBQUVBO0NBQ0Msd0JBQXdCO0NBQ3hCLHFCQUFxQjtDQUNyQixnQkFBZ0I7Q0FDaEIsT0FBTztDQUNQLHFCQUFxQjtDQUNyQix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQixxQkFBcUI7Q0FDckIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGlEQUFpRDtDQUNqRCxTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsZ0JBQWdCO0NBQ2hCLHlCQUF5QjtBQUMxQjs7QUFFQTs7Q0FFQyx5QkFBeUI7QUFDMUI7O0FBRUE7Ozs7Q0FJQyxrQkFBa0I7Q0FDbEIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixxQkFBcUI7Q0FDckIsWUFBWTtDQUNaLDhCQUE4QjtBQUMvQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJkaXYge1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiNhcHAge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kaXNwbGF5IHtcXG5cXHR3aWR0aDogMjByZW07XFxuXFx0aGVpZ2h0OiA1cmVtO1xcblxcdG1hcmdpbi1ib3R0b206IDAuMXJlbTtcXG5cXHRwYWRkaW5nOiAwLjJyZW07XFxuXFx0YmFja2dyb3VuZDogIzRhNGE0YTtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRmb250LWZhbWlseTogbW9ub3NwYWNlO1xcblxcdGZvbnQtc2l6ZTogNC41cmVtO1xcblxcdHRleHQtYWxpZ246IHJpZ2h0O1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG4uZGlzcGxheS1udW1iZXIge1xcblxcdGFuaW1hdGlvbjogZmxpY2tlckFuaW1hdGlvbiAuMnM7XFxuXFx0YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNDYsIDAuMDMsIDAuNTIsIDAuOTYpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZsaWNrZXJBbmltYXRpb24ge1xcbiAgMCUgICB7IG9wYWNpdHk6MTsgfVxcbiAgMzAlICB7IG9wYWNpdHk6MDsgfVxcbiAgNDAlIHsgb3BhY2l0eToxOyB9XFxuICAxMDAlIHsgb3BhY2l0eToxOyB9XFxufVxcblxcbmJ1dHRvbiB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcblxcdC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG5cXHRhcHBlYXJhbmNlOiBub25lO1xcblxcdGZsZXg6IDE7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcblxcdGJveC1zaGFkb3c6IGluc2V0IDNweCAzcHggM3B4IHJnYig3MSA3MSA3MSAvIDI1JSk7XFxuXFx0Ym9yZGVyOiAxO1xcbn1cXG5cXG4uYnRuLWZ1bmN0aW9uIHtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHRmb250LXdlaWdodDogNjAwO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNiYmJiYmI7XFxufVxcblxcbi5idG4tb3BlcmF0b3IsXFxuLmJ0bi1yZXN1bHQge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmQ5Nzg7XFxufVxcblxcbi5idG4tbnVtYmVyLFxcbi5idG4tZG90LFxcbi5idG4tb3BlcmF0b3IsXFxuLmJ0bi1yZXN1bHQge1xcblxcdGZvbnQtc2l6ZTogMi4yNXJlbTtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uYnRuLW51bWJlcltkYXRhLW51bWJlcj0nMCddIHtcXG5cXHRmbGV4LWJhc2lzOiA1MCU7XFxuXFx0bWF4LXdpZHRoOiA1MCU7XFxufVxcblxcbi5jb250cm9sbGVycy1yb3cge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0d2lkdGg6IGNhbGMoNXJlbSAqIDQpO1xcblxcdGhlaWdodDogNXJlbTtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNbX2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbW9kdWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pMl0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQXBwIGZyb20gJy4vYXBwLmpzJztcbmltcG9ydCAnLi4vY3NzL3N0eWxlLmNzcyc7XG5cbm5ldyBBcHAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcCcpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==