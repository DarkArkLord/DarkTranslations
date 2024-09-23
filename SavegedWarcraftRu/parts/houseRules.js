const { States, StatesTranslations, Skills, SkillsTranslations, Hindrances, HindrancesTranslations, Ranks, RanksTranslations, Edges, EdgesTranslations, Powers, PowersTranslations, } = require('../settingTranslations');
const { paragraphOffset, getFontPath, getImagePath, quickTextFormat, getTipText, getHorizontalLine, getFromDict, } = require('../commonFunctions');

module.exports = function getHouseRulesContent() {
    return [
        {
            text: 'Приложение - Домашние Правила (Appendix - House Rules)',
            style: 'header1',
            pageBreak: 'before',
        },
        {
            stack: [
                quickTextFormat(`Здесь представлено несколько домашних правил из нашей оригинальной кампании Warcraft. Мы обнаружили, что они полезны для отображения некоторых важных нюансов сеттинга. Используйте их, если они вам нравятся. Если не нравятся - не используйте. Ни одно из них не является обязательным для Savaged Warcraft.`, { leadingIndent: paragraphOffset, }),
                {
                    text: 'Телесные раны (Flesh Wounds)',
                    style: 'header4',
                },
                quickTextFormat(`*Это правило имитирует быструю игру в Warcraft, в которой нужно продолжать наносить удары, даже если вас бьют.*`, { leadingIndent: paragraphOffset, }),
                quickTextFormat(`Вместо того, чтобы получить Шок (Shaken) после удара в бою, персонажи получают Телесную рану (Flesh Wound). Персонаж с Телесной раной (Flesh Wound), который получает еще одну Телесную рану (Flesh Wound), получает вместо этого Ранение (Wound), но в остальном Телесные раны (Flesh Wounds) не имеют никакого эффекта. С другой стороны, они исчезают только при медицинском лечении какого-либо рода (три раунда и успешная проверка Исцеления (Healing check) или магические средства исцеления).`, { leadingIndent: paragraphOffset, }),
                quickTextFormat(`Использование этого правила влияет на следующие правила и Черты:`, { leadingIndent: paragraphOffset, }),
                {
                    ul: [
                        quickTextFormat(`Эффекты, в которых указано "Оглушает Статистов (Stuns Extras)", также заставляют Дикие Карты (Wild Cards) получить Шок (Shaken).`),
                        quickTextFormat(`${getFromDict(EdgesTranslations, Edges.Command)} и ${getFromDict(EdgesTranslations, Edges.Inspire)} добавляют свои бонусы к броскам атаки вместо проверок Духа, для избегания Шока (Shaken).`),
                        quickTextFormat(`${getFromDict(EdgesTranslations, Edges.CombatReflexes)} позволяют персонажу "стряхнуть (shake off)" Телесную рану (Flesh Wound) проверкой Выносливости с -2. На это тратится действие, однако при Подъеме персонаж может действовать в том же раунде.`),
                    ],
                    margin: [paragraphOffset, 0, 0, 0],
                },
                getTipText([
                    quickTextFormat(`По поводу **"Stuns Extras"**. В английских книгах я вообще такого термина не нашел. Однако английская фраза *"more detailed than common guards, minions, or lackeys—collectively called "**Extras**.""* в Дневнике Авантюриста переведена как *"продуманы лучше, чем третий стражник слева, очередной помощник злодея или молчаливый лакей — персонажи второго плана, которые названы **статистами**"*. Нас интересует конкретное слово "**Extras**" - "**Статисты**". Слово "**Stuns**" переводится как "**Оглушает**", складываем одно с другим ну и собственно вот.`),
                ]),
                {
                    text: 'Сосредоточенный огонь (Focused Fire)',
                    style: 'header4',
                },
                quickTextFormat(`*Это правило имитирует тактику сосредоточенного огня из компьютерной игры.*`, { leadingIndent: paragraphOffset, }),
                quickTextFormat(`Если все члены отряда имеют черту ${getFromDict(EdgesTranslations, Edges.Marksman)}, они могут отказаться от бонуса черты ${getFromDict(EdgesTranslations, Edges.Marksman)}, чтобы сфокусировать огонь (Focus Fire) на одной цели. Они получают бонус Объединения сил (Ganging Up) для дистанционных атак против этой цели в этом раунде.`, { leadingIndent: paragraphOffset, }),
                {
                    text: 'Выбор войск (Select Troops)',
                    style: 'header4',
                },
                quickTextFormat(`*Это правило ничего не добавляет к колориту Warcraft, но это забавное дополнение к любой игре, где командование регулярными войсками является обычным явлением. Это немного замедляет ход событий, но только когда у вас есть время на дополнительные детали.*`, { leadingIndent: paragraphOffset, }),
                quickTextFormat(`Персонажи с Лидерскими Чертами (Leadership Edges) получают небольшое преимущество при наборе войск, поскольку они знают, что ищут. Когда у персонажа есть возможность выбирать, какие войска он будет возглавлять, он может отсеять некоторые из худших "проблемных случаев". При составлении случайных союзников игрок может сместить бросок вверх или вниз на 1 очко за каждую Лидерскую Черту, которой он обладает.`, { leadingIndent: paragraphOffset, }),
                quickTextFormat(`GM имеет право отменить это правило в любой момент, когда персонаж застрял с теми войсками, которые у него есть, и всё. Точка. Это часто случается, когда он возглавляет восстания и тому подобное, но даже обычные военные офицеры время от времени "застревают" с тем, что им выделяет штаб (**Грязная дюжина** - отличный пример).`, { leadingIndent: paragraphOffset, }),
            ],
        },
    ];
};