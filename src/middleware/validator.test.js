'use strict';

const validator = require('./validator');

describe('validator', () => {
  let req = {query: {person: 'name'}};
  let res = {};
  let next = jest.fn();
  test('throws an error as expected', () => {
    // req = { query: { person: 'name'} };
    validator(req, res, next);

    expect(next).toHaveBeenCalledWith('please enter a valid name');
  });

  test('runs successfully', () => {
    req = { params: { person: 'name' } };
    validator(req, res, next);

    expect(next).toHaveBeenCalledWith('please enter a valid name');
  });

});
