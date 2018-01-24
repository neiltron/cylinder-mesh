# cylinder-mesh

Basic mesh generator for building straight tubes/cylinders. It allows for specifying radius, height, and a number of sides.

### Usage

```
import generateCylinderMesh from 'cylinder-mesh';

const mesh = generateCylinderMesh();

// outputs { positions: [...], cells: [...] }
```

By default, this will give you a cylinder with 5 sides and a height/radius of 1. You can also pass different values:

`generateCylinderMesh(radius, height, numSides);`


### License

[MIT](https://github.com/neiltron/cylinder-mesh/blob/master/LICENSE)