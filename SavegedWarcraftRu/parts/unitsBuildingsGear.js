const { States, StatesTranslations, Skills, SkillsTranslations, Hindrances, HindrancesTranslations, Ranks, RanksTranslations, Edges, EdgesTranslations, Powers, PowersTranslations, } = require('../settingTranslations');
const { paragraphOffset, tocParagraphOffset, getFontPath, getImagePath, quickTextFormat, getTipText, getHorizontalLine, getFromDict, } = require('../commonFunctions');

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
                    quickTextFormat(`**Развитие**: ${getFromDict(EdgesTranslations, Edges.Block)}, ${getFromDict(EdgesTranslations, Edges.Defend)}, ${getFromDict(EdgesTranslations, Edges.ImprovedBlock)}, ${getFromDict(EdgesTranslations, Edges.ImprovedDefend)}`),
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
                    quickTextFormat(`**Развитие**: ${getFromDict(EdgesTranslations, Edges.Musketeer)}, ${getFromDict(EdgesTranslations, Edges.Marksman)}`),
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
                        getFromDict(EdgesTranslations, Edges.RapidShot),
                        getFromDict(EdgesTranslations, Edges.TwoArrowsNocked),
                        getFromDict(EdgesTranslations, Edges.HailOfArrows),
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
                        getFromDict(EdgesTranslations, Edges.Cavalry),
                        getFromDict(EdgesTranslations, Edges.SteadyHands),
                        `${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Тайная Магия (Arcane Magic))`,
                    ].join(', ')}`),
                    quickTextFormat(`**Тайная Магия (Arcane Magic)**: ***Пункты Силы***: 15; ***Заклинания***: *${[
                        getFromDict(PowersTranslations, Powers.Obscure),
                        getFromDict(PowersTranslations, Powers.Paralyze),
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
                        `${getFromDict(EdgesTranslations, Edges.StrafingRun)}`,
                        `${getFromDict(EdgesTranslations, Edges.RapidShot)}`,
                        `(если Эльф Крови) ${getFromDict(EdgesTranslations, Edges.Warlock)}`,
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
                        getFromDict(EdgesTranslations, Edges.Cavalry),
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
                        getFromDict(EdgesTranslations, Edges.StrafingRun),
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
                        `*${getFromDict(PowersTranslations, Powers.OffensiveArmor)}*`,
                        `*${getFromDict(PowersTranslations, Powers.Blast)}*`,
                        `*${getFromDict(PowersTranslations, Powers.TransformOther)}*`,
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
                        getFromDict(EdgesTranslations, Edges.Priest),
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
                        `*${getFromDict(PowersTranslations, Powers.InnerFire)}*`,
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
                        getFromDict(EdgesTranslations, Edges.SpellBreaker),
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
                        getFromDict(EdgesTranslations, Edges.CaptureSpell),
                        getFromDict(EdgesTranslations, Edges.DrainSpell),
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
                        getFromDict(EdgesTranslations, Edges.Artillerist),
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
                        getFromDict(EdgesTranslations, Edges.Musketeer),
                        getFromDict(EdgesTranslations, Edges.SteadyHands),
                        getFromDict(EdgesTranslations, Edges.RapidShot),
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
                        getFromDict(EdgesTranslations, Edges.Artillerist),
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
                tocItem: true,
                tocMargin: [tocParagraphOffset * 2, 0, 0, 0],
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
            tocItem: true,
            tocMargin: [tocParagraphOffset, 0, 0, 0],
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
                        getFromDict(EdgesTranslations, Edges.RapidShot),
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
                        getFromDict(EdgesTranslations, Edges.Cavalry),
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
                        getFromDict(EdgesTranslations, Edges.Cavalry),
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
                        getFromDict(EdgesTranslations, Edges.Cavalry),
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
                        getFromDict(EdgesTranslations, Edges.StrafingRun),
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
                        getFromDict(EdgesTranslations, Edges.Cavalry),
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
                        `*${getFromDict(PowersTranslations, Powers.OffensiveArmor)}*`,
                        `*${getFromDict(PowersTranslations, Powers.Bloodlust)}*`,
                        `*${getFromDict(PowersTranslations, Powers.FarSight)}*`,
                        `*${getFromDict(PowersTranslations, Powers.Summon)}*`,
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
                        `*${getFromDict(PowersTranslations, Powers.Paralyze)}*`,
                        `*${getFromDict(PowersTranslations, Powers.Quickness)}*`,
                        getFromDict(EdgesTranslations, Edges.DarkRitual),
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
                        getFromDict(EdgesTranslations, Edges.Shaman),
                    ].join(', ')}`),
                    quickTextFormat(`**Изъяны**: ${[
                        getFromDict(HindrancesTranslations, Hindrances.AllThumbs),
                        getFromDict(EdgesTranslations, Edges.Large),
                    ].join(', ')}`),
                    quickTextFormat(`**Шаманизм**: ***Пункты Силы***: 15; ***Заклинания***: ${[
                        `*${getFromDict(PowersTranslations, Powers.BoostLowerTrait)}*`,
                        `*${getFromDict(PowersTranslations, Powers.EtherealForm)}*`,
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
                        `*${getFromDict(PowersTranslations, Powers.FarSight)}*`,
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
                tocItem: true,
                tocMargin: [tocParagraphOffset * 2, 0, 0, 0],
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
            tocItem: true,
            tocMargin: [tocParagraphOffset, 0, 0, 0],
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
                        `${getFromDict(PowersTranslations, Powers.Mend)} (Обновление (Renew): работает на Древних (Ancients))`,
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
                        getFromDict(EdgesTranslations, Edges.RapidShot),
                        getFromDict(EdgesTranslations, Edges.TwoArrowsNocked),
                        getFromDict(EdgesTranslations, Edges.HailOfArrows),
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
                                `*${getFromDict(EdgesTranslations, Edges.Cavalry)}*`,
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
                        getFromDict(EdgesTranslations, Edges.Cavalry),
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
                        `Рикошет (Ricochet) (${getFromDict(EdgesTranslations, Edges.RapidShot)})`,
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
                        getFromDict(EdgesTranslations, Edges.Druid),
                        getFromDict(EdgesTranslations, Edges.NaturesFury),
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
                        getFromDict(EdgesTranslations, Edges.SpellAura),
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
                        getFromDict(EdgesTranslations, Edges.Druid),
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
                        `*${getFromDict(PowersTranslations, Powers.FarSight)}*`,
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

    function getSentinelsCostsContent() {
        return [
            {
                text: 'Стоимость и содержание (Costs and Upkeeps)',
                style: 'header3',
                tocItem: true,
                tocMargin: [tocParagraphOffset * 2, 0, 0, 0],
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
                                text: 'Светлячок',
                            },
                            {
                                text: `60/0`,
                                alignment: 'center',
                            },
                            {
                                text: '0/0/1',
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: 'Лучник',
                            },
                            {
                                text: `130/10`,
                                alignment: 'center',
                            },
                            {
                                text: '1/1/2',
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: 'Охотница',
                            },
                            {
                                text: `195/20`,
                                alignment: 'center',
                            },
                            {
                                text: '2/0/2',
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: 'Дриада',
                            },
                            {
                                text: `145/60`,
                                alignment: 'center',
                            },
                            {
                                text: '1/1/3',
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: 'Другид-медведь',
                            },
                            {
                                text: `255/80`,
                                alignment: 'center',
                            },
                            {
                                text: '2/0/4',
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: 'Друид-ворон',
                            },
                            {
                                text: `135/20`,
                                alignment: 'center',
                            },
                            {
                                text: '2/0/2',
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: 'Химера',
                            },
                            {
                                text: `330/70`,
                                alignment: 'center',
                            },
                            {
                                text: '2/2/5',
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: 'Волшебный дракон/Лесной дракончик',
                            },
                            {
                                text: `155/25`,
                                alignment: 'center',
                            },
                            {
                                text: '1/0/2',
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: 'Гиппогриф',
                            },
                            {
                                text: `160/20`,
                                alignment: 'center',
                            },
                            {
                                text: '0/1/2',
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: 'Горный великан',
                            },
                            {
                                text: `425/100`,
                                alignment: 'center',
                            },
                            {
                                text: '2/3/7',
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: 'Метатель глеф/Баллиста',
                            },
                            {
                                text: `210/65`,
                                alignment: 'center',
                            },
                            {
                                text: '2/2/3',
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
                                text: 'Древо Жизни',
                            },
                            {
                                text: `340/185`,
                                alignment: 'center',
                            },
                            {
                                text: `11`,
                                alignment: 'center',
                            },
                            {
                                text: '0',
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: '- Древо Долголетия',
                                italics: true,
                            },
                            {
                                text: `320/180`,
                                alignment: 'center',
                            },
                            {
                                text: `14`,
                                alignment: 'center',
                            },
                            {
                                text: '0/1/0',
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: '- Древо Вечности',
                                italics: true,
                            },
                            {
                                text: `330/200`,
                                alignment: 'center',
                            },
                            {
                                text: `14`,
                                alignment: 'center',
                            },
                            {
                                text: '0/2/0',
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: 'Древо Войны',
                            },
                            {
                                text: `150/60`,
                                alignment: 'center',
                            },
                            {
                                text: `6`,
                                alignment: 'center',
                            },
                            {
                                text: '0/1/1',
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: 'Древо Мудрости',
                            },
                            {
                                text: `155/145`,
                                alignment: 'center',
                            },
                            {
                                text: `7`,
                                alignment: 'center',
                            },
                            {
                                text: '0/1/1',
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: 'Древо Ветров',
                            },
                            {
                                text: `150/140`,
                                alignment: 'center',
                            },
                            {
                                text: `6`,
                                alignment: 'center',
                            },
                            {
                                text: '0/1/1',
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: 'Сторожевое Древо',
                            },
                            {
                                text: `135/80`,
                                alignment: 'center',
                            },
                            {
                                text: `6`,
                                alignment: 'center',
                            },
                            {
                                text: '0/1/1',
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: 'Лунный колодец',
                            },
                            {
                                text: `180/50`,
                                alignment: 'center',
                            },
                            {
                                text: `5`,
                                alignment: 'center',
                            },
                            {
                                text: '1/0/-8',
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: 'Охотничий зал',
                            },
                            {
                                text: `210/100`,
                                alignment: 'center',
                            },
                            {
                                text: `6`,
                                alignment: 'center',
                            },
                            {
                                text: '1/2/1',
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: 'Гнезда химер',
                            },
                            {
                                text: `140/190`,
                                alignment: 'center',
                            },
                            {
                                text: `8`,
                                alignment: 'center',
                            },
                            {
                                text: '1/3/1',
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
                table: { // Базовое оружие
                    widths: ['*', 'auto', 'auto', 50, 'auto', 'auto', 'auto'],
                    body: [
                        [
                            {
                                text: 'Базовое оружие',
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
                                text: `12/24/48`,
                                alignment: 'center',
                            },
                            {
                                text: `2d6`,
                                alignment: 'center',
                            },
                            {
                                text: '2',
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
                                text: 'Эльфийский длинный дук',
                                italics: true,
                            },
                            {
                                text: `15/30/60`,
                                alignment: 'center',
                            },
                            {
                                text: `2d6`,
                                alignment: 'center',
                            },
                            {
                                text: '5/5',
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
                                text: 'Требуется Стрельба d8+',
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: 'Лунная глефа',
                            },
                            {
                                text: `3/6/12`,
                                alignment: 'center',
                            },
                            {
                                text: `Сила+2`,
                                alignment: 'center',
                            },
                            {
                                text: '5',
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
                                text: 'Ближний и дальний бой',
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: 'Метательная глефа',
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
                                text: '20/7',
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
                                text: 'Ближний и дальний бой',
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
                                text: 'Осадная глефа головорубка (Vorpal Siege Glaive)',
                            },
                            {
                                text: `30/60/120`,
                                alignment: 'center',
                            },
                            {
                                text: `2d8`,
                                alignment: 'center',
                            },
                            {
                                text: '100/20',
                                alignment: 'center',
                            },
                            {
                                text: 'N/A',
                                alignment: 'center',
                            },
                            {
                                text: 'N/A',
                                alignment: 'center',
                            },
                            {
                                text: 'Пробивает как пушка (см. SW1 с. 53, SW2 с. 78)',
                                alignment: 'center',
                            },
                        ],
                    ]
                },
                alignment: 'left',
            },
            '\n',
            {
                table: { // Улучшения оружия
                    widths: ['*', 'auto', 50, 'auto'],
                    body: [
                        [
                            {
                                text: 'Улучшения оружия',
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
                                text: 'Примечания',
                                bold: true,
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: 'Благословенное оружие',
                            },
                            {
                                text: `+1 ББ`,
                                alignment: 'center',
                            },
                            {
                                text: '+10/+2',
                                alignment: 'center',
                            },
                            {
                                text: 'Благословение Луны/Сила Природы',
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: 'Зачарованное оружие',
                            },
                            {
                                text: `+1 урон, +1 ББ`,
                                alignment: 'center',
                            },
                            {
                                text: '+20/+5',
                                alignment: 'center',
                            },
                            {
                                text: 'Зачарование Луны/Мощь Природы',
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: 'Укрепленное оружие',
                            },
                            {
                                text: `+2 урон, +1 ББ`,
                                alignment: 'center',
                            },
                            {
                                text: '+40/+7',
                                alignment: 'center',
                            },
                            {
                                text: 'Месть Луны/Месть Природы',
                                alignment: 'center',
                            },
                        ],
                    ]
                },
                alignment: 'left',
            },
            '\n',
            {
                table: { // Базовая броня
                    widths: ['*', 'auto', 'auto', 50, 'auto', 'auto'],
                    body: [
                        [
                            {
                                text: 'Базовая броня',
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
                    ]
                },
                alignment: 'left',
            },
            '\n',
            {
                table: { // Улучшения брони
                    widths: ['*', 'auto', 50, 'auto'],
                    body: [
                        [
                            {
                                text: 'Улучшения брони',
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
                                text: 'Примечания',
                                bold: true,
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: 'Благословенная броня',
                            },
                            {
                                text: `-1 ББ`,
                                alignment: 'center',
                            },
                            {
                                text: '+10/+5',
                                alignment: 'center',
                            },
                            {
                                text: 'Благословение Луны/Сила Природы',
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: 'Зачарованная броня',
                            },
                            {
                                text: `+1 броня, -1 ББ`,
                                alignment: 'center',
                            },
                            {
                                text: '+15/+7',
                                alignment: 'center',
                            },
                            {
                                text: 'Зачарование Луны/Мощь Природы',
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: 'Укрепленная броня',
                            },
                            {
                                text: `+2 брони, -1 ББ`,
                                alignment: 'center',
                            },
                            {
                                text: '+30/+10',
                                alignment: 'center',
                            },
                            {
                                text: 'Защита Луны/Стойкость Природы',
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
            text: 'Стражи (The Sentinels)',
            style: 'header2',
            pageBreak: 'before',
            tocItem: true,
            tocMargin: [tocParagraphOffset, 0, 0, 0],
        },
        getSentinelsUnitsContent(),
        getSentinelsCostsContent(),
    ];
}

function getUndeadScourgeContent() {
    function getUndeadScourgeUnitsContent() {
        return [
            {
                text: 'Юниты (Units)',
                style: 'header3',
            },
            getUnitContent({
                title: 'Аколит/Послушник (Acolyte)',
                points: '27',
                lines: [
                    getUnitAttributesContent({
                        [States.Agility]: '6',
                        [States.Smarts]: '6',
                        [States.Spirit]: '6',
                        [States.Strength]: '4',
                        [States.Vigor]: '4',
                    }),
                    getUnitSkillsContent({
                        [Skills.Faith]: '6',
                        [Skills.Fighting]: '4',
                        [Skills.Guts]: '6',
                        ['???']: '4',
                        [Skills.Notice]: '4',
                    }),
                    getUnitCommonAttributesContent({
                        [States.Pace]: '6',
                        [States.Parry]: '5',
                        [States.Toughness]: '4',
                    }),
                    quickTextFormat(`**Изъяны**: ${[
                        `${getFromDict(HindrancesTranslations, Hindrances.Delusional)} (Вера в Культ Смерти)`,
                    ].join(', ')}`),
                    quickTextFormat(`**Черты/Способности**: ${[
                        `${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Чудеса - Нежить (Miracles – Undeath))`,
                    ].join(', ')}`),
                    quickTextFormat(`***Нежить***: **Пункты Силы**: 10; **Силы**: ${[
                        `*${getFromDict(PowersTranslations, Powers.Blight)}*`,
                        `*${getFromDict(PowersTranslations, Powers.Contact)}*`,
                        `*${getFromDict(PowersTranslations, Powers.Mend)}*`,
                    ].join(', ')}`),
                    quickTextFormat(`**Снаряжение**: ${[
                        `Посох (Сила+2, +1 Парирование)`,
                    ].join(', ')}`),
                    quickTextFormat(`**Развитие**: Приносится в жертву на алтаре и превращается в Тень (Shade)`),
                ],
            }),
            getTipText([
                quickTextFormat(`По поводу *undefned* - я не знаю, что это должно быть. В оригинале буквально: *Guts d6, d4, Notice d4*. Возможно, подразумевается *Знание*, но это не точно.`),
            ]),
            getUnitContent({
                title: 'Некромант (Necromancer)',
                points: '40',
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
                        [Skills.Guts]: '10',
                        [Skills.Intimidation]: '8',
                        [Skills.Knowledge]: '8 (Магия)',
                        [Skills.Notice]: '6',
                        [Skills.Spellcasting]: '8',
                    }),
                    quickTextFormat(`**Черты/Способности**: ${[
                        `${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Магия (Magic))`,
                        getFromDict(EdgesTranslations, Edges.Wizard),
                        getFromDict(EdgesTranslations, Edges.Necromancer),
                    ].join(', ')}`),
                    quickTextFormat(`**Некромантия**: ***Пункты Силы***: 10; ***Заклинания***: ${[
                        `*${getFromDict(PowersTranslations, Powers.Blight)}*`,
                        `*${getFromDict(PowersTranslations, Powers.Bolt)}*`,
                        `*${getFromDict(PowersTranslations, Powers.Zombie)}*`,
                    ].join(', ')}`),
                    getUnitCommonAttributesContent({
                        [States.Pace]: '6',
                        [States.Parry]: '5',
                        [States.Toughness]: '5',
                    }),
                    quickTextFormat(`**Снаряжение**: ${[
                        `Посох (Сила+2, +1 Парирование)`,
                    ].join(', ')}`),
                    quickTextFormat(`**Развитие**: ${[
                        `*${getFromDict(PowersTranslations, Powers.BoostLowerTrait)}*`,
                        `*${getFromDict(PowersTranslations, Powers.Quickness)}*`,
                        getFromDict(EdgesTranslations, Edges.RapidRecharge),
                        getFromDict(EdgesTranslations, Edges.PowerPoints),
                        getFromDict(EdgesTranslations, Edges.DarkRitual),
                        getFromDict(EdgesTranslations, Edges.CreateUndead),
                    ].join(', ')}`),
                ],
            }),
            getUnitContent({
                title: 'Тень (Shade)',
                points: '30',
                lines: [
                    getUnitAttributesContent({
                        [States.Agility]: '6',
                        [States.Smarts]: '6',
                        [States.Spirit]: '8',
                        [States.Strength]: '0',
                        [States.Vigor]: '8',
                    }),
                    getUnitSkillsContent({
                        [Skills.Fighting]: '4',
                        [Skills.Guts]: '10',
                        [Skills.Notice]: '8',
                    }),
                    quickTextFormat(`**Черты/Способности**: ${[
                        getFromDict(EdgesTranslations, Edges.Undead),
                        `${getFromDict(EdgesTranslations, Edges.Ethereal)} (не может повлиять на физические объекты)`,
                        `Обнаружить невидимость (Detect Invisibility)`,
                    ].join(', ')}`),
                    getUnitCommonAttributesContent({
                        [States.Pace]: '6',
                        [States.Parry]: '5',
                        [States.Toughness]: '8',
                    }),
                ],
            }),
            getUnitContent({
                title: 'Банши (Banshee)',
                points: '53',
                lines: [
                    getUnitAttributesContent({
                        [States.Agility]: '8',
                        [States.Smarts]: '8',
                        [States.Spirit]: '10',
                        [States.Strength]: '4',
                        [States.Vigor]: '8',
                    }),
                    getUnitSkillsContent({
                        [Skills.Guts]: '10',
                        [Skills.Notice]: '8',
                        [Skills.Spellcasting]: '10',
                    }),
                    quickTextFormat(`**Черты/Способности**: ${[
                        getFromDict(EdgesTranslations, Edges.Undead),
                        getFromDict(EdgesTranslations, Edges.Ethereal),
                        getFromDict(EdgesTranslations, Edges.Fear),
                        `${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Магия (Magic))`,
                        getFromDict(EdgesTranslations, Edges.Necromancer),
                    ].join(', ')}`),
                    quickTextFormat(`**Некромантия**: ***Пункты Силы***: 20; ***Заклинания***: ${[
                        `*${getFromDict(PowersTranslations, Powers.Bolt)}*`,
                        `*${getFromDict(PowersTranslations, Powers.Burst)} (Звук (Sound))*`,
                        `*${getFromDict(PowersTranslations, Powers.LowerTrait)}*`,
                    ].join(', ')}`),
                    getUnitCommonAttributesContent({
                        [States.Pace]: '6',
                        [States.Parry]: '2',
                        [States.Toughness]: '8',
                    }),
                    quickTextFormat(`**Развитие**: ${[
                        `*${getFromDict(PowersTranslations, Powers.Dispel)}*`,
                        `*${getFromDict(PowersTranslations, Powers.Puppet)} (Одержимость (Possession))*`,
                        getFromDict(EdgesTranslations, Edges.PowerPoints),
                        getFromDict(EdgesTranslations, Edges.SoulDrain),
                        getFromDict(EdgesTranslations, Edges.Wizard),
                    ].join(', ')}`),
                ],
            }),
            getUnitContent({
                title: 'Скелет-воин (Skeleton Warrior)',
                points: '30',
                lines: [
                    getUnitAttributesContent({
                        [States.Agility]: '8',
                        [States.Smarts]: '4',
                        [States.Spirit]: '4',
                        [States.Strength]: '6',
                        [States.Vigor]: '6',
                    }),
                    getUnitSkillsContent({
                        [Skills.Fighting]: '10',
                        [Skills.Intimidation]: '10',
                        [Skills.Notice]: '10',
                    }),
                    quickTextFormat(`**Черты/Способности**: ${[
                        getFromDict(EdgesTranslations, Edges.Undead),
                        getFromDict(EdgesTranslations, Edges.Fearless),
                        `Когти (Claws) (Сила+1)`,
                    ].join(', ')}`),
                    getUnitCommonAttributesContent({
                        [States.Pace]: '6',
                        [States.Parry]: '5',
                        [States.Toughness]: '9 (7)',
                    }),
                    quickTextFormat(`**Снаряжение**: ${[
                        `Меч (Сила+3)`,
                        `Гнилая кольчуга (+2)`,
                    ].join(', ')}`),
                ],
            }),
            getUnitContent({
                title: 'Гуль/Вурдалак (Ghoul)',
                points: '33',
                lines: [
                    getUnitAttributesContent({
                        [States.Agility]: '6',
                        [States.Smarts]: '4',
                        [States.Spirit]: '6',
                        [States.Strength]: '6',
                        [States.Vigor]: '8',
                    }),
                    getUnitSkillsContent({
                        [Skills.Fighting]: '6',
                        [Skills.Guts]: '8',
                        [Skills.Intimidation]: '6',
                        [Skills.Notice]: '4',
                    }),
                    quickTextFormat(`**Черты/Способности**: ${[
                        getFromDict(EdgesTranslations, Edges.Undead),
                        `Когти/Укус (Claws/Bite) (Сила+2)`,
                    ].join(', ')}`),
                    getUnitCommonAttributesContent({
                        [States.Pace]: '6',
                        [States.Parry]: '5',
                        [States.Toughness]: '8',
                    }),
                    quickTextFormat(`**Развитие**: ${[
                        getFromDict(EdgesTranslations, Edges.Frenzy),
                        getFromDict(EdgesTranslations, Edges.FleetFooted),
                        `${getFromDict(EdgesTranslations, Edges.Regeneration)} (Каннибализм (Cannibalize) - проверка Исцеления при поедании трупа)`,
                    ].join(', ')}`),
                ],
            }),
            getUnitContent({
                title: 'Могильный Дьявол/Могильщик (Crypt Fiend)',
                points: '51',
                lines: [
                    getUnitAttributesContent({
                        [States.Agility]: '8',
                        [States.Smarts]: '4',
                        [States.Spirit]: '8',
                        [States.Strength]: '8',
                        [States.Vigor]: '8',
                    }),
                    getUnitSkillsContent({
                        [Skills.Climbing]: '10',
                        [Skills.Fighting]: '8',
                        [Skills.Guts]: '10',
                        [Skills.Intimidation]: '8',
                        [Skills.Stealth]: '6',
                        [Skills.Throwing]: '6',
                    }),
                    quickTextFormat(`**Черты/Способности**: ${[
                        getFromDict(EdgesTranslations, Edges.Undead),
                        getFromDict(EdgesTranslations, Edges.Fearless),
                        `Когти (Claws) (Сила+1)`,
                        `${getFromDict(EdgesTranslations, Edges.Size)} +2`,
                    ].join(', ')}`),
                    getUnitCommonAttributesContent({
                        [States.Pace]: '8',
                        [States.Parry]: '6',
                        [States.Toughness]: '10',
                    }),
                    quickTextFormat(`**Развитие**: ${[
                        `Паутина (Web) (создать сеть из паутины)`,
                        `${getFromDict(EdgesTranslations, Edges.Burrowing)} (0, +8 к Скрытности)`,
                    ].join(', ')}`),
                ],
            }),
            getUnitContent({
                title: 'Поганище/Мерзость/Мясник (Abomination)',
                points: '59',
                lines: [
                    getUnitAttributesContent({
                        [States.Agility]: '4',
                        [States.Smarts]: '4',
                        [States.Spirit]: '8',
                        [States.Strength]: '12+2',
                        [States.Vigor]: '12',
                    }),
                    getUnitSkillsContent({
                        [Skills.Fighting]: '8',
                        [Skills.Intimidation]: '10',
                    }),
                    quickTextFormat(`**Черты/Способности**: ${[
                        getFromDict(EdgesTranslations, Edges.Undead),
                        `${getFromDict(EdgesTranslations, Edges.Size)} +4`,
                        getFromDict(EdgesTranslations, Edges.Large),
                        getFromDict(EdgesTranslations, Edges.Fearless),
                        getFromDict(EdgesTranslations, Edges.ImprovedFrenzy),
                    ].join(', ')}`),
                    getUnitCommonAttributesContent({
                        [States.Pace]: '6',
                        [States.Parry]: '6',
                        [States.Toughness]: '14',
                    }),
                    quickTextFormat(`**Снаряжение**: ${[
                        `Тесак (Сила+3)`,
                    ].join(', ')}`),
                    quickTextFormat(`**Развитие**: ${[
                        getFromDict(EdgesTranslations, Edges.Berserk),
                        `Облако болезни (Disease Cloud) (-2; снижает Силу и Выносливость на 1 кубик на 2d6 дней)`,
                    ].join(', ')}`),
                ],
            }),
            getUnitContent({
                title: 'Ледяной змей (Frost Wyrm)',
                points: '88',
                lines: [
                    getUnitAttributesContent({
                        [States.Agility]: '6',
                        [States.Smarts]: '8 (Ж)',
                        [States.Spirit]: '10',
                        [States.Strength]: '12+4',
                        [States.Vigor]: '6',
                    }),
                    getUnitSkillsContent({
                        [Skills.Fighting]: '10',
                        [Skills.Intimidation]: '12',
                        [Skills.Fighting]: '6',
                    }),
                    quickTextFormat(`**Черты/Способности**: ${[
                        getFromDict(EdgesTranslations, Edges.Undead),
                        `${getFromDict(EdgesTranslations, Edges.Fear)} (-2)`,
                        getFromDict(EdgesTranslations, Edges.Fearless),
                        `Когти/Укус (Claws/Bite) (Сила+3)`,
                        `Ледяное дыхание (Frost Breath) (как ${getFromDict(PowersTranslations, Powers.Burst)} холода)`,
                        `${getFromDict(EdgesTranslations, Edges.Size)} +5`,
                        getFromDict(EdgesTranslations, Edges.Frenzy),
                        getFromDict(EdgesTranslations, Edges.Large),
                        `${getFromDict(EdgesTranslations, Edges.Flight)} (10 дюймов, Подъем 4 дюйма)`,
                    ].join(', ')}`),
                    getUnitCommonAttributesContent({
                        [States.Pace]: '4',
                        [States.Parry]: '7',
                        [States.Toughness]: '15',
                    }),
                ],
            }),
            getUnitContent({
                title: 'Горгулья (Gargoyle)',
                points: '59',
                lines: [
                    getUnitAttributesContent({
                        [States.Agility]: '8',
                        [States.Smarts]: '4',
                        [States.Spirit]: '6',
                        [States.Strength]: '8',
                        [States.Vigor]: '10',
                    }),
                    getUnitSkillsContent({
                        [Skills.Fighting]: '8',
                        [Skills.Intimidation]: '6',
                        [Skills.Throwing]: '6',
                    }),
                    quickTextFormat(`**Черты/Способности**: ${[
                        `${getFromDict(EdgesTranslations, Edges.Size)} +1`,
                        `${getFromDict(EdgesTranslations, Edges.Armor)} +3`,
                        `${getFromDict(EdgesTranslations, Edges.Flight)} (8 дюймов, Подъем 4 дюйма)`,
                        `Когти (Claws) (Сила+2)`,
                        `Каменная форма (Stone Form) (${[
                            `Неподвижный (Immobile)`,
                            `Быстрая регенерация (Fast Regeneration)`,
                            `+4 ${getFromDict(EdgesTranslations, Edges.Armor)}`,
                        ].join(', ')})`,
                    ].join(', ')}`),
                    getUnitCommonAttributesContent({
                        [States.Pace]: '6',
                        [States.Parry]: '6',
                        [States.Toughness]: '11',
                    }),
                ],
            }),
            getUnitContent({
                title: 'Обсидиановый разрушитель/Сфинкс (Obsidian Destroyer)',
                points: '82',
                lines: [
                    getUnitAttributesContent({
                        [States.Agility]: '6',
                        [States.Smarts]: '4',
                        [States.Spirit]: '8',
                        [States.Strength]: '12',
                        [States.Vigor]: '10',
                    }),
                    getUnitSkillsContent({
                        [Skills.Fighting]: '8',
                        [Skills.Intimidation]: '10',
                        [Skills.Spellcasting]: '8',
                    }),
                    quickTextFormat(`**Черты/Способности**: ${[
                        `${getFromDict(EdgesTranslations, Edges.Flight)} (10 дюймов, Подъем 4 дюйма)`,
                        `${getFromDict(EdgesTranslations, Edges.Size)} +2`,
                        `${getFromDict(EdgesTranslations, Edges.Armor)} +4`,
                        `Когти (Claws) (Сила+2)`,
                        `${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Магия (Magic))`,
                        getFromDict(EdgesTranslations, Edges.SpellBreaker),
                        `Высасывание Магии (Drain Magic)`,
                        getFromDict(EdgesTranslations, Edges.Construct),
                        getFromDict(EdgesTranslations, Edges.Fearless),
                    ].join(', ')}`),
                    quickTextFormat(`**Темная магия (Dark Magic)**: ***Пункты Силы***: 5; ***Заклинания***: ${[
                        `*${getFromDict(PowersTranslations, Powers.Dispel)}*`,
                        `*${getFromDict(PowersTranslations, Powers.Bolt)}*`,
                    ].join(', ')}`),
                    getUnitCommonAttributesContent({
                        [States.Pace]: '6',
                        [States.Parry]: '6',
                        [States.Toughness]: '13',
                    }),
                    quickTextFormat(`**Развитие**: ${[
                        `*${getFromDict(PowersTranslations, Powers.Blast)} (Сфера Небытия (Orb of Annihilation))*`,
                    ].join(', ')}`),
                ],
            }),
            getTipText([
                quickTextFormat(`Никаких пояснений по поводу **Высасывания Магии (Drain Magic)** не прилагается.`),
            ]),
            getUnitContent({
                title: 'Обсидиановая статуя (Obsidian Statue)',
                points: '47',
                lines: [
                    quickTextFormat(`**Скорость/Ускорение**: 4/1; **Стойкость**: 18 (14)`),
                    getUnitSkillsContent({
                        [Skills.Spellcasting]: '8',
                    }),
                    quickTextFormat(`**Черты/Способности**: ${[
                        `${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Магия (Magic))`,
                        getFromDict(EdgesTranslations, Edges.Command),
                        getFromDict(EdgesTranslations, Edges.HoldTheLine),
                    ].join(', ')}`),
                    quickTextFormat(`**Темная магия (Dark Magic)**: ***Пункты Силы***: 20; ***Заклинания***: ${[
                        `*${getFromDict(PowersTranslations, Powers.Healing)}*`,
                        `*Восстановление Маны (Restore Mana) (передача в соотношении 1 к 1)*`,
                        `*${getFromDict(PowersTranslations, Powers.Bolt)}*`,
                    ].join(', ')}`),
                ],
            }),
            getUnitContent({
                title: 'Труповозка (Meat Wagon)',
                points: '37',
                lines: [
                    quickTextFormat(`*Труповозки обслуживаются 3 специально обученными Аколитами/Послушниками (Acolyte).*`),
                    quickTextFormat(`**Скорость/Ускорение**: 4/1; **Стойкость**: 12 (6)`),
                    quickTextFormat(`**Трупная катапульта (Corpse Catapult)**: Урон 2d4, Дистанция 20/40/80, 3 Действия на перезарядку`),
                    quickTextFormat(`**Аколиты/Послушники (Acolytes)**`),
                    getUnitSkillsContent({
                        [Skills.Shooting]: '4',
                    }),
                    quickTextFormat(`**Развитие**: ${[
                        `Облако болезни (Disease Cloud) (-2; снижает Силу и Выносливость на 1 кубик на 2d6 дней)`,
                    ].join(', ')}`),
                ],
            }),
        ];
    }

    function getUndeadScourgeCostsContent() {
        return [
            {
                text: 'Стоимость и содержание (Costs and Upkeeps)',
                style: 'header3',
                tocItem: true,
                tocMargin: [tocParagraphOffset * 2, 0, 0, 0],
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
                                text: 'Аколит/Послушник (Тень)',
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
                                text: 'Некромант',
                            },
                            {
                                text: `145/20`,
                                alignment: 'center',
                            },
                            {
                                text: '5/0/2',
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: 'Банши',
                            },
                            {
                                text: `155/30`,
                                alignment: 'center',
                            },
                            {
                                text: '4/0/2',
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: 'Гуль/Вурдалак',
                            },
                            {
                                text: `120/0`,
                                alignment: 'center',
                            },
                            {
                                text: '0/0/2',
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: 'Могильный Дьявол/Могильщик',
                            },
                            {
                                text: `215/40`,
                                alignment: 'center',
                            },
                            {
                                text: '1/0/3',
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: 'Ледяной змей',
                            },
                            {
                                text: `385/120`,
                                alignment: 'center',
                            },
                            {
                                text: '3/1/7',
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: 'Горгулья',
                            },
                            {
                                text: `185/30`,
                                alignment: 'center',
                            },
                            {
                                text: '0/1/2',
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: 'Обсидиановая статуя',
                            },
                            {
                                text: `200/35`,
                                alignment: 'center',
                            },
                            {
                                text: '0/3/3',
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: 'Обсидиановый разрушитель/Сфинкс',
                                italics: true,
                            },
                            {
                                text: `--`,
                                alignment: 'center',
                            },
                            {
                                text: '0/3/5',
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: 'Труповозка',
                            },
                            {
                                text: `230/50`,
                                alignment: 'center',
                            },
                            {
                                text: '2/3/3',
                                alignment: 'center',
                            },
                        ],
                    ]
                },
                alignment: 'left',
            },
            getTipText([
                quickTextFormat(`Поганище/Мерзость/Мясника не я пропустил - в оригинальном документе его в этой таблице нет.`),
            ]),
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
                                text: 'Некрополь',
                            },
                            {
                                text: `255`,
                                alignment: 'center',
                            },
                            {
                                text: `12`,
                                alignment: 'center',
                            },
                            {
                                text: '0/0/1',
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: '- Чертоги Мертвых',
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
                                text: '1/1/2',
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: '- Темная Цитадель',
                                italics: true,
                            },
                            {
                                text: `325/230`,
                                alignment: 'center',
                            },
                            {
                                text: `14`,
                                alignment: 'center',
                            },
                            {
                                text: '2/2/3',
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: 'Склеп',
                            },
                            {
                                text: `200/50`,
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
                                text: 'Зиккурат',
                            },
                            {
                                text: `150/50`,
                                alignment: 'center',
                            },
                            {
                                text: `5`,
                                alignment: 'center',
                            },
                            {
                                text: '1/1/-8',
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: '- Башня Духов',
                                italics: true,
                            },
                            {
                                text: `145/40`,
                                alignment: 'center',
                            },
                            {
                                text: `3`,
                                alignment: 'center',
                            },
                            {
                                text: '1/2/1',
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: '- Башня Неруба',
                                italics: true,
                            },
                            {
                                text: `100/20`,
                                alignment: 'center',
                            },
                            {
                                text: `3`,
                                alignment: 'center',
                            },
                            {
                                text: '1/1/2',
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: 'Кладбище',
                            },
                            {
                                text: `215/0`,
                                alignment: 'center',
                            },
                            {
                                text: `8`,
                                alignment: 'center',
                            },
                            {
                                text: '0',
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: 'Бойня',
                            },
                            {
                                text: `140/135`,
                                alignment: 'center',
                            },
                            {
                                text: `6`,
                                alignment: 'center',
                            },
                            {
                                text: '0/1/1',
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: 'Храм Проклятых',
                            },
                            {
                                text: `155/140`,
                                alignment: 'center',
                            },
                            {
                                text: `6`,
                                alignment: 'center',
                            },
                            {
                                text: '2/0/0',
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: 'Жертвенник',
                            },
                            {
                                text: `75/150`,
                                alignment: 'center',
                            },
                            {
                                text: `5`,
                                alignment: 'center',
                            },
                            {
                                text: '0',
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: 'Костяной завод',
                            },
                            {
                                text: `175/200`,
                                alignment: 'center',
                            },
                            {
                                text: `8`,
                                alignment: 'center',
                            },
                            {
                                text: '2/0/0',
                                alignment: 'center',
                            },
                        ],
                    ]
                },
                alignment: 'left',
            },
            '\n',
            {
                table: { // Улучшения атаки / Улучшения защиты
                    widths: ['*', 'auto', 50, '*', 'auto', 50],
                    body: [
                        [
                            {
                                text: 'Улучшения атаки',
                                style: 'header4'
                            },
                            {
                                text: 'Бонус',
                                bold: true,
                                alignment: 'center',
                            },
                            {
                                text: 'Цена\n(З/Д)',
                                bold: true,
                                alignment: 'center',
                            },
                            {
                                text: 'Улучшения защиты',
                                style: 'header4'
                            },
                            {
                                text: 'Бонус',
                                bold: true,
                                alignment: 'center',
                            },
                            {
                                text: 'Цена\n(З/Д)',
                                bold: true,
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: 'Меньшее',
                            },
                            {
                                text: `+1 урон`,
                                alignment: 'center',
                            },
                            {
                                text: '+10/+2',
                                alignment: 'center',
                            },
                            {
                                text: 'Меньшее',
                            },
                            {
                                text: `+1 урон`,
                                alignment: 'center',
                            },
                            {
                                text: '+10/+2',
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: 'Большее',
                            },
                            {
                                text: `+2 урон`,
                                alignment: 'center',
                            },
                            {
                                text: '+20/+5',
                                alignment: 'center',
                            },
                            {
                                text: 'Большее',
                            },
                            {
                                text: `+2 урон`,
                                alignment: 'center',
                            },
                            {
                                text: '+15/+5',
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: 'Легендарное',
                            },
                            {
                                text: `+3 урон`,
                                alignment: 'center',
                            },
                            {
                                text: '+40/+10',
                                alignment: 'center',
                            },
                            {
                                text: 'Легендарное',
                            },
                            {
                                text: `+3 урон`,
                                alignment: 'center',
                            },
                            {
                                text: '+30/+10',
                                alignment: 'center',
                            },
                        ],
                    ]
                },
                alignment: 'left',
            },
            '\n',
            quickTextFormat(`*Улучшения бывают двух видов: "Нечестивая сила" - чары, усиливающие Нежить, и "Чудовищная мощь" - похожие чары для не-Нежити.*`),
            '\n',
            getTipText([
                quickTextFormat(`Бонус к урону для улучшений защиты - не моя идея, а ошибка, пришедшая прямиком из оригинала.`),
                quickTextFormat(`**В рамках перевода оставлено как есть**.`),
            ]),
        ];
    }

    return [
        {
            text: 'Плеть Нежити (The Undead Scourge)',
            style: 'header2',
            pageBreak: 'before',
            tocItem: true,
            tocMargin: [tocParagraphOffset, 0, 0, 0],
        },
        getUndeadScourgeUnitsContent(),
        getUndeadScourgeCostsContent(),
    ];
}

module.exports = function getUnitsBuildingsGearContent() {
    return [
        {
            text: 'Юниты, Здания и Снаряжение (Units, Buildings and Gear)',
            style: 'header1',
            pageBreak: 'before',
            tocItem: true,
            tocStyle: { bold: true, fontSize: 16, },
        },
        getTitleContent(),
        getAllianceContent(),
        getHordeContent(),
        getSentinelsContent(),
        getUndeadScourgeContent(),
    ];
};