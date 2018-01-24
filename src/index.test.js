import { expect } from 'chai';
import generateCylinderMesh from './';
describe('generateCylinderMesh', () => {
  it('should match expected cells output for 5 sided cylinder', () => {
    const mesh = generateCylinderMesh(1, 1, 5);
    const expected = [
      0, 1, 5,
      1, 5, 6,
      1, 2, 6,
      2, 6, 7,
      2, 3, 7,
      3, 7, 8,
      3, 4, 8,
      4, 8, 9,
      4, 0, 9,
      0, 9, 5,
      5, 6, 10,
      6, 10, 11,
      6, 7, 11,
      7, 11, 12,
      7, 8, 12,
      8, 12, 13,
      8, 9, 13,
      9, 13, 14,
      9, 25, 14,
      25, 14, 10,
      10, 11, 15,
      11, 15, 16,
      11, 12, 16,
      12, 16, 17,
      12, 13, 17,
      13, 17, 18,
      13, 14, 18,
      14, 18, 19,
      14, 50, 19,
      50, 19, 15
    ];

    expect(mesh.cells).to.deep.equal(expected);
  });
});
