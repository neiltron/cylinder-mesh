// usage:
// `const mesh = generateTubeMesh();`

// or with optional params:
// `const mesh = generateTubeMesh(1, 1, 10);`

export default (radius = 1, height = 1, sides = 5) => {
  const points = sides * height * 6;
  const step = (Math.PI * 2) / sides;
  let angle = 0;


  // generate points
  const positions = Array(points).fill([0, 0, 0]).map((el, index) => {
    const _index = index / sides;

    if (index % sides === 0) {
      angle = 0;
    }

    const vector = [
      Math.sin(angle) * radius - (radius / 2),
      Math.floor(_index),
      Math.cos(angle) * radius - (radius / 2)
    ];

    angle += step;

    return vector;

  });

  // connect lines with cells
  const cells = [];

  for (let i = 0; i < points / 2; i += sides) {
    for (let j = 0; j < sides; j++) {
      if (j === sides - 1) {
        cells.push(0 + j + i, sides * i, sides + j + i);
        cells.push(sides * i, sides + j + i, 1 + j + i);
      } else {
        cells.push(0 + j + i, 1 + j + i, sides + j + i);
        cells.push(1 + j + i, sides + j + i, (sides + 1) + j + i);
      }
    }
  }

  return {
    positions,
    cells
  };
};
