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
    FrostNova: 'Frost Nova',
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
    [SettingPowers.Slow]: 'Замедление',
    [SettingPowers.Summon]: 'Призыв',
    [SettingPowers.TransformOther]: 'Преобразование другого',
    // ???
    [SettingPowers.ManaBurn]: 'Сжигание маны',
    [SettingPowers.AntiMagicShell]: 'Доспех Антимагии',
    [SettingPowers.ContinuousBlast]: 'Продолжительный взрыв',
    [SettingPowers.OffensiveArmor]: 'Наступательная Броня',
    [SettingPowers.FrostNova]: 'Кольцо льда',
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

function getFromDict(dict, key) {
    return `${dict[key]} (${key})`;
}

const paragraphOffset = 20; // leadingIndent

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
        fontSize: 12,
        alignment: 'justify',
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
        getBestiaryContent(),
        getUnitsBuildingsGearContent(),
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

        getTipText([
            {
                text: [
                    { text: 'Примечание переводчика', decoration: 'underline', },
                    quickTextFormat(': так как перевод сделан специально для тех, кому не комфортно пользоваться книгами на английском языке, страницы английской книги правил **Savage Worlds** в формате *(see SW p. X)* будут заменены на страницы переводов от Студии 101, в формате *(см. SW1 с. A, SW2 с. B)*, где SW1 - это **Savage Worlds: Дневник авантюриста** 2011 года (ISBN 978-5-905471-04-9), а SW2 - **Savage Worlds: Дневник авантюриста: Правила игры** 2016 года (ISBN 978-5-905471-29-2).'),
                ],
                alignment: 'center',
            },
        ]),
        {
            text: 'Оригинальный документ обновлен 29 марта 2005',
            alignment: 'center',
            bold: true,
            margin: [0, 15, 0, 0],
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
                            quickTextFormat('**Зависимость от магии (Magic Addiction)**: Насыщенная магией культура высших эльфов предрасполагает их к зависимости от тайной магии. Они получают штраф **-2** к броску **Характера**, чтобы противостоять *зависимости от тайной магии (см. далее)*. Они также получают штраф **-2** к **Харизме**, когда имеют дело с ночными эльфами и тауренами, которые могут чувствовать их связь с тайной магией и находят их отвратительными.'),
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
            function getMagesContent() {
                return [
                    {
                        text: 'Маги (Mages)',
                        style: 'header4',
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
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Entangle)}`),
                                ],
                            },
                            {
                                ul: [
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.EnvironmentalProtection)}`),
                                    quickTextFormat(`${getFromDict(SettingPowersTranslations, SettingPowers.FarSight)}`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Fly)}`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Light)}`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Obscure)}`),
                                    quickTextFormat(`*${getFromDict(SettingPowersTranslations, SettingPowers.ManaBurn)}* (${PowersTranslations[Powers.Bolt]} (${Powers.Bolt}), истощает 1d6 Пунктов Силы в дополнение к Ранам)`),
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
                        alignment: 'left',
                    },
                    '\n',
                    getTipText([
                        quickTextFormat(`Выше написано, что новые заклинания будут выделяться курсивом, но раз на раз не приходится. Например, **Наступательная Броня** то выделяется, то нет, к тому-же пишется то как **Armor, Offensive**, то как **Offensive Armor**.`),
                        quickTextFormat(`Иногда выделяются заклинания, которые отсутствовали в **Savage Worlds Revised**, но были добавлены в **Savage Worlds Delux**, например, **${getFromDict(PowersTranslations, Powers.Teleport)}**. В версии конверсии от 28 марта 2004 она описывалась в списке новых Сил, а в версии от 29 марта 2005 встречается в списке модифицированных Сил. Описание же заклинания **${getFromDict(SettingPowersTranslations, SettingPowers.Paralyze)}** было утеряно в версии от 29 марта 2005, хотя упоминание самого заклинания осталось.`),
                        quickTextFormat(`Также встречаются новые заклинания с кратким описанием на основе других сил без выделания, например, **${getFromDict(SettingPowersTranslations, SettingPowers.ManaBurn)}**, **${getFromDict(SettingPowersTranslations, SettingPowers.AntiMagicShell)}**, **${getFromDict(SettingPowersTranslations, SettingPowers.DeathCoil)}** или **${getFromDict(SettingPowersTranslations, SettingPowers.DeathPact)}**.`),
                        quickTextFormat(`Каких либо комментариев по поводу стоимости или других параметров для них, конечно же, не предусмотрено. Например, **${getFromDict(SettingPowersTranslations, SettingPowers.DeathCoil)}** имеет короткое описание *"${getFromDict(PowersTranslations, Powers.Bolt)} против живых, ${getFromDict(PowersTranslations, Powers.Healing)} против нежити"*. ${getFromDict(PowersTranslations, Powers.Bolt)} стоит **1+** Пункт Силы и применяется на дистанции, ${getFromDict(PowersTranslations, Powers.Healing)} стоит **3** Пункта Силы и применяется касанием. И какие же характеристики у **Лика смерти**? Никто не знает.`),
                        quickTextFormat(`**В рамках перевода оставим все эти вопросы на совести автора оригинала**.`),
                    ]),
                ];
            }

            function getNecromancerContent() {
                return [
                    {
                        text: 'Некромант (Necromancer)',
                        style: 'header4',
                        alignment: 'center',
                    },
                    {
                        ul: [
                            quickTextFormat(`Все заклинания мага, кроме Элементаля Воды (Water Elemental) и связанных с Аспектом огня`),
                        ],
                    },
                    {
                        columns: [
                            {
                                ul: [
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Blast)} (Смерть и Разложение (Death and Decay), Тяжелое Оружие (Heavy Weapon))`),
                                    quickTextFormat(`${getFromDict(SettingPowersTranslations, SettingPowers.FrostNova)} (${getFromDict(PowersTranslations, Powers.Blast)}, направленный на существо, накладывает *${getFromDict(SettingPowersTranslations, SettingPowers.Slow)}*)`),
                                    quickTextFormat(`*${getFromDict(SettingPowersTranslations, SettingPowers.LifeDrain)}*`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.LowerTrait)} (Калека (Cripple) — снижает Силу (${States.Strength}) и Драку (${Skills.Fighting}))`),
                                ],
                            },
                            {
                                ul: [
                                    quickTextFormat(`${getFromDict(SettingPowersTranslations, SettingPowers.OffensiveArmor)} (Морозная Броня (Frost Armor); *${getFromDict(SettingPowersTranslations, SettingPowers.Slow)}* вместо урона)`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Puppet)} (только нежить; длительность 1 час)`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Quickness)} (Нечестивое безумие (Unholy Frenzy); наносит 2d6 урона/раунд, но стоимость поддержания всего 1/раунд)`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Zombie)}`),
                                ],
                            },
                        ],
                        columnGap: 5,
                        alignment: 'left',
                    },
                ];
            }

            function getWarlockContent() {
                return [
                    {
                        text: 'Чернокнижник (Warlock)',
                        style: 'header4',
                        alignment: 'center',
                    },
                    {
                        ul: [
                            quickTextFormat(`Все заклинания магов, кроме Элементаля Воды (Water Elemental). Аспекты, связанные со льдом, холодом и молнией, меняются на Аспекты, связанные с огнем. Огненные Аспекты чернокнижников всегда представляют собой зеленоватое пламя скверны.`),
                        ],
                    },
                    {
                        columns: [
                            {
                                ul: [
                                    quickTextFormat(`*${getFromDict(SettingPowersTranslations, SettingPowers.Bloodlust)}*`),
                                    quickTextFormat(`*${getFromDict(SettingPowersTranslations, SettingPowers.Doom)}*`),
                                    quickTextFormat(`*${getFromDict(PowersTranslations, Powers.Fear)}*`),
                                    quickTextFormat(`*${getFromDict(SettingPowersTranslations, SettingPowers.LifeDrain)}*`),
                                ],
                            },
                            {
                                ul: [
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Puppet)}`),
                                    quickTextFormat(`*${getFromDict(SettingPowersTranslations, SettingPowers.Summon)}: Демоны (Demons)*`),
                                    quickTextFormat(`*${getFromDict(SettingPowersTranslations, SettingPowers.Summon)}: Феникс (Phoenix)*`),
                                ],
                            },
                        ],
                        columnGap: 5,
                        alignment: 'left',
                    },
                ];
            }

            return {
                stack: [
                    {
                        text: 'Тайная магия (Arcane Magic)',
                        style: 'header3',
                    },
                    {
                        ul: [
                            quickTextFormat(`**Навык**: ${getFromDict(SkillsTranslations, Skills.Spellcasting)} (${getFromDict(StatesTranslations, States.Smarts)})`),
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
                        style: 'header4',
                    },
                    {
                        text: 'Заклинания, выделенные курсивом, являются новыми в этой книге.',
                        italics: true,
                    },
                    'Для некоторых заклинаний Аспекты указаны в скобках. Если Аспекты не перечислены, используйте любые из тех, что кажутся подходящими.',
                    getMagesContent(),
                    getNecromancerContent(),
                    getWarlockContent(),
                ],
            }
        }

        function getDivinePowerContent() {
            function getInnerLightContent() {
                return [
                    {
                        text: 'Внутренний Свет (The Inner Light)',
                        style: 'header4',
                    },
                    {
                        ul: [
                            quickTextFormat(`**Кредо**: Защищай и оберегай своих ближних. Уничтожай зло. Сей семена радости и довольства, сражайся с негативом, яростью и отчаянием.`),
                            quickTextFormat(`**Профессиональные черты**: ${getFromDict(EdgesTranslations, Edges.HolyWarrior)}, ${getFromDict(EdgesTranslations, Edges.Champion)}`),
                        ],
                    },
                    {
                        text: 'Заклинания (Spells)',
                        style: 'header4',
                        alignment: 'center',
                    },
                    {
                        columns: [
                            {
                                ul: [
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Armor)} (Божественный щит (Divine Shield))`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Bolt)} (Ослепляющий свет (Searing Light))`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.BoostLowerTrait)}`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Dispel)}`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.EnvironmentalProtection)}`),
                                ],
                            },
                            {
                                ul: [
                                    quickTextFormat(`${getFromDict(SettingPowersTranslations, SettingPowers.FarSight)} (Святое зрение (Holy Vision))`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Healing)} (Святой свет (Holy Light))`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.GreaterHealing)}`),
                                    quickTextFormat(`*${getFromDict(SettingPowersTranslations, SettingPowers.InnerFire)}*`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Light)}`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Smite)}`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.SpeakLanguage)}`),
                                ],
                            },
                        ],
                        columnGap: 5,
                        margin: [paragraphOffset, 0, 0, 0],
                        alignment: 'left',
                    },
                    '\n',
                    getTipText([
                        quickTextFormat(`В оригинале используется заклинание *"Heal"*. Такого заклинания нет в английской книге правил, так что здесь и далее оно было заменено на "${getFromDict(PowersTranslations, Powers.Healing)}"`),
                    ]),
                ];
            }

            function getInnerShadowContent() {
                return [
                    {
                        text: 'Внутренняя тень (The Inner Shadow)',
                        style: 'header4',
                    },
                    {
                        ul: [
                            quickTextFormat(`**Кредо**: Сеять горе, ярость и отчаяние. Настраивать людей друг против друга. Препятствовать доброте и всему хорошему.`),
                            quickTextFormat(`**Профессиональные черты**: нет`),
                        ],
                    },
                    {
                        text: 'Заклинания (Spells)',
                        style: 'header4',
                        alignment: 'center',
                    },
                    {
                        columns: [
                            {
                                ul: [
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Armor)} (Божественный щит (Divine Shield))`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Blast)}`),
                                    quickTextFormat(`*${getFromDict(SettingPowersTranslations, SettingPowers.Bloodlust)}*`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Bolt)} (Боль (Pain))`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.BoostLowerTrait)}`),
                                ],
                            },
                            {
                                ul: [
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Dispel)}`),
                                    quickTextFormat(`${getFromDict(SettingPowersTranslations, SettingPowers.FarSight)} (Нечестивое видение (Unholy Vision))`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Healing)}`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Obscure)}`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Smite)}`),
                                ],
                            },
                        ],
                        columnGap: 5,
                        margin: [paragraphOffset, 0, 0, 0],
                        alignment: 'left',
                    },
                ];
            }

            function getShamanismContent() {
                return [
                    {
                        text: 'Шаманизм (Shamanism)',
                        style: 'header4',
                    },
                    {
                        ul: [
                            quickTextFormat(`**Кредо**: Уважайте природу и чтите духов. Проводите ритуалы и испытания, чтобы почтить духов, которые вам ближе всего (включая духов природы, стихий и предков).`),
                            quickTextFormat(`**Профессиональные черты**: ${getFromDict(EdgesTranslations, Edges.Champion)}`),
                        ],
                    },
                    {
                        text: 'Заклинания (Spells)',
                        style: 'header4',
                        alignment: 'center',
                    },
                    {
                        columns: [
                            {
                                ul: [
                                    quickTextFormat(`*${getFromDict(SettingPowersTranslations, SettingPowers.ArmorOffensive)}* (Щит молний (Lightning Shield))`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.BeastFriend)}`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Blast)} (Землетрясение (Earthquake))`),
                                    quickTextFormat(`*${getFromDict(SettingPowersTranslations, SettingPowers.Bloodlust)}*`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Bolt)} (Цепная молния (Chain Lightning) — использует дальность только для первой цели)`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.BoostLowerTrait)}`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.DetectConcealArcana)}`),
                                ],
                            },
                            {
                                ul: [
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Dispel)}`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.ElementalManipulation)}`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.EnvironmentalProtection)}`),
                                    quickTextFormat(`*${getFromDict(SettingPowersTranslations, SettingPowers.EtherealForm)}*`),
                                    quickTextFormat(`${getFromDict(SettingPowersTranslations, SettingPowers.FarSight)}`),
                                    quickTextFormat(`*${getFromDict(SettingPowersTranslations, SettingPowers.Mend)}*`),
                                    quickTextFormat(`*${getFromDict(SettingPowersTranslations, SettingPowers.Paralyze)}* (Поглощение землей (Engulfed in the earth))`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Quickness)}`),
                                    quickTextFormat(`*${getFromDict(SettingPowersTranslations, SettingPowers.Summon)}*: Духи животных (Animal Spirits)`),
                                ],
                            },
                        ],
                        columnGap: 5,
                        margin: [paragraphOffset, 0, 0, 0],
                        alignment: 'left',
                    },
                ];
            }

            function getNatureMagicContent() {
                return [
                    {
                        text: 'Магия природы (Nature Magic)',
                        style: 'header4',
                    },
                    {
                        ul: [
                            quickTextFormat(`**Кредо**: Защищать природу, особенно священные рощи. Почитать духов природы, защищать от угроз со стороны Тайной Магии.`),
                            quickTextFormat(`**Профессиональные черты**: ${getFromDict(EdgesTranslations, Edges.HolyWarrior)}, ${getFromDict(EdgesTranslations, Edges.Champion)}`),
                        ],
                    },
                    {
                        text: 'Заклинания (Spells)',
                        style: 'header4',
                        alignment: 'center',
                    },
                    {
                        columns: [
                            {
                                ul: [
                                    quickTextFormat(`${getFromDict(SettingPowersTranslations, SettingPowers.ArmorOffensive)} (Броня шипов (Armor of Thorns))`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Barrier)}`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.BoostLowerTrait)} (Волшебный Огонь (Faerie Fire) (Снижение Скрытности), Рев (Roar) (Усиление Драки))`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Burrow)}`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Deflection)}`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Dispel)}`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.ElementalManipulation)}`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Entangle)}`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.EnvironmentalProtection)}`),
                                ],
                            },
                            {
                                ul: [
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Healing)} (Благословение дождя (Rain’s Blessing), Покой (Tranquility) и т. д.)`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.GreaterHealing)}`),
                                    quickTextFormat(`*${getFromDict(SettingPowersTranslations, SettingPowers.Mend)}* (Только природные субстанции)`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Quickness)}`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.ShapeChange)}`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Smite)} (Улучшенное природное оружие (Enhanced natural weapons))`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Stun)} (Смерч (Cyclone))`),
                                    quickTextFormat(`*${getFromDict(SettingPowersTranslations, SettingPowers.Summon)}* (Древень (Treant), Дух животного (Animal Spirit))`),
                                ],
                            },
                        ],
                        columnGap: 5,
                        margin: [paragraphOffset, 0, 0, 0],
                        alignment: 'left',
                    },
                ];
            }

            function getEluneContent() {
                return [
                    {
                        text: 'Элуна, Богиня Луны (Elune, Goddess of the Moon)',
                        style: 'header4',
                    },
                    {
                        ul: [
                            quickTextFormat(`**Кредо**: Защищайте и оберегайте народ ночных эльфов. Защищайте Мировое Древо Нордрассил. Почитайте Элуну в своем молчании и мужестве. Остерегайтесь тлетворного влияния Тайной Магии и демонов.`),
                            quickTextFormat(`**Профессиональные черты**: ${getFromDict(EdgesTranslations, Edges.Champion)}`),
                        ],
                    },
                    {
                        text: 'Заклинания (Spells)',
                        style: 'header4',
                        alignment: 'center',
                    },
                    {
                        columns: [
                            {
                                ul: [
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.BeastFriend)}`),
                                    quickTextFormat(`*${getFromDict(SettingPowersTranslations, SettingPowers.Bombardment)}* (Звездопад (Starfall))`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.BoostTrait)} (Аура меткости (Trueshot) – усиливает Стрельбу)`),
                                ],
                            },
                            {
                                ul: [
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Invisibility)} (Слиться с тенями (Shadowblend), только ночью)`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Obscure)}`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Quickness)}`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Smite)} (Огненные стрелы (Flaming Arrows))`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Speed)}`),
                                ],
                            },
                        ],
                        columnGap: 5,
                        margin: [paragraphOffset, 0, 0, 0],
                        alignment: 'left',
                    },
                ];
            }

            function getVoodooContent() {
                return [
                    {
                        text: 'Вуду Тролля Джунглей (Jungle Troll Voodoo)',
                        style: 'header4',
                    },
                    {
                        ul: [
                            quickTextFormat(`**Кредо**: Умиротворяйте темных духов подношениями и ритуалами. Ритуальное жертвоприношение всегда приветствуется…`),
                            quickTextFormat(`**Обереги (Wards)**: Маги Вуду могут установить заклинание в Обереге, ритуальном круге или знаке, который активирует заклинание при прикосновении. Заклинатель делает проверку Веры (${Skills.Faith}) при установке Оберегов и решает, сколько Пунктов Силы вложить в них (должно быть достаточно для однократного наложения заклинание). Пункты Силы, потраченные таким образом, восстанавливаются гораздо медленнее: **1** в день. После того, как Оберег разряжается (в первую цель, которая его коснулась), затраченные Пункты Силы восстанавливаются обычным образом. Маги Вуду могут указать ограничение на активацию Оберега (только люди, только союзники и т. д.)`),
                            quickTextFormat(`**Профессиональные черты**: ${getFromDict(SettingEdgesTranslations, SettingEdges.DarkRitual)}`),
                        ],
                    },
                    {
                        text: 'Заклинания (Spells)',
                        style: 'header4',
                        alignment: 'center',
                    },
                    {
                        columns: [
                            {
                                ul: [
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Bolt)}`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Blast)}`),
                                    quickTextFormat(`*${getFromDict(SettingPowersTranslations, SettingPowers.Bombardment)}*`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.BoostLowerTrait)}`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.DetectConcealArcana)} (Обнаружение Невидимого (Detect Invisible))`),
                                ],
                            },
                            {
                                ul: [
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Healing)} (Исцеляющие Обереги (Healing Wards) активируются на 1 раунд позже, исцеляют только 1 Рану за раунд)`),
                                    quickTextFormat(`*${getFromDict(SettingPowersTranslations, SettingPowers.LifeDrain)}*`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Puppet)} (только Эмоции/Импульсы)`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Quickness)}`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Speed)}`),
                                    quickTextFormat(`*${getFromDict(SettingPowersTranslations, SettingPowers.TransformOther)}*`),
                                ],
                            },
                        ],
                        columnGap: 5,
                        margin: [paragraphOffset, 0, 0, 0],
                        alignment: 'left',
                    },
                    '\n',
                    getTipText([
                        quickTextFormat(`В оригинале используется заклинание *"Detect/Obscure Arcana"*. Такого заклинания нет в английской книге правил, так что оно было заменено на "${getFromDict(PowersTranslations, Powers.DetectConcealArcana)}"`),
                    ]),
                ];
            }

            function getUndeathContent() {
                return [
                    {
                        text: 'Нежить (Undeath)',
                        style: 'header4',
                    },
                    {
                        text: 'Эта форма чуда происходит либо от договора с Королем-личом (Lich King), делающего вас Рыцарем Смерти (Death Knight), либо от использования силы нежити в качестве Воин Тьмы (Dark Warrior). Последнее требует, чтобы вы были нежитью и не подчинялись Королю-личу, из-за чего доступно только Отрекшимися (Forsaken).',
                        leadingIndent: paragraphOffset,
                        italics: true,
                    },
                    {
                        ul: [
                            quickTextFormat(`**Кредо (Рыцарь Смерти (Death Knight))**: Развратить и подчинить себе все живое, подчинить мир власти Короля-лича. Служите ему верой и правдой.`),
                            quickTextFormat(`**Кредо (Воин Тьмы (Dark Warrior))**: Отомстить живым за то, что они не разделили вашу судьбу, и Плети за то, что она вырвала вас из могилы.`),
                            quickTextFormat(`**Профессиональные черты**: ${getFromDict(EdgesTranslations, Edges.Champion)}`),
                        ],
                    },
                    {
                        text: 'Заклинания (Spells)',
                        style: 'header4',
                        alignment: 'center',
                    },
                    {
                        columns: [
                            {
                                ul: [
                                    quickTextFormat(`*${getFromDict(SettingPowersTranslations, SettingPowers.ArmorOffensive)}* (Морозная броня (Frost Armor) — замедляет (Slows) цель) (только для Рыцарей Смерти)`),
                                    quickTextFormat(`${getFromDict(SettingPowersTranslations, SettingPowers.DeathCoil)} (${getFromDict(PowersTranslations, Powers.Bolt)} против живых, ${getFromDict(PowersTranslations, Powers.Healing)} против нежити)`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.BoostTrait)} (только для нежити или себя)`),
                                    quickTextFormat(`*${getFromDict(SettingPowersTranslations, SettingPowers.Contact)}* (Король-лич)`),
                                ],
                            },
                            {
                                ul: [
                                    quickTextFormat(`${getFromDict(SettingPowersTranslations, SettingPowers.DeathPact)} (${getFromDict(PowersTranslations, Powers.Healing)} себя; 2d6 урона (3d6 при подъеме) союзнику)`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.EnvironmentalProtection)} (холод (cold))`),
                                    quickTextFormat(`*${getFromDict(SettingPowersTranslations, SettingPowers.LifeDrain)}*`),
                                    quickTextFormat(`*${getFromDict(SettingPowersTranslations, SettingPowers.Mend)}* (только для сущностей, заряженных смертью)`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Puppet)} (только для Воинов Тьмы)`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Smite)}`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Zombie)} (Воины Тьмы могут поднять только трупы тех, кого они убили с помощью Сокрушения (${Powers.Smite}))`),
                                ],
                            },
                        ],
                        columnGap: 5,
                        margin: [paragraphOffset, 0, 0, 0],
                        alignment: 'left',
                    },
                ];
            }

            return {
                stack: [
                    {
                        text: 'Божественная сила (Чудеса) (Divine Power (Miracles))',
                        style: 'header3',
                    },
                    {
                        ul: [
                            quickTextFormat(`**Навык**: ${getFromDict(SkillsTranslations, Skills.Faith)} (${getFromDict(StatesTranslations, States.Spirit)})`),
                            quickTextFormat(`**Начальные пункты силы**: 10`),
                            quickTextFormat(`**Начальные силы**: 2`),
                            quickTextFormat(`**Подтипы**: Внутренний Свет (The Inner Light) (Альянс (Alliance)), Внутренняя Тень (The Inner Shadow) (Альянс (Alliance)), Шаманизм (Shamanism) (Орки (Orcs), Таурены (Tauren)), Магия Природы (Nature Magic) (Дети Кенария (Children of Cenarius), Ночные Эльфы-Друиды (Night Elf Druids), Таурены-Друиды (Tauren Druids)), Элуна (Elune) (Ночные Эльфы (Night Elf)), Вуду (Voodoo) (Тролли Джунглей (Jungle Troll)), Король-Лич (Lich King) (любой (any))`),
                            quickTextFormat(`**Защитник веры**: см. SW1 с. 108, SW2 с. 138. Кредо для каждого подтипа в Warcraft указано в отдельных записях ниже.`),
                        ],
                    },
                    getInnerLightContent(),
                    getInnerShadowContent(),
                    getShamanismContent(),
                    getNatureMagicContent(),
                    getEluneContent(),
                    getVoodooContent(),
                    getUndeathContent(),
                ],
            }
        }

        function getChannelingContent() {
            function getDwarvenAvatarContent() {
                return [
                    {
                        text: 'Дворфийский Аватар (Dwarven Avatar)',
                        style: 'header4',
                    },
                    {
                        ul: [
                            quickTextFormat(`**Требования**: раса - Дворф.`),
                            quickTextFormat(`**Навык**: ${getFromDict(SkillsTranslations, Skills.Faith)} (${getFromDict(StatesTranslations, States.Spirit)}). Аватар верит в Титанов, будучи их творением.`),
                            quickTextFormat(`**Профессиональные черты**: ${getFromDict(EdgesTranslations, Edges.Champion)}`),
                        ],
                    },
                    {
                        text: 'Силы (Powers)',
                        style: 'header4',
                        alignment: 'center',
                    },
                    {
                        columns: [
                            {
                                ul: [
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Armor)} (Каменная кожа (Stone Skin))`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Blast)} (Удар грома (Thunderclap))`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.BoostTrait)} (${getFromDict(StatesTranslations, States.Strength)}, ${getFromDict(StatesTranslations, States.Vigor)}, ${getFromDict(SkillsTranslations, Skills.Fighting)}, ${getFromDict(SkillsTranslations, Skills.Throwing)})`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Burrow)}`),
                                ],
                            },
                            {
                                ul: [
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.DetectArcana)} (в камне или металле — Каменная речь (Stone Speech))`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.EnvironmentalProtection)} (земля (earth), лава (lava))`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Smite)} (Молот бурь (Storm Bolt) — брошенный молот возвращается к метателю, Оглушает (${Powers.Stun}) в дополнение к урону)`),
                                ],
                            },
                        ],
                        columnGap: 5,
                        margin: [paragraphOffset, 0, 0, 0],
                        alignment: 'left',
                    },
                    '\n',
                    getTipText([
                        quickTextFormat(`В оригинале используется заклинание *"Burrowing"*. Такого заклинания нет в английской книге правил (есть только черта "${getFromDict(EdgesTranslations, Edges.Burrowing)}" в бестиарии), так что здесь и далее оно было заменено на "${getFromDict(PowersTranslations, Powers.Burrow)}"`),
                    ]),
                ];
            }

            function getTaurenTotemWarriorContent() {
                return [
                    {
                        text: 'Тотемный Воин Тауренов (Tauren Totem-Warrior)',
                        style: 'header4',
                    },
                    {
                        ul: [
                            quickTextFormat(`**Требования**: раса - Таурен.`),
                            quickTextFormat(`**Навык**: ${getFromDict(SkillsTranslations, Skills.Faith)} (${getFromDict(StatesTranslations, States.Spirit)}). Это форма шаманской магии.`),
                            quickTextFormat(`**Профессиональные черты**: ${getFromDict(EdgesTranslations, Edges.Champion)}`),
                        ],
                    },
                    {
                        text: 'Силы (Powers)',
                        style: 'header4',
                        alignment: 'center',
                    },
                    {
                        columns: [
                            {
                                ul: [
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Armor)}`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Blast)} (Громовая поступь (War Stomp) — оглушает не-Дикие карты в дополнение к урону)`),
                                    quickTextFormat(`*${getFromDict(SettingPowersTranslations, SettingPowers.Bloodlust)}*`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.BoostTrait)} (${getFromDict(StatesTranslations, States.Strength)}, ${getFromDict(StatesTranslations, States.Spirit)}, ${getFromDict(StatesTranslations, States.Vigor)}, ${getFromDict(SkillsTranslations, Skills.Fighting)})`),
                                ],
                            },
                            {
                                ul: [
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Burst)} (Волна Силы (Shockwave) — Оглушает (${Powers.Stun}) цели)`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Healing)}`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.GreaterHealing)}`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Smite)} (Тотемный удар (Totem Strike))`),
                                ],
                            },
                        ],
                        columnGap: 5,
                        margin: [paragraphOffset, 0, 0, 0],
                        alignment: 'left',
                    },
                ];
            }

            function getBlademasterContent() {
                return [
                    {
                        text: 'Мастер клинка (Blademaster)',
                        style: 'header4',
                    },
                    {
                        ul: [
                            quickTextFormat(`**Требования**: ${getFromDict(SkillsTranslations, Skills.Fighting)} d10+, ${getFromDict(EdgesTranslations, Edges.TrademarkWeapon)}`),
                            quickTextFormat(`**Навык**: ${getFromDict(SkillsTranslations, Skills.Focus)} (${getFromDict(StatesTranslations, States.Vigor)})`),
                        ],
                    },
                    {
                        text: 'Силы (Powers)',
                        style: 'header4',
                        alignment: 'center',
                    },
                    {
                        columns: [
                            {
                                ul: [
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Blast)} (Стальной вихрь (Bladestorm))`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.BoostTrait)} (${getFromDict(StatesTranslations, States.Agility)}, ${getFromDict(SkillsTranslations, Skills.Fighting)})`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Deflection)} (Иллюзия (Mirror Image))`),
                                ],
                            },
                            {
                                ul: [
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Invisibility)} (Стремительность (Wind Walk))`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Quickness)}`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Speed)}`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Smite)} (Смертельный удар (Critical Strike))`),
                                ],
                            },
                        ],
                        columnGap: 5,
                        margin: [paragraphOffset, 0, 0, 0],
                        alignment: 'left',
                    },
                ];
            }

            function getDemonHunterContent() {
                return [
                    {
                        text: 'Охотник на демонов (Demon Hunter)',
                        style: 'header4',
                    },
                    {
                        ul: [
                            quickTextFormat(`**Требования**: Это считается формой магии Чернокнижника, и персонаж должен взять изъян **${getFromDict(HindrancesTranslations, Hindrances.Bloodthirsty)}**. Персонаж также должен взять изъян **${getFromDict(HindrancesTranslations, Hindrances.BadEyes)} (мелкий)** (они засчитываются в обычный лимит изъянов, и персонаж получает за них очки). Персонаж жертвует своими глазами, чтобы связать демоническую силу, но пока у него остается хотя бы **1** Пункт Силы, у него есть мистическое зрение, которое их заменяет. Охотники на демонов должны взять ${getFromDict(PowersTranslations, Powers.Smite)} в качестве своей первой силы, поскольку их сила исходит от демонической сущности, вселенной в оружие.`),
                            quickTextFormat(`**Навык**: ${getFromDict(SkillsTranslations, Skills.Spellcasting)} (${getFromDict(StatesTranslations, States.Smarts)}).`),
                            quickTextFormat(`**Профессиональные черты**: ${getFromDict(EdgesTranslations, Edges.Champion)}`),
                        ],
                    },
                    {
                        text: 'Силы (Powers)',
                        style: 'header4',
                        alignment: 'center',
                    },
                    {
                        columns: [
                            {
                                ul: [
                                    quickTextFormat(`${getFromDict(SettingPowersTranslations, SettingPowers.AntiMagicShell)} (${getFromDict(PowersTranslations, Powers.Armor)} против магии, +2/4 к сопротивлению заклинаниям)`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Armor)} (Кожа Демона (Demon Skin))`),
                                    quickTextFormat(`*${getFromDict(SettingPowersTranslations, SettingPowers.Bloodlust)}*`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Bolt)} (${getFromDict(SettingPowersTranslations, SettingPowers.ManaBurn)}; истощает 1d6 Пунктов Силы в дополнение к Ранам)`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.BoostTrait)}`),
                                ],
                            },
                            {
                                ul: [
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.DetectArcana)} (Магия Демонов/Чернокнижников (Demonic/Warlock magic))`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.EnvironmentalProtection)} (тепло (heat))`),
                                    quickTextFormat(`*${getFromDict(SettingPowersTranslations, SettingPowers.OffensiveArmor)}* (Жар Преисподней (Immolate))`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.ShapeChange)} (только для Легенд (${Ranks.Legendary}); Демоническая форма (Demonic form))`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Smite)} (Одержимое демоном оружие)`),
                                ],
                            },
                        ],
                        columnGap: 5,
                        margin: [paragraphOffset, 0, 0, 0],
                        alignment: 'left',
                    },
                ];
            }

            function getPandarenBrewmasterContent() {
                return [
                    {
                        text: 'Пандаренский пивовар (Pandaren Brewmasters)',
                        style: 'header4',
                    },
                    {
                        ul: [
                            quickTextFormat(`**Требования**:`),
                            quickTextFormat(`**Навык**: ${getFromDict(SkillsTranslations, Skills.Geomancy)} (${getFromDict(StatesTranslations, States.Spirit)}). Это форма шаманской магии, которую пандарены практикуют через геомантию.`),
                            quickTextFormat(`**Профессиональные черты**: ${getFromDict(EdgesTranslations, Edges.Champion)}, ${getFromDict(EdgesTranslations, Edges.HolyWarrior)}`),
                        ],
                    },
                    {
                        text: 'Силы (Powers)',
                        style: 'header4',
                        alignment: 'center',
                    },
                    {
                        columns: [
                            {
                                ul: [
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.BoostTrait)} (${getFromDict(StatesTranslations, States.Strength)}, ${getFromDict(StatesTranslations, States.Spirit)}, ${getFromDict(StatesTranslations, States.Vigor)}, ${getFromDict(SkillsTranslations, Skills.Fighting)})`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Deflection)} (Пьяное Плетение (Drunken Weave))`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.EnvironmentalProtection)}`),
                                ],
                            },
                            {
                                ul: [
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Burst)} (Пылающее Дыхание (Flaming Breath))`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Healing)}`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Smite)} (Пьяный Удар (Drunken Blow))`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Stun)} (Одна цель - покрыть алкоголем (дает +2 к урону от огня))`),
                                ],
                            },
                        ],
                        columnGap: 5,
                        margin: [paragraphOffset, 0, 0, 0],
                        alignment: 'left',
                    },
                ];
            }

            function getNightElfWardenContent() {
                return [
                    {
                        text: 'Ночной эльф-хранитель (Night Elf Warden)',
                        style: 'header4',
                    },
                    {
                        ul: [
                            quickTextFormat(`**Требования**: раса - Ночной эльф, ${getFromDict(SkillsTranslations, Skills.Knowledge)} (магия (arcana)) d6+`),
                            quickTextFormat(`**Навык**: ${getFromDict(SkillsTranslations, Skills.Faith)} (${getFromDict(StatesTranslations, States.Spirit)}). Хранители верят в себя и все силы, которым они служат.`),
                            quickTextFormat(`**Профессиональные черты**: ${getFromDict(EdgesTranslations, Edges.Champion)}`),
                        ],
                    },
                    {
                        text: 'Силы (Powers)',
                        style: 'header4',
                        alignment: 'center',
                    },
                    {
                        columns: [
                            {
                                ul: [
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Armor)}`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.BoostTrait)} (${getFromDict(StatesTranslations, States.Agility)}, ${getFromDict(SkillsTranslations, Skills.Fighting)}, ${getFromDict(SkillsTranslations, Skills.Stealth)}, ${getFromDict(StatesTranslations, States.Strength)}, ${getFromDict(SkillsTranslations, Skills.Throwing)})`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Invisibility)} (Слияние с Тенью (Shadowmeld))`),
                                ],
                            },
                            {
                                ul: [
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Quickness)}`),
                                    quickTextFormat(`${getFromDict(PowersTranslations, Powers.Smite)}`),
                                    quickTextFormat(`${getFromDict(SettingPowersTranslations, SettingPowers.Summon)}: Аватар возмездия (Avatar of Vengeance) (${getFromDict(RanksTranslations, Ranks.Legendary)})`),
                                    quickTextFormat(`*${getFromDict(PowersTranslations, Powers.Teleport)}*`),
                                ],
                            },
                        ],
                        columnGap: 5,
                        margin: [paragraphOffset, 0, 0, 0],
                        alignment: 'left',
                    },
                ];
            }

            return {
                stack: [
                    {
                        text: 'Направление (Новое - Сродни Суперсилам) (Channeling (New - Akin to Superpowers))',
                        style: 'header3',
                    },
                    {
                        ul: [
                            quickTextFormat(`**Навык**: Различный`),
                            quickTextFormat(`**Начальные пункты силы**: 15`),
                            quickTextFormat(`**Начальные силы**: 1`),
                            quickTextFormat(`**Подтипы**: Дворфийские Аватары (Dwarven Avatars), Тотемные Воины Тауренов (Tauren Totem-Warriors), Мастера клинка (Blademasters), Охотники на демонов (Demon Hunters), Пандаренский пивовар (Pandaren Brewmasters)`),
                            quickTextFormat(`**Внутренняя сила (Inner Power)**: Направление -- это искусство фокусировки магической энергии посредством физического действия. Независимо от источника силы, Направители обращаются с ней не так, как другие, более лично. Диапазон всех заклинаний направления - это на себя или на предметы, которые он держит. Для наносящих урон заклинаний это означает, что заклинание сосредотачивается на Направителе, но не наносит ему урона. По этой причине Стрела (${Powers.Bolt}) обычно недоступна для Направителей, но, если кто-то придумает хороший Аспект, не подходящий для Взрыва (${Powers.Blast}) или Сокрушения (${Powers.Smite}), используйте его.`),
                        ],
                    },
                    getDwarvenAvatarContent(),
                    getTaurenTotemWarriorContent(),
                    getBlademasterContent(),
                    getDemonHunterContent(),
                    getPandarenBrewmasterContent(),
                    getNightElfWardenContent(),
                ],
            }
        }

        function getTinkeringContent() {
            return {
                stack: [
                    {
                        text: 'Мастерение (Основано на Безумной науке) (Tinkering (Based on Weird Science))',
                        style: 'header3',
                    },
                    {
                        ul: [
                            quickTextFormat(`**Навык**: ${getFromDict(SkillsTranslations, Skills.Tinkering)} (${getFromDict(StatesTranslations, States.Smarts)})`),
                            quickTextFormat(`**Начальные пункты силы**: 10`),
                            quickTextFormat(`**Начальные силы**: 1`),
                            quickTextFormat(`**Особое требование**: Расовая способность **Мастер на все руки (Tinker)**. Хотя гномы способны к Мастерению (Tinkering), большинство из них избегают опасности и нестабильности, предпочитая более надежную инженерию.`),
                        ],
                    },
                    {
                        text: 'Мастерение (Tinkering) работает точно так же, как Безумная наука (Weird Science) (см. SW1 с. 109, SW2 с. 136), со следующими изменениями:',
                        italics: true,
                    },
                    {
                        text: quickTextFormat(`**Неполадки (Malfunction)**: Устройства Мастерильщика (Tinkerer) изначально нестабильны. Когда происходят неполадки (malfunction), устройство взрывается, нанося 1d6 урона за каждые **5** неизрасходованных Пунктов Силы. Взрыв затрагивает только пользователя при 1-5 Пунктов Силы. При 6-15 Пунктах Силы он затрагивает *Малый шаблон взрыва*, при 16-25 — *Средний шаблон взрыва*, а выше 25 — *Большой шаблон взрыва*. Чтобы восстановить взорвавшееся устройство требуется проверка Мастерения (Tinkering) и 2d6 часов работы (с соответствующими материалами).`),
                        leadingIndent: paragraphOffset,
                        margin: [paragraphOffset, 0, 0, 0],
                    },
                    {
                        text: 'Списки заклинаний (Spell Lists)',
                        style: 'header4',
                    },
                    {
                        text: 'Заклинания, выделенные курсивом, являются новыми в этой книге.',
                        italics: true,
                    },
                    'Для некоторых заклинаний Аспекты указаны в скобках. Если Аспекты не перечислены, используйте любые из тех, что кажутся подходящими.',
                    {
                        ul: [
                            quickTextFormat(`${getFromDict(PowersTranslations, Powers.Armor)} (броня с силовым панцирем (powered armor shell))`),
                            quickTextFormat(`${getFromDict(PowersTranslations, Powers.Barrier)} (спонтанно возводящийся (spontaneously erecting); сталь (steel))`),
                            quickTextFormat(`${getFromDict(PowersTranslations, Powers.Blast)} (Ракеты (Rockets))`),
                            quickTextFormat(`${getFromDict(PowersTranslations, Powers.Bolt)} (Ракеты (Rockets))`),
                            quickTextFormat(`${getFromDict(SettingPowersTranslations, SettingPowers.Bombardment)} (Ракетный залп (Rocket Volley))`),
                            quickTextFormat(`${getFromDict(PowersTranslations, Powers.BoostLowerTrait)} (Механические помощники (Mechanical assists))`),
                            quickTextFormat(`${getFromDict(PowersTranslations, Powers.Burst)} (Огнемет (Flamethrower))`),
                            quickTextFormat(`${getFromDict(PowersTranslations, Powers.Entangle)}`),
                            quickTextFormat(`${getFromDict(PowersTranslations, Powers.EnvironmentalProtection)}`),
                            quickTextFormat(`${getFromDict(SettingPowersTranslations, SettingPowers.FarSight)} (Телескопы (Telescopes) — должна быть линия видимости)`),
                            quickTextFormat(`${getFromDict(PowersTranslations, Powers.Fly)} (Орнитоптеры (Ornithopters), Воздушные шары (Balloons))`),
                            quickTextFormat(`${getFromDict(PowersTranslations, Powers.Light)}`),
                            quickTextFormat(`${getFromDict(PowersTranslations, Powers.Obscure)} (Дымовое облако (Smoke cloud))`),
                            quickTextFormat(`${getFromDict(PowersTranslations, Powers.ShapeChange)} (${getFromDict(RanksTranslations, Ranks.Legendary)}, Механогоблин (Mechano-goblin))`),
                            quickTextFormat(`${getFromDict(PowersTranslations, Powers.Smite)} (Перегрузка (Overpower); только техническое оружие (tech. weapons only))`),
                            quickTextFormat(`${getFromDict(PowersTranslations, Powers.Speed)} (Колеса (Wheels), Гусеницы (Treads))`),
                            quickTextFormat(`*${getFromDict(SettingPowersTranslations, SettingPowers.Summon)}: Часовые гоблины (Clockwerk Goblins) (взрывается, нанося 2d6 урона (Малый взрыв) по окончании действия; поддержание "перепрезывает" гоблинов, но не поддерживает их существование)*`),
                        ],
                        alignment: 'left',
                    },
                    '\n',
                    getTipText([
                        quickTextFormat(`По поводу Часовых Гоблинов.`),
                        quickTextFormat(`В оригнале фраза выглядит следующим образом: *"explode for 2d6 damage (Small Burst) when duration over; maintenance "re-spawns" goblins, but does not maintain their existence"*.`),
                        quickTextFormat(`*"Re-spawns"* можно перевести как *"Возрождает"*, но, вероятно, имеется ввиду не это, так что был выбран вариант *"Перепрезывает"*. Другими словами, через **5** раундов стандартной длительности **Призыва (${SettingPowers.Summon})** призванные гоблины в любом случае взрываются, а при поддержании заклинания *"призываются"* новые. Имеют ли *"призванные поддержанием"* гоблины длительность в **5** раундов, в **1** или пока заклинание поддерживается - не понятно.`),
                        quickTextFormat(`**В рамках перевода оставим этот вопрос на совести автора оригинала**.`),
                        quickTextFormat(`По поводу вида списка заклинаний - это не моя инициатива. В оригинале у автора все предыдущие списки даны в две колонки, а тут одиночным списком.`),
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
                getDivinePowerContent(),
                getChannelingContent(),
                getTinkeringContent(),
            ],
            // pageBreak: 'after',
        };
    }

    function getNewPowersContent() {
        function getPowerContent(data) {
            const rank = data.rank
                ? [quickTextFormat(`**Ранг**: ${data.rank}`)]
                : [];
            const requirements = data.requirements
                ? [quickTextFormat(`**Требования**: ${data.requirements}`)]
                : [];
            const powerPoints = data.powerPoints
                ? [quickTextFormat(`**Пункты Силы**: ${data.powerPoints}`)]
                : [];
            const range = data.range
                ? [quickTextFormat(`**Дистанция**: ${data.range}`)]
                : [];
            const duration = data.duration
                ? [quickTextFormat(`**Требования**: ${data.duration}`)]
                : [];
            const trappings = data.trappings
                ? [quickTextFormat(`**Аспекты**: ${data.trappings}`)]
                : [];

            return {
                stack: [
                    {
                        text: data.title,
                        style: 'header4',
                    },
                    {
                        ul: [
                            ...rank,
                            ...requirements,
                            ...powerPoints,
                            ...range,
                            ...duration,
                            ...trappings,
                        ],
                    },
                    {
                        stack: data.text,
                        leadingIndent: paragraphOffset,
                    },
                ],
            };
        }

        return {
            stack: [
                {
                    text: 'Новые Силы (New Powers)',
                    style: 'header2',
                    pageBreak: 'before',
                },
                getPowerContent({
                    title: getFromDict(SettingPowersTranslations, SettingPowers.ArmorOffensive),
                    rank: getFromDict(RanksTranslations, Ranks.Novice),
                    powerPoints: '3',
                    range: 'Касание',
                    duration: '3 (1/раунд)',
                    trappings: `Элементальные ауры (Elemental auras), шипастая броня (spiked armor), стена клинков (wall of blades)`,
                    text: [
                        quickTextFormat(`В дополнение к обычным эффектам силы *${getFromDict(PowersTranslations, Powers.Armor)}*, эта сила наносит **2d6** урона любому, кто атакует субъект силы в ближнем бою.`),
                    ],
                }),
                getPowerContent({
                    title: getFromDict(SettingPowersTranslations, SettingPowers.BlastContinuous),
                    rank: getFromDict(RanksTranslations, Ranks.Veteran),
                    powerPoints: '4-8',
                    range: '12/24/48',
                    duration: '0 (2/раунд)',
                    trappings: `Град (Hailstorms), землетрясения (earthquakes), огненные дожди (rains of fire), нашествия насекомых (plagues of insects)`,
                    text: [
                        quickTextFormat(`Это особая форма *Взрыва (${Powers.Blast})*, которая позволяет заклинателю поддерживать эффект *Взрыва (${Powers.Blast})* в течение нескольких раундов. Целевая область устанавливается при активации и не может быть перемещена. Базовая стоимость составляет **4** вместо **2**, а дополнительные эффекты *Взрыва (${Powers.Blast})* добавляются по обычной цене *Взрыва (${Powers.Blast})*.`),
                    ],
                }),
                getPowerContent({
                    title: getFromDict(SettingPowersTranslations, SettingPowers.Blight),
                    rank: `${getFromDict(RanksTranslations, Ranks.Novice)}+`,
                    powerPoints: '3',
                    range: 'Смекалка',
                    duration: 'Постоянный',
                    trappings: `Плесень (Mold), гниение (rotting), пятна (blemishes), темные пятна (dark spots), неприятные запахи (foul odors)`,
                    text: [
                        quickTextFormat(`Эта сила — метод распространения Плети (Scourge) и силы Короля-лича (Lich King). При применении к однородному запасу пищи она заражает эту пищу порождающей нежить Порчей (undead-spawning Blight). Если вместо этого применить ее к земле, она преобразует область, равную Шаблону среднего взрыва, в Проклятую землю (Blighted ground). Подчиненные Короля-лича могут Призывать (Summon) его темные крепости на Проклятой земле, а любые посевы, выращенные на этой земле, или животные, пасущиеся на ней, также будут носителями Плети.`),
                        quickTextFormat(`Персонаж ранга ${getFromDict(RanksTranslations, Ranks.Heroic)}, который также обладает силой *${getFromDict(PowersTranslations, Powers.Zombie)}*, может использовать их вместе и заразить живое разумное существо Плетью. Заклинатель и его цель делают встречную проверку **Характера**. Если заклинатель преуспевает, цель становится Вурдалаком/Гулем (Ghoul). Дикие карты получают **+2** к сопротивлению этому эффекту.`),
                    ],
                }),
                getTipText([
                    quickTextFormat(`В описании Порчи (${SettingPowers.Blight}) мне показалось странным упоминание Плети (Scourge), как болезнии в *"любые посевы, выращенные на этой земле, или животные, пасущиеся на ней, также будут **носителями Плети** (any crops grown in that ground or animals grazed on it will likewise be **carriers of the Scourge**)"* и *"**заражать** живое разумное существо **Плетью** (**infect** a living, sentient being **with the Scourge**)"*. Учитывая, что Плеть (Scourge) - это фракция нежити под командование Короля-лича, не совсем понятно, как ей можно заразить. Возможно, имелось ввиду заражение Порчей (Blight), либо **подчинение** Плети (и воле Короля-лича, соответственно).`),
                ]),
                getPowerContent({
                    title: getFromDict(SettingPowersTranslations, SettingPowers.Bloodlust),
                    rank: `${getFromDict(RanksTranslations, Ranks.Novice)}`,
                    powerPoints: '4',
                    range: 'Касание',
                    duration: '3 (1/раунд)',
                    trappings: `Потрескивающая молния (Crackling lightning), питье крови (blood drinking), пылающие глаза (flaming eyes), выпирающие мускулы (bulging muscles)`,
                    text: [
                        quickTextFormat(`Эта сила вызывает состояние, идентичное **Берсерку (${Edges.Berserk})** *(см. SW1 с. 34, SW2 с. 56)*, за исключением того, что бонусы составляют **+4** вместо **+2**.`),
                    ],
                }),
                getPowerContent({
                    title: getFromDict(SettingPowersTranslations, SettingPowers.Bombardment),
                    rank: `${getFromDict(RanksTranslations, Ranks.Legendary)}`,
                    powerPoints: '8',
                    range: 'Различный',
                    duration: '0 (1/раунд)',
                    text: [
                        quickTextFormat(`Заклинатель этой могущественной силы призывает небеса поразить своих врагов. Каждый раунд все враги (определенные заклинателем) в пределах **Характера** заклинателя дюймов становятся целью горящего метеорита, который наносит **2d10** урона (цели могут сделать бросок **Ловкости**, чтобы получить **половину** урона, если они могут двигаться хотя бы на **1** дюйм). Заклинатель не может двигаться более чем на **1** дюйм, поддерживая это заклинание.`),
                    ],
                }),
                getPowerContent({
                    title: getFromDict(SettingPowersTranslations, SettingPowers.Contact),
                    rank: `${getFromDict(RanksTranslations, Ranks.Seasoned)} (Специальный)`,
                    powerPoints: '4 (Специальный)',
                    range: 'Смекалка * 5 или Специальный',
                    duration: '1 минута (1/минута)',
                    trappings: `Трансовые контакты (Trance contacts), гадальный бассейн (scrying pool), образы духов (spirit images)`,
                    text: [
                        quickTextFormat(`Персонаж может устанавливать дальний вербальный контакт со знакомым ему существом. Он может смутно видеть это существо и может нормально говорить в течение всего времени действия заклинания.`),
                        quickTextFormat(`В качестве альтернативы персонаж может создать какой-либо жетон (token) и передать его существу. Нет ограничений на расстояние, на котором можно связаться с существом, у которого есть ваш жетон или чей жетон есть у персонажа. Носитель жетона, который не обладает этой силой (или фактически Мистическим даром (${Edges.ArcaneBackground})), может активировать жетон, чтобы попросить вас активировать эту силу. Если и заклинатель, и носитель жетона обладают этой силой, они могут вместе потратить Пункты Силы для оплаты этого заклинания.`),
                        quickTextFormat(`Это заклинание можно изучить, когда персонаж еще ${getFromDict(RanksTranslations, Ranks.Novice)}, но в таком случае он может Контактировать (${SettingPowers.Contact}) только с теми, кто дал ему жетоны, и не может создавать жетоны сам.`),
                    ],
                }),
                getPowerContent({
                    title: getFromDict(SettingPowersTranslations, SettingPowers.Doom),
                    rank: `${getFromDict(RanksTranslations, Ranks.Legendary)}`,
                    powerPoints: '8',
                    range: 'Смекалка',
                    duration: '5 (2/раунд)',
                    text: [
                        quickTextFormat(`Эта демоническая сила медленно уничтожает свою цель, после чего использует труп в качестве канала для призыва в Азерот мощного демона.`),
                        quickTextFormat(`При применении цель получает **3d6** урона и должна делать проверку **Характера** против результата проверки **Колдовства (${Skills.Spellcasting})** пользователя каждый раз, когда хочет активировать Мистический дар (${Edges.ArcaneBackground}). Каждый последующий раунд цель получает еще **2d6** урона. Штрафы за раны (Wound) применяются к **Стойкости** при сопротивлении этому урону.`),
                        quickTextFormat(`Если цель становится Недееспособной (Incapacitated) из-за этого урона, она делает бросок **Выносливости** против результата проверки **Колдовства**. Успех означает, что цель продолжает получать урон кумулятивно. Неудача (или падение до Смертельной Раны (Mortal Wound)) означает, что персонаж мгновенно умирает. **1d6** раундов спустя из трупа персонажа восстанет Привратник Ада/Страж Рока (Doom Guard), союзник заклинателя.`),
                    ],
                }),
                getTipText([
                    quickTextFormat(`Не совсем понятно, зачем *"делать проверку Характера против результата проверки Колдовства пользователя каждый раз, когда хочет активировать Мистический дар (make a Spirit check against the user’s Spellcasting total each time they wish to activate an Arcane Background)"*. Что даст успех/провал этой проверки? Данных нет.`),
                    quickTextFormat(`**Оставлено на усмотрение ведущего**.`),
                ]),
                getPowerContent({
                    title: getFromDict(SettingPowersTranslations, SettingPowers.EtherealForm),
                    rank: `${getFromDict(RanksTranslations, Ranks.Seasoned)}`,
                    powerPoints: '4',
                    range: 'Касание',
                    duration: '3 (2/раунд)',
                    trappings: `Светящаяся, туманная форма (Glowing, hazy form)`,
                    text: [
                        quickTextFormat(`Эта сила позволяет вам переходить в эфирность/мир духов (etherealness) и из нее. Пока вы эфирны, немагические атаки не могут вас поразить, вы фактически ничего не весите и можете проходить сквозь твердые объекты. Если вы решите стать материальным и атаковать, вы останетесь материальным на время действия текущей карты, и любой другой персонаж на той же карте может атаковать вас как обычно, хотя это не прекращает действие силы.`),
                    ],
                }),
                getTipText([
                    quickTextFormat(`По поводу *"время действия текущей карты (duration of that card)"* и *"любой другой на той же карте (anyone else on the same card)"*. Карты в Savage Worlds исполюзуются (в том числе) для определения инициативы в бою. Вероятно, имеется ввиду, что персонажи с *такой-же* картой инициативы, как у применяющего заклинание, могут его атаковать, как обычно (если он вернулся в реальным мир, конечно). Судя по *"на той же карте (on the same card)"*, на персонажей с более высокой/низкой инициативой это не распространяется.`),
                ]),
                getPowerContent({
                    title: getFromDict(SettingPowersTranslations, SettingPowers.FarSight),
                    rank: `${getFromDict(RanksTranslations, Ranks.Seasoned)}`,
                    powerPoints: '2+',
                    range: 'Различный',
                    duration: '1 минута (2/минуту)',
                    trappings: `Светящиеся глаза (Glowing eyes), гадальный бассейн (scrying pool), образы духов (spirit images)`,
                    text: [
                        {
                            text: [
                                quickTextFormat(`Эта сила позволяет вам видеть дальше и шире, чем обычно. Вы можете видеть в пределах Шаблона среднего взрыва (Большого при подъеме). Вы можете перемещать центр "взрыва" со скоростью, равной вашему Магическому Навыку (Arcane Skill). Зоркость (${SettingPowers.FarSight}) имеет базовую дистанцию, равную `),
                                {
                                    text: 'Смекалке * 4',
                                    bold: true,
                                },
                                quickTextFormat(`. Каждые **2** Пункта Силы удваивают эту дистанцию.`),
                            ]
                        },
                    ],
                }),
                getPowerContent({
                    title: getFromDict(SettingPowersTranslations, SettingPowers.Inferno),
                    rank: `${getFromDict(RanksTranslations, Ranks.Legendary)}`,
                    requirements: quickTextFormat(`*${getFromDict(SettingPowersTranslations, SettingPowers.Summon)}: Демон (Demon)*`),
                    powerPoints: '12',
                    range: 'Смекалка * 3',
                    duration: '1 минута (1/раунд)',
                    text: [
                        quickTextFormat(`Эта сила призывает могущественного демона - Инфернала/Огненного голема (Infernal). Демон падает с неба в окутанном зеленым огнем метеорите в указанное заклинателем место и наносит **3d6** урона шаром Пламени Скверны в шаблоне Большого взрыва. В следующем раунде демон нападает на ближайшую цель, будь то друг или враг. Призыватель может попытаться выбрать цель для Инфернала каждый раунд с помощью встречной проверки **Характера**. Если призыватель бросает змеиные глаза, Инфернал нападает на него. Демоны игнорируют этот эффект заклинани, их вообще не волнует, кто будет умирать.`),
                    ],
                }),
                getPowerContent({
                    title: getFromDict(SettingPowersTranslations, SettingPowers.InnerFire),
                    rank: `${getFromDict(RanksTranslations, Ranks.Veteran)}`,
                    powerPoints: '4',
                    range: 'Смекалка',
                    duration: '5 (2/раунд)',
                    trappings: `Нимб белого света (Nimbus of white light)`,
                    text: [
                        quickTextFormat(`Это мощное заклинание увеличивает (boost) тип кубика Драки (${Skills.Fighting}) цели, а также дает ей **${getFromDict(PowersTranslations, Powers.Armor)}**.`),
                    ],
                }),
                getTipText([
                    quickTextFormat(`Видимо, это **${getFromDict(PowersTranslations, Powers.BoostTrait)} (${getFromDict(SkillsTranslations, Skills.Fighting)})** и **${getFromDict(PowersTranslations, Powers.Armor)}** в одном заклинании.`),
                ]),
                getPowerContent({
                    title: getFromDict(SettingPowersTranslations, SettingPowers.LifeDrain),
                    rank: `${getFromDict(RanksTranslations, Ranks.Veteran)}`,
                    powerPoints: '3',
                    range: 'Касание',
                    duration: '3 (1/раунд)',
                    trappings: `Нечестивая аура вокруг оружия (Unholy aura around weapon), черные когти (black claws), пьющее кровь оружие (blood-drinking weapons)`,
                    text: [
                        quickTextFormat(`Это действует как **${getFromDict(PowersTranslations, Powers.Smite)}**. Помимо этого, каждый раз, когда персонаж наносит удар под действием Высасывания жизни (${SettingPowers.LifeDrain}), он делает немедленную проверку исцеления (Healing Check).`),
                    ],
                }),
                getPowerContent({
                    title: getFromDict(SettingPowersTranslations, SettingPowers.Mend),
                    rank: `${getFromDict(RanksTranslations, Ranks.Novice)}`,
                    powerPoints: 'Различный',
                    range: 'Касание',
                    duration: 'Мгновенно',
                    trappings: `Мистическое свечение (Mystical glow), регенерация зданий (regenerating buildings)`,
                    text: [
                        quickTextFormat(`Заклинатели с этой силой могут Исцелять (Heal) неодушевленные предметы. Стоимость Пунктов Силы равна **половине** базовой Стойкости (Toughness) исцеляемого предмета.`),
                    ],
                }),
                getPowerContent({
                    title: getFromDict(SettingPowersTranslations, SettingPowers.Slow),
                    rank: `${getFromDict(RanksTranslations, Ranks.Seasoned)}`,
                    powerPoints: '3',
                    range: 'Смекалка',
                    duration: '3 (1/раунд)',
                    trappings: `Замешательство (Confusion), мешающие спутывания (interfering tangles), замедленное движение (slow motion)`,
                    text: [
                        quickTextFormat(`Заклинатель может замедлить врага. Цель этого заклинания должна сделать встречный бросок **Характера** против **Колдовства**. Если цель терпит неудачу, она замедляется, получая *одно действие каждые два раунда*. При подъеме цель также вынуждена сбросить любую карту выше **8** и взять другую. Вытягивание **Джокера** заканчиает действие заклинания.`),
                    ],
                }),
                getPowerContent({
                    title: getFromDict(SettingPowersTranslations, SettingPowers.Summon),
                    rank: `Различный`,
                    powerPoints: 'Различный',
                    range: '2',
                    duration: '5 (1/раунд)',
                    trappings: `Чародейские круги (Arcane circles), трещины в земле (cracks in the ground), вспышки молний (lightning flashes), появляющиеся духи (appearing spirits)`,
                    text: [
                        quickTextFormat(`Позволяет заклинателю призвать существо, которое поможет ему в бою или иной деятельности. Этой силой заклинатель может призвать только определенное существо. Чтобы призвать других существ, силу необходимо взять снова. Существо рассматривается как союзник во всех отношениях.`),
                        quickTextFormat(`Если заклинатель решает призвать существо слабее, чем он способен, он может призвать дополнительное существо этого типа за каждый Ранг, на который он выше минимально необходимого Ранга для призыва этого существа. Это повышает стоимость силы до максимального Ранга заклинателя.`),
                    ],
                }),
                '\n',
                {
                    table: {
                        widths: ['auto', 'auto', 'auto'],
                        body: [
                            [
                                {
                                    text: 'Стоимость',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Ранг',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Пример типа существа',
                                    bold: true,
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: '3',
                                    alignment: 'center',
                                },
                                {
                                    text: getFromDict(RanksTranslations, Ranks.Novice),
                                    alignment: 'center',
                                },
                                {
                                    text: 'Сова-наблюдатель (Sight Owl), Око Килрогга (Eye of Kilrogg)',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: '4',
                                    alignment: 'center',
                                },
                                {
                                    text: getFromDict(RanksTranslations, Ranks.Seasoned),
                                    alignment: 'center',
                                },
                                {
                                    text: 'Два Волка (wolves) или Древня/Энта (treants), Гончая Скверны (Fel hound)',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: '5',
                                    alignment: 'center',
                                },
                                {
                                    text: getFromDict(RanksTranslations, Ranks.Veteran),
                                    alignment: 'center',
                                },
                                {
                                    text: 'Два Лютоволка (dire wolves), Страж Скверны (Fel Guard), Элементаль воды (Water Elemental)',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: '6',
                                    alignment: 'center',
                                },
                                {
                                    text: getFromDict(RanksTranslations, Ranks.Heroic),
                                    alignment: 'center',
                                },
                                {
                                    text: 'Два Теневых Волка (Shadow Wolves), Привратник Ада/Страж Рока (Doomguard)',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: '7',
                                    alignment: 'center',
                                },
                                {
                                    text: getFromDict(RanksTranslations, Ranks.Legendary),
                                    alignment: 'center',
                                },
                                {
                                    text: 'Владыка преисподней (Pit Lord), Феникс (Phoenix)',
                                    alignment: 'center',
                                },
                            ],
                        ]
                    }
                },
                getPowerContent({
                    title: getFromDict(SettingPowersTranslations, SettingPowers.TransformOther),
                    rank: `Различный`,
                    powerPoints: 'Различный',
                    range: 'Смекалка',
                    duration: '1 минута (1/минута)',
                    trappings: `Проклятия (Curses), куклы вуду (voodoo dolls)`,
                    text: [
                        quickTextFormat(`Эта сила действует как **${getFromDict(PowersTranslations, Powers.ShapeChange)}**, только на другого персонажа. Это заклинание действует по-разному в зависимости от того, согласна ли цель принять эффект. Если цель добровольно принимает эффект, используйте таблицу для **Превращения (${Powers.ShapeChange})** (см. SW1 с. 117, SW2 с. 148), но требование к Рангу на единицу выше.`),
                        quickTextFormat(`Однако, если цель не желает принимать эффект, требуется встречная проверка Колдовства (${Skills.Spellcasting}) против **Характера** цели, и используется следующая таблица (основанная на степени ослабления цели).`),
                    ],
                }),
                '\n',
                {
                    table: {
                        widths: ['auto', 'auto', 'auto'],
                        body: [
                            [
                                {
                                    text: 'Стоимость',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Ранг',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Тип животного',
                                    bold: true,
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: '4',
                                    alignment: 'center',
                                },
                                {
                                    text: getFromDict(RanksTranslations, Ranks.Seasoned),
                                    alignment: 'center',
                                },
                                {
                                    text: 'Менее опасно, но способно атаковать',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: '5',
                                    alignment: 'center',
                                },
                                {
                                    text: getFromDict(RanksTranslations, Ranks.Veteran),
                                    alignment: 'center',
                                },
                                {
                                    text: 'Безвредно, но такая же Стойкость',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: '6',
                                    alignment: 'center',
                                },
                                {
                                    text: getFromDict(RanksTranslations, Ranks.Heroic),
                                    alignment: 'center',
                                },
                                {
                                    text: 'Стойкость меньше и безвредное',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: '7',
                                    alignment: 'center',
                                },
                                {
                                    text: getFromDict(RanksTranslations, Ranks.Legendary),
                                    alignment: 'center',
                                },
                                {
                                    text: 'Легко раздавить (Стойкость 1)',
                                    alignment: 'center',
                                },
                            ],
                        ]
                    }
                },
                '\n',
                getTipText([
                    quickTextFormat(`В версии от 29 марта 2005 утеряно описание силы **${getFromDict(SettingPowersTranslations, SettingPowers.Paralyze)}**. В рамказ перевода вставлю ее описание из версии от 28 марта 2004.`),
                    getHorizontalLine('white', 2),
                    getPowerContent({
                        title: getFromDict(SettingPowersTranslations, SettingPowers.Paralyze),
                        rank: `${getFromDict(RanksTranslations, Ranks.Seasoned)}`,
                        powerPoints: '2-6',
                        range: '6/12/24',
                        duration: '3 (1/раунд)',
                        trappings: `Потрескивающая энергия (Crackling energy), опутывающая листва (entangling foliage), паутина (spider webs)`,
                        text: [
                            quickTextFormat(`Этот эффект окружает цель каким-либо барьером или силой. Заклинатель делает проверку Магического Навыка (Arcane Skill) против **Ловкости** цели. В случае успеха цель обездвиживается и не может предпринимать какие-либо действия. Любое летающее существо, которое полагается на крылья, автоматически приземляется (урон от падения наносится как обычно). Парящие (Hovering) существа делают вторую проверку **Ловкости**, с **-2** за каждый подъем в броске Колдовства (${Skills.Spellcasting}). Неудача означает, что они тоже будут утянуты вниз.`),
                            quickTextFormat(`За **2** Пункта Силы это влияет на одну цель. За **4** Пункта Силы это влияет в области Шаблона малого взрыва, а за **6** Пунктов Силы это может повлиять в области Шаблона среднего взрыва.`),
                        ],
                    }),
                ]),
                {
                    text: 'Модифицированные заклинания (Modified Spells)',
                    style: 'header3',
                },
                getPowerContent({
                    title: getFromDict(PowersTranslations, Powers.GreaterHealing),
                    text: [
                        quickTextFormat(`Это заклинание способно оживлять персонажей из мертвых, если его произносит кто-то с Рангом ${getFromDict(RanksTranslations, Ranks.Veteran)} или выше. Однако не Дикие Карты должны сделать бросок **Характера** с **-2**, чтобы воскреснуть таким образом. Предполагается, что Дикие Карты обладают достаточной силой воли, чтобы вытащить себя из за Завесы Смерти (Veil of Death), если они того пожелают.`),
                    ],
                }),
                getPowerContent({
                    title: `${getFromDict(PowersTranslations, Powers.Healing)} и ${getFromDict(PowersTranslations, Powers.GreaterHealing)}`,
                    text: [
                        quickTextFormat(`Диапазон этого заклинания — **Характер**.`),
                    ],
                }),
                getPowerContent({
                    title: getFromDict(PowersTranslations, Powers.Teleport),
                    text: [
                        {
                            text: [
                                quickTextFormat(`Если у вас есть Круги Силы (Circle of Power) в точке отправления и точке назначения, диапазон увеличивается до **5** миль за каждые потраченные **3** Пункта Силы. Вы можете телепортировать до **10** фунтов`),
                                ' * ',
                                quickTextFormat(`ваш Магический Навык (Arcane Skill) в дополнительной массе — снаряжение, предметы, других людей — бесплатно. Каждые **10** фунтов`),
                                ' * ',
                                quickTextFormat(`ваш Магический Навык (Arcane Skill) сверх этого стоят дополнительный Пункт Силы. Персонаж также может телепортировать людей или предметы, не телепортируясь сам. Стоимость та же. Однако недобровольные цели могут сделать бросок **Характера**, чтобы сопротивляться.`),
                            ],
                        },
                    ],
                }),
                getPowerContent({
                    title: getFromDict(PowersTranslations, Powers.Zombie),
                    text: [
                        quickTextFormat(`Эта сила доступна на уровне ${getFromDict(RanksTranslations, Ranks.Seasoned)}, а не ${getFromDict(RanksTranslations, Ranks.Veteran)}.`),
                        quickTextFormat(`На Ранге ${getFromDict(RanksTranslations, Ranks.Legendary)} заклинатель может вместо этого заплатить **6** Пунстов Силы за каждую поднятую нежить, чтобы временно поднять целевые существа с их предыдущими характеристиками и способностями, за исключением того, что они теперь Нежить. Это длится всего несколько минут вместо часов.`),
                    ],
                }),
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
        getNewPowersContent(),
    ];
}

function getBestiaryContent() {
    function getUnitContent(data) {
        const title = data.isWildCard ? {
            layout: {
                hLineWidth: function (i, node) { return 0; },
                vLineWidth: function (i, node) { return 0; },
                paddingLeft: function (i, node) { return 0; },
                paddingRight: function (i, node) { return 0; },
                paddingTop: function (i, node) { return 0; },
                paddingBottom: function (i, node) { return 0; },
            },
            table: {
                body: [
                    [
                        {
                            image: getImagePath('wild-card-star.png'),
                            width: 24,
                            margin: [0, 0, 5, 0],
                            // alignment: 'center',
                        },
                        {
                            text: data.title,
                            style: 'header4',
                        },
                    ],
                ]
            }
        } : {
            text: data.title,
            style: 'header4',
        };

        const afterTitleText = [];
        if (data.afterTitleText) {
            afterTitleText.push(quickTextFormat(data.afterTitleText, { leadingIndent: paragraphOffset, }));
        }

        const attributes = [];
        if (data.attributes) {
            const attributesText = Object.keys(data.attributes ?? {})
                .map(attr => `${StatesTranslations[attr]} d${data.attributes?.[attr]}`)
                .join(', ');
            attributes.push(quickTextFormat(`**Атрибуты**: ${attributesText}`));
        }

        const skills = [];
        if (data.skills) {
            const skillsText = Object.keys(data.skills ?? {})
                .map(attr => `${SkillsTranslations[attr]} d${data.skills?.[attr]}`)
                .join(', ');
            skills.push(quickTextFormat(`**Навыки**: ${skillsText}`));
        }

        const commonAttributes = [];
        if (data.commonAttributes) {
            const commonAttributesList = [States.Pace, States.Parry, States.Toughness];
            const commonAttributesText = commonAttributesList
                .map(key => `**${StatesTranslations[key]}**: ${data.commonAttributes?.[key]}`)
                .join('; ');
            commonAttributes.push(quickTextFormat(commonAttributesText));
        }

        const equipment = [];
        if (data.equipment?.length > 0) {
            const equipmentText = data.equipment.join(', ');
            equipment.push(quickTextFormat(`**Снаряжение**: ${equipmentText}`));
        }

        const specialAbilities = [];
        if (data.specialAbilities?.length > 0) {
            specialAbilities.push({ text: 'Особые способности', bold: true, });
            specialAbilities.push({ ul: data.specialAbilities, });
        }

        const notSpecialAbilities = [];
        if (data.notSpecialAbilities?.length > 0) {
            notSpecialAbilities.push({ ul: data.notSpecialAbilities, });
        }

        const unitData = {};
        if (data.offset) {
            unitData.margin = [data.offset, 0, 0, 0];
        }

        return {
            stack: [
                title,
                ...afterTitleText,
                ...attributes,
                ...skills,
                ...commonAttributes,
                ...equipment,
                ...specialAbilities,
                ...notSpecialAbilities,
            ],
            ...unitData,
        };
    }

    function getCreepsContent() {
        return [
            {
                stack: [
                    quickTextFormat(`Ниже представлен выбор "крипов" (creeps) и не связанных между собой существ из игры Warcraft. Нежить Плети (Undead Scourge) и Демоны Пылающего Легиона (Demons of the Burning Legion) находятся далее, в разделе Юниты (Units).`),
                    quickTextFormat(`Пожалуйста, обратите внимание, что я дал одно "базовое" существо для каждого типа существ, а затем представил основные отклонения. В **Warcraft** монстры часто значительно сильнее этих базовых характеристик. Не стесняйтесь корректировать их в большую сторону практически для каждого монстра, перечисленного здесь.`),
                ],
                leadingIndent: paragraphOffset,
                margin: [0, 0, 0, 5],
            },
            getTipText([
                quickTextFormat(`Заранее хочу предупредить - иногда значения вторичных характеристик не равны значениям, полученным путем вычисляений согласно правилам Savage Worlds. Эти цифры взяты из оригинального документа, так что это не мои опечатки, а оплошности оригинального автора.`),
                quickTextFormat(`**В рамках перевода все цифры оставлены как есть.**`),
            ]),
            getUnitContent({
                isWildCard: true,
                title: 'Древний (Ancient)',
                attributes: {
                    [States.Agility]: '4',
                    [States.Smarts]: '10',
                    [States.Spirit]: '12',
                    [States.Strength]: '12+5',
                    [States.Vigor]: '12',
                },
                skills: {
                    [Skills.Faith]: '10',
                    [Skills.Fighting]: '8',
                    [Skills.Guts]: '12',
                    [Skills.Knowledge]: '10',
                    [Skills.Notice]: '10',
                },
                commonAttributes: {
                    [States.Pace]: '7',
                    [States.Parry]: '6',
                    [States.Toughness]: '15',
                },
                specialAbilities: [
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Armor)} +4**: Древние имеют кору древних и крепких деревьев в качестве своей шкуры.`),
                    quickTextFormat(`**Когти (Claws)**: Узловатые и заостренные пальцы Древних наносят урон **Сила+2** и считаются Тяжелым оружием.`),
                    quickTextFormat(`**Поглощение дерева (Consume Tree)**: Если Древний тратит Действие, чтобы поглотить дерево, он немедленно делает бросок Естественного Исцеления. Если Древний в Шоке (Shaken), он может сделать это вместо того, чтобы двигаться, если рядом есть дерево.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Hardy)}**: Когда Древний (Ancient) в Шоке (Shaken), он не получает ранений от ударов, вводящих его в Шок (Shaken) повторно.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Size)} +5**: Древние более 15 футов в высоту и широкие, как секвойя.`),
                ],
            }),
            getUnitContent({
                isWildCard: false,
                title: 'Ядовитый паук (Bane Spider)',
                attributes: {
                    [States.Agility]: '8',
                    [States.Smarts]: '6 (Ж)',
                    [States.Spirit]: '4',
                    [States.Strength]: '4',
                    [States.Vigor]: '6',
                },
                skills: {
                    [Skills.Climbing]: '10',
                    [Skills.Fighting]: '4',
                    [Skills.Guts]: '6',
                    [Skills.Notice]: '6',
                    [Skills.Stealth]: '10',
                },
                commonAttributes: {
                    [States.Pace]: '8',
                    [States.Parry]: '4',
                    [States.Toughness]: '4',
                },
                specialAbilities: [
                    quickTextFormat(`**Укус (Bite)**: Укус ядовитого паука наносит урон **Сила+1** и впрыскивает яд.`),
                    quickTextFormat(`**Существо зла (Creature of Evil)**: Ядовитые пауки наполнены энергией нежити и считаются злыми для тех сил и способностей, которые обнаруживают или влияют на зло.`),
                    quickTextFormat(`**Быстрая регенерация (Fast Regeneration)**: Ядовитые пауки делают бросок Естественного Исцеления в конце каждого хода.`),
                    quickTextFormat(`**Чувство добра (Sense Good)**: Ядовитые пауки могут автоматически чувствовать присутствие любого существа с аурой сверхъестественной доброты (aura of supernatural goodness).`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Size)} -1**`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Poison)} -2**: Яд Ядовитого паука вызывает потерю как **Силы**, так и **Выносливость** со скоростью **1** за раунд.`),
                ],
            }),
            getUnitContent({
                isWildCard: false,
                title: 'Василиск (Basilisk)',
                attributes: {
                    [States.Agility]: '6',
                    [States.Smarts]: '6 (Ж)',
                    [States.Spirit]: '6',
                    [States.Strength]: '10',
                    [States.Vigor]: '8',
                },
                skills: {
                    [Skills.Fighting]: '6',
                    [Skills.Gaze]: '10',
                    [Skills.Guts]: '10',
                    [Skills.Notice]: '6',
                },
                commonAttributes: {
                    [States.Pace]: '6',
                    [States.Parry]: '5',
                    [States.Toughness]: '13',
                },
                specialAbilities: [
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Armor)} +4**: Толстая шкура василиска усеяна живыми кристаллами.`),
                    quickTextFormat(`**Укус или Когти (Bite or Claws)**: **Сила+2**.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Paralysis)}**: При успешной атаке Взглядом (${Skills.Gaze}) цель должна пройти проверку **Выносливости** или заснуть на **3d6** раундов.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Size)} +3**: Звери Кодо (Kodo beasts) имеют рост пять футов в холке, с телосложением, как у носорога.`),
                ],
            }),
            getTipText([
                quickTextFormat(`*Звери Кодо (Kodo beasts)* в описании **Размера (${Edges.Size})** Василиска (Basilisk) - не моя опечатка, так написано в оригинале.`),
                quickTextFormat(`**В рамках перевода оставлено как есть.**`),
            ]),
            getUnitContent({
                isWildCard: false,
                title: 'Болотный зверь (Bog Beast)',
                attributes: {
                    [States.Agility]: '6',
                    [States.Smarts]: '6',
                    [States.Spirit]: '6',
                    [States.Strength]: '12',
                    [States.Vigor]: '8',
                },
                skills: {
                    [Skills.Fighting]: '6',
                    [Skills.Guts]: '8',
                    [Skills.Notice]: '6',
                    [Skills.Stealth]: '10 (+4 на болоте)',
                },
                commonAttributes: {
                    [States.Pace]: '6',
                    [States.Parry]: '6',
                    [States.Toughness]: '10',
                },
                specialAbilities: [
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Armor)} +2**: Шкура болотного зверя сделана из крепких корней и дерна.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Sweep)}**: Болотный зверь может атаковать все соседние цели со штрафом **-2**`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Size)} +2**: Болотные звери имеют рост от 7 до 8 футов.`),
                ],
            }),
            getUnitContent({
                isWildCard: false,
                title: 'Кентавр (Centaur)',
                attributes: {
                    [States.Agility]: '8',
                    [States.Smarts]: '4',
                    [States.Spirit]: '6',
                    [States.Strength]: '10',
                    [States.Vigor]: '8',
                },
                skills: {
                    [Skills.Fighting]: '8',
                    [Skills.Guts]: '8',
                    [Skills.Notice]: '6',
                    [Skills.Stealth]: '4',
                    [Skills.Throwing]: '6',
                },
                commonAttributes: {
                    [States.Pace]: '8',
                    [States.Parry]: '5',
                    [States.Toughness]: '8',
                },
                equipment: [
                    `Большой топор (d10+4, ББ 1, Двуручное)`,
                ],
                specialAbilities: [
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.FleetFooted)}**:  Кентавры бросают d10 при беге вместо d6.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.LowLightVision)}**:  Кентавр игнорирует штрафы от тусклого и темного освещения.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Size)} +2**:  Кентавры выше 7 футов ростом и весят более 1000 фунтов.`),
                ],
            }),
            getUnitContent({
                isWildCard: false,
                title: 'Химера (Chimaera)',
                attributes: {
                    [States.Agility]: '6',
                    [States.Smarts]: '8',
                    [States.Spirit]: '8',
                    [States.Strength]: '12',
                    [States.Vigor]: '10',
                },
                skills: {
                    [Skills.Fighting]: '8',
                    [Skills.Guts]: '12',
                    [Skills.Notice]: '10',
                    [Skills.Survival]: '10',
                },
                commonAttributes: {
                    [States.Pace]: '6',
                    [States.Parry]: '6',
                    [States.Toughness]: '14',
                },
                specialAbilities: [
                    quickTextFormat(`**Кислотное дыхание (Acid Breath)**: Химера может выдыхать конус кислоты, нанося 2d10 урона и предотвращая Быструю Регенерацию (Fast Regeneration).`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Armor)} +3**`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Flight)}**: Химера может летать на высоте 16 дюймов со скоростью набора высоты 6 дюймов.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Hardy)}**: Когда Химера (Chimaera) в Шоке (Shaken), она не получает ранений от ударов, вводящих ее в Шок (Shaken) повторно.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Large)}**: Все атакующие получают бонус **+2** к атаке по Химере.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Size)} +4**`),
                ],
            }),
            getUnitContent({
                isWildCard: false,
                title: 'Дренеи (Draenei)',
                attributes: {
                    [States.Agility]: '6',
                    [States.Smarts]: '6',
                    [States.Spirit]: '6',
                    [States.Strength]: '6',
                    [States.Vigor]: '6',
                },
                skills: {
                    [Skills.Fighting]: '4',
                    [Skills.Guts]: '4',
                    [Skills.Notice]: '6',
                },
                commonAttributes: {
                    [States.Pace]: '6',
                    [States.Parry]: '4',
                    [States.Toughness]: '6',
                },
                equipment: [
                    `Кожаная броня (+1)`,
                    `Длинный меч (Сила+3)`,
                ],
                specialAbilities: [
                    quickTextFormat(`**Ненависть к оркам (Orc Hatred)**: Дренеи получают **+2** ко всем броскам в бою против орков.`),
                ],
            }),
            getUnitContent({
                isWildCard: true,
                title: 'Драконы (Dragons)',
            }),
            {
                stack: [
                    `Молодые драконы используют характеристики Дрейков (Drakes) (см. SW1 с. 142, SW2 с. 181), за исключением того, что у них есть Полет (Flight) (16 дюймов, Подъем 6 дюймов) и сознание (sentience). Старшие драконы используют характеристики Дракона (Dragon) (см. SW1 с. 142, SW2 с. 181).`,
                    `У всех драконов есть Мистический дар (Магия Дракона (Dragon Magic)); это форма Магии Природы (Nature Magic). Существует пять различных типов (Стай (Flights)) Драконов. Каждая имеет свой тип дыхания (все имеют одинаковую статистику) и особенности магического таланта.`,
                ],
                leadingIndent: paragraphOffset,
            },
            getUnitContent({
                isWildCard: false,
                title: 'Черный дракон (Black Dragon)',
                notSpecialAbilities: [
                    quickTextFormat(`**Тип дыхания (Breath Weapon)**: Сгустки магмы (Gouts of magma).`),
                    quickTextFormat(`**Магия дракона (Dragon Magic)**: Пункты Силы 10/20; Силы: 2/3 из списка: *${getFromDict(PowersTranslations, Powers.Barrier)} (стена пламени (wall of flame))*, *${getFromDict(PowersTranslations, Powers.Blast)} (огненный шар (fireball))*, *${getFromDict(PowersTranslations, Powers.Bolt)} (огонь (fire))*, *${getFromDict(PowersTranslations, Powers.LowerTrait)}*, *${getFromDict(PowersTranslations, Powers.MindReading)}*, *${getFromDict(PowersTranslations, Powers.Puppet)}*`),
                    quickTextFormat(`**Иммунитет (Immunity)**: Черные драконы невосприимчивы к огню.`),
                ],
                offset: paragraphOffset,
            }),
            getUnitContent({
                isWildCard: false,
                title: 'Синий дракон (Blue Dragon)',
                notSpecialAbilities: [
                    quickTextFormat(`**Тип дыхания (Breath Weapon)**: Мороз (Frost)`),
                    quickTextFormat(`**Магия дракона (Dragon Magic)**: Пункты Силы 20/30; Силы: 3/4 из списка: *${getFromDict(PowersTranslations, Powers.Barrier)}*, *${getFromDict(PowersTranslations, Powers.BoostLowerTrait)}*, *${getFromDict(PowersTranslations, Powers.DetectConcealArcana)}*, *${getFromDict(SettingPowersTranslations, SettingPowers.FarSight)}*, *${getFromDict(SettingPowersTranslations, SettingPowers.ManaBurn)}*, *${getFromDict(PowersTranslations, Powers.MindReading)}*`),
                    quickTextFormat(`**Иммунитет (Immunity)**: Черные драконы невосприимчивы к холоду.`),
                ],
                offset: paragraphOffset,
            }),
            getTipText([
                quickTextFormat(`*Черные драконы* в описании **Иммунитет (Immunity)** *Синего дракона (Blue Dragon)* - не моя опечатка, так написано в оригинале.`),
                quickTextFormat(`**В рамках перевода оставлено как есть.**`),
            ]),
            getUnitContent({
                isWildCard: false,
                title: 'Бронзовый дракон (Bronze Dragon)',
                notSpecialAbilities: [
                    quickTextFormat(`**Тип дыхания (Breath Weapon)**: Расплавленный песок и старение (Проверка **Выносливости** с **+2** или потерять изъян **${getFromDict(HindrancesTranslations, Hindrances.Young)}**/получить изъян **${getFromDict(HindrancesTranslations, Hindrances.Elderly)}**. Если уже есть изъян **${getFromDict(HindrancesTranslations, Hindrances.Elderly)}** - цели умирают)`),
                    quickTextFormat(`**Магия дракона (Dragon Magic)**: Пункты Силы 10/20; Силы: 2/3 из списка: *${getFromDict(PowersTranslations, Powers.BoostLowerTrait)}*, *${getFromDict(PowersTranslations, Powers.Deflection)}*, *${getFromDict(PowersTranslations, Powers.DetectConcealArcana)}*, *${getFromDict(PowersTranslations, Powers.Obscure)}*, *${getFromDict(PowersTranslations, Powers.Puppet)}*, *${getFromDict(PowersTranslations, Powers.Smite)}*`),
                ],
                offset: paragraphOffset,
            }),
            getUnitContent({
                isWildCard: false,
                title: 'Зеленый дракон (Green Dragon)',
                notSpecialAbilities: [
                    quickTextFormat(`**Тип дыхания (Breath Weapon)**: Кислота и сон (Проверка **Выносливости** или сон на **3d6** раундов)`),
                    quickTextFormat(`**Магия дракона (Dragon Magic)**: Пункты Силы 20/30; Силы: 3/4 из списка: *${getFromDict(PowersTranslations, Powers.Deflection)}*, *${getFromDict(PowersTranslations, Powers.MindReading)}*, *${getFromDict(PowersTranslations, Powers.Obscure)}*, *${getFromDict(PowersTranslations, Powers.Puppet)}*, *${getFromDict(PowersTranslations, Powers.Stun)}*, *${getFromDict(SettingPowersTranslations, SettingPowers.EtherealForm)}*`),
                    quickTextFormat(`**Эфирный (Ethereal)**: Как хранители Изумрудного Сна (Emerald Dream), зеленые драконы могут становиться эфирными (ethereal) по своему желанию. Будучи эфирными, они могут соскользнуть (slip sideways) в Изумрудный Сон.`),
                ],
                offset: paragraphOffset,
            }),
            getUnitContent({
                isWildCard: false,
                title: 'Красный дракон (Red Dragon)',
                notSpecialAbilities: [
                    quickTextFormat(`**Тип дыхания (Breath Weapon)**: Поток огня. Пламя красного дракона обновляет и восстанавливает природу в пораженной области.`),
                    quickTextFormat(`**Магия дракона (Dragon Magic)**: Пункты Силы 10/25; Силы: 2/4 из списка: *${getFromDict(PowersTranslations, Powers.Armor)}*, *${getFromDict(PowersTranslations, Powers.BoostLowerTrait)}*, *${getFromDict(PowersTranslations, Powers.Dispel)}*, *${getFromDict(PowersTranslations, Powers.Healing)}*, *${getFromDict(PowersTranslations, Powers.MindReading)}*, *${getFromDict(PowersTranslations, Powers.Puppet)}*, *${getFromDict(SettingPowersTranslations, SettingPowers.Summon)} (Животные (Animals))*`),
                    quickTextFormat(`**Иммунитет (Immunity)**: Красные драконы невосприимчивы к огню.`),
                ],
                offset: paragraphOffset,
            }),
            getUnitContent({
                isWildCard: false,
                title: 'Драконид (Dragonspawn)',
                attributes: {
                    [States.Agility]: '8',
                    [States.Smarts]: '6',
                    [States.Spirit]: '8',
                    [States.Strength]: '8',
                    [States.Vigor]: '10',
                },
                skills: {
                    [Skills.Fighting]: '8',
                    [Skills.Guts]: '12',
                    [Skills.Notice]: '6',
                    [Skills.Throwing]: '8',
                },
                commonAttributes: {
                    [States.Pace]: '7',
                    [States.Parry]: '6',
                    [States.Toughness]: '13 (11)',
                },
                equipment: [
                    `Чешуйчатая броня (+2)`,
                    `Длинный меч (Сила+3)`,
                    `Метательные копья (Сила+2, 4/8/12)`,
                ],
                specialAbilities: [
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Armor)} +2**: У Драконида толстая кожистая шкура.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Fearless)}**: У Драконида иммунитет к Страху, создаваемому драконами.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Immunity)}**: У Драконида иммунитет к стихийному типу дыхания их хозяина-дракона.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Size)} +2**: У Драконида нижняя часть тела похожа на ящерицу; в целом они размером с ломовую лошадь.`),
                ],
            }),
            getUnitContent({
                isWildCard: false,
                title: 'Волшебный дракон/Лесной дракончик (Faerie Dragon)',
                attributes: {
                    [States.Agility]: '10',
                    [States.Smarts]: '6',
                    [States.Spirit]: '8',
                    [States.Strength]: '6',
                    [States.Vigor]: '12+1',
                },
                skills: {
                    [Skills.Fighting]: '6',
                    [Skills.Guts]: '12',
                    [Skills.Notice]: '10',
                    [Skills.Shooting]: '8',
                },
                commonAttributes: {
                    [States.Pace]: '6',
                    [States.Parry]: '5',
                    [States.Toughness]: '9 (модифицированная)',
                },
                specialAbilities: [
                    quickTextFormat(`**Пункты Силы**: 15`),
                    quickTextFormat(`**Шипы (Barbs)**: **Сила+2**, 5/10/20`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Flight)}**: Волшебные драконы имеют скорость полета 16 дюймов и скорость набора высоты 10 дюймов.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Immunity)}**: Волшебные драконы охраняют Изумрудный Сон от магии и, таким образом, невосприимчивы ко всем магическим эффектам.`),
                    quickTextFormat(`**Фазовый сдвиг (Phase Shift)**: Волшебные драконы могут потратить **2** Пункта Силы, чтобы перейти в Изумрудный Сон. Они исчезают на 1 минуту (1/минуту), а затем возвращаются в мир смертных в том же месте.`),
                    quickTextFormat(`**Вспышка маны (Mana Flare)**: потратив **4** Пункта Силы, Волшебные драконы могут создать вокруг себя ауру "негативной маны" (aura of "negative mana"). Все заклинатели в пределах половины **Характера** от дракона получают **1d6** урона за каждые **2** потраченные маны. Этот эффект длится 10 минут (2/минуту).`),
                ],
            }),
            getUnitContent({
                isWildCard: false,
                title: 'Фурболг (Furbolg)',
                attributes: {
                    [States.Agility]: '6',
                    [States.Smarts]: '4',
                    [States.Spirit]: '6',
                    [States.Strength]: '12',
                    [States.Vigor]: '10',
                },
                skills: {
                    [Skills.Fighting]: '6',
                    [Skills.Guts]: '8',
                    [Skills.Notice]: '6',
                },
                commonAttributes: {
                    [States.Pace]: '7',
                    [States.Parry]: '5',
                    [States.Toughness]: '10',
                },
                specialAbilities: [
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Armor)} +1**: У фурболгов толстая шкура.`),
                    quickTextFormat(`**Когти (Claws)**: **Сила+2**.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Size)} +2**: Фурболги ростом 8 футов.`),
                ],
            }),
            getUnitContent({
                isWildCard: false,
                title: 'Оскверненный фурболг (Furbolg, corrupted)',
                attributes: {
                    [States.Agility]: '6',
                    [States.Smarts]: '4',
                    [States.Spirit]: '6',
                    [States.Strength]: '12+2',
                    [States.Vigor]: '10',
                },
                skills: {
                    [Skills.Fighting]: '8',
                    [Skills.Guts]: '10',
                    [Skills.Notice]: '4',
                },
                commonAttributes: {
                    [States.Pace]: '7',
                    [States.Parry]: '6',
                    [States.Toughness]: '10',
                },
                specialAbilities: [
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Armor)} +1**: У фурболгов толстая шкура.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Berserk)}**`),
                    quickTextFormat(`**Когти/Укус (Claws/Bite)**: **Сила+2**.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Frenzy)}**`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Size)} +2**: Фурболги ростом 8 футов.`),
                ],
                offset: paragraphOffset,
            }),
            getUnitContent({
                isWildCard: false,
                title: 'Призрак (Ghost)',
                attributes: {
                    [States.Agility]: '6',
                    [States.Smarts]: '6',
                    [States.Spirit]: '10',
                    [States.Strength]: '6',
                    [States.Vigor]: '6',
                },
                skills: {
                    [Skills.Fighting]: '6',
                    [Skills.Intimidation]: '12+2',
                    [Skills.Notice]: '12',
                    [Skills.Stealth]: '12',
                    [Skills.Taunt]: '10',
                },
                commonAttributes: {
                    [States.Pace]: '6',
                    [States.Parry]: '5',
                    [States.Toughness]: '5',
                },
                specialAbilities: [
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Ethereal)}**: Призраки нематериальны и невидимы, когда хотят. Они не могут наносить физический вред.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Fear)} (-2)**`),
                    quickTextFormat(`**Высасывание жизни (Life Drain)**: Успешная проверка Запугивания (Intimidation) против цели заставляет ее страдать от уровня истощения (level of exhaustion), поскольку призраки питаются отрицательными эмоциями. Эффект Страха (Fear) недостаточно сфокусирован, однако призрак может Запугать (Intimidate) противника, пораженного его Страхом (Fear), чтобы Высосать из него Жизнь (Life Drain).`),
                ],
            }),
            getUnitContent({
                isWildCard: false,
                title: 'Гнолл (Gnoll)',
                attributes: {
                    [States.Agility]: '6',
                    [States.Smarts]: '4',
                    [States.Spirit]: '6',
                    [States.Strength]: '6',
                    [States.Vigor]: '6',
                },
                skills: {
                    [Skills.Fighting]: '6',
                    [Skills.Guts]: '6',
                    [Skills.Notice]: '6',
                    [Skills.Shooting]: '6',
                },
                commonAttributes: {
                    [States.Pace]: '6',
                    [States.Parry]: '5',
                    [States.Toughness]: '8',
                },
                equipment: [
                    `Цеп (d6+2, игнорирует щиты)`,
                    `Толстые шкуры (+1)`,
                ],
                specialAbilities: [
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Armor)} +1**: У Гноллов прочная шкура и густые спутанные волосы.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Size)} +1**: Гноллы ростом не выше людей, но у них масса тела на уровне орков и сгорбленная походка.`),
                ],
            }),
            getUnitContent({
                isWildCard: false,
                title: 'Гнолл, Убийца (Gnoll, Assassin)',
                afterTitleText: `Некоторые гноллы избегают лобовой жестокости своих сородичей в пользу скрытности, коварства и дальних атак.`,
                attributes: {
                    [States.Agility]: '8',
                    [States.Smarts]: '6',
                    [States.Spirit]: '4',
                    [States.Strength]: '6',
                    [States.Vigor]: '6',
                },
                skills: {
                    [Skills.Fighting]: '4',
                    [Skills.Guts]: '4',
                    [Skills.Notice]: '6',
                    [Skills.Shooting]: '8',
                    [Skills.Stealth]: '6',
                },
                commonAttributes: {
                    [States.Pace]: '6',
                    [States.Parry]: '4',
                    [States.Toughness]: '8',
                },
                equipment: [
                    `Толстые шкуры (+1)`,
                    `Короткий лук (2d6, 12/2/48)`,
                    `Отравленные стрелы (-2, -2 штраф к проверкам Выносливости)`,
                ],
                specialAbilities: [
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Armor)} +1**: У Гноллов прочная шкура и густые спутанные волосы.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Size)} +1**: Гноллы ростом не выше людей, но у них масса тела на уровне орков и сгорбленная походка.`),
                ],
                offset: paragraphOffset,
            }),
            getUnitContent({
                isWildCard: false,
                title: 'Гнолл, Надзиратель (Gnoll, Warden)',
                afterTitleText: `Надзиратели — духовные наставники и заклинатели общества гноллов.`,
                attributes: {
                    [States.Agility]: '6',
                    [States.Smarts]: '6',
                    [States.Spirit]: '6',
                    [States.Strength]: '6',
                    [States.Vigor]: '8',
                },
                skills: {
                    [Skills.Fighting]: '4',
                    [Skills.Guts]: '8',
                    [Skills.Notice]: '8',
                    [Skills.Spellcasting]: '8',
                },
                commonAttributes: {
                    [States.Pace]: '6',
                    [States.Parry]: '4',
                    [States.Toughness]: '8',
                },
                equipment: [
                    `Цеп (d6+2, игнорирует щиты)`,
                ],
                specialAbilities: [
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.ArcaneBackground)}**: Надзиратели гноллов обладают Мистическим даром (${Edges.ArcaneBackground}) (Тайная магия (Arcane Magic)). У них **10** Пунктов Силы, и они могут использовать заклинания ${getFromDict(PowersTranslations, Powers.Bolt)}, ${getFromDict(PowersTranslations, Powers.Dispel)} и ${getFromDict(PowersTranslations, Powers.Smite)}.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Armor)} +1**: У Гноллов прочная шкура и густые спутанные волосы.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Size)} +1**: Гноллы ростом не выше людей, но у них масса тела на уровне орков и сгорбленная походка.`),
                ],
                offset: paragraphOffset,
            }),
            getUnitContent({
                isWildCard: false,
                title: 'Голем (Golem)',
                attributes: {
                    [States.Agility]: '4',
                    [States.Smarts]: '6 (Ж)',
                    [States.Spirit]: '6',
                    [States.Strength]: '12+2',
                    [States.Vigor]: '8',
                },
                skills: {
                    [Skills.Fighting]: '8',
                },
                commonAttributes: {
                    [States.Pace]: '5',
                    [States.Parry]: '6',
                    [States.Toughness]: '13',
                },
                specialAbilities: [
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Armor)} +4**: "Кожа" големов сделана из камня или металла.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Construct)}**: Големы имеют +2 к восстановлению после Шока (Shaken), невосприимчивы к болезням, ядам и штрафам за ранения, а также получают половину урона от колющего оружия.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Fearless)}**: Големы невосприимчивы к эффектам страха.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Large)}**: Все атаки на голема существами обычного размера получают бонус +2.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Size)} +3**: Большинство големов имеют рост более 9 футов и сделаны из цельного камня или металла.`),
                ],
            }),
            getUnitContent({
                isWildCard: false,
                title: 'Грифон (Gryphon)',
                attributes: {
                    [States.Agility]: '10',
                    [States.Smarts]: '4',
                    [States.Spirit]: '8',
                    [States.Strength]: '12',
                    [States.Vigor]: '8',
                },
                skills: {
                    [Skills.Fighting]: '8',
                    [Skills.Guts]: '8',
                    [Skills.Notice]: '8',
                },
                commonAttributes: {
                    [States.Pace]: '6',
                    [States.Parry]: '6',
                    [States.Toughness]: '8',
                },
                specialAbilities: [
                    quickTextFormat(`**Клюв/Когти (Beak/Claws)**: **Сила+2**.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Flight)}**: Скорость полета грифонов составляет 12 дюймов, а скорость набора высоты — 4 дюйма.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Size)} +2**: Грифоны больше льва.`),
                    quickTextFormat(`**Пикирование (Swoop)**: Если грифон переместится не менее чем на 6 дюймов по прямой перед атакой, он совершит атаку когтями с +4 к попаданию и урону`),
                ],
            }),
            getUnitContent({
                isWildCard: false,
                title: 'Гарпия (Harpy)',
                attributes: {
                    [States.Agility]: '8',
                    [States.Smarts]: '6',
                    [States.Spirit]: '6',
                    [States.Strength]: '6',
                    [States.Vigor]: '6',
                },
                skills: {
                    [Skills.Fighting]: '6',
                    [Skills.Guts]: '6',
                    [Skills.Taunt]: '8',
                    [Skills.Throwing]: '8',
                },
                commonAttributes: {
                    [States.Pace]: '6',
                    [States.Parry]: '6',
                    [States.Toughness]: '8',
                },
                equipment: [
                    `Дротики (Сила+2, 4/8/16)`,
                ],
                specialAbilities: [
                    quickTextFormat(`**Когти (Talons)**: **Сила+1**.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Flight)}**: Гарпии летают со скоростью 8 дюймов, скорость набора высоты 3 дюйма.`),
                    quickTextFormat(`**"Бомбы" из ночной грязи (Nightsoil "Bombs")**: Пройдите проверку **Выносливости** или получите уровень Усталости (Fatigue) от тошноты, если оказались в пределах 2 дюймов. При прямом попадании необходимо пройти Тест Воли (Test of Wills) (**Выносливость** против **d6+2**).`),
                ],
            }),
            getUnitContent({
                isWildCard: false,
                title: 'Гарпия-ведьма (Harpy Witch)',
                afterTitleText: `Как указано выше, плюс ${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Тайная магия); ${getFromDict(SkillsTranslations, Skills.Spellcasting)} d8, Пункты Силы: 15, Заклинания: *${getFromDict(PowersTranslations, Powers.LowerTrait)} (Проклятие (Curse) / Волшебный огонь (Faerie Fire))*, *${getFromDict(PowersTranslations, Powers.Stun)} (Циклон (Cyclone))*, *${getFromDict(PowersTranslations, Powers.Deflection)}*.`,
                offset: paragraphOffset,
            }),
            getUnitContent({
                isWildCard: false,
                title: 'Гиппогриф (Hippogryph)',
                attributes: {
                    [States.Agility]: '8',
                    [States.Smarts]: '6',
                    [States.Spirit]: '8',
                    [States.Strength]: '12',
                    [States.Vigor]: '8',
                },
                skills: {
                    [Skills.Fighting]: '8',
                    [Skills.Guts]: '8',
                    [Skills.Faith]: '6',
                    [Skills.Notice]: '8',
                },
                commonAttributes: {
                    [States.Pace]: '7',
                    [States.Parry]: '6',
                    [States.Toughness]: '8',
                },
                specialAbilities: [
                    quickTextFormat(`**Когти (Talons)**: **Сила+1**; **Рога (Antlers)**: **Сила+3**.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Flight)}**: Скорость полета гиппогрифов составляет 12 дюймов, а скорость набора высоты — 6 дюймов.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Size)} +2**: У гиппогрифов тела больших оленей с широким размахом крыльев.`),
                    quickTextFormat(`**Пикирование (Swoop)**: Если гиппогриф переместится не менее чем на 6 дюймов по прямой перед атакой, он совершит атаку когтями с +4 к попаданию и урону.`),
                ],
            }),
            getUnitContent({
                isWildCard: false,
                title: 'Кобольд (Kobold)',
                afterTitleText: `Как гоблины Savage Worlds (см. SW1 с. 142, SW2 с. 179)`,
                offset: paragraphOffset,
            }),
            getUnitContent({
                isWildCard: false,
                title: 'Зверь Кодо (Kodo Beast)',
                attributes: {
                    [States.Agility]: '6',
                    [States.Smarts]: '6 (Ж)',
                    [States.Spirit]: '8',
                    [States.Strength]: '12+5',
                    [States.Vigor]: '12',
                },
                skills: {
                    [Skills.Fighting]: '4',
                    [Skills.Guts]: '8',
                    [Skills.Intimidation]: '4',
                    [Skills.Notice]: '6',
                },
                commonAttributes: {
                    [States.Pace]: '7',
                    [States.Parry]: '6',
                    [States.Toughness]: '8',
                },
                specialAbilities: [
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Armor)} +3**: У кодо шкура как у носорога.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Hardy)}**: Когда Зверь Кодо (Kodo Beast) в Шоке (Shaken), он не получает ранений от ударов, вводящих ее в Шок (Shaken) повторно.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Large)}**: Любой, кто атакует кодо, получает +2 к попаданию.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Size)} +5**: Кодо имеют форму носорога, но размером с индийского слона.`),
                    quickTextFormat(`**Проглотить целиком (Swallow Whole)**: Кодо может сделать проверку Захвата (Grappling check), чтобы проглотить противника. В случае успеха противник считается схваченным и автоматически получает 2d6 урона за раунд, пока не будет съеден или вырезан из желудка кодо.`),
                ],
            }),
            getUnitContent({
                isWildCard: true,
                title: 'Магнатавр (Magnataur)',
                attributes: {
                    [States.Agility]: '6',
                    [States.Smarts]: '6',
                    [States.Spirit]: '8',
                    [States.Strength]: '12+6',
                    [States.Vigor]: '12',
                },
                skills: {
                    [Skills.Fighting]: '10',
                    [Skills.Guts]: '10',
                    [Skills.Notice]: '6',
                    [Skills.Stealth]: '6',
                    [Skills.Tracking]: '6',
                },
                commonAttributes: {
                    [States.Pace]: '10',
                    [States.Parry]: '7',
                    [States.Toughness]: '15',
                },
                equipment: [
                    `Массивная алебарда (Сила+3, Досягаемость 1, если оружие двуручное, магнатавр может держать его одной рукой)`,
                ],
                specialAbilities: [
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Armor)} +2**: Густой, спутанный мех магнатавра и прочная шкура поглощпют атаки тупым оружием.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Hardy)}**: Когда Магнатавр (Magnataur) в Шоке (Shaken), он не получает ранений от ударов, вводящих ее в Шок (Shaken) повторно.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Huge)}**: Все попытки ударить магнатавра имеют **+4**.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.ImprovedArcaneResistance)}**: Магнатавры сопротивляются заклинаниям, наложенным на них, с **+4** и имеют **4** очка брони против повреждающих заклинаний.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.ImprovedFrenzy)}**: Магнатавр может совершить две атаки за одно действие без штрафа.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Size)} +7**`),
                    quickTextFormat(`**Растоптать (Trample)**: Если Магнатавр переместится хотя бы на **6** дюймов, он может провести затоптать тех, кто находится перед ним. Все на его пути должны сделать бросок на **Ловкость** или будут сбиты с ног и получат урон **Сила+4**.`),
                ],
            }),
            getUnitContent({
                isWildCard: false,
                title: 'Горный великан (Mountain Giant)',
                attributes: {
                    [States.Agility]: '4',
                    [States.Smarts]: '4',
                    [States.Spirit]: '10',
                    [States.Strength]: '12+9',
                    [States.Vigor]: '8',
                },
                skills: {
                    [Skills.Fighting]: '8',
                    [Skills.Guts]: '10',
                    [Skills.Notice]: '4',
                    [Skills.Taunt]: '12',
                },
                commonAttributes: {
                    [States.Pace]: '7',
                    [States.Parry]: '6',
                    [States.Toughness]: '16',
                },
                equipment: [
                    `нет`,
                    `иногда Ствол дерева (Сила+2, Досягаемость 2, Тяжелое оружие)`,
                ],
                specialAbilities: [
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Armor)} +6**: Шкуры горных великанов сделаны из камня.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Hardy)}**: Когда Горный великан (Mountain Giant) в Шоке (Shaken), он не получает ранений от ударов, вводящих ее в Шок (Shaken) повторно.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Huge)}**: Все попытки ударить горного великана имеют +4.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Sweep)}**: Горные великаны могут размахивать своими огромными руками и атаковать всех соседних противников.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Size)} +8**`),
                ],
            }),
            getUnitContent({
                isWildCard: false,
                title: 'Мурлок (Murloc)',
                attributes: {
                    [States.Agility]: '6',
                    [States.Smarts]: '4',
                    [States.Spirit]: '6',
                    [States.Strength]: '6',
                    [States.Vigor]: '6',
                },
                skills: {
                    [Skills.Fighting]: '6',
                    [Skills.Guts]: '4',
                    [Skills.Notice]: '6',
                    [Skills.Swimming]: '8',
                    [Skills.Throwing]: '8',
                },
                commonAttributes: {
                    [States.Pace]: '5 (8 в воде)',
                    [States.Parry]: '6',
                    [States.Toughness]: '5',
                },
                equipment: [
                    `Трезубец (d6+2, 3/6/12, Парирование +1, Досягаемость 1)`,
                    `Сеть (может опутывать противников)`,
                ],
                specialAbilities: [
                    quickTextFormat(`**Амфибии (Amphibious)**: Мурлоки могут дышать как в воде. Их Шаг в воде равен их показателю Плавания (${Skills.Swimming}).`),
                    quickTextFormat(`**Когти (Claws)**: **d6+2**.`),
                ],
            }),
            getUnitContent({
                isWildCard: false,
                title: 'Шаман-мурлок (Murloc Shaman)',
                afterTitleText: `Как указано выше, плюс ${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Шаман (Shaman)); Пункты Силы: 10, Заклинания: ${getFromDict(PowersTranslations, Powers.Bolt)}, плюс ${getFromDict(PowersTranslations, Powers.Armor)}, ${getFromDict(PowersTranslations, Powers.BoostTrait)}, ${getFromDict(PowersTranslations, Powers.Healing)} или ${getFromDict(PowersTranslations, Powers.Smite)}.`,
                offset: paragraphOffset,
            }),
            getUnitContent({
                isWildCard: false,
                title: 'Мурлок-мутант (Murloc, Mutant)',
                attributes: {
                    [States.Agility]: '8',
                    [States.Smarts]: '4',
                    [States.Spirit]: '8',
                    [States.Strength]: '8',
                    [States.Vigor]: '8',
                },
                skills: {
                    [Skills.Fighting]: '8',
                    [Skills.Guts]: '8',
                    [Skills.Notice]: '6',
                    [Skills.Swimming]: '10',
                    [Skills.Throwing]: '6',
                },
                commonAttributes: {
                    [States.Pace]: '5 (10 в воде)',
                    [States.Parry]: '7',
                    [States.Toughness]: '6',
                },
                equipment: [
                    `Трезубец (d6+2, 3/6/12, Парирование +1, Досягаемость 1)`,
                    `Сеть (может опутывать противников)`,
                ],
                specialAbilities: [
                    quickTextFormat(`**Амфибии (Amphibious)**: Мурлоки могут дышать как в воде. Их Шаг в воде равен их показателю Плавания (${Skills.Swimming}).`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Armor)} +1**: У мутантных мурлоков толстая, резиновая шкура.`),
                    quickTextFormat(`**Когти (Claws)**: **d6+2**.`),
                ],
                offset: paragraphOffset,
            }),
            getUnitContent({
                isWildCard: false,
                title: 'Нага, Воин (Naga, Warrior)',
                attributes: {
                    [States.Agility]: '8',
                    [States.Smarts]: '4',
                    [States.Spirit]: '8',
                    [States.Strength]: '8',
                    [States.Vigor]: '8',
                },
                skills: {
                    [Skills.Fighting]: '8',
                    [Skills.Guts]: '10',
                    [Skills.Notice]: '6',
                    [Skills.Swimming]: '12',
                },
                commonAttributes: {
                    [States.Pace]: '7',
                    [States.Parry]: '6',
                    [States.Toughness]: '10 (7)',
                },
                equipment: [
                    `Трезубец (Сила+2, 36/12)`,
                    `Скимитар (Сила+3)`,
                    `Броня (+1)`,
                ],
                specialAbilities: [
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Armor)} +2**`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Aquatic)}**: Нага может дышать под водой и двигаться под водой со скоростью, равной ее Плаванию (${Skills.Swimming}).`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Size)} +1**`),
                    quickTextFormat(`**Медленная регенерация (Slow Regeneration)**: При погружении в воду нага делает бросок на Исцеление (Healing roll) каждый день.`),
                ],
            }),
            getUnitContent({
                isWildCard: true,
                title: 'Нага, Морская Ведьма (Naga, Sea Witch)',
                attributes: {
                    [States.Agility]: '8',
                    [States.Smarts]: '8',
                    [States.Spirit]: '8',
                    [States.Strength]: '4',
                    [States.Vigor]: '8',
                },
                skills: {
                    [Skills.Fighting]: '4',
                    [Skills.Guts]: '10',
                    [Skills.Notice]: '10',
                    [Skills.Shooting]: '8',
                    [Skills.Spellcasting]: '8',
                    [Skills.Swimming]: '12',
                },
                commonAttributes: {
                    [States.Pace]: '6',
                    [States.Parry]: '4',
                    [States.Toughness]: '10 (7)',
                },
                equipment: [
                    `Лук (2d6, 15/30/60)`,
                    `Броня (+1)`,
                ],
                specialAbilities: [
                    [
                        quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Магия (Magic))**: ${getFromDict(EdgesTranslations, Edges.Wizard)}, ${getFromDict(SettingEdgesTranslations, SettingEdges.Warlock)} (предпочитает заклинания воды, льда и молнии, призывает морских элементалей)`),
                        {
                            ul: [
                                quickTextFormat(`**Пункты Силы**: 20`),
                                quickTextFormat(`**Силы**: *${getFromDict(PowersTranslations, Powers.Bolt)}*, *${getFromDict(PowersTranslations, Powers.Burst)} (Конус молний (lightning cone))*,  *${getFromDict(PowersTranslations, Powers.Smite)} (ледяная стрела — замедляет (frost arrow – does slow))*`),
                            ],
                        }
                    ],
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Aquatic)}**: Нага может дышать под водой и двигаться под водой со скоростью, равной ее Плаванию (${Skills.Swimming}).`),
                    quickTextFormat(`**Медленная регенерация (Slow Regeneration)**: При погружении в воду нага делает бросок на Исцеление (Healing roll) каждый день.`),
                ],
            }),
            getUnitContent({
                isWildCard: false,
                title: 'Неруб, Солдат (Nerubian, Soldier)',
                attributes: {
                    [States.Agility]: '10',
                    [States.Smarts]: '6',
                    [States.Spirit]: '8',
                    [States.Strength]: '8',
                    [States.Vigor]: '8',
                },
                skills: {
                    [Skills.Climbing]: '12',
                    [Skills.Fighting]: '8',
                    [Skills.Guts]: '10',
                    [Skills.Intimidation]: '8',
                    [Skills.Stealth]: '6',
                    [Skills.Throwing]: '8',
                },
                commonAttributes: {
                    [States.Pace]: '8',
                    [States.Parry]: '6',
                    [States.Toughness]: '10 (8)',
                },
                equipment: [
                    `Копья (Сила+2, 3/6/12)`,
                    `Хитиновая броня (+2)`,
                ],
                specialAbilities: [
                    quickTextFormat(`**Когти (Claws)**: **Сила+1**.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Fearless)}**`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Immunity)}**: Магия контроля разума (Mind-controlling magic) и ${getFromDict(SettingPowersTranslations, SettingPowers.Blight)} не действуют на нерубов.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Size)} +2**: Нерубы — пауки-кентавры человеческого роста.`),
                ],
            }),
            getUnitContent({
                isWildCard: false,
                title: 'Неруб, Провидец (Nerubian, Seer)',
                attributes: {
                    [States.Agility]: '10',
                    [States.Smarts]: '6',
                    [States.Spirit]: '8',
                    [States.Strength]: '8',
                    [States.Vigor]: '8',
                },
                skills: {
                    [Skills.Climbing]: '12',
                    [Skills.Fighting]: '8',
                    [Skills.Guts]: '10',
                    [Skills.Intimidation]: '8',
                    [Skills.Spellcasting]: '8',
                    [Skills.Stealth]: '6',
                    [Skills.Throwing]: '8',
                },
                commonAttributes: {
                    [States.Pace]: '8',
                    [States.Parry]: '6',
                    [States.Toughness]: '10 (8)',
                },
                equipment: [
                    `Копья (Сила+2, 3/6/12)`,
                    `Хитиновая броня (+2)`,
                ],
                specialAbilities: [
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Некромантия (Necromancy))**: Пункты Силы – 15; Заклинания: *${getFromDict(PowersTranslations, Powers.Zombie)}*, *${getFromDict(PowersTranslations, Powers.Dispel)}*, *${getFromDict(SettingPowersTranslations, SettingPowers.ContinuousBlast)} (Рой падальщиков (carrion swarm))*`),
                    quickTextFormat(`**Когти (Claws)**: **Сила+1**.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Fearless)}**`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Immunity)}**: Магия контроля разума (Mind-controlling magic) и ${getFromDict(SettingPowersTranslations, SettingPowers.Blight)} не действуют на нерубов.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Size)} +2**: Нерубы — пауки-кентавры человеческого роста.`),
                ],
                offset: paragraphOffset,
            }),
            getUnitContent({
                isWildCard: false,
                title: 'Неруб, Прядильщик Сетей (Nerubian, Webspinner)',
                attributes: {
                    [States.Agility]: '10',
                    [States.Smarts]: '6',
                    [States.Spirit]: '8',
                    [States.Strength]: '8',
                    [States.Vigor]: '6',
                },
                skills: {
                    [Skills.Climbing]: '12',
                    [Skills.Fighting]: '6',
                    [Skills.Guts]: '10',
                    [Skills.Intimidation]: '8',
                    [Skills.Stealth]: '6',
                    [Skills.Throwing]: '8',
                    [Skills.Webbing]: '8',
                },
                commonAttributes: {
                    [States.Pace]: '8',
                    [States.Parry]: '6',
                    [States.Toughness]: '7',
                },
                equipment: [
                    `Копья (Сила+2, 3/6/12)`,
                ],
                specialAbilities: [
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Прядильщик Сетей (Webspinner))**: Пункты Силы – 20; Техники: *${getFromDict(SettingPowersTranslations, SettingPowers.Paralyze)}*, *${getFromDict(PowersTranslations, Powers.Barrier)}*, *${getFromDict(PowersTranslations, Powers.Fly)} (Сбрасывание паутины (web-drop))*`),
                    quickTextFormat(`**Когти (Claws)**: **Сила+1**.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Fearless)}**`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Immunity)}**: Магия контроля разума (Mind-controlling magic) и ${getFromDict(SettingPowersTranslations, SettingPowers.Blight)} не действуют на нерубов.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Size)} +2**: Нерубы — пауки-кентавры человеческого роста.`),
                ],
                offset: paragraphOffset,
            }),
            getUnitContent({
                isWildCard: false,
                title: 'Огр (Ogre)',
                afterTitleText: `См. SW1 с. 145, SW2 с. 186`,
            }),
            getUnitContent({
                isWildCard: false,
                title: 'Огр-Маг (Ogre-Mage)',
                afterTitleText: `Как Огр, за исключением следующего:`,
                attributes: {
                    [States.Smarts]: '6',
                    [States.Spirit]: '8',
                },
                skills: {
                    [Skills.Spellcasting]: '8',
                },
                specialAbilities: [
                    [
                        quickTextFormat(`**Тайная магия (Arcane Magic)**: ${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Тайная магия (Arcane Magic)), ${getFromDict(EdgesTranslations, Edges.SoulDrain)}, ${getFromDict(SettingEdgesTranslations, SettingEdges.Warlock)}`),
                        {
                            ul: [
                                quickTextFormat(`**Пункты Силы**: 20`),
                                quickTextFormat(`**Заклинания**: *${getFromDict(PowersTranslations, Powers.Smite)}*, 2-3 *Призыва (${SettingPowers.Summon})*, *${getFromDict(PowersTranslations, Powers.Blast)}*, *${getFromDict(SettingPowersTranslations, SettingPowers.Bloodlust)}* и *${getFromDict(SettingPowersTranslations, SettingPowers.OffensiveArmor)} (Огненный щит (fire shield))*`),
                            ],
                        },
                    ],
                ],
                offset: paragraphOffset,
            }),
            getUnitContent({
                isWildCard: false,
                title: 'Совомедведь (Owlbear)',
                attributes: {
                    [States.Agility]: '6',
                    [States.Smarts]: '8 (Ж)',
                    [States.Spirit]: '8',
                    [States.Strength]: '12+4',
                    [States.Vigor]: '12',
                },
                skills: {
                    [Skills.Fighting]: '8',
                    [Skills.Guts]: '10',
                    [Skills.Faith]: '4',
                    [Skills.Notice]: '8',
                    [Skills.Swimming]: '6',
                },
                commonAttributes: {
                    [States.Pace]: '7',
                    [States.Parry]: '6',
                    [States.Toughness]: '8',
                },
                specialAbilities: [
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Berserk)}**: У совомедведей есть черта ${getFromDict(EdgesTranslations, Edges.Berserk)}.`),
                    quickTextFormat(`**Когти, Укус и Рога (Claws, Bite and Antlers)**: **Сила+2**`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Size)} +2**: Совомедведи такие же большие, как гризли.`),
                    quickTextFormat(`**Двулапый (Two-Pawed)**: Совомедведи не получают штрафа, если атакуют обеими лапами одного и того же противника.`),
                ],
            }),
            getUnitContent({
                isWildCard: false,
                title: 'Иглохвостый вепрь/Иглогрив/Свинобраз из племени Иглогривых (Quillboar)',
                attributes: {
                    [States.Agility]: '6',
                    [States.Smarts]: '4',
                    [States.Spirit]: '6',
                    [States.Strength]: '6',
                    [States.Vigor]: '8',
                },
                skills: {
                    [Skills.Fighting]: '6',
                    [Skills.Guts]: '8',
                    [Skills.Notice]: '6',
                },
                commonAttributes: {
                    [States.Pace]: '6',
                    [States.Parry]: '6',
                    [States.Toughness]: '8',
                },
                equipment: [
                    `Цеп (Сила+3)`,
                ],
                specialAbilities: [
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.ArcaneBackground)}**: *Некоторые иглогривы практикуют шаманскую магию и имеют сильную связь с духами кабанов*.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Armor)} +1**: Прочные, щетинистые шкуры.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Size)} +1**`),
                ],
            }),
            getUnitContent({
                isWildCard: false,
                title: 'Пантера, Ночной саблезуб (Panther, Nightsabre)',
                afterTitleText: `Как Лев, но Пантеры-Ночные саблезубы, также имеют ${getFromDict(SkillsTranslations, Skills.Stealth)} d8 и получают **+4** к Скрытности ночью.`,
            }),
            getUnitContent({
                isWildCard: true,
                title: 'Ревенант/Выходец с того света (Revenant)',
                attributes: {
                    [States.Agility]: '8',
                    [States.Smarts]: '4',
                    [States.Spirit]: '8',
                    [States.Strength]: '8',
                    [States.Vigor]: '10',
                },
                skills: {
                    [Skills.Fighting]: '10',
                    [Skills.Intimidation]: '10',
                    [Skills.Notice]: '4',
                    [Skills.Spellcasting]: '8',
                },
                commonAttributes: {
                    [States.Pace]: '8',
                    [States.Parry]: '7',
                    [States.Toughness]: '13 (10)',
                },
                equipment: [
                    `Тяжелая булава (Сила+3)`,
                    `Латная броня (+3)`,
                ],
                specialAbilities: [
                    [
                        quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Магия (Magic))**: ${getFromDict(SettingEdgesTranslations, SettingEdges.Warlock)}`),
                        {
                            ul: [
                                quickTextFormat(`**Пункты Силы**: 15`),
                                quickTextFormat(`**Силы**: *${getFromDict(PowersTranslations, Powers.Smite)}*, *${getFromDict(PowersTranslations, Powers.Blast)} или ${getFromDict(PowersTranslations, Powers.Burst)}*, *одна другая при необходимости*`),
                            ],
                        },
                    ],
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Fear)}**`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Immunity)}**: Ревенанты невосприимчивы к атакам из своего привязанного элемента.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Elemental)}**: Не получает дополнительного урона от прицельных выстрелов; ${getFromDict(EdgesTranslations, Edges.Fearless)}; иммунитет к болезням и ядам. **+2** к восстановлению после Шока (Shaken).`),
                ],
            }),
            getUnitContent({
                isWildCard: false,
                title: 'Саламандра (Salamander)',
                attributes: {
                    [States.Agility]: '6',
                    [States.Smarts]: '6 (Ж)',
                    [States.Spirit]: '6',
                    [States.Strength]: '12+5',
                    [States.Vigor]: '10',
                },
                skills: {
                    [Skills.Fighting]: '10',
                    [Skills.Guts]: '10',
                    [Skills.Notice]: '6',
                    [Skills.Tracking]: '4',
                },
                commonAttributes: {
                    [States.Pace]: '4',
                    [States.Parry]: '7',
                    [States.Toughness]: '15',
                },
                specialAbilities: [
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Armor)} +3**: Толстая шкура саламандры укреплена костяными пластинами.`),
                    quickTextFormat(`**Укус и коготь (Bite and Claw)**: **Сила+2**.`),
                    quickTextFormat(`**Темновидение (Darkvision)**: Все штрафы за темноту уменьшаются вдвое (halve).`),
                    quickTextFormat(`**Огненное дыхание (Flame Breath)**: Саламандры могут выплевывать сгусток пламени в Шаблона Огня, нанося 2d10 урона, если не совершить избегание.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Hardy)}**: Когда Саламандра (Salamander) в Шоке (Shaken), он не получает ранений от ударов, вводящих ее в Шок (Shaken) повторно.`),
                    quickTextFormat(`**Самосожжение (Immolation)**: Саламандры могут поджечь свою кожу по желанию. Пока они горят, любой, кто атакует саламандру в ближнем бою, получает 2d6 урона.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Immunity)}**: Саламандры невосприимчивы к огню и жаре.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Large)}**: +2 для противников, чтобы ударить саламандру.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Size)} +5**: Саламандры крупнее самца носорога.`),
                ],
            }),
            getUnitContent({
                isWildCard: false,
                title: 'Сатир (Satyr)',
                attributes: {
                    [States.Agility]: '8',
                    [States.Smarts]: '6',
                    [States.Spirit]: '8',
                    [States.Strength]: '8',
                    [States.Vigor]: '8',
                },
                skills: {
                    [Skills.Fighting]: '8',
                    [Skills.Guts]: '10',
                    [Skills.Notice]: '6',
                    [Skills.Survival]: '8',
                    [Skills.Tracking]: '6',
                },
                commonAttributes: {
                    [States.Pace]: '7',
                    [States.Parry]: '6',
                    [States.Toughness]: '7',
                },
                specialAbilities: [
                    quickTextFormat(`**Когти/Копыта (Claws/Hooves)**: **Сила+1**`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Frenzy)}**: У всех сатиров есть черта ${getFromDict(EdgesTranslations, Edges.Frenzy)}.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Size)} +1**: Сатиры достигают 7 футов в высоту и обладают массивными животными мускулами.`),
                    quickTextFormat(`**Колдовство (Sorcery)**: Многие, если не все сатиры практикуют какую-либо форму магии чернокнижников. Они также могут получить заклинание *${getFromDict(PowersTranslations, Powers.Zombie)}*, если обладают Мистическим даром (${Edges.ArcaneBackground}) (Магия (Magic)).`),
                ],
            }),
            getUnitContent({
                isWildCard: false,
                title: 'Илистое Чудовище (Sludge Monster)',
                attributes: {
                    [States.Agility]: '4',
                    [States.Smarts]: '4 (Ж)',
                    [States.Spirit]: '10',
                    [States.Strength]: '6',
                    [States.Vigor]: '8',
                },
                skills: {
                    [Skills.Fighting]: '6',
                    [Skills.Notice]: '4',
                    [Skills.Throwing]: '6',
                },
                commonAttributes: {
                    [States.Pace]: '2',
                    [States.Parry]: '4',
                    [States.Toughness]: '8',
                },
                specialAbilities: [
                    quickTextFormat(`**Слизь (Ooze) (как ${getFromDict(EdgesTranslations, Edges.Construct)})**: +2 к восстановлению после Шока, иммунитет к прицельным выстрелам, яду и болезням. Получают половину урона от колющего оружия.`),
                    quickTextFormat(`**Слепое чувство (Blindsense)**: Илистые Чудовища чувствуют добычу по запаху, вибрации и теплу. Они не получают штрафов в темноте, но могут быть сбиты с толку "ослеплением (blinding)" других чувств.`),
                    quickTextFormat(`***Метание (Fling)***: *Некоторые Илистые Чудовища могут метать слизь как атаку с **Силой+1** с дальностью 3/6/12 и силой ${getFromDict(SettingPowersTranslations, SettingPowers.Slow)}.*`),
                    quickTextFormat(`**Яд замедления (Slow Poison)**: Если цель атаки Илистого Чудовища проваливает проверку Выносливости со штрафом -2, она замедляется (как при использовании Силы ${getFromDict(SettingPowersTranslations, SettingPowers.Slow)}).`),
                ],
            }),
            getUnitContent({
                isWildCard: false,
                title: 'Древень (Treant)',
                attributes: {
                    [States.Agility]: '6',
                    [States.Smarts]: '4',
                    [States.Spirit]: '8',
                    [States.Strength]: '12+2',
                    [States.Vigor]: '10',
                },
                skills: {
                    [Skills.Faith]: '6',
                    [Skills.Fighting]: '6',
                    [Skills.Notice]: '6',
                },
                commonAttributes: {
                    [States.Pace]: '4',
                    [States.Parry]: '5',
                    [States.Toughness]: '10',
                },
                specialAbilities: [
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Armor)} +1**: У Древня кожа из коры.`),
                    quickTextFormat(`**Ветвистые пальцы (Branch Fingers)**: **Сила+1**`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Construct)}**: +2 к восстановлению после потрясения, половина урона от колющего оружия, иммунитет к яду, болезням и критическим ударам.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Size)} +3**`),
                ],
            }),
            getUnitContent({
                isWildCard: false,
                title: 'Клыкарр (Tuskarr)',
                attributes: {
                    [States.Agility]: '6',
                    [States.Smarts]: '6',
                    [States.Spirit]: '8',
                    [States.Strength]: '8',
                    [States.Vigor]: '8',
                },
                skills: {
                    [Skills.Fighting]: '6',
                    [Skills.Guts]: '6',
                    [Skills.Knowledge]: '6 (рыбалка)',
                    [Skills.Notice]: '6',
                    [Skills.Swimming]: '10',
                    [Skills.Throwing]: '6',
                },
                commonAttributes: {
                    [States.Pace]: '6',
                    [States.Parry]: '5',
                    [States.Toughness]: '8',
                },
                equipment: [
                    `Гарпун (Сила+2, 4/8/16)`,
                    `Сеть (Опутывает)`,
                    `Кожа (+1)`,
                ],
                specialAbilities: [
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.LowLightVision)}**`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Size)} +1**`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.ArcaneBackground)}**: Некоторые клыкарры практикуют шаманизм, но склонны избегать заклинаний прямого урона.`),
                ],
            }),
            getUnitContent({
                isWildCard: false,
                title: 'Вендиго/Cнежный человек (Wendigo/Sasquatch)',
                attributes: {
                    [States.Agility]: '6',
                    [States.Smarts]: '4',
                    [States.Spirit]: '6',
                    [States.Strength]: '12+2',
                    [States.Vigor]: '10',
                },
                skills: {
                    [Skills.Fighting]: '8',
                    [Skills.Guts]: '12',
                    [Skills.Notice]: '6',
                    [Skills.Stealth]: '6',
                    [Skills.Tracking]: '8',
                },
                commonAttributes: {
                    [States.Pace]: '7',
                    [States.Parry]: '6',
                    [States.Toughness]: '12',
                },
                specialAbilities: [
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Armor)} +2**: У вендиго густой мех и прочная шкура.`),
                    quickTextFormat(`**Когти (Claws)**: **Сила+2**`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Size)} +3**: Вендиго 8-9 дюймов ростом и широкотелые.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Sweep)}**: Вендиго может атаковать всех соседних противников за одно действие, взмахивая своими длинными руками.`),
                ],
            }),
            getUnitContent({
                isWildCard: false,
                title: 'Виверна (Wyvern)',
                attributes: {
                    [States.Agility]: '6',
                    [States.Smarts]: '4',
                    [States.Spirit]: '8',
                    [States.Strength]: '12',
                    [States.Vigor]: '8',
                },
                skills: {
                    [Skills.Fighting]: '8',
                    [Skills.Guts]: '10',
                    [Skills.Intimidation]: '10',
                    [Skills.Notice]: '6',
                    [Skills.Stealth]: '4',
                },
                commonAttributes: {
                    [States.Pace]: '7',
                    [States.Parry]: '6',
                    [States.Toughness]: '12',
                },
                specialAbilities: [
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Armor)} +2**`),
                    quickTextFormat(`**Когти и укус (Claws and Bite)**: **Сила+2**`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Flight)}**: Виверны летают со скоростью 12 дюймов и скоростью набора высоты 6 дюймов`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Large)}**: Все атакующие получают +2 к попаданию.`),
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Size)} +4**`),
                    quickTextFormat(`**Сутулость (Stoop)**: Когда виверна совершает атаку во время полета, если она перемещается не менее чем на 6 дюймов, она получает бонус +4 к атаке и урону.`),
                    quickTextFormat(`**Жало на хвосте (Tail Stinger)**: **Сила-1**, плюс Яд (как Кураре, но без штрафа к проверке Выносливости).`),
                ],
            }),
            getTipText([
                quickTextFormat(`Весьма вероятно, что у Виверны (Wyvern) должна быть способность **Swoop**, как у Гиппогрифа (Hippogryph), а **Stoop** - это опечатка автора оригинала. **В рамках перевода оставлено как есть.**`),
                getHorizontalLine('white'),
                quickTextFormat(`В версии, на которую ссылается автор оригинала, упоминается несколько типов ядов. В Дневниках эта "угроза" описана иначе, так что тут я преведу описание яда из старой версии.`),
                getHorizontalLine('white'),
                quickTextFormat(`Когда персонаж глотает, контактирует или иным образом страдает от яда или болезни, он должен сделать бросок Выносливости и вычесть любые штрафы за силу яда или болезни. В случае неудачи персонаж страдает от описанных эффектов.`),
                quickTextFormat(`**Сибирская язва (Anthrax) (-4)**: смерть в течение 2d6 дней.`),
                quickTextFormat(`**Мышьяк (Arsenic) (-2)**: потеря одного кубика Выносливости на 2d6 дней. Если таким образом Выносливость опустится ниже d4, наступает смерть. Часто используется в малых дозах в течение долгого времени, чтобы затруднить обнаружение и замаскировать симптомы.`),
                quickTextFormat(`**Черная смерть (Black Death) (-4)**: смерть в течение 2d6 часов.`),
                quickTextFormat(`**Кураре (Curare) (-2)**: немедленное истощение (Immediate Exhaustion); смерть в течение 2d10+10 минут.`),
                quickTextFormat(`**Цианид (Cyanide) (-4)**: смерть в течение 3d6+10 секунд. Необходимо проглотить.`),
            ]),
        ];
    }

    function getBurningLegionContent() {
        return [
            {
                text: 'Пылающий Легион (The Burning Legion)',
                style: 'header2',
            },
            {
                stack: [
                    quickTextFormat(`Демоны Пылающего Легиона во вселенной **Warcraft** являются силой сами по себе. Здесь перечислены основные типы демонов, с которыми могут столкнуться как храбрецы, так и глупцы.`),
                    quickTextFormat(`Обратите внимание, что многие из этих демонов могут быть *Призваны (Summoned)*. Призванные демоны не считаются Дикими Картами – они просто не прилагают особых усилий, чтобы служить какому-то жалкому смертному.`),
                ],
                leadingIndent: paragraphOffset,
                margin: [0, 0, 0, 5],
            },
            getUnitContent({
                isWildCard: false,
                title: 'Гончая Скверны (Fel Hound)',
                attributes: {
                    [States.Agility]: '8',
                    [States.Smarts]: '4',
                    [States.Spirit]: '8',
                    [States.Strength]: '12',
                    [States.Vigor]: '10',
                },
                skills: {
                    [Skills.Fighting]: '8',
                    [Skills.Intimidation]: '12',
                    [Skills.Notice]: '8',
                    [Skills.Spellcasting]: '8',
                    [Skills.Tracking]: '10',
                },
                commonAttributes: {
                    [States.Pace]: '10',
                    [States.Parry]: '6',
                    [States.Toughness]: '11',
                },
                specialAbilities: [
                    quickTextFormat(`${getFromDict(EdgesTranslations, Edges.LowLightVision)}, ${getFromDict(EdgesTranslations, Edges.Fear)}, ${getFromDict(EdgesTranslations, Edges.Armor)} +2, ${getFromDict(EdgesTranslations, Edges.Size)} +2`),
                    quickTextFormat(`**${getFromDict(SettingPowersTranslations, SettingPowers.ManaBurn)}**:  По желанию Гончие Скверны могут выпустить *Стрелу Сжигания Маны (Mana Burn Bolt)*.`),
                    quickTextFormat(`**Чувство магии (Smell Magic)**: Гончие Скверны всегда *обнаруживают магию (detect arcana)* при выслеживании (tracking).`),
                    quickTextFormat(`**Наскок (Pounce)**: Гончие Скверны могут перемещаться на 1d6 дюймов и атаковать с +4 к атаке и урону.`),
                ],
            }),
            getUnitContent({
                isWildCard: false,
                title: 'Страж Скверны (Fel Guard)',
                attributes: {
                    [States.Agility]: '6',
                    [States.Smarts]: '6',
                    [States.Spirit]: '8',
                    [States.Strength]: '12',
                    [States.Vigor]: '10',
                },
                skills: {
                    [Skills.Fighting]: '10',
                    [Skills.Guts]: '12',
                    [Skills.Intimidation]: '12',
                    [Skills.Notice]: '4',
                },
                commonAttributes: {
                    [States.Pace]: '6',
                    [States.Parry]: '6',
                    [States.Toughness]: '13 (9)',
                },
                equipment: [
                    `Большой меч Скверны (Сила+6, -1 Парирование, 2 руки)`,
                    `Броня Скверны (+4)`,
                ],
                specialAbilities: [
                    quickTextFormat(`**Черты**: ${[
                        `${getFromDict(EdgesTranslations, Edges.TrademarkWeapon)}`,
                        `${getFromDict(EdgesTranslations, Edges.CombatReflexes)}`,
                    ].join(', ')}`),
                    [
                        `${getFromDict(EdgesTranslations, Edges.Size)} +2`,
                        `${getFromDict(EdgesTranslations, Edges.Fear)}`,
                        `${getFromDict(EdgesTranslations, Edges.Infravision)}`,
                    ].join(', '),
                ],
            }),
            getUnitContent({
                isWildCard: true,
                title: 'Привратник Ада/Страж Рока (Doom Guard)',
                attributes: {
                    [States.Agility]: '6',
                    [States.Smarts]: '8',
                    [States.Spirit]: '12',
                    [States.Strength]: '12+6',
                    [States.Vigor]: '10',
                },
                skills: {
                    [Skills.Fighting]: '12',
                    [Skills.Guts]: '12+2',
                    [Skills.Intimidation]: '12',
                    [Skills.Notice]: '10',
                    [Skills.Spellcasting]: '8',
                    [Skills.Taunt]: '10',
                },
                commonAttributes: {
                    [States.Pace]: '8',
                    [States.Parry]: '8',
                    [States.Toughness]: '16 (12)',
                },
                equipment: [
                    `Скимитар скверны (Сила+5)`,
                    `Броня Скверны (+4)`,
                ],
                specialAbilities: [
                    quickTextFormat(`**Черты**: ${[
                        `${getFromDict(EdgesTranslations, Edges.ImprovedTrademarkWeapon)}`,
                        `${getFromDict(EdgesTranslations, Edges.CombatReflexes)}`,
                        `${getFromDict(EdgesTranslations, Edges.ImprovedFrenzy)}`,
                        `${getFromDict(EdgesTranslations, Edges.ImprovedSweep)}`,
                        `${getFromDict(EdgesTranslations, Edges.Quick)}`,
                        `${getFromDict(EdgesTranslations, Edges.Command)}`,
                        `${getFromDict(EdgesTranslations, Edges.Fervor)}`,
                        `${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Магия демонов (Demon Magic))`,
                    ].join(', ')}`),
                    [
                        `${getFromDict(EdgesTranslations, Edges.Size)} +5`,
                        `${getFromDict(EdgesTranslations, Edges.Large)}`,
                        `${getFromDict(EdgesTranslations, Edges.Fear)} -2`,
                        `${getFromDict(EdgesTranslations, Edges.Infravision)}`,
                        `${getFromDict(EdgesTranslations, Edges.ArcaneResistance)} (+4)`,
                        `${getFromDict(EdgesTranslations, Edges.Flight)} (8 дюймов, Подъем 3 дюйма)`,
                    ].join(', '),
                    quickTextFormat(`***Магия демонов (Demon Magic)*** - **Пункты Силы**: 20; **Силы**: ${[
                        `*${getFromDict(PowersTranslations, Powers.Bolt)}*`,
                        `*${getFromDict(PowersTranslations, Powers.Blast)}*`,
                        `*${getFromDict(PowersTranslations, Powers.LowerTrait)}*`,
                        `*${getFromDict(PowersTranslations, Powers.Obscure)}*`,
                        `*${getFromDict(SettingPowersTranslations, SettingPowers.ContinuousBlast)}*`,
                        `*${getFromDict(PowersTranslations, Powers.Smite)}*`,
                    ].join(', ')}`),
                ],
            }),
            getUnitContent({
                isWildCard: true,
                title: 'Властитель преисподней (Pit Lord)',
                attributes: {
                    [States.Agility]: '6',
                    [States.Smarts]: '6',
                    [States.Spirit]: '12',
                    [States.Strength]: '12+6',
                    [States.Vigor]: '12',
                },
                skills: {
                    [Skills.Fighting]: '12',
                    [Skills.Guts]: '12',
                    [Skills.Intimidation]: '12',
                    [Skills.Notice]: '6',
                    [Skills.Taunt]: '10',
                },
                commonAttributes: {
                    [States.Pace]: '10',
                    [States.Parry]: '7',
                    [States.Toughness]: '18 (14)',
                },
                equipment: [
                    `Большой меч Скверны (Сила+6, -1 Парирование, 2 руки)`,
                    `Броня Скверны (+4)`,
                ],
                specialAbilities: [
                    quickTextFormat(`**Черты**: ${[
                        `${getFromDict(EdgesTranslations, Edges.Berserk)}`,
                        `${getFromDict(EdgesTranslations, Edges.Ambidextrous)}`,
                        `${getFromDict(EdgesTranslations, Edges.TwoFisted)}`,
                        `${getFromDict(EdgesTranslations, Edges.ImprovedSweep)}`,
                        `${getFromDict(EdgesTranslations, Edges.MightyBlow)}`,
                        `${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Магия демонов (Demon Magic))`,
                    ].join(', ')}`),
                    [
                        `${getFromDict(EdgesTranslations, Edges.Size)} +8`,
                        `${getFromDict(EdgesTranslations, Edges.Huge)}`,
                        `${getFromDict(EdgesTranslations, Edges.Fear)} -2`,
                        `${getFromDict(EdgesTranslations, Edges.ArcaneResistance)} (+4)`,
                        `Укус (Bite) (Сила+2)`,
                    ].join(', '),
                    quickTextFormat(`**Взмах хвостом (Tail Sweep)**: Властитель преисподней может атаковать своим хвостом область шириной **4** дюйма и длиной **2** дюйма. Это наносит урон **Сила-2**.`),
                    quickTextFormat(`**Возрождение (Rebirth)**: Когда Властитель преисподней убит, он возвращается через **1d6** раундов. Если его после этого победить, он действительно умирает.`),
                    quickTextFormat(`***Магия демонов (Demon Magic)*** - **Пункты Силы**: 20; **Силы**: ${[
                        `*${getFromDict(PowersTranslations, Powers.Armor)}*`,
                        `*${getFromDict(PowersTranslations, Powers.Blast)}*`,
                        `*${getFromDict(SettingPowersTranslations, SettingPowers.Doom)}*`,
                        `*${getFromDict(PowersTranslations, Powers.Smite)}*`,
                        `*${getFromDict(SettingPowersTranslations, SettingPowers.Summon)}*`,
                    ].join(', ')}`),
                ],
            }),
            getUnitContent({
                isWildCard: false,
                title: 'Инфернал (Infernal)',
                attributes: {
                    [States.Agility]: '4',
                    [States.Smarts]: '4 (Ж)',
                    [States.Spirit]: '12',
                    [States.Strength]: '12+7',
                    [States.Vigor]: '12',
                },
                skills: {
                    [Skills.Fighting]: '12',
                    [Skills.Intimidation]: '12',
                },
                commonAttributes: {
                    [States.Pace]: '4',
                    [States.Parry]: '8',
                    [States.Toughness]: '20 (17)',
                },
                specialAbilities: [
                    quickTextFormat(`**Черты**: ${[
                        `${getFromDict(EdgesTranslations, Edges.Berserk)}`,
                        `${getFromDict(EdgesTranslations, Edges.Ambidextrous)}`,
                        `${getFromDict(EdgesTranslations, Edges.TwoFisted)}`,
                        `${getFromDict(EdgesTranslations, Edges.ImprovedSweep)}`,
                        `${getFromDict(EdgesTranslations, Edges.MightyBlow)}`,
                        `${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Магия демонов (Demon Magic))`,
                    ].join(', ')}`),
                    [
                        `${getFromDict(EdgesTranslations, Edges.Size)} +9`,
                        `${getFromDict(EdgesTranslations, Edges.Armor)} +3`,
                        `${getFromDict(EdgesTranslations, Edges.Gargantuan)}`,
                        `${getFromDict(EdgesTranslations, Edges.Fear)}`,
                        `${getFromDict(EdgesTranslations, Edges.Construct)}`,
                        `${getFromDict(EdgesTranslations, Edges.Fearless)}`,
                        `${getFromDict(EdgesTranslations, Edges.Immunity)} (Магия (Magic))`,
                    ].join(', '),
                    quickTextFormat(`**Пылающий кулак (Burning Fist)**: **Сила+2**, может поджигать предметы.`),
                    quickTextFormat(`**Пылающая аура (Burning Aura)**: Любой, кто атакует Инфернала, получает **2d6** урона от пламени Скверны.`),
                ],
            }),
            getUnitContent({
                isWildCard: true,
                title: 'Эредарский Чернокнижник (Eredar Warlock)',
                attributes: {
                    [States.Agility]: '6',
                    [States.Smarts]: '12+2',
                    [States.Spirit]: '10',
                    [States.Strength]: '12+2',
                    [States.Vigor]: '10',
                },
                skills: {
                    [Skills.Fighting]: '8',
                    [Skills.Guts]: '12',
                    [Skills.Intimidation]: '12',
                    [Skills.Spellcasting]: '12+1',
                    [Skills.Taunt]: '12',
                },
                commonAttributes: {
                    [States.Pace]: '10',
                    [States.Parry]: '8',
                    [States.Toughness]: '13',
                },
                specialAbilities: [
                    quickTextFormat(`**Черты**: ${[
                        `${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Магия демонов (Demon Magic))`,
                        `${getFromDict(EdgesTranslations, Edges.Wizard)}`,
                        `${getFromDict(EdgesTranslations, Edges.SoulDrain)}`,
                        `${getFromDict(SettingEdgesTranslations, SettingEdges.DarkRitual)}`,
                        `Украсть магию (Steal Magic)`,
                        `${getFromDict(SettingEdgesTranslations, SettingEdges.SpellAura)}`,
                    ].join(', ')}`),
                    [
                        `${getFromDict(EdgesTranslations, Edges.Size)} +6`,
                        `${getFromDict(EdgesTranslations, Edges.Large)}`,
                        `${getFromDict(EdgesTranslations, Edges.Fear)} -3`,
                        `${getFromDict(EdgesTranslations, Edges.ArcaneResistance)} (+4)`,
                        `Когти (Claws) (Сила+1)`,
                        `${getFromDict(EdgesTranslations, Edges.Flight)} (20 дюймов, Подъем 6 дюймов)`,
                    ].join(', '),
                    quickTextFormat(`***Магия демонов (Demon Magic)*** - **Пункты Силы**: 50; **Силы**: Все из списка Волшебника (Wizard) / Чернокнижника (Warlock).`),
                ],
            }),
            getUnitContent({
                isWildCard: true,
                title: 'Натрезим Повелитель Ужаса (Nathrezim Dread Lord)',
                attributes: {
                    [States.Agility]: '8',
                    [States.Smarts]: '12',
                    [States.Spirit]: '12',
                    [States.Strength]: '10',
                    [States.Vigor]: '10',
                },
                skills: {
                    [Skills.Fighting]: '10',
                    [Skills.Guts]: '12',
                    [Skills.Intimidation]: '12+1',
                    [Skills.Notice]: '8',
                    [Skills.Spellcasting]: '10',
                    [Skills.Stealth]: '12+1',
                    [Skills.Taunt]: '12+1',
                },
                commonAttributes: {
                    [States.Pace]: '6',
                    [States.Parry]: '7',
                    [States.Toughness]: '18 (14)',
                },
                equipment: [
                    `Большой меч Скверны (Сила+6, -1 Парирование, 2 руки)`,
                    `Броня Скверны (+4)`,
                ],
                specialAbilities: [
                    quickTextFormat(`**Черты**: ${[
                        `${getFromDict(EdgesTranslations, Edges.ImprovedFrenzy)}`,
                        `${getFromDict(EdgesTranslations, Edges.ImprovedDodge)}`,
                        `${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Магия демонов (Demon Magic))`,
                        `${getFromDict(EdgesTranslations, Edges.Wizard)}`,
                        `${getFromDict(EdgesTranslations, Edges.SoulDrain)}`,
                        `${getFromDict(EdgesTranslations, Edges.Command)}`,
                    ].join(', ')}`),
                    [
                        `${getFromDict(EdgesTranslations, Edges.Size)} +1`,
                        `${getFromDict(EdgesTranslations, Edges.Flight)} (10 дюймов, Подъем 4 дюйма)`,
                        `${getFromDict(EdgesTranslations, Edges.Armor)} +2`, ,
                        `Когти (Claws) (Сила+2)`,
                    ].join(', '),
                    quickTextFormat(`**Вампирская аура (Vampiric Aura)**: Каждый раз, когда Повелитель Ужаса или его союзники наносят удар противнику в ближнем бою, они совершают проверку Исцеления (Healing check).`),
                    quickTextFormat(`***Магия демонов (Demon Magic)*** - **Пункты Силы**: 30; **Силы**: ${[
                        `*${getFromDict(PowersTranslations, Powers.Blast)}*`,
                        `*${getFromDict(PowersTranslations, Powers.BoostLowerTrait)}*`,
                        `*${getFromDict(PowersTranslations, Powers.Invisibility)}*`,
                        `*${getFromDict(PowersTranslations, Powers.Obscure)}*`,
                        `*${getFromDict(PowersTranslations, Powers.Puppet)}*`,
                        `*${getFromDict(PowersTranslations, Powers.Quickness)}*`,
                    ].join(', ')}`),
                ],
            }),
        ];
    }

    return [
        {
            text: 'Бестиарий Warcraft (Bestiary of Warcraft)',
            style: 'header1',
            pageBreak: 'before',
        },
        getCreepsContent(),
        getBurningLegionContent(),
    ];
}

function getUnitsBuildingsGearContent() {
    function getTitleContent() {
        return [
            {
                text: `Здесь представлена вся игровая статистика, необходимая для представления огромных армий Азерота. У каждой фракции есть расширенный раздел. Сначала перечислены основные характеристики юнитов, включая стоимость очков за юнит, и предложения для черт, которые можно добавить в качестве "улучшений" по мере их развития. Затем следует список расходов на набор (строительство) и содержание юнитов, а затем — на здания этой фракции. Наконец, идет список критически важного фракционного снаряжения, которое можно купить как для юнитов, так и для ваших героев. Обычно это оружие, броня и боеприпасы.`,
                leadingIndent: paragraphOffset,
            },
            {
                text: 'Вопросы логистики (Questions of Logistics)',
                style: 'header3',
            },
            {
                text: `Базовая денежная единица в Warcraft — золотая монета. 100 серебряных монет равны одной золотой, а 100 медных монет равны одной серебряной. Золото добывается различными способами. Эти способы приносят 10 золотых на рабочего в день, плюс еще 10 золотых "обрабатываемых" металлов (железо, медь и т. д.). Только первые пять рабочих, работающих в шахте, увеличивают производство. По желанию GM, в шахте также могут быть жилы более редких металлов: мифрила, адамантина, тория, арканита или лунного серебра. Они приносят дополнительно 1 золото на рабочего в день, которое можно использовать только для оплаты оборудования из этого металла или продажи другой группе, которая этим занимается.`,
                leadingIndent: paragraphOffset,
            },
            {
                text: `Вторым важным товаром в Warcraft является древесина. Древесина заготавливается рабочими в размере 10 единиц на одного рабочего в день и включает в себя не только пиломатериалы, но и любые природные ресурсы, которые можно заготовить на природе.`,
                leadingIndent: paragraphOffset,
            },
            {
                text: `Третий товар — еда. Альянс и Орда занимаются фермерством ради еды, в то время как Ночные эльфы используют лунные колодцы, в которых хранится мана, чтобы быстро пополнять запасы естественной еды, а также поддерживать мистических существ, которые вступают с ними в союз. Нерубские зиккураты Плети Нежити предоставляют грядки для выращивания грибов и других продуктов питания, которые любят темноту, но их основное назначение — посылать волны неживой энергии, которая поддерживает монстров и нежить армии. В любом случае, еда производится еженедельно и учитывается только в содержании отрядов и зданий. Источник еды производит 8 единиц еды каждый месяц.`,
                leadingIndent: paragraphOffset,
            },
            getTipText([
                quickTextFormat(`Лично я нахожу странным то, что в одном предложении написано *"еда производится еженедельно (food is produced on a weekly basis)"*, а в следующем - *"Источник еды производит 8 единиц еды каждый месяц (A food source produces 8 food each month)"*.`),
                quickTextFormat(`Так еженедельно или ежемесечно? Непонятно.`),
                quickTextFormat(`В версии от 28 марта 2004 написано *"food is produced on a monthly basis"*, т.е. описанное выше противоречие - косяк версии 29 марта 2005.`),
            ]),
            {
                text: `У лунных колодцев есть дополнительный эффект: они вдвое снижают (halve) скорость регенерации маны любого, кто медитирует у них, до максимума 8 персонажей в день. Если лунным колодцам не дают восстанавливаться в среднем четыре часа за ночь в течение месяца, они ослабевают и производят на одну еду меньше, а также позволяют медитировать на одного человека меньше.`,
                leadingIndent: paragraphOffset,
            },
            getTipText([
                quickTextFormat(`Оригинальная фраза звучит следующим образом: *"Moonwells have an additional effect: they halve the mana regeneration rate of anyone meditating at them, to a maximum of 8 characters per day."*. Слово *"halve"* переводится как *"делить пополам, уменьшать наполовину"*. Т.е. если кто-то решит помедитировать около этой штуки, он будет восстанавливать ману в два раза медленнее (если обычно 1 в час, то тут - 1 за 2 часа). Ну что-же, звучит как крайне полезное строение... В общем, мы имеем забавное противоречие, ведь в игре Лунные колоцы (Moonwells) лечат и **ускоряют** регенерацию маны, а тут - наоборот... `),
                quickTextFormat(`Из следующего предложения мы узнаем, что колодцу еще и нужно перезаряжаться, иначе медитировать у него может на 1 существо меньше: *"If the moonwells are not allowed to regenerate for an average of four hours per night over the month, they weaken, and produce one less food as well as allowing one less person to meditate."*. Т.е. он не столько высасывает магию из медитирующих, сколько подавляет ее, расходуя на это собственные силы. Если бы он подавлял всех, а не только медитирующих, это можно было бы использовать в бою.`),
                quickTextFormat(`Одновременно медитировать вокруг колодца, по сути отдавая ему свою ману, может ограниченное количество существ - *"до максимума 8 персонажей в день (maximum of 8 characters per day)"*. Т.е., если 8 эльфов решат сидеть вокруг колодца весь день, но одному надоест через час и он уйдет, на его место до конца дня не сможет сесть никто другой?`),
                quickTextFormat(`В общем, в рамках перевода **решено оставить перевод этого абзаца как есть**. Лично я рекомендовал бы придумать вместо этого что-нибудь более подходящее под игровые реалии Warcraft. Например, **удвоение** скорости регенерации маны или что-то вроде того.`),
            ]),
            {
                text: `Некроманты с чертой Темный ритуал (Dark Ritual) могут выкачивать часть неживой энергии из зиккурата, чтобы усилить свои заклинания. Каждое такое выкачивание занимает 15-минутный ритуал, дает тот же бонус, что и Темный ритуал (Dark Ritual), и уменьшает производство еды целевого зиккурата на единицу навсегда.`,
                leadingIndent: paragraphOffset,
            },
            getTipText([
                quickTextFormat(`Не описано, что будет, когда производство еды упадет до нуля.`),
                quickTextFormat(`Если после этого зиккурат больше ничего не будет делать - опция не особо выгодная, ибо для 8 вытягиваний маны нужно потратить 4 дня работы 5 рабочих (или 3 дня на десятерых, если 5 в шахтах и 5 добывают дерево) и 5 дней строительства.`),
                quickTextFormat(`Если после этого зиккурат начинает "поглощать" еду вместо производства - это будет забавно, но все равно не особо выгодно.`),
                quickTextFormat(`В любом случае, уменьшение производства **навсегда** видится мне не самой хорошей идеей.`),
            ]),
            {
                text: `У каждого отряда и здания есть как стоимость создания, так и стоимость поддержания. Она указывается в золотых монетах, единицах дерева и единицах еды. Стоимость создания для каждого отряда отражает усилия по обучению и оснащению отряда. Отряды чаще набираются из других мест, а не обучаются на месте, но в любом случае стоимость создания должна быть оплачена. Аналогично, у большинства зданий есть стоимость поддержания в еде, отражающая некомбатантов, которые обслуживают эти здания.`,
                leadingIndent: paragraphOffset,
            },
            {
                text: 'Стартовое снаряжение (Starting Equipment)',
                style: 'header3',
            },
            {
                text: `В более военных кампаниях персонажам обычно выдают стартовое снаряжение, основываясь на отряде, на который они больше всего похожи. Это приводит к некоторому разбросу стоимости снаряжения, но гарантирует, что у персонажей есть все необходимое снаряжение для выполнения их ролей в игре. Рекомендуется, чтобы для каждого ранга выше Новичка (${Ranks.Novice}) герои начинали со снаряжением на одну ступень выше в таблицах прогрессии снаряжения. Также рекомендуется выдавать персонажам 50-500 серебра на личные расходы.`,
                leadingIndent: paragraphOffset,
            },
            {
                text: `Для игр, сосредоточенных на приключениях или исследовании, имеет смысл разрешить каждому персонажу приобретать собственное снаряжение. Персонажи начинают с 30 золотыми, на которые можно купить стартовое снаряжение. При трате очков Изъяна каждое потраченное очко добавляет 15 золотых. Предметы со стоимостью в древесине доступны при создании персонажа за 1 дополнительное золото за 10 единиц древесины. Для предметов, не указанных в списках снаряжения фракции, используйте стоимость, указанную в книге Savage Worlds, как если бы они были в серебре. Указанные цены на боеприпасы предназначены для оснащения отряда этими боеприпасами с этого момента. Чтобы купить боеприпасы по отдельности, учитывайте указанную стоимость в золоте, как если бы она была в серебре (после добавления модификатора на стоимость древесины).`,
                leadingIndent: paragraphOffset,
            },
            {
                text: 'Алтари и Лавки (Altars and Shops)',
                style: 'header3',
            },
            {
                text: `Некоторые из вас, возможно, заметили, что я не стал рассматривать Лавки, специфичные для фракций, а также четыре Алтаря. Причина этого в том, что эти вещи (доступ к магическим предметам и "возрождение" персонажа) настолько специфичны для кампании и зависят от предпочтений и настроек GM, что любые организованные правила получения этих предметов окажутся бесполезными для 90% людей. Поэтому я отсылаю вас к замечательному дополнению GWG о создании магических предметов (на сайте: www.peginc.com) и говорю вам: делайте, что хотите, потому что здесь я не получил никаких советов.`,
                leadingIndent: paragraphOffset,
            },
        ];
    }

    function getUnitContent(data) {
        const title = {
            text: [
                {
                    text: data.title,
                    style: 'header4',
                },
                ' ',
                {
                    text: `[${data.points}]`,
                    color: 'red',
                }
            ],
        };

        return {
            stack: [
                title,
                {
                    stack: data.lines,
                    margin: [paragraphOffset, 0, 0, 0],
                },
            ],
            alignment: 'left',
        };
    }

    function getUnitAttributesContent(data) {
        const attributesText = Object.keys(data ?? {})
            .map(attr => `${StatesTranslations[attr]} d${data?.[attr]}`)
            .join(', ');
        return quickTextFormat(`**Атрибуты**: ${attributesText}`);
    }

    function getUnitSkillsContent(data) {
        const skillsText = Object.keys(data ?? {})
            .map(attr => `${SkillsTranslations[attr]} d${data?.[attr]}`)
            .join(', ');
        return quickTextFormat(`**Навыки**: ${skillsText}`);
    }

    function getUnitCommonAttributesContent(data) {
        const commonAttributesList = [States.Pace, States.Parry, States.Toughness];
        const commonAttributesText = commonAttributesList
            .map(key => `**${StatesTranslations[key]}**: ${data?.[key]}`)
            .join('; ');
        return quickTextFormat(commonAttributesText);
    }

    function getAllianceContent() {
        function getAllianceUnitsContent() {
            return [
                {
                    text: 'Юниты (Units)',
                    style: 'header3',
                },
                getUnitContent({
                    title: 'Ополченец (Militia)',
                    points: '26',
                    lines: [
                        getUnitAttributesContent({
                            [States.Agility]: '6',
                            [States.Smarts]: '4',
                            [States.Spirit]: '6',
                            [States.Strength]: '6',
                            [States.Vigor]: '6',
                        }),
                        getUnitSkillsContent({
                            [Skills.Fighting]: '6',
                            [Skills.Guts]: '4',
                            [Skills.Knowledge]: '6 (фермерство, инженерия, шахтерство)',
                            [Skills.Notice]: '4',
                            [Skills.Repair]: '6',
                        }),
                        getUnitCommonAttributesContent({
                            [States.Pace]: '6',
                            [States.Parry]: '5',
                            [States.Toughness]: '7 (5)',
                        }),
                        quickTextFormat(`**Снаряжение**: ${[
                            `Топор (Сила+2)`,
                            `Кольчужный хауберк (+2)`,
                        ].join(', ')}`),
                        quickTextFormat(`**Развитие**: ${getFromDict(EdgesTranslations, Edges.Alertness)}. Ополченцы не являются профессиональными солдатами, поэтому повышают уровень только при выпадении 6.`),
                    ],
                }),
                getTipText([
                    quickTextFormat(`Без понятия, какой уровень они там повышают.`),
                ]),
                getUnitContent({
                    title: 'Пехотинец (Foot Soldier)',
                    points: '32',
                    lines: [
                        getUnitAttributesContent({
                            [States.Agility]: '6',
                            [States.Smarts]: '4',
                            [States.Spirit]: '6',
                            [States.Strength]: '6',
                            [States.Vigor]: '6',
                        }),
                        getUnitSkillsContent({
                            [Skills.Fighting]: '6',
                            [Skills.Guts]: '6',
                            [Skills.Notice]: '4',
                        }),
                        getUnitCommonAttributesContent({
                            [States.Pace]: '6',
                            [States.Parry]: '7',
                            [States.Toughness]: '7 (5)',
                        }),
                        quickTextFormat(`**Снаряжение**: ${[
                            `Палаш (Сила+3)`,
                            `Кольчужный хауберк (+2)`,
                            `Каплевидный щит (+2 Парирование, +2 Стойкость против дальнего боя)`,
                        ].join(', ')}`),
                        quickTextFormat(`**Развитие**: ${getFromDict(EdgesTranslations, Edges.Block)}, ${getFromDict(SettingEdgesTranslations, SettingEdges.Defend)}, ${getFromDict(EdgesTranslations, Edges.ImprovedBlock)}, ${getFromDict(SettingEdgesTranslations, SettingEdges.ImprovedDefend)}`),
                    ],
                }),
                getUnitContent({
                    title: 'Дворф-Стрелок (Dwarven Rifleman)',
                    points: '35',
                    lines: [
                        getUnitAttributesContent({
                            [States.Agility]: '6',
                            [States.Smarts]: '4',
                            [States.Spirit]: '6',
                            [States.Strength]: '6',
                            [States.Vigor]: '8',
                        }),
                        getUnitSkillsContent({
                            [Skills.Fighting]: '4',
                            [Skills.Guts]: '6',
                            [Skills.Notice]: '6',
                            [Skills.Shooting]: '6',
                        }),
                        getUnitCommonAttributesContent({
                            [States.Pace]: '5',
                            [States.Parry]: '4',
                            [States.Toughness]: '7 (6)',
                        }),
                        quickTextFormat(`**Снаряжение**: ${[
                            `Мушкет (2d8, 10/20/40, 2 Действия на перезарядку)`,
                            `Штык (Сила+2, приделано к Мушкету)`,
                            `Кожаный доспех (+1)`,
                        ].join(', ')}`),
                        quickTextFormat(`**Развитие**: ${getFromDict(SettingEdgesTranslations, SettingEdges.Musketeer)}, ${getFromDict(EdgesTranslations, Edges.Marksman)}`),
                    ],
                }),
                getUnitContent({
                    title: 'Высший эльф лучник (High Elven Archer)',
                    points: '37',
                    lines: [
                        getUnitAttributesContent({
                            [States.Agility]: '8',
                            [States.Smarts]: '6',
                            [States.Spirit]: '6',
                            [States.Strength]: '6',
                            [States.Vigor]: '6',
                        }),
                        getUnitSkillsContent({
                            [Skills.Fighting]: '4',
                            [Skills.Guts]: '6',
                            [Skills.Notice]: '6',
                            [Skills.Shooting]: '6',
                        }),
                        quickTextFormat(`**Изъяны**: ${getFromDict(HindrancesTranslations, Hindrances.Cautious)}`),
                        quickTextFormat(`**Черты/Способности**: ${getFromDict(EdgesTranslations, Edges.LowLightVision)}`),
                        getUnitCommonAttributesContent({
                            [States.Pace]: '6',
                            [States.Parry]: '4',
                            [States.Toughness]: '6 (5)',
                        }),
                        quickTextFormat(`**Снаряжение**: ${[
                            `Длинный лук (2d6, 12/24/48)`,
                            `Короткий меч (Сила+2)`,
                            `Кожаная броня (+1)`,
                        ].join(', ')}`),
                        quickTextFormat(`**Развитие**: ${[
                            getFromDict(EdgesTranslations, Edges.Marksman),
                            getFromDict(SettingEdgesTranslations, SettingEdges.RapidShot),
                            getFromDict(SettingEdgesTranslations, SettingEdges.TwoArrowsNocked),
                            getFromDict(SettingEdgesTranslations, SettingEdges.HailOfArrows),
                        ].join(', ')}`),
                        {
                            text: quickTextFormat(`**Рэнджер (Ranger)**: ${[
                                `${SkillsTranslations[Skills.Stealth]} d4`,
                                `${SkillsTranslations[Skills.Survival]} d8`,
                                `${SkillsTranslations[Skills.Tracking]} d8`,
                                getFromDict(EdgesTranslations, Edges.Woodsman),
                            ].join(', ')}`),
                            italics: true,
                            margin: [paragraphOffset, 0, 0, 0],
                        },
                    ],
                }),
                getUnitContent({
                    title: 'Рыцарь (Knight)',
                    points: '45 + 48 (лошадь) = 93',
                    lines: [
                        getUnitAttributesContent({
                            [States.Agility]: '6',
                            [States.Smarts]: '4',
                            [States.Spirit]: '6',
                            [States.Strength]: '8',
                            [States.Vigor]: '8',
                        }),
                        getUnitSkillsContent({
                            [Skills.Fighting]: '8',
                            [Skills.Guts]: '8',
                            [Skills.Notice]: '4',
                            [Skills.Riding]: '6',
                        }),
                        getUnitCommonAttributesContent({
                            [States.Pace]: '6',
                            [States.Parry]: '7',
                            [States.Toughness]: '9 (6)',
                        }),
                        quickTextFormat(`**Снаряжение**: ${[
                            `Палаш (Сила+3)`,
                            `Копье (Сила+4, ББ 1, Досягаемость 2)`,
                            `Латный доспех (+3)`,
                            `Средний щит (+1 Парирование, +1 Стойкость против дальнего боя)`,
                        ].join(', ')}`),
                        quickTextFormat(`***Лошадь боевая (Warhorse)***: см. SW1 с. 144, SW2 с. 184, с кольчужным доспехом (+2 к туловищу и 50% к голове)`),
                        quickTextFormat(`**Развитие**: ${[
                            getFromDict(EdgesTranslations, Edges.Sweep),
                            getFromDict(EdgesTranslations, Edges.FirstStrike),
                        ].join(', ')}`),
                    ],
                }),
                getUnitContent({
                    title: 'Наездник на дракондоре, высший или кровавый эльф (Dragonhawk Rider, High or Blood Elf)',
                    points: '49 + 58 (дракондор) = 107',
                    lines: [
                        getUnitAttributesContent({
                            [States.Agility]: '8',
                            [States.Smarts]: '8',
                            [States.Spirit]: '6',
                            [States.Strength]: '6',
                            [States.Vigor]: '6',
                        }),
                        getUnitSkillsContent({
                            [Skills.Fighting]: '4',
                            [Skills.Guts]: '8',
                            [Skills.Notice]: '6',
                            [Skills.Riding]: '6',
                            [Skills.Spellcasting]: '6',
                            [Skills.Shooting]: '6',
                        }),
                        quickTextFormat(`**Изъяны**: ${getFromDict(HindrancesTranslations, Hindrances.Cautious)} или ${getFromDict(HindrancesTranslations, Hindrances.Vengeful)} (мелкий)`),
                        quickTextFormat(`**Черты/Способности**: ${[
                            getFromDict(EdgesTranslations, Edges.LowLightVision),
                            getFromDict(SettingEdgesTranslations, SettingEdges.Cavalry),
                            getFromDict(EdgesTranslations, Edges.SteadyHands),
                            `${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Тайная Магия (Arcane Magic))`,
                        ].join(', ')}`),
                        quickTextFormat(`**Тайная Магия (Arcane Magic)**: ***Пункты Силы***: 15; ***Заклинания***: *${[
                            getFromDict(PowersTranslations, Powers.Obscure),
                            getFromDict(SettingPowersTranslations, SettingPowers.Paralyze),
                        ].join('*, *')}*`),
                        getUnitCommonAttributesContent({
                            [States.Pace]: '6',
                            [States.Parry]: '4',
                            [States.Toughness]: '6 (5)',
                        }),
                        quickTextFormat(`**Снаряжение**: ${[
                            `Длинный лук (2d6, 12/24/48)`,
                            `Короткий меч (Сила+2)`,
                            `Кожаная броня (+1)`,
                        ].join(', ')}`),
                        [
                            quickTextFormat(`***Дракондор***:`),
                            {
                                stack: [
                                    getUnitAttributesContent({
                                        [States.Agility]: '10',
                                        [States.Smarts]: '4 (Ж)',
                                        [States.Spirit]: '6',
                                        [States.Strength]: '8',
                                        [States.Vigor]: '6',
                                    }),
                                    getUnitSkillsContent({
                                        [Skills.Fighting]: '6',
                                        [Skills.Guts]: '6',
                                        [Skills.Notice]: '6',
                                    }),
                                    quickTextFormat(`**Черты/Способности**: ${[
                                        `${getFromDict(EdgesTranslations, Edges.Size)} +2`,
                                        `Когти (Claws) (Сила+2)`,
                                        `Клюв (Beak) (Сила+1)`,
                                        `${getFromDict(EdgesTranslations, Edges.Flight)} (16 дюймов, 6 дюймов Подъем)`,
                                        `${getFromDict(EdgesTranslations, Edges.Armor)} +2`,
                                    ].join(', ')}`),
                                    getUnitCommonAttributesContent({
                                        [States.Pace]: '6',
                                        [States.Parry]: '5',
                                        [States.Toughness]: '9',
                                    }),
                                ],
                                margin: [paragraphOffset, 0, 0, 0],
                            },
                        ],
                        quickTextFormat(`**Развитие**: ${[
                            `${getFromDict(SettingEdgesTranslations, SettingEdges.StrafingRun)}`,
                            `${getFromDict(SettingEdgesTranslations, SettingEdges.RapidShot)}`,
                            `(если Эльф Крови) ${getFromDict(SettingEdgesTranslations, SettingEdges.Warlock)}`,
                        ].join(', ')}`),
                    ],
                }),
                getUnitContent({
                    title: 'Наездник на грифоне, дворф (Gryphon Rider, Dwarf)',
                    points: '47 + 60 (грифон) = 107',
                    lines: [
                        getUnitAttributesContent({
                            [States.Agility]: '6',
                            [States.Smarts]: '4',
                            [States.Spirit]: '8',
                            [States.Strength]: '8',
                            [States.Vigor]: '8',
                        }),
                        getUnitSkillsContent({
                            [Skills.Fighting]: '4',
                            [Skills.Guts]: '8',
                            [Skills.Intimidation]: '6',
                            [Skills.Notice]: '4',
                            [Skills.Riding]: '6',
                            [Skills.Throwing]: '8',
                        }),
                        quickTextFormat(`**Изъяны**: ${getFromDict(HindrancesTranslations, Hindrances.Outsider)} (Дворф Дикого Молота (Wildhammer Dwarf))`),
                        quickTextFormat(`**Черты/Способности**: ${[
                            getFromDict(EdgesTranslations, Edges.LowLightVision),
                            getFromDict(SettingEdgesTranslations, SettingEdges.Cavalry),
                            getFromDict(EdgesTranslations, Edges.SteadyHands),
                        ].join(', ')}`),
                        getUnitCommonAttributesContent({
                            [States.Pace]: '5',
                            [States.Parry]: '4',
                            [States.Toughness]: '7 (6)',
                        }),
                        quickTextFormat(`**Снаряжение**: ${[
                            `Метательные молоты (Сила+2, 3/6/12)`,
                            `Кожаная броня (+1)`,
                        ].join(', ')}`),
                        quickTextFormat(`***Грифон (Gryphon)***: в **Бестиарии Warcraft**. Кожаная броня (+1 к туловищу/50% к голове)`),
                        quickTextFormat(`**Развитие**: ${[
                            getFromDict(EdgesTranslations, Edges.BeastBond),
                            getFromDict(SettingEdgesTranslations, SettingEdges.StrafingRun),
                            `Быстрый бросок (Rapid Throw)`,
                        ].join(', ')}`),
                    ],
                }),
                getTipText([
                    quickTextFormat(`Черты **Быстрый бросок (Rapid Throw)** нет ни в книгах Savage Worlds, ни в этой конверсии. Вероятно, черта работает аналогично **Быстрому выстрелу (Rapid Shot)**.`),
                ]),
                getUnitContent({
                    title: 'Маг (Mage)',
                    points: '35',
                    lines: [
                        getUnitAttributesContent({
                            [States.Agility]: '6',
                            [States.Smarts]: '8',
                            [States.Spirit]: '6',
                            [States.Strength]: '4',
                            [States.Vigor]: '6',
                        }),
                        getUnitSkillsContent({
                            [Skills.Fighting]: '4',
                            [Skills.Guts]: '8',
                            [Skills.Knowledge]: '8 (Аркана (Arcana))',
                            [Skills.Notice]: '8',
                            [Skills.Spellcasting]: '8',
                        }),
                        quickTextFormat(`**Черты/Способности**: ${[
                            `${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Тайная Магия (Arcane Magic))`,
                            getFromDict(EdgesTranslations, Edges.Wizard),
                        ].join(', ')}`),
                        quickTextFormat(`**Тайная Магия**: ***Пункты Силы***: 15; ***Заклинания***: *${[,
                            getFromDict(PowersTranslations, Powers.Bolt),
                            getFromDict(PowersTranslations, Powers.Barrier),
                            getFromDict(PowersTranslations, Powers.Slow),
                        ].join('*, *')}*`),
                        getUnitCommonAttributesContent({
                            [States.Pace]: '6',
                            [States.Parry]: '5',
                            [States.Toughness]: '5',
                        }),
                        quickTextFormat(`**Снаряжение**: ${[
                            `Боевой посох (Сила+2, +1 Парирование)`,
                        ].join(', ')}`),
                        quickTextFormat(`**Развитие**: ${[
                            `*${getFromDict(PowersTranslations, Powers.Invisibility)}*`,
                            `*${getFromDict(SettingPowersTranslations, SettingPowers.OffensiveArmor)}*`,
                            `*${getFromDict(PowersTranslations, Powers.Blast)}*`,
                            `*${getFromDict(SettingPowersTranslations, SettingPowers.TransformOther)}*`,
                            getFromDict(EdgesTranslations, Edges.RapidRecharge),
                            getFromDict(EdgesTranslations, Edges.PowerPoints),
                        ].join(', ')}`),

                        quickTextFormat(`**Эльфийская Волшебница (Elven Sorceress)**: добавьте Изъяны: ${[
                            `Зависимость от Тайной магии (Arcane Addiction)`,
                            getFromDict(HindrancesTranslations, Hindrances.Cautious),
                        ].join(', ')}. ${StatesTranslations[States.Agility]} d8.`, { margin: [paragraphOffset, 0, 0, 0] }),
                    ],
                }),
                getUnitContent({
                    title: 'Жрец Света (Priest of the Light)',
                    points: '37',
                    lines: [
                        getUnitAttributesContent({
                            [States.Agility]: '6',
                            [States.Smarts]: '6',
                            [States.Spirit]: '8',
                            [States.Strength]: '4',
                            [States.Vigor]: '6',
                        }),
                        getUnitSkillsContent({
                            [Skills.Faith]: '8',
                            [Skills.Fighting]: '4',
                            [Skills.Guts]: '6',
                            [Skills.Healing]: '8',
                            [Skills.Knowledge]: '8 (Религия (Religion))',
                            [Skills.Notice]: '6',
                        }),
                        quickTextFormat(`**Черты/Способности**: ${[
                            `${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Внутренний Свет (Inner Light))`,
                            getFromDict(SettingEdgesTranslations, SettingEdges.Priest),
                        ].join(', ')}`),
                        quickTextFormat(`**Чудеса**: ***Пункты Силы***: 15; ***Заклинания***: ${[,
                            `*${getFromDict(PowersTranslations, Powers.Bolt)}*`,
                            `*${getFromDict(PowersTranslations, Powers.Healing)}*`,
                        ].join(', ')}`),
                        getUnitCommonAttributesContent({
                            [States.Pace]: '6',
                            [States.Parry]: '5',
                            [States.Toughness]: '5',
                        }),
                        quickTextFormat(`**Снаряжение**: ${[
                            `Боевой посох (Сила+2, +1 Парирование)`,
                        ].join(', ')}`),
                        quickTextFormat(`**Развитие**: ${[
                            `*${getFromDict(PowersTranslations, Powers.Dispel)}*`,
                            `*${getFromDict(PowersTranslations, Powers.BoostLowerTrait)}*`,
                            `*${getFromDict(SettingPowersTranslations, SettingPowers.InnerFire)}*`,
                            getFromDict(EdgesTranslations, Edges.RapidRecharge),
                            getFromDict(EdgesTranslations, Edges.PowerPoints),
                            getFromDict(EdgesTranslations, Edges.Healer),
                        ].join(', ')}`),
                    ],
                }),
                getUnitContent({
                    title: 'Разрушитель заклинаний/Ведьмак, Кровавый эльф (Spellbreaker, Blood Elf)',
                    points: '48',
                    lines: [
                        getUnitAttributesContent({
                            [States.Agility]: '8',
                            [States.Smarts]: '8',
                            [States.Spirit]: '8',
                            [States.Strength]: '6',
                            [States.Vigor]: '8',
                        }),
                        getUnitSkillsContent({
                            [Skills.Fighting]: '6',
                            [Skills.Guts]: '8',
                            [Skills.Knowledge]: '8 (Аркана (Arcana))',
                            [Skills.Notice]: '8',
                            [Skills.Spellcasting]: '6',
                        }),
                        quickTextFormat(`**Изъяны**: ${getFromDict(HindrancesTranslations, Hindrances.Vengeful)} (мелкий)`),
                        quickTextFormat(`**Черты/Способности**: ${[
                            `${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Тайная Магия (Arcane Magic))`,
                            getFromDict(EdgesTranslations, Edges.Wizard),
                            getFromDict(SettingEdgesTranslations, SettingEdges.SpellBreaker),
                            getFromDict(EdgesTranslations, Edges.Block),
                        ].join(', ')}`),
                        getUnitCommonAttributesContent({
                            [States.Pace]: '6',
                            [States.Parry]: '7',
                            [States.Toughness]: '7 (5)',
                        }),
                        quickTextFormat(`**Снаряжение**: ${[
                            `Двойной меч (Сила+3, Парирование +1)`,
                            `Средний щит (+1 Парирование, +1 Стойкость против дальнего боя)`,
                            `Кольчужный хауберк (+2)`,
                        ].join(', ')}`),
                        quickTextFormat(`**Развитие**: ${[
                            getFromDict(SettingEdgesTranslations, SettingEdges.CaptureSpell),
                            getFromDict(SettingEdgesTranslations, SettingEdges.DrainSpell),
                            `${getFromDict(EdgesTranslations, Edges.Florentine)} (используется с двойным мечом)`,
                        ].join(', ')}`),
                    ],
                }),
                getUnitContent({
                    title: 'Дворфийский Мортирный расчет/Орудийный расчет (Mortar Crew, Dwarven)',
                    points: '78',
                    lines: [
                        quickTextFormat(`*Дворфийский Мортирный расчет состоит из двух обученных дворфов и одного миномета.*`),
                        getUnitAttributesContent({
                            [States.Agility]: '8',
                            [States.Smarts]: '4',
                            [States.Spirit]: '',
                            [States.Strength]: '6',
                            [States.Vigor]: '8',
                        }),
                        getUnitSkillsContent({
                            [Skills.Fighting]: '4',
                            [Skills.Guts]: '8',
                            [Skills.Notice]: '4',
                            [Skills.Repair]: '6',
                            [Skills.Shooting]: '6',
                        }),
                        quickTextFormat(`**Черты/Способности**: ${[
                            getFromDict(EdgesTranslations, Edges.LowLightVision),
                        ].join(', ')}`),
                        getUnitCommonAttributesContent({
                            [States.Pace]: '5',
                            [States.Parry]: '4',
                            [States.Toughness]: '7 (6)',
                        }),
                        quickTextFormat(`**Персональное снаряжение**: ${[
                            `Короткий меч (Сила+2)`,
                            `Кожаная броня (+1)`,
                        ].join(', ')}`),
                        quickTextFormat(`***Мортира (Mortar)***: 3d6 в Шаблоне Малого Взрыва, 30/60/90, Тяжелое Оружие, 2 Действия на перезарядку, неподвижна во время стрельбы.`),
                        quickTextFormat(`**Развитие**: ${[
                            getFromDict(SettingEdgesTranslations, SettingEdges.Artillerist),
                            getFromDict(EdgesTranslations, Edges.Marksman),
                        ].join(', ')}`),
                    ],
                }),
                getTipText([
                    quickTextFormat(`Отсутствие значения у Характера - не моя опечатка, а ошибка оригинального документа.`),
                ]),
                getUnitContent({
                    title: 'Летающая Машина/Вертолет (Flying Machine)',
                    points: '75',
                    lines: [
                        quickTextFormat(`*Летающая Машина включает в себя пилота-дворфа, который получает от своего транспортного средства лишь половину защиты.*`),
                        quickTextFormat(`**Скорость/Ускорение/Подъем**: 12/3/4; **Стойкость**: 8 (5)`),
                        quickTextFormat(`**Способности**: ${getFromDict(EdgesTranslations, Edges.Flight)}`),
                        quickTextFormat(`**Вращающаяся винтовка (Rotating Rifle)**: урон 2d8, 10/20/40, 6 выстрелов, перезарядка занимает 2 действия/выстрел.`),
                        quickTextFormat(`***Бомбы (Bombs)***: *Можно прикрепить устройство типа мортиры за 30 золота и 20 дерева. Дальность 2/4/8, поскольку бомбы в основном сбрасываются, а не запускаются.*`),
                        getUnitAttributesContent({
                            [States.Agility]: '8',
                            [States.Smarts]: '6',
                            [States.Spirit]: '8',
                            [States.Strength]: '6',
                            [States.Vigor]: '8',
                        }),
                        getUnitSkillsContent({
                            [Skills.Guts]: '6',
                            [Skills.Notice]: '8',
                            [Skills.Piloting]: '8',
                            [Skills.Repair]: '6',
                            [Skills.Shooting]: '6',
                        }),
                        quickTextFormat(`**Черты/Способности**: ${[
                            getFromDict(EdgesTranslations, Edges.LowLightVision),
                            getFromDict(EdgesTranslations, Edges.Ace),
                        ].join(', ')}`),
                        getUnitCommonAttributesContent({
                            [States.Pace]: '5',
                            [States.Parry]: '2',
                            [States.Toughness]: '6',
                        }),
                        quickTextFormat(`**Развитие**: ${[
                            getFromDict(SettingEdgesTranslations, SettingEdges.Musketeer),
                            getFromDict(EdgesTranslations, Edges.SteadyHands),
                            getFromDict(SettingEdgesTranslations, SettingEdges.RapidShot),
                        ].join(', ')}`),
                    ],
                }),
                getUnitContent({
                    title: 'Осадная машина/Самоходная мортира (Siege Engine)',
                    points: '77',
                    lines: [
                        quickTextFormat(`*В состав Осадной машины входят три дворфа-оператора/стрелка.*`),
                        quickTextFormat(`**Скорость/Ускорение**: 6/2; **Стойкость**: 18 (10)`),
                        quickTextFormat(`**Способности**: ${[
                            `Тяжёлая броня (Heavy Armor)`,
                            `Гусеничный (Tracked)`,
                        ].join(', ')}`),
                        quickTextFormat(`**Пушка (Cannon)**: Особое (см. SW1 с. 53, SW2 с. 77-78), 10/20/40, Тяжелое оружие, 3 действия для перезарядки (2 стрелка)`),
                        getUnitAttributesContent({
                            [States.Agility]: '6',
                            [States.Smarts]: '4',
                            [States.Spirit]: '8',
                            [States.Strength]: '6',
                            [States.Vigor]: '8',
                        }),
                        getUnitSkillsContent({
                            [Skills.Driving]: '6',
                            [Skills.Guts]: '8',
                            [Skills.Notice]: '6',
                            [Skills.Repair]: '6',
                            [Skills.Shooting]: '8',
                        }),
                        quickTextFormat(`**Черты/Способности**: ${[
                            getFromDict(EdgesTranslations, Edges.LowLightVision),
                            `${getFromDict(EdgesTranslations, Edges.Ace)} (Водитель)`,
                            getFromDict(SettingEdgesTranslations, SettingEdges.Artillerist),
                        ].join(', ')}`),
                        getUnitCommonAttributesContent({
                            [States.Pace]: '5',
                            [States.Parry]: '2',
                            [States.Toughness]: '6',
                        }),
                        quickTextFormat(`**Развитие**: ${[
                            getFromDict(EdgesTranslations, Edges.Marksman),
                            getFromDict(EdgesTranslations, Edges.SteadyHands),
                        ].join(', ')}`),
                    ],
                }),
            ];
        }

        function getAllianceCosts() {
            return [
                {
                    text: 'Стоимость и содержание (Costs and Upkeeps)',
                    style: 'header3',
                },
                {
                    table: { // Юниты
                        widths: ['auto', 'auto', 'auto'],
                        body: [
                            [
                                {
                                    text: 'Юниты',
                                    style: 'header4'
                                },
                                {
                                    text: 'Стоимость найма\n(золото/дерево)',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Содержание\n(золото/дерево/еда)',
                                    bold: true,
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Крестьянин/Ополченец',
                                },
                                {
                                    text: `75/0`,
                                    alignment: 'center',
                                },
                                {
                                    text: '1/0/1',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Пехотинец',
                                },
                                {
                                    text: `135/0`,
                                    alignment: 'center',
                                },
                                {
                                    text: '2/0/2',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Рыцарь',
                                },
                                {
                                    text: `245/60`,
                                    alignment: 'center',
                                },
                                {
                                    text: '4/0/4',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Дворф-Стрелок',
                                },
                                {
                                    text: `205/30`,
                                    alignment: 'center',
                                },
                                {
                                    text: '3/0/3',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Высший эльф лучник',
                                },
                                {
                                    text: `175/20`,
                                    alignment: 'center',
                                },
                                {
                                    text: '2/1/2',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Наездник на грифоне',
                                },
                                {
                                    text: `400/40`,
                                    alignment: 'center',
                                },
                                {
                                    text: '5/0/4',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Наездник на дракондоре',
                                },
                                {
                                    text: `325/30`,
                                    alignment: 'center',
                                },
                                {
                                    text: '4/0/3',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Маг',
                                },
                                {
                                    text: `210/20`,
                                    alignment: 'center',
                                },
                                {
                                    text: '4/0/2',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Жрец Света',
                                },
                                {
                                    text: `190/10`,
                                    alignment: 'center',
                                },
                                {
                                    text: '4/0/2',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Дворфийский Мортирный расчет',
                                },
                                {
                                    text: `240/50`,
                                    alignment: 'center',
                                },
                                {
                                    text: '5/1/4',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Летающая Машина',
                                },
                                {
                                    text: `100/40`,
                                    alignment: 'center',
                                },
                                {
                                    text: '3/1/2',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Осадная машина',
                                },
                                {
                                    text: `260/60`,
                                    alignment: 'center',
                                },
                                {
                                    text: '7/2/6',
                                    alignment: 'center',
                                },
                            ],
                        ]
                    },
                    alignment: 'left',
                },
                '\n',
                {
                    table: { // Здания
                        widths: ['*', 'auto', 'auto', 'auto'],
                        body: [
                            [
                                {
                                    text: [
                                        {
                                            text: 'Здания',
                                            style: 'header4'
                                        },
                                        '\n',
                                        {
                                            text: 'Курсивом обозначена стоимость улучшения',
                                            italics: true,
                                        }
                                    ],
                                },
                                {
                                    text: 'Стоимость\n(золото/дерево)',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Время строительства\n(дни)',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Содержание\n(золото/дерево/еда)',
                                    bold: true,
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Ратуша',
                                },
                                {
                                    text: `385/185`,
                                    alignment: 'center',
                                },
                                {
                                    text: `18`,
                                    alignment: 'center',
                                },
                                {
                                    text: '1/0/1',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: '- Крепость',
                                    italics: true,
                                },
                                {
                                    text: `320/210`,
                                    alignment: 'center',
                                },
                                {
                                    text: `14`,
                                    alignment: 'center',
                                },
                                {
                                    text: '1/0/2',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: '- Замок',
                                    italics: true,
                                },
                                {
                                    text: `360/210`,
                                    alignment: 'center',
                                },
                                {
                                    text: `14`,
                                    alignment: 'center',
                                },
                                {
                                    text: '2/0/3',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Казармы',
                                },
                                {
                                    text: `160/60`,
                                    alignment: 'center',
                                },
                                {
                                    text: `6`,
                                    alignment: 'center',
                                },
                                {
                                    text: '0/1/0',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Ферма',
                                },
                                {
                                    text: `80/20`,
                                    alignment: 'center',
                                },
                                {
                                    text: `3.5`,
                                    alignment: 'center',
                                },
                                {
                                    text: '0/0/-8',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Лесопилка',
                                },
                                {
                                    text: `220/20`,
                                    alignment: 'center',
                                },
                                {
                                    text: `6`,
                                    alignment: 'center',
                                },
                                {
                                    text: '1/0/2',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Кузница',
                                },
                                {
                                    text: `140/50`,
                                    alignment: 'center',
                                },
                                {
                                    text: `7`,
                                    alignment: 'center',
                                },
                                {
                                    text: '1/1/2',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Мастерская',
                                },
                                {
                                    text: `140/140`,
                                    alignment: 'center',
                                },
                                {
                                    text: `7`,
                                    alignment: 'center',
                                },
                                {
                                    text: '2/2/2',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Чародейское святилище/Храм Истины',
                                },
                                {
                                    text: `150/140`,
                                    alignment: 'center',
                                },
                                {
                                    text: `7`,
                                    alignment: 'center',
                                },
                                {
                                    text: '2/1/0',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Башня грифонов',
                                },
                                {
                                    text: `140/150`,
                                    alignment: 'center',
                                },
                                {
                                    text: `12`,
                                    alignment: 'center',
                                },
                                {
                                    text: '1/1/1',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Стена (секция в 1 дюйм)',
                                },
                                {
                                    text: `40/10`,
                                    alignment: 'center',
                                },
                                {
                                    text: `1`,
                                    alignment: 'center',
                                },
                                {
                                    text: '0/1/0',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Башня',
                                },
                                {
                                    text: `50/20`,
                                    alignment: 'center',
                                },
                                {
                                    text: `3`,
                                    alignment: 'center',
                                },
                                {
                                    text: '0/1/1',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: '- Сторожевая башня (включает 2 арбалета)',
                                    italics: true,
                                },
                                {
                                    text: `50/50`,
                                    alignment: 'center',
                                },
                                {
                                    text: `5`,
                                    alignment: 'center',
                                },
                                {
                                    text: '1/2/2',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: '- Орудийная башня (включает 1 пушку)',
                                    italics: true,
                                },
                                {
                                    text: `150/80`,
                                    alignment: 'center',
                                },
                                {
                                    text: `8`,
                                    alignment: 'center',
                                },
                                {
                                    text: '2/2/2',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: '- Магическая башня (включает 20 Пунктов Силы для Стрелы (Bolt))',
                                    italics: true,
                                },
                                {
                                    text: `50/50`,
                                    alignment: 'center',
                                },
                                {
                                    text: `5`,
                                    alignment: 'center',
                                },
                                {
                                    text: '4/1/2',
                                    alignment: 'center',
                                },
                            ],
                        ]
                    },
                    alignment: 'left',
                },
                {
                    text: 'Снаряжение',
                    style: 'header3',
                },
                {
                    table: { // Улучшения оружия ближнего боя
                        widths: ['*', 'auto', 'auto', 50, 'auto'],
                        body: [
                            [
                                {
                                    text: 'Улучшения оружия ближнего боя',
                                    style: 'header4',
                                },
                                {
                                    text: 'Бонус снаряжения',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Модификатор веса',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Цена\n(З/Д)',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Примечания',
                                    bold: true,
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Высокое качество',
                                },
                                {
                                    text: `+1 урон`,
                                    alignment: 'center',
                                },
                                {
                                    text: `х1`,
                                    alignment: 'center',
                                },
                                {
                                    text: '+10/+3',
                                    alignment: 'center',
                                },
                                {
                                    text: '',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Ковка из мифрила',
                                },
                                {
                                    text: `+2 урона`,
                                    alignment: 'center',
                                },
                                {
                                    text: `х0.8`,
                                    alignment: 'center',
                                },
                                {
                                    text: '+25/+15',
                                    alignment: 'center',
                                },
                                {
                                    text: '',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Ковка из адамантина',
                                },
                                {
                                    text: `+2 урона, +1 ББ`,
                                    alignment: 'center',
                                },
                                {
                                    text: `х2`,
                                    alignment: 'center',
                                },
                                {
                                    text: '+50/+40',
                                    alignment: 'center',
                                },
                                {
                                    text: '',
                                    alignment: 'center',
                                },
                            ],
                        ]
                    },
                    alignment: 'left',
                },
                '\n',
                {
                    table: { // Дистанционное оружие
                        widths: ['*', 'auto', 'auto', 50, 'auto', 'auto', 'auto'],
                        body: [
                            [
                                {
                                    text: 'Дистанционное оружие',
                                    style: 'header4',
                                },
                                {
                                    text: 'Дистанция',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Урон',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Цена\n(З/Д)',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Вес',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Мин. Сила',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Примечания',
                                    bold: true,
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Длинный лук',
                                },
                                {
                                    text: '12/24/48',
                                    alignment: 'center',
                                },
                                {
                                    text: `2d6`,
                                    alignment: 'center',
                                },
                                {
                                    text: `2`,
                                    alignment: 'center',
                                },
                                {
                                    text: '4',
                                    alignment: 'center',
                                },
                                {
                                    text: 'd6',
                                    alignment: 'center',
                                },
                                {
                                    text: '',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Эльфийский длинный лук',
                                    italics: true,
                                },
                                {
                                    text: '15/30/60',
                                    alignment: 'center',
                                },
                                {
                                    text: `2d6`,
                                    alignment: 'center',
                                },
                                {
                                    text: `5/5`,
                                    alignment: 'center',
                                },
                                {
                                    text: '5',
                                    alignment: 'center',
                                },
                                {
                                    text: 'd6',
                                    alignment: 'center',
                                },
                                {
                                    text: 'Требует Стрельбу d8+',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Пистолет',
                                },
                                {
                                    text: '5/10/20',
                                    alignment: 'center',
                                },
                                {
                                    text: `2d6+1`,
                                    alignment: 'center',
                                },
                                {
                                    text: `2`,
                                    alignment: 'center',
                                },
                                {
                                    text: '2',
                                    alignment: 'center',
                                },
                                {
                                    text: '--',
                                    alignment: 'center',
                                },
                                {
                                    text: 'Перезарядка 2 Действия',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Нарезной пистолет',
                                    italics: true,
                                },
                                {
                                    text: '10/20/40',
                                    alignment: 'center',
                                },
                                {
                                    text: `2d6+1`,
                                    alignment: 'center',
                                },
                                {
                                    text: `10/5`,
                                    alignment: 'center',
                                },
                                {
                                    text: '2',
                                    alignment: 'center',
                                },
                                {
                                    text: '--',
                                    alignment: 'center',
                                },
                                {
                                    text: 'Перезарядка 2 Действия',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Мушкет',
                                },
                                {
                                    text: '10/20/40',
                                    alignment: 'center',
                                },
                                {
                                    text: `2d8`,
                                    alignment: 'center',
                                },
                                {
                                    text: `5`,
                                    alignment: 'center',
                                },
                                {
                                    text: '12',
                                    alignment: 'center',
                                },
                                {
                                    text: 'd6',
                                    alignment: 'center',
                                },
                                {
                                    text: 'Перезарядка 2 Действия',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Длинная винтовка',
                                    italics: true,
                                },
                                {
                                    text: '15/30/60',
                                    alignment: 'center',
                                },
                                {
                                    text: `2d8`,
                                    alignment: 'center',
                                },
                                {
                                    text: `15/10`,
                                    alignment: 'center',
                                },
                                {
                                    text: '15',
                                    alignment: 'center',
                                },
                                {
                                    text: 'd6',
                                    alignment: 'center',
                                },
                                {
                                    text: 'ББ 1; Перезарядка 2 Действия',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Башенный арбалет',
                                },
                                {
                                    text: '30/60/120',
                                    alignment: 'center',
                                },
                                {
                                    text: `2d6+1`,
                                    alignment: 'center',
                                },
                                {
                                    text: `20/15`,
                                    alignment: 'center',
                                },
                                {
                                    text: '18',
                                    alignment: 'center',
                                },
                                {
                                    text: 'd6',
                                    alignment: 'center',
                                },
                                {
                                    text: 'Перезарядка 1 Действие',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Башенная пушка',
                                },
                                {
                                    text: '20/40/80',
                                    alignment: 'center',
                                },
                                {
                                    text: `3d6`,
                                    alignment: 'center',
                                },
                                {
                                    text: `--`,
                                    alignment: 'center',
                                },
                                {
                                    text: '60',
                                    alignment: 'center',
                                },
                                {
                                    text: '--',
                                    alignment: 'center',
                                },
                                {
                                    text: 'Перезарядка 2 Действия, см. SW1 с. 53, SW2 с. 78',
                                    alignment: 'center',
                                },
                            ],
                        ]
                    },
                    alignment: 'left',
                },
                {
                    ul: [
                        quickTextFormat(`*Урон от всех видов оружия дальнего боя изменяется за счет улучшения боеприпасов.*`),
                    ],
                },
                {
                    table: { // Улучшения Стрел/Болтов
                        widths: ['*', 'auto', 75, 'auto', 'auto'],
                        body: [
                            [
                                {
                                    text: 'Улучшения Стрел/Болтов',
                                    style: 'header4',
                                },
                                {
                                    text: 'Бонус снаряжения',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Цена\n(З/Д)',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Поддержание\n(З/Д)',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Примечания',
                                    bold: true,
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Высокое качество',
                                },
                                {
                                    text: `+1 урон`,
                                    alignment: 'center',
                                },
                                {
                                    text: '+20/+30',
                                    alignment: 'center',
                                },
                                {
                                    text: `+1`,
                                    alignment: 'center',
                                },
                                {
                                    text: '',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Ковка из мифрила',
                                },
                                {
                                    text: `+2 урона`,
                                    alignment: 'center',
                                },
                                {
                                    text: '+140/+140',
                                    alignment: 'center',
                                },
                                {
                                    text: `+1/+1`,
                                    alignment: 'center',
                                },
                                {
                                    text: '',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Ковка из адамантина',
                                },
                                {
                                    text: `+2 урона, +1 ББ`,
                                    alignment: 'center',
                                },
                                {
                                    text: '+250/+250',
                                    alignment: 'center',
                                },
                                {
                                    text: `+2/+2`,
                                    alignment: 'center',
                                },
                                {
                                    text: '',
                                    alignment: 'center',
                                },
                            ],
                        ]
                    },
                    alignment: 'left',
                },
                '\n',
                {
                    pageBreak: 'before',
                    table: { // Улучшения огнестрельного оружия
                        widths: ['*', 'auto', 75, 'auto', 'auto'],
                        body: [
                            [
                                {
                                    text: 'Улучшения огнестрельного оружия',
                                    style: 'header4',
                                },
                                {
                                    text: 'Бонус снаряжения',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Цена\n(З/Д)',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Поддержание\n(З/Д)',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Примечания',
                                    bold: true,
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Избыточный заряд',
                                },
                                {
                                    text: `+1 урон`,
                                    alignment: 'center',
                                },
                                {
                                    text: '+60/+30',
                                    alignment: 'center',
                                },
                                {
                                    text: `+1`,
                                    alignment: 'center',
                                },
                                {
                                    text: '',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Очищенный порох',
                                },
                                {
                                    text: `+2 урона`,
                                    alignment: 'center',
                                },
                                {
                                    text: '+200/+150',
                                    alignment: 'center',
                                },
                                {
                                    text: `+1/+1`,
                                    alignment: 'center',
                                },
                                {
                                    text: '',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Пропитанный порох',
                                },
                                {
                                    text: `+2 урона, +1 ББ`,
                                    alignment: 'center',
                                },
                                {
                                    text: '+400/+400',
                                    alignment: 'center',
                                },
                                {
                                    text: `+2/+2`,
                                    alignment: 'center',
                                },
                                {
                                    text: '',
                                    alignment: 'center',
                                },
                            ],
                        ]
                    },
                    alignment: 'left',
                },
                {
                    ul: [
                        quickTextFormat(`*Модернизация боеприпасов включает в себя все боеприпасы для юнита.*`),
                    ],
                },
                {
                    table: { // Легкая броня
                        widths: ['*', 'auto', 'auto', 50, 'auto', 'auto'],
                        body: [
                            [
                                {
                                    text: 'Легкая броня',
                                    style: 'header4',
                                },
                                {
                                    text: 'Броня',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Зоны',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Цена\n(З/Д)',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Вес',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Примечания',
                                    bold: true,
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Кожаная броня',
                                },
                                {
                                    text: `+1`,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Торс, руки, ноги',
                                    alignment: 'center',
                                },
                                {
                                    text: `2/1`,
                                    alignment: 'center',
                                },
                                {
                                    text: `5`,
                                    alignment: 'center',
                                },
                                {
                                    text: '',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Кожа с заклепками',
                                },
                                {
                                    text: `+2`,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Торс, руки, ноги, 50% головы',
                                    alignment: 'center',
                                },
                                {
                                    text: `10/10`,
                                    alignment: 'center',
                                },
                                {
                                    text: `15`,
                                    alignment: 'center',
                                },
                                {
                                    text: '',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Усиленная кожа',
                                },
                                {
                                    text: `+3`,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Торс, руки, ноги, 50% головы',
                                    alignment: 'center',
                                },
                                {
                                    text: `15/15`,
                                    alignment: 'center',
                                },
                                {
                                    text: `20`,
                                    alignment: 'center',
                                },
                                {
                                    text: '',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Драконья кожа',
                                },
                                {
                                    text: `+4`,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Торс, руки, ноги, 50% головы',
                                    alignment: 'center',
                                },
                                {
                                    text: `25/25`,
                                    alignment: 'center',
                                },
                                {
                                    text: `20`,
                                    alignment: 'center',
                                },
                                {
                                    text: '',
                                    alignment: 'center',
                                },
                            ],
                        ]
                    },
                    alignment: 'left',
                },
                '\n',
                {
                    table: { // Тяжелая броня
                        widths: ['*', 'auto', 'auto', 50, 'auto', 'auto'],
                        body: [
                            [
                                {
                                    text: 'Тяжелая броня',
                                    style: 'header4',
                                },
                                {
                                    text: 'Броня',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Зоны',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Цена\n(З/Д)',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Вес',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Примечания',
                                    bold: true,
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Кольчужный хауберк',
                                },
                                {
                                    text: `+2`,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Торс, руки, ноги, 50% головы',
                                    alignment: 'center',
                                },
                                {
                                    text: `5/2`,
                                    alignment: 'center',
                                },
                                {
                                    text: `20`,
                                    alignment: 'center',
                                },
                                {
                                    text: 'В комплект входит легкий шлем или капюшон.',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Латный доспех',
                                },
                                {
                                    text: `+3`,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Торс, руки, ноги, голова',
                                    alignment: 'center',
                                },
                                {
                                    text: `15/10`,
                                    alignment: 'center',
                                },
                                {
                                    text: `40`,
                                    alignment: 'center',
                                },
                                {
                                    text: '',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Прочные латы',
                                },
                                {
                                    text: `+4`,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Торс, руки, ноги, голова',
                                    alignment: 'center',
                                },
                                {
                                    text: `30/25`,
                                    alignment: 'center',
                                },
                                {
                                    text: `40`,
                                    alignment: 'center',
                                },
                                {
                                    text: '',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Мифриловые латы',
                                },
                                {
                                    text: `+5`,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Торс, руки, ноги, голова',
                                    alignment: 'center',
                                },
                                {
                                    text: `45/50`,
                                    alignment: 'center',
                                },
                                {
                                    text: `30`,
                                    alignment: 'center',
                                },
                                {
                                    text: '',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Адамантиновые латы',
                                },
                                {
                                    text: `+5`,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Торс, руки, ноги, голова',
                                    alignment: 'center',
                                },
                                {
                                    text: `90/100`,
                                    alignment: 'center',
                                },
                                {
                                    text: `60`,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Уменьшает ББ на 1',
                                    alignment: 'center',
                                },
                            ],
                        ]
                    },
                    alignment: 'left',
                },
            ];
        }

        return [
            {
                text: 'Альянс (The Alliance)',
                style: 'header2',
                pageBreak: 'before',
            },
            getAllianceUnitsContent(),
            getAllianceCosts(),
        ];
    }

    function getHordeContent() {
        function getHordeUnitsContent() {
            return [
                {
                    text: 'Юниты (Units)',
                    style: 'header3',
                },
                getUnitContent({
                    title: 'Рабы (Peons)',
                    points: '27',
                    lines: [
                        getUnitAttributesContent({
                            [States.Agility]: '6',
                            [States.Smarts]: '4',
                            [States.Spirit]: '4',
                            [States.Strength]: '8',
                            [States.Vigor]: '6',
                        }),
                        getUnitSkillsContent({
                            [Skills.Guts]: '6',
                            [Skills.Knowledge]: '4 (Фермерство, Инженеринг, Шахтерство)',
                            [Skills.Notice]: '4',
                            [Skills.Repair]: '6',
                            [Skills.Throwing]: '6',
                        }),
                        getUnitCommonAttributesContent({
                            [States.Pace]: '6',
                            [States.Parry]: '3',
                            [States.Toughness]: '6',
                        }),
                        quickTextFormat(`**Черты/Способности**: ${[
                            getFromDict(EdgesTranslations, Edges.Brawny)
                        ].join(', ')}`),
                        quickTextFormat(`**Снаряжение**: ${[
                            `Инструменты (Сила+2 для топора или кирки)`,
                            `Копья (Сила+2, 3/6/12, +1 Парирование, +1 Досягаемость)`,
                        ].join(', ')}`),
                        quickTextFormat(`**Развитие**: ${[
                            getFromDict(EdgesTranslations, Edges.Alertness),
                            getFromDict(EdgesTranslations, Edges.Dodge),
                        ].join(', ')}. Пеоны не являются профессиональными солдатами, поэтому их уровень повышается только при выпадении 6.`),
                    ],
                }),
                getUnitContent({
                    title: 'Бугай (Gruny)',
                    points: '34',
                    lines: [
                        getUnitAttributesContent({
                            [States.Agility]: '6',
                            [States.Smarts]: '4',
                            [States.Spirit]: '6',
                            [States.Strength]: '8',
                            [States.Vigor]: '8',
                        }),
                        getUnitSkillsContent({
                            [Skills.Fighting]: '6',
                            [Skills.Guts]: '6',
                            [Skills.Intimidation]: '4',
                            [Skills.Notice]: '4',
                        }),
                        quickTextFormat(`**Черты/Способности**: ${[
                            getFromDict(EdgesTranslations, Edges.Brawny)
                        ].join(', ')}`),
                        getUnitCommonAttributesContent({
                            [States.Pace]: '6',
                            [States.Parry]: '5',
                            [States.Toughness]: '9 (7)',
                        }),
                        quickTextFormat(`**Снаряжение**: ${[
                            `Боевой топор (Сила+3)`,
                            `Кольчужный хауберк (+2)`,
                        ].join(', ')}`),
                        quickTextFormat(`**Развитие**: ${[
                            getFromDict(EdgesTranslations, Edges.Berserk),
                            getFromDict(EdgesTranslations, Edges.CombatReflexes),
                            getFromDict(EdgesTranslations, Edges.Frenzy),
                        ].join(', ')}`),
                    ],
                }),
                getTipText([
                    quickTextFormat(`Вероятно, имеется ввиду **Grunt**.`),
                ]),
                getUnitContent({
                    title: 'Тролль Охотник за головами (Troll Headhunter)',
                    points: '37',
                    lines: [
                        getUnitAttributesContent({
                            [States.Agility]: '8',
                            [States.Smarts]: '4',
                            [States.Spirit]: '6',
                            [States.Strength]: '6',
                            [States.Vigor]: '8',
                        }),
                        getUnitSkillsContent({
                            [Skills.Fighting]: '4',
                            [Skills.Guts]: '6',
                            [Skills.Intimidation]: '6',
                            [Skills.Notice]: '4',
                            [Skills.Stealth]: '4',
                            [Skills.Throwing]: '6',
                            [Skills.Tracking]: '6',
                        }),
                        quickTextFormat(`**Черты/Способности**: ${[
                            `+1 ${getFromDict(EdgesTranslations, Edges.Size)}`,
                            `Быстрая регенерация (Fast Regeneration)`,
                        ].join(', ')}`),
                        quickTextFormat(`**Изъяны**: ${[
                            getFromDict(HindrancesTranslations, Hindrances.AllThumbs),
                        ].join(', ')}`),
                        getUnitCommonAttributesContent({
                            [States.Pace]: '6',
                            [States.Parry]: '5',
                            [States.Toughness]: '7',
                        }),
                        quickTextFormat(`**Снаряжение**: ${[
                            `Копья (Сила+2, 3/6/12)`,
                            `+1 Досягаемость`,
                            `+1 Парирование`,
                        ].join(', ')}`),
                        quickTextFormat(`**Развитие**: ${[
                            getFromDict(EdgesTranslations, Edges.Marksman),
                            getFromDict(SettingEdgesTranslations, SettingEdges.RapidShot),
                            getFromDict(EdgesTranslations, Edges.Woodsman),
                        ].join(', ')}`),
                        quickTextFormat(`**Берсерк (Berserker)**: ${[
                            `${SkillsTranslations[Skills.Fighting]} d6`,
                            getFromDict(EdgesTranslations, Edges.Berserk),
                            getFromDict(EdgesTranslations, Edges.Frenzy),
                        ].join(', ')}`, { margin: [paragraphOffset, 0, 0, 0], italics: true, }),
                    ],
                }),
                getUnitContent({
                    title: 'Таурен-воин (Tauren Warrior)',
                    points: '48',
                    lines: [
                        getUnitAttributesContent({
                            [States.Agility]: '4',
                            [States.Smarts]: '4',
                            [States.Spirit]: '8',
                            [States.Strength]: '12',
                            [States.Vigor]: '8',
                        }),
                        getUnitSkillsContent({
                            [Skills.Fighting]: '8',
                            [Skills.Guts]: '8',
                            [Skills.Intimidation]: '6',
                            [Skills.Notice]: '4',
                        }),
                        quickTextFormat(`**Черты/Способности**: ${[
                            `+3 ${getFromDict(EdgesTranslations, Edges.Size)}`,
                            `Рога (Horns) (Сила+2)`,
                            `Рывок (Charge)`
                        ].join(', ')}`),
                        quickTextFormat(`**Изъяны**: ${[
                            getFromDict(HindrancesTranslations, Hindrances.AllThumbs),
                            getFromDict(EdgesTranslations, Edges.Large),
                        ].join(', ')}`),
                        getUnitCommonAttributesContent({
                            [States.Pace]: '6',
                            [States.Parry]: '6',
                            [States.Toughness]: '10 (9)',
                        }),
                        quickTextFormat(`**Снаряжение**: ${[
                            `Тотемная дубинка (Сила+3, ББ 2 против жесткой брони)`,
                        ].join(', ')}`),
                        quickTextFormat(`**Развитие**: ${[
                            getFromDict(EdgesTranslations, Edges.Sweep),
                            getFromDict(EdgesTranslations, Edges.Berserk),
                            getFromDict(EdgesTranslations, Edges.CombatReflexes),
                        ].join(', ')}`),
                    ],
                }),
                getUnitContent({
                    title: 'Наездник (Raider)',
                    points: '52 + 37 (лютоволк) = 89',
                    lines: [
                        getUnitAttributesContent({
                            [States.Agility]: '6',
                            [States.Smarts]: '6',
                            [States.Spirit]: '6',
                            [States.Strength]: '8',
                            [States.Vigor]: '8',
                        }),
                        getUnitSkillsContent({
                            [Skills.Fighting]: '8',
                            [Skills.Guts]: '8',
                            [Skills.Intimidation]: '6',
                            [Skills.Notice]: '4',
                            [Skills.Riding]: '6',
                            [Skills.Throwing]: '4',
                        }),
                        quickTextFormat(`**Черты/Способности**: ${[
                            getFromDict(EdgesTranslations, Edges.Brawny),
                            getFromDict(SettingEdgesTranslations, SettingEdges.Cavalry),
                            getFromDict(EdgesTranslations, Edges.Berserk),
                        ].join(', ')}`),
                        getUnitCommonAttributesContent({
                            [States.Pace]: '6',
                            [States.Parry]: '6',
                            [States.Toughness]: '9 (7)',
                        }),
                        quickTextFormat(`**Снаряжение**: ${[
                            `Боевой клинок (Warblade) (Сила+3)`,
                            `Кольчужный хауберк (+2)`,
                            `*Сеть*`,
                        ].join(', ')}`),
                        [
                            quickTextFormat(`***Лютоволк***:`),
                            {
                                stack: [
                                    getUnitAttributesContent({
                                        [States.Agility]: '8',
                                        [States.Smarts]: '4 (Ж)',
                                        [States.Spirit]: '6',
                                        [States.Strength]: '8',
                                        [States.Vigor]: '8',
                                    }),
                                    getUnitSkillsContent({
                                        [Skills.Fighting]: '8',
                                        [Skills.Guts]: '8',
                                        [Skills.Intimidation]: '6',
                                        [Skills.Notice]: '6',
                                    }),
                                    quickTextFormat(`**Черты/Способности**: ${[
                                        `${getFromDict(EdgesTranslations, Edges.Size)} +1`,
                                        `Укус (Bite) (Сила+2)`,
                                        `Вцепиться в горло/инстинкт хищника (Go For the Throat) (см. SW1 с. 144, SW2 с. 171)`,
                                        `${getFromDict(EdgesTranslations, Edges.FleetFooted)}`,
                                    ].join(', ')}`),
                                    getUnitCommonAttributesContent({
                                        [States.Pace]: '10',
                                        [States.Parry]: '6',
                                        [States.Toughness]: '7',
                                    }),
                                ],
                                margin: [paragraphOffset, 0, 0, 0],
                            },
                        ],
                        quickTextFormat(`**Развитие**: ${[
                            getFromDict(EdgesTranslations, Edges.CombatReflexes),
                            getFromDict(EdgesTranslations, Edges.Sweep),
                        ].join(', ')}`),
                    ],
                }),
                getTipText([
                    quickTextFormat(`**Вцепиться в горло/инстинкт хищника**: волки инстинктивно пытаются вцепиться в самые уязвимые области тела своих противников. В случае подъёма при атаке волк поражает наименее защищённую область тела врага.`),
                ]),
                getUnitContent({
                    title: 'Наездник на кодо (Kodo Rider)',
                    points: '39 + 60 (Зверь кодо) = 99',
                    lines: [
                        getUnitAttributesContent({
                            [States.Agility]: '6',
                            [States.Smarts]: '4',
                            [States.Spirit]: '8',
                            [States.Strength]: '8',
                            [States.Vigor]: '8',
                        }),
                        getUnitSkillsContent({
                            [Skills.Fighting]: '6',
                            [Skills.Guts]: '8',
                            [Skills.Intimidation]: '8',
                            [Skills.Notice]: '4',
                            [Skills.Riding]: '6',
                            [Skills.Taunt]: '6',
                        }),
                        quickTextFormat(`**Черты/Способности**: ${[
                            getFromDict(EdgesTranslations, Edges.Brawny),
                            getFromDict(SettingEdgesTranslations, SettingEdges.Cavalry),
                            getFromDict(EdgesTranslations, Edges.Inspire),
                        ].join(', ')}`),
                        getUnitCommonAttributesContent({
                            [States.Pace]: '6',
                            [States.Parry]: '5',
                            [States.Toughness]: '7',
                        }),
                        quickTextFormat(`**Снаряжение**: ${[
                            `Боевые барабаны (требуются для Воодушевления (${Edges.Inspire}))`,
                            `Барабанные палочки (Сила+1, Парирование -1)`,
                        ].join(', ')}`),
                        quickTextFormat(`**Зверь кодо**: см. в Бестиарии Warcraft, плюс ${SkillsTranslations[Skills.Fighting]} d8`, { italics: true }),
                        quickTextFormat(`**Развитие**: ${[
                            getFromDict(EdgesTranslations, Edges.Fervor),
                        ].join(', ')}`),
                    ],
                }),
                getUnitContent({
                    title: 'Наездник на виверне (Wyvern Rider)',
                    points: '39 + 72 (виврена) = 111',
                    lines: [
                        getUnitAttributesContent({
                            [States.Agility]: '8',
                            [States.Smarts]: '4',
                            [States.Spirit]: '8',
                            [States.Strength]: '6',
                            [States.Vigor]: '8',
                        }),
                        getUnitSkillsContent({
                            [Skills.Fighting]: '4',
                            [Skills.Guts]: '8',
                            [Skills.Intimidation]: '6',
                            [Skills.Notice]: '6',
                            [Skills.Riding]: '6',
                            [Skills.Throwing]: '8',
                        }),
                        quickTextFormat(`**Черты/Способности**: ${[
                            getFromDict(EdgesTranslations, Edges.Brawny),
                            getFromDict(SettingEdgesTranslations, SettingEdges.Cavalry),
                            getFromDict(EdgesTranslations, Edges.SteadyHands),
                        ].join(', ')}`),
                        getUnitCommonAttributesContent({
                            [States.Pace]: '6',
                            [States.Parry]: '5',
                            [States.Toughness]: '8 (7)',
                        }),
                        quickTextFormat(`**Снаряжение**: ${[
                            `Копья (Сила+2, 3/6/12, +1 Парирование, +1 Досягаемость)`,
                            `Кожаная броня (+1)`,
                        ].join(', ')}`),
                        quickTextFormat(`***Виверна***: см. в Бестиарии Warcraft`),
                        quickTextFormat(`**Развитие**: ${[
                            getFromDict(EdgesTranslations, Edges.BeastBond),
                            getFromDict(SettingEdgesTranslations, SettingEdges.StrafingRun),
                            `Быстрый бросок (Rapid Throw)`,
                        ].join(', ')}`),
                    ],
                }),
                getUnitContent({
                    title: 'Тролль наездник на летучей мыши (Troll Batrider)',
                    points: '44 + 46 (гигантская летучая мышь) = 90',
                    lines: [
                        getUnitAttributesContent({
                            [States.Agility]: '8',
                            [States.Smarts]: '4',
                            [States.Spirit]: '6',
                            [States.Strength]: '6',
                            [States.Vigor]: '8',
                        }),
                        getUnitSkillsContent({
                            [Skills.Guts]: '10',
                            [Skills.Notice]: '6',
                            [Skills.Riding]: '6',
                            [Skills.Stealth]: '6',
                            [Skills.Throwing]: '8',
                        }),
                        quickTextFormat(`**Черты/Способности**: ${[
                            `${getFromDict(EdgesTranslations, Edges.Size)} +1`,
                            `Быстрая регенерация (Fast Regeneration)`,
                            getFromDict(SettingEdgesTranslations, SettingEdges.Cavalry),
                            getFromDict(EdgesTranslations, Edges.SteadyHands),
                        ].join(', ')}`),
                        getUnitCommonAttributesContent({
                            [States.Pace]: '6',
                            [States.Parry]: '2',
                            [States.Toughness]: '7',
                        }),
                        quickTextFormat(`**Снаряжение**: ${[
                            `Нестабильные зелья (2d6+2, Малый взрыв, 3/6/12)`,
                        ].join(', ')}`),
                        [
                            quickTextFormat(`***Гигантская летучая мышь***:`),
                            {
                                stack: [
                                    getUnitAttributesContent({
                                        [States.Agility]: '8',
                                        [States.Smarts]: '8 (Ж)',
                                        [States.Spirit]: '6',
                                        [States.Strength]: '8',
                                        [States.Vigor]: '6',
                                    }),
                                    getUnitSkillsContent({
                                        [Skills.Fighting]: '4',
                                        [Skills.Notice]: '8',
                                        [Skills.Tracking]: '6',
                                    }),
                                    quickTextFormat(`**Черты/Способности**: ${[
                                        `${getFromDict(EdgesTranslations, Edges.Size)} +2`,
                                        `${getFromDict(EdgesTranslations, Edges.Flight)} (12 дюймов, Подъем 6 дюймов)`,
                                        `Сонар (Sonar)`,
                                    ].join(', ')}`),
                                    getUnitCommonAttributesContent({
                                        [States.Pace]: '2',
                                        [States.Parry]: '4',
                                        [States.Toughness]: '7',
                                    }),
                                ],
                                margin: [paragraphOffset, 0, 0, 0],
                            },
                        ],
                        quickTextFormat(`**Развитие**: ${[
                            getFromDict(EdgesTranslations, Edges.BeastBond),
                            getFromDict(EdgesTranslations, Edges.CombatReflexes),
                        ].join(', ')}`),
                    ],
                }),
                getTipText([
                    quickTextFormat(`Никаких пояснений по поводу **Сонара (Sonar)** не прилагается.`),
                ]),
                getUnitContent({
                    title: 'Шаман (Shaman)',
                    points: '47',
                    lines: [
                        getUnitAttributesContent({
                            [States.Agility]: '6',
                            [States.Smarts]: '6',
                            [States.Spirit]: '8',
                            [States.Strength]: '6',
                            [States.Vigor]: '8',
                        }),
                        getUnitSkillsContent({
                            [Skills.Faith]: '8',
                            [Skills.Fighting]: '4',
                            [Skills.Guts]: '8',
                            [Skills.Intimidation]: '6',
                            [Skills.Knowledge]: '6 (Природа)',
                            [Skills.Notice]: '6',
                        }),
                        quickTextFormat(`**Черты/Способности**: ${[
                            getFromDict(EdgesTranslations, Edges.Brawny),
                            `${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Шаман (Shaman))`,
                        ].join(', ')}`),
                        quickTextFormat(`**Шаманизм**: ***Пункты Силы***: 15; ***Заклинания***: ${[
                            `*${getFromDict(PowersTranslations, Powers.Bolt)}*`,
                            `*${getFromDict(PowersTranslations, Powers.BoostLowerTrait)}*`,
                            `*${getFromDict(PowersTranslations, Powers.Dispel)}*`,
                        ].join(', ')}`),
                        getUnitCommonAttributesContent({
                            [States.Pace]: '6',
                            [States.Parry]: '4',
                            [States.Toughness]: '8 (7)',
                        }),
                        quickTextFormat(`**Снаряжение**: ${[
                            `Когти (Сила+1)`,
                            `Броня из шкур (+1)`,
                        ].join(', ')}`),
                        quickTextFormat(`**Развитие**: ${[
                            `*${getFromDict(SettingPowersTranslations, SettingPowers.OffensiveArmor)}*`,
                            `*${getFromDict(SettingPowersTranslations, SettingPowers.Bloodlust)}*`,
                            `*${getFromDict(SettingPowersTranslations, SettingPowers.FarSight)}*`,
                            `*${getFromDict(SettingPowersTranslations, SettingPowers.Summon)}*`,
                            getFromDict(EdgesTranslations, Edges.RapidRecharge),
                            getFromDict(EdgesTranslations, Edges.PowerPoints),
                        ].join(', ')}`),
                    ],
                }),
                getUnitContent({
                    title: 'Тролль Чумной Доктор (Troll Witch Doctor)',
                    points: '43',
                    lines: [
                        getUnitAttributesContent({
                            [States.Agility]: '6',
                            [States.Smarts]: '4',
                            [States.Spirit]: '8',
                            [States.Strength]: '6',
                            [States.Vigor]: '6',
                        }),
                        getUnitSkillsContent({
                            [Skills.Faith]: '8',
                            [Skills.Fighting]: '4',
                            [Skills.Guts]: '6',
                            [Skills.Healing]: '4',
                            [Skills.Notice]: '6',
                            [Skills.Tracking]: '4',
                        }),
                        quickTextFormat(`**Черты/Способности**: ${[
                            `${getFromDict(EdgesTranslations, Edges.Size)} +1`,
                            `Быстрая регенерация (Fast Regeneration)`,
                            `${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Вуду (Voodoo))`,
                        ].join(', ')}`),
                        quickTextFormat(`**Вуду**: ***Пункты Силы***: 15; ***Заклинания***: ${[
                            `*${getFromDict(PowersTranslations, Powers.Bolt)}*`,
                            `*${getFromDict(PowersTranslations, Powers.DetectConcealArcana)}*`,
                            `*${getFromDict(PowersTranslations, Powers.BoostLowerTrait)}*`,
                        ].join(', ')}`),
                        getUnitCommonAttributesContent({
                            [States.Pace]: '6',
                            [States.Parry]: '5',
                            [States.Toughness]: '6',
                        }),
                        quickTextFormat(`**Снаряжение**: ${[
                            `Боевой посох (Сила+2, +1 Парирование)`,
                        ].join(', ')}`),
                        quickTextFormat(`**Развитие**: ${[
                            `*${getFromDict(PowersTranslations, Powers.Healing)}*`,
                            `*${getFromDict(SettingPowersTranslations, SettingPowers.Paralyze)}*`,
                            `*${getFromDict(PowersTranslations, Powers.Quickness)}*`,
                            getFromDict(SettingEdgesTranslations, SettingEdges.DarkRitual),
                            getFromDict(EdgesTranslations, Edges.PowerPoints),
                            `Алхимик (Alchemist)`,
                        ].join(', ')}`),
                    ],
                }),
                getTipText([
                    quickTextFormat(`Никаких пояснений по поводу **Алхимика (Alchemist)** не прилагается.`),
                ]),
                getUnitContent({
                    title: 'Таурен Духовный странник/Служитель Предков (Tauren Spirit Walker)',
                    points: '53',
                    lines: [
                        getUnitAttributesContent({
                            [States.Agility]: '4',
                            [States.Smarts]: '6',
                            [States.Spirit]: '8',
                            [States.Strength]: '10',
                            [States.Vigor]: '8',
                        }),
                        getUnitSkillsContent({
                            [Skills.Faith]: '8',
                            [Skills.Fighting]: '4',
                            [Skills.Guts]: '8',
                            [Skills.Intimidation]: '6',
                            [Skills.Knowledge]: '6 (Природа)',
                            [Skills.Notice]: '6',
                        }),
                        quickTextFormat(`**Черты/Способности**: ${[
                            `+3 ${getFromDict(EdgesTranslations, Edges.Size)}`,
                            `Рога (Horns) (Сила+2)`,
                            `${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Шаман (Shaman))`,
                            getFromDict(SettingEdgesTranslations, SettingEdges.Shaman),
                        ].join(', ')}`),
                        quickTextFormat(`**Изъяны**: ${[
                            getFromDict(HindrancesTranslations, Hindrances.AllThumbs),
                            getFromDict(EdgesTranslations, Edges.Large),
                        ].join(', ')}`),
                        quickTextFormat(`**Шаманизм**: ***Пункты Силы***: 15; ***Заклинания***: ${[
                            `*${getFromDict(PowersTranslations, Powers.BoostLowerTrait)}*`,
                            `*${getFromDict(SettingPowersTranslations, SettingPowers.EtherealForm)}*`,
                            `*${getFromDict(PowersTranslations, Powers.Healing)}*`,
                        ].join(', ')}`),
                        getUnitCommonAttributesContent({
                            [States.Pace]: '6',
                            [States.Parry]: '4',
                            [States.Toughness]: '9',
                        }),
                        quickTextFormat(`**Снаряжение**: ${[
                            `Топор (Сила+2)`,
                        ].join(', ')}`),
                        quickTextFormat(`**Развитие**: ${[
                            `*${getFromDict(PowersTranslations, Powers.Dispel)}*`,
                            `*${getFromDict(PowersTranslations, Powers.GreaterHealing)}*`,
                            `*${getFromDict(PowersTranslations, Powers.DetectConcealArcana)}*`,
                            `*${getFromDict(SettingPowersTranslations, SettingPowers.FarSight)}*`,
                            getFromDict(EdgesTranslations, Edges.RapidRecharge),
                            getFromDict(EdgesTranslations, Edges.PowerPoints),
                        ].join(', ')}`),
                    ],
                }),
                getUnitContent({
                    title: 'Разрушитель/Катапульта (Demolisher)',
                    points: '100',
                    lines: [
                        quickTextFormat(`*Разрушитель сопровождают 3 Раба и один Стрелок.*`),
                        quickTextFormat(`**Скорость/Ускорение**: 4/2; **Стойкость**: 12 (6)`),
                        quickTextFormat(`**Пушка**: 3d8+1, Средний Взрыв, 40/80/160. 2 Действия на перезарядку`),
                        quickTextFormat(`***Стрелок***`),
                        getUnitAttributesContent({
                            [States.Agility]: '6',
                            [States.Smarts]: '4',
                            [States.Spirit]: '6',
                            [States.Strength]: '6',
                            [States.Vigor]: '8',
                        }),
                        getUnitSkillsContent({
                            [Skills.Fighting]: '4',
                            [Skills.Guts]: '8',
                            [Skills.Notice]: '4',
                            [Skills.Repair]: '6',
                            [Skills.Shooting]: '8',
                        }),
                        quickTextFormat(`**Черты/Способности**: ${[
                            getFromDict(EdgesTranslations, Edges.Brawny),
                            getFromDict(EdgesTranslations, Edges.SteadyHands),
                        ].join(', ')}`),
                        getUnitCommonAttributesContent({
                            [States.Pace]: '6',
                            [States.Parry]: '4',
                            [States.Toughness]: '7',
                        }),
                        quickTextFormat(`**Снаряжение**: ${[
                            `Топор (Сила+2)`,
                        ].join(', ')}`),
                        quickTextFormat(`**Развитие**: ${[
                            getFromDict(EdgesTranslations, Edges.Marksman),
                        ].join(', ')}`),
                    ],
                }),
            ];
        }

        function getHordeCosts() {
            return [
                {
                    text: 'Стоимость и содержание (Costs and Upkeeps)',
                    style: 'header3',
                    pageBreak: 'before',
                },
                {
                    table: { // Юниты
                        widths: ['auto', 'auto', 'auto'],
                        body: [
                            [
                                {
                                    text: 'Юниты',
                                    style: 'header4'
                                },
                                {
                                    text: 'Стоимость найма\n(золото/дерево)',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Содержание\n(золото/дерево/еда)',
                                    bold: true,
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Раб',
                                },
                                {
                                    text: `75/0`,
                                    alignment: 'center',
                                },
                                {
                                    text: '1/0/1',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Бугай',
                                },
                                {
                                    text: `200/0`,
                                    alignment: 'center',
                                },
                                {
                                    text: '3/0/3',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Тролль Охотник за головами',
                                },
                                {
                                    text: `135/20`,
                                    alignment: 'center',
                                },
                                {
                                    text: '2/1/2',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Таурен-воин',
                                },
                                {
                                    text: `280/80`,
                                    alignment: 'center',
                                },
                                {
                                    text: '3/2/5',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Наездник',
                                },
                                {
                                    text: `180/40`,
                                    alignment: 'center',
                                },
                                {
                                    text: '3/0/3',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Наездник на кодо',
                                },
                                {
                                    text: `255/60`,
                                    alignment: 'center',
                                },
                                {
                                    text: '3/0/4',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Наездник на виверне',
                                },
                                {
                                    text: `265/40`,
                                    alignment: 'center',
                                },
                                {
                                    text: '5/0/4',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Тролль наездник на летучей мыши',
                                },
                                {
                                    text: `160/40`,
                                    alignment: 'center',
                                },
                                {
                                    text: '4/1/2',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Шаман',
                                },
                                {
                                    text: `130/20`,
                                    alignment: 'center',
                                },
                                {
                                    text: '4/0/2',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Чумной Доктор',
                                },
                                {
                                    text: `145/25`,
                                    alignment: 'center',
                                },
                                {
                                    text: '4/0/2',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Духовный странник/Служитель Предков',
                                },
                                {
                                    text: `195/35`,
                                    alignment: 'center',
                                },
                                {
                                    text: '3/1/3',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Разрушитель/Катапульта',
                                },
                                {
                                    text: `220/50`,
                                    alignment: 'center',
                                },
                                {
                                    text: '5/2/4',
                                    alignment: 'center',
                                },
                            ],
                        ]
                    },
                    alignment: 'left',
                },
                '\n',
                {
                    table: { // Здания
                        widths: ['*', 'auto', 'auto', 'auto'],
                        body: [
                            [
                                {
                                    text: [
                                        {
                                            text: 'Здания',
                                            style: 'header4'
                                        },
                                        '\n',
                                        {
                                            text: 'Курсивом обозначена стоимость улучшения',
                                            italics: true,
                                        }
                                    ],
                                },
                                {
                                    text: 'Стоимость\n(золото/дерево)',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Время строительства\n(дни)',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Содержание\n(золото/дерево/еда)',
                                    bold: true,
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Дом Вождей',
                                },
                                {
                                    text: `385/185`,
                                    alignment: 'center',
                                },
                                {
                                    text: `15`,
                                    alignment: 'center',
                                },
                                {
                                    text: '1/0/1',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: '- Крепость Вождей',
                                    italics: true,
                                },
                                {
                                    text: `315/190`,
                                    alignment: 'center',
                                },
                                {
                                    text: `14`,
                                    alignment: 'center',
                                },
                                {
                                    text: '1/0/2',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: '- Дворец Вождей',
                                    italics: true,
                                },
                                {
                                    text: `325/190`,
                                    alignment: 'center',
                                },
                                {
                                    text: `14`,
                                    alignment: 'center',
                                },
                                {
                                    text: '2/0/3',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Казармы',
                                },
                                {
                                    text: `180/50`,
                                    alignment: 'center',
                                },
                                {
                                    text: `6`,
                                    alignment: 'center',
                                },
                                {
                                    text: '0/1/0',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Логово орков',
                                },
                                {
                                    text: `160/40`,
                                    alignment: 'center',
                                },
                                {
                                    text: `5`,
                                    alignment: 'center',
                                },
                                {
                                    text: '0/1/-8',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Лесопилка',
                                },
                                {
                                    text: `205/0`,
                                    alignment: 'center',
                                },
                                {
                                    text: `7`,
                                    alignment: 'center',
                                },
                                {
                                    text: '1/1/2',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Зверинец',
                                },
                                {
                                    text: `145/140`,
                                    alignment: 'center',
                                },
                                {
                                    text: `6`,
                                    alignment: 'center',
                                },
                                {
                                    text: '1/1/1',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Обитель Духов',
                                },
                                {
                                    text: `150/150`,
                                    alignment: 'center',
                                },
                                {
                                    text: `7`,
                                    alignment: 'center',
                                },
                                {
                                    text: '1/1/0',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Тотем минотавра/Тотем тауренов',
                                },
                                {
                                    text: `135/155`,
                                    alignment: 'center',
                                },
                                {
                                    text: `7`,
                                    alignment: 'center',
                                },
                                {
                                    text: '0/2/0',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Сторожевая башня',
                                },
                                {
                                    text: `110/80`,
                                    alignment: 'center',
                                },
                                {
                                    text: `5`,
                                    alignment: 'center',
                                },
                                {
                                    text: '1/1/1',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Стена (секция в 1 дюйм)',
                                },
                                {
                                    text: `20/20`,
                                    alignment: 'center',
                                },
                                {
                                    text: `1`,
                                    alignment: 'center',
                                },
                                {
                                    text: '0/1/0',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Шипованная защита (секция 1 дюйм)',
                                },
                                {
                                    text: `20/15`,
                                    alignment: 'center',
                                },
                                {
                                    text: `3`,
                                    alignment: 'center',
                                },
                                {
                                    text: '0/1/1',
                                    alignment: 'center',
                                },
                            ],
                        ]
                    },
                    alignment: 'left',
                },
                {
                    text: 'Снаряжение',
                    style: 'header3',
                    pageBreak: 'before',
                },
                {
                    table: { // Новое оружие
                        widths: ['*', 'auto', 'auto', 50, 'auto', 'auto', 'auto'],
                        body: [
                            [
                                {
                                    text: 'Новое оружие',
                                    style: 'header4',
                                },
                                {
                                    text: 'Дистанция',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Урон',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Цена\n(З/Д)',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Вес',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Мин. Сила',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Примечания',
                                    bold: true,
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Боевой клинок (Warblade)',
                                },
                                {
                                    text: `Ближний бой`,
                                    alignment: 'center',
                                },
                                {
                                    text: `Сила+4`,
                                    alignment: 'center',
                                },
                                {
                                    text: '4',
                                    alignment: 'center',
                                },
                                {
                                    text: '12',
                                    alignment: 'center',
                                },
                                {
                                    text: 'd8',
                                    alignment: 'center',
                                },
                                {
                                    text: '',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Сеть',
                                },
                                {
                                    text: `3/6/12`,
                                    alignment: 'center',
                                },
                                {
                                    text: `Нет`,
                                    alignment: 'center',
                                },
                                {
                                    text: '25 серебряных',
                                    alignment: 'center',
                                },
                                {
                                    text: '5',
                                    alignment: 'center',
                                },
                                {
                                    text: '--',
                                    alignment: 'center',
                                },
                                {
                                    text: 'Запутывает (захват на основе Ловкости)',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Тотемная дубинка',
                                },
                                {
                                    text: `Ближний бой`,
                                    alignment: 'center',
                                },
                                {
                                    text: `Сила+3`,
                                    alignment: 'center',
                                },
                                {
                                    text: '0/1',
                                    alignment: 'center',
                                },
                                {
                                    text: '20',
                                    alignment: 'center',
                                },
                                {
                                    text: 'd10',
                                    alignment: 'center',
                                },
                                {
                                    text: 'как Кувалда (ББ 2 против жёсткой брони, Защита – 1, Двуручное)',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Джавелин',
                                    italics: true,
                                },
                                {
                                    text: `5/10/15`,
                                    alignment: 'center',
                                },
                                {
                                    text: `Сила+2`,
                                    alignment: 'center',
                                },
                                {
                                    text: '1/1',
                                    alignment: 'center',
                                },
                                {
                                    text: '3',
                                    alignment: 'center',
                                },
                                {
                                    text: 'd6',
                                    alignment: 'center',
                                },
                                {
                                    text: 'Метательное копье',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Башенный арбалет',
                                },
                                {
                                    text: `30/60/120`,
                                    alignment: 'center',
                                },
                                {
                                    text: `2d6+1`,
                                    alignment: 'center',
                                },
                                {
                                    text: '20/15',
                                    alignment: 'center',
                                },
                                {
                                    text: '18',
                                    alignment: 'center',
                                },
                                {
                                    text: 'd6',
                                    alignment: 'center',
                                },
                                {
                                    text: '1 Действие на перезарядку',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Нестабильные зелья',
                                },
                                {
                                    text: `3/6/12`,
                                    alignment: 'center',
                                },
                                {
                                    text: `2d6+2`,
                                    alignment: 'center',
                                },
                                {
                                    text: '20/10',
                                    alignment: 'center',
                                },
                                {
                                    text: '1',
                                    alignment: 'center',
                                },
                                {
                                    text: '--',
                                    alignment: 'center',
                                },
                                {
                                    text: 'Малый Взрыв, Тяжелое Оружие',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Зелья Жидкого Огня',
                                },
                                {
                                    text: `3/6/12`,
                                    alignment: 'center',
                                },
                                {
                                    text: `2d6+2`,
                                    alignment: 'center',
                                },
                                {
                                    text: '60/20',
                                    alignment: 'center',
                                },
                                {
                                    text: '1',
                                    alignment: 'center',
                                },
                                {
                                    text: '--',
                                    alignment: 'center',
                                },
                                {
                                    text: 'Малый Взрыв, Тяжелое Оружие, поджигает легковоспламеняющиеся вещества',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Яд Виверны',
                                },
                                {
                                    text: `Особый`,
                                    alignment: 'center',
                                },
                                {
                                    text: `как Кураре`,
                                    alignment: 'center',
                                },
                                {
                                    text: '20/20',
                                    alignment: 'center',
                                },
                                {
                                    text: '--',
                                    alignment: 'center',
                                },
                                {
                                    text: '--',
                                    alignment: 'center',
                                },
                                {
                                    text: 'Для копий; требуются виверны',
                                    alignment: 'center',
                                },
                            ],
                        ]
                    },
                    alignment: 'left',
                },
                {
                    ul: [
                        quickTextFormat(`*Урон от всех видов оружия дальнего боя изменяется за счет улучшения боеприпасов.*`),
                    ],
                },
                {
                    table: { // Улучшения оружия ближнего боя
                        widths: ['*', 'auto', 50, 'auto', 'auto', 'auto'],
                        body: [
                            [
                                {
                                    text: 'Улучшения оружия ближнего боя',
                                    style: 'header4',
                                },
                                {
                                    text: 'Бонус снаряжения',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Цена\n(З/Д)',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Содержание\n(З/Д)',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Модификатор веса',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Примечания',
                                    bold: true,
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Высокое качество',
                                },
                                {
                                    text: `+1 урон`,
                                    alignment: 'center',
                                },
                                {
                                    text: '+3/+2',
                                    alignment: 'center',
                                },
                                {
                                    text: `--`,
                                    alignment: 'center',
                                },
                                {
                                    text: `х1`,
                                    alignment: 'center',
                                },
                                {
                                    text: '',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Ковка из тория',
                                },
                                {
                                    text: `+1 урона, +1 ББ`,
                                    alignment: 'center',
                                },
                                {
                                    text: '+30/+10',
                                    alignment: 'center',
                                },
                                {
                                    text: `--`,
                                    alignment: 'center',
                                },
                                {
                                    text: `х2`,
                                    alignment: 'center',
                                },
                                {
                                    text: '',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Ковка из арканита',
                                },
                                {
                                    text: `+2 урона, +1 ББ`,
                                    alignment: 'center',
                                },
                                {
                                    text: '+60/+15',
                                    alignment: 'center',
                                },
                                {
                                    text: `--`,
                                    alignment: 'center',
                                },
                                {
                                    text: `х2`,
                                    alignment: 'center',
                                },
                                {
                                    text: '',
                                    alignment: 'center',
                                },
                            ],
                        ]
                    },
                    alignment: 'left',
                },
                {
                    table: { // Улучшения копий
                        widths: ['*', 'auto', 'auto', 50, 'auto'],
                        body: [
                            [
                                {
                                    text: 'Улучшения копий',
                                    style: 'header4',
                                },
                                {
                                    text: 'Бонус снаряжения',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Цена\n(З/Д)',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Содержание\n(З/Д)',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Примечания',
                                    bold: true,
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Высокое качество',
                                },
                                {
                                    text: `+1 урон`,
                                    alignment: 'center',
                                },
                                {
                                    text: '+20/+10',
                                    alignment: 'center',
                                },
                                {
                                    text: `+1`,
                                    alignment: 'center',
                                },
                                {
                                    text: '',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Ковка из тория',
                                },
                                {
                                    text: `+1 урона, +1 ББ`,
                                    alignment: 'center',
                                },
                                {
                                    text: '+60/+20',
                                    alignment: 'center',
                                },
                                {
                                    text: `+2/+1`,
                                    alignment: 'center',
                                },
                                {
                                    text: '',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Ковка из арканита',
                                },
                                {
                                    text: `+2 урона, +1 ББ`,
                                    alignment: 'center',
                                },
                                {
                                    text: '+100/+30',
                                    alignment: 'center',
                                },
                                {
                                    text: `+3/+1`,
                                    alignment: 'center',
                                },
                                {
                                    text: '',
                                    alignment: 'center',
                                },
                            ],
                        ]
                    },
                    alignment: 'left',
                },
                {
                    table: { // Снаряды для Разрушителя
                        widths: ['*', 'auto', 'auto', 50, 'auto'],
                        body: [
                            [
                                {
                                    text: 'Снаряды для Разрушителя',
                                    style: 'header4',
                                },
                                {
                                    text: 'Бонус снаряжения',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Цена\n(З/Д)',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Содержание\n(З/Д)',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Примечания',
                                    bold: true,
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Осколочный снаряд',
                                },
                                {
                                    text: `+2 ББ`,
                                    alignment: 'center',
                                },
                                {
                                    text: '60/5',
                                    alignment: 'center',
                                },
                                {
                                    text: `+1`,
                                    alignment: 'center',
                                },
                                {
                                    text: '',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Ториевая шрапнель',
                                },
                                {
                                    text: `+4 ББ`,
                                    alignment: 'center',
                                },
                                {
                                    text: '100/15',
                                    alignment: 'center',
                                },
                                {
                                    text: `+3/+2`,
                                    alignment: 'center',
                                },
                                {
                                    text: '',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Ковка из арканита',
                                },
                                {
                                    text: `+2 урона, +4 ББ`,
                                    alignment: 'center',
                                },
                                {
                                    text: '200/20',
                                    alignment: 'center',
                                },
                                {
                                    text: `+5/+3`,
                                    alignment: 'center',
                                },
                                {
                                    text: '',
                                    alignment: 'center',
                                },
                            ],
                        ]
                    },
                    alignment: 'left',
                    pageBreak: 'before',
                },
                {
                    ul: [
                        quickTextFormat(`*Модернизация боеприпасов включает в себя все боеприпасы для юнита.*`),
                    ],
                },
                {
                    table: { // Броня
                        widths: ['*', 'auto', 'auto', 50, 'auto', 'auto'],
                        body: [
                            [
                                {
                                    text: 'Броня',
                                    style: 'header4',
                                },
                                {
                                    text: 'Броня',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Зоны',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Цена\n(З/Д)',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Вес',
                                    bold: true,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Примечания',
                                    bold: true,
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Броня из шкур/Кожаная броня',
                                },
                                {
                                    text: `+1`,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Торс, руки, ноги',
                                    alignment: 'center',
                                },
                                {
                                    text: `2/1`,
                                    alignment: 'center',
                                },
                                {
                                    text: `10 фунтов`,
                                    alignment: 'center',
                                },
                                {
                                    text: '',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Кольчужный хауберк',
                                },
                                {
                                    text: `+2`,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Торс, руки, ноги, 50% головы',
                                    alignment: 'center',
                                },
                                {
                                    text: `5/2`,
                                    alignment: 'center',
                                },
                                {
                                    text: `25 фунтов`,
                                    alignment: 'center',
                                },
                                {
                                    text: 'В комплект входит полушлем',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Тяжелый кольчужный хауберк',
                                },
                                {
                                    text: `+2`,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Торс, руки, ноги, 50% головы',
                                    alignment: 'center',
                                },
                                {
                                    text: `5/2`,
                                    alignment: 'center',
                                },
                                {
                                    text: `25 фунтов`,
                                    alignment: 'center',
                                },
                                {
                                    text: 'В комплект входит полушлем, -1 ББ',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Ториевая кольчуга',
                                },
                                {
                                    text: `+2`,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Торс, руки, ноги, 50% головы',
                                    alignment: 'center',
                                },
                                {
                                    text: `5/2`,
                                    alignment: 'center',
                                },
                                {
                                    text: `25 фунтов`,
                                    alignment: 'center',
                                },
                                {
                                    text: 'В комплект входит полушлем, -2 ББ',
                                    alignment: 'center',
                                },
                            ],
                            [
                                {
                                    text: 'Арканитовая кольчуга',
                                },
                                {
                                    text: `+3`,
                                    alignment: 'center',
                                },
                                {
                                    text: 'Торс, руки, ноги, 50% головы',
                                    alignment: 'center',
                                },
                                {
                                    text: `5/2`,
                                    alignment: 'center',
                                },
                                {
                                    text: `25 фунтов`,
                                    alignment: 'center',
                                },
                                {
                                    text: 'В комплект входит полушлем, -2 ББ',
                                    alignment: 'center',
                                },
                            ],
                        ]
                    },
                    alignment: 'left',
                },
            ];
        }

        return [
            {
                text: 'Орда (The Horde)',
                style: 'header2',
                pageBreak: 'before',
            },
            getHordeUnitsContent(),
            getHordeCosts(),
        ];
    }

    function getSentinelsContent() {
        function getSentinelsUnitsContent() {
            return [
                {
                    text: 'Юниты (Units)',
                    style: 'header3',
                },
                getUnitContent({
                    title: 'Светлячок (Wisp)',
                    points: '26',
                    lines: [
                        getUnitAttributesContent({
                            [States.Agility]: '6',
                            [States.Smarts]: '4',
                            [States.Spirit]: '6',
                            [States.Strength]: '6',
                            [States.Vigor]: '6',
                        }),
                        getUnitSkillsContent({
                            [Skills.Faith]: '6',
                            [Skills.Guts]: '4',
                            [Skills.Notice]: '6',
                            [Skills.Repair]: '6',
                        }),
                        quickTextFormat(`**Черты/Способности**: ${[
                            `Связь с деревом (Bond with Tree) (+2 к проверкам Ремонта построек Ночных Эльфов)`,
                            `${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Магия природы (Nature Magic))`,
                        ].join(', ')}`),
                        quickTextFormat(`***Пункты Силы***: 10; ***Силы***: ${[
                            `${getFromDict(SettingPowersTranslations, SettingPowers.Mend)} (Обновление (Renew): работает на Древних (Ancients))`,
                            `${getFromDict(PowersTranslations, Powers.Dispel)} (Большой взрыв, уничтожает Светлячка (Wisp))`,
                        ].join(', ')}`),
                        getUnitCommonAttributesContent({
                            [States.Pace]: '6',
                            [States.Parry]: '2',
                            [States.Toughness]: '5',
                        }),
                        quickTextFormat(`**Развитие**: ${[
                            `Нет`,
                        ].join(', ')}`),
                    ],
                }),
                getUnitContent({
                    title: 'Лучник (Archer)',
                    points: '38',
                    lines: [
                        getUnitAttributesContent({
                            [States.Agility]: '8',
                            [States.Smarts]: '6',
                            [States.Spirit]: '6',
                            [States.Strength]: '6',
                            [States.Vigor]: '6',
                        }),
                        getUnitSkillsContent({
                            [Skills.Fighting]: '4',
                            [Skills.Guts]: '6',
                            [Skills.Notice]: '6',
                            [Skills.Shooting]: '6',
                            [Skills.Stealth]: '6 (+4)',
                        }),
                        quickTextFormat(`**Изъяны**: ${[
                            getFromDict(HindrancesTranslations, Hindrances.AllThumbs),
                        ].join(', ')}`),
                        quickTextFormat(`**Черты/Способности**: ${[
                            getFromDict(EdgesTranslations, Edges.LowLightVision),
                            `Слияние с Тенью (Shadowmeld)`,
                        ].join(', ')}`),
                        getUnitCommonAttributesContent({
                            [States.Pace]: '6',
                            [States.Parry]: '4',
                            [States.Toughness]: '6 (5)',
                        }),
                        quickTextFormat(`**Снаряжение**: ${[
                            `Длинный лук (2d6, 12/24/48)`,
                            `Короткий меч (Сила+2)`,
                            `Кожаная броня (+1)`,
                        ].join(', ')}`),
                        quickTextFormat(`**Развитие**: ${[
                            getFromDict(EdgesTranslations, Edges.Marksman),
                            getFromDict(SettingEdgesTranslations, SettingEdges.RapidShot),
                            getFromDict(SettingEdgesTranslations, SettingEdges.TwoArrowsNocked),
                            getFromDict(SettingEdgesTranslations, SettingEdges.HailOfArrows),
                        ].join(', ')}`),
                        quickTextFormat(`***Ренджер (Ranger)***: ${[
                            `*${SkillsTranslations[Skills.Stealth]} d4*`,
                            `*${SkillsTranslations[Skills.Survival]} d8*`,
                            `*${SkillsTranslations[Skills.Tracking]} d8*`,
                            `*${getFromDict(EdgesTranslations, Edges.Woodsman)}*`,
                        ].join(', ')}`, { margin: [paragraphOffset, 0, 0, 0] }),
                        {
                            text: [
                                quickTextFormat(`***Наездник на Гипогрифе (Hippogryph Rider)***: ${[
                                    `*${SkillsTranslations[Skills.Riding]} d6*`,
                                    `*${getFromDict(SettingEdgesTranslations, SettingEdges.Cavalry)}*`,
                                    `*${getFromDict(EdgesTranslations, Edges.SteadyHands)}*`,
                                ].join(', ')}`),
                                {
                                    text: ` [42]`,
                                    color: 'red',
                                }
                            ],
                            margin: [paragraphOffset, 0, 0, 0],
                        },
                    ],
                }),
                getUnitContent({
                    title: 'Охотница (Huntress)',
                    points: '46 + 51 (Пантера) = 97',
                    lines: [
                        getUnitAttributesContent({
                            [States.Agility]: '8',
                            [States.Smarts]: '6',
                            [States.Spirit]: '8',
                            [States.Strength]: '8',
                            [States.Vigor]: '6',
                        }),
                        getUnitSkillsContent({
                            [Skills.Fighting]: '6',
                            [Skills.Guts]: '8',
                            [Skills.Notice]: '6',
                            [Skills.Riding]: '6',
                            [Skills.Stealth]: '6 (+4)',
                            [Skills.Throwing]: '8',
                            [Skills.Intimidation]: '6',
                        }),
                        quickTextFormat(`**Изъяны**: ${[
                            getFromDict(HindrancesTranslations, Hindrances.AllThumbs),
                        ].join(', ')}`),
                        quickTextFormat(`**Черты/Способности**: ${[
                            getFromDict(EdgesTranslations, Edges.LowLightVision),
                            `Слияние с Тенью (Shadowmeld)`,
                            getFromDict(SettingEdgesTranslations, SettingEdges.Cavalry),
                            getFromDict(EdgesTranslations, Edges.SteadyHands),
                        ].join(', ')}`),
                        getUnitCommonAttributesContent({
                            [States.Pace]: '6',
                            [States.Parry]: '5',
                            [States.Toughness]: '7 (5)',
                        }),
                        quickTextFormat(`**Снаряжение**: ${[
                            `Лунная глефа (Moonglaive) (Сила+2, 3/6/12)`,
                            `Кольчужная рубашка (+2)`,
                        ].join(', ')}`),
                        quickTextFormat(`***Ночной саблезуб-Пантера (Nightsabre Panther)***: см. в Бестиарии Warcraft`),
                        quickTextFormat(`**Развитие**: ${[
                            `${getFromDict(EdgesTranslations, Edges.BeastMaster)} (сова-часовой)`,
                            getFromDict(EdgesTranslations, Edges.CombatReflexes),
                            `Рикошет (Ricochet) (${getFromDict(SettingEdgesTranslations, SettingEdges.RapidShot)})`,
                        ].join(', ')}`),
                    ],
                }),
                getUnitContent({
                    title: 'Дриада (Dryad)',
                    points: '48',
                    lines: [
                        getUnitAttributesContent({
                            [States.Agility]: '8',
                            [States.Smarts]: '4',
                            [States.Spirit]: '8',
                            [States.Strength]: '6',
                            [States.Vigor]: '10',
                        }),
                        getUnitSkillsContent({
                            [Skills.Faith]: '6',
                            [Skills.Fighting]: '4',
                            [Skills.Guts]: '8',
                            [Skills.Knowledge]: '6 (Природа)',
                            [Skills.Notice]: '6',
                            [Skills.Survival]: '8',
                            [Skills.Throwing]: '8',
                        }),
                        quickTextFormat(`**Изъяны**: ${[
                            getFromDict(HindrancesTranslations, Hindrances.AllThumbs),
                        ].join(', ')}`),
                        quickTextFormat(`**Черты/Способности**: ${[
                            `${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Магия природы (Nature Magic))`,
                            getFromDict(EdgesTranslations, Edges.Champion),
                            getFromDict(EdgesTranslations, Edges.ArcaneResistance),
                        ].join(', ')}`),
                        quickTextFormat(`***Пункты Силы***: 15; ***Заклинания***: ${[
                            `*${getFromDict(PowersTranslations, Powers.Dispel)}*`,
                            `*${getFromDict(PowersTranslations, Powers.Smite)}*`,
                        ].join(', ')}`),
                        getUnitCommonAttributesContent({
                            [States.Pace]: '7',
                            [States.Parry]: '5',
                            [States.Toughness]: '7',
                        }),
                        quickTextFormat(`**Снаряжение**: ${[
                            `Копье (Сила+2, 3/6/12, +1 Досягаемость, +1 Парирование)`,
                        ].join(', ')}`),
                        quickTextFormat(`**Развитие**: ${[
                            getFromDict(EdgesTranslations, Edges.Marksman),
                            getFromDict(EdgesTranslations, Edges.ImprovedArcaneResistance),
                            `Быстрый бросок (Rapid Throw)`,
                        ].join(', ')}`),
                    ],
                }),
                getUnitContent({
                    title: 'Другид-медведь (Druid of the Claw)',
                    points: '45',
                    lines: [
                        getUnitAttributesContent({
                            [States.Agility]: '4',
                            [States.Smarts]: '6',
                            [States.Spirit]: '8',
                            [States.Strength]: '8',
                            [States.Vigor]: '8',
                        }),
                        getUnitSkillsContent({
                            [Skills.Faith]: '8',
                            [Skills.Fighting]: '8',
                            [Skills.Guts]: '8',
                            [Skills.Healing]: '6',
                            [Skills.Knowledge]: '8 (Природа)',
                            [Skills.Notice]: '6',
                            [Skills.Survival]: '6',
                        }),
                        quickTextFormat(`**Изъяны**: ${[
                            getFromDict(HindrancesTranslations, Hindrances.AllThumbs),
                        ].join(', ')}`),
                        quickTextFormat(`**Черты/Способности**: ${[
                            getFromDict(EdgesTranslations, Edges.LowLightVision),
                            `${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Магия природы (Nature Magic))`,
                            getFromDict(SettingEdgesTranslations, SettingEdges.Druid),
                            getFromDict(SettingEdgesTranslations, SettingEdges.NaturesFury),
                            getFromDict(EdgesTranslations, Edges.Brawny),
                        ].join(', ')}`),
                        quickTextFormat(`***Пункты Силы***: 15; ***Заклинания***: ${[
                            `*${getFromDict(PowersTranslations, Powers.BoostLowerTrait)}*`,
                            `*${getFromDict(PowersTranslations, Powers.Smite)}*`,
                        ].join(', ')}`),
                        getUnitCommonAttributesContent({
                            [States.Pace]: '6',
                            [States.Parry]: '6',
                            [States.Toughness]: '8 (7)',
                        }),
                        quickTextFormat(`**Естественное оружие**: ${[
                            `Когти (Сила+1)`,
                        ].join(', ')}`),
                        quickTextFormat(`**Снаряжение**: ${[
                            `Броня из шкур (+1)`,
                        ].join(', ')}`),
                        quickTextFormat(`**Развитие**: ${[
                            `*${getFromDict(PowersTranslations, Powers.Healing)}*`,
                            `*${getFromDict(PowersTranslations, Powers.ShapeChange)}*`,
                            getFromDict(EdgesTranslations, Edges.RapidRecharge),
                            getFromDict(EdgesTranslations, Edges.PowerPoints),
                            getFromDict(EdgesTranslations, Edges.NaturalLeader),
                            getFromDict(SettingEdgesTranslations, SettingEdges.SpellAura),
                            getFromDict(EdgesTranslations, Edges.Berserk),
                        ].join(', ')}`),
                    ],
                }),
                getUnitContent({
                    title: 'Друид-ворон (Druid of the Talon)',
                    points: '40',
                    lines: [
                        getUnitAttributesContent({
                            [States.Agility]: '8',
                            [States.Smarts]: '8',
                            [States.Spirit]: '8',
                            [States.Strength]: '6',
                            [States.Vigor]: '8',
                        }),
                        getUnitSkillsContent({
                            [Skills.Faith]: '8',
                            [Skills.Fighting]: '6',
                            [Skills.Guts]: '6',
                            [Skills.Knowledge]: '8 (Природа)',
                            [Skills.Notice]: '8',
                            [Skills.Survival]: '6',
                            [Skills.Tracking]: '6',
                        }),
                        quickTextFormat(`**Изъяны**: ${[
                            getFromDict(HindrancesTranslations, Hindrances.AllThumbs),
                        ].join(', ')}`),
                        quickTextFormat(`**Черты/Способности**: ${[
                            getFromDict(EdgesTranslations, Edges.LowLightVision),
                            `${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Магия природы (Nature Magic))`,
                            getFromDict(SettingEdgesTranslations, SettingEdges.Druid),
                            getFromDict(EdgesTranslations, Edges.Dodge),
                        ].join(', ')}`),
                        quickTextFormat(`***Пункты Силы***: 15; ***Заклинания***: ${[
                            `*${getFromDict(PowersTranslations, Powers.BoostLowerTrait)}*`,
                            `*${getFromDict(PowersTranslations, Powers.Bolt)}*`,
                        ].join(', ')}`),
                        quickTextFormat(`***Форма Штормового Ворона (Storm Crow Form)***`),
                        {
                            stack: [
                                getUnitAttributesContent({
                                    [States.Agility]: '10',
                                    [States.Strength]: '6',
                                    [States.Vigor]: '8',
                                }),
                                quickTextFormat(`**Черты/Способности**: ${[
                                    `${getFromDict(EdgesTranslations, Edges.Flight)} (10 дюймов, Подъем 6 дюймов)`,
                                    `Когти/Клюв (Claws/Beak) (Сила+1)`,
                                    getFromDict(EdgesTranslations, Edges.LowLightVision),
                                ].join(', ')}`),
                                getUnitCommonAttributesContent({
                                    [States.Pace]: '2',
                                    [States.Parry]: '5',
                                    [States.Toughness]: '6',
                                }),
                            ],
                            margin: [paragraphOffset, 0, 0, 0],
                        },
                        getUnitCommonAttributesContent({
                            [States.Pace]: '6',
                            [States.Parry]: '6',
                            [States.Toughness]: '6',
                        }),
                        quickTextFormat(`**Снаряжение**: ${[
                            `Боевой посох (Сила+2, +1 Досягаемость, +1 Парирование)`,
                        ].join(', ')}`),
                        quickTextFormat(`**Развитие**: ${[
                            `*${getFromDict(PowersTranslations, Powers.Stun)}*`,
                            `*${getFromDict(PowersTranslations, Powers.ShapeChange)}*`,
                            `*${getFromDict(SettingPowersTranslations, SettingPowers.FarSight)}*`,
                            getFromDict(EdgesTranslations, Edges.RapidRecharge),
                            getFromDict(EdgesTranslations, Edges.PowerPoints),
                            getFromDict(EdgesTranslations, Edges.ImprovedDodge),
                            getFromDict(EdgesTranslations, Edges.Command),
                        ].join(', ')}`),
                    ],
                }),
                getUnitContent({
                    title: 'Химера (Chimaera)',
                    points: '92',
                    lines: [
                        quickTextFormat(`*см. Бестиарий Warcraft, плюс ${SkillsTranslations[Skills.Intimidation]} d10*.`),
                    ],
                }),
                getUnitContent({
                    title: 'Волшебный дракон/Лесной дракончик (Faerie Dragon)',
                    points: '92',
                    lines: [
                        quickTextFormat(`*см. Бестиарий Warcraft*.`),
                    ],
                }),
                getUnitContent({
                    title: 'Гиппогриф (Hippogryph)',
                    points: '64',
                    lines: [
                        quickTextFormat(`*см. Бестиарий Warcraft*.`),
                    ],
                }),
                getUnitContent({
                    title: 'Наездник на Гиппогрифе (Hippogryph Rider)',
                    points: '106',
                    lines: [
                        quickTextFormat(`*Гиппогриф (Hippogryph) плюс тренированный Лучник (Archer)*.`),
                    ],
                }),
                getUnitContent({
                    title: 'Горный великан (Mountain Giant)',
                    points: '93',
                    lines: [
                        quickTextFormat(`*см. Бестиарий Warcraft*.`),
                    ],
                }),
                getUnitContent({
                    title: 'Метатель глеф/Баллиста (Glaive Thrower)',
                    points: '77',
                    lines: [
                        quickTextFormat(`*Метатель Глеф включает двух специально обученных Светлячков (Wisps), которые оживляют транспортное средство.*`),
                        quickTextFormat(`**Скорость/Ускорение**: 6/2; **Стойкость**: 14 (6)`),
                        quickTextFormat(`**Осадная глефа (Seige Glaive)**: 2d8, ББ 2; 30/60/120`),
                        getUnitAttributesContent({
                            [States.Agility]: 'N/A',
                            [States.Smarts]: '6',
                            [States.Spirit]: '8',
                            [States.Strength]: 'N/A',
                            [States.Vigor]: '8',
                        }),
                        getUnitSkillsContent({
                            [Skills.Guts]: '8',
                            [Skills.Notice]: '6',
                            [Skills.Repair]: '6',
                            [Skills.Shooting]: '8',
                        }),
                        quickTextFormat(`**Черты/Способности**: ${[
                            getFromDict(EdgesTranslations, Edges.Marksman),
                        ].join(', ')}`),
                    ],
                }),
            ];
        }

        return [
            {
                text: 'Стражи (The Sentinels)',
                style: 'header2',
                pageBreak: 'before',
            },
            getSentinelsUnitsContent(),
        ];
    }

    return [
        {
            text: 'Юниты, Здания и Снаряжение (Units, Buildings and Gear)',
            style: 'header1',
            pageBreak: 'before',
        },
        getTitleContent(),
        getAllianceContent(),
        getHordeContent(),
        getSentinelsContent(),
    ];
}

module.exports = {
    fonts,
    docDefinition,
};