'use strict';
const glob = require('glob');
const path = require('path');

const { ReadableStream } = require('./readable-stream.js');
const { WritableStream } = require('./writable-stream.js');
const { TransformStream } = require('./transform-stream.js');
const ByteLengthQueuingStrategy = require('./byte-length-queuing-strategy.js');
const CountQueuingStrategy = require('./count-queuing-strategy.js');

global.ReadableStream = ReadableStream;
global.WritableStream = WritableStream;
global.ByteLengthQueuingStrategy = ByteLengthQueuingStrategy;
global.CountQueuingStrategy = CountQueuingStrategy;
global.TransformStream = TransformStream;

if (process.argv.length === 2) {
  const tests = glob.sync(path.resolve(__dirname, 'test/lib-test/*.js'));
  tests.forEach(require);
} else {
  glob.sync(path.resolve(process.argv[2])).forEach(require);
}
