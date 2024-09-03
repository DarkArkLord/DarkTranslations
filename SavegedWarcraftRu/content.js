const { States, StatesTranslations, Skills, SkillsTranslations, Hindrances, HindrancesTranslations, Ranks, RanksTranslations, Edges, EdgesTranslations, Powers, PowersTranslations, } = require('../common/savageWorldsTranslations');

const SettingEdges = Object.freeze({
    Defend: 'Defend',
    ImprovedDefend: 'Improved Defend',
    RapidShot: 'Rapid Shot',
    ImprovedRapidShot: 'Improved Rapid Shot',
    StrafingRun: 'Strafing Run',
    TwoArrowsNocked: 'Two Arrows Nocked',
    HailOfArrows: 'Hail of Arrows',
    ArcaneUndead: 'Arcane Undead',
    BrillianceAura: 'Brilliance Aura',
    CaptureSpell: 'Capture Spell',
    ImprovedCaptureSpell: 'Improved Capture Spell',
    CreateUndead: 'Create Undead',
    DarkRitual: 'Dark Ritual',
    DrainSpell: 'Drain Spell',
    MagicalBeastForm: 'Magical Beast Form',
    SpellAura: 'Spell Aura',
    Artillerist: 'Artillerist',
    Cavalry: 'Cavalry',
    Druid: 'Druid',
    Priest: 'Priest',
    Shaman: 'Shaman',
    Musketeer: 'Musketeer',
    Necromancer: 'Necromancer',
    SpellBreaker: 'Spell Breaker',
    Warlock: 'Warlock',
    NaturesFury: 'Nature’s Fury',
});

const SettingEdgesTranslations = Object.freeze({
    [SettingEdges.Defend]: 'Оборона',
    [SettingEdges.ImprovedDefend]: 'Улучшенная Оборона',
    [SettingEdges.RapidShot]: 'Быстрый выстрел',
    [SettingEdges.ImprovedRapidShot]: 'Улучшенный быстрый выстрел',
    [SettingEdges.StrafingRun]: 'Бреющий полет',
    [SettingEdges.TwoArrowsNocked]: 'Две стрелы на тетиве',
    [SettingEdges.HailOfArrows]: 'Град стрел',
    [SettingEdges.ArcaneUndead]: 'Магическая нежить',
    [SettingEdges.BrillianceAura]: 'Аура великолепия',
    [SettingEdges.CaptureSpell]: 'Захват заклинания',
    [SettingEdges.ImprovedCaptureSpell]: 'Улучшенный захват заклинания',
    [SettingEdges.CreateUndead]: 'Создание нежити',
    [SettingEdges.DarkRitual]: 'Темный ритуал',
    [SettingEdges.DrainSpell]: 'Истощение заклинания',
    [SettingEdges.MagicalBeastForm]: 'Форма магического зверя',
    [SettingEdges.SpellAura]: 'Аура заклинания',
    [SettingEdges.Artillerist]: 'Артиллерист',
    [SettingEdges.Cavalry]: 'Кавалерия',
    [SettingEdges.Druid]: 'Друид',
    [SettingEdges.Priest]: 'Жрец',
    [SettingEdges.Shaman]: 'Шаман',
    [SettingEdges.Musketeer]: 'Мушкетер',
    [SettingEdges.Necromancer]: 'Некромант',
    [SettingEdges.SpellBreaker]: 'Разрушитель заклинаний',
    [SettingEdges.Warlock]: 'Чернокнижник',
    [SettingEdges.NaturesFury]: 'Ярость природы',
});

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
        }
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

const paragraphOffset = 20;

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
        header1: { fontSize: 26, bold: true, alignment: 'center', margin: [0, 10, 0, 10] },
        header2: { fontSize: 22, bold: true, alignment: 'center', margin: [0, 10, 0, 10] },
        header3: { fontSize: 18, bold: true, margin: [0, 10, 0, 10] },
        header4: { fontSize: 14, bold: true, margin: [0, 5, 0, 5] },
        tip: { fillColor: '#222', color: 'white', margin: 5 },
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
                            quickTextFormat(`**Ловкий (Agile)**: Эльфы грациозны и ловки. Они начинают с **Ловкостью** **d6** вместо **d4**.`),
                            quickTextFormat(`**${HindrancesTranslations[Hindrances.Cautious]} (${Hindrances.Cautious})**: Долгая жизнь и консервативная культура заставляют высших эльфов рассматривать вещи медленно и всесторонне. У них есть изъян **${HindrancesTranslations[Hindrances.Cautious]} (${Hindrances.Cautious})** (см. SW1 с. 31, SW2 с. 51).`),
                            quickTextFormat(`**${EdgesTranslations[Edges.LowLightVision]} (${Edges.LowLightVision})**: Глаза персонажа усиливают свет, словно кошачьи, и позволяют видеть в темноте. Он не получает штрафов к *проверкам атаки* в *темноте* и *сумраке*.`),
                            {
                                text: [
                                    quickTextFormat('**Зависимость от магии (Magic Addiction)**: Насыщенная магией культура высших эльфов предрасполагает их к зависимости от тайной магии. Они получают штраф **-2** к броску **Характера**, чтобы противостоять '),
                                    { text: 'зависимости от тайной магии (TODO: ДОБАВИТЬ ССЫЛКУ И СТРАНИЦУ)', color: 'red' },
                                    quickTextFormat('. Они также получают штраф **-2** к **Харизме**, когда имеют дело с ночными эльфами и тауренами, которые могут чувствовать их связь с тайной магией и находят их отвратительными.'),
                                ]
                            },
                            quickTextFormat(`**Способность к магии (Magic Aptitude)**: Культура высших эльфов пропитана магией. Они начинают с навыком Колдовство (${Skills.Spellcasting}) **d4**  и для улучшения Колдовства (${Skills.Spellcasting}) считают свою **Смекалку** выше на один кубик.`),
                        ]
                    }
                ];
            }

            function getBloodElvesRaceContent() {
                return [
                    quickTextFormat(`**Эльфы крови (Elves, Blood)**: Эльфы крови, по сути, являются высшими эльфами и разделяют большинство черт своих более спокойных собратьев. Однако их поиски Мести поглотили их. Они получают изъян **${HindrancesTranslations[Hindrances.Vengeful]} (${Hindrances.Vengeful}) (мелкий)** вместо **${HindrancesTranslations[Hindrances.Cautious]} (${Hindrances.Cautious})**.`),
                ];
            }

            function getGnomesRaceContent() {
                return [
                    quickTextFormat(`**Гномы (Gnomes)**: Этот крошечный народ самый инновационный в мире Азерота (за исключением, возможно, гоблинов). Они немного застенчивы, но очень увлечены своей техникой.`),
                    {
                        ul: [
                            quickTextFormat('**Гениальный (Brilliant)**: Гномы начинают со **Смекалкой** **d6** вместо **d4**, что отражает их острый ум.'),
                            quickTextFormat('**Маленький (Small)**: Гномы в среднем ниже 4 футов ростом. Из-за небольшого размера их **Стойкость** уменьшена на 1. Их короткие ноги дают им **Шаг** **4**.'),
                            quickTextFormat(`**Мастер на все руки (Tinker)**: Гномы от природы искусны в работе с техникой. Они начинают с Ремонтом (${Skills.Repair}) **d4** и для улучшения Ремонта (${Skills.Repair}) считают свою **Смекалку** выше на один кубик.`),
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
                            quickTextFormat('**Грубый и эффективный (Rough and Ready)**: Орки начинают с **Силой** и **Выносливостью** **d6** вместо **d4**.'),
                            quickTextFormat('**Дикое наследие (Savage Heritage)**: Появившись в истории дикими и кровожадными захватчиками, орки получают штраф **-2** к **Харизме** при взаимодействии с расами не из Орды.'),
                            quickTextFormat(`**Старые обиды (Old Grudges)**: Культура орков по-прежнему жестока и склонна решать проблемы, уничтожая их. Орки ведут себя так, как будто у них есть изъян **${HindrancesTranslations[Hindrances.Vengeful]} (${Hindrances.Vengeful})**. Это считается **мелким** изъяном при общении с другими членами Орды и **крупным** изъяном при общении со всеми остальными.`),
                            quickTextFormat(`**${EdgesTranslations[Edges.Brawny]} (${Edges.Brawny})**: Благодаря своему крепкому телосложению орки получают черту **${EdgesTranslations[Edges.Brawny]} (${Edges.Brawny})**, которая дает им +1 к **Стойкости** и увеличивает предел нагрузки.`),
                        ]
                    }
                ];
            }

            function getTaurensRaceContent() {
                return [
                    quickTextFormat(`**Таурены (Tauren)**: Таурены, коренные жители континента Калимдор, — огромные быколюди с культурой, основанной на тотемном шаманизме. Они объединились с орками, видя в них молодую культуру, нуждающуюся в надлежащем руководстве.`),
                    {
                        ul: [
                            quickTextFormat('**Огромный зверь (Hulking Brute)**: Таурены начинают игру с **Силой** **d8** и **Выносливостью** **d6**. После создания персонажа они могут повысить свою **Силу** до **d12+2**.'),
                            quickTextFormat('**Медлительность (Slow)**: Огромная масса Тауренов мешает более тонким движениям. Они повышают свою **Ловкость** за двойную цену, как при создании персонажа, так и во время последующих улучшений.'),
                            quickTextFormat('**Рога (Horns)**: Огромные рога Тауренов наносят **Сила+1** урона. Таурены могут атаковать своими рогами, как если бы они были верхом.'),
                            quickTextFormat(`**Примитивы (Primitives)**: Культура Тауренов основана на природе, и поэтому у Тауренов есть изъян **${HindrancesTranslations[Hindrances.AllThumbs]} (${Hindrances.AllThumbs})**.`),
                            quickTextFormat('**Возвышающаяся громада (Towering Bulk)**: Таурены получают **+3** к **Стойкости** из-за своего огромного размера (в среднем более 7.5 футов ростом). Однако ракой рост делает Тауренов легкой мишенью, поэтому все атаки по ним получают **+2**.'),
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
                            quickTextFormat('**Ловкий (Agile)**: Эльфы грациозны и ловки. Они начинают с **Ловкостью** **d6** вместо **d4**.'),
                            quickTextFormat('**Духовные (Spirited)**: У ночных эльфов очень мистическая культура. Они начинают с **Характером** **d6** вместо **d4**.'),
                            quickTextFormat(`**${HindrancesTranslations[Hindrances.AllThumbs]} (${Hindrances.AllThumbs})**: Связь с природой заставила ночных эльфов отказаться от пути технического прогресса. У них есть изъян **${HindrancesTranslations[Hindrances.AllThumbs]} (${Hindrances.AllThumbs})** (см. SW1 с. 30, SW2 с. 50).`),
                            quickTextFormat(`**${EdgesTranslations[Edges.LowLightVision]} (${Edges.LowLightVision})**: Глаза персонажа усиливают свет, словно кошачьи, и позволяют видеть в темноте. Он не получает штрафов к *проверкам атаки* в *темноте* и *сумраке*.`),
                            quickTextFormat('**Одиночество (Solitary)**: Ночные эльфы имеют долгую историю изоляции и недоверия к другим расам. Они получают штраф **-2** к **Харизме** при общении со всеми расами, не являющимися Стражами, за исключением тауренов.'),
                            quickTextFormat(`**Слияние с Тенью (Shadowmeld)**: Ночные эльфы получают бонус **+4** к проверкам Скрытности (${Skills.Stealth}) ночью, сливаясь с темнотой.`),
                            quickTextFormat(`**Гордость (Proud)**: Ночные эльфы имеют долгую и славную историю, в которой есть доля трагедий, которые калдорай (по их мнению) превзошли. Таким образом, все ночные эльфы имеют изъян **${HindrancesTranslations[Hindrances.Stubborn]} (${Hindrances.Stubborn})** в том, что касается их культуры и образа жизни.`),
                        ]
                    }
                ];
            }

            function getChildrenOfCenariusRaceContent() {
                return [
                    quickTextFormat(`**Дети Кенария (Children of Cenarius)**: Эти существа, похожие на кентавров с телом оленя, являются потомками ночных эльфов и полубога-оленя Кенария. Женщины известны как Дриады, а более редкие мужчины являются Хранителями Рощи.`),
                    {
                        ul: [
                            quickTextFormat('**Духовные (Spirited)**: У ночных эльфов очень мистическая культура. Они начинают с **Характером** **d6** вместо **d4**.'),
                            quickTextFormat(`**Дитя природы (Nature’s Child)**: Все Дети Кенария имеют изъян **${HindrancesTranslations[Hindrances.AllThumbs]} (${Hindrances.AllThumbs})**.`),
                            quickTextFormat('**Кровь Бога (Blood of the God)**: Все Дети Кенария имеют **Мистический дар (Чудеса): Магия природы (Arcane Background: Nature Magic (a form of Miracles))**. Кроме того, они начинают с **15** Пунктами Силы вместо **10**.'),
                            quickTextFormat(`**${HindrancesTranslations[Hindrances.Outsider]} (${Hindrances.Outsider})**: Как хранители леса с божественной кровью, Дети Кенария чувствуют себя неуютно даже среди ночных эльфов. Из-за этого они получают **-2** к **Харизме**.`),
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
                            quickTextFormat('**Хитрость (Cunning)**: Гоблины начинают со **Смекалкой** **d6** вместо **d4**, чтобы отразить их врожденную хитрость.'),
                            quickTextFormat('**Маленький (Small)**: Из-за небольшого размера **Выносливость** гоблинов уменьшена на **1**. Их короткие ноги дают им **Шаг** **4**.'),
                            quickTextFormat(`**Мастер на все руки (Tinker)**: Гоблины начинают с **Ремонтом** **d4** и для улучшения **Ремонта** считают свою **Смекалку** выше на один кубик.`),
                            quickTextFormat('**Наемник (Mercenary)**: Гоблины работают на того, кто больше заплатит, и все это знают. Они получают **-2** к **Харизме** всегда, ***за исключением случаев***, когда имеют дело с торговлей.'),
                            quickTextFormat(`**Торгаш (Haggler)**: Гоблины получают **+2** ко всем проверкам Убеждения (${Skills.Persuasion}) и Уличного чутья (${Skills.Streetwise}), когда торгуются или пытаются что-то купить или продать.`),
                            quickTextFormat(`**${HindrancesTranslations[Hindrances.Greedy]} (${Hindrances.Greedy})**: Гоблины воспитываются так, чтобы уважать только прибыль. У них есть изъян **${HindrancesTranslations[Hindrances.Greedy]} (${Hindrances.Greedy}) (мелкий)** (см. SW1 с. 30, SW2 с. 49).`),
                        ]
                    }
                ];
            }

            function getTrollsRaceContent() {
                return [
                    quickTextFormat(`**Тролли (Trolls):** Тролли — дикий и жестокий народ, делящийся на множество подвидов в зависимости от предпочитаемой территории. Тролли из разных регионов имеют немного отличающуюся культуру и разный цвет кожи. Наиболее распространенные типы троллей — лесные (зеленокожие, шаманские метатели топоров), джунглевые (синекожие копейщики и жрецы вуду) и ледяные (свирепые и дикие даже для троллей).`),
                    {
                        ul: [
                            quickTextFormat('**Жилистый (Wiry)**: Тролли начинают с **Силой** **d6** вместо **d4** благодаря плотной мускулатуре.'),
                            quickTextFormat('**Проворный (Nimble)**: Тролли обладают естественной скоростью и координацией. Они начинают с **Ловкостью** **d6** вместо **d4**.'),
                            quickTextFormat('**Низкая Хитрость (Low Cunning)**: Тролли примитивны в своих мыслительных процессах. Они повышают свою **Смекалку** за двойную цену, как при создании персонажа, так и во время последующих улучшений.'),
                            quickTextFormat('**Регенерация (Regeneration)**: Тролли обладают естественной способностью исцеляться от любых ран. Они делают бросок на Естественное исцеление каждый раунд.'),
                            quickTextFormat(`**Примитивный (Primitive)**: У троллей есть изъян **${HindrancesTranslations[Hindrances.AllThumbs]} (${Hindrances.AllThumbs})**. Они редко используют что-то сложнее копья или метательного топора.`),
                            quickTextFormat('**Большой (Large)**: Тролли немного крупнее людей. Они получают **+1** к **Стойкости** из-за своего размера.'),
                            quickTextFormat(`**Дикий (Savage)**: Троллям не доверяет большинство рас, которые слишком хорошо знают их дикую хитрость, жажду крови и известный каннибализм. У троллей есть изъяны **${HindrancesTranslations[Hindrances.Bloodthirsty]} (${Hindrances.Bloodthirsty})** и **${HindrancesTranslations[Hindrances.Outsider]} (${Hindrances.Outsider})**.`),
                            quickTextFormat(`**Охотник (Hunter)**: Тролли получают навык Выслеживание (${Skills.Tracking}) **d4** и для улучшения Выслеживания (${Skills.Tracking}) считают свою **Смекалку** выше на один кубик.`),
                        ]
                    }
                ];
            }

            function getPandarenRaceContent() {
                return [
                    quickTextFormat(`**Панадарены (Pandaren):** Эта раса двуногих панд родом с таинственного острова к западу от Калимдора, который они называют Пандария. Это миролюбивый народ, мастера как элегантных боевых искусств, так и варки эля.`),
                    {
                        ul: [
                            quickTextFormat('**Неутомимый (Tireless)**: Здоровые и крепкие пандарены начинают с **Выносливостью** **d6** вместо **d4**.'),
                            quickTextFormat('**Медвежьи ноги (Bear Legs)**: У пандаренов **Шаг** **4**, если они не бегают на четвереньках. Если они это делают, их **Шаг** увеличивается до **6**.'),
                            quickTextFormat(`**Альпинисты (Climbers)**: Пандарены — прирожденные скалолазы. Они получают навык Лазанье (${Skills.Climbing}) **d4** и для улучшения Лазанья (${Skills.Climbing}) считают свою **Ловкость** выше на один кубик.`),
                            quickTextFormat('**Толстая шкура (Test)**: У пандаренов толстые, пушистые шкуры, которые дают им **1** очко **Брони**.'),
                            quickTextFormat(`**${HindrancesTranslations[Hindrances.Outsider]} (${Hindrances.Outsider})**: Будучи загадочными иностранцами, которые отказываются принимать чью-либо сторону, пандарены получают **-2** к своей **Харизме**.`),
                            quickTextFormat('**Естественное оружие (Natural Weapons)**: Когти и укусы пандарена наносят **Сила+1** урон.'),
                        ]
                    }
                ];
            }

            function getForsakenRaceContent() {
                return [
                    quickTextFormat(`**Отрекшиеся (Forsaken):** Отрекшиеся не являются расой как таковой. Это те, кто был воскрешен Плетью и освободился от контроля Короля-лича. Таким образом, они также получают преимущества людей или высших эльфов.`),
                    {
                        ul: [
                            quickTextFormat('**Нежить (Undead)**: Отрекшиеся получают все преимущества нежити (см. SW1 с. 136, SW2 с. 172).'),
                            quickTextFormat(`**Ходячий труп (Walking Corpse)**: Отрекшиеся получают изъяны **${HindrancesTranslations[Hindrances.Outsider]} (${Hindrances.Outsider})** и **${HindrancesTranslations[Hindrances.Ugly]} (${Hindrances.Ugly})**.`),
                            quickTextFormat(`**Бешеный (Frenzied)**: Все Отрекшиеся имеют черту **${EdgesTranslations[Edges.Berserk]} (${Edges.Berserk})**. Однако они также страдают от изъяна **${HindrancesTranslations[Hindrances.Bloodthirsty]} (${Hindrances.Bloodthirsty})**.`),
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
        function createEdgeElement(name, requirements, text, styles = {}) {
            return {
                ...styles,
                stack: [
                    {
                        text: `${SettingEdgesTranslations[name]} (${name})`,
                        style: 'header4',
                    },
                    {
                        text: [
                            { text: 'Требования', bold: true, },
                            ': ',
                            ...insertSeparator(requirements, ', '),
                        ],
                        leadingIndent: paragraphOffset,
                    },
                    {
                        stack: text,
                        leadingIndent: paragraphOffset,
                        margin: [0, 0, 0, 5],
                    },
                ],
            };

            function* insertSeparator(items, separator) {
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
                createEdgeElement(SettingEdges.Defend,
                    [
                        `${RanksTranslations[Ranks.Seasoned]} (${Ranks.Seasoned})`,
                        `${EdgesTranslations[Edges.Block]} (${Edges.Block})`,
                    ],
                    [
                        quickTextFormat('Вы научились мастерски пользоваться щитом. Теперь вы можете добавлять бонус **Брони** и **Защиты** от щита против всех атак, независимо от направления, с которого они наносятся. Ваш **Шаг** снижается до **2** при использовании этой черты.'),
                    ]
                ),
                createEdgeElement(SettingEdges.ImprovedDefend,
                    [
                        `${RanksTranslations[Ranks.Veteran]} (${Ranks.Veteran})`,
                        `${SettingEdgesTranslations[SettingEdges.Defend]} (${SettingEdges.Defend})`,
                    ],
                    [
                        quickTextFormat(`Ваше мастерство владения щитом возросло до такой степени, что вы можете подготовиться даже к ракетному обстрелу и защитить себя. Вы можете добавить бонус **Защиты** от Блока (${Edges.Block}) и Блока+ (${Edges.ImprovedBlock}) к бонусу **Стойкости** вашего щита. Ваш **Шаг** снижается до **2** при использовании этой черты.`),
                    ],
                    {
                        margin: [paragraphOffset, 0, 0, 0],
                    }
                ),
                createEdgeElement(SettingEdges.RapidShot,
                    [
                        `${RanksTranslations[Ranks.Seasoned]} (${Ranks.Seasoned})`,
                        `Стрельба (${Skills.Shooting}) (или Метание (${Skills.Throwing})) d10+`,
                    ],
                    [
                        quickTextFormat(`Быстрый лучник может быстро стрелять, жертвуя точностью ради скорости. Персонаж может совершать дополнительную атаку Стрельбой (${Skills.Shooting}) или Метанием (${Skills.Throwing}) каждый раунд со штрафом **-2**. Оба выстрела должны быть сделаны одновременно, поэтому **Дикие Карты** бросают **два кубика Стрельбы и один Дикий кубик**.`),
                    ],
                ),
                createEdgeElement(SettingEdges.ImprovedRapidShot,
                    [
                        `${RanksTranslations[Ranks.Veteran]} (${Ranks.Veteran})`,
                        `${SettingEdgesTranslations[SettingEdges.RapidShot]} (${SettingEdges.RapidShot})`,
                    ],
                    [
                        quickTextFormat(`То же, что и выше, но персонаж может игнорировать штраф **-2** для **Быстрого выстрела**.`),
                    ],
                    {
                        margin: [paragraphOffset, 0, 0, 0],
                    }
                ),
                createEdgeElement(SettingEdges.StrafingRun,
                    [
                        `${RanksTranslations[Ranks.Seasoned]} (${Ranks.Seasoned})`,
                        `${SettingEdgesTranslations[SettingEdges.Cavalry]} (${SettingEdges.Cavalry})`,
                        `${EdgesTranslations[Edges.SteadyHands]} (${Edges.SteadyHands})`,
                        'Летающее ездовое животное (flying mount)',
                    ],
                    [
                        quickTextFormat(`Вы можете в полной мере воспользоваться способностью летающего ездового животного пролетать мимо противника. Когда ваше ездовое животное проходит в пределах **2 дюймов** от цели (включая атаку налетом (Swoop)), вы получаете **+2** к атаке и урону по этой цели.`),
                    ],
                ),
                createEdgeElement(SettingEdges.TwoArrowsNocked,
                    [
                        `${RanksTranslations[Ranks.Seasoned]} (${Ranks.Seasoned})`,
                        `${StatesTranslations[States.Agility]} (${States.Agility}) d8+`,
                        `${SkillsTranslations[Skills.Shooting]} (${Skills.Shooting}) d8+`,
                    ],
                    [
                        quickTextFormat(`Вы можете использовать **Двойной выстрел (double-tap)** (см. SW1 с. 77, SW2 с. 73) с луком, ибо вы можете стрелять двумя стрелами одновременно или научились выхватывать стрелы почти мгновенно.`),
                    ],
                ),
                createEdgeElement(SettingEdges.HailOfArrows,
                    [
                        `${RanksTranslations[Ranks.Veteran]} (${Ranks.Veteran})`,
                        `${StatesTranslations[States.Agility]} (${States.Agility}) d10+`,
                        `${SkillsTranslations[Skills.Shooting]} (${Skills.Shooting}) d12+`,
                        `${SettingEdgesTranslations[SettingEdges.TwoArrowsNocked]} (${SettingEdges.TwoArrowsNocked})`,
                    ],
                    [
                        quickTextFormat(`Вы так быстро натягиваете тетиву, что можете послать град из полудюжины (шести) стрел в группу противников, жертвуя любым намеком на точность. Это действует как **Огонь на подавление (Suppressive Fire)** (см. SW1 с. 74, SW2 с. 94).`),
                    ],
                    {
                        margin: [paragraphOffset, 0, 0, 0],
                    }
                ),
            ];
        }

        function getPowerEdgesContent() {
            return [
                { text: 'Сверхъестественные черты (Power Edges)', style: 'header3', },
                createEdgeElement(SettingEdges.ArcaneUndead,
                    [
                        `${RanksTranslations[Ranks.Veteran]} (${Ranks.Veteran})`,
                        `${SettingEdgesTranslations[SettingEdges.Necromancer]} (${SettingEdges.Necromancer})`,
                        `${PowersTranslations[Powers.Zombie]} (${Powers.Zombie})`,
                    ],
                    [
                        quickTextFormat(`Ваше мастерство владения энергией нежити возросло до такой степени, что вы можете передавать часть своей магической мощи вызываемой нежити. Используя силу **${PowersTranslations[Powers.Zombie]} (${Powers.Zombie})**, вы можете потратить дополнительный Пункт Силы, чтобы создать Скелета-Мага. Это скелет с Колдовством (${Skills.Spellcasting}) **d6**, **10** Пунктами Силы и способностью использовать Силу **${PowersTranslations[Powers.Bolt]} (${Powers.Bolt})**.`),
                    ],
                ),
                createEdgeElement(SettingEdges.BrillianceAura,
                    [
                        `${RanksTranslations[Ranks.Veteran]} (${Ranks.Veteran})`,
                        `${EdgesTranslations[Edges.Command]} (${Edges.Command})`,
                        `${EdgesTranslations[Edges.RapidRecharge]} (${Edges.RapidRecharge})`,
                        `${SkillsTranslations[Skills.Spellcasting]} (${Skills.Spellcasting}) d10+`,
                    ],
                    [
                        quickTextFormat(`Заклинатель может помогать группе персонажей с Мистическим даром (${Edges.ArcaneBackground}) в восстановлении их магической энергии. Этот персонаж может делиться преимуществом черты **${EdgesTranslations[Edges.RapidRecharge]} (${Edges.RapidRecharge})** с заклинателями, в количестве равном его типу кубика **Характера**. Все затронутые заклинатели должны иметь возможность провести один час в совместной медитации, чтобы эта черта возымела эффект.`),
                    ],
                ),
                createEdgeElement(SettingEdges.CaptureSpell,
                    [
                        `${RanksTranslations[Ranks.Veteran]} (${Ranks.Veteran})`,
                        `${SettingEdgesTranslations[SettingEdges.SpellBreaker]} (${SettingEdges.SpellBreaker})`,
                    ],
                    [
                        quickTextFormat(`Вы можете "поймать" заклинание, направленное на вас, и перенаправить его. Примените **${PowersTranslations[Powers.Dispel]} (${Powers.Dispel})** в ответ на заклинание Тайной Магии другого мага. Если вы сделаете подъём во встречной проверке, вы можете "поймать" заклинание. В следующем раунде вы можете переиспользовать "пойманное" заклинание бесплатно. Однако, если вы не можете применить "пойманное" заклинание, вы получаете штраф **-2** к броску Колдовства (${Skills.Spellcasting}) (иные Аспекты допустимы). Параметры и Аспекты заклинания остаются такими-же, какими их заявил оригинальный заклинатель. Однако вы получаете дополнительные эффекты за подъёмы, если получите их в своей проверке Колдовства (${Skills.Spellcasting}).`),
                        quickTextFormat(`Если маг "ловит" заклинание Призыв, он не переиспользует его. Вместо этого он берет под контроль призванное существо, делая встречную проверку Колдовства (${Skills.Spellcasting}) против **Характера**. Если "ловец" проваливает проверку, Призыв немедленно заканчивается. Вы можете выбирать призванных существ целью данного действия после произнесения заклинания Призыва.`),
                    ],
                ),
                getTipText([
                    quickTextFormat(`Про заклинание, которое "вы не можете применить" (the spell is not one you are able to cast).`),
                    getHorizontalLine('#FFF'),
                    quickTextFormat(`Вероятно, имеется ввиду отсутствие "пойманного" заклинания среди списка Сил, доступных персонажу для использования без "ловли" чужих заклинаний..`),
                    getHorizontalLine('#FFF'),
                    quickTextFormat(`Про Аспекты (Trappings).`),
                    getHorizontalLine('#FFF'),
                    quickTextFormat(`Аспектами в системе называют визуализацию Сил, однако в этом понятии совмещены как "вид проявления" заклинания (огонь, лед, тьма и т.д.), так и метод применения (жест, молитва, шёпот, концентрация внимания и т.д.).`),
                    quickTextFormat(`Не уверен, что хотел сказать автор конверсии, когда в одном предложении написал *"иные Аспекты допустимы (different trappings are okay)"*, а в следующем *"Параметры и Аспекты заклинания остаются такими-же, какими их заявил оригинальный заклинатель (The parameters and trappings of the spell remain unchanged from the original caster)"*.`),
                    quickTextFormat(`Вероятно, имелось ввиду, что "вид проявления" заклинания остается неизменным (т.е. огненный шар не превратится в разряд молнии), но метод применения может быть иным (если оригинальный заклинатель тыкает иглой куклу вуду, для применения «пойманного» заклинания персонажу этого делать не надо).`),
                    getHorizontalLine('#FFF'),
                    quickTextFormat(`Про Призыв (Summon).`),
                    getHorizontalLine('#FFF'),
                    quickTextFormat(`По причине отсутствия уточнений на этот счет, Ведьмак (перевод юнита SpellBreaker из Warcraft 3) делает проверку **Рассеивания** и проверку **Колдовства** против **Характера** призывателя в одном и тот-же раунде раунде.`),
                    quickTextFormat(`По поводу фразы *"Если "ловец" проваливает проверку, Призыв немедленно заканчивается (If the caster fails, the Summon ends immediately)"*. "The caster" переведено как "ловец", чтобы было понятнее, чей провал заканчивает призыв. Провал "ловца" заканчивает призыв, ибо подчинить призванное существо не удалось и применяется стандартный эффект **Рассеивания**.`),
                    quickTextFormat(`По причине отсутствия уточнений на этот счет, для того, чтобы "поймать" атакующее заклинание, маг быть наготове и прервать действие оппонента согласно правилам по прерыванию ***(см. SW1 с. 69, SW2 с. 17)***, как указано в описании **Рассеивания**.`),
                ]),
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