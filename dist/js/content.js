/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app/content.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./src/app/content.css":
/*!*******************************************************!*\
  !*** ./node_modules/css-loader!./src/app/content.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".absoluterect {\n    position: absolute;\n  }\n\n.bubble2{\n\tstroke: #3d8;\n\tfill: none;\n\tstroke-width: 1px;\n\tstroke-linecap: round;\n}\n\n.newdiv {\n\tborder-radius: 10px;\n\tbox-shadow: 10px 10px 3px lightgray;\n\tborder-style: solid;\n\tborder-color: lightgray;\n\tborder-width: 0.5px;\n\topacity: 0.8;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/app/content.css":
/*!*****************************!*\
  !*** ./src/app/content.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./content.css */ "./node_modules/css-loader/index.js!./src/app/content.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/app/content.ts":
/*!****************************!*\
  !*** ./src/app/content.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./content.css */ "./src/app/content.css");
chrome.runtime.sendMessage({}, (response) => {
    var checkReady = setInterval(() => {
        if (document.readyState === "complete") {
            clearInterval(checkReady);
            console.log("We're in the injected content script!");
        }
    });
    // var apiKey = "trnsl.1.1.20171031T094741Z.b8618875ef69a6bb.d4baa2b7efd346de3d5d51c9d805ab3cc18aada9";
    // var langDirection = "en-zh"
    var newdiv = document.createElement("div");
    newdiv.setAttribute('class', 'newdiv');
    document.body.appendChild(newdiv);
    //Taek
    var metaRectangle = document.createElement("div");
    metaRectangle.setAttribute('class', 'newdiv');
    document.body.appendChild(metaRectangle);
    var pipette = document.createElement("img");
    pipette.src = "https://ifh.cc/g/Jvlrbc.png";
    pipette.setAttribute('class', 'pipette');
    document.body.appendChild(pipette);
    var bubble = document.createElement('div');
    bubble.setAttribute('class', 'bubble');
    bubble.id = 'bubble';
    document.body.appendChild(bubble);
    var meta = document.createElement('div');
    meta.setAttribute('class', 'bubble');
    meta.id = 'meta';
    document.body.appendChild(meta);
    // // Lets listen to mouseup DOM events.
    // document.addEventListener('mouseup', function (e) {
    //     console.log("document.addEventListener.mouseup().e:" + JSON.stringify(e))
    //     var selection = window.getSelection().toString();
    //     console.log("selection length: " + selection.length)
    //     if (selection.length > 0) {
    //         renderRectangle(e.pageX-20, e.pageY+5, 200, 100);
    //         renderPipette(e.pageX-20, e.pageY-30, 40, 50)
    //         translateText(e.pageX-20, e.pageY+5, selection);
    //     }
    // }, false);
    var pageX;
    var pageY;
    document.addEventListener('mouseup', function (e) {
        console.log("findXY:" + JSON.stringify(e));
        var selection = window.getSelection().toString();
        if (selection.length > 0) {
            pageX = e.pageX;
            pageY = e.pageY;
            console.log("x and y: ", pageX, " ", pageY);
        }
    }, false);
    document.addEventListener("copy", function (e) {
        console.log("copy action");
        var selection = document.getSelection();
        // var selection = document.getSelection();
        // var selectPos = window.getSelection().getRangeAt(0);
        // console.log("selection position: ", selectPos)
        // TODO : 아래 코드를 함수로 만들어서 e.pageX,Y 읽어오기
        // var pageX = findXY().x;
        // var pageY = findXY().y;
        console.log("x, y: ", pageX, pageY);
        console.log("selection length: ", selection.toString().length);
        console.log("selected text: ", selection.toString());
        // console.log(selection.style);
        if (selection.toString().length > 0) {
            console.log("copippete start");
            translateText(pageX, pageY + 5, selection.toString());
            var textHeight = document.getElementById('bubble').clientHeight;
            renderRectangle(pageX, pageY + 5, 270, textHeight + 20);
            renderMeta(pageX, pageY + textHeight + 25, selection.toString());
            var metaHeight = document.getElementById('meta').clientHeight;
            renderMetaRectangle(pageX, pageY + textHeight + 25, 270, metaHeight + 20);
            renderMeta(pageX, pageY + textHeight + 25, selection.toString());
            renderPipette(pageX, pageY - 30, 40, 50);
        }
    }, false);
    // Close the bubble when we click on the screen.
    document.addEventListener('mousedown', function (e) {
        bubble.style.visibility = 'hidden';
        newdiv.style.visibility = 'hidden';
        //Taek
        metaRectangle.style.visibility = 'hidden';
        meta.style.visibility = 'hidden';
        pipette.style.visibility = 'hidden';
    }, false);
    function renderRectangle(left, top, width, height) {
        // console.log("renderRectangle", document.createElement)
        if (document.createElement) {
            newdiv.style.position = "absolute";
            newdiv.style.left = left + "px";
            newdiv.style.top = top + "px";
            newdiv.style.width = width + "px";
            newdiv.style.height = height + "px";
            newdiv.style.backgroundColor = 'white';
            newdiv.style.visibility = 'visible';
            newdiv.id = 'newdiv';
            //   document.body.appendChild(newdiv);
        }
    }
    //Taek
    function renderMetaRectangle(left, top, width, height) {
        // console.log("renderRectangle", document.createElement)
        if (document.createElement) {
            metaRectangle.style.position = "absolute";
            metaRectangle.style.left = left + "px";
            metaRectangle.style.top = top + "px";
            metaRectangle.style.width = width + "px";
            metaRectangle.style.height = height + "px";
            metaRectangle.style.backgroundColor = 'white';
            metaRectangle.style.visibility = 'visible';
            metaRectangle.id = 'newdiv';
            //   document.body.appendChild(newdiv);
        }
    }
    function renderPipette(left, top, width, height) {
        if (document.createElement) {
            pipette.style.position = "absolute";
            pipette.style.left = left + "px";
            pipette.style.top = top + "px";
            pipette.style.width = width + "px";
            pipette.style.height = height + "px";
            pipette.style.visibility = 'visible';
            pipette.id = 'pipette';
        }
    }
    function translateText(mouseX, mouseY, selection) {
        renderBubble(mouseX, mouseY, selection);
        //Taek
        // renderMeta(mouseX, mouseY, selection);
    }
    // Move that bubble to the appropriate location.
    function renderBubble(mouseX, mouseY, selection) {
        //Taek
        if (selection.toString().length > 100) {
            console.log("Length over 100");
            selection = selection.substring(0, 99) + '...';
        }
        else {
            console.log("Length under 100");
        }
        bubble.innerHTML = selection;
        bubble.style.top = mouseY + 10 + 'px';
        bubble.style.left = mouseX + 10 + 'px';
        bubble.style.visibility = 'visible';
        bubble.style.position = 'absolute';
        bubble.style.width = 250 + 'px';
    }
    //Taek
    function renderMeta(mouseX, mouseY, selection) {
        meta.innerHTML = 'Length: ' + selection.length + ' words';
        meta.style.top = mouseY + 10 + 'px';
        meta.style.left = mouseX + 10 + 'px';
        meta.style.visibility = 'visible';
        meta.style.position = 'absolute';
        meta.style.width = 250 + 'px';
    }
    // Lets listen to mouseup DOM events.
    function findXY() {
        var x;
        var y;
        document.addEventListener('mouseup', function (e) {
            console.log("findXY:" + JSON.stringify(e));
            var selection = window.getSelection().toString();
            if (selection.length > 0) {
                x = e.pageX;
                y = e.pageY;
            }
        }, false);
        return { x, y };
    }
    // type Coord = {
    //     x: number;
    //     y: number;
    // };
    // atStart: if true, returns coord of the beginning of the selection,
    //          if false, returns coord of the end of the selection
    // function getSelectionCoords(atStart: boolean, sel: Selection): Coord | null {
    //     // const sel = window.getSelection();
    //     // check if selection exists
    //     if (!sel.rangeCount) return null;
    //     // get range
    //     let range = sel.getRangeAt(0).cloneRange();
    //     if (!range.getClientRects) return null;
    //     // get client rect
    //     range.collapse(atStart);
    //     let rects = range.getClientRects();
    //     if (rects.length <= 0) return null;
    //     // return coord
    //     let rect = rects[0];
    //     return { x: rect.x, y: rect.y };
    // }
    // // Add bubble to the top of the page.
    // var bubble = document.createElement('div');
    // bubble.setAttribute('class', 'bubble');
    // document.body.appendChild(bubble);
    // // Lets listen to mouseup DOM events.
    // document.addEventListener('mouseup', function (e) {
    //   var selection = window.getSelection().toString();
    //   if (selection.length > 0) {
    //     translateText(e.clientX-20, e.clientY+30, selection);
    //   }
    // }, false);
    // // Close the bubble when we click on the screen.
    // document.addEventListener('mousedown', function (e) {
    //   bubble.style.visibility = 'hidden';
    // }, false);
    // function translateText(mouseX, mouseY, selection) {
    //   var url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=" + apiKey + "&text=" + selection + "&lang=" + langDirection
    //   fetch(url)
    //     .then(function(response) {
    //       return response.json();
    //     })
    //     .then(function(data) {
    //         if (/^[a-z\d\-_\s]+$/i.test(data.text[0])) {
    //           renderBubble(mouseX, mouseY, "Translation not found.");
    //         } else {
    //           renderBubble(mouseX, mouseY, data.text[0]);
    //         }
    //     })
    //     .catch(function(err) {
    //         console.error('An error ocurred', err);
    //     });
    // }
    // // Move that bubble to the appropriate location.
    // function renderBubble(mouseX, mouseY, selection) {
    //   bubble.innerHTML = selection;
    //   bubble.style.top = mouseY + 'px';
    //   bubble.style.left = mouseX + 'px';
    //   bubble.style.visibility = 'visible';
    // }
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb250ZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb250ZW50LmNzcz9hODU1Iiwid2VicGFjazovLy8uL3NyYy9hcHAvY29udGVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsMkJBQTJCLG1CQUFPLENBQUMsZ0dBQStDO0FBQ2xGOzs7QUFHQTtBQUNBLGNBQWMsUUFB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SUFDeEMsOENBQThDO0lBQzlDLDBDQUEwQztJQUMxQyxxQ0FBcUM7SUFDckMsd0NBQXdDO0lBQ3hDLHNEQUFzRDtJQUN0RCxzREFBc0Q7SUFDdEQsZ0NBQWdDO0lBQ2hDLDREQUE0RDtJQUM1RCxNQUFNO0lBQ04sYUFBYTtJQUNiLG1EQUFtRDtJQUNuRCx3REFBd0Q7SUFDeEQsd0NBQXdDO0lBQ3hDLGFBQWE7SUFDYixzREFBc0Q7SUFDdEQsd0lBQXdJO0lBQ3hJLGVBQWU7SUFDZixpQ0FBaUM7SUFDakMsZ0NBQWdDO0lBQ2hDLFNBQVM7SUFDVCw2QkFBNkI7SUFDN0IsdURBQXVEO0lBQ3ZELG9FQUFvRTtJQUNwRSxtQkFBbUI7SUFDbkIsd0RBQXdEO0lBQ3hELFlBQVk7SUFDWixTQUFTO0lBQ1QsNkJBQTZCO0lBQzdCLGtEQUFrRDtJQUNsRCxVQUFVO0lBQ1YsSUFBSTtJQUNKLG1EQUFtRDtJQUNuRCxxREFBcUQ7SUFDckQsa0NBQWtDO0lBQ2xDLHNDQUFzQztJQUN0Qyx1Q0FBdUM7SUFDdkMseUNBQXlDO0lBQ3pDLElBQUk7QUFDUixDQUFDLENBQUMiLCJmaWxlIjoiY29udGVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FwcC9jb250ZW50LnRzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYWJzb2x1dGVyZWN0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgfVxcblxcbi5idWJibGUye1xcblxcdHN0cm9rZTogIzNkODtcXG5cXHRmaWxsOiBub25lO1xcblxcdHN0cm9rZS13aWR0aDogMXB4O1xcblxcdHN0cm9rZS1saW5lY2FwOiByb3VuZDtcXG59XFxuXFxuLm5ld2RpdiB7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRib3gtc2hhZG93OiAxMHB4IDEwcHggM3B4IGxpZ2h0Z3JheTtcXG5cXHRib3JkZXItc3R5bGU6IHNvbGlkO1xcblxcdGJvcmRlci1jb2xvcjogbGlnaHRncmF5O1xcblxcdGJvcmRlci13aWR0aDogMC41cHg7XFxuXFx0b3BhY2l0eTogMC44O1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9jb250ZW50LmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9jb250ZW50LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vY29udGVudC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG5pbXBvcnQgJy4vY29udGVudC5jc3MnO1xuaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlLCBGcmFnbWVudH0gZnJvbSAncmVhY3QnO1xuXG5jaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7fSwgKHJlc3BvbnNlKSA9PiB7XG4gICAgdmFyIGNoZWNrUmVhZHkgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY2hlY2tSZWFkeSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIldlJ3JlIGluIHRoZSBpbmplY3RlZCBjb250ZW50IHNjcmlwdCFcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyB2YXIgYXBpS2V5ID0gXCJ0cm5zbC4xLjEuMjAxNzEwMzFUMDk0NzQxWi5iODYxODg3NWVmNjlhNmJiLmQ0YmFhMmI3ZWZkMzQ2ZGUzZDVkNTFjOWQ4MDVhYjNjYzE4YWFkYTlcIjtcbiAgICAvLyB2YXIgbGFuZ0RpcmVjdGlvbiA9IFwiZW4temhcIlxuICAgIHZhciBuZXdkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld2Rpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25ld2RpdicpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobmV3ZGl2KTtcbiAgICAvL1RhZWtcbiAgICB2YXIgbWV0YVJlY3RhbmdsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWV0YVJlY3RhbmdsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25ld2RpdicpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWV0YVJlY3RhbmdsZSk7XG5cbiAgICB2YXIgcGlwZXR0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgcGlwZXR0ZS5zcmMgPSBcImh0dHBzOi8vaWZoLmNjL2cvSnZscmJjLnBuZ1wiO1xuICAgIHBpcGV0dGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwaXBldHRlJyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwaXBldHRlKTtcbiAgICB2YXIgYnViYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnViYmxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYnViYmxlJyk7XG4gICAgYnViYmxlLmlkID0gJ2J1YmJsZSc7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChidWJibGUpO1xuICAgIHZhciBtZXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWV0YS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2J1YmJsZScpO1xuICAgIG1ldGEuaWQgPSAnbWV0YSdcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1ldGEpO1xuICAgIC8vIC8vIExldHMgbGlzdGVuIHRvIG1vdXNldXAgRE9NIGV2ZW50cy5cbiAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZnVuY3Rpb24gKGUpIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyLm1vdXNldXAoKS5lOlwiICsgSlNPTi5zdHJpbmdpZnkoZSkpXG4gICAgLy8gICAgIHZhciBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKTtcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJzZWxlY3Rpb24gbGVuZ3RoOiBcIiArIHNlbGVjdGlvbi5sZW5ndGgpXG4gICAgLy8gICAgIGlmIChzZWxlY3Rpb24ubGVuZ3RoID4gMCkge1xuICAgIC8vICAgICAgICAgcmVuZGVyUmVjdGFuZ2xlKGUucGFnZVgtMjAsIGUucGFnZVkrNSwgMjAwLCAxMDApO1xuICAgIC8vICAgICAgICAgcmVuZGVyUGlwZXR0ZShlLnBhZ2VYLTIwLCBlLnBhZ2VZLTMwLCA0MCwgNTApXG4gICAgLy8gICAgICAgICB0cmFuc2xhdGVUZXh0KGUucGFnZVgtMjAsIGUucGFnZVkrNSwgc2VsZWN0aW9uKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH0sIGZhbHNlKTtcbiAgICB2YXIgcGFnZVg7XG4gICAgdmFyIHBhZ2VZO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImZpbmRYWTpcIiArIEpTT04uc3RyaW5naWZ5KGUpKTtcbiAgICAgICAgdmFyIHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpO1xuICAgICAgICBpZiAoc2VsZWN0aW9uLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHBhZ2VYID0gZS5wYWdlWDtcbiAgICAgICAgICAgIHBhZ2VZID0gZS5wYWdlWTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwieCBhbmQgeTogXCIsIHBhZ2VYLCBcIiBcIiwgcGFnZVkpO1xuICAgICAgICB9XG4gICAgfSwgZmFsc2UpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjb3B5XCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29weSBhY3Rpb25cIik7XG4gICAgICAgIHZhciBzZWxlY3Rpb24gPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgLy8gdmFyIHNlbGVjdGlvbiA9IGRvY3VtZW50LmdldFNlbGVjdGlvbigpO1xuICAgICAgICAvLyB2YXIgc2VsZWN0UG9zID0gd2luZG93LmdldFNlbGVjdGlvbigpLmdldFJhbmdlQXQoMCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2VsZWN0aW9uIHBvc2l0aW9uOiBcIiwgc2VsZWN0UG9zKVxuICAgICAgICAvLyBUT0RPIDog7JWE656YIOy9lOuTnOulvCDtlajsiJjroZwg66eM65Ok7Ja07IScIGUucGFnZVgsWSDsnb3slrTsmKTquLBcbiAgICAgICAgLy8gdmFyIHBhZ2VYID0gZmluZFhZKCkueDtcbiAgICAgICAgLy8gdmFyIHBhZ2VZID0gZmluZFhZKCkueTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ4LCB5OiBcIiwgcGFnZVgsIHBhZ2VZKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJzZWxlY3Rpb24gbGVuZ3RoOiBcIiwgc2VsZWN0aW9uLnRvU3RyaW5nKCkubGVuZ3RoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJzZWxlY3RlZCB0ZXh0OiBcIiwgc2VsZWN0aW9uLnRvU3RyaW5nKCkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhzZWxlY3Rpb24uc3R5bGUpO1xuICAgICAgICBpZiAoc2VsZWN0aW9uLnRvU3RyaW5nKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb3BpcHBldGUgc3RhcnRcIik7XG4gICAgICAgICAgICB0cmFuc2xhdGVUZXh0KHBhZ2VYLCBwYWdlWSArIDUsIHNlbGVjdGlvbi50b1N0cmluZygpKTtcbiAgICAgICAgICAgIHZhciB0ZXh0SGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1YmJsZScpLmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgIHJlbmRlclJlY3RhbmdsZShwYWdlWCwgcGFnZVkgKyA1LCAyNzAsIHRleHRIZWlnaHQrMjApO1xuICAgICAgICAgICAgcmVuZGVyTWV0YShwYWdlWCwgcGFnZVkgKyB0ZXh0SGVpZ2h0ICsgMjUsIHNlbGVjdGlvbi50b1N0cmluZygpKTtcbiAgICAgICAgICAgIHZhciBtZXRhSGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21ldGEnKS5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICByZW5kZXJNZXRhUmVjdGFuZ2xlKHBhZ2VYLCBwYWdlWSArIHRleHRIZWlnaHQgKyAyNSwgMjcwLCBtZXRhSGVpZ2h0KzIwKTtcbiAgICAgICAgICAgIHJlbmRlck1ldGEocGFnZVgsIHBhZ2VZICsgdGV4dEhlaWdodCArIDI1LCBzZWxlY3Rpb24udG9TdHJpbmcoKSk7XG4gICAgICAgICAgICByZW5kZXJQaXBldHRlKHBhZ2VYLCBwYWdlWSAtIDMwLCA0MCwgNTApO1xuICAgICAgICB9XG4gICAgfSwgZmFsc2UpO1xuICAgIC8vIENsb3NlIHRoZSBidWJibGUgd2hlbiB3ZSBjbGljayBvbiB0aGUgc2NyZWVuLlxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGJ1YmJsZS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIG5ld2Rpdi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIC8vVGFla1xuICAgICAgICBtZXRhUmVjdGFuZ2xlLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgbWV0YS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIHBpcGV0dGUuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIH0sIGZhbHNlKTtcbiAgICBmdW5jdGlvbiByZW5kZXJSZWN0YW5nbGUobGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicmVuZGVyUmVjdGFuZ2xlXCIsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpXG4gICAgICAgIGlmIChkb2N1bWVudC5jcmVhdGVFbGVtZW50KSB7XG4gICAgICAgICAgICBuZXdkaXYuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgICAgICBuZXdkaXYuc3R5bGUubGVmdCA9IGxlZnQgKyBcInB4XCI7XG4gICAgICAgICAgICBuZXdkaXYuc3R5bGUudG9wID0gdG9wICsgXCJweFwiO1xuICAgICAgICAgICAgbmV3ZGl2LnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XG4gICAgICAgICAgICBuZXdkaXYuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICAgICAgbmV3ZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgICAgICBuZXdkaXYuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgICAgIG5ld2Rpdi5pZCA9ICduZXdkaXYnO1xuICAgICAgICAgICAgLy8gICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5ld2Rpdik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL1RhZWtcbiAgICBmdW5jdGlvbiByZW5kZXJNZXRhUmVjdGFuZ2xlKGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJlbmRlclJlY3RhbmdsZVwiLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KVxuICAgICAgICBpZiAoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCkge1xuICAgICAgICAgICAgbWV0YVJlY3RhbmdsZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgICAgIG1ldGFSZWN0YW5nbGUuc3R5bGUubGVmdCA9IGxlZnQgKyBcInB4XCI7XG4gICAgICAgICAgICBtZXRhUmVjdGFuZ2xlLnN0eWxlLnRvcCA9IHRvcCArIFwicHhcIjtcbiAgICAgICAgICAgIG1ldGFSZWN0YW5nbGUuc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcbiAgICAgICAgICAgIG1ldGFSZWN0YW5nbGUuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICAgICAgbWV0YVJlY3RhbmdsZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgICAgICAgICAgbWV0YVJlY3RhbmdsZS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgICAgbWV0YVJlY3RhbmdsZS5pZCA9ICduZXdkaXYnO1xuICAgICAgICAgICAgLy8gICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5ld2Rpdik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJQaXBldHRlKGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICBpZiAoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCkge1xuICAgICAgICAgICAgcGlwZXR0ZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgICAgIHBpcGV0dGUuc3R5bGUubGVmdCA9IGxlZnQgKyBcInB4XCI7XG4gICAgICAgICAgICBwaXBldHRlLnN0eWxlLnRvcCA9IHRvcCArIFwicHhcIjtcbiAgICAgICAgICAgIHBpcGV0dGUuc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcbiAgICAgICAgICAgIHBpcGV0dGUuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICAgICAgcGlwZXR0ZS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgICAgcGlwZXR0ZS5pZCA9ICdwaXBldHRlJztcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGVUZXh0KG1vdXNlWCwgbW91c2VZLCBzZWxlY3Rpb24pIHtcbiAgICAgICAgcmVuZGVyQnViYmxlKG1vdXNlWCwgbW91c2VZLCBzZWxlY3Rpb24pO1xuICAgICAgICAvL1RhZWtcbiAgICAgICAgLy8gcmVuZGVyTWV0YShtb3VzZVgsIG1vdXNlWSwgc2VsZWN0aW9uKTtcbiAgICB9XG4gICAgLy8gTW92ZSB0aGF0IGJ1YmJsZSB0byB0aGUgYXBwcm9wcmlhdGUgbG9jYXRpb24uXG4gICAgZnVuY3Rpb24gcmVuZGVyQnViYmxlKG1vdXNlWCwgbW91c2VZLCBzZWxlY3Rpb24pIHtcblx0XHQvL1RhZWtcbiAgICAgICAgaWYoc2VsZWN0aW9uLnRvU3RyaW5nKCkubGVuZ3RoID4gMTAwKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTGVuZ3RoIG92ZXIgMTAwXCIpO1xuICAgICAgICAgICAgc2VsZWN0aW9uID0gc2VsZWN0aW9uLnN1YnN0cmluZygwLDk5KSsnLi4uJztcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxlbmd0aCB1bmRlciAxMDBcIik7XG4gICAgICAgIH1cbiAgICAgICAgYnViYmxlLmlubmVySFRNTCA9IHNlbGVjdGlvbjtcbiAgICAgICAgYnViYmxlLnN0eWxlLnRvcCA9IG1vdXNlWSArIDEwICsgJ3B4JztcbiAgICAgICAgYnViYmxlLnN0eWxlLmxlZnQgPSBtb3VzZVggKyAxMCArICdweCc7XG4gICAgICAgIGJ1YmJsZS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICBidWJibGUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICBidWJibGUuc3R5bGUud2lkdGggPSAyNTAgKyAncHgnO1xuICAgIH1cbiAgICAvL1RhZWtcbiAgICBmdW5jdGlvbiByZW5kZXJNZXRhKG1vdXNlWCwgbW91c2VZLCBzZWxlY3Rpb24pIHtcbiAgICAgICAgbWV0YS5pbm5lckhUTUwgPSAnTGVuZ3RoOiAnK3NlbGVjdGlvbi5sZW5ndGgrJyB3b3Jkcyc7XG4gICAgICAgIG1ldGEuc3R5bGUudG9wID0gbW91c2VZICsgMTAgKyAncHgnO1xuICAgICAgICBtZXRhLnN0eWxlLmxlZnQgPSBtb3VzZVggKyAxMCArICdweCc7XG4gICAgICAgIG1ldGEuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgbWV0YS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIG1ldGEuc3R5bGUud2lkdGggPSAyNTAgKyAncHgnO1xuICAgIH1cblxuICAgIC8vIExldHMgbGlzdGVuIHRvIG1vdXNldXAgRE9NIGV2ZW50cy5cbiAgICBmdW5jdGlvbiBmaW5kWFkoKSB7XG4gICAgICAgIHZhciB4O1xuICAgICAgICB2YXIgeTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpbmRYWTpcIiArIEpTT04uc3RyaW5naWZ5KGUpKTtcbiAgICAgICAgICAgIHZhciBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGlmIChzZWxlY3Rpb24ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHggPSBlLnBhZ2VYO1xuICAgICAgICAgICAgICAgIHkgPSBlLnBhZ2VZO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIHJldHVybiB7IHgsIHkgfTtcbiAgICB9XG4gICAgLy8gdHlwZSBDb29yZCA9IHtcbiAgICAvLyAgICAgeDogbnVtYmVyO1xuICAgIC8vICAgICB5OiBudW1iZXI7XG4gICAgLy8gfTtcbiAgICAvLyBhdFN0YXJ0OiBpZiB0cnVlLCByZXR1cm5zIGNvb3JkIG9mIHRoZSBiZWdpbm5pbmcgb2YgdGhlIHNlbGVjdGlvbixcbiAgICAvLyAgICAgICAgICBpZiBmYWxzZSwgcmV0dXJucyBjb29yZCBvZiB0aGUgZW5kIG9mIHRoZSBzZWxlY3Rpb25cbiAgICAvLyBmdW5jdGlvbiBnZXRTZWxlY3Rpb25Db29yZHMoYXRTdGFydDogYm9vbGVhbiwgc2VsOiBTZWxlY3Rpb24pOiBDb29yZCB8IG51bGwge1xuICAgIC8vICAgICAvLyBjb25zdCBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgLy8gICAgIC8vIGNoZWNrIGlmIHNlbGVjdGlvbiBleGlzdHNcbiAgICAvLyAgICAgaWYgKCFzZWwucmFuZ2VDb3VudCkgcmV0dXJuIG51bGw7XG4gICAgLy8gICAgIC8vIGdldCByYW5nZVxuICAgIC8vICAgICBsZXQgcmFuZ2UgPSBzZWwuZ2V0UmFuZ2VBdCgwKS5jbG9uZVJhbmdlKCk7XG4gICAgLy8gICAgIGlmICghcmFuZ2UuZ2V0Q2xpZW50UmVjdHMpIHJldHVybiBudWxsO1xuICAgIC8vICAgICAvLyBnZXQgY2xpZW50IHJlY3RcbiAgICAvLyAgICAgcmFuZ2UuY29sbGFwc2UoYXRTdGFydCk7XG4gICAgLy8gICAgIGxldCByZWN0cyA9IHJhbmdlLmdldENsaWVudFJlY3RzKCk7XG4gICAgLy8gICAgIGlmIChyZWN0cy5sZW5ndGggPD0gMCkgcmV0dXJuIG51bGw7XG4gICAgLy8gICAgIC8vIHJldHVybiBjb29yZFxuICAgIC8vICAgICBsZXQgcmVjdCA9IHJlY3RzWzBdO1xuICAgIC8vICAgICByZXR1cm4geyB4OiByZWN0LngsIHk6IHJlY3QueSB9O1xuICAgIC8vIH1cbiAgICAvLyAvLyBBZGQgYnViYmxlIHRvIHRoZSB0b3Agb2YgdGhlIHBhZ2UuXG4gICAgLy8gdmFyIGJ1YmJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vIGJ1YmJsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2J1YmJsZScpO1xuICAgIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYnViYmxlKTtcbiAgICAvLyAvLyBMZXRzIGxpc3RlbiB0byBtb3VzZXVwIERPTSBldmVudHMuXG4gICAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgLy8gICB2YXIgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCk7XG4gICAgLy8gICBpZiAoc2VsZWN0aW9uLmxlbmd0aCA+IDApIHtcbiAgICAvLyAgICAgdHJhbnNsYXRlVGV4dChlLmNsaWVudFgtMjAsIGUuY2xpZW50WSszMCwgc2VsZWN0aW9uKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9LCBmYWxzZSk7XG4gICAgLy8gLy8gQ2xvc2UgdGhlIGJ1YmJsZSB3aGVuIHdlIGNsaWNrIG9uIHRoZSBzY3JlZW4uXG4gICAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICAvLyAgIGJ1YmJsZS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgLy8gfSwgZmFsc2UpO1xuICAgIC8vIGZ1bmN0aW9uIHRyYW5zbGF0ZVRleHQobW91c2VYLCBtb3VzZVksIHNlbGVjdGlvbikge1xuICAgIC8vICAgdmFyIHVybCA9IFwiaHR0cHM6Ly90cmFuc2xhdGUueWFuZGV4Lm5ldC9hcGkvdjEuNS90ci5qc29uL3RyYW5zbGF0ZT9rZXk9XCIgKyBhcGlLZXkgKyBcIiZ0ZXh0PVwiICsgc2VsZWN0aW9uICsgXCImbGFuZz1cIiArIGxhbmdEaXJlY3Rpb25cbiAgICAvLyAgIGZldGNoKHVybClcbiAgICAvLyAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAvLyAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIC8vICAgICB9KVxuICAgIC8vICAgICAudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgLy8gICAgICAgICBpZiAoL15bYS16XFxkXFwtX1xcc10rJC9pLnRlc3QoZGF0YS50ZXh0WzBdKSkge1xuICAgIC8vICAgICAgICAgICByZW5kZXJCdWJibGUobW91c2VYLCBtb3VzZVksIFwiVHJhbnNsYXRpb24gbm90IGZvdW5kLlwiKTtcbiAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgIHJlbmRlckJ1YmJsZShtb3VzZVgsIG1vdXNlWSwgZGF0YS50ZXh0WzBdKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfSlcbiAgICAvLyAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuICAgIC8vICAgICAgICAgY29uc29sZS5lcnJvcignQW4gZXJyb3Igb2N1cnJlZCcsIGVycik7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cbiAgICAvLyAvLyBNb3ZlIHRoYXQgYnViYmxlIHRvIHRoZSBhcHByb3ByaWF0ZSBsb2NhdGlvbi5cbiAgICAvLyBmdW5jdGlvbiByZW5kZXJCdWJibGUobW91c2VYLCBtb3VzZVksIHNlbGVjdGlvbikge1xuICAgIC8vICAgYnViYmxlLmlubmVySFRNTCA9IHNlbGVjdGlvbjtcbiAgICAvLyAgIGJ1YmJsZS5zdHlsZS50b3AgPSBtb3VzZVkgKyAncHgnO1xuICAgIC8vICAgYnViYmxlLnN0eWxlLmxlZnQgPSBtb3VzZVggKyAncHgnO1xuICAgIC8vICAgYnViYmxlLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgLy8gfVxufSkiXSwic291cmNlUm9vdCI6IiJ9