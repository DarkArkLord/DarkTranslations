const { WordCaseForm, WordCountForm, StatesTranslations, SkillsTranslations, HindrancesTranslations, EdgesTranslations, CreaturesTranslations } = require('../common/savageWorldsTranslations')

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
    styles: {
        header1: { fontSize: 26, bold: true, alignment: 'center' },
        header2: { fontSize: 22, bold: true, },
        header3: { fontSize: 18, bold: true, },
    },
    footer: function (currentPage, pageCount, pageSize) {
        return [
            { text: `стр. ${currentPage}`, bold: true, italic: true, alignment: 'right', margin: [0, 0, 10, 0] },
            { text: 'Savaged Warcraft Ru', bold: true, italic: true, alignment: 'left', margin: [10, 0, 0, 0] },
        ]
    },
    content: [
        getTitlePageContent(),
        getCharacterCreationContent(),
    ],
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
            margin: [0, 0, 0, 10],
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

function getCharacterCreationContent() {
    function getRacesContent() {
        function getAllianceRacesContent() {
            function getHumansRaceContent() {
                return [
                    {
                        text: [
                            { text: 'Люди (Humans)', bold: true },
                            ': см. книгу правил ',
                            { text: '(см. SW1 с. 21, SW2 с. 32)', bold: true, italic: true },
                        ]
                    }
                ];
            }

            function getDwarvesRaceContent() {
                return [
                    {
                        text: [
                            { text: 'Дворфы (Dwarves)', bold: true },
                            ': Дворфы — раса, склонная к технологиям, искусная в обращении с машинами и оружием. Однако в последнее время они отвернулись от своих изобретений и начали изучать наследие, которое им недавно открылось — детей Титанов.',
                        ]
                    },
                    {
                        ul: [
                            {
                                text: [
                                    'Как ',
                                    { text: 'Гном', bold: true },
                                    ' в книге правил ',
                                    { text: '(см. SW1 с. 20, SW2 с. 32)', bold: true, italic: true },
                                ]
                            },
                        ]
                    }
                ];
            }

            function getHighElvesRaceContent() {
                return [
                    {
                        text: [
                            { text: 'Высшие эльфы (Elves, High)', bold: true },
                            `: Высшие эльфы Кель'Таласа — долгоживущая раса, чья цивилизация построена на тайной магии.`,
                        ]
                    },
                    {
                        ul: [
                            {
                                text: [
                                    EdgesTranslations.getTranslationBuilder('Agile')
                                        .configure(true, false, false, true, false, false).create(),
                                    ': Эльфы грациозны и ловки. Они начинают с ',
                                    StatesTranslations.getTranslationBuilder('Agility', WordCaseForm.INSTRUMENTAL)
                                        .configure(true, false, false, true, false, false).create(),
                                    ' ',
                                    { text: 'd6', bold: true },
                                    ' вместо ',
                                    { text: 'd4', bold: true },
                                    '.',
                                ]
                            },
                            {
                                text: [
                                    EdgesTranslations.getTranslationBuilder('Черта')
                                        .configure(true, true, false, true, false, false).create(),
                                    ': Описание',
                                ]
                            },
                            {
                                text: [
                                    EdgesTranslations.getTranslationBuilder('Черта')
                                        .configure(true, true, false, true, false, false).create(),
                                    ': Описание',
                                ]
                            },
                            {
                                text: [
                                    EdgesTranslations.getTranslationBuilder('Черта')
                                        .configure(true, true, false, true, false, false).create(),
                                    ': Описание',
                                ]
                            },
                            {
                                text: [
                                    EdgesTranslations.getTranslationBuilder('Черта')
                                        .configure(true, true, false, true, false, false).create(),
                                    ': Описание',
                                ]
                            },
                        ]
                    }
                ];
            }

            return [
                { text: 'Альянс (The Alliance)', style: 'header2', },
                {
                    ul: [
                        getHumansRaceContent(),
                        getDwarvesRaceContent(),
                        getHighElvesRaceContent(),
                    ]
                },
            ];
        }

        function getHordeRacesContent() {
            return [
                { text: 'Орда (The Horde)', style: 'header2', },
                {
                    ul: [
                        'Test 1',
                        'Test 2',
                    ]
                },
            ];
        }

        function getSentinelsRacesContent() {
            return [
                { text: 'Стражи (The Sentinels)', style: 'header2', },
                {
                    ul: [
                        'Test 1',
                        'Test 2',
                    ]
                },
            ];
        }

        function getNeutralRacesContent() {
            return [
                { text: 'Нейтральные расы (Neutral Races)', style: 'header2', },
                {
                    ul: [
                        'Test 1',
                        'Test 2',
                    ]
                },
            ];
        }

        return [
            getAllianceRacesContent(),
            getHordeRacesContent(),
            getSentinelsRacesContent(),
            getNeutralRacesContent(),
        ];
    }

    return [
        {
            text: 'Расы (Races)',
            style: 'header1',
        },
        ...getRacesContent(),
    ];
}

module.exports = {
    fonts,
    docDefinition,
};