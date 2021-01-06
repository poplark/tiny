'use strict';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const lodash = require('../');
const { flatten } = lodash;

describe('lodash flatten', () => {
  it('and array should be flatten', () => {
    expect(flatten([1, 2, [3, 4, [5, 6, [7, 8]]]]).length).toBe(5);
    expect(flatten([1, 2, [3, 4, [5, 6, [7, 8]]]], true).length).toBe(8);
  });
});

describe('lodash async function', () => {
  let value = [];
  let value2 = [];
  beforeEach((done) => {
    setTimeout(() => {
      value = flatten([1, 2, [3, 4, [5, 6, [7, 8]]]], true);
      done();
    }, 0);
  });

  beforeEach(() => {
    return Promise.resolve(flatten([1, [2, [3, [4]], 5]], true)).then((x) => {
      value2 = x;
      return x;
    });
  });

  it('should support async execution of test preparation and expectations', () => {
    expect(value.length).toBe(8);
    expect(value2.length).toBe(5);
  });
});
