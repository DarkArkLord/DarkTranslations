const fonts = {
    Courier: {
        normal: 'Courier',
        bold: 'Courier-Bold',
        italics: 'Courier-Oblique',
        bolditalics: 'Courier-BoldOblique'
    },
    Helvetica: {
        normal: 'Helvetica',
        bold: 'Helvetica-Bold',
        italics: 'Helvetica-Oblique',
        bolditalics: 'Helvetica-BoldOblique'
    },
    Times: {
        normal: 'Times-Roman',
        bold: 'Times-Bold',
        italics: 'Times-Italic',
        bolditalics: 'Times-BoldItalic'
    },
    Symbol: {
        normal: 'Symbol'
    },
    ZapfDingbats: {
        normal: 'ZapfDingbats'
    }
};

const docDefinition = {
    info: {
        title: 'Savaged Warcraft Ru - v0.2',
        author: 'Dark Ark Lord',
        // subject: 'subject of document',
        // keywords: 'keywords for document',
    },
    pageSize: 'A4',
    pageOrientation: 'portrait',
    defaultStyle: {
      font: 'Times'
    },
    content: [
        'Hello, PDFMake! 1 2', // A simple text element
        {
            // under NodeJS (or in case you use virtual file system provided by pdfmake)
            // you can also pass file names here
            image: __dirname + '/pic/logo.png'
        },
        {
            text: 'This is a bold text',
            bold: true,
            style: 'normalText'
        },
        {
            text: 'This is an italic text',
            italics: true,
            style: 'normalText'
        },
        {
            text: [
                'This is a ',
                {
                    text: 'LINK',
                    bold: true,
                }
            ],
            link: 'https://example.com',
            style: 'normalText',
            color: "blue"
        },
    ],
};

module.exports = {
    fonts,
    docDefinition,
};