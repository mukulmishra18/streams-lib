var fs = require('fs');
var Streams = require('../../streams.lib.bundle.js');
var url = '../pdfs/compressed.tracemonkey-pldi-09.pdf';
var ReadableStream = Streams.ReadableStream;

describe('ReadableStream', function() {
  it('Should stream chunk of data', function() {
    function makeReadableFileStream(filename) {
      var fd;

      return new ReadableStream({
        start: function(controller) {
          return fs.open(filename, 'r', function(err, data) {
            if(err) throw err;
            fd = data;
            controller.enqueue(data);
          });
        },

        cancel: function() {
          controller.close();
        }
      });
    }

    var readableStream = makeReadableFileStream(url);
    var reader = readableStream.getReader();

    reader.read().then(function (result) {
      expect(typeof result).toEqual('Object');
      expect(typeof result.done).toEqual('boolean');
      if(result.done) {
        console.log('done...');
      } else {
        console.log("Chunk read is", result.value);
      }
    });  
  });
});
