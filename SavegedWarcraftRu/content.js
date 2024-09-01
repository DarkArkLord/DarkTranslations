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
        header2: { fontSize: 22, bold: true, alignment: 'center', },
        header3: { fontSize: 18, bold: true, },
        header4: { fontSize: 14, bold: true, },
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
                                    quickTextFormat(': Эльфы грациозны и ловки. Они начинают с **Ловкостью** **d6** вместо **d4**.'),
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
                                    quickTextFormat(': Глаза персонажа усиливают свет, словно кошачьи, и позволяют видеть в темноте. Он не получает штрафов к *проверкам атаки* в *темноте* и *сумраке*.'),
                                ]
                            },
                            {
                                text: [
                                    { text: 'Зависимость от магии (Magic Addiction)', bold: true },
                                    quickTextFormat(': Насыщенная магией культура высших эльфов предрасполагает их к зависимости от тайной магии. Они получают штраф **-2** к броску **Характера**, чтобы противостоять '),
                                    { text: 'зависимости от тайной магии (TODO: ДОБАВИТЬ ССЫЛКУ И СТРАНИЦУ)', color: 'red' },
                                    quickTextFormat('. Они также получают штраф **-2** к **Харизме**, когда имеют дело с ночными эльфами и тауренами, которые могут чувствовать их связь с тайной магией и находят их отвратительными.'),
                                ]
                            },
                            {
                                text: [
                                    { text: 'Способность к магии (Magic Aptitude)', bold: true },
                                    ': Культура высших эльфов пропитана магией. Они начинают с навыком ',
                                    SkillsTranslations.pdf(Skills.Spellcasting).format(true, false).create(),
                                    quickTextFormat(' **d4**  и для улучшения '),
                                    SkillsTranslations.pdf(Skills.Spellcasting, WordCaseForm.GENITIVE).format(true, false).create(),
                                    quickTextFormat(' считают свою **Смекалку** выше на один кубик.'),
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
                                    quickTextFormat(': Гномы начинают со **Смекалкой** **d6** вместо **d4**, что отражает их острый ум.'),
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
                                    SkillsTranslations.pdf(Skills.Repair, WordCaseForm.GENITIVE).format(true, false).create(),
                                    quickTextFormat(' считают свою **Смекалку** выше на один кубик.'),
                                ]
                            },
                        ]
                    }
                ];
            }

            return [
                { text: 'Альянс (The Alliance)', style: 'header3', },
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
            function getOrksRaceContent() {
                return [
                    quickTextFormat(`**Орки (Orcs)**: Крепкий зеленокожий народ из мира Дуротар. Застряв в Азероте, они сбросили с себя насланное чернокнижниками кровавое безумие и вернулись к своим жестоким, но благородным традициям и шаманской магии прошлого.`),
                    {
                        ul: [
                            {
                                text: [
                                    { text: 'Грубый и эффективный (Rough and Ready)', bold: true },
                                    quickTextFormat(': Орки начинают с **Силой** и **Выносливостью** **d6** вместо **d4**.'),
                                ]
                            },
                            {
                                text: [
                                    { text: 'Дикое наследие (Savage Heritage)', bold: true },
                                    quickTextFormat(': Появившись в истории дикими и кровожадными захватчиками, орки получают штраф **-2** к **Харизме** при взаимодействии с расами не из Орды.'),
                                ]
                            },
                            {
                                text: [
                                    { text: 'Старые обиды (Old Grudges)', bold: true },
                                    quickTextFormat(': Культура орков по-прежнему жестока и склонна решать проблемы, уничтожая их. Орки ведут себя так, как будто у них есть изъян '),
                                    HindrancesTranslations.pdf(Hindrances.Vengeful).showOriginal().format(true, false).create(),
                                    quickTextFormat('. Это считается **мелким** изъяном при общении с другими членами Орды и **крупным** изъяном при общении со всеми остальными.'),
                                ]
                            },
                            {
                                text: [
                                    EdgesTranslations.pdf(Edges.Brawny).showOriginal().format(true, false).create(),
                                    quickTextFormat(': Благодаря своему крепкому телосложению орки получают черту '),
                                    EdgesTranslations.pdf(Edges.Brawny).showOriginal().format(true, false).create(),
                                    quickTextFormat(', которая дает им +1 к **Стойкости** и увеличивает предел нагрузки.'),
                                ]
                            },
                        ]
                    }
                ];
            }

            function getTaurensRaceContent() {
                return [
                    quickTextFormat(`**Таурены (Tauren)**: Таурены, коренные жители континента Калимдор, — огромные быколюди с культурой, основанной на тотемном шаманизме. Они объединились с орками, видя в них молодую культуру, нуждающуюся в надлежащем руководстве.`),
                    {
                        ul: [
                            {
                                text: [
                                    { text: 'Огромный зверь (Hulking Brute)', bold: true },
                                    quickTextFormat(': Таурены начинают игру с **Силой** **d8** и **Выносливостью** **d6**. После создания персонажа они могут повысить свою **Силу** до **d12+2**.'),
                                ]
                            },
                            {
                                text: [
                                    { text: 'Медлительность (Slow)', bold: true },
                                    quickTextFormat(': Огромная масса Тауренов мешает более тонким движениям. Они повышают свою **Ловкость** за двойную цену, как при создании персонажа, так и во время последующих улучшений.'),
                                ]
                            },
                            {
                                text: [
                                    { text: 'Рога (Horns)', bold: true },
                                    quickTextFormat(': Огромные рога Тауренов наносят **Сила+1** урона. Таурены могут атаковать своими рогами, как если бы они были верхом.'),
                                ]
                            },
                            {
                                text: [
                                    { text: 'Примитивы (Primitives)', bold: true },
                                    ': Культура Тауренов основана на природе, и поэтому у Тауренов есть изъян ',
                                    HindrancesTranslations.pdf(Hindrances.AllThumbs).showOriginal().format(true, false).create(),
                                    '.',
                                ]
                            },
                            {
                                text: [
                                    { text: 'Возвышающаяся громада (Towering Bulk)', bold: true },
                                    quickTextFormat(': Таурены получают **+3** к **Стойкости** из-за своего огромного размера (в среднем более 7.5 футов ростом). Однако ракой рост делает Тауренов легкой мишенью, поэтому все атаки по ним получают **+2**.'),
                                ]
                            },
                        ]
                    }
                ];
            }

            function getJungleTrollsRaceContent() {
                return [
                    quickTextFormat(`**Тролли джунглей (Trolls, Jungle)**: Тролли джунглей из клана Черного Копья объединились с Ордой в отплату за спасение Траллом. Информацию о троллях см. в разделе **Нейтральные расы**.`),
                ];
            }

            return [
                { text: 'Орда (The Horde)', style: 'header3', },
                {
                    ul: [
                        getOrksRaceContent(),
                        getTaurensRaceContent(),
                        getJungleTrollsRaceContent(),
                    ]
                },
            ];
        }

        function getSentinelsRacesContent() {
            function getNightElvesRaceContent() {
                return [
                    quickTextFormat(`**Ночные эльфы (Elves, Night)**:  Ночные эльфы (или калдорай, как они себя называют) — свирепая раса, живущая в лесах Калимдора. Они ненавидят тайную магию и развивают мощную связь с природой и полубогами Кенарием и Элуной. Ночные эльфы не могут обладать **Мистическим даром (Тайная магия) (Arcane Background (Arcane Magic))**.`),
                    {
                        ul: [
                            {
                                text: [
                                    { text: 'Ловкий (Agile)', bold: true },
                                    quickTextFormat(': Эльфы грациозны и ловки. Они начинают с **Ловкостью** **d6** вместо **d4**.'),
                                ]
                            },
                            {
                                text: [
                                    { text: 'Духовные (Spirited)', bold: true },
                                    quickTextFormat(': У ночных эльфов очень мистическая культура. Они начинают с **Характером** **d6** вместо **d4**.'),
                                ]
                            },
                            {
                                text: [
                                    HindrancesTranslations.pdf(Hindrances.AllThumbs).showOriginal().format(true, false).create(),
                                    quickTextFormat(': Связь с природой заставила ночных эльфов отказаться от пути технического прогресса. У них есть изъян '),
                                    HindrancesTranslations.pdf(Hindrances.AllThumbs).showOriginal().showPages(true).format(true, false).create(),
                                    '.'
                                ]
                            },
                            {
                                text: [
                                    EdgesTranslations.pdf(Edges.LowLightVision).showOriginal().format(true, false).create(),
                                    quickTextFormat(': Глаза персонажа усиливают свет, словно кошачьи, и позволяют видеть в темноте. Он не получает штрафов к *проверкам атаки* в *темноте* и *сумраке*.'),
                                ]
                            },
                            {
                                text: [
                                    { text: 'Одиночество (Solitary)', bold: true },
                                    quickTextFormat(': Ночные эльфы имеют долгую историю изоляции и недоверия к другим расам. Они получают штраф **-2** к **Харизме** при общении со всеми расами, не являющимися Стражами, за исключением тауренов.'),
                                ]
                            },
                            {
                                text: [
                                    { text: 'Слияние с Тенью (Shadowmeld)', bold: true },
                                    quickTextFormat(': Ночные эльфы получают бонус **+4** к проверкам '),
                                    SkillsTranslations.pdf(Skills.Stealth, WordCaseForm.GENITIVE).format(true, false).create(),
                                    ' ночью, сливаясь с темнотой.',
                                ]
                            },
                            {
                                text: [
                                    { text: 'Гордость (Proud)', bold: true },
                                    quickTextFormat(': Ночные эльфы имеют долгую и славную историю, в которой есть доля трагедий, которые калдорай (как они считают) превзошли. Таким образом, все ночные эльфы имеют изъян '),
                                    HindrancesTranslations.pdf(Hindrances.Stubborn).showOriginal().format(true, false).create(),
                                    ' в том, что касается их культуры и образа жизни.',
                                ]
                            },
                        ]
                    }
                ];
            }

            function getChildrenOfCenariusRaceContent() {
                return [
                    quickTextFormat(`**Дети Кенария (Children of Cenarius)**: Эти существа, похожие на кентавров с телом оленя, являющются потомками ночных эльфов и полубога-оленя Кенария. Женщины известны как Дриады, а более редкие мужчины являются Хранителями Рощи.`),
                    {
                        ul: [
                            {
                                text: [
                                    { text: 'Духовные (Spirited)', bold: true },
                                    quickTextFormat(': У ночных эльфов очень мистическая культура. Они начинают с **Характером** **d6** вместо **d4**.'),
                                ]
                            },
                            {
                                text: [
                                    { text: 'Дитя природы (Nature’s Child)', bold: true },
                                    quickTextFormat(': Все Дети Кенария имеют изъян '),
                                    HindrancesTranslations.pdf(Hindrances.AllThumbs).showOriginal().showPages(true).format(true, false).create(),
                                    '.',
                                ]
                            },
                            {
                                text: [
                                    { text: 'Кровь Бога (Blood of the God)', bold: true },
                                    quickTextFormat(': Все Дети Кенария имеют **Мистический дар (Чудеса): Магия природы (Arcane Background: Nature Magic (a form of Miracles))**. Кроме того, они начинают с **15** Пунктами Силы вместо **10**.'),
                                ]
                            },
                            {
                                text: [
                                    HindrancesTranslations.pdf(Hindrances.Outsider).showOriginal().format(true, false).create(),
                                    quickTextFormat(': Как хранители леса с божественной кровью, Дети Кенария чувствуют себя неуютно даже среди ночных эльфов. Из-за этого они получают **-2** к **Харизме**.'),
                                ]
                            },
                        ]
                    }
                ];
            }

            return [
                { text: 'Стражи (The Sentinels)', style: 'header3', },
                {
                    ul: [
                        getNightElvesRaceContent(),
                        getChildrenOfCenariusRaceContent(),
                    ]
                },
            ];
        }

        function getNeutralRacesContent() {
            function getGoblinsRaceContent() {
                return [
                    quickTextFormat(`**Гоблины (Goblins):** Этот маленький и хитрый народ когда-то была в союзе с орками, но теперь они продают свои технологические гаджеты и другие товары всем, кто заплатит.`),
                    {
                        ul: [
                            {
                                text: [
                                    { text: 'Хитрость (Cunning)', bold: true },
                                    quickTextFormat(': Гоблины начинают со **Смекалкой** **d6** вместо **d4**, чтобы отразить их врожденную хитрость.'),
                                ]
                            },
                            {
                                text: [
                                    { text: 'Маленький (Small)', bold: true },
                                    quickTextFormat(': Из-за небольшого размера **Выносливость** гоблинов уменьшена на 1. Их короткие ноги дают им **Шаг** **4**.'),
                                ]
                            },
                            {
                                text: [
                                    { text: 'Мастер на все руки (Tinker)', bold: true },
                                    quickTextFormat(': Гоблины начинают с **Ремонтом** **d4** и для улучшения **Ремонта** считают свою **Смекалку** выше на один кубик.'),
                                ]
                            },
                            {
                                text: [
                                    { text: 'Наемник (Mercenary)', bold: true },
                                    quickTextFormat(': Гоблины работают на того, кто больше заплатит, и все это знают. Они получают **-2** к **Харизме** всегда, ***за исключением случаев***, когда имеют дело с торговлей.'),
                                    '',
                                ]
                            },
                            {
                                text: [
                                    { text: 'Торгаш (Haggler)', bold: true },
                                    quickTextFormat(': Гоблины получают **+2** ко всем проверкам '),
                                    SkillsTranslations.pdf(Skills.Persuasion, WordCaseForm.GENITIVE).format(true, false).create(),
                                    ' и ',
                                    SkillsTranslations.pdf(Skills.Streetwise, WordCaseForm.GENITIVE).format(true, false).create(),
                                    ', когда торгуются или пытаются что-то купить или продать.',
                                ]
                            },
                            {
                                text: [
                                    HindrancesTranslations.pdf(Hindrances.Greedy).showOriginal().format(true, false).create(),
                                    quickTextFormat(': Гоблины воспитываются так, чтобы уважать только прибыль. У них есть изъян '),
                                    HindrancesTranslations.pdf(Hindrances.Greedy).showOriginal().showPages(true).format(true, false).create(),
                                    '.'
                                ]
                            },
                        ]
                    }
                ];
            }

            function getTrollsRaceContent() {
                return [
                    quickTextFormat(`**Тролли (Trolls):** Тролли — дикий и жестокий народ, делящийся на множество подвидов в зависимости от предпочитаемой территории. Тролли из разных регионов имеют немного отличающуюся культуру и разный цвет кожи. Наиболее распространенные типы троллей — лесные (зеленокожие, шаманские метатели топоров), джунглевые (синекожие копейщики и жрецы вуду) и ледяные (свирепые и дикие даже для троллей).`),
                    {
                        ul: [
                            {
                                text: [
                                    { text: 'Жилистый (Wiry)', bold: true },
                                    quickTextFormat(': Тролли начинают с **Силой** **d6** вместо **d4** из-за их плотной мускулатуры.'),
                                ]
                            },
                            {
                                text: [
                                    { text: 'Проворный (Nimble)', bold: true },
                                    quickTextFormat(': Тролли обладают естественной скоростью и координацией. Они начинают с **Ловкостью** **d6** вместо **d4**.'),
                                ]
                            },
                            {
                                text: [
                                    { text: 'Низкая Хитрость (Low Cunning)', bold: true },
                                    quickTextFormat(': Тролли примитивны в своих мыслительных процессах. Они повышают свою **Смекалку** за двойную цену, как при создании персонажа, так и во время последующих улучшений.'),
                                ]
                            },
                            {
                                text: [
                                    { text: 'Регенерация (Regeneration)', bold: true },
                                    ': Тролли обладают естественной способностью исцеляться от любых ран. Они делают бросок на Естественное исцеление каждый раунд.',
                                ]
                            },
                            {
                                text: [
                                    { text: 'Примитивный (Primitive)', bold: true },
                                    ': У троллей есть изъян ',
                                    HindrancesTranslations.pdf(Hindrances.AllThumbs).showOriginal().format(true, false).create(),
                                    '. Они редко используют что-то сложнее копья или метательного топора.'
                                ]
                            },
                            {
                                text: [
                                    { text: 'Большой (Large)', bold: true },
                                    quickTextFormat(': Тролли немного крупнее людей. Они получают **+1** к **Стойкости** из-за своего размера.'),
                                ]
                            },
                            {
                                text: [
                                    { text: 'Дикий (Savage)', bold: true },
                                    quickTextFormat(': Троллям не доверяет большинство рас, которые слишком хорошо знают их дикую хитрость, жажду крови и известный каннибализм. У троллей есть изъяны '),
                                    HindrancesTranslations.pdf(Hindrances.Bloodthirsty).showOriginal().format(true, false).create(),
                                    ' и ',
                                    HindrancesTranslations.pdf(Hindrances.Outsider).showOriginal().format(true, false).create(),
                                    '.'
                                ]
                            },
                            {
                                text: [
                                    { text: 'Охотник (Hunter)', bold: true },
                                    ': Тролли получают навык ',
                                    SkillsTranslations.pdf(Skills.Tracking).format(true, false).create(),
                                    quickTextFormat(' **d4** и для улучшения '),
                                    SkillsTranslations.pdf(Skills.Tracking, WordCaseForm.GENITIVE).format(true, false).create(),
                                    quickTextFormat(' считают свою **Смекалку** выше на один кубик.'),
                                ]
                            },
                        ]
                    }
                ];
            }

            function getPandarenRaceContent() {
                return [
                    quickTextFormat(`**Панадарены (Pandaren):** Эта раса двуногих панд родом с таинственного острова к западу от Калимдора, который они называют Пандария. Это миролюбивый народ, мастера как элегантных боевых искусств, так и варки эля.`),
                    {
                        ul: [
                            {
                                text: [
                                    { text: 'Неутомимый (Tireless)', bold: true },
                                    quickTextFormat(': Здоровые и крепкие пандарены начинают с **Выносливостью** **d6** вместо **d4**.'),
                                ]
                            },
                            {
                                text: [
                                    { text: 'Медвежьи ноги (Bear Legs)', bold: true },
                                    quickTextFormat(': У пандаренов **Шаг** **4**, если они не бегают на четвереньках. Если они это делают, их **Шаг** увеличивается до **6**.'),
                                ]
                            },
                            {
                                text: [
                                    { text: 'Альпинисты (Climbers)', bold: true },
                                    ': Пандарены — прирожденные скалолазы. Они получают навык ',
                                    SkillsTranslations.pdf(Skills.Climbing).format(true, false).create(),
                                    quickTextFormat(' **d4** и для улучшения '),
                                    SkillsTranslations.pdf(Skills.Climbing, WordCaseForm.GENITIVE).format(true, false).create(),
                                    quickTextFormat(' считают свою **Ловкость** выше на один кубик.'),
                                ]
                            },
                            {
                                text: [
                                    { text: 'Толстая шкура (Test)', bold: true },
                                    quickTextFormat(': У пандаренов толстые, пушистые шкуры, которые дают им **1** очко **Брони**.'),
                                ]
                            },
                            {
                                text: [
                                    HindrancesTranslations.pdf(Hindrances.Outsider).showOriginal().format(true, false).create(),
                                    quickTextFormat(': Будучи загадочными иностранцами, которые отказываются принимать чью-либо сторону, пандарены получают **-2** к своей **Харизме**.'),
                                ]
                            },
                            {
                                text: [
                                    { text: 'Естественное оружие (Natural Weapons)', bold: true },
                                    quickTextFormat(': Когти и укусы пандарена наносят **Сила+1** урон.'),
                                ]
                            },
                        ]
                    }
                ];
            }

            function getForsakenRaceContent() {
                return [
                    quickTextFormat(`**Отрекшиеся (Forsaken):** Отрекшиеся не являются расой как таковой. Это те, кто был воскрешен Плетью и освободился от контроля Короля-лича. Таким образом, они также получают преимущества людей или высших эльфов.`),
                    {
                        ul: [
                            {
                                text: [
                                    { text: 'Нежить (Undead)', bold: true },
                                    quickTextFormat(': Отрекшиеся получают все преимущества нежити ***(см. SW1 с. 136, SW2 с. 172)***.'),
                                ]
                            },
                            {
                                text: [
                                    { text: 'Ходячий труп (Walking Corpse)', bold: true },
                                    ': Отрекшиеся получают изъяны ',
                                    HindrancesTranslations.pdf(Hindrances.Outsider).showOriginal().format(true, false).create(),
                                    ' и ',
                                    HindrancesTranslations.pdf(Hindrances.Ugly).showOriginal().format(true, false).create(),
                                    '.',
                                ]
                            },
                            {
                                text: [
                                    { text: 'Бешеный (Frenzied)', bold: true },
                                    ': Все Отрекшиеся имеют черту ',
                                    EdgesTranslations.pdf(Edges.Berserk).showOriginal().format(true, false).create(),
                                    '. Однако они также страдают от изъяна ',
                                    HindrancesTranslations.pdf(Hindrances.Bloodthirsty).showOriginal().format(true, false).create(),
                                    '.',
                                ]
                            },
                        ]
                    }
                ];
            }

            return [
                { text: 'Нейтральные расы (Neutral Races)', style: 'header3', },
                {
                    ul: [
                        getGoblinsRaceContent(),
                        getTrollsRaceContent(),
                        getPandarenRaceContent(),
                        getForsakenRaceContent(),
                    ]
                },
            ];
        }

        return {
            stack: [
                {
                    text: 'Расы (Races)',
                    style: 'header2',
                },
                getAllianceRacesContent(),
                getHordeRacesContent(),
                getSentinelsRacesContent(),
                getNeutralRacesContent(),
            ],
            pageBreak: 'after',
        };
    }

    function getEdgesContent() {
        function createEdgeElement(name, requirements, text) {
            return {
                stack: [
                    EdgesTranslations.pdf(name).showOriginal().style('header4').create(),
                    {
                        text: [
                            { text: 'Требования', bold: true, },
                            ':',
                            ...insertSeparator(requirements, ','),
                        ],
                    },
                    {
                        text: text,
                    },
                ],
            };

            function* insertSeparator(items, separator) {
                if (items.length < 2) return items;
                yield items[0];
                for (const i in items) {
                    if (i == 0) continue;
                    yield separator;
                    yield items[i];
                }
            }
        }

        function getCombatEdgesContent() {
            return [
                { text: 'Боевые черты (Combat Edges)', style: 'header3', },
                // {
                //     stack: [ // Добавить функцию для этого
                //         EdgesTranslations.pdf(Edges.Defend).showOriginal().style('header4').create(),
                //         {
                //             text: [
                //                 { text: 'Требования', bold: true, },
                //                 ':',
                //                 EdgesTranslations.pdf(Edges.Seasoned).showOriginal().create(),
                //                 ', ',
                //                 EdgesTranslations.pdf(Edges.Block).showOriginal().create(),
                //             ],
                //         },
                //         'Some first text',
                //     ],
                // },
                createEdgeElement(Edges.Defend,
                    [
                        EdgesTranslations.pdf(Edges.Seasoned).showOriginal().create(),
                        EdgesTranslations.pdf(Edges.Block).showOriginal().create(),
                    ],
                    [
                        quickTextFormat('Вы научились мастерски пользоваться щитом. Теперь вы можете добавлять бонус **Брони** и **Защиты** от щита против всех атак, независимо от направления, с которого они наносятся. Ваш **Шаг** снижается до **2** при использовании этой черты.'),
                    ]
                ),
                '123',
            ];
        }

        function getPowerEdgesContent() {
            return [
                { text: 'Сверхъестественные черты (Power Edges)', style: 'header3', },
                '123',
            ];
        }

        function getProfessionalEdgesContent() {
            return [
                { text: 'Профессиональные черты (Professional Edges)', style: 'header3', },
                '123',
            ];
        }

        function getWeirdEdgesContent() {
            return [
                { text: 'Потусторонние черты (Weird Edges)', style: 'header3', },
                '123',
            ];
        }

        return {
            stack: [
                {
                    text: 'Новые Черты (New Edges)',
                    style: 'header2',
                },
                getCombatEdgesContent(),
                getPowerEdgesContent(),
                getProfessionalEdgesContent(),
                getWeirdEdgesContent(),
            ],
            pageBreak: 'after',
        };
    }

    return [
        {
            text: 'Создание персонажа (Character Creation)',
            style: 'header1',
        },
        getRacesContent(),
        getEdgesContent(),
    ];
}

module.exports = {
    fonts,
    docDefinition,
};