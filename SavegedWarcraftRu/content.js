function getFontPath(path) {
    return `${__dirname}/fonts/${path}`;
}

const fonts = {
    Roboto: {
        normal: getFontPath('Roboto-Regular.ttf'),
        bold: getFontPath('Roboto-Medium.ttf'),
        italics: getFontPath('Roboto-Italic.ttf'),
        bolditalics: getFontPath('Roboto-MediumItalic.ttf')
    },
};

function getImagePath(path) {
    return `${__dirname}/pic/${path}`;
}

function getTitlePageContent() {
    return [
        {
            text: 'Savaged',
            fontSize: 50,
            alignment: 'center',
            bold: true,
        },
        {
            image: getImagePath('logo.png'),
            width: 500,
            margin: [0, 0, 0, 15],
            alignment: 'center',
        },
        {
            table: {
                body: [
                    [
                        'Конверсия правил:',
                        { text: 'Mike McCall', alignment: 'center', margin: [0, 7, 0, 0] }
                    ],
                    [
                        'Консультация по сеттингу:',
                        { text: 'Mark Cazakoff', alignment: 'center', margin: [0, 7, 0, 0] }]
                    ,
                    [
                        'Тестировщики:',
                        { text: `Mark “Murloc Boy” Cazakoff, Craig “McClintock” Buckmaster, Liza “Wo Ping” Fletcher, Mike McCall, Matt “Shadowstrike” Shorten, Chris “The Other Proudmoore” Wagner, Richard “I Like Orcs!” Jensen and Matt “Sic’Em” Valgardson`, alignment: 'center' }
                    ],
                    [
                        'Перевод:',
                        {
                            text: 'Алексей Петров aka DarkArkLord',
                            link: 'https://vk.com/whendrearilydarklord',
                            decoration: 'underline',
                            alignment: 'center',
                        }
                    ],
                ]
            },
            margin: [0, 0, 0, 15],
        },
        {
            text: [
                'В этом документе представлена конверсия сеттинга Warcraft под правила ',
                { text: 'Savage Worlds', bold: true, },
                '. Здесь представлено мало (либо вообще нет) информации о самом сеттинге, ибо он умело описан как Blizzard Entertainment в мануале Warcraft III, так и Sword and Sorcery Games в их ',
                { text: 'Warcraft RPG', bold: true, },
                '. Я крайне рекомендую последний в качестве справочного материала. Однако, когда компьютерная игра и материал S&S разошлись, я отдал предпочтение первому. Если бы я хотел играть в D&D Warcraft, я бы вообще не стал Savaged, не так ли?',
            ],
            alignment: 'center',
            margin: [0, 0, 0, 15],
        },
        {
            text: [
                { text: 'Примечание переводчика', decoration: 'underline', },
                ': так как перевод сделан специально для тех, кому не комфортно пользоваться книгами на английском языке, страницы английской книги правил ',
                { text: 'Savage Worlds', bold: true, },
                ' в формате (see SW p. X) будут заменены на страницы переводов от Студии 101, в формате (см. SW1 с. A, SW2 с. B), где SW1 - это ',
                { text: 'Savage Worlds: Дневник авантюриста', bold: true, },
                ' 2011 года (ISBN 978-5-905471-04-9), а SW2 - ',
                { text: 'Savage Worlds: Дневник авантюриста: Правила игры', bold: true, },
                ' 2016 года (ISBN 978-5-905471-29-2).',
            ],
            alignment: 'center',
            margin: [0, 0, 0, 15],
        },
        {
            text: 'Оригинальный документ обновлен 28 марта 2004',
            alignment: 'center',
            bold: true,
        },
        {
            text: 'Перевод ?? ?? 2024, версия 0.2',
            alignment: 'center',
            bold: true,
            pageBreak: 'after',
        },
    ];
}

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
        font: 'Roboto',
        fontSize: 14,
    },
    content: [
        ...getTitlePageContent(),
        {
            text: 'This is a bold text',
            bold: true
        },
        {
            text: 'This is an italic text',
            italics: true
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
            color: "blue"
        },
        {
            text: 'Тест',
        },
        {
            text: 'Тест',
            bold: true
        },
        {
            text: 'Тест',
            italics: true
        },
        'Тест',
        'Тест',
        'Тест',
    ],
};

module.exports = {
    fonts,
    docDefinition,
};