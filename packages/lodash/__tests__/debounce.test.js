'use strict';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { debounce } = require('..');

describe('test debounce function ', () => {
  let result = 0;
  const cbs = {
    cb1: () => console.log('cb1 '),
    cb2: () => console.log('cb2 '),
  };
  beforeEach(() => {
    function resign(val, resolve, cb) {
      cbs[cb]();
      result = val;
      resolve(val);
    }
    return new Promise((resolve) => {
      const x = debounce(resign, 10);
      spyOn(cbs, 'cb1');
      spyOn(cbs, 'cb2');

      x(1, resolve, 'cb1');
      x(2, resolve, 'cb2');
    }).then((x) => {
      console.log(`resolved `, x);
    });
  });

  it(`test debounce twice`, () => {
    expect(cbs.cb1).not.toHaveBeenCalled();
    expect(cbs.cb2).toHaveBeenCalled();
    expect(result).toBe(2);
  });
});
