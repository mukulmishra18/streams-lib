'use strict';

function rethrowAssertionErrorRejection(e) {
  // Used throughout the reference implementation, as `.catch(rethrowAssertionErrorRejection)`, to ensure any errors
  // get shown. There are places in the spec where we do promise transformations and purposefully ignore or don't
  // expect any errors, but assertion errors are always problematic.
  if (e && e.constructor === AssertionError) {
    setTimeout(() => {
      throw e;
    }, 0);
  }
};

class AssertionError extends Error {
  constructor(message) {
    super(message);
    this.message = message || '';
    this.name = 'AssertionError';
    this.stack = (new Error()).stack;
  }
}

function assert (value, message) {
  if (!value) {
    throw new AssertionError(message);
  }
}

module.exports = {
  rethrowAssertionErrorRejection,
  AssertionError,
  assert
}