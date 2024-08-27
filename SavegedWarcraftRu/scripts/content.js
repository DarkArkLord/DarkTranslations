let docDefinition = {
    info: {
        title: 'Savaged Warcraft Ru - v0.2',
        author: 'Dark Ark Lord',
        // subject: 'subject of document',
        // keywords: 'keywords for document',
    },
    pageSize: 'A4',
    pageOrientation: 'portrait',
    content: [
        'Hello, PDFMake!', // A simple text element
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