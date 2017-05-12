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

function AssertionError(message) {
  this.name = 'AssertionError';
  this.message = message || '';
  this.stack = (new Error()).stack;
}
AssertionError.prototype = Object.create(Error.prototype);
AssertionError.prototype.constructor = AssertionError;

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
