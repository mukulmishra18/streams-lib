var fs = require('fs');
var Streams = require('../../streams.lib.bundle.js');
var ReadableStream = Streams.ReadableStream;

describe('ReadableStream', function() {
  it('Should stream chunk of data', function() {
    function makeReadableStream() {
      return new ReadableStream({
        start: function(controller) {
            controller.enqueue([1, 2, 3]);
        },

        cancel: function() {
          controller.close();
        }
      });
    }

    var readableStream = makeReadableStream();
    var reader = readableStream.getReader();

    reader.read().then(function (result) {
      expect(typeof result).toEqual('object');
      expect(typeof result.done).toEqual('boolean');
      expect(result.value).toEqual([1, 2, 3]);
      if(result.done) {
        console.log('done...');
      } else {
        console.log("Chunk read is", result.value);
      }
    });  
  });
});
