const { States, StatesTranslations, Skills, SkillsTranslations, Hindrances, HindrancesTranslations, Ranks, RanksTranslations, Edges, EdgesTranslations, Powers, PowersTranslations, } = require('../settingTranslations');
const { paragraphOffset, getFontPath, getImagePath, quickTextFormat, getTipText, getHorizontalLine, getFromDict, } = require('../commonFunctions');

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
                quickTextFormat(`**Магия дракона (Dragon Magic)**: Пункты Силы 20/30; Силы: 3/4 из списка: *${getFromDict(PowersTranslations, Powers.Barrier)}*, *${getFromDict(PowersTranslations, Powers.BoostLowerTrait)}*, *${getFromDict(PowersTranslations, Powers.DetectConcealArcana)}*, *${getFromDict(PowersTranslations, Powers.FarSight)}*, *${getFromDict(PowersTranslations, Powers.ManaBurn)}*, *${getFromDict(PowersTranslations, Powers.MindReading)}*`),
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
                quickTextFormat(`**Магия дракона (Dragon Magic)**: Пункты Силы 20/30; Силы: 3/4 из списка: *${getFromDict(PowersTranslations, Powers.Deflection)}*, *${getFromDict(PowersTranslations, Powers.MindReading)}*, *${getFromDict(PowersTranslations, Powers.Obscure)}*, *${getFromDict(PowersTranslations, Powers.Puppet)}*, *${getFromDict(PowersTranslations, Powers.Stun)}*, *${getFromDict(PowersTranslations, Powers.EtherealForm)}*`),
                quickTextFormat(`**Эфирный (Ethereal)**: Как хранители Изумрудного Сна (Emerald Dream), зеленые драконы могут становиться эфирными (ethereal) по своему желанию. Будучи эфирными, они могут соскользнуть (slip sideways) в Изумрудный Сон.`),
            ],
            offset: paragraphOffset,
        }),
        getUnitContent({
            isWildCard: false,
            title: 'Красный дракон (Red Dragon)',
            notSpecialAbilities: [
                quickTextFormat(`**Тип дыхания (Breath Weapon)**: Поток огня. Пламя красного дракона обновляет и восстанавливает природу в пораженной области.`),
                quickTextFormat(`**Магия дракона (Dragon Magic)**: Пункты Силы 10/25; Силы: 2/4 из списка: *${getFromDict(PowersTranslations, Powers.Armor)}*, *${getFromDict(PowersTranslations, Powers.BoostLowerTrait)}*, *${getFromDict(PowersTranslations, Powers.Dispel)}*, *${getFromDict(PowersTranslations, Powers.Healing)}*, *${getFromDict(PowersTranslations, Powers.MindReading)}*, *${getFromDict(PowersTranslations, Powers.Puppet)}*, *${getFromDict(PowersTranslations, Powers.Summon)} (Животные (Animals))*`),
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
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Магия (Magic))**: ${getFromDict(EdgesTranslations, Edges.Wizard)}, ${getFromDict(EdgesTranslations, Edges.Warlock)} (предпочитает заклинания воды, льда и молнии, призывает морских элементалей)`),
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
                quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Immunity)}**: Магия контроля разума (Mind-controlling magic) и ${getFromDict(PowersTranslations, Powers.Blight)} не действуют на нерубов.`),
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
                quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Некромантия (Necromancy))**: Пункты Силы – 15; Заклинания: *${getFromDict(PowersTranslations, Powers.Zombie)}*, *${getFromDict(PowersTranslations, Powers.Dispel)}*, *${getFromDict(PowersTranslations, Powers.ContinuousBlast)} (Рой падальщиков (carrion swarm))*`),
                quickTextFormat(`**Когти (Claws)**: **Сила+1**.`),
                quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Fearless)}**`),
                quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Immunity)}**: Магия контроля разума (Mind-controlling magic) и ${getFromDict(PowersTranslations, Powers.Blight)} не действуют на нерубов.`),
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
                quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Прядильщик Сетей (Webspinner))**: Пункты Силы – 20; Техники: *${getFromDict(PowersTranslations, Powers.Paralyze)}*, *${getFromDict(PowersTranslations, Powers.Barrier)}*, *${getFromDict(PowersTranslations, Powers.Fly)} (Сбрасывание паутины (web-drop))*`),
                quickTextFormat(`**Когти (Claws)**: **Сила+1**.`),
                quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Fearless)}**`),
                quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Immunity)}**: Магия контроля разума (Mind-controlling magic) и ${getFromDict(PowersTranslations, Powers.Blight)} не действуют на нерубов.`),
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
                    quickTextFormat(`**Тайная магия (Arcane Magic)**: ${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Тайная магия (Arcane Magic)), ${getFromDict(EdgesTranslations, Edges.SoulDrain)}, ${getFromDict(EdgesTranslations, Edges.Warlock)}`),
                    {
                        ul: [
                            quickTextFormat(`**Пункты Силы**: 20`),
                            quickTextFormat(`**Заклинания**: *${getFromDict(PowersTranslations, Powers.Smite)}*, 2-3 *Призыва (${Powers.Summon})*, *${getFromDict(PowersTranslations, Powers.Blast)}*, *${getFromDict(PowersTranslations, Powers.Bloodlust)}* и *${getFromDict(PowersTranslations, Powers.OffensiveArmor)} (Огненный щит (fire shield))*`),
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
                    quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Магия (Magic))**: ${getFromDict(EdgesTranslations, Edges.Warlock)}`),
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
                quickTextFormat(`***Метание (Fling)***: *Некоторые Илистые Чудовища могут метать слизь как атаку с **Силой+1** с дальностью 3/6/12 и силой ${getFromDict(PowersTranslations, Powers.Slow)}.*`),
                quickTextFormat(`**Яд замедления (Slow Poison)**: Если цель атаки Илистого Чудовища проваливает проверку Выносливости со штрафом -2, она замедляется (как при использовании Силы ${getFromDict(PowersTranslations, Powers.Slow)}).`),
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
                quickTextFormat(`**${getFromDict(PowersTranslations, Powers.ManaBurn)}**:  По желанию Гончие Скверны могут выпустить *Стрелу Сжигания Маны (Mana Burn Bolt)*.`),
                quickTextFormat(`**Чувство магии (Smell Magic)**: Гончие Скверны всегда *обнаруживают магию (detect arcana)* при Выслеживании (${Skills.Tracking}).`),
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
            title: 'Страж Рока/Привратник Ада (Doom Guard)',
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
                    `*${getFromDict(PowersTranslations, Powers.ContinuousBlast)}*`,
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
                    `*${getFromDict(PowersTranslations, Powers.Doom)}*`,
                    `*${getFromDict(PowersTranslations, Powers.Smite)}*`,
                    `*${getFromDict(PowersTranslations, Powers.Summon)}*`,
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
                    `${getFromDict(EdgesTranslations, Edges.DarkRitual)}`,
                    `Украсть магию (Steal Magic)`,
                    `${getFromDict(EdgesTranslations, Edges.SpellAura)}`,
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

module.exports = function getBestiaryContent() {
    return [
        {
            text: 'Бестиарий Warcraft (Bestiary of Warcraft)',
            style: 'header1',
            pageBreak: 'before',
        },
        getCreepsContent(),
        getBurningLegionContent(),
    ];
};