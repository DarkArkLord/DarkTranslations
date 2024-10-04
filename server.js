const PdfPrinter = require('pdfmake');
const http = require('http');
const fs = require("fs");

http.createServer((request, response) => {
    if (request.url == '/SavegedWarcraftRu') {
        const { fonts, docDefinition } = require('./SavegedWarcraftRu/content');

        const printer = new PdfPrinter(fonts);
        var pdfDoc = printer.createPdfKitDocument(docDefinition);
        pdfDoc.pipe(response);
        pdfDoc.end();

        return;
    }

    // res.writeHead(404, { 'Content-Type': 'text/plain' });
    // res.end(`No content: ${req.url}`);
    fs.createReadStream(`${__dirname}/index.html`).pipe(response);
}).listen(8080);