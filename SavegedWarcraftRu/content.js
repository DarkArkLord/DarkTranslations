const { WordCaseForm, WordCountForm, States, StatesTranslations, Skills, SkillsTranslations, Hindrances, HindrancesTranslations, Edges, EdgesTranslations, Creatures, CreaturesTranslations, Logger } = require('../common/savageWorldsTranslations');

function getFontPath(path) {
    return `${__dirname}/fonts/${path}`;
}

function getImagePath(path) {
    return `${__dirname}/pic/${path}`;
}

function quickTextFormat(text, options = {}) {
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
            parts.push({
                text: cur,
                bold: flags.bolditalics || flags.bold,
                italics: flags.bolditalics || flags.italics,
            });
        }
    }

    return { ...options, text: parts };
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
            { text: `стр. ${currentPage}`, bold: true, italics: true, alignment: 'right', margin: [0, 0, 10, 0] },
            { text: 'Savaged Warcraft Ru', bold: true, italics: true, alignment: 'left', margin: [10, 0, 0, 0] },
        ]
    },
    content: [
        getTitlePageContent(),
        getCharacterCreationContent(),
        // LOGGER
        Logger.toPdf(),
    ],
};

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
        quickTextFormat('В этом документе представлена конверсия сеттинга Warcraft под правила **Savage Worlds**. Здесь представлено мало (либо вообще нет) информации о самом сеттинге, ибо он умело описан как Blizzard Entertainment в мануале Warcraft III, так и Sword and Sorcery Games в их **Warcraft RPG**. Я крайне рекомендую последний в качестве справочного материала. Однако, когда компьютерная игра и материал S&S разошлись, я отдал предпочтение первому. Если бы я хотел играть в D&D Warcraft, я бы вообще не стал Savaged, не так ли?', { alignment: 'center', margin: [0, 0, 0, 10], }),
        {
            text: [
                { text: 'Примечание переводчика', decoration: 'underline', },
                quickTextFormat(': так как перевод сделан специально для тех, кому не комфортно пользоваться книгами на английском языке, страницы английской книги правил **Savage Worlds** в формате *(see SW p. X)* будут заменены на страницы переводов от Студии 101, в формате *(см. SW1 с. A, SW2 с. B)*, где SW1 - это **Savage Worlds: Дневник авантюриста** 2011 года (ISBN 978-5-905471-04-9), а SW2 - **Savage Worlds: Дневник авантюриста: Правила игры** 2016 года (ISBN 978-5-905471-29-2).'),
            ],
            alignment: 'center',
            margin: [0, 0, 0, 15],
        },
        {
            text: 'Оригинальный документ обновлен 29 марта 2005',
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
                    quickTextFormat('**Люди (Humans)**: см. книгу правил ***(см. SW1 с. 21, SW2 с. 32)***'),
                ];
            }

            function getDwarvesRaceContent() {
                return [
                    {
                        text: quickTextFormat('**Дворфы (Dwarves)**: Дворфы — раса, склонная к технологиям, искусная в обращении с машинами и оружием. Однако в последнее время они отвернулись от своих изобретений и начали изучать наследие, которое им недавно открылось — детей Титанов.'),
                    },
                    {
                        ul: [
                            quickTextFormat('Как в **Гном** книге правил ***(см. SW1 с. 20, SW2 с. 32)***'),
                        ]
                    }
                ];
            }

            function getHighElvesRaceContent() {
                return [
                    quickTextFormat(`**Высшие эльфы (Elves, High)**: Высшие эльфы Кель'Таласа — долгоживущая раса, чья цивилизация построена на тайной магии.`),
                    {
                        ul: [
                            {
                                text: [
                                    { text: 'Ловкий (Agile)', bold: true },
                                    ': Эльфы грациозны и ловки. Они начинают с ',
                                    StatesTranslations.pdf(States.Agility, WordCaseForm.INSTRUMENTAL).format(true, false).create(),
                                    quickTextFormat(' **d6** вместо **d4**.'),
                                ]
                            },
                            {
                                text: [
                                    HindrancesTranslations.pdf(Hindrances.Cautious).showOriginal().format(true, false).create(),
                                    ': Их долгая жизнь и консервативная культура заставляют высших эльфов рассматривать вещи медленно и всесторонне. У них есть изъян ',
                                    HindrancesTranslations.pdf(Hindrances.Cautious).showOriginal().showPages(true).format(true, false).create(),
                                    '.',
                                ]
                            },
                            {
                                text: [
                                    EdgesTranslations.pdf(Edges.LowLightVision).showOriginal().format(true, false).create(),
                                    quickTextFormat(': Глаза персонажа усиливают (amplify) свет, словно кошачьи, и позволяют видеть в темноте. Он не получает штрафов к *проверкам атаки* в *темноте* и *сумраке*.'),
                                ]
                            },
                            {
                                text: [
                                    { text: 'Зависимость от магии (Magic Addiction)', bold: true },
                                    quickTextFormat(': Насыщенная магией культура высших эльфов предрасполагает их к зависимости от тайной магии. Они получают штраф **-2** к броску '),
                                    StatesTranslations.pdf(States.Spirit, WordCaseForm.GENITIVE).format(true, false).create(),
                                    quickTextFormat(', чтобы противостоять зависимости от тайной магии. Они также получают штраф **-2** к '),
                                    StatesTranslations.pdf(States.Charisma, WordCaseForm.DATIVE).format(true, false).create(),
                                    ', когда имеют дело с ночными эльфами и тауренами, которые могут чувствовать их связь с тайной магией и находят их отвратительными.'
                                ]
                            },
                            {
                                text: [
                                    { text: 'Способность к магии (Magic Aptitude)', bold: true },
                                    ': Культура высших эльфов пропитана магией. Они начинают с навыком ',
                                    SkillsTranslations.pdf(Skills.Spellcasting).format(true, false).create(),
                                    quickTextFormat(' **d4**  и для улучшения '),
                                    SkillsTranslations.pdf(Skills.Spellcasting, WordCaseForm.GENITIVE).format(true, false).create(),
                                    ' считают свою ',
                                    StatesTranslations.pdf(States.Smarts, WordCaseForm.ACCUSATIVE).format(true, false).create(),
                                    ' выше на один кубик.',
                                ]
                            },
                        ]
                    }
                ];
            }

            function getBloodElvesRaceContent() {
                return [
                    {
                        text: [
                            { text: 'Эльфы крови (Elves, Blood)', bold: true },
                            `: Эльфы крови, по сути, являются высшими эльфами и разделяют большинство черт своих более спокойных собратьев. Однако их поиски Мести поглотили их. Они получают изъян `,
                            HindrancesTranslations.pdf(Hindrances.Vengeful).showOriginal().format(true, false).create(),
                            ` вместо `,
                            HindrancesTranslations.pdf(Hindrances.Cautious).showOriginal().format(true, false).create(),
                            '.'
                        ]
                    },
                ];
            }

            function getGnomesRaceContent() {
                return [
                    quickTextFormat(`**Гномы (Gnomes)**: Этот крошечный народ самый инновационный в мире Азерота (за исключением, возможно, гоблинов). Они немного застенчивы, но очень увлечены своей техникой.`),
                    {
                        ul: [
                            {
                                text: [
                                    { text: 'Гениальный (Brilliant)', bold: true },
                                    ': Гномы начинают со ',
                                    StatesTranslations.pdf(States.Smarts, WordCaseForm.INSTRUMENTAL).format(true, false).create(),
                                    quickTextFormat(' **d6** вместо **d4**, что отражает их острый ум.'),
                                ]
                            },
                            {
                                text: [
                                    { text: 'Маленький (Small)', bold: true },
                                    quickTextFormat(': Гномы в среднем ниже 4 футов ростом. Из-за небольшого размера их **Стойкость** уменьшена на 1. Их короткие ноги дают им **Шаг** **4**.'),
                                ]
                            },
                            {
                                text: [
                                    { text: 'Мастер на все руки (Tinker)', bold: true },
                                    ': Гномы от природы искусны в работе с техникой. Они начинают с ',
                                    SkillsTranslations.pdf(Skills.Repair, WordCaseForm.INSTRUMENTAL).format(true, false).create(),
                                    quickTextFormat(' **d4** и для улучшения '),
                                    SkillsTranslations.pdf(Skills.Repair, WordCaseForm.ACCUSATIVE).format(true, false).create(),
                                    ' считают свою ',
                                    StatesTranslations.pdf(States.Smarts, WordCaseForm.ACCUSATIVE).format(true, false).create(),
                                    ' выше на один кубик.',
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
                        getBloodElvesRaceContent(),
                        getGnomesRaceContent(),
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