"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var _createClass=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),_get=function t(e,r,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,r);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,r,n)}if("value"in o)return o.value;var u=o.get;if(void 0!==u)return u.call(n)},SkinnedMesh=function(t){function e(t,r){_classCallCheck(this,e);var n=_possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,r));return n.idMatrix=e.defaultMatrix(),n.bones=[],n.boneMatrices=[],n}return _inherits(e,t),_createClass(e,[{key:"update",value:function(t){_get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"update",this).call(this)}},{key:"boneCount",get:function(){return this.bones.length}},{key:"matrixType",set:function(t){this.idMatrix=e[t]()}}],[{key:"defaultMatrix",value:function(){return new THREE.Matrix4}}]),e}(THREE.Mesh);
//# sourceMappingURL=custom.js.map
