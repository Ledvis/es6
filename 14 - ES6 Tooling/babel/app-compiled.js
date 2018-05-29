'use strict';

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ages = 100;
var people = ['Zhenya', 'Olga'];

var fullName = people.map(function (name) {
  return name + ' Boss';
});

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = fullName[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    name = _step.value;

    console.log(name);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var _x$y$a$b = { x: 1, y: 2, a: 3, b: 4 },
    x = _x$y$a$b.x,
    y = _x$y$a$b.y,
    z = _objectWithoutProperties(_x$y$a$b, ['x', 'y']);

console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }
