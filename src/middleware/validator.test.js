'use strict';

const validator = require('./validator');

describe('validator', () => {
  let req = {};
  let res = {};
  let next = jest.fn();
  test('throws an error as expected', () => {
    req = { query: { name: null }};
    validator(req, res, next);

    expect(next).toHaveBeenCalledWith('please enter a valid name');
  });

  test('runs successfully', () => {
    req = { query: { name: 'name' }};
    validator(req, res, next);

    expect(next).toHaveBeenCalledWith('please enter a valid name');
  });

});
