const PdfPrinter = require('pdfmake');
const http = require('http');
const fs = require("fs");

http.createServer((request, response) => {
    const { fonts, docDefinition } = require('./SavegedWarcraftRu/content');

    const printer = new PdfPrinter(fonts);
    var pdfDoc = printer.createPdfKitDocument(docDefinition);
    pdfDoc.pipe(response);
    pdfDoc.end();
}).listen(8080);