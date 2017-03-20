# streams-lib
Streams API polyfill for PDF.js project.

This project aims to create polyfill of Streams API, that can be used in PDF.js
for networking and rendering purpose. Using streaming data into PDF.js can improve
performance in terms of speed and memory.

This project uses [reference implementation](https://github.com/whatwg/streams/tree/master/reference-implementation/lib) of streams standard to create Streams API polyfill.

# PDF.js

[PDF.js](https://github.com/mozilla/pdf.js) is a Portable Document Format (PDF)
viewer that is built with HTML5.

PDF.js is community-driven and supported by Mozilla Labs. Our goal is to
create a general-purpose, web standards-based platform for parsing and
rendering PDFs.

# Streams Standard

The [streams standard](https://github.com/whatwg/streams) provides APIs for
creating, composing, and consuming streams of data. These streams are designed
to map efficiently to low-level I/O primitives, and allow easy composition
with built-in backpressure and queuing.

The main spec is available at https://streams.spec.whatwg.org/.
