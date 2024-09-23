const paragraphOffset = 20; // leadingIndent

function getFontPath(path) {
    return `${__dirname}/fonts/${path}`;
}

function getImagePath(path) {
    return `${__dirname}/pic/${path}`;
}

function quickTextFormat(text, options = {}) {
    if (!text.includes('*')) {
        return { ...options, text };
    }

    // Splin input text by '*'
    const temp = text.split('*').flatMap(p => [p, '*']).filter(p => p.length > 0);
    temp.pop();

    // Join some '*'
    const tokenazed = [];
    let tokens = 0;
    for (const cur of temp) {
        if (cur == '*') {
            tokens++;
        } else {
            if (tokens > 0) {
                tokenazed.push('*'.repeat(tokens));
                tokens = 0;
            }
            tokenazed.push(cur);
        }
    }

    // Map parts to text
    const parts = [];
    const flags = { italics: false, bold: false, bolditalics: false };
    for (const cur of tokenazed) {
        if (cur == '*') {
            flags.italics = !flags.italics;
        } else if (cur == '**') {
            flags.bold = !flags.bold;
        } else if (cur == '***') {
            flags.bolditalics = !flags.bolditalics;
        } else {
            const data = { text: cur, };

            if (flags.bolditalics || flags.bold) {
                data.bold = true;
            }

            if (flags.bolditalics || flags.italics) {
                data.italics = true;
            }

            parts.push(data);
        }
    }

    return { ...options, text: parts };
}

function getTipText(lines) {
    return {
        layout: 'noBorders',
        table: {
            widths: ['*'],
            body: [
                [
                    {
                        stack: lines,
                        style: 'tip',
                        leadingIndent: paragraphOffset,
                    }
                ],
            ]
        },
        margin: [0, 5, 0, 5],
    };
}

function getHorizontalLine(color, height = 2, margin = 5, styles = {}) {
    return {
        svg: `<svg width="500" height="${height}" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="2" x2="500" y2="2" style="stroke:${color};stroke-width:${height + 1}" /></svg>`,
        width: 500,
        alignment: 'center',
        margin: [0, margin, 0, margin],
        ...styles,
    };
}

function getFromDict(dict, key) {
    return `${dict[key]} (${key})`;
}

module.exports = {
    paragraphOffset,
    getFontPath,
    getImagePath,
    quickTextFormat,
    getTipText,
    getHorizontalLine,
    getFromDict,
};