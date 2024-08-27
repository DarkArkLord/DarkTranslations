const PdfPrinter = require('pdfmake');
const http = require('http');

http.createServer((req, res) => {
    if (req.url == '/SavegedWarcraftRu') {
        const { fonts, docDefinition } = require('./SavegedWarcraftRu/content');

        const printer = new PdfPrinter(fonts);
        var pdfDoc = printer.createPdfKitDocument(docDefinition);
        pdfDoc.pipe(res);
        pdfDoc.end();

        return
    }

    // const { fonts, docDefinition } = require('./SavegedWarcraftRu/content');

    // const printer = new PdfPrinter(fonts);
    // var pdfDoc = printer.createPdfKitDocument(docDefinition);
    // pdfDoc.pipe(res);
    // pdfDoc.end();

    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end(`No content: ${req.url}`);
}).listen(8080);