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
    DruidPriestShaman: 'Druid/Priest/Shaman',
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
    [SettingEdges.DruidPriestShaman]: 'Друид/Жрец/Шаман',
    [SettingEdges.Druid]: 'Друид',
    [SettingEdges.Priest]: 'Жрец',
    [SettingEdges.Shaman]: 'Шаман',
    [SettingEdges.Musketeer]: 'Мушкетер',
    [SettingEdges.Necromancer]: 'Некромант',
    [SettingEdges.SpellBreaker]: 'Разрушитель заклинаний',
    [SettingEdges.Warlock]: 'Чернокнижник',
    [SettingEdges.NaturesFury]: 'Ярость природы',
});

const SettingPowers = Object.freeze({
    ArmorOffensive: 'Armor, Offensive',
    BlastContinuous: 'Blast, Continuous',
    Blight: 'Blight',
    Bloodlust: 'Bloodlust',
    Bombardment: 'Bombardment',
    Contact: 'Contact',
    Doom: 'Doom',
    EtherealForm: 'Ethereal Form',
    FarSight: 'Far Sight',
    Inferno: 'Inferno',
    InnerFire: 'Inner Fire',
    LifeDrain: 'Life Drain',
    Mend: 'Mend',
    Slow: 'Slow',
    Summon: 'Summon',
    TransformOther: 'Transform Other',
    // ???
    ManaBurn: 'Mana Burn',
    AntiMagicShell: 'Anti-Magic Shell',
    ContinuousBlast: 'Continuous Blast',
    OffensiveArmor: 'Offensive Armor',
    DeathCoil: 'Death Coil',
    DeathPact: 'Death Pact',
    Paralyze: 'Paralyze',
});

const SettingPowersTranslations = Object.freeze({
    [SettingPowers.ArmorOffensive]: 'Наступательная Броня',
    [SettingPowers.BlastContinuous]: 'Продолжительный взрыв',
    [SettingPowers.Blight]: 'Порча',
    [SettingPowers.Bloodlust]: 'Жажда крови',
    [SettingPowers.Bombardment]: 'Бомбардировка',
    [SettingPowers.Contact]: 'Контакт',
    [SettingPowers.Doom]: 'Рок',
    [SettingPowers.EtherealForm]: 'Эфирная форма',
    [SettingPowers.FarSight]: 'Зоркость',
    [SettingPowers.Inferno]: 'Инферно',
    [SettingPowers.InnerFire]: 'Внутренний огонь',
    [SettingPowers.LifeDrain]: 'Высасывание жизни',
    [SettingPowers.Mend]: 'Починка',
    [SettingPowers.Slow]: 'Медлительность',
    [SettingPowers.Summon]: 'Призыв',
    [SettingPowers.TransformOther]: 'Преобразование другого',
    // ???
    [SettingPowers.ManaBurn]: 'Сжигание маны',
    [SettingPowers.AntiMagicShell]: 'Доспех Антимагии',
    [SettingPowers.ContinuousBlast]: 'Продолжительный взрыв',
    [SettingPowers.OffensiveArmor]: 'Наступательная Броня',
    [SettingPowers.DeathCoil]: 'Лик смерти',
    [SettingPowers.DeathPact]: 'Смертельный союз',
    [SettingPowers.Paralyze]: 'Паралич',
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

function getFromDict(dict, key, other) {
    if (other?.length > 0) {
        return `${dict[key]} (${key}) ${other}`;
    }
    return `${dict[key]} (${key})`;
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
            // pageBreak: 'after',
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
            // pageBreak: 'after',
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
                        text: requirements?.length > 0
                            ? [
                                { text: 'Требования', bold: true, },
                                ': ',
                                ...insertSeparator(requirements, ', '),
                            ]
                            : [],
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
                        quickTextFormat(`Если маг "ловит" заклинание Призыв, он не переиспользует его. Вместо этого "ловец" берет под контроль призванное существо, делая встречную проверку своего Колдовства (${Skills.Spellcasting}) против его **Характера**. Если "ловец" проваливает проверку, Призыв немедленно заканчивается. Вы можете выбирать призванных существ целью данного действия после произнесения заклинания Призыва.`),
                    ],
                ),
                getTipText([
                    quickTextFormat(`Про заклинание, которое *"вы не можете применить" (the spell is not one you are able to cast)*.`),
                    getHorizontalLine('#FFF'),
                    quickTextFormat(`Вероятно, имеется ввиду отсутствие "пойманного" заклинания среди списка Сил, доступных персонажу для использования без "ловли" чужих заклинаний.`),
                    getHorizontalLine('#FFF'),
                    quickTextFormat(`Про Аспекты (Trappings).`),
                    getHorizontalLine('#FFF'),
                    quickTextFormat(`Аспектами в системе называют визуализацию Сил, однако в этом понятии совмещены как "вид проявления" заклинания (огонь, лед, тьма и т.д.), так и метод применения (жест, молитва, шёпот, концентрация внимания и т.д.).`),
                    quickTextFormat(`Не уверен, что хотел сказать автор конверсии, когда в одном предложении написал *"иные Аспекты допустимы (different trappings are okay)"*, а в следующем *"Параметры и Аспекты заклинания остаются такими-же, какими их заявил оригинальный заклинатель (The parameters and trappings of the spell remain unchanged from the original caster)"*.`),
                    quickTextFormat(`Вероятно, имелось ввиду, что "вид проявления" заклинания остается неизменным (т.е. огненный шар не превратится в разряд молнии), но метод применения может быть иным (если оригинальный заклинатель тыкает иглой куклу вуду, для применения «пойманного» заклинания персонажу этого делать не надо).`),
                    getHorizontalLine('#FFF'),
                    quickTextFormat(`Про Призыв (Summon).`),
                    getHorizontalLine('#FFF'),
                    quickTextFormat(`По причине отсутствия уточнений на этот счет, Ведьмак (перевод юнита SpellBreaker из Warcraft 3) делает проверку **Рассеивания (${Powers.Dispel})** и проверку **Колдовства** против **Характера** в одном и тот-же раунде раунде.`),
                    quickTextFormat(`При переводе *"he takes control of the summoned creature by making an opposed Spellcasting vs. Spirit check"* из контекста сделан вывод, что проверку **Колдовства** совершает Ведьмак, а проверку **Характера** - призванное существо. Комментариев на случай призыва нескольких существ нет. Вероятно, каждое призванное существо делает проверку **Характера** против результата проверки **Колдовства**.`),
                    quickTextFormat(`По поводу фразы *"Если "ловец" проваливает проверку, Призыв немедленно заканчивается (If the caster fails, the Summon ends immediately)"*. "The caster" переведено как "ловец", чтобы было понятнее, чей провал заканчивает призыв. Провал "ловца" заканчивает призыв, ибо подчинить призванное существо не удалось и применяется стандартный эффект **Рассеивания (${Powers.Dispel})**.`),
                    quickTextFormat(`По причине отсутствия уточнений на этот счет, для того, чтобы "поймать" атакующее заклинание, маг должен быть *наготове* и прервать действие оппонента согласно правилам по прерыванию (см. SW1 с. 69, SW2 с. 17), как указано в описании **Рассеивания (${Powers.Dispel})**.`),
                ]),
                createEdgeElement(SettingEdges.ImprovedCaptureSpell,
                    [
                        `${RanksTranslations[Ranks.Veteran]} (${Ranks.Veteran})`,
                        `${SettingEdgesTranslations[SettingEdges.CaptureSpell]} (${SettingEdges.CaptureSpell})`,
                    ],
                    [
                        quickTextFormat(`То же, что и выше, только теперь вам не нужно делать подъем (достаточно успеха) для захвата заклинания, и вы не получаете штраф **-2** за использование заклинания, которое вы не можете применить.`),
                    ],
                    {
                        margin: [paragraphOffset, 0, 0, 0],
                    }
                ),
                createEdgeElement(SettingEdges.CreateUndead,
                    [
                        `${RanksTranslations[Ranks.Veteran]} (${Ranks.Veteran})`,
                        `${SettingEdgesTranslations[SettingEdges.Necromancer]} (${SettingEdges.Necromancer})`,
                        `${PowersTranslations[Powers.Zombie]} (${Powers.Zombie}) и ${PowersTranslations[Powers.Puppet]} (${Powers.Puppet})`,
                    ],
                    [
                        quickTextFormat(`Вы изучили нечестивые ритуалы для создания более великих и постоянных форм нежити. В долгом (минимум 4 часа) ритуале вы можете оживить труп, чтобы создать мощную, постоянную нежить. Нежить, которую вы создаете, находится под вашим контролем и будет следовать вашим приказам. Создание *Тени (Shade)* стоит **3** Пункта Силы и требует добровольной жертвы, создание *Могильного Дьявола (Могильщик, Crypt Fiend)* стоит **5** Пунктов Силы и нерубский труп, создание *Мерзости (Мясник, Abomination)* стоит **5** Пунктов Силы и не менее 5 гуманоидных трупов, а создание *Ледяного Змея (Frost Wyrm)* для некроманта ранга Героя (${Ranks.Heroic}) стоит **9** Пунктов Силы и останки дракона.`),
                    ],
                ),
                createEdgeElement(SettingEdges.DarkRitual,
                    [
                        `${RanksTranslations[Ranks.Heroic]} (${Ranks.Heroic})`,
                        `${EdgesTranslations[Edges.SoulDrain]} (${Edges.SoulDrain})`,
                        `и ${SettingEdgesTranslations[SettingEdges.Necromancer]} (${SettingEdges.Necromancer})`,
                        `${SettingEdgesTranslations[SettingEdges.Warlock]} (${SettingEdges.Warlock}) или ${EdgesTranslations[Edges.ArcaneBackground]} (${Edges.ArcaneBackground}) (Тролль Вуду (Troll Voodoo))`,
                    ],
                    [
                        quickTextFormat(`Принося в жертву живое и разумное существо в 15-минутном ритуале, персонаж получает **1d6** временных Пунктов Силы, благодаря чему может превысить свой обычный максимум. Если заклинатель делает подъем, количество Пунктов Силы увеличивается до **2d6**. Наконец, принесение в жертву Дикой Карты удваивает количество полученных Очков Силы.`),
                    ],
                ),
                createEdgeElement(SettingEdges.DrainSpell,
                    [
                        `${RanksTranslations[Ranks.Veteran]} (${Ranks.Veteran})`,
                        `${SettingEdgesTranslations[SettingEdges.SpellBreaker]} (${SettingEdges.SpellBreaker})`,
                    ],
                    [
                        quickTextFormat(`Вы можете поглощать энергию заклинаний. Когда вы **Рассеиваете (${Powers.Dispel})** заклинание Тайной Магии *в процессе накладывания*, если вы получаете подъем во встречной проверке, вы можете добавить стоимость заклинания к своему собственному запасу Пунктов Силы, даже превысив свой обычный максимум. Однако в таком случае черта **${EdgesTranslations[Edges.Wizard]} (${Edges.Wizard})** не может снизить стоимость **Рассеивания (${Powers.Dispel})** ниже единицы.`),
                    ],
                ),
                createEdgeElement(SettingEdges.MagicalBeastForm,
                    [
                        `${RanksTranslations[Ranks.Veteran]} (${Ranks.Veteran})`,
                        `${EdgesTranslations[Edges.ArcaneBackground]} (${Edges.ArcaneBackground}) (Магия природы (Nature Magic))`,
                        `${SettingEdgesTranslations[SettingEdges.Druid]} (${SettingEdges.Druid})`,
                        `${PowersTranslations[Powers.ShapeChange]} (${Powers.ShapeChange})`,
                    ],
                    [
                        quickTextFormat(`Вы можете творить другие заклинания, будучи превращенным в животное. Выберите одну форму животного: находясь в этой форме, вы творите заклинания как обычно, хотя вы все равно получаете штраф за поддержание **Превращения (${Powers.ShapeChange})**.`),
                    ],
                ),
                createEdgeElement(SettingEdges.SpellAura,
                    [
                        `${RanksTranslations[Ranks.Veteran]} (${Ranks.Veteran})`,
                        `${EdgesTranslations[Edges.ArcaneBackground]} (${Edges.ArcaneBackground})`,
                        `${EdgesTranslations[Edges.NaturalLeader]} (${Edges.NaturalLeader})`,
                        `Магический навык (Arcane Skill) d10+`,
                    ],
                    [
                        quickTextFormat(`За **2** Пункта Силы вы можете расширить полезное заклинание (beneficial spell), чтобы оно повлияло на всех союзных персонажей в пределах **Шаблона малого взрыва** с центром на заклинателе. За **4** Пункта Силы вы можете расширить его до **Шаблона среднего взрыва**, а за **6** Пунктов Силы — до **Большого взрыва**. Заклинатель делает проверку Магического Навыка (Arcane Skill) как обычно, и эффекты идентичны для всех целей. После того, как заклинание было произнесено, цели заклинания должны оставаться в пределах количества дюймов, равного **Магическому Атрибуту (Arcane Attribute)** заклинателя, иначе эффекты заклинания будут потеряны. По истечении срока действия поддержание **Ауры заклинания (${SettingEdges.SpellAura})** стоит **вдвое** больше обычного, хотя заклинатель может вместо этого выбрать поддержание заклинания только на одном человеке за обычную стоимость.`),
                    ],
                ),
            ];
        }

        function getProfessionalEdgesContent() {
            return [
                { text: 'Профессиональные черты (Professional Edges)', style: 'header3', },
                createEdgeElement(SettingEdges.Artillerist,
                    [
                        `${RanksTranslations[Ranks.Novice]} (${Ranks.Novice})`,
                        `${SkillsTranslations[Skills.Shooting]} (${Skills.Shooting}) d8+`,
                        `не должно быть изъяна ${HindrancesTranslations[Hindrances.AllThumbs]} (${Hindrances.AllThumbs})`,
                    ],
                    [
                        quickTextFormat(`Вы обучены использованию большого порохового оружия и искусны в его использовании. Время перезарядки пушек, мортир и т.п. сокращается для вас на одно Действие. Вы не можете перемещать такое оружие во время перезарядки.`),
                    ],
                ),
                createEdgeElement(SettingEdges.Cavalry,
                    [
                        `${RanksTranslations[Ranks.Novice]} (${Ranks.Novice})`,
                        `${SkillsTranslations[Skills.Riding]} (${Skills.Riding}) d6+`,
                    ],
                    [
                        quickTextFormat(`Вы обучены верховому бою. Вы получаете **+2** ко всем проверкам **Верховой езды (${Skills.Riding})** и можете тратить Фишки, чтобы поглощать урон, нанесенный вашему скакуну. Кроме того, ваша **Верховая езда (${Skills.Riding})** считается на один тип кубика выше при определении низшего из ваших **Драки (${Skills.Fighting})** и **Верховой езды (${Skills.Riding})** во время верхового боя.`),
                    ],
                ),
                createEdgeElement(SettingEdges.DruidPriestShaman,
                    [],
                    [
                        quickTextFormat(`Многие традиции Азерота превратили магию в точное искусство. Это идентично черте **${EdgesTranslations[Edges.Wizard]} (${Edges.Wizard})**, за исключением того, что оно применяется к различным **Мистическим дарам (${Edges.ArcaneBackground}) (Чудеса (Miracles))**, а требования к навыкам Знаний (${Skills.Knowledge}) различаются. Друиды и шаманы изучают Природу (Nature), Жрецы Света и Жрицы Луны изучают Религию (Religion). Однако из-за долгого изгнания шаманизма из орочьих племен шаманы орков должны иметь изъян **${HindrancesTranslations[Hindrances.Elderly]} (${Hindrances.Elderly})**, чтобы взять эту черту.`),
                    ],
                ),
                createEdgeElement(SettingEdges.Musketeer,
                    [
                        `${RanksTranslations[Ranks.Novice]} (${Ranks.Novice})`,
                        `${SkillsTranslations[Skills.Shooting]} (${Skills.Shooting}) d8+`,
                        `не должно быть изъяна ${HindrancesTranslations[Hindrances.AllThumbs]} (${Hindrances.AllThumbs})`,
                    ],
                    [
                        quickTextFormat(`Вы привыкли использовать огнестрельное оружие с черным порохом и можете быстро перезаряжаться. Вы можете перезарядить огнестрельное оружие одним действием. Вы можете ходить во время перезарядки, но не бежать. Это преимущество применимо только к ручному огнестрельному оружию, а не к пушкам, мортирам и т.п.`),
                    ],
                ),
                createEdgeElement(SettingEdges.Necromancer,
                    [
                        `${EdgesTranslations[Edges.ArcaneBackground]} (${Edges.ArcaneBackground}) (Тайная Магия (Arcane Magic))`,
                    ],
                    [
                        quickTextFormat(`Вы проникли в тайны нежити. Вы получаете доступ к заклинаниям из списка Некроманта (${SettingEdges.Necromancer}). Вы также получаете **+2** ко всем проверкам на управление или взаимодействие с нежитью (включая использование Сил **${PowersTranslations[Powers.Zombie]} (${Powers.Zombie})** и **${PowersTranslations[Powers.Puppet]} (${Powers.Puppet})** на нежити) и можете использовать черту **${EdgesTranslations[Edges.Command]} (${Edges.Command})** на безмозглой нежити (обычно невозможно).`),
                    ],
                ),
                createEdgeElement(SettingEdges.SpellBreaker,
                    [
                        `${RanksTranslations[Ranks.Seasoned]} (${Ranks.Seasoned})`,
                        `${EdgesTranslations[Edges.ArcaneBackground]} (${Edges.ArcaneBackground}) (Магия (Magic))`,
                        `${PowersTranslations[Powers.Dispel]} (${Powers.Dispel}) и ${SettingPowersTranslations[SettingPowers.ManaBurn]} (${SettingPowers.ManaBurn})`,
                    ],
                    [
                        quickTextFormat(`Вы изучили нюансы потока магической энергии. Вы получаете **+2** к своему броску Колдовства (${Skills.Spellcasting}), когда используете **${PowersTranslations[Powers.Dispel]} (${Powers.Dispel})** или **${SettingPowersTranslations[SettingPowers.ManaBurn]} (${SettingPowers.ManaBurn})**, и вы получаете **+1** к любому встречному броску на сопротивление эффектам заклинаний.`),
                    ],
                ),
                createEdgeElement(SettingEdges.Warlock,
                    [
                        `${EdgesTranslations[Edges.ArcaneBackground]} (${Edges.ArcaneBackground}) (Тайная Магия (Arcane Magic))`,
                    ],
                    [
                        quickTextFormat(`Вы раскрыли запретные силы демонов и Круговерти Пустоты. Вы получаете доступ к списку заклинаний Чернокнижника (${SettingEdges.Warlock}), получаете бонус в **5** Пунктов Силы и иммунитет к Зависимости от Тайной Магии (Arcane Magic Addiction). Однако вы автоматически страдаете от изъяна **${HindrancesTranslations[Hindrances.Bloodthirsty]} (${Hindrances.Bloodthirsty})**. Если у вас уже есть этот изъян, вы получаете либо **${HindrancesTranslations[Hindrances.Delusional]} (${Hindrances.Delusional})**, либо **${HindrancesTranslations[Hindrances.Vengeful]} (${Hindrances.Vengeful})**.`),
                    ],
                ),
                getTipText([
                    quickTextFormat(`В оригинале используется изъян *Delusion*, а не *${Hindrances.Delusional}*. Однако в английских книгах встречается именно *${Hindrances.Delusional}*, так что примем это за опечатку автора.`),
                ]),
            ];
        }

        function getWeirdEdgesContent() {
            return [
                { text: 'Потусторонние черты (Weird Edges)', style: 'header3', },
                createEdgeElement(SettingEdges.NaturesFury,
                    [
                        `${RanksTranslations[Ranks.Novice]} (${Ranks.Novice})`,
                        `${EdgesTranslations[Edges.ArcaneBackground]} (${Edges.ArcaneBackground}) (Магия природы (Nature Magic))`,
                        `${StatesTranslations[States.Spirit]} (${States.Spirit}) d6+`,
                        `${SkillsTranslations[Skills.Fighting]} (${Skills.Fighting}) d8+`,
                    ],
                    [
                        quickTextFormat(`Сила природы преобразила вас, дав вам природное оружие, подобное одному из зверей или растений, которые являются вашими союзниками. Когда вы берете эту черту, вы получаете либо одно природное оружие, которое наносит урон **Сила+2**, либо пару оружий, которые наносят **Сила+1** каждое. Обратите внимание, что пара когтей (pair of claws) считается двумя оружиями.`),
                    ],
                ),
            ];
        }

        return {
            stack: [
                {
                    text: 'Новые Черты (New Edges)',
                    style: 'header2',
                    pageBreak: 'before',
                },
                getCombatEdgesContent(),
                getPowerEdgesContent(),
                getProfessionalEdgesContent(),
                getWeirdEdgesContent(),
            ],
            // pageBreak: 'after',
        };
    }

    function getArcaneBackgroundsContent() {
        function getArcaneMagicContent() {
            return {
                stack: [
                    {
                        text: 'Тайная магия (Arcane Magic)',
                        style: 'header3',
                    },
                    {
                        ul: [
                            quickTextFormat(`**Навык**: ${SkillsTranslations[Skills.Spellcasting]} (${Skills.Spellcasting}) (${StatesTranslations[States.Smarts]} (${States.Smarts}))`),
                            quickTextFormat(`**Начальные пункты силы**: 10`),
                            quickTextFormat(`**Начальные силы**: 3`),
                            quickTextFormat(`**Подтипы**: Маги (Волшебники, Колдуны); Некроманты; Чернокнижники`),
                            [
                                quickTextFormat(`**Зависимость от магии**: Когда маг выбрасывает **1** на своей кости **Колдовства (${Skills.Spellcasting})** (независимо от Дикой кости), он должен сделать бросок **Характера** со штрафом, равным Рангу заклинания (${RanksTranslations[Ranks.Novice]} (${Ranks.Novice}) = 0, ${RanksTranslations[Ranks.Seasoned]} (${Ranks.Seasoned}) = 1 и т. д.), а также для поддерживаемых заклинаний.`),
                                {
                                    stack: [
                                        quickTextFormat(`Если персонаж проваливает проверку **Характера**, он получает изъян **${HindrancesTranslations[Hindrances.Habit]} (${Hindrances.Habit}) (мелкий)**. Он начнет выполнять мирские задачи, используя Тайную Магию (не требует броска). В дополнение к штрафу **Харизмы**, он все время считается потратившим **1** Пункт Силы из-за затраченной на эти задачи энергии.`),
                                        quickTextFormat(`Если заклинатель проваливает проверку **Характера** второй раз или бросает Змеиные Глаза (snake-eyes), он получает **${HindrancesTranslations[Hindrances.Habit]} (${Hindrances.Habit}) (крупный)**. Чтобы удовлетворить зависимость, он выполняет практически все мирские задачи с помощью магии, тратя на это этого **2** Пункта Силы. Кроме того, он должен произносить свое самое сильное заклинание по крайней мере один раз каждые 24 часа, по самой высокой стоимости Пунктов Силы. Он продолжает страдать от штрафа **Харизмы** изъяна **${HindrancesTranslations[Hindrances.Habit]} (${Hindrances.Habit}) (мелкий)**.`),
                                        quickTextFormat(`Если заклинатель проваливает третью проверку зависимости, он автоматически получает черту **${SettingEdgesTranslations[SettingEdges.Warlock]} (${SettingEdges.Warlock})** и один из изъянов: **${HindrancesTranslations[Hindrances.Delusional]} (${Hindrances.Delusional}) (крупный)**, **${HindrancesTranslations[Hindrances.Overconfident]} (${Hindrances.Overconfident})** или **${HindrancesTranslations[Hindrances.Vengeful]} (${Hindrances.Vengeful}) (крупный)**. Он также имеет **-2** к сопротивлению любым попыткам **Убеждения (${Skills.Persuasion})** или заклинанию **${PowersTranslations[Powers.Puppet]} (${Powers.Puppet})** от демонов.`),
                                    ],
                                    leadingIndent: paragraphOffset,
                                },
                            ],
                        ],
                    },
                    {
                        text: 'Списки заклинаний (Spell Lists)',
                        style: 'header3',
                    },
                    quickTextFormat(`*Заклинания, выделенные курсивом, являются новыми в этой книге.*`),
                    'Для некоторых заклинаний Аспекты указаны в скобках. Если Аспекты не перечислены, используйте любые из тех, что кажутся подходящими.',
                    {
                        text: 'Маги (Mages)',
                        style: 'header3',
                        alignment: 'center',
                    },
                    {
                        columns: [
                            {
                                ul: [
                                    quickTextFormat(`${getFromDict(SettingPowersTranslations, SettingPowers.AntiMagicShell)} (${getFromDict(PowersTranslations, Powers.Armor)} против магии, +2/4 к сопротивлению заклинаниям)`),
                                    quickTextFormat(`*${getFromDict(SettingPowersTranslations, SettingPowers.ArmorOffensive)}* (Огненный щит (Fire Shield))`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Barrier)}`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Blast)} (Огненный шар (Fireball))`),
                                    quickTextFormat(`*${getFromDict(SettingPowersTranslations, SettingPowers.ContinuousBlast)}* (Метель (Blizzard))`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Bolt)}`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.BoostLowerTrait)}`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Burst)} (Молния (Lightning), Мороз (Frost))`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.DetectConcealArcana)}`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Deflection)}`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Dispel)}`),
                                ],
                            },
                            {
                                ul: [
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Entangle)}`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.EnvironmentalProtection)}`),
                                    quickTextFormat(`${getFromDict(SettingPowersTranslations, SettingPowers.FarSight)}`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Fly)}`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Light)}`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Obscure)}`),
                                    quickTextFormat(`*${getFromDict(SettingPowersTranslations, SettingPowers.ManaBurn)}* (${PowersTranslations[Powers.Bolt]} (${Powers.Bolt}), высасывает 1d6 Пунктов Силы в дополнение к Ранам)`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Quickness)}`),
                                    quickTextFormat(`*${getFromDict(SettingPowersTranslations, SettingPowers.Slow)}*`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Smite)}`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.SpeakLanguage)}`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Speed)}`),
                                    quickTextFormat(`*${getFromDict(SettingPowersTranslations, SettingPowers.Summon)}: Элементали Воды (Water Elementals)*`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Telekinesis)}`),
                                    quickTextFormat(`*${getFromDict(PowersTranslations, Powers.Teleport)}*`),
                                    quickTextFormat(`*${getFromDict(SettingPowersTranslations, SettingPowers.TransformOther)}*`),
                                ],
                            },
                        ],
                        columnGap: 5,
                    },
                    '\n',
                    getTipText([
                        quickTextFormat(`Выше написано, что новые заклинания будут выделяться курсивом, но раз на раз не приходится. Например, **Наступательная Броня** то выделяется, то нет, к тому-же пишется то как **Armor, Offensive**, то как **Offensive Armor**.`),
                        quickTextFormat(`Иногда выделяются заклинания, которые отсутствовали в **Savage Worlds Revised**, но были добавлены в **Savage Worlds Delux**, например, **${getFromDict(PowersTranslations, Powers.Teleport)}**. В версии конверсии от 28 марта 2004 она описывалась в списке новых Сил, а в версии от 29 марта 2005 встречается в списке модифицированных Сил. Описание же заклинания **${getFromDict(SettingPowersTranslations, SettingPowers.Paralyze)}** было утеряно в версии от 29 марта 2005, хотя упоминание самого заклинания осталось.`),
                        quickTextFormat(`Также встречаются новые заклинания с кратким описанием на основе других сил без выделания, например, **${getFromDict(SettingPowersTranslations, SettingPowers.ManaBurn)}**, **${getFromDict(SettingPowersTranslations, SettingPowers.AntiMagicShell)}**, **${getFromDict(SettingPowersTranslations, SettingPowers.DeathCoil)}** или **${getFromDict(SettingPowersTranslations, SettingPowers.DeathPact)}**.`),
                        quickTextFormat(`Каких либо комментариев по поводу стоимости или других параметров для них, конечно же, не предусмотрено. Например, **${getFromDict(SettingPowersTranslations, SettingPowers.DeathCoil)}** имеет короткое описание *"${getFromDict(PowersTranslations, Powers.Bolt)} против живых, ${getFromDict(PowersTranslations, Powers.Healing)} против нежити"*. ${getFromDict(PowersTranslations, Powers.Bolt)} стоит **1+** Пункт Силы и применяется на дистанции, ${getFromDict(PowersTranslations, Powers.Healing)} стоит **3** Пункта Силы и применяется касанием. И какие же характеристики у **Лика смерти**? Никто не знает.`),
                        quickTextFormat(`**В рамках перевода оставим все эти вопросы на совести автора оригинала**.`),
                    ]),
                ],
            }
        }

        return {
            stack: [
                {
                    text: 'Мистические дары (Arcane Backgrounds)',
                    style: 'header2',
                    pageBreak: 'before',
                },
                getArcaneMagicContent(),
            ],
            // pageBreak: 'after',
        };
    }

    return [
        {
            text: 'Создание персонажа (Character Creation)',
            style: 'header1',
            pageBreak: 'before',
        },
        getRacesContent(),
        getEdgesContent(),
        getArcaneBackgroundsContent(),
    ];
}

module.exports = {
    fonts,
    docDefinition,
};