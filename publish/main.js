/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/phina.js/build/phina.esm.js":
/*!**************************************************!*
  !*** ./node_modules/phina.js/build/phina.esm.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Accelerometer": () => /* binding */ Accelerometer,
/* harmony export */   "Accessory": () => /* binding */ Accessory,
/* harmony export */   "Ajax": () => /* binding */ Ajax,
/* harmony export */   "Asset": () => /* binding */ Asset,
/* harmony export */   "AssetLoader": () => /* binding */ AssetLoader,
/* harmony export */   "AssetManager": () => /* binding */ AssetManager,
/* harmony export */   "BaseApp": () => /* binding */ BaseApp,
/* harmony export */   "Button": () => /* binding */ Button,
/* harmony export */   "Canvas": () => /* binding */ Canvas,
/* harmony export */   "CanvasApp": () => /* binding */ CanvasApp,
/* harmony export */   "CanvasLayer": () => /* binding */ CanvasLayer,
/* harmony export */   "CanvasRenderer": () => /* binding */ CanvasRenderer,
/* harmony export */   "ChangeDispatcher": () => /* binding */ ChangeDispatcher,
/* harmony export */   "Circle": () => /* binding */ Circle,
/* harmony export */   "CircleGauge": () => /* binding */ CircleGauge,
/* harmony export */   "CircleShape": () => /* binding */ CircleShape,
/* harmony export */   "Collision": () => /* binding */ Collision,
/* harmony export */   "Color": () => /* binding */ Color,
/* harmony export */   "CountScene": () => /* binding */ CountScene,
/* harmony export */   "DisplayElement": () => /* binding */ DisplayElement,
/* harmony export */   "DisplayScene": () => /* binding */ DisplayScene,
/* harmony export */   "DomApp": () => /* binding */ DomApp,
/* harmony export */   "Draggable": () => /* binding */ Draggable,
/* harmony export */   "Element": () => /* binding */ Element,
/* harmony export */   "EventDispatcher": () => /* binding */ EventDispatcher,
/* harmony export */   "File": () => /* binding */ File,
/* harmony export */   "Flickable": () => /* binding */ Flickable,
/* harmony export */   "Flow": () => /* binding */ Flow,
/* harmony export */   "Font": () => /* binding */ Font,
/* harmony export */   "FrameAnimation": () => /* binding */ FrameAnimation,
/* harmony export */   "GameApp": () => /* binding */ GameApp,
/* harmony export */   "GamepadManager": () => /* binding */ GamepadManager,
/* harmony export */   "Gauge": () => /* binding */ Gauge,
/* harmony export */   "Grid": () => /* binding */ Grid,
/* harmony export */   "HeartShape": () => /* binding */ HeartShape,
/* harmony export */   "Input": () => /* binding */ Input,
/* harmony export */   "Interactive": () => /* binding */ Interactive,
/* harmony export */   "Keyboard": () => /* binding */ Keyboard,
/* harmony export */   "Label": () => /* binding */ Label,
/* harmony export */   "LabelArea": () => /* binding */ LabelArea,
/* harmony export */   "Layer": () => /* binding */ Layer,
/* harmony export */   "LoadingScene": () => /* binding */ LoadingScene,
/* harmony export */   "ManagerScene": () => /* binding */ ManagerScene,
/* harmony export */   "Matrix33": () => /* binding */ Matrix33,
/* harmony export */   "Mouse": () => /* binding */ Mouse,
/* harmony export */   "Object2D": () => /* binding */ Object2D,
/* harmony export */   "PathShape": () => /* binding */ PathShape,
/* harmony export */   "PauseScene": () => /* binding */ PauseScene,
/* harmony export */   "Physical": () => /* binding */ Physical,
/* harmony export */   "PlainElement": () => /* binding */ PlainElement,
/* harmony export */   "PolygonShape": () => /* binding */ PolygonShape,
/* harmony export */   "QueryString": () => /* binding */ QueryString,
/* harmony export */   "Random": () => /* binding */ Random,
/* harmony export */   "Rect": () => /* binding */ Rect,
/* harmony export */   "RectangleShape": () => /* binding */ RectangleShape,
/* harmony export */   "ResultScene": () => /* binding */ ResultScene,
/* harmony export */   "Scene": () => /* binding */ Scene,
/* harmony export */   "Script": () => /* binding */ Script,
/* harmony export */   "Shape": () => /* binding */ Shape,
/* harmony export */   "SoundManager": () => /* binding */ SoundManager,
/* harmony export */   "SplashScene": () => /* binding */ SplashScene,
/* harmony export */   "Sprite": () => /* binding */ Sprite,
/* harmony export */   "SpriteSheet": () => /* binding */ SpriteSheet,
/* harmony export */   "StarShape": () => /* binding */ StarShape,
/* harmony export */   "Support": () => /* binding */ Support,
/* harmony export */   "Texture": () => /* binding */ Texture,
/* harmony export */   "ThreeLayer": () => /* binding */ ThreeLayer,
/* harmony export */   "Ticker": () => /* binding */ Ticker,
/* harmony export */   "TitleScene": () => /* binding */ TitleScene,
/* harmony export */   "Touch": () => /* binding */ Touch,
/* harmony export */   "TouchList": () => /* binding */ TouchList,
/* harmony export */   "TriangleShape": () => /* binding */ TriangleShape,
/* harmony export */   "Tween": () => /* binding */ Tween,
/* harmony export */   "Tweener": () => /* binding */ Tweener,
/* harmony export */   "Twitter": () => /* binding */ Twitter,
/* harmony export */   "Updater": () => /* binding */ Updater,
/* harmony export */   "Vector2": () => /* binding */ Vector2,
/* harmony export */   "Vector3": () => /* binding */ Vector3,
/* harmony export */   "Wave": () => /* binding */ Wave,
/* harmony export */   "phina": () => /* binding */ phina$1
/* harmony export */ });
/*!
 * phina.js v0.2.3
 * Released under the MIT license
 *
 * Copyright (C) phi
 */
/**
 * @class global.Object
 * Objectの拡張
 */

/**
 * 関数を追加
 * @param   {String} key name
 * @param   {Function} function
 */
function $method(name, fn) {
  Object.defineProperty(this, name, {
    value: fn,
    enumerable: false,
    writable: true
  });
}

/**
 * @method accessor
 * アクセッサ(セッター/ゲッター)を定義する
 */
// Object.prototype.$method("accessor", function(name, param) {
function accessor(name, param) {
  Object.defineProperty(this, name, {
    set: param["set"],
    get: param["get"],
    enumerable: false,
    configurable: true,
  });
}

/**
 * @method forIn
 * オブジェクト用ループ処理
 */
function forIn(fn, self) {
  self = self || this;

  Object.keys(this).forEach(function(key, index) {
    var value = this[key];

    fn.call(self, key, value, index);
  }, this);

  return this;
}

/**
 * @method  $extend
 * 他のライブラリと競合しちゃうので extend -> $extend としました
 */
function $extend() {
// Object.prototype.$method("$extend", function() {
  Array.prototype.forEach.call(arguments, function(source) {
    for (var property in source) {
      this[property] = source[property];
    }
  }, this);
  return this;
}

/**
 * @method  $safe
 * 安全拡張
 * 上書きしない
 */
function $safe(source) {
// Object.prototype.$method("$safe", function(source) {
  Array.prototype.forEach.call(arguments, function(source) {
    for (var property in source) {
      if (this[property] === undefined) this[property] = source[property];
    }
  }, this);
  return this;
}

/**
 * @method $watch
 * @param  {string} key       [description]
 * @param  {function} callback  [description]
 * @return {[type]}           [description]
 */
function $watch(key, callback) {
// Object.prototype.$method('$watch', function(key, callback) {
  var target = this;
  var descriptor = null;

  while(target) {
    descriptor = Object.getOwnPropertyDescriptor(target, key);
    if (descriptor) {
      break;
    }
    target = Object.getPrototypeOf(target);
  }

  // すでにアクセッサーとして存在する場合
  if (descriptor) {
    // データディスクリプタの場合
    if (descriptor.value !== undefined) {
      var tempKey = '__' + key;
      var tempValue = this[key];

      this[tempKey] = tempValue;

      accessor.call(this, key, {
      // this.accessor(key, {
        get: function() {
          return this[tempKey];
        },
        set: function(v) {
          var old = this[tempKey];
          this[tempKey] = v;
          callback.call(this, v, old);
        },
      });
    }
    // アクセサディスクリプタの場合
    else {
      accessor.call(this, key, {
      // this.accessor(key, {
        get: function() {
          return descriptor.get.call(this);
        },
        set: function(v) {
          var old = descriptor.get.call(this);
          descriptor.set.call(this, v);
          callback.call(this, v, old);
        },
      });
    }
  }
  else {
    var accesskey = '__' + key;

    accessor.call(this, key, {
    // this.accessor(key, {
      get: function() {
        return this[accesskey];
      },
      set: function(v) {
        var old = this[accesskey];
        this[accesskey] = v;
        callback.call(this, v, old);
      },
    });
  }
}

/*
 * array.js
 */

/**
 * @property {Object} first
 * 最初の要素
 *
 * ### Example
 *     arr = [6, 5, 2, 3, 1, 4];
 *     arr.first; // => 6
 */
const first = {
// Array.prototype.accessor("first", {
  "get": function()   { return this[0]; },
  "set": function(v)  { this[0] = v; }
};

/**
 * @property {Object} last
 * 最後の要素
 *
 * ### Example
 *     arr = [6, 5, 2, 3, 1, 4];
 *     arr.last; // => 4
 */
const last = {
// Array.prototype.accessor("last", {
  "get": function()   { return this[this.length-1]; },
  "set": function(v)  { this[this.length-1] = v; }
};


/**
 * @method at
 * 指定したインデックスの要素を返します（ループ・負数の指定可）。
 *
 * 添字が負数の場合は末尾からのオフセットとみなします。末尾の要素が -1 番目になります。  
 * 添字の絶対値が Array.length 以上の場合はループします。
 *
 * ### Example
 *     arr = ['a', 'b', 'c', 'd', 'e', 'f'];
 *     arr.at(0);  // => 'a'
 *     arr.at(6);  // => 'a'
 *     arr.at(13); // => 'b'
 *     arr.at(-1); // => 'f'
 *     arr.at(-8); // => 'e'
 *
 * @param {Number} index 添字
 * @return {Object} 添字で指定された要素
 */
function at(i) {
// Array.prototype.$method("at", function(i) {
  i%=this.length;
  i+=this.length;
  i%=this.length;
  return this[i];
}

/**
 * @method erase
 * @chainable
 * 指定したオブジェクトと一致した最初の要素を削除します。
 *
 * ### Example
 *     arr1 = ['a', 'b', 'b', 'c'];
 *     arr2 = arr1.erase('b'); // => ['a', 'b', 'c']
 *     arr1 === arr2;          // => true
 *
 * @param {Object} elm 削除したいオブジェクト
 */
function erase(elm) {
// Array.prototype.$method("erase", function(elm) {
  var index  = this.indexOf(elm);
  if (index >= 0) {
    this.splice(index, 1);
  }
  return this;
}


/**
 * @method clear
 * @chainable
 * 自身を空の配列にします。
 *
 * ### Example
 *     arr = [1, 2, [3, 4]];
 *     arr.clear(); // => []
 */
function clear(deep) {
// Array.prototype.$method("clear", function() {
  this.length = 0;
  return this;
}

/**
 * @method contains
 * 指定した要素が配列に含まれているかをチェックします。
 *
 * 比較には厳密な同値（三重イコール演算子 === で使われるのと同じ方法）を用います。
 *
 * ### Example
 *     arr = [6, 5, 2, 3, 1, 4];
 *     arr.contains(3);     // => true
 *     arr.contains(3, 4);  // => false
 *     arr.contains(3, -4); // => true
 *     arr.contains("6");   // => false
 *
 * @param {Object} item チェックするオブジェクト
 * @param {Number} [fromIndex=0] 検索を始める位置。負数を指定した場合は末尾からのオフセットと見なします。
 * @return {Boolean} チェックの結果
 */
function contains(item, fromIndex) {
// Array.prototype.$method("contains", function(item, fromIndex) {
  return this.indexOf(item, fromIndex) != -1;
}

/**
 * @method clone
 * 自身のコピーを生成して返します。
 *
 * ### Example
 *     arr1 = [1, 2, [3, 4]];
 *     arr2 = arr1.clone();      // => [1, 2, [3, 4]]
 *     arr1[2] === arr2[2];      // => true
 *     arr1[2][0] = 9;
 *     arr2;                     // => [1, 2, [9, 4]]
 *     arr1 = [1, 2, [3, 4]];
 *     arr2 = arr1.clone(true);  // => [1, 2, [3, 4]]
 *     arr1[2] === arr2[2];      // => false
 *     arr1[2][0] = 9;
 *     arr2;                     // => [1, 2, [3, 4]]
 *
 * @param {Boolean} [deep=false] 配列のネストをたどって複製するかどうか
 * @return {Object} 新しい配列
 */
function clone(deep) {
// Array.prototype.$method("clone", function(deep) {
  if (deep === true) ;
  else {
    return Array.prototype.slice.apply(this);
  }
}

/**
 * @method range
 * @chainable
 * 自身を等差数列（一定間隔の整数値の列）とします。
 *
 * - 引数が1つの場合、0～end（end含まず）の整数の配列です。  
 * - 引数が2つの場合、start～end（end含まず）の整数の配列です。  
 * - 引数が3つの場合、start～end（end含まず）かつ start + n * step (nは整数)を満たす整数の配列です。
 *
 * ### Example
 *     arr = [];
 *     arr.range(4);        // => [0, 1, 2, 3]
 *     arr.range(2, 5);     // => [2, 3, 4]
 *     arr.range(2, 14, 5); // => [2, 7, 12]
 *     arr.range(2, -3);    // => [2, 1, 0, -1, -2]
 *
 * @param {Number} start 最初の値（デフォルトは 0）
 * @param {Number} end 最後の値（省略不可）
 * @param {Number} [step=1または-1] 間隔
 */
function range(start, end, step) {
// Array.prototype.$method("range", function(start, end, step) {
  clear.call(this);
  // this.clear();
  
  if (arguments.length == 1) {
    for (var i=0; i<start; ++i) this[i] = i;
  }
  else if (start < end) {
    step = step || 1;
    if (step > 0) {
      for (var i=start, index=0; i<end; i+=step, ++index) {
        this[index] = i;
      }
    }
  }
  else {
    step = step || -1;
    if (step < 0) {
      for (var i=start, index=0; i>end; i+=step, ++index) {
        this[index] = i;
      }
    }
  }
  
  return this;
}

/**
 * @method each
 * @chainable
 * 要素を順番に渡しながら関数を繰り返し実行します。
 *
 * メソッドチェーンに対応していますが、このメソッドによって自分自身は変化しません。
 *
 * ###Reference
 * - [Array.prototype.forEach() - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
 *
 * ### Example
 *     arr = [1, 2, 3];
 *     arr.each( function(elm) {
 *       console.log(elm * elm)
 *     });
 *     // => 1
 *     //    4
 *     //    9
 *
 * @param {Function} callback 各要素に対して実行するコールバック関数
 * @param {Object} [self=this] callback 内で this として参照される値
 */
function each() {
// Array.prototype.$method("each", function() {
  this.forEach.apply(this, arguments);
  return this;
}


// ==========
// 以下はes2015以降に存在するため、保留
// ==========


// /**
//  * @method find
//  * 各要素を引数にして関数を実行し、その値が真となる（＝条件にマッチする）最初の要素を返します。
//  *
//  * どの要素もマッチしなければ undefined を返します。
//  *
//  * ### Example
//  *     arr = ['foo', 'bar', 'hoge', 'fuga'];
//  *     arr.find( function(elm) {
//  *       return elm.indexOf('a') >= 0;
//  *     });
//  *     // => 'bar'
//  *
//  * @param {Function} callback 各要素に対して実行するコールバック関数
//  * @param {Object} [self=this] callback 内で this として参照される値。デフォルトは呼び出し時の this。
//  * @return {Object} 条件にマッチした最初の要素、または undefined
//  */
// Array.prototype.$method("find", function(fn, self) {
//   var target = null;

//   this.some(function(elm, i) {
//     if (fn.call(self, elm, i, this)) {
//       target = elm;
//       return true;
//     }
//   });

//   return target;
// });

// /**
//  * @method findIndex
//  * 各要素を引数にして関数を実行し、その値が真となる（＝条件にマッチする）最初のインデックスを返します。
//  *
//  * どの要素もマッチしなければ -1 を返します。
//  *
//  * ### Example
//  *     arr = ['foo', 'bar', 'hoge', 'fuga'];
//  *     arr.findIndex( function(elm) {
//  *       return elm.indexOf('a') >= 0;
//  *     });
//  *     // => 1
//  *
//  * @param {Function} callback 各要素に対して実行するコールバック関数
//  * @param {Object} [self=this] callback 内で this として参照される値。デフォルトは呼び出し時の this。
//  * @return {Object} 条件にマッチした最初のインデックス、または -1
//  */
// Array.prototype.$method("findIndex", function(fn, self) {
//   var target = -1;

//   this.some(function(elm, i) {
//     if (fn.call(self, elm, i, this)) {
//       target = i;
//       return true;
//     }
//   });

//   return target;
// });

/**
 * @method of
 * @static
 * ES6 準拠の of 関数です。可変長引数をとって Array オブジェクトにして返します。
 *
 * ### Example
 *     Array.of();        // => []
 *     Array.of(1, 2, 3); // => [1, 2, 3]
 *
 * @param {Object} elementN 生成する配列の要素
 * @return {Array} 生成した配列
 */
// Array.$method("of", function() {
//   return Array.prototype.slice.call(arguments);
// });

/**
 * @method from
 * @static
 * ES6 準拠の from 関数です。array-like オブジェクトかiterable オブジェクトから新しい配列を生成します。
 *
 * array-like オブジェクトとは、length プロパティを持ち、数字の添字でアクセス可能なオブジェクトのことです。
 * 通常の配列のほか、String、arguments、NodeList なども array-like オブジェクトです。
 *
 * iterable オブジェクトとは、Symbol.iterator プロパティを持つオブジェクトのことです。
 * 通常の配列のほか、String、arguments、NodeList なども iterable オブジェクトです。
 *
 * ### Example
 *     Array.from([1, 2, 3], function(elm){ return elm * elm} ); // => [1, 4, 9]
 *     Array.from("foo");                                        // => ["f", "o", "o"]
 *     Array.from( document.querySelectorAll("span"))            // => [Element, Element, Element,...]
 *
 * @param {Object} arrayLike 配列に変換する array-like オブジェクト
 * @param {Function} [callback] arrayLike のすべての要素に対して実行するマップ関数
 * @param {Object} [context] callback 内で this として参照される値
 * @return {Array} 生成した配列
 */
// Array.$method("from", function(arrayLike, callback, context) {
//   if (!Object(arrayLike).length) return [];

//   var result = [];
//   if (Symbol && Symbol.iterator && arrayLike[Symbol.iterator]) {
//       var iterator = arrayLike[Symbol.iterator]();
//       while (true) {
//           var iteratorResult = iterator.next();
//           if (iteratorResult.done) break;

//           var value = typeof callback === 'function' ? callback.bind(context || this)(iteratorResult.value) : iteratorResult.value;
//           result.push(value);
//       }
//       return result;
//   }

//   for (var i = 0, len = arrayLike.length; i < len; i++) {
//       result.push(arrayLike[i]);
//   }
//   return result.map(typeof callback == 'function' ? callback : function(item) {
//     return item;
//   }, context);
// });

/*
 * phina.js namespace
 */
var phina$1 = phina$1 || {};

// 一旦拡張
// $method.call(phina, "hoge", ...)としても良いが、書き換えが大変なため
phina$1.$method = function(...args) {
// phina.prototype.$method = function(...args) { // ng
  return $method.call(this, ...args)
};

// ;(function() {

/**
 * @class phina
 * # phina.js namespace
 * phina.js のネームスペースです。phina.js の提供する機能は（コア拡張以外）全てこのオブジェクトに入っています。
 *
 * ## phina.js のクラス定義について
 *
 * phina.js では独自のクラスシステムを実装しています。
 * phina.js のクラスの特徴としては new 構文を使用しないため、メソッドチェーンがしやすいことや、文字列でクラスを定義したり親クラスを指定したりできる点が挙げられます。
 * 文字列を使用できることで、クラスを定義する段階で親クラスが指定されていなくても、クラスを呼び出す段階で親クラスが定義されていればいいというメリットがあります。
 *
 * クラスの定義には {@link #createClass}, {@link #define} を使用します。詳しい使い方はそれぞれの関数の項を参照してください。
 *
 * ## クラスについての補足
 *
 * phina.js のクラスでは superClass を指定すると以下のメソッドが自動で追加されます。
 *
 * - superInit(): 親クラスのコンストラクタを呼び出す（初期化）
 * - superMethod(): 親クラスのメソッドを呼び出す
 *
 * superInit は引数を変えることで親クラスのコンストラクタを呼ぶときの引数を変えられます。
 * superMethod は一つ目の引数に呼び出したい親クラスのメソッド名を文字列で、二つ目以降に呼び出したいメソッドの引数を渡します。
 *
 * また phina.js のクラスでは以下の特別な役割をもったプロパティ、メソッドが存在します。
 *
 * - _accessor: アクセッサー（ゲッターとセッター）を定義するためのプロパティ
 * - _static: static メンバを定義するためのプロパティ
 * - _defined(): クラスが定義されたときに呼ばれるメソッド
 *
 * ### _accessor の使用例
 *     var Class = phina.createClass({
 *       init: function() {
 *         ...
 *       },
 *
 *       _accessor: function() {
 *         value: {
 *           get: function() {
 *             return this._value;
 *           },
 *
 *           set: function(v) {
 *             this._value = v;
 *             console.log('valueがセットされました！');
 *           }
 *         }
 *       }
 *     });
 *
 * ### _static の使用例
 *     var Class = phina.createClass({
 *       init: function() {
 *         ...
 *       },
 *
 *       _static: {
 *
 *         staticProperty1: 1,
 *         staticProperty2: 2,
 *
 *         staticMethod1: function(){},
 *         staticMethod2: function(){}
 *
 *       }
 *     });
 *
 *     console.log(Class.staticProperty1); // => 1
 *
 * ### _defined の使用例
 *     var Class = phina.createClass({
 *       init: function() {
 *       },
 *
 *       _defined: function() {
 *         console.log('defined!');
 *       }
 *     }); // => defined!
 */

/**
 * @property {String} [VERSION = <%= version %>]
 * phina.js のバージョンです。
 *
 * @member phina
 * @static
 */
phina$1.VERSION = "0.2.3";

/**
 * @method isNode
 * Node.js の module かどうかをチェックします。
 *
 * @member phina
 * @static
 */
phina$1.$method('isNode', function() {
  return ("object" !== 'undefined');
});

/**
 * @method namespace
 * 引数は関数で、その関数内での this は phina になります。
 *
 * @param {Function} fn 関数
 * @member phina
 * @static
 */
phina$1.$method('namespace', function(fn) {
  fn.call(this);
});

var ns = phina$1.isNode() ? __webpack_require__.g : window;

/**
 * @property {Object} global
 * Node.js なら global ブラウザなら window を返します。
 * ゲッターのみ定義されています。
 *
 * @member phina
 * @readonly
 * @static
 */
// phina.accessor('global', {
accessor.call(phina$1, 'global', {
  get: function() {
    return ns;
  },
});


/**
 * @method testUA
 * 引数の RegExp オブジェクトとユーザーエージェントを比較して返します。
 *
 * @param {RegExp}
 * @return {Boolean}
 * @member phina
 * @static
 */
phina$1.$method('testUA', function(regExp) {
  if (!phina$1.global.navigator) return false;
  var ua = phina$1.global.navigator.userAgent;
  return regExp.test(ua);
});

/**
 * @method isAndroid
 * Android かどうかを返します。
 *
 * @return {Boolean} Android かどうか
 * @member phina
 * @static
 */
phina$1.$method('isAndroid', function() {
  return phina$1.testUA(/Android/);
});

/**
 * @method isIPhone
 * iPhone かどうかを返します。
 *
 * @return {Boolean} iPhone かどうか
 * @member phina
 * @static
 */
phina$1.$method('isIPhone', function() {
  return phina$1.testUA(/iPhone/);
});

/**
 * @method isIPad
 * iPad かどうかを返します。
 *
 * @return {Boolean} iPad かどうか
 * @member phina
 * @static
 */
phina$1.$method('isIPad', function() {
  return phina$1.testUA(/iPad/);
});

/**
 * @method isIOS
 * iOS かどうかを返します。
 *
 * @return {Boolean} iOS かどうか
 * @member phina
 * @static
 */
phina$1.$method('isIOS', function() {
  return phina$1.testUA(/iPhone|iPad/);
});

/**
 * @method isMobile
 * モバイルかどうかを返します。具体的には Android, iPhone, iPad のいずれかだと true になります。
 *
 * @return {Boolean} モバイルかどうか
 * @member phina
 * @static
 */
phina$1.$method('isMobile', function() {
  return phina$1.testUA(/iPhone|iPad|Android/);
});

// // support node.js
// if (phina.isNode()) {
//   module.exports = phina;
// }

// ns.phina = phina;

// })(this);


phina$1.namespace(function() {

  /**
   * @method createClass
   * クラスを作成する関数です。
   * 親クラスの指定は文字列でも可能です。
   * 何も継承しない場合 superClass の指定は不要です。また、親クラスを継承している場合、コンストラクタ内で this.superInit() を実行して親クラスを初期化することが必須です。
   *
   * ### Example
   *     var Class = phina.createClass({
   * 　　  superClass: 'namespace.Super',//親クラス継承
   *
   * 　　  //メンバ変数
   * 　　  member1: 100,
   * 　　  member2: 'test',
   * 　　  member3: null,
   *
   *
   * 　　  //コンストラクタ
   * 　　  //Class()を呼び出したとき実行される
   * 　　  init: function(a, b){
   * 　　    //スーパークラス(継承したクラス)のinit
   * 　　    this.superInit(a, b);
   * 　　    this.a = a;
   * 　　    this.b = b;
   * 　　  },
   * 　　
   * 　　  //メソッド
   * 　　  method1: function(){},
   * 　　  method2: function(){},
   * 　　
   * 　　});
   *
   * @param {Object}
   * @return {Function} クラス
   * @member phina
   * @static
   */
  phina$1.$method('createClass', function(params) {

    var _class = function() {
      var instance = new _class.prototype._creator();
      _class.prototype.init.apply(instance, arguments);
      return instance;
    };

    if (params.superClass) {
      _class.prototype = Object.create(params.superClass.prototype);
      params.init.owner = _class;
      _class.prototype.superInit = function() {
        this.__counter = this.__counter || 0;

        var superClass = this._hierarchies[this.__counter++];
        var superInit = superClass.prototype.init;
        superInit.apply(this, arguments);

        this.__counter = 0;
      };
      _class.prototype.superMethod = function() {
        var args = Array.prototype.slice.call(arguments, 0);
        var name = args.shift();
        this.__counters = this.__counters || {};
        this.__counters[name] = this.__counters[name] || 0;

        var superClass = this._hierarchies[ this.__counters[name]++ ];
        var superMethod = superClass.prototype[name];
        var rst = superMethod.apply(this, args);

        this.__counters[name] = 0;

        return rst;
      };
      _class.prototype.constructor = _class;
    }


    // //
    // params.forIn(function(key, value) {
    //   if (typeof value === 'function') {
    //     _class.$method(key, value);
    //   }
    //   else {
    //     _class.prototype[key] = value;
    //   }
    // });
    // 継承
    $extend.call(_class.prototype, params);
    // _class.prototype.$extend(params);

    // 継承用
    _class.prototype._hierarchies = [];
    var _super = _class.prototype.superClass;
    while(_super) {
      _class.prototype._hierarchies.push(_super);
      _super = _super.prototype.superClass;
    }

    // accessor
    if (params._accessor) {
      forIn.call(params._accessor, function(key, value) {
      // params._accessor.forIn(function(key, value) {
        accessor.call(_class.prototype, key, value);
        // _class.prototype.accessor(key, value);
      });
      // _class.prototype = Object.create(_class.prototype, params._accessor);
    }

    _class.prototype._creator = function() { return this; };
    _class.prototype._creator.prototype = _class.prototype;

    // static property/method
    if (params._static) {
      $extend.call(_class, params._static);
      // _class.$extend(params._static);
    }

    if (params._defined) {
      params._defined.call(_class, _class);
    }

    return _class;
  });

  /**
   * @method using
   * 文字列で定義したパスを使ってオブジェクトを取り出します。パスは , . / \ :: で区切ることができます。
   * {@link #phina.register} で登録したオブジェクトを取り出すときなどに使うと便利な関数です。
   *
   * ### Example
   *     hoge = {
   *       foo: {
   *         bar: {
   *           num: 100
   *         }
   *       }
   *     };
   *     var bar = phina.using('hoge.foo.bar');
   *     console.log(bar.num); // => 100
   *
   * @param {String} path オブジェクトへのパス
   * @return {Object} 取り出したオブジェクト
   * @member phina
   * @static
   */
  phina$1.$method('using', function(path) {
    if (!path) {
      return phina$1.global;
    }

    var pathes = path.split(/[,.\/ ]|::/);
    var current = phina$1.global;

    pathes.forEach(function(p) {
      current = current[p] || (current[p]={});
    });

    return current;
  });

  /**
   * @method register
   * パス指定でオブジェクトを登録する関数です。パスは , . / \ :: で区切ることができます。
   *
   * ### Example
   *     phina.register('hoge.foo.bar', {
   *       num: 100,
   *     });
   *     console.log(hoge.foo.bar.num); // => 100
   *
   * @param {String} path 登録するオブジェクトのパス
   * @param {Object} _class 登録するオブジェクト
   * @return {Object} 登録したオブジェクト
   * @member phina
   * @static
   */
  phina$1.$method('register', function(path, _class) {
    var pathes = path.split(/[,.\/ ]|::/);
    // var className = pathes.last;
    var className = last.get.call(pathes);
    var parentPath = path.substring(0, path.lastIndexOf('.')); // ここを直さないとピリオド区切り以外は無効？
    var parent = phina$1.using(parentPath);

    parent[className] = _class;

    return _class;
  });

  var _classDefinedCallback = {};

  /**
   * @method define
   * クラスを定義する関数です。使い方は {@link #createClass} とほとんど同じです。
   * ただし、引数は2つあり、第一引数は定義するクラスのパスを文字列で渡します。第二引数のオブジェクトは {@link #createClass} の引数と同じようにします。
   * {@link #createClass} と違い、変数に代入する必用がなく、パス指定でクラスを定義できます。
   * 内部的には {@link #register}, {@link #using} を使用しているため、パスは , . / \ :: で区切ることができます。
   *
   * ### Example
   *     phina.define('namespace.Class', {
   *       superClass: 'namespace.Super',//親クラス継承
   *
   *       //メンバ変数
   *       member1: 100,
   *       member2: 'test',
   *       member3: null,
   *
   *
   *       //コンストラクタ
   *       //Class()を呼び出したとき実行される
   *       init: function(a, b){
   *         //スーパークラス(継承したクラス)のinit
   *         this.superInit(a, b);
   *         this.a = a;
   *         this.b = b;
   *       },
   *
   *       //メソッド
   *       method1: function(){},
   *       method2: function(){},
   *
   *     });
   *
   * @param {String} path パス
   * @param {Object} params オブジェクト
   * @return {Function} 定義したクラス
   * @member phina
   * @static
   */
  phina$1.$method('define', function(path, params) {
    if (params.superClass) {
      if (typeof params.superClass === 'string') {
        var _superClass = phina$1.using(params.superClass);
        if (typeof _superClass != 'function') {
          if (!_classDefinedCallback[params.superClass]) {
            _classDefinedCallback[params.superClass] = [];
          }
          _classDefinedCallback[params.superClass].push(function() {
            phina$1.define(path, params);
          });

          return ;
        }
        else {
          params.superClass = _superClass;
        }
      }
      else {
        params.superClass = params.superClass;
      }
    }

    var _class = phina$1.createClass(params);
    accessor.call(_class.prototype, 'className', {
    // _class.prototype.accessor('className', {
      get: function() {
        return path;
      },
    });

    phina$1.register(path, _class);

    if (_classDefinedCallback[path]) {
      _classDefinedCallback[path].forEach(function(callback) {
        callback();
      });
      _classDefinedCallback[path] = null;
    }

    return _class;
  });

  /**
   * @method globalize
   * phina.js が用意している全てのクラスをグローバルに展開します。（具体的には phina が持つオブジェクトが一通りグローバルに展開されます。）
   * この関数を実行することで、いちいち global からたどっていかなくても phina.js の用意しているクラスをクラス名だけで呼び出すことができます。
   *
   * ### Example
   *     phina.globalize();
   *
   * @member phina
   * @static
   */
  phina$1.$method('globalize', function() {
    forIn.call(phina$1, function(key, value) {

      if (typeof value !== 'object') return ;

      forIn.call(value, function(key, value) {
      // value.forIn(function(key, value) {
        // if (phina.global[key]) {
        //   console.log(ns, key);
        //   phina.global['_' + key] = value;
        // }
        // else {
        //   phina.global[key] = value;
        // }
        phina$1.global[key] = value;
      });
    });
  });

  phina$1._mainListeners = [];
  phina$1._mainLoaded = false;

  /**
   * @method main
   * phina.js でプログラミングする際、メインの処理を記述するための関数です。基本的に phina.js でのプログラミングではこの中にプログラムを書いていくことになります。
   *
   * ### Example
   *     phina.main(function() {
   *       //ここにメインの処理を書く
   *     });
   *
   * @param {Function} func メインの処理
   * @member phina
   * @static
   */
  phina$1.$method('main', function(func) {
    if (phina$1._mainLoaded) {
      func();
    }
    else {
      phina$1._mainListeners.push(func);
    }
  });

  var doc = phina$1.global.document;
  if (phina$1.global.addEventListener && doc && doc.readyState !== 'complete') {
    phina$1.global.addEventListener('load', function() {
      var run = function() {
        var listeners = clone.call(phina$1._mainListeners);
        // var listeners = phina._mainListeners.clone();
        clear.call(phina$1._mainListeners);
        // phina._mainListeners.clear();
        listeners.forEach(function(func) {
        // listeners.each(function(func) {
          func();
        });

        // main 内で main を追加している場合があるのでそのチェック
        if (phina$1._mainListeners.length > 0) {
          run();
        }
        else {
          phina$1._mainLoaded = true;
        }
      };
      // ちょっと遅延させる(画面サイズ問題)
      setTimeout(run);
    });
  }
  else {
    phina$1._mainLoaded = true;
  }
});

/**
 * @class phina.util.EventDispatcher
 * # イベントを扱うためのクラス
 * イベントを扱うためのメソッドやプロパティを定義しているクラスです。
 * phina.js が提供するクラスの多くはこの EventDispatcher クラスの子孫となっているため、
 * ほとんどのオブジェクトで容易にイベントを扱うことができます。
 *
 * # 少し説明
 * this.onxxx = function(){}; でもイベントリスナを設定できるが、あまり推奨しない。
 * 呼び出される順序は、まず this.onxxxx が呼び出され、あとは on() で登録した順番。
 * @memberof phina
 */
class EventDispatcher {

  constructor() {
    this._listeners = {};
  }

  /**
   * @method on
   * @chainable
   * イベントリスナを登録します。
   *
   * １つのイベントに対するイベントリスナはいくつでも登録することができます。
   *
   * 標準のイベントを検知するには、オブジェクトの {@link Object2D#interactive} プロパティが true である必要があります。
   * {@link Object2D#interactive} プロパティを設定するには {@link Object2D#setInteractive} メソッドを呼び出してください。
   *
   * また、{@link #flare} や {@link #fire} によって定義したカスタムイベントに対するイベントリスナも登録することが
   * できます。カスタムイベントのイベントリスナは {@link Object2D#interactive} プロパティによらず呼び出されます。
   * なおカスタムイベントのオブジェクトは Event オブジェクトとは異なります。
   *
   * ###Reference
   * 標準のイベントの種類は以下を参照してください。
   * - [Event reference | MDN]( https://developer.mozilla.org/en-US/docs/Web/Events )
   *
   * ### Example
   *     var shape = CircleShape().addChildTo(this).setInteractive(true).setPosition(50, 50);
   *     shape.on("touchstart", function(e){
   *       this.color = "blue";
   *     });
   *
   * @param {String} type イベントの種類
   * @param {Function} listener イベントリスナとなる関数
   * @param {Object} listener.event Event オブジェクト、またはカスタムイベントのオブジェクト
   */
  on(type, listener) {
    if (this._listeners[type] === undefined) {
      this._listeners[type] = [];
    }

    this._listeners[type].push(listener);
    return this;
  }

  /**
   * @method off
   * @chainable
   * イベントリスナを削除します。
   *
   * ある種類のイベントに対するイベントリスナをすべて削除するには {@link #clear} を使用してください。
   *
   * @param {String} type イベントの種類
   * @param {Function} listener イベントリスナ関数
   */
  off(type, listener) {
    var listeners = this._listeners[type];
    var index = listeners.indexOf(listener);
    if (index != -1) {
      listeners.splice(index,1);
    }
    return this;
  }

  /**
   * @method fire
   * @chainable
   * カスタムイベントを表すオブジェクトを指定してカスタムイベントを発火します。
   *
   * @param {Object} event カスタムイベントを表すオブジェクト
   * @param {String} event.type カスタムイベントの名前
   */
   fire(e) {
    e.target = this;
    var oldEventName = 'on' + e.type;
    if (this[oldEventName]) this[oldEventName](e);

    var listeners = this._listeners[e.type];
    if (listeners) {
      // var temp = listeners.clone();
      var temp = listeners.slice(0);
      for (var i=0,len=temp.length; i<len; ++i) {
          temp[i].call(this, e);
      }
    }

    return this;
  }

  /**
   * @method flare
   * @chainable
   * イベント名を指定してカスタムイベントを発火します。
   *
   * param 引数を指定することによりカスタムイベントに任意のプロパティを設定することができます。
   * これにより、呼び出し元がイベントリスナに任意の値を渡すことができます。
   * （ただし target プロパティには必ず自分自身が格納されます。）
   *
   * ### Example
   *     //
   *
   * @param {String} type カスタムイベントの名前
   * @param {Object} [param] カスタムイベントにプロパティを設定するためのオブジェクト
  */
  flare(type, param) {
    var e = {type:type};
    if (param) {
      forIn.call(param, function(key, val) {
      // param.forIn(function(key, val) {
        e[key] = val;
      });
    }
    this.fire(e);

    return this;
  }

  /**
   * @method one
   * @chainable
   * 一度だけ実行されるイベントリスナを登録します。
   *
   * 指定したイベントリスナが一度実行されると、そのイベントリスナは削除されます。それ以外の挙動は {@link #on} と同じです。
   *
   * @param {String} type イベントの種類
   * @param {Function} listener イベントリスナとなる関数
   * @param {Object} listener.event Event オブジェクト、またはカスタムイベントのオブジェクト
   */
  one(type, listener) {
    var self = this;

    var func = function() {
      var result = listener.apply(self, arguments);
      self.off(type, func);
      return result;
    };

    this.on(type, func);

    return this;
  }

  /**
   * @method has
   * イベントリスナが登録されているかどうかを調べます。
   *
   * 指定したイベントの種類に対するイベントリスナが登録されている場合は true、そうでない場合は false を返します。
   *
   * @param {String} type イベントの種類
   * @return {Boolean} 指定したイベントのイベントリスナが登録されているかどうか
   */
  has(type) {
    return (this._listeners[type] !== undefined && this._listeners[type].length !== 0) || !!this['on' + type];
  }

  /**
   * @method clear
   * @chainable
   * ある種類のイベントに対するイベントリスナをすべて削除します。
   *
   * 特定のイベントリスナのみを削除するには {@link #off} を使用してください。
   *
   * @param {String} type イベントの種類
   */
  clear(type) {
    var oldEventName = 'on' + type;
    if (this[oldEventName]) delete this[oldEventName];
    this._listeners[type] = [];
    return this;
  }
}

/**
 * @method addEventListener
 * {@link #on} のエイリアスです。
 */
/**
 * @method removeEventListener
 * {@link #off} のエイリアスです。
 */
/**
 * @method clearEventListener
 * {@link #clear} のエイリアスです。
 */
/**
 * @method hasEventListener
 * {@link #has} のエイリアスです。
 */
/**
 * @method dispatchEvent
 * {@link #fire} のエイリアスです。
 */
/**
 * @method dispatchEventByType
 * {@link #flare} のエイリアスです。
 */
const methodMap = {
  addEventListener: 'on',
  removeEventListener: 'off',
  clearEventListener: 'clear',
  hasEventListener: 'has',
  dispatchEvent: 'fire',
  dispatchEventByType: 'flare',
};
// methodMap.forIn(function(old, name) {
forIn.call(methodMap, function(old, name) {
  // EventDispatcher.prototype.$method(old, phina.util.EventDispatcher.prototype[name]);
  $method.call(EventDispatcher.prototype, old, EventDispatcher.prototype[name]);
});

/**
 * @class phina.util.Flow
 * tick management class
 * @extends phina.util.EventDispatcher
 */
class Flow extends EventDispatcher {

  /**
   * @constructor
   */
  constructor(func, wait) {
    super();

    this.status = 'pending';
    this.resultValue = null;
    this._queue = [];
    this.func = func;

    if (wait !== true) {
      var self = this;
      var resolve = function() {
        self.resolve.apply(self, arguments);
        self.status = 'resolved';
      };
      var reject = function() {
        self.reject.apply(self, arguments);
        self.status = 'rejected';
      };

      this.func(resolve, reject);
    }
  }

  /*
   * 成功
   */
  resolve(arg) {
    this.resultValue = arg;

    // キューに積まれた関数を実行
    this._queue.forEach(function(func) {
      func(this.resultValue);
    }, this);
    // this._queue.clear();
    clear.call(this._queue);
  }

  /*
   * 失敗
   */
  reject() {

  }

  /*
   * 非同期終了時の処理を登録
   */
  then(func) {
    // 成功ステータスだった場合は即実行
    if (this.status === 'resolved') {
      var value = func(this.resultValue);
      return Flow.resolve(value);
    }
    else {
      var flow = new Flow(function(resolve) {
        resolve();
      }, true);

      this._queue.push(function(arg) {
        var resultValue = func(arg);

        if (resultValue instanceof Flow) {
          resultValue.then(function(value) {
            flow.resolve(value);
          });
        }
        else {
          flow.resolve(resultValue);
        }
      });

      return flow;
    }
  }

  static resolve(value) {
    if (value instanceof Flow) {
      return value;
    }
    else {
      var flow = new Flow(function(resolve) {
        resolve(value);
      });
      return flow;
    }
  }

  static all(flows) {
    return new Flow(function(resolve) {
      var count = 0;

      var args = [];

      flows.forEach(function(flow) {
        flow.then(function(d) {
          ++count;
          args.push(d);

          if (count >= flows.length) {
            resolve(args);
          }
        });
      });
    });
  }

}

/**
 * @class phina.util.Ticker
 * tick management class
 * @extends phina.util.EventDispatcher
 */
class Ticker extends EventDispatcher {

  // /** 経過フレーム数 */
  // frame = null

  // /** 1フレームの経過時間 */
  // deltaTime = null
  
  // /** 全体の経過時間 */
  // elapsedTime = null

  /**
   * @constructor
   */
  constructor() {
    super();

    this.fps = 30;
    this.frame = 0;
    this.deltaTime = 0;
    this.elapsedTime = 0;
    this.isPlaying = true;
    this.runner = Ticker.runner;
  }

  tick(func) {
    this.on('tick', func);
  }

  untick(func) {
    this.off('tick', func);
  }

  run() {
    var now = (new Date()).getTime();
    // 1フレームに掛かった時間
    this.deltaTime = now - this.currentTime;
    // 全体の経過時間
    this.elapsedTime = now - this.startTime;

    var start = this.currentTime = now;
    this.flare('tick');
    var end = (new Date()).getTime();

    // フレームを更新
    this.frame += 1;

    // calculate elapsed time
    var elapsed = end-start;

    // calculate next waiting time
    var delay = Math.max(this.frameTime-elapsed, 0);

    return delay;
  }

  start() {
    var self = this;
    this.isPlaying = true;
    this.startTime = this.currentTime = (new Date()).getTime();
    var fn = function() {
      if (self.isPlaying) {
        var delay = self.run();
        self.runner(fn, delay);
      }
    };
    fn();

    return this;
  }

  resume() {
    // TODO: 
  }

  stop() {
    this.isPlaying = false;
    return this;
  }

  rewind() {
    // TODO: 
  }

  get fps() { return this._fps; }
  set fps(v) {
    this._fps = v;
    this.frameTime = 1000/this._fps;
  }

  static runner(run, delay) {
    setTimeout(run, delay);
  }
  
}

/**
 * @class phina.util.Random
 * # 乱数を扱うためのクラス
 * 乱数を扱うためのメソッドやプロパティを定義しているクラスです。
 */
class Random {

  /**
   * @property {Number} [seed = 1]
   * 乱数のシードです。
   */
  // seed = 1

  /**
   * @constructor
   * コンストラクタです。引数で {@link #seed} を設定できます。
   * 
   * @param {Number} [seed = (Date.now()) || 1] シード
   */
  constructor(seed) {
    this.seed = seed || (Date.now()) || 1;
  }

  /**
   * @method random
   * 0~1の乱数を返します。実行すると {@link #seed} は変わってしまいます。
   * 
   * @return {Number} 0~1 の乱数
   */
  random() {
    var seed = this.seed;
    seed = seed ^ (seed << 13);
    seed = seed ^ (seed >>> 17);
    seed = (seed ^ (seed << 5));

    this.seed = seed;

    return (seed >>> 0) / phina.util.Random.MAX;
  }

  /**
   * @method randint
   * 指定された範囲内でランダムな整数値を返します。実行すると {@link #seed} は変わってしまいます。
   * 
   * @param {Number} min 範囲の最小値
   * @param {Number} max 範囲の最大値
   * @return {Number} ランダムな整数値
   */
  randint(min, max) {
    return Math.floor( this.random()*(max-min+1) ) + min;
  }

  /**
   * @method randfloat
   * 指定された範囲内でランダムな数値を返します。実行すると {@link #seed} は変わってしまいます。
   * 
   * @param {Number} min 範囲の最小値
   * @param {Number} max 範囲の最大値
   * @return {Number} ランダムな数値
   */
  randfloat(min, max) {
    return this.random()*(max-min)+min;
  }

  /**
   * @method randbool
   * ランダムな真偽値を返します。引数で百分率を指定できます。実行すると {@link #seed} は変わってしまいます。
   * 
   * @param {Number} [perecent = 50] 真になる百分率
   * @return {Boolean} ランダムな真偽値
   */
  randbool(percent) {
    return this.random() < (percent === undefined ? 50 : percent) / 100;
  }

  /**
   * @method randarray
   * 任意の範囲でランダムな整数値を格納した任意の長さの配列を返します。実行すると {@link #seed} は変わってしまいます。
   * 
   * @param {Number} [len = 100] 配列の長さ
   * @param {Number} [min = 0] 範囲の最小値
   * @param {Number} [max = 100] 範囲の最大値
   * @return {Number} ランダムな整数値の入った配列
   */
  randarray(len, min, max) {
    len = len || 100;
    min = min || 0;
    max = max || 100;

    return (len).map(function() {
      return this.randint(min, max);
    }, this);
  }

  get seed() { return this._seed; }
  set seed(v) { this._seed = (v >>> 0) || 1; }

  /**
   * @method getSeed 
   * {@link #seed} の値を取得します。
   * 
   * @return {Number} シード
   * @static
   */
  static getSeed() {
    return this.seed;
  }

  /**
   * @method setSeed
   * {@link #seed} の値をセットします。
   * 
   * @param {Number} [seed = 1] シード
   * @static
   * @chainable
   */
  static setSeed(seed) {
    this.seed = (seed >>> 0) || 1;
    return this;
  }

  /**
   * @method random
   * 0~1の乱数を返します。実行すると {@link #seed} は変わってしまいます。
   * インスタンスメソッドの {@link #random} と同じです。
   * 
   * @return {Number} 0~1 の乱数
   * @static
   */
  static random() {
    this.seed = this.xor32(this.seed);
    return (this.seed >>> 0) / phina.util.Random.MAX;
  }

  /**
   * @method randint
   * 指定された範囲内でランダムな整数値を返します。実行すると {@link #seed} は変わってしまいます。
   * インスタンスメソッドの {@link #randint} と同じです。
   * 
   * @param {Number} min 範囲の最小値
   * @param {Number} max 範囲の最大値
   * @return {Number} ランダムな整数値
   * @static
   */
  static randint(min, max) {
    return phina.global.Math.floor( this.random()*(max-min+1) ) + min;
  }

  /**
   * @method randfloat
   * 指定された範囲内でランダムな数値を返します。実行すると {@link #seed} は変わってしまいます。
   * インスタンスメソッドの {@link #randfloat} と同じです。
   * 
   * @param {Number} min 範囲の最小値
   * @param {Number} max 範囲の最大値
   * @return {Number} ランダムな数値
   * @static
   */
  static randfloat(min, max) {
    return this.random()*(max-min)+min;
  }

  /**
   * @method randbool
   * ランダムな真偽値を返します。引数で百分率を指定できます。実行すると {@link #seed} は変わってしまいます。
   * インスタンスメソッドの {@link #randbool} と同じです。
   * 
   * @param {Number} [perecent = 50] 真になる百分率
   * @return {Number} ランダムな真偽値
   * @static
   */
  static randbool(perecent) {
    return this.randint(0, 99) < (perecent || 50);
  }

  /**
   * @method randarray
   * 任意の範囲でランダムな整数値を格納した任意の長さの配列を返します。実行すると {@link #seed} は変わってしまいます。
   * インスタンスメソッドの {@link #randarray} と同じです。
   * 
   * @param {Number} [len = 100] 配列の長さ
   * @param {Number} [min = 0] 範囲の最小値
   * @param {Number} [max = 100] 範囲の最大値
   * @return {Number} ランダムな整数値の入った配列
   * @static
   */
  static randarray(len, min, max) {
    len = len || 100;
    min = min || 0;
    max = max || 100;

    return (len).map(function() {
      return this.randint(min, max);
    }, this);
  }


  /**
   * @method xor32
   * xorshift を用いて疑似乱数列を生成します。
   * 
   * @param {Number} seed
   * @return {Number} 疑似乱数列
   * @static
   */
  static xor32(seed) {
    seed = seed ^ (seed << 13);
    seed = seed ^ (seed >>> 17);
    seed = (seed ^ (seed << 5));

    return seed;
  }

  /**
   * @method uuid
   * uuid を生成して返します。
   * 
   * @return {String} uuid
   * @static
   */
  //http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
  static uuid() {
    var d = new Date().getTime();
    if(phina.global.performance && typeof phina.global.performance.now === 'function'){
      d += performance.now(); //use high-precision timer if available
    }
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (d + Math.random()*16)%16 | 0;
      d = Math.floor(d/16);
      return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
  }

}

/**
 * @property {Number} MAX
 * 内部的に使用される定数です。
 * 
 * @static
 */
Random.MAX = 4294967295;

/**
 * @property {Number} [seed = (Date.now())] シード
 * static メソッドの乱数のシードです。
 * 
 * @static
 */
Random.seed = (Date.now());


// prototype拡張はしない
// Math.$method("randint", function(min, max) {
//   return phina.util.Random.randint(min, max);
// });

// Math.$method("randfloat", function(min, max) {
//   return phina.util.Random.randfloat(min, max);
// });

/**
 * @class phina.util.Support
 * 
 */
class Support {}Support.canvas = !!phina$1.global.CanvasRenderingContext2D;
Support.webGL = (function() {
  return !!phina$1.global.CanvasRenderingContext2D && !!document.createElement('canvas').getContext('webgl');
})();
Support.webAudio = !!phina$1.global.AudioContext || !!phina$1.global.webkitAudioContext || !!phina$1.global.mozAudioContext;

/**
 * @class phina.util.Grid
 */
class Grid {

  // /** 幅 */
  // width: 640,
  // /** 列数 */
  // columns: 12,
  // /** ループ */
  // loop: false,
  // /** オフセット値 */
  // offset: 0,

  /**
   * @constructor
   */
  constructor() {
    if (typeof arguments[0] === 'object') {
      var param = arguments[0];
      var width = param.width || 640;
      var columns = param.columns || 12;
      var loop = param.loop || false;
      var offset = param.offset || 0;
    }
    else {
      var width   = arguments[0] || 640;
      var columns = arguments[1] || 12;
      var loop    = arguments[2] || false;
      var offset = arguments[3] || 0;
    }

    this.width = width;
    this.columns = columns;
    this.loop = loop;
    this.offset = offset;
    this.unitWidth = this.width/this.columns;
  }

  // スパン指定で値を取得(負数もok)
  span(index) {
    if (this.loop) {
      index += this.columns;
      index %= this.columns;
    }
    return this.unitWidth * index + this.offset;
  }

  //
  unit() {
    return this.unitWidth;
  }

  center(offset) {
    var index = offset || 0;
    return (this.width/2) + (this.unitWidth * index);
  }

}

/**
 * @class global.Math
 * # 拡張した Math クラス
 * 数学的な処理を扱う Math クラスを拡張しています。
 * 
 * 全てstaticメンバーです。
 */

/**
 * @static
 * @method clamp
 * 指定した値を指定した範囲に収めた結果を返します。
 *
 * ### Example
 *     Math.clamp(120, 0, 640); // => 120
 *     Math.clamp(980, 0, 640); // => 640
 *     Math.clamp(-80, 0, 640); // => 0
 *
 * @param {Number} value 値
 * @param {Number} min  範囲の下限
 * @param {Number} max  範囲の上限
 * @return {Number} 丸めた結果の値
 */
function clamp(value, min, max) {
  return (value < min) ? min : ( (value > max) ? max : value );
}

/**
 * @property DEG_TO_RAD
 * 度をラジアンに変換するための定数です。
 */
var DEG_TO_RAD = Math.PI/180;

/**
 * @class phina.util.Tween
 * @extends phina.util.EventDispatcher
 * 
 */
class Tween extends EventDispatcher {

  /**
   * @constructor
   */
  constructor(target) {
    super();

    this.time = 0;
  }

  fromTo(target, beginProps, finishProps, duration, easing) {
    this.target = target;
    this.beginProps = beginProps;
    this.finishProps = finishProps;
    this.duration = duration || 1000;
    this.easing = easing;

    // setup
    this.changeProps = {};
    for (var key in beginProps) {
        this.changeProps[key] = finishProps[key] - beginProps[key];
    }

    return this;
  }

  to(target, finishProps, duration, easing) {
    var beginProps = {};

    for (var key in finishProps) {
      beginProps[key] = target[key];
    }

    this.fromTo(target, beginProps, finishProps, duration, easing);

    return this;
  }

  from(target, beginProps, duration, easing) {
      var finishProps = {};

      for (var key in beginProps) {
        finishProps[key] = target[key];
        target[key] = beginProps[key];
      }

      this.fromTo(target, beginProps, finishProps, duration, easing);

      return this;
  }

  by(target, props, duration, easing) {
    var beginProps = {};
    var finishProps = {};

    for (var key in props) {
      beginProps[key] = target[key];
      finishProps[key] = target[key] + props[key];
    }

    this.fromTo(target, beginProps, finishProps, duration, easing);

    return this;
  }

  yoyo() {
    var temp = this.beginProps;
    this.beginProps = this.finishProps;
    this.finishProps = temp;
    // this.changeProps.forIn(function(key, value, index) {
    forIn.call(this.changeProps, function(key, value, index) {
      this.changeProps[key] = -value;
      this.target[key] = this.beginProps[key];
    }, this);
    // TODO: easing も反転させる
    // this.easing = easing;
    return this;
  }

  gain(time) {
    this.seek(this.time + time);
  }

  forward(time) {
    this.seek(this.time + time);
  }

  backward(time) {
    this.seek(this.time - time);
  }

  seek(time) {
    // this.time = Math.clamp(time, 0, this.duration);
    this.time = clamp(time, 0, this.duration);

    // this.beginProps.forIn(function(key, value) {
    forIn.call(this.beginProps, function(key, value) {
      var v = this.easing(this.time, value, this.changeProps[key], this.duration);
      this.target[key] = v;
    }, this);

    return this;
  }

  get easing() { return this._easing; }
  set easing(v) {
    this._easing = Tween.EASING[v] || Tween.EASING.default;
  }

}

/**
 * @static
 * イージング
 * ### Reference
 * - <http://coderepos.org/share/wiki/JSTweener>
 * - <http://coderepos.org/share/browser/lang/javascript/jstweener/trunk/src/JSTweener.js>
 * - <http://gsgd.co.uk/sandbox/jquery/easing/jquery.easing.1.3.js>
 * - <http://hosted.zeh.com.br/tweener/docs/en-us/misc/transitions.html>
 */
Tween.EASING = {

  /** default */
  "default": function(t, b, c, d) {
    return c*t/d + b;
  },
  /** linear */
  linear: function(t, b, c, d) {
    return c*t/d + b;
  },
  /** swing */
  swing: function(t, b, c, d) {
    return -c *(t/=d)*(t-2) + b;
  },
  /** easeInQuad */
  easeInQuad: function(t, b, c, d) {
    return c*(t/=d)*t + b;
  },
  /** easeOutQuad */
  easeOutQuad: function(t, b, c, d) {
    return -c *(t/=d)*(t-2) + b;
  },
  /** easeInOutQuad */
  easeInOutQuad: function(t, b, c, d) {
    if((t/=d/2) < 1) return c/2*t*t + b;
    return -c/2 *((--t)*(t-2) - 1) + b;
  },
  /** defeInCubic */
  easeInCubic: function(t, b, c, d) {
    return c*(t/=d)*t*t + b;
  },
  /** easeOutCubic */
  easeOutCubic: function(t, b, c, d) {
    return c*((t=t/d-1)*t*t + 1) + b;
  },
  /** easeInOutCubic */
  easeInOutCubic: function(t, b, c, d) {
    if((t/=d/2) < 1) return c/2*t*t*t + b;
    return c/2*((t-=2)*t*t + 2) + b;
  },
  /** easeOutInCubic */
  easeOutInCubic: function(t, b, c, d) {
    if(t < d/2) return Tween.EASING.easeOutCubic(t*2, b, c/2, d);
    return Tween.EASING.easeInCubic((t*2)-d, b+c/2, c/2, d);
  },
  /** easeInQuart */
  easeInQuart: function(t, b, c, d) {
    return c*(t/=d)*t*t*t + b;
  },
  /** easeOutQuart */
  easeOutQuart: function(t, b, c, d) {
    return -c *((t=t/d-1)*t*t*t - 1) + b;
  },
  /** easeInOutQuart */
  easeInOutQuart: function(t, b, c, d) {
    if((t/=d/2) < 1) return c/2*t*t*t*t + b;
    return -c/2 *((t-=2)*t*t*t - 2) + b;
  },
  /** easeOutInQuart */
  easeOutInQuart: function(t, b, c, d) {
    if(t < d/2) return Tween.EASING.easeOutQuart(t*2, b, c/2, d);
    return Tween.EASING.easeInQuart((t*2)-d, b+c/2, c/2, d);
  },
  /** easeInQuint */
  easeInQuint: function(t, b, c, d) {
    return c*(t/=d)*t*t*t*t + b;
  },
  /** easeOutQuint */
  easeOutQuint: function(t, b, c, d) {
    return c*((t=t/d-1)*t*t*t*t + 1) + b;
  },
  /** easeInOutQuint */
  easeInOutQuint: function(t, b, c, d) {
    if((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
    return c/2*((t-=2)*t*t*t*t + 2) + b;
  },
  /** easeOutInQuint */
  easeOutInQuint: function(t, b, c, d) {
    if(t < d/2) return Tween.EASING.easeOutQuint(t*2, b, c/2, d);
    return Tween.EASING.easeInQuint((t*2)-d, b+c/2, c/2, d);
  },
  /** easeInSine */
  easeInSine: function(t, b, c, d) {
    return -c * Math.cos(t/d *(Math.PI/2)) + c + b;
  },
  /** easeOutSine */
  easeOutSine: function(t, b, c, d) {
    return c * Math.sin(t/d *(Math.PI/2)) + b;
  },
  /** easeInOutSine */
  easeInOutSine: function(t, b, c, d) {
    return -c/2 *(Math.cos(Math.PI*t/d) - 1) + b;
  },
  /** easeOutInSine */
  easeOutInSine: function(t, b, c, d) {
    if(t < d/2) return Tween.EASING.easeOutSine(t*2, b, c/2, d);
    return Tween.EASING.easeInSine((t*2)-d, b+c/2, c/2, d);
  },
  /** easeInExpo */
  easeInExpo: function(t, b, c, d) {
    return (t==0) ? b : c * Math.pow(2, 10 *(t/d - 1)) + b - c * 0.001;
  },
  /** easeOutExpo */
  easeOutExpo: function(t, b, c, d) {
    return (t==d) ? b+c : c * 1.001 *(-Math.pow(2, -10 * t/d) + 1) + b;
  },
  /** easeInOutExpo */
  easeInOutExpo: function(t, b, c, d) {
    if(t==0) return b;
    if(t==d) return b+c;
    if((t/=d/2) < 1) return c/2 * Math.pow(2, 10 *(t - 1)) + b - c * 0.0005;
    return c/2 * 1.0005 *(-Math.pow(2, -10 * --t) + 2) + b;
  },
  /** easeOutInExpo */
  easeOutInExpo: function(t, b, c, d) {
    if(t < d/2) return Tween.EASING.easeOutExpo(t*2, b, c/2, d);
    return Tween.EASING.easeInExpo((t*2)-d, b+c/2, c/2, d);
  },
  /** easeInCirc */
  easeInCirc: function(t, b, c, d) {
    return -c *(Math.sqrt(1 -(t/=d)*t) - 1) + b;
  },
  /** easeOutCirc */
  easeOutCirc: function(t, b, c, d) {
    return c * Math.sqrt(1 -(t=t/d-1)*t) + b;
  },
  /** easeInOutCirc */
  easeInOutCirc: function(t, b, c, d) {
    if((t/=d/2) < 1) return -c/2 *(Math.sqrt(1 - t*t) - 1) + b;
    return c/2 *(Math.sqrt(1 -(t-=2)*t) + 1) + b;
  },
  /** easeOutInCirc */
  easeOutInCirc: function(t, b, c, d) {
    if(t < d/2) return Tween.EASING.easeOutCirc(t*2, b, c/2, d);
    return Tween.EASING.easeInCirc((t*2)-d, b+c/2, c/2, d);
  },
  /** easeInElastic */
  easeInElastic: function(t, b, c, d, a, p) {
    var s;
    if(t==0) return b;  if((t/=d)==1) return b+c;  if(!p) p=d*.3;
    if(!a || a < Math.abs(c)) { a=c; s=p/4; } else s = p/(2*Math.PI) * Math.asin(c/a);
    return -(a*Math.pow(2,10*(t-=1)) * Math.sin((t*d-s)*(2*Math.PI)/p )) + b;
  },
  /** easeOutElastic */
  easeOutElastic: function(t, b, c, d, a, p) {
    var s;
    if(t==0) return b;  if((t/=d)==1) return b+c;  if(!p) p=d*.3;
    if(!a || a < Math.abs(c)) { a=c; s=p/4; } else s = p/(2*Math.PI) * Math.asin(c/a);
    return(a*Math.pow(2,-10*t) * Math.sin((t*d-s)*(2*Math.PI)/p ) + c + b);
  },
  /** easeInOutElastic */
  easeInOutElastic: function(t, b, c, d, a, p) {
    var s;
    if(t==0) return b;  if((t/=d/2)==2) return b+c;  if(!p) p=d*(.3*1.5);
    if(!a || a < Math.abs(c)) { a=c; s=p/4; }       else s = p/(2*Math.PI) * Math.asin(c/a);
    if(t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin((t*d-s)*(2*Math.PI)/p )) + b;
    return a*Math.pow(2,-10*(t-=1)) * Math.sin((t*d-s)*(2*Math.PI)/p )*.5 + c + b;
  },
  /** easeOutInElastic */
  easeOutInElastic: function(t, b, c, d, a, p) {
    if(t < d/2) return Tween.EASING.easeOutElastic(t*2, b, c/2, d, a, p);
    return Tween.EASING.easeInElastic((t*2)-d, b+c/2, c/2, d, a, p);
  },
  /** easeInBack */
  easeInBack: function(t, b, c, d, s) {
    if(s == undefined) s = 1.70158;
    return c*(t/=d)*t*((s+1)*t - s) + b;
  },
  /** easeOutBack */
  easeOutBack: function(t, b, c, d, s) {
    if(s == undefined) s = 1.70158;
    return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
  },
  /** easeInOutBack */
  easeInOutBack: function(t, b, c, d, s) {
    if(s == undefined) s = 1.70158;
    if((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
    return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
  },
  /** easeOutInBack */
  easeOutInBack: function(t, b, c, d, s) {
    if(t < d/2) return Tween.EASING.easeOutBack(t*2, b, c/2, d, s);
    return Tween.EASING.easeInBack((t*2)-d, b+c/2, c/2, d, s);
  },
  /** easeInBounce */
  easeInBounce: function(t, b, c, d) {
    return c - Tween.EASING.easeOutBounce(d-t, 0, c, d) + b;
  },
  /** easeOutBounce */
  easeOutBounce: function(t, b, c, d) {
    if((t/=d) <(1/2.75)) {
      return c*(7.5625*t*t) + b;
    } else if(t <(2/2.75)) {
      return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
    } else if(t <(2.5/2.75)) {
      return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
    } else {
      return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
    }
  },
  /** easeInOutBounce */
  easeInOutBounce: function(t, b, c, d) {
    if(t < d/2) return Tween.EASING.easeInBounce(t*2, 0, c, d) * .5 + b;
    else return Tween.EASING.easeOutBounce(t*2-d, 0, c, d) * .5 + c*.5 + b;
  },
  /** easeOutInBounce */
  easeOutInBounce: function(t, b, c, d) {
    if(t < d/2) return Tween.EASING.easeOutBounce(t*2, b, c/2, d);
    return Tween.EASING.easeInBounce((t*2)-d, b+c/2, c/2, d);
  }

};

/**
 * @class phina.util.QueryString
 * 
 */
class QueryString {

  static parse(text, sep, eq, isDecode) {
    text = text || location.search.substr(1);
    sep = sep || '&';
    eq = eq || '=';
    var decode = (isDecode) ? decodeURIComponent : function(a) { return a; };
    return text.split(sep).reduce(function(obj, v) {
      var pair = v.split(eq);
      obj[pair[0]] = decode(pair[1]);
      return obj;
    }, {});
  }

  static stringify(value, sep, eq, isEncode) {
    sep = sep || '&';
    eq = eq || '=';
    var encode = (isEncode) ? encodeURIComponent : function(a) { return a; };
    return Object.keys(value).map(function(key) {
      return key + eq + encode(value[key]);
    }).join(sep);
  }
  
}

/**
 * @class global.String
 * # 拡張した String クラス
 */

/**
 * @method format
 * フォーマットに引数を適用した文字列を返します。
 *
 * 引数がオブジェクトの場合、"{プロパティ名}" がオブジェクトのプロパティの値に置き換わります。
 * 指定したプロパティがオブジェクトにない場合は空文字列になります。
 *
 * 第1引数がオブジェクトでなかった場合、"{整数}" が各引数に置き換わります。
 * 指定した値の引数がなかった場合は空文字列になります。
 *
 * ### Example
 *     obj = {r: 128, g: 0, b: 255};
 *     "color: rgb({r}, {g}, {b});".format(obj); // => "color: rgb(128, 0, 255);"
 *
 *     "{0} + {1} = {2}".format(5, 8, (5+8)); // => "5 + 8 = 13"
 *
 * @param {Object} obj パラメータとなるオブジェクト
 * @return {String} 生成した文字列
 */
function format(arg) {
// String.prototype.$method("format", function(arg) {
  // 置換ファンク
  var rep_fn = undefined;
  
  // オブジェクトの場合
  if (typeof arg == "object") {
    /** @ignore */
    rep_fn = function(m, k) {
      if (arg[k] === undefined) {
        return '';
      }
      else {
        return arg[k];
      }
    };
  }
  // 複数引数だった場合
  else {
    var args = arguments;
    /** @ignore */
    rep_fn = function(m, k) {
      var v = args[ parseInt(k) ];
      if (v !== undefined && v !== null) {
        return v;
      }
      else {
        return '';
      }
    };
  }
  
  return this.replace( /\{(\w+)\}/g, rep_fn );
}


/**
 * @method each
 * 各文字を順番に渡しながら関数を繰り返し実行します。
 *
 * ### Example
 *     str = 'abc';
 *     str.each(function(ch) {
 *       console.log(ch);
 *     });
 *     // => 'a'
 *     //    'b'
 *     //    'c'
 *
 * @param {Function} callback 各要素に対して実行するコールバック関数
 * @param {Object} [self=this] callback 内で this として参照される値
 */
function each$1() {
// String.prototype.$method("each", function() {
  Array.prototype.forEach.apply(this, arguments);
  return this;
}

/**
 * @class phina.util.Color
 * カラークラス
 */
class Color {

  // /** R値 */
  // r: 255,
  // /** G値 */
  // g: 255,
  // /** B値 */
  // b: 255,
  // /** A値 */
  // a: 1.0,

  /**
   * 初期化
   */
  constructor(r, g, b, a) {
    this.r = 255;
    this.g = 255;
    this.b = 255;
    this.a = 1.0;
    this.set.apply(this, arguments);
  }

  /**
   * セッター.
   */
  set(r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = (a !== undefined) ? a : 1.0;
    return this;
  }

  /**
   * 数値によるセッター.
   */
  setFromNumber(r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = (a !== undefined) ? a : 1.0;
    return this;
  }

  /**
   * 配列によるセッター
   */
  setFromArray(arr) {
    return this.set.apply(this, arr);
  }

  /**
   * オブジェクトによるセッター
   */
  setFromObject(obj) {
    return this.set(obj.r, obj.g, obj.b, obj.a);
  }

  /**
   * 文字列によるセッター
   */
  setFromString(str) {
    var color = Color.stringToNumber(str);
    return this.set(color[0], color[1], color[2], color[3]);
  }

  /**
   * 賢いセッター
   */
  setSmart() {
    var arg = arguments[0];
    if (arguments.length >= 3) {
      this.set(arguments.r, arguments.g, arguments.b, arguments.a);
    } else if (arg instanceof Array) {
      this.setFromArray(arg);
    } else if (arg instanceof Object) {
      this.setFromObject(arg);
    } else if (typeof(arg) == "string") {
      this.setFromString(arg);
    }
    return this;
  }

  /**
   * CSS 用 16進数文字列に変換
   */
  toStyleAsHex() {
    return format.call("#{0}{1}{2}",
    // return "#{0}{1}{2}".format(
      this.r.toString(16).padding(2, '0'),
      this.g.toString(16).padding(2, '0'),
      this.b.toString(16).padding(2, '0')
    );
  }

  /**
   * CSS 用 RGB文字列に変換
   */
  toStyleAsRGB() {
    return format.call("rgb({r},{g},{b})", {
    // return "rgb({r},{g},{b})".format({
      r: ~~this.r,
      g: ~~this.g,
      b: ~~this.b
    });
  }


  /**
   * CSS 用 RGBA文字列に変換
   */
  toStyleAsRGBA() {
    return format.call("rgba({r},{g},{b},{a})", {
    // return "rgba({r},{g},{b},{a})".format({
      r: ~~this.r,
      g: ~~this.g,
      b: ~~this.b,
      a: this.a
    });
  }

  /**
   * CSS 用 RGBA 文字列に変換
   */
  toStyle() {
    return format.call("rgba({r},{g},{b},{a})", {
    // return "rgba({r},{g},{b},{a})".format({
      r: ~~this.r,
      g: ~~this.g,
      b: ~~this.b,
      a: this.a
    });
  }

  /**
   * @static
   * @member phina.util.Color
   * @method strToNum
   */
  static strToNum(str) {
    return this.stringToNumber(str);
  }

  static stringToNumber(str) {
    var value = null;
    var type = null;

    if (str[0] === '#') {
      type = (str.length == 4) ? "hex111" : "hex222";
    } else if (str[0] === 'r' && str[1] === 'g' && str[2] === 'b') {
      type = (str[3] == 'a') ? "rgba" : "rgb";
    } else if (str[0] === 'h' && str[1] === 's' && str[2] === 'l') {
      type = (str[3] == 'a') ? "hsla" : "hsl";
    }

    if (type) {
      var match_set = MATCH_SET_LIST[type];
      var m = str.match(match_set.reg);
      value = match_set.exec(m);
    } else if (Color.COLOR_LIST[str]) {
      value = Color.COLOR_LIST[str];
    }

    return value;
  }

  /**
   * @static
   * @method
   * hsl を rgb に変換
   */
  static HSLtoRGB(h, s, l) {
    var r, g, b;

    h %= 360;
    h += 360;
    h %= 360;
    s *= 0.01;
    l *= 0.01;

    if (s === 0) {
      var l = Math.round(l * 255);
      return [l, l, l];
    }
    var m2 = (l < 0.5) ? l * (1 + s) : l + s - l * s;
    var m1 = l * 2 - m2;

    // red
    var temp = (h + 120) % 360;
    if (temp < 60) {
      r = m1 + (m2 - m1) * temp / 60;
    } else if (temp < 180) {
      r = m2;
    } else {
      r = m1;
    }

    // green
    temp = h;
    if (temp < 60) {
      g = m1 + (m2 - m1) * temp / 60;
    } else if (temp < 180) {
      g = m2;
    } else if (temp < 240) {
      g = m1 + (m2 - m1) * (240 - temp) / 60;
    } else {
      g = m1;
    }

    // blue
    temp = ((h - 120) + 360) % 360;
    if (temp < 60) {
      b = m1 + (m2 - m1) * temp / 60;
    } else if (temp < 180) {
      b = m2;
    } else if (temp < 240) {
      b = m1 + (m2 - m1) * (240 - temp) / 60;
    } else {
      b = m1;
    }

    return [
      parseInt(r * 255),
      parseInt(g * 255),
      parseInt(b * 255)
    ];
  }

  /**
   * @static
   * @method
   * hsla を rgba に変換
   */
  static HSLAtoRGBA(h, s, l, a) {
    var temp = Color.HSLtoRGB(h, s, l);
    temp[3] = a;
    return temp;
  }

  /**
   * @static
   * @method
   * rgb 値を作成
   */
  static createStyleRGB(r, g, b) {
    return "rgba(" + r + "," + g + "," + b + ")";
  }

  /**
   * @static
   * @method
   * rgba 値を作成
   */
  static createStyleRGBA(r, g, b, a) {
    return "rgba(" + r + "," + g + "," + b + "," + a + ")";
  }

  /**
   * @static
   * @method
   * hsl 値を作成
   */
  static createStyleHSL(h, s, l) {
    return "hsl(" + h + "," + s + "%," + l + "%)";
  }

  /**
   * @static
   * @method
   * hsla 値を作成
   */
  static createStyleHSLA(h, s, l, a) {
    return "hsla(" + h + "," + s + "%," + l + "%," + a + ")";
  }

}

// static props
/**
 * @static
 * カラーリスト
 */
Color.COLOR_LIST = {
  /** @property black */
  "black": [0x00, 0x00, 0x00],
  /** @property silver */
  "silver": [0xc0, 0xc0, 0xc0],
  /** @property gray */
  "gray": [0x80, 0x80, 0x80],
  /** @property white */
  "white": [0xff, 0xff, 0xff],
  /** @property maroon */
  "maroon": [0x80, 0x00, 0x00],
  /** @property red */
  "red": [0xff, 0x00, 0x00],
  /** @property purple */
  "purple": [0x80, 0x00, 0x80],
  /** @property fuchsia */
  "fuchsia": [0xff, 0x00, 0xff],
  /** @property green */
  "green": [0x00, 0x80, 0x00],
  /** @property lime */
  "lime": [0x00, 0xff, 0x00],
  /** @property olive */
  "olive": [0x80, 0x80, 0x00],
  /** @property yellow */
  "yellow": [0xff, 0xff, 0x00],
  /** @property navy */
  "navy": [0x00, 0x00, 0x80],
  /** @property blue */
  "blue": [0x00, 0x00, 0xff],
  /** @property teal */
  "teal": [0x00, 0x80, 0x80],
  /** @property aqua */
  "aqua": [0x00, 0xff, 0xff],
};


var MATCH_SET_LIST = {
  "hex111": {
    reg: /^#(\w{1})(\w{1})(\w{1})$/,
    exec: function(m) {
      return [
        parseInt(m[1] + m[1], 16),
        parseInt(m[2] + m[2], 16),
        parseInt(m[3] + m[3], 16)
      ];
    }
  },
  "hex222": {
    reg: /^#(\w{2})(\w{2})(\w{2})$/,
    exec: function(m) {
      return [
        parseInt(m[1], 16),
        parseInt(m[2], 16),
        parseInt(m[3], 16)
      ];
    }
  },
  "rgb": {
    reg: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
    exec: function(m) {
      return [
        parseInt(m[1]),
        parseInt(m[2]),
        parseInt(m[3])
      ];
    }
  },
  "rgba": {
    reg: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1}(\.{1}\d+)?)\)$/,
    exec: function(m) {
      return [
        parseInt(m[1]),
        parseInt(m[2]),
        parseInt(m[3]),
        parseFloat(m[4])
      ];
    }
  },
  "hsl": {
    reg: /^hsl\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%\)$/,
    exec: function(m) {
      return Color.HSLtoRGB(m[1], m[2], m[3]);
    }
  },
  "hsla": {
    reg: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1}(\.{1}\d+)?)\)$/,
    exec: function(m) {
      return Color.HSLAtoRGBA(m[1], m[2], m[3], m[4]);
    }
  }
};

// 監視オブジェクト
// register で key を登録 (デフォルト値も一緒に？)
// event dispatcher を継承
// event dispatcher って util じゃね？
// register で登録した値を変更したら change イベントが走る


// 名前候補
//  middleman(仲立人)


/**
 * @class phina.util.ChangeDispatcher
 * @extends phina.util.EventDispatcher
 */
class ChangeDispatcher extends EventDispatcher {

  constructor() {
    super();

    this._observe = true;
  }

  register(key, defaultValue) {
    if (arguments.length === 1) {
      var obj = arguments[0];
      forIn.call(obj, function(key, value) {
      // obj.forIn(function(key, value) {
        this.register(key, value);
      }, this);
    }
    else {
      var tempKey = '__' + key;
      this[tempKey] = defaultValue;
      accessor.call(this, key, {
      // this.accessor(key, {
        get: function() {
          return this[tempKey];
        },
        set: function(v) {
          this[tempKey] = v;
          if (this._observe) {
            this.flare('change');
          }
        },
      });
    }
    return this;
  }

  observe() {
    this._observe = true;
  }
  unobserve() {
    this._observe = false;
  }
}

/**
 * @class phina.util.Ajax
 * 
 */
class Ajax {

  static request(options) {
    var data = $safe.call({}, options, Ajax.defaults);
    // var data = ({}).$safe(options, this.defaults);

    var xhr = new XMLHttpRequest();
    var flow = new Flow(function(resolve) {
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if ([200, 201, 0].indexOf(xhr.status) !== -1) {
            resolve(xhr.response);
          }
        }
      };

      xhr.open(data.type, data.url);
      xhr.responseType = data.responseType;
      xhr.send(null);
    });

    return flow;
  }
  static get(url) {
    return Ajax.request({
      type: 'GET',
      url: url,
    });
  }
  static post(url) {
    return Ajax.request({
      type: 'POST',
      url: url,
    });
  }
  static put(url) {
    return Ajax.request({
      type: 'PUT',
      url: url,
    });
  }
  static del(url) {
    return Ajax.request({
      type: 'DELETE',
      url: url,
    });
  }

}

/** 
 * @static
 * @memberof Ajax
 * @type {Object}
 */
Ajax.defaults = {
  type: 'GET',
  contentType: 'application/x-www-form-urlencoded',
  responseType: 'json',
  data: null,
  url: '',
};

/**
 * @class global.Number
 * # 拡張した Number クラス
 * 数値を扱う Number クラスを拡張しています。
 */

/**
 * @method times
 * 0 から自分自身の数-1まで、カウンタをインクリメントしながら関数を繰り返し実行します。
 *
 * ### Example
 *     arr = [];
 *     (5).times(function(i){
 *       arr.push(i);
 *     }); // => [0, 1, 2, 3, 4]
 *
 * @param {Function} fn コールバック関数
 * @param {Object} [self=this] 関数内で this として参照される値。デフォルトは自分自身。
 */
function times(fn, self) {
// Number.prototype.$method("times",  function(fn, self) {
  self = self || this;
  for (var i=0; i<this; ++i) {
    fn.call(self, i, this);
  }
  return this;
}

/**
 * @method step
 * 自分自身の値から指定した数まで、カウンタを増分させながら関数を繰り返し実行します。
 *
 * 上限値や増分値は float 型を指定することができます。
 *
 * ### Example
 *     var arr = [];
 *     (2.4).step(5.3, 0.8, function(n) {
 *       arr.push(n);
 *      }); // => [2.4, 3.2, 4.0, 4.8]
 *
 * @param {Number} limit カウンタの上限値
 * @param {Number} step カウンタを増分する量
 * @param {Function} fn コールバック関数。引数にカウンタが渡される。
 * @param {Object} [self=this] 関数内で this として参照される値。デフォルトは自分自身。
 */
function step(limit, step, fn, self) {
// Number.prototype.$method("step",  function(limit, step, fn, self) {
  self = self || this;
  for (var i=+this; i<=limit; i+=step) {
    fn.call(self, i, this);
  }
  return this;
}
// Number.prototype.$method("toDegree", function() { return (this*Math.RAD_TO_DEG); });

/**
 * @method toRadian
 * 度をラジアンに変換します。
 *
 * ### Example
 *     (180).toRadian(); // => 3.141592653589793
 *
 * @return {Number} ラジアン
 */
function toRadian() { return this * DEG_TO_RAD; }
// Number.prototype.$method("toRadian", function() { return this*Math.DEG_TO_RAD; });

/**
 * @class phina.geom.Vector2
 * # 2次元ベクトルクラス
 * 2次元のベクトルや座標を表すクラスです。
 */
class Vector2 {

  // /**
  //  * x座標
  //  * @type {Number}
  //  */
  // x = 0

  // /**
  //  * y座標
  //  * @type {Number}
  //  */
  // y = 0

  /**
   * 2次元ベクトルのコンストラクタです。
   *
   * ### Example
   *     v = phina.geom.Vector2(3, 4);
   *
   * @param {Number} [x=0] ベクトルの x 座標
   * @param {Number} [y=0] ベクトルの y 座標
   * @return {phina.geom.Vector2} 2次元ベクトルオブジェクト
   */
  constructor(x=0, y=0) {
    this.x = x;
    this.y = y;
  }

  /**
   * @method clone
   * this のコピーを生成して返します。
   *
   * ### Example
   *     v = phina.geom.Vector2(3, 4);
   *     v2 = v.clone();
   *     v2.x == v.x; // => true
   *
   * @return {Object} 生成したベクトル
   */
  clone() {
    return new Vector2(this.x, this.y);
  }

  /**
   * @method equals
   * this の各要素がすべて other と等しいかどうかを返します。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(3, 4);
   *     v2 = phina.geom.Vector2(5, 6);
   *     v1.equals(v2); // => false
   *
   * @param {phina.geom.Vector2} other 比較する対象のベクトル
   * @return {Boolean} 等しいかどうか
   */
  equals(v) {
    return (this.x === v.x && this.y === v.y);
  }

  /**
   * @method set
   * @chainable
   * this の各要素の値を再設定します。
   *
   * ### Example
   *     v = phina.geom.Vector2(3, 4);
   *     v.set(5, 6);
   *
   * @param {Number} x ベクトルの x 座標
   * @param {Number} y ベクトルの y 座標
   * @return {phina.geom.Vector2} 再設定後のベクトル
   */
  set(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }

  /**
   * @method add
   * @chainable
   * this に other を加えます。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(3, 4);
   *     v2 = phina.geom.Vector2(5, 6);
   *     v1.add(v2); // => phina.geom.Vector(8, 10)
   *
   * @param {phina.geom.Vector2} other ベクトル
   * @return {phina.geom.Vector2} 加算した結果のベクトル
   */
  add(v) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }

  /**
   * @method sub
   * @chainable
   * this から other を減じます。
   *
   * ベクトルが座標を表す場合は、指定した座標から自分自身へと向かうベクトルが得られます。
   * 
   * ### Example
   *     v1 = phina.geom.Vector2(3, 4);
   *     v2 = phina.geom.Vector2(1, 5);
   *     v1.sub(v2); // => phina.geom.Vector(2, -1)
   *
   * @param {phina.geom.Vector2} other ベクトル
   * @return {phina.geom.Vector2} 減算した結果のベクトル
   */
  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }

  /**
   * @method mul
   * @chainable
   * this の各要素に数値 n を乗じます。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(3, 4);
   *     v1.mul(3) // => phina.geom.Vector(9, 12)
   *
   * @param {Number} n 乗じる値
   * @return {phina.geom.Vector2} 乗算した結果のベクトル
   */
  mul(n) {
    this.x *= n;
    this.y *= n;
    return this;
  }

  /**
   * @method div
   * @chainable
   * this の各要素を数値 n で割ります。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(8, 16);
   *     v1.div(2) // => phina.geom.Vector(4, 8)
   *
   * @param {Number} n 割る値
   * @return {phina.geom.Vector2} 除算した結果のベクトル
   */
  div(n) {
    //console.assert(n != 0, "0 division!!");
    n = n || 0.01;
    this.x /= n;
    this.y /= n;
    return this;
  }
  /**
   * @method negate
   * @chainable
   * this の各要素の正負を反転します。
   *
   * this と同じ大きさで方向が逆のベクトルが得られます。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(3, -4);
   *     v1.negate() // => phina.geom.Vector(-3, 4)
   *
   * @return {phina.geom.Vector2} 反転後のベクトル
   */
  negate() {
    this.x = -this.x;
    this.y = -this.y;
    
    return this;
  }

  /**
   * @method dot
   * other との内積を返します。
   *
   * 投影ベクトルを求めたり、類似度の計算に利用することができます。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(3, 4);
   *     v2 = phina.geom.Vector2(-2, 2);
   *     v1.dot(v2) // => 2
   *
   * @param {phina.geom.Vector2} other ベクトル
   * @return {Number} 内積
   */
  dot(v) {
    return this.x * v.x + this.y * v.y;
  }

  /**
   * @method cross
   * other との外積（クロス積）を返します。
   *
   * 2次元ベクトルでの外積はベクトルでなく数値を返すことに注意してください。
   * other より this 時計回りにあるときは正の値になり、反時計回りにあるときは負の値になります。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(3, 4);
   *     v2 = phina.geom.Vector2(3, 1);
   *     v1.cross(v2) // => -8
   *
   * @param {phina.geom.Vector2} other ベクトル
   * @return {Number} 外積
   */
  cross(v) {
    return (this.x*v.y) - (this.y*v.x);
  }

  /**
   * @method length
   * this の大きさを返します。
   *
   * (memo) magnitude って名前の方が良いかも. 検討中.
   *
   * ### Example
   *     v1 = phina.geom.Vector2(3, 4);
   *     v1.length(); // => 5
   *
   * @return {Number} ベクトルの大きさ
   */
  length() {
    return Math.sqrt(this.x*this.x + this.y*this.y);
  }
  
  /**
   * @method lengthSquared
   * this の大きさの自乗を返します。
   *
   * C# の名前を引用（or lengthSquare or lengthSqrt）
   *
   * ### Example
   *     v1 = phina.geom.Vector2(3, 4);
   *     v1.lengthSquared(); // => 25
   *
   * @return {Number} ベクトルの大きさの自乗
   */
  lengthSquared() {
    return this.x*this.x + this.y*this.y;
  }
  
  /**
   * @method distance
   * this と other を座標とみなしたときの2点間の距離を返します。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(1, 2);
   *     v2 = phina.geom.Vector2(4, 6);
   *     v1.distance(v2); // => 5
   *
   * @param {phina.geom.Vector2} other 座標を表すベクトル
   * @return {Number} 2点間の距離
   */
  distance(v) {
    return Math.sqrt( Math.pow(this.x-v.x, 2) + Math.pow(this.y-v.y, 2) );
  }
  
  /**
   * @method distanceSquared
   * this と other を座標とみなしたときの2点間の距離の自乗を返します。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(1, 2);
   *     v2 = phina.geom.Vector2(4, 6);
   *     v1.distanceSquared(v2); // => 25
   *
   * @param {phina.geom.Vector2} other 座標を表すベクトル
   * @return {Number} 2点間の距離の自乗
   */
  distanceSquared(v) {
    return Math.pow(this.x-v.x, 2) + Math.pow(this.y-v.y, 2);
  }

  /**
   * @method random
   * @chainable
   * 角度が min から max の範囲（度単位）で大きさが len のランダムなベクトルを返します。
   *
   * ### Example
   *     phina.geom.Vector2().random(90, 180, 1); // => phina.geom.Vector2(-0.5, 0.866) など
   *
   * @param {Number} [min=0] 角度（度単位）の下限値
   * @param {Number} [max=360] 角度（度単位）の上限値
   * @param {Number} [len=1] 大きさ
   * @return {phina.geom.Vector2} ランダム化したベクトル
   */
  random(min, max, len) {
    var degree = Random.randfloat(min || 0, max || 360);
    var rad = degree*Math.DEG_TO_RAD;
    var len = len || 1;

    this.x = Math.cos(rad)*len;
    this.y = Math.sin(rad)*len;

    return this;
  }
  
  /**
   * @method normalize
   * @chainable
   * this を正規化します。すなわち、this と同じ方向で大きさが1のベクトルを返します。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(3, 4);
   *     v1.normalize(); // => phina.geom.Vector2(0.6, 0.8)
   *
   * @return {phina.geom.Vector2} 正規化したベクトル
   */
  normalize() {
    this.div(this.length());
    return this;
  }

  /**
   * @method toString
   * this を JSON 形式で表現した文字列を返します。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(3, 4);
   *     v1.toString(); // => "{x:3, y:4}"
   *
   * @return {String} JSON 文字列
   */
  toString() {
    return "{x:{x}, y:{y}}".format(this);
  }

  /**
   * @method getDirection
   * this のおおよその方向を示した文字列を返します。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(3, 4);
   *     v1.getDirection(); // => "up"
   *
   * @return {String} 方向を表す文字列（"up", "right", "down", "left"）
   */
  getDirection() {
    var angle = this.toDegree();
    if (angle < 45) {
      return "right";
    } else if (angle < 135) {
      return "down";
    } else if (angle < 225) {
      return "left"
    } else if (angle < 315) {
      return "up";
    } else {
      return "right";
    }
  }

  /**
   * @method toAngle
   * this と x 軸との角度（ラジアン単位）を返します。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(-2, 0);
   *     v1.toAngle(); // => 3.14159
   *
   * @return {Number} ベクトルの角度（ラジアン単位）
   */
  toAngle() {
    var rad = Math.atan2(this.y, this.x);
    return (rad + Math.PI*2)%(Math.PI*2);
  }
  
  /**
   * @method fromAngle
   * @chainable
   * 角度（ラジアン単位）と大きさを指定してベクトルを設定します。
   *
   * ### Example
   *     phina.geom.Vector2().fromAngle(Math.PI/4, 2); // => phina.geom.Vector2(1.4142, 1.4142)
   *
   * @param {Number} rad 角度（ラジアン単位）
   * @param {Number} [len=1] 大きさ
   * @return {phina.geom.Vector2} ベクトル
   */
  fromAngle(rad, len) {
    len = len || 1;
    this.x = Math.cos(rad)*len;
    this.y = Math.sin(rad)*len;
    
    return this;
  }

  /**
   * @method toDegree
   * this と x 軸との角度（度単位）を返します。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(-2, 2);
   *     v1.toAngle(); // => 135
   *
   * @return {Number} ベクトルの角度（度単位）
   */
  toDegree() {
    return this.toAngle().toDegree();
  }
  
  /**
   * @method fromDegree
   * @chainable
   * 角度（度単位）と大きさを指定してベクトルを設定します。
   *
   * ### Example
   *     phina.geom.Vector2().fromDegree(60, 2); // => phina.geom.Vector2(1, 1.732)
   *
   * @param {Number} deg 角度（度単位）
   * @param {Number} [len=1] 大きさ
   * @return {phina.geom.Vector2} ベクトル
   */
  fromDegree(deg, len) {
    // return this.fromAngle(deg.toRadian(), len);
    return this.fromAngle(toRadian.call(deg), len);
  }

  /**
   * @method rotate
   * @chainable
   * this を回転します。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(3, 1);
   *     v1.rotate(Math.PI/2); // => phina.geom.Vector2(-1, 3);
   *
   * @param {Number} rad 角度（ラジアン単位）
   * @param {Number} [center=(0, 0)] 回転の中心座標
   * @return {Number} 回転後のベクトル
   */
  rotate(rad, center) {
    center = center || new Vector2(0, 0);

    var x1 = this.x - center.x;
    var y1 = this.y - center.y;
    var x2 = x1 * Math.cos(rad) - y1 * Math.sin(rad);
    var y2 = x1 * Math.sin(rad) + y1 * Math.cos(rad);
    this.set( center.x + x2, center.y + y2 );

    return this;
  }

  /**
   * @method min
   * @static
   * v1 と v2 の各要素に対し、より小さい方を要素とする新しいベクトルを生成して返します。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(3, 1);
   *     v2 = phina.geom.Vector2(-3, 2);
   *     phina.geom.Vector2.min(v1, v2); // phina.geom.Vector2(-3, 1);
   *
   * @param {phina.geom.Vector2} v1 ベクトル
   * @param {phina.geom.Vector2} v2 ベクトル
   * @return {phina.geom.Vector2} 生成したベクトル
   */
  static min(a, b) {
    return new Vector2(
      (a.x < b.x) ? a.x : b.x,
      (a.y < b.y) ? a.y : b.y
    );
  }

  /**
   * @method max
   * @static
   * 2次元ベクトル v1 と v2 の各要素に対し、より大きい方を要素とする新しいベクトルを生成して返します。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(3, 1);
   *     v2 = phina.geom.Vector2(-3, 2);
   *     phina.geom.Vector2.max(v1, v2); // phina.geom.Vector2(3, 2);
   *
   * @param {phina.geom.Vector2} v1 ベクトル
   * @param {phina.geom.Vector2} v2 ベクトル
   * @return {phina.geom.Vector2} 生成したベクトル
   */
  static max(a, b) {
    return new Vector2(
      (a.x > b.x) ? a.x : b.x,
      (a.y > b.y) ? a.y : b.y
    );
  }

  /**
   * @method add
   * @static
   * v1 に v2 を加算した新しいベクトルを生成して返します。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(3, 1);
   *     v2 = phina.geom.Vector2(-3, 2);
   *     phina.geom.Vector2.add(v1, v2); // phina.geom.Vector2(0, 3);
   *
   * @param {phina.geom.Vector2} v1 ベクトル
   * @param {phina.geom.Vector2} v2 ベクトル
   * @return {phina.geom.Vector2} 加算した結果
   */
  static add(lhs, rhs) {
    return new Vector2(lhs.x+rhs.x, lhs.y+rhs.y);
  }
  
  /**
   * @method sub
   * @static
   * 2次元ベクトル v1 から v2 を減じた新しいベクトルを生成して返します。
   *
   * ベクトルが座標を表す場合、2つ目の座標から1つ目の座標へと向かうベクトルが得られます。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(3, 1);
   *     v2 = phina.geom.Vector2(-3, 2);
   *     phina.geom.Vector2.sub(v1, v2); // phina.geom.Vector2(6, -1);
   *
   * @param {phina.geom.Vector2} v1 ベクトル
   * @param {phina.geom.Vector2} v2 ベクトル
   * @return {phina.geom.Vector2} 減算した結果
   */
  static sub(lhs, rhs) {
    return new Vector2(lhs.x-rhs.x, lhs.y-rhs.y);
  }
  
  /**
   * @method mul
   * @static
   * 2次元ベクトル v の各要素に n を乗じた新しいベクトルを生成して返します。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(3, 1);
   *     phina.geom.Vector2.mul(v1, 2); // phina.geom.Vector2(6, 2)
   *
   * @param {phina.geom.Vector2} v ベクトル
   * @param {phina.geom.Vector2} n 乗じる値
   * @return {phina.geom.Vector2} 乗算した結果
   */
  static mul(v, n) {
    return new Vector2(v.x*n, v.y*n);
  }
  
  /**
   * @method div
   * @static
   * 2次元ベクトル v の各要素を n で割った新しいベクトルを生成して返します。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(3, 1);
   *     phina.geom.Vector2.div(v1, 2); // phina.geom.Vector2(1.5, 0.5)
   *
   * @param {phina.geom.Vector2} v ベクトル
   * @param {phina.geom.Vector2} n 割る値
   * @return {phina.geom.Vector2} 除算した結果
   */
  static div(v, n) {
    return new Vector2(v.x/n, v.y/n);
  }
  
  /**
   * @method negate
   * @static
   * 2次元ベクトル v を反転した新しいベクトルを生成して返します。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(3, 1);
   *     phina.geom.Vector2.negate(); // phina.geom.Vector2(-3, -1)
   *
   * @param {phina.geom.Vector2} v ベクトル
   * @return {phina.geom.Vector2} 反転したベクトル
   */
  static negate(v) {
    return new Vector2(-v.x, -v.y);
  }
  
  /**
   * @method dot
   * @static
   * 2次元ベクトル v1 と v2 の内積を返します。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(3, 4);
   *     v2 = phina.geom.Vector2(-2, 2);
   *     phina.geom.Vector2.dot(v1, v2) // => 2
   *
   * @param {phina.geom.Vector2} v1 ベクトル
   * @param {phina.geom.Vector2} v2 ベクトル
   * @return {phina.geom.Vector2} 内積
   */
  static dot(lhs, rhs) {
    return lhs.x * rhs.x + lhs.y * rhs.y;
  }
  
  /**
   * @method cross
   * @static
   * 2次元ベクトル v1 と v2 の外積（クロス積）を返します。
   *
   * 2次元ベクトルでの外積はベクトルでなく数値を返すことに注意してください。
   * 1つ目のベクトルが2つ目のベクトルより時計回りにあるときは正の値になり、反時計回りにあるときは負の値になります。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(3, 4);
   *     v2 = phina.geom.Vector2(3, 1);
   *     phina.geom.Vector2.cross(v1, v2); // => -8
   *
   * @param {phina.geom.Vector2} v1 ベクトル
   * @param {phina.geom.Vector2} v2 ベクトル
   * @return {Number} 外積
   */
  static cross(lhs, rhs) {
    return (lhs.x*rhs.y) - (lhs.y*rhs.x);
  }
  
  /**
   * @method distance
   * @static
   * v1 と v2 を座標とみなしたときの2点間の距離を返します。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(1, 2);
   *     v2 = phina.geom.Vector2(4, 6);
   *     phina.geom.Vector2.distance(v1, v2); // => 5
   *
   * @param {phina.geom.Vector2} v1 座標を表すベクトル
   * @param {phina.geom.Vector2} v2 座標を表すベクトル
   * @return {Number} 2点間の距離
   */
  static distance(lhs, rhs) {
    return Math.sqrt( Math.pow(lhs.x-rhs.x, 2) + Math.pow(lhs.y-rhs.y, 2) );
  }

  /**
   * @method distanceSquared
   * @static
   * v1 と v2 を座標とみなしたときの2点間の距離の自乗を返します。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(1, 2);
   *     v2 = phina.geom.Vector2(4, 6);
   *     phina.geom.Vector2.distanceSquared(v1, v2); // => 25
   *
   * @param {phina.geom.Vector2} v1 座標を表すベクトル
   * @param {phina.geom.Vector2} v2 座標を表すベクトル
   * @return {Number} 2点間の距離の自乗
   */
  static distanceSquared(lhs, rhs) {
    return Math.pow(lhs.x-rhs.x, 2) + Math.pow(lhs.y-rhs.y, 2);
  }

  /**
   * @method manhattanDistance
   * @static
   * v1 と v2 を座標とみなしたときの2点間のマンハッタン距離（軸に平行に進むときの最短距離）を返します。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(1, 2);
   *     v2 = phina.geom.Vector2(4, 6);
   *     phina.geom.Vector2.manhattanDistance(v1, v2); // => 7
   *
   * @param {phina.geom.Vector2} v1 座標を表すベクトル
   * @param {phina.geom.Vector2} v2 座標を表すベクトル
   * @return {Number} 2点間のマンハッタン距離
   */
  static manhattanDistance(lhs, rhs) {
    return Math.abs(lhs.x-rhs.x) + Math.abs(lhs.y-rhs.y);
  }
  
  /**
   * @method normal
   * @static
   * v1 と v2 を座標とみなしたときの、v2 から v1 に向かうベクトルに対する法線ベクトルを返します。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(1, 2);
   *     v2 = phina.geom.Vector2(4, 6);
   *     phina.geom.Vector2.normal(v1, v2); // => phina.geom.Vector2(4, -3)
   *
   * @param {phina.geom.Vector2} v1 座標を表すベクトル
   * @param {phina.geom.Vector2} v2 座標を表すベクトル
   * @return {phina.geom.Vector2} 法線ベクトル
   */
  static normal(a, b) {
    var temp = Vector2.sub(a, b);

    return new Vector2(-temp.y, temp.x);
  }

  /**
   * @method reflect
   * @static
   * 2次元ベクトル v を壁への入射ベクトルとして、壁に反射した際のベクトル（反射ベクトル）を返します。
   *
   * 壁の向きは法線ベクトル normal によって表します。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(4, 3);
   *     normal = phina.geom.Vector2(-1, 1);
   *     phina.geom.Vector2.reflect(v1, normal); // => phina.geom.Vector2(2, 5)
   *
   * @param {phina.geom.Vector2} v 入射ベクトル
   * @param {phina.geom.Vector2} normal 壁の法線ベクトル
   * @return {phina.geom.Vector2} 反射ベクトル
   */
  static reflect(v, normal) {
    var len = Vector2.dot(v, normal);
    var temp= Vector2.mul(normal, 2*len);
    
    return Vector2.sub(v, temp);
  }
  
  /**
   * @method wall
   * @static
   * 2次元ベクトル v を壁への入射ベクトルとして、壁に沿ったベクトル（壁ずりクトル）を返します。
   *
   * 壁の向きは法線ベクトル normal によって表します。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(4, 3);
   *     normal = phina.geom.Vector2(-1, 1);
   *     phina.geom.Vector2.wall(v1, normal); // => phina.geom.Vector2(3, 4)
   *
   * @param {phina.geom.Vector2} v 入射ベクトル
   * @param {phina.geom.Vector2} normal 壁の法線ベクトル
   * @return {phina.geom.Vector2} 壁ずりベクトル
   */
  static wall(v, normal) {
    var len = Vector2.dot(v, normal);
    var temp= Vector2.mul(normal, len);
    
    return Vector2.sub(v, temp);
  }
  
  /**
   * @method lerp
   * @static
   * v1 と v2 を媒介変数 t で線形補間します。
   * t=0.5 で v1 と v2 の中間ベクトルを求めることができます。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(1, 2);
   *     v2 = phina.geom.Vector2(4, 6);
   *     phina.geom.Vector2.lerp(v1, v2, 0.5); // => (2.5, 4)
   *     phina.geom.Vector2.lerp(v1, v2, 0); // => (1, 2)
   *     phina.geom.Vector2.lerp(v1, v2, 1); // => (4, 6)
   * 
   * @param {phina.geom.Vector2} v1 ベクトル
   * @param {phina.geom.Vector2} v2 ベクトル
   * @param {Number} t 媒介変数
   * @return {phina.geom.Vector2} 線形補間の結果
   */
  static lerp(a, b, t) {
    return new Vector2(
      a.x + (b.x-a.x)*t,
      a.y + (b.y-a.y)*t
    );
  }
  
  /**
   * @method slerp
   * @static
   * 補間（未実装）
   */
  static slerp(lhs, rhs, t) {
      // TODO:
      // cos...
  }

  /**
   * @method random
   * @static
   * 角度が min から max の範囲（度単位）で大きさが len のランダムなベクトルを生成して返します。
   *
   * ### Example
   *     phina.geom.Vector2.random(90, 180, 1); // => phina.geom.Vector2(-0.5, 0.866) など
   *
   * @param {Number} [min=0] 角度（度単位）の下限値
   * @param {Number} [max=360] 角度（度単位）の上限値
   * @param {Number} [len=1] 大きさ
   * @return {phina.geom.Vector2} 生成したベクトル
   */
 static random(min, max, len) {
    return new Vector2().random(min, max).mul(len||1);
  }

}

/**
 * @property {Vector2} ZERO ゼロベクトル
 * @readonly
 */
Vector2.ZERO = new Vector2(0, 0);
/**
 * @property {Vector2} LEFT 左方向の単位ベクトル
 * @readonly
 */
Vector2.LEFT = new Vector2(-1, 0);
/**
 * @property {Vector2} RIGHT 右方向の単位ベクトル
 * @readonly
 */
Vector2.RIGHT= new Vector2(1, 0);
/**
 * @property {Vector2} UP 上方向の単位ベクトル
 * @readonly
 */
Vector2.UP   = new Vector2(0, -1);
/**
 * @property {Vector2} DOWN 下方向の単位ベクトル
 * @readonly
 */
Vector2.DOWN = new Vector2(0, 1);

// import { Rect } from "./rect";

/**
 * @class phina.geom.Circle
 * # 円領域を表すクラス
 * キャンバス上の円領域を扱うクラスです。
 * 
 */
class Circle {

  /**
   * @property {Number} x
   * 円の中心の x 座標
   */
  // x: 0,
  /**
   * @property {Number} y
   * 円の中心の y 座標
   */
  // y: 0,
  /**
   * @property {Number} radius
   * 円の半径
   */
  // radius: 32,

  /**
   * @method init
   * 円領域のコンストラクタです。
   *
   * ### Example
   *     circle = phina.geom.Circle(32, 64, 128);
   *
   * @param {Number} x 円の中心の x 座標
   * @param {Number} y 円の中心の y 座標
   * @param {Number} radius 半径
   * @return {phina.geom.Rect} 円領域オブジェクト
   */
  constructor(x, y, radius) {
    this.x = 0;
    this.y = 0;
    this.radius = 32;
    this.set(x, y, radius);
  }

  /**
   * @method set
   * @chainable
   * this の各値を再設定します。
   *
   * ### Example
   *     circle = phina.geom.Circle(32, 64, 128);
   *     circle.set(100, 200, 32);
   *
   * @param {Number} x 円を囲う矩形の左上頂点の x 座標
   * @param {Number} y 円を囲う矩形の左上頂点の x 座標
   * @param {Number} radius 半径
   * @return {phina.geom.Circle} 円領域オブジェクト
   */
  set(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;

    return this;
  }

  /**
   * @method moveTo
   * @chainable
   * 円領域を座標 (x, y) に移動します。(x, y) は円の中心を表します。
   *
   * ### Example
   *     circle = phina.geom.Circle(300, 300, 40);
   *     circle.left; // => 260
   *     circle.moveTo(100, 100);
   *     circle.left; // => 60
   *
   * @param {Number} x 移動先の x 座標
   * @param {Number} y 移動先の y 座標
   */
  moveTo(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }

  /**
   * @method moveBy
   * @chainable
   * 円領域を (x, y) だけ移動します。
   *
   * ### Example
   *     circle = phina.geom.Circle(300, 300, 40);
   *     circle.left; // => 260
   *     circle.moveBy(100, 100);
   *     circle.left; // => 460
   *
   * @param {Number} x 移動量の x 座標
   * @param {Number} y 移動量の y 座標
   */
  moveBy(x, y) {
    this.x += x;
    this.y += y;
    return this;
  }

  /**
   * @method contains
   * 座標 (x, y) が円領域の中に含まれるかどうかを返します。
   *
   * ### Example
   *     circle = phina.geom.Circle(300, 300, 100);
   *     circle.contains(350, 350); // =>  true
   *     circle.contains(350, 400); // => false
   *
   * @param {Number} x 判定する対象の x 座標
   * @param {Number} y 判定する対象の y 座標
   * @return {Boolean} 指定した座標が円領域の中に含まれるかどうか
   */
  contains(x, y) {
    var lenX = this.x-x;
    var lenY = this.y-y;
    var lenSquared = (lenX*lenX)+(lenY*lenY);

    return lenSquared <= this.radius*this.radius;
  }

  /**
   * @method clone
   * this のコピーを生成して返します。
   *
   * ### Example
   *     circle = phina.geom.Circle(50, 100, 40);
   *     circle2 = circle.clone();
   *     circle2.x == circle.x; // => true
   *
   * @return {Object} 生成した円領域
   */
  clone() {
    return new Circle(this.x, this.y, this.radius);
  }

  /**
   * @method toRect
   * 円に外接する正方形を表す矩形領域を生成して返します。
   *
   * ### Example
   *     circle = phina.geom.Circle(50, 100, 40);
   *     rect = circle.toRect();
   *     rect.x; // => 10
   *     rect.y; // => 60
   *     rect.width; // => 80
   *
   * @return {Object} 生成した矩形領域
   */
  toRect() {
    // 循環参照回避のため、Rect側で定義
    // var size = this.size;
    // return new Rect(this.x - this.radius, this.y - this.radius, size, size);
  }

  /**
   * @method toArray
   * this の各値を要素とする配列を生成して返します。
   *
   * ### Example
   *     circle = phina.geom.Circle(50, 100, 40);
   *     rect.toArray(); // => [50, 100, 40]
   *
   * @return {Number[]} 生成した配列
   */
  toArray() {
    return [this.x, this.y, this.radius];
  }

  /**
   * @property {Number} left
   * @readonly
   * キャンバス左端から円の左端までの距離
   *
   * 現時点では読み取り専用です。
   *
   * ### Example
   *     circle = phina.geom.Circle(200, 300, 100);
   *     circle.left; // => 100
   *     circle.top; // => 200
   *     circle.right; // => 300
   *     circle.bottom; // => 400
   */
  get left()   { return this.x - this.radius; }
  set left(v)  {
    // TODO: 
  }

  /**
   * @property {Number} top
   * @readonly
   * キャンバス上端から円の上端までの距離
   *
   * 現時点では読み取り専用です。
   */
  get top()   { return this.y - this.radius; }
  set top(v)  {
    // TODO: 
  }

  /**
   * @property {Number} right
   * @readonly
   * キャンバス右端から円の右端までの距離
   *
   * 現時点では読み取り専用です。
   */
  get right()   { return this.x + this.radius; }
  set right(v)  {
    // TODO: 
  }

  /**
   * @property {Number} bottom
   * @readonly
   * キャンバス下端から円の下端までの距離
   *
   * 現時点では読み取り専用です。
   */
  get bottom()   { return this.y + this.radius; }
  set bottom(v)  {
    // TODO: 
  }
    
  /**
   * @property {Number} size
   * @readonly
   * 円の直径
   *
   * 現時点では読み取り専用です。
   */
  get size()   { return this.radius*2; }
  set size(v)  {
    // TODO: 検討中
  }
}

/**
 * @class phina.geom.Rect
 * # 矩形領域を表すクラス
 * キャンバス上の矩形領域を扱うクラスです。
 * 
 */
class Rect {

  // /**
  //  * @property {Number} x
  //  * 矩形の左上頂点の x 座標
  //  */
  // x: 0,
  // /**
  //  * @property {Number} y
  //  * 矩形の左上頂点の y 座標
  //  */
  // y: 0,
  // /**
  //  * @property {Number} width
  //  * 矩形の幅
  //  */
  // width: 32,
  // /**
  //  * @property {Number} hight
  //  * 矩形の高さ
  //  */
  // height: 32,

  /**
   * @method init
   * 矩形領域のコンストラクタです。
   *
   * ### Example
   *     rect = phina.geom.Rect(8, 16, 32, 64);
   *
   * @param {Number} x 矩形の左上頂点の x 座標
   * @param {Number} y 矩形の左上頂点の y 座標
   * @param {Number} width 幅
   * @param {Number} height 高さ
   * @return {phina.geom.Rect} 矩形領域オブジェクト
   */
  constructor(x, y, width, height) {
    this.x = 0;
    this.y = 0;
    this.width = 32;
    this.height = 32;
    this.set(x, y, width, height);
  }

  /**
   * @method set
   * @chainable
   * this の各値を再設定します。
   *
   * ### Example
   *     rect = phina.geom.Rect(8, 16, 32, 64);
   *     rect.set(0, 16, 32, 64);
   *
   * @param {Number} x 矩形の左上頂点の x 座標
   * @param {Number} y 矩形の左上頂点の y 座標
   * @param {Number} width 幅
   * @param {Number} height 高さ
   */
  set(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    return this;
  }

  /**
   * @method moveTo
   * @chainable
   * 矩形領域を座標 (x, y) に移動します。
   *
   * ### Example
   *     rect = phina.geom.Rect(8, 16, 32, 64);
   *     rect.centerX; // => 24
   *     rect.moveTo(0, 0);
   *     rect.centerX; // => 16
   *
   * @param {Number} x 移動先の x 座標
   * @param {Number} y 移動先の y 座標
   */
  moveTo(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }

  /**
   * @method moveBy
   * @chainable
   * 矩形領域を (x, y) だけ移動します。
   *
   * ### Example
   *     rect = phina.geom.Rect(8, 16, 32, 64);
   *     rect.moveBy(10, -10);
   *     rect.x; // => 18
   *     rect.y; // => 6
   *
   * @param {Number} x 移動量の x 座標
   * @param {Number} y 移動量の y 座標
   */
  moveBy(x, y) {
    this.x += x;
    this.y += y;
    return this;
  }

  /**
   * @method setSizse
   * @chainable
   * 矩形領域の幅と高さを変更します。
   *
   * ### Example
   *     rect = phina.geom.Rect(8, 16, 32, 64);
   *     rect.setSize(10, 20);
   *     rect.width; // => 10
   *     rect.height; // => 20
   *
   * @param {Number} width 幅
   * @param {Number} height 高さ
   */
  setSize(w, h) {
    this.width = w;
    this.height = h;
    return this;
  }

  /**
   * @method padding
   * @chainable
   * 矩形領域の中にパディング領域を設定します。
   *
   * 矩形領域自体のサイズはパディング領域の分だけ小さくなります。  
   * 幅の指定方法は CSS の padding 指定と同じように時計回りです。  
   * 引数が1つの場合は上下左右の値、引数が2つの場合は上下と左右の値、引数が３つの場合は上、左右、下の値と解釈します。
   *
   * ### Example
   *     rect = phina.geom.Rect(50, 100, 150, 200);
   *     rect.padding(10);
   *     rect.x; // => 60
   *     rect.y; // => 110
   *     rect.width; // => 130
   *     rect.height; // => 180
   *
   * @param {Number} top 上辺のパディング幅
   * @param {Number} right 右辺のパディング幅
   * @param {Number} bottom 下辺のパディング幅
   * @param {Number} left 左辺のパディング幅
   */
  padding(top, right, bottom, left) {
    // css の padding に合わせて時計回りにパラメータ調整
    switch (arguments.length) {
      case 1:
        top = right = bottom = left = arguments[0];
        break;
      case 2:
        top     = bottom = arguments[0];
        right   = left   = arguments[1];
        break;
      case 3:
        top     = arguments[0];
        right   = left = arguments[1];
        bottom  = arguments[2];
        break;
    }
    
    this.x += left;
    this.y += top;
    this.width -= left+right;
    this.height-= top +bottom;
    
    return this;
  }

  /**
   * @method contains
   * 座標 (x, y) が 矩形領域の中に含まれるかどうかを返します。
   *
   * ### Example
   *     rect = phina.geom.Rect(50, 100, 150, 200);
   *     rect.contains(35, 68); // =>  true
   *     rect.contains(200, 68); // => false
   *
   * @param {Number} x 判定する対象の x 座標
   * @param {Number} y 判定する対象の y 座標
   * @return {Boolean} 指定した座標が矩形領域の中に含まれるかどうか
   */
  contains(x, y) {
    return this.left <= x && x <= this.right && this.top <= y && y <= this.bottom;
  }

  /**
   * @method clone
   * this のコピーを生成して返します。
   *
   * ### Example
   *     rect = phina.geom.Rect(50, 100, 150, 200);
   *     rect2 = rect.clone();
   *     rect2.x == rect.x; // => true
   *
   * @return {Object} 生成した矩形領域
   */
  clone() {
    return new Rect(this.x, this.y, this.width, this.height);
  }

  /**
   * @method toCircle
   * 矩形領域内に収まる最大の円領域を生成して返します。
   *
   * ### Example
   *     rect = phina.geom.Rect(32, 64, 100, 200);
   *     circle = rect.toCircle();
   *     circle.x; // => 82
   *     circle.y; // => 164
   *     circle.radius; // => 50
   *
   * @return {Object} 生成した円領域
   */
  toCircle() {
    var radius = ((this.width < this.height) ? this.width : this.height)/2;
    return new Circle(this.centerX, this.centerY, radius);
  }

  /**
   * @method toArray
   * this の各値を要素とする配列を生成して返します。
   *
   * ### Example
   *     rect = phina.geom.Rect(32, 64, 100, 200);
   *     rect.toArray(); // => [32, 64, 100, 200]
   *
   * @return {Number[]} 生成した配列
   */
  toArray() {
    return [this.x, this.y, this.width, this.height];
  }

  /**
   * @property {Number} left
   * キャンバス左端から矩形領域の左辺までの距離
   *
   * left を変更すると矩形領域の幅（width）が自動的に調整されます。
   *
   * ### Example
   *     rect = phina.geom.Rect(32, 64, 100, 200);
   *     rect.left; // => 32
   *     rect.width; // => 100
   *     rect.right; // => 132
   *     
   *     rect.left = 42;
   *     rect.width; // => 90
   */
  get left()   { return this.x; }
  set left(v)  { this.width -= v-this.x; this.x = v; }

  /**
   * @property {Number} top
   * キャンバス上端から矩形領域の上辺までの位置
   *
   * top を変更すると矩形領域の高さ（height）が自動的に調整されます。
   */
  get top()   { return this.y; }
  set top(v)  { this.height -= v-this.y; this.y = v; }

  /**
   * @property {Number} right
   * キャンバス左端から矩形領域の右辺までの距離
   *
   * right を変更すると矩形領域の幅（width）が自動的に調整されます。
   */
  get right()   { return this.x + this.width; }
  set right(v)  { this.width += v-this.right; }

  /**
   * @property {Number} bottom
   * キャンバス上端から矩形領域の下辺までの位置
   *
   * bottom を変更すると矩形領域の高さ（height）が自動的に調整されます。
   */
  get bottom()   { return this.y + this.height; }
  set bottom(v)  { this.height += v-this.bottom; }
  
  /**
   * @property {Number} centerX
   * 矩形領域の x 座標
   *
   * 現時点では読み取り専用です。
   */
  get centerX()   { return this.x + this.width/2; }
  set centerX(v)  {
    // TODO: 検討中
  }
  /**
   * @property {Number} centerY
   * 矩形領域の y 座標
   *
   * 現時点では読み取り専用です。
   */
  get centerY()   { return this.y + this.height/2; }
  set centerY(v)  {
    // TODO: 検討中
  }

}

/**
 * Circle.toRect
 * 循環参照を回避するため、ここで定義
 */
Circle.prototype.toRect = function() {
  var size = this.size;
  return new Rect(this.x - this.radius, this.y - this.radius, size, size);
};

/**
 * @class phina.geom.Matrix33
 * # 行列クラス
 * 3x3の行列を表すクラスです。
 * 
 * <pre>
 * | m00 m01 m02 |
 * | m10 m11 m12 |
 * | m20 m21 m22 |
 * </pre>
 */
class Matrix33 {

  /**
   * @method init
   * マトリックスクラスのコンストラクタです。
   *
   * 引数は m00, m01, m02, m10, m11, m12, m20, m21, m22 の順に指定します。
   * 引数が9個に満たない場合は単位行列を生成します。
   *
   * ### Example
   *     mat1 = phina.geom.Matrix33(1, 2, 3, 4, 5, 6, 7, 8, 9);
   *     mat2 = phina.geom.Matrix33();
   *     mat1.m00 + mat2.m00; // => 2
   *     mat1.m01 - mat2.m01; // => 2
   *
   * @param {Number...} m00, m01,... 各要素の値
   * @return {phina.geom.Matrix33} 行列オブジェクト
   */
  constructor() {
    if (arguments.length >= 9) {
      this.set.apply(this, arguments);
    }
    else {
      this.identity();
    }
  }

  /**
   * @method set
   * @chainable
   * this の各要素の値を再設定します。
   *
   * ### Example
   *     mat1 = phina.geom.Matrix33(1, 2, 3, 4, 5, 6, 7, 8, 9);
   *     mat2 = phina.geom.Matrix33();
   *     mat2.set(1, 2, 3, 4, 5, 6, 7, 8, 9);
   *     mat1.toString() == mat2.toString(); // => true
   *
   * @param {Number...} m00, m01,... 各要素の値
   * @return {phina.geom.Matrix33} 行列オブジェクト
   */
  set(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
    this.m00 = m00; this.m01 = m01; this.m02 = m02;
    this.m10 = m10; this.m11 = m11; this.m12 = m12;
    this.m20 = m20; this.m21 = m21; this.m22 = m22;

    return this;
  }

  /**
   * @method identity
   * @chainable
   * this を単位行列にします。
   *
   * ### Example
   *     mat1 = phina.geom.Matrix33(1, 2, 3, 4, 5, 6, 7, 8, 9);
   *     mat2 = phina.geom.Matrix33();
   *     mat1.identity().toString() == mat2.toString(); // => true
   *
   * @return {phina.geom.Matrix33} 単位行列
   */
  identity() {
    this.m00 = 1; this.m01 = 0; this.m02 = 0;
    this.m10 = 0; this.m11 = 1; this.m12 = 0;
    this.m20 = 0; this.m21 = 0; this.m22 = 1;
    return this;
  }

  /**
   * @method clone
   * this のコピーを生成して返します。
   *
   * ### Example
   *     mat1 = phina.geom.Matrix33(1, 2, 3, 4, 5, 6, 7, 8, 9);
   *     mat2 = mat1.clone();
   *     mat1.toString() == mat2.toString(); // => true
   *     mat1 == mat2; // => false
   *
   * @return {phina.geom.Matrix33} 行列オブジェクト
   */
  clone() {
    return new Matrix33(
      this.m00, this.m01, this.m02,
      this.m10, this.m11, this.m12,
      this.m20, this.m21, this.m22
    );
  }

  /**
   * @method determinant
   * 行列式を返します
   *
   * ### Example
   *     mat1 = phina.geom.Matrix33(0, -2, 0, -1, 3, 1, 4, 2, 1);
   *     mat1.determinant(); // => -10
   *     mat1.identity().determinant(); // => 1
   *
   * @return {Number} 行列式
   */
  determinant() {
    var m00 = this.m00; var m01 = this.m01; var m02 = this.m02;
    var m10 = this.m10; var m11 = this.m11; var m12 = this.m12;
    var m20 = this.m20; var m21 = this.m21; var m22 = this.m22;
    
    return m00*m11*m22 + m10*m21*m02 + m01*m12*m20 - m02*m11*m20 - m01*m10*m22 - m12*m21*m00;
  }

  /**
   * @method transpose
   * @chainable
   * 転置行列を返します。
   *
   * ### Example
   *     mat1 = phina.geom.Matrix33(1, 2, 3, 4, 5, 6, 7, 8, 9);
   *     mat2 = phina.geom.Matrix33(1, 4, 7, 2, 5, 8, 3, 6, 9);
   *     mat1.transpose().toString() == mat2.toString(); // => true
   *
   * @return {phina.geom.Matrix33} 転置行列
   */
  transpose() {
    var swap = function(a, b) {
      var temp = this[a];
      this[a] = this[b];
      this[b] = temp;
    }.bind(this);

    swap('m01', 'm10');
    swap('m02', 'm20');
    swap('m12', 'm21');
    
    return this;
  }

  /**
   * @method invert
   * @chainable
   * 逆行列を返します。
   *
   * ### Example
   *     mat1 = phina.geom.Matrix33(0, -1, 1, -1, 4, -2, 1, 1, 1);
   *     mat2 = mat1.clone().invert();
   *     mat3 = mat1.clone().multiply(mat2);
   *     mat3.toString() == phina.geom.Matrix33.IDENTITY.toString(); // => true
   *
   * @return {phina.geom.Matrix33} 逆行列
   */
  invert() {
    var m00 = this.m00; var m01 = this.m01; var m02 = this.m02;
    var m10 = this.m10; var m11 = this.m11; var m12 = this.m12;
    var m20 = this.m20; var m21 = this.m21; var m22 = this.m22;

    var det = this.determinant();

    // |m00, m01, m02|
    // |m10, m11, m12|
    // |m20, m21, m22|
    this.m00 = (m11*m22-m12*m21)/det;
    this.m01 = (m10*m22-m12*m20)/det*-1;
    this.m02 = (m10*m21-m11*m20)/det;
    
    this.m10 = (m01*m22-m02*m21)/det*-1;
    this.m11 = (m00*m22-m02*m20)/det;
    this.m12 = (m00*m21-m01*m20)/det*-1;
    
    this.m20 = (m01*m12-m02*m11)/det;
    this.m21 = (m00*m12-m02*m10)/det*-1;
    this.m22 = (m00*m11-m01*m10)/det;
    
    this.transpose();
    
    return this;

  }

  /**
   * @method multiply
   * this に other を乗じます。
   *
   * ### Example
   *     mat1 = phina.geom.Matrix33(0, -1, 1, -1, 4, -2, 1, 1, 1);
   *     mat2 = mat1.clone().invert();
   *     mat3 = mat1.clone().multiply(mat2);
   *     mat3.toString() == phina.geom.Matrix33.IDENTITY.toString(); // => true
   *
   * @param {phina.geom.Matrix33} other 乗じる行列
   * @return {phina.geom.Matrix33} 乗算結果の行列
   */
  multiply(mat) {
    var tm = this.m;
    var om = mat.m;

    var a00 = this.m00, a01 = this.m01, a02 = this.m02;
    var a10 = this.m10, a11 = this.m11, a12 = this.m12;
    var a20 = this.m20, a21 = this.m21, a22 = this.m22;
    var b00 = mat.m00, b01 = mat.m01, b02 = mat.m02;
    var b10 = mat.m10, b11 = mat.m11, b12 = mat.m12;
    var b20 = mat.m20, b21 = mat.m21, b22 = mat.m22;

    this.m00 = a00*b00 + a01*b10 + a02*b20;
    this.m01 = a00*b01 + a01*b11 + a02*b21;
    this.m02 = a00*b02 + a01*b12 + a02*b22;

    this.m10 = a10*b00 + a11*b10 + a12*b20;
    this.m11 = a10*b01 + a11*b11 + a12*b21;
    this.m12 = a10*b02 + a11*b12 + a12*b22;

    this.m20 = a20*b00 + a21*b10 + a22*b20;
    this.m21 = a20*b01 + a21*b11 + a22*b21;
    this.m22 = a20*b02 + a21*b12 + a22*b22;
    
    return this;
  }

  /**
   * @method multiplyVector2
   * this に2次元ベクトル v を乗じます。
   * 2次元ベクトルは (x, y, 1) として乗算します。
   *
   * ### Example
   *     mat = phina.geom.Matrix33(0, -1, 1, -1, 4, -2, 1, 1, 1);
   *     v = phina.geom.Vector2(2, 4)
   *     mat.multiplyVector2(v) // => {x: -3, y: 12}
   *
   * @param {phina.geom.Vector2} v 乗じるベクトル
   * @return {phina.geom.Vector2} 乗算結果のベクトル
   */
  multiplyVector2(v) {
    var vx = this.m00*v.x + this.m01*v.y + this.m02;
    var vy = this.m10*v.x + this.m11*v.y + this.m12;
    
    // return phina.geom.Vector2(vx, vy);
    return new Vector2(vx, vy);
  }

  // 行
  /**
   * @method getRow
   * row 番目の行を配列で返します。row が 0、1、2 のいずれかでなければ null を返します。
   *
   * ### Example
   *     mat1 = phina.geom.Matrix33(1, 2, 3, 4, 5, 6, 7, 8, 9);
   *     mat1.getRow(0); // [1, 2, 3]
   *     mat1.getRow(1); // [4, 5, 6]
   *     mat1.getRow(9); // null
   *
   * @param {0/1/2} row 行番号
   * @return {Number[]} 行を表す配列
   */
  getRow(row) {
    if ( row === 0 ) {
      return [ this.m00, this.m01, this.m02 ];
    }
    else if ( row === 1 ) {
      return [ this.m10, this.m11, this.m12 ];
    }
    else if ( row === 2 ) {
      return [ this.m20, this.m21, this.m22 ];
    }
    else {
      return null;
    }
  }

  /**
   * @method getCol
   * col 番目の列を配列で返します。col が 0、1、2 のいずれかでなければ null を返します。
   *
   * ### Example
   *     mat1 = phina.geom.Matrix33(1, 2, 3, 4, 5, 6, 7, 8, 9);
   *     mat1.getCol(0); // [1, 4, 7]
   *     mat1.getCol(1); // [2, 5, 8]
   *     mat1.getRow(-1); // null
   *
   * @param {0/1/2} col 列番号
   * @return {Number[]} 列を表す配列
   */
  getCol(col) {
    if ( col === 0 ) {
      return [ this.m00, this.m10, this.m20 ];
    }
    else if ( col === 1 ) {
      return [ this.m01, this.m11, this.m21 ];
    }
    else if ( col === 2 ) {
      return [ this.m02, this.m12, this.m22 ];
    }
    else {
      return null;
    }
  }

  /**
   * @method toString
   * 行列を JSON 形式で表現した文字列を返します。
   *
   * ### Example
   *     v = phina.geom.Vector2(3, 4);
   *     v2 = v.clone();
   *     v2.x == v.x; // => true
   *
   * @return {String} JSON 文字列
   */
  toString() {
    return "|{m00}, {m01}, {m02}|\n|{m10}, {m11}, {m12}|\n|{m20}, {m21}, {m22}|".format(this);
  }

}

/**
 * @property {phina.geom.Matrix33} IDENTITY 単位行列
 * @readonly
 */
Matrix33.IDENTITY = new Matrix33().identity();

/**
* @class phina.geom.Collision
* # 衝突判定用クラス
* 衝突判定のためのクラスです。すべてのメソッドがスタティックメソッドです。
* 
*/
class Collision {

  /**
   * @method testCircleCircle
   * @static
   * 2つの円領域が重なっているかどうかを判定します
   *
   * ### Example
   *     circle1 = phina.geom.Circle(100, 100, 30);
   *     circle2 = phina.geom.Circle(130, 140, 30);
   * phina.geom.Collision.testCircleCircle(circle1, circle2); // => true
   *
   * @param {phina.geom.Circle} circle1 円領域オブジェクト
   * @param {phina.geom.Circle} circle2 円領域オブジェクト
   * @return {Boolean} 領域が重なっているかどうか
   */
  static testCircleCircle(circle0, circle1) {
    var distanceSquared = phina.geom.Vector2.distanceSquared(circle0, circle1);
    return distanceSquared <= Math.pow(circle0.radius + circle1.radius, 2);
  }
  /**
   * @method testRectRect
   * @static
   * 2つの矩形領域が重なっているかどうかを判定します
   *
   * ### Example
   *     rect1 = phina.geom.Rect(100, 100, 30, 40);
   *     rect2 = phina.geom.Rect(200, 200, 10, 10);
   *     phina.geom.Collision.testRectRect(rect1, rect2); // => false
   *
   * @param {phina.geom.Rect} rect1 矩形領域オブジェクト
   * @param {phina.geom.Rect} rect2 矩形領域オブジェクト
   * @return {Boolean} 領域が重なっているかどうか
   */
  static testRectRect(rect0, rect1) {
    return (rect0.left < rect1.right) && (rect0.right > rect1.left) &&
      (rect0.top < rect1.bottom) && (rect0.bottom > rect1.top);
  }
  /**
   * @method testCircleRect
   * @static
   * 円領域と矩形領域が重なっているかどうかかを判定します
   *
   * ### Example
   *     circle = phina.geom.Circle(100, 100, 30);
   *     rect = phina.geom.Rect(100, 100, 30, 40);
   *     phina.geom.Collision.testCircleRect(circle, rect); // => true
   *
   * @param {phina.geom.Circle} circle 円領域オブジェクト
   * @param {phina.geom.Rect} rect 矩形領域オブジェクト
   * @return {Boolean} 領域が重なっているかどうか
   */
  static testCircleRect(circle, rect) {
    // まずは大きな矩形で判定(高速化)
    var bigRect = phina.geom.Rect(rect.left-circle.radius, rect.top-circle.radius, rect.width+circle.radius*2, rect.height+circle.radius*2);
    if (bigRect.contains(circle.x, circle.y) === false) {
      return false;
    }
    
    // 2種類の矩形と衝突判定
    var r = phina.geom.Rect(rect.left-circle.radius, rect.top, rect.width+circle.radius*2, rect.height);
    if (r.contains(circle.x, circle.y)) {
      return true;
    }
    r.set(rect.left, rect.top-circle.radius, rect.width, rect.height+circle.radius*2);
    if (r.contains(circle.x, circle.y)) {
      return true;
    }
    
    // 円と矩形の４点の判定
    var c = phina.geom.Circle(circle.x, circle.y, circle.radius);
    // left top
    if (c.contains(rect.left, rect.top)) {
      return true;
    }
    // right top
    if (c.contains(rect.right, rect.top)) {
      return true;
    }
    // right bottom
    if (c.contains(rect.right, rect.bottom)) {
      return true;
    }
    // left bottom
    if (c.contains(rect.left, rect.bottom)) {
      return true;
    }
    
    return false;
  }
  /**
   * @method testCircleLine
   * @static
   * 円領域と線分が重なっているかどうかを判定します
   *
   * ### Example
   *     circle = phina.geom.Circle(100, 100, 20);
   *     p1 = phina.geom.Vector2(0, 0);
   *     p2 = phina.geom.Vector2(300, 400);
   *     phina.geom.Collision.testCircleLine(circle, p1, p2); // => true
   *
   * @param {phina.geom.Circle} circle 円領域オブジェクト
   * @param {phina.geom.Vector2} p1 線分の端の座標
   * @param {phina.geom.Vector2} p2 線分の端の座標
   * @return {Boolean} 円領域と線分が重なっているかどうか
   */
  static testCircleLine (circle, p1, p2) {
    // 先に線分端との判定
    if (circle.contains(p1.x, p1.y) || circle.contains(p2.x, p2.y)) return true;
    // 半径の2乗
    var r2 = circle.radius * circle.radius;
    // 円の中心座標
    var p3 = phina.geom.Vector2(circle.x, circle.y);
    // 各ベクトル
    var p1p2 = phina.geom.Vector2.sub(p1, p2);
    var p1p3 = phina.geom.Vector2.sub(p1, p3);
    var p2p3 = phina.geom.Vector2.sub(p2, p3);
    // 外積
    var cross = phina.geom.Vector2.cross(p1p2, p1p3);
    // 外積の絶対値の2乗
    var cross2 = cross * cross;
    // p1p2の長さの2乗
    var length2 = p1p2.lengthSquared();
    // 円の中心から線分までの垂線の距離の2乗
    var d2 = cross2 / length2;
    // 円の半径の2乗より小さいなら重複
    if (d2 <= r2) {
      var dot1 = phina.geom.Vector2.dot(p1p3, p1p2);
      var dot2 = phina.geom.Vector2.dot(p2p3, p1p2);
      // 通常は内積の乗算
      if (dot1 * dot2 <= 0) return true;
    }
    return false;
  }
  /**
   * @method testLineLine
   * @static
   * 2つの線分が重なっているかどうかを判定します
   * 参考：http://www5d.biglobe.ne.jp/~tomoya03/shtml/algorithm/Intersection.htm
   *
   * ### Example
   *     p1 = phina.geom.Vector2(100, 100);
   *     p2 = phina.geom.Vector2(200, 200);
   *     p3 = phina.geom.Vector2(150, 240);
   *     p4 = phina.geom.Vector2(200, 100);
   * phina.geom.Collision.testLineLine(p1, p2, p3, p4); // => true
   *
   * @param {phina.geom.Vector2} p1 線分1の端の座標
   * @param {phina.geom.Vector2} p2 線分1の端の座標
   * @param {phina.geom.Vector2} p3 線分2の端の座標
   * @param {phina.geom.Vector2} p4 線分2の端の座標
   * @return {Boolean} 線分1と線分2が重なっているかどうか
   */
  static testLineLine (p1, p2, p3, p4) {
    //同一ＸＹ軸上に乗ってる場合の誤判定回避
    if (p1.x == p2.x && p1.x == p3.x && p1.x == p4.x) {
      var min = Math.min(p1.y, p2.y);
      var max = Math.max(p1.y, p2.y);
      if (min <= p3.y && p3.y <= max || min <= p4.y && p4.y <= max) return true;
      return false;
    }
    if (p1.y == p2.y && p1.y == p3.y && p1.y == p4.y) {
      var min = Math.min(p1.x, p2.x);
      var max = Math.max(p1.x, p2.x);
      if (min <= p3.x && p3.x <= max || min <= p4.x && p4.x <= max) return true;
      return false;
    }
    //通常判定
    var a = (p1.x - p2.x) * (p3.y - p1.y) + (p1.y - p2.y) * (p1.x - p3.x);
    var b = (p1.x - p2.x) * (p4.y - p1.y) + (p1.y - p2.y) * (p1.x - p4.x);
    var c = (p3.x - p4.x) * (p1.y - p3.y) + (p3.y - p4.y) * (p3.x - p1.x);
    var d = (p3.x - p4.x) * (p2.y - p3.y) + (p3.y - p4.y) * (p3.x - p2.x);
    return a * b <= 0 && c * d <= 0;
  }
  /**
   * @method testRectLine
   * @static
   * 矩形と線分が重なっているかどうかを判定します
   *
   * ### Example
   *     rect = phina.geom.Rect(120, 130, 40, 50);
   *     p1 = phina.geom.Vector2(100, 100);
   *     p2 = phina.geom.Vector2(200, 200);
   * phina.geom.Collision.testRectLine(rect, p1, p2); // => true
   *
   * @param {phina.geom.Rect} rect 矩形領域オブジェクト
   * @param {phina.geom.Vector2} p1 線分の端の座標
   * @param {phina.geom.Vector2} p2 線分の端の座標
   * @return {Boolean} 矩形と線分が重なっているかどうか
   */
  static testRectLine (rect, p1, p2) {
      //包含判定(p1が含まれてれば良いのでp2の判定はしない）
      if (rect.left <= p1.x && p1.x <= rect.right && rect.top <= p1.y && p1.y <= rect.bottom ) return true;

      //矩形の４点
      var r1 = phina.geom.Vector2(rect.left, rect.top);     //左上
      var r2 = phina.geom.Vector2(rect.right, rect.top);    //右上
      var r3 = phina.geom.Vector2(rect.right, rect.bottom); //右下
      var r4 = phina.geom.Vector2(rect.left, rect.bottom);  //左下

      //矩形の４辺をなす線分との接触判定
      if (phina.geom.Collision.testLineLine(p1, p2, r1, r2)) return true;
      if (phina.geom.Collision.testLineLine(p1, p2, r2, r3)) return true;
      if (phina.geom.Collision.testLineLine(p1, p2, r3, r4)) return true;
      if (phina.geom.Collision.testLineLine(p1, p2, r1, r4)) return true;
      return false;
  }

}

/**
 * @class phina.geom.Vector3
 * # 3次元ベクトルクラス（未実装）
 * 3次元のベクトルや座標を表すクラスです。
 */
class Vector3 {

  /** x座標 */
  // x: 0,
  /** y座標 */
  // y: 0,
  /** z座標 */
  // z: 0,

  /**
   * @constructor
   */
  constructor(x, y, z) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
  }

}

/**
 * @class phina.graphics.Canvas
 * キャンバス拡張クラス
 */
class Canvas {
  // domElement: null,
  // canvas: null,
  // context: null,

  /**
   * 初期化
   */
  constructor(canvas) {
    if (typeof canvas === 'string') {
      this.canvas = document.querySelector(canvas);
    } else {
      this.canvas = canvas || document.createElement('canvas');
    }

    this.domElement = this.canvas;
    this.context = this.canvas.getContext('2d');
    this.context.lineCap = 'round';
    this.context.lineJoin = 'round';
  }

  /**
   * サイズをセット
   */
  setSize(width, height) {
    this.canvas.width   = width;
    this.canvas.height  = height;
    return this;
  }

  setSizeToScreen() {
    this.canvas.style.position  = "fixed";
    this.canvas.style.margin    = "0px";
    this.canvas.style.padding   = "0px";
    this.canvas.style.left      = "0px";
    this.canvas.style.top       = "0px";
    return this.setSize(window.innerWidth, window.innerHeight);
  }

  fitScreen(isEver) {
    isEver = isEver === undefined ? true : isEver;

    var _fitFunc = function() {
      var e = this.domElement;
      var s = e.style;
      
      s.position = "absolute";
      s.margin = "auto";
      s.left = "0px";
      s.top  = "0px";
      s.bottom = "0px";
      s.right = "0px";

      var rateWidth = e.width/window.innerWidth;
      var rateHeight= e.height/window.innerHeight;
      var rate = e.height/e.width;
      
      if (rateWidth > rateHeight) {
        s.width  = Math.floor(innerWidth)+"px";
        s.height = Math.floor(innerWidth*rate)+"px";
      }
      else {
        s.width  = Math.floor(innerHeight/rate)+"px";
        s.height = Math.floor(innerHeight)+"px";
      }
    }.bind(this);
    
    // 一度実行しておく
    _fitFunc();

    // リサイズ時のリスナとして登録しておく
    if (isEver) {
      phina$1.global.addEventListener("resize", _fitFunc, false);
    }
  }

  /**
   * クリア
   */
  clear(x, y, width, height) {
    x = x || 0;
    y = y || 0;
    width = width || this.width;
    height= height|| this.height;
    this.context.clearRect(x, y, width, height);
    return this;
  }

  clearColor(fillStyle, x, y, width, height) {
    x = x || 0;
    y = y || 0;
    width = width || this.width;
    height= height|| this.height;

    var context = this.context;

    context.save();
    context.setTransform(1.0, 0.0, 0.0, 1.0, 0.0, 0.0); // 行列初期化
    context.fillStyle = fillStyle;     // 塗りつぶしスタイルセット
    context.fillRect(x, y, width, height);
    context.restore();

    return this;
  }


  /**
   * パスを開始(リセット)
   */
  beginPath() {
    this.context.beginPath();
    return this;
  }

  /**
   *  パスを閉じる
   */
  closePath() {
    this.context.closePath();
    return this;
  }


  /**
   *  新規パス生成
   */
  moveTo(x, y) {
    this.context.moveTo(x, y);
    return this;
  }

  /**
   * パスに追加
   */
  lineTo(x, y) {
    this.context.lineTo(x, y);
    return this;
  }

  quadraticCurveTo() {
    this.context.quadraticCurveTo.apply(this.context, arguments);
    return this;
  }

  bezierCurveTo() {
    this.context.bezierCurveTo.apply(this.context, arguments);
    return this;
  }

  /**
   * パス内を塗りつぶす
   */
  fill() {
    this.context.fill();
    return this;
  }

  /**
   * パス上にラインを引く
   */
  stroke() {
    this.context.stroke();
    return this;
  }

  /**
   * クリップ
   */
  clip() {
    this.context.clip();
    return this;
  }

      
  /**
   * 点描画
   */
  drawPoint(x, y) {
    return this.strokeRect(x, y, 1, 1);
  }

  /**
   * ラインパスを作成
   */
  line(x0, y0, x1, y1) {
    return this.moveTo(x0, y0).lineTo(x1, y1);
  }
  
  /**
   * ラインを描画
   */
  drawLine(x0, y0, x1, y1) {
    return this.beginPath().line(x0, y0, x1, y1).stroke();
  }

  /**
   * ダッシュラインを描画
   */
  drawDashLine(x0, y0, x1, y1, pattern) {
    var patternTable = null;
    if (typeof(pattern) == "string") {
      patternTable = pattern;
    }
    else {
      pattern = pattern || 0xf0f0;
      patternTable = pattern.toString(2);
    }
    patternTable = patternTable.padding(16, '1');
    
    var vx = x1-x0;
    var vy = y1-y0;
    var len = Math.sqrt(vx*vx + vy*vy);
    vx/=len; vy/=len;
    
    var x = x0;
    var y = y0;
    for (var i=0; i<len; ++i) {
      if (patternTable[i%16] == '1') {
        this.drawPoint(x, y);
        // this.fillRect(x, y, this.context.lineWidth, this.context.lineWidth);
      }
      x += vx;
      y += vy;
    }
    
    return this;
  }

  /**
   * v0(x0, y0), v1(x1, y1) から角度を求めて矢印を描画
   * http://hakuhin.jp/as/rotation.html
   */
  drawArrow(x0, y0, x1, y1, arrowRadius) {
    var vx = x1-x0;
    var vy = y1-y0;
    var angle = Math.atan2(vy, vx)*180/Math.PI;
    
    this.drawLine(x0, y0, x1, y1);
    this.fillPolygon(x1, y1, arrowRadius || 5, 3, angle);
    
    return this;
  }


  /**
   * lines
   */
  lines() {
    this.moveTo(arguments[0], arguments[1]);
    for (var i=1,len=arguments.length/2; i<len; ++i) {
      this.lineTo(arguments[i*2], arguments[i*2+1]);
    }
    return this;
  }

  /**
   * ラインストローク描画
   */
  strokeLines() {
    this.beginPath();
    this.lines.apply(this, arguments);
    this.stroke();
    return this;
  }

  /**
   * ライン塗りつぶし描画
   */
  fillLines() {
    this.beginPath();
    this.lines.apply(this, arguments);
    this.fill();
    return this;
  }
  
  /**
   * 四角形パスを作成する
   */
  rect(x, y, width, height) {
    this.context.rect.apply(this.context, arguments);
    return this;
  }
  
  /**
   * 四角形塗りつぶし描画
   */
  fillRect() {
    this.context.fillRect.apply(this.context, arguments);
    return this;
  }
  
  /**
   * 四角形ライン描画
   */
  strokeRect() {
    this.context.strokeRect.apply(this.context, arguments);
    return this;
  }
  
  /**
   * 角丸四角形パス
   */
  roundRect(x, y, width, height, radius) {
    var l = x + radius;
    var r = x + width - radius;
    var t = y + radius;
    var b = y + height - radius;
    
    /*
    var ctx = this.context;
    ctx.moveTo(l, y);
    ctx.lineTo(r, y);
    ctx.quadraticCurveTo(x+width, y, x+width, t);
    ctx.lineTo(x+width, b);
    ctx.quadraticCurveTo(x+width, y+height, r, y+height);
    ctx.lineTo(l, y+height);
    ctx.quadraticCurveTo(x, y+height, x, b);
    ctx.lineTo(x, t);
    ctx.quadraticCurveTo(x, y, l, y);
    /**/
    
    this.context.arc(l, t, radius,     -Math.PI, -Math.PI*0.5, false);  // 左上
    this.context.arc(r, t, radius, -Math.PI*0.5,            0, false);  // 右上
    this.context.arc(r, b, radius,            0,  Math.PI*0.5, false);  // 右下
    this.context.arc(l, b, radius,  Math.PI*0.5,      Math.PI, false);  // 左下
    this.closePath();
    
    return this;
  }

  /**
   * 角丸四角形塗りつぶし
   */
  fillRoundRect(x, y, width, height, radius) {
    return this.beginPath().roundRect(x, y, width, height, radius).fill();
  }

  /**
   * 角丸四角形ストローク描画
   */
  strokeRoundRect(x, y, width, height, radius) {
    return this.beginPath().roundRect(x, y, width, height, radius).stroke();
  }

  /**
   * 円のパスを設定
   */
  circle(x, y, radius) {
    this.context.arc(x, y, radius, 0, Math.PI*2, false);
    return this;
  }
  
  /**
   * 塗りつぶし円を描画
   */
  fillCircle(x, y, radius) {
    var c = this.context;
    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI*2, false);
    c.closePath();
    c.fill();
    return this;
  }
  
  /**
   * ストローク円を描画
   */
  strokeCircle(x, y, radius) {
    var c = this.context;
    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI*2, false);
    c.closePath();
    c.stroke();
    return this;
  }

  /**
   * 円弧のパスを設定
   */
  arc(x, y, radius, startAngle, endAngle, anticlockwise) {
    this.context.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    return this;
  }
  
  /**
   * 塗りつぶし円弧を描画
   */
  fillArc(x, y, radius, startAngle, endAngle, anticlockwise) {
    return this.beginPath().arc(x, y, radius, startAngle, endAngle, anticlockwise).fill();
  }
  
  /**
   * ストローク円弧を描画
   */
  strokeArc(x, y, radius, startAngle, endAngle, anticlockwise) {
    return this.beginPath().arc(x, y, radius, startAngle, endAngle, anticlockwise).stroke();
  }


  pie(x, y, radius, startAngle, endAngle, anticlockwise) {
    var context = this.context;
    context.beginPath();
    context.moveTo(0, 0);
    context.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    context.closePath();
    return this;
  }
  fillPie(x, y, radius, startAngle, endAngle, anticlockwise) {
    return this.beginPath().pie(x, y, radius, startAngle, endAngle, anticlockwise).fill();
  }
  strokePie(x, y, radius, startAngle, endAngle, anticlockwise) {
    return this.beginPath().pie(x, y, radius, startAngle, endAngle, anticlockwise).stroke();
  }

  
  /**
   * ポリゴンパス
   */
  polygon(x, y, size, sides, offsetAngle) {
    var radDiv = (Math.PI*2)/sides;
    var radOffset = (offsetAngle!==undefined) ? offsetAngle*Math.PI/180 : -Math.PI/2;
    
    this.moveTo(x + Math.cos(radOffset)*size, y + Math.sin(radOffset)*size);
    for (var i=1; i<sides; ++i) {
      var rad = radDiv*i+radOffset;
      this.lineTo(
        x + Math.cos(rad)*size,
        y + Math.sin(rad)*size
      );
    }
    this.closePath();
    return this;
  }
  /**
   * ポリゴン塗りつぶし
   */
  fillPolygon(x, y, radius, sides, offsetAngle) {
    return this.beginPath().polygon(x, y, radius, sides, offsetAngle).fill();
  }
  /**
   * ポリゴンストローク描画
   */
  strokePolygon(x, y, radius, sides, offsetAngle) {
    return this.beginPath().polygon(x, y, radius, sides, offsetAngle).stroke();
  }
  
  /**
   * star
   */
  star(x, y, radius, sides, sideIndent, offsetAngle) {
    var x = x || 0;
    var y = y || 0;
    var radius = radius || 64;
    var sides = sides || 5;
    var sideIndentRadius = radius * (sideIndent || 0.38);
    var radOffset = (offsetAngle) ? offsetAngle*Math.PI/180 : -Math.PI/2;
    var radDiv = (Math.PI*2)/sides/2;

    this.moveTo(
      x + Math.cos(radOffset)*radius,
      y + Math.sin(radOffset)*radius
    );
    for (var i=1; i<sides*2; ++i) {
      var rad = radDiv*i + radOffset;
      var len = (i%2) ? sideIndentRadius : radius;
      this.lineTo(
        x + Math.cos(rad)*len,
        y + Math.sin(rad)*len
      );
    }
    this.closePath();

    return this;
  }

  /**
   * 星を塗りつぶし描画
   */
  fillStar(x, y, radius, sides, sideIndent, offsetAngle) {
    this.beginPath().star(x, y, radius, sides, sideIndent, offsetAngle).fill();
    return this;
  }

  /**
   * 星をストローク描画
   */
  strokeStar(x, y, radius, sides, sideIndent, offsetAngle) {
    this.beginPath().star(x, y, radius, sides, sideIndent, offsetAngle).stroke();
    return this;
  }

  /*
   * heart
   */
  heart(x, y, radius, angle) {
    var half_radius = radius*0.5;
    var rad = (angle === undefined) ? Math.PI/4 : Math.degToRad(angle);

    // 半径 half_radius の角度 angle 上の点との接線を求める
    var p = Math.cos(rad)*half_radius;
    var q = Math.sin(rad)*half_radius;

    // 円の接線の方程式 px + qy = r^2 より y = (r^2-px)/q
    var x2 = -half_radius;
    var y2 = (half_radius*half_radius-p*x2)/q;

    // 中心位置調整
    var height = y2 + half_radius;
    var offsetY = half_radius-height/2;

    // パスをセット
    this.moveTo(0+x, y2+y+offsetY);

    this.arc(-half_radius+x, 0+y+offsetY, half_radius, Math.PI-rad, Math.PI*2);
    this.arc(half_radius+x, 0+y+offsetY, half_radius, Math.PI, rad);
    this.closePath();

    return this;
  }

  /*
   * fill heart
   */
  fillHeart(x, y, radius, angle) {
    return this.beginPath().heart(x, y, radius, angle).fill();
  }

  /*
   * stroke heart
   */
  strokeHeart(x, y, radius, angle) {
    return this.beginPath().heart(x, y, radius, angle).stroke();
  }

  /*
   * http://stackoverflow.com/questions/14169234/the-relation-of-the-bezier-curve-and-ellipse
   */
  ellipse(x, y, w, h) {
    var ctx = this.context;
    var kappa = 0.5522848;

    var ox = (w / 2) * kappa; // control point offset horizontal
    var oy = (h / 2) * kappa; // control point offset vertical
    var xe = x + w;           // x-end
    var ye = y + h;           // y-end
    var xm = x + w / 2;       // x-middle
    var ym = y + h / 2;       // y-middle

    ctx.moveTo(x, ym);
    ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
    ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
    ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
    ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
    // ctx.closePath();

    return this;
  }

  fillEllipse(x, y, width, height) {
    return this.beginPath().ellipse(x, y, width, height).fill();
  }
  strokeEllipse(x, y, width, height) {
    return this.beginPath().ellipse(x, y, width, height).stroke();
  }

  fillText() {
    this._context.fillText.apply(this._context, arguments);
    return this;
  }

  strokeText() {
    this._context.strokeText.apply(this._context, arguments);
    return this;
  }

  /*
   * 画像を描画
   */
  drawImage() {
    this.context.drawImage.apply(this.context, arguments);
  }

  /**
   * 行列をセット
   */
  setTransform(m11, m12, m21, m22, dx, dy) {
    this.context.setTransform(m11, m12, m21, m22, dx, dy);
    return this;
  }

  /**
   * 行列をリセット
   */
  resetTransform() {
    this.setTransform(1.0, 0.0, 0.0, 1.0, 0.0, 0.0);
    return this;
  }
  /**
   * 中心に移動
   */
  transformCenter() {
    this.context.setTransform(1, 0, 0, 1, this.width/2, this.height/2);
    return this;
  }

  /**
   * 移動
   */
  translate(x, y) {
    this.context.translate(x, y);
    return this;
  }
  
  /**
   * 回転
   */
  rotate(rotation) {
    this.context.rotate(rotation);
    return this;
  }
  
  /**
   * スケール
   */
  scale(scaleX, scaleY) {
    this.context.scale(scaleX, scaleY);
    return this;
  }

  /**
   * 状態を保存
   */
  save() {
    this.context.save();
    return this;
  }

  /**
   * 状態を復元
   */
  restore() {
    this.context.restore();
    return this;
  }

  /**
   * 画像として保存
   */
  saveAsImage(mime_type) {
    mime_type = mime_type || "image/png";
    var data_url = this.canvas.toDataURL(mime_type);
    // data_url = data_url.replace(mime_type, "image/octet-stream");
    window.open(data_url, "save");
    
    // toDataURL を使えば下記のようなツールが作れるかも!!
    // TODO: プログラムで絵をかいて保存できるツール
  }

  /**
   * 幅
   */
  get width()   { return this.canvas.width; }
  set width(v)  { this.canvas.width = v; }

  /**
   * 高さ
   */
  get height()   { return this.canvas.height; }
  set height(v)  { this.canvas.height = v; }

  get fillStyle()   { return this.context.fillStyle; }
  set fillStyle(v)  { this.context.fillStyle = v; }

  get strokeStyle()   { return this.context.strokeStyle; }
  set strokeStyle(v)  { this.context.strokeStyle = v; }

  get globalAlpha()   { return this.context.globalAlpha; }
  set globalAlpha(v)  { this.context.globalAlpha = v; }

  get globalCompositeOperation()   { return this.context.globalCompositeOperation; }
  set globalCompositeOperation(v)  { this.context.globalCompositeOperation = v; }

  get shadowBlur()   { return this.context.shadowBlur; }
  set shadowBlur(v)  { this.context.shadowBlur = v; }

  get shadowColor()   { return this.context.shadowColor; }
  set shadowColor(v)  { this.context.shadowColor = v; }

  get shadowOffsetX()   { return this.context.shadowOffsetX; }
  set shadowOffsetX(v)  { this.context.shadowOffsetX = v; }

  get shadowOffsetY()   { return this.context.shadowOffsetY; }
  set shadowOffsetY(v)  { this.context.shadowOffsetY = v; }

  get lineCap()   { return this.context.lineCap; }
  set lineCap(v)  { this.context.lineCap = v; }

  get lineJoin()   { return this.context.lineJoin; }
  set lineJoin(v)  { this.context.lineJoin = v; }

  get miterLimit()   { return this.context.miterLimit; }
  set miterLimit(v)  { this.context.miterLimit = v; }

  get lineWidth()   { return this.context.lineWidth; }
  set lineWidth(v)  { this.context.lineWidth = v; }

  get font()   { return this.context.font; }
  set font(v)  { this.context.font = v; }

  get textAlign()   { return this.context.textAlign; }
  set textAlign(v)  { this.context.textAlign = v; }

  get textBaseline()   { return this.context.textBaseline; }
  set textBaseline(v)  { this.context.textBaseline = v; }

  get imageSmoothingEnabled()   { return this.context.imageSmoothingEnabled; }
  set imageSmoothingEnabled(v)  {
    this.context.imageSmoothingEnabled = v;
    this.context.webkitImageSmoothingEnabled = v;
    this.context.mozImageSmoothingEnabled = v;
  }

  static measureText(font, text) {
    this._context.font = font;
    return this._context.measureText(text);
  }

  static createLinearGradient() {
    return this._context.createLinearGradient.apply(this._context, arguments);
  }

  static createRadialGradient() {
    return this._context.createRadialGradient.apply(this._context, arguments);
  }

}

Canvas._context = (function() {
  if (Support.canvas) {
    return document.createElement('canvas').getContext('2d');
  }
  else {
    return null;
  }
})();

// import { first, last, clear } from "../core/array"

/**
 * @class phina.input.Input
 * @extends phina.util.EventDispatcher
 */
class Input extends EventDispatcher {

  // /** domElement */
  // domElement = null

  constructor(domElement) {
    super();

    this.domElement = domElement || window.document;

    this.position = new Vector2(0, 0);
    this.startPosition = new Vector2(0, 0);
    this.deltaPosition = new Vector2(0, 0);
    this.prevPosition = new Vector2(0, 0);
    this._tempPosition = new Vector2(0, 0);

    this.maxCacheNum = Input.defaults.maxCacheNum;
    this.minDistance = Input.defaults.minDistance;
    this.maxDistance = Input.defaults.maxDistance;
    this.cachePositions = [];
    this.flickVelocity = new Vector2(0, 0);

    this.flags = 0;
  }

  update() {
    this.last = this.now;
    this.now = this.flags;
    this.start = (this.now ^ this.last) & this.now;
    this.end   = (this.now ^ this.last) & this.last;

    // 変化値を更新
    this.deltaPosition.x = this._tempPosition.x - this.position.x;
    this.deltaPosition.y = this._tempPosition.y - this.position.y;

    if (this.deltaPosition.x === 0 && this.deltaPosition.y === 0) {
      this._moveFlag = false;
    }
    else {
      this._moveFlag = true;
    }

    if (this.start) {
      this.startPosition.set(this.position.x, this.position.y);
    }

    // 前回の座標を更新
    this.prevPosition.set(this.position.x, this.position.y);

    // 現在の位置を更新
    this.position.set(this._tempPosition.x, this._tempPosition.y);

    if (this.cachePositions.length > this.maxCacheNum) {
      this.cachePositions.shift();
    }
    this.cachePositions.push(this.position.clone());
  }

  _start(x, y, flag) {
    flag = (flag !== undefined) ? flag : 1;
    // console.log('start', x, y);
    this._move(x, y);

    this.flags |= flag;

    var x = this._tempPosition.x;
    var y = this._tempPosition.y;
    this.position.set(x, y);
    this.prevPosition.set(x, y);

    this.flickVelocity.set(0, 0);
    // this.cachePositions.clear();
    this.cachePositions.length = 0;
  }

  _end(flag) {
    flag = (flag !== undefined) ? flag : 1;
    this.flags &= ~(flag);

    if (this.cachePositions.length < 2) return;

    // var first = this.cachePositions.first;
    // var last = this.cachePositions.last;
    var first = this.cachePositions[0];
    var last = this.cachePositions[this.cachePositions.length-1];

    var v = Vector2.sub(last, first);

    var len = v.length();

    if (len > this.minDistance) {
      // var normalLen = len.clamp(this.minDistance, this.maxDistance);
      var normalLen = clamp(len, this.minDistance, this.maxDistance);
      v.div(len).mul(normalLen);
      this.flickVelocity.set(v.x, v.y);
    }

    // this.cachePositions.clear();
    this.cachePositions.length = 0;
  }

  // スケールを考慮
  _move(x, y) {
    this._tempPosition.x = x;
    this._tempPosition.y = y;

    // adjust scale
    var elm = this.domElement;
    var rect = elm.getBoundingClientRect();
    if (rect.width) {
      this._tempPosition.x *= elm.width / rect.width;
    }
    if (rect.height) {
      this._tempPosition.y *= elm.height / rect.height;
    }
  }

  /**
   * @property    x
   * x座標値
   */
  get x() { return this.position.x; }
  set x(v) { this.position.x = v; }

  /**
   * @property    y
   * y座標値
   */
  get y() { return this.position.y; }
  set y(v) { this.position.y = v; }

  /**
   * @property    dx
   * dx値
   */
  get dx() { return this.deltaPosition.x; }
  set dx(v) { this.deltaPosition.x = v; }

  /**
   * @property    dy
   * dy値
   */
  get dy() { return this.deltaPosition.y; }
  set dy(v) { this.deltaPosition.y = v; }

  /**
   * @property    fx
   * fx値
   */
  get fx() { return this.flickVelocity.x; }
  set fx(v) { this.flickVelocity.x = v; }

  /**
   * @property    fy
   * fy値
   */
  get fy() { return this.flickVelocity.y; }
  set fy(v) { this.flickVelocity.y = v; }

}

Input.defaults = {
  maxCacheNum: 3,
  minDistance: 10,
  maxDistance: 100,
};

/**
 * @class phina.input.Keyboard
 * @extends phina.input.Input
 */
class Keyboard extends Input {

  /**
   * @constructor
   */
  constructor(domElement) {
    super(domElement);

    this.key = {};
    this.press  = {};
    this.down   = {};
    this.up     = {};
    this.last   = {};

    this._keydown = null;
    this._keyup = null;
    this._keypress = null;

    var self = this;
    this.domElement.addEventListener('keydown', function(e) {
      self.key[e.keyCode] = true;
      self._keydown = e.keyCode;
    });

    this.domElement.addEventListener('keyup', function(e) {
      self.key[e.keyCode] = false;
      self._keyup = e.keyCode;
    });
    this.domElement.addEventListener('keypress', function(e) {
      self._keypress = e.keyCode;
    });
  }

  /**
   * 情報更新処理
   * マイフレーム呼んで下さい.
   * @private
   */
  update() {
    // TODO: 一括ビット演算で行うよう修正する
    for (var k in this.key) {
      this.last[k]    = this.press[k];
      this.press[k]   = this.key[k];
      
      this.down[k] = (this.press[k] ^ this.last[k]) & this.press[k];
      this.up[k] = (this.press[k] ^ this.last[k]) & this.last[k];
    }

    if (this._keydown) {
      this.flare('keydown', { keyCode: this._keydown });
      this._keydown = null;
    }
    if (this._keyup) {
      this.flare('keyup', { keyCode: this._keyup });
      this._keyup = null;
    }
    if (this._keypress) {
      this.flare('keypress', { keyCode: this._keypress });
      this._keypress = null;
    }
    
    return this;
  }

  /**
   * キーを押しているかをチェック
   * @param   {Number/String} key keyCode or keyName
   * @returns {Boolean}   チェック結果
   */
  getKey(key) {
    if (typeof(key) === "string") {
      key = Keyboard.KEY_CODE[key];
    }
    return !!this.press[key] === true;
  }
  
  /**
   * キーを押したかをチェック
   * @param   {Number/String} key keyCode or keyName
   * @returns {Boolean}   チェック結果
   */
  getKeyDown(key) {
    if (typeof(key) == "string") {
      key = Keyboard.KEY_CODE[key];
    }
    return this.down[key] == true;
  }
  
  /**
   * キーを離したかをチェック
   * @param   {Number/String} key keyCode or keyName
   * @returns {Boolean}   チェック結果
   */
  getKeyUp(key) {
    if (typeof(key) == "string") {
      key = Keyboard.KEY_CODE[key];
    }
    return this.up[key] == true;
  }
  
  /**
   * キーの方向を Angle(Degree) で取得
   * @returns {Boolean}   角度(Degree)
   */
  getKeyAngle() {
    var angle = null;
    var arrowBit =
      (this.getKey("left")   << 3) | // 1000
      (this.getKey("up")     << 2) | // 0100
      (this.getKey("right")  << 1) | // 0010
      (this.getKey("down"));         // 0001
    
    if (arrowBit !== 0 && Keyboard.ARROW_BIT_TO_ANGLE_TABLE.hasOwnProperty(arrowBit)) {
      angle = Keyboard.ARROW_BIT_TO_ANGLE_TABLE[arrowBit];
    }
    
    return angle;
  }

  /**
   * キーの押している向きを取得
   * 正規化されている
   */
  getKeyDirection() {
    var direction = new Vector2(0, 0);

    if (this.getKey("left")) {
      direction.x = -1;
    }
    else if (this.getKey("right")) {
      direction.x = 1;
    }
    if (this.getKey("up")) {
      direction.y = -1;
    }
    else if (this.getKey("down")) {
      direction.y = 1;
    }

    if (direction.x && direction.y) {
      direction.div(Math.SQRT2);
    }

    return direction;
  }
  
  /**
   * キーの状態を設定する
   */
  setKey(key, flag) {
    if (typeof(key) == "string") {
      key = Keyboard.KEY_CODE[key];
    }
    this.key[key] = flag;
    
    return this;
  }

  /**
   * キーを全て離したことにする
   */
  clearKey() {
    this.key = {};
    
    return this;
  }

}

/**
 * @static
 * @enum ARROW_BIT_TO_ANGLE_TABLE
 * 方向のアングル jsduckでは数字をプロパティに指定できない？
 * @private
 */
Keyboard.ARROW_BIT_TO_ANGLE_TABLE = {
  /* @property 下 */
  0x01: 270,
  /* @property 右 */
  0x02:   0,
  /* @property 上 */
  0x04:  90,
  /* @property 左 */
  0x08: 180,

  /* @property 右上 */
  0x06:  45,
  /* @property 右下 */
  0x03: 315,
  /* @property 左上 */
  0x0c: 135,
  /* @property 左下 */
  0x09: 225,

  // 三方向同時押し対応
  // 想定外の操作だが対応しといたほうが無難
  /* @property 右上左 */
  0x0e:  90,
  /* @property 上左下 */
  0x0d: 180,
  /* @property 左下右 */
  0x0b: 270,
  /* @property 下右上 */
  0x07:   0,
};

/*
 * @static
 * @enum KEY_CODE
 * キー番号
 * @private
 */
Keyboard.KEY_CODE = {
  /* @property */
  "backspace" : 8,
  /* @property */
  "tab"       : 9,
  /* @property */
  "enter"     : 13,
  /* @property */
  "return"    : 13,
  /* @property */
  "shift"     : 16,
  /* @property */
  "ctrl"      : 17,
  /* @property */
  "alt"       : 18,
  /* @property */
  "pause"     : 19,
  /* @property */
  "capslock"  : 20,
  /* @property */
  "escape"    : 27,
  /* @property */
  "pageup"    : 33,
  /* @property */
  "pagedown"  : 34,
  /* @property */
  "end"       : 35,
  /* @property */
  "home"      : 36,
  /* @property */
  "left"      : 37,
  /* @property */
  "up"        : 38,
  /* @property */
  "right"     : 39,
  /* @property */
  "down"      : 40,
  /* @property */
  "insert"    : 45,
  /* @property */
  "delete"    : 46,
  
  /* @property */
  "0" : 48,
  /* @property */
  "1" : 49,
  /* @property */
  "2" : 50,
  /* @property */
  "3" : 51,
  /* @property */
  "4" : 52,
  /* @property */
  "5" : 53,
  /* @property */
  "6" : 54,
  /* @property */
  "7" : 55,
  /* @property */
  "8" : 56,
  /* @property */
  "9" : 57,
  /* @property */
  
  "a" : 65,
  /* @property */
  "A" : 65,
  /* @property */
  "b" : 66,
  /* @property */
  "B" : 66,
  /* @property */
  "c" : 67,
  /* @property */
  "C" : 67,
  /* @property */
  "d" : 68,
  /* @property */
  "D" : 68,
  /* @property */
  "e" : 69,
  /* @property */
  "E" : 69,
  /* @property */
  "f" : 70,
  /* @property */
  "F" : 70,
  /* @property */
  "g" : 71,
  /* @property */
  "G" : 71,
  /* @property */
  "h" : 72,
  /* @property */
  "H" : 72,
  /* @property */
  "i" : 73,
  /* @property */
  "I" : 73,
  /* @property */
  "j" : 74,
  /* @property */
  "J" : 74,
  /* @property */
  "k" : 75,
  /* @property */
  "K" : 75,
  /* @property */
  "l" : 76,
  /* @property */
  "L" : 76,
  /* @property */
  "m" : 77,
  /* @property */
  "M" : 77,
  /* @property */
  "n" : 78,
  /* @property */
  "N" : 78,
  /* @property */
  "o" : 79,
  /* @property */
  "O" : 79,
  /* @property */
  "p" : 80,
  /* @property */
  "P" : 80,
  /* @property */
  "q" : 81,
  /* @property */
  "Q" : 81,
  /* @property */
  "r" : 82,
  /* @property */
  "R" : 82,
  /* @property */
  "s" : 83,
  /* @property */
  "S" : 83,
  /* @property */
  "t" : 84,
  /* @property */
  "T" : 84,
  /* @property */
  "u" : 85,
  /* @property */
  "U" : 85,
  /* @property */
  "v" : 86,
  /* @property */
  "V" : 86,
  /* @property */
  "w" : 87,
  /* @property */
  "W" : 87,
  /* @property */
  "x" : 88,
  /* @property */
  "X" : 88,
  /* @property */
  "y" : 89,
  /* @property */
  "Y" : 89,
  /* @property */
  "z" : 90,
  /* @property */
  "Z" : 90,
  
  /* @property */
  "numpad0" : 96,
  /* @property */
  "numpad1" : 97,
  /* @property */
  "numpad2" : 98,
  /* @property */
  "numpad3" : 99,
  /* @property */
  "numpad4" : 100,
  /* @property */
  "numpad5" : 101,
  /* @property */
  "numpad6" : 102,
  /* @property */
  "numpad7" : 103,
  /* @property */
  "numpad8" : 104,
  /* @property */
  "numpad9" : 105,
  /* @property */
  "multiply"      : 106,
  /* @property */
  "add"           : 107,
  /* @property */
  "subtract"      : 109,
  /* @property */
  "decimalpoint"  : 110,
  /* @property */
  "divide"        : 111,

  /* @property */
  "f1"    : 112,
  /* @property */
  "f2"    : 113,
  /* @property */
  "f3"    : 114,
  /* @property */
  "f4"    : 115,
  /* @property */
  "f5"    : 116,
  /* @property */
  "f6"    : 117,
  /* @property */
  "f7"    : 118,
  /* @property */
  "f8"    : 119,
  /* @property */
  "f9"    : 120,
  /* @property */
  "f10"   : 121,
  /* @property */
  "f11"   : 122,
  /* @property */
  "f12"   : 123,
  
  /* @property */
  "numlock"   : 144,
  /* @property */
  "scrolllock": 145,
  /* @property */
  "semicolon" : 186,
  /* @property */
  "equalsign" : 187,
  /* @property */
  "comma"     : 188,
  /* @property */
  "dash"      : 189,
  /* @property */
  "period"    : 190,
  /* @property */
  "forward slash" : 191,
  /* @property */
  "/": 191,
  /* @property */
  "grave accent"  : 192,
  /* @property */
  "open bracket"  : 219,
  /* @property */
  "back slash"    : 220,
  /* @property */
  "close bracket"  : 221,
  /* @property */
  "single quote"  : 222,
  /* @property */
  "space"         : 32

};

/**
 * MouseEvent/Touch拡張
 * @method    pointX
 * マウスのX座標.
 */
var pointX = {
  get: function() {
    return this.clientX - this.target.getBoundingClientRect().left;
  }
};

/**
 * MouseEvent/Touch拡張
 * @method    pointX
 * マウスのX座標.
 */
var pointY = {
  get: function() {
    return this.clientY - this.target.getBoundingClientRect().top;
  }
};

/**
 * TouchEvent拡張
 * @method    pointX
 * タッチイベント.
 */
var touchPointX = {
  get: function() {
    return this.touches[0].clientX - this.target.getBoundingClientRect().left;
    // return this.touches[0].pageX - this.target.getBoundingClientRect().left - tm.global.scrollX;
  }
};

/**
 * TouchEvent拡張
 * @method    pointY
 * タッチイベント.
 */
var touchPointY = {
  get: function() {
    return this.touches[0].clientY - this.target.getBoundingClientRect().top;
    // return this.touches[0].pageY - this.target.getBoundingClientRect().top - tm.global.scrollY;
  }
};


// ;(function() {

  // if (!phina.global.Event) return ;

  /**
   * @class global.Event
   * 既存のEventオブジェクト拡張
   */
    
  // /**
  //  * @method stop
  //  * イベントのデフォルト処理 & 伝達を止める
  //  */
  // Event.prototype.stop = function() {
  //   // イベントキャンセル
  //   this.preventDefault();
  //   // イベント伝達を止める
  //   this.stopPropagation();
  // };

// })();


// (function() {

//   if (!phina.global.MouseEvent) return ;

//   /**
//    * @class global.MouseEvent
//    * MouseEvent クラス
//    */
  
//   /**
//    * @method    pointX
//    * マウスのX座標.
//    */
//   MouseEvent.prototype.getter("pointX", function() {
//     return this.clientX - this.target.getBoundingClientRect().left;
//     // return this.pageX - this.target.getBoundingClientRect().left - window.scrollX;
//   });
  
//   /**
//    * @method    pointY
//    * マウスのY座標.
//    */
//   MouseEvent.prototype.getter("pointY", function() {
//     return this.clientY - this.target.getBoundingClientRect().top;
//     // return this.pageY - this.target.getBoundingClientRect().top - window.scrollY;
//   });
    
// })();


// (function() {
    
//   if (!phina.global.TouchEvent) return ;
  
  
//   /**
//    * @class global.TouchEvent
//    * TouchEvent クラス
//    */
  
//   /**
//    * @method    pointX
//    * タッチイベント.
//    */
//   TouchEvent.prototype.getter("pointX", function() {
//       return this.touches[0].clientX - this.target.getBoundingClientRect().left;
//       // return this.touches[0].pageX - this.target.getBoundingClientRect().left - tm.global.scrollX;
//   });
  
//   /**
//    * @method    pointY
//    * タッチイベント.
//    */
//   TouchEvent.prototype.getter("pointY", function() {
//       return this.touches[0].clientY - this.target.getBoundingClientRect().top;
//       // return this.touches[0].pageY - this.target.getBoundingClientRect().top - tm.global.scrollY;
//   });  
    
// })();


// (function() {
    
//   if (!phina.global.Touch) return ;
  
//   /**
//    * @class global.Touch
//    * TouchEvent クラス
//    */
  
//   /**
//    * @method    pointX
//    * タッチイベント.
//    */
//   Touch.prototype.getter("pointX", function() {
//       return this.clientX - this.target.getBoundingClientRect().left;
//   });

//   /**
//    * @method    pointY
//    * タッチイベント.
//    */
//   Touch.prototype.getter("pointY", function() {
//       return this.clientY - this.target.getBoundingClientRect().top;
//   });
    
// })();

var BUTTON_MAP;

/**
 * @class phina.input.Mouse
 * @extends phina.input.Input
 */
class Mouse extends Input {

  /**
   * @constructor
   */
  constructor(domElement) {
    super(domElement);

    this.id = 0;

    var self = this;
    this.domElement.addEventListener('mousedown', function(e) {
      self._start(pointX.get.call(e), pointY.get.call(e), 1<<e.button);
      // self._start(e.pointX, e.pointY, 1<<e.button);
    });

    this.domElement.addEventListener('mouseup', function(e) {
      self._end(1<<e.button);
    });
    this.domElement.addEventListener('mousemove', function(e) {
      self._move(pointX.get.call(e), pointY.get.call(e));
      // self._move(e.pointX, e.pointY);
    });

    // マウスがキャンバス要素の外に出た場合の対応
    this.domElement.addEventListener('mouseout', function(e)  {
      self._end(1);
    });
  }

  /**
   * ボタン取得
   */
  getButton(button) {
    if (typeof(button) == "string") {
      button = BUTTON_MAP[button];
    }
    
    return (this.now & button) != 0;
  }

  /**
   * ボタンダウン取得
   */
  getButtonDown(button) {
    if (typeof(button) === 'string') {
      button = BUTTON_MAP[button];
    }

    return (this.start & button) != 0;
  }
      
  /**
   * ボタンアップ取得
   */
  getButtonUp(button) {
    if (typeof(button) == "string") {
      button = BUTTON_MAP[button];
    }
    
    return (this.end & button) != 0;
  }

}

/** @static @property */
Mouse.BUTTON_LEFT = 0x1;
/** @static @property */
Mouse.BUTTON_MIDDLE = 0x2;
/** @static @property */
Mouse.BUTTON_RIGHT = 0x4;

BUTTON_MAP = {
  "left"  : Mouse.BUTTON_LEFT,
  "middle": Mouse.BUTTON_MIDDLE,
  "right" : Mouse.BUTTON_RIGHT
};

Mouse.prototype.getPointing = function() { return this.getButton("left"); };
Mouse.prototype.getPointingStart = function() { return this.getButtonDown("left"); };
Mouse.prototype.getPointingEnd = function() { return this.getButtonUp("left"); };

/**
 * @class phina.input.Touch
 * @extends phina.input.Input
 */
class Touch extends Input {

  /**
   * @constructor
   */
  constructor(domElement, isMulti) {
    super(domElement);

    this.id = null;

    if (isMulti === true) {
      return ;
    }

    var self = this;
    this.domElement.addEventListener('touchstart', function(e) {
      self._start(touchPointX.get.call(e), touchPointY.get.call(e), true);
      // self._start(e.pointX, e.pointY, true);
    });

    this.domElement.addEventListener('touchend', function(e) {
      self._end();
    });
    this.domElement.addEventListener('touchmove', function(e) {
      self._move(touchPointX.get.call(e), touchPointY.get.call(e));
      // self._move(e.pointX, e.pointY);
    });
  }

  /**
   * タッチしているかを判定
   */
  getTouch() {
    return this.now != 0;
  }
  
  /**
   * タッチ開始時に true
   */
  getTouchStart() {
    return this.start != 0;
  }
  
  /**
   * タッチ終了時に true
   */
  getTouchEnd() {
    return this.end != 0;
  }

}

/**
 * @method
 * ポインティング状態取得(mouse との差異対策)
 */
Touch.prototype.getPointing        = Touch.prototype.getTouch;
/**
 * @method
 * ポインティングを開始したかを取得(mouse との差異対策)
 */
Touch.prototype.getPointingStart   = Touch.prototype.getTouchStart;
/**
 * @method
 * ポインティングを終了したかを取得(mouse との差異対策)
 */
Touch.prototype.getPointingEnd     = Touch.prototype.getTouchEnd;


/**
 * @class phina.input.TouchList
 */
class TouchList {

  constructor(domElement) {
    this.domElement = domElement;

    this.touches = [];
    var touchMap = this.touchMap = {};

    // 32bit 周期でIDをループさせる
    this._id = new Uint32Array(1);

    var self = this;
    var each = Array.prototype.forEach;
    this.domElement.addEventListener('touchstart', function(e) {
      each.call(e.changedTouches, function(t) {
        var touch = self.getEmpty();
        touchMap[t.identifier] = touch;
        touch._start(pointX.get.call(t), pointY.get.call(t));
        // touch._start(t.pointX, t.pointY);
      });
    });

    this.domElement.addEventListener('touchend', function(e) {
      each.call(e.changedTouches, function(t) {
        var id = t.identifier;
        var touch = touchMap[id];
        touch._end();
        delete touchMap[id];
      });
    });
    this.domElement.addEventListener('touchmove', function(e) {
      each.call(e.changedTouches, function(t) {
        var touch = touchMap[t.identifier];
        touch._move(pointX.get.call(t), pointY.get.call(t));
        // touch._move(t.pointX, t.pointY);
      });
      e.stop();
    });

    // iPhone では 6本指以上タッチすると強制的にすべてのタッチが解除される
    this.domElement.addEventListener('touchcancel', function(e) {
      console.warn('この端末での同時タッチ数の制限を超えました。');
      each.call(e.changedTouches, function(t) {
        var id = t.identifier;
        var touch = touchMap[id];
        touch._end();
        delete touchMap[id];
      });
      e.stop();
    });
  }

  getEmpty() {
    var touch = new Touch(this.domElement, true);
  
    touch.id = this.id;
    this.touches.push(touch);

    return touch;
  }

  getTouch(id) {
    return this.touchMap[id];
  }

  removeTouch(touch) {
    var i = this.touches.indexOf(touch);
    this.touches.splice(i, 1);
  }

  update() {
    this.touches.forEach(function(touch) {
      if (!touch.released) {
        touch.update();

        if (touch.flags === 0) {
          touch.released = true;
        }
      }
      else {
        touch.released = false;
        this.removeTouch(touch);
      }

    }, this);
  }

  get id() { return this._id[0]++; }

}

/**
 * @class phina.input.GamepadManager
 * ゲームパッドマネージャー.
 * ゲームパッド接続状況の監視、個々のゲームパッドの入力状態の更新を行う.
 * @extends phina.util.EventDispatcher
 */
class GamepadManager extends EventDispatcher {

  /**
   * 作成済みphina.input.Gamepadオブジェクトのリスト
   *
   * @type {Object.<number, phina.input.Gamepad>}
   */
  // gamepads: null,

  /**
   * 作成済みゲームパッドのindexのリスト
   *
   * @type {number[]}
   * @private
   */
  // _created: null,

  /**
   * ラップ前Gamepadのリスト
   * @type {phina.input.Gamepad[]}
   * @private
   */
  // _rawgamepads: null,

  /**
   * @constructor
   */
  constructor() {
    super();

    this.gamepads = {};
    this._created = [];
    this._rawgamepads = [];

    this._prevTimestamps = {};

    this._getGamepads = null;
    var navigator = phina$1.global.navigator;
    if (navigator && navigator.getGamepads) {
      this._getGamepads = navigator.getGamepads.bind(navigator);
    } else if (navigator && navigator.webkitGetGamepads) {
      this._getGamepads = navigator.webkitGetGamepads.bind(navigator);
    } else {
      this._getGamepads = function() {};
    }

    phina$1.global.addEventListener('gamepadconnected', function(e) {
      var gamepad = this.get(e.gamepad.index);
      gamepad.connected = true;
      this.flare('connected', {
        gamepad: gamepad,
      });
    }.bind(this));

    phina$1.global.addEventListener('gamepaddisconnected', function(e) {
      var gamepad = this.get(e.gamepad.index);
      gamepad.connected = false;
      this.flare('disconnected', {
        gamepad: gamepad,
      });
    }.bind(this));
  }

  /**
   * 情報更新処理
   * マイフレーム呼んで下さい.
   */
  update() {
    this._poll();

    for (var i = 0, end = this._created.length; i < end; i++) {
      var index = this._created[i];
      var rawgamepad = this._rawgamepads[index];

      if (!rawgamepad) {
        continue;
      }

      if (rawgamepad.timestamp && (rawgamepad.timestamp === this._prevTimestamps[i])) {
        this.gamepads[index]._updateStateEmpty();
        continue;
      }

      this._prevTimestamps[i] = rawgamepad.timestamp;
      this.gamepads[index]._updateState(rawgamepad);
    }
  }

  /**
   * 指定されたindexのGamepadオブジェクトを返す.
   *
   * 未作成の場合は作成して返す.
   */
  get(index) {
    index = index || 0;

    if (!this.gamepads[index]) {
      this._created.push(index);
      this.gamepads[index] = new Gamepad(index);
    }

    return this.gamepads[index];
  }

  /**
   * 指定されたindexのGamepadオブジェクトを破棄する.
   * 破棄されたGamepadオブジェクトは以降更新されない.
   */
  dispose(index) {
    if (contains.call(this._created, index)) {
    // if (this._created.contains(index)) {
      var gamepad = this.get(index);
      delete this.gamepad[gamepad];
      erase.call(this._created, index);
      // this._created.erase(index);

      gamepad.connected = false;
    }
  }

  /**
   * 指定されたindexのゲームパッドが接続中かどうかを返す.
   *
   * Gamepadオブジェクトが未作成の場合でも動作する.
   */
  isConnected(index) {
    index = index || 0;

    return this._rawgamepads[index] && this._rawgamepads[index].connected;
  }

  /**
   * @private
   */
  _poll() {
    var rawGamepads = this._getGamepads();
    if (rawGamepads) {
      clear.call(this._rawgamepads);
      // this._rawgamepads.clear();

      for (var i = 0, end = rawGamepads.length; i < end; i++) {
        if (rawGamepads[i]) {
          this._rawgamepads.push(rawGamepads[i]);
        }
      }
    }
  }

  // _static: {
  //   /** ブラウザがGamepad APIに対応しているか. */
  //   isAvailable: (function() {
  //     var nav = phina.global.navigator;
  //     if (!nav) return false;

  //     return (!!nav.getGamepads) || (!!nav.webkitGetGamepads);
  //   })(),
  // }

}

// static props
/** ブラウザがGamepad APIに対応しているか. */
GamepadManager.isAvailable = (function() {
  var nav = phina$1.global.navigator;
  if (!nav) return false;

  return (!!nav.getGamepads) || (!!nav.webkitGetGamepads);
})();


/**
 * @class phina.input.Gamepad
 * ゲームパッド
 *
 * 直接インスタンス化せず、phina.input.GamepadManagerオブジェクトから取得して使用する.
 */
class Gamepad {
// phina.define("phina.input.Gamepad", {

  // index: null,
  // buttons: null,
  // /** @type {Array.<phina.geom.Vector2>} */
  // sticks: null,

  // id: null,
  // connected: false,
  // mapping: null,
  // timestamp: null,

  constructor(index) {
    this.index = index || 0;

    // this.buttons = Array.range(0, 16).map(function() {
    this.buttons = range.call([], 0, 16).map(function() {
      return {
        value: 0,
        pressed: false,
        last: false,
        down: false,
        up: false,
      };
    });
    this.sticks = range.call([], 0, 2).map(function() {
    // this.sticks = Array.range(0, 2).map(function() {
      return new Vector2(0, 0);
    });
    this.id = null;
    this.connected = false;
    this.mapping = null;
    this.timestamp = null;
  }

  /**
   * ボタンが押されているか.
   */
  getKey(button) {
    if (typeof(button) === 'string') {
      button = Gamepad.BUTTON_CODE[button];
    }
    if (this.buttons[button]) {
      return this.buttons[button].pressed;
    } else {
      return false;
    }
  }

  /**
   * ボタンを押した.
   */
  getKeyDown(button) {
    if (typeof(button) === 'string') {
      button = Gamepad.BUTTON_CODE[button];
    }
    if (this.buttons[button]) {
      return this.buttons[button].down;
    } else {
      return false;
    }
  }

  /**
   * ボタンを離した.
   */
  getKeyUp(button) {
    if (typeof(button) === 'string') {
      button = Gamepad.BUTTON_CODE[button];
    }
    if (this.buttons[button]) {
      return this.buttons[button].up;
    } else {
      return false;
    }
  }

  /**
   * 十字キーの入力されている方向.
   */
  getKeyAngle() {
    var angle = null;
    var arrowBit =
      (this.getKey('left') << 3) | // 1000
      (this.getKey('up') << 2) | // 0100
      (this.getKey('right') << 1) | // 0010
      (this.getKey('down')); // 0001

    if (arrowBit !== 0 && ARROW_BIT_TO_ANGLE_TABLE.hasOwnProperty(arrowBit)) {
      angle = ARROW_BIT_TO_ANGLE_TABLE[arrowBit];
    }

    return angle;
  }

  /**
   * 十字キーの入力されている方向をベクトルで.
   * 正規化されている.
   */
  getKeyDirection() {
    var direction = new Vector2(0, 0);

    if (this.getKey('left')) {
      direction.x = -1;
    } else if (this.getKey('right')) {
      direction.x = 1;
    }
    if (this.getKey('up')) {
      direction.y = -1;
    } else if (this.getKey('down')) {
      direction.y = 1;
    }

    if (direction.x && direction.y) {
      direction.div(Math.SQRT2);
    }

    return direction;
  }

  /**
   * スティックの入力されている方向.
   */
  getStickAngle(stickId) {
    stickId = stickId || 0;
    var stick = this.sticks[stickId];
    return stick ? Math.atan2(-stick.y, stick.x) : null;
  }

  /**
   * スティックの入力されている方向をベクトルで.
   */
  getStickDirection(stickId) {
    stickId = stickId || 0;
    return this.sticks ? this.sticks[stickId].clone() : new Vector2(0, 0);
  }

  /**
   * @private
   */
  _updateState(gamepad) {
    this.id = gamepad.id;
    this.connected = gamepad.connected;
    this.mapping = gamepad.mapping;
    this.timestamp = gamepad.timestamp;

    for (var i = 0, iend = gamepad.buttons.length; i < iend; i++) {
      this._updateButton(gamepad.buttons[i], i);
    }

    for (var j = 0, jend = gamepad.axes.length; j < jend; j += 2) {
      this._updateStick(gamepad.axes[j + 0], j / 2, 'x');
      this._updateStick(gamepad.axes[j + 1], j / 2, 'y');
    }
  }

  /**
   * @private
   */
  _updateStateEmpty() {
    for (var i = 0, iend = this.buttons.length; i < iend; i++) {
      this.buttons[i].down = false;
      this.buttons[i].up = false;
    }
  }

  /**
   * @private
   */
  _updateButton(value, buttonId) {
    if (this.buttons[buttonId] === undefined) {
      this.buttons[buttonId] = {
        value: 0,
        pressed: false,
        last: false,
        down: false,
        up: false,
      };
    }
    
    var button = this.buttons[buttonId];

    button.last = button.pressed;

    if (typeof value === 'object') {
      button.value = value.value;
      button.pressed = value.pressed;
    } else {
      button.value = value;
      button.pressed = value > Gamepad.ANALOGUE_BUTTON_THRESHOLD;
    }

    button.down = (button.pressed ^ button.last) & button.pressed;
    button.up = (button.pressed ^ button.last) & button.last;
  }

  /**
   * @private
   */
  _updateStick(value, stickId, axisName) {
    if (this.sticks[stickId] === undefined) {
      this.sticks[stickId] = new Vector2(0, 0);
    }
    this.sticks[stickId][axisName] = value;
  }

}

/** ブラウザがGamepad APIに対応しているか. */
Gamepad.isAvailable = (function() {
  var nav = phina$1.global.navigator;
  if (!nav) return false;

  return (!!nav.getGamepads) || (!!nav.webkitGetGamepads);
})();

/** アナログ入力対応のボタンの場合、どの程度まで押し込むとonになるかを表すしきい値. */
Gamepad.ANALOGUE_BUTTON_THRESHOLD = 0.5;

/** ボタン名とボタンIDのマップ. */
Gamepad.BUTTON_CODE = {
  'a': 0,
  'b': 1,
  'x': 2,
  'y': 3,

  'l1': 4,
  'r1': 5,
  'l2': 6,
  'r2': 7,

  'select': 8,
  'start': 9,

  'l3': 10,
  'r3': 11,

  'up': 12,
  'down': 13,
  'left': 14,
  'right': 15,

  'special': 16,

  'A': 0,
  'B': 1,
  'X': 2,
  'Y': 3,

  'L1': 4,
  'R1': 5,
  'L2': 6,
  'R2': 7,

  'SELECT': 8,
  'START': 9,

  'L3': 10,
  'R3': 11,

  'UP': 12,
  'DOWN': 13,
  'LEFT': 14,
  'RIGHT': 15,

  'SPECIAL': 16,
};

var ARROW_BIT_TO_ANGLE_TABLE = {
  0x00: null,

  /* @property 下 */
  0x01: 270,
  /* @property 右 */
  0x02: 0,
  /* @property 上 */
  0x04: 90,
  /* @property 左 */
  0x08: 180,

  /* @property 右上 */
  0x06: 45,
  /* @property 右下 */
  0x03: 315,
  /* @property 左上 */
  0x0c: 135,
  /* @property 左下 */
  0x09: 225,

  // 三方向同時押し対応
  // 想定外の操作だが対応しといたほうが無難
  /* @property 右上左 */
  0x0e: 90,
  /* @property 上左下 */
  0x0d: 180,
  /* @property 左下右 */
  0x0b: 270,
  /* @property 下右上 */
  0x07: 0,
};

/**
 * @class phina.input.Accelerometer
 * スマートフォンのセンサー情報
 */
class Accelerometer {

  /** @property  gravity 重力センサー */
  /** @property  acceleration 加速度センサー */
  /** @property  rotation 回転加速度センサー */
  /** @property  orientation スマートフォンの傾き */

  /**
   * @constructor
   */
  constructor() {

    var self = this;
    
    this.gravity        = new Vector3(0, 0, 0);
    this.acceleration   = new Vector3(0, 0, 0);
    this.rotation       = new Vector3(0, 0, 0);
    this.orientation    = new Vector3(0, 0, 0);

    if (phina$1.isMobile()) {
      phina$1.global.addEventListener("devicemotion", function(e) {
        var acceleration = self.acceleration;
        var gravity = self.gravity;
        var rotation = self.rotation;
        
        if (e.acceleration) {
          acceleration.x = e.acceleration.x;
          acceleration.y = e.acceleration.y;
          acceleration.z = e.acceleration.z;
        }
        if (e.accelerationIncludingGravity) {
          gravity.x = e.accelerationIncludingGravity.x;
          gravity.y = e.accelerationIncludingGravity.y;
          gravity.z = e.accelerationIncludingGravity.z;
        }
        if (e.rotationRate) {
          rotation.x = rotation.beta  = e.rotationRate.beta;
          rotation.y = rotation.gamma = e.rotationRate.gamma;
          rotation.z = rotation.alpha = e.rotationRate.alpha;
        }
      });
      
      phina$1.global.addEventListener("deviceorientation", function(e) {
        var orientation = self.orientation;
        orientation.alpha   = e.alpha;  // z(0~360)
        orientation.beta    = e.beta;   // x(-180~180)
        orientation.gamma   = e.gamma;  // y(-90~90)
      });
    }
  }

}

/**
 * @class phina.app.Updater
 */
class Updater {

  constructor(app) {
    this.app = app;
  }

  update(root) {
    this._updateElement(root);
  }

  _updateElement(element) {
    var app = this.app;

    // 更新するかを判定
    if (element.awake === false) return ;

    // エンターフレームイベント
    if (element.has('enterframe')) {
      element.flare('enterframe', {
        app: this.app,
      });
    }

    // 更新
    if (element.update) element.update(app);

    // タッチ判定
    // this._checkPoint(element);

    // 子供を更新
    var len = element.children.length;
    if (element.children.length > 0) {
      var tempChildren = element.children.slice();
      for (var i=0; i<len; ++i) {
        this._updateElement(tempChildren[i]);
      }
    }
  }

  _checkPoint(obj) {
    this.app.pointers.forEach(function(p) {
      if (p.id !== null) {
        this.__checkPoint(obj, p);
      }
    }, this);
  }

  __checkPoint(obj, p) {
    if (!obj.interactive) return ;

    var prevOverFlag = obj._overFlags[p.id];
    var overFlag = obj.hitTest2(p.x, p.y);
    obj._overFlags[p.id] = overFlag;

    if (!prevOverFlag && overFlag) {
      obj.flare('pointover', {
        pointer: p,
      });
    }
    if (prevOverFlag && !overFlag) {
      obj.flare('pointout');
    }

    if (overFlag) {
      if (p.getPointingStart()) {
        obj._touchFlags[p.id] = true;
        obj.flare('pointstart');
      }
    }

    if (obj._touchFlags[p.id]) {
      obj.flare('pointstay');
      if (p._moveFlag) {
        obj.flare('pointmove');
      }
    }

    if (obj._touchFlags[p.id]===true && p.getPointingEnd()) {
      obj._touchFlags[p.id] = false;
      obj.flare('pointend');

      if (obj._overFlags[p.id]) {
        obj._overFlags[p.id] = false;
        obj.flare('pointout');
      }
    }
  }

}

/**
 * @class phina.app.Interactive
 */
class Interactive {

  constructor(app) {
    this.app = app;
    this._enable = true;
    this.multiTouch = true;
    this.cursor = {
      normal: '',
      hover: 'pointer',
    };

    this._holds = [];
    this.app.on('changescene', function() {
      clear.call(this._holds);
      // this._holds.clear();
    }.bind(this));
  }

  enable() {
    this._enable = true;
    return this;
  }

  disable() {
    this._enable = false;
    return this;
  }

  check(root) {
    // カーソルのスタイルを反映
    if (this.app.domElement) {
      if (this._holds.length > 0) {
        this.app.domElement.style.cursor = this.cursor.hover;
      }
      else {
        this.app.domElement.style.cursor = this.cursor.normal;
      }
    }

    if (!this._enable || !this.app.pointers) return ;
    this._checkElement(root);
  }

  _checkElement(element) {
    var app = this.app;

    // 更新するかを判定
    if (element.awake === false) return ;

    // 子供を更新
    var len = element.children.length;
    if (element.children.length > 0) {
      var tempChildren = element.children.slice();
      for (var i=0; i<len; ++i) {
        this._checkElement(tempChildren[i]);
      }
    }

    // タッチ判定
    this._checkPoint(element);
  }

  _checkPoint(obj) {
    if (this.multiTouch) {
      this.app.pointers.forEach(function(p) {
        if (p.id !== null) {
          this.__checkPoint(obj, p);
        }
      }, this);
    }
    else {
      this.__checkPoint(obj, this.app.pointer);
    }
  }

  __checkPoint(obj, p) {
    if (!obj.interactive) return ;

    var prevOverFlag = obj._overFlags[p.id];
    var overFlag = obj.hitTest(p.x, p.y);
    obj._overFlags[p.id] = overFlag;

    var e = {
      pointer: p,
      interactive: this,
      over: overFlag,
    };

    if (!prevOverFlag && overFlag) {
      obj.flare('pointover', e);

      if (obj.boundingType && obj.boundingType !== 'none') {
        this._holds.push(obj);
      }
    }
    if (prevOverFlag && !overFlag) {
      obj.flare('pointout', e);
      // this._holds.erase(obj);
      erase.call(this._holds, obj);
    }

    if (overFlag) {
      if (p.getPointingStart()) {
        obj._touchFlags[p.id] = true;
        obj.flare('pointstart', e);
        // クリックフラグを立てる
        obj._clicked = true;
      }
    }

    if (obj._touchFlags[p.id]) {
      obj.flare('pointstay', e);
      if (p._moveFlag) {
        obj.flare('pointmove', e);
      }
    }

    if (obj._touchFlags[p.id]===true && p.getPointingEnd()) {
      obj._touchFlags[p.id] = false;
      obj.flare('pointend', e);

      if (phina$1.isMobile() && obj._overFlags[p.id]) {
        obj._overFlags[p.id] = false;
        obj.flare('pointout', e);
        // this._holds.erase(obj);
        erase.call(this._holds, obj);
      }
    }
  }

}

// import { Element } from "../app/element"

/**
 * @class phina.accessory.Accessory
 * @extends phina.util.EventDispatcher
 */
class Accessory extends EventDispatcher {

  /**
   * @constructor
   */
  constructor(target) {
    super();

    this.target = target;
  }

  setTarget(target) {
    if (this.target === target) return ;

    this.target = target;
    return this;
  }

  getTarget() {
    return this.target;
  }

  isAttached() {
    return !!this.target;
  }

  attachTo(element) {
    element.attach(this);
    this.setTarget(element);
    return this;
  }

  remove() {
    this.target.detach(this);
    this.target = null;
  }

}

// Element側で拡張
// phina.app.Element.prototype.$method('attach', function(accessory) {
//   if (!this.accessories) {
//     this.accessories = [];
//     this.on('enterframe', function(e) {
//       this.accessories.each(function(accessory) {
//         accessory.update && accessory.update(e.app);
//       });
//     });
//   }

//   this.accessories.push(accessory);
//   accessory.setTarget(this);
//   accessory.flare('attached');

//   return this;
// });

// phina.app.Element.prototype.$method('detach', function(accessory) {
//   if (this.accessories) {
//     this.accessories.erase(accessory);
//     accessory.setTarget(null);
//     accessory.flare('detached');
//   }

//   return this;
// });

/**
 * @class phina.accessory.Tweener
 * # Tweener
 * Tweenerはオブジェクトのプロパティに対して、
 * Tweenアニメーションの効果を与えるクラスです。  
 * 主に {@link phina.app.Element} とそのサブクラスで使用されます。
 * @extends phina.accessory.Accessory
 */
class Tweener extends Accessory {

  /**
   * アニメーションを更新する方法を指定します。  
   * 変更するとdurationによる時間の進み方が変わります。  
   * 詳しくは{@link #UPDATE_MAP}を参照してください。
   */
  // updateType = 'delta'

  /**
   * @constructor
   */
  constructor(target) {
    super(target);
    this.updateType = 'delta';

    this._init();
  }

  _init() {
    this._loop = false;
    this._tasks = [];
    this._index = 0;
    this.playing = true;
    this._update = this._updateTask;
  }

  /**
   * @param {phina.app.BaseApp} app
   */
  update(app) {
    this._update(app);
  }

  /**
   * {@link #updateType}を変更します。
   * @param {String} type 更新方法を表す文字列
   * @chainable
   */
  setUpdateType(type) {
    this.updateType = type;
    return this;
  }

  /**
   * propsで指定した値になるまで、durationで指定した時間をかけて、アニメーションさせます。
   * @param {Object} props 変更したいプロパティをkeyとしたオブジェクト
   * @param {Number} duration (optional) アニメーションにかける時間
   * @param {String} easing (optional) easing {@link phina.util.Tween#EASING}を参照してください。
   * @chainable
   * 
   */
  to(props, duration, easing) {
    this._add({
      type: 'tween',
      mode: 'to',
      props: props,
      duration: duration,
      easing: easing,
    });
    return this;
  }

  /**
   * アニメーション開始時の値とpropsで指定した値を加算した値になるまで、durationで指定した時間をかけて、アニメーションさせます。
   * @param {Object} props 変更したいプロパティをkeyとしたオブジェクト
   * @param {Number} duration (optional) アニメーションにかける時間
   * @param {String} easing (optional) easing {@link phina.util.Tween#EASING}を参照してください。
   * @chainable
   */
  by(props, duration, easing) {
    this._add({
      type: 'tween',
      mode: 'by',
      props: props,
      duration: duration,
      easing: easing,
    });

    return this;
  }

  /**
   * propsで指定した値からアニメーション開始時の値になるまで、durationで指定した時間をかけて、アニメーションさせます。
   * @param {Object} props 変更したいプロパティをkeyとしたオブジェクト
   * @param {Number} duration (optional) アニメーションにかける時間
   * @param {String} easing (optional) easing {@link phina.util.Tween#EASING}を参照してください。
   * @chainable
   */
  from(props, duration, easing) {
    this._add({
      type: 'tween',
      mode: 'from',
      props: props,
      duration: duration,
      easing: easing,
    });
    return this;
  }

  /**
   * 指定した時間が経過するまで待機します。
   * @param {Number} time waitする時間
   * @chainable
   */
  wait(time) {
    this._add({
      type: 'wait',
      data: {
        limit: time,
      },
    });
    return this;
  }

  /**
   * 現在設定されているアニメーションが終了した時に呼び出される関数をセットします。
   * @param {Function} func 呼び出される関数
   * @param {Object} self (optional) func内でthisにしたいオブジェクト。
   * @param {Object[]} args (optional) funcの引数にしたい値
   * @chainable
   */
  call(func, self, args) {
    this._add({
      type: 'call',
      data: {
        func: func,
        self: self || this,
        args: args,
      },
    });
    return this;
  }

  /**
   * 現在設定されているアニメーションが終了した時にプロパティをセットします。  
   * 第一引数にオブジェクトをセットすることもできます。
   * @param {String | Object} key valueをセットするプロパティ名か、変更したいプロパティをkeyとしたオブジェクト。
   * @param {Object} value (optional) セットする値
   * @chainable
   */
  set(key, value) {
    var values = null;
    if (arguments.length == 2) {
      values = {};
      values[key] = value;
    }
    else {
      values = key;
    }
    this._tasks.push({
      type: "set",
      data: {
        values: values
      }
    });

    return this;
  }

  /**
   * x, yに対して、 {@link #to} の処理を行います。
   * @param {Number} x
   * @param {Number} y
   * @param {Number} duration (optional) アニメーションにかける時間
   * @param {String} easing (optional) easing {@link phina.util.Tween#EASING}を参照してください。
   * @chainable
   */
  moveTo(x, y, duration, easing) {
    return this.to({ x: x, y: y }, duration, easing);
  }
  
  /**
   * x, yに対して、 {@link #by} の処理を行います。
   * @param {Number} x
   * @param {Number} y
   * @param {Number} duration (optional) アニメーションにかける時間
   * @param {String} easing (optional) easing {@link phina.util.Tween#EASING}を参照してください。
   * @chainable
   */
  moveBy(x, y, duration, easing) {
    return this.by({ x: x, y: y }, duration, easing);
  }

  /**
   * rotationに対して、 {@link #to} の処理を行います。
   * @param {Number} rotation
   * @param {Number} duration (optional) アニメーションにかける時間
   * @param {String} easing (optional) easing {@link phina.util.Tween#EASING}を参照してください。
   * @chainable
   */
  rotateTo(rotation, duration, easing) {
    return this.to({ rotation: rotation }, duration, easing);
  }
  
  /**
   * rotationに対して、 {@link #by} の処理を行います。
   * @param {Number} rotation
   * @param {Number} duration (optional) アニメーションにかける時間
   * @param {String} easing (optional) easing {@link phina.util.Tween#EASING}を参照してください。
   * @chainable
   */
  rotateBy(rotation, duration, easing) {
    return this.by({ rotation: rotation }, duration, easing);
  }

  /**
   * scaleX, scaleYに対して {@link #to} の処理を行います。
   * @param {Number} scale scaleXとscaleYに設定する値
   * @param {Number} duration (optional) アニメーションにかける時間
   * @param {String} easing (optional) easing {@link phina.util.Tween#EASING}を参照してください。
   * @chainable
   */
  scaleTo(scale, duration, easing) {
    return this.to({ scaleX: scale, scaleY: scale }, duration, easing);
  }
  /**
   * scaleX, scaleYに対して {@link #by} の処理を行います。
   * @param {Number} scale scaleXとscaleYに設定する値
   * @param {Number} duration (optional) アニメーションにかける時間
   * @param {String} easing (optional) easing {@link phina.util.Tween#EASING}を参照してください。
   * @chainable
   */
  scaleBy(scale, duration, easing) {
    return this.by({ scaleX: scale, scaleY: scale }, duration, easing);
  }

  /**
   * alphaに対して {@link #to} の処理を行います。
   * @param {Number} value alphaに設定する値
   * @param {Number} duration (optional) アニメーションにかける時間
   * @param {String} easing (optional) easing {@link phina.util.Tween#EASING}を参照してください。
   * @chainable
   */
  fade(value, duration, easing) {
    return this.to({ alpha: value }, duration, easing);
  }

  /**
   * alphaを0にするアニメーションを設定します。
   * @param {Number} duration (optional) アニメーションにかける時間
   * @param {String} easing (optional) easing {@link phina.util.Tween#EASING}を参照してください。
   * @chainable
   */
  fadeOut(duration, easing) {
    return this.fade(0.0, duration, easing);
  }

  /**
   * alphaを1にするアニメーションを設定します。
   * @param {Number} duration (optional) アニメーションにかける時間
   * @param {String} easing (optional) easing {@link phina.util.Tween#EASING}を参照してください。
   * @chainable
   */
  fadeIn(duration, easing) {
    return this.fade(1.0, duration, easing);
  }

  /**
   * アニメーション開始
   * @chainable
   */
  play() {
    this.playing = true;
    return this;
  }

  /**
   * アニメーションを一時停止
   * @chainable
   */
  pause() {
    this.playing = false;
    return this;
  }

  /**
   * アニメーションを停止し、最初まで巻き戻します。
   * @chainable
   */
  stop() {
    this.playing = false;
    this.rewind();
    return this;
  }

  /**
   * アニメーションを巻き戻す
   * @chainable
   */
  rewind() {
    this._update = this._updateTask;
    this._index = 0;
    return this;
  }

  yoyo() {
    // TODO: 最初の値が分からないので反転できない...
    this._update = this._updateTask;
    this._index = 0;
    this._tasks.each(function(task) {
      if (task.type === 'tween') ;
    });
    this.play();

    return this;
  }

  /**
   * アニメーションループ設定
   * @param {Boolean} flag
   * @chainable
   */
  setLoop(flag) {
    this._loop = flag;
    return this;
  }

  /**
   * アニメーションをクリア
   * @chainable
   */
  clear() {
    this._init();
    return this;
  }

  /**
   * JSON形式でアニメーションを設定します。
   * @chainable
   * @param {Object} json
   * @param {Boolean} json.loop (optional) ループする場合true
   * @param {Array[]} json.tweens 設定するアニメーション
   * 
   * ```
   * [
   *   [method, arg1, arg2,,,],
   *   ['to', {value: 100}, 1000, 'swing'],
   *   ['wait', 1000],
   *   ['set', 'text', 'END']
   * ]
   * ```
   */
  fromJSON(json) {
    if (json.loop !== undefined) {
      this.setLoop(json.loop);
    }

    json.tweens.each(function(t) {
      t = t.clone();
      var method = t.shift();
      this[method].apply(this, t);
    }, this);

    return this;
  }

  _add(params) {
    this._tasks.push(params);
  }

  _updateTask(app) {
    if (!this.playing) return ;

    var task = this._tasks[this._index];
    if (!task) {
      if (this._loop) {
        this.rewind();
        this._update(app);
      }
      else {
        this.playing = false;
      }
      return ;
    }
    else {
      ++this._index;
    }

    if (task.type === 'tween') {
      // this._tween = phina.util.Tween();
      this._tween = new Tween();

      var duration = task.duration || this._getDefaultDuration();
      if (task.mode === 'to') {
        this._tween.to(this.target, task.props, duration, task.easing);
      }
      else if (task.mode === 'by') {
        this._tween.by(this.target, task.props, duration, task.easing);
      }
      else {
        this._tween.from(this.target, task.props, duration, task.easing);
      }
      this._update = this._updateTween;
      this._update(app);
    }
    else if (task.type === 'wait') {
      this._wait = {
        time: 0,
        limit: task.data.limit,
      };

      this._update = this._updateWait;
      this._update(app);
    }
    else if (task.type === 'call') {
      task.data.func.apply(task.data.self, task.data.args);
      // 1フレーム消費しないよう再帰
      this._update(app);
    }
    else if (task.type === 'set') {
      this.target.$extend(task.data.values);
      // 1フレーム消費しないよう再帰
      this._update(app);
    }
  }

  _updateTween(app) {
    var tween = this._tween;
    var time = this._getUnitTime(app);

    tween.forward(time);
    this.flare('tween');

    if (tween.time >= tween.duration) {
      delete this._tween;
      this._tween = null;
      this._update = this._updateTask;
    }
  }

  _updateWait(app) {
    var wait = this._wait;
    var time = this._getUnitTime(app);
    wait.time += time;

    if (wait.time >= wait.limit) {
      delete this._wait;
      this._wait = null;
      this._update = this._updateTask;
    }
  }

  _getUnitTime(app) {
    var obj = UPDATE_MAP[this.updateType];
    if (obj) {
      return obj.func(app);
    }
    else {
      return 1000 / app.fps;
    }
  }

  _getDefaultDuration() {
    var obj = UPDATE_MAP[this.updateType];
    return obj && obj.duration;
  }

}

/**
 * @static
 * {@link #updateType}に設定する更新方法の定義です。
 * 下記の表に定義済みの更新方法を{@link #updateType}に設定することで、
 * アニメーションの更新方法を変更することができます。
 * 
 * | 更新方法 | 単位(デフォルト値) | 1フレームあたりのアニメーション速度 |
 * |-|-|-|
 * | normal | ミリ秒(1000) | app.fpsによって変化 |
 * | delta | ミリ秒(1000) | 経過時間によって変化 |
 * | fps | フレーム(30) | 必ず同じ速度で変化 |
 */
var UPDATE_MAP = Tweener.UPDATE_MAP = {
  normal: {
    func: function(app) {
      return 1000 / app.fps;
    },
    duration: 1000,
  },

  delta: {
    func: function(app) {
      return app.ticker.deltaTime;
    },
    duration: 1000,
  },

  fps: {
    func: function(app) {
      return 1;
    },
    duration: 30,
  },

};

// Element側で拡張
// /**
//  * @member phina.app.Element
//  * @property tweener
//  * 自身にアタッチ済みの{@link phina.accessory.Tweener}オブジェクト。
//  */
// phina.app.Element.prototype.getter('tweener', function() {
//   if (!this._tweener) {
//     this._tweener = phina.accessory.Tweener().attachTo(this);
//   }
//   return this._tweener;
// });

/**
 * @class phina.app.Element
 * @extends phina.util.EventDispatcher
 * # 主に要素の親子関係を扱うクラス
 * 主に親子関係等を定義するクラスです。
 */
class Element extends EventDispatcher {

  /**
   * @property parent
   * 親要素
   */
  // parent = null;

  /**
   * @property children
   * 子要素
   */
  // children = null;

  /**
   * @property awake
   * 有効かどうか
   */
  // awake = true;

  /**
   * @constructor
   */
  constructor() {
    super();

    this.children = [];
  }

  /**
   * @method addChild
   * 自身に子要素を追加します。
   *
   * 自身を子要素として引数で指定した要素に追加するには {@link #addChildTo} を使用してください。
   *
   * @param {Object} child 追加する子要素
   */
  addChild(child) {
    if (child.parent) child.remove();

    child.parent = this;
    this.children.push(child);

    child.has('added') && child.flare('added');

    return child;
  }

  /**
   * @method addChildTo
   * 自身を子要素として引数で指定した要素に追加します。
   *
   * 自身に子要素を追加するには {@link #addChild} を使用してください。
   *
   * @param {Object} parent 自身を子要素として追加する要素
   */
  addChildTo(parent) {
    parent.addChild(this);

    return this;
  }

  /**
   * @method addChildAt
   * 自身を、指定した要素の子要素の任意の配列インデックスに追加します。
   *
   * @param {Object} child 追加する子要素
   * @param {Number} index インデックス番号
   */
  addChildAt(child, index) {
    if (child.parent) child.remove();

    child.parent = this;
    this.children.splice(index, 0, child);

    child.has('added') && child.flare('added');

    return child;
  }

  /**
   * @method getChildAt
   * 指定したインデックスの子要素を返します。
   *
   * @param {Number} index インデックス番号
   * @return {Object} 指定したインデックスの子要素
   */
  getChildAt(index) {
    // return this.children.at(index);
    return at.call(this.children, index);
  }

  /**
   * @method getChildByName
   * 指定した名前の子要素を返します。（未実装）
   */
  getChildByName(name) {
    // TODO:
  }

  /**
   * @method getChildIndex
   * 指定した子要素のインデックス番号を返します。
   *
   * @param {Object} child 子要素
   * @return {Number} 指定した子要素のインデックス番号
   */
  getChildIndex(child) {
    return this.children.indexOf(child);
  }

  /**
   * @method getParent
   * 指定した要素の親要素を返します。
   *
   * @return {Object} 指定した要素の親要素
   */
  getParent() {
    return this.parent;
  }

  /**
   * @method getRoot
   * 指定した要素の階層ツリーのルートを返します。
   *
   * @return {Object} 指定した要素の階層ツリーのルート
   */
  getRoot() {
    var elm = this;
    for (elm=this.parent; elm.parent != null; elm = elm.parent) {

    }
    return elm;
  }

  /**
   * @method removeChild
   * @chainable
   * 指定した要素を自身の子要素から削除します。
   *
   * @param {Object} child 要素
   */
  removeChild(child) {
    var index = this.children.indexOf(child);
    if (index !== -1) {
      this.children.splice(index, 1);
      child.has('removed') && child.flare('removed');
    }
    return this;
  }

  /**
   * @method remove
   * 自身を親要素の子要素から削除します。
   */
  remove() {
    if (!this.parent) return ;

    this.parent.removeChild(this);
    this.parent = null;

    return this;
  }

  /**
   * @method isAwake
   * 自身が有効かどうかを返します。
   *
   * @return {Boolean} 有効かどうか
   */
  isAwake() {
    return this.awake;
  }

  /**
   * @method wakeUp
   * 自身を有効にします。
   */
  wakeUp() {
    this.awake = true;
    return this;
  }

  /**
   * @method sleep
   * 自身を無効にします。
   */
  sleep() {
    this.awake = false;
    return this;
  }

  /**
   * @method fromJSON
   * JSON 形式を使って自身に子要素を追加することができます。
   *
   * ### Example
   *      this.fromJSON({
   *        "children": {
   *          "label": {                  //キー名が追加する子要素の名前になる
   *            "className": "Label",     //クラス
   *            "arguments": ['hello!'],  //初期化時の引数
   *            "x":320,                  //その他プロパティ
   *            "y":480,
   *          },
   *        },
   *      });
   *
   * @param {JSON} json JSON 形式
   */
  fromJSON(json) {

    var createChildren = function(name, data) {
      var args = data.arguments;
      args = (args instanceof Array) ? args : [args];

      var _class;
      var element;
      if (typeof data.className === 'string') {
        // is phina class
        _class = phina$1.using(data.className);
        element = _class.apply(null, args);
      } else if (typeof data.className === 'function') {
        // is ES class
        // インスタンス化にスプレッド構文が必要なため、es5サポートの場合babelが必要
        element = new data.className(...args);
      }

      element.name = name;
      this[name] = element;

      element.fromJSON(data);
      element.addChildTo(this);
    }.bind(this);

    forIn.call(json, function(key, value) {
    // json.forIn(function(key, value) {
      if (key === 'children') {
        forIn.call(value, function(name, data) {
        // value.forIn(function(name, data) {
          createChildren(name, data);
        });
      }
      else {
        if (key !== 'type' && key !== 'className') {
          this[key] = value;
        }
      }
    }, this);

    return this;
  }

  /**
   * @method toJSON
   * 自身の子要素を JSON 形式で返します。
   *
   * @return {JSON} JSON形式
   */
  toJSON() {
    var keys = Object.keys(phina$1.using(this.className).defaults || {});

    this._hierarchies.forEach(function(e) {
      var d = e.defaults;
      if (d) {
        Object.keys(d).forEach(function(k) {
          if (keys.indexOf(k) === -1) {
            keys.push(k);
          }
        });
      }
    });

    keys.push('name', 'className');

    var json = {};
    // keys.each(function(key) {
    keys.forEach(function(key) {
      json[key] = this[key];
    }, this);

    var children = this.children.map(function(child) {
      return child.toJSON();
    });

    if (children.length) {
      json.children = {};
      // children.each(function(child, i) {
      children.forEach(function(child, i) {
        json.children[child.name || (child.className + '_' + i)] = child;
      });
    }

    return json;
  }

  /**
   * accessoryを付与する
   * @param  {Accessory} Accessory継承クラス
   * @return {this}
   */
  attach(accessory) {
    if (!this.accessories) {
      this.accessories = [];
      this.on('enterframe', function(e) {
        this.accessories.forEach(function(accessory) {
          accessory.update && accessory.update(e.app);
        });
      });
    }

    this.accessories.push(accessory);
    accessory.setTarget(this);
    accessory.flare('attached');

    return this;
  }

  /**
   * accessoryを削除
   * @param  {Accessory} Accessory継承クラス
   * @return {this}
   */
  detach(accessory) {
    if (this.accessories) {
      // this.accessories.erase(accessory);
      erase.call(this.accessories, accessory);
      accessory.setTarget(null);
      accessory.flare('detached');
    }

    return this;
  }

  get tweener() {
    if (!this._tweener) {
      this._tweener = new Tweener().attachTo(this);
    }
    return this._tweener;
  }
}

/**
 * @class phina.app.Scene
 * @extends phina.app.Element
 */
class Scene extends Element {

  constructor() {
    super();
  }

  exit(nextLabel, nextArguments) {
    if (!this.app) return ;

    if (arguments.length > 0) {
      if (typeof arguments[0] === 'object') {
        nextLabel = arguments[0].nextLabel || this.nextLabel;
        nextArguments = arguments[0];
      }

      this.nextLabel = nextLabel;
      this.nextArguments = nextArguments;
    }

    this.app.popScene();

    return this;
  }

}

/**
 * @class phina.app.BaseApp
 * ベースとなるアプリケーションクラス
 * @extends phina.util.EventDispatcher
 */
class BaseApp extends EventDispatcher {

  // /** awake */
  // awake = null
  // /** fps */
  // fps = null
  // /** frame */
  // frame = null

  /**
   * @constructor
   */
  constructor() {
    super();
    this._scenes = [new Scene()];
    this._sceneIndex = 0;

    this.updater = new Updater(this);
    this.interactive = new Interactive(this);

    this.awake = true;
    this.ticker = new Ticker();
  }

  run() {
    var self = this;
    this._loopCaller = function() {
      self._loop();
    };
    this.ticker.tick(this._loopCaller);

    this.ticker.start();

    return this;
  }

  kill() {
    this.ticker.stop();
    this.ticker.untick(this._loopCaller);
    return this;
  }

  replaceScene(scene) {
    this.flare('replace');
    this.flare('changescene');
    if (this.currentScene) {
      this.currentScene.app = null;
    }
    this.currentScene = scene;
    this.currentScene.app = this;
    this.currentScene.flare('enter', {
      app: this,
    });

    return this;
  }

  pushScene(scene) {
    this.flare('push');
    this.flare('changescene');

    this.currentScene.flare('pause', {
      app: this,
    });

    this._scenes.push(scene);
    ++this._sceneIndex;

    this.flare('pushed');

    scene.app = this;
    scene.flare('enter', {
      app: this,
    });

    return this;
  }

  /**
   * シーンをポップする(ポーズやオブション画面などで使用)
   */
  popScene() {
    this.flare('pop');
    this.flare('changescene');

    var scene = this._scenes.pop();
    --this._sceneIndex;

    scene.flare('exit', {
      app: this,
    });
    scene.app = null;

    this.flare('poped');

    //
    this.currentScene.flare('resume', {
      app: this,
      prevScene: scene,
    });

    return scene;
  }

  /**
   * シーンのupdateを実行するようにする
   */
  start() {
    this.awake = true;

    return this;
  }

  /**
   * シーンのupdateを実行しないようにする
   */
  stop() {
    this.awake = false;

    return this;
  }

  enableStats() {
    if (phina$1.global.Stats) {
      this.stats = new Stats();
      document.body.appendChild(this.stats.domElement);
    }
    else {
      // console.warn("not defined stats.");
      var STATS_URL = 'https://cdnjs.cloudflare.com/ajax/libs/stats.js/r14/Stats.js';
      var script = document.createElement('script');
      script.src = STATS_URL;
      document.body.appendChild(script);
      script.onload = function() {
        this.enableStats();
      }.bind(this);
    }
    return this;
  }

  enableDatGUI(callback) {
    if (phina$1.global.dat) {
      var gui = new phina$1.global.dat.GUI();
      callback(gui);
    }
    else {
      // console.warn("not defined dat.GUI.");
      var URL = 'https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.5.1/dat.gui.js';
      var script = document.createElement('script');
      script.src = URL;
      document.body.appendChild(script);
      script.onload = function() {
        var gui = new phina$1.global.dat.GUI();
        callback(gui);
      }.bind(this);
    }
    return this;
  }

  _loop() {
    this._update();
    this.interactive.check(this.currentScene);
    this._draw();

    // stats update
    if (this.stats) this.stats.update();
  }

  _update() {
    if (this.awake) {
      // エンターフレームイベント
      if (this.has('enterframe')) {
        this.flare('enterframe');
      }

      this.update && this.update();
      this.updater.update(this.currentScene);
    }
  }

  /**
   * 描画用仮想関数
   * @private
   */
  _draw() {}

  get currentScene()   { return this._scenes[this._sceneIndex]; }
  set currentScene(v)  { this._scenes[this._sceneIndex] = v; }

  get rootScene()   { return this._scenes[0]; }
  set rootScene(v)  { this._scenes[0] = v; }

  get frame() { return this.ticker.frame; }
  set frame(v) { this.ticker.frame = v; }

  get fps() { return this.ticker.fps; }
  set fps(v) { this.ticker.fps = v; }

  get deltaTime() { return this.ticker.deltaTime; }

  get elapsedTime() { return this.ticker.elapsedTime; }

  get currentTime() { return this.ticker.currentTime; }

  get startTime() { return this.ticker.startTime; }

}

/**
 * @class phina.app.Object2D
 * Object2D
 * @extends phina.app.Element
 */
class Object2D extends Element {

  // /** 位置 */
  // position: null,
  // /** 回転 */
  // rotation: 0,
  // /** スケール */
  // scale: null,
  // /** 基準位置 */
  // origin: null,

  /**
   * @constructor
   */
  constructor(options) {
    super();

    options = $safe.call({}, options, Object2D.defaults);
    // options = ({}).$safe(options, phina.app.Object2D.defaults);

    this.position = new Vector2(options.x, options.y);
    this.scale    = new Vector2(options.scaleX, options.scaleY);
    this.rotation = options.rotation;
    this.origin   = new Vector2(options.originX, options.originY);

    this._matrix = new Matrix33().identity();
    this._worldMatrix = new Matrix33().identity();

    this.interactive = false;
    this._overFlags = {};
    this._touchFlags = {};

    this.width = options.width;
    this.height = options.height;
    this.radius = options.radius;
    this.boundingType = options.boundingType;
  }

  /**
   * 点と衝突しているかを判定
   * @param {Number} x
   * @param {Number} y
   */
  hitTest(x, y) {
    if (this.boundingType === 'rect') {
      return this.hitTestRect(x, y);
    }
    else if (this.boundingType === 'circle') {
      return this.hitTestCircle(x, y);
    }
    else {
      // none の場合
      return true;
    }
  }

  hitTestRect(x, y) {
    var p = this.globalToLocal(new Vector2(x, y));

    var left   = -this.width*this.originX;
    var right  = +this.width*(1-this.originX);
    var top    = -this.height*this.originY;
    var bottom = +this.height*(1-this.originY);

    return ( left < p.x && p.x < right ) && ( top  < p.y && p.y < bottom );
  }

  hitTestCircle(x, y) {
    // 円判定
    var p = this.globalToLocal(new Vector2(x, y));
    if (((p.x)*(p.x)+(p.y)*(p.y)) < (this.radius*this.radius)) {
        return true;
    }
    return false;
  }

  /**
   * 要素と衝突しているかを判定
   * @param {Object} elm
   */
  hitTestElement(elm) {
    var rect0 = this;
    var rect1 = elm;
    return (rect0.left < rect1.right) && (rect0.right > rect1.left) &&
           (rect0.top < rect1.bottom) && (rect0.bottom > rect1.top);
  }


  globalToLocal(p) {
    var matrix = this._worldMatrix.clone();
    matrix.invert();
    // matrix.transpose();

    var temp = matrix.multiplyVector2(p);

    return temp;
  }

  setInteractive(flag, type) {
    this.interactive = flag;
    if (type) {
      this.boundingType = type;
    }

    return this;
  }

  /**
   * X 座標値をセット
   * @param {Number} x
   */
  setX(x) {
    this.position.x = x;
    return this;
  }
  
  /**
   * Y 座標値をセット
   * @param {Number} y
   */
  setY(y) {
    this.position.y = y;
    return this;
  }
  
  /**
   * XY 座標をセット
   * @param {Number} x
   * @param {Number} y
   */
  setPosition(x, y) {
    this.position.x = x;
    this.position.y = y;
    return this;
  }

  /**
   * 回転をセット
   * @param {Number} rotation
   */
  setRotation(rotation) {
    this.rotation = rotation;
    return this;
  }

  /**
   * スケールをセット
   * @param {Number} x
   * @param {Number} y
   */
  setScale(x, y) {
    this.scale.x = x;
    if (arguments.length <= 1) {
        this.scale.y = x;
    } else {
        this.scale.y = y;
    }
    return this;
  }
  
  /**
   * 基準点をセット
   * @param {Number} x
   * @param {Number} y
   */
  setOrigin(x, y) {
    this.origin.x = x;
    this.origin.y = y;
    return this;
  }
  
  /**
   * 幅をセット
   * @param {Number} width
   */
  setWidth(width) {
    this.width = width;
    return this;
  }
  
  /**
   * 高さをセット
   * @param {Number} height
   */
  setHeight(height) {
    this.height = height;
    return this;
  }
  
  /**
   * サイズ(幅, 高さ)をセット
   * @param {Number} width
   * @param {Number} height
   */
  setSize(width, height) {
    this.width  = width;
    this.height = height;
    return this;
  }

  setBoundingType(type) {
    this.boundingType = type;
    return this;
  }

  moveTo(x, y) {
    this.position.x = x;
    this.position.y = y;
    return this;
  }

  moveBy(x, y) {
    this.position.x += x;
    this.position.y += y;
    return this;
  }

  _calcWorldMatrix() {
    if (!this.parent) return ;

    // cache check
    if (this.rotation != this._cachedRotation) {
      this._cachedRotation = this.rotation;

      var r = this.rotation*(Math.PI/180);
      this._sr = Math.sin(r);
      this._cr = Math.cos(r);
    }

    var local = this._matrix;
    var parent = this.parent._worldMatrix || Matrix33.IDENTITY;
    var world = this._worldMatrix;

    // ローカルの行列を計算
    local.m00 = this._cr * this.scale.x;
    local.m01 =-this._sr * this.scale.y;
    local.m10 = this._sr * this.scale.x;
    local.m11 = this._cr * this.scale.y;
    local.m02 = this.position.x;
    local.m12 = this.position.y;

    // cache
    var a00 = local.m00; var a01 = local.m01; var a02 = local.m02;
    var a10 = local.m10; var a11 = local.m11; var a12 = local.m12;
    var b00 = parent.m00; var b01 = parent.m01; var b02 = parent.m02;
    var b10 = parent.m10; var b11 = parent.m11; var b12 = parent.m12;

    // 親の行列と掛け合わせる
    world.m00 = b00 * a00 + b01 * a10;
    world.m01 = b00 * a01 + b01 * a11;
    world.m02 = b00 * a02 + b01 * a12 + b02;

    world.m10 = b10 * a00 + b11 * a10;
    world.m11 = b10 * a01 + b11 * a11;
    world.m12 = b10 * a02 + b11 * a12 + b12;

    return this;
  }

  /**
   * @property    x
   * x座標値
   */
  get x()   { return this.position.x; }
  set x(v)  { this.position.x = v; }

  /**
   * @property    y
   * y座標値
   */
  get y()   { return this.position.y; }
  set y(v)  { this.position.y = v; }

  /**
   * @property    originX
   * x座標値
   */
  get originX()   { return this.origin.x; }
  set originX(v)  { this.origin.x = v; }

  /**
   * @property    originY
   * y座標値
   */
  get originY()   { return this.origin.y; }
  set originY(v)  { this.origin.y = v; }

  /**
   * @property    scaleX
   * スケールX値
   */
  get scaleX()   { return this.scale.x; }
  set scaleX(v)  { this.scale.x = v; }
  
  /**
   * @property    scaleY
   * スケールY値
   */
  get scaleY()   { return this.scale.y; }
  set scaleY(v)  { this.scale.y = v; }
  
  /**
   * @property    width
   * width
   */
  get width()   {
    return (this.boundingType === 'rect') ?
      this._width : this._diameter;
  }
  set width(v)  { this._width = v; }
  /**
   * @property    height
   * height
   */
  get height()   {
    return (this.boundingType === 'rect') ?
      this._height : this._diameter;
  }
  set height(v)  { this._height = v; }

  /**
   * @property    radius
   * 半径
   */
  get radius()   {
    return (this.boundingType === 'rect') ?
      (this.width+this.height)/4 : this._radius;
  }
  set radius(v)  {
    this._radius = v;
    this._diameter = v*2;
  }
  
  /**
   * @property    top
   * 左
   */
  get top()   { return this.y - this.height*this.originY; }
  set top(v)  { this.y = v + this.height*this.originY; }

  /**
   * @property    right
   * 左
   */
  get right()   { return this.x + this.width*(1-this.originX); }
  set right(v)  { this.x = v - this.width*(1-this.originX); }

  /**
   * @property    bottom
   * 左
   */
  get bottom()   { return this.y + this.height*(1-this.originY); }
  set bottom(v)  { this.y = v - this.height*(1-this.originY); }

  /**
   * @property    left
   * 左
   */
  get left()   { return this.x - this.width*this.originX; }
  set left(v)  { this.x = v + this.width*this.originX; }

  /**
   * @property    centerX
   * centerX
   */
  get centerX()   { return this.x + this.width/2 - this.width*this.originX; }
  set centerX(v)  {
    // TODO: どうしようかな??
  }

  /**
   * @property    centerY
   * centerY
   */
  get centerY()   { return this.y + this.height/2 - this.height*this.originY; }
  set centerY(v)  {
    // TODO: どうしようかな??
  }
}

Object2D.defaults = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1,
  rotation: 0,
  originX: 0.5,
  originY: 0.5,
  width: 64,
  height: 64,
  radius: 32,
  boundingType: 'rect',
};

/**
 * @class phina.display.DomApp
 * @extends phina.app.BaseApp
 */
class DomApp extends BaseApp {

  // domElement: null,

  /**
   * @constructor
   */
  constructor(options) {
    super(options);

    if (options.domElement) {
      this.domElement = options.domElement;
    }
    else {
      if (options.query) {
        this.domElement = document.querySelector(options.query);
      }
      else {
        console.assert('error');
      }
    }

    if (options.fps !== undefined) {
      this.fps = options.fps;
    }
    
    if(typeof options.runner === 'function') {
      this.ticker.runner = options.runner;
    }

    this.mouse = new Mouse(this.domElement);
    this.touch = new Touch(this.domElement);
    this.touchList = new TouchList(this.domElement, 5);
    this.keyboard = new Keyboard(document);
    // // 加速度センサーを生成
    // this.accelerometer = phina.input.Accelerometer();

    // ポインタをセット(PC では Mouse, Mobile では Touch)
    this.pointer = this.touch;
    this.pointers = this.touchList.touches;

    this.domElement.addEventListener("touchstart", function () {
      this.pointer = this.touch;
      this.pointers = this.touchList.touches;
    }.bind(this));
    this.domElement.addEventListener("mouseover", function () {
      this.pointer = this.mouse;
      this.pointers = [this.mouse];
    }.bind(this));

    // keyboard event
    this.keyboard.on('keydown', function(e) {
      this.currentScene && this.currentScene.flare('keydown', {
        keyCode: e.keyCode,
      });
    }.bind(this));
    this.keyboard.on('keyup', function(e) {
      this.currentScene && this.currentScene.flare('keyup', {
        keyCode: e.keyCode,
      });
    }.bind(this));
    this.keyboard.on('keypress', function(e) {
      this.currentScene && this.currentScene.flare('keypress', {
        keyCode: e.keyCode,
      });
    }.bind(this));

    // click 対応
    var eventName = phina$1.isMobile() ? 'touchend' : 'mouseup';
    this.domElement.addEventListener(eventName, this._checkClick.bind(this));

    // 決定時の処理をオフにする(iPhone 時のちらつき対策)
    this.domElement.addEventListener("touchstart", function(e) { e.stop(); });
    this.domElement.addEventListener("touchmove", function(e) { e.stop(); });

    // ウィンドウフォーカス時イベントリスナを登録
    phina$1.global.addEventListener('focus', function() {
      this.flare('focus');
      this.currentScene.flare('focus');
    }.bind(this), false);
    // ウィンドウブラー時イベントリスナを登録
    phina$1.global.addEventListener('blur', function() {
      this.flare('blur');
      this.currentScene.flare('blur');
    }.bind(this), false);

    // 更新関数を登録
    this.on('enterframe', function() {
      this.mouse.update();
      this.touch.update();
      this.touchList.update();
      this.keyboard.update();
    });
  }

  _checkClick(e) {
    var _check = function(element) {
      if (element.children.length > 0) {
        element.children.forEach(function(child) {
          _check(child);
        });
      }
      if (element._clicked && element.has('click')) {
        element.flare('click');
      }
      element._clicked = false;
    };

    _check(this.currentScene);
  }

}

/**
 * @class phina.display.CanvasRenderer
 */
class CanvasRenderer {

  constructor(canvas) {
    this.canvas = canvas;
    this._context = this.canvas.context;
  }

  render(scene) {
    this.canvas.clear();
    if (scene.backgroundColor) {
      this.canvas.clearColor(scene.backgroundColor);
    }

    this._context.save();
    this.renderChildren(scene);
    this._context.restore();
  }

  renderChildren(obj) {
    // 子供たちも実行
    if (obj.children.length > 0) {
      var tempChildren = obj.children.slice();
      for (var i=0,len=tempChildren.length; i<len; ++i) {
        this.renderObject(tempChildren[i]);
      }
    }
  }

  renderObject(obj) {
    if (obj.visible === false && !obj.interactive) return;

    obj._calcWorldMatrix && obj._calcWorldMatrix();

    if (obj.visible === false) return;

    obj._calcWorldAlpha && obj._calcWorldAlpha();

    var context = this.canvas.context;

    context.globalAlpha = obj._worldAlpha;
    context.globalCompositeOperation = obj.blendMode;

    if (obj._worldMatrix) {
      // 行列をセット
      var m = obj._worldMatrix;
      context.setTransform( m.m00, m.m10, m.m01, m.m11, m.m02, m.m12 );
    }

    if (obj.clip) {

      context.save();

      obj.clip(this.canvas);
      context.clip();

      if (obj.draw) obj.draw(this.canvas);

      // 子供たちも実行
      if (obj.renderChildBySelf === false && obj.children.length > 0) {
          var tempChildren = obj.children.slice();
          for (var i=0,len=tempChildren.length; i<len; ++i) {
              this.renderObject(tempChildren[i]);
          }
      }

      context.restore();
    }
    else {
      if (obj.draw) obj.draw(this.canvas);

      // 子供たちも実行
      if (obj.renderChildBySelf === false && obj.children.length > 0) {
        var tempChildren = obj.children.slice();
        for (var i=0,len=tempChildren.length; i<len; ++i) {
          this.renderObject(tempChildren[i]);
        }
      }

    }
  }

}

/**
 * @class phina.display.DisplayScene
 * @extends phina.app.Scene
 */
class DisplayScene extends Scene {

  constructor(params) {
    super();

    params = $safe.call({}, params, DisplayScene.defaults);
    // params = ({}).$safe(params, DisplayScene.defaults);

    this.canvas = new Canvas();
    this.canvas.setSize(params.width, params.height);
    this.renderer = new CanvasRenderer(this.canvas);
    this.backgroundColor = (params.backgroundColor) ? params.backgroundColor : null;

    this.width = params.width;
    this.height = params.height;
    this.gridX = new Grid(params.width, 16);
    this.gridY = new Grid(params.height, 16);

    // TODO: 一旦むりやり対応
    this.interactive = true;
    this.setInteractive = function(flag) {
      this.interactive = flag;
    };
    this._overFlags = {};
    this._touchFlags = {};

    var ctx = this.canvas.context;
    if (params.imageSmoothing === false) {
      ctx.imageSmoothingEnabled = false;
      ctx.webkitImageSmoothingEnabled = false;
      ctx.msImageSmoothingEnabled = false;
    }
  }

  hitTest() {
    return true;
  }

  _update() {
    if (this.update) {
      this.update();
    }
  }

  _render() {
    this.renderer.render(this);
  }

}

DisplayScene.defaults = {
  width: 640,
  height: 960,
  imageSmoothing: true,
};

/**
 * @class phina.display.CanvasApp
 * @extends phina.display.DomApp
 */
class CanvasApp extends DomApp {

  /**
   * @constructor
   */
  constructor(options) {
    options = $safe.call((options || {}), CanvasApp.defaults);
    // options = (options || {}).$safe(CanvasApp.defaults);
    
    if (!options.query && !options.domElement) {
      options.domElement = document.createElement('canvas');
      if (options.append) {
        document.body.appendChild(options.domElement);
      }
    }
    super(options);

    this.gridX = new Grid({
      width: options.width,
      columns: options.columns,
    });
    this.gridY = new Grid({
      width: options.height,
      columns: options.columns,
    });

    this.canvas = new Canvas(this.domElement);
    this.canvas.setSize(options.width, options.height);

    this.backgroundColor = (options.backgroundColor !== undefined) ? options.backgroundColor : 'white';

    this.replaceScene(new DisplayScene({
      width: options.width,
      height: options.height,
    }));

    if (options.fit) {
      this.fitScreen();
    }

    if (options.pixelated) {
      // チラつき防止
      // ドット絵ゲームのサポート
      // https://drafts.csswg.org/css-images/#the-image-rendering
      // https://developer.mozilla.org/en-US/docs/Web/CSS/image-rendering#Browser_compatibility
      if (navigator.userAgent.match(/Firefox\/\d+/)) {
        this.domElement.style.imageRendering = 'crisp-edges';
      } else {
        this.domElement.style.imageRendering = 'pixelated';
      }
    }

    // pushScene, popScene 対策
    this.on('push', function() {
      // onenter 対策で描画しておく
      if (this.currentScene.canvas) {
        this._draw();
      }
    });
  }

  _draw() {
    if (this.backgroundColor) {
      this.canvas.clearColor(this.backgroundColor);
    } else {
      this.canvas.clear();
    }

    if (this.currentScene.canvas) {
      this.currentScene._render();

      // this._scenes.each(function(scene) {
      this._scenes.forEach(function(scene) {
        var c = scene.canvas;
        if (c) {
          this.canvas.context.drawImage(c.domElement, 0, 0, c.width, c.height);
        }
      }, this);
    }
  }

  fitScreen() {
    this.canvas.fitScreen();
  }

}

// static
CanvasApp.defaults = {
  width: 640,
  height: 960,
  columns: 12,
  fit: true,
  append: true,
};

/**
 * @class phina.display.DisplayElement
 * @extends phina.app.Object2D
 */
class DisplayElement extends Object2D {

  // /** 表示フラグ */
  // visible: true,
  // /** アルファ */
  // alpha: 1.0,
  // /** ブレンドモード */
  // blendMode: "source-over",

  // /** 子供を 自分のCanvasRenderer で描画するか */
  // renderChildBySelf: false,

  constructor(options) {
    options = $safe.call({}, options||{}, DisplayElement.defaults);
    // options = ({}).$safe(options || {}, phina.display.DisplayElement.defaults);

    super(options);
    this.visible = (options.visible != null) ? options.visible : true;
    this.alpha = (options.alpha != null) ? options.alpha : 1.0;
    this.blendMode = "source-over";
    this.renderChildBySelf = false;
    this._worldAlpha = 1.0;
  }

  /**
   * アルファ値をセット
   */
  setAlpha(alpha) {
    this.alpha = alpha;
    return this;
  }

  /**
   * 表示/非表示をセット
   */
  setVisible(flag) {
    this.visible = flag;
    return this;
  }

  /**
   * 表示
   */
  show() {
    this.visible = true;
    return this;
  }

  /**
   * 非表示
   */
  hide() {
    this.visible = false;
    return this;
  }

  /**
   * @private
   */
  _calcWorldAlpha() {
    if (this.alpha < 0) {
      this._worldAlpha = 0;
      return;
    }
    if (!this.parent) {
      this._worldAlpha = this.alpha;
      return ;
    }
    else {
      var worldAlpha = (this.parent._worldAlpha !== undefined) ? this.parent._worldAlpha : 1.0;
      // alpha
      this._worldAlpha = worldAlpha * this.alpha;
    }
  }

}

DisplayElement.defaults = {
  alpha: 1.0,
  visible: true,
};

/**
 * @class phina.asset.AssetManager
 * 
 */
class AssetManager {

  static get(type, key) {
    return this.assets[type] && this.assets[type][key];
  }

  static set(type, key, asset) {
    if (!this.assets[type]) {
      this.assets[type] = {};
    }
    this.assets[type][key] = asset;
  }

  static contains(type, key) {
    return ;
  }

}

AssetManager.assets = {
  image: {},
  sound: {},
  spritesheet: {},
};

/**
 * @class phina.display.Sprite
 * @extends phina.display.DisplayElement
 */
class Sprite extends DisplayElement {

  constructor(image, width, height) {
    super();

    this.srcRect = new Rect();
    this.setImage(image, width, height);
  }

  draw(canvas) {
    var image = this.image.domElement;

    // canvas.context.drawImage(image,
    //   0, 0, image.width, image.height,
    //   -this.width*this.origin.x, -this.height*this.origin.y, this.width, this.height
    //   );

    var srcRect = this.srcRect;
    canvas.context.drawImage(image,
      srcRect.x, srcRect.y, srcRect.width, srcRect.height,
      -this._width*this.originX, -this._height*this.originY, this._width, this._height
      );
  }

  setImage(image, width, height) {
    if (typeof image === 'string') {
      image = AssetManager.get('image', image);
    }
    this._image = image;
    this.width = this._image.domElement.width;
    this.height = this._image.domElement.height;

    if (width) { this.width = width; }
    if (height) { this.height = height; }

    this.frameIndex = 0;

    return this;
  }

  setFrameIndex(index, width, height) {
    var tw  = width || this._width;      // tw
    var th  = height || this._height;    // th
    var row = ~~(this.image.domElement.width / tw);
    var col = ~~(this.image.domElement.height / th);
    var maxIndex = row*col;
    index = index%maxIndex;
    
    var x = index%row;
    var y = ~~(index/row);
    this.srcRect.x = x*tw;
    this.srcRect.y = y*th;
    this.srcRect.width  = tw;
    this.srcRect.height = th;

    this._frameIndex = index;

    return this;
  }

  get image() {return this._image;}
  set image(v) {
    this.setImage(v);
    return this;
  }

  get frameIndex() {return this._frameIndex;}
  set frameIndex(idx) {
    this.setFrameIndex(idx);
    return this;
  }
}

/**
 * @class phina.display.PlainElement
 * @extends phina.display.DisplayElement
 */
class PlainElement extends DisplayElement {

  constructor(options) {
    super(options);
    this.canvas = new Canvas();
    this.canvas.setSize(this.width, this.height);
  }

  draw(canvas) {
    var image = this.canvas.domElement;
    var w = image.width;
    var h = image.height;

    var x = -w*this.origin.x;
    var y = -h*this.origin.y;

    canvas.context.drawImage(image,
      0, 0, w, h,
      x, y, w, h
      );
  }
}

/**
 * @class phina.display.Layer
 * @extends phina.display.DisplayElement
 */
class Layer extends DisplayElement {

  /** 子供を 自分の CanvasRenderer で描画するか */
  // renderChildBySelf: true,

  constructor(options) {
    options = $safe.call({}, options||{}, {
    // options = ({}).$safe(options, {
      width: 640,
      height: 960,
    });
    super(options);
    this.width = options.width;
    this.height = options.height;
    this.gridX = new Grid(options.width, 16);
    this.gridY = new Grid(options.height, 16);
    this.renderChildBySelf = true;
  }

  draw(canvas) {
    if (!this.domElement) return ;

    var image = this.domElement;
    canvas.context.drawImage(image,
      0, 0, image.width, image.height,
      -this.width*this.originX, -this.height*this.originY, this.width, this.height
      );
  }
}


/**
 * @class phina.display.CanvasLayer
 * @extends phina.display.Layer
 */
class CanvasLayer extends Layer {

  constructor(options) {
    super(options);
    this.canvas = new Canvas();
    this.canvas.width  = this.width;
    this.canvas.height = this.height;

    this.renderer = new CanvasRenderer(this.canvas);
    this.domElement = this.canvas.domElement;

    this.on('enterframe', function() {
      var temp = this._worldMatrix;
      this._worldMatrix = null;
      this.renderer.render(this);
      this._worldMatrix = temp;
    });
  }

  draw(canvas) {
    var image = this.domElement;
    canvas.context.drawImage(image,
      0, 0, image.width, image.height,
      -this.width*this.originX, -this.height*this.originY, this.width, this.height
      );
  }
}


/**
 * @class phina.display.ThreeLayer
 * @extends phina.display.Layer
 */
class ThreeLayer extends Layer {

  // scene: null,
  // camera: null,
  // light: null,
  // renderer: null,

  constructor(options) {
    super(options);

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera( 75, options.width / options.height, 1, 10000 );
    this.camera.position.z = 1000;

    this.light = new THREE.DirectionalLight( 0xffffff, 1 );
    this.light.position.set( 1, 1, 1 ).normalize();
    this.scene.add( this.light );

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setClearColor( 0xf0f0f0 );
    this.renderer.setSize( options.width, options.height );

    this.on('enterframe', function() {
      this.renderer.render( this.scene, this.camera );
    });

    this.domElement = this.renderer.domElement;
  }
}

/**
 * @class phina.display.Shape
 * @extends phina.display.PlainElement
 */
class Shape extends PlainElement {

  constructor(options) {
    // options = ({}).$safe(options || {}, phina.display.Shape.defaults);
    options = $safe.call({}, options||{}, Shape.defaults);

    super(options);

    this.padding = options.padding;

    this.backgroundColor = options.backgroundColor;
    this.fill = options.fill;
    this.stroke = options.stroke;
    this.strokeWidth = options.strokeWidth;
    this.lineCap = options.lineCap;
    this.lineJoin = options.lineJoin;

    this.shadow = options.shadow;
    this.shadowBlur = options.shadowBlur;

    this.watchDraw = true;
    this._dirtyDraw = true;

    var checkRender = function() {
      // render
      if (this.watchDraw && this._dirtyDraw === true) {
        this.render(this.canvas);
        this._dirtyDraw = false;
      }
    };

    this.on('enterframe', checkRender);
    this.on('added', checkRender);
  }

  calcCanvasWidth() {
    return this.width + this.padding*2;
  }

  calcCanvasHeight() {
    return this.height + this.padding*2;
  }

  calcCanvasSize () {
    return {
      width: this.calcCanvasWidth(),
      height: this.calcCanvasHeight(),
    };
  }

  isStrokable() {
    return this.stroke && 0 < this.strokeWidth;
  }

  /**
   * @virtual
   * @param  {phina.graphics.Canvas} canvas 
   * @return {any}
   */
  prerender(canvas) {

  }

  /**
   * @virtual
   * @param  {phina.graphics.Canvas} canvas 
   * @return {any}
   */
  postrender(canvas) {

  }

  renderFill(canvas) {
    canvas.fill();
  }

  renderStroke(canvas) {
    canvas.stroke();
  }

  render(canvas) {
    var context = canvas.context;
    // リサイズ
    var size = this.calcCanvasSize();
    canvas.setSize(size.width, size.height);
    // クリアカラー
    canvas.clearColor(this.backgroundColor);
    // 中心に座標を移動
    canvas.transformCenter();

    // 描画前処理
    this.prerender(this.canvas);

    // ストローク描画
    if (this.isStrokable()) {
      context.strokeStyle = this.stroke;
      context.lineWidth = this.strokeWidth;
      context.lineCap = this.lineCap;
      context.lineJoin = this.lineJoin;
      context.shadowBlur = 0;
      this.renderStroke(canvas);
    }

    // 塗りつぶし描画
    if (this.fill) {
      context.fillStyle = this.fill;

      // shadow の on/off
      if (this.shadow) {
        context.shadowColor = this.shadow;
        context.shadowBlur = this.shadowBlur;
      }
      else {
        context.shadowBlur = 0;
      }

      this.renderFill(canvas);
    }

    // 描画後処理
    this.postrender(this.canvas);

    return this;
  }

  static watchRenderProperty(key) {
    // this.prototype.$watch(key, function(newVal, oldVal) {
    $watch.call(this.prototype, key, function(newVal, oldVal) {
      if (newVal !== oldVal) {
        this._dirtyDraw = true;
      }
    });
  }

  static watchRenderProperties(keys) {
    var watchRenderProperty = this.watchRenderProperty || Shape.watchRenderProperty;
    keys.forEach(function(key) {
      watchRenderProperty.call(this, key);
    }, this);
  }

}

// static props
Shape.defaults = {
  width: 64,
  height: 64,
  padding: 8,

  backgroundColor: '#aaa',
  fill: '#00a',
  stroke: '#aaa',
  strokeWidth: 4,
  lineCap: 'round',
  lineJoin: 'round',

  shadow: false,
  shadowBlur: 4,
};

// _defined
Shape.watchRenderProperties([
  'width',
  'height',
  'radius',
  'padding',
  'backgroundColor',
  'fill',
  'stroke',
  'strokeWidth',
  'lineCap',
  'lineJoin',
  'shadow',
  'shadowBlur',
]);


/**
 * @class phina.display.RectangleShape
 * @extends phina.display.Shape
 */
class RectangleShape extends Shape {

  constructor(options) {
    // options = ({}).$safe(options || {}, phina.display.RectangleShape.defaults);
    options = $safe.call({}, options||{}, RectangleShape.defaults);

    super(options);

    this.cornerRadius = options.cornerRadius;
  }

  prerender(canvas) {
    canvas.roundRect(-this.width/2, -this.height/2, this.width, this.height, this.cornerRadius);
  }

}

// static props
RectangleShape.defaults = {
  backgroundColor: 'transparent',
  fill: 'blue',
  stroke: '#aaa',
  strokeWidth: 4,
  cornerRadius: 0,
};

// _defined
Shape.watchRenderProperty.call(RectangleShape, 'cornerRadius');


/**
 * @class phina.display.CircleShape
 * @extends phina.display.Shape
 */
class CircleShape extends Shape {

  constructor(options) {
    // options = ({}).$safe(options || {}, phina.display.CircleShape.defaults);
    options = $safe.call({}, options||{}, CircleShape.defaults);

    super(options);

    this.setBoundingType('circle');
  }

  prerender(canvas) {
    canvas.circle(0, 0, this.radius);
  }

}

// static props
CircleShape.defaults = {
  backgroundColor: 'transparent',
  fill: 'red',
  stroke: '#aaa',
  strokeWidth: 4,
  radius: 32,
};


/**
 * @class phina.display.TriangleShape
 * @extends phina.display.Shape
 */
class TriangleShape extends Shape {

  constructor(options) {
    // options = ({}).$safe(options || {}, phina.display.TriangleShape.defaults);
    options = $safe.call({}, options||{}, TriangleShape.defaults);

    super(options);

    this.setBoundingType('circle');
  }

  prerender(canvas) {
    canvas.polygon(0, 0, this.radius, 3);
  }

}

// static props
TriangleShape.defaults = {
  backgroundColor: 'transparent',
  fill: 'green',
  stroke: '#aaa',
  strokeWidth: 4,

  radius: 32,
};


/**
 * @class phina.display.StarShape
 * @extends phina.display.Shape
 */
class StarShape extends Shape {

  constructor(options) {
    // options = ({}).$safe(options || {}, phina.display.StarShape.defaults);
    options = $safe.call({}, options||{}, StarShape.defaults);

    super(options);

    this.setBoundingType('circle');
    this.sides = options.sides;
    this.sideIndent = options.sideIndent;
  }

  prerender(canvas) {
    canvas.star(0, 0, this.radius, this.sides, this.sideIndent);
  }

}

// static props
StarShape.defaults = {
  backgroundColor: 'transparent',
  fill: 'yellow',
  stroke: '#aaa',
  strokeWidth: 4,

  radius: 32,
  sides: 5,
  sideIndent: 0.38,
};

// _defined
Shape.watchRenderProperty.call(StarShape, 'sides');
Shape.watchRenderProperty.call(StarShape, 'sideIndent');


/**
 * @class phina.display.PolygonShape
 * @extends phina.display.Shape
 */
class PolygonShape extends Shape {

  constructor(options) {
    // options = ({}).$safe(options || {}, phina.display.PolygonShape.defaults);
    options = $safe.call({}, options||{}, PolygonShape.defaults);

    super(options);

    this.setBoundingType('circle');
    this.sides = options.sides;
  }

  prerender(canvas) {
    canvas.polygon(0, 0, this.radius, this.sides);
  }

}

// static props
PolygonShape.defaults = {
  backgroundColor: 'transparent',
  fill: 'cyan',
  stroke: '#aaa',
  strokeWidth: 4,

  radius: 32,
  sides: 5,
};

// defined
Shape.watchRenderProperty.call(PolygonShape, 'sides');


/**
 * @class phina.display.HeartShape
 * @extends phina.display.Shape
 */
class HeartShape extends Shape {

  constructor(options) {
    // options = ({}).$safe(options || {}, phina.display.HeartShape.defaults);
    options = $safe.call({}, options||{}, HeartShape.defaults);

    super(options);

    this.setBoundingType('circle');
    this.cornerAngle = options.cornerAngle;
  }

  prerender(canvas) {
    canvas.heart(0, 0, this.radius, this.cornerAngle);
  }

}
// static props
HeartShape.defaults = {
  backgroundColor: 'transparent',
  fill: 'pink',
  stroke: '#aaa',
  strokeWidth: 4,

  radius: 32,
  cornerAngle: 45,
};

// defined
Shape.watchRenderProperty.call(HeartShape, 'cornerAngle');


/**
 * @class phina.display.PathShape
 * @extends phina.display.Shape
 */
class PathShape extends Shape {
  // paths: null,

  constructor(options) {
    // options = ({}).$safe(options || {}, phina.display.PathShape.defaults);
    options = $safe.call({}, options||{}, PathShape.defaults);

    super(options);
    this.paths = options.paths || [];
    this.lineJoin = options.lineJoin;
    this.lineCap = options.lineCap;
  }

  setPaths (paths) {
    this.paths = paths;
    this._dirtyDraw = true;
    return this;
  }

  clear () {
    this.paths.length = 0;
    this._dirtyDraw = true;
    return this;
  }

  addPaths (paths) {
    [].push.apply(this.paths, paths);
    this._dirtyDraw = true;
    return this;
  }

  addPath (x, y) {
    this.paths.push(phina.geom.Vector2(x, y));
    this._dirtyDraw = true;
    return this;
  }

  getPath (i) {
    return this.paths[i];
  }

  getPaths () {
    return this.paths;
  }

  changePath (i, x, y) {
    this.paths[i].set(x, y);
    this._dirtyDraw = true;
    return this;
  }

  calcCanvasSize () {
    var paths = this.paths;
    if (paths.length === 0) {
      return {
        width: this.padding * 2,
        height:this.padding * 2,
      };
    }
    var maxX = -Infinity;
    var maxY = -Infinity;
    var minX = Infinity;
    var minY = Infinity;

    for (var i = 0, len = paths.length; i < len; ++i) {
      var path = paths[i];
      if (maxX < path.x) { maxX = path.x; }
      if (minX > path.x) { minX = path.x; }
      if (maxY < path.y) { maxY = path.y; }
      if (minY > path.y) { minY = path.y; }
    }
    return {
      width: Math.max(Math.abs(maxX), Math.abs(minX)) * 2 + this.padding * 2,
      height: Math.max(Math.abs(maxY), Math.abs(minY)) * 2 + this.padding * 2,
    };
  }

  calcCanvasWidth () {
    return this.calcCanvasSize().width;
  }

  calcCanvasHeight () {
    return this.calcCanvasSize().height;
  }

  prerender (canvas) {
    var paths = this.paths;
    if (paths.length > 1) {
      var c = canvas.context;
      var p = paths[0];
      c.beginPath();
      c.moveTo(p.x, p.y);
      for (var i = 1, len = paths.length; i < len; ++i) {
        p = paths[i];
        c.lineTo(p.x, p.y);
      }
    }
  }

}

// static props
PathShape.defaults = {
  fill: false,
  backgroundColor: 'transparent',
};

/**
 * @class phina.display.Label
 * @extends phina.display.Shape
 */
class Label extends Shape {

  /**
   * @constructor
   */
  constructor(options) {
    if (typeof arguments[0] !== 'object') {
      options = { text: arguments[0], };
    }
    else {
      options = arguments[0];
    }

    options = $safe.call({}, options||{}, Label.defaults);
    // options = ({}).$safe(options, phina.display.Label.defaults);

    super(options);

    this.text = options.text;
    this.fontSize = options.fontSize;
    this.fontWeight = options.fontWeight;
    this.fontFamily = options.fontFamily;
    this.align = options.align;
    this.baseline = options.baseline;
    this.lineHeight = options.lineHeight;
  }

  calcCanvasWidth() {
    var width = 0;
    var canvas = this.canvas;
    canvas.context.font = this.font;
    this._lines.forEach(function(line) {
      var w = canvas.context.measureText(line).width;
      if (width < w) {
        width = w;
      }
    }, this);
    if (this.align !== 'center') width*=2;

    return width + this.padding*2;
  }

  calcCanvasHeight() {
    var height = this.fontSize * this._lines.length;
    if (this.baseline !== 'middle') height*=2;
    return height*this.lineHeight + this.padding*2;
  }

  prerender(canvas) {
    var context = canvas.context;
    context.font = this.font;
    context.textAlign = this.align;
    context.textBaseline = this.baseline;

    var lines = this._lines;
    this.lineSize = this.fontSize*this.lineHeight;
    this._offset = -Math.floor(lines.length/2)*this.lineSize;
    this._offset += ((lines.length+1)%2) * (this.lineSize/2);
  }

  renderFill(canvas) {
    var context = canvas.context;
    this._lines.forEach(function(line, i) {
      context.fillText(line, 0, i*this.lineSize+this._offset);
    }, this);
  }

  renderStroke(canvas) {
    var context = canvas.context;
    this._lines.forEach(function(line, i) {
      context.strokeText(line, 0, i*this.lineSize+this._offset);
    }, this);
  }

  /**
   * text
   */
  get text() { return this._text; }
  set text(v) {
    this._text = v;
    this._lines = (this.text + '').split('\n');
  }

  get font() {
    return format.call("{fontWeight} {fontSize}px {fontFamily}", this);
    // return "{fontWeight} {fontSize}px {fontFamily}".format(this);
  }

}

// static props
Label.defaults = {
  backgroundColor: 'transparent',

  fill: 'black',
  stroke: null,
  strokeWidth: 2,

  // 
  text: 'Hello, world!',
  // 
  fontSize: 32,
  fontWeight: '',
  fontFamily: "'HiraKakuProN-W3'", // Hiragino or Helvetica,
  // 
  align: 'center',
  baseline: 'middle',
  lineHeight: 1.2,
};

// defined
Shape.watchRenderProperty.call(Label, 'text');
Shape.watchRenderProperty.call(Label, 'fontSize');
Shape.watchRenderProperty.call(Label, 'fontWeight');
Shape.watchRenderProperty.call(Label, 'fontFamily');
Shape.watchRenderProperty.call(Label, 'align');
Shape.watchRenderProperty.call(Label, 'baseline');
Shape.watchRenderProperty.call(Label, 'lineHeight');

/**
 * @class phina.accessory.FrameAnimation
 * FrameAnimation
 * @extends phina.accessory.Accessory
 */
class FrameAnimation extends Accessory {

  /**
   * @constructor
   */
  constructor(ss) {
    super();

    this.ss = AssetManager.get('spritesheet', ss);
    this.paused = true;
    this.finished = false;
    this.fit = true;
  }

  update() {
    if (this.paused) return ;
    if (!this.currentAnimation) return ;

    if (this.finished) {
      this.finished = false;
      this.currentFrameIndex = 0;
      return ;
    }

    ++this.frame;
    if (this.frame%this.currentAnimation.frequency === 0) {
      ++this.currentFrameIndex;
      this._updateFrame();
    }
  }

  gotoAndPlay(name, keep) {
    keep = (keep !== undefined) ? keep : true;
    if (keep && name === this.currentAnimationName
             && this.currentFrameIndex < this.currentAnimation.frames.length
             && !this.paused) {
      return this;
    }
    this.currentAnimationName = name;
    this.frame = 0;
    this.currentFrameIndex = 0;
    this.currentAnimation = this.ss.getAnimation(name);
    this._updateFrame();

    this.paused = false;

    return this;
  }

  gotoAndStop(name) {
    this.currentAnimationName = name;
    this.frame = 0;
    this.currentFrameIndex = 0;
    this.currentAnimation = this.ss.getAnimation(name);
    this._updateFrame();

    this.paused = true;

    return this;
  }

  _updateFrame() {
    var anim = this.currentAnimation;
    if (anim) {
      if (this.currentFrameIndex >= anim.frames.length) {
        if (anim.next) {
          this.gotoAndPlay(anim.next);
          return ;
        }
        else {
          this.paused = true;
          this.finished = true;
          return ;
        }
      }
    }

    var index = anim.frames[this.currentFrameIndex];
    var frame = this.ss.getFrame(index);
    this.target.srcRect.set(frame.x, frame.y, frame.width, frame.height);

    if (this.fit) {
      this.target.width = frame.width;
      this.target.height = frame.height;
    }
  }

}

/**
 * @class phina.accessory.Draggable
 * Draggable
 * @extends phina.accessory.Accessory
 */
class Draggable extends Accessory {

  /**
   * @constructor
   */
  constructor(target) {
    super(target);

    this.initialPosition = new Vector2(0, 0);
    var self = this;

    this.on('attached', function() {
      this.target.setInteractive(true);

      this._dragging = false;

      this.target.on('pointstart', function(e) {
        if (Draggable._lock) return ;

        this._dragging = true;
        self.initialPosition.x = this.x;
        self.initialPosition.y = this.y;
        self.flare('dragstart');
        this.flare('dragstart');
      });
      this.target.on('pointmove', function(e) {
        if (!this._dragging) return ;

        this.x += e.pointer.dx;
        this.y += e.pointer.dy;
        self.flare('drag');
        this.flare('drag');
      });

      this.target.on('pointend', function(e) {
        if (!this._dragging) return ;

        this._dragging = false;
        self.flare('dragend');
        this.flare('dragend');
      });
    });
  }

  back(time, easing) {
    if (time) {
      var t = this.target;
      t.setInteractive(false);
      var tweener = new Tweener().attachTo(t);
      tweener
        .to({
          x: this.initialPosition.x,
          y: this.initialPosition.y,
        }, time, easing || 'easeOutElastic')
        .call(function() {
          tweener.remove();

          t.setInteractive(true);
          this.flare('backend');
        }, this);
    }
    else {
      this.target.x = this.initialPosition.x;
      this.target.y = this.initialPosition.y;
      this.flare('backend');
    }
  }

  enable() {
    this._enable = true;
  }

  static lock() {
    this._lock = true;
  }

  static unlock() {
    this._lock = false;
  }

}

Draggable._lock = false;

// 呼び出しで拡張する？ TweenerはElement側で定義
// phina.app.Element.prototype.getter('draggable', function() {
//   if (!this._draggable) {
//     this._draggable = phina.accessory.Draggable().attachTo(this);
//   }
//   return this._draggable;
// });

/**
 * @class phina.accessory.Flickable
 * Flickable
 * @extends phina.accessory.Accessory
 */
class Flickable extends Accessory {

  /**
   * @constructor
   */
  constructor(target) {
    super(target);

    this.initialPosition = new Vector2(0, 0);
    var self = this;

    this.friction = 0.9;
    this.velocity = new Vector2(0, 0);
    this.vertical = true;
    this.horizontal = true;

    this.cacheList = [];

    this.on('attached', function() {
      this.target.setInteractive(true);

      this.target.on('pointstart', function(e) {
        self.initialPosition.set(this.x, this.y);
        self.velocity.set(0, 0);
      });
      this.target.on('pointstay', function(e) {
        if (self.horizontal) {
          this.x += e.pointer.dx;
        }
        if (self.vertical) {
          this.y += e.pointer.dy;
        }

        if (self.cacheList.length > 3) self.cacheList.shift();
        self.cacheList.push(e.pointer.deltaPosition.clone());
      });

      this.target.on('pointend', function(e) {
        // 動きのある delta position を後ろから検索　
        var delta = self.cacheList.reverse().find(function(v) {
          return v.lengthSquared() > 10;
        });
        clear.call(self.cacheList);
        // self.cacheList.clear();

        if (delta) {
          self.velocity.x = delta.x;
          self.velocity.y = delta.y;

          self.flare('flickstart', {
            direction: delta.normalize(),
          });
        }
        else {
          self.flare('flickcancel');
        }

        // self.flare('flick');
        // self.flare('flickend');
      });
    });
  }

  update() {
    if (!this.target) return ;

    this.velocity.x *= this.friction;
    this.velocity.y *= this.friction;

    if (this.horizontal) {
      this.target.position.x += this.velocity.x;
    }
    if (this.vertical) {
      this.target.position.y += this.velocity.y;
    }
  }

  cancel() {
    this.target.x = this.initialPosition.x;
    this.target.y = this.initialPosition.y;
    this.velocity.set(0, 0);

    // TODO: 
    // this.setInteractive(false);
    // this.tweener.clear()
    //     .move(this.initialX, this.initialY, 500, "easeOutElastic")
    //     .call(function () {
    //         this.setInteractive(true);
    //         this.fire(tm.event.Event("backend"));
    //     }.bind(this));
  }

  enable() {
    this._enable = true;
  }

}

// TODO: Element側で呼ぶ？
// phina.app.Element.prototype.getter('flickable', function() {
//   if (!this._flickable) {
//     this._flickable = phina.accessory.Flickable().attachTo(this);
//   }
//   return this._flickable;
// });

/**
 * @class phina.accessory.Physical
 * 本物ではないので名前変えるかも
 * FakePhysical or MarioPhysical or LiePhysical
 * RetroPysical or PysicaLike
 * @extends phina.accessory.Accessory
 */
class Physical extends Accessory  {

  /**
   * @constructor
   */
  constructor(target) {
    super(target);

    this.velocity = new Vector2(0, 0);
    this.gravity = new Vector2(0, 0);

    this.friction = 1.0;
  }

  update() {
    var t = this.target;

    this.velocity.x *= this.friction;
    this.velocity.y *= this.friction;

    this.velocity.x += this.gravity.x;
    this.velocity.y += this.gravity.y;

    t.position.x += this.velocity.x;
    t.position.y += this.velocity.y;
  }

  force(x, y) {
    this.velocity.set(x, y);
    return this;
  }

  addForce(x, y) {
    this.velocity.x += x;
    this.velocity.y += y;
    return this;
  }

  setGravity(x, y) {
    this.gravity.set(x, y);
    return this;
  }

  setFriction(fr) {
    this.friction = fr;
    return this;
  }
}

// phina.app.Element.prototype.getter('physical', function() {
//   if (!this._physical) {
//     this._physical = phina.accessory.Physical().attachTo(this);
//   }
//   return this._physical;
// });

/**
 * @class phina.asset.Asset
 * @extends phina.util.EventDispatcher
 */
class Asset extends EventDispatcher {

  // serverError: false,
  // notFound: false,
  // loadError: false,

  /**
   * @constructor
   */
  constructor(src) {
    super();

    this.loaded = false;
    this.serverError = false;
    this.notFound = false;
    this.loadError = false;
  }

  load(src) {
    this.src = src;
    return new Flow(this._load.bind(this));
  }

  isLoaded() {
    return this.loaded;
  }

  _load(resolve) {
    var self = this;
    setTimeout(function() {
      self.loaded = true;
      resolve();
    }, 100);
  }

  // ロード失敗時にダミーをセットする
  loadDummy() { }

}

var getFirst = function(array) { return first.get.call(array); };
var getLast = function(array) { return last.get.call(array); };

/**
 * @class phina.asset.Texture
 * @extends phina.asset.Asset
 */
class Texture extends Asset {

  /**
   * @constructor
   */
  constructor() {
    super();
  }

  _load(resolve) {
    this.domElement = new Image();

    var isLocal = (location.protocol == 'file:');
    if ( !isLocal && !(/^data:/.test(this.src)) ) ;

    var self = this;
    this.domElement.onload = function(e) {
      self.loaded = true;
      resolve(self);
    };
    this.domElement.onerror = function(e) {
      console.error(format.call("[phina.js] not found `{0}`!", this.src));
      // console.error("[phina.js] not found `{0}`!".format(this.src));

      // var key = self.src.split('/').last.replace('.png', '').split('?').first.split('#').first;
      var key = getFirst(
        getFirst(
          getLast(
            self.src.split('/')
          ).replace('.png', '').split('?')
        ).split('#')
      );
      e.target.onerror = null;
      e.target.src = "http://dummyimage.com/128x128/444444/eeeeee&text=" + key;
    };

    this.domElement.src = this.src;
  }

  clone() {
    var image = this.domElement;
    var canvas = new Canvas().setSize(image.width, image.height);
    var t = new Texture();
    canvas.context.drawImage(image, 0, 0);
    t.domElement = canvas.domElement;
    return t;
  }

  transmit(color) {
    // imagaオブジェクトをゲット
    var image = this.domElement;
    // 新規canvas作成
    var canvas = new Canvas().setSize(image.width, image.height);
    // 新規canvasに描画
    canvas.context.drawImage(image, 0, 0);
    // canvas全体のイメージデータ配列をゲット
    var imageData = canvas.context.getImageData(0, 0, canvas.width, canvas.height);
    var data = imageData.data;
    // 透過色の指定がなければ左上のrgb値を抽出
    var r = (color !== undefined) ? color.r : data[0];
    var g = (color !== undefined) ? color.g : data[1];
    var b = (color !== undefined) ? color.b : data[2];
    // 配列を4要素目から4つ飛び（アルファ値）でループ
    // (3).step(data.length, 4, function(i) {
    step.call(3, data.length, 4, function(i) {
      // rgb値を逆算でゲットし、左上のrgbと比較
      if (data[i - 3] === r && data[i - 2] === g && data[i - 1] === b) {
        // 一致した場合はアルファ値を書き換える
        data[i] = 0;
      }
    });
    // 書き換えたイメージデータをcanvasに戻す
    canvas.context.putImageData(imageData, 0, 0);

    this.domElement = canvas.domElement;
  }

  filter(filters) {
    if (!filters) {
      return this;
    }
    if (!Array.isArray(filters)) {
      filters = [filters];
    }
    var image = this.domElement;
    var w = image.width;
    var h = image.height;
    var canvas = new Canvas().setSize(w, h);
    var imageData = null;

    canvas.context.drawImage(image, 0, 0);
    imageData = canvas.context.getImageData(0, 0, w, h);
    filters.forEach( function (fn) {
      if (typeof fn == 'function') {
        // h.times( function (y) {
        times.call(h, function (y) {
          // w.times( function (x) {
          times(w, function (x) {
            var i = (y * w + x) * 4;
            var pixel = imageData.data.slice(i, i + 4);
            fn(pixel, i, x, y, imageData);
          });
        });
      }
    });
    canvas.context.putImageData(imageData, 0, 0);
    this.domElement = canvas.domElement;
    return this;
  }

}

/**
 * @class phina.asset.Sound
 * @extends phina.asset.Asset
 */
class Sound extends Asset {
  
  // _loop: false,
  // _loopStart: 0,
  // _loopEnd: 0,
  // _playbackRate: 1,
  
  /**
   * @constructor
   */
  constructor() {
    super();
    this._loop = false;
    this._loopStart = 0;
    this._loopEnd = 0;
    this._playbackRate = 1;
    this.context = Sound.getAudioContext();
    this.gainNode = this.context.createGain();
  }

  play(when, offset, duration) {
    when = when ? when + this.context.currentTime : 0;
    offset = offset || 0;

    if (this.source) ;

    var source = this.source = this.context.createBufferSource();
    var buffer = source.buffer = this.buffer;
    source.loop = this._loop;
    source.loopStart = this._loopStart;
    source.loopEnd = this._loopEnd;
    source.playbackRate.value = this._playbackRate;

    // connect
    source.connect(this.gainNode);
    this.gainNode.connect(Sound.getMasterGain());
    // play
    if (duration !== undefined) {
      source.start(when, offset, duration);
    }
    else {
      source.start(when, offset);
    }
    
    // check play end
    source.addEventListener('ended', function(){
      this.flare('ended');
    }.bind(this));

    return this;
  }

  stop() {
    // stop
    if (this.source) {
      // stop すると source.endedも発火する
      this.source.stop && this.source.stop(0);
      this.source = null;
      this.flare('stop');
    }

    return this;
  }

  pause() {
    this.source.playbackRate.value = 0;
    this.flare('pause');
    return this;
  }

  resume() {
    this.source.playbackRate.value = this._playbackRate;
    this.flare('resume');
    return this;
  }

  // 試してみるなう
  _oscillator(type) {
    var context = this.context;

    var oscillator = context.createOscillator();

    // Sine wave is type = “sine”
    // Square wave is type = “square”
    // Sawtooth wave is type = “saw”
    // Triangle wave is type = “triangle”
    // Custom wave is type = “custom” 
    oscillator.type = type || 'sine';

    this.source = oscillator;
    // connect
    this.source.connect(context.destination);
  }

  loadFromBuffer(buffer) {
    var context = this.context;

    // set default buffer
    if (!buffer) {
      buffer = context.createBuffer( 1, 44100, 44100 );
      var channel = buffer.getChannelData(0);

      for( var i=0; i < channel.length; i++ )
      {
        channel[i] = Math.sin( i / 100 * Math.PI);
      }
    }

    // source
    this.buffer = buffer;
  }

  setLoop(loop) {
    this.loop = loop;
    return this;
  }

  setLoopStart(loopStart) {
    this.loopStart = loopStart;
    return this;
  }

  setLoopEnd(loopEnd) {
    this.loopEnd = loopEnd;
    return this;
  }
  
  setPlaybackRate(playbackRate) {
    this.playbackRate = playbackRate;
    return this;
  }

  _load(r) {
    if (/^data:/.test(this.src)) {
      this._loadFromURIScheme(r);
    }
    else {
      this._loadFromFile(r);
    }
  }

  _loadFromFile(r) {
    var self = this;

    var xml = new XMLHttpRequest();
    xml.open('GET', this.src);
    xml.onreadystatechange = function() {
      if (xml.readyState === 4) {
        if ([200, 201, 0].indexOf(xml.status) !== -1) {

          // 音楽バイナリーデータ
          var data = xml.response;

          // webaudio 用に変換
          self.context.decodeAudioData(data, function(buffer) {
            self.loadFromBuffer(buffer);
            r(self);
          }, function() {
            console.warn("音声ファイルのデコードに失敗しました。(" + self.src + ")");
            r(self);
            self.flare('decodeerror');
          });

        } else if (xml.status === 404) {
          // not found

          self.loadError = true;
          self.notFound= true;
          r(self);
          self.flare('loaderror');
          self.flare('notfound');

        } else {
          // サーバーエラー

          self.loadError = true;
          self.serverError = true;
          r(self);
          self.flare('loaderror');
          self.flare('servererror');
        }
      }
    };

    xml.responseType = 'arraybuffer';

    xml.send(null);
  }

  _loadFromURIScheme(r) {
    var byteString = '';
    if (this.src.split(',')[0].indexOf('base64') >= 0) {
      byteString = atob(this.src.split(',')[1]);
    }
    else {
      byteString = unescape(this.src.split(',')[1]);
    }

    var self = this;
    var len = byteString.length;
    var buffer = new Uint8Array(len);

    for (var i=0; i<len; ++i) {
      buffer[i] = byteString.charCodeAt(i);
    }

    // webaudio 用に変換
    this.context.decodeAudioData(buffer.buffer, function(buffer) {
      self.loadFromBuffer(buffer);
      r(self);
    }, function() {
      console.warn("音声ファイルのデコードに失敗しました。(" + self.src + ")");
      self.loaded = true;
      r(self);
    });
  }

  loadDummy() {
    this.loadFromBuffer();
  }

  get volume()  { return this.gainNode.gain.value; }
  set volume(v) { this.gainNode.gain.value = v; }

  get loop()  { return this._loop; }
  set loop(v) {
    this._loop = v;
    if (this.source) this.source._loop = v;
  }

  get loopStart()  { return this._loopStart; }
  set loopStart(v) {
    this._loopStart = v;
    if (this.source) this.source._loopStart = v;
  }

  get loopEnd()  { return this._loopEnd; }
  set loopEnd(v) {
    this._loopEnd = v;
    if (this.source) this.source._loopEnd = v;
  }

  get playbackRate() { return this._playbackRate; }
  set playbackRate(v) {
    this._playbackRate = v;
    if(this.source && this.source.playbackRate.value !== 0){
      this.source.playbackRate.value = v;
    }
  }

  static getMasterGain() {
    if(!this._masterGain) {
      var context = this.getAudioContext();
      this._masterGain = context.createGain();
      this._masterGain.connect(context.destination);
    }
    return this._masterGain;
  }

  static getAudioContext() {
    if (!Support.webAudio) return null;

    if (this.context) return this.context;

    var g = phina$1.global;
    var context = null;

    if (g.AudioContext) {
      context = new AudioContext();
    }
    else if (g.webkitAudioContext) {
      context = new webkitAudioContext();
    }
    else if (g.mozAudioContext) {
      context = new mozAudioContext();
    }

    this.context = context;

    return context;
  }

}

// defined
accessor.call(Sound, 'volume', {
// this.accessor('volume', {
  get: function() {
    return this.getMasterGain().gain.value;
  },
  set: function(v) {
    this.getMasterGain().gain.value = v;
  },
});

/**
 * @class phina.asset.Script
 * @extends phina.asset.Asset
 */
class Script extends Asset {

  /**
   * @constructor
   */
  constructor() {
    super();
  }

  _load(resolve) {
    var self = this;
    this.domElement = document.createElement('script');
    this.domElement.src = this.src;

    this.domElement.onload = function() {
      resolve(self);
    }.bind(this);

    document.body.appendChild(this.domElement);
  }

}

/**
 * @class phina.asset.SpriteSheet
 * @extends phina.asset.Asset
 */
class SpriteSheet extends Asset {

  /**
   * @constructor
   */
  constructor() {
    super();
  }

  setup(params) {
    this._setupFrame(params.frame);
    this._setupAnim(params.animations);
    return this;
  }

  _load(resolve) {

    var self = this;

    if (typeof this.src === 'string') {
      var xml = new XMLHttpRequest();
      xml.open('GET', this.src);
      xml.onreadystatechange = function() {
        if (xml.readyState === 4) {
          if ([200, 201, 0].indexOf(xml.status) !== -1) {
            var data = xml.responseText;
            var json = JSON.parse(data);

            self.setup(json);

            resolve(self);
          }
        }
      };

      xml.send(null);
    }
    else {
      this.setup(this.src);
      resolve(self);
    }

  }

  _setupFrame(frame) {
    var frames = this.frames = [];
    var unitWidth = frame.width;
    var unitHeight = frame.height;

    var count = frame.rows * frame.cols;
    this.frame = count;

    times.call(count, function(i) {
    // (count).times(function(i) {
      var xIndex = i%frame.cols;
      var yIndex = (i/frame.cols)|0;

      frames.push({
        x: xIndex*unitWidth,
        y: yIndex*unitHeight,
        width: unitWidth,
        height: unitHeight,
      });
    });
  }

  _setupAnim(animations) {
    this.animations = {};

    // デフォルトアニメーション
    this.animations["default"] = {
        frames: range.call([], 0, this.frame),
        // frames: [].range(0, this.frame),
        next: "default",
        frequency: 1,
    };

    forIn.call(animations, function(key, value) {
    // animations.forIn(function(key, value) {
      var anim = value;

      if (anim instanceof Array) {
        this.animations[key] = {
          frames: range.call([], anim[0], anim[1]),
          // frames: [].range(anim[0], anim[1]),
          next: anim[2],
          frequency: anim[3] || 1,
        };
      }
      else {
        this.animations[key] = {
          frames: anim.frames,
          next: anim.next,
          frequency: anim.frequency || 1
        };
      }

    }, this);
  }

  /**
   * フレームを取得
   */
  getFrame(index) {
    return this.frames[index];
  }

  getAnimation(name) {
    name = (name !== undefined) ? name : "default";
    return this.animations[name];
  }

}

/**
 * @class phina.asset.Font
 * @extends phina.asset.Asset
 */
class Font extends Asset {

  /**
   * @constructor
   */
  constructor() {
    super();
    this.fontName = null;
  }

  load(path) {
    this.src = path;

    var reg = /(.*)(?:\.([^.]+$))/;
    var key = this.fontName || last.call(path.match(reg)[1].split('/'));    //フォント名指定が無い場合はpathの拡張子前を使用
    // var key = this.fontName || path.match(reg)[1].split('/').last;    //フォント名指定が無い場合はpathの拡張子前を使用
    var type = path.match(reg)[2];
    var format$1 = "unknown";
    switch (type) {
      case "ttf":
        format$1 = "truetype"; break;
      case "otf":
        format$1 = "opentype"; break;
      case "woff":
        format$1 = "woff"; break;
      case "woff2":
        format$1 = "woff2"; break;
      default:
        console.warn("サポートしていないフォント形式です。(" + path + ")");
    }
    this.format = format$1;
    this.fontName = key;

    if (format$1 !== "unknown") {
      var text = format.call("@font-face { font-family: '{0}'; src: url({1}) format('{2}'); }", key, path, format$1);
      // var text = "@font-face { font-family: '{0}'; src: url({1}) format('{2}'); }".format(key, path, format);
      var e = document.querySelector("head");
      var fontFaceStyleElement = document.createElement("style");
      if (fontFaceStyleElement.innerText) {
        fontFaceStyleElement.innerText = text;
      } else {
        fontFaceStyleElement.textContent = text;
      }
      e.appendChild(fontFaceStyleElement);
    }

    return new Flow(this._load.bind(this));
  }

  _load(resolve) {
    if (this.format !== "unknown") {
      this._checkLoaded(this.fontName, function() {
        this.loaded = true;
        resolve(this);
      }.bind(this));
    } else {
      this.loaded = true;
      resolve(this);
    }
  }

  _checkLoaded (font, callback) {
    var canvas = new Canvas();
    var DEFAULT_FONT = canvas.context.font.split(' ')[1];
    canvas.context.font = '40px ' + DEFAULT_FONT;

    var checkText = "1234567890-^\\qwertyuiop@[asdfghjkl;:]zxcvbnm,./\!\"#$%&'()=~|QWERTYUIOP`{ASDFGHJKL+*}ZXCVBNM<>?_１２３４５６７８９０－＾￥ｑｗｅｒｔｙｕｉｏｐａｓｄｆｇｈｊｋｌｚｘｃｖｂｎｍ，．あいうかさたなをん時は金なり";
    // 特殊文字対応
    checkText += String.fromCharCode("0xf04b");

    var before = canvas.context.measureText(checkText).width;
    canvas.context.font = '40px ' + font + ', ' + DEFAULT_FONT;

    var timeoutCount = 30;
    var checkLoadFont = function () {
      var after = canvas.context.measureText(checkText).width;
      if (after !== before) {
        setTimeout(function() {
          callback && callback();
        }, 100);
      } else {
        if (--timeoutCount > 0) {
          setTimeout(checkLoadFont, 100);
        }
        else {
          callback && callback();
          console.warn("timeout font loading");
        }
      }
    };
    checkLoadFont();
  }

  setFontName(name) {
    if (this.loaded) {
      console.warn("フォント名はLoad前にのみ設定が出来ます(" + name + ")");
      return this;
    }
    this.fontName = name;
    
    return this;
  }

  getFontName() {
    return this.fontName;
  }

}

/**
 * @class phina.asset.File
 * @extends phina.asset.Asset
 */
class File extends Asset {

  /**
   * @constructor
   */
  constructor() {
    super();
  }

  _load(resolve) {

    var params = {};

    if (typeof this.src === 'string') {
      $extend.call(params, {
      // params.$extend({
        path: this.src,
      });
    }
    else if (typeof this.src === 'object') {
      $extend.call(params, this.src);
      // params.$extend(this.src);
    }

    $safe.call(params, {
    // params.$safe({
      path: '',
      dataType: 'text',
    });

    // load
    var self = this;
    var xml = new XMLHttpRequest();
    xml.open('GET', params.path);
    xml.onreadystatechange = function() {
      if (xml.readyState === 4) {
        if ([200, 201, 0].indexOf(xml.status) !== -1) {
          var data = xml.responseText;

          if (params.dataType === 'json') {
            data = JSON.parse(data);
          } else if (params.dataType === 'xml') {
            data = (new DOMParser()).parseFromString(data, "text/xml");
          }
          self.dataType = params.dataType;

          self.data = data;
          resolve(self);
        }
      }
    };

    xml.send(null);
    // this.domElement = new Image();
    // this.domElement.src = this.src;

    // var self = this;
    // this.domElement.onload = function() {
    //   self.loaded = true;
    //   resolve(self);
    // };
  }

}

/**
 * @class phina.asset.AssetLoader
 * @extends phina.util.EventDispatcher
 */
class AssetLoader extends EventDispatcher {

  /**
   * @constructor
   */
  constructor(params) {
    super();

    // params = (params || {}).$safe({
    //   cache: true,
    // });
    params = $safe.call(params||{}, { cache: true });

    this.assets = {};
    this.cache = params.cache;
  }

  load(params) {
    var self = this;
    var flows = [];

    var counter = 0;
    var length = 0;
    forIn.call(params, function(type, assets) {
    // params.forIn(function(type, assets) {
      length += Object.keys(assets).length;
    });
    
    forIn.call(params, function(type, assets) {
    // params.forIn(function(type, assets) {
      forIn.call(assets, function(key, value) {
      // assets.forIn(function(key, value) {
        var func = AssetLoader.assetLoadFunctions[type];
        var flow = func(key, value);
        flow.then(function(asset) {
          if (self.cache) {
            AssetManager.set(type, key, asset);
          }
          self.flare('progress', {
            key: key,
            asset: asset,
            progress: (++counter/length),
          });
        });
        flows.push(flow);
      });
    });


    if (self.cache) {

      self.on('progress', function(e) {
        if (e.progress >= 1.0) {
          // load失敗時、対策

          forIn.call(params, function(type, assets) {
          // params.forIn(function(type, assets) {
            forIn.call(assets, function(key, value) {
            // assets.forIn(function(key, value) {
              var asset = AssetManager.get(type, key);
              if (asset.loadError) {
                var dummy = AssetManager.get(type, 'dummy');
                if (dummy) {
                  if (dummy.loadError) {
                    dummy.loadDummy();
                    dummy.loadError = false;
                  }
                  AssetManager.set(type, key, dummy);
                } else {
                  asset.loadDummy();
                }
              }
            });
          });
        }
      });
    }
    return Flow.all(flows).then(function(args) {
      self.flare('load');
    });
  }

  static register(key, func) {
    this.assetLoadFunctions[key] = func;
    return this;
  }

}

AssetLoader.assetLoadFunctions = {
  image: function(key, path) {
    var texture = new Texture();
    var flow = texture.load(path);
    return flow;
  },
  sound: function(key, path) {
    var sound = new Sound();
    var flow = sound.load(path);
    return flow;
  },
  spritesheet: function(key, path) {
    var ss = new SpriteSheet();
    var flow = ss.load(path);
    return flow;
  },
  script: function(key, path) {
    var script = new Script();
    return script.load(path);
  },
  font: function(key, path) {
    var font = new Font();
    font.setFontName(key);
    return font.load(path);
  },
  json: function(key, path) {
    var text = new File();
    return text.load({
      path: path,
      dataType: "json",
    });
  },
  xml: function(key, path) {
    var text = new File();
    return text.load({
      path: path,
      dataType: "xml",
    });
  },
  text: function(key, path) {
    var text = new File();
    return text.load(path);
  }
};

/**
 * @class phina.asset.SoundManager
 * ### Ref
 * - http://evolve.reintroducing.com/_source/classes/as3/SoundManager/SoundManager.html
 * - https://github.com/nicklockwood/SoundManager
 */
class SoundManager {
  // volume: 0.8,
  // musicVolume: 0.8,
  // muteFlag: false,
  // currentMusic: null,

  static play(name, when, offset, duration) {
    var sound = AssetManager.get('sound', name);

    sound.volume = this.getVolume();
    sound.play(when, offset, duration);

    return sound;
  }

  static stop() {
    // TODO: 
  }
  static pause() {
    // TODO: 
  }
  static fade() {
    // TODO: 
  }
  static setVolume(volume) {
    this.volume = volume;
  }
  static getVolume() {
    return this.volume;
  }

  /*
   * ミュート
   */
  static mute() {
    this.muteFlag = true;
    if (this.currentMusic) {
      this.currentMusic.volume = 0;
    }
    return this;
  }
  /*
   * ミュート解除
   */
  static unmute() {
    this.muteFlag = false;
    if (this.currentMusic) {
      this.currentMusic.volume = this.getVolumeMusic();
    }
    return this;
  }
  static isMute() {
    return this.muteFlag;
  }

  static playMusic(name, fadeTime, loop, when, offset, duration) {
    loop = (loop !== undefined) ? loop : true;

    if (this.currentMusic) {
      this.stopMusic(fadeTime);
    }

    var music = AssetManager.get('sound', name);

    music.setLoop(loop);
    music.play(when, offset, duration);

    if (fadeTime > 0) {
      var count = 32;
      var counter = 0;
      var unitTime = fadeTime/count;
      var volume = this.getVolumeMusic();

      music.volume = 0;
      var id = setInterval(function() {
        counter += 1;
        var rate = counter/count;
        music.volume = rate*volume;

        if (rate >= 1) {
          clearInterval(id);
          return false;
        }

        return true;
      }, unitTime);
    }
    else {
      music.volume = this.getVolumeMusic();
    }

    this.currentMusic = music;

    return this.currentMusic;
  }

  static stopMusic(fadeTime) {
    if (!this.currentMusic) { return ; }

    var music = this.currentMusic;
    this.currentMusic = null;

    if (fadeTime > 0) {
      var count = 32;
      var counter = 0;
      var unitTime = fadeTime/count;
      var volume = this.getVolumeMusic();

      music.volume = 0;
      var id = setInterval(function() {
        counter += 1;
        var rate = counter/count;
        music.volume = volume*(1-rate);

        if (rate >= 1) {
          music.stop();
          clearInterval(id);
          return false;
        }

        return true;
      }, unitTime);
    }
    else {
      music.stop();
    }
  }

  /*
   * 音楽を一時停止
   */
  static pauseMusic() {
    if (!this.currentMusic) { return ; }
    this.currentMusic.pause();
  }
  /*
   * 音楽を再開
   */
  static resumeMusic() {
    if (!this.currentMusic) { return ; }
    this.currentMusic.resume();
  }
  /*
   * 音楽のボリュームを設定
   */
  static setVolumeMusic(volume) {
    this.musicVolume = volume;
    if (this.currentMusic) {
      this.currentMusic.volume = volume;
    }

    return this;
  }
  /*
   * 音楽のボリュームを取得
   */
  static getVolumeMusic() {
    return this.musicVolume;
  }

}

// static props
SoundManager.volume = 0.8;
SoundManager.musicVolume = 0.8;
SoundManager.muteFlag = false;
SoundManager.currentMusic = null;

/**
 * @class phina.ui.Button
 * Button
 * @extends phina.display.Shape
 */
class Button extends Shape {

  /**
   * @constructor
   */
  constructor(options) {
    options = $safe.call(options || {}, Button.defaults);
    // options = (options || {}).$safe(phina.ui.Button.defaults);
    super(options);

    this.cornerRadius = options.cornerRadius;
    this.text         = options.text;
    this.fontColor    = options.fontColor;
    this.fontSize     = options.fontSize;
    this.fontWeight     = options.fontWeight;
    this.fontFamily   = options.fontFamily;

    this.setInteractive(true);
    this.on('pointend', function() {
      this.flare('push');
    });
  }

  prerender(canvas) {
    canvas.roundRect(-this.width/2, -this.height/2, this.width, this.height, this.cornerRadius);
  }

  postrender(canvas) {
    var context = canvas.context;
    // text
    var font = format.call("{fontWeight} {fontSize}px {fontFamily}", this);
    // var font = "{fontWeight} {fontSize}px {fontFamily}".format(this);
    context.font = font;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillStyle = this.fontColor;
    context.fillText(this.text, 0, 0);
  }

}

// static props
Button.defaults = {
  width: 200,
  height: 80,
  backgroundColor: 'transparent',
  fill: 'hsl(200, 80%, 60%)',
  stroke: null,

  cornerRadius: 8,
  text: 'Hello',
  fontColor: 'white',
  fontSize: 32,
  fontWeight: '',
  fontFamily: "'HiraKakuProN-W3'", // Hiragino or Helvetica,
};

// defined
Shape.watchRenderProperty.call(Button, 'cornerRadius');
Shape.watchRenderProperty.call(Button, 'text');
Shape.watchRenderProperty.call(Button, 'fontColor');
Shape.watchRenderProperty.call(Button, 'fontSize');
Shape.watchRenderProperty.call(Button, 'fontFamily');

/**
 * @class phina.ui.Gauge
 * @extends phina.display.Shape
 */
class Gauge extends Shape {

  constructor(options) {
    options = $safe.call({}, options || {}, Gauge.defaults);
    // options = ({}).$safe(options || {}, phina.ui.Gauge.defaults);
    
    super(options);

    this._value = (options.value !== undefined) ? options.value : options.maxValue;
    this.maxValue = options.maxValue;
    this.gaugeColor = options.gaugeColor;
    this.cornerRadius = options.cornerRadius;

    this.visualValue = (options.value !== undefined) ? options.value : options.maxValue;
    this.animation = options.animation;
    this.animationTime = 1*1000;
  }

  /**
   * 満タンかをチェック
   */
  isFull() {
    return this.value === this.maxValue;
  }

  /**
   * 空っぽかをチェック
   */
  isEmpty() {
    return this.value === 0;
  }

  setValue(value) {
    value = clamp(value, 0, this.maxValue);
    // value = Math.clamp(value, 0, this.maxValue);

    // end when now value equal value of argument
    if (this.value === value) return ;

    // fire value change event
    this.flare('change');

    this._value = value;

    if (this.animation) {
      var range = Math.abs(this.visualValue-value);
      var time = (range/this.maxValue)*this.animationTime;

      this.tweener.ontween = function() {
        this._dirtyDraw = true;
      }.bind(this);
      this.tweener
        .clear()
        .to({'visualValue': value}, time)
        .call(function() {
          this.flare('changed');
          if (this.isEmpty()) {
            this.flare('empty');
          }
          else if (this.isFull()) {
            this.flare('full');
          }
        }, this);
    }
    else {
      this.visualValue = value;
      this.flare('changed');
      if (this.isEmpty()) {
        this.flare('empty');
      }
      else if (this.isFull()) {
        this.flare('full');
      }
    }
  }

  getRate() {
    var rate = this.visualValue/this.maxValue;
    return rate;
  }

  prerender(canvas) {
    canvas.roundRect(-this.width/2, -this.height/2, this.width, this.height, this.cornerRadius);
  }

  postrender(canvas) {
    var rate = this.getRate();
    canvas.context.fillStyle = this.gaugeColor;
    canvas.context.save();
    canvas.context.clip();
    canvas.fillRect(-this.width/2, -this.height/2, this.width*rate, this.height);
    canvas.context.restore();
  }

  get value() {
    return this._value;
  }
  set value(v) {
    this.setValue(v);
  }

}

// static props
Gauge.defaults = {
  width: 256,
  height: 32,
  backgroundColor: 'transparent',
  fill: 'white',
  stroke: '#aaa',
  strokeWidth: 4,
  maxValue: 100,
  gaugeColor: '#44f',
  cornerRadius: 0,
  animation: true
};

// defined
Shape.watchRenderProperty.call(Gauge, 'value');
Shape.watchRenderProperty.call(Gauge, 'maxValue');
Shape.watchRenderProperty.call(Gauge, 'gaugeColor');
Shape.watchRenderProperty.call(Gauge, 'cornerRadius');


/**
 * @class phina.ui.CircleGauge
 * @extends phina.ui.Gauge
 */
class CircleGauge extends Gauge {

  constructor(options) {
    options = $safe.call(options || {}, {
    // options = (options || {}).$safe({
      backgroundColor: 'transparent',
      fill: '#aaa',
      stroke: '#222',

      radius: 64,
      anticlockwise: true,
      showPercentage: false, // TODO
    });

    super(options);

    this.setBoundingType('circle');

    this.radius = options.radius;
    this.anticlockwise = options.anticlockwise;
    this.showPercentage = options.showPercentage;
  }

  prerender(canvas) {
    var rate = this.getRate();
    var end = (Math.PI*2)*rate;
    this.startAngle = 0;
    this.endAngle = end;

    this.canvas.rotate(-Math.PI*0.5);
    this.canvas.scale(1, -1);
  }

  renderFill(canvas) {
    canvas.fillPie(0, 0, this.radius, this.startAngle, this.endAngle);
  }

  renderStroke(canvas) {
    canvas.strokeArc(0, 0, this.radius, this.startAngle, this.endAngle);
  }

  postrender() {
    // if (this.showPercentage) {
    //   // TODO:
    //   var left = Math.max(0, this.limit-this.time);
    //   this.label.text = Math.ceil(left/1000)+'';
    // }
  }

}

var textWidthCache = {};

/**
 * @class phina.ui.LabelArea
 * @extends phina.display.Label
 */
class LabelArea extends Label {

  // _lineUpdate: true,

  constructor(options) {
    options = $safe.call({}, options, LabelArea.defaults);
    // options = {}.$safe(options, LabelArea.defaults);
    super(options);

    this._lineUpdate = true;
    this.verticalAlign = options.verticalAlign;
    this.scroll = options.scroll || new Vector2();
    this.scrollX = options.scrollX;
    this.scrollY = options.scrollY;
  }

  calcCanvasWidth () {
    return this.width + this.padding * 2;
  }

  calcCanvasHeight () {
    return this.height + this.padding * 2;
  }
  getOffsetY () {
    if (typeof this.verticalAlign === 'number') {
      return this.verticalAlign;
    }
    return LabelArea.verticalAlignToOffsetMap[this.verticalAlign] || 0;
  }

  getOffsetX () {
    return LabelArea.alignToOffsetMap[this.align] || 0;
  }

  getTextWidthCache () {
    var cache = textWidthCache[this.font];
    return cache || (textWidthCache[this.font] = {});
  }
  
  spliceLines (lines) {
    var rowWidth = this.width;
    var context = this.canvas.context;
    context.font = this.font;

    var cache = this.getTextWidthCache();

    // update cache
    each$1.call(this._text, function(ch) {
    // this._text.each(function(ch) {
      if (!cache[ch]) {
        cache[ch] = context.measureText(ch).width;
      }
    });
    
    var localLines = [];
    lines.forEach(function(line) {
      
      var str = '';
      var totalWidth = 0;

      // はみ出ていたら強制的に改行する
      each$1.call(line, function(ch) {
      // line.each(function(ch) {
        var w = cache[ch];

        if ((totalWidth+w) > rowWidth) {
          localLines.push(str);
          str = '';
          totalWidth = 0;
        }

        str += ch;
        totalWidth += w;
      });

      // 残りを push する
      localLines.push(str);

    });
    

    return localLines;
  }
  
  getLines () {
    if (this._lineUpdate === false) {
      return this._lines;
    }
    this._lineUpdate = false;

    var lines = (this.text + '').split('\n');
    if (this.width < 1) {
      this._lines = lines;
    }
    else {
      this._lines = this.spliceLines(lines);
    }

    return this._lines;
  }

  prerender (canvas) {
    var context = canvas.context;
    context.font = this.font;
    context.textAlign = this.align;
    context.textBaseline = this.baseline;

    var text = this.text + '';
    var lines = this.getLines();
    var length = lines.length;
    var width = this.width;
    var height = this.height;

    var fontSize = this.fontSize;
    var lineSize = fontSize * this.lineHeight;
    var offsetX = this.getOffsetX() * width;
    var offsetY = this.getOffsetY();
    if (offsetY === 0) {
      offsetY = -Math.floor(length / 2) * lineSize;
      offsetY += ((length + 1) % 2) * (lineSize / 2);
    }
    else if (offsetY < 0) {
      offsetY *= height;
    }
    else {
      offsetY = offsetY * height - length * lineSize + lineSize;
    }

    offsetY -= this.scrollY;
    offsetX -= this.scrollX;
    var start = (offsetY + height / 2) / -lineSize | 0;
    if (start < 0) { start = 0; }

    var end = (height / 2 - offsetY + lineSize * 2) / lineSize | 0;
    lines = lines.filter(function(line, i) {
      return start <= i && end > i;
    });

    this.lines = lines;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    this.lineSize = lineSize;
    this.start = start;
  }

  renderFill (canvas) {
    var context = canvas.context;
    var offsetX = this.offsetX;
    var offsetY = this.offsetY;
    var lineSize = this.lineSize;
    var start = this.start;
    this.lines.forEach(function(line, i) {
      context.fillText(line, offsetX, (start + i) * lineSize + offsetY);
    }, this);
  }

  renderStroke (canvas) {
    var context = canvas.context;
    var offsetX = this.offsetX;
    var offsetY = this.offsetY;
    var lineSize = this.lineSize;
    var start = this.start;
    this.lines.forEach(function(line, i) {
      context.strokeText(line, offsetX, (start + i) * lineSize + offsetY);
    }, this);
  }

  get text() {
    return this._text;
  }
  set text(v) {
    this._text = v;
  }

  get scrollX() {
    return this.scroll.x;
  }
  set scrollX(v) {
    this.scroll.x = v;
  }

  get scrollY() {
    return this.scroll.y;
  }
  set scrollY(v) {
    this.scroll.y = v;
  }
  
  // _static: {
  //   defaults: {
  //     verticalAlign: 'top',
  //     align: 'left',
  //     baseline: 'top',
  //     width: 320,
  //     height: 320,
  //     scrollX: 0,
  //     scrollY: 0,
  //   },
  //   alignToOffsetMap: {
  //     start: -0.5,
  //     left: -0.5,
  //     center: 0,
  //     end: 0.5,
  //     right: 0.5,
  //   },

  //   verticalAlignToOffsetMap: {
  //     top: -0.5,
  //     center: 0,
  //     middle: 0,
  //     bottom: 0.5,
  //   },
  // },

  // _defined: function() {
  //   var func = function(newVal, oldVal) {
  //     if((this._lineUpdate === false) && (newVal !== oldVal)){
  //       this._lineUpdate = true;
  //     }
  //   };

  //   [
  //     'text',
  //     'width',
  //     'fontSize',
  //     'fontWeight',
  //     'fontFamily'
  //   ].forEach(function(key) {
  //     this.$watch(key, func);
  //   }, this.prototype);

  //   phina.display.Shape.watchRenderProperties.call(this ,[
  //     'verticalAlign',
  //     'text',
  //     'scroll',
  //     'scrollX',
  //     'scrollY'
  //   ]);
  // },


  enableScroll() {
    //   this.setInteractive(true);
    //   var physical = phina.accessory.Physical();
    //   physical.attachTo(this);
    //   physical.friction = 0.8;
    //   var lastForce = 0;
    //   var lastMove = 0;
    //   this.on('pointstart', function(e){
    //     lastForce = physical.velocity.y;
    //     lastMove = 0;
    //     physical.force(0, 0);
    //   });
    //   this.on('pointmove', function(e){
    //     var p = e.pointer.deltaPosition;
    //     lastMove = p.y;
    //     this.scrollY += lastMove;
    //   });

    //   this.on('pointend', function(e){
    //     physical.force(0, lastForce + lastMove);
    //   });

    return this;
  }

}

// static props
LabelArea.defaults = {
  verticalAlign: 'top',
  align: 'left',
  baseline: 'top',
  width: 320,
  height: 320,
  scrollX: 0,
  scrollY: 0,
};
LabelArea.alignToOffsetMap = {
  start: -0.5,
  left: -0.5,
  center: 0,
  end: 0.5,
  right: 0.5,
};
LabelArea.verticalAlignToOffsetMap = {
  top: -0.5,
  center: 0,
  middle: 0,
  bottom: 0.5,
}

// defined
;
Shape.watchRenderProperties.call(LabelArea ,[
  'verticalAlign',
  'text',
  'scroll',
  'scrollX',
  'scrollY'
]);

/**
 * @class phina.effect.Wave
 * Button
 * @extends phina.display.CircleShape
 */
class Wave extends CircleShape {

  /**
   * @constructor
   */
  constructor(options) {
    options = $safe.call(options || {}, {
    // options = (options || {}).$safe({
      fill: 'white',
      stroke: false,
    });

    super(options);

    var tweener = new Tweener().attachTo(this);
    tweener
      .to({scaleX:2, scaleY:2, alpha:0}, 500)
      .call(function() {
        this.remove();
      }, this);
  }
}

/**
 * @class phina.social.Twitter
 * # Twitter の共有リンクを生成するクラス
 * Twitter の共有リンクの URL を生成してくれるクラスです。
 */
class Twitter {

  /**
   * @constructor
   * 
   * コンストラクタは存在しますがインスタンスメンバはありません。
   */
  constructor() {}

  /**
   * @method phina.social.Twitter.createURL
   * Twitterの共有リンクを生成します。引数にオブジェクトを渡すことで様々なパラメーターを設定出来ます。引数のオブジェクトは {@link #phina.social.Twitter.defaults} で安全拡張されます。
   * 
   * ### Example
   *     phina.social.Twitter.createURL(); // => http://twitter.com/intent/tweet?text=Hello%2C%20world!&hashtags=javascript%2Cphina&url={現在のURL}
   * 
   *     phina.social.Twitter.createURL({
   *       text: 'This is text',
   *       hashtags: 'hashtag1,hashtag2',
   *       url: 'http://phinajs.com'
   *     }); // => http://twitter.com/intent/tweet?text=This%20is%20text&hashtags=hashtag1%2Chashtag2&url=http%3A%2F%2Fphinajs.com
   * 
   *     phina.social.Twitter.createURL({
   *       text: 'This is text',
   *       hashtags: 'hashtag1,hashtag2',
   *       url: 'http://phinajs.com',
   *       other: 'This is other'//設定項目は適当に増やせる
   *     }); // => http://twitter.com/intent/tweet?text=This%20is%20text&hashtags=hashtag1%2Chashtag2&url=http%3A%2F%2Fphinajs.com&other=This%20is%20other
   * 
   *     phina.social.Twitter.createURL({
   *       url: 'http://phinajs.com'
   *     }); // => http://twitter.com/intent/tweet?url=http%3A%2F%2Fphinajs.com&text=Hello%2C%20world!&hashtags=javascript%2Cphina
   * 
   * @param {Object}
   * @return {String} Twitter の共有リンク
   * @static
   */
  static createURL (options) {
    options = $safe.call(options || {}, Twitter.defaults);
    // options = (options || {}).$safe(this.defaults);

    var queries = [];
    var euc = encodeURIComponent;
    forIn.call(options, function(key, value) {
    // options.forIn(function(key, value) {
      var str = key + '=' + euc(value);
      queries.push(str);
    });

    var url = format.call('{baseURL}/{type}?{query}', {
    // var url = '{baseURL}/{type}?{query}'.format({
      baseURL: this.baseURL,
      // type: options.type,
      type: 'tweet',
      query: queries.join('&'),
    });

    return url;
  }

}


/**
 * @property {String} [phina.social.Twitter.baseURL = 'https://twitter.com/intent']
 * Twitter の共有リンクのベースとなる URL です。
 * 
 * @static
 */
Twitter.baseURL = 'https://twitter.com/intent';

/**
 * @property {Object} phina.social.Twitter.defaults
 * デフォルト値を格納しているオブジェクトです。{@link #phina.social.Twitter.defaults.text}, {@link #phina.social.Twitter.defaults.hashtags}, {@link #phina.social.Twitter.defaults.url} を内包しています。
 * 
 * @static
 */
Twitter.defaults = {
  // type: 'tweet',

  /**
   * @property {String} [phina.social.Twitter.defaults.text = 'Hello, World']
   * デフォルトでツイートに含まれる文字列です。
   * 
   * @static
   */
  text: 'Hello, world!',

  // screen_name: 'phi_jp',

  /**
   * @property {String} [phina.social.Twitter.defaults.hashtags = 'javascript, phina_js']
   * デフォルトでツイートに含まれるハッシュタグです。
   * 
   * @static
   */
  hashtags: 'javascript,phina_js',

  // url: 'http://github.com/phi-jp/phina.js',

  /**
   * @property {String} [phina.social.Twitter.defaults.url = phina.global.location && phina.global.location.href]
   * デフォルトでツイートに含まれる URL です。
   * 
   * @static
   */
  url: phina$1.global.location && phina$1.global.location.href

  // via: 'phi_jp',
};

/**
 * @class phina.game.ManagerScene
 * @extends phina.app.Scene
 */
class ManagerScene extends Scene {

  /**
   * @constructor
   */
  constructor(params) {
    super();

    this.setScenes(params.scenes);

    this.on("enter", function() {
      this.gotoScene(params.startLabel || 0);
    }.bind(this));

    this.on("resume", this.onnext.bind(this));

    this.commonArguments = {};
  }

  /**
   * scenes をセット
   */
  setScenes(scenes) {
    this.scenes = scenes;
    this.sceneIndex = 0;

    return this;
  }

  /**
   * Sceneクラスをインスタンス化して返す
   * 
   * @param  {[type]} data  [description]
   * @return {[type]}       [description]
   */
  _instantiateScene(data, args) {
    // Scene初期化引数
    var initArguments = $extend.call({}, data.arguments, args);
    // var initArguments = {}.$extend(data.arguments, args);

    var scene, klass;
    if (typeof data.className === 'string') {
      // phina.define、あるいはglobal(window)に直接定義されたクラスの文字列
      klass = phina$1.using(data.className);
      if (typeof klass !== 'function') {
        klass = phina$1.using('phina.game.' + data.className);
      }
      // scene = klass.call(null, initArguments);
    } else if (typeof data.className === 'function') {
      // 関数の場合、純粋なclassと見なす
      // scene = new data.className(initArguments);
      klass = data.className;
    }
    scene = new klass(initArguments);

    if (!scene.nextLabel) {
      scene.nextLabel = data.nextLabel;
    }
    if (!scene.nextArguments) {
      scene.nextArguments = data.nextArguments;
    }

    return scene
  }

  /**
   * Sceneクラスをインスタンス化してappにreplaceSceneさせる
   * 
   * @param  {string|number} label シーンの対応ラベル
   * @param  {any} [args] Sceneにわたす引数がある場合に指定
   * @return {this}
   */
  replaceScene(label, args) {
    var index = (typeof label == 'string') ? this.labelToIndex(label) : label||0;
    if (!this.scenes[index]) {
      console.error(format.call('phina.js error: `{0}` に対応するシーンがありません.', label));
    }
    var scene = this._instantiateScene(this.scenes[index], args);
    this.app.replaceScene(scene);
    this.sceneIndex = index;

    return this;
  }

  /**
   * index(or label) のシーンへ飛ぶ
   * replaceSceneとの違いはapp.replaceSceneではなく、app.pushSceneを実行する点
   */
  gotoScene(label, args) {
    var index = (typeof label == 'string') ? this.labelToIndex(label) : label||0;
    if (!this.scenes[index]) {
      console.error(format.call('phina.js error: `{0}` に対応するシーンがありません.', label));
    }
    var scene = this._instantiateScene(this.scenes[index], args);
    this.app.pushScene(scene);
    this.sceneIndex = index;

    return this;
  }

  /**
   * 次のシーンへ飛ぶ
   */
  gotoNext(args) {
    var data = this.scenes[this.sceneIndex];
    var nextIndex = null;

    // 次のラベルが設定されていた場合
    if (data.nextLabel) {
        nextIndex = this.labelToIndex(data.nextLabel);
    }
    // 次のシーンに遷移
    else if (this.sceneIndex+1 < this.scenes.length) {
        nextIndex = this.sceneIndex+1;
    }

    if (nextIndex !== null) {
        this.gotoScene(nextIndex, args);
    }
    else {
        this.flare("finish");
    }

    return this;
  }

  /**
   * シーンインデックスを取得
   */
  getCurrentIndex() {
    return this.sceneIndex;
  }

  /**
   * シーンラベルを取得
   */
  getCurrentLabel() {
    return this.scenes[this.sceneIndex].label;
  }

  /**
   * ラベルからインデックスに変換
   */
  labelToIndex(label) {
    var data = this.scenes.filter(function(data) {
      return data.label == label;
    })[0];

    return this.scenes.indexOf(data);
  }

  /**
   * インデックスからラベルに変換
   */
  indexToLabel(index) {
    return this.scenes[index].label;
  }

  onnext(e) {
    var nextLabel = e.prevScene.nextLabel;
    var nextArguments = e.prevScene.nextArguments;
    if (nextLabel) {
      this.gotoScene(nextLabel, nextArguments);
    }
    else {
      this.gotoNext(nextArguments);
    }
  }

}

/**
 * @class phina.game.LoadingScene
 * @extends phina.display.DisplayScene
 */
class LoadingScene extends DisplayScene {

  /**
   * @constructor
   */
  constructor(options) {
    options = $safe.call({}, options, LoadingScene.defaults);
    // options = ({}).$safe(options, phina.game.LoadingScene.defaults);
    super(options);

    this.gauge = new Gauge({
      value: 0,
      width: this.width,
      height: 12,
      fill: '#aaa',
      stroke: false,
      gaugeColor: 'hsla(200, 100%, 80%, 0.8)',
      padding: 0,
    }).addChildTo(this)
      .setPosition(
        this.gridX.center(),
        0,
      )
      .setOrigin(
        0.5, 
        0
      );
    // this.fromJSON({
    //   children: {
    //     gauge: {
    //       className: 'phina.ui.Gauge',
    //       arguments: {
    //         value: 0,
    //         width: this.width,
    //         height: 12,
    //         fill: '#aaa',
    //         stroke: false,
    //         gaugeColor: 'hsla(200, 100%, 80%, 0.8)',
    //         padding: 0,
    //       },
    //       x: this.gridX.center(),
    //       y: 0,
    //       originY: 0,
    //     }
    //   }
    // });

    var loader = new AssetLoader();

    if (options.lie) {
      this.gauge.animationTime = 10*1000;
      this.gauge.value = 90;

      loader.onload = function() {
        this.gauge.animationTime = 0;
        this.gauge.value = 100;
      }.bind(this);
    }
    else {
      this.gauge.animationTime = 100;
      loader.onprogress = function(e) {
        this.gauge.value = e.progress * 100;
      }.bind(this);
    }

    this.gauge.onfull = function() {
      if (options.exitType === 'auto') {
        this.app.popScene();
      }
      this.flare('loaded');
    }.bind(this);

    loader.load(options.assets);
  }

}

LoadingScene.defaults = {
  exitType: 'auto',
  lie: false,
};

/**
 * @class phina.game.SplashScene
 * @extends phina.display.DisplayScene
 */
class SplashScene extends DisplayScene {

  constructor(options) {
    var defaults = SplashScene.defaults;
    super(options);

    var texture = new Texture();
    texture.load(defaults.imageURL).then(function() {
      this._init();
    }.bind(this));
    this.texture = texture;
  }

  _init() {
    this.sprite = new Sprite(this.texture).addChildTo(this);

    this.sprite.setPosition(this.gridX.center(), this.gridY.center());
    this.sprite.alpha = 0;

    this.sprite.tweener
      .clear()
      .to({alpha:1}, 500, 'easeOutCubic')
      .wait(1000)
      .to({alpha:0}, 500, 'easeOutCubic')
      .wait(250)
      .call(function() {
        this.exit();
      }, this)
      ;
  }

}

SplashScene.defaults = {
  imageURL: 'http://cdn.rawgit.com/phi-jp/phina.js/develop/logo.png',
};

/**
 * @class phina.game.TitleScene
 * @extends phina.display.DisplayScene
 */
class TitleScene extends DisplayScene {

  /**
   * @constructor
   */
  constructor(params) {
    params = $safe.call({}, params, TitleScene.defaults);
    // params = ({}).$safe(params, phina.game.TitleScene.defaults);
    super(params);

    this.backgroundColor = params.backgroundColor;

    this.fromJSON({
      children: {
        titleLabel: {
          className: Label,
          // className: 'phina.display.Label',
          arguments: {
            text: params.title,
            fill: params.fontColor,
            stroke: false,
            fontSize: 64,
          },
          x: this.gridX.center(),
          y: this.gridY.span(4),
        }
      }
    });

    if (params.exitType === 'touch') {
      this.fromJSON({
        children: {
          touchLabel: {
            className: Label,
            // className: 'phina.display.Label',
            arguments: {
              text: "TOUCH START",
              fill: params.fontColor,
              stroke: false,
              fontSize: 32,
            },
            x: this.gridX.center(),
            y: this.gridY.span(12),
          },
        },
      });

      this.on('pointend', function() {
        this.exit();
      });
    }
  }

}

// static props
TitleScene.defaults = {
  title: 'phina.js games',
  message: '',

  fontColor: 'white',
  backgroundColor: 'hsl(200, 80%, 64%)',
  backgroundImage: '',

  exitType: 'touch',
};

/**
 * @class phina.game.PauseScene
 * @extends phina.display.DisplayScene
 */
class PauseScene extends DisplayScene {

  /**
   * @constructor
   */
  constructor(params) {
    params = $safe.call({}, params, PauseScene.defaults);
    // params = ({}).$safe(params, phina.game.PauseScene.defaults);
    super(params);

    this.backgroundColor = params.backgroundColor;

    this.fromJSON({
      children: {
        text: {
          className: Label,
          // className: 'phina.display.Label',
          arguments: {
            text: 'Pause',
            fill: params.fontColor,
            stroke: null,
            fontSize: 48,
          },
          x: this.gridX.center(),
          y: this.gridY.center(),
        },
      }
    });

    if (params.exitType === 'touch') {
      this.on('pointend', function() {
        this.exit();
      });
    }
  }

}

PauseScene.defaults =  {
  fontColor: 'white',
  backgroundColor: 'hsla(0, 0%, 0%, 0.85)',

  exitType: 'touch',
};

/**
 * @class phina.game.ResultScene
 * @extends phina.display.DisplayScene
 */
class ResultScene extends DisplayScene {

  /**
   * @constructor
   */
  constructor(params) {
    params = $safe.call({}, params, ResultScene.defaults);
    // params = ({}).$safe(params, phina.game.ResultScene.defaults);
    super(params);

    var message = format.call(params.message, params);
    // var message = params.message.format(params);

    this.backgroundColor = params.backgroundColor;

    this.fromJSON({
      children: {
        scoreText: {
          className: Label,
          // className: 'phina.display.Label',
          arguments: {
            text: 'score',
            fill: params.fontColor,
            stroke: null,
            fontSize: 48,
          },
          x: this.gridX.span(8),
          y: this.gridY.span(4),
        },
        scoreLabel: {
          className: Label,
          // className: 'phina.display.Label',
          arguments: {
            text: params.score+'',
            fill: params.fontColor,
            stroke: null,
            fontSize: 72,
          },
          x: this.gridX.span(8),
          y: this.gridY.span(6),
        },

        messageLabel: {
          className: Label,
          // className: 'phina.display.Label',
          arguments: {
            text: message,
            fill: params.fontColor,
            stroke: null,
            fontSize: 32,
          },
          x: this.gridX.center(),
          y: this.gridY.span(9),
        },

        shareButton: {
          className: Button,
          // className: 'phina.ui.Button',
          arguments: [{
            text: '★',
            width: 128,
            height: 128,
            fontColor: params.fontColor,
            fontSize: 50,
            cornerRadius: 64,
            fill: 'rgba(240, 240, 240, 0.5)',
            // stroke: '#aaa',
            // strokeWidth: 2,
          }],
          x: this.gridX.center(-3),
          y: this.gridY.span(12),
        },
        playButton: {
          className: Button,
          // className: 'phina.ui.Button',
          arguments: [{
            text: '▶',
            width: 128,
            height: 128,
            fontColor: params.fontColor,
            fontSize: 50,
            cornerRadius: 64,
            fill: 'rgba(240, 240, 240, 0.5)',
            // stroke: '#aaa',
            // strokeWidth: 2,
          }],
          x: this.gridX.center(3),
          y: this.gridY.span(12),

          interactive: true,
          onpush: function() {
            this.exit();
          }.bind(this),
        },
      }
    });

    if (params.exitType === 'touch') {
      this.on('pointend', function() {
        this.exit();
      });
    }

    this.shareButton.onclick = function() {
      var text = format.call('Score: {0}\n{1}', params.score, message);
      // var text = 'Score: {0}\n{1}'.format(params.score, message);
      var url = Twitter.createURL({
        text: text,
        hashtags: params.hashtags,
        url: params.url,
      });
      window.open(url, 'share window', 'width=480, height=320');
    };
  }

}

ResultScene.defaults = {
  score: 16,

  message: 'this is phina.js project.',
  hashtags: 'phina_js,game,javascript',
  url: phina$1.global.location && phina$1.global.location.href,

  fontColor: 'white',
  backgroundColor: 'hsl(200, 80%, 64%)',
  backgroundImage: '',
};

/**
 * デフォルトのain class
 */
class DefaultMainScene extends DisplayScene {
  constructor(options) {
    super(options);
    console.log('This is MainScene');
  }
}
/**
 * クラスがphina.defineによって定義されているかどうかを返します
 * 
 * @param {string} className クラス名。phina.game[className]で定義されているかも調べる
 * @return {string|boolean} 定義されてればそのままクラス名文字列を返す
 */
function isGameClassDefined(className) {
  if (
    typeof phina$1.using(className) === 'function'
    || typeof phina$1.using('phina.game.' + className) === 'function'
  ) {
    return className
  }
  return false;
}

/**
 * @class phina.game.GameApp
 * @extends phina.display.CanvasApp
 */
class GameApp extends CanvasApp {

  constructor(options) {
    options = $safe.call(options || {}, {
    // options = (options || {}).$safe({
      startLabel: 'title',
    });
    super(options);

    var startLabel = options.startLabel || 'title';

    var scenes = options.scenes || [
      {
        className: isGameClassDefined("SplashScene") || SplashScene,
        label: 'splash',
        nextLabel: 'title',
      },
      {
        className: isGameClassDefined("TitleScene") || TitleScene,
        label: 'title',
        nextLabel: 'main',
      },
      {
        className: isGameClassDefined("MainScene") || DefaultMainScene,
        label: 'main',
        nextLabel: 'result',
      },
      {
        className: isGameClassDefined("ResultScene") || ResultScene,
        label: 'result',
        nextLabel: 'title',
      },
    ];

    scenes = each.call(scenes, function(s) {
      s.arguments = s.arguments || options;
    });

    var scene = new ManagerScene({
      startLabel: startLabel,
      scenes: scenes,
    });

    if (options.assets) {
      // ローディング：esm版では独自のLoadingSceneはオプションで渡せるようにする

      var loadingOptions = $extend.call({}, options, {
      // var loadingOptions = ({}).$extend(options, {
        exitType: '',
      });
      // グローバル定義のLoadingSceneを探す（従来）
      // -> なければオプションをチェック 
      // -> これもなければデフォルトのLoadingSceneを使う
      var definedLoadingClass = phina$1.using("LoadingScene") || phina$1.using("phina.game.LoadingScene");
      var loading = (typeof definedLoadingClass === 'function') 
        ? definedLoadingClass(loadingOptions)
        : (options.loadingScene != null)
          ? new options.loadingScene(loadingOptions) 
          : new LoadingScene(loadingOptions)
      ;
      this.replaceScene(loading);

      loading.onloaded = function() {
        this.replaceScene(scene);
        if (options.debug) {
          this._enableDebugger();
        }
      }.bind(this);
    }
    else {
      this.replaceScene(scene);
      if (options.debug) {
        this._enableDebugger();
      }
    }

    // 自動でポーズする
    // esm版では独自のポーズシーンはオプションで渡す
    // 引数が渡せないのは元から
    if (options.autoPause) {
      this.on('blur', function() {
        var definedPauseScene = phina$1.using("phina.game.PauseScene");
        var pauseScene = (typeof definedPauseScene === 'function') 
          ? definedPauseScene() 
          : (options.pauseScene) 
            ? new options.pauseScene() 
            : new PauseScene();
        this.pushScene(pauseScene);
      });
    }
  }

  _enableDebugger() {
    if (this.gui) return ;

    this.enableDatGUI(function(gui) {
      var f = gui.addFolder('scenes');
      var funcs = {};
      this.rootScene.scenes.forEach(function(scene) {
      // this.rootScene.scenes.each(function(scene) {
        funcs[scene.label] = function() {
          this.rootScene.replaceScene(scene.label);
          console.log(this._scenes.length);
        }.bind(this);
        return scene;
      }, this);

      forIn.call(funcs, function(key, value) {
      // funcs.forIn(function(key, value) {
        f.add(funcs, key);
      });
      f.open();

      this.gui = gui;
    }.bind(this));
  }

}

/**
 * @class phina.game.CountScene
 * @extends phina.display.DisplayScene
 */
class CountScene extends DisplayScene {

  /**
   * @constructor
   */
  constructor(options) {
    super(options);

    options = $safe.call(options || {}, CountScene.defaults);
    // options = (options || {}).$safe(phina.game.CountScene.defaults);

    this.backgroundColor = options.backgroundColor;

    this.fromJSON({
      children: {
        label: {
          className: Label,
          // className: 'phina.display.Label',
          arguments: {
            fill: options.fontColor,
            fontSize: options.fontSize,
            stroke: false,
          },
          x: this.gridX.center(),
          y: this.gridY.center(),
        },
      }
    });

    if (options.count instanceof Array) {
      this.countList = clone.call(options.count).reverse();
      // this.countList = options.count.clone().reverse();
    }
    else {
      this.countList = range.call([], 1, options.count+1);
      // this.countList = Array.range(1, options.count+1);
    }
    this.counter = this.countList.length;
    this.exitType = options.exitType;

    this._updateCount();
  }

  _updateCount() {
    var endFlag = this.counter <= 0;
    var index = --this.counter;

    this.label.text = this.countList[index];

    this.label.scale.set(1, 1);
    this.label.tweener
      .clear()
      .to({
        scaleX: 1,
        scaleY: 1,
        alpha: 1,
      }, 250)
      .wait(500)
      .to({
        scaleX: 1.5,
        scaleY: 1.5,
        alpha: 0.0
      }, 250)
      .call(function() {
        if (this.counter <= 0) {
          this.flare('finish');
          if (this.exitType === 'auto') {
            this.app.popScene();
          }
        }
        else {
          this._updateCount();
        }
      }, this);
  }

}

CountScene.defaults = {
  count: 3,

  width: 640,
  height: 960,

  fontColor: 'white',
  fontSize: 164,
  backgroundColor: 'rgba(50, 50, 50, 1)',

  exitType: 'auto',
};




/***/ }),

/***/ "./src/assets/AssetCatalog.js":
/*!************************************!*
  !*** ./src/assets/AssetCatalog.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssetCatalog": () => /* binding */ AssetCatalog
/* harmony export */ });
const AssetCatalog = {
  image: {
    "tomapiyo": "./assets/images/tomapiyo.png",
    "background": "./assets/images/background.png",
    "tube1": "./assets/images/tube1.png",
    "tube2": "./assets/images/tube2.png",
  }
};

/***/ }),

/***/ "./src/elements/CountDown.js":
/*!***********************************!*
  !*** ./src/elements/CountDown.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountDown": () => /* binding */ CountDown
/* harmony export */ });
/* harmony import */ var phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phina.js/build/phina.esm */ "./node_modules/phina.js/build/phina.esm.js");
/* harmony import */ var _extensions_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../extensions/Utils */ "./src/extensions/Utils.js");
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameObject */ "./src/elements/GameObject.js");




class CountDown extends _GameObject__WEBPACK_IMPORTED_MODULE_2__.GameObject {
  constructor(options) {
    options = _extensions_Utils__WEBPACK_IMPORTED_MODULE_1__.$safe.call({}, options, { startCount: 3, interval: 1000, startScale: 1, endScale: 0.5 });
    super(options);

    this.count = options.startCount;

    const labelOptions = {
      text: `${this.count}`,
      fill: 'white',
      stroke: 'black',
      strokeWidth: 6,
      fontSize: 128,
    }
    this.label = new phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__.Label(labelOptions)
      .setScale(options.startScale)
      .addChildTo(this);

    this.label.tweener.clear();
    _extensions_Utils__WEBPACK_IMPORTED_MODULE_1__.times.call(options.startCount, i => {
      this.label.tweener
        .to({ scaleX: options.endScale, scaleY: options.endScale, alpha: 0 }, options.interval )
        .call(() => {
          this.count--;
          if (this.count > 0) {
            this.label.text = `${this.count}`;
          } else {
            this.label.text = "START";
          }
        })
        .wait(100)
        .call(() => {
          this.label.alpha = 1.0;
          this.label.setScale(options.startScale);
        })
    });
    this.label.tweener
      .wait(1000)
      .call(() => this.flare('countdown_end'))
      .to({ alpha: 0 }, options.interval / 2 );
  }
}


/***/ }),

/***/ "./src/elements/GameObject.js":
/*!************************************!*
  !*** ./src/elements/GameObject.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameObject": () => /* binding */ GameObject
/* harmony export */ });
/* harmony import */ var phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phina.js/build/phina.esm */ "./node_modules/phina.js/build/phina.esm.js");


class GameObject extends phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__.DisplayElement {
  constructor(options) {
    super(options);
    this.time = 0;
    this.on('enterframe', () => this.time++);
  }
}


/***/ }),

/***/ "./src/elements/Player.js":
/*!********************************!*
  !*** ./src/elements/Player.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => /* binding */ Player
/* harmony export */ });
/* harmony import */ var phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phina.js/build/phina.esm */ "./node_modules/phina.js/build/phina.esm.js");
/* harmony import */ var _extensions_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../extensions/Utils */ "./src/extensions/Utils.js");
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameObject */ "./src/elements/GameObject.js");




class Player extends _GameObject__WEBPACK_IMPORTED_MODULE_2__.GameObject {
  constructor(options) {
    options = _extensions_Utils__WEBPACK_IMPORTED_MODULE_1__.$safe.call({}, options, { width: 32, height: 32 });
    super(options);
    this.sprite = new phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__.Sprite("tomapiyo", 64, 64)
      .addChildTo(this)
      .setFrameIndex(1);

    // this.collision = new RectangleShape({ width: 16, height: 16 }).addChildTo(this);
    // this.collision.alpha = 0.5;

    this.animationSeq = [1, 2, 3];
    this.animationSeqIndex = 0;

    this.velocity = new phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__.Vector2(0, 0);
    this.jumpPower = 10;

    this.isStart = false;
    this.isDead = false;

    this.on('start', () => {
      this.isStart = true;
      this.jump(15);
    });

    this.on('dead', () => {
      this.off('dead');
      this.isDead = true;
    });
  }

  update(app) {
    if (!this.isDead && this.time % 5 == 0) {
      this.animationSeqIndex++;
      if (this.animationSeqIndex == this.animationSeq.length) this.animationSeqIndex = 0;
      const idx = this.animationSeq[this.animationSeqIndex];
      this.sprite.setFrameIndex(idx);
    }

    if (!this.isStart) return;

    if (this.isDead) {
      this.sprite.setFrameIndex(4);
    } else if (app.pointer.getPointingStart() || app.keyboard.getKey("space")) {
      this.jump();
    }

    this.position.add(this.velocity);
    this.velocity.y += 0.49;

    if (this.y > 640) {
      this.flare("dead");
    }
    if (this.y > 800) {
      this.flare("dead_end");
    }

    this.time++;
  }

  jump(power) {
    power = power || this.jumpPower;
    if (this.velocity.y < 0) return;
    this.velocity.y = -this.jumpPower;
    return this;
  }
}


/***/ }),

/***/ "./src/elements/Score.js":
/*!*******************************!*
  !*** ./src/elements/Score.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Score": () => /* binding */ Score
/* harmony export */ });
/* harmony import */ var phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phina.js/build/phina.esm */ "./node_modules/phina.js/build/phina.esm.js");
/* harmony import */ var _extensions_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../extensions/Utils */ "./src/extensions/Utils.js");
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameObject */ "./src/elements/GameObject.js");




class Score extends _GameObject__WEBPACK_IMPORTED_MODULE_2__.GameObject {
  constructor(options) {
    options = _extensions_Utils__WEBPACK_IMPORTED_MODULE_1__.$safe.call({}, options, { initialScore: 0 });
    super(options);

    this._score = options.initialScore;

    const labelOptions = {
      text: `${this._score}`,
      fill: 'white',
      stroke: 'black',
      strokeWidth: 4,
      fontSize: 64,
    }
    this.label = new phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__.Label(labelOptions).addChildTo(this);
  }

  add(value) {
    this._score += value;
    this.label.text = `${this._score}`;
  }

  set(value) {
    this._score = value;
    this.label.text = `${this._score}`;
  }
}


/***/ }),

/***/ "./src/elements/Tube.js":
/*!******************************!*
  !*** ./src/elements/Tube.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tube": () => /* binding */ Tube
/* harmony export */ });
/* harmony import */ var phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phina.js/build/phina.esm */ "./node_modules/phina.js/build/phina.esm.js");
/* harmony import */ var _extensions_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../extensions/Utils */ "./src/extensions/Utils.js");
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameObject */ "./src/elements/GameObject.js");




class Tube extends _GameObject__WEBPACK_IMPORTED_MODULE_2__.GameObject {
  constructor(options) {
    options = _extensions_Utils__WEBPACK_IMPORTED_MODULE_1__.$safe.call({}, options, {
      width: 52,
      height: 320,
      isBottom: false,
      point: 1,
    });
    super(options);
    this.sprite = new phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__.Sprite(`tube${options.isBottom ? "2" : "1"}`).addChildTo(this);
    this._point = options.point;
  }

  get point() { return this._point; }
  set point(value) { this._point = value; }
}


/***/ }),

/***/ "./src/extensions/Utils.js":
/*!*********************************!*
  !*** ./src/extensions/Utils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$extend": () => /* binding */ $extend,
/* harmony export */   "$safe": () => /* binding */ $safe,
/* harmony export */   "times": () => /* binding */ times,
/* harmony export */   "randint": () => /* binding */ randint
/* harmony export */ });
/**
 * @method  $extend
 * 他のライブラリと競合しちゃうので extend -> $extend としました
 */
function $extend() {
  Array.prototype.forEach.call(arguments, function(source) {
    for (var property in source) {
      this[property] = source[property];
    }
  }, this);
  return this;
}
  
/**
 * @method  $safe
 * 安全拡張
 * 上書きしない
 */
function $safe(source) {
  Array.prototype.forEach.call(arguments, function(source) {
    for (var property in source) {
      if (this[property] === undefined) this[property] = source[property];
    }
  }, this);
  return this;
}

/**
 * @method times
 * 0 から自分自身の数-1まで、カウンタをインクリメントしながら関数を繰り返し実行します。
 *
 * ### Example
 *     arr = [];
 *     (5).times(function(i){
 *       arr.push(i);
 *     }); // => [0, 1, 2, 3, 4]
 *
 * @param {Function} fn コールバック関数
 * @param {Object} [self=this] 関数内で this として参照される値。デフォルトは自分自身。
 */
function times(fn, self) {
  self = self || this;
  for (var i=0; i<this; ++i) {
    fn.call(self, i, this);
  }
  return this;
}

/**
 * @method randint
 * 指定された範囲内でランダムな整数値を返します。
 * 
 * @param {Number} min 範囲の最小値
 * @param {Number} max 範囲の最大値
 * @return {Number} ランダムな整数値
 */
function randint(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phina.js/build/phina.esm */ "./node_modules/phina.js/build/phina.esm.js");
/* harmony import */ var _src_scenes_SceneFlow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../src/scenes/SceneFlow */ "./src/scenes/SceneFlow.js");



console.log('Version: 0.0.1 (Date 2020-12-25, Commit #3392a31)');

if (true) {
  console.log('##### Development mode #####');
}

phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__.DisplayScene.defaults.width = 960;
phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__.DisplayScene.defaults.height = 640;

phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__.phina.main(()=> {
  const appOption = {
    width: 960,
    height: 640,
    fps: 60,
  };
  const app = new phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__.CanvasApp(appOption);
  app.replaceScene(new _src_scenes_SceneFlow__WEBPACK_IMPORTED_MODULE_1__.SceneFlow());
  app.run();
});


/***/ }),

/***/ "./src/scenes/GameTitleScene.js":
/*!**************************************!*
  !*** ./src/scenes/GameTitleScene.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameTitleScene": () => /* binding */ GameTitleScene
/* harmony export */ });
/* harmony import */ var phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phina.js/build/phina.esm */ "./node_modules/phina.js/build/phina.esm.js");
/* harmony import */ var _extensions_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../extensions/Utils */ "./src/extensions/Utils.js");



class GameTitleScene extends phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__.DisplayScene {

  constructor(params) {
    params = _extensions_Utils__WEBPACK_IMPORTED_MODULE_1__.$safe.call({}, params, GameTitleScene.defaults);
    super(params);

    this.backgroundColor = params.backgroundColor;

    this.fromJSON({
      children: {
        titleLabel: {
          className: phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__.Label,
          arguments: {
            text: params.title,
            fill: params.fontColor,
            stroke: false,
            fontSize: 64,
          },
          x: this.gridX.center(),
          y: this.gridY.span(4),
        }
      }
    });

    if (params.exitType === 'touch') {
      this.fromJSON({
        children: {
          touchLabel: {
            className: phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__.Label,
            arguments: {
              text: "TOUCH START",
              fill: params.fontColor,
              stroke: false,
              fontSize: 32,
            },
            x: this.gridX.center(),
            y: this.gridY.span(12),
          },
        },
      });
    }
  }

  update(app) {
    if (app.pointer.getPointingStart()) {
      this.exit();
    }
  }

}

GameTitleScene.defaults = {
  title: 'phina.js games',
  message: '',

  fontColor: 'white',
  backgroundColor: 'hsl(200, 80%, 64%)',
  backgroundImage: '',

  exitType: 'touch',
};


/***/ }),

/***/ "./src/scenes/MainScene.js":
/*!*********************************!*
  !*** ./src/scenes/MainScene.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainScene": () => /* binding */ MainScene
/* harmony export */ });
/* harmony import */ var phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phina.js/build/phina.esm */ "./node_modules/phina.js/build/phina.esm.js");
/* harmony import */ var _elements_CountDown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements/CountDown */ "./src/elements/CountDown.js");
/* harmony import */ var _elements_Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements/Player */ "./src/elements/Player.js");
/* harmony import */ var _elements_Score__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elements/Score */ "./src/elements/Score.js");
/* harmony import */ var _elements_Tube__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../elements/Tube */ "./src/elements/Tube.js");
/* harmony import */ var _extensions_Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../extensions/Utils */ "./src/extensions/Utils.js");







class MainScene extends phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__.DisplayScene {

  constructor(options) {
    options = _extensions_Utils__WEBPACK_IMPORTED_MODULE_5__.$safe.call({}, options, { backgroundColor: 'black' });
    super(options);

    this.isStart = false;
    this.isGameOver = false;
    this.tubes = [];
    this.time = 0;

    //バックグラウンド
    this.bg = new phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__.Sprite("background").addChildTo(this).setOrigin(0, 0);

    this.background = new phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__.DisplayElement().addChildTo(this);
    this.foreground = new phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__.DisplayElement().addChildTo(this);

    //プレイヤー
    this.player = new _elements_Player__WEBPACK_IMPORTED_MODULE_2__.Player()
      .setPosition(this.width / 4, this.height / 2)
      .addChildTo(this.foreground);

    this.player.one('dead_end', () => {
      this.gameover();
      this.time = 0;
    });

    //スコア表示
    this.score = new _elements_Score__WEBPACK_IMPORTED_MODULE_3__.Score()
    .setPosition(this.width / 2, 60)
    .addChildTo(this.foreground);

    //カウントダウン
    this.countDown = new _elements_CountDown__WEBPACK_IMPORTED_MODULE_1__.CountDown()
      .setPosition(this.width / 2, this.height / 2)
      .addChildTo(this);

    this.countDown.on('countdown_end', () => {
      this.isStart = true;
      this.player.flare('start');
    });
  }

  update(app) {
    if (!this.isStart) return;

    if (!this.isGameOver) {
      if(this.time % 120 == 0) this.enterTube();

      this.tubes.forEach(tube => {
        tube.x -= 2;
        if (tube.point > 0 && tube.x < this.width / 4) {
          this.score.add(tube.point);
          tube.point = 0;
        }
        if (tube.x < -50) {
          tube.remove();
        }
        if (phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__.Collision.testRectRect(this.player, tube)) {
          this.player.flare('dead');
        }
      });
    } else {
      if (this.time > 120 && (app.pointer.getPointingStart() || app.keyboard.getKey("space"))) {
        this.exit();
      }
    }

    this.time++;
  }

  enterTube() {
    const gap = (0,_extensions_Utils__WEBPACK_IMPORTED_MODULE_5__.randint)(90, 200);
    let center = (0,_extensions_Utils__WEBPACK_IMPORTED_MODULE_5__.randint)(-130, 130);
    if (center + gap > 320) center = 320 + gap;
    if (center - gap < 320) center = 320 - gap;
    const tube1 = new _elements_Tube__WEBPACK_IMPORTED_MODULE_4__.Tube({ isBottom: false });
    tube1.setPosition(this.width + 30, this.height / 2 - tube1.height / 2 - gap / 2 + center).addChildTo(this.background);
    const tube2 = new _elements_Tube__WEBPACK_IMPORTED_MODULE_4__.Tube({ isBottom: true, point: 0 });
    tube2.setPosition(this.width + 30, this.height / 2 + tube2.height / 2 + gap / 2 + center).addChildTo(this.background);
    this.tubes.push(tube1);
    this.tubes.push(tube2);
  }

  gameover() {
    this.isGameOver = true;
    console.log("game over");      

    const labelOptions = {
      text: "GAME OVER",
      fill: 'white',
      stroke: 'black',
      strokeWidth: 6,
      fontSize: 100,
    }
    this.gameoverLabel = new phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__.Label(labelOptions)
      .setPosition(this.width / 2, this.height / 2)
      .addChildTo(this.foreground);
    
    this.gameoverLabel.tweener.clear()
      .wait(2000)
      .call(() => {
        const labelOptions = {
          text: "TOUCH SCREEN",
          fill: 'white',
          stroke: 'black',
          strokeWidth: 6,
          fontSize: 50,
        }
        new phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__.Label(labelOptions)
          .setPosition(this.width / 2, this.height * 0.7)
          .addChildTo(this.foreground);
      });
  }
}

//ManagerSceneで使用出来る様にする為
// window.MainScene = MainScene;


/***/ }),

/***/ "./src/scenes/SceneFlow.js":
/*!*********************************!*
  !*** ./src/scenes/SceneFlow.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SceneFlow": () => /* binding */ SceneFlow
/* harmony export */ });
/* harmony import */ var phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phina.js/build/phina.esm */ "./node_modules/phina.js/build/phina.esm.js");
/* harmony import */ var _assets_AssetCatalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/AssetCatalog */ "./src/assets/AssetCatalog.js");
/* harmony import */ var _GameTitleScene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameTitleScene */ "./src/scenes/GameTitleScene.js");
/* harmony import */ var _MainScene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainScene */ "./src/scenes/MainScene.js");





class SceneFlow extends phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__.ManagerScene {
  constructor() {
    super({
      startLabel: "loading",
      scenes: [{
        label: "loading",
        className: phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__.LoadingScene,
        nextLabel: "title",
        arguments: {
          assets: _assets_AssetCatalog__WEBPACK_IMPORTED_MODULE_1__.AssetCatalog,
        },
      },{
        label: "title",
        className: _GameTitleScene__WEBPACK_IMPORTED_MODULE_2__.GameTitleScene,
        nextLabel: "main",
        arguments: {
          title: "PHINAPY BIRD!"
        },
      },{
        label: "main",
        className: _MainScene__WEBPACK_IMPORTED_MODULE_3__.MainScene,
        nextLabel: "title",
      }],
    });
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waGluYV9lc21fdGVzdC8uL25vZGVfbW9kdWxlcy9waGluYS5qcy9idWlsZC9waGluYS5lc20uanMiLCJ3ZWJwYWNrOi8vcGhpbmFfZXNtX3Rlc3QvLi9zcmMvYXNzZXRzL0Fzc2V0Q2F0YWxvZy5qcyIsIndlYnBhY2s6Ly9waGluYV9lc21fdGVzdC8uL3NyYy9lbGVtZW50cy9Db3VudERvd24uanMiLCJ3ZWJwYWNrOi8vcGhpbmFfZXNtX3Rlc3QvLi9zcmMvZWxlbWVudHMvR2FtZU9iamVjdC5qcyIsIndlYnBhY2s6Ly9waGluYV9lc21fdGVzdC8uL3NyYy9lbGVtZW50cy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vcGhpbmFfZXNtX3Rlc3QvLi9zcmMvZWxlbWVudHMvU2NvcmUuanMiLCJ3ZWJwYWNrOi8vcGhpbmFfZXNtX3Rlc3QvLi9zcmMvZWxlbWVudHMvVHViZS5qcyIsIndlYnBhY2s6Ly9waGluYV9lc21fdGVzdC8uL3NyYy9leHRlbnNpb25zL1V0aWxzLmpzIiwid2VicGFjazovL3BoaW5hX2VzbV90ZXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3BoaW5hX2VzbV90ZXN0Ly4vc3JjL3NjZW5lcy9HYW1lVGl0bGVTY2VuZS5qcyIsIndlYnBhY2s6Ly9waGluYV9lc21fdGVzdC8uL3NyYy9zY2VuZXMvTWFpblNjZW5lLmpzIiwid2VicGFjazovL3BoaW5hX2VzbV90ZXN0Ly4vc3JjL3NjZW5lcy9TY2VuZUZsb3cuanMiLCJ3ZWJwYWNrOi8vcGhpbmFfZXNtX3Rlc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGhpbmFfZXNtX3Rlc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BoaW5hX2VzbV90ZXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcGhpbmFfZXNtX3Rlc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9waGluYV9lc21fdGVzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BoaW5hX2VzbV90ZXN0L3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksU0FBUztBQUNyQixZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNB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QVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxJQUFJOzs7QUFHSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIsOEJBQThCO0FBQzlCO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsYUFBYTtBQUNiLGNBQWMsU0FBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUEsNENBQTRDLGFBQWE7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLE1BQU0sc0JBQXNCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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RUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUEsZ0JBQWdCLHFCQUFxQjtBQUNyQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwyQkFBMkI7QUFDakQsK0JBQStCLEtBQUssT0FBTyxFQUFFO0FBQzdDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwyQkFBMkI7QUFDakQsK0JBQStCLEtBQUssT0FBTyxFQUFFO0FBQzdDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw2QkFBNkI7QUFDbkQsK0JBQStCLEtBQUssT0FBTyxFQUFFO0FBQzdDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVB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QUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsZ0JBQWdCLEVBQUUsS0FBSyxFQUFF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QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0EsYUFBYSxrQkFBa0I7QUFDL0IsYUFBYSxtQkFBbUI7QUFDaEMsYUFBYSxtQkFBbUI7QUFDaEMsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0EsYUFBYSxtQkFBbUI7QUFDaEMsYUFBYSxtQkFBbUI7QUFDaEMsYUFBYSxtQkFBbUI7QUFDaEMsYUFBYSxtQkFBbUI7QUFDaEMsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0EsYUFBYSxnQkFBZ0I7QUFDN0IsYUFBYSxtQkFBbUI7QUFDaEMsYUFBYSxtQkFBbUI7QUFDaEMsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdURBQXVEO0FBQ3ZELHdEQUF3RDtBQUN4RCwyREFBMkQ7QUFDM0QsMERBQTBEOztBQUUxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx1REFBdUQ7QUFDdkQsa0NBQWtDO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZOztBQUVaO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLE9BQU87QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzRUFBc0U7QUFDdEUsc0VBQXNFO0FBQ3RFLHNFQUFzRTtBQUN0RSxzRUFBc0U7QUFDdEU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixXQUFXO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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Q3hEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxjQUFjO0FBQzdCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxjQUFjO0FBQzdCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxjQUFjO0FBQzdCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCOztBQUU1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLElBQUk7O0FBRUo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSTs7O0FBR0o7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTixJQUFJOzs7QUFHSjs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxFOztBQUVOLElBQUk7OztBQUdKOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTixJQUFJOztBQUVKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQ0FBMEMsK0JBQStCO0FBQ3pFLCtDQUErQyxtQ0FBbUM7QUFDbEYsNkNBQTZDLGlDQUFpQzs7QUFFOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDs7QUFFQSxZQUFZLHNCQUFzQjs7QUFFbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0NBQStDLFNBQVM7QUFDeEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0NBQStDLFNBQVM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRO0FBQ1I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQiwyQkFBMkI7QUFDM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCOztBQUU1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrREFBa0QsVUFBVTtBQUM1RDtBQUNBOztBQUVBLCtDQUErQyxVQUFVO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFVBQVU7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDLHFDQUFxQztBQUNyQyxzQ0FBc0M7QUFDdEMsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxXQUFXLFVBQVU7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixRQUFRO0FBQ1I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHdCQUF3QjtBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVSxrQkFBa0I7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLEtBQUs7QUFDbkI7QUFDQTtBQUNBLHVFQUF1RTs7QUFFdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsVUFBVTtBQUN4QixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLFVBQVU7QUFDeEIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsK0JBQStCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEMsb0JBQW9CLHFCQUFxQjs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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OztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxlQUFlOztBQUVmOztBQUVBLGdDQUFnQyw4QkFBOEI7QUFDOUQsK0JBQStCLDZCQUE2Qjs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxFQUFFO0FBQzFELCtDQUErQyxFQUFFOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixvQkFBb0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWCxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsaUNBQWlDO0FBQ2xELGlCQUFpQiw4QkFBOEI7O0FBRS9DLGVBQWUsbUJBQW1CO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQix3QkFBd0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLHNCQUFzQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsMkJBQTJCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3RUFBd0U7QUFDeEUscUVBQXFFO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEMsZ0JBQWdCLEVBQUUsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLEdBQUcsRUFBRTtBQUM3RixpQ0FBaUMsZ0JBQWdCLEVBQUUsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLEdBQUcsRUFBRTtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlEQUF5RCxzQ0FBc0MsWUFBWTtBQUMzRztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQTZCO0FBQzdCO0FBQ0EsUUFBUTtBQUNSLGtDQUFrQyxHQUFHLGNBQWM7O0FBRW5EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7O0FBR0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLFNBQVM7O0FBRXRDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixTQUFTO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixTQUFTO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEMsK0JBQStCO0FBQy9COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixXQUFXLEVBQUUsU0FBUyxJQUFJLFdBQVc7QUFDbEUsb0JBQW9CLFdBQVcsRUFBRSxTQUFTLElBQUksV0FBVztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsZUFBZTtBQUMxQyxvQkFBb0IscUJBQXFCOztBQUV6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLGFBQWEscUJBQXFCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDO0FBQ3RDLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0IsbUJBQW1CO0FBQ25COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQSxLQUFLOzs7QUFHTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsV0FBVzs7QUFFL0I7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyxjQUFjO0FBQzVCLGNBQWMsSUFBSTtBQUNsQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsRUFBRTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELEVBQUU7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQixvQkFBb0I7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLG1CQUFtQjtBQUNuQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVCxPQUFPOztBQUVQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLG1CQUFtQjtBQUNuQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztB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QUFDOUIsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLG1CQUFtQiwyREFBYztBQUNqQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsbUJBQW1CLGlEQUFTO0FBQzVCO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOzs7Ozs7O1VDOUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIHBoaW5hLmpzIHYwLjIuM1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKlxuICogQ29weXJpZ2h0IChDKSBwaGlcbiAqL1xuLyoqXHJcbiAqIEBjbGFzcyBnbG9iYWwuT2JqZWN0XHJcbiAqIE9iamVjdOOBruaLoeW8tVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiDplqLmlbDjgpLov73liqBcclxuICogQHBhcmFtICAge1N0cmluZ30ga2V5IG5hbWVcclxuICogQHBhcmFtICAge0Z1bmN0aW9ufSBmdW5jdGlvblxyXG4gKi9cclxuZnVuY3Rpb24gJG1ldGhvZChuYW1lLCBmbikge1xyXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBuYW1lLCB7XHJcbiAgICB2YWx1ZTogZm4sXHJcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgIHdyaXRhYmxlOiB0cnVlXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbWV0aG9kIGFjY2Vzc29yXHJcbiAqIOOCouOCr+OCu+ODg+OCtSjjgrvjg4Pjgr/jg7wv44Ky44OD44K/44O8KeOCkuWumue+qeOBmeOCi1xyXG4gKi9cclxuLy8gT2JqZWN0LnByb3RvdHlwZS4kbWV0aG9kKFwiYWNjZXNzb3JcIiwgZnVuY3Rpb24obmFtZSwgcGFyYW0pIHtcclxuZnVuY3Rpb24gYWNjZXNzb3IobmFtZSwgcGFyYW0pIHtcclxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgbmFtZSwge1xyXG4gICAgc2V0OiBwYXJhbVtcInNldFwiXSxcclxuICAgIGdldDogcGFyYW1bXCJnZXRcIl0sXHJcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBtZXRob2QgZm9ySW5cclxuICog44Kq44OW44K444Kn44Kv44OI55So44Or44O844OX5Yem55CGXHJcbiAqL1xyXG5mdW5jdGlvbiBmb3JJbihmbiwgc2VsZikge1xyXG4gIHNlbGYgPSBzZWxmIHx8IHRoaXM7XHJcblxyXG4gIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goZnVuY3Rpb24oa2V5LCBpbmRleCkge1xyXG4gICAgdmFyIHZhbHVlID0gdGhpc1trZXldO1xyXG5cclxuICAgIGZuLmNhbGwoc2VsZiwga2V5LCB2YWx1ZSwgaW5kZXgpO1xyXG4gIH0sIHRoaXMpO1xyXG5cclxuICByZXR1cm4gdGhpcztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBtZXRob2QgICRleHRlbmRcclxuICog5LuW44Gu44Op44Kk44OW44Op44Oq44Go56u25ZCI44GX44Gh44KD44GG44Gu44GnIGV4dGVuZCAtPiAkZXh0ZW5kIOOBqOOBl+OBvuOBl+OBn1xyXG4gKi9cclxuZnVuY3Rpb24gJGV4dGVuZCgpIHtcclxuLy8gT2JqZWN0LnByb3RvdHlwZS4kbWV0aG9kKFwiJGV4dGVuZFwiLCBmdW5jdGlvbigpIHtcclxuICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGFyZ3VtZW50cywgZnVuY3Rpb24oc291cmNlKSB7XHJcbiAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBzb3VyY2UpIHtcclxuICAgICAgdGhpc1twcm9wZXJ0eV0gPSBzb3VyY2VbcHJvcGVydHldO1xyXG4gICAgfVxyXG4gIH0sIHRoaXMpO1xyXG4gIHJldHVybiB0aGlzO1xyXG59XHJcblxyXG4vKipcclxuICogQG1ldGhvZCAgJHNhZmVcclxuICog5a6J5YWo5ouh5by1XHJcbiAqIOS4iuabuOOBjeOBl+OBquOBhFxyXG4gKi9cclxuZnVuY3Rpb24gJHNhZmUoc291cmNlKSB7XHJcbi8vIE9iamVjdC5wcm90b3R5cGUuJG1ldGhvZChcIiRzYWZlXCIsIGZ1bmN0aW9uKHNvdXJjZSkge1xyXG4gIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYXJndW1lbnRzLCBmdW5jdGlvbihzb3VyY2UpIHtcclxuICAgIGZvciAodmFyIHByb3BlcnR5IGluIHNvdXJjZSkge1xyXG4gICAgICBpZiAodGhpc1twcm9wZXJ0eV0gPT09IHVuZGVmaW5lZCkgdGhpc1twcm9wZXJ0eV0gPSBzb3VyY2VbcHJvcGVydHldO1xyXG4gICAgfVxyXG4gIH0sIHRoaXMpO1xyXG4gIHJldHVybiB0aGlzO1xyXG59XHJcblxyXG4vKipcclxuICogQG1ldGhvZCAkd2F0Y2hcclxuICogQHBhcmFtICB7c3RyaW5nfSBrZXkgICAgICAgW2Rlc2NyaXB0aW9uXVxyXG4gKiBAcGFyYW0gIHtmdW5jdGlvbn0gY2FsbGJhY2sgIFtkZXNjcmlwdGlvbl1cclxuICogQHJldHVybiB7W3R5cGVdfSAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxyXG4gKi9cclxuZnVuY3Rpb24gJHdhdGNoKGtleSwgY2FsbGJhY2spIHtcclxuLy8gT2JqZWN0LnByb3RvdHlwZS4kbWV0aG9kKCckd2F0Y2gnLCBmdW5jdGlvbihrZXksIGNhbGxiYWNrKSB7XHJcbiAgdmFyIHRhcmdldCA9IHRoaXM7XHJcbiAgdmFyIGRlc2NyaXB0b3IgPSBudWxsO1xyXG5cclxuICB3aGlsZSh0YXJnZXQpIHtcclxuICAgIGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcclxuICAgIGlmIChkZXNjcmlwdG9yKSB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgdGFyZ2V0ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRhcmdldCk7XHJcbiAgfVxyXG5cclxuICAvLyDjgZnjgafjgavjgqLjgq/jgrvjg4PjgrXjg7zjgajjgZfjgablrZjlnKjjgZnjgovloLTlkIhcclxuICBpZiAoZGVzY3JpcHRvcikge1xyXG4gICAgLy8g44OH44O844K/44OH44Kj44K544Kv44Oq44OX44K/44Gu5aC05ZCIXHJcbiAgICBpZiAoZGVzY3JpcHRvci52YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHZhciB0ZW1wS2V5ID0gJ19fJyArIGtleTtcclxuICAgICAgdmFyIHRlbXBWYWx1ZSA9IHRoaXNba2V5XTtcclxuXHJcbiAgICAgIHRoaXNbdGVtcEtleV0gPSB0ZW1wVmFsdWU7XHJcblxyXG4gICAgICBhY2Nlc3Nvci5jYWxsKHRoaXMsIGtleSwge1xyXG4gICAgICAvLyB0aGlzLmFjY2Vzc29yKGtleSwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpc1t0ZW1wS2V5XTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24odikge1xyXG4gICAgICAgICAgdmFyIG9sZCA9IHRoaXNbdGVtcEtleV07XHJcbiAgICAgICAgICB0aGlzW3RlbXBLZXldID0gdjtcclxuICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcywgdiwgb2xkKTtcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vIOOCouOCr+OCu+OCteODh+OCo+OCueOCr+ODquODl+OCv+OBruWgtOWQiFxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGFjY2Vzc29yLmNhbGwodGhpcywga2V5LCB7XHJcbiAgICAgIC8vIHRoaXMuYWNjZXNzb3Ioa2V5LCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHJldHVybiBkZXNjcmlwdG9yLmdldC5jYWxsKHRoaXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbih2KSB7XHJcbiAgICAgICAgICB2YXIgb2xkID0gZGVzY3JpcHRvci5nZXQuY2FsbCh0aGlzKTtcclxuICAgICAgICAgIGRlc2NyaXB0b3Iuc2V0LmNhbGwodGhpcywgdik7XHJcbiAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXMsIHYsIG9sZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgdmFyIGFjY2Vzc2tleSA9ICdfXycgKyBrZXk7XHJcblxyXG4gICAgYWNjZXNzb3IuY2FsbCh0aGlzLCBrZXksIHtcclxuICAgIC8vIHRoaXMuYWNjZXNzb3Ioa2V5LCB7XHJcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbYWNjZXNza2V5XTtcclxuICAgICAgfSxcclxuICAgICAgc2V0OiBmdW5jdGlvbih2KSB7XHJcbiAgICAgICAgdmFyIG9sZCA9IHRoaXNbYWNjZXNza2V5XTtcclxuICAgICAgICB0aGlzW2FjY2Vzc2tleV0gPSB2O1xyXG4gICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcywgdiwgb2xkKTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxuXG4vKlxyXG4gKiBhcnJheS5qc1xyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAcHJvcGVydHkge09iamVjdH0gZmlyc3RcclxuICog5pyA5Yid44Gu6KaB57SgXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqICAgICBhcnIgPSBbNiwgNSwgMiwgMywgMSwgNF07XHJcbiAqICAgICBhcnIuZmlyc3Q7IC8vID0+IDZcclxuICovXHJcbmNvbnN0IGZpcnN0ID0ge1xyXG4vLyBBcnJheS5wcm90b3R5cGUuYWNjZXNzb3IoXCJmaXJzdFwiLCB7XHJcbiAgXCJnZXRcIjogZnVuY3Rpb24oKSAgIHsgcmV0dXJuIHRoaXNbMF07IH0sXHJcbiAgXCJzZXRcIjogZnVuY3Rpb24odikgIHsgdGhpc1swXSA9IHY7IH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBAcHJvcGVydHkge09iamVjdH0gbGFzdFxyXG4gKiDmnIDlvozjga7opoHntKBcclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICogICAgIGFyciA9IFs2LCA1LCAyLCAzLCAxLCA0XTtcclxuICogICAgIGFyci5sYXN0OyAvLyA9PiA0XHJcbiAqL1xyXG5jb25zdCBsYXN0ID0ge1xyXG4vLyBBcnJheS5wcm90b3R5cGUuYWNjZXNzb3IoXCJsYXN0XCIsIHtcclxuICBcImdldFwiOiBmdW5jdGlvbigpICAgeyByZXR1cm4gdGhpc1t0aGlzLmxlbmd0aC0xXTsgfSxcclxuICBcInNldFwiOiBmdW5jdGlvbih2KSAgeyB0aGlzW3RoaXMubGVuZ3RoLTFdID0gdjsgfVxyXG59O1xyXG5cclxuXHJcbi8qKlxyXG4gKiBAbWV0aG9kIGF0XHJcbiAqIOaMh+WumuOBl+OBn+OCpOODs+ODh+ODg+OCr+OCueOBruimgee0oOOCkui/lOOBl+OBvuOBme+8iOODq+ODvOODl+ODu+iyoOaVsOOBruaMh+WumuWPr++8ieOAglxyXG4gKlxyXG4gKiDmt7vlrZfjgYzosqDmlbDjga7loLTlkIjjga/mnKvlsL7jgYvjgonjga7jgqrjg5Xjgrvjg4Pjg4jjgajjgb/jgarjgZfjgb7jgZnjgILmnKvlsL7jga7opoHntKDjgYwgLTEg55Wq55uu44Gr44Gq44KK44G+44GZ44CCICBcclxuICog5re75a2X44Gu57W25a++5YCk44GMIEFycmF5Lmxlbmd0aCDku6XkuIrjga7loLTlkIjjga/jg6vjg7zjg5fjgZfjgb7jgZnjgIJcclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICogICAgIGFyciA9IFsnYScsICdiJywgJ2MnLCAnZCcsICdlJywgJ2YnXTtcclxuICogICAgIGFyci5hdCgwKTsgIC8vID0+ICdhJ1xyXG4gKiAgICAgYXJyLmF0KDYpOyAgLy8gPT4gJ2EnXHJcbiAqICAgICBhcnIuYXQoMTMpOyAvLyA9PiAnYidcclxuICogICAgIGFyci5hdCgtMSk7IC8vID0+ICdmJ1xyXG4gKiAgICAgYXJyLmF0KC04KTsgLy8gPT4gJ2UnXHJcbiAqXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleCDmt7vlrZdcclxuICogQHJldHVybiB7T2JqZWN0fSDmt7vlrZfjgafmjIflrprjgZXjgozjgZ/opoHntKBcclxuICovXHJcbmZ1bmN0aW9uIGF0KGkpIHtcclxuLy8gQXJyYXkucHJvdG90eXBlLiRtZXRob2QoXCJhdFwiLCBmdW5jdGlvbihpKSB7XHJcbiAgaSU9dGhpcy5sZW5ndGg7XHJcbiAgaSs9dGhpcy5sZW5ndGg7XHJcbiAgaSU9dGhpcy5sZW5ndGg7XHJcbiAgcmV0dXJuIHRoaXNbaV07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbWV0aG9kIGVyYXNlXHJcbiAqIEBjaGFpbmFibGVcclxuICog5oyH5a6a44GX44Gf44Kq44OW44K444Kn44Kv44OI44Go5LiA6Ie044GX44Gf5pyA5Yid44Gu6KaB57Sg44KS5YmK6Zmk44GX44G+44GZ44CCXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqICAgICBhcnIxID0gWydhJywgJ2InLCAnYicsICdjJ107XHJcbiAqICAgICBhcnIyID0gYXJyMS5lcmFzZSgnYicpOyAvLyA9PiBbJ2EnLCAnYicsICdjJ11cclxuICogICAgIGFycjEgPT09IGFycjI7ICAgICAgICAgIC8vID0+IHRydWVcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IGVsbSDliYrpmaTjgZfjgZ/jgYTjgqrjg5bjgrjjgqfjgq/jg4hcclxuICovXHJcbmZ1bmN0aW9uIGVyYXNlKGVsbSkge1xyXG4vLyBBcnJheS5wcm90b3R5cGUuJG1ldGhvZChcImVyYXNlXCIsIGZ1bmN0aW9uKGVsbSkge1xyXG4gIHZhciBpbmRleCAgPSB0aGlzLmluZGV4T2YoZWxtKTtcclxuICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgdGhpcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gIH1cclxuICByZXR1cm4gdGhpcztcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBAbWV0aG9kIGNsZWFyXHJcbiAqIEBjaGFpbmFibGVcclxuICog6Ieq6Lqr44KS56m644Gu6YWN5YiX44Gr44GX44G+44GZ44CCXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqICAgICBhcnIgPSBbMSwgMiwgWzMsIDRdXTtcclxuICogICAgIGFyci5jbGVhcigpOyAvLyA9PiBbXVxyXG4gKi9cclxuZnVuY3Rpb24gY2xlYXIoZGVlcCkge1xyXG4vLyBBcnJheS5wcm90b3R5cGUuJG1ldGhvZChcImNsZWFyXCIsIGZ1bmN0aW9uKCkge1xyXG4gIHRoaXMubGVuZ3RoID0gMDtcclxuICByZXR1cm4gdGhpcztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBtZXRob2QgY29udGFpbnNcclxuICog5oyH5a6a44GX44Gf6KaB57Sg44GM6YWN5YiX44Gr5ZCr44G+44KM44Gm44GE44KL44GL44KS44OB44Kn44OD44Kv44GX44G+44GZ44CCXHJcbiAqXHJcbiAqIOavlOi8g+OBq+OBr+WOs+WvhuOBquWQjOWApO+8iOS4iemHjeOCpOOCs+ODvOODq+a8lOeul+WtkCA9PT0g44Gn5L2/44KP44KM44KL44Gu44Go5ZCM44GY5pa55rOV77yJ44KS55So44GE44G+44GZ44CCXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqICAgICBhcnIgPSBbNiwgNSwgMiwgMywgMSwgNF07XHJcbiAqICAgICBhcnIuY29udGFpbnMoMyk7ICAgICAvLyA9PiB0cnVlXHJcbiAqICAgICBhcnIuY29udGFpbnMoMywgNCk7ICAvLyA9PiBmYWxzZVxyXG4gKiAgICAgYXJyLmNvbnRhaW5zKDMsIC00KTsgLy8gPT4gdHJ1ZVxyXG4gKiAgICAgYXJyLmNvbnRhaW5zKFwiNlwiKTsgICAvLyA9PiBmYWxzZVxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gaXRlbSDjg4Hjgqfjg4Pjgq/jgZnjgovjgqrjg5bjgrjjgqfjgq/jg4hcclxuICogQHBhcmFtIHtOdW1iZXJ9IFtmcm9tSW5kZXg9MF0g5qSc57Si44KS5aeL44KB44KL5L2N572u44CC6LKg5pWw44KS5oyH5a6a44GX44Gf5aC05ZCI44Gv5pyr5bC+44GL44KJ44Gu44Kq44OV44K744OD44OI44Go6KaL44Gq44GX44G+44GZ44CCXHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59IOODgeOCp+ODg+OCr+OBrue1kOaenFxyXG4gKi9cclxuZnVuY3Rpb24gY29udGFpbnMoaXRlbSwgZnJvbUluZGV4KSB7XHJcbi8vIEFycmF5LnByb3RvdHlwZS4kbWV0aG9kKFwiY29udGFpbnNcIiwgZnVuY3Rpb24oaXRlbSwgZnJvbUluZGV4KSB7XHJcbiAgcmV0dXJuIHRoaXMuaW5kZXhPZihpdGVtLCBmcm9tSW5kZXgpICE9IC0xO1xyXG59XHJcblxyXG4vKipcclxuICogQG1ldGhvZCBjbG9uZVxyXG4gKiDoh6rouqvjga7jgrPjg5Tjg7zjgpLnlJ/miJDjgZfjgabov5TjgZfjgb7jgZnjgIJcclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICogICAgIGFycjEgPSBbMSwgMiwgWzMsIDRdXTtcclxuICogICAgIGFycjIgPSBhcnIxLmNsb25lKCk7ICAgICAgLy8gPT4gWzEsIDIsIFszLCA0XV1cclxuICogICAgIGFycjFbMl0gPT09IGFycjJbMl07ICAgICAgLy8gPT4gdHJ1ZVxyXG4gKiAgICAgYXJyMVsyXVswXSA9IDk7XHJcbiAqICAgICBhcnIyOyAgICAgICAgICAgICAgICAgICAgIC8vID0+IFsxLCAyLCBbOSwgNF1dXHJcbiAqICAgICBhcnIxID0gWzEsIDIsIFszLCA0XV07XHJcbiAqICAgICBhcnIyID0gYXJyMS5jbG9uZSh0cnVlKTsgIC8vID0+IFsxLCAyLCBbMywgNF1dXHJcbiAqICAgICBhcnIxWzJdID09PSBhcnIyWzJdOyAgICAgIC8vID0+IGZhbHNlXHJcbiAqICAgICBhcnIxWzJdWzBdID0gOTtcclxuICogICAgIGFycjI7ICAgICAgICAgICAgICAgICAgICAgLy8gPT4gWzEsIDIsIFszLCA0XV1cclxuICpcclxuICogQHBhcmFtIHtCb29sZWFufSBbZGVlcD1mYWxzZV0g6YWN5YiX44Gu44ON44K544OI44KS44Gf44Gp44Gj44Gm6KSH6KO944GZ44KL44GL44Gp44GG44GLXHJcbiAqIEByZXR1cm4ge09iamVjdH0g5paw44GX44GE6YWN5YiXXHJcbiAqL1xyXG5mdW5jdGlvbiBjbG9uZShkZWVwKSB7XHJcbi8vIEFycmF5LnByb3RvdHlwZS4kbWV0aG9kKFwiY2xvbmVcIiwgZnVuY3Rpb24oZGVlcCkge1xyXG4gIGlmIChkZWVwID09PSB0cnVlKSA7XHJcbiAgZWxzZSB7XHJcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KHRoaXMpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBtZXRob2QgcmFuZ2VcclxuICogQGNoYWluYWJsZVxyXG4gKiDoh6rouqvjgpLnrYnlt67mlbDliJfvvIjkuIDlrprplpPpmpTjga7mlbTmlbDlgKTjga7liJfvvInjgajjgZfjgb7jgZnjgIJcclxuICpcclxuICogLSDlvJXmlbDjgYwx44Gk44Gu5aC05ZCI44CBMO+9nmVuZO+8iGVuZOWQq+OBvuOBmu+8ieOBruaVtOaVsOOBrumFjeWIl+OBp+OBmeOAgiAgXHJcbiAqIC0g5byV5pWw44GMMuOBpOOBruWgtOWQiOOAgXN0YXJ0772eZW5k77yIZW5k5ZCr44G+44Ga77yJ44Gu5pW05pWw44Gu6YWN5YiX44Gn44GZ44CCICBcclxuICogLSDlvJXmlbDjgYwz44Gk44Gu5aC05ZCI44CBc3RhcnTvvZ5lbmTvvIhlbmTlkKvjgb7jgZrvvInjgYvjgaQgc3RhcnQgKyBuICogc3RlcCAobuOBr+aVtOaVsCnjgpLmuoDjgZ/jgZnmlbTmlbDjga7phY3liJfjgafjgZnjgIJcclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICogICAgIGFyciA9IFtdO1xyXG4gKiAgICAgYXJyLnJhbmdlKDQpOyAgICAgICAgLy8gPT4gWzAsIDEsIDIsIDNdXHJcbiAqICAgICBhcnIucmFuZ2UoMiwgNSk7ICAgICAvLyA9PiBbMiwgMywgNF1cclxuICogICAgIGFyci5yYW5nZSgyLCAxNCwgNSk7IC8vID0+IFsyLCA3LCAxMl1cclxuICogICAgIGFyci5yYW5nZSgyLCAtMyk7ICAgIC8vID0+IFsyLCAxLCAwLCAtMSwgLTJdXHJcbiAqXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBzdGFydCDmnIDliJ3jga7lgKTvvIjjg4fjg5Xjgqnjg6vjg4jjga8gMO+8iVxyXG4gKiBAcGFyYW0ge051bWJlcn0gZW5kIOacgOW+jOOBruWApO+8iOecgeeVpeS4jeWPr++8iVxyXG4gKiBAcGFyYW0ge051bWJlcn0gW3N0ZXA9MeOBvuOBn+OBry0xXSDplpPpmpRcclxuICovXHJcbmZ1bmN0aW9uIHJhbmdlKHN0YXJ0LCBlbmQsIHN0ZXApIHtcclxuLy8gQXJyYXkucHJvdG90eXBlLiRtZXRob2QoXCJyYW5nZVwiLCBmdW5jdGlvbihzdGFydCwgZW5kLCBzdGVwKSB7XHJcbiAgY2xlYXIuY2FsbCh0aGlzKTtcclxuICAvLyB0aGlzLmNsZWFyKCk7XHJcbiAgXHJcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMSkge1xyXG4gICAgZm9yICh2YXIgaT0wOyBpPHN0YXJ0OyArK2kpIHRoaXNbaV0gPSBpO1xyXG4gIH1cclxuICBlbHNlIGlmIChzdGFydCA8IGVuZCkge1xyXG4gICAgc3RlcCA9IHN0ZXAgfHwgMTtcclxuICAgIGlmIChzdGVwID4gMCkge1xyXG4gICAgICBmb3IgKHZhciBpPXN0YXJ0LCBpbmRleD0wOyBpPGVuZDsgaSs9c3RlcCwgKytpbmRleCkge1xyXG4gICAgICAgIHRoaXNbaW5kZXhdID0gaTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIHN0ZXAgPSBzdGVwIHx8IC0xO1xyXG4gICAgaWYgKHN0ZXAgPCAwKSB7XHJcbiAgICAgIGZvciAodmFyIGk9c3RhcnQsIGluZGV4PTA7IGk+ZW5kOyBpKz1zdGVwLCArK2luZGV4KSB7XHJcbiAgICAgICAgdGhpc1tpbmRleF0gPSBpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiB0aGlzO1xyXG59XHJcblxyXG4vKipcclxuICogQG1ldGhvZCBlYWNoXHJcbiAqIEBjaGFpbmFibGVcclxuICog6KaB57Sg44KS6aCG55Wq44Gr5rih44GX44Gq44GM44KJ6Zai5pWw44KS57mw44KK6L+U44GX5a6f6KGM44GX44G+44GZ44CCXHJcbiAqXHJcbiAqIOODoeOCveODg+ODieODgeOCp+ODvOODs+OBq+WvvuW/nOOBl+OBpuOBhOOBvuOBmeOBjOOAgeOBk+OBruODoeOCveODg+ODieOBq+OCiOOBo+OBpuiHquWIhuiHqui6q+OBr+WkieWMluOBl+OBvuOBm+OCk+OAglxyXG4gKlxyXG4gKiAjIyNSZWZlcmVuY2VcclxuICogLSBbQXJyYXkucHJvdG90eXBlLmZvckVhY2goKSAtIEphdmFTY3JpcHQgfCBNRE5dKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2phL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L2ZvckVhY2gpXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqICAgICBhcnIgPSBbMSwgMiwgM107XHJcbiAqICAgICBhcnIuZWFjaCggZnVuY3Rpb24oZWxtKSB7XHJcbiAqICAgICAgIGNvbnNvbGUubG9nKGVsbSAqIGVsbSlcclxuICogICAgIH0pO1xyXG4gKiAgICAgLy8gPT4gMVxyXG4gKiAgICAgLy8gICAgNFxyXG4gKiAgICAgLy8gICAgOVxyXG4gKlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayDlkITopoHntKDjgavlr77jgZfjgablrp/ooYzjgZnjgovjgrPjg7zjg6vjg5Djg4Pjgq/plqLmlbBcclxuICogQHBhcmFtIHtPYmplY3R9IFtzZWxmPXRoaXNdIGNhbGxiYWNrIOWGheOBpyB0aGlzIOOBqOOBl+OBpuWPgueFp+OBleOCjOOCi+WApFxyXG4gKi9cclxuZnVuY3Rpb24gZWFjaCgpIHtcclxuLy8gQXJyYXkucHJvdG90eXBlLiRtZXRob2QoXCJlYWNoXCIsIGZ1bmN0aW9uKCkge1xyXG4gIHRoaXMuZm9yRWFjaC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gIHJldHVybiB0aGlzO1xyXG59XHJcblxyXG5cclxuLy8gPT09PT09PT09PVxyXG4vLyDku6XkuIvjga9lczIwMTXku6XpmY3jgavlrZjlnKjjgZnjgovjgZ/jgoHjgIHkv53nlZlcclxuLy8gPT09PT09PT09PVxyXG5cclxuXHJcbi8vIC8qKlxyXG4vLyAgKiBAbWV0aG9kIGZpbmRcclxuLy8gICog5ZCE6KaB57Sg44KS5byV5pWw44Gr44GX44Gm6Zai5pWw44KS5a6f6KGM44GX44CB44Gd44Gu5YCk44GM55yf44Go44Gq44KL77yI77yd5p2h5Lu244Gr44Oe44OD44OB44GZ44KL77yJ5pyA5Yid44Gu6KaB57Sg44KS6L+U44GX44G+44GZ44CCXHJcbi8vICAqXHJcbi8vICAqIOOBqeOBruimgee0oOOCguODnuODg+ODgeOBl+OBquOBkeOCjOOBsCB1bmRlZmluZWQg44KS6L+U44GX44G+44GZ44CCXHJcbi8vICAqXHJcbi8vICAqICMjIyBFeGFtcGxlXHJcbi8vICAqICAgICBhcnIgPSBbJ2ZvbycsICdiYXInLCAnaG9nZScsICdmdWdhJ107XHJcbi8vICAqICAgICBhcnIuZmluZCggZnVuY3Rpb24oZWxtKSB7XHJcbi8vICAqICAgICAgIHJldHVybiBlbG0uaW5kZXhPZignYScpID49IDA7XHJcbi8vICAqICAgICB9KTtcclxuLy8gICogICAgIC8vID0+ICdiYXInXHJcbi8vICAqXHJcbi8vICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIOWQhOimgee0oOOBq+WvvuOBl+OBpuWun+ihjOOBmeOCi+OCs+ODvOODq+ODkOODg+OCr+mWouaVsFxyXG4vLyAgKiBAcGFyYW0ge09iamVjdH0gW3NlbGY9dGhpc10gY2FsbGJhY2sg5YaF44GnIHRoaXMg44Go44GX44Gm5Y+C54Wn44GV44KM44KL5YCk44CC44OH44OV44Kp44Or44OI44Gv5ZG844Gz5Ye644GX5pmC44GuIHRoaXPjgIJcclxuLy8gICogQHJldHVybiB7T2JqZWN0fSDmnaHku7bjgavjg57jg4Pjg4HjgZfjgZ/mnIDliJ3jga7opoHntKDjgIHjgb7jgZ/jga8gdW5kZWZpbmVkXHJcbi8vICAqL1xyXG4vLyBBcnJheS5wcm90b3R5cGUuJG1ldGhvZChcImZpbmRcIiwgZnVuY3Rpb24oZm4sIHNlbGYpIHtcclxuLy8gICB2YXIgdGFyZ2V0ID0gbnVsbDtcclxuXHJcbi8vICAgdGhpcy5zb21lKGZ1bmN0aW9uKGVsbSwgaSkge1xyXG4vLyAgICAgaWYgKGZuLmNhbGwoc2VsZiwgZWxtLCBpLCB0aGlzKSkge1xyXG4vLyAgICAgICB0YXJnZXQgPSBlbG07XHJcbi8vICAgICAgIHJldHVybiB0cnVlO1xyXG4vLyAgICAgfVxyXG4vLyAgIH0pO1xyXG5cclxuLy8gICByZXR1cm4gdGFyZ2V0O1xyXG4vLyB9KTtcclxuXHJcbi8vIC8qKlxyXG4vLyAgKiBAbWV0aG9kIGZpbmRJbmRleFxyXG4vLyAgKiDlkITopoHntKDjgpLlvJXmlbDjgavjgZfjgabplqLmlbDjgpLlrp/ooYzjgZfjgIHjgZ3jga7lgKTjgYznnJ/jgajjgarjgovvvIjvvJ3mnaHku7bjgavjg57jg4Pjg4HjgZnjgovvvInmnIDliJ3jga7jgqTjg7Pjg4fjg4Pjgq/jgrnjgpLov5TjgZfjgb7jgZnjgIJcclxuLy8gICpcclxuLy8gICog44Gp44Gu6KaB57Sg44KC44Oe44OD44OB44GX44Gq44GR44KM44GwIC0xIOOCkui/lOOBl+OBvuOBmeOAglxyXG4vLyAgKlxyXG4vLyAgKiAjIyMgRXhhbXBsZVxyXG4vLyAgKiAgICAgYXJyID0gWydmb28nLCAnYmFyJywgJ2hvZ2UnLCAnZnVnYSddO1xyXG4vLyAgKiAgICAgYXJyLmZpbmRJbmRleCggZnVuY3Rpb24oZWxtKSB7XHJcbi8vICAqICAgICAgIHJldHVybiBlbG0uaW5kZXhPZignYScpID49IDA7XHJcbi8vICAqICAgICB9KTtcclxuLy8gICogICAgIC8vID0+IDFcclxuLy8gICpcclxuLy8gICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sg5ZCE6KaB57Sg44Gr5a++44GX44Gm5a6f6KGM44GZ44KL44Kz44O844Or44OQ44OD44Kv6Zai5pWwXHJcbi8vICAqIEBwYXJhbSB7T2JqZWN0fSBbc2VsZj10aGlzXSBjYWxsYmFjayDlhoXjgacgdGhpcyDjgajjgZfjgablj4LnhafjgZXjgozjgovlgKTjgILjg4fjg5Xjgqnjg6vjg4jjga/lkbzjgbPlh7rjgZfmmYLjga4gdGhpc+OAglxyXG4vLyAgKiBAcmV0dXJuIHtPYmplY3R9IOadoeS7tuOBq+ODnuODg+ODgeOBl+OBn+acgOWIneOBruOCpOODs+ODh+ODg+OCr+OCueOAgeOBvuOBn+OBryAtMVxyXG4vLyAgKi9cclxuLy8gQXJyYXkucHJvdG90eXBlLiRtZXRob2QoXCJmaW5kSW5kZXhcIiwgZnVuY3Rpb24oZm4sIHNlbGYpIHtcclxuLy8gICB2YXIgdGFyZ2V0ID0gLTE7XHJcblxyXG4vLyAgIHRoaXMuc29tZShmdW5jdGlvbihlbG0sIGkpIHtcclxuLy8gICAgIGlmIChmbi5jYWxsKHNlbGYsIGVsbSwgaSwgdGhpcykpIHtcclxuLy8gICAgICAgdGFyZ2V0ID0gaTtcclxuLy8gICAgICAgcmV0dXJuIHRydWU7XHJcbi8vICAgICB9XHJcbi8vICAgfSk7XHJcblxyXG4vLyAgIHJldHVybiB0YXJnZXQ7XHJcbi8vIH0pO1xyXG5cclxuLyoqXHJcbiAqIEBtZXRob2Qgb2ZcclxuICogQHN0YXRpY1xyXG4gKiBFUzYg5rqW5oug44GuIG9mIOmWouaVsOOBp+OBmeOAguWPr+WkiemVt+W8leaVsOOCkuOBqOOBo+OBpiBBcnJheSDjgqrjg5bjgrjjgqfjgq/jg4jjgavjgZfjgabov5TjgZfjgb7jgZnjgIJcclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICogICAgIEFycmF5Lm9mKCk7ICAgICAgICAvLyA9PiBbXVxyXG4gKiAgICAgQXJyYXkub2YoMSwgMiwgMyk7IC8vID0+IFsxLCAyLCAzXVxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudE4g55Sf5oiQ44GZ44KL6YWN5YiX44Gu6KaB57SgXHJcbiAqIEByZXR1cm4ge0FycmF5fSDnlJ/miJDjgZfjgZ/phY3liJdcclxuICovXHJcbi8vIEFycmF5LiRtZXRob2QoXCJvZlwiLCBmdW5jdGlvbigpIHtcclxuLy8gICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcclxuLy8gfSk7XHJcblxyXG4vKipcclxuICogQG1ldGhvZCBmcm9tXHJcbiAqIEBzdGF0aWNcclxuICogRVM2IOa6luaLoOOBriBmcm9tIOmWouaVsOOBp+OBmeOAgmFycmF5LWxpa2Ug44Kq44OW44K444Kn44Kv44OI44GLaXRlcmFibGUg44Kq44OW44K444Kn44Kv44OI44GL44KJ5paw44GX44GE6YWN5YiX44KS55Sf5oiQ44GX44G+44GZ44CCXHJcbiAqXHJcbiAqIGFycmF5LWxpa2Ug44Kq44OW44K444Kn44Kv44OI44Go44Gv44CBbGVuZ3RoIOODl+ODreODkeODhuOCo+OCkuaMgeOBoeOAgeaVsOWtl+OBrua3u+Wtl+OBp+OCouOCr+OCu+OCueWPr+iDveOBquOCquODluOCuOOCp+OCr+ODiOOBruOBk+OBqOOBp+OBmeOAglxyXG4gKiDpgJrluLjjga7phY3liJfjga7jgbvjgYvjgIFTdHJpbmfjgIFhcmd1bWVudHPjgIFOb2RlTGlzdCDjgarjganjgoIgYXJyYXktbGlrZSDjgqrjg5bjgrjjgqfjgq/jg4jjgafjgZnjgIJcclxuICpcclxuICogaXRlcmFibGUg44Kq44OW44K444Kn44Kv44OI44Go44Gv44CBU3ltYm9sLml0ZXJhdG9yIOODl+ODreODkeODhuOCo+OCkuaMgeOBpOOCquODluOCuOOCp+OCr+ODiOOBruOBk+OBqOOBp+OBmeOAglxyXG4gKiDpgJrluLjjga7phY3liJfjga7jgbvjgYvjgIFTdHJpbmfjgIFhcmd1bWVudHPjgIFOb2RlTGlzdCDjgarjganjgoIgaXRlcmFibGUg44Kq44OW44K444Kn44Kv44OI44Gn44GZ44CCXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqICAgICBBcnJheS5mcm9tKFsxLCAyLCAzXSwgZnVuY3Rpb24oZWxtKXsgcmV0dXJuIGVsbSAqIGVsbX0gKTsgLy8gPT4gWzEsIDQsIDldXHJcbiAqICAgICBBcnJheS5mcm9tKFwiZm9vXCIpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA9PiBbXCJmXCIsIFwib1wiLCBcIm9cIl1cclxuICogICAgIEFycmF5LmZyb20oIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzcGFuXCIpKSAgICAgICAgICAgIC8vID0+IFtFbGVtZW50LCBFbGVtZW50LCBFbGVtZW50LC4uLl1cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IGFycmF5TGlrZSDphY3liJfjgavlpInmj5vjgZnjgosgYXJyYXktbGlrZSDjgqrjg5bjgrjjgqfjgq/jg4hcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXSBhcnJheUxpa2Ug44Gu44GZ44G544Gm44Gu6KaB57Sg44Gr5a++44GX44Gm5a6f6KGM44GZ44KL44Oe44OD44OX6Zai5pWwXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbY29udGV4dF0gY2FsbGJhY2sg5YaF44GnIHRoaXMg44Go44GX44Gm5Y+C54Wn44GV44KM44KL5YCkXHJcbiAqIEByZXR1cm4ge0FycmF5fSDnlJ/miJDjgZfjgZ/phY3liJdcclxuICovXHJcbi8vIEFycmF5LiRtZXRob2QoXCJmcm9tXCIsIGZ1bmN0aW9uKGFycmF5TGlrZSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcclxuLy8gICBpZiAoIU9iamVjdChhcnJheUxpa2UpLmxlbmd0aCkgcmV0dXJuIFtdO1xyXG5cclxuLy8gICB2YXIgcmVzdWx0ID0gW107XHJcbi8vICAgaWYgKFN5bWJvbCAmJiBTeW1ib2wuaXRlcmF0b3IgJiYgYXJyYXlMaWtlW1N5bWJvbC5pdGVyYXRvcl0pIHtcclxuLy8gICAgICAgdmFyIGl0ZXJhdG9yID0gYXJyYXlMaWtlW1N5bWJvbC5pdGVyYXRvcl0oKTtcclxuLy8gICAgICAgd2hpbGUgKHRydWUpIHtcclxuLy8gICAgICAgICAgIHZhciBpdGVyYXRvclJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKTtcclxuLy8gICAgICAgICAgIGlmIChpdGVyYXRvclJlc3VsdC5kb25lKSBicmVhaztcclxuXHJcbi8vICAgICAgICAgICB2YXIgdmFsdWUgPSB0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicgPyBjYWxsYmFjay5iaW5kKGNvbnRleHQgfHwgdGhpcykoaXRlcmF0b3JSZXN1bHQudmFsdWUpIDogaXRlcmF0b3JSZXN1bHQudmFsdWU7XHJcbi8vICAgICAgICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XHJcbi8vICAgICAgIH1cclxuLy8gICAgICAgcmV0dXJuIHJlc3VsdDtcclxuLy8gICB9XHJcblxyXG4vLyAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnJheUxpa2UubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuLy8gICAgICAgcmVzdWx0LnB1c2goYXJyYXlMaWtlW2ldKTtcclxuLy8gICB9XHJcbi8vICAgcmV0dXJuIHJlc3VsdC5tYXAodHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicgPyBjYWxsYmFjayA6IGZ1bmN0aW9uKGl0ZW0pIHtcclxuLy8gICAgIHJldHVybiBpdGVtO1xyXG4vLyAgIH0sIGNvbnRleHQpO1xyXG4vLyB9KTtcblxuLypcclxuICogcGhpbmEuanMgbmFtZXNwYWNlXHJcbiAqL1xyXG52YXIgcGhpbmEkMSA9IHBoaW5hJDEgfHwge307XHJcblxyXG4vLyDkuIDml6bmi6HlvLVcclxuLy8gJG1ldGhvZC5jYWxsKHBoaW5hLCBcImhvZ2VcIiwgLi4uKeOBqOOBl+OBpuOCguiJr+OBhOOBjOOAgeabuOOBjeaPm+OBiOOBjOWkp+WkieOBquOBn+OCgVxyXG5waGluYSQxLiRtZXRob2QgPSBmdW5jdGlvbiguLi5hcmdzKSB7XHJcbi8vIHBoaW5hLnByb3RvdHlwZS4kbWV0aG9kID0gZnVuY3Rpb24oLi4uYXJncykgeyAvLyBuZ1xyXG4gIHJldHVybiAkbWV0aG9kLmNhbGwodGhpcywgLi4uYXJncylcclxufTtcclxuXHJcbi8vIDsoZnVuY3Rpb24oKSB7XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hXHJcbiAqICMgcGhpbmEuanMgbmFtZXNwYWNlXHJcbiAqIHBoaW5hLmpzIOOBruODjeODvOODoOOCueODmuODvOOCueOBp+OBmeOAgnBoaW5hLmpzIOOBruaPkOS+m+OBmeOCi+apn+iDveOBr++8iOOCs+OCouaLoeW8teS7peWklu+8ieWFqOOBpuOBk+OBruOCquODluOCuOOCp+OCr+ODiOOBq+WFpeOBo+OBpuOBhOOBvuOBmeOAglxyXG4gKlxyXG4gKiAjIyBwaGluYS5qcyDjga7jgq/jg6njgrnlrprnvqnjgavjgaTjgYTjgaZcclxuICpcclxuICogcGhpbmEuanMg44Gn44Gv54us6Ieq44Gu44Kv44Op44K544K344K544OG44Og44KS5a6f6KOF44GX44Gm44GE44G+44GZ44CCXHJcbiAqIHBoaW5hLmpzIOOBruOCr+ODqeOCueOBrueJueW+tOOBqOOBl+OBpuOBryBuZXcg5qeL5paH44KS5L2/55So44GX44Gq44GE44Gf44KB44CB44Oh44K944OD44OJ44OB44Kn44O844Oz44GM44GX44KE44GZ44GE44GT44Go44KE44CB5paH5a2X5YiX44Gn44Kv44Op44K544KS5a6a576p44GX44Gf44KK6Kaq44Kv44Op44K544KS5oyH5a6a44GX44Gf44KK44Gn44GN44KL54K544GM5oyZ44GS44KJ44KM44G+44GZ44CCXHJcbiAqIOaWh+Wtl+WIl+OCkuS9v+eUqOOBp+OBjeOCi+OBk+OBqOOBp+OAgeOCr+ODqeOCueOCkuWumue+qeOBmeOCi+autemajuOBp+imquOCr+ODqeOCueOBjOaMh+WumuOBleOCjOOBpuOBhOOBquOBj+OBpuOCguOAgeOCr+ODqeOCueOCkuWRvOOBs+WHuuOBmeautemajuOBp+imquOCr+ODqeOCueOBjOWumue+qeOBleOCjOOBpuOBhOOCjOOBsOOBhOOBhOOBqOOBhOOBhuODoeODquODg+ODiOOBjOOBguOCiuOBvuOBmeOAglxyXG4gKlxyXG4gKiDjgq/jg6njgrnjga7lrprnvqnjgavjga8ge0BsaW5rICNjcmVhdGVDbGFzc30sIHtAbGluayAjZGVmaW5lfSDjgpLkvb/nlKjjgZfjgb7jgZnjgILoqbPjgZfjgYTkvb/jgYTmlrnjga/jgZ3jgozjgZ7jgozjga7plqLmlbDjga7poIXjgpLlj4LnhafjgZfjgabjgY/jgaDjgZXjgYTjgIJcclxuICpcclxuICogIyMg44Kv44Op44K544Gr44Gk44GE44Gm44Gu6KOc6LazXHJcbiAqXHJcbiAqIHBoaW5hLmpzIOOBruOCr+ODqeOCueOBp+OBryBzdXBlckNsYXNzIOOCkuaMh+WumuOBmeOCi+OBqOS7peS4i+OBruODoeOCveODg+ODieOBjOiHquWLleOBp+i/veWKoOOBleOCjOOBvuOBmeOAglxyXG4gKlxyXG4gKiAtIHN1cGVySW5pdCgpOiDopqrjgq/jg6njgrnjga7jgrPjg7Pjgrnjg4jjg6njgq/jgr/jgpLlkbzjgbPlh7rjgZnvvIjliJ3mnJ/ljJbvvIlcclxuICogLSBzdXBlck1ldGhvZCgpOiDopqrjgq/jg6njgrnjga7jg6Hjgr3jg4Pjg4njgpLlkbzjgbPlh7rjgZlcclxuICpcclxuICogc3VwZXJJbml0IOOBr+W8leaVsOOCkuWkieOBiOOCi+OBk+OBqOOBp+imquOCr+ODqeOCueOBruOCs+ODs+OCueODiOODqeOCr+OCv+OCkuWRvOOBtuOBqOOBjeOBruW8leaVsOOCkuWkieOBiOOCieOCjOOBvuOBmeOAglxyXG4gKiBzdXBlck1ldGhvZCDjga/kuIDjgaTnm67jga7lvJXmlbDjgavlkbzjgbPlh7rjgZfjgZ/jgYTopqrjgq/jg6njgrnjga7jg6Hjgr3jg4Pjg4nlkI3jgpLmloflrZfliJfjgafjgIHkuozjgaTnm67ku6XpmY3jgavlkbzjgbPlh7rjgZfjgZ/jgYTjg6Hjgr3jg4Pjg4njga7lvJXmlbDjgpLmuKHjgZfjgb7jgZnjgIJcclxuICpcclxuICog44G+44GfIHBoaW5hLmpzIOOBruOCr+ODqeOCueOBp+OBr+S7peS4i+OBrueJueWIpeOBquW9ueWJsuOCkuOCguOBo+OBn+ODl+ODreODkeODhuOCo+OAgeODoeOCveODg+ODieOBjOWtmOWcqOOBl+OBvuOBmeOAglxyXG4gKlxyXG4gKiAtIF9hY2Nlc3Nvcjog44Ki44Kv44K744OD44K144O877yI44Ky44OD44K/44O844Go44K744OD44K/44O877yJ44KS5a6a576p44GZ44KL44Gf44KB44Gu44OX44Ot44OR44OG44KjXHJcbiAqIC0gX3N0YXRpYzogc3RhdGljIOODoeODs+ODkOOCkuWumue+qeOBmeOCi+OBn+OCgeOBruODl+ODreODkeODhuOCo1xyXG4gKiAtIF9kZWZpbmVkKCk6IOOCr+ODqeOCueOBjOWumue+qeOBleOCjOOBn+OBqOOBjeOBq+WRvOOBsOOCjOOCi+ODoeOCveODg+ODiVxyXG4gKlxyXG4gKiAjIyMgX2FjY2Vzc29yIOOBruS9v+eUqOS+i1xyXG4gKiAgICAgdmFyIENsYXNzID0gcGhpbmEuY3JlYXRlQ2xhc3Moe1xyXG4gKiAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICogICAgICAgICAuLi5cclxuICogICAgICAgfSxcclxuICpcclxuICogICAgICAgX2FjY2Vzc29yOiBmdW5jdGlvbigpIHtcclxuICogICAgICAgICB2YWx1ZToge1xyXG4gKiAgICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICogICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gKiAgICAgICAgICAgfSxcclxuICpcclxuICogICAgICAgICAgIHNldDogZnVuY3Rpb24odikge1xyXG4gKiAgICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHY7XHJcbiAqICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd2YWx1ZeOBjOOCu+ODg+ODiOOBleOCjOOBvuOBl+OBn++8gScpO1xyXG4gKiAgICAgICAgICAgfVxyXG4gKiAgICAgICAgIH1cclxuICogICAgICAgfVxyXG4gKiAgICAgfSk7XHJcbiAqXHJcbiAqICMjIyBfc3RhdGljIOOBruS9v+eUqOS+i1xyXG4gKiAgICAgdmFyIENsYXNzID0gcGhpbmEuY3JlYXRlQ2xhc3Moe1xyXG4gKiAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICogICAgICAgICAuLi5cclxuICogICAgICAgfSxcclxuICpcclxuICogICAgICAgX3N0YXRpYzoge1xyXG4gKlxyXG4gKiAgICAgICAgIHN0YXRpY1Byb3BlcnR5MTogMSxcclxuICogICAgICAgICBzdGF0aWNQcm9wZXJ0eTI6IDIsXHJcbiAqXHJcbiAqICAgICAgICAgc3RhdGljTWV0aG9kMTogZnVuY3Rpb24oKXt9LFxyXG4gKiAgICAgICAgIHN0YXRpY01ldGhvZDI6IGZ1bmN0aW9uKCl7fVxyXG4gKlxyXG4gKiAgICAgICB9XHJcbiAqICAgICB9KTtcclxuICpcclxuICogICAgIGNvbnNvbGUubG9nKENsYXNzLnN0YXRpY1Byb3BlcnR5MSk7IC8vID0+IDFcclxuICpcclxuICogIyMjIF9kZWZpbmVkIOOBruS9v+eUqOS+i1xyXG4gKiAgICAgdmFyIENsYXNzID0gcGhpbmEuY3JlYXRlQ2xhc3Moe1xyXG4gKiAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICogICAgICAgfSxcclxuICpcclxuICogICAgICAgX2RlZmluZWQ6IGZ1bmN0aW9uKCkge1xyXG4gKiAgICAgICAgIGNvbnNvbGUubG9nKCdkZWZpbmVkIScpO1xyXG4gKiAgICAgICB9XHJcbiAqICAgICB9KTsgLy8gPT4gZGVmaW5lZCFcclxuICovXHJcblxyXG4vKipcclxuICogQHByb3BlcnR5IHtTdHJpbmd9IFtWRVJTSU9OID0gPCU9IHZlcnNpb24gJT5dXHJcbiAqIHBoaW5hLmpzIOOBruODkOODvOOCuOODp+ODs+OBp+OBmeOAglxyXG4gKlxyXG4gKiBAbWVtYmVyIHBoaW5hXHJcbiAqIEBzdGF0aWNcclxuICovXHJcbnBoaW5hJDEuVkVSU0lPTiA9IFwiMC4yLjNcIjtcclxuXHJcbi8qKlxyXG4gKiBAbWV0aG9kIGlzTm9kZVxyXG4gKiBOb2RlLmpzIOOBriBtb2R1bGUg44GL44Gp44GG44GL44KS44OB44Kn44OD44Kv44GX44G+44GZ44CCXHJcbiAqXHJcbiAqIEBtZW1iZXIgcGhpbmFcclxuICogQHN0YXRpY1xyXG4gKi9cclxucGhpbmEkMS4kbWV0aG9kKCdpc05vZGUnLCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKTtcclxufSk7XHJcblxyXG4vKipcclxuICogQG1ldGhvZCBuYW1lc3BhY2VcclxuICog5byV5pWw44Gv6Zai5pWw44Gn44CB44Gd44Gu6Zai5pWw5YaF44Gn44GuIHRoaXMg44GvIHBoaW5hIOOBq+OBquOCiuOBvuOBmeOAglxyXG4gKlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiDplqLmlbBcclxuICogQG1lbWJlciBwaGluYVxyXG4gKiBAc3RhdGljXHJcbiAqL1xyXG5waGluYSQxLiRtZXRob2QoJ25hbWVzcGFjZScsIGZ1bmN0aW9uKGZuKSB7XHJcbiAgZm4uY2FsbCh0aGlzKTtcclxufSk7XHJcblxyXG52YXIgbnMgPSBwaGluYSQxLmlzTm9kZSgpID8gZ2xvYmFsIDogd2luZG93O1xyXG5cclxuLyoqXHJcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBnbG9iYWxcclxuICogTm9kZS5qcyDjgarjgokgZ2xvYmFsIOODluODqeOCpuOCtuOBquOCiSB3aW5kb3cg44KS6L+U44GX44G+44GZ44CCXHJcbiAqIOOCsuODg+OCv+ODvOOBruOBv+Wumue+qeOBleOCjOOBpuOBhOOBvuOBmeOAglxyXG4gKlxyXG4gKiBAbWVtYmVyIHBoaW5hXHJcbiAqIEByZWFkb25seVxyXG4gKiBAc3RhdGljXHJcbiAqL1xyXG4vLyBwaGluYS5hY2Nlc3NvcignZ2xvYmFsJywge1xyXG5hY2Nlc3Nvci5jYWxsKHBoaW5hJDEsICdnbG9iYWwnLCB7XHJcbiAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiBucztcclxuICB9LFxyXG59KTtcclxuXHJcblxyXG4vKipcclxuICogQG1ldGhvZCB0ZXN0VUFcclxuICog5byV5pWw44GuIFJlZ0V4cCDjgqrjg5bjgrjjgqfjgq/jg4jjgajjg6bjg7zjgrbjg7zjgqjjg7zjgrjjgqfjg7Pjg4jjgpLmr5TovIPjgZfjgabov5TjgZfjgb7jgZnjgIJcclxuICpcclxuICogQHBhcmFtIHtSZWdFeHB9XHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAqIEBtZW1iZXIgcGhpbmFcclxuICogQHN0YXRpY1xyXG4gKi9cclxucGhpbmEkMS4kbWV0aG9kKCd0ZXN0VUEnLCBmdW5jdGlvbihyZWdFeHApIHtcclxuICBpZiAoIXBoaW5hJDEuZ2xvYmFsLm5hdmlnYXRvcikgcmV0dXJuIGZhbHNlO1xyXG4gIHZhciB1YSA9IHBoaW5hJDEuZ2xvYmFsLm5hdmlnYXRvci51c2VyQWdlbnQ7XHJcbiAgcmV0dXJuIHJlZ0V4cC50ZXN0KHVhKTtcclxufSk7XHJcblxyXG4vKipcclxuICogQG1ldGhvZCBpc0FuZHJvaWRcclxuICogQW5kcm9pZCDjgYvjganjgYbjgYvjgpLov5TjgZfjgb7jgZnjgIJcclxuICpcclxuICogQHJldHVybiB7Qm9vbGVhbn0gQW5kcm9pZCDjgYvjganjgYbjgYtcclxuICogQG1lbWJlciBwaGluYVxyXG4gKiBAc3RhdGljXHJcbiAqL1xyXG5waGluYSQxLiRtZXRob2QoJ2lzQW5kcm9pZCcsIGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBwaGluYSQxLnRlc3RVQSgvQW5kcm9pZC8pO1xyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBAbWV0aG9kIGlzSVBob25lXHJcbiAqIGlQaG9uZSDjgYvjganjgYbjgYvjgpLov5TjgZfjgb7jgZnjgIJcclxuICpcclxuICogQHJldHVybiB7Qm9vbGVhbn0gaVBob25lIOOBi+OBqeOBhuOBi1xyXG4gKiBAbWVtYmVyIHBoaW5hXHJcbiAqIEBzdGF0aWNcclxuICovXHJcbnBoaW5hJDEuJG1ldGhvZCgnaXNJUGhvbmUnLCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gcGhpbmEkMS50ZXN0VUEoL2lQaG9uZS8pO1xyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBAbWV0aG9kIGlzSVBhZFxyXG4gKiBpUGFkIOOBi+OBqeOBhuOBi+OCkui/lOOBl+OBvuOBmeOAglxyXG4gKlxyXG4gKiBAcmV0dXJuIHtCb29sZWFufSBpUGFkIOOBi+OBqeOBhuOBi1xyXG4gKiBAbWVtYmVyIHBoaW5hXHJcbiAqIEBzdGF0aWNcclxuICovXHJcbnBoaW5hJDEuJG1ldGhvZCgnaXNJUGFkJywgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIHBoaW5hJDEudGVzdFVBKC9pUGFkLyk7XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIEBtZXRob2QgaXNJT1NcclxuICogaU9TIOOBi+OBqeOBhuOBi+OCkui/lOOBl+OBvuOBmeOAglxyXG4gKlxyXG4gKiBAcmV0dXJuIHtCb29sZWFufSBpT1Mg44GL44Gp44GG44GLXHJcbiAqIEBtZW1iZXIgcGhpbmFcclxuICogQHN0YXRpY1xyXG4gKi9cclxucGhpbmEkMS4kbWV0aG9kKCdpc0lPUycsIGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBwaGluYSQxLnRlc3RVQSgvaVBob25lfGlQYWQvKTtcclxufSk7XHJcblxyXG4vKipcclxuICogQG1ldGhvZCBpc01vYmlsZVxyXG4gKiDjg6Ljg5DjgqTjg6vjgYvjganjgYbjgYvjgpLov5TjgZfjgb7jgZnjgILlhbfkvZPnmoTjgavjga8gQW5kcm9pZCwgaVBob25lLCBpUGFkIOOBruOBhOOBmuOCjOOBi+OBoOOBqCB0cnVlIOOBq+OBquOCiuOBvuOBmeOAglxyXG4gKlxyXG4gKiBAcmV0dXJuIHtCb29sZWFufSDjg6Ljg5DjgqTjg6vjgYvjganjgYbjgYtcclxuICogQG1lbWJlciBwaGluYVxyXG4gKiBAc3RhdGljXHJcbiAqL1xyXG5waGluYSQxLiRtZXRob2QoJ2lzTW9iaWxlJywgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIHBoaW5hJDEudGVzdFVBKC9pUGhvbmV8aVBhZHxBbmRyb2lkLyk7XHJcbn0pO1xyXG5cclxuLy8gLy8gc3VwcG9ydCBub2RlLmpzXHJcbi8vIGlmIChwaGluYS5pc05vZGUoKSkge1xyXG4vLyAgIG1vZHVsZS5leHBvcnRzID0gcGhpbmE7XHJcbi8vIH1cclxuXHJcbi8vIG5zLnBoaW5hID0gcGhpbmE7XHJcblxyXG4vLyB9KSh0aGlzKTtcclxuXHJcblxyXG5waGluYSQxLm5hbWVzcGFjZShmdW5jdGlvbigpIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBjcmVhdGVDbGFzc1xyXG4gICAqIOOCr+ODqeOCueOCkuS9nOaIkOOBmeOCi+mWouaVsOOBp+OBmeOAglxyXG4gICAqIOimquOCr+ODqeOCueOBruaMh+WumuOBr+aWh+Wtl+WIl+OBp+OCguWPr+iDveOBp+OBmeOAglxyXG4gICAqIOS9leOCgue2meaJv+OBl+OBquOBhOWgtOWQiCBzdXBlckNsYXNzIOOBruaMh+WumuOBr+S4jeimgeOBp+OBmeOAguOBvuOBn+OAgeimquOCr+ODqeOCueOCkue2meaJv+OBl+OBpuOBhOOCi+WgtOWQiOOAgeOCs+ODs+OCueODiOODqeOCr+OCv+WGheOBpyB0aGlzLnN1cGVySW5pdCgpIOOCkuWun+ihjOOBl+OBpuimquOCr+ODqeOCueOCkuWIneacn+WMluOBmeOCi+OBk+OBqOOBjOW/hemgiOOBp+OBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdmFyIENsYXNzID0gcGhpbmEuY3JlYXRlQ2xhc3Moe1xyXG4gICAqIOOAgOOAgCAgc3VwZXJDbGFzczogJ25hbWVzcGFjZS5TdXBlcicsLy/opqrjgq/jg6njgrnntpnmib9cclxuICAgKlxyXG4gICAqIOOAgOOAgCAgLy/jg6Hjg7Pjg5DlpInmlbBcclxuICAgKiDjgIDjgIAgIG1lbWJlcjE6IDEwMCxcclxuICAgKiDjgIDjgIAgIG1lbWJlcjI6ICd0ZXN0JyxcclxuICAgKiDjgIDjgIAgIG1lbWJlcjM6IG51bGwsXHJcbiAgICpcclxuICAgKlxyXG4gICAqIOOAgOOAgCAgLy/jgrPjg7Pjgrnjg4jjg6njgq/jgr9cclxuICAgKiDjgIDjgIAgIC8vQ2xhc3MoKeOCkuWRvOOBs+WHuuOBl+OBn+OBqOOBjeWun+ihjOOBleOCjOOCi1xyXG4gICAqIOOAgOOAgCAgaW5pdDogZnVuY3Rpb24oYSwgYil7XHJcbiAgICog44CA44CAICAgIC8v44K544O844OR44O844Kv44Op44K5KOe2meaJv+OBl+OBn+OCr+ODqeOCuSnjga5pbml0XHJcbiAgICog44CA44CAICAgIHRoaXMuc3VwZXJJbml0KGEsIGIpO1xyXG4gICAqIOOAgOOAgCAgICB0aGlzLmEgPSBhO1xyXG4gICAqIOOAgOOAgCAgICB0aGlzLmIgPSBiO1xyXG4gICAqIOOAgOOAgCAgfSxcclxuICAgKiDjgIDjgIBcclxuICAgKiDjgIDjgIAgIC8v44Oh44K944OD44OJXHJcbiAgICog44CA44CAICBtZXRob2QxOiBmdW5jdGlvbigpe30sXHJcbiAgICog44CA44CAICBtZXRob2QyOiBmdW5jdGlvbigpe30sXHJcbiAgICog44CA44CAXHJcbiAgICog44CA44CAfSk7XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH1cclxuICAgKiBAcmV0dXJuIHtGdW5jdGlvbn0g44Kv44Op44K5XHJcbiAgICogQG1lbWJlciBwaGluYVxyXG4gICAqIEBzdGF0aWNcclxuICAgKi9cclxuICBwaGluYSQxLiRtZXRob2QoJ2NyZWF0ZUNsYXNzJywgZnVuY3Rpb24ocGFyYW1zKSB7XHJcblxyXG4gICAgdmFyIF9jbGFzcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgX2NsYXNzLnByb3RvdHlwZS5fY3JlYXRvcigpO1xyXG4gICAgICBfY2xhc3MucHJvdG90eXBlLmluaXQuYXBwbHkoaW5zdGFuY2UsIGFyZ3VtZW50cyk7XHJcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKHBhcmFtcy5zdXBlckNsYXNzKSB7XHJcbiAgICAgIF9jbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHBhcmFtcy5zdXBlckNsYXNzLnByb3RvdHlwZSk7XHJcbiAgICAgIHBhcmFtcy5pbml0Lm93bmVyID0gX2NsYXNzO1xyXG4gICAgICBfY2xhc3MucHJvdG90eXBlLnN1cGVySW5pdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuX19jb3VudGVyID0gdGhpcy5fX2NvdW50ZXIgfHwgMDtcclxuXHJcbiAgICAgICAgdmFyIHN1cGVyQ2xhc3MgPSB0aGlzLl9oaWVyYXJjaGllc1t0aGlzLl9fY291bnRlcisrXTtcclxuICAgICAgICB2YXIgc3VwZXJJbml0ID0gc3VwZXJDbGFzcy5wcm90b3R5cGUuaW5pdDtcclxuICAgICAgICBzdXBlckluaXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fX2NvdW50ZXIgPSAwO1xyXG4gICAgICB9O1xyXG4gICAgICBfY2xhc3MucHJvdG90eXBlLnN1cGVyTWV0aG9kID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xyXG4gICAgICAgIHZhciBuYW1lID0gYXJncy5zaGlmdCgpO1xyXG4gICAgICAgIHRoaXMuX19jb3VudGVycyA9IHRoaXMuX19jb3VudGVycyB8fCB7fTtcclxuICAgICAgICB0aGlzLl9fY291bnRlcnNbbmFtZV0gPSB0aGlzLl9fY291bnRlcnNbbmFtZV0gfHwgMDtcclxuXHJcbiAgICAgICAgdmFyIHN1cGVyQ2xhc3MgPSB0aGlzLl9oaWVyYXJjaGllc1sgdGhpcy5fX2NvdW50ZXJzW25hbWVdKysgXTtcclxuICAgICAgICB2YXIgc3VwZXJNZXRob2QgPSBzdXBlckNsYXNzLnByb3RvdHlwZVtuYW1lXTtcclxuICAgICAgICB2YXIgcnN0ID0gc3VwZXJNZXRob2QuYXBwbHkodGhpcywgYXJncyk7XHJcblxyXG4gICAgICAgIHRoaXMuX19jb3VudGVyc1tuYW1lXSA9IDA7XHJcblxyXG4gICAgICAgIHJldHVybiByc3Q7XHJcbiAgICAgIH07XHJcbiAgICAgIF9jbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBfY2xhc3M7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIC8vXHJcbiAgICAvLyBwYXJhbXMuZm9ySW4oZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgLy8gICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAvLyAgICAgX2NsYXNzLiRtZXRob2Qoa2V5LCB2YWx1ZSk7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vICAgZWxzZSB7XHJcbiAgICAvLyAgICAgX2NsYXNzLnByb3RvdHlwZVtrZXldID0gdmFsdWU7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH0pO1xyXG4gICAgLy8g57aZ5om/XHJcbiAgICAkZXh0ZW5kLmNhbGwoX2NsYXNzLnByb3RvdHlwZSwgcGFyYW1zKTtcclxuICAgIC8vIF9jbGFzcy5wcm90b3R5cGUuJGV4dGVuZChwYXJhbXMpO1xyXG5cclxuICAgIC8vIOe2meaJv+eUqFxyXG4gICAgX2NsYXNzLnByb3RvdHlwZS5faGllcmFyY2hpZXMgPSBbXTtcclxuICAgIHZhciBfc3VwZXIgPSBfY2xhc3MucHJvdG90eXBlLnN1cGVyQ2xhc3M7XHJcbiAgICB3aGlsZShfc3VwZXIpIHtcclxuICAgICAgX2NsYXNzLnByb3RvdHlwZS5faGllcmFyY2hpZXMucHVzaChfc3VwZXIpO1xyXG4gICAgICBfc3VwZXIgPSBfc3VwZXIucHJvdG90eXBlLnN1cGVyQ2xhc3M7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYWNjZXNzb3JcclxuICAgIGlmIChwYXJhbXMuX2FjY2Vzc29yKSB7XHJcbiAgICAgIGZvckluLmNhbGwocGFyYW1zLl9hY2Nlc3NvciwgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgICAvLyBwYXJhbXMuX2FjY2Vzc29yLmZvckluKGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgICBhY2Nlc3Nvci5jYWxsKF9jbGFzcy5wcm90b3R5cGUsIGtleSwgdmFsdWUpO1xyXG4gICAgICAgIC8vIF9jbGFzcy5wcm90b3R5cGUuYWNjZXNzb3Ioa2V5LCB2YWx1ZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyBfY2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShfY2xhc3MucHJvdG90eXBlLCBwYXJhbXMuX2FjY2Vzc29yKTtcclxuICAgIH1cclxuXHJcbiAgICBfY2xhc3MucHJvdG90eXBlLl9jcmVhdG9yID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9O1xyXG4gICAgX2NsYXNzLnByb3RvdHlwZS5fY3JlYXRvci5wcm90b3R5cGUgPSBfY2xhc3MucHJvdG90eXBlO1xyXG5cclxuICAgIC8vIHN0YXRpYyBwcm9wZXJ0eS9tZXRob2RcclxuICAgIGlmIChwYXJhbXMuX3N0YXRpYykge1xyXG4gICAgICAkZXh0ZW5kLmNhbGwoX2NsYXNzLCBwYXJhbXMuX3N0YXRpYyk7XHJcbiAgICAgIC8vIF9jbGFzcy4kZXh0ZW5kKHBhcmFtcy5fc3RhdGljKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocGFyYW1zLl9kZWZpbmVkKSB7XHJcbiAgICAgIHBhcmFtcy5fZGVmaW5lZC5jYWxsKF9jbGFzcywgX2NsYXNzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gX2NsYXNzO1xyXG4gIH0pO1xyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHVzaW5nXHJcbiAgICog5paH5a2X5YiX44Gn5a6a576p44GX44Gf44OR44K544KS5L2/44Gj44Gm44Kq44OW44K444Kn44Kv44OI44KS5Y+W44KK5Ye644GX44G+44GZ44CC44OR44K544GvICwgLiAvIFxcIDo6IOOBp+WMuuWIh+OCi+OBk+OBqOOBjOOBp+OBjeOBvuOBmeOAglxyXG4gICAqIHtAbGluayAjcGhpbmEucmVnaXN0ZXJ9IOOBp+eZu+mMsuOBl+OBn+OCquODluOCuOOCp+OCr+ODiOOCkuWPluOCiuWHuuOBmeOBqOOBjeOBquOBqeOBq+S9v+OBhuOBqOS+v+WIqeOBqumWouaVsOOBp+OBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgaG9nZSA9IHtcclxuICAgKiAgICAgICBmb286IHtcclxuICAgKiAgICAgICAgIGJhcjoge1xyXG4gICAqICAgICAgICAgICBudW06IDEwMFxyXG4gICAqICAgICAgICAgfVxyXG4gICAqICAgICAgIH1cclxuICAgKiAgICAgfTtcclxuICAgKiAgICAgdmFyIGJhciA9IHBoaW5hLnVzaW5nKCdob2dlLmZvby5iYXInKTtcclxuICAgKiAgICAgY29uc29sZS5sb2coYmFyLm51bSk7IC8vID0+IDEwMFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhdGgg44Kq44OW44K444Kn44Kv44OI44G444Gu44OR44K5XHJcbiAgICogQHJldHVybiB7T2JqZWN0fSDlj5bjgorlh7rjgZfjgZ/jgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgKiBAbWVtYmVyIHBoaW5hXHJcbiAgICogQHN0YXRpY1xyXG4gICAqL1xyXG4gIHBoaW5hJDEuJG1ldGhvZCgndXNpbmcnLCBmdW5jdGlvbihwYXRoKSB7XHJcbiAgICBpZiAoIXBhdGgpIHtcclxuICAgICAgcmV0dXJuIHBoaW5hJDEuZ2xvYmFsO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBwYXRoZXMgPSBwYXRoLnNwbGl0KC9bLC5cXC8gXXw6Oi8pO1xyXG4gICAgdmFyIGN1cnJlbnQgPSBwaGluYSQxLmdsb2JhbDtcclxuXHJcbiAgICBwYXRoZXMuZm9yRWFjaChmdW5jdGlvbihwKSB7XHJcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50W3BdIHx8IChjdXJyZW50W3BdPXt9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjdXJyZW50O1xyXG4gIH0pO1xyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHJlZ2lzdGVyXHJcbiAgICog44OR44K55oyH5a6a44Gn44Kq44OW44K444Kn44Kv44OI44KS55m76Yyy44GZ44KL6Zai5pWw44Gn44GZ44CC44OR44K544GvICwgLiAvIFxcIDo6IOOBp+WMuuWIh+OCi+OBk+OBqOOBjOOBp+OBjeOBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgcGhpbmEucmVnaXN0ZXIoJ2hvZ2UuZm9vLmJhcicsIHtcclxuICAgKiAgICAgICBudW06IDEwMCxcclxuICAgKiAgICAgfSk7XHJcbiAgICogICAgIGNvbnNvbGUubG9nKGhvZ2UuZm9vLmJhci5udW0pOyAvLyA9PiAxMDBcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoIOeZu+mMsuOBmeOCi+OCquODluOCuOOCp+OCr+ODiOOBruODkeOCuVxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBfY2xhc3Mg55m76Yyy44GZ44KL44Kq44OW44K444Kn44Kv44OIXHJcbiAgICogQHJldHVybiB7T2JqZWN0fSDnmbvpjLLjgZfjgZ/jgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgKiBAbWVtYmVyIHBoaW5hXHJcbiAgICogQHN0YXRpY1xyXG4gICAqL1xyXG4gIHBoaW5hJDEuJG1ldGhvZCgncmVnaXN0ZXInLCBmdW5jdGlvbihwYXRoLCBfY2xhc3MpIHtcclxuICAgIHZhciBwYXRoZXMgPSBwYXRoLnNwbGl0KC9bLC5cXC8gXXw6Oi8pO1xyXG4gICAgLy8gdmFyIGNsYXNzTmFtZSA9IHBhdGhlcy5sYXN0O1xyXG4gICAgdmFyIGNsYXNzTmFtZSA9IGxhc3QuZ2V0LmNhbGwocGF0aGVzKTtcclxuICAgIHZhciBwYXJlbnRQYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcGF0aC5sYXN0SW5kZXhPZignLicpKTsgLy8g44GT44GT44KS55u044GV44Gq44GE44Go44OU44Oq44Kq44OJ5Yy65YiH44KK5Lul5aSW44Gv54Sh5Yq577yfXHJcbiAgICB2YXIgcGFyZW50ID0gcGhpbmEkMS51c2luZyhwYXJlbnRQYXRoKTtcclxuXHJcbiAgICBwYXJlbnRbY2xhc3NOYW1lXSA9IF9jbGFzcztcclxuXHJcbiAgICByZXR1cm4gX2NsYXNzO1xyXG4gIH0pO1xyXG5cclxuICB2YXIgX2NsYXNzRGVmaW5lZENhbGxiYWNrID0ge307XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgZGVmaW5lXHJcbiAgICog44Kv44Op44K544KS5a6a576p44GZ44KL6Zai5pWw44Gn44GZ44CC5L2/44GE5pa544GvIHtAbGluayAjY3JlYXRlQ2xhc3N9IOOBqOOBu+OBqOOCk+OBqeWQjOOBmOOBp+OBmeOAglxyXG4gICAqIOOBn+OBoOOBl+OAgeW8leaVsOOBrzLjgaTjgYLjgorjgIHnrKzkuIDlvJXmlbDjga/lrprnvqnjgZnjgovjgq/jg6njgrnjga7jg5HjgrnjgpLmloflrZfliJfjgafmuKHjgZfjgb7jgZnjgILnrKzkuozlvJXmlbDjga7jgqrjg5bjgrjjgqfjgq/jg4jjga8ge0BsaW5rICNjcmVhdGVDbGFzc30g44Gu5byV5pWw44Go5ZCM44GY44KI44GG44Gr44GX44G+44GZ44CCXHJcbiAgICoge0BsaW5rICNjcmVhdGVDbGFzc30g44Go6YGV44GE44CB5aSJ5pWw44Gr5Luj5YWl44GZ44KL5b+F55So44GM44Gq44GP44CB44OR44K55oyH5a6a44Gn44Kv44Op44K544KS5a6a576p44Gn44GN44G+44GZ44CCXHJcbiAgICog5YaF6YOo55qE44Gr44GvIHtAbGluayAjcmVnaXN0ZXJ9LCB7QGxpbmsgI3VzaW5nfSDjgpLkvb/nlKjjgZfjgabjgYTjgovjgZ/jgoHjgIHjg5Hjgrnjga8gLCAuIC8gXFwgOjog44Gn5Yy65YiH44KL44GT44Go44GM44Gn44GN44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBwaGluYS5kZWZpbmUoJ25hbWVzcGFjZS5DbGFzcycsIHtcclxuICAgKiAgICAgICBzdXBlckNsYXNzOiAnbmFtZXNwYWNlLlN1cGVyJywvL+imquOCr+ODqeOCuee2meaJv1xyXG4gICAqXHJcbiAgICogICAgICAgLy/jg6Hjg7Pjg5DlpInmlbBcclxuICAgKiAgICAgICBtZW1iZXIxOiAxMDAsXHJcbiAgICogICAgICAgbWVtYmVyMjogJ3Rlc3QnLFxyXG4gICAqICAgICAgIG1lbWJlcjM6IG51bGwsXHJcbiAgICpcclxuICAgKlxyXG4gICAqICAgICAgIC8v44Kz44Oz44K544OI44Op44Kv44K/XHJcbiAgICogICAgICAgLy9DbGFzcygp44KS5ZG844Gz5Ye644GX44Gf44Go44GN5a6f6KGM44GV44KM44KLXHJcbiAgICogICAgICAgaW5pdDogZnVuY3Rpb24oYSwgYil7XHJcbiAgICogICAgICAgICAvL+OCueODvOODkeODvOOCr+ODqeOCuSjntpnmib/jgZfjgZ/jgq/jg6njgrkp44GuaW5pdFxyXG4gICAqICAgICAgICAgdGhpcy5zdXBlckluaXQoYSwgYik7XHJcbiAgICogICAgICAgICB0aGlzLmEgPSBhO1xyXG4gICAqICAgICAgICAgdGhpcy5iID0gYjtcclxuICAgKiAgICAgICB9LFxyXG4gICAqXHJcbiAgICogICAgICAgLy/jg6Hjgr3jg4Pjg4lcclxuICAgKiAgICAgICBtZXRob2QxOiBmdW5jdGlvbigpe30sXHJcbiAgICogICAgICAgbWV0aG9kMjogZnVuY3Rpb24oKXt9LFxyXG4gICAqXHJcbiAgICogICAgIH0pO1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhdGgg44OR44K5XHJcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyDjgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgKiBAcmV0dXJuIHtGdW5jdGlvbn0g5a6a576p44GX44Gf44Kv44Op44K5XHJcbiAgICogQG1lbWJlciBwaGluYVxyXG4gICAqIEBzdGF0aWNcclxuICAgKi9cclxuICBwaGluYSQxLiRtZXRob2QoJ2RlZmluZScsIGZ1bmN0aW9uKHBhdGgsIHBhcmFtcykge1xyXG4gICAgaWYgKHBhcmFtcy5zdXBlckNsYXNzKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgcGFyYW1zLnN1cGVyQ2xhc3MgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgdmFyIF9zdXBlckNsYXNzID0gcGhpbmEkMS51c2luZyhwYXJhbXMuc3VwZXJDbGFzcyk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBfc3VwZXJDbGFzcyAhPSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICBpZiAoIV9jbGFzc0RlZmluZWRDYWxsYmFja1twYXJhbXMuc3VwZXJDbGFzc10pIHtcclxuICAgICAgICAgICAgX2NsYXNzRGVmaW5lZENhbGxiYWNrW3BhcmFtcy5zdXBlckNsYXNzXSA9IFtdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgX2NsYXNzRGVmaW5lZENhbGxiYWNrW3BhcmFtcy5zdXBlckNsYXNzXS5wdXNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBwaGluYSQxLmRlZmluZShwYXRoLCBwYXJhbXMpO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBwYXJhbXMuc3VwZXJDbGFzcyA9IF9zdXBlckNsYXNzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBwYXJhbXMuc3VwZXJDbGFzcyA9IHBhcmFtcy5zdXBlckNsYXNzO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIF9jbGFzcyA9IHBoaW5hJDEuY3JlYXRlQ2xhc3MocGFyYW1zKTtcclxuICAgIGFjY2Vzc29yLmNhbGwoX2NsYXNzLnByb3RvdHlwZSwgJ2NsYXNzTmFtZScsIHtcclxuICAgIC8vIF9jbGFzcy5wcm90b3R5cGUuYWNjZXNzb3IoJ2NsYXNzTmFtZScsIHtcclxuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gcGF0aDtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHBoaW5hJDEucmVnaXN0ZXIocGF0aCwgX2NsYXNzKTtcclxuXHJcbiAgICBpZiAoX2NsYXNzRGVmaW5lZENhbGxiYWNrW3BhdGhdKSB7XHJcbiAgICAgIF9jbGFzc0RlZmluZWRDYWxsYmFja1twYXRoXS5mb3JFYWNoKGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgfSk7XHJcbiAgICAgIF9jbGFzc0RlZmluZWRDYWxsYmFja1twYXRoXSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIF9jbGFzcztcclxuICB9KTtcclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBnbG9iYWxpemVcclxuICAgKiBwaGluYS5qcyDjgYznlKjmhI/jgZfjgabjgYTjgovlhajjgabjga7jgq/jg6njgrnjgpLjgrDjg63jg7zjg5Djg6vjgavlsZXplovjgZfjgb7jgZnjgILvvIjlhbfkvZPnmoTjgavjga8gcGhpbmEg44GM5oyB44Gk44Kq44OW44K444Kn44Kv44OI44GM5LiA6YCa44KK44Kw44Ot44O844OQ44Or44Gr5bGV6ZaL44GV44KM44G+44GZ44CC77yJXHJcbiAgICog44GT44Gu6Zai5pWw44KS5a6f6KGM44GZ44KL44GT44Go44Gn44CB44GE44Gh44GE44GhIGdsb2JhbCDjgYvjgonjgZ/jganjgaPjgabjgYTjgYvjgarjgY/jgabjgoIgcGhpbmEuanMg44Gu55So5oSP44GX44Gm44GE44KL44Kv44Op44K544KS44Kv44Op44K55ZCN44Gg44GR44Gn5ZG844Gz5Ye644GZ44GT44Go44GM44Gn44GN44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBwaGluYS5nbG9iYWxpemUoKTtcclxuICAgKlxyXG4gICAqIEBtZW1iZXIgcGhpbmFcclxuICAgKiBAc3RhdGljXHJcbiAgICovXHJcbiAgcGhpbmEkMS4kbWV0aG9kKCdnbG9iYWxpemUnLCBmdW5jdGlvbigpIHtcclxuICAgIGZvckluLmNhbGwocGhpbmEkMSwgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG5cclxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHJldHVybiA7XHJcblxyXG4gICAgICBmb3JJbi5jYWxsKHZhbHVlLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgIC8vIHZhbHVlLmZvckluKGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAvLyBpZiAocGhpbmEuZ2xvYmFsW2tleV0pIHtcclxuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKG5zLCBrZXkpO1xyXG4gICAgICAgIC8vICAgcGhpbmEuZ2xvYmFsWydfJyArIGtleV0gPSB2YWx1ZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgLy8gICBwaGluYS5nbG9iYWxba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBwaGluYSQxLmdsb2JhbFtrZXldID0gdmFsdWU7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHBoaW5hJDEuX21haW5MaXN0ZW5lcnMgPSBbXTtcclxuICBwaGluYSQxLl9tYWluTG9hZGVkID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgbWFpblxyXG4gICAqIHBoaW5hLmpzIOOBp+ODl+ODreOCsOODqeODn+ODs+OCsOOBmeOCi+mam+OAgeODoeOCpOODs+OBruWHpueQhuOCkuiomOi/sOOBmeOCi+OBn+OCgeOBrumWouaVsOOBp+OBmeOAguWfuuacrOeahOOBqyBwaGluYS5qcyDjgafjga7jg5fjg63jgrDjg6njg5/jg7PjgrDjgafjga/jgZPjga7kuK3jgavjg5fjg63jgrDjg6njg6DjgpLmm7jjgYTjgabjgYTjgY/jgZPjgajjgavjgarjgorjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHBoaW5hLm1haW4oZnVuY3Rpb24oKSB7XHJcbiAgICogICAgICAgLy/jgZPjgZPjgavjg6HjgqTjg7Pjga7lh6bnkIbjgpLmm7jjgY9cclxuICAgKiAgICAgfSk7XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIOODoeOCpOODs+OBruWHpueQhlxyXG4gICAqIEBtZW1iZXIgcGhpbmFcclxuICAgKiBAc3RhdGljXHJcbiAgICovXHJcbiAgcGhpbmEkMS4kbWV0aG9kKCdtYWluJywgZnVuY3Rpb24oZnVuYykge1xyXG4gICAgaWYgKHBoaW5hJDEuX21haW5Mb2FkZWQpIHtcclxuICAgICAgZnVuYygpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHBoaW5hJDEuX21haW5MaXN0ZW5lcnMucHVzaChmdW5jKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgdmFyIGRvYyA9IHBoaW5hJDEuZ2xvYmFsLmRvY3VtZW50O1xyXG4gIGlmIChwaGluYSQxLmdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIGRvYyAmJiBkb2MucmVhZHlTdGF0ZSAhPT0gJ2NvbXBsZXRlJykge1xyXG4gICAgcGhpbmEkMS5nbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgcnVuID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGxpc3RlbmVycyA9IGNsb25lLmNhbGwocGhpbmEkMS5fbWFpbkxpc3RlbmVycyk7XHJcbiAgICAgICAgLy8gdmFyIGxpc3RlbmVycyA9IHBoaW5hLl9tYWluTGlzdGVuZXJzLmNsb25lKCk7XHJcbiAgICAgICAgY2xlYXIuY2FsbChwaGluYSQxLl9tYWluTGlzdGVuZXJzKTtcclxuICAgICAgICAvLyBwaGluYS5fbWFpbkxpc3RlbmVycy5jbGVhcigpO1xyXG4gICAgICAgIGxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uKGZ1bmMpIHtcclxuICAgICAgICAvLyBsaXN0ZW5lcnMuZWFjaChmdW5jdGlvbihmdW5jKSB7XHJcbiAgICAgICAgICBmdW5jKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIG1haW4g5YaF44GnIG1haW4g44KS6L+95Yqg44GX44Gm44GE44KL5aC05ZCI44GM44GC44KL44Gu44Gn44Gd44Gu44OB44Kn44OD44KvXHJcbiAgICAgICAgaWYgKHBoaW5hJDEuX21haW5MaXN0ZW5lcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgcnVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgcGhpbmEkMS5fbWFpbkxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICAvLyDjgaHjgofjgaPjgajpgYXlu7bjgZXjgZvjgoso55S76Z2i44K144Kk44K65ZWP6aGMKVxyXG4gICAgICBzZXRUaW1lb3V0KHJ1bik7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICBwaGluYSQxLl9tYWluTG9hZGVkID0gdHJ1ZTtcclxuICB9XHJcbn0pO1xuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLnV0aWwuRXZlbnREaXNwYXRjaGVyXHJcbiAqICMg44Kk44OZ44Oz44OI44KS5omx44GG44Gf44KB44Gu44Kv44Op44K5XHJcbiAqIOOCpOODmeODs+ODiOOCkuaJseOBhuOBn+OCgeOBruODoeOCveODg+ODieOChOODl+ODreODkeODhuOCo+OCkuWumue+qeOBl+OBpuOBhOOCi+OCr+ODqeOCueOBp+OBmeOAglxyXG4gKiBwaGluYS5qcyDjgYzmj5DkvpvjgZnjgovjgq/jg6njgrnjga7lpJrjgY/jga/jgZPjga4gRXZlbnREaXNwYXRjaGVyIOOCr+ODqeOCueOBruWtkOWtq+OBqOOBquOBo+OBpuOBhOOCi+OBn+OCgeOAgVxyXG4gKiDjgbvjgajjgpPjganjga7jgqrjg5bjgrjjgqfjgq/jg4jjgaflrrnmmJPjgavjgqTjg5njg7Pjg4jjgpLmibHjgYbjgZPjgajjgYzjgafjgY3jgb7jgZnjgIJcclxuICpcclxuICogIyDlsJHjgZfoqqzmmI5cclxuICogdGhpcy5vbnh4eCA9IGZ1bmN0aW9uKCl7fTsg44Gn44KC44Kk44OZ44Oz44OI44Oq44K544OK44KS6Kit5a6a44Gn44GN44KL44GM44CB44GC44G+44KK5o6o5aWo44GX44Gq44GE44CCXHJcbiAqIOWRvOOBs+WHuuOBleOCjOOCi+mghuW6j+OBr+OAgeOBvuOBmiB0aGlzLm9ueHh4eCDjgYzlkbzjgbPlh7rjgZXjgozjgIHjgYLjgajjga8gb24oKSDjgafnmbvpjLLjgZfjgZ/poIbnlarjgIJcclxuICogQG1lbWJlcm9mIHBoaW5hXHJcbiAqL1xyXG5jbGFzcyBFdmVudERpc3BhdGNoZXIge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX2xpc3RlbmVycyA9IHt9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBvblxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKiDjgqTjg5njg7Pjg4jjg6rjgrnjg4rjgpLnmbvpjLLjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqIO+8keOBpOOBruOCpOODmeODs+ODiOOBq+WvvuOBmeOCi+OCpOODmeODs+ODiOODquOCueODiuOBr+OBhOOBj+OBpOOBp+OCgueZu+mMsuOBmeOCi+OBk+OBqOOBjOOBp+OBjeOBvuOBmeOAglxyXG4gICAqXHJcbiAgICog5qiZ5rqW44Gu44Kk44OZ44Oz44OI44KS5qSc55+l44GZ44KL44Gr44Gv44CB44Kq44OW44K444Kn44Kv44OI44GuIHtAbGluayBPYmplY3QyRCNpbnRlcmFjdGl2ZX0g44OX44Ot44OR44OG44Kj44GMIHRydWUg44Gn44GC44KL5b+F6KaB44GM44GC44KK44G+44GZ44CCXHJcbiAgICoge0BsaW5rIE9iamVjdDJEI2ludGVyYWN0aXZlfSDjg5fjg63jg5Hjg4bjgqPjgpLoqK3lrprjgZnjgovjgavjga8ge0BsaW5rIE9iamVjdDJEI3NldEludGVyYWN0aXZlfSDjg6Hjgr3jg4Pjg4njgpLlkbzjgbPlh7rjgZfjgabjgY/jgaDjgZXjgYTjgIJcclxuICAgKlxyXG4gICAqIOOBvuOBn+OAgXtAbGluayAjZmxhcmV9IOOChCB7QGxpbmsgI2ZpcmV9IOOBq+OCiOOBo+OBpuWumue+qeOBl+OBn+OCq+OCueOCv+ODoOOCpOODmeODs+ODiOOBq+WvvuOBmeOCi+OCpOODmeODs+ODiOODquOCueODiuOCgueZu+mMsuOBmeOCi+OBk+OBqOOBjFxyXG4gICAqIOOBp+OBjeOBvuOBmeOAguOCq+OCueOCv+ODoOOCpOODmeODs+ODiOOBruOCpOODmeODs+ODiOODquOCueODiuOBryB7QGxpbmsgT2JqZWN0MkQjaW50ZXJhY3RpdmV9IOODl+ODreODkeODhuOCo+OBq+OCiOOCieOBmuWRvOOBs+WHuuOBleOCjOOBvuOBmeOAglxyXG4gICAqIOOBquOBiuOCq+OCueOCv+ODoOOCpOODmeODs+ODiOOBruOCquODluOCuOOCp+OCr+ODiOOBryBFdmVudCDjgqrjg5bjgrjjgqfjgq/jg4jjgajjga/nlbDjgarjgorjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjI1JlZmVyZW5jZVxyXG4gICAqIOaomea6luOBruOCpOODmeODs+ODiOOBrueorumhnuOBr+S7peS4i+OCkuWPgueFp+OBl+OBpuOBj+OBoOOBleOBhOOAglxyXG4gICAqIC0gW0V2ZW50IHJlZmVyZW5jZSB8IE1ETl0oIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0V2ZW50cyApXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2YXIgc2hhcGUgPSBDaXJjbGVTaGFwZSgpLmFkZENoaWxkVG8odGhpcykuc2V0SW50ZXJhY3RpdmUodHJ1ZSkuc2V0UG9zaXRpb24oNTAsIDUwKTtcclxuICAgKiAgICAgc2hhcGUub24oXCJ0b3VjaHN0YXJ0XCIsIGZ1bmN0aW9uKGUpe1xyXG4gICAqICAgICAgIHRoaXMuY29sb3IgPSBcImJsdWVcIjtcclxuICAgKiAgICAgfSk7XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSDjgqTjg5njg7Pjg4jjga7nqK7poZ5cclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciDjgqTjg5njg7Pjg4jjg6rjgrnjg4rjgajjgarjgovplqLmlbBcclxuICAgKiBAcGFyYW0ge09iamVjdH0gbGlzdGVuZXIuZXZlbnQgRXZlbnQg44Kq44OW44K444Kn44Kv44OI44CB44G+44Gf44Gv44Kr44K544K/44Og44Kk44OZ44Oz44OI44Gu44Kq44OW44K444Kn44Kv44OIXHJcbiAgICovXHJcbiAgb24odHlwZSwgbGlzdGVuZXIpIHtcclxuICAgIGlmICh0aGlzLl9saXN0ZW5lcnNbdHlwZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLl9saXN0ZW5lcnNbdHlwZV0gPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9saXN0ZW5lcnNbdHlwZV0ucHVzaChsaXN0ZW5lcik7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2Qgb2ZmXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIOOCpOODmeODs+ODiOODquOCueODiuOCkuWJiumZpOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICog44GC44KL56iu6aGe44Gu44Kk44OZ44Oz44OI44Gr5a++44GZ44KL44Kk44OZ44Oz44OI44Oq44K544OK44KS44GZ44G544Gm5YmK6Zmk44GZ44KL44Gr44GvIHtAbGluayAjY2xlYXJ9IOOCkuS9v+eUqOOBl+OBpuOBj+OBoOOBleOBhOOAglxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUg44Kk44OZ44Oz44OI44Gu56iu6aGeXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIg44Kk44OZ44Oz44OI44Oq44K544OK6Zai5pWwXHJcbiAgICovXHJcbiAgb2ZmKHR5cGUsIGxpc3RlbmVyKSB7XHJcbiAgICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzW3R5cGVdO1xyXG4gICAgdmFyIGluZGV4ID0gbGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xyXG4gICAgaWYgKGluZGV4ICE9IC0xKSB7XHJcbiAgICAgIGxpc3RlbmVycy5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgZmlyZVxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKiDjgqvjgrnjgr/jg6DjgqTjg5njg7Pjg4jjgpLooajjgZnjgqrjg5bjgrjjgqfjgq/jg4jjgpLmjIflrprjgZfjgabjgqvjgrnjgr/jg6DjgqTjg5njg7Pjg4jjgpLnmbrngavjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudCDjgqvjgrnjgr/jg6DjgqTjg5njg7Pjg4jjgpLooajjgZnjgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQudHlwZSDjgqvjgrnjgr/jg6DjgqTjg5njg7Pjg4jjga7lkI3liY1cclxuICAgKi9cclxuICAgZmlyZShlKSB7XHJcbiAgICBlLnRhcmdldCA9IHRoaXM7XHJcbiAgICB2YXIgb2xkRXZlbnROYW1lID0gJ29uJyArIGUudHlwZTtcclxuICAgIGlmICh0aGlzW29sZEV2ZW50TmFtZV0pIHRoaXNbb2xkRXZlbnROYW1lXShlKTtcclxuXHJcbiAgICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzW2UudHlwZV07XHJcbiAgICBpZiAobGlzdGVuZXJzKSB7XHJcbiAgICAgIC8vIHZhciB0ZW1wID0gbGlzdGVuZXJzLmNsb25lKCk7XHJcbiAgICAgIHZhciB0ZW1wID0gbGlzdGVuZXJzLnNsaWNlKDApO1xyXG4gICAgICBmb3IgKHZhciBpPTAsbGVuPXRlbXAubGVuZ3RoOyBpPGxlbjsgKytpKSB7XHJcbiAgICAgICAgICB0ZW1wW2ldLmNhbGwodGhpcywgZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgZmxhcmVcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICog44Kk44OZ44Oz44OI5ZCN44KS5oyH5a6a44GX44Gm44Kr44K544K/44Og44Kk44OZ44Oz44OI44KS55m654Gr44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiBwYXJhbSDlvJXmlbDjgpLmjIflrprjgZnjgovjgZPjgajjgavjgojjgorjgqvjgrnjgr/jg6DjgqTjg5njg7Pjg4jjgavku7vmhI/jga7jg5fjg63jg5Hjg4bjgqPjgpLoqK3lrprjgZnjgovjgZPjgajjgYzjgafjgY3jgb7jgZnjgIJcclxuICAgKiDjgZPjgozjgavjgojjgorjgIHlkbzjgbPlh7rjgZflhYPjgYzjgqTjg5njg7Pjg4jjg6rjgrnjg4rjgavku7vmhI/jga7lgKTjgpLmuKHjgZnjgZPjgajjgYzjgafjgY3jgb7jgZnjgIJcclxuICAgKiDvvIjjgZ/jgaDjgZcgdGFyZ2V0IOODl+ODreODkeODhuOCo+OBq+OBr+W/heOBmuiHquWIhuiHqui6q+OBjOagvOe0jeOBleOCjOOBvuOBmeOAgu+8iVxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgLy9cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIOOCq+OCueOCv+ODoOOCpOODmeODs+ODiOOBruWQjeWJjVxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1dIOOCq+OCueOCv+ODoOOCpOODmeODs+ODiOOBq+ODl+ODreODkeODhuOCo+OCkuioreWumuOBmeOCi+OBn+OCgeOBruOCquODluOCuOOCp+OCr+ODiFxyXG4gICovXHJcbiAgZmxhcmUodHlwZSwgcGFyYW0pIHtcclxuICAgIHZhciBlID0ge3R5cGU6dHlwZX07XHJcbiAgICBpZiAocGFyYW0pIHtcclxuICAgICAgZm9ySW4uY2FsbChwYXJhbSwgZnVuY3Rpb24oa2V5LCB2YWwpIHtcclxuICAgICAgLy8gcGFyYW0uZm9ySW4oZnVuY3Rpb24oa2V5LCB2YWwpIHtcclxuICAgICAgICBlW2tleV0gPSB2YWw7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5maXJlKGUpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBvbmVcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICog5LiA5bqm44Gg44GR5a6f6KGM44GV44KM44KL44Kk44OZ44Oz44OI44Oq44K544OK44KS55m76Yyy44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiDmjIflrprjgZfjgZ/jgqTjg5njg7Pjg4jjg6rjgrnjg4rjgYzkuIDluqblrp/ooYzjgZXjgozjgovjgajjgIHjgZ3jga7jgqTjg5njg7Pjg4jjg6rjgrnjg4rjga/liYrpmaTjgZXjgozjgb7jgZnjgILjgZ3jgozku6XlpJbjga7mjJnli5Xjga8ge0BsaW5rICNvbn0g44Go5ZCM44GY44Gn44GZ44CCXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSDjgqTjg5njg7Pjg4jjga7nqK7poZ5cclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciDjgqTjg5njg7Pjg4jjg6rjgrnjg4rjgajjgarjgovplqLmlbBcclxuICAgKiBAcGFyYW0ge09iamVjdH0gbGlzdGVuZXIuZXZlbnQgRXZlbnQg44Kq44OW44K444Kn44Kv44OI44CB44G+44Gf44Gv44Kr44K544K/44Og44Kk44OZ44Oz44OI44Gu44Kq44OW44K444Kn44Kv44OIXHJcbiAgICovXHJcbiAgb25lKHR5cGUsIGxpc3RlbmVyKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgdmFyIGZ1bmMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIHJlc3VsdCA9IGxpc3RlbmVyLmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7XHJcbiAgICAgIHNlbGYub2ZmKHR5cGUsIGZ1bmMpO1xyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLm9uKHR5cGUsIGZ1bmMpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBoYXNcclxuICAgKiDjgqTjg5njg7Pjg4jjg6rjgrnjg4rjgYznmbvpjLLjgZXjgozjgabjgYTjgovjgYvjganjgYbjgYvjgpLoqr/jgbnjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqIOaMh+WumuOBl+OBn+OCpOODmeODs+ODiOOBrueorumhnuOBq+WvvuOBmeOCi+OCpOODmeODs+ODiOODquOCueODiuOBjOeZu+mMsuOBleOCjOOBpuOBhOOCi+WgtOWQiOOBryB0cnVl44CB44Gd44GG44Gn44Gq44GE5aC05ZCI44GvIGZhbHNlIOOCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUg44Kk44OZ44Oz44OI44Gu56iu6aGeXHJcbiAgICogQHJldHVybiB7Qm9vbGVhbn0g5oyH5a6a44GX44Gf44Kk44OZ44Oz44OI44Gu44Kk44OZ44Oz44OI44Oq44K544OK44GM55m76Yyy44GV44KM44Gm44GE44KL44GL44Gp44GG44GLXHJcbiAgICovXHJcbiAgaGFzKHR5cGUpIHtcclxuICAgIHJldHVybiAodGhpcy5fbGlzdGVuZXJzW3R5cGVdICE9PSB1bmRlZmluZWQgJiYgdGhpcy5fbGlzdGVuZXJzW3R5cGVdLmxlbmd0aCAhPT0gMCkgfHwgISF0aGlzWydvbicgKyB0eXBlXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgY2xlYXJcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICog44GC44KL56iu6aGe44Gu44Kk44OZ44Oz44OI44Gr5a++44GZ44KL44Kk44OZ44Oz44OI44Oq44K544OK44KS44GZ44G544Gm5YmK6Zmk44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiDnibnlrprjga7jgqTjg5njg7Pjg4jjg6rjgrnjg4rjga7jgb/jgpLliYrpmaTjgZnjgovjgavjga8ge0BsaW5rICNvZmZ9IOOCkuS9v+eUqOOBl+OBpuOBj+OBoOOBleOBhOOAglxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUg44Kk44OZ44Oz44OI44Gu56iu6aGeXHJcbiAgICovXHJcbiAgY2xlYXIodHlwZSkge1xyXG4gICAgdmFyIG9sZEV2ZW50TmFtZSA9ICdvbicgKyB0eXBlO1xyXG4gICAgaWYgKHRoaXNbb2xkRXZlbnROYW1lXSkgZGVsZXRlIHRoaXNbb2xkRXZlbnROYW1lXTtcclxuICAgIHRoaXMuX2xpc3RlbmVyc1t0eXBlXSA9IFtdO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQG1ldGhvZCBhZGRFdmVudExpc3RlbmVyXHJcbiAqIHtAbGluayAjb259IOOBruOCqOOCpOODquOCouOCueOBp+OBmeOAglxyXG4gKi9cclxuLyoqXHJcbiAqIEBtZXRob2QgcmVtb3ZlRXZlbnRMaXN0ZW5lclxyXG4gKiB7QGxpbmsgI29mZn0g44Gu44Ko44Kk44Oq44Ki44K544Gn44GZ44CCXHJcbiAqL1xyXG4vKipcclxuICogQG1ldGhvZCBjbGVhckV2ZW50TGlzdGVuZXJcclxuICoge0BsaW5rICNjbGVhcn0g44Gu44Ko44Kk44Oq44Ki44K544Gn44GZ44CCXHJcbiAqL1xyXG4vKipcclxuICogQG1ldGhvZCBoYXNFdmVudExpc3RlbmVyXHJcbiAqIHtAbGluayAjaGFzfSDjga7jgqjjgqTjg6rjgqLjgrnjgafjgZnjgIJcclxuICovXHJcbi8qKlxyXG4gKiBAbWV0aG9kIGRpc3BhdGNoRXZlbnRcclxuICoge0BsaW5rICNmaXJlfSDjga7jgqjjgqTjg6rjgqLjgrnjgafjgZnjgIJcclxuICovXHJcbi8qKlxyXG4gKiBAbWV0aG9kIGRpc3BhdGNoRXZlbnRCeVR5cGVcclxuICoge0BsaW5rICNmbGFyZX0g44Gu44Ko44Kk44Oq44Ki44K544Gn44GZ44CCXHJcbiAqL1xyXG5jb25zdCBtZXRob2RNYXAgPSB7XHJcbiAgYWRkRXZlbnRMaXN0ZW5lcjogJ29uJyxcclxuICByZW1vdmVFdmVudExpc3RlbmVyOiAnb2ZmJyxcclxuICBjbGVhckV2ZW50TGlzdGVuZXI6ICdjbGVhcicsXHJcbiAgaGFzRXZlbnRMaXN0ZW5lcjogJ2hhcycsXHJcbiAgZGlzcGF0Y2hFdmVudDogJ2ZpcmUnLFxyXG4gIGRpc3BhdGNoRXZlbnRCeVR5cGU6ICdmbGFyZScsXHJcbn07XHJcbi8vIG1ldGhvZE1hcC5mb3JJbihmdW5jdGlvbihvbGQsIG5hbWUpIHtcclxuZm9ySW4uY2FsbChtZXRob2RNYXAsIGZ1bmN0aW9uKG9sZCwgbmFtZSkge1xyXG4gIC8vIEV2ZW50RGlzcGF0Y2hlci5wcm90b3R5cGUuJG1ldGhvZChvbGQsIHBoaW5hLnV0aWwuRXZlbnREaXNwYXRjaGVyLnByb3RvdHlwZVtuYW1lXSk7XHJcbiAgJG1ldGhvZC5jYWxsKEV2ZW50RGlzcGF0Y2hlci5wcm90b3R5cGUsIG9sZCwgRXZlbnREaXNwYXRjaGVyLnByb3RvdHlwZVtuYW1lXSk7XHJcbn0pO1xuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLnV0aWwuRmxvd1xyXG4gKiB0aWNrIG1hbmFnZW1lbnQgY2xhc3NcclxuICogQGV4dGVuZHMgcGhpbmEudXRpbC5FdmVudERpc3BhdGNoZXJcclxuICovXHJcbmNsYXNzIEZsb3cgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihmdW5jLCB3YWl0KSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuc3RhdHVzID0gJ3BlbmRpbmcnO1xyXG4gICAgdGhpcy5yZXN1bHRWYWx1ZSA9IG51bGw7XHJcbiAgICB0aGlzLl9xdWV1ZSA9IFtdO1xyXG4gICAgdGhpcy5mdW5jID0gZnVuYztcclxuXHJcbiAgICBpZiAod2FpdCAhPT0gdHJ1ZSkge1xyXG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgIHZhciByZXNvbHZlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgc2VsZi5yZXNvbHZlLmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgc2VsZi5zdGF0dXMgPSAncmVzb2x2ZWQnO1xyXG4gICAgICB9O1xyXG4gICAgICB2YXIgcmVqZWN0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgc2VsZi5yZWplY3QuYXBwbHkoc2VsZiwgYXJndW1lbnRzKTtcclxuICAgICAgICBzZWxmLnN0YXR1cyA9ICdyZWplY3RlZCc7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLmZ1bmMocmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICog5oiQ5YqfXHJcbiAgICovXHJcbiAgcmVzb2x2ZShhcmcpIHtcclxuICAgIHRoaXMucmVzdWx0VmFsdWUgPSBhcmc7XHJcblxyXG4gICAgLy8g44Kt44Ol44O844Gr56mN44G+44KM44Gf6Zai5pWw44KS5a6f6KGMXHJcbiAgICB0aGlzLl9xdWV1ZS5mb3JFYWNoKGZ1bmN0aW9uKGZ1bmMpIHtcclxuICAgICAgZnVuYyh0aGlzLnJlc3VsdFZhbHVlKTtcclxuICAgIH0sIHRoaXMpO1xyXG4gICAgLy8gdGhpcy5fcXVldWUuY2xlYXIoKTtcclxuICAgIGNsZWFyLmNhbGwodGhpcy5fcXVldWUpO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiDlpLHmlZdcclxuICAgKi9cclxuICByZWplY3QoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiDpnZ7lkIzmnJ/ntYLkuobmmYLjga7lh6bnkIbjgpLnmbvpjLJcclxuICAgKi9cclxuICB0aGVuKGZ1bmMpIHtcclxuICAgIC8vIOaIkOWKn+OCueODhuODvOOCv+OCueOBoOOBo+OBn+WgtOWQiOOBr+WNs+Wun+ihjFxyXG4gICAgaWYgKHRoaXMuc3RhdHVzID09PSAncmVzb2x2ZWQnKSB7XHJcbiAgICAgIHZhciB2YWx1ZSA9IGZ1bmModGhpcy5yZXN1bHRWYWx1ZSk7XHJcbiAgICAgIHJldHVybiBGbG93LnJlc29sdmUodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHZhciBmbG93ID0gbmV3IEZsb3coZnVuY3Rpb24ocmVzb2x2ZSkge1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfSwgdHJ1ZSk7XHJcblxyXG4gICAgICB0aGlzLl9xdWV1ZS5wdXNoKGZ1bmN0aW9uKGFyZykge1xyXG4gICAgICAgIHZhciByZXN1bHRWYWx1ZSA9IGZ1bmMoYXJnKTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdFZhbHVlIGluc3RhbmNlb2YgRmxvdykge1xyXG4gICAgICAgICAgcmVzdWx0VmFsdWUudGhlbihmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgICAgICBmbG93LnJlc29sdmUodmFsdWUpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgZmxvdy5yZXNvbHZlKHJlc3VsdFZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIGZsb3c7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcmVzb2x2ZSh2YWx1ZSkge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRmxvdykge1xyXG4gICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdmFyIGZsb3cgPSBuZXcgRmxvdyhmdW5jdGlvbihyZXNvbHZlKSB7XHJcbiAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZmxvdztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhbGwoZmxvd3MpIHtcclxuICAgIHJldHVybiBuZXcgRmxvdyhmdW5jdGlvbihyZXNvbHZlKSB7XHJcbiAgICAgIHZhciBjb3VudCA9IDA7XHJcblxyXG4gICAgICB2YXIgYXJncyA9IFtdO1xyXG5cclxuICAgICAgZmxvd3MuZm9yRWFjaChmdW5jdGlvbihmbG93KSB7XHJcbiAgICAgICAgZmxvdy50aGVuKGZ1bmN0aW9uKGQpIHtcclxuICAgICAgICAgICsrY291bnQ7XHJcbiAgICAgICAgICBhcmdzLnB1c2goZCk7XHJcblxyXG4gICAgICAgICAgaWYgKGNvdW50ID49IGZsb3dzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXNvbHZlKGFyZ3MpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn1cblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS51dGlsLlRpY2tlclxyXG4gKiB0aWNrIG1hbmFnZW1lbnQgY2xhc3NcclxuICogQGV4dGVuZHMgcGhpbmEudXRpbC5FdmVudERpc3BhdGNoZXJcclxuICovXHJcbmNsYXNzIFRpY2tlciBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XHJcblxyXG4gIC8vIC8qKiDntYzpgY7jg5Xjg6zjg7zjg6DmlbAgKi9cclxuICAvLyBmcmFtZSA9IG51bGxcclxuXHJcbiAgLy8gLyoqIDHjg5Xjg6zjg7zjg6Djga7ntYzpgY7mmYLplpMgKi9cclxuICAvLyBkZWx0YVRpbWUgPSBudWxsXHJcbiAgXHJcbiAgLy8gLyoqIOWFqOS9k+OBrue1jOmBjuaZgumWkyAqL1xyXG4gIC8vIGVsYXBzZWRUaW1lID0gbnVsbFxyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5mcHMgPSAzMDtcclxuICAgIHRoaXMuZnJhbWUgPSAwO1xyXG4gICAgdGhpcy5kZWx0YVRpbWUgPSAwO1xyXG4gICAgdGhpcy5lbGFwc2VkVGltZSA9IDA7XHJcbiAgICB0aGlzLmlzUGxheWluZyA9IHRydWU7XHJcbiAgICB0aGlzLnJ1bm5lciA9IFRpY2tlci5ydW5uZXI7XHJcbiAgfVxyXG5cclxuICB0aWNrKGZ1bmMpIHtcclxuICAgIHRoaXMub24oJ3RpY2snLCBmdW5jKTtcclxuICB9XHJcblxyXG4gIHVudGljayhmdW5jKSB7XHJcbiAgICB0aGlzLm9mZigndGljaycsIGZ1bmMpO1xyXG4gIH1cclxuXHJcbiAgcnVuKCkge1xyXG4gICAgdmFyIG5vdyA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XHJcbiAgICAvLyAx44OV44Os44O844Og44Gr5o6b44GL44Gj44Gf5pmC6ZaTXHJcbiAgICB0aGlzLmRlbHRhVGltZSA9IG5vdyAtIHRoaXMuY3VycmVudFRpbWU7XHJcbiAgICAvLyDlhajkvZPjga7ntYzpgY7mmYLplpNcclxuICAgIHRoaXMuZWxhcHNlZFRpbWUgPSBub3cgLSB0aGlzLnN0YXJ0VGltZTtcclxuXHJcbiAgICB2YXIgc3RhcnQgPSB0aGlzLmN1cnJlbnRUaW1lID0gbm93O1xyXG4gICAgdGhpcy5mbGFyZSgndGljaycpO1xyXG4gICAgdmFyIGVuZCA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XHJcblxyXG4gICAgLy8g44OV44Os44O844Og44KS5pu05pawXHJcbiAgICB0aGlzLmZyYW1lICs9IDE7XHJcblxyXG4gICAgLy8gY2FsY3VsYXRlIGVsYXBzZWQgdGltZVxyXG4gICAgdmFyIGVsYXBzZWQgPSBlbmQtc3RhcnQ7XHJcblxyXG4gICAgLy8gY2FsY3VsYXRlIG5leHQgd2FpdGluZyB0aW1lXHJcbiAgICB2YXIgZGVsYXkgPSBNYXRoLm1heCh0aGlzLmZyYW1lVGltZS1lbGFwc2VkLCAwKTtcclxuXHJcbiAgICByZXR1cm4gZGVsYXk7XHJcbiAgfVxyXG5cclxuICBzdGFydCgpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHRoaXMuaXNQbGF5aW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuc3RhcnRUaW1lID0gdGhpcy5jdXJyZW50VGltZSA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XHJcbiAgICB2YXIgZm4gPSBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKHNlbGYuaXNQbGF5aW5nKSB7XHJcbiAgICAgICAgdmFyIGRlbGF5ID0gc2VsZi5ydW4oKTtcclxuICAgICAgICBzZWxmLnJ1bm5lcihmbiwgZGVsYXkpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZm4oKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHJlc3VtZSgpIHtcclxuICAgIC8vIFRPRE86IFxyXG4gIH1cclxuXHJcbiAgc3RvcCgpIHtcclxuICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHJld2luZCgpIHtcclxuICAgIC8vIFRPRE86IFxyXG4gIH1cclxuXHJcbiAgZ2V0IGZwcygpIHsgcmV0dXJuIHRoaXMuX2ZwczsgfVxyXG4gIHNldCBmcHModikge1xyXG4gICAgdGhpcy5fZnBzID0gdjtcclxuICAgIHRoaXMuZnJhbWVUaW1lID0gMTAwMC90aGlzLl9mcHM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcnVubmVyKHJ1biwgZGVsYXkpIHtcclxuICAgIHNldFRpbWVvdXQocnVuLCBkZWxheSk7XHJcbiAgfVxyXG4gIFxyXG59XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEudXRpbC5SYW5kb21cclxuICogIyDkubHmlbDjgpLmibHjgYbjgZ/jgoHjga7jgq/jg6njgrlcclxuICog5Lmx5pWw44KS5omx44GG44Gf44KB44Gu44Oh44K944OD44OJ44KE44OX44Ot44OR44OG44Kj44KS5a6a576p44GX44Gm44GE44KL44Kv44Op44K544Gn44GZ44CCXHJcbiAqL1xyXG5jbGFzcyBSYW5kb20ge1xyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkge051bWJlcn0gW3NlZWQgPSAxXVxyXG4gICAqIOS5seaVsOOBruOCt+ODvOODieOBp+OBmeOAglxyXG4gICAqL1xyXG4gIC8vIHNlZWQgPSAxXHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqIOOCs+ODs+OCueODiOODqeOCr+OCv+OBp+OBmeOAguW8leaVsOOBpyB7QGxpbmsgI3NlZWR9IOOCkuioreWumuOBp+OBjeOBvuOBmeOAglxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbc2VlZCA9IChEYXRlLm5vdygpKSB8fCAxXSDjgrfjg7zjg4lcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihzZWVkKSB7XHJcbiAgICB0aGlzLnNlZWQgPSBzZWVkIHx8IChEYXRlLm5vdygpKSB8fCAxO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCByYW5kb21cclxuICAgKiAwfjHjga7kubHmlbDjgpLov5TjgZfjgb7jgZnjgILlrp/ooYzjgZnjgovjgagge0BsaW5rICNzZWVkfSDjga/lpInjgo/jgaPjgabjgZfjgb7jgYTjgb7jgZnjgIJcclxuICAgKiBcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IDB+MSDjga7kubHmlbBcclxuICAgKi9cclxuICByYW5kb20oKSB7XHJcbiAgICB2YXIgc2VlZCA9IHRoaXMuc2VlZDtcclxuICAgIHNlZWQgPSBzZWVkIF4gKHNlZWQgPDwgMTMpO1xyXG4gICAgc2VlZCA9IHNlZWQgXiAoc2VlZCA+Pj4gMTcpO1xyXG4gICAgc2VlZCA9IChzZWVkIF4gKHNlZWQgPDwgNSkpO1xyXG5cclxuICAgIHRoaXMuc2VlZCA9IHNlZWQ7XHJcblxyXG4gICAgcmV0dXJuIChzZWVkID4+PiAwKSAvIHBoaW5hLnV0aWwuUmFuZG9tLk1BWDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgcmFuZGludFxyXG4gICAqIOaMh+WumuOBleOCjOOBn+evhOWbsuWGheOBp+ODqeODs+ODgOODoOOBquaVtOaVsOWApOOCkui/lOOBl+OBvuOBmeOAguWun+ihjOOBmeOCi+OBqCB7QGxpbmsgI3NlZWR9IOOBr+WkieOCj+OBo+OBpuOBl+OBvuOBhOOBvuOBmeOAglxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBtaW4g56+E5Zuy44Gu5pyA5bCP5YCkXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG1heCDnr4Tlm7Ljga7mnIDlpKflgKRcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IOODqeODs+ODgOODoOOBquaVtOaVsOWApFxyXG4gICAqL1xyXG4gIHJhbmRpbnQobWluLCBtYXgpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKCB0aGlzLnJhbmRvbSgpKihtYXgtbWluKzEpICkgKyBtaW47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHJhbmRmbG9hdFxyXG4gICAqIOaMh+WumuOBleOCjOOBn+evhOWbsuWGheOBp+ODqeODs+ODgOODoOOBquaVsOWApOOCkui/lOOBl+OBvuOBmeOAguWun+ihjOOBmeOCi+OBqCB7QGxpbmsgI3NlZWR9IOOBr+WkieOCj+OBo+OBpuOBl+OBvuOBhOOBvuOBmeOAglxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBtaW4g56+E5Zuy44Gu5pyA5bCP5YCkXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG1heCDnr4Tlm7Ljga7mnIDlpKflgKRcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IOODqeODs+ODgOODoOOBquaVsOWApFxyXG4gICAqL1xyXG4gIHJhbmRmbG9hdChtaW4sIG1heCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmFuZG9tKCkqKG1heC1taW4pK21pbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgcmFuZGJvb2xcclxuICAgKiDjg6njg7Pjg4Djg6DjgarnnJ/lgb3lgKTjgpLov5TjgZfjgb7jgZnjgILlvJXmlbDjgafnmb7liIbnjofjgpLmjIflrprjgafjgY3jgb7jgZnjgILlrp/ooYzjgZnjgovjgagge0BsaW5rICNzZWVkfSDjga/lpInjgo/jgaPjgabjgZfjgb7jgYTjgb7jgZnjgIJcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge051bWJlcn0gW3BlcmVjZW50ID0gNTBdIOecn+OBq+OBquOCi+eZvuWIhueOh1xyXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IOODqeODs+ODgOODoOOBquecn+WBveWApFxyXG4gICAqL1xyXG4gIHJhbmRib29sKHBlcmNlbnQpIHtcclxuICAgIHJldHVybiB0aGlzLnJhbmRvbSgpIDwgKHBlcmNlbnQgPT09IHVuZGVmaW5lZCA/IDUwIDogcGVyY2VudCkgLyAxMDA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHJhbmRhcnJheVxyXG4gICAqIOS7u+aEj+OBruevhOWbsuOBp+ODqeODs+ODgOODoOOBquaVtOaVsOWApOOCkuagvOe0jeOBl+OBn+S7u+aEj+OBrumVt+OBleOBrumFjeWIl+OCkui/lOOBl+OBvuOBmeOAguWun+ihjOOBmeOCi+OBqCB7QGxpbmsgI3NlZWR9IOOBr+WkieOCj+OBo+OBpuOBl+OBvuOBhOOBvuOBmeOAglxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbbGVuID0gMTAwXSDphY3liJfjga7plbfjgZVcclxuICAgKiBAcGFyYW0ge051bWJlcn0gW21pbiA9IDBdIOevhOWbsuOBruacgOWwj+WApFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbbWF4ID0gMTAwXSDnr4Tlm7Ljga7mnIDlpKflgKRcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IOODqeODs+ODgOODoOOBquaVtOaVsOWApOOBruWFpeOBo+OBn+mFjeWIl1xyXG4gICAqL1xyXG4gIHJhbmRhcnJheShsZW4sIG1pbiwgbWF4KSB7XHJcbiAgICBsZW4gPSBsZW4gfHwgMTAwO1xyXG4gICAgbWluID0gbWluIHx8IDA7XHJcbiAgICBtYXggPSBtYXggfHwgMTAwO1xyXG5cclxuICAgIHJldHVybiAobGVuKS5tYXAoZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJhbmRpbnQobWluLCBtYXgpO1xyXG4gICAgfSwgdGhpcyk7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VlZCgpIHsgcmV0dXJuIHRoaXMuX3NlZWQ7IH1cclxuICBzZXQgc2VlZCh2KSB7IHRoaXMuX3NlZWQgPSAodiA+Pj4gMCkgfHwgMTsgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGdldFNlZWQgXHJcbiAgICoge0BsaW5rICNzZWVkfSDjga7lgKTjgpLlj5blvpfjgZfjgb7jgZnjgIJcclxuICAgKiBcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IOOCt+ODvOODiVxyXG4gICAqIEBzdGF0aWNcclxuICAgKi9cclxuICBzdGF0aWMgZ2V0U2VlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLnNlZWQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHNldFNlZWRcclxuICAgKiB7QGxpbmsgI3NlZWR9IOOBruWApOOCkuOCu+ODg+ODiOOBl+OBvuOBmeOAglxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbc2VlZCA9IDFdIOOCt+ODvOODiVxyXG4gICAqIEBzdGF0aWNcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICovXHJcbiAgc3RhdGljIHNldFNlZWQoc2VlZCkge1xyXG4gICAgdGhpcy5zZWVkID0gKHNlZWQgPj4+IDApIHx8IDE7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgcmFuZG9tXHJcbiAgICogMH4x44Gu5Lmx5pWw44KS6L+U44GX44G+44GZ44CC5a6f6KGM44GZ44KL44GoIHtAbGluayAjc2VlZH0g44Gv5aSJ44KP44Gj44Gm44GX44G+44GE44G+44GZ44CCXHJcbiAgICog44Kk44Oz44K544K/44Oz44K544Oh44K944OD44OJ44GuIHtAbGluayAjcmFuZG9tfSDjgajlkIzjgZjjgafjgZnjgIJcclxuICAgKiBcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IDB+MSDjga7kubHmlbBcclxuICAgKiBAc3RhdGljXHJcbiAgICovXHJcbiAgc3RhdGljIHJhbmRvbSgpIHtcclxuICAgIHRoaXMuc2VlZCA9IHRoaXMueG9yMzIodGhpcy5zZWVkKTtcclxuICAgIHJldHVybiAodGhpcy5zZWVkID4+PiAwKSAvIHBoaW5hLnV0aWwuUmFuZG9tLk1BWDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgcmFuZGludFxyXG4gICAqIOaMh+WumuOBleOCjOOBn+evhOWbsuWGheOBp+ODqeODs+ODgOODoOOBquaVtOaVsOWApOOCkui/lOOBl+OBvuOBmeOAguWun+ihjOOBmeOCi+OBqCB7QGxpbmsgI3NlZWR9IOOBr+WkieOCj+OBo+OBpuOBl+OBvuOBhOOBvuOBmeOAglxyXG4gICAqIOOCpOODs+OCueOCv+ODs+OCueODoeOCveODg+ODieOBriB7QGxpbmsgI3JhbmRpbnR9IOOBqOWQjOOBmOOBp+OBmeOAglxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBtaW4g56+E5Zuy44Gu5pyA5bCP5YCkXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG1heCDnr4Tlm7Ljga7mnIDlpKflgKRcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IOODqeODs+ODgOODoOOBquaVtOaVsOWApFxyXG4gICAqIEBzdGF0aWNcclxuICAgKi9cclxuICBzdGF0aWMgcmFuZGludChtaW4sIG1heCkge1xyXG4gICAgcmV0dXJuIHBoaW5hLmdsb2JhbC5NYXRoLmZsb29yKCB0aGlzLnJhbmRvbSgpKihtYXgtbWluKzEpICkgKyBtaW47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHJhbmRmbG9hdFxyXG4gICAqIOaMh+WumuOBleOCjOOBn+evhOWbsuWGheOBp+ODqeODs+ODgOODoOOBquaVsOWApOOCkui/lOOBl+OBvuOBmeOAguWun+ihjOOBmeOCi+OBqCB7QGxpbmsgI3NlZWR9IOOBr+WkieOCj+OBo+OBpuOBl+OBvuOBhOOBvuOBmeOAglxyXG4gICAqIOOCpOODs+OCueOCv+ODs+OCueODoeOCveODg+ODieOBriB7QGxpbmsgI3JhbmRmbG9hdH0g44Go5ZCM44GY44Gn44GZ44CCXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG1pbiDnr4Tlm7Ljga7mnIDlsI/lgKRcclxuICAgKiBAcGFyYW0ge051bWJlcn0gbWF4IOevhOWbsuOBruacgOWkp+WApFxyXG4gICAqIEByZXR1cm4ge051bWJlcn0g44Op44Oz44OA44Og44Gq5pWw5YCkXHJcbiAgICogQHN0YXRpY1xyXG4gICAqL1xyXG4gIHN0YXRpYyByYW5kZmxvYXQobWluLCBtYXgpIHtcclxuICAgIHJldHVybiB0aGlzLnJhbmRvbSgpKihtYXgtbWluKSttaW47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHJhbmRib29sXHJcbiAgICog44Op44Oz44OA44Og44Gq55yf5YG95YCk44KS6L+U44GX44G+44GZ44CC5byV5pWw44Gn55m+5YiG546H44KS5oyH5a6a44Gn44GN44G+44GZ44CC5a6f6KGM44GZ44KL44GoIHtAbGluayAjc2VlZH0g44Gv5aSJ44KP44Gj44Gm44GX44G+44GE44G+44GZ44CCXHJcbiAgICog44Kk44Oz44K544K/44Oz44K544Oh44K944OD44OJ44GuIHtAbGluayAjcmFuZGJvb2x9IOOBqOWQjOOBmOOBp+OBmeOAglxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbcGVyZWNlbnQgPSA1MF0g55yf44Gr44Gq44KL55m+5YiG546HXHJcbiAgICogQHJldHVybiB7TnVtYmVyfSDjg6njg7Pjg4Djg6DjgarnnJ/lgb3lgKRcclxuICAgKiBAc3RhdGljXHJcbiAgICovXHJcbiAgc3RhdGljIHJhbmRib29sKHBlcmVjZW50KSB7XHJcbiAgICByZXR1cm4gdGhpcy5yYW5kaW50KDAsIDk5KSA8IChwZXJlY2VudCB8fCA1MCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHJhbmRhcnJheVxyXG4gICAqIOS7u+aEj+OBruevhOWbsuOBp+ODqeODs+ODgOODoOOBquaVtOaVsOWApOOCkuagvOe0jeOBl+OBn+S7u+aEj+OBrumVt+OBleOBrumFjeWIl+OCkui/lOOBl+OBvuOBmeOAguWun+ihjOOBmeOCi+OBqCB7QGxpbmsgI3NlZWR9IOOBr+WkieOCj+OBo+OBpuOBl+OBvuOBhOOBvuOBmeOAglxyXG4gICAqIOOCpOODs+OCueOCv+ODs+OCueODoeOCveODg+ODieOBriB7QGxpbmsgI3JhbmRhcnJheX0g44Go5ZCM44GY44Gn44GZ44CCXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtsZW4gPSAxMDBdIOmFjeWIl+OBrumVt+OBlVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbbWluID0gMF0g56+E5Zuy44Gu5pyA5bCP5YCkXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFttYXggPSAxMDBdIOevhOWbsuOBruacgOWkp+WApFxyXG4gICAqIEByZXR1cm4ge051bWJlcn0g44Op44Oz44OA44Og44Gq5pW05pWw5YCk44Gu5YWl44Gj44Gf6YWN5YiXXHJcbiAgICogQHN0YXRpY1xyXG4gICAqL1xyXG4gIHN0YXRpYyByYW5kYXJyYXkobGVuLCBtaW4sIG1heCkge1xyXG4gICAgbGVuID0gbGVuIHx8IDEwMDtcclxuICAgIG1pbiA9IG1pbiB8fCAwO1xyXG4gICAgbWF4ID0gbWF4IHx8IDEwMDtcclxuXHJcbiAgICByZXR1cm4gKGxlbikubWFwKGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yYW5kaW50KG1pbiwgbWF4KTtcclxuICAgIH0sIHRoaXMpO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgeG9yMzJcclxuICAgKiB4b3JzaGlmdCDjgpLnlKjjgYTjgabnlpHkvLzkubHmlbDliJfjgpLnlJ/miJDjgZfjgb7jgZnjgIJcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge051bWJlcn0gc2VlZFxyXG4gICAqIEByZXR1cm4ge051bWJlcn0g55aR5Ly85Lmx5pWw5YiXXHJcbiAgICogQHN0YXRpY1xyXG4gICAqL1xyXG4gIHN0YXRpYyB4b3IzMihzZWVkKSB7XHJcbiAgICBzZWVkID0gc2VlZCBeIChzZWVkIDw8IDEzKTtcclxuICAgIHNlZWQgPSBzZWVkIF4gKHNlZWQgPj4+IDE3KTtcclxuICAgIHNlZWQgPSAoc2VlZCBeIChzZWVkIDw8IDUpKTtcclxuXHJcbiAgICByZXR1cm4gc2VlZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgdXVpZFxyXG4gICAqIHV1aWQg44KS55Sf5oiQ44GX44Gm6L+U44GX44G+44GZ44CCXHJcbiAgICogXHJcbiAgICogQHJldHVybiB7U3RyaW5nfSB1dWlkXHJcbiAgICogQHN0YXRpY1xyXG4gICAqL1xyXG4gIC8vaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMDUwMzQvY3JlYXRlLWd1aWQtdXVpZC1pbi1qYXZhc2NyaXB0XHJcbiAgc3RhdGljIHV1aWQoKSB7XHJcbiAgICB2YXIgZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgaWYocGhpbmEuZ2xvYmFsLnBlcmZvcm1hbmNlICYmIHR5cGVvZiBwaGluYS5nbG9iYWwucGVyZm9ybWFuY2Uubm93ID09PSAnZnVuY3Rpb24nKXtcclxuICAgICAgZCArPSBwZXJmb3JtYW5jZS5ub3coKTsgLy91c2UgaGlnaC1wcmVjaXNpb24gdGltZXIgaWYgYXZhaWxhYmxlXHJcbiAgICB9XHJcbiAgICB2YXIgdXVpZCA9ICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24oYykge1xyXG4gICAgICB2YXIgciA9IChkICsgTWF0aC5yYW5kb20oKSoxNiklMTYgfCAwO1xyXG4gICAgICBkID0gTWF0aC5mbG9vcihkLzE2KTtcclxuICAgICAgcmV0dXJuIChjPT0neCcgPyByIDogKHImMHgzfDB4OCkpLnRvU3RyaW5nKDE2KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHV1aWQ7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBNQVhcclxuICog5YaF6YOo55qE44Gr5L2/55So44GV44KM44KL5a6a5pWw44Gn44GZ44CCXHJcbiAqIFxyXG4gKiBAc3RhdGljXHJcbiAqL1xyXG5SYW5kb20uTUFYID0gNDI5NDk2NzI5NTtcclxuXHJcbi8qKlxyXG4gKiBAcHJvcGVydHkge051bWJlcn0gW3NlZWQgPSAoRGF0ZS5ub3coKSldIOOCt+ODvOODiVxyXG4gKiBzdGF0aWMg44Oh44K944OD44OJ44Gu5Lmx5pWw44Gu44K344O844OJ44Gn44GZ44CCXHJcbiAqIFxyXG4gKiBAc3RhdGljXHJcbiAqL1xyXG5SYW5kb20uc2VlZCA9IChEYXRlLm5vdygpKTtcclxuXHJcblxyXG4vLyBwcm90b3R5cGXmi6HlvLXjga/jgZfjgarjgYRcclxuLy8gTWF0aC4kbWV0aG9kKFwicmFuZGludFwiLCBmdW5jdGlvbihtaW4sIG1heCkge1xyXG4vLyAgIHJldHVybiBwaGluYS51dGlsLlJhbmRvbS5yYW5kaW50KG1pbiwgbWF4KTtcclxuLy8gfSk7XHJcblxyXG4vLyBNYXRoLiRtZXRob2QoXCJyYW5kZmxvYXRcIiwgZnVuY3Rpb24obWluLCBtYXgpIHtcclxuLy8gICByZXR1cm4gcGhpbmEudXRpbC5SYW5kb20ucmFuZGZsb2F0KG1pbiwgbWF4KTtcclxuLy8gfSk7XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEudXRpbC5TdXBwb3J0XHJcbiAqIFxyXG4gKi9cclxuY2xhc3MgU3VwcG9ydCB7fVN1cHBvcnQuY2FudmFzID0gISFwaGluYSQxLmdsb2JhbC5DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcblN1cHBvcnQud2ViR0wgPSAoZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuICEhcGhpbmEkMS5nbG9iYWwuQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEICYmICEhZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJykuZ2V0Q29udGV4dCgnd2ViZ2wnKTtcclxufSkoKTtcclxuU3VwcG9ydC53ZWJBdWRpbyA9ICEhcGhpbmEkMS5nbG9iYWwuQXVkaW9Db250ZXh0IHx8ICEhcGhpbmEkMS5nbG9iYWwud2Via2l0QXVkaW9Db250ZXh0IHx8ICEhcGhpbmEkMS5nbG9iYWwubW96QXVkaW9Db250ZXh0O1xuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLnV0aWwuR3JpZFxyXG4gKi9cclxuY2xhc3MgR3JpZCB7XHJcblxyXG4gIC8vIC8qKiDluYUgKi9cclxuICAvLyB3aWR0aDogNjQwLFxyXG4gIC8vIC8qKiDliJfmlbAgKi9cclxuICAvLyBjb2x1bW5zOiAxMixcclxuICAvLyAvKiog44Or44O844OXICovXHJcbiAgLy8gbG9vcDogZmFsc2UsXHJcbiAgLy8gLyoqIOOCquODleOCu+ODg+ODiOWApCAqL1xyXG4gIC8vIG9mZnNldDogMCxcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgdmFyIHBhcmFtID0gYXJndW1lbnRzWzBdO1xyXG4gICAgICB2YXIgd2lkdGggPSBwYXJhbS53aWR0aCB8fCA2NDA7XHJcbiAgICAgIHZhciBjb2x1bW5zID0gcGFyYW0uY29sdW1ucyB8fCAxMjtcclxuICAgICAgdmFyIGxvb3AgPSBwYXJhbS5sb29wIHx8IGZhbHNlO1xyXG4gICAgICB2YXIgb2Zmc2V0ID0gcGFyYW0ub2Zmc2V0IHx8IDA7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdmFyIHdpZHRoICAgPSBhcmd1bWVudHNbMF0gfHwgNjQwO1xyXG4gICAgICB2YXIgY29sdW1ucyA9IGFyZ3VtZW50c1sxXSB8fCAxMjtcclxuICAgICAgdmFyIGxvb3AgICAgPSBhcmd1bWVudHNbMl0gfHwgZmFsc2U7XHJcbiAgICAgIHZhciBvZmZzZXQgPSBhcmd1bWVudHNbM10gfHwgMDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICB0aGlzLmNvbHVtbnMgPSBjb2x1bW5zO1xyXG4gICAgdGhpcy5sb29wID0gbG9vcDtcclxuICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xyXG4gICAgdGhpcy51bml0V2lkdGggPSB0aGlzLndpZHRoL3RoaXMuY29sdW1ucztcclxuICB9XHJcblxyXG4gIC8vIOOCueODkeODs+aMh+WumuOBp+WApOOCkuWPluW+lyjosqDmlbDjgoJvaylcclxuICBzcGFuKGluZGV4KSB7XHJcbiAgICBpZiAodGhpcy5sb29wKSB7XHJcbiAgICAgIGluZGV4ICs9IHRoaXMuY29sdW1ucztcclxuICAgICAgaW5kZXggJT0gdGhpcy5jb2x1bW5zO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMudW5pdFdpZHRoICogaW5kZXggKyB0aGlzLm9mZnNldDtcclxuICB9XHJcblxyXG4gIC8vXHJcbiAgdW5pdCgpIHtcclxuICAgIHJldHVybiB0aGlzLnVuaXRXaWR0aDtcclxuICB9XHJcblxyXG4gIGNlbnRlcihvZmZzZXQpIHtcclxuICAgIHZhciBpbmRleCA9IG9mZnNldCB8fCAwO1xyXG4gICAgcmV0dXJuICh0aGlzLndpZHRoLzIpICsgKHRoaXMudW5pdFdpZHRoICogaW5kZXgpO1xyXG4gIH1cclxuXHJcbn1cblxuLyoqXHJcbiAqIEBjbGFzcyBnbG9iYWwuTWF0aFxyXG4gKiAjIOaLoeW8teOBl+OBnyBNYXRoIOOCr+ODqeOCuVxyXG4gKiDmlbDlrabnmoTjgarlh6bnkIbjgpLmibHjgYYgTWF0aCDjgq/jg6njgrnjgpLmi6HlvLXjgZfjgabjgYTjgb7jgZnjgIJcclxuICogXHJcbiAqIOWFqOOBpnN0YXRpY+ODoeODs+ODkOODvOOBp+OBmeOAglxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAc3RhdGljXHJcbiAqIEBtZXRob2QgY2xhbXBcclxuICog5oyH5a6a44GX44Gf5YCk44KS5oyH5a6a44GX44Gf56+E5Zuy44Gr5Y+O44KB44Gf57WQ5p6c44KS6L+U44GX44G+44GZ44CCXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqICAgICBNYXRoLmNsYW1wKDEyMCwgMCwgNjQwKTsgLy8gPT4gMTIwXHJcbiAqICAgICBNYXRoLmNsYW1wKDk4MCwgMCwgNjQwKTsgLy8gPT4gNjQwXHJcbiAqICAgICBNYXRoLmNsYW1wKC04MCwgMCwgNjQwKTsgLy8gPT4gMFxyXG4gKlxyXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWUg5YCkXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtaW4gIOevhOWbsuOBruS4i+mZkFxyXG4gKiBAcGFyYW0ge051bWJlcn0gbWF4ICDnr4Tlm7Ljga7kuIrpmZBcclxuICogQHJldHVybiB7TnVtYmVyfSDkuLjjgoHjgZ/ntZDmnpzjga7lgKRcclxuICovXHJcbmZ1bmN0aW9uIGNsYW1wKHZhbHVlLCBtaW4sIG1heCkge1xyXG4gIHJldHVybiAodmFsdWUgPCBtaW4pID8gbWluIDogKCAodmFsdWUgPiBtYXgpID8gbWF4IDogdmFsdWUgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwcm9wZXJ0eSBERUdfVE9fUkFEXHJcbiAqIOW6puOCkuODqeOCuOOCouODs+OBq+WkieaPm+OBmeOCi+OBn+OCgeOBruWumuaVsOOBp+OBmeOAglxyXG4gKi9cclxudmFyIERFR19UT19SQUQgPSBNYXRoLlBJLzE4MDtcblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS51dGlsLlR3ZWVuXHJcbiAqIEBleHRlbmRzIHBoaW5hLnV0aWwuRXZlbnREaXNwYXRjaGVyXHJcbiAqIFxyXG4gKi9cclxuY2xhc3MgVHdlZW4gZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcih0YXJnZXQpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy50aW1lID0gMDtcclxuICB9XHJcblxyXG4gIGZyb21Ubyh0YXJnZXQsIGJlZ2luUHJvcHMsIGZpbmlzaFByb3BzLCBkdXJhdGlvbiwgZWFzaW5nKSB7XHJcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuICAgIHRoaXMuYmVnaW5Qcm9wcyA9IGJlZ2luUHJvcHM7XHJcbiAgICB0aGlzLmZpbmlzaFByb3BzID0gZmluaXNoUHJvcHM7XHJcbiAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb24gfHwgMTAwMDtcclxuICAgIHRoaXMuZWFzaW5nID0gZWFzaW5nO1xyXG5cclxuICAgIC8vIHNldHVwXHJcbiAgICB0aGlzLmNoYW5nZVByb3BzID0ge307XHJcbiAgICBmb3IgKHZhciBrZXkgaW4gYmVnaW5Qcm9wcykge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlUHJvcHNba2V5XSA9IGZpbmlzaFByb3BzW2tleV0gLSBiZWdpblByb3BzW2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICB0byh0YXJnZXQsIGZpbmlzaFByb3BzLCBkdXJhdGlvbiwgZWFzaW5nKSB7XHJcbiAgICB2YXIgYmVnaW5Qcm9wcyA9IHt9O1xyXG5cclxuICAgIGZvciAodmFyIGtleSBpbiBmaW5pc2hQcm9wcykge1xyXG4gICAgICBiZWdpblByb3BzW2tleV0gPSB0YXJnZXRba2V5XTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmZyb21Ubyh0YXJnZXQsIGJlZ2luUHJvcHMsIGZpbmlzaFByb3BzLCBkdXJhdGlvbiwgZWFzaW5nKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGZyb20odGFyZ2V0LCBiZWdpblByb3BzLCBkdXJhdGlvbiwgZWFzaW5nKSB7XHJcbiAgICAgIHZhciBmaW5pc2hQcm9wcyA9IHt9O1xyXG5cclxuICAgICAgZm9yICh2YXIga2V5IGluIGJlZ2luUHJvcHMpIHtcclxuICAgICAgICBmaW5pc2hQcm9wc1trZXldID0gdGFyZ2V0W2tleV07XHJcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBiZWdpblByb3BzW2tleV07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuZnJvbVRvKHRhcmdldCwgYmVnaW5Qcm9wcywgZmluaXNoUHJvcHMsIGR1cmF0aW9uLCBlYXNpbmcpO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBieSh0YXJnZXQsIHByb3BzLCBkdXJhdGlvbiwgZWFzaW5nKSB7XHJcbiAgICB2YXIgYmVnaW5Qcm9wcyA9IHt9O1xyXG4gICAgdmFyIGZpbmlzaFByb3BzID0ge307XHJcblxyXG4gICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XHJcbiAgICAgIGJlZ2luUHJvcHNba2V5XSA9IHRhcmdldFtrZXldO1xyXG4gICAgICBmaW5pc2hQcm9wc1trZXldID0gdGFyZ2V0W2tleV0gKyBwcm9wc1trZXldO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZnJvbVRvKHRhcmdldCwgYmVnaW5Qcm9wcywgZmluaXNoUHJvcHMsIGR1cmF0aW9uLCBlYXNpbmcpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgeW95bygpIHtcclxuICAgIHZhciB0ZW1wID0gdGhpcy5iZWdpblByb3BzO1xyXG4gICAgdGhpcy5iZWdpblByb3BzID0gdGhpcy5maW5pc2hQcm9wcztcclxuICAgIHRoaXMuZmluaXNoUHJvcHMgPSB0ZW1wO1xyXG4gICAgLy8gdGhpcy5jaGFuZ2VQcm9wcy5mb3JJbihmdW5jdGlvbihrZXksIHZhbHVlLCBpbmRleCkge1xyXG4gICAgZm9ySW4uY2FsbCh0aGlzLmNoYW5nZVByb3BzLCBmdW5jdGlvbihrZXksIHZhbHVlLCBpbmRleCkge1xyXG4gICAgICB0aGlzLmNoYW5nZVByb3BzW2tleV0gPSAtdmFsdWU7XHJcbiAgICAgIHRoaXMudGFyZ2V0W2tleV0gPSB0aGlzLmJlZ2luUHJvcHNba2V5XTtcclxuICAgIH0sIHRoaXMpO1xyXG4gICAgLy8gVE9ETzogZWFzaW5nIOOCguWPjei7ouOBleOBm+OCi1xyXG4gICAgLy8gdGhpcy5lYXNpbmcgPSBlYXNpbmc7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGdhaW4odGltZSkge1xyXG4gICAgdGhpcy5zZWVrKHRoaXMudGltZSArIHRpbWUpO1xyXG4gIH1cclxuXHJcbiAgZm9yd2FyZCh0aW1lKSB7XHJcbiAgICB0aGlzLnNlZWsodGhpcy50aW1lICsgdGltZSk7XHJcbiAgfVxyXG5cclxuICBiYWNrd2FyZCh0aW1lKSB7XHJcbiAgICB0aGlzLnNlZWsodGhpcy50aW1lIC0gdGltZSk7XHJcbiAgfVxyXG5cclxuICBzZWVrKHRpbWUpIHtcclxuICAgIC8vIHRoaXMudGltZSA9IE1hdGguY2xhbXAodGltZSwgMCwgdGhpcy5kdXJhdGlvbik7XHJcbiAgICB0aGlzLnRpbWUgPSBjbGFtcCh0aW1lLCAwLCB0aGlzLmR1cmF0aW9uKTtcclxuXHJcbiAgICAvLyB0aGlzLmJlZ2luUHJvcHMuZm9ySW4oZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgZm9ySW4uY2FsbCh0aGlzLmJlZ2luUHJvcHMsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgdmFyIHYgPSB0aGlzLmVhc2luZyh0aGlzLnRpbWUsIHZhbHVlLCB0aGlzLmNoYW5nZVByb3BzW2tleV0sIHRoaXMuZHVyYXRpb24pO1xyXG4gICAgICB0aGlzLnRhcmdldFtrZXldID0gdjtcclxuICAgIH0sIHRoaXMpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGVhc2luZygpIHsgcmV0dXJuIHRoaXMuX2Vhc2luZzsgfVxyXG4gIHNldCBlYXNpbmcodikge1xyXG4gICAgdGhpcy5fZWFzaW5nID0gVHdlZW4uRUFTSU5HW3ZdIHx8IFR3ZWVuLkVBU0lORy5kZWZhdWx0O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAc3RhdGljXHJcbiAqIOOCpOODvOOCuOODs+OCsFxyXG4gKiAjIyMgUmVmZXJlbmNlXHJcbiAqIC0gPGh0dHA6Ly9jb2RlcmVwb3Mub3JnL3NoYXJlL3dpa2kvSlNUd2VlbmVyPlxyXG4gKiAtIDxodHRwOi8vY29kZXJlcG9zLm9yZy9zaGFyZS9icm93c2VyL2xhbmcvamF2YXNjcmlwdC9qc3R3ZWVuZXIvdHJ1bmsvc3JjL0pTVHdlZW5lci5qcz5cclxuICogLSA8aHR0cDovL2dzZ2QuY28udWsvc2FuZGJveC9qcXVlcnkvZWFzaW5nL2pxdWVyeS5lYXNpbmcuMS4zLmpzPlxyXG4gKiAtIDxodHRwOi8vaG9zdGVkLnplaC5jb20uYnIvdHdlZW5lci9kb2NzL2VuLXVzL21pc2MvdHJhbnNpdGlvbnMuaHRtbD5cclxuICovXHJcblR3ZWVuLkVBU0lORyA9IHtcclxuXHJcbiAgLyoqIGRlZmF1bHQgKi9cclxuICBcImRlZmF1bHRcIjogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgcmV0dXJuIGMqdC9kICsgYjtcclxuICB9LFxyXG4gIC8qKiBsaW5lYXIgKi9cclxuICBsaW5lYXI6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIHJldHVybiBjKnQvZCArIGI7XHJcbiAgfSxcclxuICAvKiogc3dpbmcgKi9cclxuICBzd2luZzogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgcmV0dXJuIC1jICoodC89ZCkqKHQtMikgKyBiO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VJblF1YWQgKi9cclxuICBlYXNlSW5RdWFkOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICByZXR1cm4gYyoodC89ZCkqdCArIGI7XHJcbiAgfSxcclxuICAvKiogZWFzZU91dFF1YWQgKi9cclxuICBlYXNlT3V0UXVhZDogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgcmV0dXJuIC1jICoodC89ZCkqKHQtMikgKyBiO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VJbk91dFF1YWQgKi9cclxuICBlYXNlSW5PdXRRdWFkOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICBpZigodC89ZC8yKSA8IDEpIHJldHVybiBjLzIqdCp0ICsgYjtcclxuICAgIHJldHVybiAtYy8yICooKC0tdCkqKHQtMikgLSAxKSArIGI7XHJcbiAgfSxcclxuICAvKiogZGVmZUluQ3ViaWMgKi9cclxuICBlYXNlSW5DdWJpYzogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgcmV0dXJuIGMqKHQvPWQpKnQqdCArIGI7XHJcbiAgfSxcclxuICAvKiogZWFzZU91dEN1YmljICovXHJcbiAgZWFzZU91dEN1YmljOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICByZXR1cm4gYyooKHQ9dC9kLTEpKnQqdCArIDEpICsgYjtcclxuICB9LFxyXG4gIC8qKiBlYXNlSW5PdXRDdWJpYyAqL1xyXG4gIGVhc2VJbk91dEN1YmljOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICBpZigodC89ZC8yKSA8IDEpIHJldHVybiBjLzIqdCp0KnQgKyBiO1xyXG4gICAgcmV0dXJuIGMvMiooKHQtPTIpKnQqdCArIDIpICsgYjtcclxuICB9LFxyXG4gIC8qKiBlYXNlT3V0SW5DdWJpYyAqL1xyXG4gIGVhc2VPdXRJbkN1YmljOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICBpZih0IDwgZC8yKSByZXR1cm4gVHdlZW4uRUFTSU5HLmVhc2VPdXRDdWJpYyh0KjIsIGIsIGMvMiwgZCk7XHJcbiAgICByZXR1cm4gVHdlZW4uRUFTSU5HLmVhc2VJbkN1YmljKCh0KjIpLWQsIGIrYy8yLCBjLzIsIGQpO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VJblF1YXJ0ICovXHJcbiAgZWFzZUluUXVhcnQ6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIHJldHVybiBjKih0Lz1kKSp0KnQqdCArIGI7XHJcbiAgfSxcclxuICAvKiogZWFzZU91dFF1YXJ0ICovXHJcbiAgZWFzZU91dFF1YXJ0OiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICByZXR1cm4gLWMgKigodD10L2QtMSkqdCp0KnQgLSAxKSArIGI7XHJcbiAgfSxcclxuICAvKiogZWFzZUluT3V0UXVhcnQgKi9cclxuICBlYXNlSW5PdXRRdWFydDogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgaWYoKHQvPWQvMikgPCAxKSByZXR1cm4gYy8yKnQqdCp0KnQgKyBiO1xyXG4gICAgcmV0dXJuIC1jLzIgKigodC09MikqdCp0KnQgLSAyKSArIGI7XHJcbiAgfSxcclxuICAvKiogZWFzZU91dEluUXVhcnQgKi9cclxuICBlYXNlT3V0SW5RdWFydDogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgaWYodCA8IGQvMikgcmV0dXJuIFR3ZWVuLkVBU0lORy5lYXNlT3V0UXVhcnQodCoyLCBiLCBjLzIsIGQpO1xyXG4gICAgcmV0dXJuIFR3ZWVuLkVBU0lORy5lYXNlSW5RdWFydCgodCoyKS1kLCBiK2MvMiwgYy8yLCBkKTtcclxuICB9LFxyXG4gIC8qKiBlYXNlSW5RdWludCAqL1xyXG4gIGVhc2VJblF1aW50OiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICByZXR1cm4gYyoodC89ZCkqdCp0KnQqdCArIGI7XHJcbiAgfSxcclxuICAvKiogZWFzZU91dFF1aW50ICovXHJcbiAgZWFzZU91dFF1aW50OiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICByZXR1cm4gYyooKHQ9dC9kLTEpKnQqdCp0KnQgKyAxKSArIGI7XHJcbiAgfSxcclxuICAvKiogZWFzZUluT3V0UXVpbnQgKi9cclxuICBlYXNlSW5PdXRRdWludDogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgaWYoKHQvPWQvMikgPCAxKSByZXR1cm4gYy8yKnQqdCp0KnQqdCArIGI7XHJcbiAgICByZXR1cm4gYy8yKigodC09MikqdCp0KnQqdCArIDIpICsgYjtcclxuICB9LFxyXG4gIC8qKiBlYXNlT3V0SW5RdWludCAqL1xyXG4gIGVhc2VPdXRJblF1aW50OiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICBpZih0IDwgZC8yKSByZXR1cm4gVHdlZW4uRUFTSU5HLmVhc2VPdXRRdWludCh0KjIsIGIsIGMvMiwgZCk7XHJcbiAgICByZXR1cm4gVHdlZW4uRUFTSU5HLmVhc2VJblF1aW50KCh0KjIpLWQsIGIrYy8yLCBjLzIsIGQpO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VJblNpbmUgKi9cclxuICBlYXNlSW5TaW5lOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICByZXR1cm4gLWMgKiBNYXRoLmNvcyh0L2QgKihNYXRoLlBJLzIpKSArIGMgKyBiO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VPdXRTaW5lICovXHJcbiAgZWFzZU91dFNpbmU6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIHJldHVybiBjICogTWF0aC5zaW4odC9kICooTWF0aC5QSS8yKSkgKyBiO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VJbk91dFNpbmUgKi9cclxuICBlYXNlSW5PdXRTaW5lOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICByZXR1cm4gLWMvMiAqKE1hdGguY29zKE1hdGguUEkqdC9kKSAtIDEpICsgYjtcclxuICB9LFxyXG4gIC8qKiBlYXNlT3V0SW5TaW5lICovXHJcbiAgZWFzZU91dEluU2luZTogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgaWYodCA8IGQvMikgcmV0dXJuIFR3ZWVuLkVBU0lORy5lYXNlT3V0U2luZSh0KjIsIGIsIGMvMiwgZCk7XHJcbiAgICByZXR1cm4gVHdlZW4uRUFTSU5HLmVhc2VJblNpbmUoKHQqMiktZCwgYitjLzIsIGMvMiwgZCk7XHJcbiAgfSxcclxuICAvKiogZWFzZUluRXhwbyAqL1xyXG4gIGVhc2VJbkV4cG86IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIHJldHVybiAodD09MCkgPyBiIDogYyAqIE1hdGgucG93KDIsIDEwICoodC9kIC0gMSkpICsgYiAtIGMgKiAwLjAwMTtcclxuICB9LFxyXG4gIC8qKiBlYXNlT3V0RXhwbyAqL1xyXG4gIGVhc2VPdXRFeHBvOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICByZXR1cm4gKHQ9PWQpID8gYitjIDogYyAqIDEuMDAxICooLU1hdGgucG93KDIsIC0xMCAqIHQvZCkgKyAxKSArIGI7XHJcbiAgfSxcclxuICAvKiogZWFzZUluT3V0RXhwbyAqL1xyXG4gIGVhc2VJbk91dEV4cG86IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIGlmKHQ9PTApIHJldHVybiBiO1xyXG4gICAgaWYodD09ZCkgcmV0dXJuIGIrYztcclxuICAgIGlmKCh0Lz1kLzIpIDwgMSkgcmV0dXJuIGMvMiAqIE1hdGgucG93KDIsIDEwICoodCAtIDEpKSArIGIgLSBjICogMC4wMDA1O1xyXG4gICAgcmV0dXJuIGMvMiAqIDEuMDAwNSAqKC1NYXRoLnBvdygyLCAtMTAgKiAtLXQpICsgMikgKyBiO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VPdXRJbkV4cG8gKi9cclxuICBlYXNlT3V0SW5FeHBvOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICBpZih0IDwgZC8yKSByZXR1cm4gVHdlZW4uRUFTSU5HLmVhc2VPdXRFeHBvKHQqMiwgYiwgYy8yLCBkKTtcclxuICAgIHJldHVybiBUd2Vlbi5FQVNJTkcuZWFzZUluRXhwbygodCoyKS1kLCBiK2MvMiwgYy8yLCBkKTtcclxuICB9LFxyXG4gIC8qKiBlYXNlSW5DaXJjICovXHJcbiAgZWFzZUluQ2lyYzogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgcmV0dXJuIC1jICooTWF0aC5zcXJ0KDEgLSh0Lz1kKSp0KSAtIDEpICsgYjtcclxuICB9LFxyXG4gIC8qKiBlYXNlT3V0Q2lyYyAqL1xyXG4gIGVhc2VPdXRDaXJjOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICByZXR1cm4gYyAqIE1hdGguc3FydCgxIC0odD10L2QtMSkqdCkgKyBiO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VJbk91dENpcmMgKi9cclxuICBlYXNlSW5PdXRDaXJjOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICBpZigodC89ZC8yKSA8IDEpIHJldHVybiAtYy8yICooTWF0aC5zcXJ0KDEgLSB0KnQpIC0gMSkgKyBiO1xyXG4gICAgcmV0dXJuIGMvMiAqKE1hdGguc3FydCgxIC0odC09MikqdCkgKyAxKSArIGI7XHJcbiAgfSxcclxuICAvKiogZWFzZU91dEluQ2lyYyAqL1xyXG4gIGVhc2VPdXRJbkNpcmM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIGlmKHQgPCBkLzIpIHJldHVybiBUd2Vlbi5FQVNJTkcuZWFzZU91dENpcmModCoyLCBiLCBjLzIsIGQpO1xyXG4gICAgcmV0dXJuIFR3ZWVuLkVBU0lORy5lYXNlSW5DaXJjKCh0KjIpLWQsIGIrYy8yLCBjLzIsIGQpO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VJbkVsYXN0aWMgKi9cclxuICBlYXNlSW5FbGFzdGljOiBmdW5jdGlvbih0LCBiLCBjLCBkLCBhLCBwKSB7XHJcbiAgICB2YXIgcztcclxuICAgIGlmKHQ9PTApIHJldHVybiBiOyAgaWYoKHQvPWQpPT0xKSByZXR1cm4gYitjOyAgaWYoIXApIHA9ZCouMztcclxuICAgIGlmKCFhIHx8IGEgPCBNYXRoLmFicyhjKSkgeyBhPWM7IHM9cC80OyB9IGVsc2UgcyA9IHAvKDIqTWF0aC5QSSkgKiBNYXRoLmFzaW4oYy9hKTtcclxuICAgIHJldHVybiAtKGEqTWF0aC5wb3coMiwxMCoodC09MSkpICogTWF0aC5zaW4oKHQqZC1zKSooMipNYXRoLlBJKS9wICkpICsgYjtcclxuICB9LFxyXG4gIC8qKiBlYXNlT3V0RWxhc3RpYyAqL1xyXG4gIGVhc2VPdXRFbGFzdGljOiBmdW5jdGlvbih0LCBiLCBjLCBkLCBhLCBwKSB7XHJcbiAgICB2YXIgcztcclxuICAgIGlmKHQ9PTApIHJldHVybiBiOyAgaWYoKHQvPWQpPT0xKSByZXR1cm4gYitjOyAgaWYoIXApIHA9ZCouMztcclxuICAgIGlmKCFhIHx8IGEgPCBNYXRoLmFicyhjKSkgeyBhPWM7IHM9cC80OyB9IGVsc2UgcyA9IHAvKDIqTWF0aC5QSSkgKiBNYXRoLmFzaW4oYy9hKTtcclxuICAgIHJldHVybihhKk1hdGgucG93KDIsLTEwKnQpICogTWF0aC5zaW4oKHQqZC1zKSooMipNYXRoLlBJKS9wICkgKyBjICsgYik7XHJcbiAgfSxcclxuICAvKiogZWFzZUluT3V0RWxhc3RpYyAqL1xyXG4gIGVhc2VJbk91dEVsYXN0aWM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQsIGEsIHApIHtcclxuICAgIHZhciBzO1xyXG4gICAgaWYodD09MCkgcmV0dXJuIGI7ICBpZigodC89ZC8yKT09MikgcmV0dXJuIGIrYzsgIGlmKCFwKSBwPWQqKC4zKjEuNSk7XHJcbiAgICBpZighYSB8fCBhIDwgTWF0aC5hYnMoYykpIHsgYT1jOyBzPXAvNDsgfSAgICAgICBlbHNlIHMgPSBwLygyKk1hdGguUEkpICogTWF0aC5hc2luKGMvYSk7XHJcbiAgICBpZih0IDwgMSkgcmV0dXJuIC0uNSooYSpNYXRoLnBvdygyLDEwKih0LT0xKSkgKiBNYXRoLnNpbigodCpkLXMpKigyKk1hdGguUEkpL3AgKSkgKyBiO1xyXG4gICAgcmV0dXJuIGEqTWF0aC5wb3coMiwtMTAqKHQtPTEpKSAqIE1hdGguc2luKCh0KmQtcykqKDIqTWF0aC5QSSkvcCApKi41ICsgYyArIGI7XHJcbiAgfSxcclxuICAvKiogZWFzZU91dEluRWxhc3RpYyAqL1xyXG4gIGVhc2VPdXRJbkVsYXN0aWM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQsIGEsIHApIHtcclxuICAgIGlmKHQgPCBkLzIpIHJldHVybiBUd2Vlbi5FQVNJTkcuZWFzZU91dEVsYXN0aWModCoyLCBiLCBjLzIsIGQsIGEsIHApO1xyXG4gICAgcmV0dXJuIFR3ZWVuLkVBU0lORy5lYXNlSW5FbGFzdGljKCh0KjIpLWQsIGIrYy8yLCBjLzIsIGQsIGEsIHApO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VJbkJhY2sgKi9cclxuICBlYXNlSW5CYWNrOiBmdW5jdGlvbih0LCBiLCBjLCBkLCBzKSB7XHJcbiAgICBpZihzID09IHVuZGVmaW5lZCkgcyA9IDEuNzAxNTg7XHJcbiAgICByZXR1cm4gYyoodC89ZCkqdCooKHMrMSkqdCAtIHMpICsgYjtcclxuICB9LFxyXG4gIC8qKiBlYXNlT3V0QmFjayAqL1xyXG4gIGVhc2VPdXRCYWNrOiBmdW5jdGlvbih0LCBiLCBjLCBkLCBzKSB7XHJcbiAgICBpZihzID09IHVuZGVmaW5lZCkgcyA9IDEuNzAxNTg7XHJcbiAgICByZXR1cm4gYyooKHQ9dC9kLTEpKnQqKChzKzEpKnQgKyBzKSArIDEpICsgYjtcclxuICB9LFxyXG4gIC8qKiBlYXNlSW5PdXRCYWNrICovXHJcbiAgZWFzZUluT3V0QmFjazogZnVuY3Rpb24odCwgYiwgYywgZCwgcykge1xyXG4gICAgaWYocyA9PSB1bmRlZmluZWQpIHMgPSAxLjcwMTU4O1xyXG4gICAgaWYoKHQvPWQvMikgPCAxKSByZXR1cm4gYy8yKih0KnQqKCgocyo9KDEuNTI1KSkrMSkqdCAtIHMpKSArIGI7XHJcbiAgICByZXR1cm4gYy8yKigodC09MikqdCooKChzKj0oMS41MjUpKSsxKSp0ICsgcykgKyAyKSArIGI7XHJcbiAgfSxcclxuICAvKiogZWFzZU91dEluQmFjayAqL1xyXG4gIGVhc2VPdXRJbkJhY2s6IGZ1bmN0aW9uKHQsIGIsIGMsIGQsIHMpIHtcclxuICAgIGlmKHQgPCBkLzIpIHJldHVybiBUd2Vlbi5FQVNJTkcuZWFzZU91dEJhY2sodCoyLCBiLCBjLzIsIGQsIHMpO1xyXG4gICAgcmV0dXJuIFR3ZWVuLkVBU0lORy5lYXNlSW5CYWNrKCh0KjIpLWQsIGIrYy8yLCBjLzIsIGQsIHMpO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VJbkJvdW5jZSAqL1xyXG4gIGVhc2VJbkJvdW5jZTogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgcmV0dXJuIGMgLSBUd2Vlbi5FQVNJTkcuZWFzZU91dEJvdW5jZShkLXQsIDAsIGMsIGQpICsgYjtcclxuICB9LFxyXG4gIC8qKiBlYXNlT3V0Qm91bmNlICovXHJcbiAgZWFzZU91dEJvdW5jZTogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgaWYoKHQvPWQpIDwoMS8yLjc1KSkge1xyXG4gICAgICByZXR1cm4gYyooNy41NjI1KnQqdCkgKyBiO1xyXG4gICAgfSBlbHNlIGlmKHQgPCgyLzIuNzUpKSB7XHJcbiAgICAgIHJldHVybiBjKig3LjU2MjUqKHQtPSgxLjUvMi43NSkpKnQgKyAuNzUpICsgYjtcclxuICAgIH0gZWxzZSBpZih0IDwoMi41LzIuNzUpKSB7XHJcbiAgICAgIHJldHVybiBjKig3LjU2MjUqKHQtPSgyLjI1LzIuNzUpKSp0ICsgLjkzNzUpICsgYjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBjKig3LjU2MjUqKHQtPSgyLjYyNS8yLjc1KSkqdCArIC45ODQzNzUpICsgYjtcclxuICAgIH1cclxuICB9LFxyXG4gIC8qKiBlYXNlSW5PdXRCb3VuY2UgKi9cclxuICBlYXNlSW5PdXRCb3VuY2U6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIGlmKHQgPCBkLzIpIHJldHVybiBUd2Vlbi5FQVNJTkcuZWFzZUluQm91bmNlKHQqMiwgMCwgYywgZCkgKiAuNSArIGI7XHJcbiAgICBlbHNlIHJldHVybiBUd2Vlbi5FQVNJTkcuZWFzZU91dEJvdW5jZSh0KjItZCwgMCwgYywgZCkgKiAuNSArIGMqLjUgKyBiO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VPdXRJbkJvdW5jZSAqL1xyXG4gIGVhc2VPdXRJbkJvdW5jZTogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgaWYodCA8IGQvMikgcmV0dXJuIFR3ZWVuLkVBU0lORy5lYXNlT3V0Qm91bmNlKHQqMiwgYiwgYy8yLCBkKTtcclxuICAgIHJldHVybiBUd2Vlbi5FQVNJTkcuZWFzZUluQm91bmNlKCh0KjIpLWQsIGIrYy8yLCBjLzIsIGQpO1xyXG4gIH1cclxuXHJcbn07XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEudXRpbC5RdWVyeVN0cmluZ1xyXG4gKiBcclxuICovXHJcbmNsYXNzIFF1ZXJ5U3RyaW5nIHtcclxuXHJcbiAgc3RhdGljIHBhcnNlKHRleHQsIHNlcCwgZXEsIGlzRGVjb2RlKSB7XHJcbiAgICB0ZXh0ID0gdGV4dCB8fCBsb2NhdGlvbi5zZWFyY2guc3Vic3RyKDEpO1xyXG4gICAgc2VwID0gc2VwIHx8ICcmJztcclxuICAgIGVxID0gZXEgfHwgJz0nO1xyXG4gICAgdmFyIGRlY29kZSA9IChpc0RlY29kZSkgPyBkZWNvZGVVUklDb21wb25lbnQgOiBmdW5jdGlvbihhKSB7IHJldHVybiBhOyB9O1xyXG4gICAgcmV0dXJuIHRleHQuc3BsaXQoc2VwKS5yZWR1Y2UoZnVuY3Rpb24ob2JqLCB2KSB7XHJcbiAgICAgIHZhciBwYWlyID0gdi5zcGxpdChlcSk7XHJcbiAgICAgIG9ialtwYWlyWzBdXSA9IGRlY29kZShwYWlyWzFdKTtcclxuICAgICAgcmV0dXJuIG9iajtcclxuICAgIH0sIHt9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzdHJpbmdpZnkodmFsdWUsIHNlcCwgZXEsIGlzRW5jb2RlKSB7XHJcbiAgICBzZXAgPSBzZXAgfHwgJyYnO1xyXG4gICAgZXEgPSBlcSB8fCAnPSc7XHJcbiAgICB2YXIgZW5jb2RlID0gKGlzRW5jb2RlKSA/IGVuY29kZVVSSUNvbXBvbmVudCA6IGZ1bmN0aW9uKGEpIHsgcmV0dXJuIGE7IH07XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXModmFsdWUpLm1hcChmdW5jdGlvbihrZXkpIHtcclxuICAgICAgcmV0dXJuIGtleSArIGVxICsgZW5jb2RlKHZhbHVlW2tleV0pO1xyXG4gICAgfSkuam9pbihzZXApO1xyXG4gIH1cclxuICBcclxufVxuXG4vKipcclxuICogQGNsYXNzIGdsb2JhbC5TdHJpbmdcclxuICogIyDmi6HlvLXjgZfjgZ8gU3RyaW5nIOOCr+ODqeOCuVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAbWV0aG9kIGZvcm1hdFxyXG4gKiDjg5Xjgqnjg7zjg57jg4Pjg4jjgavlvJXmlbDjgpLpgannlKjjgZfjgZ/mloflrZfliJfjgpLov5TjgZfjgb7jgZnjgIJcclxuICpcclxuICog5byV5pWw44GM44Kq44OW44K444Kn44Kv44OI44Gu5aC05ZCI44CBXCJ744OX44Ot44OR44OG44Kj5ZCNfVwiIOOBjOOCquODluOCuOOCp+OCr+ODiOOBruODl+ODreODkeODhuOCo+OBruWApOOBq+e9ruOBjeaPm+OCj+OCiuOBvuOBmeOAglxyXG4gKiDmjIflrprjgZfjgZ/jg5fjg63jg5Hjg4bjgqPjgYzjgqrjg5bjgrjjgqfjgq/jg4jjgavjgarjgYTloLTlkIjjga/nqbrmloflrZfliJfjgavjgarjgorjgb7jgZnjgIJcclxuICpcclxuICog56ysMeW8leaVsOOBjOOCquODluOCuOOCp+OCr+ODiOOBp+OBquOBi+OBo+OBn+WgtOWQiOOAgVwie+aVtOaVsH1cIiDjgYzlkITlvJXmlbDjgavnva7jgY3mj5vjgo/jgorjgb7jgZnjgIJcclxuICog5oyH5a6a44GX44Gf5YCk44Gu5byV5pWw44GM44Gq44GL44Gj44Gf5aC05ZCI44Gv56m65paH5a2X5YiX44Gr44Gq44KK44G+44GZ44CCXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqICAgICBvYmogPSB7cjogMTI4LCBnOiAwLCBiOiAyNTV9O1xyXG4gKiAgICAgXCJjb2xvcjogcmdiKHtyfSwge2d9LCB7Yn0pO1wiLmZvcm1hdChvYmopOyAvLyA9PiBcImNvbG9yOiByZ2IoMTI4LCAwLCAyNTUpO1wiXHJcbiAqXHJcbiAqICAgICBcInswfSArIHsxfSA9IHsyfVwiLmZvcm1hdCg1LCA4LCAoNSs4KSk7IC8vID0+IFwiNSArIDggPSAxM1wiXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmog44OR44Op44Oh44O844K/44Go44Gq44KL44Kq44OW44K444Kn44Kv44OIXHJcbiAqIEByZXR1cm4ge1N0cmluZ30g55Sf5oiQ44GX44Gf5paH5a2X5YiXXHJcbiAqL1xyXG5mdW5jdGlvbiBmb3JtYXQoYXJnKSB7XHJcbi8vIFN0cmluZy5wcm90b3R5cGUuJG1ldGhvZChcImZvcm1hdFwiLCBmdW5jdGlvbihhcmcpIHtcclxuICAvLyDnva7mj5vjg5XjgqHjg7Pjgq9cclxuICB2YXIgcmVwX2ZuID0gdW5kZWZpbmVkO1xyXG4gIFxyXG4gIC8vIOOCquODluOCuOOCp+OCr+ODiOOBruWgtOWQiFxyXG4gIGlmICh0eXBlb2YgYXJnID09IFwib2JqZWN0XCIpIHtcclxuICAgIC8qKiBAaWdub3JlICovXHJcbiAgICByZXBfZm4gPSBmdW5jdGlvbihtLCBrKSB7XHJcbiAgICAgIGlmIChhcmdba10gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gYXJnW2tdO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuICAvLyDopIfmlbDlvJXmlbDjgaDjgaPjgZ/loLTlkIhcclxuICBlbHNlIHtcclxuICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xyXG4gICAgLyoqIEBpZ25vcmUgKi9cclxuICAgIHJlcF9mbiA9IGZ1bmN0aW9uKG0sIGspIHtcclxuICAgICAgdmFyIHYgPSBhcmdzWyBwYXJzZUludChrKSBdO1xyXG4gICAgICBpZiAodiAhPT0gdW5kZWZpbmVkICYmIHYgIT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gdjtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiB0aGlzLnJlcGxhY2UoIC9cXHsoXFx3KylcXH0vZywgcmVwX2ZuICk7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQG1ldGhvZCBlYWNoXHJcbiAqIOWQhOaWh+Wtl+OCkumghueVquOBq+a4oeOBl+OBquOBjOOCiemWouaVsOOCkue5sOOCiui/lOOBl+Wun+ihjOOBl+OBvuOBmeOAglxyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKiAgICAgc3RyID0gJ2FiYyc7XHJcbiAqICAgICBzdHIuZWFjaChmdW5jdGlvbihjaCkge1xyXG4gKiAgICAgICBjb25zb2xlLmxvZyhjaCk7XHJcbiAqICAgICB9KTtcclxuICogICAgIC8vID0+ICdhJ1xyXG4gKiAgICAgLy8gICAgJ2InXHJcbiAqICAgICAvLyAgICAnYydcclxuICpcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sg5ZCE6KaB57Sg44Gr5a++44GX44Gm5a6f6KGM44GZ44KL44Kz44O844Or44OQ44OD44Kv6Zai5pWwXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbc2VsZj10aGlzXSBjYWxsYmFjayDlhoXjgacgdGhpcyDjgajjgZfjgablj4LnhafjgZXjgozjgovlgKRcclxuICovXHJcbmZ1bmN0aW9uIGVhY2gkMSgpIHtcclxuLy8gU3RyaW5nLnByb3RvdHlwZS4kbWV0aG9kKFwiZWFjaFwiLCBmdW5jdGlvbigpIHtcclxuICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gIHJldHVybiB0aGlzO1xyXG59XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEudXRpbC5Db2xvclxyXG4gKiDjgqvjg6njg7zjgq/jg6njgrlcclxuICovXHJcbmNsYXNzIENvbG9yIHtcclxuXHJcbiAgLy8gLyoqIFLlgKQgKi9cclxuICAvLyByOiAyNTUsXHJcbiAgLy8gLyoqIEflgKQgKi9cclxuICAvLyBnOiAyNTUsXHJcbiAgLy8gLyoqIELlgKQgKi9cclxuICAvLyBiOiAyNTUsXHJcbiAgLy8gLyoqIEHlgKQgKi9cclxuICAvLyBhOiAxLjAsXHJcblxyXG4gIC8qKlxyXG4gICAqIOWIneacn+WMllxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHIsIGcsIGIsIGEpIHtcclxuICAgIHRoaXMuciA9IDI1NTtcclxuICAgIHRoaXMuZyA9IDI1NTtcclxuICAgIHRoaXMuYiA9IDI1NTtcclxuICAgIHRoaXMuYSA9IDEuMDtcclxuICAgIHRoaXMuc2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgrvjg4Pjgr/jg7wuXHJcbiAgICovXHJcbiAgc2V0KHIsIGcsIGIsIGEpIHtcclxuICAgIHRoaXMuciA9IHI7XHJcbiAgICB0aGlzLmcgPSBnO1xyXG4gICAgdGhpcy5iID0gYjtcclxuICAgIHRoaXMuYSA9IChhICE9PSB1bmRlZmluZWQpID8gYSA6IDEuMDtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5pWw5YCk44Gr44KI44KL44K744OD44K/44O8LlxyXG4gICAqL1xyXG4gIHNldEZyb21OdW1iZXIociwgZywgYiwgYSkge1xyXG4gICAgdGhpcy5yID0gcjtcclxuICAgIHRoaXMuZyA9IGc7XHJcbiAgICB0aGlzLmIgPSBiO1xyXG4gICAgdGhpcy5hID0gKGEgIT09IHVuZGVmaW5lZCkgPyBhIDogMS4wO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDphY3liJfjgavjgojjgovjgrvjg4Pjgr/jg7xcclxuICAgKi9cclxuICBzZXRGcm9tQXJyYXkoYXJyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zZXQuYXBwbHkodGhpcywgYXJyKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOOCquODluOCuOOCp+OCr+ODiOOBq+OCiOOCi+OCu+ODg+OCv+ODvFxyXG4gICAqL1xyXG4gIHNldEZyb21PYmplY3Qob2JqKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zZXQob2JqLnIsIG9iai5nLCBvYmouYiwgb2JqLmEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5paH5a2X5YiX44Gr44KI44KL44K744OD44K/44O8XHJcbiAgICovXHJcbiAgc2V0RnJvbVN0cmluZyhzdHIpIHtcclxuICAgIHZhciBjb2xvciA9IENvbG9yLnN0cmluZ1RvTnVtYmVyKHN0cik7XHJcbiAgICByZXR1cm4gdGhpcy5zZXQoY29sb3JbMF0sIGNvbG9yWzFdLCBjb2xvclsyXSwgY29sb3JbM10pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6LOi44GE44K744OD44K/44O8XHJcbiAgICovXHJcbiAgc2V0U21hcnQoKSB7XHJcbiAgICB2YXIgYXJnID0gYXJndW1lbnRzWzBdO1xyXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gMykge1xyXG4gICAgICB0aGlzLnNldChhcmd1bWVudHMuciwgYXJndW1lbnRzLmcsIGFyZ3VtZW50cy5iLCBhcmd1bWVudHMuYSk7XHJcbiAgICB9IGVsc2UgaWYgKGFyZyBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgIHRoaXMuc2V0RnJvbUFycmF5KGFyZyk7XHJcbiAgICB9IGVsc2UgaWYgKGFyZyBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG4gICAgICB0aGlzLnNldEZyb21PYmplY3QoYXJnKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mKGFyZykgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICB0aGlzLnNldEZyb21TdHJpbmcoYXJnKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ1NTIOeUqCAxNumAsuaVsOaWh+Wtl+WIl+OBq+WkieaPm1xyXG4gICAqL1xyXG4gIHRvU3R5bGVBc0hleCgpIHtcclxuICAgIHJldHVybiBmb3JtYXQuY2FsbChcIiN7MH17MX17Mn1cIixcclxuICAgIC8vIHJldHVybiBcIiN7MH17MX17Mn1cIi5mb3JtYXQoXHJcbiAgICAgIHRoaXMuci50b1N0cmluZygxNikucGFkZGluZygyLCAnMCcpLFxyXG4gICAgICB0aGlzLmcudG9TdHJpbmcoMTYpLnBhZGRpbmcoMiwgJzAnKSxcclxuICAgICAgdGhpcy5iLnRvU3RyaW5nKDE2KS5wYWRkaW5nKDIsICcwJylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDU1Mg55SoIFJHQuaWh+Wtl+WIl+OBq+WkieaPm1xyXG4gICAqL1xyXG4gIHRvU3R5bGVBc1JHQigpIHtcclxuICAgIHJldHVybiBmb3JtYXQuY2FsbChcInJnYih7cn0se2d9LHtifSlcIiwge1xyXG4gICAgLy8gcmV0dXJuIFwicmdiKHtyfSx7Z30se2J9KVwiLmZvcm1hdCh7XHJcbiAgICAgIHI6IH5+dGhpcy5yLFxyXG4gICAgICBnOiB+fnRoaXMuZyxcclxuICAgICAgYjogfn50aGlzLmJcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIENTUyDnlKggUkdCQeaWh+Wtl+WIl+OBq+WkieaPm1xyXG4gICAqL1xyXG4gIHRvU3R5bGVBc1JHQkEoKSB7XHJcbiAgICByZXR1cm4gZm9ybWF0LmNhbGwoXCJyZ2JhKHtyfSx7Z30se2J9LHthfSlcIiwge1xyXG4gICAgLy8gcmV0dXJuIFwicmdiYSh7cn0se2d9LHtifSx7YX0pXCIuZm9ybWF0KHtcclxuICAgICAgcjogfn50aGlzLnIsXHJcbiAgICAgIGc6IH5+dGhpcy5nLFxyXG4gICAgICBiOiB+fnRoaXMuYixcclxuICAgICAgYTogdGhpcy5hXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENTUyDnlKggUkdCQSDmloflrZfliJfjgavlpInmj5tcclxuICAgKi9cclxuICB0b1N0eWxlKCkge1xyXG4gICAgcmV0dXJuIGZvcm1hdC5jYWxsKFwicmdiYSh7cn0se2d9LHtifSx7YX0pXCIsIHtcclxuICAgIC8vIHJldHVybiBcInJnYmEoe3J9LHtnfSx7Yn0se2F9KVwiLmZvcm1hdCh7XHJcbiAgICAgIHI6IH5+dGhpcy5yLFxyXG4gICAgICBnOiB+fnRoaXMuZyxcclxuICAgICAgYjogfn50aGlzLmIsXHJcbiAgICAgIGE6IHRoaXMuYVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAc3RhdGljXHJcbiAgICogQG1lbWJlciBwaGluYS51dGlsLkNvbG9yXHJcbiAgICogQG1ldGhvZCBzdHJUb051bVxyXG4gICAqL1xyXG4gIHN0YXRpYyBzdHJUb051bShzdHIpIHtcclxuICAgIHJldHVybiB0aGlzLnN0cmluZ1RvTnVtYmVyKHN0cik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc3RyaW5nVG9OdW1iZXIoc3RyKSB7XHJcbiAgICB2YXIgdmFsdWUgPSBudWxsO1xyXG4gICAgdmFyIHR5cGUgPSBudWxsO1xyXG5cclxuICAgIGlmIChzdHJbMF0gPT09ICcjJykge1xyXG4gICAgICB0eXBlID0gKHN0ci5sZW5ndGggPT0gNCkgPyBcImhleDExMVwiIDogXCJoZXgyMjJcIjtcclxuICAgIH0gZWxzZSBpZiAoc3RyWzBdID09PSAncicgJiYgc3RyWzFdID09PSAnZycgJiYgc3RyWzJdID09PSAnYicpIHtcclxuICAgICAgdHlwZSA9IChzdHJbM10gPT0gJ2EnKSA/IFwicmdiYVwiIDogXCJyZ2JcIjtcclxuICAgIH0gZWxzZSBpZiAoc3RyWzBdID09PSAnaCcgJiYgc3RyWzFdID09PSAncycgJiYgc3RyWzJdID09PSAnbCcpIHtcclxuICAgICAgdHlwZSA9IChzdHJbM10gPT0gJ2EnKSA/IFwiaHNsYVwiIDogXCJoc2xcIjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZSkge1xyXG4gICAgICB2YXIgbWF0Y2hfc2V0ID0gTUFUQ0hfU0VUX0xJU1RbdHlwZV07XHJcbiAgICAgIHZhciBtID0gc3RyLm1hdGNoKG1hdGNoX3NldC5yZWcpO1xyXG4gICAgICB2YWx1ZSA9IG1hdGNoX3NldC5leGVjKG0pO1xyXG4gICAgfSBlbHNlIGlmIChDb2xvci5DT0xPUl9MSVNUW3N0cl0pIHtcclxuICAgICAgdmFsdWUgPSBDb2xvci5DT0xPUl9MSVNUW3N0cl07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHN0YXRpY1xyXG4gICAqIEBtZXRob2RcclxuICAgKiBoc2wg44KSIHJnYiDjgavlpInmj5tcclxuICAgKi9cclxuICBzdGF0aWMgSFNMdG9SR0IoaCwgcywgbCkge1xyXG4gICAgdmFyIHIsIGcsIGI7XHJcblxyXG4gICAgaCAlPSAzNjA7XHJcbiAgICBoICs9IDM2MDtcclxuICAgIGggJT0gMzYwO1xyXG4gICAgcyAqPSAwLjAxO1xyXG4gICAgbCAqPSAwLjAxO1xyXG5cclxuICAgIGlmIChzID09PSAwKSB7XHJcbiAgICAgIHZhciBsID0gTWF0aC5yb3VuZChsICogMjU1KTtcclxuICAgICAgcmV0dXJuIFtsLCBsLCBsXTtcclxuICAgIH1cclxuICAgIHZhciBtMiA9IChsIDwgMC41KSA/IGwgKiAoMSArIHMpIDogbCArIHMgLSBsICogcztcclxuICAgIHZhciBtMSA9IGwgKiAyIC0gbTI7XHJcblxyXG4gICAgLy8gcmVkXHJcbiAgICB2YXIgdGVtcCA9IChoICsgMTIwKSAlIDM2MDtcclxuICAgIGlmICh0ZW1wIDwgNjApIHtcclxuICAgICAgciA9IG0xICsgKG0yIC0gbTEpICogdGVtcCAvIDYwO1xyXG4gICAgfSBlbHNlIGlmICh0ZW1wIDwgMTgwKSB7XHJcbiAgICAgIHIgPSBtMjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHIgPSBtMTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBncmVlblxyXG4gICAgdGVtcCA9IGg7XHJcbiAgICBpZiAodGVtcCA8IDYwKSB7XHJcbiAgICAgIGcgPSBtMSArIChtMiAtIG0xKSAqIHRlbXAgLyA2MDtcclxuICAgIH0gZWxzZSBpZiAodGVtcCA8IDE4MCkge1xyXG4gICAgICBnID0gbTI7XHJcbiAgICB9IGVsc2UgaWYgKHRlbXAgPCAyNDApIHtcclxuICAgICAgZyA9IG0xICsgKG0yIC0gbTEpICogKDI0MCAtIHRlbXApIC8gNjA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBnID0gbTE7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYmx1ZVxyXG4gICAgdGVtcCA9ICgoaCAtIDEyMCkgKyAzNjApICUgMzYwO1xyXG4gICAgaWYgKHRlbXAgPCA2MCkge1xyXG4gICAgICBiID0gbTEgKyAobTIgLSBtMSkgKiB0ZW1wIC8gNjA7XHJcbiAgICB9IGVsc2UgaWYgKHRlbXAgPCAxODApIHtcclxuICAgICAgYiA9IG0yO1xyXG4gICAgfSBlbHNlIGlmICh0ZW1wIDwgMjQwKSB7XHJcbiAgICAgIGIgPSBtMSArIChtMiAtIG0xKSAqICgyNDAgLSB0ZW1wKSAvIDYwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYiA9IG0xO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbXHJcbiAgICAgIHBhcnNlSW50KHIgKiAyNTUpLFxyXG4gICAgICBwYXJzZUludChnICogMjU1KSxcclxuICAgICAgcGFyc2VJbnQoYiAqIDI1NSlcclxuICAgIF07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAc3RhdGljXHJcbiAgICogQG1ldGhvZFxyXG4gICAqIGhzbGEg44KSIHJnYmEg44Gr5aSJ5o+bXHJcbiAgICovXHJcbiAgc3RhdGljIEhTTEF0b1JHQkEoaCwgcywgbCwgYSkge1xyXG4gICAgdmFyIHRlbXAgPSBDb2xvci5IU0x0b1JHQihoLCBzLCBsKTtcclxuICAgIHRlbXBbM10gPSBhO1xyXG4gICAgcmV0dXJuIHRlbXA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAc3RhdGljXHJcbiAgICogQG1ldGhvZFxyXG4gICAqIHJnYiDlgKTjgpLkvZzmiJBcclxuICAgKi9cclxuICBzdGF0aWMgY3JlYXRlU3R5bGVSR0IociwgZywgYikge1xyXG4gICAgcmV0dXJuIFwicmdiYShcIiArIHIgKyBcIixcIiArIGcgKyBcIixcIiArIGIgKyBcIilcIjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBzdGF0aWNcclxuICAgKiBAbWV0aG9kXHJcbiAgICogcmdiYSDlgKTjgpLkvZzmiJBcclxuICAgKi9cclxuICBzdGF0aWMgY3JlYXRlU3R5bGVSR0JBKHIsIGcsIGIsIGEpIHtcclxuICAgIHJldHVybiBcInJnYmEoXCIgKyByICsgXCIsXCIgKyBnICsgXCIsXCIgKyBiICsgXCIsXCIgKyBhICsgXCIpXCI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAc3RhdGljXHJcbiAgICogQG1ldGhvZFxyXG4gICAqIGhzbCDlgKTjgpLkvZzmiJBcclxuICAgKi9cclxuICBzdGF0aWMgY3JlYXRlU3R5bGVIU0woaCwgcywgbCkge1xyXG4gICAgcmV0dXJuIFwiaHNsKFwiICsgaCArIFwiLFwiICsgcyArIFwiJSxcIiArIGwgKyBcIiUpXCI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAc3RhdGljXHJcbiAgICogQG1ldGhvZFxyXG4gICAqIGhzbGEg5YCk44KS5L2c5oiQXHJcbiAgICovXHJcbiAgc3RhdGljIGNyZWF0ZVN0eWxlSFNMQShoLCBzLCBsLCBhKSB7XHJcbiAgICByZXR1cm4gXCJoc2xhKFwiICsgaCArIFwiLFwiICsgcyArIFwiJSxcIiArIGwgKyBcIiUsXCIgKyBhICsgXCIpXCI7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLy8gc3RhdGljIHByb3BzXHJcbi8qKlxyXG4gKiBAc3RhdGljXHJcbiAqIOOCq+ODqeODvOODquOCueODiFxyXG4gKi9cclxuQ29sb3IuQ09MT1JfTElTVCA9IHtcclxuICAvKiogQHByb3BlcnR5IGJsYWNrICovXHJcbiAgXCJibGFja1wiOiBbMHgwMCwgMHgwMCwgMHgwMF0sXHJcbiAgLyoqIEBwcm9wZXJ0eSBzaWx2ZXIgKi9cclxuICBcInNpbHZlclwiOiBbMHhjMCwgMHhjMCwgMHhjMF0sXHJcbiAgLyoqIEBwcm9wZXJ0eSBncmF5ICovXHJcbiAgXCJncmF5XCI6IFsweDgwLCAweDgwLCAweDgwXSxcclxuICAvKiogQHByb3BlcnR5IHdoaXRlICovXHJcbiAgXCJ3aGl0ZVwiOiBbMHhmZiwgMHhmZiwgMHhmZl0sXHJcbiAgLyoqIEBwcm9wZXJ0eSBtYXJvb24gKi9cclxuICBcIm1hcm9vblwiOiBbMHg4MCwgMHgwMCwgMHgwMF0sXHJcbiAgLyoqIEBwcm9wZXJ0eSByZWQgKi9cclxuICBcInJlZFwiOiBbMHhmZiwgMHgwMCwgMHgwMF0sXHJcbiAgLyoqIEBwcm9wZXJ0eSBwdXJwbGUgKi9cclxuICBcInB1cnBsZVwiOiBbMHg4MCwgMHgwMCwgMHg4MF0sXHJcbiAgLyoqIEBwcm9wZXJ0eSBmdWNoc2lhICovXHJcbiAgXCJmdWNoc2lhXCI6IFsweGZmLCAweDAwLCAweGZmXSxcclxuICAvKiogQHByb3BlcnR5IGdyZWVuICovXHJcbiAgXCJncmVlblwiOiBbMHgwMCwgMHg4MCwgMHgwMF0sXHJcbiAgLyoqIEBwcm9wZXJ0eSBsaW1lICovXHJcbiAgXCJsaW1lXCI6IFsweDAwLCAweGZmLCAweDAwXSxcclxuICAvKiogQHByb3BlcnR5IG9saXZlICovXHJcbiAgXCJvbGl2ZVwiOiBbMHg4MCwgMHg4MCwgMHgwMF0sXHJcbiAgLyoqIEBwcm9wZXJ0eSB5ZWxsb3cgKi9cclxuICBcInllbGxvd1wiOiBbMHhmZiwgMHhmZiwgMHgwMF0sXHJcbiAgLyoqIEBwcm9wZXJ0eSBuYXZ5ICovXHJcbiAgXCJuYXZ5XCI6IFsweDAwLCAweDAwLCAweDgwXSxcclxuICAvKiogQHByb3BlcnR5IGJsdWUgKi9cclxuICBcImJsdWVcIjogWzB4MDAsIDB4MDAsIDB4ZmZdLFxyXG4gIC8qKiBAcHJvcGVydHkgdGVhbCAqL1xyXG4gIFwidGVhbFwiOiBbMHgwMCwgMHg4MCwgMHg4MF0sXHJcbiAgLyoqIEBwcm9wZXJ0eSBhcXVhICovXHJcbiAgXCJhcXVhXCI6IFsweDAwLCAweGZmLCAweGZmXSxcclxufTtcclxuXHJcblxyXG52YXIgTUFUQ0hfU0VUX0xJU1QgPSB7XHJcbiAgXCJoZXgxMTFcIjoge1xyXG4gICAgcmVnOiAvXiMoXFx3ezF9KShcXHd7MX0pKFxcd3sxfSkkLyxcclxuICAgIGV4ZWM6IGZ1bmN0aW9uKG0pIHtcclxuICAgICAgcmV0dXJuIFtcclxuICAgICAgICBwYXJzZUludChtWzFdICsgbVsxXSwgMTYpLFxyXG4gICAgICAgIHBhcnNlSW50KG1bMl0gKyBtWzJdLCAxNiksXHJcbiAgICAgICAgcGFyc2VJbnQobVszXSArIG1bM10sIDE2KVxyXG4gICAgICBdO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgXCJoZXgyMjJcIjoge1xyXG4gICAgcmVnOiAvXiMoXFx3ezJ9KShcXHd7Mn0pKFxcd3syfSkkLyxcclxuICAgIGV4ZWM6IGZ1bmN0aW9uKG0pIHtcclxuICAgICAgcmV0dXJuIFtcclxuICAgICAgICBwYXJzZUludChtWzFdLCAxNiksXHJcbiAgICAgICAgcGFyc2VJbnQobVsyXSwgMTYpLFxyXG4gICAgICAgIHBhcnNlSW50KG1bM10sIDE2KVxyXG4gICAgICBdO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgXCJyZ2JcIjoge1xyXG4gICAgcmVnOiAvXnJnYlxcKChcXGR7MSwzfSksXFxzKihcXGR7MSwzfSksXFxzKihcXGR7MSwzfSlcXCkkLyxcclxuICAgIGV4ZWM6IGZ1bmN0aW9uKG0pIHtcclxuICAgICAgcmV0dXJuIFtcclxuICAgICAgICBwYXJzZUludChtWzFdKSxcclxuICAgICAgICBwYXJzZUludChtWzJdKSxcclxuICAgICAgICBwYXJzZUludChtWzNdKVxyXG4gICAgICBdO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgXCJyZ2JhXCI6IHtcclxuICAgIHJlZzogL15yZ2JhXFwoKFxcZHsxLDN9KSxcXHMqKFxcZHsxLDN9KSxcXHMqKFxcZHsxLDN9KSxcXHMqKFxcZHsxfShcXC57MX1cXGQrKT8pXFwpJC8sXHJcbiAgICBleGVjOiBmdW5jdGlvbihtKSB7XHJcbiAgICAgIHJldHVybiBbXHJcbiAgICAgICAgcGFyc2VJbnQobVsxXSksXHJcbiAgICAgICAgcGFyc2VJbnQobVsyXSksXHJcbiAgICAgICAgcGFyc2VJbnQobVszXSksXHJcbiAgICAgICAgcGFyc2VGbG9hdChtWzRdKVxyXG4gICAgICBdO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgXCJoc2xcIjoge1xyXG4gICAgcmVnOiAvXmhzbFxcKChcXGR7MSwzfSksXFxzKihcXGR7MSwzfSklLFxccyooXFxkezEsM30pJVxcKSQvLFxyXG4gICAgZXhlYzogZnVuY3Rpb24obSkge1xyXG4gICAgICByZXR1cm4gQ29sb3IuSFNMdG9SR0IobVsxXSwgbVsyXSwgbVszXSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBcImhzbGFcIjoge1xyXG4gICAgcmVnOiAvXnJnYmFcXCgoXFxkezEsM30pLFxccyooXFxkezEsM30pLFxccyooXFxkezEsM30pLFxccyooXFxkezF9KFxcLnsxfVxcZCspPylcXCkkLyxcclxuICAgIGV4ZWM6IGZ1bmN0aW9uKG0pIHtcclxuICAgICAgcmV0dXJuIENvbG9yLkhTTEF0b1JHQkEobVsxXSwgbVsyXSwgbVszXSwgbVs0XSk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xuXG4vLyDnm6Poppbjgqrjg5bjgrjjgqfjgq/jg4hcclxuLy8gcmVnaXN0ZXIg44GnIGtleSDjgpLnmbvpjLIgKOODh+ODleOCqeODq+ODiOWApOOCguS4gOe3kuOBq++8nylcclxuLy8gZXZlbnQgZGlzcGF0Y2hlciDjgpLntpnmib9cclxuLy8gZXZlbnQgZGlzcGF0Y2hlciDjgaPjgaYgdXRpbCDjgZjjgoPjga3vvJ9cclxuLy8gcmVnaXN0ZXIg44Gn55m76Yyy44GX44Gf5YCk44KS5aSJ5pu044GX44Gf44KJIGNoYW5nZSDjgqTjg5njg7Pjg4jjgYzotbDjgotcclxuXHJcblxyXG4vLyDlkI3liY3lgJnoo5xcclxuLy8gIG1pZGRsZW1hbijku7Lnq4vkuropXHJcblxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS51dGlsLkNoYW5nZURpc3BhdGNoZXJcclxuICogQGV4dGVuZHMgcGhpbmEudXRpbC5FdmVudERpc3BhdGNoZXJcclxuICovXHJcbmNsYXNzIENoYW5nZURpc3BhdGNoZXIgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5fb2JzZXJ2ZSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICByZWdpc3RlcihrZXksIGRlZmF1bHRWYWx1ZSkge1xyXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgdmFyIG9iaiA9IGFyZ3VtZW50c1swXTtcclxuICAgICAgZm9ySW4uY2FsbChvYmosIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgLy8gb2JqLmZvckluKGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyKGtleSwgdmFsdWUpO1xyXG4gICAgICB9LCB0aGlzKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB2YXIgdGVtcEtleSA9ICdfXycgKyBrZXk7XHJcbiAgICAgIHRoaXNbdGVtcEtleV0gPSBkZWZhdWx0VmFsdWU7XHJcbiAgICAgIGFjY2Vzc29yLmNhbGwodGhpcywga2V5LCB7XHJcbiAgICAgIC8vIHRoaXMuYWNjZXNzb3Ioa2V5LCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzW3RlbXBLZXldO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbih2KSB7XHJcbiAgICAgICAgICB0aGlzW3RlbXBLZXldID0gdjtcclxuICAgICAgICAgIGlmICh0aGlzLl9vYnNlcnZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmxhcmUoJ2NoYW5nZScpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBvYnNlcnZlKCkge1xyXG4gICAgdGhpcy5fb2JzZXJ2ZSA9IHRydWU7XHJcbiAgfVxyXG4gIHVub2JzZXJ2ZSgpIHtcclxuICAgIHRoaXMuX29ic2VydmUgPSBmYWxzZTtcclxuICB9XHJcbn1cblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS51dGlsLkFqYXhcclxuICogXHJcbiAqL1xyXG5jbGFzcyBBamF4IHtcclxuXHJcbiAgc3RhdGljIHJlcXVlc3Qob3B0aW9ucykge1xyXG4gICAgdmFyIGRhdGEgPSAkc2FmZS5jYWxsKHt9LCBvcHRpb25zLCBBamF4LmRlZmF1bHRzKTtcclxuICAgIC8vIHZhciBkYXRhID0gKHt9KS4kc2FmZShvcHRpb25zLCB0aGlzLmRlZmF1bHRzKTtcclxuXHJcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB2YXIgZmxvdyA9IG5ldyBGbG93KGZ1bmN0aW9uKHJlc29sdmUpIHtcclxuICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xyXG4gICAgICAgICAgaWYgKFsyMDAsIDIwMSwgMF0uaW5kZXhPZih4aHIuc3RhdHVzKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh4aHIucmVzcG9uc2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIHhoci5vcGVuKGRhdGEudHlwZSwgZGF0YS51cmwpO1xyXG4gICAgICB4aHIucmVzcG9uc2VUeXBlID0gZGF0YS5yZXNwb25zZVR5cGU7XHJcbiAgICAgIHhoci5zZW5kKG51bGwpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGZsb3c7XHJcbiAgfVxyXG4gIHN0YXRpYyBnZXQodXJsKSB7XHJcbiAgICByZXR1cm4gQWpheC5yZXF1ZXN0KHtcclxuICAgICAgdHlwZTogJ0dFVCcsXHJcbiAgICAgIHVybDogdXJsLFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHN0YXRpYyBwb3N0KHVybCkge1xyXG4gICAgcmV0dXJuIEFqYXgucmVxdWVzdCh7XHJcbiAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgdXJsOiB1cmwsXHJcbiAgICB9KTtcclxuICB9XHJcbiAgc3RhdGljIHB1dCh1cmwpIHtcclxuICAgIHJldHVybiBBamF4LnJlcXVlc3Qoe1xyXG4gICAgICB0eXBlOiAnUFVUJyxcclxuICAgICAgdXJsOiB1cmwsXHJcbiAgICB9KTtcclxuICB9XHJcbiAgc3RhdGljIGRlbCh1cmwpIHtcclxuICAgIHJldHVybiBBamF4LnJlcXVlc3Qoe1xyXG4gICAgICB0eXBlOiAnREVMRVRFJyxcclxuICAgICAgdXJsOiB1cmwsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59XHJcblxyXG4vKiogXHJcbiAqIEBzdGF0aWNcclxuICogQG1lbWJlcm9mIEFqYXhcclxuICogQHR5cGUge09iamVjdH1cclxuICovXHJcbkFqYXguZGVmYXVsdHMgPSB7XHJcbiAgdHlwZTogJ0dFVCcsXHJcbiAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG4gIHJlc3BvbnNlVHlwZTogJ2pzb24nLFxyXG4gIGRhdGE6IG51bGwsXHJcbiAgdXJsOiAnJyxcclxufTtcblxuLyoqXHJcbiAqIEBjbGFzcyBnbG9iYWwuTnVtYmVyXHJcbiAqICMg5ouh5by144GX44GfIE51bWJlciDjgq/jg6njgrlcclxuICog5pWw5YCk44KS5omx44GGIE51bWJlciDjgq/jg6njgrnjgpLmi6HlvLXjgZfjgabjgYTjgb7jgZnjgIJcclxuICovXHJcblxyXG4vKipcclxuICogQG1ldGhvZCB0aW1lc1xyXG4gKiAwIOOBi+OCieiHquWIhuiHqui6q+OBruaVsC0x44G+44Gn44CB44Kr44Km44Oz44K/44KS44Kk44Oz44Kv44Oq44Oh44Oz44OI44GX44Gq44GM44KJ6Zai5pWw44KS57mw44KK6L+U44GX5a6f6KGM44GX44G+44GZ44CCXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqICAgICBhcnIgPSBbXTtcclxuICogICAgICg1KS50aW1lcyhmdW5jdGlvbihpKXtcclxuICogICAgICAgYXJyLnB1c2goaSk7XHJcbiAqICAgICB9KTsgLy8gPT4gWzAsIDEsIDIsIDMsIDRdXHJcbiAqXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIOOCs+ODvOODq+ODkOODg+OCr+mWouaVsFxyXG4gKiBAcGFyYW0ge09iamVjdH0gW3NlbGY9dGhpc10g6Zai5pWw5YaF44GnIHRoaXMg44Go44GX44Gm5Y+C54Wn44GV44KM44KL5YCk44CC44OH44OV44Kp44Or44OI44Gv6Ieq5YiG6Ieq6Lqr44CCXHJcbiAqL1xyXG5mdW5jdGlvbiB0aW1lcyhmbiwgc2VsZikge1xyXG4vLyBOdW1iZXIucHJvdG90eXBlLiRtZXRob2QoXCJ0aW1lc1wiLCAgZnVuY3Rpb24oZm4sIHNlbGYpIHtcclxuICBzZWxmID0gc2VsZiB8fCB0aGlzO1xyXG4gIGZvciAodmFyIGk9MDsgaTx0aGlzOyArK2kpIHtcclxuICAgIGZuLmNhbGwoc2VsZiwgaSwgdGhpcyk7XHJcbiAgfVxyXG4gIHJldHVybiB0aGlzO1xyXG59XHJcblxyXG4vKipcclxuICogQG1ldGhvZCBzdGVwXHJcbiAqIOiHquWIhuiHqui6q+OBruWApOOBi+OCieaMh+WumuOBl+OBn+aVsOOBvuOBp+OAgeOCq+OCpuODs+OCv+OCkuWil+WIhuOBleOBm+OBquOBjOOCiemWouaVsOOCkue5sOOCiui/lOOBl+Wun+ihjOOBl+OBvuOBmeOAglxyXG4gKlxyXG4gKiDkuIrpmZDlgKTjgoTlopfliIblgKTjga8gZmxvYXQg5Z6L44KS5oyH5a6a44GZ44KL44GT44Go44GM44Gn44GN44G+44GZ44CCXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqICAgICB2YXIgYXJyID0gW107XHJcbiAqICAgICAoMi40KS5zdGVwKDUuMywgMC44LCBmdW5jdGlvbihuKSB7XHJcbiAqICAgICAgIGFyci5wdXNoKG4pO1xyXG4gKiAgICAgIH0pOyAvLyA9PiBbMi40LCAzLjIsIDQuMCwgNC44XVxyXG4gKlxyXG4gKiBAcGFyYW0ge051bWJlcn0gbGltaXQg44Kr44Km44Oz44K/44Gu5LiK6ZmQ5YCkXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBzdGVwIOOCq+OCpuODs+OCv+OCkuWil+WIhuOBmeOCi+mHj1xyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiDjgrPjg7zjg6vjg5Djg4Pjgq/plqLmlbDjgILlvJXmlbDjgavjgqvjgqbjg7Pjgr/jgYzmuKHjgZXjgozjgovjgIJcclxuICogQHBhcmFtIHtPYmplY3R9IFtzZWxmPXRoaXNdIOmWouaVsOWGheOBpyB0aGlzIOOBqOOBl+OBpuWPgueFp+OBleOCjOOCi+WApOOAguODh+ODleOCqeODq+ODiOOBr+iHquWIhuiHqui6q+OAglxyXG4gKi9cclxuZnVuY3Rpb24gc3RlcChsaW1pdCwgc3RlcCwgZm4sIHNlbGYpIHtcclxuLy8gTnVtYmVyLnByb3RvdHlwZS4kbWV0aG9kKFwic3RlcFwiLCAgZnVuY3Rpb24obGltaXQsIHN0ZXAsIGZuLCBzZWxmKSB7XHJcbiAgc2VsZiA9IHNlbGYgfHwgdGhpcztcclxuICBmb3IgKHZhciBpPSt0aGlzOyBpPD1saW1pdDsgaSs9c3RlcCkge1xyXG4gICAgZm4uY2FsbChzZWxmLCBpLCB0aGlzKTtcclxuICB9XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn1cclxuLy8gTnVtYmVyLnByb3RvdHlwZS4kbWV0aG9kKFwidG9EZWdyZWVcIiwgZnVuY3Rpb24oKSB7IHJldHVybiAodGhpcypNYXRoLlJBRF9UT19ERUcpOyB9KTtcclxuXHJcbi8qKlxyXG4gKiBAbWV0aG9kIHRvUmFkaWFuXHJcbiAqIOW6puOCkuODqeOCuOOCouODs+OBq+WkieaPm+OBl+OBvuOBmeOAglxyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKiAgICAgKDE4MCkudG9SYWRpYW4oKTsgLy8gPT4gMy4xNDE1OTI2NTM1ODk3OTNcclxuICpcclxuICogQHJldHVybiB7TnVtYmVyfSDjg6njgrjjgqLjg7NcclxuICovXHJcbmZ1bmN0aW9uIHRvUmFkaWFuKCkgeyByZXR1cm4gdGhpcyAqIERFR19UT19SQUQ7IH1cclxuLy8gTnVtYmVyLnByb3RvdHlwZS4kbWV0aG9kKFwidG9SYWRpYW5cIiwgZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzKk1hdGguREVHX1RPX1JBRDsgfSk7XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZ2VvbS5WZWN0b3IyXHJcbiAqICMgMuasoeWFg+ODmeOCr+ODiOODq+OCr+ODqeOCuVxyXG4gKiAy5qyh5YWD44Gu44OZ44Kv44OI44Or44KE5bqn5qiZ44KS6KGo44GZ44Kv44Op44K544Gn44GZ44CCXHJcbiAqL1xyXG5jbGFzcyBWZWN0b3IyIHtcclxuXHJcbiAgLy8gLyoqXHJcbiAgLy8gICogeOW6p+aomVxyXG4gIC8vICAqIEB0eXBlIHtOdW1iZXJ9XHJcbiAgLy8gICovXHJcbiAgLy8geCA9IDBcclxuXHJcbiAgLy8gLyoqXHJcbiAgLy8gICogeeW6p+aomVxyXG4gIC8vICAqIEB0eXBlIHtOdW1iZXJ9XHJcbiAgLy8gICovXHJcbiAgLy8geSA9IDBcclxuXHJcbiAgLyoqXHJcbiAgICogMuasoeWFg+ODmeOCr+ODiOODq+OBruOCs+ODs+OCueODiOODqeOCr+OCv+OBp+OBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdiA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCA0KTtcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbeD0wXSDjg5njgq/jg4jjg6vjga4geCDluqfmqJlcclxuICAgKiBAcGFyYW0ge051bWJlcn0gW3k9MF0g44OZ44Kv44OI44Or44GuIHkg5bqn5qiZXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5WZWN0b3IyfSAy5qyh5YWD44OZ44Kv44OI44Or44Kq44OW44K444Kn44Kv44OIXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoeD0wLCB5PTApIHtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBjbG9uZVxyXG4gICAqIHRoaXMg44Gu44Kz44OU44O844KS55Sf5oiQ44GX44Gm6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2ID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDMsIDQpO1xyXG4gICAqICAgICB2MiA9IHYuY2xvbmUoKTtcclxuICAgKiAgICAgdjIueCA9PSB2Lng7IC8vID0+IHRydWVcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge09iamVjdH0g55Sf5oiQ44GX44Gf44OZ44Kv44OI44OrXHJcbiAgICovXHJcbiAgY2xvbmUoKSB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjIodGhpcy54LCB0aGlzLnkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBlcXVhbHNcclxuICAgKiB0aGlzIOOBruWQhOimgee0oOOBjOOBmeOBueOBpiBvdGhlciDjgajnrYnjgZfjgYTjgYvjganjgYbjgYvjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDMsIDQpO1xyXG4gICAqICAgICB2MiA9IHBoaW5hLmdlb20uVmVjdG9yMig1LCA2KTtcclxuICAgKiAgICAgdjEuZXF1YWxzKHYyKTsgLy8gPT4gZmFsc2VcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSBvdGhlciDmr5TovIPjgZnjgovlr77osaHjga7jg5njgq/jg4jjg6tcclxuICAgKiBAcmV0dXJuIHtCb29sZWFufSDnrYnjgZfjgYTjgYvjganjgYbjgYtcclxuICAgKi9cclxuICBlcXVhbHModikge1xyXG4gICAgcmV0dXJuICh0aGlzLnggPT09IHYueCAmJiB0aGlzLnkgPT09IHYueSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHNldFxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKiB0aGlzIOOBruWQhOimgee0oOOBruWApOOCkuWGjeioreWumuOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdiA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCA0KTtcclxuICAgKiAgICAgdi5zZXQoNSwgNik7XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge051bWJlcn0geCDjg5njgq/jg4jjg6vjga4geCDluqfmqJlcclxuICAgKiBAcGFyYW0ge051bWJlcn0geSDjg5njgq/jg4jjg6vjga4geSDluqfmqJlcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLlZlY3RvcjJ9IOWGjeioreWumuW+jOOBruODmeOCr+ODiOODq1xyXG4gICAqL1xyXG4gIHNldCh4LCB5KSB7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBhZGRcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICogdGhpcyDjgasgb3RoZXIg44KS5Yqg44GI44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCA0KTtcclxuICAgKiAgICAgdjIgPSBwaGluYS5nZW9tLlZlY3RvcjIoNSwgNik7XHJcbiAgICogICAgIHYxLmFkZCh2Mik7IC8vID0+IHBoaW5hLmdlb20uVmVjdG9yKDgsIDEwKVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IG90aGVyIOODmeOCr+ODiOODq1xyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uVmVjdG9yMn0g5Yqg566X44GX44Gf57WQ5p6c44Gu44OZ44Kv44OI44OrXHJcbiAgICovXHJcbiAgYWRkKHYpIHtcclxuICAgIHRoaXMueCArPSB2Lng7XHJcbiAgICB0aGlzLnkgKz0gdi55O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHN1YlxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKiB0aGlzIOOBi+OCiSBvdGhlciDjgpLmuJvjgZjjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqIOODmeOCr+ODiOODq+OBjOW6p+aomeOCkuihqOOBmeWgtOWQiOOBr+OAgeaMh+WumuOBl+OBn+W6p+aomeOBi+OCieiHquWIhuiHqui6q+OBuOOBqOWQkeOBi+OBhuODmeOCr+ODiOODq+OBjOW+l+OCieOCjOOBvuOBmeOAglxyXG4gICAqIFxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDMsIDQpO1xyXG4gICAqICAgICB2MiA9IHBoaW5hLmdlb20uVmVjdG9yMigxLCA1KTtcclxuICAgKiAgICAgdjEuc3ViKHYyKTsgLy8gPT4gcGhpbmEuZ2VvbS5WZWN0b3IoMiwgLTEpXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gb3RoZXIg44OZ44Kv44OI44OrXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5WZWN0b3IyfSDmuJvnrpfjgZfjgZ/ntZDmnpzjga7jg5njgq/jg4jjg6tcclxuICAgKi9cclxuICBzdWIodikge1xyXG4gICAgdGhpcy54IC09IHYueDtcclxuICAgIHRoaXMueSAtPSB2Lnk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgbXVsXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIHRoaXMg44Gu5ZCE6KaB57Sg44Gr5pWw5YCkIG4g44KS5LmX44GY44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCA0KTtcclxuICAgKiAgICAgdjEubXVsKDMpIC8vID0+IHBoaW5hLmdlb20uVmVjdG9yKDksIDEyKVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG4g5LmX44GY44KL5YCkXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5WZWN0b3IyfSDkuZfnrpfjgZfjgZ/ntZDmnpzjga7jg5njgq/jg4jjg6tcclxuICAgKi9cclxuICBtdWwobikge1xyXG4gICAgdGhpcy54ICo9IG47XHJcbiAgICB0aGlzLnkgKj0gbjtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBkaXZcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICogdGhpcyDjga7lkITopoHntKDjgpLmlbDlgKQgbiDjgaflibLjgorjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDgsIDE2KTtcclxuICAgKiAgICAgdjEuZGl2KDIpIC8vID0+IHBoaW5hLmdlb20uVmVjdG9yKDQsIDgpXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge051bWJlcn0gbiDlibLjgovlgKRcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLlZlY3RvcjJ9IOmZpOeul+OBl+OBn+e1kOaenOOBruODmeOCr+ODiOODq1xyXG4gICAqL1xyXG4gIGRpdihuKSB7XHJcbiAgICAvL2NvbnNvbGUuYXNzZXJ0KG4gIT0gMCwgXCIwIGRpdmlzaW9uISFcIik7XHJcbiAgICBuID0gbiB8fCAwLjAxO1xyXG4gICAgdGhpcy54IC89IG47XHJcbiAgICB0aGlzLnkgLz0gbjtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBAbWV0aG9kIG5lZ2F0ZVxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKiB0aGlzIOOBruWQhOimgee0oOOBruato+iyoOOCkuWPjei7ouOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogdGhpcyDjgajlkIzjgZjlpKfjgY3jgZXjgafmlrnlkJHjgYzpgIbjga7jg5njgq/jg4jjg6vjgYzlvpfjgonjgozjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDMsIC00KTtcclxuICAgKiAgICAgdjEubmVnYXRlKCkgLy8gPT4gcGhpbmEuZ2VvbS5WZWN0b3IoLTMsIDQpXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLlZlY3RvcjJ9IOWPjei7ouW+jOOBruODmeOCr+ODiOODq1xyXG4gICAqL1xyXG4gIG5lZ2F0ZSgpIHtcclxuICAgIHRoaXMueCA9IC10aGlzLng7XHJcbiAgICB0aGlzLnkgPSAtdGhpcy55O1xyXG4gICAgXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgZG90XHJcbiAgICogb3RoZXIg44Go44Gu5YaF56mN44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiDmipXlvbHjg5njgq/jg4jjg6vjgpLmsYLjgoHjgZ/jgorjgIHpoZ7kvLzluqbjga7oqIjnrpfjgavliKnnlKjjgZnjgovjgZPjgajjgYzjgafjgY3jgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDMsIDQpO1xyXG4gICAqICAgICB2MiA9IHBoaW5hLmdlb20uVmVjdG9yMigtMiwgMik7XHJcbiAgICogICAgIHYxLmRvdCh2MikgLy8gPT4gMlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IG90aGVyIOODmeOCr+ODiOODq1xyXG4gICAqIEByZXR1cm4ge051bWJlcn0g5YaF56mNXHJcbiAgICovXHJcbiAgZG90KHYpIHtcclxuICAgIHJldHVybiB0aGlzLnggKiB2LnggKyB0aGlzLnkgKiB2Lnk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGNyb3NzXHJcbiAgICogb3RoZXIg44Go44Gu5aSW56mN77yI44Kv44Ot44K556mN77yJ44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAy5qyh5YWD44OZ44Kv44OI44Or44Gn44Gu5aSW56mN44Gv44OZ44Kv44OI44Or44Gn44Gq44GP5pWw5YCk44KS6L+U44GZ44GT44Go44Gr5rOo5oSP44GX44Gm44GP44Gg44GV44GE44CCXHJcbiAgICogb3RoZXIg44KI44KKIHRoaXMg5pmC6KiI5Zue44KK44Gr44GC44KL44Go44GN44Gv5q2j44Gu5YCk44Gr44Gq44KK44CB5Y+N5pmC6KiI5Zue44KK44Gr44GC44KL44Go44GN44Gv6LKg44Gu5YCk44Gr44Gq44KK44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCA0KTtcclxuICAgKiAgICAgdjIgPSBwaGluYS5nZW9tLlZlY3RvcjIoMywgMSk7XHJcbiAgICogICAgIHYxLmNyb3NzKHYyKSAvLyA9PiAtOFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IG90aGVyIOODmeOCr+ODiOODq1xyXG4gICAqIEByZXR1cm4ge051bWJlcn0g5aSW56mNXHJcbiAgICovXHJcbiAgY3Jvc3Modikge1xyXG4gICAgcmV0dXJuICh0aGlzLngqdi55KSAtICh0aGlzLnkqdi54KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgbGVuZ3RoXHJcbiAgICogdGhpcyDjga7lpKfjgY3jgZXjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqIChtZW1vKSBtYWduaXR1ZGUg44Gj44Gm5ZCN5YmN44Gu5pa544GM6Imv44GE44GL44KCLiDmpJzoqI7kuK0uXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCA0KTtcclxuICAgKiAgICAgdjEubGVuZ3RoKCk7IC8vID0+IDVcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge051bWJlcn0g44OZ44Kv44OI44Or44Gu5aSn44GN44GVXHJcbiAgICovXHJcbiAgbGVuZ3RoKCkge1xyXG4gICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLngqdGhpcy54ICsgdGhpcy55KnRoaXMueSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgbGVuZ3RoU3F1YXJlZFxyXG4gICAqIHRoaXMg44Gu5aSn44GN44GV44Gu6Ieq5LmX44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiBDIyDjga7lkI3liY3jgpLlvJXnlKjvvIhvciBsZW5ndGhTcXVhcmUgb3IgbGVuZ3RoU3FydO+8iVxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMywgNCk7XHJcbiAgICogICAgIHYxLmxlbmd0aFNxdWFyZWQoKTsgLy8gPT4gMjVcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge051bWJlcn0g44OZ44Kv44OI44Or44Gu5aSn44GN44GV44Gu6Ieq5LmXXHJcbiAgICovXHJcbiAgbGVuZ3RoU3F1YXJlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLngqdGhpcy54ICsgdGhpcy55KnRoaXMueTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBkaXN0YW5jZVxyXG4gICAqIHRoaXMg44GoIG90aGVyIOOCkuW6p+aomeOBqOOBv+OBquOBl+OBn+OBqOOBjeOBrjLngrnplpPjga7ot53pm6LjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDEsIDIpO1xyXG4gICAqICAgICB2MiA9IHBoaW5hLmdlb20uVmVjdG9yMig0LCA2KTtcclxuICAgKiAgICAgdjEuZGlzdGFuY2UodjIpOyAvLyA9PiA1XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gb3RoZXIg5bqn5qiZ44KS6KGo44GZ44OZ44Kv44OI44OrXHJcbiAgICogQHJldHVybiB7TnVtYmVyfSAy54K56ZaT44Gu6Led6ZuiXHJcbiAgICovXHJcbiAgZGlzdGFuY2Uodikge1xyXG4gICAgcmV0dXJuIE1hdGguc3FydCggTWF0aC5wb3codGhpcy54LXYueCwgMikgKyBNYXRoLnBvdyh0aGlzLnktdi55LCAyKSApO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBAbWV0aG9kIGRpc3RhbmNlU3F1YXJlZFxyXG4gICAqIHRoaXMg44GoIG90aGVyIOOCkuW6p+aomeOBqOOBv+OBquOBl+OBn+OBqOOBjeOBrjLngrnplpPjga7ot53pm6Ljga7oh6rkuZfjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDEsIDIpO1xyXG4gICAqICAgICB2MiA9IHBoaW5hLmdlb20uVmVjdG9yMig0LCA2KTtcclxuICAgKiAgICAgdjEuZGlzdGFuY2VTcXVhcmVkKHYyKTsgLy8gPT4gMjVcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSBvdGhlciDluqfmqJnjgpLooajjgZnjg5njgq/jg4jjg6tcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IDLngrnplpPjga7ot53pm6Ljga7oh6rkuZdcclxuICAgKi9cclxuICBkaXN0YW5jZVNxdWFyZWQodikge1xyXG4gICAgcmV0dXJuIE1hdGgucG93KHRoaXMueC12LngsIDIpICsgTWF0aC5wb3codGhpcy55LXYueSwgMik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHJhbmRvbVxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKiDop5LluqbjgYwgbWluIOOBi+OCiSBtYXgg44Gu56+E5Zuy77yI5bqm5Y2Y5L2N77yJ44Gn5aSn44GN44GV44GMIGxlbiDjga7jg6njg7Pjg4Djg6Djgarjg5njgq/jg4jjg6vjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHBoaW5hLmdlb20uVmVjdG9yMigpLnJhbmRvbSg5MCwgMTgwLCAxKTsgLy8gPT4gcGhpbmEuZ2VvbS5WZWN0b3IyKC0wLjUsIDAuODY2KSDjgarjgalcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbbWluPTBdIOinkuW6pu+8iOW6puWNmOS9je+8ieOBruS4i+mZkOWApFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbbWF4PTM2MF0g6KeS5bqm77yI5bqm5Y2Y5L2N77yJ44Gu5LiK6ZmQ5YCkXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtsZW49MV0g5aSn44GN44GVXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5WZWN0b3IyfSDjg6njg7Pjg4Djg6DljJbjgZfjgZ/jg5njgq/jg4jjg6tcclxuICAgKi9cclxuICByYW5kb20obWluLCBtYXgsIGxlbikge1xyXG4gICAgdmFyIGRlZ3JlZSA9IFJhbmRvbS5yYW5kZmxvYXQobWluIHx8IDAsIG1heCB8fCAzNjApO1xyXG4gICAgdmFyIHJhZCA9IGRlZ3JlZSpNYXRoLkRFR19UT19SQUQ7XHJcbiAgICB2YXIgbGVuID0gbGVuIHx8IDE7XHJcblxyXG4gICAgdGhpcy54ID0gTWF0aC5jb3MocmFkKSpsZW47XHJcbiAgICB0aGlzLnkgPSBNYXRoLnNpbihyYWQpKmxlbjtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBub3JtYWxpemVcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICogdGhpcyDjgpLmraPopo/ljJbjgZfjgb7jgZnjgILjgZnjgarjgo/jgaHjgIF0aGlzIOOBqOWQjOOBmOaWueWQkeOBp+Wkp+OBjeOBleOBjDHjga7jg5njgq/jg4jjg6vjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDMsIDQpO1xyXG4gICAqICAgICB2MS5ub3JtYWxpemUoKTsgLy8gPT4gcGhpbmEuZ2VvbS5WZWN0b3IyKDAuNiwgMC44KVxyXG4gICAqXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5WZWN0b3IyfSDmraPopo/ljJbjgZfjgZ/jg5njgq/jg4jjg6tcclxuICAgKi9cclxuICBub3JtYWxpemUoKSB7XHJcbiAgICB0aGlzLmRpdih0aGlzLmxlbmd0aCgpKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCB0b1N0cmluZ1xyXG4gICAqIHRoaXMg44KSIEpTT04g5b2i5byP44Gn6KGo54++44GX44Gf5paH5a2X5YiX44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCA0KTtcclxuICAgKiAgICAgdjEudG9TdHJpbmcoKTsgLy8gPT4gXCJ7eDozLCB5OjR9XCJcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge1N0cmluZ30gSlNPTiDmloflrZfliJdcclxuICAgKi9cclxuICB0b1N0cmluZygpIHtcclxuICAgIHJldHVybiBcInt4Ont4fSwgeTp7eX19XCIuZm9ybWF0KHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBnZXREaXJlY3Rpb25cclxuICAgKiB0aGlzIOOBruOBiuOBiuOCiOOBneOBruaWueWQkeOCkuekuuOBl+OBn+aWh+Wtl+WIl+OCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMywgNCk7XHJcbiAgICogICAgIHYxLmdldERpcmVjdGlvbigpOyAvLyA9PiBcInVwXCJcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge1N0cmluZ30g5pa55ZCR44KS6KGo44GZ5paH5a2X5YiX77yIXCJ1cFwiLCBcInJpZ2h0XCIsIFwiZG93blwiLCBcImxlZnRcIu+8iVxyXG4gICAqL1xyXG4gIGdldERpcmVjdGlvbigpIHtcclxuICAgIHZhciBhbmdsZSA9IHRoaXMudG9EZWdyZWUoKTtcclxuICAgIGlmIChhbmdsZSA8IDQ1KSB7XHJcbiAgICAgIHJldHVybiBcInJpZ2h0XCI7XHJcbiAgICB9IGVsc2UgaWYgKGFuZ2xlIDwgMTM1KSB7XHJcbiAgICAgIHJldHVybiBcImRvd25cIjtcclxuICAgIH0gZWxzZSBpZiAoYW5nbGUgPCAyMjUpIHtcclxuICAgICAgcmV0dXJuIFwibGVmdFwiXHJcbiAgICB9IGVsc2UgaWYgKGFuZ2xlIDwgMzE1KSB7XHJcbiAgICAgIHJldHVybiBcInVwXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gXCJyaWdodFwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCB0b0FuZ2xlXHJcbiAgICogdGhpcyDjgaggeCDou7jjgajjga7op5LluqbvvIjjg6njgrjjgqLjg7PljZjkvY3vvInjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKC0yLCAwKTtcclxuICAgKiAgICAgdjEudG9BbmdsZSgpOyAvLyA9PiAzLjE0MTU5XHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IOODmeOCr+ODiOODq+OBruinkuW6pu+8iOODqeOCuOOCouODs+WNmOS9je+8iVxyXG4gICAqL1xyXG4gIHRvQW5nbGUoKSB7XHJcbiAgICB2YXIgcmFkID0gTWF0aC5hdGFuMih0aGlzLnksIHRoaXMueCk7XHJcbiAgICByZXR1cm4gKHJhZCArIE1hdGguUEkqMiklKE1hdGguUEkqMik7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgZnJvbUFuZ2xlXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIOinkuW6pu+8iOODqeOCuOOCouODs+WNmOS9je+8ieOBqOWkp+OBjeOBleOCkuaMh+WumuOBl+OBpuODmeOCr+ODiOODq+OCkuioreWumuOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgcGhpbmEuZ2VvbS5WZWN0b3IyKCkuZnJvbUFuZ2xlKE1hdGguUEkvNCwgMik7IC8vID0+IHBoaW5hLmdlb20uVmVjdG9yMigxLjQxNDIsIDEuNDE0MilcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByYWQg6KeS5bqm77yI44Op44K444Ki44Oz5Y2Y5L2N77yJXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtsZW49MV0g5aSn44GN44GVXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5WZWN0b3IyfSDjg5njgq/jg4jjg6tcclxuICAgKi9cclxuICBmcm9tQW5nbGUocmFkLCBsZW4pIHtcclxuICAgIGxlbiA9IGxlbiB8fCAxO1xyXG4gICAgdGhpcy54ID0gTWF0aC5jb3MocmFkKSpsZW47XHJcbiAgICB0aGlzLnkgPSBNYXRoLnNpbihyYWQpKmxlbjtcclxuICAgIFxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHRvRGVncmVlXHJcbiAgICogdGhpcyDjgaggeCDou7jjgajjga7op5LluqbvvIjluqbljZjkvY3vvInjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKC0yLCAyKTtcclxuICAgKiAgICAgdjEudG9BbmdsZSgpOyAvLyA9PiAxMzVcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge051bWJlcn0g44OZ44Kv44OI44Or44Gu6KeS5bqm77yI5bqm5Y2Y5L2N77yJXHJcbiAgICovXHJcbiAgdG9EZWdyZWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b0FuZ2xlKCkudG9EZWdyZWUoKTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBmcm9tRGVncmVlXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIOinkuW6pu+8iOW6puWNmOS9je+8ieOBqOWkp+OBjeOBleOCkuaMh+WumuOBl+OBpuODmeOCr+ODiOODq+OCkuioreWumuOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgcGhpbmEuZ2VvbS5WZWN0b3IyKCkuZnJvbURlZ3JlZSg2MCwgMik7IC8vID0+IHBoaW5hLmdlb20uVmVjdG9yMigxLCAxLjczMilcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBkZWcg6KeS5bqm77yI5bqm5Y2Y5L2N77yJXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtsZW49MV0g5aSn44GN44GVXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5WZWN0b3IyfSDjg5njgq/jg4jjg6tcclxuICAgKi9cclxuICBmcm9tRGVncmVlKGRlZywgbGVuKSB7XHJcbiAgICAvLyByZXR1cm4gdGhpcy5mcm9tQW5nbGUoZGVnLnRvUmFkaWFuKCksIGxlbik7XHJcbiAgICByZXR1cm4gdGhpcy5mcm9tQW5nbGUodG9SYWRpYW4uY2FsbChkZWcpLCBsZW4pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCByb3RhdGVcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICogdGhpcyDjgpLlm57ou6LjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDMsIDEpO1xyXG4gICAqICAgICB2MS5yb3RhdGUoTWF0aC5QSS8yKTsgLy8gPT4gcGhpbmEuZ2VvbS5WZWN0b3IyKC0xLCAzKTtcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByYWQg6KeS5bqm77yI44Op44K444Ki44Oz5Y2Y5L2N77yJXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtjZW50ZXI9KDAsIDApXSDlm57ou6Ljga7kuK3lv4PluqfmqJlcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IOWbnui7ouW+jOOBruODmeOCr+ODiOODq1xyXG4gICAqL1xyXG4gIHJvdGF0ZShyYWQsIGNlbnRlcikge1xyXG4gICAgY2VudGVyID0gY2VudGVyIHx8IG5ldyBWZWN0b3IyKDAsIDApO1xyXG5cclxuICAgIHZhciB4MSA9IHRoaXMueCAtIGNlbnRlci54O1xyXG4gICAgdmFyIHkxID0gdGhpcy55IC0gY2VudGVyLnk7XHJcbiAgICB2YXIgeDIgPSB4MSAqIE1hdGguY29zKHJhZCkgLSB5MSAqIE1hdGguc2luKHJhZCk7XHJcbiAgICB2YXIgeTIgPSB4MSAqIE1hdGguc2luKHJhZCkgKyB5MSAqIE1hdGguY29zKHJhZCk7XHJcbiAgICB0aGlzLnNldCggY2VudGVyLnggKyB4MiwgY2VudGVyLnkgKyB5MiApO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBtaW5cclxuICAgKiBAc3RhdGljXHJcbiAgICogdjEg44GoIHYyIOOBruWQhOimgee0oOOBq+WvvuOBl+OAgeOCiOOCiuWwj+OBleOBhOaWueOCkuimgee0oOOBqOOBmeOCi+aWsOOBl+OBhOODmeOCr+ODiOODq+OCkueUn+aIkOOBl+OBpui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMywgMSk7XHJcbiAgICogICAgIHYyID0gcGhpbmEuZ2VvbS5WZWN0b3IyKC0zLCAyKTtcclxuICAgKiAgICAgcGhpbmEuZ2VvbS5WZWN0b3IyLm1pbih2MSwgdjIpOyAvLyBwaGluYS5nZW9tLlZlY3RvcjIoLTMsIDEpO1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHYxIOODmeOCr+ODiOODq1xyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2MiDjg5njgq/jg4jjg6tcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLlZlY3RvcjJ9IOeUn+aIkOOBl+OBn+ODmeOCr+ODiOODq1xyXG4gICAqL1xyXG4gIHN0YXRpYyBtaW4oYSwgYikge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyKFxyXG4gICAgICAoYS54IDwgYi54KSA/IGEueCA6IGIueCxcclxuICAgICAgKGEueSA8IGIueSkgPyBhLnkgOiBiLnlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIG1heFxyXG4gICAqIEBzdGF0aWNcclxuICAgKiAy5qyh5YWD44OZ44Kv44OI44OrIHYxIOOBqCB2MiDjga7lkITopoHntKDjgavlr77jgZfjgIHjgojjgorlpKfjgY3jgYTmlrnjgpLopoHntKDjgajjgZnjgovmlrDjgZfjgYTjg5njgq/jg4jjg6vjgpLnlJ/miJDjgZfjgabov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDMsIDEpO1xyXG4gICAqICAgICB2MiA9IHBoaW5hLmdlb20uVmVjdG9yMigtMywgMik7XHJcbiAgICogICAgIHBoaW5hLmdlb20uVmVjdG9yMi5tYXgodjEsIHYyKTsgLy8gcGhpbmEuZ2VvbS5WZWN0b3IyKDMsIDIpO1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHYxIOODmeOCr+ODiOODq1xyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2MiDjg5njgq/jg4jjg6tcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLlZlY3RvcjJ9IOeUn+aIkOOBl+OBn+ODmeOCr+ODiOODq1xyXG4gICAqL1xyXG4gIHN0YXRpYyBtYXgoYSwgYikge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyKFxyXG4gICAgICAoYS54ID4gYi54KSA/IGEueCA6IGIueCxcclxuICAgICAgKGEueSA+IGIueSkgPyBhLnkgOiBiLnlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGFkZFxyXG4gICAqIEBzdGF0aWNcclxuICAgKiB2MSDjgasgdjIg44KS5Yqg566X44GX44Gf5paw44GX44GE44OZ44Kv44OI44Or44KS55Sf5oiQ44GX44Gm6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCAxKTtcclxuICAgKiAgICAgdjIgPSBwaGluYS5nZW9tLlZlY3RvcjIoLTMsIDIpO1xyXG4gICAqICAgICBwaGluYS5nZW9tLlZlY3RvcjIuYWRkKHYxLCB2Mik7IC8vIHBoaW5hLmdlb20uVmVjdG9yMigwLCAzKTtcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2MSDjg5njgq/jg4jjg6tcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gdjIg44OZ44Kv44OI44OrXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5WZWN0b3IyfSDliqDnrpfjgZfjgZ/ntZDmnpxcclxuICAgKi9cclxuICBzdGF0aWMgYWRkKGxocywgcmhzKSB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjIobGhzLngrcmhzLngsIGxocy55K3Jocy55KTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBzdWJcclxuICAgKiBAc3RhdGljXHJcbiAgICogMuasoeWFg+ODmeOCr+ODiOODqyB2MSDjgYvjgokgdjIg44KS5rib44GY44Gf5paw44GX44GE44OZ44Kv44OI44Or44KS55Sf5oiQ44GX44Gm6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiDjg5njgq/jg4jjg6vjgYzluqfmqJnjgpLooajjgZnloLTlkIjjgIEy44Gk55uu44Gu5bqn5qiZ44GL44KJMeOBpOebruOBruW6p+aomeOBuOOBqOWQkeOBi+OBhuODmeOCr+ODiOODq+OBjOW+l+OCieOCjOOBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMywgMSk7XHJcbiAgICogICAgIHYyID0gcGhpbmEuZ2VvbS5WZWN0b3IyKC0zLCAyKTtcclxuICAgKiAgICAgcGhpbmEuZ2VvbS5WZWN0b3IyLnN1Yih2MSwgdjIpOyAvLyBwaGluYS5nZW9tLlZlY3RvcjIoNiwgLTEpO1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHYxIOODmeOCr+ODiOODq1xyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2MiDjg5njgq/jg4jjg6tcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLlZlY3RvcjJ9IOa4m+eul+OBl+OBn+e1kOaenFxyXG4gICAqL1xyXG4gIHN0YXRpYyBzdWIobGhzLCByaHMpIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMihsaHMueC1yaHMueCwgbGhzLnktcmhzLnkpO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBAbWV0aG9kIG11bFxyXG4gICAqIEBzdGF0aWNcclxuICAgKiAy5qyh5YWD44OZ44Kv44OI44OrIHYg44Gu5ZCE6KaB57Sg44GrIG4g44KS5LmX44GY44Gf5paw44GX44GE44OZ44Kv44OI44Or44KS55Sf5oiQ44GX44Gm6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCAxKTtcclxuICAgKiAgICAgcGhpbmEuZ2VvbS5WZWN0b3IyLm11bCh2MSwgMik7IC8vIHBoaW5hLmdlb20uVmVjdG9yMig2LCAyKVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHYg44OZ44Kv44OI44OrXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IG4g5LmX44GY44KL5YCkXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5WZWN0b3IyfSDkuZfnrpfjgZfjgZ/ntZDmnpxcclxuICAgKi9cclxuICBzdGF0aWMgbXVsKHYsIG4pIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMih2Lngqbiwgdi55Km4pO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBAbWV0aG9kIGRpdlxyXG4gICAqIEBzdGF0aWNcclxuICAgKiAy5qyh5YWD44OZ44Kv44OI44OrIHYg44Gu5ZCE6KaB57Sg44KSIG4g44Gn5Ymy44Gj44Gf5paw44GX44GE44OZ44Kv44OI44Or44KS55Sf5oiQ44GX44Gm6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCAxKTtcclxuICAgKiAgICAgcGhpbmEuZ2VvbS5WZWN0b3IyLmRpdih2MSwgMik7IC8vIHBoaW5hLmdlb20uVmVjdG9yMigxLjUsIDAuNSlcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2IOODmeOCr+ODiOODq1xyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSBuIOWJsuOCi+WApFxyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uVmVjdG9yMn0g6Zmk566X44GX44Gf57WQ5p6cXHJcbiAgICovXHJcbiAgc3RhdGljIGRpdih2LCBuKSB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjIodi54L24sIHYueS9uKTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBuZWdhdGVcclxuICAgKiBAc3RhdGljXHJcbiAgICogMuasoeWFg+ODmeOCr+ODiOODqyB2IOOCkuWPjei7ouOBl+OBn+aWsOOBl+OBhOODmeOCr+ODiOODq+OCkueUn+aIkOOBl+OBpui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMywgMSk7XHJcbiAgICogICAgIHBoaW5hLmdlb20uVmVjdG9yMi5uZWdhdGUoKTsgLy8gcGhpbmEuZ2VvbS5WZWN0b3IyKC0zLCAtMSlcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2IOODmeOCr+ODiOODq1xyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uVmVjdG9yMn0g5Y+N6Lui44GX44Gf44OZ44Kv44OI44OrXHJcbiAgICovXHJcbiAgc3RhdGljIG5lZ2F0ZSh2KSB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjIoLXYueCwgLXYueSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgZG90XHJcbiAgICogQHN0YXRpY1xyXG4gICAqIDLmrKHlhYPjg5njgq/jg4jjg6sgdjEg44GoIHYyIOOBruWGheepjeOCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMywgNCk7XHJcbiAgICogICAgIHYyID0gcGhpbmEuZ2VvbS5WZWN0b3IyKC0yLCAyKTtcclxuICAgKiAgICAgcGhpbmEuZ2VvbS5WZWN0b3IyLmRvdCh2MSwgdjIpIC8vID0+IDJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2MSDjg5njgq/jg4jjg6tcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gdjIg44OZ44Kv44OI44OrXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5WZWN0b3IyfSDlhoXnqY1cclxuICAgKi9cclxuICBzdGF0aWMgZG90KGxocywgcmhzKSB7XHJcbiAgICByZXR1cm4gbGhzLnggKiByaHMueCArIGxocy55ICogcmhzLnk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgY3Jvc3NcclxuICAgKiBAc3RhdGljXHJcbiAgICogMuasoeWFg+ODmeOCr+ODiOODqyB2MSDjgaggdjIg44Gu5aSW56mN77yI44Kv44Ot44K556mN77yJ44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAy5qyh5YWD44OZ44Kv44OI44Or44Gn44Gu5aSW56mN44Gv44OZ44Kv44OI44Or44Gn44Gq44GP5pWw5YCk44KS6L+U44GZ44GT44Go44Gr5rOo5oSP44GX44Gm44GP44Gg44GV44GE44CCXHJcbiAgICogMeOBpOebruOBruODmeOCr+ODiOODq+OBjDLjgaTnm67jga7jg5njgq/jg4jjg6vjgojjgormmYLoqIjlm57jgorjgavjgYLjgovjgajjgY3jga/mraPjga7lgKTjgavjgarjgorjgIHlj43mmYLoqIjlm57jgorjgavjgYLjgovjgajjgY3jga/osqDjga7lgKTjgavjgarjgorjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDMsIDQpO1xyXG4gICAqICAgICB2MiA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCAxKTtcclxuICAgKiAgICAgcGhpbmEuZ2VvbS5WZWN0b3IyLmNyb3NzKHYxLCB2Mik7IC8vID0+IC04XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gdjEg44OZ44Kv44OI44OrXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHYyIOODmeOCr+ODiOODq1xyXG4gICAqIEByZXR1cm4ge051bWJlcn0g5aSW56mNXHJcbiAgICovXHJcbiAgc3RhdGljIGNyb3NzKGxocywgcmhzKSB7XHJcbiAgICByZXR1cm4gKGxocy54KnJocy55KSAtIChsaHMueSpyaHMueCk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgZGlzdGFuY2VcclxuICAgKiBAc3RhdGljXHJcbiAgICogdjEg44GoIHYyIOOCkuW6p+aomeOBqOOBv+OBquOBl+OBn+OBqOOBjeOBrjLngrnplpPjga7ot53pm6LjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDEsIDIpO1xyXG4gICAqICAgICB2MiA9IHBoaW5hLmdlb20uVmVjdG9yMig0LCA2KTtcclxuICAgKiAgICAgcGhpbmEuZ2VvbS5WZWN0b3IyLmRpc3RhbmNlKHYxLCB2Mik7IC8vID0+IDVcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2MSDluqfmqJnjgpLooajjgZnjg5njgq/jg4jjg6tcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gdjIg5bqn5qiZ44KS6KGo44GZ44OZ44Kv44OI44OrXHJcbiAgICogQHJldHVybiB7TnVtYmVyfSAy54K56ZaT44Gu6Led6ZuiXHJcbiAgICovXHJcbiAgc3RhdGljIGRpc3RhbmNlKGxocywgcmhzKSB7XHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KCBNYXRoLnBvdyhsaHMueC1yaHMueCwgMikgKyBNYXRoLnBvdyhsaHMueS1yaHMueSwgMikgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgZGlzdGFuY2VTcXVhcmVkXHJcbiAgICogQHN0YXRpY1xyXG4gICAqIHYxIOOBqCB2MiDjgpLluqfmqJnjgajjgb/jgarjgZfjgZ/jgajjgY3jga4y54K56ZaT44Gu6Led6Zui44Gu6Ieq5LmX44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigxLCAyKTtcclxuICAgKiAgICAgdjIgPSBwaGluYS5nZW9tLlZlY3RvcjIoNCwgNik7XHJcbiAgICogICAgIHBoaW5hLmdlb20uVmVjdG9yMi5kaXN0YW5jZVNxdWFyZWQodjEsIHYyKTsgLy8gPT4gMjVcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2MSDluqfmqJnjgpLooajjgZnjg5njgq/jg4jjg6tcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gdjIg5bqn5qiZ44KS6KGo44GZ44OZ44Kv44OI44OrXHJcbiAgICogQHJldHVybiB7TnVtYmVyfSAy54K56ZaT44Gu6Led6Zui44Gu6Ieq5LmXXHJcbiAgICovXHJcbiAgc3RhdGljIGRpc3RhbmNlU3F1YXJlZChsaHMsIHJocykge1xyXG4gICAgcmV0dXJuIE1hdGgucG93KGxocy54LXJocy54LCAyKSArIE1hdGgucG93KGxocy55LXJocy55LCAyKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgbWFuaGF0dGFuRGlzdGFuY2VcclxuICAgKiBAc3RhdGljXHJcbiAgICogdjEg44GoIHYyIOOCkuW6p+aomeOBqOOBv+OBquOBl+OBn+OBqOOBjeOBrjLngrnplpPjga7jg57jg7Pjg4/jg4Pjgr/jg7Pot53pm6LvvIjou7jjgavlubPooYzjgavpgLLjgoDjgajjgY3jga7mnIDnn63ot53pm6LvvInjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDEsIDIpO1xyXG4gICAqICAgICB2MiA9IHBoaW5hLmdlb20uVmVjdG9yMig0LCA2KTtcclxuICAgKiAgICAgcGhpbmEuZ2VvbS5WZWN0b3IyLm1hbmhhdHRhbkRpc3RhbmNlKHYxLCB2Mik7IC8vID0+IDdcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2MSDluqfmqJnjgpLooajjgZnjg5njgq/jg4jjg6tcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gdjIg5bqn5qiZ44KS6KGo44GZ44OZ44Kv44OI44OrXHJcbiAgICogQHJldHVybiB7TnVtYmVyfSAy54K56ZaT44Gu44Oe44Oz44OP44OD44K/44Oz6Led6ZuiXHJcbiAgICovXHJcbiAgc3RhdGljIG1hbmhhdHRhbkRpc3RhbmNlKGxocywgcmhzKSB7XHJcbiAgICByZXR1cm4gTWF0aC5hYnMobGhzLngtcmhzLngpICsgTWF0aC5hYnMobGhzLnktcmhzLnkpO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBAbWV0aG9kIG5vcm1hbFxyXG4gICAqIEBzdGF0aWNcclxuICAgKiB2MSDjgaggdjIg44KS5bqn5qiZ44Go44G/44Gq44GX44Gf44Go44GN44Gu44CBdjIg44GL44KJIHYxIOOBq+WQkeOBi+OBhuODmeOCr+ODiOODq+OBq+WvvuOBmeOCi+azlee3muODmeOCr+ODiOODq+OCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMSwgMik7XHJcbiAgICogICAgIHYyID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDQsIDYpO1xyXG4gICAqICAgICBwaGluYS5nZW9tLlZlY3RvcjIubm9ybWFsKHYxLCB2Mik7IC8vID0+IHBoaW5hLmdlb20uVmVjdG9yMig0LCAtMylcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2MSDluqfmqJnjgpLooajjgZnjg5njgq/jg4jjg6tcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gdjIg5bqn5qiZ44KS6KGo44GZ44OZ44Kv44OI44OrXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5WZWN0b3IyfSDms5Xnt5rjg5njgq/jg4jjg6tcclxuICAgKi9cclxuICBzdGF0aWMgbm9ybWFsKGEsIGIpIHtcclxuICAgIHZhciB0ZW1wID0gVmVjdG9yMi5zdWIoYSwgYik7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyKC10ZW1wLnksIHRlbXAueCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHJlZmxlY3RcclxuICAgKiBAc3RhdGljXHJcbiAgICogMuasoeWFg+ODmeOCr+ODiOODqyB2IOOCkuWjgeOBuOOBruWFpeWwhOODmeOCr+ODiOODq+OBqOOBl+OBpuOAgeWjgeOBq+WPjeWwhOOBl+OBn+mam+OBruODmeOCr+ODiOODq++8iOWPjeWwhOODmeOCr+ODiOODq++8ieOCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICog5aOB44Gu5ZCR44GN44Gv5rOV57ea44OZ44Kv44OI44OrIG5vcm1hbCDjgavjgojjgaPjgabooajjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDQsIDMpO1xyXG4gICAqICAgICBub3JtYWwgPSBwaGluYS5nZW9tLlZlY3RvcjIoLTEsIDEpO1xyXG4gICAqICAgICBwaGluYS5nZW9tLlZlY3RvcjIucmVmbGVjdCh2MSwgbm9ybWFsKTsgLy8gPT4gcGhpbmEuZ2VvbS5WZWN0b3IyKDIsIDUpXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gdiDlhaXlsITjg5njgq/jg4jjg6tcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gbm9ybWFsIOWjgeOBruazlee3muODmeOCr+ODiOODq1xyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uVmVjdG9yMn0g5Y+N5bCE44OZ44Kv44OI44OrXHJcbiAgICovXHJcbiAgc3RhdGljIHJlZmxlY3Qodiwgbm9ybWFsKSB7XHJcbiAgICB2YXIgbGVuID0gVmVjdG9yMi5kb3Qodiwgbm9ybWFsKTtcclxuICAgIHZhciB0ZW1wPSBWZWN0b3IyLm11bChub3JtYWwsIDIqbGVuKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIFZlY3RvcjIuc3ViKHYsIHRlbXApO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBAbWV0aG9kIHdhbGxcclxuICAgKiBAc3RhdGljXHJcbiAgICogMuasoeWFg+ODmeOCr+ODiOODqyB2IOOCkuWjgeOBuOOBruWFpeWwhOODmeOCr+ODiOODq+OBqOOBl+OBpuOAgeWjgeOBq+ayv+OBo+OBn+ODmeOCr+ODiOODq++8iOWjgeOBmuOCiuOCr+ODiOODq++8ieOCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICog5aOB44Gu5ZCR44GN44Gv5rOV57ea44OZ44Kv44OI44OrIG5vcm1hbCDjgavjgojjgaPjgabooajjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDQsIDMpO1xyXG4gICAqICAgICBub3JtYWwgPSBwaGluYS5nZW9tLlZlY3RvcjIoLTEsIDEpO1xyXG4gICAqICAgICBwaGluYS5nZW9tLlZlY3RvcjIud2FsbCh2MSwgbm9ybWFsKTsgLy8gPT4gcGhpbmEuZ2VvbS5WZWN0b3IyKDMsIDQpXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gdiDlhaXlsITjg5njgq/jg4jjg6tcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gbm9ybWFsIOWjgeOBruazlee3muODmeOCr+ODiOODq1xyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uVmVjdG9yMn0g5aOB44Ga44KK44OZ44Kv44OI44OrXHJcbiAgICovXHJcbiAgc3RhdGljIHdhbGwodiwgbm9ybWFsKSB7XHJcbiAgICB2YXIgbGVuID0gVmVjdG9yMi5kb3Qodiwgbm9ybWFsKTtcclxuICAgIHZhciB0ZW1wPSBWZWN0b3IyLm11bChub3JtYWwsIGxlbik7XHJcbiAgICBcclxuICAgIHJldHVybiBWZWN0b3IyLnN1Yih2LCB0ZW1wKTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBsZXJwXHJcbiAgICogQHN0YXRpY1xyXG4gICAqIHYxIOOBqCB2MiDjgpLlqpLku4vlpInmlbAgdCDjgafnt5rlvaLoo5zplpPjgZfjgb7jgZnjgIJcclxuICAgKiB0PTAuNSDjgacgdjEg44GoIHYyIOOBruS4remWk+ODmeOCr+ODiOODq+OCkuaxguOCgeOCi+OBk+OBqOOBjOOBp+OBjeOBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMSwgMik7XHJcbiAgICogICAgIHYyID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDQsIDYpO1xyXG4gICAqICAgICBwaGluYS5nZW9tLlZlY3RvcjIubGVycCh2MSwgdjIsIDAuNSk7IC8vID0+ICgyLjUsIDQpXHJcbiAgICogICAgIHBoaW5hLmdlb20uVmVjdG9yMi5sZXJwKHYxLCB2MiwgMCk7IC8vID0+ICgxLCAyKVxyXG4gICAqICAgICBwaGluYS5nZW9tLlZlY3RvcjIubGVycCh2MSwgdjIsIDEpOyAvLyA9PiAoNCwgNilcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gdjEg44OZ44Kv44OI44OrXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHYyIOODmeOCr+ODiOODq1xyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB0IOWqkuS7i+WkieaVsFxyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uVmVjdG9yMn0g57ea5b2i6KOc6ZaT44Gu57WQ5p6cXHJcbiAgICovXHJcbiAgc3RhdGljIGxlcnAoYSwgYiwgdCkge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyKFxyXG4gICAgICBhLnggKyAoYi54LWEueCkqdCxcclxuICAgICAgYS55ICsgKGIueS1hLnkpKnRcclxuICAgICk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2Qgc2xlcnBcclxuICAgKiBAc3RhdGljXHJcbiAgICog6KOc6ZaT77yI5pyq5a6f6KOF77yJXHJcbiAgICovXHJcbiAgc3RhdGljIHNsZXJwKGxocywgcmhzLCB0KSB7XHJcbiAgICAgIC8vIFRPRE86XHJcbiAgICAgIC8vIGNvcy4uLlxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCByYW5kb21cclxuICAgKiBAc3RhdGljXHJcbiAgICog6KeS5bqm44GMIG1pbiDjgYvjgokgbWF4IOOBruevhOWbsu+8iOW6puWNmOS9je+8ieOBp+Wkp+OBjeOBleOBjCBsZW4g44Gu44Op44Oz44OA44Og44Gq44OZ44Kv44OI44Or44KS55Sf5oiQ44GX44Gm6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBwaGluYS5nZW9tLlZlY3RvcjIucmFuZG9tKDkwLCAxODAsIDEpOyAvLyA9PiBwaGluYS5nZW9tLlZlY3RvcjIoLTAuNSwgMC44NjYpIOOBquOBqVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFttaW49MF0g6KeS5bqm77yI5bqm5Y2Y5L2N77yJ44Gu5LiL6ZmQ5YCkXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFttYXg9MzYwXSDop5LluqbvvIjluqbljZjkvY3vvInjga7kuIrpmZDlgKRcclxuICAgKiBAcGFyYW0ge051bWJlcn0gW2xlbj0xXSDlpKfjgY3jgZVcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLlZlY3RvcjJ9IOeUn+aIkOOBl+OBn+ODmeOCr+ODiOODq1xyXG4gICAqL1xyXG4gc3RhdGljIHJhbmRvbShtaW4sIG1heCwgbGVuKSB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjIoKS5yYW5kb20obWluLCBtYXgpLm11bChsZW58fDEpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHJvcGVydHkge1ZlY3RvcjJ9IFpFUk8g44K844Ot44OZ44Kv44OI44OrXHJcbiAqIEByZWFkb25seVxyXG4gKi9cclxuVmVjdG9yMi5aRVJPID0gbmV3IFZlY3RvcjIoMCwgMCk7XHJcbi8qKlxyXG4gKiBAcHJvcGVydHkge1ZlY3RvcjJ9IExFRlQg5bem5pa55ZCR44Gu5Y2Y5L2N44OZ44Kv44OI44OrXHJcbiAqIEByZWFkb25seVxyXG4gKi9cclxuVmVjdG9yMi5MRUZUID0gbmV3IFZlY3RvcjIoLTEsIDApO1xyXG4vKipcclxuICogQHByb3BlcnR5IHtWZWN0b3IyfSBSSUdIVCDlj7PmlrnlkJHjga7ljZjkvY3jg5njgq/jg4jjg6tcclxuICogQHJlYWRvbmx5XHJcbiAqL1xyXG5WZWN0b3IyLlJJR0hUPSBuZXcgVmVjdG9yMigxLCAwKTtcclxuLyoqXHJcbiAqIEBwcm9wZXJ0eSB7VmVjdG9yMn0gVVAg5LiK5pa55ZCR44Gu5Y2Y5L2N44OZ44Kv44OI44OrXHJcbiAqIEByZWFkb25seVxyXG4gKi9cclxuVmVjdG9yMi5VUCAgID0gbmV3IFZlY3RvcjIoMCwgLTEpO1xyXG4vKipcclxuICogQHByb3BlcnR5IHtWZWN0b3IyfSBET1dOIOS4i+aWueWQkeOBruWNmOS9jeODmeOCr+ODiOODq1xyXG4gKiBAcmVhZG9ubHlcclxuICovXHJcblZlY3RvcjIuRE9XTiA9IG5ldyBWZWN0b3IyKDAsIDEpO1xuXG4vLyBpbXBvcnQgeyBSZWN0IH0gZnJvbSBcIi4vcmVjdFwiO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5nZW9tLkNpcmNsZVxyXG4gKiAjIOWGhumgmOWfn+OCkuihqOOBmeOCr+ODqeOCuVxyXG4gKiDjgq3jg6Pjg7Pjg5DjgrnkuIrjga7lhobpoJjln5/jgpLmibHjgYbjgq/jg6njgrnjgafjgZnjgIJcclxuICogXHJcbiAqL1xyXG5jbGFzcyBDaXJjbGUge1xyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkge051bWJlcn0geFxyXG4gICAqIOWGhuOBruS4reW/g+OBriB4IOW6p+aomVxyXG4gICAqL1xyXG4gIC8vIHg6IDAsXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5IHtOdW1iZXJ9IHlcclxuICAgKiDlhobjga7kuK3lv4Pjga4geSDluqfmqJlcclxuICAgKi9cclxuICAvLyB5OiAwLFxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSByYWRpdXNcclxuICAgKiDlhobjga7ljYrlvoRcclxuICAgKi9cclxuICAvLyByYWRpdXM6IDMyLFxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGluaXRcclxuICAgKiDlhobpoJjln5/jga7jgrPjg7Pjgrnjg4jjg6njgq/jgr/jgafjgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIGNpcmNsZSA9IHBoaW5hLmdlb20uQ2lyY2xlKDMyLCA2NCwgMTI4KTtcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4IOWGhuOBruS4reW/g+OBriB4IOW6p+aomVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB5IOWGhuOBruS4reW/g+OBriB5IOW6p+aomVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByYWRpdXMg5Y2K5b6EXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5SZWN0fSDlhobpoJjln5/jgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcih4LCB5LCByYWRpdXMpIHtcclxuICAgIHRoaXMueCA9IDA7XHJcbiAgICB0aGlzLnkgPSAwO1xyXG4gICAgdGhpcy5yYWRpdXMgPSAzMjtcclxuICAgIHRoaXMuc2V0KHgsIHksIHJhZGl1cyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHNldFxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKiB0aGlzIOOBruWQhOWApOOCkuWGjeioreWumuOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgY2lyY2xlID0gcGhpbmEuZ2VvbS5DaXJjbGUoMzIsIDY0LCAxMjgpO1xyXG4gICAqICAgICBjaXJjbGUuc2V0KDEwMCwgMjAwLCAzMik7XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge051bWJlcn0geCDlhobjgpLlm7LjgYbnn6nlvaLjga7lt6bkuIrpoILngrnjga4geCDluqfmqJlcclxuICAgKiBAcGFyYW0ge051bWJlcn0geSDlhobjgpLlm7LjgYbnn6nlvaLjga7lt6bkuIrpoILngrnjga4geCDluqfmqJlcclxuICAgKiBAcGFyYW0ge051bWJlcn0gcmFkaXVzIOWNiuW+hFxyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uQ2lyY2xlfSDlhobpoJjln5/jgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgKi9cclxuICBzZXQoeCwgeSwgcmFkaXVzKSB7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBtb3ZlVG9cclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICog5YaG6aCY5Z+f44KS5bqn5qiZICh4LCB5KSDjgavnp7vli5XjgZfjgb7jgZnjgIIoeCwgeSkg44Gv5YaG44Gu5Lit5b+D44KS6KGo44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBjaXJjbGUgPSBwaGluYS5nZW9tLkNpcmNsZSgzMDAsIDMwMCwgNDApO1xyXG4gICAqICAgICBjaXJjbGUubGVmdDsgLy8gPT4gMjYwXHJcbiAgICogICAgIGNpcmNsZS5tb3ZlVG8oMTAwLCAxMDApO1xyXG4gICAqICAgICBjaXJjbGUubGVmdDsgLy8gPT4gNjBcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4IOenu+WLleWFiOOBriB4IOW6p+aomVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB5IOenu+WLleWFiOOBriB5IOW6p+aomVxyXG4gICAqL1xyXG4gIG1vdmVUbyh4LCB5KSB7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBtb3ZlQnlcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICog5YaG6aCY5Z+f44KSICh4LCB5KSDjgaDjgZHnp7vli5XjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIGNpcmNsZSA9IHBoaW5hLmdlb20uQ2lyY2xlKDMwMCwgMzAwLCA0MCk7XHJcbiAgICogICAgIGNpcmNsZS5sZWZ0OyAvLyA9PiAyNjBcclxuICAgKiAgICAgY2lyY2xlLm1vdmVCeSgxMDAsIDEwMCk7XHJcbiAgICogICAgIGNpcmNsZS5sZWZ0OyAvLyA9PiA0NjBcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4IOenu+WLlemHj+OBriB4IOW6p+aomVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB5IOenu+WLlemHj+OBriB5IOW6p+aomVxyXG4gICAqL1xyXG4gIG1vdmVCeSh4LCB5KSB7XHJcbiAgICB0aGlzLnggKz0geDtcclxuICAgIHRoaXMueSArPSB5O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGNvbnRhaW5zXHJcbiAgICog5bqn5qiZICh4LCB5KSDjgYzlhobpoJjln5/jga7kuK3jgavlkKvjgb7jgozjgovjgYvjganjgYbjgYvjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIGNpcmNsZSA9IHBoaW5hLmdlb20uQ2lyY2xlKDMwMCwgMzAwLCAxMDApO1xyXG4gICAqICAgICBjaXJjbGUuY29udGFpbnMoMzUwLCAzNTApOyAvLyA9PiAgdHJ1ZVxyXG4gICAqICAgICBjaXJjbGUuY29udGFpbnMoMzUwLCA0MDApOyAvLyA9PiBmYWxzZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHgg5Yik5a6a44GZ44KL5a++6LGh44GuIHgg5bqn5qiZXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHkg5Yik5a6a44GZ44KL5a++6LGh44GuIHkg5bqn5qiZXHJcbiAgICogQHJldHVybiB7Qm9vbGVhbn0g5oyH5a6a44GX44Gf5bqn5qiZ44GM5YaG6aCY5Z+f44Gu5Lit44Gr5ZCr44G+44KM44KL44GL44Gp44GG44GLXHJcbiAgICovXHJcbiAgY29udGFpbnMoeCwgeSkge1xyXG4gICAgdmFyIGxlblggPSB0aGlzLngteDtcclxuICAgIHZhciBsZW5ZID0gdGhpcy55LXk7XHJcbiAgICB2YXIgbGVuU3F1YXJlZCA9IChsZW5YKmxlblgpKyhsZW5ZKmxlblkpO1xyXG5cclxuICAgIHJldHVybiBsZW5TcXVhcmVkIDw9IHRoaXMucmFkaXVzKnRoaXMucmFkaXVzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBjbG9uZVxyXG4gICAqIHRoaXMg44Gu44Kz44OU44O844KS55Sf5oiQ44GX44Gm6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBjaXJjbGUgPSBwaGluYS5nZW9tLkNpcmNsZSg1MCwgMTAwLCA0MCk7XHJcbiAgICogICAgIGNpcmNsZTIgPSBjaXJjbGUuY2xvbmUoKTtcclxuICAgKiAgICAgY2lyY2xlMi54ID09IGNpcmNsZS54OyAvLyA9PiB0cnVlXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtPYmplY3R9IOeUn+aIkOOBl+OBn+WGhumgmOWfn1xyXG4gICAqL1xyXG4gIGNsb25lKCkge1xyXG4gICAgcmV0dXJuIG5ldyBDaXJjbGUodGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgdG9SZWN0XHJcbiAgICog5YaG44Gr5aSW5o6l44GZ44KL5q2j5pa55b2i44KS6KGo44GZ55+p5b2i6aCY5Z+f44KS55Sf5oiQ44GX44Gm6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBjaXJjbGUgPSBwaGluYS5nZW9tLkNpcmNsZSg1MCwgMTAwLCA0MCk7XHJcbiAgICogICAgIHJlY3QgPSBjaXJjbGUudG9SZWN0KCk7XHJcbiAgICogICAgIHJlY3QueDsgLy8gPT4gMTBcclxuICAgKiAgICAgcmVjdC55OyAvLyA9PiA2MFxyXG4gICAqICAgICByZWN0LndpZHRoOyAvLyA9PiA4MFxyXG4gICAqXHJcbiAgICogQHJldHVybiB7T2JqZWN0fSDnlJ/miJDjgZfjgZ/nn6nlvaLpoJjln59cclxuICAgKi9cclxuICB0b1JlY3QoKSB7XHJcbiAgICAvLyDlvqrnkrDlj4Lnhaflm57pgb/jga7jgZ/jgoHjgIFSZWN05YG044Gn5a6a576pXHJcbiAgICAvLyB2YXIgc2l6ZSA9IHRoaXMuc2l6ZTtcclxuICAgIC8vIHJldHVybiBuZXcgUmVjdCh0aGlzLnggLSB0aGlzLnJhZGl1cywgdGhpcy55IC0gdGhpcy5yYWRpdXMsIHNpemUsIHNpemUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCB0b0FycmF5XHJcbiAgICogdGhpcyDjga7lkITlgKTjgpLopoHntKDjgajjgZnjgovphY3liJfjgpLnlJ/miJDjgZfjgabov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIGNpcmNsZSA9IHBoaW5hLmdlb20uQ2lyY2xlKDUwLCAxMDAsIDQwKTtcclxuICAgKiAgICAgcmVjdC50b0FycmF5KCk7IC8vID0+IFs1MCwgMTAwLCA0MF1cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge051bWJlcltdfSDnlJ/miJDjgZfjgZ/phY3liJdcclxuICAgKi9cclxuICB0b0FycmF5KCkge1xyXG4gICAgcmV0dXJuIFt0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXNdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5IHtOdW1iZXJ9IGxlZnRcclxuICAgKiBAcmVhZG9ubHlcclxuICAgKiDjgq3jg6Pjg7Pjg5Djgrnlt6bnq6/jgYvjgonlhobjga7lt6bnq6/jgb7jgafjga7ot53pm6JcclxuICAgKlxyXG4gICAqIOePvuaZgueCueOBp+OBr+iqreOBv+WPluOCiuWwgueUqOOBp+OBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgY2lyY2xlID0gcGhpbmEuZ2VvbS5DaXJjbGUoMjAwLCAzMDAsIDEwMCk7XHJcbiAgICogICAgIGNpcmNsZS5sZWZ0OyAvLyA9PiAxMDBcclxuICAgKiAgICAgY2lyY2xlLnRvcDsgLy8gPT4gMjAwXHJcbiAgICogICAgIGNpcmNsZS5yaWdodDsgLy8gPT4gMzAwXHJcbiAgICogICAgIGNpcmNsZS5ib3R0b207IC8vID0+IDQwMFxyXG4gICAqL1xyXG4gIGdldCBsZWZ0KCkgICB7IHJldHVybiB0aGlzLnggLSB0aGlzLnJhZGl1czsgfVxyXG4gIHNldCBsZWZ0KHYpICB7XHJcbiAgICAvLyBUT0RPOiBcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSB0b3BcclxuICAgKiBAcmVhZG9ubHlcclxuICAgKiDjgq3jg6Pjg7Pjg5DjgrnkuIrnq6/jgYvjgonlhobjga7kuIrnq6/jgb7jgafjga7ot53pm6JcclxuICAgKlxyXG4gICAqIOePvuaZgueCueOBp+OBr+iqreOBv+WPluOCiuWwgueUqOOBp+OBmeOAglxyXG4gICAqL1xyXG4gIGdldCB0b3AoKSAgIHsgcmV0dXJuIHRoaXMueSAtIHRoaXMucmFkaXVzOyB9XHJcbiAgc2V0IHRvcCh2KSAge1xyXG4gICAgLy8gVE9ETzogXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkge051bWJlcn0gcmlnaHRcclxuICAgKiBAcmVhZG9ubHlcclxuICAgKiDjgq3jg6Pjg7Pjg5Djgrnlj7Pnq6/jgYvjgonlhobjga7lj7Pnq6/jgb7jgafjga7ot53pm6JcclxuICAgKlxyXG4gICAqIOePvuaZgueCueOBp+OBr+iqreOBv+WPluOCiuWwgueUqOOBp+OBmeOAglxyXG4gICAqL1xyXG4gIGdldCByaWdodCgpICAgeyByZXR1cm4gdGhpcy54ICsgdGhpcy5yYWRpdXM7IH1cclxuICBzZXQgcmlnaHQodikgIHtcclxuICAgIC8vIFRPRE86IFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5IHtOdW1iZXJ9IGJvdHRvbVxyXG4gICAqIEByZWFkb25seVxyXG4gICAqIOOCreODo+ODs+ODkOOCueS4i+err+OBi+OCieWGhuOBruS4i+err+OBvuOBp+OBrui3nembolxyXG4gICAqXHJcbiAgICog54++5pmC54K544Gn44Gv6Kqt44G/5Y+W44KK5bCC55So44Gn44GZ44CCXHJcbiAgICovXHJcbiAgZ2V0IGJvdHRvbSgpICAgeyByZXR1cm4gdGhpcy55ICsgdGhpcy5yYWRpdXM7IH1cclxuICBzZXQgYm90dG9tKHYpICB7XHJcbiAgICAvLyBUT0RPOiBcclxuICB9XHJcbiAgICBcclxuICAvKipcclxuICAgKiBAcHJvcGVydHkge051bWJlcn0gc2l6ZVxyXG4gICAqIEByZWFkb25seVxyXG4gICAqIOWGhuOBruebtOW+hFxyXG4gICAqXHJcbiAgICog54++5pmC54K544Gn44Gv6Kqt44G/5Y+W44KK5bCC55So44Gn44GZ44CCXHJcbiAgICovXHJcbiAgZ2V0IHNpemUoKSAgIHsgcmV0dXJuIHRoaXMucmFkaXVzKjI7IH1cclxuICBzZXQgc2l6ZSh2KSAge1xyXG4gICAgLy8gVE9ETzog5qSc6KiO5LitXHJcbiAgfVxyXG59XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZ2VvbS5SZWN0XHJcbiAqICMg55+p5b2i6aCY5Z+f44KS6KGo44GZ44Kv44Op44K5XHJcbiAqIOOCreODo+ODs+ODkOOCueS4iuOBruefqeW9oumgmOWfn+OCkuaJseOBhuOCr+ODqeOCueOBp+OBmeOAglxyXG4gKiBcclxuICovXHJcbmNsYXNzIFJlY3Qge1xyXG5cclxuICAvLyAvKipcclxuICAvLyAgKiBAcHJvcGVydHkge051bWJlcn0geFxyXG4gIC8vICAqIOefqeW9ouOBruW3puS4iumggueCueOBriB4IOW6p+aomVxyXG4gIC8vICAqL1xyXG4gIC8vIHg6IDAsXHJcbiAgLy8gLyoqXHJcbiAgLy8gICogQHByb3BlcnR5IHtOdW1iZXJ9IHlcclxuICAvLyAgKiDnn6nlvaLjga7lt6bkuIrpoILngrnjga4geSDluqfmqJlcclxuICAvLyAgKi9cclxuICAvLyB5OiAwLFxyXG4gIC8vIC8qKlxyXG4gIC8vICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSB3aWR0aFxyXG4gIC8vICAqIOefqeW9ouOBruW5hVxyXG4gIC8vICAqL1xyXG4gIC8vIHdpZHRoOiAzMixcclxuICAvLyAvKipcclxuICAvLyAgKiBAcHJvcGVydHkge051bWJlcn0gaGlnaHRcclxuICAvLyAgKiDnn6nlvaLjga7pq5jjgZVcclxuICAvLyAgKi9cclxuICAvLyBoZWlnaHQ6IDMyLFxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGluaXRcclxuICAgKiDnn6nlvaLpoJjln5/jga7jgrPjg7Pjgrnjg4jjg6njgq/jgr/jgafjgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHJlY3QgPSBwaGluYS5nZW9tLlJlY3QoOCwgMTYsIDMyLCA2NCk7XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge051bWJlcn0geCDnn6nlvaLjga7lt6bkuIrpoILngrnjga4geCDluqfmqJlcclxuICAgKiBAcGFyYW0ge051bWJlcn0geSDnn6nlvaLjga7lt6bkuIrpoILngrnjga4geSDluqfmqJlcclxuICAgKiBAcGFyYW0ge051bWJlcn0gd2lkdGgg5bmFXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGhlaWdodCDpq5jjgZVcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLlJlY3R9IOefqeW9oumgmOWfn+OCquODluOCuOOCp+OCr+ODiFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHRoaXMueCA9IDA7XHJcbiAgICB0aGlzLnkgPSAwO1xyXG4gICAgdGhpcy53aWR0aCA9IDMyO1xyXG4gICAgdGhpcy5oZWlnaHQgPSAzMjtcclxuICAgIHRoaXMuc2V0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBzZXRcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICogdGhpcyDjga7lkITlgKTjgpLlho3oqK3lrprjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHJlY3QgPSBwaGluYS5nZW9tLlJlY3QoOCwgMTYsIDMyLCA2NCk7XHJcbiAgICogICAgIHJlY3Quc2V0KDAsIDE2LCAzMiwgNjQpO1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHgg55+p5b2i44Gu5bem5LiK6aCC54K544GuIHgg5bqn5qiZXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHkg55+p5b2i44Gu5bem5LiK6aCC54K544GuIHkg5bqn5qiZXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoIOW5hVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHQg6auY44GVXHJcbiAgICovXHJcbiAgc2V0KHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIG1vdmVUb1xyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKiDnn6nlvaLpoJjln5/jgpLluqfmqJkgKHgsIHkpIOOBq+enu+WLleOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgcmVjdCA9IHBoaW5hLmdlb20uUmVjdCg4LCAxNiwgMzIsIDY0KTtcclxuICAgKiAgICAgcmVjdC5jZW50ZXJYOyAvLyA9PiAyNFxyXG4gICAqICAgICByZWN0Lm1vdmVUbygwLCAwKTtcclxuICAgKiAgICAgcmVjdC5jZW50ZXJYOyAvLyA9PiAxNlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHgg56e75YuV5YWI44GuIHgg5bqn5qiZXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHkg56e75YuV5YWI44GuIHkg5bqn5qiZXHJcbiAgICovXHJcbiAgbW92ZVRvKHgsIHkpIHtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIG1vdmVCeVxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKiDnn6nlvaLpoJjln5/jgpIgKHgsIHkpIOOBoOOBkeenu+WLleOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgcmVjdCA9IHBoaW5hLmdlb20uUmVjdCg4LCAxNiwgMzIsIDY0KTtcclxuICAgKiAgICAgcmVjdC5tb3ZlQnkoMTAsIC0xMCk7XHJcbiAgICogICAgIHJlY3QueDsgLy8gPT4gMThcclxuICAgKiAgICAgcmVjdC55OyAvLyA9PiA2XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge051bWJlcn0geCDnp7vli5Xph4/jga4geCDluqfmqJlcclxuICAgKiBAcGFyYW0ge051bWJlcn0geSDnp7vli5Xph4/jga4geSDluqfmqJlcclxuICAgKi9cclxuICBtb3ZlQnkoeCwgeSkge1xyXG4gICAgdGhpcy54ICs9IHg7XHJcbiAgICB0aGlzLnkgKz0geTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBzZXRTaXpzZVxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKiDnn6nlvaLpoJjln5/jga7luYXjgajpq5jjgZXjgpLlpInmm7TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHJlY3QgPSBwaGluYS5nZW9tLlJlY3QoOCwgMTYsIDMyLCA2NCk7XHJcbiAgICogICAgIHJlY3Quc2V0U2l6ZSgxMCwgMjApO1xyXG4gICAqICAgICByZWN0LndpZHRoOyAvLyA9PiAxMFxyXG4gICAqICAgICByZWN0LmhlaWdodDsgLy8gPT4gMjBcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aCDluYVcclxuICAgKiBAcGFyYW0ge051bWJlcn0gaGVpZ2h0IOmrmOOBlVxyXG4gICAqL1xyXG4gIHNldFNpemUodywgaCkge1xyXG4gICAgdGhpcy53aWR0aCA9IHc7XHJcbiAgICB0aGlzLmhlaWdodCA9IGg7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgcGFkZGluZ1xyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKiDnn6nlvaLpoJjln5/jga7kuK3jgavjg5Hjg4fjgqPjg7PjgrDpoJjln5/jgpLoqK3lrprjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqIOefqeW9oumgmOWfn+iHquS9k+OBruOCteOCpOOCuuOBr+ODkeODh+OCo+ODs+OCsOmgmOWfn+OBruWIhuOBoOOBkeWwj+OBleOBj+OBquOCiuOBvuOBmeOAgiAgXHJcbiAgICog5bmF44Gu5oyH5a6a5pa55rOV44GvIENTUyDjga4gcGFkZGluZyDmjIflrprjgajlkIzjgZjjgojjgYbjgavmmYLoqIjlm57jgorjgafjgZnjgIIgIFxyXG4gICAqIOW8leaVsOOBjDHjgaTjga7loLTlkIjjga/kuIrkuIvlt6blj7Pjga7lgKTjgIHlvJXmlbDjgYwy44Gk44Gu5aC05ZCI44Gv5LiK5LiL44Go5bem5Y+z44Gu5YCk44CB5byV5pWw44GM77yT44Gk44Gu5aC05ZCI44Gv5LiK44CB5bem5Y+z44CB5LiL44Gu5YCk44Go6Kej6YeI44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICByZWN0ID0gcGhpbmEuZ2VvbS5SZWN0KDUwLCAxMDAsIDE1MCwgMjAwKTtcclxuICAgKiAgICAgcmVjdC5wYWRkaW5nKDEwKTtcclxuICAgKiAgICAgcmVjdC54OyAvLyA9PiA2MFxyXG4gICAqICAgICByZWN0Lnk7IC8vID0+IDExMFxyXG4gICAqICAgICByZWN0LndpZHRoOyAvLyA9PiAxMzBcclxuICAgKiAgICAgcmVjdC5oZWlnaHQ7IC8vID0+IDE4MFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHRvcCDkuIrovrrjga7jg5Hjg4fjgqPjg7PjgrDluYVcclxuICAgKiBAcGFyYW0ge051bWJlcn0gcmlnaHQg5Y+z6L6644Gu44OR44OH44Kj44Oz44Kw5bmFXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGJvdHRvbSDkuIvovrrjga7jg5Hjg4fjgqPjg7PjgrDluYVcclxuICAgKiBAcGFyYW0ge051bWJlcn0gbGVmdCDlt6bovrrjga7jg5Hjg4fjgqPjg7PjgrDluYVcclxuICAgKi9cclxuICBwYWRkaW5nKHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCkge1xyXG4gICAgLy8gY3NzIOOBriBwYWRkaW5nIOOBq+WQiOOCj+OBm+OBpuaZguioiOWbnuOCiuOBq+ODkeODqeODoeODvOOCv+iqv+aVtFxyXG4gICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XHJcbiAgICAgIGNhc2UgMTpcclxuICAgICAgICB0b3AgPSByaWdodCA9IGJvdHRvbSA9IGxlZnQgPSBhcmd1bWVudHNbMF07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMjpcclxuICAgICAgICB0b3AgICAgID0gYm90dG9tID0gYXJndW1lbnRzWzBdO1xyXG4gICAgICAgIHJpZ2h0ICAgPSBsZWZ0ICAgPSBhcmd1bWVudHNbMV07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMzpcclxuICAgICAgICB0b3AgICAgID0gYXJndW1lbnRzWzBdO1xyXG4gICAgICAgIHJpZ2h0ICAgPSBsZWZ0ID0gYXJndW1lbnRzWzFdO1xyXG4gICAgICAgIGJvdHRvbSAgPSBhcmd1bWVudHNbMl07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRoaXMueCArPSBsZWZ0O1xyXG4gICAgdGhpcy55ICs9IHRvcDtcclxuICAgIHRoaXMud2lkdGggLT0gbGVmdCtyaWdodDtcclxuICAgIHRoaXMuaGVpZ2h0LT0gdG9wICtib3R0b207XHJcbiAgICBcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBjb250YWluc1xyXG4gICAqIOW6p+aomSAoeCwgeSkg44GMIOefqeW9oumgmOWfn+OBruS4reOBq+WQq+OBvuOCjOOCi+OBi+OBqeOBhuOBi+OCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgcmVjdCA9IHBoaW5hLmdlb20uUmVjdCg1MCwgMTAwLCAxNTAsIDIwMCk7XHJcbiAgICogICAgIHJlY3QuY29udGFpbnMoMzUsIDY4KTsgLy8gPT4gIHRydWVcclxuICAgKiAgICAgcmVjdC5jb250YWlucygyMDAsIDY4KTsgLy8gPT4gZmFsc2VcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4IOWIpOWumuOBmeOCi+WvvuixoeOBriB4IOW6p+aomVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB5IOWIpOWumuOBmeOCi+WvvuixoeOBriB5IOW6p+aomVxyXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IOaMh+WumuOBl+OBn+W6p+aomeOBjOefqeW9oumgmOWfn+OBruS4reOBq+WQq+OBvuOCjOOCi+OBi+OBqeOBhuOBi1xyXG4gICAqL1xyXG4gIGNvbnRhaW5zKHgsIHkpIHtcclxuICAgIHJldHVybiB0aGlzLmxlZnQgPD0geCAmJiB4IDw9IHRoaXMucmlnaHQgJiYgdGhpcy50b3AgPD0geSAmJiB5IDw9IHRoaXMuYm90dG9tO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBjbG9uZVxyXG4gICAqIHRoaXMg44Gu44Kz44OU44O844KS55Sf5oiQ44GX44Gm6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICByZWN0ID0gcGhpbmEuZ2VvbS5SZWN0KDUwLCAxMDAsIDE1MCwgMjAwKTtcclxuICAgKiAgICAgcmVjdDIgPSByZWN0LmNsb25lKCk7XHJcbiAgICogICAgIHJlY3QyLnggPT0gcmVjdC54OyAvLyA9PiB0cnVlXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtPYmplY3R9IOeUn+aIkOOBl+OBn+efqeW9oumgmOWfn1xyXG4gICAqL1xyXG4gIGNsb25lKCkge1xyXG4gICAgcmV0dXJuIG5ldyBSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHRvQ2lyY2xlXHJcbiAgICog55+p5b2i6aCY5Z+f5YaF44Gr5Y+O44G+44KL5pyA5aSn44Gu5YaG6aCY5Z+f44KS55Sf5oiQ44GX44Gm6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICByZWN0ID0gcGhpbmEuZ2VvbS5SZWN0KDMyLCA2NCwgMTAwLCAyMDApO1xyXG4gICAqICAgICBjaXJjbGUgPSByZWN0LnRvQ2lyY2xlKCk7XHJcbiAgICogICAgIGNpcmNsZS54OyAvLyA9PiA4MlxyXG4gICAqICAgICBjaXJjbGUueTsgLy8gPT4gMTY0XHJcbiAgICogICAgIGNpcmNsZS5yYWRpdXM7IC8vID0+IDUwXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtPYmplY3R9IOeUn+aIkOOBl+OBn+WGhumgmOWfn1xyXG4gICAqL1xyXG4gIHRvQ2lyY2xlKCkge1xyXG4gICAgdmFyIHJhZGl1cyA9ICgodGhpcy53aWR0aCA8IHRoaXMuaGVpZ2h0KSA/IHRoaXMud2lkdGggOiB0aGlzLmhlaWdodCkvMjtcclxuICAgIHJldHVybiBuZXcgQ2lyY2xlKHRoaXMuY2VudGVyWCwgdGhpcy5jZW50ZXJZLCByYWRpdXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCB0b0FycmF5XHJcbiAgICogdGhpcyDjga7lkITlgKTjgpLopoHntKDjgajjgZnjgovphY3liJfjgpLnlJ/miJDjgZfjgabov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHJlY3QgPSBwaGluYS5nZW9tLlJlY3QoMzIsIDY0LCAxMDAsIDIwMCk7XHJcbiAgICogICAgIHJlY3QudG9BcnJheSgpOyAvLyA9PiBbMzIsIDY0LCAxMDAsIDIwMF1cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge051bWJlcltdfSDnlJ/miJDjgZfjgZ/phY3liJdcclxuICAgKi9cclxuICB0b0FycmF5KCkge1xyXG4gICAgcmV0dXJuIFt0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHRdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5IHtOdW1iZXJ9IGxlZnRcclxuICAgKiDjgq3jg6Pjg7Pjg5Djgrnlt6bnq6/jgYvjgonnn6nlvaLpoJjln5/jga7lt6bovrrjgb7jgafjga7ot53pm6JcclxuICAgKlxyXG4gICAqIGxlZnQg44KS5aSJ5pu044GZ44KL44Go55+p5b2i6aCY5Z+f44Gu5bmF77yId2lkdGjvvInjgYzoh6rli5XnmoTjgavoqr/mlbTjgZXjgozjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHJlY3QgPSBwaGluYS5nZW9tLlJlY3QoMzIsIDY0LCAxMDAsIDIwMCk7XHJcbiAgICogICAgIHJlY3QubGVmdDsgLy8gPT4gMzJcclxuICAgKiAgICAgcmVjdC53aWR0aDsgLy8gPT4gMTAwXHJcbiAgICogICAgIHJlY3QucmlnaHQ7IC8vID0+IDEzMlxyXG4gICAqICAgICBcclxuICAgKiAgICAgcmVjdC5sZWZ0ID0gNDI7XHJcbiAgICogICAgIHJlY3Qud2lkdGg7IC8vID0+IDkwXHJcbiAgICovXHJcbiAgZ2V0IGxlZnQoKSAgIHsgcmV0dXJuIHRoaXMueDsgfVxyXG4gIHNldCBsZWZ0KHYpICB7IHRoaXMud2lkdGggLT0gdi10aGlzLng7IHRoaXMueCA9IHY7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5IHtOdW1iZXJ9IHRvcFxyXG4gICAqIOOCreODo+ODs+ODkOOCueS4iuerr+OBi+OCieefqeW9oumgmOWfn+OBruS4iui+uuOBvuOBp+OBruS9jee9rlxyXG4gICAqXHJcbiAgICogdG9wIOOCkuWkieabtOOBmeOCi+OBqOefqeW9oumgmOWfn+OBrumrmOOBle+8iGhlaWdodO+8ieOBjOiHquWLleeahOOBq+iqv+aVtOOBleOCjOOBvuOBmeOAglxyXG4gICAqL1xyXG4gIGdldCB0b3AoKSAgIHsgcmV0dXJuIHRoaXMueTsgfVxyXG4gIHNldCB0b3AodikgIHsgdGhpcy5oZWlnaHQgLT0gdi10aGlzLnk7IHRoaXMueSA9IHY7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5IHtOdW1iZXJ9IHJpZ2h0XHJcbiAgICog44Kt44Oj44Oz44OQ44K55bem56uv44GL44KJ55+p5b2i6aCY5Z+f44Gu5Y+z6L6644G+44Gn44Gu6Led6ZuiXHJcbiAgICpcclxuICAgKiByaWdodCDjgpLlpInmm7TjgZnjgovjgajnn6nlvaLpoJjln5/jga7luYXvvIh3aWR0aO+8ieOBjOiHquWLleeahOOBq+iqv+aVtOOBleOCjOOBvuOBmeOAglxyXG4gICAqL1xyXG4gIGdldCByaWdodCgpICAgeyByZXR1cm4gdGhpcy54ICsgdGhpcy53aWR0aDsgfVxyXG4gIHNldCByaWdodCh2KSAgeyB0aGlzLndpZHRoICs9IHYtdGhpcy5yaWdodDsgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkge051bWJlcn0gYm90dG9tXHJcbiAgICog44Kt44Oj44Oz44OQ44K55LiK56uv44GL44KJ55+p5b2i6aCY5Z+f44Gu5LiL6L6644G+44Gn44Gu5L2N572uXHJcbiAgICpcclxuICAgKiBib3R0b20g44KS5aSJ5pu044GZ44KL44Go55+p5b2i6aCY5Z+f44Gu6auY44GV77yIaGVpZ2h077yJ44GM6Ieq5YuV55qE44Gr6Kq/5pW044GV44KM44G+44GZ44CCXHJcbiAgICovXHJcbiAgZ2V0IGJvdHRvbSgpICAgeyByZXR1cm4gdGhpcy55ICsgdGhpcy5oZWlnaHQ7IH1cclxuICBzZXQgYm90dG9tKHYpICB7IHRoaXMuaGVpZ2h0ICs9IHYtdGhpcy5ib3R0b207IH1cclxuICBcclxuICAvKipcclxuICAgKiBAcHJvcGVydHkge051bWJlcn0gY2VudGVyWFxyXG4gICAqIOefqeW9oumgmOWfn+OBriB4IOW6p+aomVxyXG4gICAqXHJcbiAgICog54++5pmC54K544Gn44Gv6Kqt44G/5Y+W44KK5bCC55So44Gn44GZ44CCXHJcbiAgICovXHJcbiAgZ2V0IGNlbnRlclgoKSAgIHsgcmV0dXJuIHRoaXMueCArIHRoaXMud2lkdGgvMjsgfVxyXG4gIHNldCBjZW50ZXJYKHYpICB7XHJcbiAgICAvLyBUT0RPOiDmpJzoqI7kuK1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5IHtOdW1iZXJ9IGNlbnRlcllcclxuICAgKiDnn6nlvaLpoJjln5/jga4geSDluqfmqJlcclxuICAgKlxyXG4gICAqIOePvuaZgueCueOBp+OBr+iqreOBv+WPluOCiuWwgueUqOOBp+OBmeOAglxyXG4gICAqL1xyXG4gIGdldCBjZW50ZXJZKCkgICB7IHJldHVybiB0aGlzLnkgKyB0aGlzLmhlaWdodC8yOyB9XHJcbiAgc2V0IGNlbnRlclkodikgIHtcclxuICAgIC8vIFRPRE86IOaknOiojuS4rVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaXJjbGUudG9SZWN0XHJcbiAqIOW+queSsOWPgueFp+OCkuWbnumBv+OBmeOCi+OBn+OCgeOAgeOBk+OBk+OBp+Wumue+qVxyXG4gKi9cclxuQ2lyY2xlLnByb3RvdHlwZS50b1JlY3QgPSBmdW5jdGlvbigpIHtcclxuICB2YXIgc2l6ZSA9IHRoaXMuc2l6ZTtcclxuICByZXR1cm4gbmV3IFJlY3QodGhpcy54IC0gdGhpcy5yYWRpdXMsIHRoaXMueSAtIHRoaXMucmFkaXVzLCBzaXplLCBzaXplKTtcclxufTtcblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5nZW9tLk1hdHJpeDMzXHJcbiAqICMg6KGM5YiX44Kv44Op44K5XHJcbiAqIDN4M+OBruihjOWIl+OCkuihqOOBmeOCr+ODqeOCueOBp+OBmeOAglxyXG4gKiBcclxuICogPHByZT5cclxuICogfCBtMDAgbTAxIG0wMiB8XHJcbiAqIHwgbTEwIG0xMSBtMTIgfFxyXG4gKiB8IG0yMCBtMjEgbTIyIHxcclxuICogPC9wcmU+XHJcbiAqL1xyXG5jbGFzcyBNYXRyaXgzMyB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgaW5pdFxyXG4gICAqIOODnuODiOODquODg+OCr+OCueOCr+ODqeOCueOBruOCs+ODs+OCueODiOODqeOCr+OCv+OBp+OBmeOAglxyXG4gICAqXHJcbiAgICog5byV5pWw44GvIG0wMCwgbTAxLCBtMDIsIG0xMCwgbTExLCBtMTIsIG0yMCwgbTIxLCBtMjIg44Gu6aCG44Gr5oyH5a6a44GX44G+44GZ44CCXHJcbiAgICog5byV5pWw44GMOeWAi+OBq+a6gOOBn+OBquOBhOWgtOWQiOOBr+WNmOS9jeihjOWIl+OCkueUn+aIkOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgbWF0MSA9IHBoaW5hLmdlb20uTWF0cml4MzMoMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSk7XHJcbiAgICogICAgIG1hdDIgPSBwaGluYS5nZW9tLk1hdHJpeDMzKCk7XHJcbiAgICogICAgIG1hdDEubTAwICsgbWF0Mi5tMDA7IC8vID0+IDJcclxuICAgKiAgICAgbWF0MS5tMDEgLSBtYXQyLm0wMTsgLy8gPT4gMlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtOdW1iZXIuLi59IG0wMCwgbTAxLC4uLiDlkITopoHntKDjga7lgKRcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLk1hdHJpeDMzfSDooYzliJfjgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDkpIHtcclxuICAgICAgdGhpcy5zZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmlkZW50aXR5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHNldFxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKiB0aGlzIOOBruWQhOimgee0oOOBruWApOOCkuWGjeioreWumuOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgbWF0MSA9IHBoaW5hLmdlb20uTWF0cml4MzMoMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSk7XHJcbiAgICogICAgIG1hdDIgPSBwaGluYS5nZW9tLk1hdHJpeDMzKCk7XHJcbiAgICogICAgIG1hdDIuc2V0KDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDkpO1xyXG4gICAqICAgICBtYXQxLnRvU3RyaW5nKCkgPT0gbWF0Mi50b1N0cmluZygpOyAvLyA9PiB0cnVlXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge051bWJlci4uLn0gbTAwLCBtMDEsLi4uIOWQhOimgee0oOOBruWApFxyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uTWF0cml4MzN9IOihjOWIl+OCquODluOCuOOCp+OCr+ODiFxyXG4gICAqL1xyXG4gIHNldChtMDAsIG0wMSwgbTAyLCBtMTAsIG0xMSwgbTEyLCBtMjAsIG0yMSwgbTIyKSB7XHJcbiAgICB0aGlzLm0wMCA9IG0wMDsgdGhpcy5tMDEgPSBtMDE7IHRoaXMubTAyID0gbTAyO1xyXG4gICAgdGhpcy5tMTAgPSBtMTA7IHRoaXMubTExID0gbTExOyB0aGlzLm0xMiA9IG0xMjtcclxuICAgIHRoaXMubTIwID0gbTIwOyB0aGlzLm0yMSA9IG0yMTsgdGhpcy5tMjIgPSBtMjI7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGlkZW50aXR5XHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIHRoaXMg44KS5Y2Y5L2N6KGM5YiX44Gr44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBtYXQxID0gcGhpbmEuZ2VvbS5NYXRyaXgzMygxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5KTtcclxuICAgKiAgICAgbWF0MiA9IHBoaW5hLmdlb20uTWF0cml4MzMoKTtcclxuICAgKiAgICAgbWF0MS5pZGVudGl0eSgpLnRvU3RyaW5nKCkgPT0gbWF0Mi50b1N0cmluZygpOyAvLyA9PiB0cnVlXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLk1hdHJpeDMzfSDljZjkvY3ooYzliJdcclxuICAgKi9cclxuICBpZGVudGl0eSgpIHtcclxuICAgIHRoaXMubTAwID0gMTsgdGhpcy5tMDEgPSAwOyB0aGlzLm0wMiA9IDA7XHJcbiAgICB0aGlzLm0xMCA9IDA7IHRoaXMubTExID0gMTsgdGhpcy5tMTIgPSAwO1xyXG4gICAgdGhpcy5tMjAgPSAwOyB0aGlzLm0yMSA9IDA7IHRoaXMubTIyID0gMTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBjbG9uZVxyXG4gICAqIHRoaXMg44Gu44Kz44OU44O844KS55Sf5oiQ44GX44Gm6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBtYXQxID0gcGhpbmEuZ2VvbS5NYXRyaXgzMygxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5KTtcclxuICAgKiAgICAgbWF0MiA9IG1hdDEuY2xvbmUoKTtcclxuICAgKiAgICAgbWF0MS50b1N0cmluZygpID09IG1hdDIudG9TdHJpbmcoKTsgLy8gPT4gdHJ1ZVxyXG4gICAqICAgICBtYXQxID09IG1hdDI7IC8vID0+IGZhbHNlXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLk1hdHJpeDMzfSDooYzliJfjgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgKi9cclxuICBjbG9uZSgpIHtcclxuICAgIHJldHVybiBuZXcgTWF0cml4MzMoXHJcbiAgICAgIHRoaXMubTAwLCB0aGlzLm0wMSwgdGhpcy5tMDIsXHJcbiAgICAgIHRoaXMubTEwLCB0aGlzLm0xMSwgdGhpcy5tMTIsXHJcbiAgICAgIHRoaXMubTIwLCB0aGlzLm0yMSwgdGhpcy5tMjJcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGRldGVybWluYW50XHJcbiAgICog6KGM5YiX5byP44KS6L+U44GX44G+44GZXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBtYXQxID0gcGhpbmEuZ2VvbS5NYXRyaXgzMygwLCAtMiwgMCwgLTEsIDMsIDEsIDQsIDIsIDEpO1xyXG4gICAqICAgICBtYXQxLmRldGVybWluYW50KCk7IC8vID0+IC0xMFxyXG4gICAqICAgICBtYXQxLmlkZW50aXR5KCkuZGV0ZXJtaW5hbnQoKTsgLy8gPT4gMVxyXG4gICAqXHJcbiAgICogQHJldHVybiB7TnVtYmVyfSDooYzliJflvI9cclxuICAgKi9cclxuICBkZXRlcm1pbmFudCgpIHtcclxuICAgIHZhciBtMDAgPSB0aGlzLm0wMDsgdmFyIG0wMSA9IHRoaXMubTAxOyB2YXIgbTAyID0gdGhpcy5tMDI7XHJcbiAgICB2YXIgbTEwID0gdGhpcy5tMTA7IHZhciBtMTEgPSB0aGlzLm0xMTsgdmFyIG0xMiA9IHRoaXMubTEyO1xyXG4gICAgdmFyIG0yMCA9IHRoaXMubTIwOyB2YXIgbTIxID0gdGhpcy5tMjE7IHZhciBtMjIgPSB0aGlzLm0yMjtcclxuICAgIFxyXG4gICAgcmV0dXJuIG0wMCptMTEqbTIyICsgbTEwKm0yMSptMDIgKyBtMDEqbTEyKm0yMCAtIG0wMiptMTEqbTIwIC0gbTAxKm0xMCptMjIgLSBtMTIqbTIxKm0wMDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgdHJhbnNwb3NlXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIOi7oue9ruihjOWIl+OCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgbWF0MSA9IHBoaW5hLmdlb20uTWF0cml4MzMoMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSk7XHJcbiAgICogICAgIG1hdDIgPSBwaGluYS5nZW9tLk1hdHJpeDMzKDEsIDQsIDcsIDIsIDUsIDgsIDMsIDYsIDkpO1xyXG4gICAqICAgICBtYXQxLnRyYW5zcG9zZSgpLnRvU3RyaW5nKCkgPT0gbWF0Mi50b1N0cmluZygpOyAvLyA9PiB0cnVlXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLk1hdHJpeDMzfSDou6Lnva7ooYzliJdcclxuICAgKi9cclxuICB0cmFuc3Bvc2UoKSB7XHJcbiAgICB2YXIgc3dhcCA9IGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgdmFyIHRlbXAgPSB0aGlzW2FdO1xyXG4gICAgICB0aGlzW2FdID0gdGhpc1tiXTtcclxuICAgICAgdGhpc1tiXSA9IHRlbXA7XHJcbiAgICB9LmJpbmQodGhpcyk7XHJcblxyXG4gICAgc3dhcCgnbTAxJywgJ20xMCcpO1xyXG4gICAgc3dhcCgnbTAyJywgJ20yMCcpO1xyXG4gICAgc3dhcCgnbTEyJywgJ20yMScpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgaW52ZXJ0XHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIOmAhuihjOWIl+OCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgbWF0MSA9IHBoaW5hLmdlb20uTWF0cml4MzMoMCwgLTEsIDEsIC0xLCA0LCAtMiwgMSwgMSwgMSk7XHJcbiAgICogICAgIG1hdDIgPSBtYXQxLmNsb25lKCkuaW52ZXJ0KCk7XHJcbiAgICogICAgIG1hdDMgPSBtYXQxLmNsb25lKCkubXVsdGlwbHkobWF0Mik7XHJcbiAgICogICAgIG1hdDMudG9TdHJpbmcoKSA9PSBwaGluYS5nZW9tLk1hdHJpeDMzLklERU5USVRZLnRvU3RyaW5nKCk7IC8vID0+IHRydWVcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uTWF0cml4MzN9IOmAhuihjOWIl1xyXG4gICAqL1xyXG4gIGludmVydCgpIHtcclxuICAgIHZhciBtMDAgPSB0aGlzLm0wMDsgdmFyIG0wMSA9IHRoaXMubTAxOyB2YXIgbTAyID0gdGhpcy5tMDI7XHJcbiAgICB2YXIgbTEwID0gdGhpcy5tMTA7IHZhciBtMTEgPSB0aGlzLm0xMTsgdmFyIG0xMiA9IHRoaXMubTEyO1xyXG4gICAgdmFyIG0yMCA9IHRoaXMubTIwOyB2YXIgbTIxID0gdGhpcy5tMjE7IHZhciBtMjIgPSB0aGlzLm0yMjtcclxuXHJcbiAgICB2YXIgZGV0ID0gdGhpcy5kZXRlcm1pbmFudCgpO1xyXG5cclxuICAgIC8vIHxtMDAsIG0wMSwgbTAyfFxyXG4gICAgLy8gfG0xMCwgbTExLCBtMTJ8XHJcbiAgICAvLyB8bTIwLCBtMjEsIG0yMnxcclxuICAgIHRoaXMubTAwID0gKG0xMSptMjItbTEyKm0yMSkvZGV0O1xyXG4gICAgdGhpcy5tMDEgPSAobTEwKm0yMi1tMTIqbTIwKS9kZXQqLTE7XHJcbiAgICB0aGlzLm0wMiA9IChtMTAqbTIxLW0xMSptMjApL2RldDtcclxuICAgIFxyXG4gICAgdGhpcy5tMTAgPSAobTAxKm0yMi1tMDIqbTIxKS9kZXQqLTE7XHJcbiAgICB0aGlzLm0xMSA9IChtMDAqbTIyLW0wMiptMjApL2RldDtcclxuICAgIHRoaXMubTEyID0gKG0wMCptMjEtbTAxKm0yMCkvZGV0Ki0xO1xyXG4gICAgXHJcbiAgICB0aGlzLm0yMCA9IChtMDEqbTEyLW0wMiptMTEpL2RldDtcclxuICAgIHRoaXMubTIxID0gKG0wMCptMTItbTAyKm0xMCkvZGV0Ki0xO1xyXG4gICAgdGhpcy5tMjIgPSAobTAwKm0xMS1tMDEqbTEwKS9kZXQ7XHJcbiAgICBcclxuICAgIHRoaXMudHJhbnNwb3NlKCk7XHJcbiAgICBcclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgbXVsdGlwbHlcclxuICAgKiB0aGlzIOOBqyBvdGhlciDjgpLkuZfjgZjjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIG1hdDEgPSBwaGluYS5nZW9tLk1hdHJpeDMzKDAsIC0xLCAxLCAtMSwgNCwgLTIsIDEsIDEsIDEpO1xyXG4gICAqICAgICBtYXQyID0gbWF0MS5jbG9uZSgpLmludmVydCgpO1xyXG4gICAqICAgICBtYXQzID0gbWF0MS5jbG9uZSgpLm11bHRpcGx5KG1hdDIpO1xyXG4gICAqICAgICBtYXQzLnRvU3RyaW5nKCkgPT0gcGhpbmEuZ2VvbS5NYXRyaXgzMy5JREVOVElUWS50b1N0cmluZygpOyAvLyA9PiB0cnVlXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uTWF0cml4MzN9IG90aGVyIOS5l+OBmOOCi+ihjOWIl1xyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uTWF0cml4MzN9IOS5l+eul+e1kOaenOOBruihjOWIl1xyXG4gICAqL1xyXG4gIG11bHRpcGx5KG1hdCkge1xyXG4gICAgdmFyIHRtID0gdGhpcy5tO1xyXG4gICAgdmFyIG9tID0gbWF0Lm07XHJcblxyXG4gICAgdmFyIGEwMCA9IHRoaXMubTAwLCBhMDEgPSB0aGlzLm0wMSwgYTAyID0gdGhpcy5tMDI7XHJcbiAgICB2YXIgYTEwID0gdGhpcy5tMTAsIGExMSA9IHRoaXMubTExLCBhMTIgPSB0aGlzLm0xMjtcclxuICAgIHZhciBhMjAgPSB0aGlzLm0yMCwgYTIxID0gdGhpcy5tMjEsIGEyMiA9IHRoaXMubTIyO1xyXG4gICAgdmFyIGIwMCA9IG1hdC5tMDAsIGIwMSA9IG1hdC5tMDEsIGIwMiA9IG1hdC5tMDI7XHJcbiAgICB2YXIgYjEwID0gbWF0Lm0xMCwgYjExID0gbWF0Lm0xMSwgYjEyID0gbWF0Lm0xMjtcclxuICAgIHZhciBiMjAgPSBtYXQubTIwLCBiMjEgPSBtYXQubTIxLCBiMjIgPSBtYXQubTIyO1xyXG5cclxuICAgIHRoaXMubTAwID0gYTAwKmIwMCArIGEwMSpiMTAgKyBhMDIqYjIwO1xyXG4gICAgdGhpcy5tMDEgPSBhMDAqYjAxICsgYTAxKmIxMSArIGEwMipiMjE7XHJcbiAgICB0aGlzLm0wMiA9IGEwMCpiMDIgKyBhMDEqYjEyICsgYTAyKmIyMjtcclxuXHJcbiAgICB0aGlzLm0xMCA9IGExMCpiMDAgKyBhMTEqYjEwICsgYTEyKmIyMDtcclxuICAgIHRoaXMubTExID0gYTEwKmIwMSArIGExMSpiMTEgKyBhMTIqYjIxO1xyXG4gICAgdGhpcy5tMTIgPSBhMTAqYjAyICsgYTExKmIxMiArIGExMipiMjI7XHJcblxyXG4gICAgdGhpcy5tMjAgPSBhMjAqYjAwICsgYTIxKmIxMCArIGEyMipiMjA7XHJcbiAgICB0aGlzLm0yMSA9IGEyMCpiMDEgKyBhMjEqYjExICsgYTIyKmIyMTtcclxuICAgIHRoaXMubTIyID0gYTIwKmIwMiArIGEyMSpiMTIgKyBhMjIqYjIyO1xyXG4gICAgXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgbXVsdGlwbHlWZWN0b3IyXHJcbiAgICogdGhpcyDjgasy5qyh5YWD44OZ44Kv44OI44OrIHYg44KS5LmX44GY44G+44GZ44CCXHJcbiAgICogMuasoeWFg+ODmeOCr+ODiOODq+OBryAoeCwgeSwgMSkg44Go44GX44Gm5LmX566X44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBtYXQgPSBwaGluYS5nZW9tLk1hdHJpeDMzKDAsIC0xLCAxLCAtMSwgNCwgLTIsIDEsIDEsIDEpO1xyXG4gICAqICAgICB2ID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDIsIDQpXHJcbiAgICogICAgIG1hdC5tdWx0aXBseVZlY3RvcjIodikgLy8gPT4ge3g6IC0zLCB5OiAxMn1cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2IOS5l+OBmOOCi+ODmeOCr+ODiOODq1xyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uVmVjdG9yMn0g5LmX566X57WQ5p6c44Gu44OZ44Kv44OI44OrXHJcbiAgICovXHJcbiAgbXVsdGlwbHlWZWN0b3IyKHYpIHtcclxuICAgIHZhciB2eCA9IHRoaXMubTAwKnYueCArIHRoaXMubTAxKnYueSArIHRoaXMubTAyO1xyXG4gICAgdmFyIHZ5ID0gdGhpcy5tMTAqdi54ICsgdGhpcy5tMTEqdi55ICsgdGhpcy5tMTI7XHJcbiAgICBcclxuICAgIC8vIHJldHVybiBwaGluYS5nZW9tLlZlY3RvcjIodngsIHZ5KTtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMih2eCwgdnkpO1xyXG4gIH1cclxuXHJcbiAgLy8g6KGMXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBnZXRSb3dcclxuICAgKiByb3cg55Wq55uu44Gu6KGM44KS6YWN5YiX44Gn6L+U44GX44G+44GZ44CCcm93IOOBjCAw44CBMeOAgTIg44Gu44GE44Ga44KM44GL44Gn44Gq44GR44KM44GwIG51bGwg44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBtYXQxID0gcGhpbmEuZ2VvbS5NYXRyaXgzMygxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5KTtcclxuICAgKiAgICAgbWF0MS5nZXRSb3coMCk7IC8vIFsxLCAyLCAzXVxyXG4gICAqICAgICBtYXQxLmdldFJvdygxKTsgLy8gWzQsIDUsIDZdXHJcbiAgICogICAgIG1hdDEuZ2V0Um93KDkpOyAvLyBudWxsXHJcbiAgICpcclxuICAgKiBAcGFyYW0gezAvMS8yfSByb3cg6KGM55Wq5Y+3XHJcbiAgICogQHJldHVybiB7TnVtYmVyW119IOihjOOCkuihqOOBmemFjeWIl1xyXG4gICAqL1xyXG4gIGdldFJvdyhyb3cpIHtcclxuICAgIGlmICggcm93ID09PSAwICkge1xyXG4gICAgICByZXR1cm4gWyB0aGlzLm0wMCwgdGhpcy5tMDEsIHRoaXMubTAyIF07XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICggcm93ID09PSAxICkge1xyXG4gICAgICByZXR1cm4gWyB0aGlzLm0xMCwgdGhpcy5tMTEsIHRoaXMubTEyIF07XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICggcm93ID09PSAyICkge1xyXG4gICAgICByZXR1cm4gWyB0aGlzLm0yMCwgdGhpcy5tMjEsIHRoaXMubTIyIF07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGdldENvbFxyXG4gICAqIGNvbCDnlarnm67jga7liJfjgpLphY3liJfjgafov5TjgZfjgb7jgZnjgIJjb2wg44GMIDDjgIEx44CBMiDjga7jgYTjgZrjgozjgYvjgafjgarjgZHjgozjgbAgbnVsbCDjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIG1hdDEgPSBwaGluYS5nZW9tLk1hdHJpeDMzKDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDkpO1xyXG4gICAqICAgICBtYXQxLmdldENvbCgwKTsgLy8gWzEsIDQsIDddXHJcbiAgICogICAgIG1hdDEuZ2V0Q29sKDEpOyAvLyBbMiwgNSwgOF1cclxuICAgKiAgICAgbWF0MS5nZXRSb3coLTEpOyAvLyBudWxsXHJcbiAgICpcclxuICAgKiBAcGFyYW0gezAvMS8yfSBjb2wg5YiX55Wq5Y+3XHJcbiAgICogQHJldHVybiB7TnVtYmVyW119IOWIl+OCkuihqOOBmemFjeWIl1xyXG4gICAqL1xyXG4gIGdldENvbChjb2wpIHtcclxuICAgIGlmICggY29sID09PSAwICkge1xyXG4gICAgICByZXR1cm4gWyB0aGlzLm0wMCwgdGhpcy5tMTAsIHRoaXMubTIwIF07XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICggY29sID09PSAxICkge1xyXG4gICAgICByZXR1cm4gWyB0aGlzLm0wMSwgdGhpcy5tMTEsIHRoaXMubTIxIF07XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICggY29sID09PSAyICkge1xyXG4gICAgICByZXR1cm4gWyB0aGlzLm0wMiwgdGhpcy5tMTIsIHRoaXMubTIyIF07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHRvU3RyaW5nXHJcbiAgICog6KGM5YiX44KSIEpTT04g5b2i5byP44Gn6KGo54++44GX44Gf5paH5a2X5YiX44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2ID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDMsIDQpO1xyXG4gICAqICAgICB2MiA9IHYuY2xvbmUoKTtcclxuICAgKiAgICAgdjIueCA9PSB2Lng7IC8vID0+IHRydWVcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge1N0cmluZ30gSlNPTiDmloflrZfliJdcclxuICAgKi9cclxuICB0b1N0cmluZygpIHtcclxuICAgIHJldHVybiBcInx7bTAwfSwge20wMX0sIHttMDJ9fFxcbnx7bTEwfSwge20xMX0sIHttMTJ9fFxcbnx7bTIwfSwge20yMX0sIHttMjJ9fFwiLmZvcm1hdCh0aGlzKTtcclxuICB9XHJcblxyXG59XHJcblxyXG4vKipcclxuICogQHByb3BlcnR5IHtwaGluYS5nZW9tLk1hdHJpeDMzfSBJREVOVElUWSDljZjkvY3ooYzliJdcclxuICogQHJlYWRvbmx5XHJcbiAqL1xyXG5NYXRyaXgzMy5JREVOVElUWSA9IG5ldyBNYXRyaXgzMygpLmlkZW50aXR5KCk7XG5cbi8qKlxyXG4qIEBjbGFzcyBwaGluYS5nZW9tLkNvbGxpc2lvblxyXG4qICMg6KGd56qB5Yik5a6a55So44Kv44Op44K5XHJcbiog6KGd56qB5Yik5a6a44Gu44Gf44KB44Gu44Kv44Op44K544Gn44GZ44CC44GZ44G544Gm44Gu44Oh44K944OD44OJ44GM44K544K/44OG44Kj44OD44Kv44Oh44K944OD44OJ44Gn44GZ44CCXHJcbiogXHJcbiovXHJcbmNsYXNzIENvbGxpc2lvbiB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgdGVzdENpcmNsZUNpcmNsZVxyXG4gICAqIEBzdGF0aWNcclxuICAgKiAy44Gk44Gu5YaG6aCY5Z+f44GM6YeN44Gq44Gj44Gm44GE44KL44GL44Gp44GG44GL44KS5Yik5a6a44GX44G+44GZXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBjaXJjbGUxID0gcGhpbmEuZ2VvbS5DaXJjbGUoMTAwLCAxMDAsIDMwKTtcclxuICAgKiAgICAgY2lyY2xlMiA9IHBoaW5hLmdlb20uQ2lyY2xlKDEzMCwgMTQwLCAzMCk7XHJcbiAgICogcGhpbmEuZ2VvbS5Db2xsaXNpb24udGVzdENpcmNsZUNpcmNsZShjaXJjbGUxLCBjaXJjbGUyKTsgLy8gPT4gdHJ1ZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLkNpcmNsZX0gY2lyY2xlMSDlhobpoJjln5/jgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uQ2lyY2xlfSBjaXJjbGUyIOWGhumgmOWfn+OCquODluOCuOOCp+OCr+ODiFxyXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IOmgmOWfn+OBjOmHjeOBquOBo+OBpuOBhOOCi+OBi+OBqeOBhuOBi1xyXG4gICAqL1xyXG4gIHN0YXRpYyB0ZXN0Q2lyY2xlQ2lyY2xlKGNpcmNsZTAsIGNpcmNsZTEpIHtcclxuICAgIHZhciBkaXN0YW5jZVNxdWFyZWQgPSBwaGluYS5nZW9tLlZlY3RvcjIuZGlzdGFuY2VTcXVhcmVkKGNpcmNsZTAsIGNpcmNsZTEpO1xyXG4gICAgcmV0dXJuIGRpc3RhbmNlU3F1YXJlZCA8PSBNYXRoLnBvdyhjaXJjbGUwLnJhZGl1cyArIGNpcmNsZTEucmFkaXVzLCAyKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCB0ZXN0UmVjdFJlY3RcclxuICAgKiBAc3RhdGljXHJcbiAgICogMuOBpOOBruefqeW9oumgmOWfn+OBjOmHjeOBquOBo+OBpuOBhOOCi+OBi+OBqeOBhuOBi+OCkuWIpOWumuOBl+OBvuOBmVxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgcmVjdDEgPSBwaGluYS5nZW9tLlJlY3QoMTAwLCAxMDAsIDMwLCA0MCk7XHJcbiAgICogICAgIHJlY3QyID0gcGhpbmEuZ2VvbS5SZWN0KDIwMCwgMjAwLCAxMCwgMTApO1xyXG4gICAqICAgICBwaGluYS5nZW9tLkNvbGxpc2lvbi50ZXN0UmVjdFJlY3QocmVjdDEsIHJlY3QyKTsgLy8gPT4gZmFsc2VcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5SZWN0fSByZWN0MSDnn6nlvaLpoJjln5/jgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uUmVjdH0gcmVjdDIg55+p5b2i6aCY5Z+f44Kq44OW44K444Kn44Kv44OIXHJcbiAgICogQHJldHVybiB7Qm9vbGVhbn0g6aCY5Z+f44GM6YeN44Gq44Gj44Gm44GE44KL44GL44Gp44GG44GLXHJcbiAgICovXHJcbiAgc3RhdGljIHRlc3RSZWN0UmVjdChyZWN0MCwgcmVjdDEpIHtcclxuICAgIHJldHVybiAocmVjdDAubGVmdCA8IHJlY3QxLnJpZ2h0KSAmJiAocmVjdDAucmlnaHQgPiByZWN0MS5sZWZ0KSAmJlxyXG4gICAgICAocmVjdDAudG9wIDwgcmVjdDEuYm90dG9tKSAmJiAocmVjdDAuYm90dG9tID4gcmVjdDEudG9wKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCB0ZXN0Q2lyY2xlUmVjdFxyXG4gICAqIEBzdGF0aWNcclxuICAgKiDlhobpoJjln5/jgajnn6nlvaLpoJjln5/jgYzph43jgarjgaPjgabjgYTjgovjgYvjganjgYbjgYvjgYvjgpLliKTlrprjgZfjgb7jgZlcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIGNpcmNsZSA9IHBoaW5hLmdlb20uQ2lyY2xlKDEwMCwgMTAwLCAzMCk7XHJcbiAgICogICAgIHJlY3QgPSBwaGluYS5nZW9tLlJlY3QoMTAwLCAxMDAsIDMwLCA0MCk7XHJcbiAgICogICAgIHBoaW5hLmdlb20uQ29sbGlzaW9uLnRlc3RDaXJjbGVSZWN0KGNpcmNsZSwgcmVjdCk7IC8vID0+IHRydWVcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5DaXJjbGV9IGNpcmNsZSDlhobpoJjln5/jgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uUmVjdH0gcmVjdCDnn6nlvaLpoJjln5/jgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgKiBAcmV0dXJuIHtCb29sZWFufSDpoJjln5/jgYzph43jgarjgaPjgabjgYTjgovjgYvjganjgYbjgYtcclxuICAgKi9cclxuICBzdGF0aWMgdGVzdENpcmNsZVJlY3QoY2lyY2xlLCByZWN0KSB7XHJcbiAgICAvLyDjgb7jgZrjga/lpKfjgY3jgarnn6nlvaLjgafliKTlrpoo6auY6YCf5YyWKVxyXG4gICAgdmFyIGJpZ1JlY3QgPSBwaGluYS5nZW9tLlJlY3QocmVjdC5sZWZ0LWNpcmNsZS5yYWRpdXMsIHJlY3QudG9wLWNpcmNsZS5yYWRpdXMsIHJlY3Qud2lkdGgrY2lyY2xlLnJhZGl1cyoyLCByZWN0LmhlaWdodCtjaXJjbGUucmFkaXVzKjIpO1xyXG4gICAgaWYgKGJpZ1JlY3QuY29udGFpbnMoY2lyY2xlLngsIGNpcmNsZS55KSA9PT0gZmFsc2UpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyAy56iu6aGe44Gu55+p5b2i44Go6KGd56qB5Yik5a6aXHJcbiAgICB2YXIgciA9IHBoaW5hLmdlb20uUmVjdChyZWN0LmxlZnQtY2lyY2xlLnJhZGl1cywgcmVjdC50b3AsIHJlY3Qud2lkdGgrY2lyY2xlLnJhZGl1cyoyLCByZWN0LmhlaWdodCk7XHJcbiAgICBpZiAoci5jb250YWlucyhjaXJjbGUueCwgY2lyY2xlLnkpKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgci5zZXQocmVjdC5sZWZ0LCByZWN0LnRvcC1jaXJjbGUucmFkaXVzLCByZWN0LndpZHRoLCByZWN0LmhlaWdodCtjaXJjbGUucmFkaXVzKjIpO1xyXG4gICAgaWYgKHIuY29udGFpbnMoY2lyY2xlLngsIGNpcmNsZS55KSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8g5YaG44Go55+p5b2i44Gu77yU54K544Gu5Yik5a6aXHJcbiAgICB2YXIgYyA9IHBoaW5hLmdlb20uQ2lyY2xlKGNpcmNsZS54LCBjaXJjbGUueSwgY2lyY2xlLnJhZGl1cyk7XHJcbiAgICAvLyBsZWZ0IHRvcFxyXG4gICAgaWYgKGMuY29udGFpbnMocmVjdC5sZWZ0LCByZWN0LnRvcCkpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICAvLyByaWdodCB0b3BcclxuICAgIGlmIChjLmNvbnRhaW5zKHJlY3QucmlnaHQsIHJlY3QudG9wKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIC8vIHJpZ2h0IGJvdHRvbVxyXG4gICAgaWYgKGMuY29udGFpbnMocmVjdC5yaWdodCwgcmVjdC5ib3R0b20pKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgLy8gbGVmdCBib3R0b21cclxuICAgIGlmIChjLmNvbnRhaW5zKHJlY3QubGVmdCwgcmVjdC5ib3R0b20pKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgdGVzdENpcmNsZUxpbmVcclxuICAgKiBAc3RhdGljXHJcbiAgICog5YaG6aCY5Z+f44Go57ea5YiG44GM6YeN44Gq44Gj44Gm44GE44KL44GL44Gp44GG44GL44KS5Yik5a6a44GX44G+44GZXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBjaXJjbGUgPSBwaGluYS5nZW9tLkNpcmNsZSgxMDAsIDEwMCwgMjApO1xyXG4gICAqICAgICBwMSA9IHBoaW5hLmdlb20uVmVjdG9yMigwLCAwKTtcclxuICAgKiAgICAgcDIgPSBwaGluYS5nZW9tLlZlY3RvcjIoMzAwLCA0MDApO1xyXG4gICAqICAgICBwaGluYS5nZW9tLkNvbGxpc2lvbi50ZXN0Q2lyY2xlTGluZShjaXJjbGUsIHAxLCBwMik7IC8vID0+IHRydWVcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5DaXJjbGV9IGNpcmNsZSDlhobpoJjln5/jgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gcDEg57ea5YiG44Gu56uv44Gu5bqn5qiZXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHAyIOe3muWIhuOBruerr+OBruW6p+aomVxyXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IOWGhumgmOWfn+OBqOe3muWIhuOBjOmHjeOBquOBo+OBpuOBhOOCi+OBi+OBqeOBhuOBi1xyXG4gICAqL1xyXG4gIHN0YXRpYyB0ZXN0Q2lyY2xlTGluZSAoY2lyY2xlLCBwMSwgcDIpIHtcclxuICAgIC8vIOWFiOOBq+e3muWIhuerr+OBqOOBruWIpOWumlxyXG4gICAgaWYgKGNpcmNsZS5jb250YWlucyhwMS54LCBwMS55KSB8fCBjaXJjbGUuY29udGFpbnMocDIueCwgcDIueSkpIHJldHVybiB0cnVlO1xyXG4gICAgLy8g5Y2K5b6E44GuMuS5l1xyXG4gICAgdmFyIHIyID0gY2lyY2xlLnJhZGl1cyAqIGNpcmNsZS5yYWRpdXM7XHJcbiAgICAvLyDlhobjga7kuK3lv4PluqfmqJlcclxuICAgIHZhciBwMyA9IHBoaW5hLmdlb20uVmVjdG9yMihjaXJjbGUueCwgY2lyY2xlLnkpO1xyXG4gICAgLy8g5ZCE44OZ44Kv44OI44OrXHJcbiAgICB2YXIgcDFwMiA9IHBoaW5hLmdlb20uVmVjdG9yMi5zdWIocDEsIHAyKTtcclxuICAgIHZhciBwMXAzID0gcGhpbmEuZ2VvbS5WZWN0b3IyLnN1YihwMSwgcDMpO1xyXG4gICAgdmFyIHAycDMgPSBwaGluYS5nZW9tLlZlY3RvcjIuc3ViKHAyLCBwMyk7XHJcbiAgICAvLyDlpJbnqY1cclxuICAgIHZhciBjcm9zcyA9IHBoaW5hLmdlb20uVmVjdG9yMi5jcm9zcyhwMXAyLCBwMXAzKTtcclxuICAgIC8vIOWkluepjeOBrue1tuWvvuWApOOBrjLkuZdcclxuICAgIHZhciBjcm9zczIgPSBjcm9zcyAqIGNyb3NzO1xyXG4gICAgLy8gcDFwMuOBrumVt+OBleOBrjLkuZdcclxuICAgIHZhciBsZW5ndGgyID0gcDFwMi5sZW5ndGhTcXVhcmVkKCk7XHJcbiAgICAvLyDlhobjga7kuK3lv4PjgYvjgonnt5rliIbjgb7jgafjga7lnoLnt5rjga7ot53pm6Ljga4y5LmXXHJcbiAgICB2YXIgZDIgPSBjcm9zczIgLyBsZW5ndGgyO1xyXG4gICAgLy8g5YaG44Gu5Y2K5b6E44GuMuS5l+OCiOOCiuWwj+OBleOBhOOBquOCiemHjeikh1xyXG4gICAgaWYgKGQyIDw9IHIyKSB7XHJcbiAgICAgIHZhciBkb3QxID0gcGhpbmEuZ2VvbS5WZWN0b3IyLmRvdChwMXAzLCBwMXAyKTtcclxuICAgICAgdmFyIGRvdDIgPSBwaGluYS5nZW9tLlZlY3RvcjIuZG90KHAycDMsIHAxcDIpO1xyXG4gICAgICAvLyDpgJrluLjjga/lhoXnqY3jga7kuZfnrpdcclxuICAgICAgaWYgKGRvdDEgKiBkb3QyIDw9IDApIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHRlc3RMaW5lTGluZVxyXG4gICAqIEBzdGF0aWNcclxuICAgKiAy44Gk44Gu57ea5YiG44GM6YeN44Gq44Gj44Gm44GE44KL44GL44Gp44GG44GL44KS5Yik5a6a44GX44G+44GZXHJcbiAgICog5Y+C6ICD77yaaHR0cDovL3d3dzVkLmJpZ2xvYmUubmUuanAvfnRvbW95YTAzL3NodG1sL2FsZ29yaXRobS9JbnRlcnNlY3Rpb24uaHRtXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBwMSA9IHBoaW5hLmdlb20uVmVjdG9yMigxMDAsIDEwMCk7XHJcbiAgICogICAgIHAyID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDIwMCwgMjAwKTtcclxuICAgKiAgICAgcDMgPSBwaGluYS5nZW9tLlZlY3RvcjIoMTUwLCAyNDApO1xyXG4gICAqICAgICBwNCA9IHBoaW5hLmdlb20uVmVjdG9yMigyMDAsIDEwMCk7XHJcbiAgICogcGhpbmEuZ2VvbS5Db2xsaXNpb24udGVzdExpbmVMaW5lKHAxLCBwMiwgcDMsIHA0KTsgLy8gPT4gdHJ1ZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHAxIOe3muWIhjHjga7nq6/jga7luqfmqJlcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gcDIg57ea5YiGMeOBruerr+OBruW6p+aomVxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSBwMyDnt5rliIYy44Gu56uv44Gu5bqn5qiZXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHA0IOe3muWIhjLjga7nq6/jga7luqfmqJlcclxuICAgKiBAcmV0dXJuIHtCb29sZWFufSDnt5rliIYx44Go57ea5YiGMuOBjOmHjeOBquOBo+OBpuOBhOOCi+OBi+OBqeOBhuOBi1xyXG4gICAqL1xyXG4gIHN0YXRpYyB0ZXN0TGluZUxpbmUgKHAxLCBwMiwgcDMsIHA0KSB7XHJcbiAgICAvL+WQjOS4gO+8uO+8uei7uOS4iuOBq+S5l+OBo+OBpuOCi+WgtOWQiOOBruiqpOWIpOWumuWbnumBv1xyXG4gICAgaWYgKHAxLnggPT0gcDIueCAmJiBwMS54ID09IHAzLnggJiYgcDEueCA9PSBwNC54KSB7XHJcbiAgICAgIHZhciBtaW4gPSBNYXRoLm1pbihwMS55LCBwMi55KTtcclxuICAgICAgdmFyIG1heCA9IE1hdGgubWF4KHAxLnksIHAyLnkpO1xyXG4gICAgICBpZiAobWluIDw9IHAzLnkgJiYgcDMueSA8PSBtYXggfHwgbWluIDw9IHA0LnkgJiYgcDQueSA8PSBtYXgpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAocDEueSA9PSBwMi55ICYmIHAxLnkgPT0gcDMueSAmJiBwMS55ID09IHA0LnkpIHtcclxuICAgICAgdmFyIG1pbiA9IE1hdGgubWluKHAxLngsIHAyLngpO1xyXG4gICAgICB2YXIgbWF4ID0gTWF0aC5tYXgocDEueCwgcDIueCk7XHJcbiAgICAgIGlmIChtaW4gPD0gcDMueCAmJiBwMy54IDw9IG1heCB8fCBtaW4gPD0gcDQueCAmJiBwNC54IDw9IG1heCkgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIC8v6YCa5bi45Yik5a6aXHJcbiAgICB2YXIgYSA9IChwMS54IC0gcDIueCkgKiAocDMueSAtIHAxLnkpICsgKHAxLnkgLSBwMi55KSAqIChwMS54IC0gcDMueCk7XHJcbiAgICB2YXIgYiA9IChwMS54IC0gcDIueCkgKiAocDQueSAtIHAxLnkpICsgKHAxLnkgLSBwMi55KSAqIChwMS54IC0gcDQueCk7XHJcbiAgICB2YXIgYyA9IChwMy54IC0gcDQueCkgKiAocDEueSAtIHAzLnkpICsgKHAzLnkgLSBwNC55KSAqIChwMy54IC0gcDEueCk7XHJcbiAgICB2YXIgZCA9IChwMy54IC0gcDQueCkgKiAocDIueSAtIHAzLnkpICsgKHAzLnkgLSBwNC55KSAqIChwMy54IC0gcDIueCk7XHJcbiAgICByZXR1cm4gYSAqIGIgPD0gMCAmJiBjICogZCA8PSAwO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHRlc3RSZWN0TGluZVxyXG4gICAqIEBzdGF0aWNcclxuICAgKiDnn6nlvaLjgajnt5rliIbjgYzph43jgarjgaPjgabjgYTjgovjgYvjganjgYbjgYvjgpLliKTlrprjgZfjgb7jgZlcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHJlY3QgPSBwaGluYS5nZW9tLlJlY3QoMTIwLCAxMzAsIDQwLCA1MCk7XHJcbiAgICogICAgIHAxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDEwMCwgMTAwKTtcclxuICAgKiAgICAgcDIgPSBwaGluYS5nZW9tLlZlY3RvcjIoMjAwLCAyMDApO1xyXG4gICAqIHBoaW5hLmdlb20uQ29sbGlzaW9uLnRlc3RSZWN0TGluZShyZWN0LCBwMSwgcDIpOyAvLyA9PiB0cnVlXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uUmVjdH0gcmVjdCDnn6nlvaLpoJjln5/jgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gcDEg57ea5YiG44Gu56uv44Gu5bqn5qiZXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHAyIOe3muWIhuOBruerr+OBruW6p+aomVxyXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IOefqeW9ouOBqOe3muWIhuOBjOmHjeOBquOBo+OBpuOBhOOCi+OBi+OBqeOBhuOBi1xyXG4gICAqL1xyXG4gIHN0YXRpYyB0ZXN0UmVjdExpbmUgKHJlY3QsIHAxLCBwMikge1xyXG4gICAgICAvL+WMheWQq+WIpOWumihwMeOBjOWQq+OBvuOCjOOBpuOCjOOBsOiJr+OBhOOBruOBp3Ay44Gu5Yik5a6a44Gv44GX44Gq44GE77yJXHJcbiAgICAgIGlmIChyZWN0LmxlZnQgPD0gcDEueCAmJiBwMS54IDw9IHJlY3QucmlnaHQgJiYgcmVjdC50b3AgPD0gcDEueSAmJiBwMS55IDw9IHJlY3QuYm90dG9tICkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAvL+efqeW9ouOBru+8lOeCuVxyXG4gICAgICB2YXIgcjEgPSBwaGluYS5nZW9tLlZlY3RvcjIocmVjdC5sZWZ0LCByZWN0LnRvcCk7ICAgICAvL+W3puS4ilxyXG4gICAgICB2YXIgcjIgPSBwaGluYS5nZW9tLlZlY3RvcjIocmVjdC5yaWdodCwgcmVjdC50b3ApOyAgICAvL+WPs+S4ilxyXG4gICAgICB2YXIgcjMgPSBwaGluYS5nZW9tLlZlY3RvcjIocmVjdC5yaWdodCwgcmVjdC5ib3R0b20pOyAvL+WPs+S4i1xyXG4gICAgICB2YXIgcjQgPSBwaGluYS5nZW9tLlZlY3RvcjIocmVjdC5sZWZ0LCByZWN0LmJvdHRvbSk7ICAvL+W3puS4i1xyXG5cclxuICAgICAgLy/nn6nlvaLjga7vvJTovrrjgpLjgarjgZnnt5rliIbjgajjga7mjqXop6bliKTlrppcclxuICAgICAgaWYgKHBoaW5hLmdlb20uQ29sbGlzaW9uLnRlc3RMaW5lTGluZShwMSwgcDIsIHIxLCByMikpIHJldHVybiB0cnVlO1xyXG4gICAgICBpZiAocGhpbmEuZ2VvbS5Db2xsaXNpb24udGVzdExpbmVMaW5lKHAxLCBwMiwgcjIsIHIzKSkgcmV0dXJuIHRydWU7XHJcbiAgICAgIGlmIChwaGluYS5nZW9tLkNvbGxpc2lvbi50ZXN0TGluZUxpbmUocDEsIHAyLCByMywgcjQpKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgaWYgKHBoaW5hLmdlb20uQ29sbGlzaW9uLnRlc3RMaW5lTGluZShwMSwgcDIsIHIxLCByNCkpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxufVxuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmdlb20uVmVjdG9yM1xyXG4gKiAjIDPmrKHlhYPjg5njgq/jg4jjg6vjgq/jg6njgrnvvIjmnKrlrp/oo4XvvIlcclxuICogM+asoeWFg+OBruODmeOCr+ODiOODq+OChOW6p+aomeOCkuihqOOBmeOCr+ODqeOCueOBp+OBmeOAglxyXG4gKi9cclxuY2xhc3MgVmVjdG9yMyB7XHJcblxyXG4gIC8qKiB45bqn5qiZICovXHJcbiAgLy8geDogMCxcclxuICAvKiogeeW6p+aomSAqL1xyXG4gIC8vIHk6IDAsXHJcbiAgLyoqIHrluqfmqJkgKi9cclxuICAvLyB6OiAwLFxyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcih4LCB5LCB6KSB7XHJcbiAgICB0aGlzLnggPSB4IHx8IDA7XHJcbiAgICB0aGlzLnkgPSB5IHx8IDA7XHJcbiAgICB0aGlzLnogPSB6IHx8IDA7XHJcbiAgfVxyXG5cclxufVxuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmdyYXBoaWNzLkNhbnZhc1xyXG4gKiDjgq3jg6Pjg7Pjg5Djgrnmi6HlvLXjgq/jg6njgrlcclxuICovXHJcbmNsYXNzIENhbnZhcyB7XHJcbiAgLy8gZG9tRWxlbWVudDogbnVsbCxcclxuICAvLyBjYW52YXM6IG51bGwsXHJcbiAgLy8gY29udGV4dDogbnVsbCxcclxuXHJcbiAgLyoqXHJcbiAgICog5Yid5pyf5YyWXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XHJcbiAgICBpZiAodHlwZW9mIGNhbnZhcyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNhbnZhcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcyB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSB0aGlzLmNhbnZhcztcclxuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB0aGlzLmNvbnRleHQubGluZUNhcCA9ICdyb3VuZCc7XHJcbiAgICB0aGlzLmNvbnRleHQubGluZUpvaW4gPSAncm91bmQnO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44K144Kk44K644KS44K744OD44OIXHJcbiAgICovXHJcbiAgc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICB0aGlzLmNhbnZhcy53aWR0aCAgID0gd2lkdGg7XHJcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgID0gaGVpZ2h0O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBzZXRTaXplVG9TY3JlZW4oKSB7XHJcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS5wb3NpdGlvbiAgPSBcImZpeGVkXCI7XHJcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS5tYXJnaW4gICAgPSBcIjBweFwiO1xyXG4gICAgdGhpcy5jYW52YXMuc3R5bGUucGFkZGluZyAgID0gXCIwcHhcIjtcclxuICAgIHRoaXMuY2FudmFzLnN0eWxlLmxlZnQgICAgICA9IFwiMHB4XCI7XHJcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS50b3AgICAgICAgPSBcIjBweFwiO1xyXG4gICAgcmV0dXJuIHRoaXMuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIGZpdFNjcmVlbihpc0V2ZXIpIHtcclxuICAgIGlzRXZlciA9IGlzRXZlciA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGlzRXZlcjtcclxuXHJcbiAgICB2YXIgX2ZpdEZ1bmMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIGUgPSB0aGlzLmRvbUVsZW1lbnQ7XHJcbiAgICAgIHZhciBzID0gZS5zdHlsZTtcclxuICAgICAgXHJcbiAgICAgIHMucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgIHMubWFyZ2luID0gXCJhdXRvXCI7XHJcbiAgICAgIHMubGVmdCA9IFwiMHB4XCI7XHJcbiAgICAgIHMudG9wICA9IFwiMHB4XCI7XHJcbiAgICAgIHMuYm90dG9tID0gXCIwcHhcIjtcclxuICAgICAgcy5yaWdodCA9IFwiMHB4XCI7XHJcblxyXG4gICAgICB2YXIgcmF0ZVdpZHRoID0gZS53aWR0aC93aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgdmFyIHJhdGVIZWlnaHQ9IGUuaGVpZ2h0L3dpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgdmFyIHJhdGUgPSBlLmhlaWdodC9lLndpZHRoO1xyXG4gICAgICBcclxuICAgICAgaWYgKHJhdGVXaWR0aCA+IHJhdGVIZWlnaHQpIHtcclxuICAgICAgICBzLndpZHRoICA9IE1hdGguZmxvb3IoaW5uZXJXaWR0aCkrXCJweFwiO1xyXG4gICAgICAgIHMuaGVpZ2h0ID0gTWF0aC5mbG9vcihpbm5lcldpZHRoKnJhdGUpK1wicHhcIjtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBzLndpZHRoICA9IE1hdGguZmxvb3IoaW5uZXJIZWlnaHQvcmF0ZSkrXCJweFwiO1xyXG4gICAgICAgIHMuaGVpZ2h0ID0gTWF0aC5mbG9vcihpbm5lckhlaWdodCkrXCJweFwiO1xyXG4gICAgICB9XHJcbiAgICB9LmJpbmQodGhpcyk7XHJcbiAgICBcclxuICAgIC8vIOS4gOW6puWun+ihjOOBl+OBpuOBiuOBj1xyXG4gICAgX2ZpdEZ1bmMoKTtcclxuXHJcbiAgICAvLyDjg6rjgrXjgqTjgrrmmYLjga7jg6rjgrnjg4rjgajjgZfjgabnmbvpjLLjgZfjgabjgYrjgY9cclxuICAgIGlmIChpc0V2ZXIpIHtcclxuICAgICAgcGhpbmEkMS5nbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBfZml0RnVuYywgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44Kv44Oq44KiXHJcbiAgICovXHJcbiAgY2xlYXIoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgeCA9IHggfHwgMDtcclxuICAgIHkgPSB5IHx8IDA7XHJcbiAgICB3aWR0aCA9IHdpZHRoIHx8IHRoaXMud2lkdGg7XHJcbiAgICBoZWlnaHQ9IGhlaWdodHx8IHRoaXMuaGVpZ2h0O1xyXG4gICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgY2xlYXJDb2xvcihmaWxsU3R5bGUsIHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHggPSB4IHx8IDA7XHJcbiAgICB5ID0geSB8fCAwO1xyXG4gICAgd2lkdGggPSB3aWR0aCB8fCB0aGlzLndpZHRoO1xyXG4gICAgaGVpZ2h0PSBoZWlnaHR8fCB0aGlzLmhlaWdodDtcclxuXHJcbiAgICB2YXIgY29udGV4dCA9IHRoaXMuY29udGV4dDtcclxuXHJcbiAgICBjb250ZXh0LnNhdmUoKTtcclxuICAgIGNvbnRleHQuc2V0VHJhbnNmb3JtKDEuMCwgMC4wLCAwLjAsIDEuMCwgMC4wLCAwLjApOyAvLyDooYzliJfliJ3mnJ/ljJZcclxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZmlsbFN0eWxlOyAgICAgLy8g5aGX44KK44Gk44G244GX44K544K/44Kk44Or44K744OD44OIXHJcbiAgICBjb250ZXh0LmZpbGxSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgY29udGV4dC5yZXN0b3JlKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICog44OR44K544KS6ZaL5aeLKOODquOCu+ODg+ODiClcclxuICAgKi9cclxuICBiZWdpblBhdGgoKSB7XHJcbiAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqICDjg5HjgrnjgpLplonjgZjjgotcclxuICAgKi9cclxuICBjbG9zZVBhdGgoKSB7XHJcbiAgICB0aGlzLmNvbnRleHQuY2xvc2VQYXRoKCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiAg5paw6KaP44OR44K555Sf5oiQXHJcbiAgICovXHJcbiAgbW92ZVRvKHgsIHkpIHtcclxuICAgIHRoaXMuY29udGV4dC5tb3ZlVG8oeCwgeSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOODkeOCueOBq+i/veWKoFxyXG4gICAqL1xyXG4gIGxpbmVUbyh4LCB5KSB7XHJcbiAgICB0aGlzLmNvbnRleHQubGluZVRvKHgsIHkpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBxdWFkcmF0aWNDdXJ2ZVRvKCkge1xyXG4gICAgdGhpcy5jb250ZXh0LnF1YWRyYXRpY0N1cnZlVG8uYXBwbHkodGhpcy5jb250ZXh0LCBhcmd1bWVudHMpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBiZXppZXJDdXJ2ZVRvKCkge1xyXG4gICAgdGhpcy5jb250ZXh0LmJlemllckN1cnZlVG8uYXBwbHkodGhpcy5jb250ZXh0LCBhcmd1bWVudHMpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjg5HjgrnlhoXjgpLloZfjgorjgaTjgbbjgZlcclxuICAgKi9cclxuICBmaWxsKCkge1xyXG4gICAgdGhpcy5jb250ZXh0LmZpbGwoKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44OR44K55LiK44Gr44Op44Kk44Oz44KS5byV44GPXHJcbiAgICovXHJcbiAgc3Ryb2tlKCkge1xyXG4gICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgq/jg6rjg4Pjg5dcclxuICAgKi9cclxuICBjbGlwKCkge1xyXG4gICAgdGhpcy5jb250ZXh0LmNsaXAoKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgICAgIFxyXG4gIC8qKlxyXG4gICAqIOeCueaPj+eUu1xyXG4gICAqL1xyXG4gIGRyYXdQb2ludCh4LCB5KSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdHJva2VSZWN0KHgsIHksIDEsIDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44Op44Kk44Oz44OR44K544KS5L2c5oiQXHJcbiAgICovXHJcbiAgbGluZSh4MCwgeTAsIHgxLCB5MSkge1xyXG4gICAgcmV0dXJuIHRoaXMubW92ZVRvKHgwLCB5MCkubGluZVRvKHgxLCB5MSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIOODqeOCpOODs+OCkuaPj+eUu1xyXG4gICAqL1xyXG4gIGRyYXdMaW5lKHgwLCB5MCwgeDEsIHkxKSB7XHJcbiAgICByZXR1cm4gdGhpcy5iZWdpblBhdGgoKS5saW5lKHgwLCB5MCwgeDEsIHkxKS5zdHJva2UoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOODgOODg+OCt+ODpeODqeOCpOODs+OCkuaPj+eUu1xyXG4gICAqL1xyXG4gIGRyYXdEYXNoTGluZSh4MCwgeTAsIHgxLCB5MSwgcGF0dGVybikge1xyXG4gICAgdmFyIHBhdHRlcm5UYWJsZSA9IG51bGw7XHJcbiAgICBpZiAodHlwZW9mKHBhdHRlcm4pID09IFwic3RyaW5nXCIpIHtcclxuICAgICAgcGF0dGVyblRhYmxlID0gcGF0dGVybjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBwYXR0ZXJuID0gcGF0dGVybiB8fCAweGYwZjA7XHJcbiAgICAgIHBhdHRlcm5UYWJsZSA9IHBhdHRlcm4udG9TdHJpbmcoMik7XHJcbiAgICB9XHJcbiAgICBwYXR0ZXJuVGFibGUgPSBwYXR0ZXJuVGFibGUucGFkZGluZygxNiwgJzEnKTtcclxuICAgIFxyXG4gICAgdmFyIHZ4ID0geDEteDA7XHJcbiAgICB2YXIgdnkgPSB5MS15MDtcclxuICAgIHZhciBsZW4gPSBNYXRoLnNxcnQodngqdnggKyB2eSp2eSk7XHJcbiAgICB2eC89bGVuOyB2eS89bGVuO1xyXG4gICAgXHJcbiAgICB2YXIgeCA9IHgwO1xyXG4gICAgdmFyIHkgPSB5MDtcclxuICAgIGZvciAodmFyIGk9MDsgaTxsZW47ICsraSkge1xyXG4gICAgICBpZiAocGF0dGVyblRhYmxlW2klMTZdID09ICcxJykge1xyXG4gICAgICAgIHRoaXMuZHJhd1BvaW50KHgsIHkpO1xyXG4gICAgICAgIC8vIHRoaXMuZmlsbFJlY3QoeCwgeSwgdGhpcy5jb250ZXh0LmxpbmVXaWR0aCwgdGhpcy5jb250ZXh0LmxpbmVXaWR0aCk7XHJcbiAgICAgIH1cclxuICAgICAgeCArPSB2eDtcclxuICAgICAgeSArPSB2eTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiB2MCh4MCwgeTApLCB2MSh4MSwgeTEpIOOBi+OCieinkuW6puOCkuaxguOCgeOBpuefouWNsOOCkuaPj+eUu1xyXG4gICAqIGh0dHA6Ly9oYWt1aGluLmpwL2FzL3JvdGF0aW9uLmh0bWxcclxuICAgKi9cclxuICBkcmF3QXJyb3coeDAsIHkwLCB4MSwgeTEsIGFycm93UmFkaXVzKSB7XHJcbiAgICB2YXIgdnggPSB4MS14MDtcclxuICAgIHZhciB2eSA9IHkxLXkwO1xyXG4gICAgdmFyIGFuZ2xlID0gTWF0aC5hdGFuMih2eSwgdngpKjE4MC9NYXRoLlBJO1xyXG4gICAgXHJcbiAgICB0aGlzLmRyYXdMaW5lKHgwLCB5MCwgeDEsIHkxKTtcclxuICAgIHRoaXMuZmlsbFBvbHlnb24oeDEsIHkxLCBhcnJvd1JhZGl1cyB8fCA1LCAzLCBhbmdsZSk7XHJcbiAgICBcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIGxpbmVzXHJcbiAgICovXHJcbiAgbGluZXMoKSB7XHJcbiAgICB0aGlzLm1vdmVUbyhhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSk7XHJcbiAgICBmb3IgKHZhciBpPTEsbGVuPWFyZ3VtZW50cy5sZW5ndGgvMjsgaTxsZW47ICsraSkge1xyXG4gICAgICB0aGlzLmxpbmVUbyhhcmd1bWVudHNbaSoyXSwgYXJndW1lbnRzW2kqMisxXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOODqeOCpOODs+OCueODiOODreODvOOCr+aPj+eUu1xyXG4gICAqL1xyXG4gIHN0cm9rZUxpbmVzKCkge1xyXG4gICAgdGhpcy5iZWdpblBhdGgoKTtcclxuICAgIHRoaXMubGluZXMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgIHRoaXMuc3Ryb2tlKCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOODqeOCpOODs+Whl+OCiuOBpOOBtuOBl+aPj+eUu1xyXG4gICAqL1xyXG4gIGZpbGxMaW5lcygpIHtcclxuICAgIHRoaXMuYmVnaW5QYXRoKCk7XHJcbiAgICB0aGlzLmxpbmVzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICB0aGlzLmZpbGwoKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiDlm5vop5LlvaLjg5HjgrnjgpLkvZzmiJDjgZnjgotcclxuICAgKi9cclxuICByZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHRoaXMuY29udGV4dC5yZWN0LmFwcGx5KHRoaXMuY29udGV4dCwgYXJndW1lbnRzKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiDlm5vop5LlvaLloZfjgorjgaTjgbbjgZfmj4/nlLtcclxuICAgKi9cclxuICBmaWxsUmVjdCgpIHtcclxuICAgIHRoaXMuY29udGV4dC5maWxsUmVjdC5hcHBseSh0aGlzLmNvbnRleHQsIGFyZ3VtZW50cyk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICog5Zub6KeS5b2i44Op44Kk44Oz5o+P55S7XHJcbiAgICovXHJcbiAgc3Ryb2tlUmVjdCgpIHtcclxuICAgIHRoaXMuY29udGV4dC5zdHJva2VSZWN0LmFwcGx5KHRoaXMuY29udGV4dCwgYXJndW1lbnRzKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiDop5LkuLjlm5vop5LlvaLjg5HjgrlcclxuICAgKi9cclxuICByb3VuZFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKSB7XHJcbiAgICB2YXIgbCA9IHggKyByYWRpdXM7XHJcbiAgICB2YXIgciA9IHggKyB3aWR0aCAtIHJhZGl1cztcclxuICAgIHZhciB0ID0geSArIHJhZGl1cztcclxuICAgIHZhciBiID0geSArIGhlaWdodCAtIHJhZGl1cztcclxuICAgIFxyXG4gICAgLypcclxuICAgIHZhciBjdHggPSB0aGlzLmNvbnRleHQ7XHJcbiAgICBjdHgubW92ZVRvKGwsIHkpO1xyXG4gICAgY3R4LmxpbmVUbyhyLCB5KTtcclxuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgrd2lkdGgsIHksIHgrd2lkdGgsIHQpO1xyXG4gICAgY3R4LmxpbmVUbyh4K3dpZHRoLCBiKTtcclxuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgrd2lkdGgsIHkraGVpZ2h0LCByLCB5K2hlaWdodCk7XHJcbiAgICBjdHgubGluZVRvKGwsIHkraGVpZ2h0KTtcclxuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHkraGVpZ2h0LCB4LCBiKTtcclxuICAgIGN0eC5saW5lVG8oeCwgdCk7XHJcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5LCBsLCB5KTtcclxuICAgIC8qKi9cclxuICAgIFxyXG4gICAgdGhpcy5jb250ZXh0LmFyYyhsLCB0LCByYWRpdXMsICAgICAtTWF0aC5QSSwgLU1hdGguUEkqMC41LCBmYWxzZSk7ICAvLyDlt6bkuIpcclxuICAgIHRoaXMuY29udGV4dC5hcmMociwgdCwgcmFkaXVzLCAtTWF0aC5QSSowLjUsICAgICAgICAgICAgMCwgZmFsc2UpOyAgLy8g5Y+z5LiKXHJcbiAgICB0aGlzLmNvbnRleHQuYXJjKHIsIGIsIHJhZGl1cywgICAgICAgICAgICAwLCAgTWF0aC5QSSowLjUsIGZhbHNlKTsgIC8vIOWPs+S4i1xyXG4gICAgdGhpcy5jb250ZXh0LmFyYyhsLCBiLCByYWRpdXMsICBNYXRoLlBJKjAuNSwgICAgICBNYXRoLlBJLCBmYWxzZSk7ICAvLyDlt6bkuItcclxuICAgIHRoaXMuY2xvc2VQYXRoKCk7XHJcbiAgICBcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6KeS5Li45Zub6KeS5b2i5aGX44KK44Gk44G244GXXHJcbiAgICovXHJcbiAgZmlsbFJvdW5kUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpIHtcclxuICAgIHJldHVybiB0aGlzLmJlZ2luUGF0aCgpLnJvdW5kUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpLmZpbGwoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOinkuS4uOWbm+inkuW9ouOCueODiOODreODvOOCr+aPj+eUu1xyXG4gICAqL1xyXG4gIHN0cm9rZVJvdW5kUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpIHtcclxuICAgIHJldHVybiB0aGlzLmJlZ2luUGF0aCgpLnJvdW5kUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpLnN0cm9rZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5YaG44Gu44OR44K544KS6Kit5a6aXHJcbiAgICovXHJcbiAgY2lyY2xlKHgsIHksIHJhZGl1cykge1xyXG4gICAgdGhpcy5jb250ZXh0LmFyYyh4LCB5LCByYWRpdXMsIDAsIE1hdGguUEkqMiwgZmFsc2UpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIOWhl+OCiuOBpOOBtuOBl+WGhuOCkuaPj+eUu1xyXG4gICAqL1xyXG4gIGZpbGxDaXJjbGUoeCwgeSwgcmFkaXVzKSB7XHJcbiAgICB2YXIgYyA9IHRoaXMuY29udGV4dDtcclxuICAgIGMuYmVnaW5QYXRoKCk7XHJcbiAgICBjLmFyYyh4LCB5LCByYWRpdXMsIDAsIE1hdGguUEkqMiwgZmFsc2UpO1xyXG4gICAgYy5jbG9zZVBhdGgoKTtcclxuICAgIGMuZmlsbCgpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIOOCueODiOODreODvOOCr+WGhuOCkuaPj+eUu1xyXG4gICAqL1xyXG4gIHN0cm9rZUNpcmNsZSh4LCB5LCByYWRpdXMpIHtcclxuICAgIHZhciBjID0gdGhpcy5jb250ZXh0O1xyXG4gICAgYy5iZWdpblBhdGgoKTtcclxuICAgIGMuYXJjKHgsIHksIHJhZGl1cywgMCwgTWF0aC5QSSoyLCBmYWxzZSk7XHJcbiAgICBjLmNsb3NlUGF0aCgpO1xyXG4gICAgYy5zdHJva2UoKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5YaG5byn44Gu44OR44K544KS6Kit5a6aXHJcbiAgICovXHJcbiAgYXJjKHgsIHksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIGFudGljbG9ja3dpc2UpIHtcclxuICAgIHRoaXMuY29udGV4dC5hcmMoeCwgeSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgYW50aWNsb2Nrd2lzZSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICog5aGX44KK44Gk44G244GX5YaG5byn44KS5o+P55S7XHJcbiAgICovXHJcbiAgZmlsbEFyYyh4LCB5LCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBhbnRpY2xvY2t3aXNlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5iZWdpblBhdGgoKS5hcmMoeCwgeSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgYW50aWNsb2Nrd2lzZSkuZmlsbCgpO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiDjgrnjg4jjg63jg7zjgq/lhoblvKfjgpLmj4/nlLtcclxuICAgKi9cclxuICBzdHJva2VBcmMoeCwgeSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgYW50aWNsb2Nrd2lzZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuYmVnaW5QYXRoKCkuYXJjKHgsIHksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIGFudGljbG9ja3dpc2UpLnN0cm9rZSgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHBpZSh4LCB5LCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBhbnRpY2xvY2t3aXNlKSB7XHJcbiAgICB2YXIgY29udGV4dCA9IHRoaXMuY29udGV4dDtcclxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICBjb250ZXh0Lm1vdmVUbygwLCAwKTtcclxuICAgIGNvbnRleHQuYXJjKHgsIHksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIGFudGljbG9ja3dpc2UpO1xyXG4gICAgY29udGV4dC5jbG9zZVBhdGgoKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBmaWxsUGllKHgsIHksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIGFudGljbG9ja3dpc2UpIHtcclxuICAgIHJldHVybiB0aGlzLmJlZ2luUGF0aCgpLnBpZSh4LCB5LCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBhbnRpY2xvY2t3aXNlKS5maWxsKCk7XHJcbiAgfVxyXG4gIHN0cm9rZVBpZSh4LCB5LCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBhbnRpY2xvY2t3aXNlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5iZWdpblBhdGgoKS5waWUoeCwgeSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgYW50aWNsb2Nrd2lzZSkuc3Ryb2tlKCk7XHJcbiAgfVxyXG5cclxuICBcclxuICAvKipcclxuICAgKiDjg53jg6rjgrTjg7Pjg5HjgrlcclxuICAgKi9cclxuICBwb2x5Z29uKHgsIHksIHNpemUsIHNpZGVzLCBvZmZzZXRBbmdsZSkge1xyXG4gICAgdmFyIHJhZERpdiA9IChNYXRoLlBJKjIpL3NpZGVzO1xyXG4gICAgdmFyIHJhZE9mZnNldCA9IChvZmZzZXRBbmdsZSE9PXVuZGVmaW5lZCkgPyBvZmZzZXRBbmdsZSpNYXRoLlBJLzE4MCA6IC1NYXRoLlBJLzI7XHJcbiAgICBcclxuICAgIHRoaXMubW92ZVRvKHggKyBNYXRoLmNvcyhyYWRPZmZzZXQpKnNpemUsIHkgKyBNYXRoLnNpbihyYWRPZmZzZXQpKnNpemUpO1xyXG4gICAgZm9yICh2YXIgaT0xOyBpPHNpZGVzOyArK2kpIHtcclxuICAgICAgdmFyIHJhZCA9IHJhZERpdippK3JhZE9mZnNldDtcclxuICAgICAgdGhpcy5saW5lVG8oXHJcbiAgICAgICAgeCArIE1hdGguY29zKHJhZCkqc2l6ZSxcclxuICAgICAgICB5ICsgTWF0aC5zaW4ocmFkKSpzaXplXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNsb3NlUGF0aCgpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIOODneODquOCtOODs+Whl+OCiuOBpOOBtuOBl1xyXG4gICAqL1xyXG4gIGZpbGxQb2x5Z29uKHgsIHksIHJhZGl1cywgc2lkZXMsIG9mZnNldEFuZ2xlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5iZWdpblBhdGgoKS5wb2x5Z29uKHgsIHksIHJhZGl1cywgc2lkZXMsIG9mZnNldEFuZ2xlKS5maWxsKCk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIOODneODquOCtOODs+OCueODiOODreODvOOCr+aPj+eUu1xyXG4gICAqL1xyXG4gIHN0cm9rZVBvbHlnb24oeCwgeSwgcmFkaXVzLCBzaWRlcywgb2Zmc2V0QW5nbGUpIHtcclxuICAgIHJldHVybiB0aGlzLmJlZ2luUGF0aCgpLnBvbHlnb24oeCwgeSwgcmFkaXVzLCBzaWRlcywgb2Zmc2V0QW5nbGUpLnN0cm9rZSgpO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBzdGFyXHJcbiAgICovXHJcbiAgc3Rhcih4LCB5LCByYWRpdXMsIHNpZGVzLCBzaWRlSW5kZW50LCBvZmZzZXRBbmdsZSkge1xyXG4gICAgdmFyIHggPSB4IHx8IDA7XHJcbiAgICB2YXIgeSA9IHkgfHwgMDtcclxuICAgIHZhciByYWRpdXMgPSByYWRpdXMgfHwgNjQ7XHJcbiAgICB2YXIgc2lkZXMgPSBzaWRlcyB8fCA1O1xyXG4gICAgdmFyIHNpZGVJbmRlbnRSYWRpdXMgPSByYWRpdXMgKiAoc2lkZUluZGVudCB8fCAwLjM4KTtcclxuICAgIHZhciByYWRPZmZzZXQgPSAob2Zmc2V0QW5nbGUpID8gb2Zmc2V0QW5nbGUqTWF0aC5QSS8xODAgOiAtTWF0aC5QSS8yO1xyXG4gICAgdmFyIHJhZERpdiA9IChNYXRoLlBJKjIpL3NpZGVzLzI7XHJcblxyXG4gICAgdGhpcy5tb3ZlVG8oXHJcbiAgICAgIHggKyBNYXRoLmNvcyhyYWRPZmZzZXQpKnJhZGl1cyxcclxuICAgICAgeSArIE1hdGguc2luKHJhZE9mZnNldCkqcmFkaXVzXHJcbiAgICApO1xyXG4gICAgZm9yICh2YXIgaT0xOyBpPHNpZGVzKjI7ICsraSkge1xyXG4gICAgICB2YXIgcmFkID0gcmFkRGl2KmkgKyByYWRPZmZzZXQ7XHJcbiAgICAgIHZhciBsZW4gPSAoaSUyKSA/IHNpZGVJbmRlbnRSYWRpdXMgOiByYWRpdXM7XHJcbiAgICAgIHRoaXMubGluZVRvKFxyXG4gICAgICAgIHggKyBNYXRoLmNvcyhyYWQpKmxlbixcclxuICAgICAgICB5ICsgTWF0aC5zaW4ocmFkKSpsZW5cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmmJ/jgpLloZfjgorjgaTjgbbjgZfmj4/nlLtcclxuICAgKi9cclxuICBmaWxsU3Rhcih4LCB5LCByYWRpdXMsIHNpZGVzLCBzaWRlSW5kZW50LCBvZmZzZXRBbmdsZSkge1xyXG4gICAgdGhpcy5iZWdpblBhdGgoKS5zdGFyKHgsIHksIHJhZGl1cywgc2lkZXMsIHNpZGVJbmRlbnQsIG9mZnNldEFuZ2xlKS5maWxsKCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOaYn+OCkuOCueODiOODreODvOOCr+aPj+eUu1xyXG4gICAqL1xyXG4gIHN0cm9rZVN0YXIoeCwgeSwgcmFkaXVzLCBzaWRlcywgc2lkZUluZGVudCwgb2Zmc2V0QW5nbGUpIHtcclxuICAgIHRoaXMuYmVnaW5QYXRoKCkuc3Rhcih4LCB5LCByYWRpdXMsIHNpZGVzLCBzaWRlSW5kZW50LCBvZmZzZXRBbmdsZSkuc3Ryb2tlKCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogaGVhcnRcclxuICAgKi9cclxuICBoZWFydCh4LCB5LCByYWRpdXMsIGFuZ2xlKSB7XHJcbiAgICB2YXIgaGFsZl9yYWRpdXMgPSByYWRpdXMqMC41O1xyXG4gICAgdmFyIHJhZCA9IChhbmdsZSA9PT0gdW5kZWZpbmVkKSA/IE1hdGguUEkvNCA6IE1hdGguZGVnVG9SYWQoYW5nbGUpO1xyXG5cclxuICAgIC8vIOWNiuW+hCBoYWxmX3JhZGl1cyDjga7op5LluqYgYW5nbGUg5LiK44Gu54K544Go44Gu5o6l57ea44KS5rGC44KB44KLXHJcbiAgICB2YXIgcCA9IE1hdGguY29zKHJhZCkqaGFsZl9yYWRpdXM7XHJcbiAgICB2YXIgcSA9IE1hdGguc2luKHJhZCkqaGFsZl9yYWRpdXM7XHJcblxyXG4gICAgLy8g5YaG44Gu5o6l57ea44Gu5pa556iL5byPIHB4ICsgcXkgPSByXjIg44KI44KKIHkgPSAocl4yLXB4KS9xXHJcbiAgICB2YXIgeDIgPSAtaGFsZl9yYWRpdXM7XHJcbiAgICB2YXIgeTIgPSAoaGFsZl9yYWRpdXMqaGFsZl9yYWRpdXMtcCp4MikvcTtcclxuXHJcbiAgICAvLyDkuK3lv4PkvY3nva7oqr/mlbRcclxuICAgIHZhciBoZWlnaHQgPSB5MiArIGhhbGZfcmFkaXVzO1xyXG4gICAgdmFyIG9mZnNldFkgPSBoYWxmX3JhZGl1cy1oZWlnaHQvMjtcclxuXHJcbiAgICAvLyDjg5HjgrnjgpLjgrvjg4Pjg4hcclxuICAgIHRoaXMubW92ZVRvKDAreCwgeTIreStvZmZzZXRZKTtcclxuXHJcbiAgICB0aGlzLmFyYygtaGFsZl9yYWRpdXMreCwgMCt5K29mZnNldFksIGhhbGZfcmFkaXVzLCBNYXRoLlBJLXJhZCwgTWF0aC5QSSoyKTtcclxuICAgIHRoaXMuYXJjKGhhbGZfcmFkaXVzK3gsIDAreStvZmZzZXRZLCBoYWxmX3JhZGl1cywgTWF0aC5QSSwgcmFkKTtcclxuICAgIHRoaXMuY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIGZpbGwgaGVhcnRcclxuICAgKi9cclxuICBmaWxsSGVhcnQoeCwgeSwgcmFkaXVzLCBhbmdsZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuYmVnaW5QYXRoKCkuaGVhcnQoeCwgeSwgcmFkaXVzLCBhbmdsZSkuZmlsbCgpO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBzdHJva2UgaGVhcnRcclxuICAgKi9cclxuICBzdHJva2VIZWFydCh4LCB5LCByYWRpdXMsIGFuZ2xlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5iZWdpblBhdGgoKS5oZWFydCh4LCB5LCByYWRpdXMsIGFuZ2xlKS5zdHJva2UoKTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xNDE2OTIzNC90aGUtcmVsYXRpb24tb2YtdGhlLWJlemllci1jdXJ2ZS1hbmQtZWxsaXBzZVxyXG4gICAqL1xyXG4gIGVsbGlwc2UoeCwgeSwgdywgaCkge1xyXG4gICAgdmFyIGN0eCA9IHRoaXMuY29udGV4dDtcclxuICAgIHZhciBrYXBwYSA9IDAuNTUyMjg0ODtcclxuXHJcbiAgICB2YXIgb3ggPSAodyAvIDIpICoga2FwcGE7IC8vIGNvbnRyb2wgcG9pbnQgb2Zmc2V0IGhvcml6b250YWxcclxuICAgIHZhciBveSA9IChoIC8gMikgKiBrYXBwYTsgLy8gY29udHJvbCBwb2ludCBvZmZzZXQgdmVydGljYWxcclxuICAgIHZhciB4ZSA9IHggKyB3OyAgICAgICAgICAgLy8geC1lbmRcclxuICAgIHZhciB5ZSA9IHkgKyBoOyAgICAgICAgICAgLy8geS1lbmRcclxuICAgIHZhciB4bSA9IHggKyB3IC8gMjsgICAgICAgLy8geC1taWRkbGVcclxuICAgIHZhciB5bSA9IHkgKyBoIC8gMjsgICAgICAgLy8geS1taWRkbGVcclxuXHJcbiAgICBjdHgubW92ZVRvKHgsIHltKTtcclxuICAgIGN0eC5iZXppZXJDdXJ2ZVRvKHgsIHltIC0gb3ksIHhtIC0gb3gsIHksIHhtLCB5KTtcclxuICAgIGN0eC5iZXppZXJDdXJ2ZVRvKHhtICsgb3gsIHksIHhlLCB5bSAtIG95LCB4ZSwgeW0pO1xyXG4gICAgY3R4LmJlemllckN1cnZlVG8oeGUsIHltICsgb3ksIHhtICsgb3gsIHllLCB4bSwgeWUpO1xyXG4gICAgY3R4LmJlemllckN1cnZlVG8oeG0gLSBveCwgeWUsIHgsIHltICsgb3ksIHgsIHltKTtcclxuICAgIC8vIGN0eC5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGZpbGxFbGxpcHNlKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHJldHVybiB0aGlzLmJlZ2luUGF0aCgpLmVsbGlwc2UoeCwgeSwgd2lkdGgsIGhlaWdodCkuZmlsbCgpO1xyXG4gIH1cclxuICBzdHJva2VFbGxpcHNlKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHJldHVybiB0aGlzLmJlZ2luUGF0aCgpLmVsbGlwc2UoeCwgeSwgd2lkdGgsIGhlaWdodCkuc3Ryb2tlKCk7XHJcbiAgfVxyXG5cclxuICBmaWxsVGV4dCgpIHtcclxuICAgIHRoaXMuX2NvbnRleHQuZmlsbFRleHQuYXBwbHkodGhpcy5fY29udGV4dCwgYXJndW1lbnRzKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgc3Ryb2tlVGV4dCgpIHtcclxuICAgIHRoaXMuX2NvbnRleHQuc3Ryb2tlVGV4dC5hcHBseSh0aGlzLl9jb250ZXh0LCBhcmd1bWVudHMpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIOeUu+WDj+OCkuaPj+eUu1xyXG4gICAqL1xyXG4gIGRyYXdJbWFnZSgpIHtcclxuICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UuYXBwbHkodGhpcy5jb250ZXh0LCBhcmd1bWVudHMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6KGM5YiX44KS44K744OD44OIXHJcbiAgICovXHJcbiAgc2V0VHJhbnNmb3JtKG0xMSwgbTEyLCBtMjEsIG0yMiwgZHgsIGR5KSB7XHJcbiAgICB0aGlzLmNvbnRleHQuc2V0VHJhbnNmb3JtKG0xMSwgbTEyLCBtMjEsIG0yMiwgZHgsIGR5KTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6KGM5YiX44KS44Oq44K744OD44OIXHJcbiAgICovXHJcbiAgcmVzZXRUcmFuc2Zvcm0oKSB7XHJcbiAgICB0aGlzLnNldFRyYW5zZm9ybSgxLjAsIDAuMCwgMC4wLCAxLjAsIDAuMCwgMC4wKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICAvKipcclxuICAgKiDkuK3lv4Pjgavnp7vli5VcclxuICAgKi9cclxuICB0cmFuc2Zvcm1DZW50ZXIoKSB7XHJcbiAgICB0aGlzLmNvbnRleHQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIHRoaXMud2lkdGgvMiwgdGhpcy5oZWlnaHQvMik7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOenu+WLlVxyXG4gICAqL1xyXG4gIHRyYW5zbGF0ZSh4LCB5KSB7XHJcbiAgICB0aGlzLmNvbnRleHQudHJhbnNsYXRlKHgsIHkpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIOWbnui7olxyXG4gICAqL1xyXG4gIHJvdGF0ZShyb3RhdGlvbikge1xyXG4gICAgdGhpcy5jb250ZXh0LnJvdGF0ZShyb3RhdGlvbik7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICog44K544Kx44O844OrXHJcbiAgICovXHJcbiAgc2NhbGUoc2NhbGVYLCBzY2FsZVkpIHtcclxuICAgIHRoaXMuY29udGV4dC5zY2FsZShzY2FsZVgsIHNjYWxlWSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOeKtuaFi+OCkuS/neWtmFxyXG4gICAqL1xyXG4gIHNhdmUoKSB7XHJcbiAgICB0aGlzLmNvbnRleHQuc2F2ZSgpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDnirbmhYvjgpLlvqnlhYNcclxuICAgKi9cclxuICByZXN0b3JlKCkge1xyXG4gICAgdGhpcy5jb250ZXh0LnJlc3RvcmUoKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog55S75YOP44Go44GX44Gm5L+d5a2YXHJcbiAgICovXHJcbiAgc2F2ZUFzSW1hZ2UobWltZV90eXBlKSB7XHJcbiAgICBtaW1lX3R5cGUgPSBtaW1lX3R5cGUgfHwgXCJpbWFnZS9wbmdcIjtcclxuICAgIHZhciBkYXRhX3VybCA9IHRoaXMuY2FudmFzLnRvRGF0YVVSTChtaW1lX3R5cGUpO1xyXG4gICAgLy8gZGF0YV91cmwgPSBkYXRhX3VybC5yZXBsYWNlKG1pbWVfdHlwZSwgXCJpbWFnZS9vY3RldC1zdHJlYW1cIik7XHJcbiAgICB3aW5kb3cub3BlbihkYXRhX3VybCwgXCJzYXZlXCIpO1xyXG4gICAgXHJcbiAgICAvLyB0b0RhdGFVUkwg44KS5L2/44GI44Gw5LiL6KiY44Gu44KI44GG44Gq44OE44O844Or44GM5L2c44KM44KL44GL44KCISFcclxuICAgIC8vIFRPRE86IOODl+ODreOCsOODqeODoOOBp+e1teOCkuOBi+OBhOOBpuS/neWtmOOBp+OBjeOCi+ODhOODvOODq1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5bmFXHJcbiAgICovXHJcbiAgZ2V0IHdpZHRoKCkgICB7IHJldHVybiB0aGlzLmNhbnZhcy53aWR0aDsgfVxyXG4gIHNldCB3aWR0aCh2KSAgeyB0aGlzLmNhbnZhcy53aWR0aCA9IHY7IH1cclxuXHJcbiAgLyoqXHJcbiAgICog6auY44GVXHJcbiAgICovXHJcbiAgZ2V0IGhlaWdodCgpICAgeyByZXR1cm4gdGhpcy5jYW52YXMuaGVpZ2h0OyB9XHJcbiAgc2V0IGhlaWdodCh2KSAgeyB0aGlzLmNhbnZhcy5oZWlnaHQgPSB2OyB9XHJcblxyXG4gIGdldCBmaWxsU3R5bGUoKSAgIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maWxsU3R5bGU7IH1cclxuICBzZXQgZmlsbFN0eWxlKHYpICB7IHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSB2OyB9XHJcblxyXG4gIGdldCBzdHJva2VTdHlsZSgpICAgeyByZXR1cm4gdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlOyB9XHJcbiAgc2V0IHN0cm9rZVN0eWxlKHYpICB7IHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IHY7IH1cclxuXHJcbiAgZ2V0IGdsb2JhbEFscGhhKCkgICB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2xvYmFsQWxwaGE7IH1cclxuICBzZXQgZ2xvYmFsQWxwaGEodikgIHsgdGhpcy5jb250ZXh0Lmdsb2JhbEFscGhhID0gdjsgfVxyXG5cclxuICBnZXQgZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uKCkgICB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uOyB9XHJcbiAgc2V0IGdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbih2KSAgeyB0aGlzLmNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gdjsgfVxyXG5cclxuICBnZXQgc2hhZG93Qmx1cigpICAgeyByZXR1cm4gdGhpcy5jb250ZXh0LnNoYWRvd0JsdXI7IH1cclxuICBzZXQgc2hhZG93Qmx1cih2KSAgeyB0aGlzLmNvbnRleHQuc2hhZG93Qmx1ciA9IHY7IH1cclxuXHJcbiAgZ2V0IHNoYWRvd0NvbG9yKCkgICB7IHJldHVybiB0aGlzLmNvbnRleHQuc2hhZG93Q29sb3I7IH1cclxuICBzZXQgc2hhZG93Q29sb3IodikgIHsgdGhpcy5jb250ZXh0LnNoYWRvd0NvbG9yID0gdjsgfVxyXG5cclxuICBnZXQgc2hhZG93T2Zmc2V0WCgpICAgeyByZXR1cm4gdGhpcy5jb250ZXh0LnNoYWRvd09mZnNldFg7IH1cclxuICBzZXQgc2hhZG93T2Zmc2V0WCh2KSAgeyB0aGlzLmNvbnRleHQuc2hhZG93T2Zmc2V0WCA9IHY7IH1cclxuXHJcbiAgZ2V0IHNoYWRvd09mZnNldFkoKSAgIHsgcmV0dXJuIHRoaXMuY29udGV4dC5zaGFkb3dPZmZzZXRZOyB9XHJcbiAgc2V0IHNoYWRvd09mZnNldFkodikgIHsgdGhpcy5jb250ZXh0LnNoYWRvd09mZnNldFkgPSB2OyB9XHJcblxyXG4gIGdldCBsaW5lQ2FwKCkgICB7IHJldHVybiB0aGlzLmNvbnRleHQubGluZUNhcDsgfVxyXG4gIHNldCBsaW5lQ2FwKHYpICB7IHRoaXMuY29udGV4dC5saW5lQ2FwID0gdjsgfVxyXG5cclxuICBnZXQgbGluZUpvaW4oKSAgIHsgcmV0dXJuIHRoaXMuY29udGV4dC5saW5lSm9pbjsgfVxyXG4gIHNldCBsaW5lSm9pbih2KSAgeyB0aGlzLmNvbnRleHQubGluZUpvaW4gPSB2OyB9XHJcblxyXG4gIGdldCBtaXRlckxpbWl0KCkgICB7IHJldHVybiB0aGlzLmNvbnRleHQubWl0ZXJMaW1pdDsgfVxyXG4gIHNldCBtaXRlckxpbWl0KHYpICB7IHRoaXMuY29udGV4dC5taXRlckxpbWl0ID0gdjsgfVxyXG5cclxuICBnZXQgbGluZVdpZHRoKCkgICB7IHJldHVybiB0aGlzLmNvbnRleHQubGluZVdpZHRoOyB9XHJcbiAgc2V0IGxpbmVXaWR0aCh2KSAgeyB0aGlzLmNvbnRleHQubGluZVdpZHRoID0gdjsgfVxyXG5cclxuICBnZXQgZm9udCgpICAgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZvbnQ7IH1cclxuICBzZXQgZm9udCh2KSAgeyB0aGlzLmNvbnRleHQuZm9udCA9IHY7IH1cclxuXHJcbiAgZ2V0IHRleHRBbGlnbigpICAgeyByZXR1cm4gdGhpcy5jb250ZXh0LnRleHRBbGlnbjsgfVxyXG4gIHNldCB0ZXh0QWxpZ24odikgIHsgdGhpcy5jb250ZXh0LnRleHRBbGlnbiA9IHY7IH1cclxuXHJcbiAgZ2V0IHRleHRCYXNlbGluZSgpICAgeyByZXR1cm4gdGhpcy5jb250ZXh0LnRleHRCYXNlbGluZTsgfVxyXG4gIHNldCB0ZXh0QmFzZWxpbmUodikgIHsgdGhpcy5jb250ZXh0LnRleHRCYXNlbGluZSA9IHY7IH1cclxuXHJcbiAgZ2V0IGltYWdlU21vb3RoaW5nRW5hYmxlZCgpICAgeyByZXR1cm4gdGhpcy5jb250ZXh0LmltYWdlU21vb3RoaW5nRW5hYmxlZDsgfVxyXG4gIHNldCBpbWFnZVNtb290aGluZ0VuYWJsZWQodikgIHtcclxuICAgIHRoaXMuY29udGV4dC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSB2O1xyXG4gICAgdGhpcy5jb250ZXh0LndlYmtpdEltYWdlU21vb3RoaW5nRW5hYmxlZCA9IHY7XHJcbiAgICB0aGlzLmNvbnRleHQubW96SW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gdjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBtZWFzdXJlVGV4dChmb250LCB0ZXh0KSB7XHJcbiAgICB0aGlzLl9jb250ZXh0LmZvbnQgPSBmb250O1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRleHQubWVhc3VyZVRleHQodGV4dCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY3JlYXRlTGluZWFyR3JhZGllbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29udGV4dC5jcmVhdGVMaW5lYXJHcmFkaWVudC5hcHBseSh0aGlzLl9jb250ZXh0LCBhcmd1bWVudHMpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNyZWF0ZVJhZGlhbEdyYWRpZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRleHQuY3JlYXRlUmFkaWFsR3JhZGllbnQuYXBwbHkodGhpcy5fY29udGV4dCwgYXJndW1lbnRzKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5DYW52YXMuX2NvbnRleHQgPSAoZnVuY3Rpb24oKSB7XHJcbiAgaWYgKFN1cHBvcnQuY2FudmFzKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJykuZ2V0Q29udGV4dCgnMmQnKTtcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn0pKCk7XG5cbi8vIGltcG9ydCB7IGZpcnN0LCBsYXN0LCBjbGVhciB9IGZyb20gXCIuLi9jb3JlL2FycmF5XCJcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuaW5wdXQuSW5wdXRcclxuICogQGV4dGVuZHMgcGhpbmEudXRpbC5FdmVudERpc3BhdGNoZXJcclxuICovXHJcbmNsYXNzIElucHV0IGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcclxuXHJcbiAgLy8gLyoqIGRvbUVsZW1lbnQgKi9cclxuICAvLyBkb21FbGVtZW50ID0gbnVsbFxyXG5cclxuICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50KSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQgfHwgd2luZG93LmRvY3VtZW50O1xyXG5cclxuICAgIHRoaXMucG9zaXRpb24gPSBuZXcgVmVjdG9yMigwLCAwKTtcclxuICAgIHRoaXMuc3RhcnRQb3NpdGlvbiA9IG5ldyBWZWN0b3IyKDAsIDApO1xyXG4gICAgdGhpcy5kZWx0YVBvc2l0aW9uID0gbmV3IFZlY3RvcjIoMCwgMCk7XHJcbiAgICB0aGlzLnByZXZQb3NpdGlvbiA9IG5ldyBWZWN0b3IyKDAsIDApO1xyXG4gICAgdGhpcy5fdGVtcFBvc2l0aW9uID0gbmV3IFZlY3RvcjIoMCwgMCk7XHJcblxyXG4gICAgdGhpcy5tYXhDYWNoZU51bSA9IElucHV0LmRlZmF1bHRzLm1heENhY2hlTnVtO1xyXG4gICAgdGhpcy5taW5EaXN0YW5jZSA9IElucHV0LmRlZmF1bHRzLm1pbkRpc3RhbmNlO1xyXG4gICAgdGhpcy5tYXhEaXN0YW5jZSA9IElucHV0LmRlZmF1bHRzLm1heERpc3RhbmNlO1xyXG4gICAgdGhpcy5jYWNoZVBvc2l0aW9ucyA9IFtdO1xyXG4gICAgdGhpcy5mbGlja1ZlbG9jaXR5ID0gbmV3IFZlY3RvcjIoMCwgMCk7XHJcblxyXG4gICAgdGhpcy5mbGFncyA9IDA7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICB0aGlzLmxhc3QgPSB0aGlzLm5vdztcclxuICAgIHRoaXMubm93ID0gdGhpcy5mbGFncztcclxuICAgIHRoaXMuc3RhcnQgPSAodGhpcy5ub3cgXiB0aGlzLmxhc3QpICYgdGhpcy5ub3c7XHJcbiAgICB0aGlzLmVuZCAgID0gKHRoaXMubm93IF4gdGhpcy5sYXN0KSAmIHRoaXMubGFzdDtcclxuXHJcbiAgICAvLyDlpInljJblgKTjgpLmm7TmlrBcclxuICAgIHRoaXMuZGVsdGFQb3NpdGlvbi54ID0gdGhpcy5fdGVtcFBvc2l0aW9uLnggLSB0aGlzLnBvc2l0aW9uLng7XHJcbiAgICB0aGlzLmRlbHRhUG9zaXRpb24ueSA9IHRoaXMuX3RlbXBQb3NpdGlvbi55IC0gdGhpcy5wb3NpdGlvbi55O1xyXG5cclxuICAgIGlmICh0aGlzLmRlbHRhUG9zaXRpb24ueCA9PT0gMCAmJiB0aGlzLmRlbHRhUG9zaXRpb24ueSA9PT0gMCkge1xyXG4gICAgICB0aGlzLl9tb3ZlRmxhZyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuX21vdmVGbGFnID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5zdGFydCkge1xyXG4gICAgICB0aGlzLnN0YXJ0UG9zaXRpb24uc2V0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDliY3lm57jga7luqfmqJnjgpLmm7TmlrBcclxuICAgIHRoaXMucHJldlBvc2l0aW9uLnNldCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSk7XHJcblxyXG4gICAgLy8g54++5Zyo44Gu5L2N572u44KS5pu05pawXHJcbiAgICB0aGlzLnBvc2l0aW9uLnNldCh0aGlzLl90ZW1wUG9zaXRpb24ueCwgdGhpcy5fdGVtcFBvc2l0aW9uLnkpO1xyXG5cclxuICAgIGlmICh0aGlzLmNhY2hlUG9zaXRpb25zLmxlbmd0aCA+IHRoaXMubWF4Q2FjaGVOdW0pIHtcclxuICAgICAgdGhpcy5jYWNoZVBvc2l0aW9ucy5zaGlmdCgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jYWNoZVBvc2l0aW9ucy5wdXNoKHRoaXMucG9zaXRpb24uY2xvbmUoKSk7XHJcbiAgfVxyXG5cclxuICBfc3RhcnQoeCwgeSwgZmxhZykge1xyXG4gICAgZmxhZyA9IChmbGFnICE9PSB1bmRlZmluZWQpID8gZmxhZyA6IDE7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnc3RhcnQnLCB4LCB5KTtcclxuICAgIHRoaXMuX21vdmUoeCwgeSk7XHJcblxyXG4gICAgdGhpcy5mbGFncyB8PSBmbGFnO1xyXG5cclxuICAgIHZhciB4ID0gdGhpcy5fdGVtcFBvc2l0aW9uLng7XHJcbiAgICB2YXIgeSA9IHRoaXMuX3RlbXBQb3NpdGlvbi55O1xyXG4gICAgdGhpcy5wb3NpdGlvbi5zZXQoeCwgeSk7XHJcbiAgICB0aGlzLnByZXZQb3NpdGlvbi5zZXQoeCwgeSk7XHJcblxyXG4gICAgdGhpcy5mbGlja1ZlbG9jaXR5LnNldCgwLCAwKTtcclxuICAgIC8vIHRoaXMuY2FjaGVQb3NpdGlvbnMuY2xlYXIoKTtcclxuICAgIHRoaXMuY2FjaGVQb3NpdGlvbnMubGVuZ3RoID0gMDtcclxuICB9XHJcblxyXG4gIF9lbmQoZmxhZykge1xyXG4gICAgZmxhZyA9IChmbGFnICE9PSB1bmRlZmluZWQpID8gZmxhZyA6IDE7XHJcbiAgICB0aGlzLmZsYWdzICY9IH4oZmxhZyk7XHJcblxyXG4gICAgaWYgKHRoaXMuY2FjaGVQb3NpdGlvbnMubGVuZ3RoIDwgMikgcmV0dXJuO1xyXG5cclxuICAgIC8vIHZhciBmaXJzdCA9IHRoaXMuY2FjaGVQb3NpdGlvbnMuZmlyc3Q7XHJcbiAgICAvLyB2YXIgbGFzdCA9IHRoaXMuY2FjaGVQb3NpdGlvbnMubGFzdDtcclxuICAgIHZhciBmaXJzdCA9IHRoaXMuY2FjaGVQb3NpdGlvbnNbMF07XHJcbiAgICB2YXIgbGFzdCA9IHRoaXMuY2FjaGVQb3NpdGlvbnNbdGhpcy5jYWNoZVBvc2l0aW9ucy5sZW5ndGgtMV07XHJcblxyXG4gICAgdmFyIHYgPSBWZWN0b3IyLnN1YihsYXN0LCBmaXJzdCk7XHJcblxyXG4gICAgdmFyIGxlbiA9IHYubGVuZ3RoKCk7XHJcblxyXG4gICAgaWYgKGxlbiA+IHRoaXMubWluRGlzdGFuY2UpIHtcclxuICAgICAgLy8gdmFyIG5vcm1hbExlbiA9IGxlbi5jbGFtcCh0aGlzLm1pbkRpc3RhbmNlLCB0aGlzLm1heERpc3RhbmNlKTtcclxuICAgICAgdmFyIG5vcm1hbExlbiA9IGNsYW1wKGxlbiwgdGhpcy5taW5EaXN0YW5jZSwgdGhpcy5tYXhEaXN0YW5jZSk7XHJcbiAgICAgIHYuZGl2KGxlbikubXVsKG5vcm1hbExlbik7XHJcbiAgICAgIHRoaXMuZmxpY2tWZWxvY2l0eS5zZXQodi54LCB2LnkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRoaXMuY2FjaGVQb3NpdGlvbnMuY2xlYXIoKTtcclxuICAgIHRoaXMuY2FjaGVQb3NpdGlvbnMubGVuZ3RoID0gMDtcclxuICB9XHJcblxyXG4gIC8vIOOCueOCseODvOODq+OCkuiAg+aFrlxyXG4gIF9tb3ZlKHgsIHkpIHtcclxuICAgIHRoaXMuX3RlbXBQb3NpdGlvbi54ID0geDtcclxuICAgIHRoaXMuX3RlbXBQb3NpdGlvbi55ID0geTtcclxuXHJcbiAgICAvLyBhZGp1c3Qgc2NhbGVcclxuICAgIHZhciBlbG0gPSB0aGlzLmRvbUVsZW1lbnQ7XHJcbiAgICB2YXIgcmVjdCA9IGVsbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGlmIChyZWN0LndpZHRoKSB7XHJcbiAgICAgIHRoaXMuX3RlbXBQb3NpdGlvbi54ICo9IGVsbS53aWR0aCAvIHJlY3Qud2lkdGg7XHJcbiAgICB9XHJcbiAgICBpZiAocmVjdC5oZWlnaHQpIHtcclxuICAgICAgdGhpcy5fdGVtcFBvc2l0aW9uLnkgKj0gZWxtLmhlaWdodCAvIHJlY3QuaGVpZ2h0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5ICAgIHhcclxuICAgKiB45bqn5qiZ5YCkXHJcbiAgICovXHJcbiAgZ2V0IHgoKSB7IHJldHVybiB0aGlzLnBvc2l0aW9uLng7IH1cclxuICBzZXQgeCh2KSB7IHRoaXMucG9zaXRpb24ueCA9IHY7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5ICAgIHlcclxuICAgKiB55bqn5qiZ5YCkXHJcbiAgICovXHJcbiAgZ2V0IHkoKSB7IHJldHVybiB0aGlzLnBvc2l0aW9uLnk7IH1cclxuICBzZXQgeSh2KSB7IHRoaXMucG9zaXRpb24ueSA9IHY7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5ICAgIGR4XHJcbiAgICogZHjlgKRcclxuICAgKi9cclxuICBnZXQgZHgoKSB7IHJldHVybiB0aGlzLmRlbHRhUG9zaXRpb24ueDsgfVxyXG4gIHNldCBkeCh2KSB7IHRoaXMuZGVsdGFQb3NpdGlvbi54ID0gdjsgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkgICAgZHlcclxuICAgKiBkeeWApFxyXG4gICAqL1xyXG4gIGdldCBkeSgpIHsgcmV0dXJuIHRoaXMuZGVsdGFQb3NpdGlvbi55OyB9XHJcbiAgc2V0IGR5KHYpIHsgdGhpcy5kZWx0YVBvc2l0aW9uLnkgPSB2OyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSAgICBmeFxyXG4gICAqIGZ45YCkXHJcbiAgICovXHJcbiAgZ2V0IGZ4KCkgeyByZXR1cm4gdGhpcy5mbGlja1ZlbG9jaXR5Lng7IH1cclxuICBzZXQgZngodikgeyB0aGlzLmZsaWNrVmVsb2NpdHkueCA9IHY7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5ICAgIGZ5XHJcbiAgICogZnnlgKRcclxuICAgKi9cclxuICBnZXQgZnkoKSB7IHJldHVybiB0aGlzLmZsaWNrVmVsb2NpdHkueTsgfVxyXG4gIHNldCBmeSh2KSB7IHRoaXMuZmxpY2tWZWxvY2l0eS55ID0gdjsgfVxyXG5cclxufVxyXG5cclxuSW5wdXQuZGVmYXVsdHMgPSB7XHJcbiAgbWF4Q2FjaGVOdW06IDMsXHJcbiAgbWluRGlzdGFuY2U6IDEwLFxyXG4gIG1heERpc3RhbmNlOiAxMDAsXHJcbn07XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuaW5wdXQuS2V5Ym9hcmRcclxuICogQGV4dGVuZHMgcGhpbmEuaW5wdXQuSW5wdXRcclxuICovXHJcbmNsYXNzIEtleWJvYXJkIGV4dGVuZHMgSW5wdXQge1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50KSB7XHJcbiAgICBzdXBlcihkb21FbGVtZW50KTtcclxuXHJcbiAgICB0aGlzLmtleSA9IHt9O1xyXG4gICAgdGhpcy5wcmVzcyAgPSB7fTtcclxuICAgIHRoaXMuZG93biAgID0ge307XHJcbiAgICB0aGlzLnVwICAgICA9IHt9O1xyXG4gICAgdGhpcy5sYXN0ICAgPSB7fTtcclxuXHJcbiAgICB0aGlzLl9rZXlkb3duID0gbnVsbDtcclxuICAgIHRoaXMuX2tleXVwID0gbnVsbDtcclxuICAgIHRoaXMuX2tleXByZXNzID0gbnVsbDtcclxuXHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgc2VsZi5rZXlbZS5rZXlDb2RlXSA9IHRydWU7XHJcbiAgICAgIHNlbGYuX2tleWRvd24gPSBlLmtleUNvZGU7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHNlbGYua2V5W2Uua2V5Q29kZV0gPSBmYWxzZTtcclxuICAgICAgc2VsZi5fa2V5dXAgPSBlLmtleUNvZGU7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgc2VsZi5fa2V5cHJlc3MgPSBlLmtleUNvZGU7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOaDheWgseabtOaWsOWHpueQhlxyXG4gICAqIOODnuOCpOODleODrOODvOODoOWRvOOCk+OBp+S4i+OBleOBhC5cclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHVwZGF0ZSgpIHtcclxuICAgIC8vIFRPRE86IOS4gOaLrOODk+ODg+ODiOa8lOeul+OBp+ihjOOBhuOCiOOBhuS/ruato+OBmeOCi1xyXG4gICAgZm9yICh2YXIgayBpbiB0aGlzLmtleSkge1xyXG4gICAgICB0aGlzLmxhc3Rba10gICAgPSB0aGlzLnByZXNzW2tdO1xyXG4gICAgICB0aGlzLnByZXNzW2tdICAgPSB0aGlzLmtleVtrXTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuZG93bltrXSA9ICh0aGlzLnByZXNzW2tdIF4gdGhpcy5sYXN0W2tdKSAmIHRoaXMucHJlc3Nba107XHJcbiAgICAgIHRoaXMudXBba10gPSAodGhpcy5wcmVzc1trXSBeIHRoaXMubGFzdFtrXSkgJiB0aGlzLmxhc3Rba107XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX2tleWRvd24pIHtcclxuICAgICAgdGhpcy5mbGFyZSgna2V5ZG93bicsIHsga2V5Q29kZTogdGhpcy5fa2V5ZG93biB9KTtcclxuICAgICAgdGhpcy5fa2V5ZG93biA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fa2V5dXApIHtcclxuICAgICAgdGhpcy5mbGFyZSgna2V5dXAnLCB7IGtleUNvZGU6IHRoaXMuX2tleXVwIH0pO1xyXG4gICAgICB0aGlzLl9rZXl1cCA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fa2V5cHJlc3MpIHtcclxuICAgICAgdGhpcy5mbGFyZSgna2V5cHJlc3MnLCB7IGtleUNvZGU6IHRoaXMuX2tleXByZXNzIH0pO1xyXG4gICAgICB0aGlzLl9rZXlwcmVzcyA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44Kt44O844KS5oq844GX44Gm44GE44KL44GL44KS44OB44Kn44OD44KvXHJcbiAgICogQHBhcmFtICAge051bWJlci9TdHJpbmd9IGtleSBrZXlDb2RlIG9yIGtleU5hbWVcclxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gICDjg4Hjgqfjg4Pjgq/ntZDmnpxcclxuICAgKi9cclxuICBnZXRLZXkoa2V5KSB7XHJcbiAgICBpZiAodHlwZW9mKGtleSkgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAga2V5ID0gS2V5Ym9hcmQuS0VZX0NPREVba2V5XTtcclxuICAgIH1cclxuICAgIHJldHVybiAhIXRoaXMucHJlc3Nba2V5XSA9PT0gdHJ1ZTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICog44Kt44O844KS5oq844GX44Gf44GL44KS44OB44Kn44OD44KvXHJcbiAgICogQHBhcmFtICAge051bWJlci9TdHJpbmd9IGtleSBrZXlDb2RlIG9yIGtleU5hbWVcclxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gICDjg4Hjgqfjg4Pjgq/ntZDmnpxcclxuICAgKi9cclxuICBnZXRLZXlEb3duKGtleSkge1xyXG4gICAgaWYgKHR5cGVvZihrZXkpID09IFwic3RyaW5nXCIpIHtcclxuICAgICAga2V5ID0gS2V5Ym9hcmQuS0VZX0NPREVba2V5XTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmRvd25ba2V5XSA9PSB0cnVlO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiDjgq3jg7zjgpLpm6LjgZfjgZ/jgYvjgpLjg4Hjgqfjg4Pjgq9cclxuICAgKiBAcGFyYW0gICB7TnVtYmVyL1N0cmluZ30ga2V5IGtleUNvZGUgb3Iga2V5TmFtZVxyXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSAgIOODgeOCp+ODg+OCr+e1kOaenFxyXG4gICAqL1xyXG4gIGdldEtleVVwKGtleSkge1xyXG4gICAgaWYgKHR5cGVvZihrZXkpID09IFwic3RyaW5nXCIpIHtcclxuICAgICAga2V5ID0gS2V5Ym9hcmQuS0VZX0NPREVba2V5XTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnVwW2tleV0gPT0gdHJ1ZTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICog44Kt44O844Gu5pa55ZCR44KSIEFuZ2xlKERlZ3JlZSkg44Gn5Y+W5b6XXHJcbiAgICogQHJldHVybnMge0Jvb2xlYW59ICAg6KeS5bqmKERlZ3JlZSlcclxuICAgKi9cclxuICBnZXRLZXlBbmdsZSgpIHtcclxuICAgIHZhciBhbmdsZSA9IG51bGw7XHJcbiAgICB2YXIgYXJyb3dCaXQgPVxyXG4gICAgICAodGhpcy5nZXRLZXkoXCJsZWZ0XCIpICAgPDwgMykgfCAvLyAxMDAwXHJcbiAgICAgICh0aGlzLmdldEtleShcInVwXCIpICAgICA8PCAyKSB8IC8vIDAxMDBcclxuICAgICAgKHRoaXMuZ2V0S2V5KFwicmlnaHRcIikgIDw8IDEpIHwgLy8gMDAxMFxyXG4gICAgICAodGhpcy5nZXRLZXkoXCJkb3duXCIpKTsgICAgICAgICAvLyAwMDAxXHJcbiAgICBcclxuICAgIGlmIChhcnJvd0JpdCAhPT0gMCAmJiBLZXlib2FyZC5BUlJPV19CSVRfVE9fQU5HTEVfVEFCTEUuaGFzT3duUHJvcGVydHkoYXJyb3dCaXQpKSB7XHJcbiAgICAgIGFuZ2xlID0gS2V5Ym9hcmQuQVJST1dfQklUX1RPX0FOR0xFX1RBQkxFW2Fycm93Qml0XTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIGFuZ2xlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44Kt44O844Gu5oq844GX44Gm44GE44KL5ZCR44GN44KS5Y+W5b6XXHJcbiAgICog5q2j6KaP5YyW44GV44KM44Gm44GE44KLXHJcbiAgICovXHJcbiAgZ2V0S2V5RGlyZWN0aW9uKCkge1xyXG4gICAgdmFyIGRpcmVjdGlvbiA9IG5ldyBWZWN0b3IyKDAsIDApO1xyXG5cclxuICAgIGlmICh0aGlzLmdldEtleShcImxlZnRcIikpIHtcclxuICAgICAgZGlyZWN0aW9uLnggPSAtMTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRoaXMuZ2V0S2V5KFwicmlnaHRcIikpIHtcclxuICAgICAgZGlyZWN0aW9uLnggPSAxO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZ2V0S2V5KFwidXBcIikpIHtcclxuICAgICAgZGlyZWN0aW9uLnkgPSAtMTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRoaXMuZ2V0S2V5KFwiZG93blwiKSkge1xyXG4gICAgICBkaXJlY3Rpb24ueSA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRpcmVjdGlvbi54ICYmIGRpcmVjdGlvbi55KSB7XHJcbiAgICAgIGRpcmVjdGlvbi5kaXYoTWF0aC5TUVJUMik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRpcmVjdGlvbjtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICog44Kt44O844Gu54q25oWL44KS6Kit5a6a44GZ44KLXHJcbiAgICovXHJcbiAgc2V0S2V5KGtleSwgZmxhZykge1xyXG4gICAgaWYgKHR5cGVvZihrZXkpID09IFwic3RyaW5nXCIpIHtcclxuICAgICAga2V5ID0gS2V5Ym9hcmQuS0VZX0NPREVba2V5XTtcclxuICAgIH1cclxuICAgIHRoaXMua2V5W2tleV0gPSBmbGFnO1xyXG4gICAgXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOOCreODvOOCkuWFqOOBpumbouOBl+OBn+OBk+OBqOOBq+OBmeOCi1xyXG4gICAqL1xyXG4gIGNsZWFyS2V5KCkge1xyXG4gICAgdGhpcy5rZXkgPSB7fTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIEBzdGF0aWNcclxuICogQGVudW0gQVJST1dfQklUX1RPX0FOR0xFX1RBQkxFXHJcbiAqIOaWueWQkeOBruOCouODs+OCsOODqyBqc2R1Y2vjgafjga/mlbDlrZfjgpLjg5fjg63jg5Hjg4bjgqPjgavmjIflrprjgafjgY3jgarjgYTvvJ9cclxuICogQHByaXZhdGVcclxuICovXHJcbktleWJvYXJkLkFSUk9XX0JJVF9UT19BTkdMRV9UQUJMRSA9IHtcclxuICAvKiBAcHJvcGVydHkg5LiLICovXHJcbiAgMHgwMTogMjcwLFxyXG4gIC8qIEBwcm9wZXJ0eSDlj7MgKi9cclxuICAweDAyOiAgIDAsXHJcbiAgLyogQHByb3BlcnR5IOS4iiAqL1xyXG4gIDB4MDQ6ICA5MCxcclxuICAvKiBAcHJvcGVydHkg5bemICovXHJcbiAgMHgwODogMTgwLFxyXG5cclxuICAvKiBAcHJvcGVydHkg5Y+z5LiKICovXHJcbiAgMHgwNjogIDQ1LFxyXG4gIC8qIEBwcm9wZXJ0eSDlj7PkuIsgKi9cclxuICAweDAzOiAzMTUsXHJcbiAgLyogQHByb3BlcnR5IOW3puS4iiAqL1xyXG4gIDB4MGM6IDEzNSxcclxuICAvKiBAcHJvcGVydHkg5bem5LiLICovXHJcbiAgMHgwOTogMjI1LFxyXG5cclxuICAvLyDkuInmlrnlkJHlkIzmmYLmirzjgZflr77lv5xcclxuICAvLyDmg7PlrprlpJbjga7mk43kvZzjgaDjgYzlr77lv5zjgZfjgajjgYTjgZ/jgbvjgYbjgYznhKHpm6NcclxuICAvKiBAcHJvcGVydHkg5Y+z5LiK5bemICovXHJcbiAgMHgwZTogIDkwLFxyXG4gIC8qIEBwcm9wZXJ0eSDkuIrlt6bkuIsgKi9cclxuICAweDBkOiAxODAsXHJcbiAgLyogQHByb3BlcnR5IOW3puS4i+WPsyAqL1xyXG4gIDB4MGI6IDI3MCxcclxuICAvKiBAcHJvcGVydHkg5LiL5Y+z5LiKICovXHJcbiAgMHgwNzogICAwLFxyXG59O1xyXG5cclxuLypcclxuICogQHN0YXRpY1xyXG4gKiBAZW51bSBLRVlfQ09ERVxyXG4gKiDjgq3jg7znlarlj7dcclxuICogQHByaXZhdGVcclxuICovXHJcbktleWJvYXJkLktFWV9DT0RFID0ge1xyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiYmFja3NwYWNlXCIgOiA4LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwidGFiXCIgICAgICAgOiA5LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiZW50ZXJcIiAgICAgOiAxMyxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcInJldHVyblwiICAgIDogMTMsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJzaGlmdFwiICAgICA6IDE2LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiY3RybFwiICAgICAgOiAxNyxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImFsdFwiICAgICAgIDogMTgsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJwYXVzZVwiICAgICA6IDE5LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiY2Fwc2xvY2tcIiAgOiAyMCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImVzY2FwZVwiICAgIDogMjcsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJwYWdldXBcIiAgICA6IDMzLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwicGFnZWRvd25cIiAgOiAzNCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImVuZFwiICAgICAgIDogMzUsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJob21lXCIgICAgICA6IDM2LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwibGVmdFwiICAgICAgOiAzNyxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcInVwXCIgICAgICAgIDogMzgsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJyaWdodFwiICAgICA6IDM5LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiZG93blwiICAgICAgOiA0MCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImluc2VydFwiICAgIDogNDUsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJkZWxldGVcIiAgICA6IDQ2LFxyXG4gIFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiMFwiIDogNDgsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCIxXCIgOiA0OSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIjJcIiA6IDUwLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiM1wiIDogNTEsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCI0XCIgOiA1MixcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIjVcIiA6IDUzLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiNlwiIDogNTQsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCI3XCIgOiA1NSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIjhcIiA6IDU2LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiOVwiIDogNTcsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXHJcbiAgXCJhXCIgOiA2NSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIkFcIiA6IDY1LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiYlwiIDogNjYsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJCXCIgOiA2NixcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImNcIiA6IDY3LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiQ1wiIDogNjcsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJkXCIgOiA2OCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIkRcIiA6IDY4LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiZVwiIDogNjksXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJFXCIgOiA2OSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImZcIiA6IDcwLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiRlwiIDogNzAsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJnXCIgOiA3MSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIkdcIiA6IDcxLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiaFwiIDogNzIsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJIXCIgOiA3MixcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImlcIiA6IDczLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiSVwiIDogNzMsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJqXCIgOiA3NCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIkpcIiA6IDc0LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwia1wiIDogNzUsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJLXCIgOiA3NSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImxcIiA6IDc2LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiTFwiIDogNzYsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJtXCIgOiA3NyxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIk1cIiA6IDc3LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiblwiIDogNzgsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJOXCIgOiA3OCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIm9cIiA6IDc5LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiT1wiIDogNzksXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJwXCIgOiA4MCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIlBcIiA6IDgwLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwicVwiIDogODEsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJRXCIgOiA4MSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcInJcIiA6IDgyLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiUlwiIDogODIsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJzXCIgOiA4MyxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIlNcIiA6IDgzLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwidFwiIDogODQsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJUXCIgOiA4NCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcInVcIiA6IDg1LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiVVwiIDogODUsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJ2XCIgOiA4NixcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIlZcIiA6IDg2LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwid1wiIDogODcsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJXXCIgOiA4NyxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcInhcIiA6IDg4LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiWFwiIDogODgsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJ5XCIgOiA4OSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIllcIiA6IDg5LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwielwiIDogOTAsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJaXCIgOiA5MCxcclxuICBcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIm51bXBhZDBcIiA6IDk2LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwibnVtcGFkMVwiIDogOTcsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJudW1wYWQyXCIgOiA5OCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIm51bXBhZDNcIiA6IDk5LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwibnVtcGFkNFwiIDogMTAwLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwibnVtcGFkNVwiIDogMTAxLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwibnVtcGFkNlwiIDogMTAyLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwibnVtcGFkN1wiIDogMTAzLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwibnVtcGFkOFwiIDogMTA0LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwibnVtcGFkOVwiIDogMTA1LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwibXVsdGlwbHlcIiAgICAgIDogMTA2LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiYWRkXCIgICAgICAgICAgIDogMTA3LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwic3VidHJhY3RcIiAgICAgIDogMTA5LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiZGVjaW1hbHBvaW50XCIgIDogMTEwLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiZGl2aWRlXCIgICAgICAgIDogMTExLFxyXG5cclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImYxXCIgICAgOiAxMTIsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJmMlwiICAgIDogMTEzLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiZjNcIiAgICA6IDExNCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImY0XCIgICAgOiAxMTUsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJmNVwiICAgIDogMTE2LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiZjZcIiAgICA6IDExNyxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImY3XCIgICAgOiAxMTgsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJmOFwiICAgIDogMTE5LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiZjlcIiAgICA6IDEyMCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImYxMFwiICAgOiAxMjEsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJmMTFcIiAgIDogMTIyLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiZjEyXCIgICA6IDEyMyxcclxuICBcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIm51bWxvY2tcIiAgIDogMTQ0LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwic2Nyb2xsbG9ja1wiOiAxNDUsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJzZW1pY29sb25cIiA6IDE4NixcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImVxdWFsc2lnblwiIDogMTg3LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiY29tbWFcIiAgICAgOiAxODgsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJkYXNoXCIgICAgICA6IDE4OSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcInBlcmlvZFwiICAgIDogMTkwLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiZm9yd2FyZCBzbGFzaFwiIDogMTkxLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiL1wiOiAxOTEsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJncmF2ZSBhY2NlbnRcIiAgOiAxOTIsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJvcGVuIGJyYWNrZXRcIiAgOiAyMTksXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJiYWNrIHNsYXNoXCIgICAgOiAyMjAsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJjbG9zZSBicmFja2V0XCIgIDogMjIxLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwic2luZ2xlIHF1b3RlXCIgIDogMjIyLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwic3BhY2VcIiAgICAgICAgIDogMzJcclxuXHJcbn07XG5cbi8qKlxyXG4gKiBNb3VzZUV2ZW50L1RvdWNo5ouh5by1XHJcbiAqIEBtZXRob2QgICAgcG9pbnRYXHJcbiAqIOODnuOCpuOCueOBrljluqfmqJkuXHJcbiAqL1xyXG52YXIgcG9pbnRYID0ge1xyXG4gIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jbGllbnRYIC0gdGhpcy50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogTW91c2VFdmVudC9Ub3VjaOaLoeW8tVxyXG4gKiBAbWV0aG9kICAgIHBvaW50WFxyXG4gKiDjg57jgqbjgrnjga5Y5bqn5qiZLlxyXG4gKi9cclxudmFyIHBvaW50WSA9IHtcclxuICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2xpZW50WSAtIHRoaXMudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogVG91Y2hFdmVudOaLoeW8tVxyXG4gKiBAbWV0aG9kICAgIHBvaW50WFxyXG4gKiDjgr/jg4Pjg4HjgqTjg5njg7Pjg4guXHJcbiAqL1xyXG52YXIgdG91Y2hQb2ludFggPSB7XHJcbiAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLnRvdWNoZXNbMF0uY2xpZW50WCAtIHRoaXMudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbiAgICAvLyByZXR1cm4gdGhpcy50b3VjaGVzWzBdLnBhZ2VYIC0gdGhpcy50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCAtIHRtLmdsb2JhbC5zY3JvbGxYO1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBUb3VjaEV2ZW505ouh5by1XHJcbiAqIEBtZXRob2QgICAgcG9pbnRZXHJcbiAqIOOCv+ODg+ODgeOCpOODmeODs+ODiC5cclxuICovXHJcbnZhciB0b3VjaFBvaW50WSA9IHtcclxuICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG91Y2hlc1swXS5jbGllbnRZIC0gdGhpcy50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG4gICAgLy8gcmV0dXJuIHRoaXMudG91Y2hlc1swXS5wYWdlWSAtIHRoaXMudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIHRtLmdsb2JhbC5zY3JvbGxZO1xyXG4gIH1cclxufTtcclxuXHJcblxyXG4vLyA7KGZ1bmN0aW9uKCkge1xyXG5cclxuICAvLyBpZiAoIXBoaW5hLmdsb2JhbC5FdmVudCkgcmV0dXJuIDtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNsYXNzIGdsb2JhbC5FdmVudFxyXG4gICAqIOaXouWtmOOBrkV2ZW5044Kq44OW44K444Kn44Kv44OI5ouh5by1XHJcbiAgICovXHJcbiAgICBcclxuICAvLyAvKipcclxuICAvLyAgKiBAbWV0aG9kIHN0b3BcclxuICAvLyAgKiDjgqTjg5njg7Pjg4jjga7jg4fjg5Xjgqnjg6vjg4jlh6bnkIYgJiDkvJ3pgZTjgpLmraLjgoHjgotcclxuICAvLyAgKi9cclxuICAvLyBFdmVudC5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKCkge1xyXG4gIC8vICAgLy8g44Kk44OZ44Oz44OI44Kt44Oj44Oz44K744OrXHJcbiAgLy8gICB0aGlzLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgLy8gICAvLyDjgqTjg5njg7Pjg4jkvJ3pgZTjgpLmraLjgoHjgotcclxuICAvLyAgIHRoaXMuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgLy8gfTtcclxuXHJcbi8vIH0pKCk7XHJcblxyXG5cclxuLy8gKGZ1bmN0aW9uKCkge1xyXG5cclxuLy8gICBpZiAoIXBoaW5hLmdsb2JhbC5Nb3VzZUV2ZW50KSByZXR1cm4gO1xyXG5cclxuLy8gICAvKipcclxuLy8gICAgKiBAY2xhc3MgZ2xvYmFsLk1vdXNlRXZlbnRcclxuLy8gICAgKiBNb3VzZUV2ZW50IOOCr+ODqeOCuVxyXG4vLyAgICAqL1xyXG4gIFxyXG4vLyAgIC8qKlxyXG4vLyAgICAqIEBtZXRob2QgICAgcG9pbnRYXHJcbi8vICAgICog44Oe44Km44K544GuWOW6p+aomS5cclxuLy8gICAgKi9cclxuLy8gICBNb3VzZUV2ZW50LnByb3RvdHlwZS5nZXR0ZXIoXCJwb2ludFhcIiwgZnVuY3Rpb24oKSB7XHJcbi8vICAgICByZXR1cm4gdGhpcy5jbGllbnRYIC0gdGhpcy50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuLy8gICAgIC8vIHJldHVybiB0aGlzLnBhZ2VYIC0gdGhpcy50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCAtIHdpbmRvdy5zY3JvbGxYO1xyXG4vLyAgIH0pO1xyXG4gIFxyXG4vLyAgIC8qKlxyXG4vLyAgICAqIEBtZXRob2QgICAgcG9pbnRZXHJcbi8vICAgICog44Oe44Km44K544GuWeW6p+aomS5cclxuLy8gICAgKi9cclxuLy8gICBNb3VzZUV2ZW50LnByb3RvdHlwZS5nZXR0ZXIoXCJwb2ludFlcIiwgZnVuY3Rpb24oKSB7XHJcbi8vICAgICByZXR1cm4gdGhpcy5jbGllbnRZIC0gdGhpcy50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG4vLyAgICAgLy8gcmV0dXJuIHRoaXMucGFnZVkgLSB0aGlzLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSB3aW5kb3cuc2Nyb2xsWTtcclxuLy8gICB9KTtcclxuICAgIFxyXG4vLyB9KSgpO1xyXG5cclxuXHJcbi8vIChmdW5jdGlvbigpIHtcclxuICAgIFxyXG4vLyAgIGlmICghcGhpbmEuZ2xvYmFsLlRvdWNoRXZlbnQpIHJldHVybiA7XHJcbiAgXHJcbiAgXHJcbi8vICAgLyoqXHJcbi8vICAgICogQGNsYXNzIGdsb2JhbC5Ub3VjaEV2ZW50XHJcbi8vICAgICogVG91Y2hFdmVudCDjgq/jg6njgrlcclxuLy8gICAgKi9cclxuICBcclxuLy8gICAvKipcclxuLy8gICAgKiBAbWV0aG9kICAgIHBvaW50WFxyXG4vLyAgICAqIOOCv+ODg+ODgeOCpOODmeODs+ODiC5cclxuLy8gICAgKi9cclxuLy8gICBUb3VjaEV2ZW50LnByb3RvdHlwZS5nZXR0ZXIoXCJwb2ludFhcIiwgZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgIHJldHVybiB0aGlzLnRvdWNoZXNbMF0uY2xpZW50WCAtIHRoaXMudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbi8vICAgICAgIC8vIHJldHVybiB0aGlzLnRvdWNoZXNbMF0ucGFnZVggLSB0aGlzLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0IC0gdG0uZ2xvYmFsLnNjcm9sbFg7XHJcbi8vICAgfSk7XHJcbiAgXHJcbi8vICAgLyoqXHJcbi8vICAgICogQG1ldGhvZCAgICBwb2ludFlcclxuLy8gICAgKiDjgr/jg4Pjg4HjgqTjg5njg7Pjg4guXHJcbi8vICAgICovXHJcbi8vICAgVG91Y2hFdmVudC5wcm90b3R5cGUuZ2V0dGVyKFwicG9pbnRZXCIsIGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgICByZXR1cm4gdGhpcy50b3VjaGVzWzBdLmNsaWVudFkgLSB0aGlzLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcbi8vICAgICAgIC8vIHJldHVybiB0aGlzLnRvdWNoZXNbMF0ucGFnZVkgLSB0aGlzLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSB0bS5nbG9iYWwuc2Nyb2xsWTtcclxuLy8gICB9KTsgIFxyXG4gICAgXHJcbi8vIH0pKCk7XHJcblxyXG5cclxuLy8gKGZ1bmN0aW9uKCkge1xyXG4gICAgXHJcbi8vICAgaWYgKCFwaGluYS5nbG9iYWwuVG91Y2gpIHJldHVybiA7XHJcbiAgXHJcbi8vICAgLyoqXHJcbi8vICAgICogQGNsYXNzIGdsb2JhbC5Ub3VjaFxyXG4vLyAgICAqIFRvdWNoRXZlbnQg44Kv44Op44K5XHJcbi8vICAgICovXHJcbiAgXHJcbi8vICAgLyoqXHJcbi8vICAgICogQG1ldGhvZCAgICBwb2ludFhcclxuLy8gICAgKiDjgr/jg4Pjg4HjgqTjg5njg7Pjg4guXHJcbi8vICAgICovXHJcbi8vICAgVG91Y2gucHJvdG90eXBlLmdldHRlcihcInBvaW50WFwiLCBmdW5jdGlvbigpIHtcclxuLy8gICAgICAgcmV0dXJuIHRoaXMuY2xpZW50WCAtIHRoaXMudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbi8vICAgfSk7XHJcblxyXG4vLyAgIC8qKlxyXG4vLyAgICAqIEBtZXRob2QgICAgcG9pbnRZXHJcbi8vICAgICog44K/44OD44OB44Kk44OZ44Oz44OILlxyXG4vLyAgICAqL1xyXG4vLyAgIFRvdWNoLnByb3RvdHlwZS5nZXR0ZXIoXCJwb2ludFlcIiwgZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgIHJldHVybiB0aGlzLmNsaWVudFkgLSB0aGlzLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcbi8vICAgfSk7XHJcbiAgICBcclxuLy8gfSkoKTtcblxudmFyIEJVVFRPTl9NQVA7XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmlucHV0Lk1vdXNlXHJcbiAqIEBleHRlbmRzIHBoaW5hLmlucHV0LklucHV0XHJcbiAqL1xyXG5jbGFzcyBNb3VzZSBleHRlbmRzIElucHV0IHtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZG9tRWxlbWVudCkge1xyXG4gICAgc3VwZXIoZG9tRWxlbWVudCk7XHJcblxyXG4gICAgdGhpcy5pZCA9IDA7XHJcblxyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgc2VsZi5fc3RhcnQocG9pbnRYLmdldC5jYWxsKGUpLCBwb2ludFkuZ2V0LmNhbGwoZSksIDE8PGUuYnV0dG9uKTtcclxuICAgICAgLy8gc2VsZi5fc3RhcnQoZS5wb2ludFgsIGUucG9pbnRZLCAxPDxlLmJ1dHRvbik7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgc2VsZi5fZW5kKDE8PGUuYnV0dG9uKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgc2VsZi5fbW92ZShwb2ludFguZ2V0LmNhbGwoZSksIHBvaW50WS5nZXQuY2FsbChlKSk7XHJcbiAgICAgIC8vIHNlbGYuX21vdmUoZS5wb2ludFgsIGUucG9pbnRZKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIOODnuOCpuOCueOBjOOCreODo+ODs+ODkOOCueimgee0oOOBruWkluOBq+WHuuOBn+WgtOWQiOOBruWvvuW/nFxyXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgZnVuY3Rpb24oZSkgIHtcclxuICAgICAgc2VsZi5fZW5kKDEpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjg5zjgr/jg7Plj5blvpdcclxuICAgKi9cclxuICBnZXRCdXR0b24oYnV0dG9uKSB7XHJcbiAgICBpZiAodHlwZW9mKGJ1dHRvbikgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICBidXR0b24gPSBCVVRUT05fTUFQW2J1dHRvbl07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiAodGhpcy5ub3cgJiBidXR0b24pICE9IDA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjg5zjgr/jg7Pjg4Djgqbjg7Plj5blvpdcclxuICAgKi9cclxuICBnZXRCdXR0b25Eb3duKGJ1dHRvbikge1xyXG4gICAgaWYgKHR5cGVvZihidXR0b24pID09PSAnc3RyaW5nJykge1xyXG4gICAgICBidXR0b24gPSBCVVRUT05fTUFQW2J1dHRvbl07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICh0aGlzLnN0YXJ0ICYgYnV0dG9uKSAhPSAwO1xyXG4gIH1cclxuICAgICAgXHJcbiAgLyoqXHJcbiAgICog44Oc44K/44Oz44Ki44OD44OX5Y+W5b6XXHJcbiAgICovXHJcbiAgZ2V0QnV0dG9uVXAoYnV0dG9uKSB7XHJcbiAgICBpZiAodHlwZW9mKGJ1dHRvbikgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICBidXR0b24gPSBCVVRUT05fTUFQW2J1dHRvbl07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiAodGhpcy5lbmQgJiBidXR0b24pICE9IDA7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLyoqIEBzdGF0aWMgQHByb3BlcnR5ICovXHJcbk1vdXNlLkJVVFRPTl9MRUZUID0gMHgxO1xyXG4vKiogQHN0YXRpYyBAcHJvcGVydHkgKi9cclxuTW91c2UuQlVUVE9OX01JRERMRSA9IDB4MjtcclxuLyoqIEBzdGF0aWMgQHByb3BlcnR5ICovXHJcbk1vdXNlLkJVVFRPTl9SSUdIVCA9IDB4NDtcclxuXHJcbkJVVFRPTl9NQVAgPSB7XHJcbiAgXCJsZWZ0XCIgIDogTW91c2UuQlVUVE9OX0xFRlQsXHJcbiAgXCJtaWRkbGVcIjogTW91c2UuQlVUVE9OX01JRERMRSxcclxuICBcInJpZ2h0XCIgOiBNb3VzZS5CVVRUT05fUklHSFRcclxufTtcclxuXHJcbk1vdXNlLnByb3RvdHlwZS5nZXRQb2ludGluZyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5nZXRCdXR0b24oXCJsZWZ0XCIpOyB9O1xyXG5Nb3VzZS5wcm90b3R5cGUuZ2V0UG9pbnRpbmdTdGFydCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5nZXRCdXR0b25Eb3duKFwibGVmdFwiKTsgfTtcclxuTW91c2UucHJvdG90eXBlLmdldFBvaW50aW5nRW5kID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLmdldEJ1dHRvblVwKFwibGVmdFwiKTsgfTtcblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5pbnB1dC5Ub3VjaFxyXG4gKiBAZXh0ZW5kcyBwaGluYS5pbnB1dC5JbnB1dFxyXG4gKi9cclxuY2xhc3MgVG91Y2ggZXh0ZW5kcyBJbnB1dCB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQsIGlzTXVsdGkpIHtcclxuICAgIHN1cGVyKGRvbUVsZW1lbnQpO1xyXG5cclxuICAgIHRoaXMuaWQgPSBudWxsO1xyXG5cclxuICAgIGlmIChpc011bHRpID09PSB0cnVlKSB7XHJcbiAgICAgIHJldHVybiA7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHNlbGYuX3N0YXJ0KHRvdWNoUG9pbnRYLmdldC5jYWxsKGUpLCB0b3VjaFBvaW50WS5nZXQuY2FsbChlKSwgdHJ1ZSk7XHJcbiAgICAgIC8vIHNlbGYuX3N0YXJ0KGUucG9pbnRYLCBlLnBvaW50WSwgdHJ1ZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHNlbGYuX2VuZCgpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICBzZWxmLl9tb3ZlKHRvdWNoUG9pbnRYLmdldC5jYWxsKGUpLCB0b3VjaFBvaW50WS5nZXQuY2FsbChlKSk7XHJcbiAgICAgIC8vIHNlbGYuX21vdmUoZS5wb2ludFgsIGUucG9pbnRZKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44K/44OD44OB44GX44Gm44GE44KL44GL44KS5Yik5a6aXHJcbiAgICovXHJcbiAgZ2V0VG91Y2goKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ub3cgIT0gMDtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICog44K/44OD44OB6ZaL5aeL5pmC44GrIHRydWVcclxuICAgKi9cclxuICBnZXRUb3VjaFN0YXJ0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhcnQgIT0gMDtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICog44K/44OD44OB57WC5LqG5pmC44GrIHRydWVcclxuICAgKi9cclxuICBnZXRUb3VjaEVuZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmVuZCAhPSAwO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbWV0aG9kXHJcbiAqIOODneOCpOODs+ODhuOCo+ODs+OCsOeKtuaFi+WPluW+lyhtb3VzZSDjgajjga7lt67nlbDlr77nrZYpXHJcbiAqL1xyXG5Ub3VjaC5wcm90b3R5cGUuZ2V0UG9pbnRpbmcgICAgICAgID0gVG91Y2gucHJvdG90eXBlLmdldFRvdWNoO1xyXG4vKipcclxuICogQG1ldGhvZFxyXG4gKiDjg53jgqTjg7Pjg4bjgqPjg7PjgrDjgpLplovlp4vjgZfjgZ/jgYvjgpLlj5blvpcobW91c2Ug44Go44Gu5beu55Ww5a++562WKVxyXG4gKi9cclxuVG91Y2gucHJvdG90eXBlLmdldFBvaW50aW5nU3RhcnQgICA9IFRvdWNoLnByb3RvdHlwZS5nZXRUb3VjaFN0YXJ0O1xyXG4vKipcclxuICogQG1ldGhvZFxyXG4gKiDjg53jgqTjg7Pjg4bjgqPjg7PjgrDjgpLntYLkuobjgZfjgZ/jgYvjgpLlj5blvpcobW91c2Ug44Go44Gu5beu55Ww5a++562WKVxyXG4gKi9cclxuVG91Y2gucHJvdG90eXBlLmdldFBvaW50aW5nRW5kICAgICA9IFRvdWNoLnByb3RvdHlwZS5nZXRUb3VjaEVuZDtcclxuXHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmlucHV0LlRvdWNoTGlzdFxyXG4gKi9cclxuY2xhc3MgVG91Y2hMaXN0IHtcclxuXHJcbiAgY29uc3RydWN0b3IoZG9tRWxlbWVudCkge1xyXG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcclxuXHJcbiAgICB0aGlzLnRvdWNoZXMgPSBbXTtcclxuICAgIHZhciB0b3VjaE1hcCA9IHRoaXMudG91Y2hNYXAgPSB7fTtcclxuXHJcbiAgICAvLyAzMmJpdCDlkajmnJ/jgadJROOCkuODq+ODvOODl+OBleOBm+OCi1xyXG4gICAgdGhpcy5faWQgPSBuZXcgVWludDMyQXJyYXkoMSk7XHJcblxyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdmFyIGVhY2ggPSBBcnJheS5wcm90b3R5cGUuZm9yRWFjaDtcclxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24oZSkge1xyXG4gICAgICBlYWNoLmNhbGwoZS5jaGFuZ2VkVG91Y2hlcywgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIHZhciB0b3VjaCA9IHNlbGYuZ2V0RW1wdHkoKTtcclxuICAgICAgICB0b3VjaE1hcFt0LmlkZW50aWZpZXJdID0gdG91Y2g7XHJcbiAgICAgICAgdG91Y2guX3N0YXJ0KHBvaW50WC5nZXQuY2FsbCh0KSwgcG9pbnRZLmdldC5jYWxsKHQpKTtcclxuICAgICAgICAvLyB0b3VjaC5fc3RhcnQodC5wb2ludFgsIHQucG9pbnRZKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIGVhY2guY2FsbChlLmNoYW5nZWRUb3VjaGVzLCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgdmFyIGlkID0gdC5pZGVudGlmaWVyO1xyXG4gICAgICAgIHZhciB0b3VjaCA9IHRvdWNoTWFwW2lkXTtcclxuICAgICAgICB0b3VjaC5fZW5kKCk7XHJcbiAgICAgICAgZGVsZXRlIHRvdWNoTWFwW2lkXTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIGVhY2guY2FsbChlLmNoYW5nZWRUb3VjaGVzLCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgdmFyIHRvdWNoID0gdG91Y2hNYXBbdC5pZGVudGlmaWVyXTtcclxuICAgICAgICB0b3VjaC5fbW92ZShwb2ludFguZ2V0LmNhbGwodCksIHBvaW50WS5nZXQuY2FsbCh0KSk7XHJcbiAgICAgICAgLy8gdG91Y2guX21vdmUodC5wb2ludFgsIHQucG9pbnRZKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGUuc3RvcCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gaVBob25lIOOBp+OBryA25pys5oyH5Lul5LiK44K/44OD44OB44GZ44KL44Go5by35Yi255qE44Gr44GZ44G544Gm44Gu44K/44OD44OB44GM6Kej6Zmk44GV44KM44KLXHJcbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIGNvbnNvbGUud2Fybign44GT44Gu56uv5pyr44Gn44Gu5ZCM5pmC44K/44OD44OB5pWw44Gu5Yi26ZmQ44KS6LaF44GI44G+44GX44Gf44CCJyk7XHJcbiAgICAgIGVhY2guY2FsbChlLmNoYW5nZWRUb3VjaGVzLCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgdmFyIGlkID0gdC5pZGVudGlmaWVyO1xyXG4gICAgICAgIHZhciB0b3VjaCA9IHRvdWNoTWFwW2lkXTtcclxuICAgICAgICB0b3VjaC5fZW5kKCk7XHJcbiAgICAgICAgZGVsZXRlIHRvdWNoTWFwW2lkXTtcclxuICAgICAgfSk7XHJcbiAgICAgIGUuc3RvcCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRFbXB0eSgpIHtcclxuICAgIHZhciB0b3VjaCA9IG5ldyBUb3VjaCh0aGlzLmRvbUVsZW1lbnQsIHRydWUpO1xyXG4gIFxyXG4gICAgdG91Y2guaWQgPSB0aGlzLmlkO1xyXG4gICAgdGhpcy50b3VjaGVzLnB1c2godG91Y2gpO1xyXG5cclxuICAgIHJldHVybiB0b3VjaDtcclxuICB9XHJcblxyXG4gIGdldFRvdWNoKGlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b3VjaE1hcFtpZF07XHJcbiAgfVxyXG5cclxuICByZW1vdmVUb3VjaCh0b3VjaCkge1xyXG4gICAgdmFyIGkgPSB0aGlzLnRvdWNoZXMuaW5kZXhPZih0b3VjaCk7XHJcbiAgICB0aGlzLnRvdWNoZXMuc3BsaWNlKGksIDEpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgdGhpcy50b3VjaGVzLmZvckVhY2goZnVuY3Rpb24odG91Y2gpIHtcclxuICAgICAgaWYgKCF0b3VjaC5yZWxlYXNlZCkge1xyXG4gICAgICAgIHRvdWNoLnVwZGF0ZSgpO1xyXG5cclxuICAgICAgICBpZiAodG91Y2guZmxhZ3MgPT09IDApIHtcclxuICAgICAgICAgIHRvdWNoLnJlbGVhc2VkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdG91Y2gucmVsZWFzZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJlbW92ZVRvdWNoKHRvdWNoKTtcclxuICAgICAgfVxyXG5cclxuICAgIH0sIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlkKCkgeyByZXR1cm4gdGhpcy5faWRbMF0rKzsgfVxyXG5cclxufVxuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmlucHV0LkdhbWVwYWRNYW5hZ2VyXHJcbiAqIOOCsuODvOODoOODkeODg+ODieODnuODjeODvOOCuOODo+ODvC5cclxuICog44Ky44O844Og44OR44OD44OJ5o6l57aa54q25rOB44Gu55uj6KaW44CB5YCL44CF44Gu44Ky44O844Og44OR44OD44OJ44Gu5YWl5Yqb54q25oWL44Gu5pu05paw44KS6KGM44GGLlxyXG4gKiBAZXh0ZW5kcyBwaGluYS51dGlsLkV2ZW50RGlzcGF0Y2hlclxyXG4gKi9cclxuY2xhc3MgR2FtZXBhZE1hbmFnZXIgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xyXG5cclxuICAvKipcclxuICAgKiDkvZzmiJDmuIjjgb9waGluYS5pbnB1dC5HYW1lcGFk44Kq44OW44K444Kn44Kv44OI44Gu44Oq44K544OIXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0LjxudW1iZXIsIHBoaW5hLmlucHV0LkdhbWVwYWQ+fVxyXG4gICAqL1xyXG4gIC8vIGdhbWVwYWRzOiBudWxsLFxyXG5cclxuICAvKipcclxuICAgKiDkvZzmiJDmuIjjgb/jgrLjg7zjg6Djg5Hjg4Pjg4njga5pbmRleOOBruODquOCueODiFxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcltdfVxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgLy8gX2NyZWF0ZWQ6IG51bGwsXHJcblxyXG4gIC8qKlxyXG4gICAqIOODqeODg+ODl+WJjUdhbWVwYWTjga7jg6rjgrnjg4hcclxuICAgKiBAdHlwZSB7cGhpbmEuaW5wdXQuR2FtZXBhZFtdfVxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgLy8gX3Jhd2dhbWVwYWRzOiBudWxsLFxyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5nYW1lcGFkcyA9IHt9O1xyXG4gICAgdGhpcy5fY3JlYXRlZCA9IFtdO1xyXG4gICAgdGhpcy5fcmF3Z2FtZXBhZHMgPSBbXTtcclxuXHJcbiAgICB0aGlzLl9wcmV2VGltZXN0YW1wcyA9IHt9O1xyXG5cclxuICAgIHRoaXMuX2dldEdhbWVwYWRzID0gbnVsbDtcclxuICAgIHZhciBuYXZpZ2F0b3IgPSBwaGluYSQxLmdsb2JhbC5uYXZpZ2F0b3I7XHJcbiAgICBpZiAobmF2aWdhdG9yICYmIG5hdmlnYXRvci5nZXRHYW1lcGFkcykge1xyXG4gICAgICB0aGlzLl9nZXRHYW1lcGFkcyA9IG5hdmlnYXRvci5nZXRHYW1lcGFkcy5iaW5kKG5hdmlnYXRvcik7XHJcbiAgICB9IGVsc2UgaWYgKG5hdmlnYXRvciAmJiBuYXZpZ2F0b3Iud2Via2l0R2V0R2FtZXBhZHMpIHtcclxuICAgICAgdGhpcy5fZ2V0R2FtZXBhZHMgPSBuYXZpZ2F0b3Iud2Via2l0R2V0R2FtZXBhZHMuYmluZChuYXZpZ2F0b3IpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fZ2V0R2FtZXBhZHMgPSBmdW5jdGlvbigpIHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHBoaW5hJDEuZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2dhbWVwYWRjb25uZWN0ZWQnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHZhciBnYW1lcGFkID0gdGhpcy5nZXQoZS5nYW1lcGFkLmluZGV4KTtcclxuICAgICAgZ2FtZXBhZC5jb25uZWN0ZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmZsYXJlKCdjb25uZWN0ZWQnLCB7XHJcbiAgICAgICAgZ2FtZXBhZDogZ2FtZXBhZCxcclxuICAgICAgfSk7XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG5cclxuICAgIHBoaW5hJDEuZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2dhbWVwYWRkaXNjb25uZWN0ZWQnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHZhciBnYW1lcGFkID0gdGhpcy5nZXQoZS5nYW1lcGFkLmluZGV4KTtcclxuICAgICAgZ2FtZXBhZC5jb25uZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5mbGFyZSgnZGlzY29ubmVjdGVkJywge1xyXG4gICAgICAgIGdhbWVwYWQ6IGdhbWVwYWQsXHJcbiAgICAgIH0pO1xyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOaDheWgseabtOaWsOWHpueQhlxyXG4gICAqIOODnuOCpOODleODrOODvOODoOWRvOOCk+OBp+S4i+OBleOBhC5cclxuICAgKi9cclxuICB1cGRhdGUoKSB7XHJcbiAgICB0aGlzLl9wb2xsKCk7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDAsIGVuZCA9IHRoaXMuX2NyZWF0ZWQubGVuZ3RoOyBpIDwgZW5kOyBpKyspIHtcclxuICAgICAgdmFyIGluZGV4ID0gdGhpcy5fY3JlYXRlZFtpXTtcclxuICAgICAgdmFyIHJhd2dhbWVwYWQgPSB0aGlzLl9yYXdnYW1lcGFkc1tpbmRleF07XHJcblxyXG4gICAgICBpZiAoIXJhd2dhbWVwYWQpIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHJhd2dhbWVwYWQudGltZXN0YW1wICYmIChyYXdnYW1lcGFkLnRpbWVzdGFtcCA9PT0gdGhpcy5fcHJldlRpbWVzdGFtcHNbaV0pKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lcGFkc1tpbmRleF0uX3VwZGF0ZVN0YXRlRW1wdHkoKTtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5fcHJldlRpbWVzdGFtcHNbaV0gPSByYXdnYW1lcGFkLnRpbWVzdGFtcDtcclxuICAgICAgdGhpcy5nYW1lcGFkc1tpbmRleF0uX3VwZGF0ZVN0YXRlKHJhd2dhbWVwYWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5oyH5a6a44GV44KM44GfaW5kZXjjga5HYW1lcGFk44Kq44OW44K444Kn44Kv44OI44KS6L+U44GZLlxyXG4gICAqXHJcbiAgICog5pyq5L2c5oiQ44Gu5aC05ZCI44Gv5L2c5oiQ44GX44Gm6L+U44GZLlxyXG4gICAqL1xyXG4gIGdldChpbmRleCkge1xyXG4gICAgaW5kZXggPSBpbmRleCB8fCAwO1xyXG5cclxuICAgIGlmICghdGhpcy5nYW1lcGFkc1tpbmRleF0pIHtcclxuICAgICAgdGhpcy5fY3JlYXRlZC5wdXNoKGluZGV4KTtcclxuICAgICAgdGhpcy5nYW1lcGFkc1tpbmRleF0gPSBuZXcgR2FtZXBhZChpbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZ2FtZXBhZHNbaW5kZXhdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5oyH5a6a44GV44KM44GfaW5kZXjjga5HYW1lcGFk44Kq44OW44K444Kn44Kv44OI44KS56C05qOE44GZ44KLLlxyXG4gICAqIOegtOajhOOBleOCjOOBn0dhbWVwYWTjgqrjg5bjgrjjgqfjgq/jg4jjga/ku6XpmY3mm7TmlrDjgZXjgozjgarjgYQuXHJcbiAgICovXHJcbiAgZGlzcG9zZShpbmRleCkge1xyXG4gICAgaWYgKGNvbnRhaW5zLmNhbGwodGhpcy5fY3JlYXRlZCwgaW5kZXgpKSB7XHJcbiAgICAvLyBpZiAodGhpcy5fY3JlYXRlZC5jb250YWlucyhpbmRleCkpIHtcclxuICAgICAgdmFyIGdhbWVwYWQgPSB0aGlzLmdldChpbmRleCk7XHJcbiAgICAgIGRlbGV0ZSB0aGlzLmdhbWVwYWRbZ2FtZXBhZF07XHJcbiAgICAgIGVyYXNlLmNhbGwodGhpcy5fY3JlYXRlZCwgaW5kZXgpO1xyXG4gICAgICAvLyB0aGlzLl9jcmVhdGVkLmVyYXNlKGluZGV4KTtcclxuXHJcbiAgICAgIGdhbWVwYWQuY29ubmVjdGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmjIflrprjgZXjgozjgZ9pbmRleOOBruOCsuODvOODoOODkeODg+ODieOBjOaOpee2muS4reOBi+OBqeOBhuOBi+OCkui/lOOBmS5cclxuICAgKlxyXG4gICAqIEdhbWVwYWTjgqrjg5bjgrjjgqfjgq/jg4jjgYzmnKrkvZzmiJDjga7loLTlkIjjgafjgoLli5XkvZzjgZnjgosuXHJcbiAgICovXHJcbiAgaXNDb25uZWN0ZWQoaW5kZXgpIHtcclxuICAgIGluZGV4ID0gaW5kZXggfHwgMDtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fcmF3Z2FtZXBhZHNbaW5kZXhdICYmIHRoaXMuX3Jhd2dhbWVwYWRzW2luZGV4XS5jb25uZWN0ZWQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIF9wb2xsKCkge1xyXG4gICAgdmFyIHJhd0dhbWVwYWRzID0gdGhpcy5fZ2V0R2FtZXBhZHMoKTtcclxuICAgIGlmIChyYXdHYW1lcGFkcykge1xyXG4gICAgICBjbGVhci5jYWxsKHRoaXMuX3Jhd2dhbWVwYWRzKTtcclxuICAgICAgLy8gdGhpcy5fcmF3Z2FtZXBhZHMuY2xlYXIoKTtcclxuXHJcbiAgICAgIGZvciAodmFyIGkgPSAwLCBlbmQgPSByYXdHYW1lcGFkcy5sZW5ndGg7IGkgPCBlbmQ7IGkrKykge1xyXG4gICAgICAgIGlmIChyYXdHYW1lcGFkc1tpXSkge1xyXG4gICAgICAgICAgdGhpcy5fcmF3Z2FtZXBhZHMucHVzaChyYXdHYW1lcGFkc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBfc3RhdGljOiB7XHJcbiAgLy8gICAvKiog44OW44Op44Km44K244GMR2FtZXBhZCBBUEnjgavlr77lv5zjgZfjgabjgYTjgovjgYsuICovXHJcbiAgLy8gICBpc0F2YWlsYWJsZTogKGZ1bmN0aW9uKCkge1xyXG4gIC8vICAgICB2YXIgbmF2ID0gcGhpbmEuZ2xvYmFsLm5hdmlnYXRvcjtcclxuICAvLyAgICAgaWYgKCFuYXYpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgLy8gICAgIHJldHVybiAoISFuYXYuZ2V0R2FtZXBhZHMpIHx8ICghIW5hdi53ZWJraXRHZXRHYW1lcGFkcyk7XHJcbiAgLy8gICB9KSgpLFxyXG4gIC8vIH1cclxuXHJcbn1cclxuXHJcbi8vIHN0YXRpYyBwcm9wc1xyXG4vKiog44OW44Op44Km44K244GMR2FtZXBhZCBBUEnjgavlr77lv5zjgZfjgabjgYTjgovjgYsuICovXHJcbkdhbWVwYWRNYW5hZ2VyLmlzQXZhaWxhYmxlID0gKGZ1bmN0aW9uKCkge1xyXG4gIHZhciBuYXYgPSBwaGluYSQxLmdsb2JhbC5uYXZpZ2F0b3I7XHJcbiAgaWYgKCFuYXYpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgcmV0dXJuICghIW5hdi5nZXRHYW1lcGFkcykgfHwgKCEhbmF2LndlYmtpdEdldEdhbWVwYWRzKTtcclxufSkoKTtcclxuXHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmlucHV0LkdhbWVwYWRcclxuICog44Ky44O844Og44OR44OD44OJXHJcbiAqXHJcbiAqIOebtOaOpeOCpOODs+OCueOCv+ODs+OCueWMluOBm+OBmuOAgXBoaW5hLmlucHV0LkdhbWVwYWRNYW5hZ2Vy44Kq44OW44K444Kn44Kv44OI44GL44KJ5Y+W5b6X44GX44Gm5L2/55So44GZ44KLLlxyXG4gKi9cclxuY2xhc3MgR2FtZXBhZCB7XHJcbi8vIHBoaW5hLmRlZmluZShcInBoaW5hLmlucHV0LkdhbWVwYWRcIiwge1xyXG5cclxuICAvLyBpbmRleDogbnVsbCxcclxuICAvLyBidXR0b25zOiBudWxsLFxyXG4gIC8vIC8qKiBAdHlwZSB7QXJyYXkuPHBoaW5hLmdlb20uVmVjdG9yMj59ICovXHJcbiAgLy8gc3RpY2tzOiBudWxsLFxyXG5cclxuICAvLyBpZDogbnVsbCxcclxuICAvLyBjb25uZWN0ZWQ6IGZhbHNlLFxyXG4gIC8vIG1hcHBpbmc6IG51bGwsXHJcbiAgLy8gdGltZXN0YW1wOiBudWxsLFxyXG5cclxuICBjb25zdHJ1Y3RvcihpbmRleCkge1xyXG4gICAgdGhpcy5pbmRleCA9IGluZGV4IHx8IDA7XHJcblxyXG4gICAgLy8gdGhpcy5idXR0b25zID0gQXJyYXkucmFuZ2UoMCwgMTYpLm1hcChmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuYnV0dG9ucyA9IHJhbmdlLmNhbGwoW10sIDAsIDE2KS5tYXAoZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdmFsdWU6IDAsXHJcbiAgICAgICAgcHJlc3NlZDogZmFsc2UsXHJcbiAgICAgICAgbGFzdDogZmFsc2UsXHJcbiAgICAgICAgZG93bjogZmFsc2UsXHJcbiAgICAgICAgdXA6IGZhbHNlLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnN0aWNrcyA9IHJhbmdlLmNhbGwoW10sIDAsIDIpLm1hcChmdW5jdGlvbigpIHtcclxuICAgIC8vIHRoaXMuc3RpY2tzID0gQXJyYXkucmFuZ2UoMCwgMikubWFwKGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gbmV3IFZlY3RvcjIoMCwgMCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuaWQgPSBudWxsO1xyXG4gICAgdGhpcy5jb25uZWN0ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMubWFwcGluZyA9IG51bGw7XHJcbiAgICB0aGlzLnRpbWVzdGFtcCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjg5zjgr/jg7PjgYzmirzjgZXjgozjgabjgYTjgovjgYsuXHJcbiAgICovXHJcbiAgZ2V0S2V5KGJ1dHRvbikge1xyXG4gICAgaWYgKHR5cGVvZihidXR0b24pID09PSAnc3RyaW5nJykge1xyXG4gICAgICBidXR0b24gPSBHYW1lcGFkLkJVVFRPTl9DT0RFW2J1dHRvbl07XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5idXR0b25zW2J1dHRvbl0pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYnV0dG9uc1tidXR0b25dLnByZXNzZWQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjg5zjgr/jg7PjgpLmirzjgZfjgZ8uXHJcbiAgICovXHJcbiAgZ2V0S2V5RG93bihidXR0b24pIHtcclxuICAgIGlmICh0eXBlb2YoYnV0dG9uKSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgYnV0dG9uID0gR2FtZXBhZC5CVVRUT05fQ09ERVtidXR0b25dO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYnV0dG9uc1tidXR0b25dKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmJ1dHRvbnNbYnV0dG9uXS5kb3duO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44Oc44K/44Oz44KS6Zui44GX44GfLlxyXG4gICAqL1xyXG4gIGdldEtleVVwKGJ1dHRvbikge1xyXG4gICAgaWYgKHR5cGVvZihidXR0b24pID09PSAnc3RyaW5nJykge1xyXG4gICAgICBidXR0b24gPSBHYW1lcGFkLkJVVFRPTl9DT0RFW2J1dHRvbl07XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5idXR0b25zW2J1dHRvbl0pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYnV0dG9uc1tidXR0b25dLnVwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5Y2B5a2X44Kt44O844Gu5YWl5Yqb44GV44KM44Gm44GE44KL5pa55ZCRLlxyXG4gICAqL1xyXG4gIGdldEtleUFuZ2xlKCkge1xyXG4gICAgdmFyIGFuZ2xlID0gbnVsbDtcclxuICAgIHZhciBhcnJvd0JpdCA9XHJcbiAgICAgICh0aGlzLmdldEtleSgnbGVmdCcpIDw8IDMpIHwgLy8gMTAwMFxyXG4gICAgICAodGhpcy5nZXRLZXkoJ3VwJykgPDwgMikgfCAvLyAwMTAwXHJcbiAgICAgICh0aGlzLmdldEtleSgncmlnaHQnKSA8PCAxKSB8IC8vIDAwMTBcclxuICAgICAgKHRoaXMuZ2V0S2V5KCdkb3duJykpOyAvLyAwMDAxXHJcblxyXG4gICAgaWYgKGFycm93Qml0ICE9PSAwICYmIEFSUk9XX0JJVF9UT19BTkdMRV9UQUJMRS5oYXNPd25Qcm9wZXJ0eShhcnJvd0JpdCkpIHtcclxuICAgICAgYW5nbGUgPSBBUlJPV19CSVRfVE9fQU5HTEVfVEFCTEVbYXJyb3dCaXRdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhbmdsZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOWNgeWtl+OCreODvOOBruWFpeWKm+OBleOCjOOBpuOBhOOCi+aWueWQkeOCkuODmeOCr+ODiOODq+OBpy5cclxuICAgKiDmraPopo/ljJbjgZXjgozjgabjgYTjgosuXHJcbiAgICovXHJcbiAgZ2V0S2V5RGlyZWN0aW9uKCkge1xyXG4gICAgdmFyIGRpcmVjdGlvbiA9IG5ldyBWZWN0b3IyKDAsIDApO1xyXG5cclxuICAgIGlmICh0aGlzLmdldEtleSgnbGVmdCcpKSB7XHJcbiAgICAgIGRpcmVjdGlvbi54ID0gLTE7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZ2V0S2V5KCdyaWdodCcpKSB7XHJcbiAgICAgIGRpcmVjdGlvbi54ID0gMTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmdldEtleSgndXAnKSkge1xyXG4gICAgICBkaXJlY3Rpb24ueSA9IC0xO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmdldEtleSgnZG93bicpKSB7XHJcbiAgICAgIGRpcmVjdGlvbi55ID0gMTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGlyZWN0aW9uLnggJiYgZGlyZWN0aW9uLnkpIHtcclxuICAgICAgZGlyZWN0aW9uLmRpdihNYXRoLlNRUlQyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGlyZWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44K544OG44Kj44OD44Kv44Gu5YWl5Yqb44GV44KM44Gm44GE44KL5pa55ZCRLlxyXG4gICAqL1xyXG4gIGdldFN0aWNrQW5nbGUoc3RpY2tJZCkge1xyXG4gICAgc3RpY2tJZCA9IHN0aWNrSWQgfHwgMDtcclxuICAgIHZhciBzdGljayA9IHRoaXMuc3RpY2tzW3N0aWNrSWRdO1xyXG4gICAgcmV0dXJuIHN0aWNrID8gTWF0aC5hdGFuMigtc3RpY2sueSwgc3RpY2sueCkgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44K544OG44Kj44OD44Kv44Gu5YWl5Yqb44GV44KM44Gm44GE44KL5pa55ZCR44KS44OZ44Kv44OI44Or44GnLlxyXG4gICAqL1xyXG4gIGdldFN0aWNrRGlyZWN0aW9uKHN0aWNrSWQpIHtcclxuICAgIHN0aWNrSWQgPSBzdGlja0lkIHx8IDA7XHJcbiAgICByZXR1cm4gdGhpcy5zdGlja3MgPyB0aGlzLnN0aWNrc1tzdGlja0lkXS5jbG9uZSgpIDogbmV3IFZlY3RvcjIoMCwgMCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIF91cGRhdGVTdGF0ZShnYW1lcGFkKSB7XHJcbiAgICB0aGlzLmlkID0gZ2FtZXBhZC5pZDtcclxuICAgIHRoaXMuY29ubmVjdGVkID0gZ2FtZXBhZC5jb25uZWN0ZWQ7XHJcbiAgICB0aGlzLm1hcHBpbmcgPSBnYW1lcGFkLm1hcHBpbmc7XHJcbiAgICB0aGlzLnRpbWVzdGFtcCA9IGdhbWVwYWQudGltZXN0YW1wO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwLCBpZW5kID0gZ2FtZXBhZC5idXR0b25zLmxlbmd0aDsgaSA8IGllbmQ7IGkrKykge1xyXG4gICAgICB0aGlzLl91cGRhdGVCdXR0b24oZ2FtZXBhZC5idXR0b25zW2ldLCBpKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKHZhciBqID0gMCwgamVuZCA9IGdhbWVwYWQuYXhlcy5sZW5ndGg7IGogPCBqZW5kOyBqICs9IDIpIHtcclxuICAgICAgdGhpcy5fdXBkYXRlU3RpY2soZ2FtZXBhZC5heGVzW2ogKyAwXSwgaiAvIDIsICd4Jyk7XHJcbiAgICAgIHRoaXMuX3VwZGF0ZVN0aWNrKGdhbWVwYWQuYXhlc1tqICsgMV0sIGogLyAyLCAneScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBfdXBkYXRlU3RhdGVFbXB0eSgpIHtcclxuICAgIGZvciAodmFyIGkgPSAwLCBpZW5kID0gdGhpcy5idXR0b25zLmxlbmd0aDsgaSA8IGllbmQ7IGkrKykge1xyXG4gICAgICB0aGlzLmJ1dHRvbnNbaV0uZG93biA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmJ1dHRvbnNbaV0udXAgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgX3VwZGF0ZUJ1dHRvbih2YWx1ZSwgYnV0dG9uSWQpIHtcclxuICAgIGlmICh0aGlzLmJ1dHRvbnNbYnV0dG9uSWRdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5idXR0b25zW2J1dHRvbklkXSA9IHtcclxuICAgICAgICB2YWx1ZTogMCxcclxuICAgICAgICBwcmVzc2VkOiBmYWxzZSxcclxuICAgICAgICBsYXN0OiBmYWxzZSxcclxuICAgICAgICBkb3duOiBmYWxzZSxcclxuICAgICAgICB1cDogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHZhciBidXR0b24gPSB0aGlzLmJ1dHRvbnNbYnV0dG9uSWRdO1xyXG5cclxuICAgIGJ1dHRvbi5sYXN0ID0gYnV0dG9uLnByZXNzZWQ7XHJcblxyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgYnV0dG9uLnZhbHVlID0gdmFsdWUudmFsdWU7XHJcbiAgICAgIGJ1dHRvbi5wcmVzc2VkID0gdmFsdWUucHJlc3NlZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJ1dHRvbi52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICBidXR0b24ucHJlc3NlZCA9IHZhbHVlID4gR2FtZXBhZC5BTkFMT0dVRV9CVVRUT05fVEhSRVNIT0xEO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbi5kb3duID0gKGJ1dHRvbi5wcmVzc2VkIF4gYnV0dG9uLmxhc3QpICYgYnV0dG9uLnByZXNzZWQ7XHJcbiAgICBidXR0b24udXAgPSAoYnV0dG9uLnByZXNzZWQgXiBidXR0b24ubGFzdCkgJiBidXR0b24ubGFzdDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgX3VwZGF0ZVN0aWNrKHZhbHVlLCBzdGlja0lkLCBheGlzTmFtZSkge1xyXG4gICAgaWYgKHRoaXMuc3RpY2tzW3N0aWNrSWRdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5zdGlja3Nbc3RpY2tJZF0gPSBuZXcgVmVjdG9yMigwLCAwKTtcclxuICAgIH1cclxuICAgIHRoaXMuc3RpY2tzW3N0aWNrSWRdW2F4aXNOYW1lXSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qKiDjg5bjg6njgqbjgrbjgYxHYW1lcGFkIEFQSeOBq+WvvuW/nOOBl+OBpuOBhOOCi+OBiy4gKi9cclxuR2FtZXBhZC5pc0F2YWlsYWJsZSA9IChmdW5jdGlvbigpIHtcclxuICB2YXIgbmF2ID0gcGhpbmEkMS5nbG9iYWwubmF2aWdhdG9yO1xyXG4gIGlmICghbmF2KSByZXR1cm4gZmFsc2U7XHJcblxyXG4gIHJldHVybiAoISFuYXYuZ2V0R2FtZXBhZHMpIHx8ICghIW5hdi53ZWJraXRHZXRHYW1lcGFkcyk7XHJcbn0pKCk7XHJcblxyXG4vKiog44Ki44OK44Ot44Kw5YWl5Yqb5a++5b+c44Gu44Oc44K/44Oz44Gu5aC05ZCI44CB44Gp44Gu56iL5bqm44G+44Gn5oq844GX6L6844KA44Gob27jgavjgarjgovjgYvjgpLooajjgZnjgZfjgY3jgYTlgKQuICovXHJcbkdhbWVwYWQuQU5BTE9HVUVfQlVUVE9OX1RIUkVTSE9MRCA9IDAuNTtcclxuXHJcbi8qKiDjg5zjgr/jg7PlkI3jgajjg5zjgr/jg7NJROOBruODnuODg+ODly4gKi9cclxuR2FtZXBhZC5CVVRUT05fQ09ERSA9IHtcclxuICAnYSc6IDAsXHJcbiAgJ2InOiAxLFxyXG4gICd4JzogMixcclxuICAneSc6IDMsXHJcblxyXG4gICdsMSc6IDQsXHJcbiAgJ3IxJzogNSxcclxuICAnbDInOiA2LFxyXG4gICdyMic6IDcsXHJcblxyXG4gICdzZWxlY3QnOiA4LFxyXG4gICdzdGFydCc6IDksXHJcblxyXG4gICdsMyc6IDEwLFxyXG4gICdyMyc6IDExLFxyXG5cclxuICAndXAnOiAxMixcclxuICAnZG93bic6IDEzLFxyXG4gICdsZWZ0JzogMTQsXHJcbiAgJ3JpZ2h0JzogMTUsXHJcblxyXG4gICdzcGVjaWFsJzogMTYsXHJcblxyXG4gICdBJzogMCxcclxuICAnQic6IDEsXHJcbiAgJ1gnOiAyLFxyXG4gICdZJzogMyxcclxuXHJcbiAgJ0wxJzogNCxcclxuICAnUjEnOiA1LFxyXG4gICdMMic6IDYsXHJcbiAgJ1IyJzogNyxcclxuXHJcbiAgJ1NFTEVDVCc6IDgsXHJcbiAgJ1NUQVJUJzogOSxcclxuXHJcbiAgJ0wzJzogMTAsXHJcbiAgJ1IzJzogMTEsXHJcblxyXG4gICdVUCc6IDEyLFxyXG4gICdET1dOJzogMTMsXHJcbiAgJ0xFRlQnOiAxNCxcclxuICAnUklHSFQnOiAxNSxcclxuXHJcbiAgJ1NQRUNJQUwnOiAxNixcclxufTtcclxuXHJcbnZhciBBUlJPV19CSVRfVE9fQU5HTEVfVEFCTEUgPSB7XHJcbiAgMHgwMDogbnVsbCxcclxuXHJcbiAgLyogQHByb3BlcnR5IOS4iyAqL1xyXG4gIDB4MDE6IDI3MCxcclxuICAvKiBAcHJvcGVydHkg5Y+zICovXHJcbiAgMHgwMjogMCxcclxuICAvKiBAcHJvcGVydHkg5LiKICovXHJcbiAgMHgwNDogOTAsXHJcbiAgLyogQHByb3BlcnR5IOW3piAqL1xyXG4gIDB4MDg6IDE4MCxcclxuXHJcbiAgLyogQHByb3BlcnR5IOWPs+S4iiAqL1xyXG4gIDB4MDY6IDQ1LFxyXG4gIC8qIEBwcm9wZXJ0eSDlj7PkuIsgKi9cclxuICAweDAzOiAzMTUsXHJcbiAgLyogQHByb3BlcnR5IOW3puS4iiAqL1xyXG4gIDB4MGM6IDEzNSxcclxuICAvKiBAcHJvcGVydHkg5bem5LiLICovXHJcbiAgMHgwOTogMjI1LFxyXG5cclxuICAvLyDkuInmlrnlkJHlkIzmmYLmirzjgZflr77lv5xcclxuICAvLyDmg7PlrprlpJbjga7mk43kvZzjgaDjgYzlr77lv5zjgZfjgajjgYTjgZ/jgbvjgYbjgYznhKHpm6NcclxuICAvKiBAcHJvcGVydHkg5Y+z5LiK5bemICovXHJcbiAgMHgwZTogOTAsXHJcbiAgLyogQHByb3BlcnR5IOS4iuW3puS4iyAqL1xyXG4gIDB4MGQ6IDE4MCxcclxuICAvKiBAcHJvcGVydHkg5bem5LiL5Y+zICovXHJcbiAgMHgwYjogMjcwLFxyXG4gIC8qIEBwcm9wZXJ0eSDkuIvlj7PkuIogKi9cclxuICAweDA3OiAwLFxyXG59O1xuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmlucHV0LkFjY2VsZXJvbWV0ZXJcclxuICog44K544Oe44O844OI44OV44Kp44Oz44Gu44K744Oz44K144O85oOF5aCxXHJcbiAqL1xyXG5jbGFzcyBBY2NlbGVyb21ldGVyIHtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSAgZ3Jhdml0eSDph43lipvjgrvjg7PjgrXjg7wgKi9cclxuICAvKiogQHByb3BlcnR5ICBhY2NlbGVyYXRpb24g5Yqg6YCf5bqm44K744Oz44K144O8ICovXHJcbiAgLyoqIEBwcm9wZXJ0eSAgcm90YXRpb24g5Zue6Lui5Yqg6YCf5bqm44K744Oz44K144O8ICovXHJcbiAgLyoqIEBwcm9wZXJ0eSAgb3JpZW50YXRpb24g44K544Oe44O844OI44OV44Kp44Oz44Gu5YK+44GNICovXHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIFxyXG4gICAgdGhpcy5ncmF2aXR5ICAgICAgICA9IG5ldyBWZWN0b3IzKDAsIDAsIDApO1xyXG4gICAgdGhpcy5hY2NlbGVyYXRpb24gICA9IG5ldyBWZWN0b3IzKDAsIDAsIDApO1xyXG4gICAgdGhpcy5yb3RhdGlvbiAgICAgICA9IG5ldyBWZWN0b3IzKDAsIDAsIDApO1xyXG4gICAgdGhpcy5vcmllbnRhdGlvbiAgICA9IG5ldyBWZWN0b3IzKDAsIDAsIDApO1xyXG5cclxuICAgIGlmIChwaGluYSQxLmlzTW9iaWxlKCkpIHtcclxuICAgICAgcGhpbmEkMS5nbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcihcImRldmljZW1vdGlvblwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgdmFyIGFjY2VsZXJhdGlvbiA9IHNlbGYuYWNjZWxlcmF0aW9uO1xyXG4gICAgICAgIHZhciBncmF2aXR5ID0gc2VsZi5ncmF2aXR5O1xyXG4gICAgICAgIHZhciByb3RhdGlvbiA9IHNlbGYucm90YXRpb247XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGUuYWNjZWxlcmF0aW9uKSB7XHJcbiAgICAgICAgICBhY2NlbGVyYXRpb24ueCA9IGUuYWNjZWxlcmF0aW9uLng7XHJcbiAgICAgICAgICBhY2NlbGVyYXRpb24ueSA9IGUuYWNjZWxlcmF0aW9uLnk7XHJcbiAgICAgICAgICBhY2NlbGVyYXRpb24ueiA9IGUuYWNjZWxlcmF0aW9uLno7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlLmFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHkpIHtcclxuICAgICAgICAgIGdyYXZpdHkueCA9IGUuYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eS54O1xyXG4gICAgICAgICAgZ3Jhdml0eS55ID0gZS5hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5Lnk7XHJcbiAgICAgICAgICBncmF2aXR5LnogPSBlLmFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHkuejtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGUucm90YXRpb25SYXRlKSB7XHJcbiAgICAgICAgICByb3RhdGlvbi54ID0gcm90YXRpb24uYmV0YSAgPSBlLnJvdGF0aW9uUmF0ZS5iZXRhO1xyXG4gICAgICAgICAgcm90YXRpb24ueSA9IHJvdGF0aW9uLmdhbW1hID0gZS5yb3RhdGlvblJhdGUuZ2FtbWE7XHJcbiAgICAgICAgICByb3RhdGlvbi56ID0gcm90YXRpb24uYWxwaGEgPSBlLnJvdGF0aW9uUmF0ZS5hbHBoYTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgcGhpbmEkMS5nbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcihcImRldmljZW9yaWVudGF0aW9uXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICB2YXIgb3JpZW50YXRpb24gPSBzZWxmLm9yaWVudGF0aW9uO1xyXG4gICAgICAgIG9yaWVudGF0aW9uLmFscGhhICAgPSBlLmFscGhhOyAgLy8geigwfjM2MClcclxuICAgICAgICBvcmllbnRhdGlvbi5iZXRhICAgID0gZS5iZXRhOyAgIC8vIHgoLTE4MH4xODApXHJcbiAgICAgICAgb3JpZW50YXRpb24uZ2FtbWEgICA9IGUuZ2FtbWE7ICAvLyB5KC05MH45MClcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmFwcC5VcGRhdGVyXHJcbiAqL1xyXG5jbGFzcyBVcGRhdGVyIHtcclxuXHJcbiAgY29uc3RydWN0b3IoYXBwKSB7XHJcbiAgICB0aGlzLmFwcCA9IGFwcDtcclxuICB9XHJcblxyXG4gIHVwZGF0ZShyb290KSB7XHJcbiAgICB0aGlzLl91cGRhdGVFbGVtZW50KHJvb3QpO1xyXG4gIH1cclxuXHJcbiAgX3VwZGF0ZUVsZW1lbnQoZWxlbWVudCkge1xyXG4gICAgdmFyIGFwcCA9IHRoaXMuYXBwO1xyXG5cclxuICAgIC8vIOabtOaWsOOBmeOCi+OBi+OCkuWIpOWumlxyXG4gICAgaWYgKGVsZW1lbnQuYXdha2UgPT09IGZhbHNlKSByZXR1cm4gO1xyXG5cclxuICAgIC8vIOOCqOODs+OCv+ODvOODleODrOODvOODoOOCpOODmeODs+ODiFxyXG4gICAgaWYgKGVsZW1lbnQuaGFzKCdlbnRlcmZyYW1lJykpIHtcclxuICAgICAgZWxlbWVudC5mbGFyZSgnZW50ZXJmcmFtZScsIHtcclxuICAgICAgICBhcHA6IHRoaXMuYXBwLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmm7TmlrBcclxuICAgIGlmIChlbGVtZW50LnVwZGF0ZSkgZWxlbWVudC51cGRhdGUoYXBwKTtcclxuXHJcbiAgICAvLyDjgr/jg4Pjg4HliKTlrppcclxuICAgIC8vIHRoaXMuX2NoZWNrUG9pbnQoZWxlbWVudCk7XHJcblxyXG4gICAgLy8g5a2Q5L6b44KS5pu05pawXHJcbiAgICB2YXIgbGVuID0gZWxlbWVudC5jaGlsZHJlbi5sZW5ndGg7XHJcbiAgICBpZiAoZWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHZhciB0ZW1wQ2hpbGRyZW4gPSBlbGVtZW50LmNoaWxkcmVuLnNsaWNlKCk7XHJcbiAgICAgIGZvciAodmFyIGk9MDsgaTxsZW47ICsraSkge1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUVsZW1lbnQodGVtcENoaWxkcmVuW2ldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2NoZWNrUG9pbnQob2JqKSB7XHJcbiAgICB0aGlzLmFwcC5wb2ludGVycy5mb3JFYWNoKGZ1bmN0aW9uKHApIHtcclxuICAgICAgaWYgKHAuaWQgIT09IG51bGwpIHtcclxuICAgICAgICB0aGlzLl9fY2hlY2tQb2ludChvYmosIHApO1xyXG4gICAgICB9XHJcbiAgICB9LCB0aGlzKTtcclxuICB9XHJcblxyXG4gIF9fY2hlY2tQb2ludChvYmosIHApIHtcclxuICAgIGlmICghb2JqLmludGVyYWN0aXZlKSByZXR1cm4gO1xyXG5cclxuICAgIHZhciBwcmV2T3ZlckZsYWcgPSBvYmouX292ZXJGbGFnc1twLmlkXTtcclxuICAgIHZhciBvdmVyRmxhZyA9IG9iai5oaXRUZXN0MihwLngsIHAueSk7XHJcbiAgICBvYmouX292ZXJGbGFnc1twLmlkXSA9IG92ZXJGbGFnO1xyXG5cclxuICAgIGlmICghcHJldk92ZXJGbGFnICYmIG92ZXJGbGFnKSB7XHJcbiAgICAgIG9iai5mbGFyZSgncG9pbnRvdmVyJywge1xyXG4gICAgICAgIHBvaW50ZXI6IHAsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHByZXZPdmVyRmxhZyAmJiAhb3ZlckZsYWcpIHtcclxuICAgICAgb2JqLmZsYXJlKCdwb2ludG91dCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvdmVyRmxhZykge1xyXG4gICAgICBpZiAocC5nZXRQb2ludGluZ1N0YXJ0KCkpIHtcclxuICAgICAgICBvYmouX3RvdWNoRmxhZ3NbcC5pZF0gPSB0cnVlO1xyXG4gICAgICAgIG9iai5mbGFyZSgncG9pbnRzdGFydCcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9iai5fdG91Y2hGbGFnc1twLmlkXSkge1xyXG4gICAgICBvYmouZmxhcmUoJ3BvaW50c3RheScpO1xyXG4gICAgICBpZiAocC5fbW92ZUZsYWcpIHtcclxuICAgICAgICBvYmouZmxhcmUoJ3BvaW50bW92ZScpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9iai5fdG91Y2hGbGFnc1twLmlkXT09PXRydWUgJiYgcC5nZXRQb2ludGluZ0VuZCgpKSB7XHJcbiAgICAgIG9iai5fdG91Y2hGbGFnc1twLmlkXSA9IGZhbHNlO1xyXG4gICAgICBvYmouZmxhcmUoJ3BvaW50ZW5kJyk7XHJcblxyXG4gICAgICBpZiAob2JqLl9vdmVyRmxhZ3NbcC5pZF0pIHtcclxuICAgICAgICBvYmouX292ZXJGbGFnc1twLmlkXSA9IGZhbHNlO1xyXG4gICAgICAgIG9iai5mbGFyZSgncG9pbnRvdXQnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5hcHAuSW50ZXJhY3RpdmVcclxuICovXHJcbmNsYXNzIEludGVyYWN0aXZlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoYXBwKSB7XHJcbiAgICB0aGlzLmFwcCA9IGFwcDtcclxuICAgIHRoaXMuX2VuYWJsZSA9IHRydWU7XHJcbiAgICB0aGlzLm11bHRpVG91Y2ggPSB0cnVlO1xyXG4gICAgdGhpcy5jdXJzb3IgPSB7XHJcbiAgICAgIG5vcm1hbDogJycsXHJcbiAgICAgIGhvdmVyOiAncG9pbnRlcicsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuX2hvbGRzID0gW107XHJcbiAgICB0aGlzLmFwcC5vbignY2hhbmdlc2NlbmUnLCBmdW5jdGlvbigpIHtcclxuICAgICAgY2xlYXIuY2FsbCh0aGlzLl9ob2xkcyk7XHJcbiAgICAgIC8vIHRoaXMuX2hvbGRzLmNsZWFyKCk7XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgZW5hYmxlKCkge1xyXG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgZGlzYWJsZSgpIHtcclxuICAgIHRoaXMuX2VuYWJsZSA9IGZhbHNlO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBjaGVjayhyb290KSB7XHJcbiAgICAvLyDjgqvjg7zjgr3jg6vjga7jgrnjgr/jgqTjg6vjgpLlj43mmKBcclxuICAgIGlmICh0aGlzLmFwcC5kb21FbGVtZW50KSB7XHJcbiAgICAgIGlmICh0aGlzLl9ob2xkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdGhpcy5hcHAuZG9tRWxlbWVudC5zdHlsZS5jdXJzb3IgPSB0aGlzLmN1cnNvci5ob3ZlcjtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLmFwcC5kb21FbGVtZW50LnN0eWxlLmN1cnNvciA9IHRoaXMuY3Vyc29yLm5vcm1hbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5fZW5hYmxlIHx8ICF0aGlzLmFwcC5wb2ludGVycykgcmV0dXJuIDtcclxuICAgIHRoaXMuX2NoZWNrRWxlbWVudChyb290KTtcclxuICB9XHJcblxyXG4gIF9jaGVja0VsZW1lbnQoZWxlbWVudCkge1xyXG4gICAgdmFyIGFwcCA9IHRoaXMuYXBwO1xyXG5cclxuICAgIC8vIOabtOaWsOOBmeOCi+OBi+OCkuWIpOWumlxyXG4gICAgaWYgKGVsZW1lbnQuYXdha2UgPT09IGZhbHNlKSByZXR1cm4gO1xyXG5cclxuICAgIC8vIOWtkOS+m+OCkuabtOaWsFxyXG4gICAgdmFyIGxlbiA9IGVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgaWYgKGVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICB2YXIgdGVtcENoaWxkcmVuID0gZWxlbWVudC5jaGlsZHJlbi5zbGljZSgpO1xyXG4gICAgICBmb3IgKHZhciBpPTA7IGk8bGVuOyArK2kpIHtcclxuICAgICAgICB0aGlzLl9jaGVja0VsZW1lbnQodGVtcENoaWxkcmVuW2ldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOOCv+ODg+ODgeWIpOWumlxyXG4gICAgdGhpcy5fY2hlY2tQb2ludChlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIF9jaGVja1BvaW50KG9iaikge1xyXG4gICAgaWYgKHRoaXMubXVsdGlUb3VjaCkge1xyXG4gICAgICB0aGlzLmFwcC5wb2ludGVycy5mb3JFYWNoKGZ1bmN0aW9uKHApIHtcclxuICAgICAgICBpZiAocC5pZCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgdGhpcy5fX2NoZWNrUG9pbnQob2JqLCBwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuX19jaGVja1BvaW50KG9iaiwgdGhpcy5hcHAucG9pbnRlcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfX2NoZWNrUG9pbnQob2JqLCBwKSB7XHJcbiAgICBpZiAoIW9iai5pbnRlcmFjdGl2ZSkgcmV0dXJuIDtcclxuXHJcbiAgICB2YXIgcHJldk92ZXJGbGFnID0gb2JqLl9vdmVyRmxhZ3NbcC5pZF07XHJcbiAgICB2YXIgb3ZlckZsYWcgPSBvYmouaGl0VGVzdChwLngsIHAueSk7XHJcbiAgICBvYmouX292ZXJGbGFnc1twLmlkXSA9IG92ZXJGbGFnO1xyXG5cclxuICAgIHZhciBlID0ge1xyXG4gICAgICBwb2ludGVyOiBwLFxyXG4gICAgICBpbnRlcmFjdGl2ZTogdGhpcyxcclxuICAgICAgb3Zlcjogb3ZlckZsYWcsXHJcbiAgICB9O1xyXG5cclxuICAgIGlmICghcHJldk92ZXJGbGFnICYmIG92ZXJGbGFnKSB7XHJcbiAgICAgIG9iai5mbGFyZSgncG9pbnRvdmVyJywgZSk7XHJcblxyXG4gICAgICBpZiAob2JqLmJvdW5kaW5nVHlwZSAmJiBvYmouYm91bmRpbmdUeXBlICE9PSAnbm9uZScpIHtcclxuICAgICAgICB0aGlzLl9ob2xkcy5wdXNoKG9iaik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChwcmV2T3ZlckZsYWcgJiYgIW92ZXJGbGFnKSB7XHJcbiAgICAgIG9iai5mbGFyZSgncG9pbnRvdXQnLCBlKTtcclxuICAgICAgLy8gdGhpcy5faG9sZHMuZXJhc2Uob2JqKTtcclxuICAgICAgZXJhc2UuY2FsbCh0aGlzLl9ob2xkcywgb2JqKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAob3ZlckZsYWcpIHtcclxuICAgICAgaWYgKHAuZ2V0UG9pbnRpbmdTdGFydCgpKSB7XHJcbiAgICAgICAgb2JqLl90b3VjaEZsYWdzW3AuaWRdID0gdHJ1ZTtcclxuICAgICAgICBvYmouZmxhcmUoJ3BvaW50c3RhcnQnLCBlKTtcclxuICAgICAgICAvLyDjgq/jg6rjg4Pjgq/jg5Xjg6njgrDjgpLnq4vjgabjgotcclxuICAgICAgICBvYmouX2NsaWNrZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9iai5fdG91Y2hGbGFnc1twLmlkXSkge1xyXG4gICAgICBvYmouZmxhcmUoJ3BvaW50c3RheScsIGUpO1xyXG4gICAgICBpZiAocC5fbW92ZUZsYWcpIHtcclxuICAgICAgICBvYmouZmxhcmUoJ3BvaW50bW92ZScsIGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9iai5fdG91Y2hGbGFnc1twLmlkXT09PXRydWUgJiYgcC5nZXRQb2ludGluZ0VuZCgpKSB7XHJcbiAgICAgIG9iai5fdG91Y2hGbGFnc1twLmlkXSA9IGZhbHNlO1xyXG4gICAgICBvYmouZmxhcmUoJ3BvaW50ZW5kJywgZSk7XHJcblxyXG4gICAgICBpZiAocGhpbmEkMS5pc01vYmlsZSgpICYmIG9iai5fb3ZlckZsYWdzW3AuaWRdKSB7XHJcbiAgICAgICAgb2JqLl9vdmVyRmxhZ3NbcC5pZF0gPSBmYWxzZTtcclxuICAgICAgICBvYmouZmxhcmUoJ3BvaW50b3V0JywgZSk7XHJcbiAgICAgICAgLy8gdGhpcy5faG9sZHMuZXJhc2Uob2JqKTtcclxuICAgICAgICBlcmFzZS5jYWxsKHRoaXMuX2hvbGRzLCBvYmopO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxuXG4vLyBpbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIi4uL2FwcC9lbGVtZW50XCJcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuYWNjZXNzb3J5LkFjY2Vzc29yeVxyXG4gKiBAZXh0ZW5kcyBwaGluYS51dGlsLkV2ZW50RGlzcGF0Y2hlclxyXG4gKi9cclxuY2xhc3MgQWNjZXNzb3J5IGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IodGFyZ2V0KSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG4gIH1cclxuXHJcbiAgc2V0VGFyZ2V0KHRhcmdldCkge1xyXG4gICAgaWYgKHRoaXMudGFyZ2V0ID09PSB0YXJnZXQpIHJldHVybiA7XHJcblxyXG4gICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGdldFRhcmdldCgpIHtcclxuICAgIHJldHVybiB0aGlzLnRhcmdldDtcclxuICB9XHJcblxyXG4gIGlzQXR0YWNoZWQoKSB7XHJcbiAgICByZXR1cm4gISF0aGlzLnRhcmdldDtcclxuICB9XHJcblxyXG4gIGF0dGFjaFRvKGVsZW1lbnQpIHtcclxuICAgIGVsZW1lbnQuYXR0YWNoKHRoaXMpO1xyXG4gICAgdGhpcy5zZXRUYXJnZXQoZWxlbWVudCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHJlbW92ZSgpIHtcclxuICAgIHRoaXMudGFyZ2V0LmRldGFjaCh0aGlzKTtcclxuICAgIHRoaXMudGFyZ2V0ID0gbnVsbDtcclxuICB9XHJcblxyXG59XHJcblxyXG4vLyBFbGVtZW505YG044Gn5ouh5by1XHJcbi8vIHBoaW5hLmFwcC5FbGVtZW50LnByb3RvdHlwZS4kbWV0aG9kKCdhdHRhY2gnLCBmdW5jdGlvbihhY2Nlc3NvcnkpIHtcclxuLy8gICBpZiAoIXRoaXMuYWNjZXNzb3JpZXMpIHtcclxuLy8gICAgIHRoaXMuYWNjZXNzb3JpZXMgPSBbXTtcclxuLy8gICAgIHRoaXMub24oJ2VudGVyZnJhbWUnLCBmdW5jdGlvbihlKSB7XHJcbi8vICAgICAgIHRoaXMuYWNjZXNzb3JpZXMuZWFjaChmdW5jdGlvbihhY2Nlc3NvcnkpIHtcclxuLy8gICAgICAgICBhY2Nlc3NvcnkudXBkYXRlICYmIGFjY2Vzc29yeS51cGRhdGUoZS5hcHApO1xyXG4vLyAgICAgICB9KTtcclxuLy8gICAgIH0pO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgdGhpcy5hY2Nlc3Nvcmllcy5wdXNoKGFjY2Vzc29yeSk7XHJcbi8vICAgYWNjZXNzb3J5LnNldFRhcmdldCh0aGlzKTtcclxuLy8gICBhY2Nlc3NvcnkuZmxhcmUoJ2F0dGFjaGVkJyk7XHJcblxyXG4vLyAgIHJldHVybiB0aGlzO1xyXG4vLyB9KTtcclxuXHJcbi8vIHBoaW5hLmFwcC5FbGVtZW50LnByb3RvdHlwZS4kbWV0aG9kKCdkZXRhY2gnLCBmdW5jdGlvbihhY2Nlc3NvcnkpIHtcclxuLy8gICBpZiAodGhpcy5hY2Nlc3Nvcmllcykge1xyXG4vLyAgICAgdGhpcy5hY2Nlc3Nvcmllcy5lcmFzZShhY2Nlc3NvcnkpO1xyXG4vLyAgICAgYWNjZXNzb3J5LnNldFRhcmdldChudWxsKTtcclxuLy8gICAgIGFjY2Vzc29yeS5mbGFyZSgnZGV0YWNoZWQnKTtcclxuLy8gICB9XHJcblxyXG4vLyAgIHJldHVybiB0aGlzO1xyXG4vLyB9KTtcblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5hY2Nlc3NvcnkuVHdlZW5lclxyXG4gKiAjIFR3ZWVuZXJcclxuICogVHdlZW5lcuOBr+OCquODluOCuOOCp+OCr+ODiOOBruODl+ODreODkeODhuOCo+OBq+WvvuOBl+OBpuOAgVxyXG4gKiBUd2VlbuOCouODi+ODoeODvOOCt+ODp+ODs+OBruWKueaenOOCkuS4juOBiOOCi+OCr+ODqeOCueOBp+OBmeOAgiAgXHJcbiAqIOS4u+OBqyB7QGxpbmsgcGhpbmEuYXBwLkVsZW1lbnR9IOOBqOOBneOBruOCteODluOCr+ODqeOCueOBp+S9v+eUqOOBleOCjOOBvuOBmeOAglxyXG4gKiBAZXh0ZW5kcyBwaGluYS5hY2Nlc3NvcnkuQWNjZXNzb3J5XHJcbiAqL1xyXG5jbGFzcyBUd2VlbmVyIGV4dGVuZHMgQWNjZXNzb3J5IHtcclxuXHJcbiAgLyoqXHJcbiAgICog44Ki44OL44Oh44O844K344On44Oz44KS5pu05paw44GZ44KL5pa55rOV44KS5oyH5a6a44GX44G+44GZ44CCICBcclxuICAgKiDlpInmm7TjgZnjgovjgahkdXJhdGlvbuOBq+OCiOOCi+aZgumWk+OBrumAsuOBv+aWueOBjOWkieOCj+OCiuOBvuOBmeOAgiAgXHJcbiAgICog6Kmz44GX44GP44Gve0BsaW5rICNVUERBVEVfTUFQfeOCkuWPgueFp+OBl+OBpuOBj+OBoOOBleOBhOOAglxyXG4gICAqL1xyXG4gIC8vIHVwZGF0ZVR5cGUgPSAnZGVsdGEnXHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHRhcmdldCkge1xyXG4gICAgc3VwZXIodGFyZ2V0KTtcclxuICAgIHRoaXMudXBkYXRlVHlwZSA9ICdkZWx0YSc7XHJcblxyXG4gICAgdGhpcy5faW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgX2luaXQoKSB7XHJcbiAgICB0aGlzLl9sb29wID0gZmFsc2U7XHJcbiAgICB0aGlzLl90YXNrcyA9IFtdO1xyXG4gICAgdGhpcy5faW5kZXggPSAwO1xyXG4gICAgdGhpcy5wbGF5aW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuX3VwZGF0ZSA9IHRoaXMuX3VwZGF0ZVRhc2s7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge3BoaW5hLmFwcC5CYXNlQXBwfSBhcHBcclxuICAgKi9cclxuICB1cGRhdGUoYXBwKSB7XHJcbiAgICB0aGlzLl91cGRhdGUoYXBwKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHtAbGluayAjdXBkYXRlVHlwZX3jgpLlpInmm7TjgZfjgb7jgZnjgIJcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSDmm7TmlrDmlrnms5XjgpLooajjgZnmloflrZfliJdcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICovXHJcbiAgc2V0VXBkYXRlVHlwZSh0eXBlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVR5cGUgPSB0eXBlO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBwcm9wc+OBp+aMh+WumuOBl+OBn+WApOOBq+OBquOCi+OBvuOBp+OAgWR1cmF0aW9u44Gn5oyH5a6a44GX44Gf5pmC6ZaT44KS44GL44GR44Gm44CB44Ki44OL44Oh44O844K344On44Oz44GV44Gb44G+44GZ44CCXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzIOWkieabtOOBl+OBn+OBhOODl+ODreODkeODhuOCo+OCkmtleeOBqOOBl+OBn+OCquODluOCuOOCp+OCr+ODiFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBkdXJhdGlvbiAob3B0aW9uYWwpIOOCouODi+ODoeODvOOCt+ODp+ODs+OBq+OBi+OBkeOCi+aZgumWk1xyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBlYXNpbmcgKG9wdGlvbmFsKSBlYXNpbmcge0BsaW5rIHBoaW5hLnV0aWwuVHdlZW4jRUFTSU5HfeOCkuWPgueFp+OBl+OBpuOBj+OBoOOBleOBhOOAglxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKiBcclxuICAgKi9cclxuICB0byhwcm9wcywgZHVyYXRpb24sIGVhc2luZykge1xyXG4gICAgdGhpcy5fYWRkKHtcclxuICAgICAgdHlwZTogJ3R3ZWVuJyxcclxuICAgICAgbW9kZTogJ3RvJyxcclxuICAgICAgcHJvcHM6IHByb3BzLFxyXG4gICAgICBkdXJhdGlvbjogZHVyYXRpb24sXHJcbiAgICAgIGVhc2luZzogZWFzaW5nLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOOCouODi+ODoeODvOOCt+ODp+ODs+mWi+Wni+aZguOBruWApOOBqHByb3Bz44Gn5oyH5a6a44GX44Gf5YCk44KS5Yqg566X44GX44Gf5YCk44Gr44Gq44KL44G+44Gn44CBZHVyYXRpb27jgafmjIflrprjgZfjgZ/mmYLplpPjgpLjgYvjgZHjgabjgIHjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgZXjgZvjgb7jgZnjgIJcclxuICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHMg5aSJ5pu044GX44Gf44GE44OX44Ot44OR44OG44Kj44KSa2V544Go44GX44Gf44Kq44OW44K444Kn44Kv44OIXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGR1cmF0aW9uIChvcHRpb25hbCkg44Ki44OL44Oh44O844K344On44Oz44Gr44GL44GR44KL5pmC6ZaTXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGVhc2luZyAob3B0aW9uYWwpIGVhc2luZyB7QGxpbmsgcGhpbmEudXRpbC5Ud2VlbiNFQVNJTkd944KS5Y+C54Wn44GX44Gm44GP44Gg44GV44GE44CCXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqL1xyXG4gIGJ5KHByb3BzLCBkdXJhdGlvbiwgZWFzaW5nKSB7XHJcbiAgICB0aGlzLl9hZGQoe1xyXG4gICAgICB0eXBlOiAndHdlZW4nLFxyXG4gICAgICBtb2RlOiAnYnknLFxyXG4gICAgICBwcm9wczogcHJvcHMsXHJcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcclxuICAgICAgZWFzaW5nOiBlYXNpbmcsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHByb3Bz44Gn5oyH5a6a44GX44Gf5YCk44GL44KJ44Ki44OL44Oh44O844K344On44Oz6ZaL5aeL5pmC44Gu5YCk44Gr44Gq44KL44G+44Gn44CBZHVyYXRpb27jgafmjIflrprjgZfjgZ/mmYLplpPjgpLjgYvjgZHjgabjgIHjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgZXjgZvjgb7jgZnjgIJcclxuICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHMg5aSJ5pu044GX44Gf44GE44OX44Ot44OR44OG44Kj44KSa2V544Go44GX44Gf44Kq44OW44K444Kn44Kv44OIXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGR1cmF0aW9uIChvcHRpb25hbCkg44Ki44OL44Oh44O844K344On44Oz44Gr44GL44GR44KL5pmC6ZaTXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGVhc2luZyAob3B0aW9uYWwpIGVhc2luZyB7QGxpbmsgcGhpbmEudXRpbC5Ud2VlbiNFQVNJTkd944KS5Y+C54Wn44GX44Gm44GP44Gg44GV44GE44CCXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqL1xyXG4gIGZyb20ocHJvcHMsIGR1cmF0aW9uLCBlYXNpbmcpIHtcclxuICAgIHRoaXMuX2FkZCh7XHJcbiAgICAgIHR5cGU6ICd0d2VlbicsXHJcbiAgICAgIG1vZGU6ICdmcm9tJyxcclxuICAgICAgcHJvcHM6IHByb3BzLFxyXG4gICAgICBkdXJhdGlvbjogZHVyYXRpb24sXHJcbiAgICAgIGVhc2luZzogZWFzaW5nLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOaMh+WumuOBl+OBn+aZgumWk+OBjOe1jOmBjuOBmeOCi+OBvuOBp+W+heapn+OBl+OBvuOBmeOAglxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB0aW1lIHdhaXTjgZnjgovmmYLplpNcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICovXHJcbiAgd2FpdCh0aW1lKSB7XHJcbiAgICB0aGlzLl9hZGQoe1xyXG4gICAgICB0eXBlOiAnd2FpdCcsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBsaW1pdDogdGltZSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDnj77lnKjoqK3lrprjgZXjgozjgabjgYTjgovjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgYzntYLkuobjgZfjgZ/mmYLjgavlkbzjgbPlh7rjgZXjgozjgovplqLmlbDjgpLjgrvjg4Pjg4jjgZfjgb7jgZnjgIJcclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIOWRvOOBs+WHuuOBleOCjOOCi+mWouaVsFxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzZWxmIChvcHRpb25hbCkgZnVuY+WGheOBp3RoaXPjgavjgZfjgZ/jgYTjgqrjg5bjgrjjgqfjgq/jg4jjgIJcclxuICAgKiBAcGFyYW0ge09iamVjdFtdfSBhcmdzIChvcHRpb25hbCkgZnVuY+OBruW8leaVsOOBq+OBl+OBn+OBhOWApFxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKi9cclxuICBjYWxsKGZ1bmMsIHNlbGYsIGFyZ3MpIHtcclxuICAgIHRoaXMuX2FkZCh7XHJcbiAgICAgIHR5cGU6ICdjYWxsJyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGZ1bmM6IGZ1bmMsXHJcbiAgICAgICAgc2VsZjogc2VsZiB8fCB0aGlzLFxyXG4gICAgICAgIGFyZ3M6IGFyZ3MsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog54++5Zyo6Kit5a6a44GV44KM44Gm44GE44KL44Ki44OL44Oh44O844K344On44Oz44GM57WC5LqG44GX44Gf5pmC44Gr44OX44Ot44OR44OG44Kj44KS44K744OD44OI44GX44G+44GZ44CCICBcclxuICAgKiDnrKzkuIDlvJXmlbDjgavjgqrjg5bjgrjjgqfjgq/jg4jjgpLjgrvjg4Pjg4jjgZnjgovjgZPjgajjgoLjgafjgY3jgb7jgZnjgIJcclxuICAgKiBAcGFyYW0ge1N0cmluZyB8IE9iamVjdH0ga2V5IHZhbHVl44KS44K744OD44OI44GZ44KL44OX44Ot44OR44OG44Kj5ZCN44GL44CB5aSJ5pu044GX44Gf44GE44OX44Ot44OR44OG44Kj44KSa2V544Go44GX44Gf44Kq44OW44K444Kn44Kv44OI44CCXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIChvcHRpb25hbCkg44K744OD44OI44GZ44KL5YCkXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqL1xyXG4gIHNldChrZXksIHZhbHVlKSB7XHJcbiAgICB2YXIgdmFsdWVzID0gbnVsbDtcclxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09IDIpIHtcclxuICAgICAgdmFsdWVzID0ge307XHJcbiAgICAgIHZhbHVlc1trZXldID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdmFsdWVzID0ga2V5O1xyXG4gICAgfVxyXG4gICAgdGhpcy5fdGFza3MucHVzaCh7XHJcbiAgICAgIHR5cGU6IFwic2V0XCIsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB2YWx1ZXM6IHZhbHVlc1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHgsIHnjgavlr77jgZfjgabjgIEge0BsaW5rICN0b30g44Gu5Yem55CG44KS6KGM44GE44G+44GZ44CCXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHhcclxuICAgKiBAcGFyYW0ge051bWJlcn0geVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBkdXJhdGlvbiAob3B0aW9uYWwpIOOCouODi+ODoeODvOOCt+ODp+ODs+OBq+OBi+OBkeOCi+aZgumWk1xyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBlYXNpbmcgKG9wdGlvbmFsKSBlYXNpbmcge0BsaW5rIHBoaW5hLnV0aWwuVHdlZW4jRUFTSU5HfeOCkuWPgueFp+OBl+OBpuOBj+OBoOOBleOBhOOAglxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKi9cclxuICBtb3ZlVG8oeCwgeSwgZHVyYXRpb24sIGVhc2luZykge1xyXG4gICAgcmV0dXJuIHRoaXMudG8oeyB4OiB4LCB5OiB5IH0sIGR1cmF0aW9uLCBlYXNpbmcpO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiB4LCB544Gr5a++44GX44Gm44CBIHtAbGluayAjYnl9IOOBruWHpueQhuOCkuihjOOBhOOBvuOBmeOAglxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4XHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHlcclxuICAgKiBAcGFyYW0ge051bWJlcn0gZHVyYXRpb24gKG9wdGlvbmFsKSDjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgavjgYvjgZHjgovmmYLplpNcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gZWFzaW5nIChvcHRpb25hbCkgZWFzaW5nIHtAbGluayBwaGluYS51dGlsLlR3ZWVuI0VBU0lOR33jgpLlj4LnhafjgZfjgabjgY/jgaDjgZXjgYTjgIJcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICovXHJcbiAgbW92ZUJ5KHgsIHksIGR1cmF0aW9uLCBlYXNpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmJ5KHsgeDogeCwgeTogeSB9LCBkdXJhdGlvbiwgZWFzaW5nKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJvdGF0aW9u44Gr5a++44GX44Gm44CBIHtAbGluayAjdG99IOOBruWHpueQhuOCkuihjOOBhOOBvuOBmeOAglxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByb3RhdGlvblxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBkdXJhdGlvbiAob3B0aW9uYWwpIOOCouODi+ODoeODvOOCt+ODp+ODs+OBq+OBi+OBkeOCi+aZgumWk1xyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBlYXNpbmcgKG9wdGlvbmFsKSBlYXNpbmcge0BsaW5rIHBoaW5hLnV0aWwuVHdlZW4jRUFTSU5HfeOCkuWPgueFp+OBl+OBpuOBj+OBoOOBleOBhOOAglxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKi9cclxuICByb3RhdGVUbyhyb3RhdGlvbiwgZHVyYXRpb24sIGVhc2luZykge1xyXG4gICAgcmV0dXJuIHRoaXMudG8oeyByb3RhdGlvbjogcm90YXRpb24gfSwgZHVyYXRpb24sIGVhc2luZyk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIHJvdGF0aW9u44Gr5a++44GX44Gm44CBIHtAbGluayAjYnl9IOOBruWHpueQhuOCkuihjOOBhOOBvuOBmeOAglxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByb3RhdGlvblxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBkdXJhdGlvbiAob3B0aW9uYWwpIOOCouODi+ODoeODvOOCt+ODp+ODs+OBq+OBi+OBkeOCi+aZgumWk1xyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBlYXNpbmcgKG9wdGlvbmFsKSBlYXNpbmcge0BsaW5rIHBoaW5hLnV0aWwuVHdlZW4jRUFTSU5HfeOCkuWPgueFp+OBl+OBpuOBj+OBoOOBleOBhOOAglxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKi9cclxuICByb3RhdGVCeShyb3RhdGlvbiwgZHVyYXRpb24sIGVhc2luZykge1xyXG4gICAgcmV0dXJuIHRoaXMuYnkoeyByb3RhdGlvbjogcm90YXRpb24gfSwgZHVyYXRpb24sIGVhc2luZyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBzY2FsZVgsIHNjYWxlWeOBq+WvvuOBl+OBpiB7QGxpbmsgI3RvfSDjga7lh6bnkIbjgpLooYzjgYTjgb7jgZnjgIJcclxuICAgKiBAcGFyYW0ge051bWJlcn0gc2NhbGUgc2NhbGVY44Goc2NhbGVZ44Gr6Kit5a6a44GZ44KL5YCkXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGR1cmF0aW9uIChvcHRpb25hbCkg44Ki44OL44Oh44O844K344On44Oz44Gr44GL44GR44KL5pmC6ZaTXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGVhc2luZyAob3B0aW9uYWwpIGVhc2luZyB7QGxpbmsgcGhpbmEudXRpbC5Ud2VlbiNFQVNJTkd944KS5Y+C54Wn44GX44Gm44GP44Gg44GV44GE44CCXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqL1xyXG4gIHNjYWxlVG8oc2NhbGUsIGR1cmF0aW9uLCBlYXNpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLnRvKHsgc2NhbGVYOiBzY2FsZSwgc2NhbGVZOiBzY2FsZSB9LCBkdXJhdGlvbiwgZWFzaW5nKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogc2NhbGVYLCBzY2FsZVnjgavlr77jgZfjgaYge0BsaW5rICNieX0g44Gu5Yem55CG44KS6KGM44GE44G+44GZ44CCXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxlIHNjYWxlWOOBqHNjYWxlWeOBq+ioreWumuOBmeOCi+WApFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBkdXJhdGlvbiAob3B0aW9uYWwpIOOCouODi+ODoeODvOOCt+ODp+ODs+OBq+OBi+OBkeOCi+aZgumWk1xyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBlYXNpbmcgKG9wdGlvbmFsKSBlYXNpbmcge0BsaW5rIHBoaW5hLnV0aWwuVHdlZW4jRUFTSU5HfeOCkuWPgueFp+OBl+OBpuOBj+OBoOOBleOBhOOAglxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKi9cclxuICBzY2FsZUJ5KHNjYWxlLCBkdXJhdGlvbiwgZWFzaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ieSh7IHNjYWxlWDogc2NhbGUsIHNjYWxlWTogc2NhbGUgfSwgZHVyYXRpb24sIGVhc2luZyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBhbHBoYeOBq+WvvuOBl+OBpiB7QGxpbmsgI3RvfSDjga7lh6bnkIbjgpLooYzjgYTjgb7jgZnjgIJcclxuICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgYWxwaGHjgavoqK3lrprjgZnjgovlgKRcclxuICAgKiBAcGFyYW0ge051bWJlcn0gZHVyYXRpb24gKG9wdGlvbmFsKSDjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgavjgYvjgZHjgovmmYLplpNcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gZWFzaW5nIChvcHRpb25hbCkgZWFzaW5nIHtAbGluayBwaGluYS51dGlsLlR3ZWVuI0VBU0lOR33jgpLlj4LnhafjgZfjgabjgY/jgaDjgZXjgYTjgIJcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICovXHJcbiAgZmFkZSh2YWx1ZSwgZHVyYXRpb24sIGVhc2luZykge1xyXG4gICAgcmV0dXJuIHRoaXMudG8oeyBhbHBoYTogdmFsdWUgfSwgZHVyYXRpb24sIGVhc2luZyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBhbHBoYeOCkjDjgavjgZnjgovjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgpLoqK3lrprjgZfjgb7jgZnjgIJcclxuICAgKiBAcGFyYW0ge051bWJlcn0gZHVyYXRpb24gKG9wdGlvbmFsKSDjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgavjgYvjgZHjgovmmYLplpNcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gZWFzaW5nIChvcHRpb25hbCkgZWFzaW5nIHtAbGluayBwaGluYS51dGlsLlR3ZWVuI0VBU0lOR33jgpLlj4LnhafjgZfjgabjgY/jgaDjgZXjgYTjgIJcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICovXHJcbiAgZmFkZU91dChkdXJhdGlvbiwgZWFzaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5mYWRlKDAuMCwgZHVyYXRpb24sIGVhc2luZyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBhbHBoYeOCkjHjgavjgZnjgovjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgpLoqK3lrprjgZfjgb7jgZnjgIJcclxuICAgKiBAcGFyYW0ge051bWJlcn0gZHVyYXRpb24gKG9wdGlvbmFsKSDjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgavjgYvjgZHjgovmmYLplpNcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gZWFzaW5nIChvcHRpb25hbCkgZWFzaW5nIHtAbGluayBwaGluYS51dGlsLlR3ZWVuI0VBU0lOR33jgpLlj4LnhafjgZfjgabjgY/jgaDjgZXjgYTjgIJcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICovXHJcbiAgZmFkZUluKGR1cmF0aW9uLCBlYXNpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmZhZGUoMS4wLCBkdXJhdGlvbiwgZWFzaW5nKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOOCouODi+ODoeODvOOCt+ODp+ODs+mWi+Wni1xyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKi9cclxuICBwbGF5KCkge1xyXG4gICAgdGhpcy5wbGF5aW5nID0gdHJ1ZTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44Ki44OL44Oh44O844K344On44Oz44KS5LiA5pmC5YGc5q2iXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqL1xyXG4gIHBhdXNlKCkge1xyXG4gICAgdGhpcy5wbGF5aW5nID0gZmFsc2U7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOOCouODi+ODoeODvOOCt+ODp+ODs+OCkuWBnOatouOBl+OAgeacgOWIneOBvuOBp+W3u+OBjeaIu+OBl+OBvuOBmeOAglxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKi9cclxuICBzdG9wKCkge1xyXG4gICAgdGhpcy5wbGF5aW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLnJld2luZCgpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgpLlt7vjgY3miLvjgZlcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICovXHJcbiAgcmV3aW5kKCkge1xyXG4gICAgdGhpcy5fdXBkYXRlID0gdGhpcy5fdXBkYXRlVGFzaztcclxuICAgIHRoaXMuX2luZGV4ID0gMDtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgeW95bygpIHtcclxuICAgIC8vIFRPRE86IOacgOWIneOBruWApOOBjOWIhuOBi+OCieOBquOBhOOBruOBp+WPjei7ouOBp+OBjeOBquOBhC4uLlxyXG4gICAgdGhpcy5fdXBkYXRlID0gdGhpcy5fdXBkYXRlVGFzaztcclxuICAgIHRoaXMuX2luZGV4ID0gMDtcclxuICAgIHRoaXMuX3Rhc2tzLmVhY2goZnVuY3Rpb24odGFzaykge1xyXG4gICAgICBpZiAodGFzay50eXBlID09PSAndHdlZW4nKSA7XHJcbiAgICB9KTtcclxuICAgIHRoaXMucGxheSgpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44Ki44OL44Oh44O844K344On44Oz44Or44O844OX6Kit5a6aXHJcbiAgICogQHBhcmFtIHtCb29sZWFufSBmbGFnXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqL1xyXG4gIHNldExvb3AoZmxhZykge1xyXG4gICAgdGhpcy5fbG9vcCA9IGZsYWc7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOOCouODi+ODoeODvOOCt+ODp+ODs+OCkuOCr+ODquOColxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKi9cclxuICBjbGVhcigpIHtcclxuICAgIHRoaXMuX2luaXQoKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSlNPTuW9ouW8j+OBp+OCouODi+ODoeODvOOCt+ODp+ODs+OCkuioreWumuOBl+OBvuOBmeOAglxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKiBAcGFyYW0ge09iamVjdH0ganNvblxyXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0ganNvbi5sb29wIChvcHRpb25hbCkg44Or44O844OX44GZ44KL5aC05ZCIdHJ1ZVxyXG4gICAqIEBwYXJhbSB7QXJyYXlbXX0ganNvbi50d2VlbnMg6Kit5a6a44GZ44KL44Ki44OL44Oh44O844K344On44OzXHJcbiAgICogXHJcbiAgICogYGBgXHJcbiAgICogW1xyXG4gICAqICAgW21ldGhvZCwgYXJnMSwgYXJnMiwsLF0sXHJcbiAgICogICBbJ3RvJywge3ZhbHVlOiAxMDB9LCAxMDAwLCAnc3dpbmcnXSxcclxuICAgKiAgIFsnd2FpdCcsIDEwMDBdLFxyXG4gICAqICAgWydzZXQnLCAndGV4dCcsICdFTkQnXVxyXG4gICAqIF1cclxuICAgKiBgYGBcclxuICAgKi9cclxuICBmcm9tSlNPTihqc29uKSB7XHJcbiAgICBpZiAoanNvbi5sb29wICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5zZXRMb29wKGpzb24ubG9vcCk7XHJcbiAgICB9XHJcblxyXG4gICAganNvbi50d2VlbnMuZWFjaChmdW5jdGlvbih0KSB7XHJcbiAgICAgIHQgPSB0LmNsb25lKCk7XHJcbiAgICAgIHZhciBtZXRob2QgPSB0LnNoaWZ0KCk7XHJcbiAgICAgIHRoaXNbbWV0aG9kXS5hcHBseSh0aGlzLCB0KTtcclxuICAgIH0sIHRoaXMpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgX2FkZChwYXJhbXMpIHtcclxuICAgIHRoaXMuX3Rhc2tzLnB1c2gocGFyYW1zKTtcclxuICB9XHJcblxyXG4gIF91cGRhdGVUYXNrKGFwcCkge1xyXG4gICAgaWYgKCF0aGlzLnBsYXlpbmcpIHJldHVybiA7XHJcblxyXG4gICAgdmFyIHRhc2sgPSB0aGlzLl90YXNrc1t0aGlzLl9pbmRleF07XHJcbiAgICBpZiAoIXRhc2spIHtcclxuICAgICAgaWYgKHRoaXMuX2xvb3ApIHtcclxuICAgICAgICB0aGlzLnJld2luZCgpO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZShhcHApO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMucGxheWluZyA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiA7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgKyt0aGlzLl9pbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGFzay50eXBlID09PSAndHdlZW4nKSB7XHJcbiAgICAgIC8vIHRoaXMuX3R3ZWVuID0gcGhpbmEudXRpbC5Ud2VlbigpO1xyXG4gICAgICB0aGlzLl90d2VlbiA9IG5ldyBUd2VlbigpO1xyXG5cclxuICAgICAgdmFyIGR1cmF0aW9uID0gdGFzay5kdXJhdGlvbiB8fCB0aGlzLl9nZXREZWZhdWx0RHVyYXRpb24oKTtcclxuICAgICAgaWYgKHRhc2subW9kZSA9PT0gJ3RvJykge1xyXG4gICAgICAgIHRoaXMuX3R3ZWVuLnRvKHRoaXMudGFyZ2V0LCB0YXNrLnByb3BzLCBkdXJhdGlvbiwgdGFzay5lYXNpbmcpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHRhc2subW9kZSA9PT0gJ2J5Jykge1xyXG4gICAgICAgIHRoaXMuX3R3ZWVuLmJ5KHRoaXMudGFyZ2V0LCB0YXNrLnByb3BzLCBkdXJhdGlvbiwgdGFzay5lYXNpbmcpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX3R3ZWVuLmZyb20odGhpcy50YXJnZXQsIHRhc2sucHJvcHMsIGR1cmF0aW9uLCB0YXNrLmVhc2luZyk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fdXBkYXRlID0gdGhpcy5fdXBkYXRlVHdlZW47XHJcbiAgICAgIHRoaXMuX3VwZGF0ZShhcHApO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGFzay50eXBlID09PSAnd2FpdCcpIHtcclxuICAgICAgdGhpcy5fd2FpdCA9IHtcclxuICAgICAgICB0aW1lOiAwLFxyXG4gICAgICAgIGxpbWl0OiB0YXNrLmRhdGEubGltaXQsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLl91cGRhdGUgPSB0aGlzLl91cGRhdGVXYWl0O1xyXG4gICAgICB0aGlzLl91cGRhdGUoYXBwKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRhc2sudHlwZSA9PT0gJ2NhbGwnKSB7XHJcbiAgICAgIHRhc2suZGF0YS5mdW5jLmFwcGx5KHRhc2suZGF0YS5zZWxmLCB0YXNrLmRhdGEuYXJncyk7XHJcbiAgICAgIC8vIDHjg5Xjg6zjg7zjg6DmtojosrvjgZfjgarjgYTjgojjgYblho3luLBcclxuICAgICAgdGhpcy5fdXBkYXRlKGFwcCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0YXNrLnR5cGUgPT09ICdzZXQnKSB7XHJcbiAgICAgIHRoaXMudGFyZ2V0LiRleHRlbmQodGFzay5kYXRhLnZhbHVlcyk7XHJcbiAgICAgIC8vIDHjg5Xjg6zjg7zjg6DmtojosrvjgZfjgarjgYTjgojjgYblho3luLBcclxuICAgICAgdGhpcy5fdXBkYXRlKGFwcCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfdXBkYXRlVHdlZW4oYXBwKSB7XHJcbiAgICB2YXIgdHdlZW4gPSB0aGlzLl90d2VlbjtcclxuICAgIHZhciB0aW1lID0gdGhpcy5fZ2V0VW5pdFRpbWUoYXBwKTtcclxuXHJcbiAgICB0d2Vlbi5mb3J3YXJkKHRpbWUpO1xyXG4gICAgdGhpcy5mbGFyZSgndHdlZW4nKTtcclxuXHJcbiAgICBpZiAodHdlZW4udGltZSA+PSB0d2Vlbi5kdXJhdGlvbikge1xyXG4gICAgICBkZWxldGUgdGhpcy5fdHdlZW47XHJcbiAgICAgIHRoaXMuX3R3ZWVuID0gbnVsbDtcclxuICAgICAgdGhpcy5fdXBkYXRlID0gdGhpcy5fdXBkYXRlVGFzaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF91cGRhdGVXYWl0KGFwcCkge1xyXG4gICAgdmFyIHdhaXQgPSB0aGlzLl93YWl0O1xyXG4gICAgdmFyIHRpbWUgPSB0aGlzLl9nZXRVbml0VGltZShhcHApO1xyXG4gICAgd2FpdC50aW1lICs9IHRpbWU7XHJcblxyXG4gICAgaWYgKHdhaXQudGltZSA+PSB3YWl0LmxpbWl0KSB7XHJcbiAgICAgIGRlbGV0ZSB0aGlzLl93YWl0O1xyXG4gICAgICB0aGlzLl93YWl0ID0gbnVsbDtcclxuICAgICAgdGhpcy5fdXBkYXRlID0gdGhpcy5fdXBkYXRlVGFzaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9nZXRVbml0VGltZShhcHApIHtcclxuICAgIHZhciBvYmogPSBVUERBVEVfTUFQW3RoaXMudXBkYXRlVHlwZV07XHJcbiAgICBpZiAob2JqKSB7XHJcbiAgICAgIHJldHVybiBvYmouZnVuYyhhcHApO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHJldHVybiAxMDAwIC8gYXBwLmZwcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9nZXREZWZhdWx0RHVyYXRpb24oKSB7XHJcbiAgICB2YXIgb2JqID0gVVBEQVRFX01BUFt0aGlzLnVwZGF0ZVR5cGVdO1xyXG4gICAgcmV0dXJuIG9iaiAmJiBvYmouZHVyYXRpb247XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIEBzdGF0aWNcclxuICoge0BsaW5rICN1cGRhdGVUeXBlfeOBq+ioreWumuOBmeOCi+abtOaWsOaWueazleOBruWumue+qeOBp+OBmeOAglxyXG4gKiDkuIvoqJjjga7ooajjgavlrprnvqnmuIjjgb/jga7mm7TmlrDmlrnms5XjgpJ7QGxpbmsgI3VwZGF0ZVR5cGV944Gr6Kit5a6a44GZ44KL44GT44Go44Gn44CBXHJcbiAqIOOCouODi+ODoeODvOOCt+ODp+ODs+OBruabtOaWsOaWueazleOCkuWkieabtOOBmeOCi+OBk+OBqOOBjOOBp+OBjeOBvuOBmeOAglxyXG4gKiBcclxuICogfCDmm7TmlrDmlrnms5UgfCDljZjkvY0o44OH44OV44Kp44Or44OI5YCkKSB8IDHjg5Xjg6zjg7zjg6DjgYLjgZ/jgorjga7jgqLjg4vjg6Hjg7zjgrfjg6fjg7PpgJ/luqYgfFxyXG4gKiB8LXwtfC18XHJcbiAqIHwgbm9ybWFsIHwg44Of44Oq56eSKDEwMDApIHwgYXBwLmZwc+OBq+OCiOOBo+OBpuWkieWMliB8XHJcbiAqIHwgZGVsdGEgfCDjg5/jg6rnp5IoMTAwMCkgfCDntYzpgY7mmYLplpPjgavjgojjgaPjgablpInljJYgfFxyXG4gKiB8IGZwcyB8IOODleODrOODvOODoCgzMCkgfCDlv4XjgZrlkIzjgZjpgJ/luqbjgaflpInljJYgfFxyXG4gKi9cclxudmFyIFVQREFURV9NQVAgPSBUd2VlbmVyLlVQREFURV9NQVAgPSB7XHJcbiAgbm9ybWFsOiB7XHJcbiAgICBmdW5jOiBmdW5jdGlvbihhcHApIHtcclxuICAgICAgcmV0dXJuIDEwMDAgLyBhcHAuZnBzO1xyXG4gICAgfSxcclxuICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gIH0sXHJcblxyXG4gIGRlbHRhOiB7XHJcbiAgICBmdW5jOiBmdW5jdGlvbihhcHApIHtcclxuICAgICAgcmV0dXJuIGFwcC50aWNrZXIuZGVsdGFUaW1lO1xyXG4gICAgfSxcclxuICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gIH0sXHJcblxyXG4gIGZwczoge1xyXG4gICAgZnVuYzogZnVuY3Rpb24oYXBwKSB7XHJcbiAgICAgIHJldHVybiAxO1xyXG4gICAgfSxcclxuICAgIGR1cmF0aW9uOiAzMCxcclxuICB9LFxyXG5cclxufTtcclxuXHJcbi8vIEVsZW1lbnTlgbTjgafmi6HlvLVcclxuLy8gLyoqXHJcbi8vICAqIEBtZW1iZXIgcGhpbmEuYXBwLkVsZW1lbnRcclxuLy8gICogQHByb3BlcnR5IHR3ZWVuZXJcclxuLy8gICog6Ieq6Lqr44Gr44Ki44K/44OD44OB5riI44G/44Gue0BsaW5rIHBoaW5hLmFjY2Vzc29yeS5Ud2VlbmVyfeOCquODluOCuOOCp+OCr+ODiOOAglxyXG4vLyAgKi9cclxuLy8gcGhpbmEuYXBwLkVsZW1lbnQucHJvdG90eXBlLmdldHRlcigndHdlZW5lcicsIGZ1bmN0aW9uKCkge1xyXG4vLyAgIGlmICghdGhpcy5fdHdlZW5lcikge1xyXG4vLyAgICAgdGhpcy5fdHdlZW5lciA9IHBoaW5hLmFjY2Vzc29yeS5Ud2VlbmVyKCkuYXR0YWNoVG8odGhpcyk7XHJcbi8vICAgfVxyXG4vLyAgIHJldHVybiB0aGlzLl90d2VlbmVyO1xyXG4vLyB9KTtcblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5hcHAuRWxlbWVudFxyXG4gKiBAZXh0ZW5kcyBwaGluYS51dGlsLkV2ZW50RGlzcGF0Y2hlclxyXG4gKiAjIOS4u+OBq+imgee0oOOBruimquWtkOmWouS/guOCkuaJseOBhuOCr+ODqeOCuVxyXG4gKiDkuLvjgavopqrlrZDplqLkv4LnrYnjgpLlrprnvqnjgZnjgovjgq/jg6njgrnjgafjgZnjgIJcclxuICovXHJcbmNsYXNzIEVsZW1lbnQgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkgcGFyZW50XHJcbiAgICog6Kaq6KaB57SgXHJcbiAgICovXHJcbiAgLy8gcGFyZW50ID0gbnVsbDtcclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5IGNoaWxkcmVuXHJcbiAgICog5a2Q6KaB57SgXHJcbiAgICovXHJcbiAgLy8gY2hpbGRyZW4gPSBudWxsO1xyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkgYXdha2VcclxuICAgKiDmnInlirnjgYvjganjgYbjgYtcclxuICAgKi9cclxuICAvLyBhd2FrZSA9IHRydWU7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGFkZENoaWxkXHJcbiAgICog6Ieq6Lqr44Gr5a2Q6KaB57Sg44KS6L+95Yqg44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiDoh6rouqvjgpLlrZDopoHntKDjgajjgZfjgablvJXmlbDjgafmjIflrprjgZfjgZ/opoHntKDjgavov73liqDjgZnjgovjgavjga8ge0BsaW5rICNhZGRDaGlsZFRvfSDjgpLkvb/nlKjjgZfjgabjgY/jgaDjgZXjgYTjgIJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjaGlsZCDov73liqDjgZnjgovlrZDopoHntKBcclxuICAgKi9cclxuICBhZGRDaGlsZChjaGlsZCkge1xyXG4gICAgaWYgKGNoaWxkLnBhcmVudCkgY2hpbGQucmVtb3ZlKCk7XHJcblxyXG4gICAgY2hpbGQucGFyZW50ID0gdGhpcztcclxuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCk7XHJcblxyXG4gICAgY2hpbGQuaGFzKCdhZGRlZCcpICYmIGNoaWxkLmZsYXJlKCdhZGRlZCcpO1xyXG5cclxuICAgIHJldHVybiBjaGlsZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgYWRkQ2hpbGRUb1xyXG4gICAqIOiHqui6q+OCkuWtkOimgee0oOOBqOOBl+OBpuW8leaVsOOBp+aMh+WumuOBl+OBn+imgee0oOOBq+i/veWKoOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICog6Ieq6Lqr44Gr5a2Q6KaB57Sg44KS6L+95Yqg44GZ44KL44Gr44GvIHtAbGluayAjYWRkQ2hpbGR9IOOCkuS9v+eUqOOBl+OBpuOBj+OBoOOBleOBhOOAglxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmVudCDoh6rouqvjgpLlrZDopoHntKDjgajjgZfjgabov73liqDjgZnjgovopoHntKBcclxuICAgKi9cclxuICBhZGRDaGlsZFRvKHBhcmVudCkge1xyXG4gICAgcGFyZW50LmFkZENoaWxkKHRoaXMpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBhZGRDaGlsZEF0XHJcbiAgICog6Ieq6Lqr44KS44CB5oyH5a6a44GX44Gf6KaB57Sg44Gu5a2Q6KaB57Sg44Gu5Lu75oSP44Gu6YWN5YiX44Kk44Oz44OH44OD44Kv44K544Gr6L+95Yqg44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH0gY2hpbGQg6L+95Yqg44GZ44KL5a2Q6KaB57SgXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4IOOCpOODs+ODh+ODg+OCr+OCueeVquWPt1xyXG4gICAqL1xyXG4gIGFkZENoaWxkQXQoY2hpbGQsIGluZGV4KSB7XHJcbiAgICBpZiAoY2hpbGQucGFyZW50KSBjaGlsZC5yZW1vdmUoKTtcclxuXHJcbiAgICBjaGlsZC5wYXJlbnQgPSB0aGlzO1xyXG4gICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDAsIGNoaWxkKTtcclxuXHJcbiAgICBjaGlsZC5oYXMoJ2FkZGVkJykgJiYgY2hpbGQuZmxhcmUoJ2FkZGVkJyk7XHJcblxyXG4gICAgcmV0dXJuIGNoaWxkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBnZXRDaGlsZEF0XHJcbiAgICog5oyH5a6a44GX44Gf44Kk44Oz44OH44OD44Kv44K544Gu5a2Q6KaB57Sg44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXgg44Kk44Oz44OH44OD44Kv44K555Wq5Y+3XHJcbiAgICogQHJldHVybiB7T2JqZWN0fSDmjIflrprjgZfjgZ/jgqTjg7Pjg4fjg4Pjgq/jgrnjga7lrZDopoHntKBcclxuICAgKi9cclxuICBnZXRDaGlsZEF0KGluZGV4KSB7XHJcbiAgICAvLyByZXR1cm4gdGhpcy5jaGlsZHJlbi5hdChpbmRleCk7XHJcbiAgICByZXR1cm4gYXQuY2FsbCh0aGlzLmNoaWxkcmVuLCBpbmRleCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGdldENoaWxkQnlOYW1lXHJcbiAgICog5oyH5a6a44GX44Gf5ZCN5YmN44Gu5a2Q6KaB57Sg44KS6L+U44GX44G+44GZ44CC77yI5pyq5a6f6KOF77yJXHJcbiAgICovXHJcbiAgZ2V0Q2hpbGRCeU5hbWUobmFtZSkge1xyXG4gICAgLy8gVE9ETzpcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgZ2V0Q2hpbGRJbmRleFxyXG4gICAqIOaMh+WumuOBl+OBn+WtkOimgee0oOOBruOCpOODs+ODh+ODg+OCr+OCueeVquWPt+OCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGNoaWxkIOWtkOimgee0oFxyXG4gICAqIEByZXR1cm4ge051bWJlcn0g5oyH5a6a44GX44Gf5a2Q6KaB57Sg44Gu44Kk44Oz44OH44OD44Kv44K555Wq5Y+3XHJcbiAgICovXHJcbiAgZ2V0Q2hpbGRJbmRleChjaGlsZCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4uaW5kZXhPZihjaGlsZCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGdldFBhcmVudFxyXG4gICAqIOaMh+WumuOBl+OBn+imgee0oOOBruimquimgee0oOOCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogQHJldHVybiB7T2JqZWN0fSDmjIflrprjgZfjgZ/opoHntKDjga7opqropoHntKBcclxuICAgKi9cclxuICBnZXRQYXJlbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGdldFJvb3RcclxuICAgKiDmjIflrprjgZfjgZ/opoHntKDjga7pmo7lsaTjg4Tjg6rjg7zjga7jg6vjg7zjg4jjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge09iamVjdH0g5oyH5a6a44GX44Gf6KaB57Sg44Gu6ZqO5bGk44OE44Oq44O844Gu44Or44O844OIXHJcbiAgICovXHJcbiAgZ2V0Um9vdCgpIHtcclxuICAgIHZhciBlbG0gPSB0aGlzO1xyXG4gICAgZm9yIChlbG09dGhpcy5wYXJlbnQ7IGVsbS5wYXJlbnQgIT0gbnVsbDsgZWxtID0gZWxtLnBhcmVudCkge1xyXG5cclxuICAgIH1cclxuICAgIHJldHVybiBlbG07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHJlbW92ZUNoaWxkXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIOaMh+WumuOBl+OBn+imgee0oOOCkuiHqui6q+OBruWtkOimgee0oOOBi+OCieWJiumZpOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGNoaWxkIOimgee0oFxyXG4gICAqL1xyXG4gIHJlbW92ZUNoaWxkKGNoaWxkKSB7XHJcbiAgICB2YXIgaW5kZXggPSB0aGlzLmNoaWxkcmVuLmluZGV4T2YoY2hpbGQpO1xyXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICB0aGlzLmNoaWxkcmVuLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIGNoaWxkLmhhcygncmVtb3ZlZCcpICYmIGNoaWxkLmZsYXJlKCdyZW1vdmVkJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgcmVtb3ZlXHJcbiAgICog6Ieq6Lqr44KS6Kaq6KaB57Sg44Gu5a2Q6KaB57Sg44GL44KJ5YmK6Zmk44GX44G+44GZ44CCXHJcbiAgICovXHJcbiAgcmVtb3ZlKCkge1xyXG4gICAgaWYgKCF0aGlzLnBhcmVudCkgcmV0dXJuIDtcclxuXHJcbiAgICB0aGlzLnBhcmVudC5yZW1vdmVDaGlsZCh0aGlzKTtcclxuICAgIHRoaXMucGFyZW50ID0gbnVsbDtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgaXNBd2FrZVxyXG4gICAqIOiHqui6q+OBjOacieWKueOBi+OBqeOBhuOBi+OCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogQHJldHVybiB7Qm9vbGVhbn0g5pyJ5Yq544GL44Gp44GG44GLXHJcbiAgICovXHJcbiAgaXNBd2FrZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmF3YWtlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCB3YWtlVXBcclxuICAgKiDoh6rouqvjgpLmnInlirnjgavjgZfjgb7jgZnjgIJcclxuICAgKi9cclxuICB3YWtlVXAoKSB7XHJcbiAgICB0aGlzLmF3YWtlID0gdHJ1ZTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBzbGVlcFxyXG4gICAqIOiHqui6q+OCkueEoeWKueOBq+OBl+OBvuOBmeOAglxyXG4gICAqL1xyXG4gIHNsZWVwKCkge1xyXG4gICAgdGhpcy5hd2FrZSA9IGZhbHNlO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGZyb21KU09OXHJcbiAgICogSlNPTiDlvaLlvI/jgpLkvb/jgaPjgaboh6rouqvjgavlrZDopoHntKDjgpLov73liqDjgZnjgovjgZPjgajjgYzjgafjgY3jgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgICB0aGlzLmZyb21KU09OKHtcclxuICAgKiAgICAgICAgXCJjaGlsZHJlblwiOiB7XHJcbiAgICogICAgICAgICAgXCJsYWJlbFwiOiB7ICAgICAgICAgICAgICAgICAgLy/jgq3jg7zlkI3jgYzov73liqDjgZnjgovlrZDopoHntKDjga7lkI3liY3jgavjgarjgotcclxuICAgKiAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwiTGFiZWxcIiwgICAgIC8v44Kv44Op44K5XHJcbiAgICogICAgICAgICAgICBcImFyZ3VtZW50c1wiOiBbJ2hlbGxvISddLCAgLy/liJ3mnJ/ljJbmmYLjga7lvJXmlbBcclxuICAgKiAgICAgICAgICAgIFwieFwiOjMyMCwgICAgICAgICAgICAgICAgICAvL+OBneOBruS7luODl+ODreODkeODhuOCo1xyXG4gICAqICAgICAgICAgICAgXCJ5XCI6NDgwLFxyXG4gICAqICAgICAgICAgIH0sXHJcbiAgICogICAgICAgIH0sXHJcbiAgICogICAgICB9KTtcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7SlNPTn0ganNvbiBKU09OIOW9ouW8j1xyXG4gICAqL1xyXG4gIGZyb21KU09OKGpzb24pIHtcclxuXHJcbiAgICB2YXIgY3JlYXRlQ2hpbGRyZW4gPSBmdW5jdGlvbihuYW1lLCBkYXRhKSB7XHJcbiAgICAgIHZhciBhcmdzID0gZGF0YS5hcmd1bWVudHM7XHJcbiAgICAgIGFyZ3MgPSAoYXJncyBpbnN0YW5jZW9mIEFycmF5KSA/IGFyZ3MgOiBbYXJnc107XHJcblxyXG4gICAgICB2YXIgX2NsYXNzO1xyXG4gICAgICB2YXIgZWxlbWVudDtcclxuICAgICAgaWYgKHR5cGVvZiBkYXRhLmNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAvLyBpcyBwaGluYSBjbGFzc1xyXG4gICAgICAgIF9jbGFzcyA9IHBoaW5hJDEudXNpbmcoZGF0YS5jbGFzc05hbWUpO1xyXG4gICAgICAgIGVsZW1lbnQgPSBfY2xhc3MuYXBwbHkobnVsbCwgYXJncyk7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRhdGEuY2xhc3NOYW1lID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgLy8gaXMgRVMgY2xhc3NcclxuICAgICAgICAvLyDjgqTjg7Pjgrnjgr/jg7PjgrnljJbjgavjgrnjg5fjg6zjg4Pjg4nmp4vmlofjgYzlv4XopoHjgarjgZ/jgoHjgIFlczXjgrXjg53jg7zjg4jjga7loLTlkIhiYWJlbOOBjOW/heimgVxyXG4gICAgICAgIGVsZW1lbnQgPSBuZXcgZGF0YS5jbGFzc05hbWUoLi4uYXJncyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGVsZW1lbnQubmFtZSA9IG5hbWU7XHJcbiAgICAgIHRoaXNbbmFtZV0gPSBlbGVtZW50O1xyXG5cclxuICAgICAgZWxlbWVudC5mcm9tSlNPTihkYXRhKTtcclxuICAgICAgZWxlbWVudC5hZGRDaGlsZFRvKHRoaXMpO1xyXG4gICAgfS5iaW5kKHRoaXMpO1xyXG5cclxuICAgIGZvckluLmNhbGwoanNvbiwgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgLy8ganNvbi5mb3JJbihmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgIGlmIChrZXkgPT09ICdjaGlsZHJlbicpIHtcclxuICAgICAgICBmb3JJbi5jYWxsKHZhbHVlLCBmdW5jdGlvbihuYW1lLCBkYXRhKSB7XHJcbiAgICAgICAgLy8gdmFsdWUuZm9ySW4oZnVuY3Rpb24obmFtZSwgZGF0YSkge1xyXG4gICAgICAgICAgY3JlYXRlQ2hpbGRyZW4obmFtZSwgZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKGtleSAhPT0gJ3R5cGUnICYmIGtleSAhPT0gJ2NsYXNzTmFtZScpIHtcclxuICAgICAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwgdGhpcyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHRvSlNPTlxyXG4gICAqIOiHqui6q+OBruWtkOimgee0oOOCkiBKU09OIOW9ouW8j+OBp+i/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogQHJldHVybiB7SlNPTn0gSlNPTuW9ouW8j1xyXG4gICAqL1xyXG4gIHRvSlNPTigpIHtcclxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMocGhpbmEkMS51c2luZyh0aGlzLmNsYXNzTmFtZSkuZGVmYXVsdHMgfHwge30pO1xyXG5cclxuICAgIHRoaXMuX2hpZXJhcmNoaWVzLmZvckVhY2goZnVuY3Rpb24oZSkge1xyXG4gICAgICB2YXIgZCA9IGUuZGVmYXVsdHM7XHJcbiAgICAgIGlmIChkKSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoZCkuZm9yRWFjaChmdW5jdGlvbihrKSB7XHJcbiAgICAgICAgICBpZiAoa2V5cy5pbmRleE9mKGspID09PSAtMSkge1xyXG4gICAgICAgICAgICBrZXlzLnB1c2goayk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGtleXMucHVzaCgnbmFtZScsICdjbGFzc05hbWUnKTtcclxuXHJcbiAgICB2YXIganNvbiA9IHt9O1xyXG4gICAgLy8ga2V5cy5lYWNoKGZ1bmN0aW9uKGtleSkge1xyXG4gICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICBqc29uW2tleV0gPSB0aGlzW2tleV07XHJcbiAgICB9LCB0aGlzKTtcclxuXHJcbiAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuLm1hcChmdW5jdGlvbihjaGlsZCkge1xyXG4gICAgICByZXR1cm4gY2hpbGQudG9KU09OKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgIGpzb24uY2hpbGRyZW4gPSB7fTtcclxuICAgICAgLy8gY2hpbGRyZW4uZWFjaChmdW5jdGlvbihjaGlsZCwgaSkge1xyXG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkLCBpKSB7XHJcbiAgICAgICAganNvbi5jaGlsZHJlbltjaGlsZC5uYW1lIHx8IChjaGlsZC5jbGFzc05hbWUgKyAnXycgKyBpKV0gPSBjaGlsZDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGpzb247XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBhY2Nlc3NvcnnjgpLku5jkuI7jgZnjgotcclxuICAgKiBAcGFyYW0gIHtBY2Nlc3Nvcnl9IEFjY2Vzc29yeee2meaJv+OCr+ODqeOCuVxyXG4gICAqIEByZXR1cm4ge3RoaXN9XHJcbiAgICovXHJcbiAgYXR0YWNoKGFjY2Vzc29yeSkge1xyXG4gICAgaWYgKCF0aGlzLmFjY2Vzc29yaWVzKSB7XHJcbiAgICAgIHRoaXMuYWNjZXNzb3JpZXMgPSBbXTtcclxuICAgICAgdGhpcy5vbignZW50ZXJmcmFtZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICB0aGlzLmFjY2Vzc29yaWVzLmZvckVhY2goZnVuY3Rpb24oYWNjZXNzb3J5KSB7XHJcbiAgICAgICAgICBhY2Nlc3NvcnkudXBkYXRlICYmIGFjY2Vzc29yeS51cGRhdGUoZS5hcHApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFjY2Vzc29yaWVzLnB1c2goYWNjZXNzb3J5KTtcclxuICAgIGFjY2Vzc29yeS5zZXRUYXJnZXQodGhpcyk7XHJcbiAgICBhY2Nlc3NvcnkuZmxhcmUoJ2F0dGFjaGVkJyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBhY2Nlc3NvcnnjgpLliYrpmaRcclxuICAgKiBAcGFyYW0gIHtBY2Nlc3Nvcnl9IEFjY2Vzc29yeee2meaJv+OCr+ODqeOCuVxyXG4gICAqIEByZXR1cm4ge3RoaXN9XHJcbiAgICovXHJcbiAgZGV0YWNoKGFjY2Vzc29yeSkge1xyXG4gICAgaWYgKHRoaXMuYWNjZXNzb3JpZXMpIHtcclxuICAgICAgLy8gdGhpcy5hY2Nlc3Nvcmllcy5lcmFzZShhY2Nlc3NvcnkpO1xyXG4gICAgICBlcmFzZS5jYWxsKHRoaXMuYWNjZXNzb3JpZXMsIGFjY2Vzc29yeSk7XHJcbiAgICAgIGFjY2Vzc29yeS5zZXRUYXJnZXQobnVsbCk7XHJcbiAgICAgIGFjY2Vzc29yeS5mbGFyZSgnZGV0YWNoZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGdldCB0d2VlbmVyKCkge1xyXG4gICAgaWYgKCF0aGlzLl90d2VlbmVyKSB7XHJcbiAgICAgIHRoaXMuX3R3ZWVuZXIgPSBuZXcgVHdlZW5lcigpLmF0dGFjaFRvKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX3R3ZWVuZXI7XHJcbiAgfVxyXG59XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuYXBwLlNjZW5lXHJcbiAqIEBleHRlbmRzIHBoaW5hLmFwcC5FbGVtZW50XHJcbiAqL1xyXG5jbGFzcyBTY2VuZSBleHRlbmRzIEVsZW1lbnQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBleGl0KG5leHRMYWJlbCwgbmV4dEFyZ3VtZW50cykge1xyXG4gICAgaWYgKCF0aGlzLmFwcCkgcmV0dXJuIDtcclxuXHJcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgbmV4dExhYmVsID0gYXJndW1lbnRzWzBdLm5leHRMYWJlbCB8fCB0aGlzLm5leHRMYWJlbDtcclxuICAgICAgICBuZXh0QXJndW1lbnRzID0gYXJndW1lbnRzWzBdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLm5leHRMYWJlbCA9IG5leHRMYWJlbDtcclxuICAgICAgdGhpcy5uZXh0QXJndW1lbnRzID0gbmV4dEFyZ3VtZW50cztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFwcC5wb3BTY2VuZSgpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbn1cblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5hcHAuQmFzZUFwcFxyXG4gKiDjg5njg7zjgrnjgajjgarjgovjgqLjg5fjg6rjgrHjg7zjgrfjg6fjg7Pjgq/jg6njgrlcclxuICogQGV4dGVuZHMgcGhpbmEudXRpbC5FdmVudERpc3BhdGNoZXJcclxuICovXHJcbmNsYXNzIEJhc2VBcHAgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xyXG5cclxuICAvLyAvKiogYXdha2UgKi9cclxuICAvLyBhd2FrZSA9IG51bGxcclxuICAvLyAvKiogZnBzICovXHJcbiAgLy8gZnBzID0gbnVsbFxyXG4gIC8vIC8qKiBmcmFtZSAqL1xyXG4gIC8vIGZyYW1lID0gbnVsbFxyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLl9zY2VuZXMgPSBbbmV3IFNjZW5lKCldO1xyXG4gICAgdGhpcy5fc2NlbmVJbmRleCA9IDA7XHJcblxyXG4gICAgdGhpcy51cGRhdGVyID0gbmV3IFVwZGF0ZXIodGhpcyk7XHJcbiAgICB0aGlzLmludGVyYWN0aXZlID0gbmV3IEludGVyYWN0aXZlKHRoaXMpO1xyXG5cclxuICAgIHRoaXMuYXdha2UgPSB0cnVlO1xyXG4gICAgdGhpcy50aWNrZXIgPSBuZXcgVGlja2VyKCk7XHJcbiAgfVxyXG5cclxuICBydW4oKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICB0aGlzLl9sb29wQ2FsbGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHNlbGYuX2xvb3AoKTtcclxuICAgIH07XHJcbiAgICB0aGlzLnRpY2tlci50aWNrKHRoaXMuX2xvb3BDYWxsZXIpO1xyXG5cclxuICAgIHRoaXMudGlja2VyLnN0YXJ0KCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBraWxsKCkge1xyXG4gICAgdGhpcy50aWNrZXIuc3RvcCgpO1xyXG4gICAgdGhpcy50aWNrZXIudW50aWNrKHRoaXMuX2xvb3BDYWxsZXIpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICByZXBsYWNlU2NlbmUoc2NlbmUpIHtcclxuICAgIHRoaXMuZmxhcmUoJ3JlcGxhY2UnKTtcclxuICAgIHRoaXMuZmxhcmUoJ2NoYW5nZXNjZW5lJyk7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50U2NlbmUpIHtcclxuICAgICAgdGhpcy5jdXJyZW50U2NlbmUuYXBwID0gbnVsbDtcclxuICAgIH1cclxuICAgIHRoaXMuY3VycmVudFNjZW5lID0gc2NlbmU7XHJcbiAgICB0aGlzLmN1cnJlbnRTY2VuZS5hcHAgPSB0aGlzO1xyXG4gICAgdGhpcy5jdXJyZW50U2NlbmUuZmxhcmUoJ2VudGVyJywge1xyXG4gICAgICBhcHA6IHRoaXMsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHB1c2hTY2VuZShzY2VuZSkge1xyXG4gICAgdGhpcy5mbGFyZSgncHVzaCcpO1xyXG4gICAgdGhpcy5mbGFyZSgnY2hhbmdlc2NlbmUnKTtcclxuXHJcbiAgICB0aGlzLmN1cnJlbnRTY2VuZS5mbGFyZSgncGF1c2UnLCB7XHJcbiAgICAgIGFwcDogdGhpcyxcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX3NjZW5lcy5wdXNoKHNjZW5lKTtcclxuICAgICsrdGhpcy5fc2NlbmVJbmRleDtcclxuXHJcbiAgICB0aGlzLmZsYXJlKCdwdXNoZWQnKTtcclxuXHJcbiAgICBzY2VuZS5hcHAgPSB0aGlzO1xyXG4gICAgc2NlbmUuZmxhcmUoJ2VudGVyJywge1xyXG4gICAgICBhcHA6IHRoaXMsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOOCt+ODvOODs+OCkuODneODg+ODl+OBmeOCiyjjg53jg7zjgrrjgoTjgqrjg5bjgrfjg6fjg7PnlLvpnaLjgarjganjgafkvb/nlKgpXHJcbiAgICovXHJcbiAgcG9wU2NlbmUoKSB7XHJcbiAgICB0aGlzLmZsYXJlKCdwb3AnKTtcclxuICAgIHRoaXMuZmxhcmUoJ2NoYW5nZXNjZW5lJyk7XHJcblxyXG4gICAgdmFyIHNjZW5lID0gdGhpcy5fc2NlbmVzLnBvcCgpO1xyXG4gICAgLS10aGlzLl9zY2VuZUluZGV4O1xyXG5cclxuICAgIHNjZW5lLmZsYXJlKCdleGl0Jywge1xyXG4gICAgICBhcHA6IHRoaXMsXHJcbiAgICB9KTtcclxuICAgIHNjZW5lLmFwcCA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5mbGFyZSgncG9wZWQnKTtcclxuXHJcbiAgICAvL1xyXG4gICAgdGhpcy5jdXJyZW50U2NlbmUuZmxhcmUoJ3Jlc3VtZScsIHtcclxuICAgICAgYXBwOiB0aGlzLFxyXG4gICAgICBwcmV2U2NlbmU6IHNjZW5lLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHNjZW5lO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44K344O844Oz44GudXBkYXRl44KS5a6f6KGM44GZ44KL44KI44GG44Gr44GZ44KLXHJcbiAgICovXHJcbiAgc3RhcnQoKSB7XHJcbiAgICB0aGlzLmF3YWtlID0gdHJ1ZTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOOCt+ODvOODs+OBrnVwZGF0ZeOCkuWun+ihjOOBl+OBquOBhOOCiOOBhuOBq+OBmeOCi1xyXG4gICAqL1xyXG4gIHN0b3AoKSB7XHJcbiAgICB0aGlzLmF3YWtlID0gZmFsc2U7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBlbmFibGVTdGF0cygpIHtcclxuICAgIGlmIChwaGluYSQxLmdsb2JhbC5TdGF0cykge1xyXG4gICAgICB0aGlzLnN0YXRzID0gbmV3IFN0YXRzKCk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5zdGF0cy5kb21FbGVtZW50KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAvLyBjb25zb2xlLndhcm4oXCJub3QgZGVmaW5lZCBzdGF0cy5cIik7XHJcbiAgICAgIHZhciBTVEFUU19VUkwgPSAnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc3RhdHMuanMvcjE0L1N0YXRzLmpzJztcclxuICAgICAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICBzY3JpcHQuc3JjID0gU1RBVFNfVVJMO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgICAgIHNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmVuYWJsZVN0YXRzKCk7XHJcbiAgICAgIH0uYmluZCh0aGlzKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgZW5hYmxlRGF0R1VJKGNhbGxiYWNrKSB7XHJcbiAgICBpZiAocGhpbmEkMS5nbG9iYWwuZGF0KSB7XHJcbiAgICAgIHZhciBndWkgPSBuZXcgcGhpbmEkMS5nbG9iYWwuZGF0LkdVSSgpO1xyXG4gICAgICBjYWxsYmFjayhndWkpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIC8vIGNvbnNvbGUud2FybihcIm5vdCBkZWZpbmVkIGRhdC5HVUkuXCIpO1xyXG4gICAgICB2YXIgVVJMID0gJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2RhdC1ndWkvMC41LjEvZGF0Lmd1aS5qcyc7XHJcbiAgICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgc2NyaXB0LnNyYyA9IFVSTDtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgICBzY3JpcHQub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGd1aSA9IG5ldyBwaGluYSQxLmdsb2JhbC5kYXQuR1VJKCk7XHJcbiAgICAgICAgY2FsbGJhY2soZ3VpKTtcclxuICAgICAgfS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBfbG9vcCgpIHtcclxuICAgIHRoaXMuX3VwZGF0ZSgpO1xyXG4gICAgdGhpcy5pbnRlcmFjdGl2ZS5jaGVjayh0aGlzLmN1cnJlbnRTY2VuZSk7XHJcbiAgICB0aGlzLl9kcmF3KCk7XHJcblxyXG4gICAgLy8gc3RhdHMgdXBkYXRlXHJcbiAgICBpZiAodGhpcy5zdGF0cykgdGhpcy5zdGF0cy51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIF91cGRhdGUoKSB7XHJcbiAgICBpZiAodGhpcy5hd2FrZSkge1xyXG4gICAgICAvLyDjgqjjg7Pjgr/jg7zjg5Xjg6zjg7zjg6DjgqTjg5njg7Pjg4hcclxuICAgICAgaWYgKHRoaXMuaGFzKCdlbnRlcmZyYW1lJykpIHtcclxuICAgICAgICB0aGlzLmZsYXJlKCdlbnRlcmZyYW1lJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudXBkYXRlICYmIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlci51cGRhdGUodGhpcy5jdXJyZW50U2NlbmUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5o+P55S755So5Luu5oOz6Zai5pWwXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBfZHJhdygpIHt9XHJcblxyXG4gIGdldCBjdXJyZW50U2NlbmUoKSAgIHsgcmV0dXJuIHRoaXMuX3NjZW5lc1t0aGlzLl9zY2VuZUluZGV4XTsgfVxyXG4gIHNldCBjdXJyZW50U2NlbmUodikgIHsgdGhpcy5fc2NlbmVzW3RoaXMuX3NjZW5lSW5kZXhdID0gdjsgfVxyXG5cclxuICBnZXQgcm9vdFNjZW5lKCkgICB7IHJldHVybiB0aGlzLl9zY2VuZXNbMF07IH1cclxuICBzZXQgcm9vdFNjZW5lKHYpICB7IHRoaXMuX3NjZW5lc1swXSA9IHY7IH1cclxuXHJcbiAgZ2V0IGZyYW1lKCkgeyByZXR1cm4gdGhpcy50aWNrZXIuZnJhbWU7IH1cclxuICBzZXQgZnJhbWUodikgeyB0aGlzLnRpY2tlci5mcmFtZSA9IHY7IH1cclxuXHJcbiAgZ2V0IGZwcygpIHsgcmV0dXJuIHRoaXMudGlja2VyLmZwczsgfVxyXG4gIHNldCBmcHModikgeyB0aGlzLnRpY2tlci5mcHMgPSB2OyB9XHJcblxyXG4gIGdldCBkZWx0YVRpbWUoKSB7IHJldHVybiB0aGlzLnRpY2tlci5kZWx0YVRpbWU7IH1cclxuXHJcbiAgZ2V0IGVsYXBzZWRUaW1lKCkgeyByZXR1cm4gdGhpcy50aWNrZXIuZWxhcHNlZFRpbWU7IH1cclxuXHJcbiAgZ2V0IGN1cnJlbnRUaW1lKCkgeyByZXR1cm4gdGhpcy50aWNrZXIuY3VycmVudFRpbWU7IH1cclxuXHJcbiAgZ2V0IHN0YXJ0VGltZSgpIHsgcmV0dXJuIHRoaXMudGlja2VyLnN0YXJ0VGltZTsgfVxyXG5cclxufVxuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmFwcC5PYmplY3QyRFxyXG4gKiBPYmplY3QyRFxyXG4gKiBAZXh0ZW5kcyBwaGluYS5hcHAuRWxlbWVudFxyXG4gKi9cclxuY2xhc3MgT2JqZWN0MkQgZXh0ZW5kcyBFbGVtZW50IHtcclxuXHJcbiAgLy8gLyoqIOS9jee9riAqL1xyXG4gIC8vIHBvc2l0aW9uOiBudWxsLFxyXG4gIC8vIC8qKiDlm57ou6IgKi9cclxuICAvLyByb3RhdGlvbjogMCxcclxuICAvLyAvKiog44K544Kx44O844OrICovXHJcbiAgLy8gc2NhbGU6IG51bGwsXHJcbiAgLy8gLyoqIOWfuua6luS9jee9riAqL1xyXG4gIC8vIG9yaWdpbjogbnVsbCxcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICBvcHRpb25zID0gJHNhZmUuY2FsbCh7fSwgb3B0aW9ucywgT2JqZWN0MkQuZGVmYXVsdHMpO1xyXG4gICAgLy8gb3B0aW9ucyA9ICh7fSkuJHNhZmUob3B0aW9ucywgcGhpbmEuYXBwLk9iamVjdDJELmRlZmF1bHRzKTtcclxuXHJcbiAgICB0aGlzLnBvc2l0aW9uID0gbmV3IFZlY3RvcjIob3B0aW9ucy54LCBvcHRpb25zLnkpO1xyXG4gICAgdGhpcy5zY2FsZSAgICA9IG5ldyBWZWN0b3IyKG9wdGlvbnMuc2NhbGVYLCBvcHRpb25zLnNjYWxlWSk7XHJcbiAgICB0aGlzLnJvdGF0aW9uID0gb3B0aW9ucy5yb3RhdGlvbjtcclxuICAgIHRoaXMub3JpZ2luICAgPSBuZXcgVmVjdG9yMihvcHRpb25zLm9yaWdpblgsIG9wdGlvbnMub3JpZ2luWSk7XHJcblxyXG4gICAgdGhpcy5fbWF0cml4ID0gbmV3IE1hdHJpeDMzKCkuaWRlbnRpdHkoKTtcclxuICAgIHRoaXMuX3dvcmxkTWF0cml4ID0gbmV3IE1hdHJpeDMzKCkuaWRlbnRpdHkoKTtcclxuXHJcbiAgICB0aGlzLmludGVyYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLl9vdmVyRmxhZ3MgPSB7fTtcclxuICAgIHRoaXMuX3RvdWNoRmxhZ3MgPSB7fTtcclxuXHJcbiAgICB0aGlzLndpZHRoID0gb3B0aW9ucy53aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XHJcbiAgICB0aGlzLnJhZGl1cyA9IG9wdGlvbnMucmFkaXVzO1xyXG4gICAgdGhpcy5ib3VuZGluZ1R5cGUgPSBvcHRpb25zLmJvdW5kaW5nVHlwZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOeCueOBqOihneeqgeOBl+OBpuOBhOOCi+OBi+OCkuWIpOWumlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4XHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHlcclxuICAgKi9cclxuICBoaXRUZXN0KHgsIHkpIHtcclxuICAgIGlmICh0aGlzLmJvdW5kaW5nVHlwZSA9PT0gJ3JlY3QnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmhpdFRlc3RSZWN0KHgsIHkpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGhpcy5ib3VuZGluZ1R5cGUgPT09ICdjaXJjbGUnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmhpdFRlc3RDaXJjbGUoeCwgeSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgLy8gbm9uZSDjga7loLTlkIhcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoaXRUZXN0UmVjdCh4LCB5KSB7XHJcbiAgICB2YXIgcCA9IHRoaXMuZ2xvYmFsVG9Mb2NhbChuZXcgVmVjdG9yMih4LCB5KSk7XHJcblxyXG4gICAgdmFyIGxlZnQgICA9IC10aGlzLndpZHRoKnRoaXMub3JpZ2luWDtcclxuICAgIHZhciByaWdodCAgPSArdGhpcy53aWR0aCooMS10aGlzLm9yaWdpblgpO1xyXG4gICAgdmFyIHRvcCAgICA9IC10aGlzLmhlaWdodCp0aGlzLm9yaWdpblk7XHJcbiAgICB2YXIgYm90dG9tID0gK3RoaXMuaGVpZ2h0KigxLXRoaXMub3JpZ2luWSk7XHJcblxyXG4gICAgcmV0dXJuICggbGVmdCA8IHAueCAmJiBwLnggPCByaWdodCApICYmICggdG9wICA8IHAueSAmJiBwLnkgPCBib3R0b20gKTtcclxuICB9XHJcblxyXG4gIGhpdFRlc3RDaXJjbGUoeCwgeSkge1xyXG4gICAgLy8g5YaG5Yik5a6aXHJcbiAgICB2YXIgcCA9IHRoaXMuZ2xvYmFsVG9Mb2NhbChuZXcgVmVjdG9yMih4LCB5KSk7XHJcbiAgICBpZiAoKChwLngpKihwLngpKyhwLnkpKihwLnkpKSA8ICh0aGlzLnJhZGl1cyp0aGlzLnJhZGl1cykpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOimgee0oOOBqOihneeqgeOBl+OBpuOBhOOCi+OBi+OCkuWIpOWumlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlbG1cclxuICAgKi9cclxuICBoaXRUZXN0RWxlbWVudChlbG0pIHtcclxuICAgIHZhciByZWN0MCA9IHRoaXM7XHJcbiAgICB2YXIgcmVjdDEgPSBlbG07XHJcbiAgICByZXR1cm4gKHJlY3QwLmxlZnQgPCByZWN0MS5yaWdodCkgJiYgKHJlY3QwLnJpZ2h0ID4gcmVjdDEubGVmdCkgJiZcclxuICAgICAgICAgICAocmVjdDAudG9wIDwgcmVjdDEuYm90dG9tKSAmJiAocmVjdDAuYm90dG9tID4gcmVjdDEudG9wKTtcclxuICB9XHJcblxyXG5cclxuICBnbG9iYWxUb0xvY2FsKHApIHtcclxuICAgIHZhciBtYXRyaXggPSB0aGlzLl93b3JsZE1hdHJpeC5jbG9uZSgpO1xyXG4gICAgbWF0cml4LmludmVydCgpO1xyXG4gICAgLy8gbWF0cml4LnRyYW5zcG9zZSgpO1xyXG5cclxuICAgIHZhciB0ZW1wID0gbWF0cml4Lm11bHRpcGx5VmVjdG9yMihwKTtcclxuXHJcbiAgICByZXR1cm4gdGVtcDtcclxuICB9XHJcblxyXG4gIHNldEludGVyYWN0aXZlKGZsYWcsIHR5cGUpIHtcclxuICAgIHRoaXMuaW50ZXJhY3RpdmUgPSBmbGFnO1xyXG4gICAgaWYgKHR5cGUpIHtcclxuICAgICAgdGhpcy5ib3VuZGluZ1R5cGUgPSB0eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogWCDluqfmqJnlgKTjgpLjgrvjg4Pjg4hcclxuICAgKiBAcGFyYW0ge051bWJlcn0geFxyXG4gICAqL1xyXG4gIHNldFgoeCkge1xyXG4gICAgdGhpcy5wb3NpdGlvbi54ID0geDtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBZIOW6p+aomeWApOOCkuOCu+ODg+ODiFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB5XHJcbiAgICovXHJcbiAgc2V0WSh5KSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uLnkgPSB5O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIFhZIOW6p+aomeOCkuOCu+ODg+ODiFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4XHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHlcclxuICAgKi9cclxuICBzZXRQb3NpdGlvbih4LCB5KSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uLnggPSB4O1xyXG4gICAgdGhpcy5wb3NpdGlvbi55ID0geTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5Zue6Lui44KS44K744OD44OIXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJvdGF0aW9uXHJcbiAgICovXHJcbiAgc2V0Um90YXRpb24ocm90YXRpb24pIHtcclxuICAgIHRoaXMucm90YXRpb24gPSByb3RhdGlvbjtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44K544Kx44O844Or44KS44K744OD44OIXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHhcclxuICAgKiBAcGFyYW0ge051bWJlcn0geVxyXG4gICAqL1xyXG4gIHNldFNjYWxlKHgsIHkpIHtcclxuICAgIHRoaXMuc2NhbGUueCA9IHg7XHJcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8PSAxKSB7XHJcbiAgICAgICAgdGhpcy5zY2FsZS55ID0geDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zY2FsZS55ID0geTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiDln7rmupbngrnjgpLjgrvjg4Pjg4hcclxuICAgKiBAcGFyYW0ge051bWJlcn0geFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB5XHJcbiAgICovXHJcbiAgc2V0T3JpZ2luKHgsIHkpIHtcclxuICAgIHRoaXMub3JpZ2luLnggPSB4O1xyXG4gICAgdGhpcy5vcmlnaW4ueSA9IHk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICog5bmF44KS44K744OD44OIXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoXHJcbiAgICovXHJcbiAgc2V0V2lkdGgod2lkdGgpIHtcclxuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiDpq5jjgZXjgpLjgrvjg4Pjg4hcclxuICAgKiBAcGFyYW0ge051bWJlcn0gaGVpZ2h0XHJcbiAgICovXHJcbiAgc2V0SGVpZ2h0KGhlaWdodCkge1xyXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICog44K144Kk44K6KOW5hSwg6auY44GVKeOCkuOCu+ODg+ODiFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHRcclxuICAgKi9cclxuICBzZXRTaXplKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHRoaXMud2lkdGggID0gd2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgc2V0Qm91bmRpbmdUeXBlKHR5cGUpIHtcclxuICAgIHRoaXMuYm91bmRpbmdUeXBlID0gdHlwZTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgbW92ZVRvKHgsIHkpIHtcclxuICAgIHRoaXMucG9zaXRpb24ueCA9IHg7XHJcbiAgICB0aGlzLnBvc2l0aW9uLnkgPSB5O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBtb3ZlQnkoeCwgeSkge1xyXG4gICAgdGhpcy5wb3NpdGlvbi54ICs9IHg7XHJcbiAgICB0aGlzLnBvc2l0aW9uLnkgKz0geTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgX2NhbGNXb3JsZE1hdHJpeCgpIHtcclxuICAgIGlmICghdGhpcy5wYXJlbnQpIHJldHVybiA7XHJcblxyXG4gICAgLy8gY2FjaGUgY2hlY2tcclxuICAgIGlmICh0aGlzLnJvdGF0aW9uICE9IHRoaXMuX2NhY2hlZFJvdGF0aW9uKSB7XHJcbiAgICAgIHRoaXMuX2NhY2hlZFJvdGF0aW9uID0gdGhpcy5yb3RhdGlvbjtcclxuXHJcbiAgICAgIHZhciByID0gdGhpcy5yb3RhdGlvbiooTWF0aC5QSS8xODApO1xyXG4gICAgICB0aGlzLl9zciA9IE1hdGguc2luKHIpO1xyXG4gICAgICB0aGlzLl9jciA9IE1hdGguY29zKHIpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBsb2NhbCA9IHRoaXMuX21hdHJpeDtcclxuICAgIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudC5fd29ybGRNYXRyaXggfHwgTWF0cml4MzMuSURFTlRJVFk7XHJcbiAgICB2YXIgd29ybGQgPSB0aGlzLl93b3JsZE1hdHJpeDtcclxuXHJcbiAgICAvLyDjg63jg7zjgqvjg6vjga7ooYzliJfjgpLoqIjnrpdcclxuICAgIGxvY2FsLm0wMCA9IHRoaXMuX2NyICogdGhpcy5zY2FsZS54O1xyXG4gICAgbG9jYWwubTAxID0tdGhpcy5fc3IgKiB0aGlzLnNjYWxlLnk7XHJcbiAgICBsb2NhbC5tMTAgPSB0aGlzLl9zciAqIHRoaXMuc2NhbGUueDtcclxuICAgIGxvY2FsLm0xMSA9IHRoaXMuX2NyICogdGhpcy5zY2FsZS55O1xyXG4gICAgbG9jYWwubTAyID0gdGhpcy5wb3NpdGlvbi54O1xyXG4gICAgbG9jYWwubTEyID0gdGhpcy5wb3NpdGlvbi55O1xyXG5cclxuICAgIC8vIGNhY2hlXHJcbiAgICB2YXIgYTAwID0gbG9jYWwubTAwOyB2YXIgYTAxID0gbG9jYWwubTAxOyB2YXIgYTAyID0gbG9jYWwubTAyO1xyXG4gICAgdmFyIGExMCA9IGxvY2FsLm0xMDsgdmFyIGExMSA9IGxvY2FsLm0xMTsgdmFyIGExMiA9IGxvY2FsLm0xMjtcclxuICAgIHZhciBiMDAgPSBwYXJlbnQubTAwOyB2YXIgYjAxID0gcGFyZW50Lm0wMTsgdmFyIGIwMiA9IHBhcmVudC5tMDI7XHJcbiAgICB2YXIgYjEwID0gcGFyZW50Lm0xMDsgdmFyIGIxMSA9IHBhcmVudC5tMTE7IHZhciBiMTIgPSBwYXJlbnQubTEyO1xyXG5cclxuICAgIC8vIOimquOBruihjOWIl+OBqOaOm+OBkeWQiOOCj+OBm+OCi1xyXG4gICAgd29ybGQubTAwID0gYjAwICogYTAwICsgYjAxICogYTEwO1xyXG4gICAgd29ybGQubTAxID0gYjAwICogYTAxICsgYjAxICogYTExO1xyXG4gICAgd29ybGQubTAyID0gYjAwICogYTAyICsgYjAxICogYTEyICsgYjAyO1xyXG5cclxuICAgIHdvcmxkLm0xMCA9IGIxMCAqIGEwMCArIGIxMSAqIGExMDtcclxuICAgIHdvcmxkLm0xMSA9IGIxMCAqIGEwMSArIGIxMSAqIGExMTtcclxuICAgIHdvcmxkLm0xMiA9IGIxMCAqIGEwMiArIGIxMSAqIGExMiArIGIxMjtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSAgICB4XHJcbiAgICogeOW6p+aomeWApFxyXG4gICAqL1xyXG4gIGdldCB4KCkgICB7IHJldHVybiB0aGlzLnBvc2l0aW9uLng7IH1cclxuICBzZXQgeCh2KSAgeyB0aGlzLnBvc2l0aW9uLnggPSB2OyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSAgICB5XHJcbiAgICogeeW6p+aomeWApFxyXG4gICAqL1xyXG4gIGdldCB5KCkgICB7IHJldHVybiB0aGlzLnBvc2l0aW9uLnk7IH1cclxuICBzZXQgeSh2KSAgeyB0aGlzLnBvc2l0aW9uLnkgPSB2OyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSAgICBvcmlnaW5YXHJcbiAgICogeOW6p+aomeWApFxyXG4gICAqL1xyXG4gIGdldCBvcmlnaW5YKCkgICB7IHJldHVybiB0aGlzLm9yaWdpbi54OyB9XHJcbiAgc2V0IG9yaWdpblgodikgIHsgdGhpcy5vcmlnaW4ueCA9IHY7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5ICAgIG9yaWdpbllcclxuICAgKiB55bqn5qiZ5YCkXHJcbiAgICovXHJcbiAgZ2V0IG9yaWdpblkoKSAgIHsgcmV0dXJuIHRoaXMub3JpZ2luLnk7IH1cclxuICBzZXQgb3JpZ2luWSh2KSAgeyB0aGlzLm9yaWdpbi55ID0gdjsgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkgICAgc2NhbGVYXHJcbiAgICog44K544Kx44O844OrWOWApFxyXG4gICAqL1xyXG4gIGdldCBzY2FsZVgoKSAgIHsgcmV0dXJuIHRoaXMuc2NhbGUueDsgfVxyXG4gIHNldCBzY2FsZVgodikgIHsgdGhpcy5zY2FsZS54ID0gdjsgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSAgICBzY2FsZVlcclxuICAgKiDjgrnjgrHjg7zjg6tZ5YCkXHJcbiAgICovXHJcbiAgZ2V0IHNjYWxlWSgpICAgeyByZXR1cm4gdGhpcy5zY2FsZS55OyB9XHJcbiAgc2V0IHNjYWxlWSh2KSAgeyB0aGlzLnNjYWxlLnkgPSB2OyB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5ICAgIHdpZHRoXHJcbiAgICogd2lkdGhcclxuICAgKi9cclxuICBnZXQgd2lkdGgoKSAgIHtcclxuICAgIHJldHVybiAodGhpcy5ib3VuZGluZ1R5cGUgPT09ICdyZWN0JykgP1xyXG4gICAgICB0aGlzLl93aWR0aCA6IHRoaXMuX2RpYW1ldGVyO1xyXG4gIH1cclxuICBzZXQgd2lkdGgodikgIHsgdGhpcy5fd2lkdGggPSB2OyB9XHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5ICAgIGhlaWdodFxyXG4gICAqIGhlaWdodFxyXG4gICAqL1xyXG4gIGdldCBoZWlnaHQoKSAgIHtcclxuICAgIHJldHVybiAodGhpcy5ib3VuZGluZ1R5cGUgPT09ICdyZWN0JykgP1xyXG4gICAgICB0aGlzLl9oZWlnaHQgOiB0aGlzLl9kaWFtZXRlcjtcclxuICB9XHJcbiAgc2V0IGhlaWdodCh2KSAgeyB0aGlzLl9oZWlnaHQgPSB2OyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSAgICByYWRpdXNcclxuICAgKiDljYrlvoRcclxuICAgKi9cclxuICBnZXQgcmFkaXVzKCkgICB7XHJcbiAgICByZXR1cm4gKHRoaXMuYm91bmRpbmdUeXBlID09PSAncmVjdCcpID9cclxuICAgICAgKHRoaXMud2lkdGgrdGhpcy5oZWlnaHQpLzQgOiB0aGlzLl9yYWRpdXM7XHJcbiAgfVxyXG4gIHNldCByYWRpdXModikgIHtcclxuICAgIHRoaXMuX3JhZGl1cyA9IHY7XHJcbiAgICB0aGlzLl9kaWFtZXRlciA9IHYqMjtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5ICAgIHRvcFxyXG4gICAqIOW3plxyXG4gICAqL1xyXG4gIGdldCB0b3AoKSAgIHsgcmV0dXJuIHRoaXMueSAtIHRoaXMuaGVpZ2h0KnRoaXMub3JpZ2luWTsgfVxyXG4gIHNldCB0b3AodikgIHsgdGhpcy55ID0gdiArIHRoaXMuaGVpZ2h0KnRoaXMub3JpZ2luWTsgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkgICAgcmlnaHRcclxuICAgKiDlt6ZcclxuICAgKi9cclxuICBnZXQgcmlnaHQoKSAgIHsgcmV0dXJuIHRoaXMueCArIHRoaXMud2lkdGgqKDEtdGhpcy5vcmlnaW5YKTsgfVxyXG4gIHNldCByaWdodCh2KSAgeyB0aGlzLnggPSB2IC0gdGhpcy53aWR0aCooMS10aGlzLm9yaWdpblgpOyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSAgICBib3R0b21cclxuICAgKiDlt6ZcclxuICAgKi9cclxuICBnZXQgYm90dG9tKCkgICB7IHJldHVybiB0aGlzLnkgKyB0aGlzLmhlaWdodCooMS10aGlzLm9yaWdpblkpOyB9XHJcbiAgc2V0IGJvdHRvbSh2KSAgeyB0aGlzLnkgPSB2IC0gdGhpcy5oZWlnaHQqKDEtdGhpcy5vcmlnaW5ZKTsgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkgICAgbGVmdFxyXG4gICAqIOW3plxyXG4gICAqL1xyXG4gIGdldCBsZWZ0KCkgICB7IHJldHVybiB0aGlzLnggLSB0aGlzLndpZHRoKnRoaXMub3JpZ2luWDsgfVxyXG4gIHNldCBsZWZ0KHYpICB7IHRoaXMueCA9IHYgKyB0aGlzLndpZHRoKnRoaXMub3JpZ2luWDsgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkgICAgY2VudGVyWFxyXG4gICAqIGNlbnRlclhcclxuICAgKi9cclxuICBnZXQgY2VudGVyWCgpICAgeyByZXR1cm4gdGhpcy54ICsgdGhpcy53aWR0aC8yIC0gdGhpcy53aWR0aCp0aGlzLm9yaWdpblg7IH1cclxuICBzZXQgY2VudGVyWCh2KSAge1xyXG4gICAgLy8gVE9ETzog44Gp44GG44GX44KI44GG44GL44GqPz9cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSAgICBjZW50ZXJZXHJcbiAgICogY2VudGVyWVxyXG4gICAqL1xyXG4gIGdldCBjZW50ZXJZKCkgICB7IHJldHVybiB0aGlzLnkgKyB0aGlzLmhlaWdodC8yIC0gdGhpcy5oZWlnaHQqdGhpcy5vcmlnaW5ZOyB9XHJcbiAgc2V0IGNlbnRlclkodikgIHtcclxuICAgIC8vIFRPRE86IOOBqeOBhuOBl+OCiOOBhuOBi+OBqj8/XHJcbiAgfVxyXG59XHJcblxyXG5PYmplY3QyRC5kZWZhdWx0cyA9IHtcclxuICB4OiAwLFxyXG4gIHk6IDAsXHJcbiAgc2NhbGVYOiAxLFxyXG4gIHNjYWxlWTogMSxcclxuICByb3RhdGlvbjogMCxcclxuICBvcmlnaW5YOiAwLjUsXHJcbiAgb3JpZ2luWTogMC41LFxyXG4gIHdpZHRoOiA2NCxcclxuICBoZWlnaHQ6IDY0LFxyXG4gIHJhZGl1czogMzIsXHJcbiAgYm91bmRpbmdUeXBlOiAncmVjdCcsXHJcbn07XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZGlzcGxheS5Eb21BcHBcclxuICogQGV4dGVuZHMgcGhpbmEuYXBwLkJhc2VBcHBcclxuICovXHJcbmNsYXNzIERvbUFwcCBleHRlbmRzIEJhc2VBcHAge1xyXG5cclxuICAvLyBkb21FbGVtZW50OiBudWxsLFxyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuXHJcbiAgICBpZiAob3B0aW9ucy5kb21FbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuZG9tRWxlbWVudCA9IG9wdGlvbnMuZG9tRWxlbWVudDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBpZiAob3B0aW9ucy5xdWVyeSkge1xyXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5xdWVyeSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQoJ2Vycm9yJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAob3B0aW9ucy5mcHMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmZwcyA9IG9wdGlvbnMuZnBzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZih0eXBlb2Ygb3B0aW9ucy5ydW5uZXIgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgdGhpcy50aWNrZXIucnVubmVyID0gb3B0aW9ucy5ydW5uZXI7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5tb3VzZSA9IG5ldyBNb3VzZSh0aGlzLmRvbUVsZW1lbnQpO1xyXG4gICAgdGhpcy50b3VjaCA9IG5ldyBUb3VjaCh0aGlzLmRvbUVsZW1lbnQpO1xyXG4gICAgdGhpcy50b3VjaExpc3QgPSBuZXcgVG91Y2hMaXN0KHRoaXMuZG9tRWxlbWVudCwgNSk7XHJcbiAgICB0aGlzLmtleWJvYXJkID0gbmV3IEtleWJvYXJkKGRvY3VtZW50KTtcclxuICAgIC8vIC8vIOWKoOmAn+W6puOCu+ODs+OCteODvOOCkueUn+aIkFxyXG4gICAgLy8gdGhpcy5hY2NlbGVyb21ldGVyID0gcGhpbmEuaW5wdXQuQWNjZWxlcm9tZXRlcigpO1xyXG5cclxuICAgIC8vIOODneOCpOODs+OCv+OCkuOCu+ODg+ODiChQQyDjgafjga8gTW91c2UsIE1vYmlsZSDjgafjga8gVG91Y2gpXHJcbiAgICB0aGlzLnBvaW50ZXIgPSB0aGlzLnRvdWNoO1xyXG4gICAgdGhpcy5wb2ludGVycyA9IHRoaXMudG91Y2hMaXN0LnRvdWNoZXM7XHJcblxyXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy5wb2ludGVyID0gdGhpcy50b3VjaDtcclxuICAgICAgdGhpcy5wb2ludGVycyA9IHRoaXMudG91Y2hMaXN0LnRvdWNoZXM7XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLnBvaW50ZXIgPSB0aGlzLm1vdXNlO1xyXG4gICAgICB0aGlzLnBvaW50ZXJzID0gW3RoaXMubW91c2VdO1xyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAvLyBrZXlib2FyZCBldmVudFxyXG4gICAgdGhpcy5rZXlib2FyZC5vbigna2V5ZG93bicsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgdGhpcy5jdXJyZW50U2NlbmUgJiYgdGhpcy5jdXJyZW50U2NlbmUuZmxhcmUoJ2tleWRvd24nLCB7XHJcbiAgICAgICAga2V5Q29kZTogZS5rZXlDb2RlLFxyXG4gICAgICB9KTtcclxuICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLmtleWJvYXJkLm9uKCdrZXl1cCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgdGhpcy5jdXJyZW50U2NlbmUgJiYgdGhpcy5jdXJyZW50U2NlbmUuZmxhcmUoJ2tleXVwJywge1xyXG4gICAgICAgIGtleUNvZGU6IGUua2V5Q29kZSxcclxuICAgICAgfSk7XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy5rZXlib2FyZC5vbigna2V5cHJlc3MnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFNjZW5lICYmIHRoaXMuY3VycmVudFNjZW5lLmZsYXJlKCdrZXlwcmVzcycsIHtcclxuICAgICAgICBrZXlDb2RlOiBlLmtleUNvZGUsXHJcbiAgICAgIH0pO1xyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAvLyBjbGljayDlr77lv5xcclxuICAgIHZhciBldmVudE5hbWUgPSBwaGluYSQxLmlzTW9iaWxlKCkgPyAndG91Y2hlbmQnIDogJ21vdXNldXAnO1xyXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCB0aGlzLl9jaGVja0NsaWNrLmJpbmQodGhpcykpO1xyXG5cclxuICAgIC8vIOaxuuWumuaZguOBruWHpueQhuOCkuOCquODleOBq+OBmeOCiyhpUGhvbmUg5pmC44Gu44Gh44KJ44Gk44GN5a++562WKVxyXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGZ1bmN0aW9uKGUpIHsgZS5zdG9wKCk7IH0pO1xyXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgZnVuY3Rpb24oZSkgeyBlLnN0b3AoKTsgfSk7XHJcblxyXG4gICAgLy8g44Km44Kj44Oz44OJ44Km44OV44Kp44O844Kr44K55pmC44Kk44OZ44Oz44OI44Oq44K544OK44KS55m76YyyXHJcbiAgICBwaGluYSQxLmdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLmZsYXJlKCdmb2N1cycpO1xyXG4gICAgICB0aGlzLmN1cnJlbnRTY2VuZS5mbGFyZSgnZm9jdXMnKTtcclxuICAgIH0uYmluZCh0aGlzKSwgZmFsc2UpO1xyXG4gICAgLy8g44Km44Kj44Oz44OJ44Km44OW44Op44O85pmC44Kk44OZ44Oz44OI44Oq44K544OK44KS55m76YyyXHJcbiAgICBwaGluYSQxLmdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuZmxhcmUoJ2JsdXInKTtcclxuICAgICAgdGhpcy5jdXJyZW50U2NlbmUuZmxhcmUoJ2JsdXInKTtcclxuICAgIH0uYmluZCh0aGlzKSwgZmFsc2UpO1xyXG5cclxuICAgIC8vIOabtOaWsOmWouaVsOOCkueZu+mMslxyXG4gICAgdGhpcy5vbignZW50ZXJmcmFtZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLm1vdXNlLnVwZGF0ZSgpO1xyXG4gICAgICB0aGlzLnRvdWNoLnVwZGF0ZSgpO1xyXG4gICAgICB0aGlzLnRvdWNoTGlzdC51cGRhdGUoKTtcclxuICAgICAgdGhpcy5rZXlib2FyZC51cGRhdGUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX2NoZWNrQ2xpY2soZSkge1xyXG4gICAgdmFyIF9jaGVjayA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgaWYgKGVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGVsZW1lbnQuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xyXG4gICAgICAgICAgX2NoZWNrKGNoaWxkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZWxlbWVudC5fY2xpY2tlZCAmJiBlbGVtZW50LmhhcygnY2xpY2snKSkge1xyXG4gICAgICAgIGVsZW1lbnQuZmxhcmUoJ2NsaWNrJyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxlbWVudC5fY2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgfTtcclxuXHJcbiAgICBfY2hlY2sodGhpcy5jdXJyZW50U2NlbmUpO1xyXG4gIH1cclxuXHJcbn1cblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5kaXNwbGF5LkNhbnZhc1JlbmRlcmVyXHJcbiAqL1xyXG5jbGFzcyBDYW52YXNSZW5kZXJlciB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xyXG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICB0aGlzLl9jb250ZXh0ID0gdGhpcy5jYW52YXMuY29udGV4dDtcclxuICB9XHJcblxyXG4gIHJlbmRlcihzY2VuZSkge1xyXG4gICAgdGhpcy5jYW52YXMuY2xlYXIoKTtcclxuICAgIGlmIChzY2VuZS5iYWNrZ3JvdW5kQ29sb3IpIHtcclxuICAgICAgdGhpcy5jYW52YXMuY2xlYXJDb2xvcihzY2VuZS5iYWNrZ3JvdW5kQ29sb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2NvbnRleHQuc2F2ZSgpO1xyXG4gICAgdGhpcy5yZW5kZXJDaGlsZHJlbihzY2VuZSk7XHJcbiAgICB0aGlzLl9jb250ZXh0LnJlc3RvcmUoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckNoaWxkcmVuKG9iaikge1xyXG4gICAgLy8g5a2Q5L6b44Gf44Gh44KC5a6f6KGMXHJcbiAgICBpZiAob2JqLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgdmFyIHRlbXBDaGlsZHJlbiA9IG9iai5jaGlsZHJlbi5zbGljZSgpO1xyXG4gICAgICBmb3IgKHZhciBpPTAsbGVuPXRlbXBDaGlsZHJlbi5sZW5ndGg7IGk8bGVuOyArK2kpIHtcclxuICAgICAgICB0aGlzLnJlbmRlck9iamVjdCh0ZW1wQ2hpbGRyZW5baV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXJPYmplY3Qob2JqKSB7XHJcbiAgICBpZiAob2JqLnZpc2libGUgPT09IGZhbHNlICYmICFvYmouaW50ZXJhY3RpdmUpIHJldHVybjtcclxuXHJcbiAgICBvYmouX2NhbGNXb3JsZE1hdHJpeCAmJiBvYmouX2NhbGNXb3JsZE1hdHJpeCgpO1xyXG5cclxuICAgIGlmIChvYmoudmlzaWJsZSA9PT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBvYmouX2NhbGNXb3JsZEFscGhhICYmIG9iai5fY2FsY1dvcmxkQWxwaGEoKTtcclxuXHJcbiAgICB2YXIgY29udGV4dCA9IHRoaXMuY2FudmFzLmNvbnRleHQ7XHJcblxyXG4gICAgY29udGV4dC5nbG9iYWxBbHBoYSA9IG9iai5fd29ybGRBbHBoYTtcclxuICAgIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gb2JqLmJsZW5kTW9kZTtcclxuXHJcbiAgICBpZiAob2JqLl93b3JsZE1hdHJpeCkge1xyXG4gICAgICAvLyDooYzliJfjgpLjgrvjg4Pjg4hcclxuICAgICAgdmFyIG0gPSBvYmouX3dvcmxkTWF0cml4O1xyXG4gICAgICBjb250ZXh0LnNldFRyYW5zZm9ybSggbS5tMDAsIG0ubTEwLCBtLm0wMSwgbS5tMTEsIG0ubTAyLCBtLm0xMiApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvYmouY2xpcCkge1xyXG5cclxuICAgICAgY29udGV4dC5zYXZlKCk7XHJcblxyXG4gICAgICBvYmouY2xpcCh0aGlzLmNhbnZhcyk7XHJcbiAgICAgIGNvbnRleHQuY2xpcCgpO1xyXG5cclxuICAgICAgaWYgKG9iai5kcmF3KSBvYmouZHJhdyh0aGlzLmNhbnZhcyk7XHJcblxyXG4gICAgICAvLyDlrZDkvpvjgZ/jgaHjgoLlrp/ooYxcclxuICAgICAgaWYgKG9iai5yZW5kZXJDaGlsZEJ5U2VsZiA9PT0gZmFsc2UgJiYgb2JqLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHZhciB0ZW1wQ2hpbGRyZW4gPSBvYmouY2hpbGRyZW4uc2xpY2UoKTtcclxuICAgICAgICAgIGZvciAodmFyIGk9MCxsZW49dGVtcENoaWxkcmVuLmxlbmd0aDsgaTxsZW47ICsraSkge1xyXG4gICAgICAgICAgICAgIHRoaXMucmVuZGVyT2JqZWN0KHRlbXBDaGlsZHJlbltpXSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnRleHQucmVzdG9yZSgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGlmIChvYmouZHJhdykgb2JqLmRyYXcodGhpcy5jYW52YXMpO1xyXG5cclxuICAgICAgLy8g5a2Q5L6b44Gf44Gh44KC5a6f6KGMXHJcbiAgICAgIGlmIChvYmoucmVuZGVyQ2hpbGRCeVNlbGYgPT09IGZhbHNlICYmIG9iai5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdmFyIHRlbXBDaGlsZHJlbiA9IG9iai5jaGlsZHJlbi5zbGljZSgpO1xyXG4gICAgICAgIGZvciAodmFyIGk9MCxsZW49dGVtcENoaWxkcmVuLmxlbmd0aDsgaTxsZW47ICsraSkge1xyXG4gICAgICAgICAgdGhpcy5yZW5kZXJPYmplY3QodGVtcENoaWxkcmVuW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmRpc3BsYXkuRGlzcGxheVNjZW5lXHJcbiAqIEBleHRlbmRzIHBoaW5hLmFwcC5TY2VuZVxyXG4gKi9cclxuY2xhc3MgRGlzcGxheVNjZW5lIGV4dGVuZHMgU2NlbmUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgcGFyYW1zID0gJHNhZmUuY2FsbCh7fSwgcGFyYW1zLCBEaXNwbGF5U2NlbmUuZGVmYXVsdHMpO1xyXG4gICAgLy8gcGFyYW1zID0gKHt9KS4kc2FmZShwYXJhbXMsIERpc3BsYXlTY2VuZS5kZWZhdWx0cyk7XHJcblxyXG4gICAgdGhpcy5jYW52YXMgPSBuZXcgQ2FudmFzKCk7XHJcbiAgICB0aGlzLmNhbnZhcy5zZXRTaXplKHBhcmFtcy53aWR0aCwgcGFyYW1zLmhlaWdodCk7XHJcbiAgICB0aGlzLnJlbmRlcmVyID0gbmV3IENhbnZhc1JlbmRlcmVyKHRoaXMuY2FudmFzKTtcclxuICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gKHBhcmFtcy5iYWNrZ3JvdW5kQ29sb3IpID8gcGFyYW1zLmJhY2tncm91bmRDb2xvciA6IG51bGw7XHJcblxyXG4gICAgdGhpcy53aWR0aCA9IHBhcmFtcy53aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gcGFyYW1zLmhlaWdodDtcclxuICAgIHRoaXMuZ3JpZFggPSBuZXcgR3JpZChwYXJhbXMud2lkdGgsIDE2KTtcclxuICAgIHRoaXMuZ3JpZFkgPSBuZXcgR3JpZChwYXJhbXMuaGVpZ2h0LCAxNik7XHJcblxyXG4gICAgLy8gVE9ETzog5LiA5pem44KA44KK44KE44KK5a++5b+cXHJcbiAgICB0aGlzLmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMuc2V0SW50ZXJhY3RpdmUgPSBmdW5jdGlvbihmbGFnKSB7XHJcbiAgICAgIHRoaXMuaW50ZXJhY3RpdmUgPSBmbGFnO1xyXG4gICAgfTtcclxuICAgIHRoaXMuX292ZXJGbGFncyA9IHt9O1xyXG4gICAgdGhpcy5fdG91Y2hGbGFncyA9IHt9O1xyXG5cclxuICAgIHZhciBjdHggPSB0aGlzLmNhbnZhcy5jb250ZXh0O1xyXG4gICAgaWYgKHBhcmFtcy5pbWFnZVNtb290aGluZyA9PT0gZmFsc2UpIHtcclxuICAgICAgY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICBjdHgud2Via2l0SW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XHJcbiAgICAgIGN0eC5tc0ltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGl0VGVzdCgpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgX3VwZGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLnVwZGF0ZSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX3JlbmRlcigpIHtcclxuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkRpc3BsYXlTY2VuZS5kZWZhdWx0cyA9IHtcclxuICB3aWR0aDogNjQwLFxyXG4gIGhlaWdodDogOTYwLFxyXG4gIGltYWdlU21vb3RoaW5nOiB0cnVlLFxyXG59O1xuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmRpc3BsYXkuQ2FudmFzQXBwXHJcbiAqIEBleHRlbmRzIHBoaW5hLmRpc3BsYXkuRG9tQXBwXHJcbiAqL1xyXG5jbGFzcyBDYW52YXNBcHAgZXh0ZW5kcyBEb21BcHAge1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0gJHNhZmUuY2FsbCgob3B0aW9ucyB8fCB7fSksIENhbnZhc0FwcC5kZWZhdWx0cyk7XHJcbiAgICAvLyBvcHRpb25zID0gKG9wdGlvbnMgfHwge30pLiRzYWZlKENhbnZhc0FwcC5kZWZhdWx0cyk7XHJcbiAgICBcclxuICAgIGlmICghb3B0aW9ucy5xdWVyeSAmJiAhb3B0aW9ucy5kb21FbGVtZW50KSB7XHJcbiAgICAgIG9wdGlvbnMuZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICBpZiAob3B0aW9ucy5hcHBlbmQpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG9wdGlvbnMuZG9tRWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG5cclxuICAgIHRoaXMuZ3JpZFggPSBuZXcgR3JpZCh7XHJcbiAgICAgIHdpZHRoOiBvcHRpb25zLndpZHRoLFxyXG4gICAgICBjb2x1bW5zOiBvcHRpb25zLmNvbHVtbnMsXHJcbiAgICB9KTtcclxuICAgIHRoaXMuZ3JpZFkgPSBuZXcgR3JpZCh7XHJcbiAgICAgIHdpZHRoOiBvcHRpb25zLmhlaWdodCxcclxuICAgICAgY29sdW1uczogb3B0aW9ucy5jb2x1bW5zLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jYW52YXMgPSBuZXcgQ2FudmFzKHRoaXMuZG9tRWxlbWVudCk7XHJcbiAgICB0aGlzLmNhbnZhcy5zZXRTaXplKG9wdGlvbnMud2lkdGgsIG9wdGlvbnMuaGVpZ2h0KTtcclxuXHJcbiAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IChvcHRpb25zLmJhY2tncm91bmRDb2xvciAhPT0gdW5kZWZpbmVkKSA/IG9wdGlvbnMuYmFja2dyb3VuZENvbG9yIDogJ3doaXRlJztcclxuXHJcbiAgICB0aGlzLnJlcGxhY2VTY2VuZShuZXcgRGlzcGxheVNjZW5lKHtcclxuICAgICAgd2lkdGg6IG9wdGlvbnMud2lkdGgsXHJcbiAgICAgIGhlaWdodDogb3B0aW9ucy5oZWlnaHQsXHJcbiAgICB9KSk7XHJcblxyXG4gICAgaWYgKG9wdGlvbnMuZml0KSB7XHJcbiAgICAgIHRoaXMuZml0U2NyZWVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9wdGlvbnMucGl4ZWxhdGVkKSB7XHJcbiAgICAgIC8vIOODgeODqeOBpOOBjemYsuatolxyXG4gICAgICAvLyDjg4njg4Pjg4jntbXjgrLjg7zjg6Djga7jgrXjg53jg7zjg4hcclxuICAgICAgLy8gaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy1pbWFnZXMvI3RoZS1pbWFnZS1yZW5kZXJpbmdcclxuICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2ltYWdlLXJlbmRlcmluZyNCcm93c2VyX2NvbXBhdGliaWxpdHlcclxuICAgICAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0ZpcmVmb3hcXC9cXGQrLykpIHtcclxuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGUuaW1hZ2VSZW5kZXJpbmcgPSAnY3Jpc3AtZWRnZXMnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5zdHlsZS5pbWFnZVJlbmRlcmluZyA9ICdwaXhlbGF0ZWQnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHVzaFNjZW5lLCBwb3BTY2VuZSDlr77nrZZcclxuICAgIHRoaXMub24oJ3B1c2gnLCBmdW5jdGlvbigpIHtcclxuICAgICAgLy8gb25lbnRlciDlr77nrZbjgafmj4/nlLvjgZfjgabjgYrjgY9cclxuICAgICAgaWYgKHRoaXMuY3VycmVudFNjZW5lLmNhbnZhcykge1xyXG4gICAgICAgIHRoaXMuX2RyYXcoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfZHJhdygpIHtcclxuICAgIGlmICh0aGlzLmJhY2tncm91bmRDb2xvcikge1xyXG4gICAgICB0aGlzLmNhbnZhcy5jbGVhckNvbG9yKHRoaXMuYmFja2dyb3VuZENvbG9yKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2FudmFzLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuY3VycmVudFNjZW5lLmNhbnZhcykge1xyXG4gICAgICB0aGlzLmN1cnJlbnRTY2VuZS5fcmVuZGVyKCk7XHJcblxyXG4gICAgICAvLyB0aGlzLl9zY2VuZXMuZWFjaChmdW5jdGlvbihzY2VuZSkge1xyXG4gICAgICB0aGlzLl9zY2VuZXMuZm9yRWFjaChmdW5jdGlvbihzY2VuZSkge1xyXG4gICAgICAgIHZhciBjID0gc2NlbmUuY2FudmFzO1xyXG4gICAgICAgIGlmIChjKSB7XHJcbiAgICAgICAgICB0aGlzLmNhbnZhcy5jb250ZXh0LmRyYXdJbWFnZShjLmRvbUVsZW1lbnQsIDAsIDAsIGMud2lkdGgsIGMuaGVpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZml0U2NyZWVuKCkge1xyXG4gICAgdGhpcy5jYW52YXMuZml0U2NyZWVuKCk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLy8gc3RhdGljXHJcbkNhbnZhc0FwcC5kZWZhdWx0cyA9IHtcclxuICB3aWR0aDogNjQwLFxyXG4gIGhlaWdodDogOTYwLFxyXG4gIGNvbHVtbnM6IDEyLFxyXG4gIGZpdDogdHJ1ZSxcclxuICBhcHBlbmQ6IHRydWUsXHJcbn07XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZGlzcGxheS5EaXNwbGF5RWxlbWVudFxyXG4gKiBAZXh0ZW5kcyBwaGluYS5hcHAuT2JqZWN0MkRcclxuICovXHJcbmNsYXNzIERpc3BsYXlFbGVtZW50IGV4dGVuZHMgT2JqZWN0MkQge1xyXG5cclxuICAvLyAvKiog6KGo56S644OV44Op44KwICovXHJcbiAgLy8gdmlzaWJsZTogdHJ1ZSxcclxuICAvLyAvKiog44Ki44Or44OV44KhICovXHJcbiAgLy8gYWxwaGE6IDEuMCxcclxuICAvLyAvKiog44OW44Os44Oz44OJ44Oi44O844OJICovXHJcbiAgLy8gYmxlbmRNb2RlOiBcInNvdXJjZS1vdmVyXCIsXHJcblxyXG4gIC8vIC8qKiDlrZDkvpvjgpIg6Ieq5YiG44GuQ2FudmFzUmVuZGVyZXIg44Gn5o+P55S744GZ44KL44GLICovXHJcbiAgLy8gcmVuZGVyQ2hpbGRCeVNlbGY6IGZhbHNlLFxyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0gJHNhZmUuY2FsbCh7fSwgb3B0aW9uc3x8e30sIERpc3BsYXlFbGVtZW50LmRlZmF1bHRzKTtcclxuICAgIC8vIG9wdGlvbnMgPSAoe30pLiRzYWZlKG9wdGlvbnMgfHwge30sIHBoaW5hLmRpc3BsYXkuRGlzcGxheUVsZW1lbnQuZGVmYXVsdHMpO1xyXG5cclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG4gICAgdGhpcy52aXNpYmxlID0gKG9wdGlvbnMudmlzaWJsZSAhPSBudWxsKSA/IG9wdGlvbnMudmlzaWJsZSA6IHRydWU7XHJcbiAgICB0aGlzLmFscGhhID0gKG9wdGlvbnMuYWxwaGEgIT0gbnVsbCkgPyBvcHRpb25zLmFscGhhIDogMS4wO1xyXG4gICAgdGhpcy5ibGVuZE1vZGUgPSBcInNvdXJjZS1vdmVyXCI7XHJcbiAgICB0aGlzLnJlbmRlckNoaWxkQnlTZWxmID0gZmFsc2U7XHJcbiAgICB0aGlzLl93b3JsZEFscGhhID0gMS4wO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44Ki44Or44OV44Kh5YCk44KS44K744OD44OIXHJcbiAgICovXHJcbiAgc2V0QWxwaGEoYWxwaGEpIHtcclxuICAgIHRoaXMuYWxwaGEgPSBhbHBoYTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6KGo56S6L+mdnuihqOekuuOCkuOCu+ODg+ODiFxyXG4gICAqL1xyXG4gIHNldFZpc2libGUoZmxhZykge1xyXG4gICAgdGhpcy52aXNpYmxlID0gZmxhZztcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6KGo56S6XHJcbiAgICovXHJcbiAgc2hvdygpIHtcclxuICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOmdnuihqOekulxyXG4gICAqL1xyXG4gIGhpZGUoKSB7XHJcbiAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBfY2FsY1dvcmxkQWxwaGEoKSB7XHJcbiAgICBpZiAodGhpcy5hbHBoYSA8IDApIHtcclxuICAgICAgdGhpcy5fd29ybGRBbHBoYSA9IDA7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5wYXJlbnQpIHtcclxuICAgICAgdGhpcy5fd29ybGRBbHBoYSA9IHRoaXMuYWxwaGE7XHJcbiAgICAgIHJldHVybiA7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdmFyIHdvcmxkQWxwaGEgPSAodGhpcy5wYXJlbnQuX3dvcmxkQWxwaGEgIT09IHVuZGVmaW5lZCkgPyB0aGlzLnBhcmVudC5fd29ybGRBbHBoYSA6IDEuMDtcclxuICAgICAgLy8gYWxwaGFcclxuICAgICAgdGhpcy5fd29ybGRBbHBoYSA9IHdvcmxkQWxwaGEgKiB0aGlzLmFscGhhO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbkRpc3BsYXlFbGVtZW50LmRlZmF1bHRzID0ge1xyXG4gIGFscGhhOiAxLjAsXHJcbiAgdmlzaWJsZTogdHJ1ZSxcclxufTtcblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5hc3NldC5Bc3NldE1hbmFnZXJcclxuICogXHJcbiAqL1xyXG5jbGFzcyBBc3NldE1hbmFnZXIge1xyXG5cclxuICBzdGF0aWMgZ2V0KHR5cGUsIGtleSkge1xyXG4gICAgcmV0dXJuIHRoaXMuYXNzZXRzW3R5cGVdICYmIHRoaXMuYXNzZXRzW3R5cGVdW2tleV07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2V0KHR5cGUsIGtleSwgYXNzZXQpIHtcclxuICAgIGlmICghdGhpcy5hc3NldHNbdHlwZV0pIHtcclxuICAgICAgdGhpcy5hc3NldHNbdHlwZV0gPSB7fTtcclxuICAgIH1cclxuICAgIHRoaXMuYXNzZXRzW3R5cGVdW2tleV0gPSBhc3NldDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjb250YWlucyh0eXBlLCBrZXkpIHtcclxuICAgIHJldHVybiA7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQXNzZXRNYW5hZ2VyLmFzc2V0cyA9IHtcclxuICBpbWFnZToge30sXHJcbiAgc291bmQ6IHt9LFxyXG4gIHNwcml0ZXNoZWV0OiB7fSxcclxufTtcblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5kaXNwbGF5LlNwcml0ZVxyXG4gKiBAZXh0ZW5kcyBwaGluYS5kaXNwbGF5LkRpc3BsYXlFbGVtZW50XHJcbiAqL1xyXG5jbGFzcyBTcHJpdGUgZXh0ZW5kcyBEaXNwbGF5RWxlbWVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGltYWdlLCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuc3JjUmVjdCA9IG5ldyBSZWN0KCk7XHJcbiAgICB0aGlzLnNldEltYWdlKGltYWdlLCB3aWR0aCwgaGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIGRyYXcoY2FudmFzKSB7XHJcbiAgICB2YXIgaW1hZ2UgPSB0aGlzLmltYWdlLmRvbUVsZW1lbnQ7XHJcblxyXG4gICAgLy8gY2FudmFzLmNvbnRleHQuZHJhd0ltYWdlKGltYWdlLFxyXG4gICAgLy8gICAwLCAwLCBpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0LFxyXG4gICAgLy8gICAtdGhpcy53aWR0aCp0aGlzLm9yaWdpbi54LCAtdGhpcy5oZWlnaHQqdGhpcy5vcmlnaW4ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHRcclxuICAgIC8vICAgKTtcclxuXHJcbiAgICB2YXIgc3JjUmVjdCA9IHRoaXMuc3JjUmVjdDtcclxuICAgIGNhbnZhcy5jb250ZXh0LmRyYXdJbWFnZShpbWFnZSxcclxuICAgICAgc3JjUmVjdC54LCBzcmNSZWN0LnksIHNyY1JlY3Qud2lkdGgsIHNyY1JlY3QuaGVpZ2h0LFxyXG4gICAgICAtdGhpcy5fd2lkdGgqdGhpcy5vcmlnaW5YLCAtdGhpcy5faGVpZ2h0KnRoaXMub3JpZ2luWSwgdGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodFxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgc2V0SW1hZ2UoaW1hZ2UsIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIGlmICh0eXBlb2YgaW1hZ2UgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGltYWdlID0gQXNzZXRNYW5hZ2VyLmdldCgnaW1hZ2UnLCBpbWFnZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9pbWFnZSA9IGltYWdlO1xyXG4gICAgdGhpcy53aWR0aCA9IHRoaXMuX2ltYWdlLmRvbUVsZW1lbnQud2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMuX2ltYWdlLmRvbUVsZW1lbnQuaGVpZ2h0O1xyXG5cclxuICAgIGlmICh3aWR0aCkgeyB0aGlzLndpZHRoID0gd2lkdGg7IH1cclxuICAgIGlmIChoZWlnaHQpIHsgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7IH1cclxuXHJcbiAgICB0aGlzLmZyYW1lSW5kZXggPSAwO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgc2V0RnJhbWVJbmRleChpbmRleCwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgdmFyIHR3ICA9IHdpZHRoIHx8IHRoaXMuX3dpZHRoOyAgICAgIC8vIHR3XHJcbiAgICB2YXIgdGggID0gaGVpZ2h0IHx8IHRoaXMuX2hlaWdodDsgICAgLy8gdGhcclxuICAgIHZhciByb3cgPSB+fih0aGlzLmltYWdlLmRvbUVsZW1lbnQud2lkdGggLyB0dyk7XHJcbiAgICB2YXIgY29sID0gfn4odGhpcy5pbWFnZS5kb21FbGVtZW50LmhlaWdodCAvIHRoKTtcclxuICAgIHZhciBtYXhJbmRleCA9IHJvdypjb2w7XHJcbiAgICBpbmRleCA9IGluZGV4JW1heEluZGV4O1xyXG4gICAgXHJcbiAgICB2YXIgeCA9IGluZGV4JXJvdztcclxuICAgIHZhciB5ID0gfn4oaW5kZXgvcm93KTtcclxuICAgIHRoaXMuc3JjUmVjdC54ID0geCp0dztcclxuICAgIHRoaXMuc3JjUmVjdC55ID0geSp0aDtcclxuICAgIHRoaXMuc3JjUmVjdC53aWR0aCAgPSB0dztcclxuICAgIHRoaXMuc3JjUmVjdC5oZWlnaHQgPSB0aDtcclxuXHJcbiAgICB0aGlzLl9mcmFtZUluZGV4ID0gaW5kZXg7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBnZXQgaW1hZ2UoKSB7cmV0dXJuIHRoaXMuX2ltYWdlO31cclxuICBzZXQgaW1hZ2Uodikge1xyXG4gICAgdGhpcy5zZXRJbWFnZSh2KTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGZyYW1lSW5kZXgoKSB7cmV0dXJuIHRoaXMuX2ZyYW1lSW5kZXg7fVxyXG4gIHNldCBmcmFtZUluZGV4KGlkeCkge1xyXG4gICAgdGhpcy5zZXRGcmFtZUluZGV4KGlkeCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbn1cblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5kaXNwbGF5LlBsYWluRWxlbWVudFxyXG4gKiBAZXh0ZW5kcyBwaGluYS5kaXNwbGF5LkRpc3BsYXlFbGVtZW50XHJcbiAqL1xyXG5jbGFzcyBQbGFpbkVsZW1lbnQgZXh0ZW5kcyBEaXNwbGF5RWxlbWVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG4gICAgdGhpcy5jYW52YXMgPSBuZXcgQ2FudmFzKCk7XHJcbiAgICB0aGlzLmNhbnZhcy5zZXRTaXplKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIGRyYXcoY2FudmFzKSB7XHJcbiAgICB2YXIgaW1hZ2UgPSB0aGlzLmNhbnZhcy5kb21FbGVtZW50O1xyXG4gICAgdmFyIHcgPSBpbWFnZS53aWR0aDtcclxuICAgIHZhciBoID0gaW1hZ2UuaGVpZ2h0O1xyXG5cclxuICAgIHZhciB4ID0gLXcqdGhpcy5vcmlnaW4ueDtcclxuICAgIHZhciB5ID0gLWgqdGhpcy5vcmlnaW4ueTtcclxuXHJcbiAgICBjYW52YXMuY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsXHJcbiAgICAgIDAsIDAsIHcsIGgsXHJcbiAgICAgIHgsIHksIHcsIGhcclxuICAgICAgKTtcclxuICB9XHJcbn1cblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5kaXNwbGF5LkxheWVyXHJcbiAqIEBleHRlbmRzIHBoaW5hLmRpc3BsYXkuRGlzcGxheUVsZW1lbnRcclxuICovXHJcbmNsYXNzIExheWVyIGV4dGVuZHMgRGlzcGxheUVsZW1lbnQge1xyXG5cclxuICAvKiog5a2Q5L6b44KSIOiHquWIhuOBriBDYW52YXNSZW5kZXJlciDjgafmj4/nlLvjgZnjgovjgYsgKi9cclxuICAvLyByZW5kZXJDaGlsZEJ5U2VsZjogdHJ1ZSxcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgb3B0aW9ucyA9ICRzYWZlLmNhbGwoe30sIG9wdGlvbnN8fHt9LCB7XHJcbiAgICAvLyBvcHRpb25zID0gKHt9KS4kc2FmZShvcHRpb25zLCB7XHJcbiAgICAgIHdpZHRoOiA2NDAsXHJcbiAgICAgIGhlaWdodDogOTYwLFxyXG4gICAgfSk7XHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuICAgIHRoaXMud2lkdGggPSBvcHRpb25zLndpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcclxuICAgIHRoaXMuZ3JpZFggPSBuZXcgR3JpZChvcHRpb25zLndpZHRoLCAxNik7XHJcbiAgICB0aGlzLmdyaWRZID0gbmV3IEdyaWQob3B0aW9ucy5oZWlnaHQsIDE2KTtcclxuICAgIHRoaXMucmVuZGVyQ2hpbGRCeVNlbGYgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZHJhdyhjYW52YXMpIHtcclxuICAgIGlmICghdGhpcy5kb21FbGVtZW50KSByZXR1cm4gO1xyXG5cclxuICAgIHZhciBpbWFnZSA9IHRoaXMuZG9tRWxlbWVudDtcclxuICAgIGNhbnZhcy5jb250ZXh0LmRyYXdJbWFnZShpbWFnZSxcclxuICAgICAgMCwgMCwgaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodCxcclxuICAgICAgLXRoaXMud2lkdGgqdGhpcy5vcmlnaW5YLCAtdGhpcy5oZWlnaHQqdGhpcy5vcmlnaW5ZLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodFxyXG4gICAgICApO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZGlzcGxheS5DYW52YXNMYXllclxyXG4gKiBAZXh0ZW5kcyBwaGluYS5kaXNwbGF5LkxheWVyXHJcbiAqL1xyXG5jbGFzcyBDYW52YXNMYXllciBleHRlbmRzIExheWVyIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcbiAgICB0aGlzLmNhbnZhcyA9IG5ldyBDYW52YXMoKTtcclxuICAgIHRoaXMuY2FudmFzLndpZHRoICA9IHRoaXMud2lkdGg7XHJcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLmhlaWdodDtcclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyID0gbmV3IENhbnZhc1JlbmRlcmVyKHRoaXMuY2FudmFzKTtcclxuICAgIHRoaXMuZG9tRWxlbWVudCA9IHRoaXMuY2FudmFzLmRvbUVsZW1lbnQ7XHJcblxyXG4gICAgdGhpcy5vbignZW50ZXJmcmFtZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgdGVtcCA9IHRoaXMuX3dvcmxkTWF0cml4O1xyXG4gICAgICB0aGlzLl93b3JsZE1hdHJpeCA9IG51bGw7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMpO1xyXG4gICAgICB0aGlzLl93b3JsZE1hdHJpeCA9IHRlbXA7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRyYXcoY2FudmFzKSB7XHJcbiAgICB2YXIgaW1hZ2UgPSB0aGlzLmRvbUVsZW1lbnQ7XHJcbiAgICBjYW52YXMuY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsXHJcbiAgICAgIDAsIDAsIGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQsXHJcbiAgICAgIC10aGlzLndpZHRoKnRoaXMub3JpZ2luWCwgLXRoaXMuaGVpZ2h0KnRoaXMub3JpZ2luWSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHRcclxuICAgICAgKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmRpc3BsYXkuVGhyZWVMYXllclxyXG4gKiBAZXh0ZW5kcyBwaGluYS5kaXNwbGF5LkxheWVyXHJcbiAqL1xyXG5jbGFzcyBUaHJlZUxheWVyIGV4dGVuZHMgTGF5ZXIge1xyXG5cclxuICAvLyBzY2VuZTogbnVsbCxcclxuICAvLyBjYW1lcmE6IG51bGwsXHJcbiAgLy8gbGlnaHQ6IG51bGwsXHJcbiAgLy8gcmVuZGVyZXI6IG51bGwsXHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG5cclxuICAgIHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuXHJcbiAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSggNzUsIG9wdGlvbnMud2lkdGggLyBvcHRpb25zLmhlaWdodCwgMSwgMTAwMDAgKTtcclxuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSAxMDAwO1xyXG5cclxuICAgIHRoaXMubGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCggMHhmZmZmZmYsIDEgKTtcclxuICAgIHRoaXMubGlnaHQucG9zaXRpb24uc2V0KCAxLCAxLCAxICkubm9ybWFsaXplKCk7XHJcbiAgICB0aGlzLnNjZW5lLmFkZCggdGhpcy5saWdodCApO1xyXG5cclxuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRDbGVhckNvbG9yKCAweGYwZjBmMCApO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKCBvcHRpb25zLndpZHRoLCBvcHRpb25zLmhlaWdodCApO1xyXG5cclxuICAgIHRoaXMub24oJ2VudGVyZnJhbWUnLCBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoIHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQ7XHJcbiAgfVxyXG59XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZGlzcGxheS5TaGFwZVxyXG4gKiBAZXh0ZW5kcyBwaGluYS5kaXNwbGF5LlBsYWluRWxlbWVudFxyXG4gKi9cclxuY2xhc3MgU2hhcGUgZXh0ZW5kcyBQbGFpbkVsZW1lbnQge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAvLyBvcHRpb25zID0gKHt9KS4kc2FmZShvcHRpb25zIHx8IHt9LCBwaGluYS5kaXNwbGF5LlNoYXBlLmRlZmF1bHRzKTtcclxuICAgIG9wdGlvbnMgPSAkc2FmZS5jYWxsKHt9LCBvcHRpb25zfHx7fSwgU2hhcGUuZGVmYXVsdHMpO1xyXG5cclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG5cclxuICAgIHRoaXMucGFkZGluZyA9IG9wdGlvbnMucGFkZGluZztcclxuXHJcbiAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IG9wdGlvbnMuYmFja2dyb3VuZENvbG9yO1xyXG4gICAgdGhpcy5maWxsID0gb3B0aW9ucy5maWxsO1xyXG4gICAgdGhpcy5zdHJva2UgPSBvcHRpb25zLnN0cm9rZTtcclxuICAgIHRoaXMuc3Ryb2tlV2lkdGggPSBvcHRpb25zLnN0cm9rZVdpZHRoO1xyXG4gICAgdGhpcy5saW5lQ2FwID0gb3B0aW9ucy5saW5lQ2FwO1xyXG4gICAgdGhpcy5saW5lSm9pbiA9IG9wdGlvbnMubGluZUpvaW47XHJcblxyXG4gICAgdGhpcy5zaGFkb3cgPSBvcHRpb25zLnNoYWRvdztcclxuICAgIHRoaXMuc2hhZG93Qmx1ciA9IG9wdGlvbnMuc2hhZG93Qmx1cjtcclxuXHJcbiAgICB0aGlzLndhdGNoRHJhdyA9IHRydWU7XHJcbiAgICB0aGlzLl9kaXJ0eURyYXcgPSB0cnVlO1xyXG5cclxuICAgIHZhciBjaGVja1JlbmRlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAvLyByZW5kZXJcclxuICAgICAgaWYgKHRoaXMud2F0Y2hEcmF3ICYmIHRoaXMuX2RpcnR5RHJhdyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyKHRoaXMuY2FudmFzKTtcclxuICAgICAgICB0aGlzLl9kaXJ0eURyYXcgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLm9uKCdlbnRlcmZyYW1lJywgY2hlY2tSZW5kZXIpO1xyXG4gICAgdGhpcy5vbignYWRkZWQnLCBjaGVja1JlbmRlcik7XHJcbiAgfVxyXG5cclxuICBjYWxjQ2FudmFzV2lkdGgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy53aWR0aCArIHRoaXMucGFkZGluZyoyO1xyXG4gIH1cclxuXHJcbiAgY2FsY0NhbnZhc0hlaWdodCgpIHtcclxuICAgIHJldHVybiB0aGlzLmhlaWdodCArIHRoaXMucGFkZGluZyoyO1xyXG4gIH1cclxuXHJcbiAgY2FsY0NhbnZhc1NpemUgKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgd2lkdGg6IHRoaXMuY2FsY0NhbnZhc1dpZHRoKCksXHJcbiAgICAgIGhlaWdodDogdGhpcy5jYWxjQ2FudmFzSGVpZ2h0KCksXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaXNTdHJva2FibGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdHJva2UgJiYgMCA8IHRoaXMuc3Ryb2tlV2lkdGg7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAdmlydHVhbFxyXG4gICAqIEBwYXJhbSAge3BoaW5hLmdyYXBoaWNzLkNhbnZhc30gY2FudmFzIFxyXG4gICAqIEByZXR1cm4ge2FueX1cclxuICAgKi9cclxuICBwcmVyZW5kZXIoY2FudmFzKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHZpcnR1YWxcclxuICAgKiBAcGFyYW0gIHtwaGluYS5ncmFwaGljcy5DYW52YXN9IGNhbnZhcyBcclxuICAgKiBAcmV0dXJuIHthbnl9XHJcbiAgICovXHJcbiAgcG9zdHJlbmRlcihjYW52YXMpIHtcclxuXHJcbiAgfVxyXG5cclxuICByZW5kZXJGaWxsKGNhbnZhcykge1xyXG4gICAgY2FudmFzLmZpbGwoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlclN0cm9rZShjYW52YXMpIHtcclxuICAgIGNhbnZhcy5zdHJva2UoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcihjYW52YXMpIHtcclxuICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmNvbnRleHQ7XHJcbiAgICAvLyDjg6rjgrXjgqTjgrpcclxuICAgIHZhciBzaXplID0gdGhpcy5jYWxjQ2FudmFzU2l6ZSgpO1xyXG4gICAgY2FudmFzLnNldFNpemUoc2l6ZS53aWR0aCwgc2l6ZS5oZWlnaHQpO1xyXG4gICAgLy8g44Kv44Oq44Ki44Kr44Op44O8XHJcbiAgICBjYW52YXMuY2xlYXJDb2xvcih0aGlzLmJhY2tncm91bmRDb2xvcik7XHJcbiAgICAvLyDkuK3lv4PjgavluqfmqJnjgpLnp7vli5VcclxuICAgIGNhbnZhcy50cmFuc2Zvcm1DZW50ZXIoKTtcclxuXHJcbiAgICAvLyDmj4/nlLvliY3lh6bnkIZcclxuICAgIHRoaXMucHJlcmVuZGVyKHRoaXMuY2FudmFzKTtcclxuXHJcbiAgICAvLyDjgrnjg4jjg63jg7zjgq/mj4/nlLtcclxuICAgIGlmICh0aGlzLmlzU3Ryb2thYmxlKCkpIHtcclxuICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHRoaXMuc3Ryb2tlO1xyXG4gICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IHRoaXMuc3Ryb2tlV2lkdGg7XHJcbiAgICAgIGNvbnRleHQubGluZUNhcCA9IHRoaXMubGluZUNhcDtcclxuICAgICAgY29udGV4dC5saW5lSm9pbiA9IHRoaXMubGluZUpvaW47XHJcbiAgICAgIGNvbnRleHQuc2hhZG93Qmx1ciA9IDA7XHJcbiAgICAgIHRoaXMucmVuZGVyU3Ryb2tlKGNhbnZhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5aGX44KK44Gk44G244GX5o+P55S7XHJcbiAgICBpZiAodGhpcy5maWxsKSB7XHJcbiAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5maWxsO1xyXG5cclxuICAgICAgLy8gc2hhZG93IOOBriBvbi9vZmZcclxuICAgICAgaWYgKHRoaXMuc2hhZG93KSB7XHJcbiAgICAgICAgY29udGV4dC5zaGFkb3dDb2xvciA9IHRoaXMuc2hhZG93O1xyXG4gICAgICAgIGNvbnRleHQuc2hhZG93Qmx1ciA9IHRoaXMuc2hhZG93Qmx1cjtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBjb250ZXh0LnNoYWRvd0JsdXIgPSAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnJlbmRlckZpbGwoY2FudmFzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmj4/nlLvlvozlh6bnkIZcclxuICAgIHRoaXMucG9zdHJlbmRlcih0aGlzLmNhbnZhcyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgd2F0Y2hSZW5kZXJQcm9wZXJ0eShrZXkpIHtcclxuICAgIC8vIHRoaXMucHJvdG90eXBlLiR3YXRjaChrZXksIGZ1bmN0aW9uKG5ld1ZhbCwgb2xkVmFsKSB7XHJcbiAgICAkd2F0Y2guY2FsbCh0aGlzLnByb3RvdHlwZSwga2V5LCBmdW5jdGlvbihuZXdWYWwsIG9sZFZhbCkge1xyXG4gICAgICBpZiAobmV3VmFsICE9PSBvbGRWYWwpIHtcclxuICAgICAgICB0aGlzLl9kaXJ0eURyYXcgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyB3YXRjaFJlbmRlclByb3BlcnRpZXMoa2V5cykge1xyXG4gICAgdmFyIHdhdGNoUmVuZGVyUHJvcGVydHkgPSB0aGlzLndhdGNoUmVuZGVyUHJvcGVydHkgfHwgU2hhcGUud2F0Y2hSZW5kZXJQcm9wZXJ0eTtcclxuICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcclxuICAgICAgd2F0Y2hSZW5kZXJQcm9wZXJ0eS5jYWxsKHRoaXMsIGtleSk7XHJcbiAgICB9LCB0aGlzKTtcclxuICB9XHJcblxyXG59XHJcblxyXG4vLyBzdGF0aWMgcHJvcHNcclxuU2hhcGUuZGVmYXVsdHMgPSB7XHJcbiAgd2lkdGg6IDY0LFxyXG4gIGhlaWdodDogNjQsXHJcbiAgcGFkZGluZzogOCxcclxuXHJcbiAgYmFja2dyb3VuZENvbG9yOiAnI2FhYScsXHJcbiAgZmlsbDogJyMwMGEnLFxyXG4gIHN0cm9rZTogJyNhYWEnLFxyXG4gIHN0cm9rZVdpZHRoOiA0LFxyXG4gIGxpbmVDYXA6ICdyb3VuZCcsXHJcbiAgbGluZUpvaW46ICdyb3VuZCcsXHJcblxyXG4gIHNoYWRvdzogZmFsc2UsXHJcbiAgc2hhZG93Qmx1cjogNCxcclxufTtcclxuXHJcbi8vIF9kZWZpbmVkXHJcblNoYXBlLndhdGNoUmVuZGVyUHJvcGVydGllcyhbXHJcbiAgJ3dpZHRoJyxcclxuICAnaGVpZ2h0JyxcclxuICAncmFkaXVzJyxcclxuICAncGFkZGluZycsXHJcbiAgJ2JhY2tncm91bmRDb2xvcicsXHJcbiAgJ2ZpbGwnLFxyXG4gICdzdHJva2UnLFxyXG4gICdzdHJva2VXaWR0aCcsXHJcbiAgJ2xpbmVDYXAnLFxyXG4gICdsaW5lSm9pbicsXHJcbiAgJ3NoYWRvdycsXHJcbiAgJ3NoYWRvd0JsdXInLFxyXG5dKTtcclxuXHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmRpc3BsYXkuUmVjdGFuZ2xlU2hhcGVcclxuICogQGV4dGVuZHMgcGhpbmEuZGlzcGxheS5TaGFwZVxyXG4gKi9cclxuY2xhc3MgUmVjdGFuZ2xlU2hhcGUgZXh0ZW5kcyBTaGFwZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIC8vIG9wdGlvbnMgPSAoe30pLiRzYWZlKG9wdGlvbnMgfHwge30sIHBoaW5hLmRpc3BsYXkuUmVjdGFuZ2xlU2hhcGUuZGVmYXVsdHMpO1xyXG4gICAgb3B0aW9ucyA9ICRzYWZlLmNhbGwoe30sIG9wdGlvbnN8fHt9LCBSZWN0YW5nbGVTaGFwZS5kZWZhdWx0cyk7XHJcblxyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcblxyXG4gICAgdGhpcy5jb3JuZXJSYWRpdXMgPSBvcHRpb25zLmNvcm5lclJhZGl1cztcclxuICB9XHJcblxyXG4gIHByZXJlbmRlcihjYW52YXMpIHtcclxuICAgIGNhbnZhcy5yb3VuZFJlY3QoLXRoaXMud2lkdGgvMiwgLXRoaXMuaGVpZ2h0LzIsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLmNvcm5lclJhZGl1cyk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLy8gc3RhdGljIHByb3BzXHJcblJlY3RhbmdsZVNoYXBlLmRlZmF1bHRzID0ge1xyXG4gIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICBmaWxsOiAnYmx1ZScsXHJcbiAgc3Ryb2tlOiAnI2FhYScsXHJcbiAgc3Ryb2tlV2lkdGg6IDQsXHJcbiAgY29ybmVyUmFkaXVzOiAwLFxyXG59O1xyXG5cclxuLy8gX2RlZmluZWRcclxuU2hhcGUud2F0Y2hSZW5kZXJQcm9wZXJ0eS5jYWxsKFJlY3RhbmdsZVNoYXBlLCAnY29ybmVyUmFkaXVzJyk7XHJcblxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5kaXNwbGF5LkNpcmNsZVNoYXBlXHJcbiAqIEBleHRlbmRzIHBoaW5hLmRpc3BsYXkuU2hhcGVcclxuICovXHJcbmNsYXNzIENpcmNsZVNoYXBlIGV4dGVuZHMgU2hhcGUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAvLyBvcHRpb25zID0gKHt9KS4kc2FmZShvcHRpb25zIHx8IHt9LCBwaGluYS5kaXNwbGF5LkNpcmNsZVNoYXBlLmRlZmF1bHRzKTtcclxuICAgIG9wdGlvbnMgPSAkc2FmZS5jYWxsKHt9LCBvcHRpb25zfHx7fSwgQ2lyY2xlU2hhcGUuZGVmYXVsdHMpO1xyXG5cclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG5cclxuICAgIHRoaXMuc2V0Qm91bmRpbmdUeXBlKCdjaXJjbGUnKTtcclxuICB9XHJcblxyXG4gIHByZXJlbmRlcihjYW52YXMpIHtcclxuICAgIGNhbnZhcy5jaXJjbGUoMCwgMCwgdGhpcy5yYWRpdXMpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8vIHN0YXRpYyBwcm9wc1xyXG5DaXJjbGVTaGFwZS5kZWZhdWx0cyA9IHtcclxuICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgZmlsbDogJ3JlZCcsXHJcbiAgc3Ryb2tlOiAnI2FhYScsXHJcbiAgc3Ryb2tlV2lkdGg6IDQsXHJcbiAgcmFkaXVzOiAzMixcclxufTtcclxuXHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmRpc3BsYXkuVHJpYW5nbGVTaGFwZVxyXG4gKiBAZXh0ZW5kcyBwaGluYS5kaXNwbGF5LlNoYXBlXHJcbiAqL1xyXG5jbGFzcyBUcmlhbmdsZVNoYXBlIGV4dGVuZHMgU2hhcGUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAvLyBvcHRpb25zID0gKHt9KS4kc2FmZShvcHRpb25zIHx8IHt9LCBwaGluYS5kaXNwbGF5LlRyaWFuZ2xlU2hhcGUuZGVmYXVsdHMpO1xyXG4gICAgb3B0aW9ucyA9ICRzYWZlLmNhbGwoe30sIG9wdGlvbnN8fHt9LCBUcmlhbmdsZVNoYXBlLmRlZmF1bHRzKTtcclxuXHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuXHJcbiAgICB0aGlzLnNldEJvdW5kaW5nVHlwZSgnY2lyY2xlJyk7XHJcbiAgfVxyXG5cclxuICBwcmVyZW5kZXIoY2FudmFzKSB7XHJcbiAgICBjYW52YXMucG9seWdvbigwLCAwLCB0aGlzLnJhZGl1cywgMyk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLy8gc3RhdGljIHByb3BzXHJcblRyaWFuZ2xlU2hhcGUuZGVmYXVsdHMgPSB7XHJcbiAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gIGZpbGw6ICdncmVlbicsXHJcbiAgc3Ryb2tlOiAnI2FhYScsXHJcbiAgc3Ryb2tlV2lkdGg6IDQsXHJcblxyXG4gIHJhZGl1czogMzIsXHJcbn07XHJcblxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5kaXNwbGF5LlN0YXJTaGFwZVxyXG4gKiBAZXh0ZW5kcyBwaGluYS5kaXNwbGF5LlNoYXBlXHJcbiAqL1xyXG5jbGFzcyBTdGFyU2hhcGUgZXh0ZW5kcyBTaGFwZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIC8vIG9wdGlvbnMgPSAoe30pLiRzYWZlKG9wdGlvbnMgfHwge30sIHBoaW5hLmRpc3BsYXkuU3RhclNoYXBlLmRlZmF1bHRzKTtcclxuICAgIG9wdGlvbnMgPSAkc2FmZS5jYWxsKHt9LCBvcHRpb25zfHx7fSwgU3RhclNoYXBlLmRlZmF1bHRzKTtcclxuXHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuXHJcbiAgICB0aGlzLnNldEJvdW5kaW5nVHlwZSgnY2lyY2xlJyk7XHJcbiAgICB0aGlzLnNpZGVzID0gb3B0aW9ucy5zaWRlcztcclxuICAgIHRoaXMuc2lkZUluZGVudCA9IG9wdGlvbnMuc2lkZUluZGVudDtcclxuICB9XHJcblxyXG4gIHByZXJlbmRlcihjYW52YXMpIHtcclxuICAgIGNhbnZhcy5zdGFyKDAsIDAsIHRoaXMucmFkaXVzLCB0aGlzLnNpZGVzLCB0aGlzLnNpZGVJbmRlbnQpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8vIHN0YXRpYyBwcm9wc1xyXG5TdGFyU2hhcGUuZGVmYXVsdHMgPSB7XHJcbiAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gIGZpbGw6ICd5ZWxsb3cnLFxyXG4gIHN0cm9rZTogJyNhYWEnLFxyXG4gIHN0cm9rZVdpZHRoOiA0LFxyXG5cclxuICByYWRpdXM6IDMyLFxyXG4gIHNpZGVzOiA1LFxyXG4gIHNpZGVJbmRlbnQ6IDAuMzgsXHJcbn07XHJcblxyXG4vLyBfZGVmaW5lZFxyXG5TaGFwZS53YXRjaFJlbmRlclByb3BlcnR5LmNhbGwoU3RhclNoYXBlLCAnc2lkZXMnKTtcclxuU2hhcGUud2F0Y2hSZW5kZXJQcm9wZXJ0eS5jYWxsKFN0YXJTaGFwZSwgJ3NpZGVJbmRlbnQnKTtcclxuXHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmRpc3BsYXkuUG9seWdvblNoYXBlXHJcbiAqIEBleHRlbmRzIHBoaW5hLmRpc3BsYXkuU2hhcGVcclxuICovXHJcbmNsYXNzIFBvbHlnb25TaGFwZSBleHRlbmRzIFNoYXBlIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgLy8gb3B0aW9ucyA9ICh7fSkuJHNhZmUob3B0aW9ucyB8fCB7fSwgcGhpbmEuZGlzcGxheS5Qb2x5Z29uU2hhcGUuZGVmYXVsdHMpO1xyXG4gICAgb3B0aW9ucyA9ICRzYWZlLmNhbGwoe30sIG9wdGlvbnN8fHt9LCBQb2x5Z29uU2hhcGUuZGVmYXVsdHMpO1xyXG5cclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG5cclxuICAgIHRoaXMuc2V0Qm91bmRpbmdUeXBlKCdjaXJjbGUnKTtcclxuICAgIHRoaXMuc2lkZXMgPSBvcHRpb25zLnNpZGVzO1xyXG4gIH1cclxuXHJcbiAgcHJlcmVuZGVyKGNhbnZhcykge1xyXG4gICAgY2FudmFzLnBvbHlnb24oMCwgMCwgdGhpcy5yYWRpdXMsIHRoaXMuc2lkZXMpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8vIHN0YXRpYyBwcm9wc1xyXG5Qb2x5Z29uU2hhcGUuZGVmYXVsdHMgPSB7XHJcbiAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gIGZpbGw6ICdjeWFuJyxcclxuICBzdHJva2U6ICcjYWFhJyxcclxuICBzdHJva2VXaWR0aDogNCxcclxuXHJcbiAgcmFkaXVzOiAzMixcclxuICBzaWRlczogNSxcclxufTtcclxuXHJcbi8vIGRlZmluZWRcclxuU2hhcGUud2F0Y2hSZW5kZXJQcm9wZXJ0eS5jYWxsKFBvbHlnb25TaGFwZSwgJ3NpZGVzJyk7XHJcblxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5kaXNwbGF5LkhlYXJ0U2hhcGVcclxuICogQGV4dGVuZHMgcGhpbmEuZGlzcGxheS5TaGFwZVxyXG4gKi9cclxuY2xhc3MgSGVhcnRTaGFwZSBleHRlbmRzIFNoYXBlIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgLy8gb3B0aW9ucyA9ICh7fSkuJHNhZmUob3B0aW9ucyB8fCB7fSwgcGhpbmEuZGlzcGxheS5IZWFydFNoYXBlLmRlZmF1bHRzKTtcclxuICAgIG9wdGlvbnMgPSAkc2FmZS5jYWxsKHt9LCBvcHRpb25zfHx7fSwgSGVhcnRTaGFwZS5kZWZhdWx0cyk7XHJcblxyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcblxyXG4gICAgdGhpcy5zZXRCb3VuZGluZ1R5cGUoJ2NpcmNsZScpO1xyXG4gICAgdGhpcy5jb3JuZXJBbmdsZSA9IG9wdGlvbnMuY29ybmVyQW5nbGU7XHJcbiAgfVxyXG5cclxuICBwcmVyZW5kZXIoY2FudmFzKSB7XHJcbiAgICBjYW52YXMuaGVhcnQoMCwgMCwgdGhpcy5yYWRpdXMsIHRoaXMuY29ybmVyQW5nbGUpO1xyXG4gIH1cclxuXHJcbn1cclxuLy8gc3RhdGljIHByb3BzXHJcbkhlYXJ0U2hhcGUuZGVmYXVsdHMgPSB7XHJcbiAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gIGZpbGw6ICdwaW5rJyxcclxuICBzdHJva2U6ICcjYWFhJyxcclxuICBzdHJva2VXaWR0aDogNCxcclxuXHJcbiAgcmFkaXVzOiAzMixcclxuICBjb3JuZXJBbmdsZTogNDUsXHJcbn07XHJcblxyXG4vLyBkZWZpbmVkXHJcblNoYXBlLndhdGNoUmVuZGVyUHJvcGVydHkuY2FsbChIZWFydFNoYXBlLCAnY29ybmVyQW5nbGUnKTtcclxuXHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmRpc3BsYXkuUGF0aFNoYXBlXHJcbiAqIEBleHRlbmRzIHBoaW5hLmRpc3BsYXkuU2hhcGVcclxuICovXHJcbmNsYXNzIFBhdGhTaGFwZSBleHRlbmRzIFNoYXBlIHtcclxuICAvLyBwYXRoczogbnVsbCxcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgLy8gb3B0aW9ucyA9ICh7fSkuJHNhZmUob3B0aW9ucyB8fCB7fSwgcGhpbmEuZGlzcGxheS5QYXRoU2hhcGUuZGVmYXVsdHMpO1xyXG4gICAgb3B0aW9ucyA9ICRzYWZlLmNhbGwoe30sIG9wdGlvbnN8fHt9LCBQYXRoU2hhcGUuZGVmYXVsdHMpO1xyXG5cclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG4gICAgdGhpcy5wYXRocyA9IG9wdGlvbnMucGF0aHMgfHwgW107XHJcbiAgICB0aGlzLmxpbmVKb2luID0gb3B0aW9ucy5saW5lSm9pbjtcclxuICAgIHRoaXMubGluZUNhcCA9IG9wdGlvbnMubGluZUNhcDtcclxuICB9XHJcblxyXG4gIHNldFBhdGhzIChwYXRocykge1xyXG4gICAgdGhpcy5wYXRocyA9IHBhdGhzO1xyXG4gICAgdGhpcy5fZGlydHlEcmF3ID0gdHJ1ZTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgY2xlYXIgKCkge1xyXG4gICAgdGhpcy5wYXRocy5sZW5ndGggPSAwO1xyXG4gICAgdGhpcy5fZGlydHlEcmF3ID0gdHJ1ZTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgYWRkUGF0aHMgKHBhdGhzKSB7XHJcbiAgICBbXS5wdXNoLmFwcGx5KHRoaXMucGF0aHMsIHBhdGhzKTtcclxuICAgIHRoaXMuX2RpcnR5RHJhdyA9IHRydWU7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGFkZFBhdGggKHgsIHkpIHtcclxuICAgIHRoaXMucGF0aHMucHVzaChwaGluYS5nZW9tLlZlY3RvcjIoeCwgeSkpO1xyXG4gICAgdGhpcy5fZGlydHlEcmF3ID0gdHJ1ZTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGF0aCAoaSkge1xyXG4gICAgcmV0dXJuIHRoaXMucGF0aHNbaV07XHJcbiAgfVxyXG5cclxuICBnZXRQYXRocyAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXRocztcclxuICB9XHJcblxyXG4gIGNoYW5nZVBhdGggKGksIHgsIHkpIHtcclxuICAgIHRoaXMucGF0aHNbaV0uc2V0KHgsIHkpO1xyXG4gICAgdGhpcy5fZGlydHlEcmF3ID0gdHJ1ZTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgY2FsY0NhbnZhc1NpemUgKCkge1xyXG4gICAgdmFyIHBhdGhzID0gdGhpcy5wYXRocztcclxuICAgIGlmIChwYXRocy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB3aWR0aDogdGhpcy5wYWRkaW5nICogMixcclxuICAgICAgICBoZWlnaHQ6dGhpcy5wYWRkaW5nICogMixcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHZhciBtYXhYID0gLUluZmluaXR5O1xyXG4gICAgdmFyIG1heFkgPSAtSW5maW5pdHk7XHJcbiAgICB2YXIgbWluWCA9IEluZmluaXR5O1xyXG4gICAgdmFyIG1pblkgPSBJbmZpbml0eTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gcGF0aHMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcclxuICAgICAgdmFyIHBhdGggPSBwYXRoc1tpXTtcclxuICAgICAgaWYgKG1heFggPCBwYXRoLngpIHsgbWF4WCA9IHBhdGgueDsgfVxyXG4gICAgICBpZiAobWluWCA+IHBhdGgueCkgeyBtaW5YID0gcGF0aC54OyB9XHJcbiAgICAgIGlmIChtYXhZIDwgcGF0aC55KSB7IG1heFkgPSBwYXRoLnk7IH1cclxuICAgICAgaWYgKG1pblkgPiBwYXRoLnkpIHsgbWluWSA9IHBhdGgueTsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgd2lkdGg6IE1hdGgubWF4KE1hdGguYWJzKG1heFgpLCBNYXRoLmFicyhtaW5YKSkgKiAyICsgdGhpcy5wYWRkaW5nICogMixcclxuICAgICAgaGVpZ2h0OiBNYXRoLm1heChNYXRoLmFicyhtYXhZKSwgTWF0aC5hYnMobWluWSkpICogMiArIHRoaXMucGFkZGluZyAqIDIsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY2FsY0NhbnZhc1dpZHRoICgpIHtcclxuICAgIHJldHVybiB0aGlzLmNhbGNDYW52YXNTaXplKCkud2lkdGg7XHJcbiAgfVxyXG5cclxuICBjYWxjQ2FudmFzSGVpZ2h0ICgpIHtcclxuICAgIHJldHVybiB0aGlzLmNhbGNDYW52YXNTaXplKCkuaGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgcHJlcmVuZGVyIChjYW52YXMpIHtcclxuICAgIHZhciBwYXRocyA9IHRoaXMucGF0aHM7XHJcbiAgICBpZiAocGF0aHMubGVuZ3RoID4gMSkge1xyXG4gICAgICB2YXIgYyA9IGNhbnZhcy5jb250ZXh0O1xyXG4gICAgICB2YXIgcCA9IHBhdGhzWzBdO1xyXG4gICAgICBjLmJlZ2luUGF0aCgpO1xyXG4gICAgICBjLm1vdmVUbyhwLngsIHAueSk7XHJcbiAgICAgIGZvciAodmFyIGkgPSAxLCBsZW4gPSBwYXRocy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xyXG4gICAgICAgIHAgPSBwYXRoc1tpXTtcclxuICAgICAgICBjLmxpbmVUbyhwLngsIHAueSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG4vLyBzdGF0aWMgcHJvcHNcclxuUGF0aFNoYXBlLmRlZmF1bHRzID0ge1xyXG4gIGZpbGw6IGZhbHNlLFxyXG4gIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxufTtcblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5kaXNwbGF5LkxhYmVsXHJcbiAqIEBleHRlbmRzIHBoaW5hLmRpc3BsYXkuU2hhcGVcclxuICovXHJcbmNsYXNzIExhYmVsIGV4dGVuZHMgU2hhcGUge1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gJ29iamVjdCcpIHtcclxuICAgICAgb3B0aW9ucyA9IHsgdGV4dDogYXJndW1lbnRzWzBdLCB9O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIG9wdGlvbnMgPSBhcmd1bWVudHNbMF07XHJcbiAgICB9XHJcblxyXG4gICAgb3B0aW9ucyA9ICRzYWZlLmNhbGwoe30sIG9wdGlvbnN8fHt9LCBMYWJlbC5kZWZhdWx0cyk7XHJcbiAgICAvLyBvcHRpb25zID0gKHt9KS4kc2FmZShvcHRpb25zLCBwaGluYS5kaXNwbGF5LkxhYmVsLmRlZmF1bHRzKTtcclxuXHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuXHJcbiAgICB0aGlzLnRleHQgPSBvcHRpb25zLnRleHQ7XHJcbiAgICB0aGlzLmZvbnRTaXplID0gb3B0aW9ucy5mb250U2l6ZTtcclxuICAgIHRoaXMuZm9udFdlaWdodCA9IG9wdGlvbnMuZm9udFdlaWdodDtcclxuICAgIHRoaXMuZm9udEZhbWlseSA9IG9wdGlvbnMuZm9udEZhbWlseTtcclxuICAgIHRoaXMuYWxpZ24gPSBvcHRpb25zLmFsaWduO1xyXG4gICAgdGhpcy5iYXNlbGluZSA9IG9wdGlvbnMuYmFzZWxpbmU7XHJcbiAgICB0aGlzLmxpbmVIZWlnaHQgPSBvcHRpb25zLmxpbmVIZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBjYWxjQ2FudmFzV2lkdGgoKSB7XHJcbiAgICB2YXIgd2lkdGggPSAwO1xyXG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuY2FudmFzO1xyXG4gICAgY2FudmFzLmNvbnRleHQuZm9udCA9IHRoaXMuZm9udDtcclxuICAgIHRoaXMuX2xpbmVzLmZvckVhY2goZnVuY3Rpb24obGluZSkge1xyXG4gICAgICB2YXIgdyA9IGNhbnZhcy5jb250ZXh0Lm1lYXN1cmVUZXh0KGxpbmUpLndpZHRoO1xyXG4gICAgICBpZiAod2lkdGggPCB3KSB7XHJcbiAgICAgICAgd2lkdGggPSB3O1xyXG4gICAgICB9XHJcbiAgICB9LCB0aGlzKTtcclxuICAgIGlmICh0aGlzLmFsaWduICE9PSAnY2VudGVyJykgd2lkdGgqPTI7XHJcblxyXG4gICAgcmV0dXJuIHdpZHRoICsgdGhpcy5wYWRkaW5nKjI7XHJcbiAgfVxyXG5cclxuICBjYWxjQ2FudmFzSGVpZ2h0KCkge1xyXG4gICAgdmFyIGhlaWdodCA9IHRoaXMuZm9udFNpemUgKiB0aGlzLl9saW5lcy5sZW5ndGg7XHJcbiAgICBpZiAodGhpcy5iYXNlbGluZSAhPT0gJ21pZGRsZScpIGhlaWdodCo9MjtcclxuICAgIHJldHVybiBoZWlnaHQqdGhpcy5saW5lSGVpZ2h0ICsgdGhpcy5wYWRkaW5nKjI7XHJcbiAgfVxyXG5cclxuICBwcmVyZW5kZXIoY2FudmFzKSB7XHJcbiAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5jb250ZXh0O1xyXG4gICAgY29udGV4dC5mb250ID0gdGhpcy5mb250O1xyXG4gICAgY29udGV4dC50ZXh0QWxpZ24gPSB0aGlzLmFsaWduO1xyXG4gICAgY29udGV4dC50ZXh0QmFzZWxpbmUgPSB0aGlzLmJhc2VsaW5lO1xyXG5cclxuICAgIHZhciBsaW5lcyA9IHRoaXMuX2xpbmVzO1xyXG4gICAgdGhpcy5saW5lU2l6ZSA9IHRoaXMuZm9udFNpemUqdGhpcy5saW5lSGVpZ2h0O1xyXG4gICAgdGhpcy5fb2Zmc2V0ID0gLU1hdGguZmxvb3IobGluZXMubGVuZ3RoLzIpKnRoaXMubGluZVNpemU7XHJcbiAgICB0aGlzLl9vZmZzZXQgKz0gKChsaW5lcy5sZW5ndGgrMSklMikgKiAodGhpcy5saW5lU2l6ZS8yKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckZpbGwoY2FudmFzKSB7XHJcbiAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5jb250ZXh0O1xyXG4gICAgdGhpcy5fbGluZXMuZm9yRWFjaChmdW5jdGlvbihsaW5lLCBpKSB7XHJcbiAgICAgIGNvbnRleHQuZmlsbFRleHQobGluZSwgMCwgaSp0aGlzLmxpbmVTaXplK3RoaXMuX29mZnNldCk7XHJcbiAgICB9LCB0aGlzKTtcclxuICB9XHJcblxyXG4gIHJlbmRlclN0cm9rZShjYW52YXMpIHtcclxuICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmNvbnRleHQ7XHJcbiAgICB0aGlzLl9saW5lcy5mb3JFYWNoKGZ1bmN0aW9uKGxpbmUsIGkpIHtcclxuICAgICAgY29udGV4dC5zdHJva2VUZXh0KGxpbmUsIDAsIGkqdGhpcy5saW5lU2l6ZSt0aGlzLl9vZmZzZXQpO1xyXG4gICAgfSwgdGhpcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiB0ZXh0XHJcbiAgICovXHJcbiAgZ2V0IHRleHQoKSB7IHJldHVybiB0aGlzLl90ZXh0OyB9XHJcbiAgc2V0IHRleHQodikge1xyXG4gICAgdGhpcy5fdGV4dCA9IHY7XHJcbiAgICB0aGlzLl9saW5lcyA9ICh0aGlzLnRleHQgKyAnJykuc3BsaXQoJ1xcbicpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGZvbnQoKSB7XHJcbiAgICByZXR1cm4gZm9ybWF0LmNhbGwoXCJ7Zm9udFdlaWdodH0ge2ZvbnRTaXplfXB4IHtmb250RmFtaWx5fVwiLCB0aGlzKTtcclxuICAgIC8vIHJldHVybiBcIntmb250V2VpZ2h0fSB7Zm9udFNpemV9cHgge2ZvbnRGYW1pbHl9XCIuZm9ybWF0KHRoaXMpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8vIHN0YXRpYyBwcm9wc1xyXG5MYWJlbC5kZWZhdWx0cyA9IHtcclxuICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcblxyXG4gIGZpbGw6ICdibGFjaycsXHJcbiAgc3Ryb2tlOiBudWxsLFxyXG4gIHN0cm9rZVdpZHRoOiAyLFxyXG5cclxuICAvLyBcclxuICB0ZXh0OiAnSGVsbG8sIHdvcmxkIScsXHJcbiAgLy8gXHJcbiAgZm9udFNpemU6IDMyLFxyXG4gIGZvbnRXZWlnaHQ6ICcnLFxyXG4gIGZvbnRGYW1pbHk6IFwiJ0hpcmFLYWt1UHJvTi1XMydcIiwgLy8gSGlyYWdpbm8gb3IgSGVsdmV0aWNhLFxyXG4gIC8vIFxyXG4gIGFsaWduOiAnY2VudGVyJyxcclxuICBiYXNlbGluZTogJ21pZGRsZScsXHJcbiAgbGluZUhlaWdodDogMS4yLFxyXG59O1xyXG5cclxuLy8gZGVmaW5lZFxyXG5TaGFwZS53YXRjaFJlbmRlclByb3BlcnR5LmNhbGwoTGFiZWwsICd0ZXh0Jyk7XHJcblNoYXBlLndhdGNoUmVuZGVyUHJvcGVydHkuY2FsbChMYWJlbCwgJ2ZvbnRTaXplJyk7XHJcblNoYXBlLndhdGNoUmVuZGVyUHJvcGVydHkuY2FsbChMYWJlbCwgJ2ZvbnRXZWlnaHQnKTtcclxuU2hhcGUud2F0Y2hSZW5kZXJQcm9wZXJ0eS5jYWxsKExhYmVsLCAnZm9udEZhbWlseScpO1xyXG5TaGFwZS53YXRjaFJlbmRlclByb3BlcnR5LmNhbGwoTGFiZWwsICdhbGlnbicpO1xyXG5TaGFwZS53YXRjaFJlbmRlclByb3BlcnR5LmNhbGwoTGFiZWwsICdiYXNlbGluZScpO1xyXG5TaGFwZS53YXRjaFJlbmRlclByb3BlcnR5LmNhbGwoTGFiZWwsICdsaW5lSGVpZ2h0Jyk7XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuYWNjZXNzb3J5LkZyYW1lQW5pbWF0aW9uXHJcbiAqIEZyYW1lQW5pbWF0aW9uXHJcbiAqIEBleHRlbmRzIHBoaW5hLmFjY2Vzc29yeS5BY2Nlc3NvcnlcclxuICovXHJcbmNsYXNzIEZyYW1lQW5pbWF0aW9uIGV4dGVuZHMgQWNjZXNzb3J5IHtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc3MpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5zcyA9IEFzc2V0TWFuYWdlci5nZXQoJ3Nwcml0ZXNoZWV0Jywgc3MpO1xyXG4gICAgdGhpcy5wYXVzZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5maW5pc2hlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5maXQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgaWYgKHRoaXMucGF1c2VkKSByZXR1cm4gO1xyXG4gICAgaWYgKCF0aGlzLmN1cnJlbnRBbmltYXRpb24pIHJldHVybiA7XHJcblxyXG4gICAgaWYgKHRoaXMuZmluaXNoZWQpIHtcclxuICAgICAgdGhpcy5maW5pc2hlZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmN1cnJlbnRGcmFtZUluZGV4ID0gMDtcclxuICAgICAgcmV0dXJuIDtcclxuICAgIH1cclxuXHJcbiAgICArK3RoaXMuZnJhbWU7XHJcbiAgICBpZiAodGhpcy5mcmFtZSV0aGlzLmN1cnJlbnRBbmltYXRpb24uZnJlcXVlbmN5ID09PSAwKSB7XHJcbiAgICAgICsrdGhpcy5jdXJyZW50RnJhbWVJbmRleDtcclxuICAgICAgdGhpcy5fdXBkYXRlRnJhbWUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdvdG9BbmRQbGF5KG5hbWUsIGtlZXApIHtcclxuICAgIGtlZXAgPSAoa2VlcCAhPT0gdW5kZWZpbmVkKSA/IGtlZXAgOiB0cnVlO1xyXG4gICAgaWYgKGtlZXAgJiYgbmFtZSA9PT0gdGhpcy5jdXJyZW50QW5pbWF0aW9uTmFtZVxyXG4gICAgICAgICAgICAgJiYgdGhpcy5jdXJyZW50RnJhbWVJbmRleCA8IHRoaXMuY3VycmVudEFuaW1hdGlvbi5mcmFtZXMubGVuZ3RoXHJcbiAgICAgICAgICAgICAmJiAhdGhpcy5wYXVzZWQpIHtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICB0aGlzLmN1cnJlbnRBbmltYXRpb25OYW1lID0gbmFtZTtcclxuICAgIHRoaXMuZnJhbWUgPSAwO1xyXG4gICAgdGhpcy5jdXJyZW50RnJhbWVJbmRleCA9IDA7XHJcbiAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24gPSB0aGlzLnNzLmdldEFuaW1hdGlvbihuYW1lKTtcclxuICAgIHRoaXMuX3VwZGF0ZUZyYW1lKCk7XHJcblxyXG4gICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGdvdG9BbmRTdG9wKG5hbWUpIHtcclxuICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbk5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5mcmFtZSA9IDA7XHJcbiAgICB0aGlzLmN1cnJlbnRGcmFtZUluZGV4ID0gMDtcclxuICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbiA9IHRoaXMuc3MuZ2V0QW5pbWF0aW9uKG5hbWUpO1xyXG4gICAgdGhpcy5fdXBkYXRlRnJhbWUoKTtcclxuXHJcbiAgICB0aGlzLnBhdXNlZCA9IHRydWU7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBfdXBkYXRlRnJhbWUoKSB7XHJcbiAgICB2YXIgYW5pbSA9IHRoaXMuY3VycmVudEFuaW1hdGlvbjtcclxuICAgIGlmIChhbmltKSB7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRGcmFtZUluZGV4ID49IGFuaW0uZnJhbWVzLmxlbmd0aCkge1xyXG4gICAgICAgIGlmIChhbmltLm5leHQpIHtcclxuICAgICAgICAgIHRoaXMuZ290b0FuZFBsYXkoYW5pbS5uZXh0KTtcclxuICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5wYXVzZWQgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5maW5pc2hlZCA9IHRydWU7XHJcbiAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBpbmRleCA9IGFuaW0uZnJhbWVzW3RoaXMuY3VycmVudEZyYW1lSW5kZXhdO1xyXG4gICAgdmFyIGZyYW1lID0gdGhpcy5zcy5nZXRGcmFtZShpbmRleCk7XHJcbiAgICB0aGlzLnRhcmdldC5zcmNSZWN0LnNldChmcmFtZS54LCBmcmFtZS55LCBmcmFtZS53aWR0aCwgZnJhbWUuaGVpZ2h0KTtcclxuXHJcbiAgICBpZiAodGhpcy5maXQpIHtcclxuICAgICAgdGhpcy50YXJnZXQud2lkdGggPSBmcmFtZS53aWR0aDtcclxuICAgICAgdGhpcy50YXJnZXQuaGVpZ2h0ID0gZnJhbWUuaGVpZ2h0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5hY2Nlc3NvcnkuRHJhZ2dhYmxlXHJcbiAqIERyYWdnYWJsZVxyXG4gKiBAZXh0ZW5kcyBwaGluYS5hY2Nlc3NvcnkuQWNjZXNzb3J5XHJcbiAqL1xyXG5jbGFzcyBEcmFnZ2FibGUgZXh0ZW5kcyBBY2Nlc3Nvcnkge1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcih0YXJnZXQpIHtcclxuICAgIHN1cGVyKHRhcmdldCk7XHJcblxyXG4gICAgdGhpcy5pbml0aWFsUG9zaXRpb24gPSBuZXcgVmVjdG9yMigwLCAwKTtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICB0aGlzLm9uKCdhdHRhY2hlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLnRhcmdldC5zZXRJbnRlcmFjdGl2ZSh0cnVlKTtcclxuXHJcbiAgICAgIHRoaXMuX2RyYWdnaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICB0aGlzLnRhcmdldC5vbigncG9pbnRzdGFydCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBpZiAoRHJhZ2dhYmxlLl9sb2NrKSByZXR1cm4gO1xyXG5cclxuICAgICAgICB0aGlzLl9kcmFnZ2luZyA9IHRydWU7XHJcbiAgICAgICAgc2VsZi5pbml0aWFsUG9zaXRpb24ueCA9IHRoaXMueDtcclxuICAgICAgICBzZWxmLmluaXRpYWxQb3NpdGlvbi55ID0gdGhpcy55O1xyXG4gICAgICAgIHNlbGYuZmxhcmUoJ2RyYWdzdGFydCcpO1xyXG4gICAgICAgIHRoaXMuZmxhcmUoJ2RyYWdzdGFydCcpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy50YXJnZXQub24oJ3BvaW50bW92ZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2RyYWdnaW5nKSByZXR1cm4gO1xyXG5cclxuICAgICAgICB0aGlzLnggKz0gZS5wb2ludGVyLmR4O1xyXG4gICAgICAgIHRoaXMueSArPSBlLnBvaW50ZXIuZHk7XHJcbiAgICAgICAgc2VsZi5mbGFyZSgnZHJhZycpO1xyXG4gICAgICAgIHRoaXMuZmxhcmUoJ2RyYWcnKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLnRhcmdldC5vbigncG9pbnRlbmQnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9kcmFnZ2luZykgcmV0dXJuIDtcclxuXHJcbiAgICAgICAgdGhpcy5fZHJhZ2dpbmcgPSBmYWxzZTtcclxuICAgICAgICBzZWxmLmZsYXJlKCdkcmFnZW5kJyk7XHJcbiAgICAgICAgdGhpcy5mbGFyZSgnZHJhZ2VuZCcpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYmFjayh0aW1lLCBlYXNpbmcpIHtcclxuICAgIGlmICh0aW1lKSB7XHJcbiAgICAgIHZhciB0ID0gdGhpcy50YXJnZXQ7XHJcbiAgICAgIHQuc2V0SW50ZXJhY3RpdmUoZmFsc2UpO1xyXG4gICAgICB2YXIgdHdlZW5lciA9IG5ldyBUd2VlbmVyKCkuYXR0YWNoVG8odCk7XHJcbiAgICAgIHR3ZWVuZXJcclxuICAgICAgICAudG8oe1xyXG4gICAgICAgICAgeDogdGhpcy5pbml0aWFsUG9zaXRpb24ueCxcclxuICAgICAgICAgIHk6IHRoaXMuaW5pdGlhbFBvc2l0aW9uLnksXHJcbiAgICAgICAgfSwgdGltZSwgZWFzaW5nIHx8ICdlYXNlT3V0RWxhc3RpYycpXHJcbiAgICAgICAgLmNhbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICB0d2VlbmVyLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgIHQuc2V0SW50ZXJhY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgICB0aGlzLmZsYXJlKCdiYWNrZW5kJyk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy50YXJnZXQueCA9IHRoaXMuaW5pdGlhbFBvc2l0aW9uLng7XHJcbiAgICAgIHRoaXMudGFyZ2V0LnkgPSB0aGlzLmluaXRpYWxQb3NpdGlvbi55O1xyXG4gICAgICB0aGlzLmZsYXJlKCdiYWNrZW5kJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlbmFibGUoKSB7XHJcbiAgICB0aGlzLl9lbmFibGUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGxvY2soKSB7XHJcbiAgICB0aGlzLl9sb2NrID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyB1bmxvY2soKSB7XHJcbiAgICB0aGlzLl9sb2NrID0gZmFsc2U7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuRHJhZ2dhYmxlLl9sb2NrID0gZmFsc2U7XHJcblxyXG4vLyDlkbzjgbPlh7rjgZfjgafmi6HlvLXjgZnjgovvvJ8gVHdlZW5lcuOBr0VsZW1lbnTlgbTjgaflrprnvqlcclxuLy8gcGhpbmEuYXBwLkVsZW1lbnQucHJvdG90eXBlLmdldHRlcignZHJhZ2dhYmxlJywgZnVuY3Rpb24oKSB7XHJcbi8vICAgaWYgKCF0aGlzLl9kcmFnZ2FibGUpIHtcclxuLy8gICAgIHRoaXMuX2RyYWdnYWJsZSA9IHBoaW5hLmFjY2Vzc29yeS5EcmFnZ2FibGUoKS5hdHRhY2hUbyh0aGlzKTtcclxuLy8gICB9XHJcbi8vICAgcmV0dXJuIHRoaXMuX2RyYWdnYWJsZTtcclxuLy8gfSk7XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuYWNjZXNzb3J5LkZsaWNrYWJsZVxyXG4gKiBGbGlja2FibGVcclxuICogQGV4dGVuZHMgcGhpbmEuYWNjZXNzb3J5LkFjY2Vzc29yeVxyXG4gKi9cclxuY2xhc3MgRmxpY2thYmxlIGV4dGVuZHMgQWNjZXNzb3J5IHtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IodGFyZ2V0KSB7XHJcbiAgICBzdXBlcih0YXJnZXQpO1xyXG5cclxuICAgIHRoaXMuaW5pdGlhbFBvc2l0aW9uID0gbmV3IFZlY3RvcjIoMCwgMCk7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgdGhpcy5mcmljdGlvbiA9IDAuOTtcclxuICAgIHRoaXMudmVsb2NpdHkgPSBuZXcgVmVjdG9yMigwLCAwKTtcclxuICAgIHRoaXMudmVydGljYWwgPSB0cnVlO1xyXG4gICAgdGhpcy5ob3Jpem9udGFsID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLmNhY2hlTGlzdCA9IFtdO1xyXG5cclxuICAgIHRoaXMub24oJ2F0dGFjaGVkJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMudGFyZ2V0LnNldEludGVyYWN0aXZlKHRydWUpO1xyXG5cclxuICAgICAgdGhpcy50YXJnZXQub24oJ3BvaW50c3RhcnQnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgc2VsZi5pbml0aWFsUG9zaXRpb24uc2V0KHRoaXMueCwgdGhpcy55KTtcclxuICAgICAgICBzZWxmLnZlbG9jaXR5LnNldCgwLCAwKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMudGFyZ2V0Lm9uKCdwb2ludHN0YXknLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKHNlbGYuaG9yaXpvbnRhbCkge1xyXG4gICAgICAgICAgdGhpcy54ICs9IGUucG9pbnRlci5keDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlbGYudmVydGljYWwpIHtcclxuICAgICAgICAgIHRoaXMueSArPSBlLnBvaW50ZXIuZHk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2VsZi5jYWNoZUxpc3QubGVuZ3RoID4gMykgc2VsZi5jYWNoZUxpc3Quc2hpZnQoKTtcclxuICAgICAgICBzZWxmLmNhY2hlTGlzdC5wdXNoKGUucG9pbnRlci5kZWx0YVBvc2l0aW9uLmNsb25lKCkpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMudGFyZ2V0Lm9uKCdwb2ludGVuZCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAvLyDli5XjgY3jga7jgYLjgosgZGVsdGEgcG9zaXRpb24g44KS5b6M44KN44GL44KJ5qSc57Si44CAXHJcbiAgICAgICAgdmFyIGRlbHRhID0gc2VsZi5jYWNoZUxpc3QucmV2ZXJzZSgpLmZpbmQoZnVuY3Rpb24odikge1xyXG4gICAgICAgICAgcmV0dXJuIHYubGVuZ3RoU3F1YXJlZCgpID4gMTA7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2xlYXIuY2FsbChzZWxmLmNhY2hlTGlzdCk7XHJcbiAgICAgICAgLy8gc2VsZi5jYWNoZUxpc3QuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgaWYgKGRlbHRhKSB7XHJcbiAgICAgICAgICBzZWxmLnZlbG9jaXR5LnggPSBkZWx0YS54O1xyXG4gICAgICAgICAgc2VsZi52ZWxvY2l0eS55ID0gZGVsdGEueTtcclxuXHJcbiAgICAgICAgICBzZWxmLmZsYXJlKCdmbGlja3N0YXJ0Jywge1xyXG4gICAgICAgICAgICBkaXJlY3Rpb246IGRlbHRhLm5vcm1hbGl6ZSgpLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgc2VsZi5mbGFyZSgnZmxpY2tjYW5jZWwnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNlbGYuZmxhcmUoJ2ZsaWNrJyk7XHJcbiAgICAgICAgLy8gc2VsZi5mbGFyZSgnZmxpY2tlbmQnKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGlmICghdGhpcy50YXJnZXQpIHJldHVybiA7XHJcblxyXG4gICAgdGhpcy52ZWxvY2l0eS54ICo9IHRoaXMuZnJpY3Rpb247XHJcbiAgICB0aGlzLnZlbG9jaXR5LnkgKj0gdGhpcy5mcmljdGlvbjtcclxuXHJcbiAgICBpZiAodGhpcy5ob3Jpem9udGFsKSB7XHJcbiAgICAgIHRoaXMudGFyZ2V0LnBvc2l0aW9uLnggKz0gdGhpcy52ZWxvY2l0eS54O1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudmVydGljYWwpIHtcclxuICAgICAgdGhpcy50YXJnZXQucG9zaXRpb24ueSArPSB0aGlzLnZlbG9jaXR5Lnk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjYW5jZWwoKSB7XHJcbiAgICB0aGlzLnRhcmdldC54ID0gdGhpcy5pbml0aWFsUG9zaXRpb24ueDtcclxuICAgIHRoaXMudGFyZ2V0LnkgPSB0aGlzLmluaXRpYWxQb3NpdGlvbi55O1xyXG4gICAgdGhpcy52ZWxvY2l0eS5zZXQoMCwgMCk7XHJcblxyXG4gICAgLy8gVE9ETzogXHJcbiAgICAvLyB0aGlzLnNldEludGVyYWN0aXZlKGZhbHNlKTtcclxuICAgIC8vIHRoaXMudHdlZW5lci5jbGVhcigpXHJcbiAgICAvLyAgICAgLm1vdmUodGhpcy5pbml0aWFsWCwgdGhpcy5pbml0aWFsWSwgNTAwLCBcImVhc2VPdXRFbGFzdGljXCIpXHJcbiAgICAvLyAgICAgLmNhbGwoZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLnNldEludGVyYWN0aXZlKHRydWUpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmZpcmUodG0uZXZlbnQuRXZlbnQoXCJiYWNrZW5kXCIpKTtcclxuICAgIC8vICAgICB9LmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgZW5hYmxlKCkge1xyXG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZTtcclxuICB9XHJcblxyXG59XHJcblxyXG4vLyBUT0RPOiBFbGVtZW505YG044Gn5ZG844G277yfXHJcbi8vIHBoaW5hLmFwcC5FbGVtZW50LnByb3RvdHlwZS5nZXR0ZXIoJ2ZsaWNrYWJsZScsIGZ1bmN0aW9uKCkge1xyXG4vLyAgIGlmICghdGhpcy5fZmxpY2thYmxlKSB7XHJcbi8vICAgICB0aGlzLl9mbGlja2FibGUgPSBwaGluYS5hY2Nlc3NvcnkuRmxpY2thYmxlKCkuYXR0YWNoVG8odGhpcyk7XHJcbi8vICAgfVxyXG4vLyAgIHJldHVybiB0aGlzLl9mbGlja2FibGU7XHJcbi8vIH0pO1xuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmFjY2Vzc29yeS5QaHlzaWNhbFxyXG4gKiDmnKznianjgafjga/jgarjgYTjga7jgaflkI3liY3lpInjgYjjgovjgYvjgoJcclxuICogRmFrZVBoeXNpY2FsIG9yIE1hcmlvUGh5c2ljYWwgb3IgTGllUGh5c2ljYWxcclxuICogUmV0cm9QeXNpY2FsIG9yIFB5c2ljYUxpa2VcclxuICogQGV4dGVuZHMgcGhpbmEuYWNjZXNzb3J5LkFjY2Vzc29yeVxyXG4gKi9cclxuY2xhc3MgUGh5c2ljYWwgZXh0ZW5kcyBBY2Nlc3NvcnkgIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IodGFyZ2V0KSB7XHJcbiAgICBzdXBlcih0YXJnZXQpO1xyXG5cclxuICAgIHRoaXMudmVsb2NpdHkgPSBuZXcgVmVjdG9yMigwLCAwKTtcclxuICAgIHRoaXMuZ3Jhdml0eSA9IG5ldyBWZWN0b3IyKDAsIDApO1xyXG5cclxuICAgIHRoaXMuZnJpY3Rpb24gPSAxLjA7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICB2YXIgdCA9IHRoaXMudGFyZ2V0O1xyXG5cclxuICAgIHRoaXMudmVsb2NpdHkueCAqPSB0aGlzLmZyaWN0aW9uO1xyXG4gICAgdGhpcy52ZWxvY2l0eS55ICo9IHRoaXMuZnJpY3Rpb247XHJcblxyXG4gICAgdGhpcy52ZWxvY2l0eS54ICs9IHRoaXMuZ3Jhdml0eS54O1xyXG4gICAgdGhpcy52ZWxvY2l0eS55ICs9IHRoaXMuZ3Jhdml0eS55O1xyXG5cclxuICAgIHQucG9zaXRpb24ueCArPSB0aGlzLnZlbG9jaXR5Lng7XHJcbiAgICB0LnBvc2l0aW9uLnkgKz0gdGhpcy52ZWxvY2l0eS55O1xyXG4gIH1cclxuXHJcbiAgZm9yY2UoeCwgeSkge1xyXG4gICAgdGhpcy52ZWxvY2l0eS5zZXQoeCwgeSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGFkZEZvcmNlKHgsIHkpIHtcclxuICAgIHRoaXMudmVsb2NpdHkueCArPSB4O1xyXG4gICAgdGhpcy52ZWxvY2l0eS55ICs9IHk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHNldEdyYXZpdHkoeCwgeSkge1xyXG4gICAgdGhpcy5ncmF2aXR5LnNldCh4LCB5KTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgc2V0RnJpY3Rpb24oZnIpIHtcclxuICAgIHRoaXMuZnJpY3Rpb24gPSBmcjtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxufVxyXG5cclxuLy8gcGhpbmEuYXBwLkVsZW1lbnQucHJvdG90eXBlLmdldHRlcigncGh5c2ljYWwnLCBmdW5jdGlvbigpIHtcclxuLy8gICBpZiAoIXRoaXMuX3BoeXNpY2FsKSB7XHJcbi8vICAgICB0aGlzLl9waHlzaWNhbCA9IHBoaW5hLmFjY2Vzc29yeS5QaHlzaWNhbCgpLmF0dGFjaFRvKHRoaXMpO1xyXG4vLyAgIH1cclxuLy8gICByZXR1cm4gdGhpcy5fcGh5c2ljYWw7XHJcbi8vIH0pO1xuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmFzc2V0LkFzc2V0XHJcbiAqIEBleHRlbmRzIHBoaW5hLnV0aWwuRXZlbnREaXNwYXRjaGVyXHJcbiAqL1xyXG5jbGFzcyBBc3NldCBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XHJcblxyXG4gIC8vIHNlcnZlckVycm9yOiBmYWxzZSxcclxuICAvLyBub3RGb3VuZDogZmFsc2UsXHJcbiAgLy8gbG9hZEVycm9yOiBmYWxzZSxcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc3JjKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMubG9hZGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLnNlcnZlckVycm9yID0gZmFsc2U7XHJcbiAgICB0aGlzLm5vdEZvdW5kID0gZmFsc2U7XHJcbiAgICB0aGlzLmxvYWRFcnJvciA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgbG9hZChzcmMpIHtcclxuICAgIHRoaXMuc3JjID0gc3JjO1xyXG4gICAgcmV0dXJuIG5ldyBGbG93KHRoaXMuX2xvYWQuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBpc0xvYWRlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmxvYWRlZDtcclxuICB9XHJcblxyXG4gIF9sb2FkKHJlc29sdmUpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgIHNlbGYubG9hZGVkID0gdHJ1ZTtcclxuICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgfSwgMTAwKTtcclxuICB9XHJcblxyXG4gIC8vIOODreODvOODieWkseaVl+aZguOBq+ODgOODn+ODvOOCkuOCu+ODg+ODiOOBmeOCi1xyXG4gIGxvYWREdW1teSgpIHsgfVxyXG5cclxufVxuXG52YXIgZ2V0Rmlyc3QgPSBmdW5jdGlvbihhcnJheSkgeyByZXR1cm4gZmlyc3QuZ2V0LmNhbGwoYXJyYXkpOyB9O1xyXG52YXIgZ2V0TGFzdCA9IGZ1bmN0aW9uKGFycmF5KSB7IHJldHVybiBsYXN0LmdldC5jYWxsKGFycmF5KTsgfTtcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuYXNzZXQuVGV4dHVyZVxyXG4gKiBAZXh0ZW5kcyBwaGluYS5hc3NldC5Bc3NldFxyXG4gKi9cclxuY2xhc3MgVGV4dHVyZSBleHRlbmRzIEFzc2V0IHtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgX2xvYWQocmVzb2x2ZSkge1xyXG4gICAgdGhpcy5kb21FbGVtZW50ID0gbmV3IEltYWdlKCk7XHJcblxyXG4gICAgdmFyIGlzTG9jYWwgPSAobG9jYXRpb24ucHJvdG9jb2wgPT0gJ2ZpbGU6Jyk7XHJcbiAgICBpZiAoICFpc0xvY2FsICYmICEoL15kYXRhOi8udGVzdCh0aGlzLnNyYykpICkgO1xyXG5cclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHRoaXMuZG9tRWxlbWVudC5vbmxvYWQgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHNlbGYubG9hZGVkID0gdHJ1ZTtcclxuICAgICAgcmVzb2x2ZShzZWxmKTtcclxuICAgIH07XHJcbiAgICB0aGlzLmRvbUVsZW1lbnQub25lcnJvciA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQuY2FsbChcIltwaGluYS5qc10gbm90IGZvdW5kIGB7MH1gIVwiLCB0aGlzLnNyYykpO1xyXG4gICAgICAvLyBjb25zb2xlLmVycm9yKFwiW3BoaW5hLmpzXSBub3QgZm91bmQgYHswfWAhXCIuZm9ybWF0KHRoaXMuc3JjKSk7XHJcblxyXG4gICAgICAvLyB2YXIga2V5ID0gc2VsZi5zcmMuc3BsaXQoJy8nKS5sYXN0LnJlcGxhY2UoJy5wbmcnLCAnJykuc3BsaXQoJz8nKS5maXJzdC5zcGxpdCgnIycpLmZpcnN0O1xyXG4gICAgICB2YXIga2V5ID0gZ2V0Rmlyc3QoXHJcbiAgICAgICAgZ2V0Rmlyc3QoXHJcbiAgICAgICAgICBnZXRMYXN0KFxyXG4gICAgICAgICAgICBzZWxmLnNyYy5zcGxpdCgnLycpXHJcbiAgICAgICAgICApLnJlcGxhY2UoJy5wbmcnLCAnJykuc3BsaXQoJz8nKVxyXG4gICAgICAgICkuc3BsaXQoJyMnKVxyXG4gICAgICApO1xyXG4gICAgICBlLnRhcmdldC5vbmVycm9yID0gbnVsbDtcclxuICAgICAgZS50YXJnZXQuc3JjID0gXCJodHRwOi8vZHVtbXlpbWFnZS5jb20vMTI4eDEyOC80NDQ0NDQvZWVlZWVlJnRleHQ9XCIgKyBrZXk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZG9tRWxlbWVudC5zcmMgPSB0aGlzLnNyYztcclxuICB9XHJcblxyXG4gIGNsb25lKCkge1xyXG4gICAgdmFyIGltYWdlID0gdGhpcy5kb21FbGVtZW50O1xyXG4gICAgdmFyIGNhbnZhcyA9IG5ldyBDYW52YXMoKS5zZXRTaXplKGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpO1xyXG4gICAgdmFyIHQgPSBuZXcgVGV4dHVyZSgpO1xyXG4gICAgY2FudmFzLmNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCAwLCAwKTtcclxuICAgIHQuZG9tRWxlbWVudCA9IGNhbnZhcy5kb21FbGVtZW50O1xyXG4gICAgcmV0dXJuIHQ7XHJcbiAgfVxyXG5cclxuICB0cmFuc21pdChjb2xvcikge1xyXG4gICAgLy8gaW1hZ2Hjgqrjg5bjgrjjgqfjgq/jg4jjgpLjgrLjg4Pjg4hcclxuICAgIHZhciBpbWFnZSA9IHRoaXMuZG9tRWxlbWVudDtcclxuICAgIC8vIOaWsOimj2NhbnZhc+S9nOaIkFxyXG4gICAgdmFyIGNhbnZhcyA9IG5ldyBDYW52YXMoKS5zZXRTaXplKGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpO1xyXG4gICAgLy8g5paw6KaPY2FudmFz44Gr5o+P55S7XHJcbiAgICBjYW52YXMuY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xyXG4gICAgLy8gY2FudmFz5YWo5L2T44Gu44Kk44Oh44O844K444OH44O844K/6YWN5YiX44KS44Ky44OD44OIXHJcbiAgICB2YXIgaW1hZ2VEYXRhID0gY2FudmFzLmNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICB2YXIgZGF0YSA9IGltYWdlRGF0YS5kYXRhO1xyXG4gICAgLy8g6YCP6YGO6Imy44Gu5oyH5a6a44GM44Gq44GR44KM44Gw5bem5LiK44Gucmdi5YCk44KS5oq95Ye6XHJcbiAgICB2YXIgciA9IChjb2xvciAhPT0gdW5kZWZpbmVkKSA/IGNvbG9yLnIgOiBkYXRhWzBdO1xyXG4gICAgdmFyIGcgPSAoY29sb3IgIT09IHVuZGVmaW5lZCkgPyBjb2xvci5nIDogZGF0YVsxXTtcclxuICAgIHZhciBiID0gKGNvbG9yICE9PSB1bmRlZmluZWQpID8gY29sb3IuYiA6IGRhdGFbMl07XHJcbiAgICAvLyDphY3liJfjgpI06KaB57Sg55uu44GL44KJNOOBpOmjm+OBs++8iOOCouODq+ODleOCoeWApO+8ieOBp+ODq+ODvOODl1xyXG4gICAgLy8gKDMpLnN0ZXAoZGF0YS5sZW5ndGgsIDQsIGZ1bmN0aW9uKGkpIHtcclxuICAgIHN0ZXAuY2FsbCgzLCBkYXRhLmxlbmd0aCwgNCwgZnVuY3Rpb24oaSkge1xyXG4gICAgICAvLyByZ2LlgKTjgpLpgIbnrpfjgafjgrLjg4Pjg4jjgZfjgIHlt6bkuIrjga5yZ2Ljgajmr5TovINcclxuICAgICAgaWYgKGRhdGFbaSAtIDNdID09PSByICYmIGRhdGFbaSAtIDJdID09PSBnICYmIGRhdGFbaSAtIDFdID09PSBiKSB7XHJcbiAgICAgICAgLy8g5LiA6Ie044GX44Gf5aC05ZCI44Gv44Ki44Or44OV44Kh5YCk44KS5pu444GN5o+b44GI44KLXHJcbiAgICAgICAgZGF0YVtpXSA9IDA7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8g5pu444GN5o+b44GI44Gf44Kk44Oh44O844K444OH44O844K/44KSY2FudmFz44Gr5oi744GZXHJcbiAgICBjYW52YXMuY29udGV4dC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCAwLCAwKTtcclxuXHJcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBjYW52YXMuZG9tRWxlbWVudDtcclxuICB9XHJcblxyXG4gIGZpbHRlcihmaWx0ZXJzKSB7XHJcbiAgICBpZiAoIWZpbHRlcnMpIHtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZmlsdGVycykpIHtcclxuICAgICAgZmlsdGVycyA9IFtmaWx0ZXJzXTtcclxuICAgIH1cclxuICAgIHZhciBpbWFnZSA9IHRoaXMuZG9tRWxlbWVudDtcclxuICAgIHZhciB3ID0gaW1hZ2Uud2lkdGg7XHJcbiAgICB2YXIgaCA9IGltYWdlLmhlaWdodDtcclxuICAgIHZhciBjYW52YXMgPSBuZXcgQ2FudmFzKCkuc2V0U2l6ZSh3LCBoKTtcclxuICAgIHZhciBpbWFnZURhdGEgPSBudWxsO1xyXG5cclxuICAgIGNhbnZhcy5jb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgMCwgMCk7XHJcbiAgICBpbWFnZURhdGEgPSBjYW52YXMuY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgdywgaCk7XHJcbiAgICBmaWx0ZXJzLmZvckVhY2goIGZ1bmN0aW9uIChmbikge1xyXG4gICAgICBpZiAodHlwZW9mIGZuID09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAvLyBoLnRpbWVzKCBmdW5jdGlvbiAoeSkge1xyXG4gICAgICAgIHRpbWVzLmNhbGwoaCwgZnVuY3Rpb24gKHkpIHtcclxuICAgICAgICAgIC8vIHcudGltZXMoIGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgICB0aW1lcyh3LCBmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgICAgICB2YXIgaSA9ICh5ICogdyArIHgpICogNDtcclxuICAgICAgICAgICAgdmFyIHBpeGVsID0gaW1hZ2VEYXRhLmRhdGEuc2xpY2UoaSwgaSArIDQpO1xyXG4gICAgICAgICAgICBmbihwaXhlbCwgaSwgeCwgeSwgaW1hZ2VEYXRhKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNhbnZhcy5jb250ZXh0LnB1dEltYWdlRGF0YShpbWFnZURhdGEsIDAsIDApO1xyXG4gICAgdGhpcy5kb21FbGVtZW50ID0gY2FudmFzLmRvbUVsZW1lbnQ7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG59XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuYXNzZXQuU291bmRcclxuICogQGV4dGVuZHMgcGhpbmEuYXNzZXQuQXNzZXRcclxuICovXHJcbmNsYXNzIFNvdW5kIGV4dGVuZHMgQXNzZXQge1xyXG4gIFxyXG4gIC8vIF9sb29wOiBmYWxzZSxcclxuICAvLyBfbG9vcFN0YXJ0OiAwLFxyXG4gIC8vIF9sb29wRW5kOiAwLFxyXG4gIC8vIF9wbGF5YmFja1JhdGU6IDEsXHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5fbG9vcCA9IGZhbHNlO1xyXG4gICAgdGhpcy5fbG9vcFN0YXJ0ID0gMDtcclxuICAgIHRoaXMuX2xvb3BFbmQgPSAwO1xyXG4gICAgdGhpcy5fcGxheWJhY2tSYXRlID0gMTtcclxuICAgIHRoaXMuY29udGV4dCA9IFNvdW5kLmdldEF1ZGlvQ29udGV4dCgpO1xyXG4gICAgdGhpcy5nYWluTm9kZSA9IHRoaXMuY29udGV4dC5jcmVhdGVHYWluKCk7XHJcbiAgfVxyXG5cclxuICBwbGF5KHdoZW4sIG9mZnNldCwgZHVyYXRpb24pIHtcclxuICAgIHdoZW4gPSB3aGVuID8gd2hlbiArIHRoaXMuY29udGV4dC5jdXJyZW50VGltZSA6IDA7XHJcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcclxuXHJcbiAgICBpZiAodGhpcy5zb3VyY2UpIDtcclxuXHJcbiAgICB2YXIgc291cmNlID0gdGhpcy5zb3VyY2UgPSB0aGlzLmNvbnRleHQuY3JlYXRlQnVmZmVyU291cmNlKCk7XHJcbiAgICB2YXIgYnVmZmVyID0gc291cmNlLmJ1ZmZlciA9IHRoaXMuYnVmZmVyO1xyXG4gICAgc291cmNlLmxvb3AgPSB0aGlzLl9sb29wO1xyXG4gICAgc291cmNlLmxvb3BTdGFydCA9IHRoaXMuX2xvb3BTdGFydDtcclxuICAgIHNvdXJjZS5sb29wRW5kID0gdGhpcy5fbG9vcEVuZDtcclxuICAgIHNvdXJjZS5wbGF5YmFja1JhdGUudmFsdWUgPSB0aGlzLl9wbGF5YmFja1JhdGU7XHJcblxyXG4gICAgLy8gY29ubmVjdFxyXG4gICAgc291cmNlLmNvbm5lY3QodGhpcy5nYWluTm9kZSk7XHJcbiAgICB0aGlzLmdhaW5Ob2RlLmNvbm5lY3QoU291bmQuZ2V0TWFzdGVyR2FpbigpKTtcclxuICAgIC8vIHBsYXlcclxuICAgIGlmIChkdXJhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHNvdXJjZS5zdGFydCh3aGVuLCBvZmZzZXQsIGR1cmF0aW9uKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBzb3VyY2Uuc3RhcnQod2hlbiwgb2Zmc2V0KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gY2hlY2sgcGxheSBlbmRcclxuICAgIHNvdXJjZS5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgIHRoaXMuZmxhcmUoJ2VuZGVkJyk7XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgc3RvcCgpIHtcclxuICAgIC8vIHN0b3BcclxuICAgIGlmICh0aGlzLnNvdXJjZSkge1xyXG4gICAgICAvLyBzdG9wIOOBmeOCi+OBqCBzb3VyY2UuZW5kZWTjgoLnmbrngavjgZnjgotcclxuICAgICAgdGhpcy5zb3VyY2Uuc3RvcCAmJiB0aGlzLnNvdXJjZS5zdG9wKDApO1xyXG4gICAgICB0aGlzLnNvdXJjZSA9IG51bGw7XHJcbiAgICAgIHRoaXMuZmxhcmUoJ3N0b3AnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHBhdXNlKCkge1xyXG4gICAgdGhpcy5zb3VyY2UucGxheWJhY2tSYXRlLnZhbHVlID0gMDtcclxuICAgIHRoaXMuZmxhcmUoJ3BhdXNlJyk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHJlc3VtZSgpIHtcclxuICAgIHRoaXMuc291cmNlLnBsYXliYWNrUmF0ZS52YWx1ZSA9IHRoaXMuX3BsYXliYWNrUmF0ZTtcclxuICAgIHRoaXMuZmxhcmUoJ3Jlc3VtZScpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvLyDoqabjgZfjgabjgb/jgovjgarjgYZcclxuICBfb3NjaWxsYXRvcih0eXBlKSB7XHJcbiAgICB2YXIgY29udGV4dCA9IHRoaXMuY29udGV4dDtcclxuXHJcbiAgICB2YXIgb3NjaWxsYXRvciA9IGNvbnRleHQuY3JlYXRlT3NjaWxsYXRvcigpO1xyXG5cclxuICAgIC8vIFNpbmUgd2F2ZSBpcyB0eXBlID0g4oCcc2luZeKAnVxyXG4gICAgLy8gU3F1YXJlIHdhdmUgaXMgdHlwZSA9IOKAnHNxdWFyZeKAnVxyXG4gICAgLy8gU2F3dG9vdGggd2F2ZSBpcyB0eXBlID0g4oCcc2F34oCdXHJcbiAgICAvLyBUcmlhbmdsZSB3YXZlIGlzIHR5cGUgPSDigJx0cmlhbmdsZeKAnVxyXG4gICAgLy8gQ3VzdG9tIHdhdmUgaXMgdHlwZSA9IOKAnGN1c3RvbeKAnSBcclxuICAgIG9zY2lsbGF0b3IudHlwZSA9IHR5cGUgfHwgJ3NpbmUnO1xyXG5cclxuICAgIHRoaXMuc291cmNlID0gb3NjaWxsYXRvcjtcclxuICAgIC8vIGNvbm5lY3RcclxuICAgIHRoaXMuc291cmNlLmNvbm5lY3QoY29udGV4dC5kZXN0aW5hdGlvbik7XHJcbiAgfVxyXG5cclxuICBsb2FkRnJvbUJ1ZmZlcihidWZmZXIpIHtcclxuICAgIHZhciBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xyXG5cclxuICAgIC8vIHNldCBkZWZhdWx0IGJ1ZmZlclxyXG4gICAgaWYgKCFidWZmZXIpIHtcclxuICAgICAgYnVmZmVyID0gY29udGV4dC5jcmVhdGVCdWZmZXIoIDEsIDQ0MTAwLCA0NDEwMCApO1xyXG4gICAgICB2YXIgY2hhbm5lbCA9IGJ1ZmZlci5nZXRDaGFubmVsRGF0YSgwKTtcclxuXHJcbiAgICAgIGZvciggdmFyIGk9MDsgaSA8IGNoYW5uZWwubGVuZ3RoOyBpKysgKVxyXG4gICAgICB7XHJcbiAgICAgICAgY2hhbm5lbFtpXSA9IE1hdGguc2luKCBpIC8gMTAwICogTWF0aC5QSSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBzb3VyY2VcclxuICAgIHRoaXMuYnVmZmVyID0gYnVmZmVyO1xyXG4gIH1cclxuXHJcbiAgc2V0TG9vcChsb29wKSB7XHJcbiAgICB0aGlzLmxvb3AgPSBsb29wO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBzZXRMb29wU3RhcnQobG9vcFN0YXJ0KSB7XHJcbiAgICB0aGlzLmxvb3BTdGFydCA9IGxvb3BTdGFydDtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgc2V0TG9vcEVuZChsb29wRW5kKSB7XHJcbiAgICB0aGlzLmxvb3BFbmQgPSBsb29wRW5kO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIFxyXG4gIHNldFBsYXliYWNrUmF0ZShwbGF5YmFja1JhdGUpIHtcclxuICAgIHRoaXMucGxheWJhY2tSYXRlID0gcGxheWJhY2tSYXRlO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBfbG9hZChyKSB7XHJcbiAgICBpZiAoL15kYXRhOi8udGVzdCh0aGlzLnNyYykpIHtcclxuICAgICAgdGhpcy5fbG9hZEZyb21VUklTY2hlbWUocik7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5fbG9hZEZyb21GaWxlKHIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2xvYWRGcm9tRmlsZShyKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgdmFyIHhtbCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeG1sLm9wZW4oJ0dFVCcsIHRoaXMuc3JjKTtcclxuICAgIHhtbC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKHhtbC5yZWFkeVN0YXRlID09PSA0KSB7XHJcbiAgICAgICAgaWYgKFsyMDAsIDIwMSwgMF0uaW5kZXhPZih4bWwuc3RhdHVzKSAhPT0gLTEpIHtcclxuXHJcbiAgICAgICAgICAvLyDpn7Pmpb3jg5DjgqTjg4rjg6rjg7zjg4fjg7zjgr9cclxuICAgICAgICAgIHZhciBkYXRhID0geG1sLnJlc3BvbnNlO1xyXG5cclxuICAgICAgICAgIC8vIHdlYmF1ZGlvIOeUqOOBq+WkieaPm1xyXG4gICAgICAgICAgc2VsZi5jb250ZXh0LmRlY29kZUF1ZGlvRGF0YShkYXRhLCBmdW5jdGlvbihidWZmZXIpIHtcclxuICAgICAgICAgICAgc2VsZi5sb2FkRnJvbUJ1ZmZlcihidWZmZXIpO1xyXG4gICAgICAgICAgICByKHNlbGYpO1xyXG4gICAgICAgICAgfSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIumfs+WjsOODleOCoeOCpOODq+OBruODh+OCs+ODvOODieOBq+WkseaVl+OBl+OBvuOBl+OBn+OAgihcIiArIHNlbGYuc3JjICsgXCIpXCIpO1xyXG4gICAgICAgICAgICByKHNlbGYpO1xyXG4gICAgICAgICAgICBzZWxmLmZsYXJlKCdkZWNvZGVlcnJvcicpO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoeG1sLnN0YXR1cyA9PT0gNDA0KSB7XHJcbiAgICAgICAgICAvLyBub3QgZm91bmRcclxuXHJcbiAgICAgICAgICBzZWxmLmxvYWRFcnJvciA9IHRydWU7XHJcbiAgICAgICAgICBzZWxmLm5vdEZvdW5kPSB0cnVlO1xyXG4gICAgICAgICAgcihzZWxmKTtcclxuICAgICAgICAgIHNlbGYuZmxhcmUoJ2xvYWRlcnJvcicpO1xyXG4gICAgICAgICAgc2VsZi5mbGFyZSgnbm90Zm91bmQnKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIOOCteODvOODkOODvOOCqOODqeODvFxyXG5cclxuICAgICAgICAgIHNlbGYubG9hZEVycm9yID0gdHJ1ZTtcclxuICAgICAgICAgIHNlbGYuc2VydmVyRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgcihzZWxmKTtcclxuICAgICAgICAgIHNlbGYuZmxhcmUoJ2xvYWRlcnJvcicpO1xyXG4gICAgICAgICAgc2VsZi5mbGFyZSgnc2VydmVyZXJyb3InKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgeG1sLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcic7XHJcblxyXG4gICAgeG1sLnNlbmQobnVsbCk7XHJcbiAgfVxyXG5cclxuICBfbG9hZEZyb21VUklTY2hlbWUocikge1xyXG4gICAgdmFyIGJ5dGVTdHJpbmcgPSAnJztcclxuICAgIGlmICh0aGlzLnNyYy5zcGxpdCgnLCcpWzBdLmluZGV4T2YoJ2Jhc2U2NCcpID49IDApIHtcclxuICAgICAgYnl0ZVN0cmluZyA9IGF0b2IodGhpcy5zcmMuc3BsaXQoJywnKVsxXSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgYnl0ZVN0cmluZyA9IHVuZXNjYXBlKHRoaXMuc3JjLnNwbGl0KCcsJylbMV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHZhciBsZW4gPSBieXRlU3RyaW5nLmxlbmd0aDtcclxuICAgIHZhciBidWZmZXIgPSBuZXcgVWludDhBcnJheShsZW4pO1xyXG5cclxuICAgIGZvciAodmFyIGk9MDsgaTxsZW47ICsraSkge1xyXG4gICAgICBidWZmZXJbaV0gPSBieXRlU3RyaW5nLmNoYXJDb2RlQXQoaSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gd2ViYXVkaW8g55So44Gr5aSJ5o+bXHJcbiAgICB0aGlzLmNvbnRleHQuZGVjb2RlQXVkaW9EYXRhKGJ1ZmZlci5idWZmZXIsIGZ1bmN0aW9uKGJ1ZmZlcikge1xyXG4gICAgICBzZWxmLmxvYWRGcm9tQnVmZmVyKGJ1ZmZlcik7XHJcbiAgICAgIHIoc2VsZik7XHJcbiAgICB9LCBmdW5jdGlvbigpIHtcclxuICAgICAgY29uc29sZS53YXJuKFwi6Z+z5aOw44OV44Kh44Kk44Or44Gu44OH44Kz44O844OJ44Gr5aSx5pWX44GX44G+44GX44Gf44CCKFwiICsgc2VsZi5zcmMgKyBcIilcIik7XHJcbiAgICAgIHNlbGYubG9hZGVkID0gdHJ1ZTtcclxuICAgICAgcihzZWxmKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9hZER1bW15KCkge1xyXG4gICAgdGhpcy5sb2FkRnJvbUJ1ZmZlcigpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHZvbHVtZSgpICB7IHJldHVybiB0aGlzLmdhaW5Ob2RlLmdhaW4udmFsdWU7IH1cclxuICBzZXQgdm9sdW1lKHYpIHsgdGhpcy5nYWluTm9kZS5nYWluLnZhbHVlID0gdjsgfVxyXG5cclxuICBnZXQgbG9vcCgpICB7IHJldHVybiB0aGlzLl9sb29wOyB9XHJcbiAgc2V0IGxvb3Aodikge1xyXG4gICAgdGhpcy5fbG9vcCA9IHY7XHJcbiAgICBpZiAodGhpcy5zb3VyY2UpIHRoaXMuc291cmNlLl9sb29wID0gdjtcclxuICB9XHJcblxyXG4gIGdldCBsb29wU3RhcnQoKSAgeyByZXR1cm4gdGhpcy5fbG9vcFN0YXJ0OyB9XHJcbiAgc2V0IGxvb3BTdGFydCh2KSB7XHJcbiAgICB0aGlzLl9sb29wU3RhcnQgPSB2O1xyXG4gICAgaWYgKHRoaXMuc291cmNlKSB0aGlzLnNvdXJjZS5fbG9vcFN0YXJ0ID0gdjtcclxuICB9XHJcblxyXG4gIGdldCBsb29wRW5kKCkgIHsgcmV0dXJuIHRoaXMuX2xvb3BFbmQ7IH1cclxuICBzZXQgbG9vcEVuZCh2KSB7XHJcbiAgICB0aGlzLl9sb29wRW5kID0gdjtcclxuICAgIGlmICh0aGlzLnNvdXJjZSkgdGhpcy5zb3VyY2UuX2xvb3BFbmQgPSB2O1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBsYXliYWNrUmF0ZSgpIHsgcmV0dXJuIHRoaXMuX3BsYXliYWNrUmF0ZTsgfVxyXG4gIHNldCBwbGF5YmFja1JhdGUodikge1xyXG4gICAgdGhpcy5fcGxheWJhY2tSYXRlID0gdjtcclxuICAgIGlmKHRoaXMuc291cmNlICYmIHRoaXMuc291cmNlLnBsYXliYWNrUmF0ZS52YWx1ZSAhPT0gMCl7XHJcbiAgICAgIHRoaXMuc291cmNlLnBsYXliYWNrUmF0ZS52YWx1ZSA9IHY7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0TWFzdGVyR2FpbigpIHtcclxuICAgIGlmKCF0aGlzLl9tYXN0ZXJHYWluKSB7XHJcbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcy5nZXRBdWRpb0NvbnRleHQoKTtcclxuICAgICAgdGhpcy5fbWFzdGVyR2FpbiA9IGNvbnRleHQuY3JlYXRlR2FpbigpO1xyXG4gICAgICB0aGlzLl9tYXN0ZXJHYWluLmNvbm5lY3QoY29udGV4dC5kZXN0aW5hdGlvbik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fbWFzdGVyR2FpbjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRBdWRpb0NvbnRleHQoKSB7XHJcbiAgICBpZiAoIVN1cHBvcnQud2ViQXVkaW8pIHJldHVybiBudWxsO1xyXG5cclxuICAgIGlmICh0aGlzLmNvbnRleHQpIHJldHVybiB0aGlzLmNvbnRleHQ7XHJcblxyXG4gICAgdmFyIGcgPSBwaGluYSQxLmdsb2JhbDtcclxuICAgIHZhciBjb250ZXh0ID0gbnVsbDtcclxuXHJcbiAgICBpZiAoZy5BdWRpb0NvbnRleHQpIHtcclxuICAgICAgY29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGcud2Via2l0QXVkaW9Db250ZXh0KSB7XHJcbiAgICAgIGNvbnRleHQgPSBuZXcgd2Via2l0QXVkaW9Db250ZXh0KCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChnLm1vekF1ZGlvQ29udGV4dCkge1xyXG4gICAgICBjb250ZXh0ID0gbmV3IG1vekF1ZGlvQ29udGV4dCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRleHQ7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLy8gZGVmaW5lZFxyXG5hY2Nlc3Nvci5jYWxsKFNvdW5kLCAndm9sdW1lJywge1xyXG4vLyB0aGlzLmFjY2Vzc29yKCd2b2x1bWUnLCB7XHJcbiAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLmdldE1hc3RlckdhaW4oKS5nYWluLnZhbHVlO1xyXG4gIH0sXHJcbiAgc2V0OiBmdW5jdGlvbih2KSB7XHJcbiAgICB0aGlzLmdldE1hc3RlckdhaW4oKS5nYWluLnZhbHVlID0gdjtcclxuICB9LFxyXG59KTtcblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5hc3NldC5TY3JpcHRcclxuICogQGV4dGVuZHMgcGhpbmEuYXNzZXQuQXNzZXRcclxuICovXHJcbmNsYXNzIFNjcmlwdCBleHRlbmRzIEFzc2V0IHtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgX2xvYWQocmVzb2x2ZSkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICB0aGlzLmRvbUVsZW1lbnQuc3JjID0gdGhpcy5zcmM7XHJcblxyXG4gICAgdGhpcy5kb21FbGVtZW50Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXNvbHZlKHNlbGYpO1xyXG4gICAgfS5iaW5kKHRoaXMpO1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5kb21FbGVtZW50KTtcclxuICB9XHJcblxyXG59XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuYXNzZXQuU3ByaXRlU2hlZXRcclxuICogQGV4dGVuZHMgcGhpbmEuYXNzZXQuQXNzZXRcclxuICovXHJcbmNsYXNzIFNwcml0ZVNoZWV0IGV4dGVuZHMgQXNzZXQge1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBzZXR1cChwYXJhbXMpIHtcclxuICAgIHRoaXMuX3NldHVwRnJhbWUocGFyYW1zLmZyYW1lKTtcclxuICAgIHRoaXMuX3NldHVwQW5pbShwYXJhbXMuYW5pbWF0aW9ucyk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIF9sb2FkKHJlc29sdmUpIHtcclxuXHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgaWYgKHR5cGVvZiB0aGlzLnNyYyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgdmFyIHhtbCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICB4bWwub3BlbignR0VUJywgdGhpcy5zcmMpO1xyXG4gICAgICB4bWwub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHhtbC5yZWFkeVN0YXRlID09PSA0KSB7XHJcbiAgICAgICAgICBpZiAoWzIwMCwgMjAxLCAwXS5pbmRleE9mKHhtbC5zdGF0dXMpICE9PSAtMSkge1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IHhtbC5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgIHZhciBqc29uID0gSlNPTi5wYXJzZShkYXRhKTtcclxuXHJcbiAgICAgICAgICAgIHNlbGYuc2V0dXAoanNvbik7XHJcblxyXG4gICAgICAgICAgICByZXNvbHZlKHNlbGYpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIHhtbC5zZW5kKG51bGwpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0dXAodGhpcy5zcmMpO1xyXG4gICAgICByZXNvbHZlKHNlbGYpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIF9zZXR1cEZyYW1lKGZyYW1lKSB7XHJcbiAgICB2YXIgZnJhbWVzID0gdGhpcy5mcmFtZXMgPSBbXTtcclxuICAgIHZhciB1bml0V2lkdGggPSBmcmFtZS53aWR0aDtcclxuICAgIHZhciB1bml0SGVpZ2h0ID0gZnJhbWUuaGVpZ2h0O1xyXG5cclxuICAgIHZhciBjb3VudCA9IGZyYW1lLnJvd3MgKiBmcmFtZS5jb2xzO1xyXG4gICAgdGhpcy5mcmFtZSA9IGNvdW50O1xyXG5cclxuICAgIHRpbWVzLmNhbGwoY291bnQsIGZ1bmN0aW9uKGkpIHtcclxuICAgIC8vIChjb3VudCkudGltZXMoZnVuY3Rpb24oaSkge1xyXG4gICAgICB2YXIgeEluZGV4ID0gaSVmcmFtZS5jb2xzO1xyXG4gICAgICB2YXIgeUluZGV4ID0gKGkvZnJhbWUuY29scyl8MDtcclxuXHJcbiAgICAgIGZyYW1lcy5wdXNoKHtcclxuICAgICAgICB4OiB4SW5kZXgqdW5pdFdpZHRoLFxyXG4gICAgICAgIHk6IHlJbmRleCp1bml0SGVpZ2h0LFxyXG4gICAgICAgIHdpZHRoOiB1bml0V2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiB1bml0SGVpZ2h0LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX3NldHVwQW5pbShhbmltYXRpb25zKSB7XHJcbiAgICB0aGlzLmFuaW1hdGlvbnMgPSB7fTtcclxuXHJcbiAgICAvLyDjg4fjg5Xjgqnjg6vjg4jjgqLjg4vjg6Hjg7zjgrfjg6fjg7NcclxuICAgIHRoaXMuYW5pbWF0aW9uc1tcImRlZmF1bHRcIl0gPSB7XHJcbiAgICAgICAgZnJhbWVzOiByYW5nZS5jYWxsKFtdLCAwLCB0aGlzLmZyYW1lKSxcclxuICAgICAgICAvLyBmcmFtZXM6IFtdLnJhbmdlKDAsIHRoaXMuZnJhbWUpLFxyXG4gICAgICAgIG5leHQ6IFwiZGVmYXVsdFwiLFxyXG4gICAgICAgIGZyZXF1ZW5jeTogMSxcclxuICAgIH07XHJcblxyXG4gICAgZm9ySW4uY2FsbChhbmltYXRpb25zLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAvLyBhbmltYXRpb25zLmZvckluKGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgdmFyIGFuaW0gPSB2YWx1ZTtcclxuXHJcbiAgICAgIGlmIChhbmltIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbnNba2V5XSA9IHtcclxuICAgICAgICAgIGZyYW1lczogcmFuZ2UuY2FsbChbXSwgYW5pbVswXSwgYW5pbVsxXSksXHJcbiAgICAgICAgICAvLyBmcmFtZXM6IFtdLnJhbmdlKGFuaW1bMF0sIGFuaW1bMV0pLFxyXG4gICAgICAgICAgbmV4dDogYW5pbVsyXSxcclxuICAgICAgICAgIGZyZXF1ZW5jeTogYW5pbVszXSB8fCAxLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25zW2tleV0gPSB7XHJcbiAgICAgICAgICBmcmFtZXM6IGFuaW0uZnJhbWVzLFxyXG4gICAgICAgICAgbmV4dDogYW5pbS5uZXh0LFxyXG4gICAgICAgICAgZnJlcXVlbmN5OiBhbmltLmZyZXF1ZW5jeSB8fCAxXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgIH0sIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44OV44Os44O844Og44KS5Y+W5b6XXHJcbiAgICovXHJcbiAgZ2V0RnJhbWUoaW5kZXgpIHtcclxuICAgIHJldHVybiB0aGlzLmZyYW1lc1tpbmRleF07XHJcbiAgfVxyXG5cclxuICBnZXRBbmltYXRpb24obmFtZSkge1xyXG4gICAgbmFtZSA9IChuYW1lICE9PSB1bmRlZmluZWQpID8gbmFtZSA6IFwiZGVmYXVsdFwiO1xyXG4gICAgcmV0dXJuIHRoaXMuYW5pbWF0aW9uc1tuYW1lXTtcclxuICB9XHJcblxyXG59XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuYXNzZXQuRm9udFxyXG4gKiBAZXh0ZW5kcyBwaGluYS5hc3NldC5Bc3NldFxyXG4gKi9cclxuY2xhc3MgRm9udCBleHRlbmRzIEFzc2V0IHtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5mb250TmFtZSA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBsb2FkKHBhdGgpIHtcclxuICAgIHRoaXMuc3JjID0gcGF0aDtcclxuXHJcbiAgICB2YXIgcmVnID0gLyguKikoPzpcXC4oW14uXSskKSkvO1xyXG4gICAgdmFyIGtleSA9IHRoaXMuZm9udE5hbWUgfHwgbGFzdC5jYWxsKHBhdGgubWF0Y2gocmVnKVsxXS5zcGxpdCgnLycpKTsgICAgLy/jg5Xjgqnjg7Pjg4jlkI3mjIflrprjgYznhKHjgYTloLTlkIjjga9wYXRo44Gu5ouh5by15a2Q5YmN44KS5L2/55SoXHJcbiAgICAvLyB2YXIga2V5ID0gdGhpcy5mb250TmFtZSB8fCBwYXRoLm1hdGNoKHJlZylbMV0uc3BsaXQoJy8nKS5sYXN0OyAgICAvL+ODleOCqeODs+ODiOWQjeaMh+WumuOBjOeEoeOBhOWgtOWQiOOBr3BhdGjjga7mi6HlvLXlrZDliY3jgpLkvb/nlKhcclxuICAgIHZhciB0eXBlID0gcGF0aC5tYXRjaChyZWcpWzJdO1xyXG4gICAgdmFyIGZvcm1hdCQxID0gXCJ1bmtub3duXCI7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSBcInR0ZlwiOlxyXG4gICAgICAgIGZvcm1hdCQxID0gXCJ0cnVldHlwZVwiOyBicmVhaztcclxuICAgICAgY2FzZSBcIm90ZlwiOlxyXG4gICAgICAgIGZvcm1hdCQxID0gXCJvcGVudHlwZVwiOyBicmVhaztcclxuICAgICAgY2FzZSBcIndvZmZcIjpcclxuICAgICAgICBmb3JtYXQkMSA9IFwid29mZlwiOyBicmVhaztcclxuICAgICAgY2FzZSBcIndvZmYyXCI6XHJcbiAgICAgICAgZm9ybWF0JDEgPSBcIndvZmYyXCI7IGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGNvbnNvbGUud2FybihcIuOCteODneODvOODiOOBl+OBpuOBhOOBquOBhOODleOCqeODs+ODiOW9ouW8j+OBp+OBmeOAgihcIiArIHBhdGggKyBcIilcIik7XHJcbiAgICB9XHJcbiAgICB0aGlzLmZvcm1hdCA9IGZvcm1hdCQxO1xyXG4gICAgdGhpcy5mb250TmFtZSA9IGtleTtcclxuXHJcbiAgICBpZiAoZm9ybWF0JDEgIT09IFwidW5rbm93blwiKSB7XHJcbiAgICAgIHZhciB0ZXh0ID0gZm9ybWF0LmNhbGwoXCJAZm9udC1mYWNlIHsgZm9udC1mYW1pbHk6ICd7MH0nOyBzcmM6IHVybCh7MX0pIGZvcm1hdCgnezJ9Jyk7IH1cIiwga2V5LCBwYXRoLCBmb3JtYXQkMSk7XHJcbiAgICAgIC8vIHZhciB0ZXh0ID0gXCJAZm9udC1mYWNlIHsgZm9udC1mYW1pbHk6ICd7MH0nOyBzcmM6IHVybCh7MX0pIGZvcm1hdCgnezJ9Jyk7IH1cIi5mb3JtYXQoa2V5LCBwYXRoLCBmb3JtYXQpO1xyXG4gICAgICB2YXIgZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkXCIpO1xyXG4gICAgICB2YXIgZm9udEZhY2VTdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcbiAgICAgIGlmIChmb250RmFjZVN0eWxlRWxlbWVudC5pbm5lclRleHQpIHtcclxuICAgICAgICBmb250RmFjZVN0eWxlRWxlbWVudC5pbm5lclRleHQgPSB0ZXh0O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvbnRGYWNlU3R5bGVFbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgICAgfVxyXG4gICAgICBlLmFwcGVuZENoaWxkKGZvbnRGYWNlU3R5bGVFbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IEZsb3codGhpcy5fbG9hZC5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIF9sb2FkKHJlc29sdmUpIHtcclxuICAgIGlmICh0aGlzLmZvcm1hdCAhPT0gXCJ1bmtub3duXCIpIHtcclxuICAgICAgdGhpcy5fY2hlY2tMb2FkZWQodGhpcy5mb250TmFtZSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgIHJlc29sdmUodGhpcyk7XHJcbiAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XHJcbiAgICAgIHJlc29sdmUodGhpcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfY2hlY2tMb2FkZWQgKGZvbnQsIGNhbGxiYWNrKSB7XHJcbiAgICB2YXIgY2FudmFzID0gbmV3IENhbnZhcygpO1xyXG4gICAgdmFyIERFRkFVTFRfRk9OVCA9IGNhbnZhcy5jb250ZXh0LmZvbnQuc3BsaXQoJyAnKVsxXTtcclxuICAgIGNhbnZhcy5jb250ZXh0LmZvbnQgPSAnNDBweCAnICsgREVGQVVMVF9GT05UO1xyXG5cclxuICAgIHZhciBjaGVja1RleHQgPSBcIjEyMzQ1Njc4OTAtXlxcXFxxd2VydHl1aW9wQFthc2RmZ2hqa2w7Ol16eGN2Ym5tLC4vXFwhXFxcIiMkJSYnKCk9fnxRV0VSVFlVSU9QYHtBU0RGR0hKS0wrKn1aWENWQk5NPD4/X++8ke+8ku+8k++8lO+8le+8lu+8l++8mO+8me+8kO+8je+8vu+/pe+9ke+9l++9he+9ku+9lO+9me+9le+9ie+9j++9kO+9ge+9k++9hO+9hu+9h++9iO+9iu+9i++9jO+9mu+9mO+9g++9lu+9gu+9ju+9je+8jO+8juOBguOBhOOBhuOBi+OBleOBn+OBquOCkuOCk+aZguOBr+mHkeOBquOCilwiO1xyXG4gICAgLy8g54m55q6K5paH5a2X5a++5b+cXHJcbiAgICBjaGVja1RleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShcIjB4ZjA0YlwiKTtcclxuXHJcbiAgICB2YXIgYmVmb3JlID0gY2FudmFzLmNvbnRleHQubWVhc3VyZVRleHQoY2hlY2tUZXh0KS53aWR0aDtcclxuICAgIGNhbnZhcy5jb250ZXh0LmZvbnQgPSAnNDBweCAnICsgZm9udCArICcsICcgKyBERUZBVUxUX0ZPTlQ7XHJcblxyXG4gICAgdmFyIHRpbWVvdXRDb3VudCA9IDMwO1xyXG4gICAgdmFyIGNoZWNrTG9hZEZvbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciBhZnRlciA9IGNhbnZhcy5jb250ZXh0Lm1lYXN1cmVUZXh0KGNoZWNrVGV4dCkud2lkdGg7XHJcbiAgICAgIGlmIChhZnRlciAhPT0gYmVmb3JlKSB7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfSwgMTAwKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoLS10aW1lb3V0Q291bnQgPiAwKSB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KGNoZWNrTG9hZEZvbnQsIDEwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcclxuICAgICAgICAgIGNvbnNvbGUud2FybihcInRpbWVvdXQgZm9udCBsb2FkaW5nXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNoZWNrTG9hZEZvbnQoKTtcclxuICB9XHJcblxyXG4gIHNldEZvbnROYW1lKG5hbWUpIHtcclxuICAgIGlmICh0aGlzLmxvYWRlZCkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXCLjg5Xjgqnjg7Pjg4jlkI3jga9Mb2Fk5YmN44Gr44Gu44G/6Kit5a6a44GM5Ye65p2l44G+44GZKFwiICsgbmFtZSArIFwiKVwiKTtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICB0aGlzLmZvbnROYW1lID0gbmFtZTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBnZXRGb250TmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmZvbnROYW1lO1xyXG4gIH1cclxuXHJcbn1cblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5hc3NldC5GaWxlXHJcbiAqIEBleHRlbmRzIHBoaW5hLmFzc2V0LkFzc2V0XHJcbiAqL1xyXG5jbGFzcyBGaWxlIGV4dGVuZHMgQXNzZXQge1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBfbG9hZChyZXNvbHZlKSB7XHJcblxyXG4gICAgdmFyIHBhcmFtcyA9IHt9O1xyXG5cclxuICAgIGlmICh0eXBlb2YgdGhpcy5zcmMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICRleHRlbmQuY2FsbChwYXJhbXMsIHtcclxuICAgICAgLy8gcGFyYW1zLiRleHRlbmQoe1xyXG4gICAgICAgIHBhdGg6IHRoaXMuc3JjLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHR5cGVvZiB0aGlzLnNyYyA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgJGV4dGVuZC5jYWxsKHBhcmFtcywgdGhpcy5zcmMpO1xyXG4gICAgICAvLyBwYXJhbXMuJGV4dGVuZCh0aGlzLnNyYyk7XHJcbiAgICB9XHJcblxyXG4gICAgJHNhZmUuY2FsbChwYXJhbXMsIHtcclxuICAgIC8vIHBhcmFtcy4kc2FmZSh7XHJcbiAgICAgIHBhdGg6ICcnLFxyXG4gICAgICBkYXRhVHlwZTogJ3RleHQnLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbG9hZFxyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdmFyIHhtbCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeG1sLm9wZW4oJ0dFVCcsIHBhcmFtcy5wYXRoKTtcclxuICAgIHhtbC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKHhtbC5yZWFkeVN0YXRlID09PSA0KSB7XHJcbiAgICAgICAgaWYgKFsyMDAsIDIwMSwgMF0uaW5kZXhPZih4bWwuc3RhdHVzKSAhPT0gLTEpIHtcclxuICAgICAgICAgIHZhciBkYXRhID0geG1sLnJlc3BvbnNlVGV4dDtcclxuXHJcbiAgICAgICAgICBpZiAocGFyYW1zLmRhdGFUeXBlID09PSAnanNvbicpIHtcclxuICAgICAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHBhcmFtcy5kYXRhVHlwZSA9PT0gJ3htbCcpIHtcclxuICAgICAgICAgICAgZGF0YSA9IChuZXcgRE9NUGFyc2VyKCkpLnBhcnNlRnJvbVN0cmluZyhkYXRhLCBcInRleHQveG1sXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2VsZi5kYXRhVHlwZSA9IHBhcmFtcy5kYXRhVHlwZTtcclxuXHJcbiAgICAgICAgICBzZWxmLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgcmVzb2x2ZShzZWxmKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgeG1sLnNlbmQobnVsbCk7XHJcbiAgICAvLyB0aGlzLmRvbUVsZW1lbnQgPSBuZXcgSW1hZ2UoKTtcclxuICAgIC8vIHRoaXMuZG9tRWxlbWVudC5zcmMgPSB0aGlzLnNyYztcclxuXHJcbiAgICAvLyB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAvLyB0aGlzLmRvbUVsZW1lbnQub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgIHNlbGYubG9hZGVkID0gdHJ1ZTtcclxuICAgIC8vICAgcmVzb2x2ZShzZWxmKTtcclxuICAgIC8vIH07XHJcbiAgfVxyXG5cclxufVxuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmFzc2V0LkFzc2V0TG9hZGVyXHJcbiAqIEBleHRlbmRzIHBoaW5hLnV0aWwuRXZlbnREaXNwYXRjaGVyXHJcbiAqL1xyXG5jbGFzcyBBc3NldExvYWRlciBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHBhcmFtcykge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICAvLyBwYXJhbXMgPSAocGFyYW1zIHx8IHt9KS4kc2FmZSh7XHJcbiAgICAvLyAgIGNhY2hlOiB0cnVlLFxyXG4gICAgLy8gfSk7XHJcbiAgICBwYXJhbXMgPSAkc2FmZS5jYWxsKHBhcmFtc3x8e30sIHsgY2FjaGU6IHRydWUgfSk7XHJcblxyXG4gICAgdGhpcy5hc3NldHMgPSB7fTtcclxuICAgIHRoaXMuY2FjaGUgPSBwYXJhbXMuY2FjaGU7XHJcbiAgfVxyXG5cclxuICBsb2FkKHBhcmFtcykge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdmFyIGZsb3dzID0gW107XHJcblxyXG4gICAgdmFyIGNvdW50ZXIgPSAwO1xyXG4gICAgdmFyIGxlbmd0aCA9IDA7XHJcbiAgICBmb3JJbi5jYWxsKHBhcmFtcywgZnVuY3Rpb24odHlwZSwgYXNzZXRzKSB7XHJcbiAgICAvLyBwYXJhbXMuZm9ySW4oZnVuY3Rpb24odHlwZSwgYXNzZXRzKSB7XHJcbiAgICAgIGxlbmd0aCArPSBPYmplY3Qua2V5cyhhc3NldHMpLmxlbmd0aDtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBmb3JJbi5jYWxsKHBhcmFtcywgZnVuY3Rpb24odHlwZSwgYXNzZXRzKSB7XHJcbiAgICAvLyBwYXJhbXMuZm9ySW4oZnVuY3Rpb24odHlwZSwgYXNzZXRzKSB7XHJcbiAgICAgIGZvckluLmNhbGwoYXNzZXRzLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgIC8vIGFzc2V0cy5mb3JJbihmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGZ1bmMgPSBBc3NldExvYWRlci5hc3NldExvYWRGdW5jdGlvbnNbdHlwZV07XHJcbiAgICAgICAgdmFyIGZsb3cgPSBmdW5jKGtleSwgdmFsdWUpO1xyXG4gICAgICAgIGZsb3cudGhlbihmdW5jdGlvbihhc3NldCkge1xyXG4gICAgICAgICAgaWYgKHNlbGYuY2FjaGUpIHtcclxuICAgICAgICAgICAgQXNzZXRNYW5hZ2VyLnNldCh0eXBlLCBrZXksIGFzc2V0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNlbGYuZmxhcmUoJ3Byb2dyZXNzJywge1xyXG4gICAgICAgICAgICBrZXk6IGtleSxcclxuICAgICAgICAgICAgYXNzZXQ6IGFzc2V0LFxyXG4gICAgICAgICAgICBwcm9ncmVzczogKCsrY291bnRlci9sZW5ndGgpLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZmxvd3MucHVzaChmbG93KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgaWYgKHNlbGYuY2FjaGUpIHtcclxuXHJcbiAgICAgIHNlbGYub24oJ3Byb2dyZXNzJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmIChlLnByb2dyZXNzID49IDEuMCkge1xyXG4gICAgICAgICAgLy8gbG9hZOWkseaVl+aZguOAgeWvvuetllxyXG5cclxuICAgICAgICAgIGZvckluLmNhbGwocGFyYW1zLCBmdW5jdGlvbih0eXBlLCBhc3NldHMpIHtcclxuICAgICAgICAgIC8vIHBhcmFtcy5mb3JJbihmdW5jdGlvbih0eXBlLCBhc3NldHMpIHtcclxuICAgICAgICAgICAgZm9ySW4uY2FsbChhc3NldHMsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgLy8gYXNzZXRzLmZvckluKGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICB2YXIgYXNzZXQgPSBBc3NldE1hbmFnZXIuZ2V0KHR5cGUsIGtleSk7XHJcbiAgICAgICAgICAgICAgaWYgKGFzc2V0LmxvYWRFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGR1bW15ID0gQXNzZXRNYW5hZ2VyLmdldCh0eXBlLCAnZHVtbXknKTtcclxuICAgICAgICAgICAgICAgIGlmIChkdW1teSkge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoZHVtbXkubG9hZEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZHVtbXkubG9hZER1bW15KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZHVtbXkubG9hZEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgQXNzZXRNYW5hZ2VyLnNldCh0eXBlLCBrZXksIGR1bW15KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIGFzc2V0LmxvYWREdW1teSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEZsb3cuYWxsKGZsb3dzKS50aGVuKGZ1bmN0aW9uKGFyZ3MpIHtcclxuICAgICAgc2VsZi5mbGFyZSgnbG9hZCcpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcmVnaXN0ZXIoa2V5LCBmdW5jKSB7XHJcbiAgICB0aGlzLmFzc2V0TG9hZEZ1bmN0aW9uc1trZXldID0gZnVuYztcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkFzc2V0TG9hZGVyLmFzc2V0TG9hZEZ1bmN0aW9ucyA9IHtcclxuICBpbWFnZTogZnVuY3Rpb24oa2V5LCBwYXRoKSB7XHJcbiAgICB2YXIgdGV4dHVyZSA9IG5ldyBUZXh0dXJlKCk7XHJcbiAgICB2YXIgZmxvdyA9IHRleHR1cmUubG9hZChwYXRoKTtcclxuICAgIHJldHVybiBmbG93O1xyXG4gIH0sXHJcbiAgc291bmQ6IGZ1bmN0aW9uKGtleSwgcGF0aCkge1xyXG4gICAgdmFyIHNvdW5kID0gbmV3IFNvdW5kKCk7XHJcbiAgICB2YXIgZmxvdyA9IHNvdW5kLmxvYWQocGF0aCk7XHJcbiAgICByZXR1cm4gZmxvdztcclxuICB9LFxyXG4gIHNwcml0ZXNoZWV0OiBmdW5jdGlvbihrZXksIHBhdGgpIHtcclxuICAgIHZhciBzcyA9IG5ldyBTcHJpdGVTaGVldCgpO1xyXG4gICAgdmFyIGZsb3cgPSBzcy5sb2FkKHBhdGgpO1xyXG4gICAgcmV0dXJuIGZsb3c7XHJcbiAgfSxcclxuICBzY3JpcHQ6IGZ1bmN0aW9uKGtleSwgcGF0aCkge1xyXG4gICAgdmFyIHNjcmlwdCA9IG5ldyBTY3JpcHQoKTtcclxuICAgIHJldHVybiBzY3JpcHQubG9hZChwYXRoKTtcclxuICB9LFxyXG4gIGZvbnQ6IGZ1bmN0aW9uKGtleSwgcGF0aCkge1xyXG4gICAgdmFyIGZvbnQgPSBuZXcgRm9udCgpO1xyXG4gICAgZm9udC5zZXRGb250TmFtZShrZXkpO1xyXG4gICAgcmV0dXJuIGZvbnQubG9hZChwYXRoKTtcclxuICB9LFxyXG4gIGpzb246IGZ1bmN0aW9uKGtleSwgcGF0aCkge1xyXG4gICAgdmFyIHRleHQgPSBuZXcgRmlsZSgpO1xyXG4gICAgcmV0dXJuIHRleHQubG9hZCh7XHJcbiAgICAgIHBhdGg6IHBhdGgsXHJcbiAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgeG1sOiBmdW5jdGlvbihrZXksIHBhdGgpIHtcclxuICAgIHZhciB0ZXh0ID0gbmV3IEZpbGUoKTtcclxuICAgIHJldHVybiB0ZXh0LmxvYWQoe1xyXG4gICAgICBwYXRoOiBwYXRoLFxyXG4gICAgICBkYXRhVHlwZTogXCJ4bWxcIixcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgdGV4dDogZnVuY3Rpb24oa2V5LCBwYXRoKSB7XHJcbiAgICB2YXIgdGV4dCA9IG5ldyBGaWxlKCk7XHJcbiAgICByZXR1cm4gdGV4dC5sb2FkKHBhdGgpO1xyXG4gIH1cclxufTtcblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5hc3NldC5Tb3VuZE1hbmFnZXJcclxuICogIyMjIFJlZlxyXG4gKiAtIGh0dHA6Ly9ldm9sdmUucmVpbnRyb2R1Y2luZy5jb20vX3NvdXJjZS9jbGFzc2VzL2FzMy9Tb3VuZE1hbmFnZXIvU291bmRNYW5hZ2VyLmh0bWxcclxuICogLSBodHRwczovL2dpdGh1Yi5jb20vbmlja2xvY2t3b29kL1NvdW5kTWFuYWdlclxyXG4gKi9cclxuY2xhc3MgU291bmRNYW5hZ2VyIHtcclxuICAvLyB2b2x1bWU6IDAuOCxcclxuICAvLyBtdXNpY1ZvbHVtZTogMC44LFxyXG4gIC8vIG11dGVGbGFnOiBmYWxzZSxcclxuICAvLyBjdXJyZW50TXVzaWM6IG51bGwsXHJcblxyXG4gIHN0YXRpYyBwbGF5KG5hbWUsIHdoZW4sIG9mZnNldCwgZHVyYXRpb24pIHtcclxuICAgIHZhciBzb3VuZCA9IEFzc2V0TWFuYWdlci5nZXQoJ3NvdW5kJywgbmFtZSk7XHJcblxyXG4gICAgc291bmQudm9sdW1lID0gdGhpcy5nZXRWb2x1bWUoKTtcclxuICAgIHNvdW5kLnBsYXkod2hlbiwgb2Zmc2V0LCBkdXJhdGlvbik7XHJcblxyXG4gICAgcmV0dXJuIHNvdW5kO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHN0b3AoKSB7XHJcbiAgICAvLyBUT0RPOiBcclxuICB9XHJcbiAgc3RhdGljIHBhdXNlKCkge1xyXG4gICAgLy8gVE9ETzogXHJcbiAgfVxyXG4gIHN0YXRpYyBmYWRlKCkge1xyXG4gICAgLy8gVE9ETzogXHJcbiAgfVxyXG4gIHN0YXRpYyBzZXRWb2x1bWUodm9sdW1lKSB7XHJcbiAgICB0aGlzLnZvbHVtZSA9IHZvbHVtZTtcclxuICB9XHJcbiAgc3RhdGljIGdldFZvbHVtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnZvbHVtZTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICog44Of44Ol44O844OIXHJcbiAgICovXHJcbiAgc3RhdGljIG11dGUoKSB7XHJcbiAgICB0aGlzLm11dGVGbGFnID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRNdXNpYykge1xyXG4gICAgICB0aGlzLmN1cnJlbnRNdXNpYy52b2x1bWUgPSAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIC8qXHJcbiAgICog44Of44Ol44O844OI6Kej6ZmkXHJcbiAgICovXHJcbiAgc3RhdGljIHVubXV0ZSgpIHtcclxuICAgIHRoaXMubXV0ZUZsYWcgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRNdXNpYykge1xyXG4gICAgICB0aGlzLmN1cnJlbnRNdXNpYy52b2x1bWUgPSB0aGlzLmdldFZvbHVtZU11c2ljKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgc3RhdGljIGlzTXV0ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLm11dGVGbGFnO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHBsYXlNdXNpYyhuYW1lLCBmYWRlVGltZSwgbG9vcCwgd2hlbiwgb2Zmc2V0LCBkdXJhdGlvbikge1xyXG4gICAgbG9vcCA9IChsb29wICE9PSB1bmRlZmluZWQpID8gbG9vcCA6IHRydWU7XHJcblxyXG4gICAgaWYgKHRoaXMuY3VycmVudE11c2ljKSB7XHJcbiAgICAgIHRoaXMuc3RvcE11c2ljKGZhZGVUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbXVzaWMgPSBBc3NldE1hbmFnZXIuZ2V0KCdzb3VuZCcsIG5hbWUpO1xyXG5cclxuICAgIG11c2ljLnNldExvb3AobG9vcCk7XHJcbiAgICBtdXNpYy5wbGF5KHdoZW4sIG9mZnNldCwgZHVyYXRpb24pO1xyXG5cclxuICAgIGlmIChmYWRlVGltZSA+IDApIHtcclxuICAgICAgdmFyIGNvdW50ID0gMzI7XHJcbiAgICAgIHZhciBjb3VudGVyID0gMDtcclxuICAgICAgdmFyIHVuaXRUaW1lID0gZmFkZVRpbWUvY291bnQ7XHJcbiAgICAgIHZhciB2b2x1bWUgPSB0aGlzLmdldFZvbHVtZU11c2ljKCk7XHJcblxyXG4gICAgICBtdXNpYy52b2x1bWUgPSAwO1xyXG4gICAgICB2YXIgaWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICBjb3VudGVyICs9IDE7XHJcbiAgICAgICAgdmFyIHJhdGUgPSBjb3VudGVyL2NvdW50O1xyXG4gICAgICAgIG11c2ljLnZvbHVtZSA9IHJhdGUqdm9sdW1lO1xyXG5cclxuICAgICAgICBpZiAocmF0ZSA+PSAxKSB7XHJcbiAgICAgICAgICBjbGVhckludGVydmFsKGlkKTtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9LCB1bml0VGltZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgbXVzaWMudm9sdW1lID0gdGhpcy5nZXRWb2x1bWVNdXNpYygpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY3VycmVudE11c2ljID0gbXVzaWM7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudE11c2ljO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHN0b3BNdXNpYyhmYWRlVGltZSkge1xyXG4gICAgaWYgKCF0aGlzLmN1cnJlbnRNdXNpYykgeyByZXR1cm4gOyB9XHJcblxyXG4gICAgdmFyIG11c2ljID0gdGhpcy5jdXJyZW50TXVzaWM7XHJcbiAgICB0aGlzLmN1cnJlbnRNdXNpYyA9IG51bGw7XHJcblxyXG4gICAgaWYgKGZhZGVUaW1lID4gMCkge1xyXG4gICAgICB2YXIgY291bnQgPSAzMjtcclxuICAgICAgdmFyIGNvdW50ZXIgPSAwO1xyXG4gICAgICB2YXIgdW5pdFRpbWUgPSBmYWRlVGltZS9jb3VudDtcclxuICAgICAgdmFyIHZvbHVtZSA9IHRoaXMuZ2V0Vm9sdW1lTXVzaWMoKTtcclxuXHJcbiAgICAgIG11c2ljLnZvbHVtZSA9IDA7XHJcbiAgICAgIHZhciBpZCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvdW50ZXIgKz0gMTtcclxuICAgICAgICB2YXIgcmF0ZSA9IGNvdW50ZXIvY291bnQ7XHJcbiAgICAgICAgbXVzaWMudm9sdW1lID0gdm9sdW1lKigxLXJhdGUpO1xyXG5cclxuICAgICAgICBpZiAocmF0ZSA+PSAxKSB7XHJcbiAgICAgICAgICBtdXNpYy5zdG9wKCk7XHJcbiAgICAgICAgICBjbGVhckludGVydmFsKGlkKTtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9LCB1bml0VGltZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgbXVzaWMuc3RvcCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiDpn7Pmpb3jgpLkuIDmmYLlgZzmraJcclxuICAgKi9cclxuICBzdGF0aWMgcGF1c2VNdXNpYygpIHtcclxuICAgIGlmICghdGhpcy5jdXJyZW50TXVzaWMpIHsgcmV0dXJuIDsgfVxyXG4gICAgdGhpcy5jdXJyZW50TXVzaWMucGF1c2UoKTtcclxuICB9XHJcbiAgLypcclxuICAgKiDpn7Pmpb3jgpLlho3plotcclxuICAgKi9cclxuICBzdGF0aWMgcmVzdW1lTXVzaWMoKSB7XHJcbiAgICBpZiAoIXRoaXMuY3VycmVudE11c2ljKSB7IHJldHVybiA7IH1cclxuICAgIHRoaXMuY3VycmVudE11c2ljLnJlc3VtZSgpO1xyXG4gIH1cclxuICAvKlxyXG4gICAqIOmfs+alveOBruODnOODquODpeODvOODoOOCkuioreWumlxyXG4gICAqL1xyXG4gIHN0YXRpYyBzZXRWb2x1bWVNdXNpYyh2b2x1bWUpIHtcclxuICAgIHRoaXMubXVzaWNWb2x1bWUgPSB2b2x1bWU7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50TXVzaWMpIHtcclxuICAgICAgdGhpcy5jdXJyZW50TXVzaWMudm9sdW1lID0gdm9sdW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICAvKlxyXG4gICAqIOmfs+alveOBruODnOODquODpeODvOODoOOCkuWPluW+l1xyXG4gICAqL1xyXG4gIHN0YXRpYyBnZXRWb2x1bWVNdXNpYygpIHtcclxuICAgIHJldHVybiB0aGlzLm11c2ljVm9sdW1lO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8vIHN0YXRpYyBwcm9wc1xyXG5Tb3VuZE1hbmFnZXIudm9sdW1lID0gMC44O1xyXG5Tb3VuZE1hbmFnZXIubXVzaWNWb2x1bWUgPSAwLjg7XHJcblNvdW5kTWFuYWdlci5tdXRlRmxhZyA9IGZhbHNlO1xyXG5Tb3VuZE1hbmFnZXIuY3VycmVudE11c2ljID0gbnVsbDtcblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS51aS5CdXR0b25cclxuICogQnV0dG9uXHJcbiAqIEBleHRlbmRzIHBoaW5hLmRpc3BsYXkuU2hhcGVcclxuICovXHJcbmNsYXNzIEJ1dHRvbiBleHRlbmRzIFNoYXBlIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgb3B0aW9ucyA9ICRzYWZlLmNhbGwob3B0aW9ucyB8fCB7fSwgQnV0dG9uLmRlZmF1bHRzKTtcclxuICAgIC8vIG9wdGlvbnMgPSAob3B0aW9ucyB8fCB7fSkuJHNhZmUocGhpbmEudWkuQnV0dG9uLmRlZmF1bHRzKTtcclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG5cclxuICAgIHRoaXMuY29ybmVyUmFkaXVzID0gb3B0aW9ucy5jb3JuZXJSYWRpdXM7XHJcbiAgICB0aGlzLnRleHQgICAgICAgICA9IG9wdGlvbnMudGV4dDtcclxuICAgIHRoaXMuZm9udENvbG9yICAgID0gb3B0aW9ucy5mb250Q29sb3I7XHJcbiAgICB0aGlzLmZvbnRTaXplICAgICA9IG9wdGlvbnMuZm9udFNpemU7XHJcbiAgICB0aGlzLmZvbnRXZWlnaHQgICAgID0gb3B0aW9ucy5mb250V2VpZ2h0O1xyXG4gICAgdGhpcy5mb250RmFtaWx5ICAgPSBvcHRpb25zLmZvbnRGYW1pbHk7XHJcblxyXG4gICAgdGhpcy5zZXRJbnRlcmFjdGl2ZSh0cnVlKTtcclxuICAgIHRoaXMub24oJ3BvaW50ZW5kJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuZmxhcmUoJ3B1c2gnKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJlcmVuZGVyKGNhbnZhcykge1xyXG4gICAgY2FudmFzLnJvdW5kUmVjdCgtdGhpcy53aWR0aC8yLCAtdGhpcy5oZWlnaHQvMiwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMuY29ybmVyUmFkaXVzKTtcclxuICB9XHJcblxyXG4gIHBvc3RyZW5kZXIoY2FudmFzKSB7XHJcbiAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5jb250ZXh0O1xyXG4gICAgLy8gdGV4dFxyXG4gICAgdmFyIGZvbnQgPSBmb3JtYXQuY2FsbChcIntmb250V2VpZ2h0fSB7Zm9udFNpemV9cHgge2ZvbnRGYW1pbHl9XCIsIHRoaXMpO1xyXG4gICAgLy8gdmFyIGZvbnQgPSBcIntmb250V2VpZ2h0fSB7Zm9udFNpemV9cHgge2ZvbnRGYW1pbHl9XCIuZm9ybWF0KHRoaXMpO1xyXG4gICAgY29udGV4dC5mb250ID0gZm9udDtcclxuICAgIGNvbnRleHQudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICBjb250ZXh0LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xyXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmZvbnRDb2xvcjtcclxuICAgIGNvbnRleHQuZmlsbFRleHQodGhpcy50ZXh0LCAwLCAwKTtcclxuICB9XHJcblxyXG59XHJcblxyXG4vLyBzdGF0aWMgcHJvcHNcclxuQnV0dG9uLmRlZmF1bHRzID0ge1xyXG4gIHdpZHRoOiAyMDAsXHJcbiAgaGVpZ2h0OiA4MCxcclxuICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgZmlsbDogJ2hzbCgyMDAsIDgwJSwgNjAlKScsXHJcbiAgc3Ryb2tlOiBudWxsLFxyXG5cclxuICBjb3JuZXJSYWRpdXM6IDgsXHJcbiAgdGV4dDogJ0hlbGxvJyxcclxuICBmb250Q29sb3I6ICd3aGl0ZScsXHJcbiAgZm9udFNpemU6IDMyLFxyXG4gIGZvbnRXZWlnaHQ6ICcnLFxyXG4gIGZvbnRGYW1pbHk6IFwiJ0hpcmFLYWt1UHJvTi1XMydcIiwgLy8gSGlyYWdpbm8gb3IgSGVsdmV0aWNhLFxyXG59O1xyXG5cclxuLy8gZGVmaW5lZFxyXG5TaGFwZS53YXRjaFJlbmRlclByb3BlcnR5LmNhbGwoQnV0dG9uLCAnY29ybmVyUmFkaXVzJyk7XHJcblNoYXBlLndhdGNoUmVuZGVyUHJvcGVydHkuY2FsbChCdXR0b24sICd0ZXh0Jyk7XHJcblNoYXBlLndhdGNoUmVuZGVyUHJvcGVydHkuY2FsbChCdXR0b24sICdmb250Q29sb3InKTtcclxuU2hhcGUud2F0Y2hSZW5kZXJQcm9wZXJ0eS5jYWxsKEJ1dHRvbiwgJ2ZvbnRTaXplJyk7XHJcblNoYXBlLndhdGNoUmVuZGVyUHJvcGVydHkuY2FsbChCdXR0b24sICdmb250RmFtaWx5Jyk7XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEudWkuR2F1Z2VcclxuICogQGV4dGVuZHMgcGhpbmEuZGlzcGxheS5TaGFwZVxyXG4gKi9cclxuY2xhc3MgR2F1Z2UgZXh0ZW5kcyBTaGFwZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSAkc2FmZS5jYWxsKHt9LCBvcHRpb25zIHx8IHt9LCBHYXVnZS5kZWZhdWx0cyk7XHJcbiAgICAvLyBvcHRpb25zID0gKHt9KS4kc2FmZShvcHRpb25zIHx8IHt9LCBwaGluYS51aS5HYXVnZS5kZWZhdWx0cyk7XHJcbiAgICBcclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG5cclxuICAgIHRoaXMuX3ZhbHVlID0gKG9wdGlvbnMudmFsdWUgIT09IHVuZGVmaW5lZCkgPyBvcHRpb25zLnZhbHVlIDogb3B0aW9ucy5tYXhWYWx1ZTtcclxuICAgIHRoaXMubWF4VmFsdWUgPSBvcHRpb25zLm1heFZhbHVlO1xyXG4gICAgdGhpcy5nYXVnZUNvbG9yID0gb3B0aW9ucy5nYXVnZUNvbG9yO1xyXG4gICAgdGhpcy5jb3JuZXJSYWRpdXMgPSBvcHRpb25zLmNvcm5lclJhZGl1cztcclxuXHJcbiAgICB0aGlzLnZpc3VhbFZhbHVlID0gKG9wdGlvbnMudmFsdWUgIT09IHVuZGVmaW5lZCkgPyBvcHRpb25zLnZhbHVlIDogb3B0aW9ucy5tYXhWYWx1ZTtcclxuICAgIHRoaXMuYW5pbWF0aW9uID0gb3B0aW9ucy5hbmltYXRpb247XHJcbiAgICB0aGlzLmFuaW1hdGlvblRpbWUgPSAxKjEwMDA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmuoDjgr/jg7PjgYvjgpLjg4Hjgqfjg4Pjgq9cclxuICAgKi9cclxuICBpc0Z1bGwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy52YWx1ZSA9PT0gdGhpcy5tYXhWYWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOepuuOBo+OBveOBi+OCkuODgeOCp+ODg+OCr1xyXG4gICAqL1xyXG4gIGlzRW1wdHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy52YWx1ZSA9PT0gMDtcclxuICB9XHJcblxyXG4gIHNldFZhbHVlKHZhbHVlKSB7XHJcbiAgICB2YWx1ZSA9IGNsYW1wKHZhbHVlLCAwLCB0aGlzLm1heFZhbHVlKTtcclxuICAgIC8vIHZhbHVlID0gTWF0aC5jbGFtcCh2YWx1ZSwgMCwgdGhpcy5tYXhWYWx1ZSk7XHJcblxyXG4gICAgLy8gZW5kIHdoZW4gbm93IHZhbHVlIGVxdWFsIHZhbHVlIG9mIGFyZ3VtZW50XHJcbiAgICBpZiAodGhpcy52YWx1ZSA9PT0gdmFsdWUpIHJldHVybiA7XHJcblxyXG4gICAgLy8gZmlyZSB2YWx1ZSBjaGFuZ2UgZXZlbnRcclxuICAgIHRoaXMuZmxhcmUoJ2NoYW5nZScpO1xyXG5cclxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcblxyXG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uKSB7XHJcbiAgICAgIHZhciByYW5nZSA9IE1hdGguYWJzKHRoaXMudmlzdWFsVmFsdWUtdmFsdWUpO1xyXG4gICAgICB2YXIgdGltZSA9IChyYW5nZS90aGlzLm1heFZhbHVlKSp0aGlzLmFuaW1hdGlvblRpbWU7XHJcblxyXG4gICAgICB0aGlzLnR3ZWVuZXIub250d2VlbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuX2RpcnR5RHJhdyA9IHRydWU7XHJcbiAgICAgIH0uYmluZCh0aGlzKTtcclxuICAgICAgdGhpcy50d2VlbmVyXHJcbiAgICAgICAgLmNsZWFyKClcclxuICAgICAgICAudG8oeyd2aXN1YWxWYWx1ZSc6IHZhbHVlfSwgdGltZSlcclxuICAgICAgICAuY2FsbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHRoaXMuZmxhcmUoJ2NoYW5nZWQnKTtcclxuICAgICAgICAgIGlmICh0aGlzLmlzRW1wdHkoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmZsYXJlKCdlbXB0eScpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSBpZiAodGhpcy5pc0Z1bGwoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmZsYXJlKCdmdWxsJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy52aXN1YWxWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICB0aGlzLmZsYXJlKCdjaGFuZ2VkJyk7XHJcbiAgICAgIGlmICh0aGlzLmlzRW1wdHkoKSkge1xyXG4gICAgICAgIHRoaXMuZmxhcmUoJ2VtcHR5Jyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodGhpcy5pc0Z1bGwoKSkge1xyXG4gICAgICAgIHRoaXMuZmxhcmUoJ2Z1bGwnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0UmF0ZSgpIHtcclxuICAgIHZhciByYXRlID0gdGhpcy52aXN1YWxWYWx1ZS90aGlzLm1heFZhbHVlO1xyXG4gICAgcmV0dXJuIHJhdGU7XHJcbiAgfVxyXG5cclxuICBwcmVyZW5kZXIoY2FudmFzKSB7XHJcbiAgICBjYW52YXMucm91bmRSZWN0KC10aGlzLndpZHRoLzIsIC10aGlzLmhlaWdodC8yLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy5jb3JuZXJSYWRpdXMpO1xyXG4gIH1cclxuXHJcbiAgcG9zdHJlbmRlcihjYW52YXMpIHtcclxuICAgIHZhciByYXRlID0gdGhpcy5nZXRSYXRlKCk7XHJcbiAgICBjYW52YXMuY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmdhdWdlQ29sb3I7XHJcbiAgICBjYW52YXMuY29udGV4dC5zYXZlKCk7XHJcbiAgICBjYW52YXMuY29udGV4dC5jbGlwKCk7XHJcbiAgICBjYW52YXMuZmlsbFJlY3QoLXRoaXMud2lkdGgvMiwgLXRoaXMuaGVpZ2h0LzIsIHRoaXMud2lkdGgqcmF0ZSwgdGhpcy5oZWlnaHQpO1xyXG4gICAgY2FudmFzLmNvbnRleHQucmVzdG9yZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHZhbHVlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gIH1cclxuICBzZXQgdmFsdWUodikge1xyXG4gICAgdGhpcy5zZXRWYWx1ZSh2KTtcclxuICB9XHJcblxyXG59XHJcblxyXG4vLyBzdGF0aWMgcHJvcHNcclxuR2F1Z2UuZGVmYXVsdHMgPSB7XHJcbiAgd2lkdGg6IDI1NixcclxuICBoZWlnaHQ6IDMyLFxyXG4gIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICBmaWxsOiAnd2hpdGUnLFxyXG4gIHN0cm9rZTogJyNhYWEnLFxyXG4gIHN0cm9rZVdpZHRoOiA0LFxyXG4gIG1heFZhbHVlOiAxMDAsXHJcbiAgZ2F1Z2VDb2xvcjogJyM0NGYnLFxyXG4gIGNvcm5lclJhZGl1czogMCxcclxuICBhbmltYXRpb246IHRydWVcclxufTtcclxuXHJcbi8vIGRlZmluZWRcclxuU2hhcGUud2F0Y2hSZW5kZXJQcm9wZXJ0eS5jYWxsKEdhdWdlLCAndmFsdWUnKTtcclxuU2hhcGUud2F0Y2hSZW5kZXJQcm9wZXJ0eS5jYWxsKEdhdWdlLCAnbWF4VmFsdWUnKTtcclxuU2hhcGUud2F0Y2hSZW5kZXJQcm9wZXJ0eS5jYWxsKEdhdWdlLCAnZ2F1Z2VDb2xvcicpO1xyXG5TaGFwZS53YXRjaFJlbmRlclByb3BlcnR5LmNhbGwoR2F1Z2UsICdjb3JuZXJSYWRpdXMnKTtcclxuXHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLnVpLkNpcmNsZUdhdWdlXHJcbiAqIEBleHRlbmRzIHBoaW5hLnVpLkdhdWdlXHJcbiAqL1xyXG5jbGFzcyBDaXJjbGVHYXVnZSBleHRlbmRzIEdhdWdlIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgb3B0aW9ucyA9ICRzYWZlLmNhbGwob3B0aW9ucyB8fCB7fSwge1xyXG4gICAgLy8gb3B0aW9ucyA9IChvcHRpb25zIHx8IHt9KS4kc2FmZSh7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgZmlsbDogJyNhYWEnLFxyXG4gICAgICBzdHJva2U6ICcjMjIyJyxcclxuXHJcbiAgICAgIHJhZGl1czogNjQsXHJcbiAgICAgIGFudGljbG9ja3dpc2U6IHRydWUsXHJcbiAgICAgIHNob3dQZXJjZW50YWdlOiBmYWxzZSwgLy8gVE9ET1xyXG4gICAgfSk7XHJcblxyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcblxyXG4gICAgdGhpcy5zZXRCb3VuZGluZ1R5cGUoJ2NpcmNsZScpO1xyXG5cclxuICAgIHRoaXMucmFkaXVzID0gb3B0aW9ucy5yYWRpdXM7XHJcbiAgICB0aGlzLmFudGljbG9ja3dpc2UgPSBvcHRpb25zLmFudGljbG9ja3dpc2U7XHJcbiAgICB0aGlzLnNob3dQZXJjZW50YWdlID0gb3B0aW9ucy5zaG93UGVyY2VudGFnZTtcclxuICB9XHJcblxyXG4gIHByZXJlbmRlcihjYW52YXMpIHtcclxuICAgIHZhciByYXRlID0gdGhpcy5nZXRSYXRlKCk7XHJcbiAgICB2YXIgZW5kID0gKE1hdGguUEkqMikqcmF0ZTtcclxuICAgIHRoaXMuc3RhcnRBbmdsZSA9IDA7XHJcbiAgICB0aGlzLmVuZEFuZ2xlID0gZW5kO1xyXG5cclxuICAgIHRoaXMuY2FudmFzLnJvdGF0ZSgtTWF0aC5QSSowLjUpO1xyXG4gICAgdGhpcy5jYW52YXMuc2NhbGUoMSwgLTEpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyRmlsbChjYW52YXMpIHtcclxuICAgIGNhbnZhcy5maWxsUGllKDAsIDAsIHRoaXMucmFkaXVzLCB0aGlzLnN0YXJ0QW5nbGUsIHRoaXMuZW5kQW5nbGUpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyU3Ryb2tlKGNhbnZhcykge1xyXG4gICAgY2FudmFzLnN0cm9rZUFyYygwLCAwLCB0aGlzLnJhZGl1cywgdGhpcy5zdGFydEFuZ2xlLCB0aGlzLmVuZEFuZ2xlKTtcclxuICB9XHJcblxyXG4gIHBvc3RyZW5kZXIoKSB7XHJcbiAgICAvLyBpZiAodGhpcy5zaG93UGVyY2VudGFnZSkge1xyXG4gICAgLy8gICAvLyBUT0RPOlxyXG4gICAgLy8gICB2YXIgbGVmdCA9IE1hdGgubWF4KDAsIHRoaXMubGltaXQtdGhpcy50aW1lKTtcclxuICAgIC8vICAgdGhpcy5sYWJlbC50ZXh0ID0gTWF0aC5jZWlsKGxlZnQvMTAwMCkrJyc7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG5cclxufVxuXG52YXIgdGV4dFdpZHRoQ2FjaGUgPSB7fTtcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEudWkuTGFiZWxBcmVhXHJcbiAqIEBleHRlbmRzIHBoaW5hLmRpc3BsYXkuTGFiZWxcclxuICovXHJcbmNsYXNzIExhYmVsQXJlYSBleHRlbmRzIExhYmVsIHtcclxuXHJcbiAgLy8gX2xpbmVVcGRhdGU6IHRydWUsXHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSAkc2FmZS5jYWxsKHt9LCBvcHRpb25zLCBMYWJlbEFyZWEuZGVmYXVsdHMpO1xyXG4gICAgLy8gb3B0aW9ucyA9IHt9LiRzYWZlKG9wdGlvbnMsIExhYmVsQXJlYS5kZWZhdWx0cyk7XHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuXHJcbiAgICB0aGlzLl9saW5lVXBkYXRlID0gdHJ1ZTtcclxuICAgIHRoaXMudmVydGljYWxBbGlnbiA9IG9wdGlvbnMudmVydGljYWxBbGlnbjtcclxuICAgIHRoaXMuc2Nyb2xsID0gb3B0aW9ucy5zY3JvbGwgfHwgbmV3IFZlY3RvcjIoKTtcclxuICAgIHRoaXMuc2Nyb2xsWCA9IG9wdGlvbnMuc2Nyb2xsWDtcclxuICAgIHRoaXMuc2Nyb2xsWSA9IG9wdGlvbnMuc2Nyb2xsWTtcclxuICB9XHJcblxyXG4gIGNhbGNDYW52YXNXaWR0aCAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy53aWR0aCArIHRoaXMucGFkZGluZyAqIDI7XHJcbiAgfVxyXG5cclxuICBjYWxjQ2FudmFzSGVpZ2h0ICgpIHtcclxuICAgIHJldHVybiB0aGlzLmhlaWdodCArIHRoaXMucGFkZGluZyAqIDI7XHJcbiAgfVxyXG4gIGdldE9mZnNldFkgKCkge1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLnZlcnRpY2FsQWxpZ24gPT09ICdudW1iZXInKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZlcnRpY2FsQWxpZ247XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTGFiZWxBcmVhLnZlcnRpY2FsQWxpZ25Ub09mZnNldE1hcFt0aGlzLnZlcnRpY2FsQWxpZ25dIHx8IDA7XHJcbiAgfVxyXG5cclxuICBnZXRPZmZzZXRYICgpIHtcclxuICAgIHJldHVybiBMYWJlbEFyZWEuYWxpZ25Ub09mZnNldE1hcFt0aGlzLmFsaWduXSB8fCAwO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGV4dFdpZHRoQ2FjaGUgKCkge1xyXG4gICAgdmFyIGNhY2hlID0gdGV4dFdpZHRoQ2FjaGVbdGhpcy5mb250XTtcclxuICAgIHJldHVybiBjYWNoZSB8fCAodGV4dFdpZHRoQ2FjaGVbdGhpcy5mb250XSA9IHt9KTtcclxuICB9XHJcbiAgXHJcbiAgc3BsaWNlTGluZXMgKGxpbmVzKSB7XHJcbiAgICB2YXIgcm93V2lkdGggPSB0aGlzLndpZHRoO1xyXG4gICAgdmFyIGNvbnRleHQgPSB0aGlzLmNhbnZhcy5jb250ZXh0O1xyXG4gICAgY29udGV4dC5mb250ID0gdGhpcy5mb250O1xyXG5cclxuICAgIHZhciBjYWNoZSA9IHRoaXMuZ2V0VGV4dFdpZHRoQ2FjaGUoKTtcclxuXHJcbiAgICAvLyB1cGRhdGUgY2FjaGVcclxuICAgIGVhY2gkMS5jYWxsKHRoaXMuX3RleHQsIGZ1bmN0aW9uKGNoKSB7XHJcbiAgICAvLyB0aGlzLl90ZXh0LmVhY2goZnVuY3Rpb24oY2gpIHtcclxuICAgICAgaWYgKCFjYWNoZVtjaF0pIHtcclxuICAgICAgICBjYWNoZVtjaF0gPSBjb250ZXh0Lm1lYXN1cmVUZXh0KGNoKS53aWR0aDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHZhciBsb2NhbExpbmVzID0gW107XHJcbiAgICBsaW5lcy5mb3JFYWNoKGZ1bmN0aW9uKGxpbmUpIHtcclxuICAgICAgXHJcbiAgICAgIHZhciBzdHIgPSAnJztcclxuICAgICAgdmFyIHRvdGFsV2lkdGggPSAwO1xyXG5cclxuICAgICAgLy8g44Gv44G/5Ye644Gm44GE44Gf44KJ5by35Yi255qE44Gr5pS56KGM44GZ44KLXHJcbiAgICAgIGVhY2gkMS5jYWxsKGxpbmUsIGZ1bmN0aW9uKGNoKSB7XHJcbiAgICAgIC8vIGxpbmUuZWFjaChmdW5jdGlvbihjaCkge1xyXG4gICAgICAgIHZhciB3ID0gY2FjaGVbY2hdO1xyXG5cclxuICAgICAgICBpZiAoKHRvdGFsV2lkdGgrdykgPiByb3dXaWR0aCkge1xyXG4gICAgICAgICAgbG9jYWxMaW5lcy5wdXNoKHN0cik7XHJcbiAgICAgICAgICBzdHIgPSAnJztcclxuICAgICAgICAgIHRvdGFsV2lkdGggPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RyICs9IGNoO1xyXG4gICAgICAgIHRvdGFsV2lkdGggKz0gdztcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyDmrovjgorjgpIgcHVzaCDjgZnjgotcclxuICAgICAgbG9jYWxMaW5lcy5wdXNoKHN0cik7XHJcblxyXG4gICAgfSk7XHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4gbG9jYWxMaW5lcztcclxuICB9XHJcbiAgXHJcbiAgZ2V0TGluZXMgKCkge1xyXG4gICAgaWYgKHRoaXMuX2xpbmVVcGRhdGUgPT09IGZhbHNlKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9saW5lcztcclxuICAgIH1cclxuICAgIHRoaXMuX2xpbmVVcGRhdGUgPSBmYWxzZTtcclxuXHJcbiAgICB2YXIgbGluZXMgPSAodGhpcy50ZXh0ICsgJycpLnNwbGl0KCdcXG4nKTtcclxuICAgIGlmICh0aGlzLndpZHRoIDwgMSkge1xyXG4gICAgICB0aGlzLl9saW5lcyA9IGxpbmVzO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuX2xpbmVzID0gdGhpcy5zcGxpY2VMaW5lcyhsaW5lcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2xpbmVzO1xyXG4gIH1cclxuXHJcbiAgcHJlcmVuZGVyIChjYW52YXMpIHtcclxuICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmNvbnRleHQ7XHJcbiAgICBjb250ZXh0LmZvbnQgPSB0aGlzLmZvbnQ7XHJcbiAgICBjb250ZXh0LnRleHRBbGlnbiA9IHRoaXMuYWxpZ247XHJcbiAgICBjb250ZXh0LnRleHRCYXNlbGluZSA9IHRoaXMuYmFzZWxpbmU7XHJcblxyXG4gICAgdmFyIHRleHQgPSB0aGlzLnRleHQgKyAnJztcclxuICAgIHZhciBsaW5lcyA9IHRoaXMuZ2V0TGluZXMoKTtcclxuICAgIHZhciBsZW5ndGggPSBsaW5lcy5sZW5ndGg7XHJcbiAgICB2YXIgd2lkdGggPSB0aGlzLndpZHRoO1xyXG4gICAgdmFyIGhlaWdodCA9IHRoaXMuaGVpZ2h0O1xyXG5cclxuICAgIHZhciBmb250U2l6ZSA9IHRoaXMuZm9udFNpemU7XHJcbiAgICB2YXIgbGluZVNpemUgPSBmb250U2l6ZSAqIHRoaXMubGluZUhlaWdodDtcclxuICAgIHZhciBvZmZzZXRYID0gdGhpcy5nZXRPZmZzZXRYKCkgKiB3aWR0aDtcclxuICAgIHZhciBvZmZzZXRZID0gdGhpcy5nZXRPZmZzZXRZKCk7XHJcbiAgICBpZiAob2Zmc2V0WSA9PT0gMCkge1xyXG4gICAgICBvZmZzZXRZID0gLU1hdGguZmxvb3IobGVuZ3RoIC8gMikgKiBsaW5lU2l6ZTtcclxuICAgICAgb2Zmc2V0WSArPSAoKGxlbmd0aCArIDEpICUgMikgKiAobGluZVNpemUgLyAyKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKG9mZnNldFkgPCAwKSB7XHJcbiAgICAgIG9mZnNldFkgKj0gaGVpZ2h0O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIG9mZnNldFkgPSBvZmZzZXRZICogaGVpZ2h0IC0gbGVuZ3RoICogbGluZVNpemUgKyBsaW5lU2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICBvZmZzZXRZIC09IHRoaXMuc2Nyb2xsWTtcclxuICAgIG9mZnNldFggLT0gdGhpcy5zY3JvbGxYO1xyXG4gICAgdmFyIHN0YXJ0ID0gKG9mZnNldFkgKyBoZWlnaHQgLyAyKSAvIC1saW5lU2l6ZSB8IDA7XHJcbiAgICBpZiAoc3RhcnQgPCAwKSB7IHN0YXJ0ID0gMDsgfVxyXG5cclxuICAgIHZhciBlbmQgPSAoaGVpZ2h0IC8gMiAtIG9mZnNldFkgKyBsaW5lU2l6ZSAqIDIpIC8gbGluZVNpemUgfCAwO1xyXG4gICAgbGluZXMgPSBsaW5lcy5maWx0ZXIoZnVuY3Rpb24obGluZSwgaSkge1xyXG4gICAgICByZXR1cm4gc3RhcnQgPD0gaSAmJiBlbmQgPiBpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5saW5lcyA9IGxpbmVzO1xyXG4gICAgdGhpcy5vZmZzZXRYID0gb2Zmc2V0WDtcclxuICAgIHRoaXMub2Zmc2V0WSA9IG9mZnNldFk7XHJcbiAgICB0aGlzLmxpbmVTaXplID0gbGluZVNpemU7XHJcbiAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XHJcbiAgfVxyXG5cclxuICByZW5kZXJGaWxsIChjYW52YXMpIHtcclxuICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmNvbnRleHQ7XHJcbiAgICB2YXIgb2Zmc2V0WCA9IHRoaXMub2Zmc2V0WDtcclxuICAgIHZhciBvZmZzZXRZID0gdGhpcy5vZmZzZXRZO1xyXG4gICAgdmFyIGxpbmVTaXplID0gdGhpcy5saW5lU2l6ZTtcclxuICAgIHZhciBzdGFydCA9IHRoaXMuc3RhcnQ7XHJcbiAgICB0aGlzLmxpbmVzLmZvckVhY2goZnVuY3Rpb24obGluZSwgaSkge1xyXG4gICAgICBjb250ZXh0LmZpbGxUZXh0KGxpbmUsIG9mZnNldFgsIChzdGFydCArIGkpICogbGluZVNpemUgKyBvZmZzZXRZKTtcclxuICAgIH0sIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyU3Ryb2tlIChjYW52YXMpIHtcclxuICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmNvbnRleHQ7XHJcbiAgICB2YXIgb2Zmc2V0WCA9IHRoaXMub2Zmc2V0WDtcclxuICAgIHZhciBvZmZzZXRZID0gdGhpcy5vZmZzZXRZO1xyXG4gICAgdmFyIGxpbmVTaXplID0gdGhpcy5saW5lU2l6ZTtcclxuICAgIHZhciBzdGFydCA9IHRoaXMuc3RhcnQ7XHJcbiAgICB0aGlzLmxpbmVzLmZvckVhY2goZnVuY3Rpb24obGluZSwgaSkge1xyXG4gICAgICBjb250ZXh0LnN0cm9rZVRleHQobGluZSwgb2Zmc2V0WCwgKHN0YXJ0ICsgaSkgKiBsaW5lU2l6ZSArIG9mZnNldFkpO1xyXG4gICAgfSwgdGhpcyk7XHJcbiAgfVxyXG5cclxuICBnZXQgdGV4dCgpIHtcclxuICAgIHJldHVybiB0aGlzLl90ZXh0O1xyXG4gIH1cclxuICBzZXQgdGV4dCh2KSB7XHJcbiAgICB0aGlzLl90ZXh0ID0gdjtcclxuICB9XHJcblxyXG4gIGdldCBzY3JvbGxYKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2Nyb2xsLng7XHJcbiAgfVxyXG4gIHNldCBzY3JvbGxYKHYpIHtcclxuICAgIHRoaXMuc2Nyb2xsLnggPSB2O1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNjcm9sbFkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zY3JvbGwueTtcclxuICB9XHJcbiAgc2V0IHNjcm9sbFkodikge1xyXG4gICAgdGhpcy5zY3JvbGwueSA9IHY7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIF9zdGF0aWM6IHtcclxuICAvLyAgIGRlZmF1bHRzOiB7XHJcbiAgLy8gICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxyXG4gIC8vICAgICBhbGlnbjogJ2xlZnQnLFxyXG4gIC8vICAgICBiYXNlbGluZTogJ3RvcCcsXHJcbiAgLy8gICAgIHdpZHRoOiAzMjAsXHJcbiAgLy8gICAgIGhlaWdodDogMzIwLFxyXG4gIC8vICAgICBzY3JvbGxYOiAwLFxyXG4gIC8vICAgICBzY3JvbGxZOiAwLFxyXG4gIC8vICAgfSxcclxuICAvLyAgIGFsaWduVG9PZmZzZXRNYXA6IHtcclxuICAvLyAgICAgc3RhcnQ6IC0wLjUsXHJcbiAgLy8gICAgIGxlZnQ6IC0wLjUsXHJcbiAgLy8gICAgIGNlbnRlcjogMCxcclxuICAvLyAgICAgZW5kOiAwLjUsXHJcbiAgLy8gICAgIHJpZ2h0OiAwLjUsXHJcbiAgLy8gICB9LFxyXG5cclxuICAvLyAgIHZlcnRpY2FsQWxpZ25Ub09mZnNldE1hcDoge1xyXG4gIC8vICAgICB0b3A6IC0wLjUsXHJcbiAgLy8gICAgIGNlbnRlcjogMCxcclxuICAvLyAgICAgbWlkZGxlOiAwLFxyXG4gIC8vICAgICBib3R0b206IDAuNSxcclxuICAvLyAgIH0sXHJcbiAgLy8gfSxcclxuXHJcbiAgLy8gX2RlZmluZWQ6IGZ1bmN0aW9uKCkge1xyXG4gIC8vICAgdmFyIGZ1bmMgPSBmdW5jdGlvbihuZXdWYWwsIG9sZFZhbCkge1xyXG4gIC8vICAgICBpZigodGhpcy5fbGluZVVwZGF0ZSA9PT0gZmFsc2UpICYmIChuZXdWYWwgIT09IG9sZFZhbCkpe1xyXG4gIC8vICAgICAgIHRoaXMuX2xpbmVVcGRhdGUgPSB0cnVlO1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9O1xyXG5cclxuICAvLyAgIFtcclxuICAvLyAgICAgJ3RleHQnLFxyXG4gIC8vICAgICAnd2lkdGgnLFxyXG4gIC8vICAgICAnZm9udFNpemUnLFxyXG4gIC8vICAgICAnZm9udFdlaWdodCcsXHJcbiAgLy8gICAgICdmb250RmFtaWx5J1xyXG4gIC8vICAgXS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xyXG4gIC8vICAgICB0aGlzLiR3YXRjaChrZXksIGZ1bmMpO1xyXG4gIC8vICAgfSwgdGhpcy5wcm90b3R5cGUpO1xyXG5cclxuICAvLyAgIHBoaW5hLmRpc3BsYXkuU2hhcGUud2F0Y2hSZW5kZXJQcm9wZXJ0aWVzLmNhbGwodGhpcyAsW1xyXG4gIC8vICAgICAndmVydGljYWxBbGlnbicsXHJcbiAgLy8gICAgICd0ZXh0JyxcclxuICAvLyAgICAgJ3Njcm9sbCcsXHJcbiAgLy8gICAgICdzY3JvbGxYJyxcclxuICAvLyAgICAgJ3Njcm9sbFknXHJcbiAgLy8gICBdKTtcclxuICAvLyB9LFxyXG5cclxuXHJcbiAgZW5hYmxlU2Nyb2xsKCkge1xyXG4gICAgLy8gICB0aGlzLnNldEludGVyYWN0aXZlKHRydWUpO1xyXG4gICAgLy8gICB2YXIgcGh5c2ljYWwgPSBwaGluYS5hY2Nlc3NvcnkuUGh5c2ljYWwoKTtcclxuICAgIC8vICAgcGh5c2ljYWwuYXR0YWNoVG8odGhpcyk7XHJcbiAgICAvLyAgIHBoeXNpY2FsLmZyaWN0aW9uID0gMC44O1xyXG4gICAgLy8gICB2YXIgbGFzdEZvcmNlID0gMDtcclxuICAgIC8vICAgdmFyIGxhc3RNb3ZlID0gMDtcclxuICAgIC8vICAgdGhpcy5vbigncG9pbnRzdGFydCcsIGZ1bmN0aW9uKGUpe1xyXG4gICAgLy8gICAgIGxhc3RGb3JjZSA9IHBoeXNpY2FsLnZlbG9jaXR5Lnk7XHJcbiAgICAvLyAgICAgbGFzdE1vdmUgPSAwO1xyXG4gICAgLy8gICAgIHBoeXNpY2FsLmZvcmNlKDAsIDApO1xyXG4gICAgLy8gICB9KTtcclxuICAgIC8vICAgdGhpcy5vbigncG9pbnRtb3ZlJywgZnVuY3Rpb24oZSl7XHJcbiAgICAvLyAgICAgdmFyIHAgPSBlLnBvaW50ZXIuZGVsdGFQb3NpdGlvbjtcclxuICAgIC8vICAgICBsYXN0TW92ZSA9IHAueTtcclxuICAgIC8vICAgICB0aGlzLnNjcm9sbFkgKz0gbGFzdE1vdmU7XHJcbiAgICAvLyAgIH0pO1xyXG5cclxuICAgIC8vICAgdGhpcy5vbigncG9pbnRlbmQnLCBmdW5jdGlvbihlKXtcclxuICAgIC8vICAgICBwaHlzaWNhbC5mb3JjZSgwLCBsYXN0Rm9yY2UgKyBsYXN0TW92ZSk7XHJcbiAgICAvLyAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8vIHN0YXRpYyBwcm9wc1xyXG5MYWJlbEFyZWEuZGVmYXVsdHMgPSB7XHJcbiAgdmVydGljYWxBbGlnbjogJ3RvcCcsXHJcbiAgYWxpZ246ICdsZWZ0JyxcclxuICBiYXNlbGluZTogJ3RvcCcsXHJcbiAgd2lkdGg6IDMyMCxcclxuICBoZWlnaHQ6IDMyMCxcclxuICBzY3JvbGxYOiAwLFxyXG4gIHNjcm9sbFk6IDAsXHJcbn07XHJcbkxhYmVsQXJlYS5hbGlnblRvT2Zmc2V0TWFwID0ge1xyXG4gIHN0YXJ0OiAtMC41LFxyXG4gIGxlZnQ6IC0wLjUsXHJcbiAgY2VudGVyOiAwLFxyXG4gIGVuZDogMC41LFxyXG4gIHJpZ2h0OiAwLjUsXHJcbn07XHJcbkxhYmVsQXJlYS52ZXJ0aWNhbEFsaWduVG9PZmZzZXRNYXAgPSB7XHJcbiAgdG9wOiAtMC41LFxyXG4gIGNlbnRlcjogMCxcclxuICBtaWRkbGU6IDAsXHJcbiAgYm90dG9tOiAwLjUsXHJcbn1cclxuXHJcbi8vIGRlZmluZWRcclxuO1xyXG5TaGFwZS53YXRjaFJlbmRlclByb3BlcnRpZXMuY2FsbChMYWJlbEFyZWEgLFtcclxuICAndmVydGljYWxBbGlnbicsXHJcbiAgJ3RleHQnLFxyXG4gICdzY3JvbGwnLFxyXG4gICdzY3JvbGxYJyxcclxuICAnc2Nyb2xsWSdcclxuXSk7XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZWZmZWN0LldhdmVcclxuICogQnV0dG9uXHJcbiAqIEBleHRlbmRzIHBoaW5hLmRpc3BsYXkuQ2lyY2xlU2hhcGVcclxuICovXHJcbmNsYXNzIFdhdmUgZXh0ZW5kcyBDaXJjbGVTaGFwZSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSAkc2FmZS5jYWxsKG9wdGlvbnMgfHwge30sIHtcclxuICAgIC8vIG9wdGlvbnMgPSAob3B0aW9ucyB8fCB7fSkuJHNhZmUoe1xyXG4gICAgICBmaWxsOiAnd2hpdGUnLFxyXG4gICAgICBzdHJva2U6IGZhbHNlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcblxyXG4gICAgdmFyIHR3ZWVuZXIgPSBuZXcgVHdlZW5lcigpLmF0dGFjaFRvKHRoaXMpO1xyXG4gICAgdHdlZW5lclxyXG4gICAgICAudG8oe3NjYWxlWDoyLCBzY2FsZVk6MiwgYWxwaGE6MH0sIDUwMClcclxuICAgICAgLmNhbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgfSwgdGhpcyk7XHJcbiAgfVxyXG59XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuc29jaWFsLlR3aXR0ZXJcclxuICogIyBUd2l0dGVyIOOBruWFseacieODquODs+OCr+OCkueUn+aIkOOBmeOCi+OCr+ODqeOCuVxyXG4gKiBUd2l0dGVyIOOBruWFseacieODquODs+OCr+OBriBVUkwg44KS55Sf5oiQ44GX44Gm44GP44KM44KL44Kv44Op44K544Gn44GZ44CCXHJcbiAqL1xyXG5jbGFzcyBUd2l0dGVyIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICogXHJcbiAgICog44Kz44Oz44K544OI44Op44Kv44K/44Gv5a2Y5Zyo44GX44G+44GZ44GM44Kk44Oz44K544K/44Oz44K544Oh44Oz44OQ44Gv44GC44KK44G+44Gb44KT44CCXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHBoaW5hLnNvY2lhbC5Ud2l0dGVyLmNyZWF0ZVVSTFxyXG4gICAqIFR3aXR0ZXLjga7lhbHmnInjg6rjg7Pjgq/jgpLnlJ/miJDjgZfjgb7jgZnjgILlvJXmlbDjgavjgqrjg5bjgrjjgqfjgq/jg4jjgpLmuKHjgZnjgZPjgajjgafmp5jjgIXjgarjg5Hjg6njg6Hjg7zjgr/jg7zjgpLoqK3lrprlh7rmnaXjgb7jgZnjgILlvJXmlbDjga7jgqrjg5bjgrjjgqfjgq/jg4jjga8ge0BsaW5rICNwaGluYS5zb2NpYWwuVHdpdHRlci5kZWZhdWx0c30g44Gn5a6J5YWo5ouh5by144GV44KM44G+44GZ44CCXHJcbiAgICogXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgcGhpbmEuc29jaWFsLlR3aXR0ZXIuY3JlYXRlVVJMKCk7IC8vID0+IGh0dHA6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/dGV4dD1IZWxsbyUyQyUyMHdvcmxkISZoYXNodGFncz1qYXZhc2NyaXB0JTJDcGhpbmEmdXJsPXvnj77lnKjjga5VUkx9XHJcbiAgICogXHJcbiAgICogICAgIHBoaW5hLnNvY2lhbC5Ud2l0dGVyLmNyZWF0ZVVSTCh7XHJcbiAgICogICAgICAgdGV4dDogJ1RoaXMgaXMgdGV4dCcsXHJcbiAgICogICAgICAgaGFzaHRhZ3M6ICdoYXNodGFnMSxoYXNodGFnMicsXHJcbiAgICogICAgICAgdXJsOiAnaHR0cDovL3BoaW5hanMuY29tJ1xyXG4gICAqICAgICB9KTsgLy8gPT4gaHR0cDovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldD90ZXh0PVRoaXMlMjBpcyUyMHRleHQmaGFzaHRhZ3M9aGFzaHRhZzElMkNoYXNodGFnMiZ1cmw9aHR0cCUzQSUyRiUyRnBoaW5hanMuY29tXHJcbiAgICogXHJcbiAgICogICAgIHBoaW5hLnNvY2lhbC5Ud2l0dGVyLmNyZWF0ZVVSTCh7XHJcbiAgICogICAgICAgdGV4dDogJ1RoaXMgaXMgdGV4dCcsXHJcbiAgICogICAgICAgaGFzaHRhZ3M6ICdoYXNodGFnMSxoYXNodGFnMicsXHJcbiAgICogICAgICAgdXJsOiAnaHR0cDovL3BoaW5hanMuY29tJyxcclxuICAgKiAgICAgICBvdGhlcjogJ1RoaXMgaXMgb3RoZXInLy/oqK3lrprpoIXnm67jga/pganlvZPjgavlopfjgoTjgZvjgotcclxuICAgKiAgICAgfSk7IC8vID0+IGh0dHA6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/dGV4dD1UaGlzJTIwaXMlMjB0ZXh0Jmhhc2h0YWdzPWhhc2h0YWcxJTJDaGFzaHRhZzImdXJsPWh0dHAlM0ElMkYlMkZwaGluYWpzLmNvbSZvdGhlcj1UaGlzJTIwaXMlMjBvdGhlclxyXG4gICAqIFxyXG4gICAqICAgICBwaGluYS5zb2NpYWwuVHdpdHRlci5jcmVhdGVVUkwoe1xyXG4gICAqICAgICAgIHVybDogJ2h0dHA6Ly9waGluYWpzLmNvbSdcclxuICAgKiAgICAgfSk7IC8vID0+IGh0dHA6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/dXJsPWh0dHAlM0ElMkYlMkZwaGluYWpzLmNvbSZ0ZXh0PUhlbGxvJTJDJTIwd29ybGQhJmhhc2h0YWdzPWphdmFzY3JpcHQlMkNwaGluYVxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fVxyXG4gICAqIEByZXR1cm4ge1N0cmluZ30gVHdpdHRlciDjga7lhbHmnInjg6rjg7Pjgq9cclxuICAgKiBAc3RhdGljXHJcbiAgICovXHJcbiAgc3RhdGljIGNyZWF0ZVVSTCAob3B0aW9ucykge1xyXG4gICAgb3B0aW9ucyA9ICRzYWZlLmNhbGwob3B0aW9ucyB8fCB7fSwgVHdpdHRlci5kZWZhdWx0cyk7XHJcbiAgICAvLyBvcHRpb25zID0gKG9wdGlvbnMgfHwge30pLiRzYWZlKHRoaXMuZGVmYXVsdHMpO1xyXG5cclxuICAgIHZhciBxdWVyaWVzID0gW107XHJcbiAgICB2YXIgZXVjID0gZW5jb2RlVVJJQ29tcG9uZW50O1xyXG4gICAgZm9ySW4uY2FsbChvcHRpb25zLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAvLyBvcHRpb25zLmZvckluKGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgdmFyIHN0ciA9IGtleSArICc9JyArIGV1Yyh2YWx1ZSk7XHJcbiAgICAgIHF1ZXJpZXMucHVzaChzdHIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHVybCA9IGZvcm1hdC5jYWxsKCd7YmFzZVVSTH0ve3R5cGV9P3txdWVyeX0nLCB7XHJcbiAgICAvLyB2YXIgdXJsID0gJ3tiYXNlVVJMfS97dHlwZX0/e3F1ZXJ5fScuZm9ybWF0KHtcclxuICAgICAgYmFzZVVSTDogdGhpcy5iYXNlVVJMLFxyXG4gICAgICAvLyB0eXBlOiBvcHRpb25zLnR5cGUsXHJcbiAgICAgIHR5cGU6ICd0d2VldCcsXHJcbiAgICAgIHF1ZXJ5OiBxdWVyaWVzLmpvaW4oJyYnKSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB1cmw7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gW3BoaW5hLnNvY2lhbC5Ud2l0dGVyLmJhc2VVUkwgPSAnaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQnXVxyXG4gKiBUd2l0dGVyIOOBruWFseacieODquODs+OCr+OBruODmeODvOOCueOBqOOBquOCiyBVUkwg44Gn44GZ44CCXHJcbiAqIFxyXG4gKiBAc3RhdGljXHJcbiAqL1xyXG5Ud2l0dGVyLmJhc2VVUkwgPSAnaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQnO1xyXG5cclxuLyoqXHJcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBwaGluYS5zb2NpYWwuVHdpdHRlci5kZWZhdWx0c1xyXG4gKiDjg4fjg5Xjgqnjg6vjg4jlgKTjgpLmoLzntI3jgZfjgabjgYTjgovjgqrjg5bjgrjjgqfjgq/jg4jjgafjgZnjgIJ7QGxpbmsgI3BoaW5hLnNvY2lhbC5Ud2l0dGVyLmRlZmF1bHRzLnRleHR9LCB7QGxpbmsgI3BoaW5hLnNvY2lhbC5Ud2l0dGVyLmRlZmF1bHRzLmhhc2h0YWdzfSwge0BsaW5rICNwaGluYS5zb2NpYWwuVHdpdHRlci5kZWZhdWx0cy51cmx9IOOCkuWGheWMheOBl+OBpuOBhOOBvuOBmeOAglxyXG4gKiBcclxuICogQHN0YXRpY1xyXG4gKi9cclxuVHdpdHRlci5kZWZhdWx0cyA9IHtcclxuICAvLyB0eXBlOiAndHdlZXQnLFxyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkge1N0cmluZ30gW3BoaW5hLnNvY2lhbC5Ud2l0dGVyLmRlZmF1bHRzLnRleHQgPSAnSGVsbG8sIFdvcmxkJ11cclxuICAgKiDjg4fjg5Xjgqnjg6vjg4jjgafjg4TjgqTjg7zjg4jjgavlkKvjgb7jgozjgovmloflrZfliJfjgafjgZnjgIJcclxuICAgKiBcclxuICAgKiBAc3RhdGljXHJcbiAgICovXHJcbiAgdGV4dDogJ0hlbGxvLCB3b3JsZCEnLFxyXG5cclxuICAvLyBzY3JlZW5fbmFtZTogJ3BoaV9qcCcsXHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBbcGhpbmEuc29jaWFsLlR3aXR0ZXIuZGVmYXVsdHMuaGFzaHRhZ3MgPSAnamF2YXNjcmlwdCwgcGhpbmFfanMnXVxyXG4gICAqIOODh+ODleOCqeODq+ODiOOBp+ODhOOCpOODvOODiOOBq+WQq+OBvuOCjOOCi+ODj+ODg+OCt+ODpeOCv+OCsOOBp+OBmeOAglxyXG4gICAqIFxyXG4gICAqIEBzdGF0aWNcclxuICAgKi9cclxuICBoYXNodGFnczogJ2phdmFzY3JpcHQscGhpbmFfanMnLFxyXG5cclxuICAvLyB1cmw6ICdodHRwOi8vZ2l0aHViLmNvbS9waGktanAvcGhpbmEuanMnLFxyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkge1N0cmluZ30gW3BoaW5hLnNvY2lhbC5Ud2l0dGVyLmRlZmF1bHRzLnVybCA9IHBoaW5hLmdsb2JhbC5sb2NhdGlvbiAmJiBwaGluYS5nbG9iYWwubG9jYXRpb24uaHJlZl1cclxuICAgKiDjg4fjg5Xjgqnjg6vjg4jjgafjg4TjgqTjg7zjg4jjgavlkKvjgb7jgozjgosgVVJMIOOBp+OBmeOAglxyXG4gICAqIFxyXG4gICAqIEBzdGF0aWNcclxuICAgKi9cclxuICB1cmw6IHBoaW5hJDEuZ2xvYmFsLmxvY2F0aW9uICYmIHBoaW5hJDEuZ2xvYmFsLmxvY2F0aW9uLmhyZWZcclxuXHJcbiAgLy8gdmlhOiAncGhpX2pwJyxcclxufTtcblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5nYW1lLk1hbmFnZXJTY2VuZVxyXG4gKiBAZXh0ZW5kcyBwaGluYS5hcHAuU2NlbmVcclxuICovXHJcbmNsYXNzIE1hbmFnZXJTY2VuZSBleHRlbmRzIFNjZW5lIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocGFyYW1zKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuc2V0U2NlbmVzKHBhcmFtcy5zY2VuZXMpO1xyXG5cclxuICAgIHRoaXMub24oXCJlbnRlclwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5nb3RvU2NlbmUocGFyYW1zLnN0YXJ0TGFiZWwgfHwgMCk7XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG5cclxuICAgIHRoaXMub24oXCJyZXN1bWVcIiwgdGhpcy5vbm5leHQuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgdGhpcy5jb21tb25Bcmd1bWVudHMgPSB7fTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHNjZW5lcyDjgpLjgrvjg4Pjg4hcclxuICAgKi9cclxuICBzZXRTY2VuZXMoc2NlbmVzKSB7XHJcbiAgICB0aGlzLnNjZW5lcyA9IHNjZW5lcztcclxuICAgIHRoaXMuc2NlbmVJbmRleCA9IDA7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTY2VuZeOCr+ODqeOCueOCkuOCpOODs+OCueOCv+ODs+OCueWMluOBl+OBpui/lOOBmVxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gZGF0YSAgW2Rlc2NyaXB0aW9uXVxyXG4gICAqIEByZXR1cm4ge1t0eXBlXX0gICAgICAgW2Rlc2NyaXB0aW9uXVxyXG4gICAqL1xyXG4gIF9pbnN0YW50aWF0ZVNjZW5lKGRhdGEsIGFyZ3MpIHtcclxuICAgIC8vIFNjZW5l5Yid5pyf5YyW5byV5pWwXHJcbiAgICB2YXIgaW5pdEFyZ3VtZW50cyA9ICRleHRlbmQuY2FsbCh7fSwgZGF0YS5hcmd1bWVudHMsIGFyZ3MpO1xyXG4gICAgLy8gdmFyIGluaXRBcmd1bWVudHMgPSB7fS4kZXh0ZW5kKGRhdGEuYXJndW1lbnRzLCBhcmdzKTtcclxuXHJcbiAgICB2YXIgc2NlbmUsIGtsYXNzO1xyXG4gICAgaWYgKHR5cGVvZiBkYXRhLmNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgLy8gcGhpbmEuZGVmaW5l44CB44GC44KL44GE44GvZ2xvYmFsKHdpbmRvdynjgavnm7TmjqXlrprnvqnjgZXjgozjgZ/jgq/jg6njgrnjga7mloflrZfliJdcclxuICAgICAga2xhc3MgPSBwaGluYSQxLnVzaW5nKGRhdGEuY2xhc3NOYW1lKTtcclxuICAgICAgaWYgKHR5cGVvZiBrbGFzcyAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIGtsYXNzID0gcGhpbmEkMS51c2luZygncGhpbmEuZ2FtZS4nICsgZGF0YS5jbGFzc05hbWUpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHNjZW5lID0ga2xhc3MuY2FsbChudWxsLCBpbml0QXJndW1lbnRzKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGRhdGEuY2xhc3NOYW1lID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIC8vIOmWouaVsOOBruWgtOWQiOOAgee0lOeyi+OBqmNsYXNz44Go6KaL44Gq44GZXHJcbiAgICAgIC8vIHNjZW5lID0gbmV3IGRhdGEuY2xhc3NOYW1lKGluaXRBcmd1bWVudHMpO1xyXG4gICAgICBrbGFzcyA9IGRhdGEuY2xhc3NOYW1lO1xyXG4gICAgfVxyXG4gICAgc2NlbmUgPSBuZXcga2xhc3MoaW5pdEFyZ3VtZW50cyk7XHJcblxyXG4gICAgaWYgKCFzY2VuZS5uZXh0TGFiZWwpIHtcclxuICAgICAgc2NlbmUubmV4dExhYmVsID0gZGF0YS5uZXh0TGFiZWw7XHJcbiAgICB9XHJcbiAgICBpZiAoIXNjZW5lLm5leHRBcmd1bWVudHMpIHtcclxuICAgICAgc2NlbmUubmV4dEFyZ3VtZW50cyA9IGRhdGEubmV4dEFyZ3VtZW50cztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc2NlbmVcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNjZW5l44Kv44Op44K544KS44Kk44Oz44K544K/44Oz44K55YyW44GX44GmYXBw44GrcmVwbGFjZVNjZW5l44GV44Gb44KLXHJcbiAgICogXHJcbiAgICogQHBhcmFtICB7c3RyaW5nfG51bWJlcn0gbGFiZWwg44K344O844Oz44Gu5a++5b+c44Op44OZ44OrXHJcbiAgICogQHBhcmFtICB7YW55fSBbYXJnc10gU2NlbmXjgavjgo/jgZ/jgZnlvJXmlbDjgYzjgYLjgovloLTlkIjjgavmjIflrppcclxuICAgKiBAcmV0dXJuIHt0aGlzfVxyXG4gICAqL1xyXG4gIHJlcGxhY2VTY2VuZShsYWJlbCwgYXJncykge1xyXG4gICAgdmFyIGluZGV4ID0gKHR5cGVvZiBsYWJlbCA9PSAnc3RyaW5nJykgPyB0aGlzLmxhYmVsVG9JbmRleChsYWJlbCkgOiBsYWJlbHx8MDtcclxuICAgIGlmICghdGhpcy5zY2VuZXNbaW5kZXhdKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0LmNhbGwoJ3BoaW5hLmpzIGVycm9yOiBgezB9YCDjgavlr77lv5zjgZnjgovjgrfjg7zjg7PjgYzjgYLjgorjgb7jgZvjgpMuJywgbGFiZWwpKTtcclxuICAgIH1cclxuICAgIHZhciBzY2VuZSA9IHRoaXMuX2luc3RhbnRpYXRlU2NlbmUodGhpcy5zY2VuZXNbaW5kZXhdLCBhcmdzKTtcclxuICAgIHRoaXMuYXBwLnJlcGxhY2VTY2VuZShzY2VuZSk7XHJcbiAgICB0aGlzLnNjZW5lSW5kZXggPSBpbmRleDtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGluZGV4KG9yIGxhYmVsKSDjga7jgrfjg7zjg7Pjgbjpo5vjgbZcclxuICAgKiByZXBsYWNlU2NlbmXjgajjga7pgZXjgYTjga9hcHAucmVwbGFjZVNjZW5l44Gn44Gv44Gq44GP44CBYXBwLnB1c2hTY2VuZeOCkuWun+ihjOOBmeOCi+eCuVxyXG4gICAqL1xyXG4gIGdvdG9TY2VuZShsYWJlbCwgYXJncykge1xyXG4gICAgdmFyIGluZGV4ID0gKHR5cGVvZiBsYWJlbCA9PSAnc3RyaW5nJykgPyB0aGlzLmxhYmVsVG9JbmRleChsYWJlbCkgOiBsYWJlbHx8MDtcclxuICAgIGlmICghdGhpcy5zY2VuZXNbaW5kZXhdKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0LmNhbGwoJ3BoaW5hLmpzIGVycm9yOiBgezB9YCDjgavlr77lv5zjgZnjgovjgrfjg7zjg7PjgYzjgYLjgorjgb7jgZvjgpMuJywgbGFiZWwpKTtcclxuICAgIH1cclxuICAgIHZhciBzY2VuZSA9IHRoaXMuX2luc3RhbnRpYXRlU2NlbmUodGhpcy5zY2VuZXNbaW5kZXhdLCBhcmdzKTtcclxuICAgIHRoaXMuYXBwLnB1c2hTY2VuZShzY2VuZSk7XHJcbiAgICB0aGlzLnNjZW5lSW5kZXggPSBpbmRleDtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOasoeOBruOCt+ODvOODs+OBuOmjm+OBtlxyXG4gICAqL1xyXG4gIGdvdG9OZXh0KGFyZ3MpIHtcclxuICAgIHZhciBkYXRhID0gdGhpcy5zY2VuZXNbdGhpcy5zY2VuZUluZGV4XTtcclxuICAgIHZhciBuZXh0SW5kZXggPSBudWxsO1xyXG5cclxuICAgIC8vIOasoeOBruODqeODmeODq+OBjOioreWumuOBleOCjOOBpuOBhOOBn+WgtOWQiFxyXG4gICAgaWYgKGRhdGEubmV4dExhYmVsKSB7XHJcbiAgICAgICAgbmV4dEluZGV4ID0gdGhpcy5sYWJlbFRvSW5kZXgoZGF0YS5uZXh0TGFiZWwpO1xyXG4gICAgfVxyXG4gICAgLy8g5qyh44Gu44K344O844Oz44Gr6YG356e7XHJcbiAgICBlbHNlIGlmICh0aGlzLnNjZW5lSW5kZXgrMSA8IHRoaXMuc2NlbmVzLmxlbmd0aCkge1xyXG4gICAgICAgIG5leHRJbmRleCA9IHRoaXMuc2NlbmVJbmRleCsxO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChuZXh0SW5kZXggIT09IG51bGwpIHtcclxuICAgICAgICB0aGlzLmdvdG9TY2VuZShuZXh0SW5kZXgsIGFyZ3MpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5mbGFyZShcImZpbmlzaFwiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOOCt+ODvOODs+OCpOODs+ODh+ODg+OCr+OCueOCkuWPluW+l1xyXG4gICAqL1xyXG4gIGdldEN1cnJlbnRJbmRleCgpIHtcclxuICAgIHJldHVybiB0aGlzLnNjZW5lSW5kZXg7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgrfjg7zjg7Pjg6njg5njg6vjgpLlj5blvpdcclxuICAgKi9cclxuICBnZXRDdXJyZW50TGFiZWwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zY2VuZXNbdGhpcy5zY2VuZUluZGV4XS5sYWJlbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOODqeODmeODq+OBi+OCieOCpOODs+ODh+ODg+OCr+OCueOBq+WkieaPm1xyXG4gICAqL1xyXG4gIGxhYmVsVG9JbmRleChsYWJlbCkge1xyXG4gICAgdmFyIGRhdGEgPSB0aGlzLnNjZW5lcy5maWx0ZXIoZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICByZXR1cm4gZGF0YS5sYWJlbCA9PSBsYWJlbDtcclxuICAgIH0pWzBdO1xyXG5cclxuICAgIHJldHVybiB0aGlzLnNjZW5lcy5pbmRleE9mKGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44Kk44Oz44OH44OD44Kv44K544GL44KJ44Op44OZ44Or44Gr5aSJ5o+bXHJcbiAgICovXHJcbiAgaW5kZXhUb0xhYmVsKGluZGV4KSB7XHJcbiAgICByZXR1cm4gdGhpcy5zY2VuZXNbaW5kZXhdLmxhYmVsO1xyXG4gIH1cclxuXHJcbiAgb25uZXh0KGUpIHtcclxuICAgIHZhciBuZXh0TGFiZWwgPSBlLnByZXZTY2VuZS5uZXh0TGFiZWw7XHJcbiAgICB2YXIgbmV4dEFyZ3VtZW50cyA9IGUucHJldlNjZW5lLm5leHRBcmd1bWVudHM7XHJcbiAgICBpZiAobmV4dExhYmVsKSB7XHJcbiAgICAgIHRoaXMuZ290b1NjZW5lKG5leHRMYWJlbCwgbmV4dEFyZ3VtZW50cyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5nb3RvTmV4dChuZXh0QXJndW1lbnRzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZ2FtZS5Mb2FkaW5nU2NlbmVcclxuICogQGV4dGVuZHMgcGhpbmEuZGlzcGxheS5EaXNwbGF5U2NlbmVcclxuICovXHJcbmNsYXNzIExvYWRpbmdTY2VuZSBleHRlbmRzIERpc3BsYXlTY2VuZSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSAkc2FmZS5jYWxsKHt9LCBvcHRpb25zLCBMb2FkaW5nU2NlbmUuZGVmYXVsdHMpO1xyXG4gICAgLy8gb3B0aW9ucyA9ICh7fSkuJHNhZmUob3B0aW9ucywgcGhpbmEuZ2FtZS5Mb2FkaW5nU2NlbmUuZGVmYXVsdHMpO1xyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcblxyXG4gICAgdGhpcy5nYXVnZSA9IG5ldyBHYXVnZSh7XHJcbiAgICAgIHZhbHVlOiAwLFxyXG4gICAgICB3aWR0aDogdGhpcy53aWR0aCxcclxuICAgICAgaGVpZ2h0OiAxMixcclxuICAgICAgZmlsbDogJyNhYWEnLFxyXG4gICAgICBzdHJva2U6IGZhbHNlLFxyXG4gICAgICBnYXVnZUNvbG9yOiAnaHNsYSgyMDAsIDEwMCUsIDgwJSwgMC44KScsXHJcbiAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICB9KS5hZGRDaGlsZFRvKHRoaXMpXHJcbiAgICAgIC5zZXRQb3NpdGlvbihcclxuICAgICAgICB0aGlzLmdyaWRYLmNlbnRlcigpLFxyXG4gICAgICAgIDAsXHJcbiAgICAgIClcclxuICAgICAgLnNldE9yaWdpbihcclxuICAgICAgICAwLjUsIFxyXG4gICAgICAgIDBcclxuICAgICAgKTtcclxuICAgIC8vIHRoaXMuZnJvbUpTT04oe1xyXG4gICAgLy8gICBjaGlsZHJlbjoge1xyXG4gICAgLy8gICAgIGdhdWdlOiB7XHJcbiAgICAvLyAgICAgICBjbGFzc05hbWU6ICdwaGluYS51aS5HYXVnZScsXHJcbiAgICAvLyAgICAgICBhcmd1bWVudHM6IHtcclxuICAgIC8vICAgICAgICAgdmFsdWU6IDAsXHJcbiAgICAvLyAgICAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxyXG4gICAgLy8gICAgICAgICBoZWlnaHQ6IDEyLFxyXG4gICAgLy8gICAgICAgICBmaWxsOiAnI2FhYScsXHJcbiAgICAvLyAgICAgICAgIHN0cm9rZTogZmFsc2UsXHJcbiAgICAvLyAgICAgICAgIGdhdWdlQ29sb3I6ICdoc2xhKDIwMCwgMTAwJSwgODAlLCAwLjgpJyxcclxuICAgIC8vICAgICAgICAgcGFkZGluZzogMCxcclxuICAgIC8vICAgICAgIH0sXHJcbiAgICAvLyAgICAgICB4OiB0aGlzLmdyaWRYLmNlbnRlcigpLFxyXG4gICAgLy8gICAgICAgeTogMCxcclxuICAgIC8vICAgICAgIG9yaWdpblk6IDAsXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICB2YXIgbG9hZGVyID0gbmV3IEFzc2V0TG9hZGVyKCk7XHJcblxyXG4gICAgaWYgKG9wdGlvbnMubGllKSB7XHJcbiAgICAgIHRoaXMuZ2F1Z2UuYW5pbWF0aW9uVGltZSA9IDEwKjEwMDA7XHJcbiAgICAgIHRoaXMuZ2F1Z2UudmFsdWUgPSA5MDtcclxuXHJcbiAgICAgIGxvYWRlci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmdhdWdlLmFuaW1hdGlvblRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuZ2F1Z2UudmFsdWUgPSAxMDA7XHJcbiAgICAgIH0uYmluZCh0aGlzKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmdhdWdlLmFuaW1hdGlvblRpbWUgPSAxMDA7XHJcbiAgICAgIGxvYWRlci5vbnByb2dyZXNzID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIHRoaXMuZ2F1Z2UudmFsdWUgPSBlLnByb2dyZXNzICogMTAwO1xyXG4gICAgICB9LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5nYXVnZS5vbmZ1bGwgPSBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKG9wdGlvbnMuZXhpdFR5cGUgPT09ICdhdXRvJykge1xyXG4gICAgICAgIHRoaXMuYXBwLnBvcFNjZW5lKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5mbGFyZSgnbG9hZGVkJyk7XHJcbiAgICB9LmJpbmQodGhpcyk7XHJcblxyXG4gICAgbG9hZGVyLmxvYWQob3B0aW9ucy5hc3NldHMpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkxvYWRpbmdTY2VuZS5kZWZhdWx0cyA9IHtcclxuICBleGl0VHlwZTogJ2F1dG8nLFxyXG4gIGxpZTogZmFsc2UsXHJcbn07XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZ2FtZS5TcGxhc2hTY2VuZVxyXG4gKiBAZXh0ZW5kcyBwaGluYS5kaXNwbGF5LkRpc3BsYXlTY2VuZVxyXG4gKi9cclxuY2xhc3MgU3BsYXNoU2NlbmUgZXh0ZW5kcyBEaXNwbGF5U2NlbmUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICB2YXIgZGVmYXVsdHMgPSBTcGxhc2hTY2VuZS5kZWZhdWx0cztcclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG5cclxuICAgIHZhciB0ZXh0dXJlID0gbmV3IFRleHR1cmUoKTtcclxuICAgIHRleHR1cmUubG9hZChkZWZhdWx0cy5pbWFnZVVSTCkudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5faW5pdCgpO1xyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMudGV4dHVyZSA9IHRleHR1cmU7XHJcbiAgfVxyXG5cclxuICBfaW5pdCgpIHtcclxuICAgIHRoaXMuc3ByaXRlID0gbmV3IFNwcml0ZSh0aGlzLnRleHR1cmUpLmFkZENoaWxkVG8odGhpcyk7XHJcblxyXG4gICAgdGhpcy5zcHJpdGUuc2V0UG9zaXRpb24odGhpcy5ncmlkWC5jZW50ZXIoKSwgdGhpcy5ncmlkWS5jZW50ZXIoKSk7XHJcbiAgICB0aGlzLnNwcml0ZS5hbHBoYSA9IDA7XHJcblxyXG4gICAgdGhpcy5zcHJpdGUudHdlZW5lclxyXG4gICAgICAuY2xlYXIoKVxyXG4gICAgICAudG8oe2FscGhhOjF9LCA1MDAsICdlYXNlT3V0Q3ViaWMnKVxyXG4gICAgICAud2FpdCgxMDAwKVxyXG4gICAgICAudG8oe2FscGhhOjB9LCA1MDAsICdlYXNlT3V0Q3ViaWMnKVxyXG4gICAgICAud2FpdCgyNTApXHJcbiAgICAgIC5jYWxsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuZXhpdCgpO1xyXG4gICAgICB9LCB0aGlzKVxyXG4gICAgICA7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuU3BsYXNoU2NlbmUuZGVmYXVsdHMgPSB7XHJcbiAgaW1hZ2VVUkw6ICdodHRwOi8vY2RuLnJhd2dpdC5jb20vcGhpLWpwL3BoaW5hLmpzL2RldmVsb3AvbG9nby5wbmcnLFxyXG59O1xuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmdhbWUuVGl0bGVTY2VuZVxyXG4gKiBAZXh0ZW5kcyBwaGluYS5kaXNwbGF5LkRpc3BsYXlTY2VuZVxyXG4gKi9cclxuY2xhc3MgVGl0bGVTY2VuZSBleHRlbmRzIERpc3BsYXlTY2VuZSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHBhcmFtcykge1xyXG4gICAgcGFyYW1zID0gJHNhZmUuY2FsbCh7fSwgcGFyYW1zLCBUaXRsZVNjZW5lLmRlZmF1bHRzKTtcclxuICAgIC8vIHBhcmFtcyA9ICh7fSkuJHNhZmUocGFyYW1zLCBwaGluYS5nYW1lLlRpdGxlU2NlbmUuZGVmYXVsdHMpO1xyXG4gICAgc3VwZXIocGFyYW1zKTtcclxuXHJcbiAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IHBhcmFtcy5iYWNrZ3JvdW5kQ29sb3I7XHJcblxyXG4gICAgdGhpcy5mcm9tSlNPTih7XHJcbiAgICAgIGNoaWxkcmVuOiB7XHJcbiAgICAgICAgdGl0bGVMYWJlbDoge1xyXG4gICAgICAgICAgY2xhc3NOYW1lOiBMYWJlbCxcclxuICAgICAgICAgIC8vIGNsYXNzTmFtZTogJ3BoaW5hLmRpc3BsYXkuTGFiZWwnLFxyXG4gICAgICAgICAgYXJndW1lbnRzOiB7XHJcbiAgICAgICAgICAgIHRleHQ6IHBhcmFtcy50aXRsZSxcclxuICAgICAgICAgICAgZmlsbDogcGFyYW1zLmZvbnRDb2xvcixcclxuICAgICAgICAgICAgc3Ryb2tlOiBmYWxzZSxcclxuICAgICAgICAgICAgZm9udFNpemU6IDY0LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHg6IHRoaXMuZ3JpZFguY2VudGVyKCksXHJcbiAgICAgICAgICB5OiB0aGlzLmdyaWRZLnNwYW4oNCksXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAocGFyYW1zLmV4aXRUeXBlID09PSAndG91Y2gnKSB7XHJcbiAgICAgIHRoaXMuZnJvbUpTT04oe1xyXG4gICAgICAgIGNoaWxkcmVuOiB7XHJcbiAgICAgICAgICB0b3VjaExhYmVsOiB7XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogTGFiZWwsXHJcbiAgICAgICAgICAgIC8vIGNsYXNzTmFtZTogJ3BoaW5hLmRpc3BsYXkuTGFiZWwnLFxyXG4gICAgICAgICAgICBhcmd1bWVudHM6IHtcclxuICAgICAgICAgICAgICB0ZXh0OiBcIlRPVUNIIFNUQVJUXCIsXHJcbiAgICAgICAgICAgICAgZmlsbDogcGFyYW1zLmZvbnRDb2xvcixcclxuICAgICAgICAgICAgICBzdHJva2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAzMixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeDogdGhpcy5ncmlkWC5jZW50ZXIoKSxcclxuICAgICAgICAgICAgeTogdGhpcy5ncmlkWS5zcGFuKDEyKSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLm9uKCdwb2ludGVuZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuZXhpdCgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG4vLyBzdGF0aWMgcHJvcHNcclxuVGl0bGVTY2VuZS5kZWZhdWx0cyA9IHtcclxuICB0aXRsZTogJ3BoaW5hLmpzIGdhbWVzJyxcclxuICBtZXNzYWdlOiAnJyxcclxuXHJcbiAgZm9udENvbG9yOiAnd2hpdGUnLFxyXG4gIGJhY2tncm91bmRDb2xvcjogJ2hzbCgyMDAsIDgwJSwgNjQlKScsXHJcbiAgYmFja2dyb3VuZEltYWdlOiAnJyxcclxuXHJcbiAgZXhpdFR5cGU6ICd0b3VjaCcsXHJcbn07XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZ2FtZS5QYXVzZVNjZW5lXHJcbiAqIEBleHRlbmRzIHBoaW5hLmRpc3BsYXkuRGlzcGxheVNjZW5lXHJcbiAqL1xyXG5jbGFzcyBQYXVzZVNjZW5lIGV4dGVuZHMgRGlzcGxheVNjZW5lIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocGFyYW1zKSB7XHJcbiAgICBwYXJhbXMgPSAkc2FmZS5jYWxsKHt9LCBwYXJhbXMsIFBhdXNlU2NlbmUuZGVmYXVsdHMpO1xyXG4gICAgLy8gcGFyYW1zID0gKHt9KS4kc2FmZShwYXJhbXMsIHBoaW5hLmdhbWUuUGF1c2VTY2VuZS5kZWZhdWx0cyk7XHJcbiAgICBzdXBlcihwYXJhbXMpO1xyXG5cclxuICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gcGFyYW1zLmJhY2tncm91bmRDb2xvcjtcclxuXHJcbiAgICB0aGlzLmZyb21KU09OKHtcclxuICAgICAgY2hpbGRyZW46IHtcclxuICAgICAgICB0ZXh0OiB7XHJcbiAgICAgICAgICBjbGFzc05hbWU6IExhYmVsLFxyXG4gICAgICAgICAgLy8gY2xhc3NOYW1lOiAncGhpbmEuZGlzcGxheS5MYWJlbCcsXHJcbiAgICAgICAgICBhcmd1bWVudHM6IHtcclxuICAgICAgICAgICAgdGV4dDogJ1BhdXNlJyxcclxuICAgICAgICAgICAgZmlsbDogcGFyYW1zLmZvbnRDb2xvcixcclxuICAgICAgICAgICAgc3Ryb2tlOiBudWxsLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogNDgsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeDogdGhpcy5ncmlkWC5jZW50ZXIoKSxcclxuICAgICAgICAgIHk6IHRoaXMuZ3JpZFkuY2VudGVyKCksXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHBhcmFtcy5leGl0VHlwZSA9PT0gJ3RvdWNoJykge1xyXG4gICAgICB0aGlzLm9uKCdwb2ludGVuZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuZXhpdCgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5QYXVzZVNjZW5lLmRlZmF1bHRzID0gIHtcclxuICBmb250Q29sb3I6ICd3aGl0ZScsXHJcbiAgYmFja2dyb3VuZENvbG9yOiAnaHNsYSgwLCAwJSwgMCUsIDAuODUpJyxcclxuXHJcbiAgZXhpdFR5cGU6ICd0b3VjaCcsXHJcbn07XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZ2FtZS5SZXN1bHRTY2VuZVxyXG4gKiBAZXh0ZW5kcyBwaGluYS5kaXNwbGF5LkRpc3BsYXlTY2VuZVxyXG4gKi9cclxuY2xhc3MgUmVzdWx0U2NlbmUgZXh0ZW5kcyBEaXNwbGF5U2NlbmUge1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcclxuICAgIHBhcmFtcyA9ICRzYWZlLmNhbGwoe30sIHBhcmFtcywgUmVzdWx0U2NlbmUuZGVmYXVsdHMpO1xyXG4gICAgLy8gcGFyYW1zID0gKHt9KS4kc2FmZShwYXJhbXMsIHBoaW5hLmdhbWUuUmVzdWx0U2NlbmUuZGVmYXVsdHMpO1xyXG4gICAgc3VwZXIocGFyYW1zKTtcclxuXHJcbiAgICB2YXIgbWVzc2FnZSA9IGZvcm1hdC5jYWxsKHBhcmFtcy5tZXNzYWdlLCBwYXJhbXMpO1xyXG4gICAgLy8gdmFyIG1lc3NhZ2UgPSBwYXJhbXMubWVzc2FnZS5mb3JtYXQocGFyYW1zKTtcclxuXHJcbiAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IHBhcmFtcy5iYWNrZ3JvdW5kQ29sb3I7XHJcblxyXG4gICAgdGhpcy5mcm9tSlNPTih7XHJcbiAgICAgIGNoaWxkcmVuOiB7XHJcbiAgICAgICAgc2NvcmVUZXh0OiB7XHJcbiAgICAgICAgICBjbGFzc05hbWU6IExhYmVsLFxyXG4gICAgICAgICAgLy8gY2xhc3NOYW1lOiAncGhpbmEuZGlzcGxheS5MYWJlbCcsXHJcbiAgICAgICAgICBhcmd1bWVudHM6IHtcclxuICAgICAgICAgICAgdGV4dDogJ3Njb3JlJyxcclxuICAgICAgICAgICAgZmlsbDogcGFyYW1zLmZvbnRDb2xvcixcclxuICAgICAgICAgICAgc3Ryb2tlOiBudWxsLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogNDgsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeDogdGhpcy5ncmlkWC5zcGFuKDgpLFxyXG4gICAgICAgICAgeTogdGhpcy5ncmlkWS5zcGFuKDQpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2NvcmVMYWJlbDoge1xyXG4gICAgICAgICAgY2xhc3NOYW1lOiBMYWJlbCxcclxuICAgICAgICAgIC8vIGNsYXNzTmFtZTogJ3BoaW5hLmRpc3BsYXkuTGFiZWwnLFxyXG4gICAgICAgICAgYXJndW1lbnRzOiB7XHJcbiAgICAgICAgICAgIHRleHQ6IHBhcmFtcy5zY29yZSsnJyxcclxuICAgICAgICAgICAgZmlsbDogcGFyYW1zLmZvbnRDb2xvcixcclxuICAgICAgICAgICAgc3Ryb2tlOiBudWxsLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogNzIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeDogdGhpcy5ncmlkWC5zcGFuKDgpLFxyXG4gICAgICAgICAgeTogdGhpcy5ncmlkWS5zcGFuKDYpLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG1lc3NhZ2VMYWJlbDoge1xyXG4gICAgICAgICAgY2xhc3NOYW1lOiBMYWJlbCxcclxuICAgICAgICAgIC8vIGNsYXNzTmFtZTogJ3BoaW5hLmRpc3BsYXkuTGFiZWwnLFxyXG4gICAgICAgICAgYXJndW1lbnRzOiB7XHJcbiAgICAgICAgICAgIHRleHQ6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIGZpbGw6IHBhcmFtcy5mb250Q29sb3IsXHJcbiAgICAgICAgICAgIHN0cm9rZTogbnVsbCxcclxuICAgICAgICAgICAgZm9udFNpemU6IDMyLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHg6IHRoaXMuZ3JpZFguY2VudGVyKCksXHJcbiAgICAgICAgICB5OiB0aGlzLmdyaWRZLnNwYW4oOSksXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2hhcmVCdXR0b246IHtcclxuICAgICAgICAgIGNsYXNzTmFtZTogQnV0dG9uLFxyXG4gICAgICAgICAgLy8gY2xhc3NOYW1lOiAncGhpbmEudWkuQnV0dG9uJyxcclxuICAgICAgICAgIGFyZ3VtZW50czogW3tcclxuICAgICAgICAgICAgdGV4dDogJ+KYhScsXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMjgsXHJcbiAgICAgICAgICAgIGhlaWdodDogMTI4LFxyXG4gICAgICAgICAgICBmb250Q29sb3I6IHBhcmFtcy5mb250Q29sb3IsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiA1MCxcclxuICAgICAgICAgICAgY29ybmVyUmFkaXVzOiA2NCxcclxuICAgICAgICAgICAgZmlsbDogJ3JnYmEoMjQwLCAyNDAsIDI0MCwgMC41KScsXHJcbiAgICAgICAgICAgIC8vIHN0cm9rZTogJyNhYWEnLFxyXG4gICAgICAgICAgICAvLyBzdHJva2VXaWR0aDogMixcclxuICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgeDogdGhpcy5ncmlkWC5jZW50ZXIoLTMpLFxyXG4gICAgICAgICAgeTogdGhpcy5ncmlkWS5zcGFuKDEyKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBsYXlCdXR0b246IHtcclxuICAgICAgICAgIGNsYXNzTmFtZTogQnV0dG9uLFxyXG4gICAgICAgICAgLy8gY2xhc3NOYW1lOiAncGhpbmEudWkuQnV0dG9uJyxcclxuICAgICAgICAgIGFyZ3VtZW50czogW3tcclxuICAgICAgICAgICAgdGV4dDogJ+KWticsXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMjgsXHJcbiAgICAgICAgICAgIGhlaWdodDogMTI4LFxyXG4gICAgICAgICAgICBmb250Q29sb3I6IHBhcmFtcy5mb250Q29sb3IsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiA1MCxcclxuICAgICAgICAgICAgY29ybmVyUmFkaXVzOiA2NCxcclxuICAgICAgICAgICAgZmlsbDogJ3JnYmEoMjQwLCAyNDAsIDI0MCwgMC41KScsXHJcbiAgICAgICAgICAgIC8vIHN0cm9rZTogJyNhYWEnLFxyXG4gICAgICAgICAgICAvLyBzdHJva2VXaWR0aDogMixcclxuICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgeDogdGhpcy5ncmlkWC5jZW50ZXIoMyksXHJcbiAgICAgICAgICB5OiB0aGlzLmdyaWRZLnNwYW4oMTIpLFxyXG5cclxuICAgICAgICAgIGludGVyYWN0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgb25wdXNoOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdGhpcy5leGl0KCk7XHJcbiAgICAgICAgICB9LmJpbmQodGhpcyksXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHBhcmFtcy5leGl0VHlwZSA9PT0gJ3RvdWNoJykge1xyXG4gICAgICB0aGlzLm9uKCdwb2ludGVuZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuZXhpdCgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNoYXJlQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIHRleHQgPSBmb3JtYXQuY2FsbCgnU2NvcmU6IHswfVxcbnsxfScsIHBhcmFtcy5zY29yZSwgbWVzc2FnZSk7XHJcbiAgICAgIC8vIHZhciB0ZXh0ID0gJ1Njb3JlOiB7MH1cXG57MX0nLmZvcm1hdChwYXJhbXMuc2NvcmUsIG1lc3NhZ2UpO1xyXG4gICAgICB2YXIgdXJsID0gVHdpdHRlci5jcmVhdGVVUkwoe1xyXG4gICAgICAgIHRleHQ6IHRleHQsXHJcbiAgICAgICAgaGFzaHRhZ3M6IHBhcmFtcy5oYXNodGFncyxcclxuICAgICAgICB1cmw6IHBhcmFtcy51cmwsXHJcbiAgICAgIH0pO1xyXG4gICAgICB3aW5kb3cub3Blbih1cmwsICdzaGFyZSB3aW5kb3cnLCAnd2lkdGg9NDgwLCBoZWlnaHQ9MzIwJyk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblJlc3VsdFNjZW5lLmRlZmF1bHRzID0ge1xyXG4gIHNjb3JlOiAxNixcclxuXHJcbiAgbWVzc2FnZTogJ3RoaXMgaXMgcGhpbmEuanMgcHJvamVjdC4nLFxyXG4gIGhhc2h0YWdzOiAncGhpbmFfanMsZ2FtZSxqYXZhc2NyaXB0JyxcclxuICB1cmw6IHBoaW5hJDEuZ2xvYmFsLmxvY2F0aW9uICYmIHBoaW5hJDEuZ2xvYmFsLmxvY2F0aW9uLmhyZWYsXHJcblxyXG4gIGZvbnRDb2xvcjogJ3doaXRlJyxcclxuICBiYWNrZ3JvdW5kQ29sb3I6ICdoc2woMjAwLCA4MCUsIDY0JSknLFxyXG4gIGJhY2tncm91bmRJbWFnZTogJycsXHJcbn07XG5cbi8qKlxyXG4gKiDjg4fjg5Xjgqnjg6vjg4jjga5haW4gY2xhc3NcclxuICovXHJcbmNsYXNzIERlZmF1bHRNYWluU2NlbmUgZXh0ZW5kcyBEaXNwbGF5U2NlbmUge1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG4gICAgY29uc29sZS5sb2coJ1RoaXMgaXMgTWFpblNjZW5lJyk7XHJcbiAgfVxyXG59XHJcbi8qKlxyXG4gKiDjgq/jg6njgrnjgYxwaGluYS5kZWZpbmXjgavjgojjgaPjgablrprnvqnjgZXjgozjgabjgYTjgovjgYvjganjgYbjgYvjgpLov5TjgZfjgb7jgZlcclxuICogXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUg44Kv44Op44K55ZCN44CCcGhpbmEuZ2FtZVtjbGFzc05hbWVd44Gn5a6a576p44GV44KM44Gm44GE44KL44GL44KC6Kq/44G544KLXHJcbiAqIEByZXR1cm4ge3N0cmluZ3xib29sZWFufSDlrprnvqnjgZXjgozjgabjgozjgbDjgZ3jga7jgb7jgb7jgq/jg6njgrnlkI3mloflrZfliJfjgpLov5TjgZlcclxuICovXHJcbmZ1bmN0aW9uIGlzR2FtZUNsYXNzRGVmaW5lZChjbGFzc05hbWUpIHtcclxuICBpZiAoXHJcbiAgICB0eXBlb2YgcGhpbmEkMS51c2luZyhjbGFzc05hbWUpID09PSAnZnVuY3Rpb24nXHJcbiAgICB8fCB0eXBlb2YgcGhpbmEkMS51c2luZygncGhpbmEuZ2FtZS4nICsgY2xhc3NOYW1lKSA9PT0gJ2Z1bmN0aW9uJ1xyXG4gICkge1xyXG4gICAgcmV0dXJuIGNsYXNzTmFtZVxyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZ2FtZS5HYW1lQXBwXHJcbiAqIEBleHRlbmRzIHBoaW5hLmRpc3BsYXkuQ2FudmFzQXBwXHJcbiAqL1xyXG5jbGFzcyBHYW1lQXBwIGV4dGVuZHMgQ2FudmFzQXBwIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgb3B0aW9ucyA9ICRzYWZlLmNhbGwob3B0aW9ucyB8fCB7fSwge1xyXG4gICAgLy8gb3B0aW9ucyA9IChvcHRpb25zIHx8IHt9KS4kc2FmZSh7XHJcbiAgICAgIHN0YXJ0TGFiZWw6ICd0aXRsZScsXHJcbiAgICB9KTtcclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG5cclxuICAgIHZhciBzdGFydExhYmVsID0gb3B0aW9ucy5zdGFydExhYmVsIHx8ICd0aXRsZSc7XHJcblxyXG4gICAgdmFyIHNjZW5lcyA9IG9wdGlvbnMuc2NlbmVzIHx8IFtcclxuICAgICAge1xyXG4gICAgICAgIGNsYXNzTmFtZTogaXNHYW1lQ2xhc3NEZWZpbmVkKFwiU3BsYXNoU2NlbmVcIikgfHwgU3BsYXNoU2NlbmUsXHJcbiAgICAgICAgbGFiZWw6ICdzcGxhc2gnLFxyXG4gICAgICAgIG5leHRMYWJlbDogJ3RpdGxlJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNsYXNzTmFtZTogaXNHYW1lQ2xhc3NEZWZpbmVkKFwiVGl0bGVTY2VuZVwiKSB8fCBUaXRsZVNjZW5lLFxyXG4gICAgICAgIGxhYmVsOiAndGl0bGUnLFxyXG4gICAgICAgIG5leHRMYWJlbDogJ21haW4nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBpc0dhbWVDbGFzc0RlZmluZWQoXCJNYWluU2NlbmVcIikgfHwgRGVmYXVsdE1haW5TY2VuZSxcclxuICAgICAgICBsYWJlbDogJ21haW4nLFxyXG4gICAgICAgIG5leHRMYWJlbDogJ3Jlc3VsdCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjbGFzc05hbWU6IGlzR2FtZUNsYXNzRGVmaW5lZChcIlJlc3VsdFNjZW5lXCIpIHx8IFJlc3VsdFNjZW5lLFxyXG4gICAgICAgIGxhYmVsOiAncmVzdWx0JyxcclxuICAgICAgICBuZXh0TGFiZWw6ICd0aXRsZScsXHJcbiAgICAgIH0sXHJcbiAgICBdO1xyXG5cclxuICAgIHNjZW5lcyA9IGVhY2guY2FsbChzY2VuZXMsIGZ1bmN0aW9uKHMpIHtcclxuICAgICAgcy5hcmd1bWVudHMgPSBzLmFyZ3VtZW50cyB8fCBvcHRpb25zO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHNjZW5lID0gbmV3IE1hbmFnZXJTY2VuZSh7XHJcbiAgICAgIHN0YXJ0TGFiZWw6IHN0YXJ0TGFiZWwsXHJcbiAgICAgIHNjZW5lczogc2NlbmVzLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKG9wdGlvbnMuYXNzZXRzKSB7XHJcbiAgICAgIC8vIOODreODvOODh+OCo+ODs+OCsO+8mmVzbeeJiOOBp+OBr+eLrOiHquOBrkxvYWRpbmdTY2VuZeOBr+OCquODl+OCt+ODp+ODs+OBp+a4oeOBm+OCi+OCiOOBhuOBq+OBmeOCi1xyXG5cclxuICAgICAgdmFyIGxvYWRpbmdPcHRpb25zID0gJGV4dGVuZC5jYWxsKHt9LCBvcHRpb25zLCB7XHJcbiAgICAgIC8vIHZhciBsb2FkaW5nT3B0aW9ucyA9ICh7fSkuJGV4dGVuZChvcHRpb25zLCB7XHJcbiAgICAgICAgZXhpdFR5cGU6ICcnLFxyXG4gICAgICB9KTtcclxuICAgICAgLy8g44Kw44Ot44O844OQ44Or5a6a576p44GuTG9hZGluZ1NjZW5l44KS5o6i44GZ77yI5b6T5p2l77yJXHJcbiAgICAgIC8vIC0+IOOBquOBkeOCjOOBsOOCquODl+OCt+ODp+ODs+OCkuODgeOCp+ODg+OCryBcclxuICAgICAgLy8gLT4g44GT44KM44KC44Gq44GR44KM44Gw44OH44OV44Kp44Or44OI44GuTG9hZGluZ1NjZW5l44KS5L2/44GGXHJcbiAgICAgIHZhciBkZWZpbmVkTG9hZGluZ0NsYXNzID0gcGhpbmEkMS51c2luZyhcIkxvYWRpbmdTY2VuZVwiKSB8fCBwaGluYSQxLnVzaW5nKFwicGhpbmEuZ2FtZS5Mb2FkaW5nU2NlbmVcIik7XHJcbiAgICAgIHZhciBsb2FkaW5nID0gKHR5cGVvZiBkZWZpbmVkTG9hZGluZ0NsYXNzID09PSAnZnVuY3Rpb24nKSBcclxuICAgICAgICA/IGRlZmluZWRMb2FkaW5nQ2xhc3MobG9hZGluZ09wdGlvbnMpXHJcbiAgICAgICAgOiAob3B0aW9ucy5sb2FkaW5nU2NlbmUgIT0gbnVsbClcclxuICAgICAgICAgID8gbmV3IG9wdGlvbnMubG9hZGluZ1NjZW5lKGxvYWRpbmdPcHRpb25zKSBcclxuICAgICAgICAgIDogbmV3IExvYWRpbmdTY2VuZShsb2FkaW5nT3B0aW9ucylcclxuICAgICAgO1xyXG4gICAgICB0aGlzLnJlcGxhY2VTY2VuZShsb2FkaW5nKTtcclxuXHJcbiAgICAgIGxvYWRpbmcub25sb2FkZWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLnJlcGxhY2VTY2VuZShzY2VuZSk7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMuZGVidWcpIHtcclxuICAgICAgICAgIHRoaXMuX2VuYWJsZURlYnVnZ2VyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5yZXBsYWNlU2NlbmUoc2NlbmUpO1xyXG4gICAgICBpZiAob3B0aW9ucy5kZWJ1Zykge1xyXG4gICAgICAgIHRoaXMuX2VuYWJsZURlYnVnZ2VyKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDoh6rli5Xjgafjg53jg7zjgrrjgZnjgotcclxuICAgIC8vIGVzbeeJiOOBp+OBr+eLrOiHquOBruODneODvOOCuuOCt+ODvOODs+OBr+OCquODl+OCt+ODp+ODs+OBp+a4oeOBmVxyXG4gICAgLy8g5byV5pWw44GM5rih44Gb44Gq44GE44Gu44Gv5YWD44GL44KJXHJcbiAgICBpZiAob3B0aW9ucy5hdXRvUGF1c2UpIHtcclxuICAgICAgdGhpcy5vbignYmx1cicsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBkZWZpbmVkUGF1c2VTY2VuZSA9IHBoaW5hJDEudXNpbmcoXCJwaGluYS5nYW1lLlBhdXNlU2NlbmVcIik7XHJcbiAgICAgICAgdmFyIHBhdXNlU2NlbmUgPSAodHlwZW9mIGRlZmluZWRQYXVzZVNjZW5lID09PSAnZnVuY3Rpb24nKSBcclxuICAgICAgICAgID8gZGVmaW5lZFBhdXNlU2NlbmUoKSBcclxuICAgICAgICAgIDogKG9wdGlvbnMucGF1c2VTY2VuZSkgXHJcbiAgICAgICAgICAgID8gbmV3IG9wdGlvbnMucGF1c2VTY2VuZSgpIFxyXG4gICAgICAgICAgICA6IG5ldyBQYXVzZVNjZW5lKCk7XHJcbiAgICAgICAgdGhpcy5wdXNoU2NlbmUocGF1c2VTY2VuZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2VuYWJsZURlYnVnZ2VyKCkge1xyXG4gICAgaWYgKHRoaXMuZ3VpKSByZXR1cm4gO1xyXG5cclxuICAgIHRoaXMuZW5hYmxlRGF0R1VJKGZ1bmN0aW9uKGd1aSkge1xyXG4gICAgICB2YXIgZiA9IGd1aS5hZGRGb2xkZXIoJ3NjZW5lcycpO1xyXG4gICAgICB2YXIgZnVuY3MgPSB7fTtcclxuICAgICAgdGhpcy5yb290U2NlbmUuc2NlbmVzLmZvckVhY2goZnVuY3Rpb24oc2NlbmUpIHtcclxuICAgICAgLy8gdGhpcy5yb290U2NlbmUuc2NlbmVzLmVhY2goZnVuY3Rpb24oc2NlbmUpIHtcclxuICAgICAgICBmdW5jc1tzY2VuZS5sYWJlbF0gPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHRoaXMucm9vdFNjZW5lLnJlcGxhY2VTY2VuZShzY2VuZS5sYWJlbCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zY2VuZXMubGVuZ3RoKTtcclxuICAgICAgICB9LmJpbmQodGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIHNjZW5lO1xyXG4gICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgIGZvckluLmNhbGwoZnVuY3MsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgLy8gZnVuY3MuZm9ySW4oZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIGYuYWRkKGZ1bmNzLCBrZXkpO1xyXG4gICAgICB9KTtcclxuICAgICAgZi5vcGVuKCk7XHJcblxyXG4gICAgICB0aGlzLmd1aSA9IGd1aTtcclxuICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxufVxuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmdhbWUuQ291bnRTY2VuZVxyXG4gKiBAZXh0ZW5kcyBwaGluYS5kaXNwbGF5LkRpc3BsYXlTY2VuZVxyXG4gKi9cclxuY2xhc3MgQ291bnRTY2VuZSBleHRlbmRzIERpc3BsYXlTY2VuZSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG5cclxuICAgIG9wdGlvbnMgPSAkc2FmZS5jYWxsKG9wdGlvbnMgfHwge30sIENvdW50U2NlbmUuZGVmYXVsdHMpO1xyXG4gICAgLy8gb3B0aW9ucyA9IChvcHRpb25zIHx8IHt9KS4kc2FmZShwaGluYS5nYW1lLkNvdW50U2NlbmUuZGVmYXVsdHMpO1xyXG5cclxuICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3I7XHJcblxyXG4gICAgdGhpcy5mcm9tSlNPTih7XHJcbiAgICAgIGNoaWxkcmVuOiB7XHJcbiAgICAgICAgbGFiZWw6IHtcclxuICAgICAgICAgIGNsYXNzTmFtZTogTGFiZWwsXHJcbiAgICAgICAgICAvLyBjbGFzc05hbWU6ICdwaGluYS5kaXNwbGF5LkxhYmVsJyxcclxuICAgICAgICAgIGFyZ3VtZW50czoge1xyXG4gICAgICAgICAgICBmaWxsOiBvcHRpb25zLmZvbnRDb2xvcixcclxuICAgICAgICAgICAgZm9udFNpemU6IG9wdGlvbnMuZm9udFNpemUsXHJcbiAgICAgICAgICAgIHN0cm9rZTogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeDogdGhpcy5ncmlkWC5jZW50ZXIoKSxcclxuICAgICAgICAgIHk6IHRoaXMuZ3JpZFkuY2VudGVyKCksXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKG9wdGlvbnMuY291bnQgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICB0aGlzLmNvdW50TGlzdCA9IGNsb25lLmNhbGwob3B0aW9ucy5jb3VudCkucmV2ZXJzZSgpO1xyXG4gICAgICAvLyB0aGlzLmNvdW50TGlzdCA9IG9wdGlvbnMuY291bnQuY2xvbmUoKS5yZXZlcnNlKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5jb3VudExpc3QgPSByYW5nZS5jYWxsKFtdLCAxLCBvcHRpb25zLmNvdW50KzEpO1xyXG4gICAgICAvLyB0aGlzLmNvdW50TGlzdCA9IEFycmF5LnJhbmdlKDEsIG9wdGlvbnMuY291bnQrMSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvdW50ZXIgPSB0aGlzLmNvdW50TGlzdC5sZW5ndGg7XHJcbiAgICB0aGlzLmV4aXRUeXBlID0gb3B0aW9ucy5leGl0VHlwZTtcclxuXHJcbiAgICB0aGlzLl91cGRhdGVDb3VudCgpO1xyXG4gIH1cclxuXHJcbiAgX3VwZGF0ZUNvdW50KCkge1xyXG4gICAgdmFyIGVuZEZsYWcgPSB0aGlzLmNvdW50ZXIgPD0gMDtcclxuICAgIHZhciBpbmRleCA9IC0tdGhpcy5jb3VudGVyO1xyXG5cclxuICAgIHRoaXMubGFiZWwudGV4dCA9IHRoaXMuY291bnRMaXN0W2luZGV4XTtcclxuXHJcbiAgICB0aGlzLmxhYmVsLnNjYWxlLnNldCgxLCAxKTtcclxuICAgIHRoaXMubGFiZWwudHdlZW5lclxyXG4gICAgICAuY2xlYXIoKVxyXG4gICAgICAudG8oe1xyXG4gICAgICAgIHNjYWxlWDogMSxcclxuICAgICAgICBzY2FsZVk6IDEsXHJcbiAgICAgICAgYWxwaGE6IDEsXHJcbiAgICAgIH0sIDI1MClcclxuICAgICAgLndhaXQoNTAwKVxyXG4gICAgICAudG8oe1xyXG4gICAgICAgIHNjYWxlWDogMS41LFxyXG4gICAgICAgIHNjYWxlWTogMS41LFxyXG4gICAgICAgIGFscGhhOiAwLjBcclxuICAgICAgfSwgMjUwKVxyXG4gICAgICAuY2FsbChmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5jb3VudGVyIDw9IDApIHtcclxuICAgICAgICAgIHRoaXMuZmxhcmUoJ2ZpbmlzaCcpO1xyXG4gICAgICAgICAgaWYgKHRoaXMuZXhpdFR5cGUgPT09ICdhdXRvJykge1xyXG4gICAgICAgICAgICB0aGlzLmFwcC5wb3BTY2VuZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuX3VwZGF0ZUNvdW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCB0aGlzKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5Db3VudFNjZW5lLmRlZmF1bHRzID0ge1xyXG4gIGNvdW50OiAzLFxyXG5cclxuICB3aWR0aDogNjQwLFxyXG4gIGhlaWdodDogOTYwLFxyXG5cclxuICBmb250Q29sb3I6ICd3aGl0ZScsXHJcbiAgZm9udFNpemU6IDE2NCxcclxuICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDUwLCA1MCwgNTAsIDEpJyxcclxuXHJcbiAgZXhpdFR5cGU6ICdhdXRvJyxcclxufTtcblxuZXhwb3J0IHsgQWNjZWxlcm9tZXRlciwgQWNjZXNzb3J5LCBBamF4LCBBc3NldCwgQXNzZXRMb2FkZXIsIEFzc2V0TWFuYWdlciwgQmFzZUFwcCwgQnV0dG9uLCBDYW52YXMsIENhbnZhc0FwcCwgQ2FudmFzTGF5ZXIsIENhbnZhc1JlbmRlcmVyLCBDaGFuZ2VEaXNwYXRjaGVyLCBDaXJjbGUsIENpcmNsZUdhdWdlLCBDaXJjbGVTaGFwZSwgQ29sbGlzaW9uLCBDb2xvciwgQ291bnRTY2VuZSwgRGlzcGxheUVsZW1lbnQsIERpc3BsYXlTY2VuZSwgRG9tQXBwLCBEcmFnZ2FibGUsIEVsZW1lbnQsIEV2ZW50RGlzcGF0Y2hlciwgRmlsZSwgRmxpY2thYmxlLCBGbG93LCBGb250LCBGcmFtZUFuaW1hdGlvbiwgR2FtZUFwcCwgR2FtZXBhZE1hbmFnZXIsIEdhdWdlLCBHcmlkLCBIZWFydFNoYXBlLCBJbnB1dCwgSW50ZXJhY3RpdmUsIEtleWJvYXJkLCBMYWJlbCwgTGFiZWxBcmVhLCBMYXllciwgTG9hZGluZ1NjZW5lLCBNYW5hZ2VyU2NlbmUsIE1hdHJpeDMzLCBNb3VzZSwgT2JqZWN0MkQsIFBhdGhTaGFwZSwgUGF1c2VTY2VuZSwgUGh5c2ljYWwsIFBsYWluRWxlbWVudCwgUG9seWdvblNoYXBlLCBRdWVyeVN0cmluZywgUmFuZG9tLCBSZWN0LCBSZWN0YW5nbGVTaGFwZSwgUmVzdWx0U2NlbmUsIFNjZW5lLCBTY3JpcHQsIFNoYXBlLCBTb3VuZE1hbmFnZXIsIFNwbGFzaFNjZW5lLCBTcHJpdGUsIFNwcml0ZVNoZWV0LCBTdGFyU2hhcGUsIFN1cHBvcnQsIFRleHR1cmUsIFRocmVlTGF5ZXIsIFRpY2tlciwgVGl0bGVTY2VuZSwgVG91Y2gsIFRvdWNoTGlzdCwgVHJpYW5nbGVTaGFwZSwgVHdlZW4sIFR3ZWVuZXIsIFR3aXR0ZXIsIFVwZGF0ZXIsIFZlY3RvcjIsIFZlY3RvcjMsIFdhdmUsIHBoaW5hJDEgYXMgcGhpbmEgfTtcbiIsImV4cG9ydCBjb25zdCBBc3NldENhdGFsb2cgPSB7XG4gIGltYWdlOiB7XG4gICAgXCJ0b21hcGl5b1wiOiBcIi4vYXNzZXRzL2ltYWdlcy90b21hcGl5by5wbmdcIixcbiAgICBcImJhY2tncm91bmRcIjogXCIuL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC5wbmdcIixcbiAgICBcInR1YmUxXCI6IFwiLi9hc3NldHMvaW1hZ2VzL3R1YmUxLnBuZ1wiLFxuICAgIFwidHViZTJcIjogXCIuL2Fzc2V0cy9pbWFnZXMvdHViZTIucG5nXCIsXG4gIH1cbn07IiwiaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwicGhpbmEuanMvYnVpbGQvcGhpbmEuZXNtXCI7XG5pbXBvcnQgeyAkc2FmZSwgdGltZXMgfSBmcm9tIFwiLi4vZXh0ZW5zaW9ucy9VdGlsc1wiO1xuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCIuL0dhbWVPYmplY3RcIjtcblxuZXhwb3J0IGNsYXNzIENvdW50RG93biBleHRlbmRzIEdhbWVPYmplY3Qge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9ICRzYWZlLmNhbGwoe30sIG9wdGlvbnMsIHsgc3RhcnRDb3VudDogMywgaW50ZXJ2YWw6IDEwMDAsIHN0YXJ0U2NhbGU6IDEsIGVuZFNjYWxlOiAwLjUgfSk7XG4gICAgc3VwZXIob3B0aW9ucyk7XG5cbiAgICB0aGlzLmNvdW50ID0gb3B0aW9ucy5zdGFydENvdW50O1xuXG4gICAgY29uc3QgbGFiZWxPcHRpb25zID0ge1xuICAgICAgdGV4dDogYCR7dGhpcy5jb3VudH1gLFxuICAgICAgZmlsbDogJ3doaXRlJyxcbiAgICAgIHN0cm9rZTogJ2JsYWNrJyxcbiAgICAgIHN0cm9rZVdpZHRoOiA2LFxuICAgICAgZm9udFNpemU6IDEyOCxcbiAgICB9XG4gICAgdGhpcy5sYWJlbCA9IG5ldyBMYWJlbChsYWJlbE9wdGlvbnMpXG4gICAgICAuc2V0U2NhbGUob3B0aW9ucy5zdGFydFNjYWxlKVxuICAgICAgLmFkZENoaWxkVG8odGhpcyk7XG5cbiAgICB0aGlzLmxhYmVsLnR3ZWVuZXIuY2xlYXIoKTtcbiAgICB0aW1lcy5jYWxsKG9wdGlvbnMuc3RhcnRDb3VudCwgaSA9PiB7XG4gICAgICB0aGlzLmxhYmVsLnR3ZWVuZXJcbiAgICAgICAgLnRvKHsgc2NhbGVYOiBvcHRpb25zLmVuZFNjYWxlLCBzY2FsZVk6IG9wdGlvbnMuZW5kU2NhbGUsIGFscGhhOiAwIH0sIG9wdGlvbnMuaW50ZXJ2YWwgKVxuICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jb3VudC0tO1xuICAgICAgICAgIGlmICh0aGlzLmNvdW50ID4gMCkge1xuICAgICAgICAgICAgdGhpcy5sYWJlbC50ZXh0ID0gYCR7dGhpcy5jb3VudH1gO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxhYmVsLnRleHQgPSBcIlNUQVJUXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAud2FpdCgxMDApXG4gICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmxhYmVsLmFscGhhID0gMS4wO1xuICAgICAgICAgIHRoaXMubGFiZWwuc2V0U2NhbGUob3B0aW9ucy5zdGFydFNjYWxlKTtcbiAgICAgICAgfSlcbiAgICB9KTtcbiAgICB0aGlzLmxhYmVsLnR3ZWVuZXJcbiAgICAgIC53YWl0KDEwMDApXG4gICAgICAuY2FsbCgoKSA9PiB0aGlzLmZsYXJlKCdjb3VudGRvd25fZW5kJykpXG4gICAgICAudG8oeyBhbHBoYTogMCB9LCBvcHRpb25zLmludGVydmFsIC8gMiApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEaXNwbGF5RWxlbWVudCwgU3ByaXRlLCBWZWN0b3IyIH0gZnJvbSBcInBoaW5hLmpzL2J1aWxkL3BoaW5hLmVzbVwiO1xuXG5leHBvcnQgY2xhc3MgR2FtZU9iamVjdCBleHRlbmRzIERpc3BsYXlFbGVtZW50IHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIHRoaXMudGltZSA9IDA7XG4gICAgdGhpcy5vbignZW50ZXJmcmFtZScsICgpID0+IHRoaXMudGltZSsrKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUmVjdGFuZ2xlU2hhcGUsIFNwcml0ZSwgVmVjdG9yMiB9IGZyb20gXCJwaGluYS5qcy9idWlsZC9waGluYS5lc21cIjtcbmltcG9ydCB7ICRzYWZlIH0gZnJvbSBcIi4uL2V4dGVuc2lvbnMvVXRpbHNcIjtcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwiLi9HYW1lT2JqZWN0XCI7XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSAkc2FmZS5jYWxsKHt9LCBvcHRpb25zLCB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9KTtcbiAgICBzdXBlcihvcHRpb25zKTtcbiAgICB0aGlzLnNwcml0ZSA9IG5ldyBTcHJpdGUoXCJ0b21hcGl5b1wiLCA2NCwgNjQpXG4gICAgICAuYWRkQ2hpbGRUbyh0aGlzKVxuICAgICAgLnNldEZyYW1lSW5kZXgoMSk7XG5cbiAgICAvLyB0aGlzLmNvbGxpc2lvbiA9IG5ldyBSZWN0YW5nbGVTaGFwZSh7IHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9KS5hZGRDaGlsZFRvKHRoaXMpO1xuICAgIC8vIHRoaXMuY29sbGlzaW9uLmFscGhhID0gMC41O1xuXG4gICAgdGhpcy5hbmltYXRpb25TZXEgPSBbMSwgMiwgM107XG4gICAgdGhpcy5hbmltYXRpb25TZXFJbmRleCA9IDA7XG5cbiAgICB0aGlzLnZlbG9jaXR5ID0gbmV3IFZlY3RvcjIoMCwgMCk7XG4gICAgdGhpcy5qdW1wUG93ZXIgPSAxMDtcblxuICAgIHRoaXMuaXNTdGFydCA9IGZhbHNlO1xuICAgIHRoaXMuaXNEZWFkID0gZmFsc2U7XG5cbiAgICB0aGlzLm9uKCdzdGFydCcsICgpID0+IHtcbiAgICAgIHRoaXMuaXNTdGFydCA9IHRydWU7XG4gICAgICB0aGlzLmp1bXAoMTUpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vbignZGVhZCcsICgpID0+IHtcbiAgICAgIHRoaXMub2ZmKCdkZWFkJyk7XG4gICAgICB0aGlzLmlzRGVhZCA9IHRydWU7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGUoYXBwKSB7XG4gICAgaWYgKCF0aGlzLmlzRGVhZCAmJiB0aGlzLnRpbWUgJSA1ID09IDApIHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uU2VxSW5kZXgrKztcbiAgICAgIGlmICh0aGlzLmFuaW1hdGlvblNlcUluZGV4ID09IHRoaXMuYW5pbWF0aW9uU2VxLmxlbmd0aCkgdGhpcy5hbmltYXRpb25TZXFJbmRleCA9IDA7XG4gICAgICBjb25zdCBpZHggPSB0aGlzLmFuaW1hdGlvblNlcVt0aGlzLmFuaW1hdGlvblNlcUluZGV4XTtcbiAgICAgIHRoaXMuc3ByaXRlLnNldEZyYW1lSW5kZXgoaWR4KTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNTdGFydCkgcmV0dXJuO1xuXG4gICAgaWYgKHRoaXMuaXNEZWFkKSB7XG4gICAgICB0aGlzLnNwcml0ZS5zZXRGcmFtZUluZGV4KDQpO1xuICAgIH0gZWxzZSBpZiAoYXBwLnBvaW50ZXIuZ2V0UG9pbnRpbmdTdGFydCgpIHx8IGFwcC5rZXlib2FyZC5nZXRLZXkoXCJzcGFjZVwiKSkge1xuICAgICAgdGhpcy5qdW1wKCk7XG4gICAgfVxuXG4gICAgdGhpcy5wb3NpdGlvbi5hZGQodGhpcy52ZWxvY2l0eSk7XG4gICAgdGhpcy52ZWxvY2l0eS55ICs9IDAuNDk7XG5cbiAgICBpZiAodGhpcy55ID4gNjQwKSB7XG4gICAgICB0aGlzLmZsYXJlKFwiZGVhZFwiKTtcbiAgICB9XG4gICAgaWYgKHRoaXMueSA+IDgwMCkge1xuICAgICAgdGhpcy5mbGFyZShcImRlYWRfZW5kXCIpO1xuICAgIH1cblxuICAgIHRoaXMudGltZSsrO1xuICB9XG5cbiAganVtcChwb3dlcikge1xuICAgIHBvd2VyID0gcG93ZXIgfHwgdGhpcy5qdW1wUG93ZXI7XG4gICAgaWYgKHRoaXMudmVsb2NpdHkueSA8IDApIHJldHVybjtcbiAgICB0aGlzLnZlbG9jaXR5LnkgPSAtdGhpcy5qdW1wUG93ZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiIsImltcG9ydCB7IExhYmVsIH0gZnJvbSBcInBoaW5hLmpzL2J1aWxkL3BoaW5hLmVzbVwiO1xuaW1wb3J0IHsgJHNhZmUgfSBmcm9tIFwiLi4vZXh0ZW5zaW9ucy9VdGlsc1wiO1xuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCIuL0dhbWVPYmplY3RcIjtcblxuZXhwb3J0IGNsYXNzIFNjb3JlIGV4dGVuZHMgR2FtZU9iamVjdCB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gJHNhZmUuY2FsbCh7fSwgb3B0aW9ucywgeyBpbml0aWFsU2NvcmU6IDAgfSk7XG4gICAgc3VwZXIob3B0aW9ucyk7XG5cbiAgICB0aGlzLl9zY29yZSA9IG9wdGlvbnMuaW5pdGlhbFNjb3JlO1xuXG4gICAgY29uc3QgbGFiZWxPcHRpb25zID0ge1xuICAgICAgdGV4dDogYCR7dGhpcy5fc2NvcmV9YCxcbiAgICAgIGZpbGw6ICd3aGl0ZScsXG4gICAgICBzdHJva2U6ICdibGFjaycsXG4gICAgICBzdHJva2VXaWR0aDogNCxcbiAgICAgIGZvbnRTaXplOiA2NCxcbiAgICB9XG4gICAgdGhpcy5sYWJlbCA9IG5ldyBMYWJlbChsYWJlbE9wdGlvbnMpLmFkZENoaWxkVG8odGhpcyk7XG4gIH1cblxuICBhZGQodmFsdWUpIHtcbiAgICB0aGlzLl9zY29yZSArPSB2YWx1ZTtcbiAgICB0aGlzLmxhYmVsLnRleHQgPSBgJHt0aGlzLl9zY29yZX1gO1xuICB9XG5cbiAgc2V0KHZhbHVlKSB7XG4gICAgdGhpcy5fc2NvcmUgPSB2YWx1ZTtcbiAgICB0aGlzLmxhYmVsLnRleHQgPSBgJHt0aGlzLl9zY29yZX1gO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTcHJpdGUgfSBmcm9tIFwicGhpbmEuanMvYnVpbGQvcGhpbmEuZXNtXCI7XG5pbXBvcnQgeyAkc2FmZSB9IGZyb20gXCIuLi9leHRlbnNpb25zL1V0aWxzXCI7XG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcIi4vR2FtZU9iamVjdFwiO1xuXG5leHBvcnQgY2xhc3MgVHViZSBleHRlbmRzIEdhbWVPYmplY3Qge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9ICRzYWZlLmNhbGwoe30sIG9wdGlvbnMsIHtcbiAgICAgIHdpZHRoOiA1MixcbiAgICAgIGhlaWdodDogMzIwLFxuICAgICAgaXNCb3R0b206IGZhbHNlLFxuICAgICAgcG9pbnQ6IDEsXG4gICAgfSk7XG4gICAgc3VwZXIob3B0aW9ucyk7XG4gICAgdGhpcy5zcHJpdGUgPSBuZXcgU3ByaXRlKGB0dWJlJHtvcHRpb25zLmlzQm90dG9tID8gXCIyXCIgOiBcIjFcIn1gKS5hZGRDaGlsZFRvKHRoaXMpO1xuICAgIHRoaXMuX3BvaW50ID0gb3B0aW9ucy5wb2ludDtcbiAgfVxuXG4gIGdldCBwb2ludCgpIHsgcmV0dXJuIHRoaXMuX3BvaW50OyB9XG4gIHNldCBwb2ludCh2YWx1ZSkgeyB0aGlzLl9wb2ludCA9IHZhbHVlOyB9XG59XG4iLCIvKipcbiAqIEBtZXRob2QgICRleHRlbmRcbiAqIOS7luOBruODqeOCpOODluODqeODquOBqOertuWQiOOBl+OBoeOCg+OBhuOBruOBpyBleHRlbmQgLT4gJGV4dGVuZCDjgajjgZfjgb7jgZfjgZ9cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRleHRlbmQoKSB7XG4gIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYXJndW1lbnRzLCBmdW5jdGlvbihzb3VyY2UpIHtcbiAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBzb3VyY2UpIHtcbiAgICAgIHRoaXNbcHJvcGVydHldID0gc291cmNlW3Byb3BlcnR5XTtcbiAgICB9XG4gIH0sIHRoaXMpO1xuICByZXR1cm4gdGhpcztcbn1cbiAgXG4vKipcbiAqIEBtZXRob2QgICRzYWZlXG4gKiDlronlhajmi6HlvLVcbiAqIOS4iuabuOOBjeOBl+OBquOBhFxuICovXG5leHBvcnQgZnVuY3Rpb24gJHNhZmUoc291cmNlKSB7XG4gIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYXJndW1lbnRzLCBmdW5jdGlvbihzb3VyY2UpIHtcbiAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmICh0aGlzW3Byb3BlcnR5XSA9PT0gdW5kZWZpbmVkKSB0aGlzW3Byb3BlcnR5XSA9IHNvdXJjZVtwcm9wZXJ0eV07XG4gICAgfVxuICB9LCB0aGlzKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8qKlxuICogQG1ldGhvZCB0aW1lc1xuICogMCDjgYvjgonoh6rliIboh6rouqvjga7mlbAtMeOBvuOBp+OAgeOCq+OCpuODs+OCv+OCkuOCpOODs+OCr+ODquODoeODs+ODiOOBl+OBquOBjOOCiemWouaVsOOCkue5sOOCiui/lOOBl+Wun+ihjOOBl+OBvuOBmeOAglxuICpcbiAqICMjIyBFeGFtcGxlXG4gKiAgICAgYXJyID0gW107XG4gKiAgICAgKDUpLnRpbWVzKGZ1bmN0aW9uKGkpe1xuICogICAgICAgYXJyLnB1c2goaSk7XG4gKiAgICAgfSk7IC8vID0+IFswLCAxLCAyLCAzLCA0XVxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIOOCs+ODvOODq+ODkOODg+OCr+mWouaVsFxuICogQHBhcmFtIHtPYmplY3R9IFtzZWxmPXRoaXNdIOmWouaVsOWGheOBpyB0aGlzIOOBqOOBl+OBpuWPgueFp+OBleOCjOOCi+WApOOAguODh+ODleOCqeODq+ODiOOBr+iHquWIhuiHqui6q+OAglxuICovXG5leHBvcnQgZnVuY3Rpb24gdGltZXMoZm4sIHNlbGYpIHtcbiAgc2VsZiA9IHNlbGYgfHwgdGhpcztcbiAgZm9yICh2YXIgaT0wOyBpPHRoaXM7ICsraSkge1xuICAgIGZuLmNhbGwoc2VsZiwgaSwgdGhpcyk7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8qKlxuICogQG1ldGhvZCByYW5kaW50XG4gKiDmjIflrprjgZXjgozjgZ/nr4Tlm7LlhoXjgafjg6njg7Pjg4Djg6DjgarmlbTmlbDlgKTjgpLov5TjgZfjgb7jgZnjgIJcbiAqIFxuICogQHBhcmFtIHtOdW1iZXJ9IG1pbiDnr4Tlm7Ljga7mnIDlsI/lgKRcbiAqIEBwYXJhbSB7TnVtYmVyfSBtYXgg56+E5Zuy44Gu5pyA5aSn5YCkXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IOODqeODs+ODgOODoOOBquaVtOaVsOWApFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmFuZGludChtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICkgKyBtaW47XG59XG4iLCJpbXBvcnQgeyBwaGluYSwgQ2FudmFzQXBwLCBEaXNwbGF5U2NlbmUgfSBmcm9tIFwicGhpbmEuanMvYnVpbGQvcGhpbmEuZXNtXCI7XG5pbXBvcnQgeyBTY2VuZUZsb3cgfSBmcm9tIFwiL3NyYy9zY2VuZXMvU2NlbmVGbG93XCJcblxuY29uc29sZS5sb2coJ1ZlcnNpb246IDAuMC4xIChEYXRlIDIwMjAtMTItMjUsIENvbW1pdCAjMzM5MmEzMSknKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgY29uc29sZS5sb2coJyMjIyMjIERldmVsb3BtZW50IG1vZGUgIyMjIyMnKTtcbn1cblxuRGlzcGxheVNjZW5lLmRlZmF1bHRzLndpZHRoID0gOTYwO1xuRGlzcGxheVNjZW5lLmRlZmF1bHRzLmhlaWdodCA9IDY0MDtcblxucGhpbmEubWFpbigoKT0+IHtcbiAgY29uc3QgYXBwT3B0aW9uID0ge1xuICAgIHdpZHRoOiA5NjAsXG4gICAgaGVpZ2h0OiA2NDAsXG4gICAgZnBzOiA2MCxcbiAgfTtcbiAgY29uc3QgYXBwID0gbmV3IENhbnZhc0FwcChhcHBPcHRpb24pO1xuICBhcHAucmVwbGFjZVNjZW5lKG5ldyBTY2VuZUZsb3coKSk7XG4gIGFwcC5ydW4oKTtcbn0pO1xuIiwiaW1wb3J0IHsgRGlzcGxheVNjZW5lLCBMYWJlbCB9IGZyb20gXCJwaGluYS5qcy9idWlsZC9waGluYS5lc21cIjtcbmltcG9ydCB7ICRzYWZlIH0gZnJvbSBcIi4uL2V4dGVuc2lvbnMvVXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIEdhbWVUaXRsZVNjZW5lIGV4dGVuZHMgRGlzcGxheVNjZW5lIHtcblxuICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcbiAgICBwYXJhbXMgPSAkc2FmZS5jYWxsKHt9LCBwYXJhbXMsIEdhbWVUaXRsZVNjZW5lLmRlZmF1bHRzKTtcbiAgICBzdXBlcihwYXJhbXMpO1xuXG4gICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSBwYXJhbXMuYmFja2dyb3VuZENvbG9yO1xuXG4gICAgdGhpcy5mcm9tSlNPTih7XG4gICAgICBjaGlsZHJlbjoge1xuICAgICAgICB0aXRsZUxhYmVsOiB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBMYWJlbCxcbiAgICAgICAgICBhcmd1bWVudHM6IHtcbiAgICAgICAgICAgIHRleHQ6IHBhcmFtcy50aXRsZSxcbiAgICAgICAgICAgIGZpbGw6IHBhcmFtcy5mb250Q29sb3IsXG4gICAgICAgICAgICBzdHJva2U6IGZhbHNlLFxuICAgICAgICAgICAgZm9udFNpemU6IDY0LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeDogdGhpcy5ncmlkWC5jZW50ZXIoKSxcbiAgICAgICAgICB5OiB0aGlzLmdyaWRZLnNwYW4oNCksXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChwYXJhbXMuZXhpdFR5cGUgPT09ICd0b3VjaCcpIHtcbiAgICAgIHRoaXMuZnJvbUpTT04oe1xuICAgICAgICBjaGlsZHJlbjoge1xuICAgICAgICAgIHRvdWNoTGFiZWw6IHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogTGFiZWwsXG4gICAgICAgICAgICBhcmd1bWVudHM6IHtcbiAgICAgICAgICAgICAgdGV4dDogXCJUT1VDSCBTVEFSVFwiLFxuICAgICAgICAgICAgICBmaWxsOiBwYXJhbXMuZm9udENvbG9yLFxuICAgICAgICAgICAgICBzdHJva2U6IGZhbHNlLFxuICAgICAgICAgICAgICBmb250U2l6ZTogMzIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeDogdGhpcy5ncmlkWC5jZW50ZXIoKSxcbiAgICAgICAgICAgIHk6IHRoaXMuZ3JpZFkuc3BhbigxMiksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShhcHApIHtcbiAgICBpZiAoYXBwLnBvaW50ZXIuZ2V0UG9pbnRpbmdTdGFydCgpKSB7XG4gICAgICB0aGlzLmV4aXQoKTtcbiAgICB9XG4gIH1cblxufVxuXG5HYW1lVGl0bGVTY2VuZS5kZWZhdWx0cyA9IHtcbiAgdGl0bGU6ICdwaGluYS5qcyBnYW1lcycsXG4gIG1lc3NhZ2U6ICcnLFxuXG4gIGZvbnRDb2xvcjogJ3doaXRlJyxcbiAgYmFja2dyb3VuZENvbG9yOiAnaHNsKDIwMCwgODAlLCA2NCUpJyxcbiAgYmFja2dyb3VuZEltYWdlOiAnJyxcblxuICBleGl0VHlwZTogJ3RvdWNoJyxcbn07XG4iLCJpbXBvcnQgeyBDb2xsaXNpb24sIERpc3BsYXlFbGVtZW50LCBEaXNwbGF5U2NlbmUsIExhYmVsLCBTcHJpdGUgfSBmcm9tIFwicGhpbmEuanMvYnVpbGQvcGhpbmEuZXNtXCI7XG5pbXBvcnQgeyBDb3VudERvd24gfSBmcm9tIFwiLi4vZWxlbWVudHMvQ291bnREb3duXCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vZWxlbWVudHMvUGxheWVyXCI7XG5pbXBvcnQgeyBTY29yZSB9IGZyb20gXCIuLi9lbGVtZW50cy9TY29yZVwiO1xuaW1wb3J0IHsgVHViZSB9IGZyb20gXCIuLi9lbGVtZW50cy9UdWJlXCI7XG5pbXBvcnQgeyAkc2FmZSwgcmFuZGludCB9IGZyb20gXCIuLi9leHRlbnNpb25zL1V0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBNYWluU2NlbmUgZXh0ZW5kcyBEaXNwbGF5U2NlbmUge1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gJHNhZmUuY2FsbCh7fSwgb3B0aW9ucywgeyBiYWNrZ3JvdW5kQ29sb3I6ICdibGFjaycgfSk7XG4gICAgc3VwZXIob3B0aW9ucyk7XG5cbiAgICB0aGlzLmlzU3RhcnQgPSBmYWxzZTtcbiAgICB0aGlzLmlzR2FtZU92ZXIgPSBmYWxzZTtcbiAgICB0aGlzLnR1YmVzID0gW107XG4gICAgdGhpcy50aW1lID0gMDtcblxuICAgIC8v44OQ44OD44Kv44Kw44Op44Km44Oz44OJXG4gICAgdGhpcy5iZyA9IG5ldyBTcHJpdGUoXCJiYWNrZ3JvdW5kXCIpLmFkZENoaWxkVG8odGhpcykuc2V0T3JpZ2luKDAsIDApO1xuXG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gbmV3IERpc3BsYXlFbGVtZW50KCkuYWRkQ2hpbGRUbyh0aGlzKTtcbiAgICB0aGlzLmZvcmVncm91bmQgPSBuZXcgRGlzcGxheUVsZW1lbnQoKS5hZGRDaGlsZFRvKHRoaXMpO1xuXG4gICAgLy/jg5fjg6zjgqTjg6Tjg7xcbiAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoKVxuICAgICAgLnNldFBvc2l0aW9uKHRoaXMud2lkdGggLyA0LCB0aGlzLmhlaWdodCAvIDIpXG4gICAgICAuYWRkQ2hpbGRUbyh0aGlzLmZvcmVncm91bmQpO1xuXG4gICAgdGhpcy5wbGF5ZXIub25lKCdkZWFkX2VuZCcsICgpID0+IHtcbiAgICAgIHRoaXMuZ2FtZW92ZXIoKTtcbiAgICAgIHRoaXMudGltZSA9IDA7XG4gICAgfSk7XG5cbiAgICAvL+OCueOCs+OCouihqOekulxuICAgIHRoaXMuc2NvcmUgPSBuZXcgU2NvcmUoKVxuICAgIC5zZXRQb3NpdGlvbih0aGlzLndpZHRoIC8gMiwgNjApXG4gICAgLmFkZENoaWxkVG8odGhpcy5mb3JlZ3JvdW5kKTtcblxuICAgIC8v44Kr44Km44Oz44OI44OA44Km44OzXG4gICAgdGhpcy5jb3VudERvd24gPSBuZXcgQ291bnREb3duKClcbiAgICAgIC5zZXRQb3NpdGlvbih0aGlzLndpZHRoIC8gMiwgdGhpcy5oZWlnaHQgLyAyKVxuICAgICAgLmFkZENoaWxkVG8odGhpcyk7XG5cbiAgICB0aGlzLmNvdW50RG93bi5vbignY291bnRkb3duX2VuZCcsICgpID0+IHtcbiAgICAgIHRoaXMuaXNTdGFydCA9IHRydWU7XG4gICAgICB0aGlzLnBsYXllci5mbGFyZSgnc3RhcnQnKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZShhcHApIHtcbiAgICBpZiAoIXRoaXMuaXNTdGFydCkgcmV0dXJuO1xuXG4gICAgaWYgKCF0aGlzLmlzR2FtZU92ZXIpIHtcbiAgICAgIGlmKHRoaXMudGltZSAlIDEyMCA9PSAwKSB0aGlzLmVudGVyVHViZSgpO1xuXG4gICAgICB0aGlzLnR1YmVzLmZvckVhY2godHViZSA9PiB7XG4gICAgICAgIHR1YmUueCAtPSAyO1xuICAgICAgICBpZiAodHViZS5wb2ludCA+IDAgJiYgdHViZS54IDwgdGhpcy53aWR0aCAvIDQpIHtcbiAgICAgICAgICB0aGlzLnNjb3JlLmFkZCh0dWJlLnBvaW50KTtcbiAgICAgICAgICB0dWJlLnBvaW50ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHViZS54IDwgLTUwKSB7XG4gICAgICAgICAgdHViZS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQ29sbGlzaW9uLnRlc3RSZWN0UmVjdCh0aGlzLnBsYXllciwgdHViZSkpIHtcbiAgICAgICAgICB0aGlzLnBsYXllci5mbGFyZSgnZGVhZCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMudGltZSA+IDEyMCAmJiAoYXBwLnBvaW50ZXIuZ2V0UG9pbnRpbmdTdGFydCgpIHx8IGFwcC5rZXlib2FyZC5nZXRLZXkoXCJzcGFjZVwiKSkpIHtcbiAgICAgICAgdGhpcy5leGl0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy50aW1lKys7XG4gIH1cblxuICBlbnRlclR1YmUoKSB7XG4gICAgY29uc3QgZ2FwID0gcmFuZGludCg5MCwgMjAwKTtcbiAgICBsZXQgY2VudGVyID0gcmFuZGludCgtMTMwLCAxMzApO1xuICAgIGlmIChjZW50ZXIgKyBnYXAgPiAzMjApIGNlbnRlciA9IDMyMCArIGdhcDtcbiAgICBpZiAoY2VudGVyIC0gZ2FwIDwgMzIwKSBjZW50ZXIgPSAzMjAgLSBnYXA7XG4gICAgY29uc3QgdHViZTEgPSBuZXcgVHViZSh7IGlzQm90dG9tOiBmYWxzZSB9KTtcbiAgICB0dWJlMS5zZXRQb3NpdGlvbih0aGlzLndpZHRoICsgMzAsIHRoaXMuaGVpZ2h0IC8gMiAtIHR1YmUxLmhlaWdodCAvIDIgLSBnYXAgLyAyICsgY2VudGVyKS5hZGRDaGlsZFRvKHRoaXMuYmFja2dyb3VuZCk7XG4gICAgY29uc3QgdHViZTIgPSBuZXcgVHViZSh7IGlzQm90dG9tOiB0cnVlLCBwb2ludDogMCB9KTtcbiAgICB0dWJlMi5zZXRQb3NpdGlvbih0aGlzLndpZHRoICsgMzAsIHRoaXMuaGVpZ2h0IC8gMiArIHR1YmUyLmhlaWdodCAvIDIgKyBnYXAgLyAyICsgY2VudGVyKS5hZGRDaGlsZFRvKHRoaXMuYmFja2dyb3VuZCk7XG4gICAgdGhpcy50dWJlcy5wdXNoKHR1YmUxKTtcbiAgICB0aGlzLnR1YmVzLnB1c2godHViZTIpO1xuICB9XG5cbiAgZ2FtZW92ZXIoKSB7XG4gICAgdGhpcy5pc0dhbWVPdmVyID0gdHJ1ZTtcbiAgICBjb25zb2xlLmxvZyhcImdhbWUgb3ZlclwiKTsgICAgICBcblxuICAgIGNvbnN0IGxhYmVsT3B0aW9ucyA9IHtcbiAgICAgIHRleHQ6IFwiR0FNRSBPVkVSXCIsXG4gICAgICBmaWxsOiAnd2hpdGUnLFxuICAgICAgc3Ryb2tlOiAnYmxhY2snLFxuICAgICAgc3Ryb2tlV2lkdGg6IDYsXG4gICAgICBmb250U2l6ZTogMTAwLFxuICAgIH1cbiAgICB0aGlzLmdhbWVvdmVyTGFiZWwgPSBuZXcgTGFiZWwobGFiZWxPcHRpb25zKVxuICAgICAgLnNldFBvc2l0aW9uKHRoaXMud2lkdGggLyAyLCB0aGlzLmhlaWdodCAvIDIpXG4gICAgICAuYWRkQ2hpbGRUbyh0aGlzLmZvcmVncm91bmQpO1xuICAgIFxuICAgIHRoaXMuZ2FtZW92ZXJMYWJlbC50d2VlbmVyLmNsZWFyKClcbiAgICAgIC53YWl0KDIwMDApXG4gICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxhYmVsT3B0aW9ucyA9IHtcbiAgICAgICAgICB0ZXh0OiBcIlRPVUNIIFNDUkVFTlwiLFxuICAgICAgICAgIGZpbGw6ICd3aGl0ZScsXG4gICAgICAgICAgc3Ryb2tlOiAnYmxhY2snLFxuICAgICAgICAgIHN0cm9rZVdpZHRoOiA2LFxuICAgICAgICAgIGZvbnRTaXplOiA1MCxcbiAgICAgICAgfVxuICAgICAgICBuZXcgTGFiZWwobGFiZWxPcHRpb25zKVxuICAgICAgICAgIC5zZXRQb3NpdGlvbih0aGlzLndpZHRoIC8gMiwgdGhpcy5oZWlnaHQgKiAwLjcpXG4gICAgICAgICAgLmFkZENoaWxkVG8odGhpcy5mb3JlZ3JvdW5kKTtcbiAgICAgIH0pO1xuICB9XG59XG5cbi8vTWFuYWdlclNjZW5l44Gn5L2/55So5Ye65p2l44KL5qeY44Gr44GZ44KL54K6XG4vLyB3aW5kb3cuTWFpblNjZW5lID0gTWFpblNjZW5lO1xuIiwiaW1wb3J0IHsgTG9hZGluZ1NjZW5lLCBNYW5hZ2VyU2NlbmUgfSBmcm9tIFwicGhpbmEuanMvYnVpbGQvcGhpbmEuZXNtXCI7XG5pbXBvcnQgeyBBc3NldENhdGFsb2cgfSBmcm9tIFwiLi4vYXNzZXRzL0Fzc2V0Q2F0YWxvZ1wiO1xuaW1wb3J0IHsgR2FtZVRpdGxlU2NlbmUgfSBmcm9tIFwiLi9HYW1lVGl0bGVTY2VuZVwiO1xuaW1wb3J0IHsgTWFpblNjZW5lIH0gZnJvbSBcIi4vTWFpblNjZW5lXCI7XG5cbmV4cG9ydCBjbGFzcyBTY2VuZUZsb3cgZXh0ZW5kcyBNYW5hZ2VyU2NlbmUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBzdGFydExhYmVsOiBcImxvYWRpbmdcIixcbiAgICAgIHNjZW5lczogW3tcbiAgICAgICAgbGFiZWw6IFwibG9hZGluZ1wiLFxuICAgICAgICBjbGFzc05hbWU6IExvYWRpbmdTY2VuZSxcbiAgICAgICAgbmV4dExhYmVsOiBcInRpdGxlXCIsXG4gICAgICAgIGFyZ3VtZW50czoge1xuICAgICAgICAgIGFzc2V0czogQXNzZXRDYXRhbG9nLFxuICAgICAgICB9LFxuICAgICAgfSx7XG4gICAgICAgIGxhYmVsOiBcInRpdGxlXCIsXG4gICAgICAgIGNsYXNzTmFtZTogR2FtZVRpdGxlU2NlbmUsXG4gICAgICAgIG5leHRMYWJlbDogXCJtYWluXCIsXG4gICAgICAgIGFyZ3VtZW50czoge1xuICAgICAgICAgIHRpdGxlOiBcIlBISU5BUFkgQklSRCFcIlxuICAgICAgICB9LFxuICAgICAgfSx7XG4gICAgICAgIGxhYmVsOiBcIm1haW5cIixcbiAgICAgICAgY2xhc3NOYW1lOiBNYWluU2NlbmUsXG4gICAgICAgIG5leHRMYWJlbDogXCJ0aXRsZVwiLFxuICAgICAgfV0sXG4gICAgfSk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9