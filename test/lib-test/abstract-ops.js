'use strict';
const test = require('tape-catch');
const { IsReadableStreamDisturbed } = require('../../readable-stream.js');

test('IsReadableStreamDisturbed returns true for an empty non-closed stream on which read() has been called', t => {
  const rs = new ReadableStream();

  t.equal(IsReadableStreamDisturbed(rs), false, 'rs should not be disturbed on construction');

  const reader = rs.getReader();
  t.equal(IsReadableStreamDisturbed(rs), false,
               'getReader() call has no effect on whether a stream is disturbed or not');

  reader.read();
  t.equal(IsReadableStreamDisturbed(rs), true, 'rs should be disturbed after read() call');

  t.end();
});

test('IsReadableStreamDisturbed returns true for an empty non-closed stream on which cancel() has been called', t => {
  const rs = new ReadableStream();

  t.equal(IsReadableStreamDisturbed(rs), false, 'rs should not be disturbed on construction');

  const reader = rs.getReader();
  t.equal(IsReadableStreamDisturbed(rs), false,
               'getReader() call has no effect on whether a stream is disturbed or not');

  reader.cancel();
  t.equal(IsReadableStreamDisturbed(rs), true, 'rs should be disturbed after cancel() call');

  t.end();
});

test('IsReadableStreamDisturbed returns true for a closed stream on which read() has been called', t => {
  const rs = new ReadableStream({
    start(c) {
      c.close();
    }
  });

  t.equal(IsReadableStreamDisturbed(rs), false, 'rs should not be disturbed on construction');

  const reader = rs.getReader();
  t.equal(IsReadableStreamDisturbed(rs), false,
               'getReader() call has no effect on whether a stream is disturbed or not');

  reader.read();
  t.equal(IsReadableStreamDisturbed(rs), true, 'rs should be disturbed after read() call');

  t.end();
});

test('IsReadableStreamDisturbed returns true for a closed stream on which cancel() has been called', t => {
  const rs = new ReadableStream({
    start(c) {
      c.close();
    }
  });

  t.equal(IsReadableStreamDisturbed(rs), false, 'rs should not be disturbed on construction');

  const reader = rs.getReader();
  t.equal(IsReadableStreamDisturbed(rs), false,
               'getReader() call has no effect on whether a stream is disturbed or not');

  reader.cancel();
  t.equal(IsReadableStreamDisturbed(rs), true, 'rs should be disturbed after cancel() call');

  t.end();
});

test('IsReadableStreamDisturbed returns true for an errored stream on which read() has been called', t => {
  const rs = new ReadableStream({
    start(c) {
      c.error(new Error('waffles'));
    }
  });

  t.equal(IsReadableStreamDisturbed(rs), false, 'rs should not be disturbed on construction');

  const reader = rs.getReader();
  t.equal(IsReadableStreamDisturbed(rs), false,
               'getReader() call has no effect on whether a stream is disturbed or not');

  reader.read();
  t.equal(IsReadableStreamDisturbed(rs), true, 'rs should be disturbed after read() call');

  t.end();
});

test('IsReadableStreamDisturbed returns true for an errored stream on which cancel() has been called', t => {
  const rs = new ReadableStream({
    start(c) {
      c.error(new Error('waffles'));
    }
  });

  t.equal(IsReadableStreamDisturbed(rs), false, 'rs should not be disturbed on construction');

  const reader = rs.getReader();
  t.equal(IsReadableStreamDisturbed(rs), false,
               'getReader() call has no effect on whether a stream is disturbed or not');

  reader.cancel();
  t.equal(IsReadableStreamDisturbed(rs), true, 'rs should be disturbed after cancel() call');

  t.end();
});
