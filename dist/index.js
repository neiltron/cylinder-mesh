"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

// usage:
// `const mesh = generateTubeMesh();`

// or with optional params:
// `const mesh = generateTubeMesh(1, 1, 10);`

exports.default = function () {
  var radius = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var sides = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;

  var points = sides * height * 6;
  var step = Math.PI * 2 / sides;
  var angle = 0;

  // generate points
  var positions = Array(points).fill([0, 0, 0]).map(function (el, index) {
    var _index = index / sides;

    if (index % sides === 0) {
      angle = 0;
    }

    var vector = [Math.sin(angle) * (radius / 2.0), _index, Math.cos(angle) * (radius / 2.0)];

    angle += step;

    return vector;
  });

  // connect lines with cells
  var cells = [];

  for (var i = 0; i < points / 2; i += sides) {
    for (var j = 0; j < sides; j++) {

      // if last cell in row, connect back to
      // first side to complete tunnel.
      if (j === sides) {
        cells.push([j + i, sides * i, sides + j + i]);
        cells.push([sides * i, sides + j + i, 1 + j + i]);
      } else {
        cells.push([j + i, j + i + 1, sides + j + i]);
        cells.push([j + i + 1, sides + j + i, sides + 1 + j + i]);
      }
    }
  }

  return {
    positions: positions,
    cells: cells
  };
};