const { States, StatesTranslations, Skills, SkillsTranslations, Hindrances, HindrancesTranslations, Ranks, RanksTranslations, Edges, EdgesTranslations, Powers, PowersTranslations, } = require('../settingTranslations');
const { paragraphOffset, tocParagraphOffset, getFontPath, getImagePath, quickTextFormat, getTipText, getHorizontalLine, getFromDict, } = require('../commonFunctions');
const { getUnitContent, getUnitAttributesContent, getUnitSkillsContent, getUnitCommonAttributesContent, } = require('../unitsContentFunctions');

function getAdventureText() {
    return [
        quickTextFormat(`Это один из немногих и прерывистых периодов мира на Азероте, передышка между войнами, охватившими мир с момента открытия Темного портала почти двадцать лет назад. Но в этом мире появляется звенящая нота раздора. Аванпост был потерян, и подозревается предательство. Теперь отважные герои должны отправиться туда и выяснить, что произошло, задаваясь вопросом, можно ли доверять собственным товарищам.`, { leadingIndent: paragraphOffset, }),
        quickTextFormat(`"Враг Моего Врага..." — это приключение для конверсии **Savaged Warcraft** для **Savage Worlds**. Поскольку в нем довольно много крупномасштабных массовых сражений, рекомендуется, чтобы GM имел опыт игры в Savage Worlds и, как минимум, поверхностное знакомство с Warcraft. Приключение рассчитано на группу из 3-6 высокоуровневых героев, желательно, чтобы они были представителями хотя бы одной из трех основных фракций (Альянс, Орда и Стражи). Для любителей **Warcraft**: это приключение происходит через несколько месяцев после обороны горы Хиджал, между *Reign of Chaos* и *The Frozen Throne*. Три армии живых заключили шаткое перемирие, постоянно оглядываясь на север и на угрозу Короля-лича.`, { leadingIndent: paragraphOffset, }),
        quickTextFormat(`На выбор игроков предоставляется несколько персонажей, созданных по образу Героев компьютерной игры **Warcraft III**. Если вы хотите создать своих собственных персонажей, рекомендуется, чтобы они были развиты хотя бы до ранга ${getFromDict(RanksTranslations, Ranks.Veteran)} (заранее созданные персонажи собраны на 55 очков опыта каждый). Затем они могут выбрать один из элитных отрядов (45+ очков) в качестве компаньона. Герои должны получить любую базовую экипировку, необходимую для их персонажа, а их оружие и броня должны быть улучшены дважды по соответствующей фракционной таблице. Компаньоны должны получить два повышения уровня из своих характеристик и иметь одно улучшение для оружия и брони.`, { leadingIndent: paragraphOffset, }),
        {
            text: `Что происходит (What's Going On)`,
            style: 'header4',
            tocItem: true,
            tocMargin: [tocParagraphOffset, 0, 0, 0],
        },
        quickTextFormat(`После того, как родина Ночных Эльфов - гора Хиджал была спасена совместными силами Альянса, Орды и Стражей, три фракции объединились, чтобы защитить себя от дальнейших вторжений Короля-лича и его демонических союзников. Собрав силы, они отправили средний гарнизон, чтобы основать аванпост на берегах северного континента - Нордскола. Около трех месяцев значительных проблем не было, однако около недели назад из аванпоста перестали прилетать почтовые птицы. Поскольку все фракции поддерживали контакт только со своими представителями, каждая из них подозревает предательство со стороны остальных.`, { leadingIndent: paragraphOffset, }),
        quickTextFormat(`На самом деле, Король-лич наконец узнал об аванпосте и отправил двух своих лейтенантов разобраться с ним. Арак-арахм (Arak-arahm), древний Лорд Склепа (Crypt Lord), воспользовался этой возможностью, чтобы убить двух зайцев одним выстрелом. Королева Улья (Hive Queen) изгнала Арак-арахма, когда он осмелился предложить сотрудничество с Королем-личом. Более того, она сумела отразить все атаки армий Короля-лича. Арак-арахм пленил Королеву Улья при помощи темной магии и с тех пор манипулирует ульем нерубов. Он послал их атаковать аванпост, предполагая, что южные силы были в союзе с Королем-личом.`, { leadingIndent: paragraphOffset, }),
        getTipText([
            quickTextFormat(`В оригинале фраза звучит как: *"He sent them to attack the outpost, suggesting that the southern forces were allied with the Lich King"*. Не совсем понятно, почему **лейтенант Короля-лича** послал своих войнов на аванпост, который, **по его мнению** был **в своюзе с Королем-личем**. Либо под ледяными берегами вспыхнул бунт, либо *"Южными силами (southern forces)"* именуется второй лейтенант и не особо понятно, зачем он тут упомянут. В любом случае, фраза выглядит кривовато.`),
            quickTextFormat(`**В рамках перевода оставлено как есть.**`),
        ]),
        quickTextFormat(`Второй лейтенант — рыцарь смерти по имени Дункан Блэкроуз, человек, продавший свою душу Королю-личу ради силы. Он собрал армию нежити, которая ждет своего часа в качестве запасного варианта. Блэкроуз не против мести Арак-арахма, но считает его ненадежным и готов вмешаться для обеспечения успеха миссии.`, { leadingIndent: paragraphOffset, }),
        {
            text: 'Вступление (Introduction)',
            style: 'header4',
            tocItem: true,
            tocMargin: [tocParagraphOffset, 0, 0, 0],
        },
        quickTextFormat(`Персонажей игроков вызывают на совет с лидерами армий Калимдора: Джайной Праудмур, человеческой волшебницей, командующей силами Альянса; Траллом, освободителем орочьей Орды; и Тирандой Шелест Ветра, жрицей Элуны и основательницей Стражей. Все трое сидят во главе стола для брифингов, что является необычным проявлением солидарности. Вместе они объяснят персонажам игроков ситуацию с аванпостом и ответят на любые вопросы, на которые смогут ответить. Затем персонажей игроков назначают командовать экспедицией для выяснения судьбы аванпоста, а также для его укрепления и удержания против сил Короля-лича. Каждый из персонажей должен выбрать доверенного лейтенанта, который отправится с ним в путешествие и лучше всего подойдет для командования отрядом солдат (персонаж с наибольшим количеством Лидерских Черт). У каждой фракции есть два отряда, и игроки путем совместных обсуждений должны выбрать, какой отряд возьмет с собой каждый из них. Желательно, чтобы это был внутриигровой спор между персонажами. Джайна, Тралл и Тиранда вмешаются только чтобы напомнить персонажам о необходимости набора сбалансированных войск, включащих в себя бойцов ближнего и дальнего боя, подходящих для защиты форта в ледяных дебрях Нордскола.`, { leadingIndent: paragraphOffset, }),
        {
            text: 'Слухи о предательстве (Rumors of Treachery)',
            style: 'header4',
            tocItem: true,
            tocMargin: [tocParagraphOffset, 0, 0, 0],
        },
        quickTextFormat(`Когда все вопросы решены, лидеры отпускают Героев, сообщая, что экспедиция отправляется в Нордскол утром. Позвольте игрокам сделать любые приготовления, которые они считают необходимыми, например, собрать дополнительное снаряжение для приключений (экспедиция уже подготовила достаточно еды и средств связи).`, { leadingIndent: paragraphOffset, }),
        quickTextFormat(`В это время к каждому игроку обратится один из членов его фракции, просящий о личной встрече. К силам Альянса обращается седой одноглазый рыцарь, к членам Орды — изуродованный шаман-орк, а к Стражам — темнобровый друид в медвежьей шкуре Ордена Когтя (Order of the Talon). Независимо от говорящего, игрокам укажут на возможность предательства и на различные причины для подлости союзников. Альянс с наибольшим подозрением относится к Орде, Орда опасается Альянса, а Стражи не доверяют никому из этих чужеземцев.`, { leadingIndent: paragraphOffset, }),
        {
            text: 'Длинное путешествие (A Long Journey)',
            style: 'header4',
            tocItem: true,
            tocMargin: [tocParagraphOffset, 0, 0, 0],
        },
        quickTextFormat(`Группа садится на большой гномий пароход и отправляется в Нордскол. Путешествие занимает неделю и дает группе возможность лучше узнать друг друга. Это своеобразное удовольствие: на корабле тесно, и у каждой расы есть привычки, раздражающие другие. У Альянса долгая история недоверия и ненависти к Орде, а если в группе есть Высшие Эльфы, Ночные Эльфы найдут их присутствие таким же неприятным, как технологии Альянса. Пищевые привычки Орды считаются неприятными для большинства других рас (орки и тролли — плотоядные, с пристрастием к мясу с кровью). Стражи просто бесят своим высокомерием и снисходительностью.`, { leadingIndent: paragraphOffset, }),
        quickTextFormat(`В остальном путешествие проходит без происшествий, и через неделю группа прибывает к аванпосту.`, { leadingIndent: paragraphOffset, }),
        {
            text: 'Холодный прием (A Cold Welcome)',
            style: 'header4',
            tocItem: true,
            tocMargin: [tocParagraphOffset, 0, 0, 0],
        },
        quickTextFormat(`Корабль останавливается и готовится отправить паровой катер к аванпосту. Издалека сооружения аванпоста кажутся неповрежденными, и все выглядит хорошо. Единственная странность — отсутствие какой-либо активности в лагере и (если игроки спросят) отсутствие дыма из труб, несмотря на то, что температура около -15˚C (5˚F).`, { leadingIndent: paragraphOffset, }),
        quickTextFormat(`Катер небольшой и не может вместить всех солдат сразу. Он может безопасно перевозить восемь человек одновременно (Таурены и Дети Кенария считаются за полтора, а ездовые животные считаются отдельно от своих хозяев). Игрокам нужно решить, в каком порядке они будут переправлять свои войска. Паровому катеру требуется три раунда, чтобы совершить путешествие от корабля до берега и столько же на обратный путь.`, { leadingIndent: paragraphOffset, }),
        quickTextFormat(`Как только первая группа высадится на берег, причина жуткой тишины и отсутствия связи с аванпостом станет очевидной. Землю усеивают тела, замороженные почти до костей. Все они — солдаты разных рас, и лежат они так, как показано на карте (розовое "тело" обозначает Альянс (Человек или Дворф), зеленое — Орду (Орк или Тролль), а фиолетовое — Ночных Эльфов. Первоначальный гарнизон представлял собой смесь этих пяти рас. Все тела вооружены, одеты в доспехи и обращены друг к другу группами, как будто нападают друг на друга. Дальнейший осмотр (и успешный бросок на ${getFromDict(SkillsTranslations, Skills.Notice)}) покажет, что каждый из них погиб от сильного укола или удара.`, { leadingIndent: paragraphOffset, }),
        quickTextFormat(`Любое осматриваемое здание будет пустым и, по-видимому, заброшенным в спешке. Все здания сохранили свои основные удобства, однако в Лесопилке (War Mill) или Казармах (Barracks) нет никакого дополнительного снаряжения. В Командном пункте (Command Post) есть три клетки с почтовыми птицами, журнал, показывающий, что гарнизон был хорошо подготовлен, но никаких явных угроз не было, и Анкх Возвращения в Город (Ankh of Town Return). Это магическое устройство телепортирует группу любого размера обратно в Командный пункт.`, { leadingIndent: paragraphOffset, }),
        quickTextFormat(`Кто-то в группе может догадаться обыскать область, чтобы узнать, кто напал на аванпост. Успешный бросок Внимания (${Skills.Notice}) или Выслеживания (${Skills.Tracking}) покажет, что земля вокруг тел необычно взрыта. Подъем при броске покажет наличие странных следов существа с шипастыми ногами. Если кто-то делающий проверку специально изучает ледник (Glacier), он заметит похожие следы, спускающиеся тремя линиями с его вершины. Проверка Общедоступных знаний (Common Knowledge) с -4 наводит на мысль о пауках-нежити, известных как Могильные Дьяволы/Могильщики (Crypt Fiends). Однако Подъем на броске (или проверка Знания (${Skills.Knowledge}) (Нежить (Undead))) обратит внимание на то, что трупы не съедены и не подают признаков реанимирования. Оба факта необычны для сил нежити.`, { leadingIndent: paragraphOffset, }),
        {
            text: 'Засада! (Ambush!)',
            style: 'header4',
            tocItem: true,
            tocMargin: [tocParagraphOffset, 0, 0, 0],
        },
        quickTextFormat(`Нерубские силы зарылись в землю и ждут в позициях, отмеченных пауками на карте. Когда кто-либо из группы объявляет об обнаружении чего-либо, начинает возводить оборонительные сооружения или пытается открыть главные ворота, нерубы выпрыгивают из-под земли и атакуют. Бросайте на неожиданность для группы, если только их не предупредили заранее не привлекая внимания. На территории находятся двадцать Нерубских Солдат (Nerubian Soldiers), с пятью Прядильщиками Сетей (Webspinners), распределенными по группам.`, { leadingIndent: paragraphOffset, }),
        quickTextFormat(`Вступив в бой, Солдаты сначала попытаются подавить самые слабые цели чтобы получить численное преимущество. Затем они начнут объединяться против более серьезных угроз. Прядильщики Сетей попытаются обездвижить более серьезные угрозы с помощью своих сетей, сначала сфокусировавшись на летающих войсках, затем на заклинателях, а затем на конных отрядах. Как только они обездвижат все эти угрозы, они начнут убивать обездвиженные войска с помощью находящихся поблизости Солдат.`, { leadingIndent: paragraphOffset, }),
        quickTextFormat(`Если все Прядильщики Сетей или половина Солдат убиты, сделайте проверку на ${getFromDict(SkillsTranslations, Skills.Guts)} для оставшихся войск. При провале проверки они организованно отступают на ледник, а оттуда обратно в свой улей (см. **Поймать паука (To Catch a Spider)** ниже). Если остались какие-либо летающие отряды, арьергард из одного Прядильщика Сетей и четырех Солдат попытается приземлить их перед отступлением.`, { leadingIndent: paragraphOffset, }),
        {
            text: 'Последствия (Aftermath)',
            style: 'header4',
            tocItem: true,
            tocMargin: [tocParagraphOffset, 0, 0, 0],
        },
        quickTextFormat(`После победы над нерубами партия может продолжить исследование аванпоста и выяснить, что же произошло. После битвы с нерубами становится совершенно очевидно, что раны на телах бывшего гарнизона были нанесены их острыми ногами. Дальнейшее исследование покажет, что несколько Ферм (Farms) прямо за пределами стен гарнизона были разграблены, а жители убиты и брошены на местах собственной смерти. ${getFromDict(SkillsTranslations, Skills.Tracking)} покажет след нерубов, идущий на северо-восток. Исследуя лес, персонажи обнаружает небольшую поляну, на которой лежит Древний (Ancient), посланный ухаживать за Ночными Эльфами, убитый каким-то морозным оружием (frost-weapon) (палашом Рыцаря Смерти — он убил его перед атакой).`, { leadingIndent: paragraphOffset, }),
        quickTextFormat(`Любой успешно прошедший проверку Общедоступных знаний (Common Knowledge) и подумавший о Могильных Дьяволах/Могильщиках (Crypt Fiends), заметит сходство, но осмотр трупа неруба покажет, что это было явно живое существо, а не нежить: очевидно, что эти те существа, которые превращаются в Могильных Дьяволов/Могильщиков (Crypt Fiends) после оживления Королем-личем.`, { leadingIndent: paragraphOffset, }),
        quickTextFormat(`Говоря о Короле-личе, персонажи должны пройти проверку Общедоступных знаний (Common Knowledge). Успех означает, что им нужно избавиться от трупов. Пока они не разложились, некромант может поднять их в качестве скелетов.`, { leadingIndent: paragraphOffset, }),
        quickTextFormat(`Если есть выжившие нерубы, их можно взять в плен, и они не будут сражаться, если их держать в безопасном месте (в Командном пункте есть полдюжины камер). Существует 1 шанс из 6, что любой Солдат будет достаточно знать язык Лордерона (считающийся общим языком), чтобы быть допрошенным; все Прядильщики Сетей (Webspinners) ломано говорят на этом языке. Если их допросить, они скажут, что их госпожа "поддерживает Азжол-Неруб, и не склонится перед вашим союзником". Если надавить, станет ясно, что, по их мнению, партия в союзе с Королем-личом. Независимо от того, какие доказательства обратного будут предоставлены, нерубы продолжают считать партию союзниками Короля-лича. Они не раскроют местонахождение своего улья, сказав только, что оно находится поблизости и слишком искусно спрятано, чтобы его можно было найти.`, { leadingIndent: paragraphOffset, }),
        {
            text: 'Поймать паука (To Catch a Spider)',
            style: 'header4',
            tocItem: true,
            tocMargin: [tocParagraphOffset, 0, 0, 0],
        },
        quickTextFormat(`Вероятно, партия захочет проследить за нерубами до их логова (если нет - пусть нерубы атакуют еще пару раз, пробираясь через дыры в обороне ночью — они вряд ли победят, но это должно доставлять персонажам беспокойство). Когда игроки наконец отправятся за нерубами, им нужно будет разделить свои силы, так как оставлять форпост без защиты глупо с тактической точки зрения. В идеале персонажи будут действовать в одиночку или с поддержкой некоторых своих спутников, оставляя войска и по крайней мере одного спутника удерживать гарнизон. В качестве альтернативы один или несколько персонажей могут добровольно остаться. Если это так, дайте оставшимся игрокам контроль над любыми союзниками, которые пойдут за нерубами.`, { leadingIndent: paragraphOffset, }),
        quickTextFormat(`Тропа от ледника до нерубского улья малозаметна, но проверка Выслеживания (${Skills.Tracking}) поможет ее найти. Тропа идет довольно прямо через засушливую тундру Нордскола, так что потребуется всего пять проверок Выслеживания (${Skills.Tracking}), чтобы идти по следу на протяжении 25 миль до нерубского улья. Эта область Нордскола довольно пустынна, но, если вы хотите добавить остроты, группа может встретить белых медведей (Polar Bears), ледяных или морозных Ревенантов/Выходцев с того света (Revenants) или охотничью группу Вендиго (Wendigo).`, { leadingIndent: paragraphOffset, }),
        {
            text: 'Заходите в мои залы... (Come Into My Parlor...)',
            style: 'header4',
            tocItem: true,
            tocMargin: [tocParagraphOffset, 0, 0, 0],
        },
        quickTextFormat(`Примерно через день пути группа выйдет на каменистую местность. Здесь идти по тропе становится сложнее (-2). Успех приведет персонажей к выступу, скрывающему вход в пещеру. Это проход в улей нерубов, и он охраняется двумя Солдатами.`, { leadingIndent: paragraphOffset, }),
        quickTextFormat(`Оказавшись внутри, отряд захочет пробраться в тронный зал. Им будут мешать отряды Нерубских Солдат (по 5-7 существ), которые будут атаковать в течение 2-3 раундов, а затем отступят по боковому туннелю. Любые туннели, не ведущие в тронный зал, будут удерживаться 10-12 Солдатами с дальнобойным оружием и будут заблокированы завалами, если защитники будут проигрывать. Нерубы попытаются по возможности атаковать из засады и в первую очередь сосредоточатся на союзниках персонажей, особенно на тех, кто слаб в ближнем бою.`, { leadingIndent: paragraphOffset, }),
        quickTextFormat(`К этому моменту должно быть очевидно, что персонажей ведут в тронный зал. Арак-арахм отдал приказ доставить туда персонажей живыми, желательно без союзников. Он ждет их в тронном зале вместе со своей элитной охраной из Могильных Дьяволов/Могильщиков (Crypt Fiends). Королева Улья тоже там, связанная паутиной на стене и Оглушенная (Stunned) для подчинения.`, { leadingIndent: paragraphOffset, }),
        quickTextFormat(`Как только персонажи окажутся в комнате, Могильные Дьяволы/Могильщики (Crypt Fiends) закроют все входы и нападут. Арак-арахм хочет убить персонажей и воскресить в качестве своих слуг, чтобы они повели свои войска в полномасштабную войну с нерубами. Если персонажи смогут освободить Королеву Улья, она будет сражаться на их стороне. Лорд склепа и его приспешники изучали возможности персонажей, поэтому они попытаются противостоять любым способностям, о которых знают. Они попытаются связать и ослабить каждого из персонажей (обычно атакуя 2-1 на 2-3 персонажа каждый раунд), а затем убить их для последующего воскрешения.`, { leadingIndent: paragraphOffset, }),
        {
            text: 'Новый союзник (A New Ally)',
            style: 'header4',
            tocItem: true,
            tocMargin: [tocParagraphOffset, 0, 0, 0],
        },
        quickTextFormat(`Если персонажи победят Лорда Склепа и освободят Королеву Улья, они получат ее благодарность. Она прикажет своим солдатам отпустить их и предупредит о том, что у Арак-арахма был союзник, один из "слуг Короля-лича". Он недавно был здесь и ушел, чтобы подготовить свои войска "на всякий случай". К этому времени Король-лич узнает о гибели своего слуги, из-за чего аванпост подвергнется серьезной опасности.`, { leadingIndent: paragraphOffset, }),
        quickTextFormat(`Если группа нашла Анкх Городского Портала (Ankh of Town Portal), настало прекрасное время его использовать. Если нет - Королева Улья способна отправить их обратно, но для этого требуется ритуал, занимающий несколько минут. Если игроки проницательны, они могут попросить Королеву Улья о помощи. Королева согласится, если ей дадут гарантию, что ни одна из представленных наций не станет захватывать территории, выходящие за границы аванпоста, и что в будущем она получит помощь, если Король-лич нападет на нее напрямую. В любом случае, ей потребуется время, чтобы собрать свои силы, а игрокам лучше всего вернутся на аванпост как можно скорее. Если игроки используют Анкх, они появятся около Командного пункта. Заклинание Королевы Улья менее удобно — оно переместит их за ворота гарнизона.`, { leadingIndent: paragraphOffset, }),
        {
            text: 'Никогда не поворачивайтесь спиной к павшему врагу (Never Turn Your Back on a Fallen Foe)',
            style: 'header4',
            tocItem: true,
            tocMargin: [tocParagraphOffset, 0, 0, 0],
        },
        quickTextFormat(`Дункан Блэкроуз был занят. Он украл небольшой прибрежный корабль, оставшийся со времен первой экспедиции, и заполнил его своей нежитью. Его план — подойти по морю, выставив флаг Альянса. Уловка должна сработать, по крайней мере, пока он не окажется достаточно близко, чтобы выпустить своих горгулий и захватить док (он сделает это только, если защитники покажутся подозрительными; если они примут корабль, он просто причалит). Оттуда он начнет полномасштабную атаку на аванпост, сберегая собственные силы для битвы с Героями.`, { leadingIndent: paragraphOffset, }),
        quickTextFormat(`Если в лагере не осталось ни одного игрока, сделайте бросок Массового сражения, чтобы определить, насколько успешно идет битва. У Блэкроуза армия на 908 очков, не считая его самого (он не вступит в битву, пока персонажи игроков не доберутся туда). Нежить получает бонус +2 за свою внезапную атаку, плюс преимущество в численности. Союзные войска получают бонус +1 за свои укрепления (или +2, если им было приказано сосредоточиться на удержании сооружений). Используйте результаты этого броска, чтобы создать правдоподобную ситуацию к моменту прибытия персонажей игроков. Если игроки возвращаются при помощи заклинания Королевы Улья, проведите два раунда расчетов Массового сражения до прибытия их персонажей.`, { leadingIndent: paragraphOffset, }),
        quickTextFormat(`Как только игроки прибудут, Блэкроуз попытается их уничтожить, вступив в битву с самым опасным и активируя ледяную ауру своего рунного меча (Сила *${getFromDict(PowersTranslations, Powers.Smite)}*). Если на него нападают несколько игроков, он отступит после пары раундов битвы и наложит *${getFromDict(PowersTranslations, Powers.Zombie)}* на максимально возможное количество трупов, поднимая Скелетов (Skeletons), чтобы пополонить ими свои войска, пока он направляет Поганищ/Мерзостей/Мясников (Abominations) на героев. В общем, для игроков это должна быть чертовски сложная битва, если только на их стороне не будет колоссальной удачи или превосходной тактики.`, { leadingIndent: paragraphOffset, }),
        {
            text: 'Подведение итогов (Wrapping Things Up)',
            style: 'header4',
            tocItem: true,
            tocMargin: [tocParagraphOffset, 0, 0, 0],
        },
        quickTextFormat(`Как только персонажи справятся с угрозой Дункана Блэкроуза, они смогут связаться со своими начальниками в Калимдоре и проинформировать их о ситуации. Их похвавят за достигнутые успехи, а также попросят остаться в аванпосте, чтобы защищаться от будущих нападений Короля-лича, и налаживать отношения с Королевой Улья и ее нерубами-мятежниками. Даже отказавшись от этой неоднозначной чести, они заведут друзей на высоких постах.`, { leadingIndent: paragraphOffset, }),
    ];
}

function getOppositionContent() {
    return [
        quickTextFormat(`Характеристики противников, с которыми столкнутся персонажи, приведены ниже. Некоторые из них перепечатаны из правил Savaged Warcraft для вашего удобства.`, { leadingIndent: paragraphOffset, }),
        getUnitContent({
            isWildCard: false,
            title: 'Неруб, Солдат (Nerubian, Soldier)',
            points: undefined,
            lines: [
                getUnitAttributesContent({
                    [States.Agility]: '10',
                    [States.Smarts]: '6',
                    [States.Spirit]: '8',
                    [States.Strength]: '8',
                    [States.Vigor]: '8',
                }),
                getUnitSkillsContent({
                    [Skills.Climbing]: '12',
                    [Skills.Fighting]: '8',
                    [Skills.Guts]: '10',
                    [Skills.Intimidation]: '8',
                    [Skills.Stealth]: '6',
                    [Skills.Throwing]: '8',
                }),
                quickTextFormat(`**Особые способности**: ${[
                    `Когти (Claws) (Сила+1)`,
                    `${getFromDict(EdgesTranslations, Edges.Fearless)}`,
                    `${getFromDict(EdgesTranslations, Edges.Immunity)}: контроль разума (mind control) и ${getFromDict(PowersTranslations, Powers.Blight)}`,
                    `${getFromDict(EdgesTranslations, Edges.Size)} +2`,
                ].join(', ')}`),
                getUnitCommonAttributesContent({
                    [States.Pace]: '8',
                    [States.Parry]: '6',
                    [States.Toughness]: '10 (8)',
                }),
                quickTextFormat(`**Снаряжение**: ${[
                    `Копья (Сила+2, 3/6/12)`,
                    `Хитиновая броня (+2)`,
                ].join(', ')}`),
            ],
        }),
        getUnitContent({
            isWildCard: false,
            title: 'Неруб, Прядильщик Сетей (Nerubian, Webspinner)',
            points: undefined,
            lines: [
                getUnitAttributesContent({
                    [States.Agility]: '10',
                    [States.Smarts]: '6',
                    [States.Spirit]: '8',
                    [States.Strength]: '8',
                    [States.Vigor]: '6',
                }),
                getUnitSkillsContent({
                    [Skills.Climbing]: '12',
                    [Skills.Fighting]: '6',
                    [Skills.Guts]: '10',
                    [Skills.Intimidation]: '8',
                    [Skills.Stealth]: '6',
                    [Skills.Throwing]: '8',
                    [Skills.Webbing]: '8',
                }),
                quickTextFormat(`**Особые способности**: ${[
                    `Когти (Claws) (Сила+1)`,
                    `${getFromDict(EdgesTranslations, Edges.Fearless)}`,
                    `${getFromDict(EdgesTranslations, Edges.Immunity)}: контроль разума (mind control) и ${getFromDict(PowersTranslations, Powers.Blight)}`,
                    `${getFromDict(EdgesTranslations, Edges.Size)} +2`,
                ].join(', ')}`),
                getUnitCommonAttributesContent({
                    [States.Pace]: '10',
                    [States.Parry]: '10',
                    [States.Toughness]: '10 (10)',
                }),
                quickTextFormat(`**Снаряжение**: ${[
                    `Копья (Сила+2, 3/6/12)`,
                ].join(', ')}`),
                quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Прядильщик Сетей (Webspinner))**: Пункты Силы - 20; Техники: ${[
                    `*${getFromDict(PowersTranslations, Powers.Paralyze)}*`,
                    `*${getFromDict(PowersTranslations, Powers.Barrier)}*`,
                    `*${getFromDict(PowersTranslations, Powers.Fly)} (Сбрасывание
паутины (web-drop))*`,
                ].join(', ')}`),
            ],
        }),
        getUnitContent({
            isWildCard: true,
            title: 'Королева Улья (Hive Queen)',
            points: undefined,
            lines: [
                getUnitAttributesContent({
                    [States.Agility]: '10',
                    [States.Smarts]: '10',
                    [States.Spirit]: '12',
                    [States.Strength]: '6',
                    [States.Vigor]: '10',
                }),
                getUnitSkillsContent({
                    [Skills.Climbing]: '10',
                    [Skills.Fighting]: '6',
                    [Skills.Intimidation]: '10',
                    [Skills.Notice]: '6',
                    [Skills.Persuasion]: '8',
                    [Skills.Spellcasting]: '12',
                    [Skills.Throwing]: '6',
                    [Skills.Webspinning]: '8',
                }),
                quickTextFormat(`**Черты**: ${[
                    `${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Магия (Magic))`,
                    `${getFromDict(EdgesTranslations, Edges.Wizard)}`,
                    `${getFromDict(EdgesTranslations, Edges.RapidRecharge)}`,
                    `${getFromDict(EdgesTranslations, Edges.SpellAura)}`,
                    `${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Прядильщик Сетей (Webspinner))`,
                    `${getFromDict(EdgesTranslations, Edges.Command)}`,
                    `${getFromDict(EdgesTranslations, Edges.NaturalLeader)}`,
                    `${getFromDict(EdgesTranslations, Edges.HoldTheLine)}`,
                ].join(', ')}`),
                quickTextFormat(`**Особые способности**: ${[
                    `Когти (Claws) (Сила+1)`,
                    `${getFromDict(EdgesTranslations, Edges.Fearless)}`,
                    `${getFromDict(EdgesTranslations, Edges.Immunity)}: контроль разума (mind control) и ${getFromDict(PowersTranslations, Powers.Blight)}`,
                    `${getFromDict(EdgesTranslations, Edges.Size)} +2`,
                ].join(', ')}`),
                getUnitCommonAttributesContent({
                    [States.Pace]: '8',
                    [States.Parry]: '5',
                    [States.Toughness]: '9',
                    [States.Charisma]: '-2',
                    [States.PowerPoints]: '25',
                }),
                quickTextFormat(`***Тайная Магия (Arcane Magic)***: ${[
                    `*${getFromDict(PowersTranslations, Powers.Blast)} (Рой пауков (Spider Swarm))*`,
                    `*${getFromDict(PowersTranslations, Powers.BoostLowerTrait)}*`,
                    `*${getFromDict(PowersTranslations, Powers.OffensiveArmor)} (Морозная броня (Frost Armor))*`,
                    `*${getFromDict(PowersTranslations, Powers.Smite)} (Мороз (Frost))*`,
                    `*${getFromDict(PowersTranslations, Powers.Teleport)}*`,
                ].join(', ')}`),
                quickTextFormat(`***Плетение паутины (Webspinning)***: ${[
                    `*${getFromDict(PowersTranslations, Powers.Barrier)}*`,
                    `*${getFromDict(PowersTranslations, Powers.Paralyze)}*`,
                ].join(', ')}`),
            ],
        }),
        getUnitContent({
            isWildCard: true,
            title: 'Арак-арахм (Arak-Arahm)',
            points: undefined,
            lines: [
                getUnitAttributesContent({
                    [States.Agility]: '8',
                    [States.Smarts]: '12',
                    [States.Spirit]: '10',
                    [States.Strength]: '8',
                    [States.Vigor]: '10',
                }),
                getUnitSkillsContent({
                    [Skills.Climbing]: '18',
                    [Skills.Fighting]: '8',
                    [Skills.Intimidation]: '10',
                    [Skills.Notice]: '12',
                    [Skills.Spellcasting]: '12',
                    [Skills.Taunt]: '8',
                }),
                quickTextFormat(`**Черты**: ${[
                    `${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Магия (Magic))`,
                    `${getFromDict(EdgesTranslations, Edges.Necromancer)}`,
                    `${getFromDict(EdgesTranslations, Edges.Wizard)}`,
                    `${getFromDict(EdgesTranslations, Edges.CreateUndead)}`,
                    `${getFromDict(EdgesTranslations, Edges.Command)}`,
                ].join(', ')}`),
                quickTextFormat(`**Особые способности**: ${[
                    `Когти (Claws) (Сила+1)`,
                    `${getFromDict(EdgesTranslations, Edges.Fearless)}`,
                    `${getFromDict(EdgesTranslations, Edges.Immunity)}: контроль разума (mind control) и ${getFromDict(PowersTranslations, Powers.Blight)}`,
                    `${getFromDict(EdgesTranslations, Edges.Size)} +2`,
                    `${getFromDict(EdgesTranslations, Edges.Undead)}`,
                ].join(', ')}`),
                getUnitCommonAttributesContent({
                    [States.Pace]: '8',
                    [States.Parry]: '6',
                    [States.Toughness]: '11',
                    [States.PowerPoints]: '25',
                }),
                quickTextFormat(`***Тайная Магия (Arcane Magic)***: ${[
                    `*${getFromDict(PowersTranslations, Powers.Barrier)} (Ледяная паутина (Frost Web))*`,
                    `*${getFromDict(PowersTranslations, Powers.Blight)}*`,
                    `*${getFromDict(PowersTranslations, Powers.BoostLowerTrait)}*`,
                    `*${getFromDict(PowersTranslations, Powers.Contact)}*`,
                    `*${getFromDict(PowersTranslations, Powers.LifeDrain)}*`,
                    `*${getFromDict(PowersTranslations, Powers.Puppet)}*`,
                    `*${getFromDict(PowersTranslations, Powers.Summon)} (Жук-трупоед (carrion beetle))*`,
                    `*${getFromDict(PowersTranslations, Powers.Zombie)}*`,
                ].join(', ')}`),
            ],
        }),
        getTipText([
            quickTextFormat(`${getFromDict(SkillsTranslations, Skills.Climbing)} d18 - это не моя опечатка, а значение из оригинального документа. Даже не уверен - он так хороши лазает или там должно быть d8 :)`),
        ]),
        getUnitContent({
            isWildCard: false,
            title: 'Могильный Дьявол/Могильщик (Crypt Fiend)',
            points: undefined,
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
            isWildCard: true,
            title: 'Дункан Блэкроуз (Duncan Blackrose)',
            points: undefined,
            lines: [
                getUnitAttributesContent({
                    [States.Agility]: '6',
                    [States.Smarts]: '6',
                    [States.Spirit]: '8',
                    [States.Strength]: '10',
                    [States.Vigor]: '10',
                }),
                getUnitSkillsContent({
                    [Skills.Faith]: '8',
                    [Skills.Fighting]: '10',
                    [Skills.Intimidation]: '8',
                    [Skills.Knowledge]: '8 (Битва)',
                    [Skills.Riding]: '8',
                    [Skills.Stealth]: '4',
                }),
                quickTextFormat(`**Черты**: ${[
                    `${getFromDict(EdgesTranslations, Edges.Command)}`,
                    `${getFromDict(EdgesTranslations, Edges.Inspire)}`,
                    `${getFromDict(EdgesTranslations, Edges.Fervor)}`,
                    `${getFromDict(EdgesTranslations, Edges.TrademarkWeapon)} (Рунический клинок)`,
                    `${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Рыцарь Смерти (Death Knight))`,
                    `${getFromDict(EdgesTranslations, Edges.Champion)}`,
                ].join(', ')}`),
                quickTextFormat(`**Особые способности**: ${[
                    `${getFromDict(EdgesTranslations, Edges.Fearless)}`,
                ].join(', ')}`),
                getUnitCommonAttributesContent({
                    [States.Pace]: '6',
                    [States.Parry]: '9',
                    [States.Toughness]: '12',
                    [States.PowerPoints]: '20',
                }),
                quickTextFormat(`**Снаряжение**: ${[
                    `Рунический клинок (Сила+3, ББ 1)`,
                    `Зачарованный усиленный латный доспех (+5, все зоны)`,
                    `Зачарованный малый щит (+2 Парирование/+2 Стойкость против дальнего боя)`,
                ].join(', ')}`),
                {
                    ul: [
                        quickTextFormat(`**Конь смерти (Death Steed)**: как Лошадь боевая (Warhorse) (см. SW1 с. 144, SW2 с. 184), плюс ${getFromDict(EdgesTranslations, Edges.Undead)}. В кольчуге (+2).`),
                    ],
                }
            ],
        }),
        getUnitContent({
            isWildCard: false,
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
                    [Skills.Fighting]: '6',
                    [Skills.Intimidation]: '6',
                    [Skills.Notice]: '4',
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
            isWildCard: false,
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
            isWildCard: false,
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
    ];
}

function getMapsContent() {
    return [
        {
            text: 'Карта - Аванпост в Нордсколе',
            style: 'header2',
            pageBreak: 'before',
            tocItem: true,
            tocStyle: { bold: true, },
            tocMargin: [tocParagraphOffset, 0, 0, 0],
        },
        {
            image: getImagePath('map1.png'),
            width: 500,
            margin: [0, 0, 0, 15],
            alignment: 'center',
        },
        {
            text: 'Карта - Нерубское логово',
            style: 'header2',
            pageBreak: 'before',
            tocItem: true,
            tocStyle: { bold: true, },
            tocMargin: [tocParagraphOffset, 0, 0, 0],
        },
        {
            image: getImagePath('map2.png'),
            width: 500,
            margin: [0, 0, 0, 15],
            alignment: 'center',
        },
    ];
}

function getCharactersContent() {
    const borderColor = {
        Alliance: 'blue',
        Horde: 'red',
        Sentinels: '#00FFCC',
    };

    function getCharContent(data) {
        const titleCommonData = [];
        if (data.commonTitle) {
            titleCommonData.push({ text: `, ${data.commonTitle}`, });
        }
        if (data.points) {
            titleCommonData.push({ text: ` [${data.points}]`, color: 'red' });
        }

        const imageSize = data.bigImage ? 150 : 100;

        const charData = {
            layout: {
                hLineWidth: function (i, node) { return 0; },
                vLineWidth: function (i, node) { return 0; },
                paddingLeft: function (i, node) { return 0; },
                paddingRight: function (i, node) { return 0; },
                paddingTop: function (i, node) { return 0; },
                paddingBottom: function (i, node) { return 0; },
            },
            table: {
                widths: [imageSize + 15, '*'],
                body: [
                    [
                        {
                            image: getImagePath(data.image),
                            width: imageSize,
                            margin: 5,
                            alignment: 'center',
                        },
                        [
                            {
                                text: [
                                    {
                                        text: data.title,
                                        style: 'header4',
                                    },
                                    ...titleCommonData,
                                ],
                                alignment: 'center',
                            },
                            {
                                stack: data.withPictLines,
                                alignment: 'left',
                            },
                        ]
                    ],
                    [
                        {
                            stack: data.bottomLines,
                            alignment: 'left',
                            colSpan: 2,
                        }
                    ]
                ]
            }
        };

        return {
            layout: {
                hLineWidth: function (i, node) { return 3; },
                vLineWidth: function (i, node) { return 3; },
                hLineColor: function (i) { return data.border; },
                vLineColor: function (i) { return data.border; },
                paddingLeft: function (i, node) { return 5; },
                paddingRight: function (i, node) { return 5; },
                paddingTop: function (i, node) { return 5; },
                paddingBottom: function (i, node) { return 5; },
            },
            table: {
                widths: ['*'],
                body: [[charData]],
            },
            margin: [(data.leftOffset ? (paragraphOffset * 1.5) : 0), 0, 0, 5],
            ...(data.newPage ? { pageBreak: 'before' } : {}),
        }
    }

    const persinalityLineLength = 30;

    function getAllianceCharacters() {
        return [
            {
                text: 'Альянс (Alliance)',
                style: 'header3',
                tocItem: true,
                tocMargin: [tocParagraphOffset * 2, 0, 0, 0],
            },
            getCharContent({
                border: borderColor.Alliance,
                leftOffset: false,
                image: 'bloodmage.png',
                bigImage: true,
                title: 'Апиландрус (Apilandrus)',
                commonTitle: 'Высший Эльф Архимаг',
                points: undefined,
                withPictLines: [
                    {
                        text: `Апиландрус — отпрыск общества высших эльфов. Будучи учеником известных магов Кель'Таласа, он согласился помочь Кирин-Тору из Даларана, приобредшему значительный статус во время Второй войны. С тех пор он остался с человеческими магами и сражается с Нежитью, несмотря на уход эльфов из Альянса. Вопреки новым идеям Эльфов Крови, Апиландрус отказывается принимать магию чернокнижников, даже чтобы сражаться против них.`,
                        alignment: 'justify',
                    },
                    quickTextFormat(`**Ранг**: ${getFromDict(RanksTranslations, Ranks.Veteran)} (57 опыта)`),
                ],
                bottomLines: [
                    getUnitAttributesContent({
                        [States.Agility]: '6',
                        [States.Smarts]: '10',
                        [States.Spirit]: '8',
                        [States.Strength]: '4',
                        [States.Vigor]: '6',
                    }),
                    getUnitSkillsContent({
                        [Skills.Fighting]: '4',
                        [Skills.Guts]: '6',
                        [Skills.Investigation]: '6',
                        [Skills.Knowledge]: '8 (Магия)',
                        [Skills.Notice]: '8',
                        [Skills.Persuasion]: '6',
                        [Skills.Spellcasting]: '12',
                        [Skills.Streetwise]: '4',
                    }),
                    getUnitCommonAttributesContent({
                        [States.Charisma]: '0 (-2 против Ночных Эльфов и Тауренов)',
                        [States.Pace]: '6',
                        [States.Parry]: '4',
                        [States.Toughness]: '6 (5)',
                    }),
                    quickTextFormat(`**Изъяны**: ${[
                        `${getFromDict(HindrancesTranslations, Hindrances.Cautious)}`,
                        `${getFromDict(HindrancesTranslations, Hindrances.Loyal)}`,
                        `${getFromDict(HindrancesTranslations, Hindrances.MagicAddiction)}`,
                        `${getFromDict(HindrancesTranslations, Hindrances.Overconfident)}`,
                        `${getFromDict(HindrancesTranslations, Hindrances.Stubborn)}`,
                    ].join(', ')}`),
                    quickTextFormat(`**Черты**: ${[
                        `${getFromDict(EdgesTranslations, Edges.LowLightVision)}`,
                        `${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Тайная Магия (Arcane Magic))`,
                        `${getFromDict(EdgesTranslations, Edges.RapidRecharge)}`,
                        `${getFromDict(EdgesTranslations, Edges.Wizard)}`,
                        `${getFromDict(EdgesTranslations, Edges.Command)}`,
                        `${getFromDict(EdgesTranslations, Edges.Inspire)}`,
                    ].join(', ')}`),
                    quickTextFormat(`**Тайная Магия (Arcane Magic)**: **Пункты Силы**: 20; **Заклинания**: ${[
                        `*${getFromDict(PowersTranslations, Powers.Bolt)} (Молния (Lightning))*`,
                        `*${getFromDict(PowersTranslations, Powers.ContinuousBlast)} (Метель (Blizzard))*`,
                        `*${getFromDict(PowersTranslations, Powers.Deflection)} (Магический щит (Mystic Shield))*`,
                        `*${getFromDict(PowersTranslations, Powers.OffensiveArmor)} (Огненный щит(Fire Shield))*`,
                        `*${getFromDict(PowersTranslations, Powers.Summon)}: Водный элементаль (Water Elemental)*`,
                    ].join(', ')}`),
                    quickTextFormat(`**Снаряжение**: ${[
                        `Боевой посох (Сила+2, +1 Парирование, Двуручное)`,
                        `Мистическое одеяние (+1)`,
                    ].join(', ')}`),
                ],
            }),
            getCharContent({
                border: borderColor.Alliance,
                leftOffset: true,
                image: 'priest.png',
                bigImage: false,
                title: 'Гиллидан (Gillidan)',
                commonTitle: 'Высший Эльф Жрец Света',
                points: '41',
                withPictLines: [
                    {
                        text: `Гиллидан и его собратья Жрецы Внутреннего Света даже не думали покидать земли людей. Поступить так означало бы нарушить истины, которые они приняли.`,
                        alignment: 'justify',
                    },
                    quickTextFormat(`**Личность**: ${'_'.repeat(persinalityLineLength)}`),
                    getUnitAttributesContent({
                        [States.Agility]: '6',
                        [States.Smarts]: '6',
                        [States.Spirit]: '8',
                        [States.Strength]: '4',
                        [States.Vigor]: '6',
                    }),
                ],
                bottomLines: [
                    getUnitSkillsContent({
                        [Skills.Faith]: '8',
                        [Skills.Fighting]: '4',
                        [Skills.Guts]: '6',
                        [Skills.Knowledge]: '8 (Религия)',
                        [Skills.Notice]: '6',
                    }),
                    getUnitCommonAttributesContent({
                        [States.Charisma]: '0 (-2 против Ночных Эльфов и Тауренов)',
                        [States.Pace]: '6',
                        [States.Parry]: '4',
                        [States.Toughness]: '5',
                    }),
                    quickTextFormat(`**Изъяны**: ${[
                        `${getFromDict(HindrancesTranslations, Hindrances.Cautious)}`,
                        `${getFromDict(HindrancesTranslations, Hindrances.MagicAddiction)}`,
                    ].join(', ')}`),
                    quickTextFormat(`**Черты**: ${[
                        `${getFromDict(EdgesTranslations, Edges.LowLightVision)}`,
                        `${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Внутренний Свет (Inner Light))`,
                        `${getFromDict(EdgesTranslations, Edges.Priest)}`,
                    ].join(', ')}`),
                    quickTextFormat(`**Чудеса (Miracles)**: **Пункты Силы**: 15; **Заклинания**: ${[
                        `*${getFromDict(PowersTranslations, Powers.Bolt)} (Белый свет (White Light))*`,
                        `*${getFromDict(PowersTranslations, Powers.Dispel)}*`,
                        `*${getFromDict(PowersTranslations, Powers.Healing)}*`,
                        `*${getFromDict(PowersTranslations, Powers.InnerFire)}*`,
                    ].join(', ')}`),
                    quickTextFormat(`**Снаряжение**: ${[
                        `Боевой посох (Сила+2, +1 Парирование, Двуручное)`,
                    ].join(', ')}`),
                ],
            }),
            getCharContent({
                newPage: true,
                border: borderColor.Alliance,
                leftOffset: true,
                image: 'waterelement.png',
                bigImage: false,
                title: 'Водный элементаль (Water Elemental)',
                commonTitle: '(Призываемый Юнит)',
                points: undefined,
                withPictLines: [
                    getUnitAttributesContent({
                        [States.Agility]: '6',
                        [States.Smarts]: '4',
                        [States.Spirit]: '6',
                        [States.Strength]: '12+2',
                        [States.Vigor]: '10',
                    }),
                    getUnitSkillsContent({
                        [Skills.Fighting]: '10',
                        [Skills.Intimidation]: '10',
                        [Skills.Shooting]: '8',
                    }),
                    getUnitCommonAttributesContent({
                        [States.Pace]: '5',
                        [States.Parry]: '7',
                        [States.Toughness]: '13',
                    }),
                    quickTextFormat(`**Способности**: ${[
                        `${getFromDict(EdgesTranslations, Edges.Armor)} +3`,
                        `${getFromDict(EdgesTranslations, Edges.Size)} +3`,
                        `${getFromDict(EdgesTranslations, Edges.Fearless)}`,
                        `${getFromDict(EdgesTranslations, Edges.TwoFisted)}`,
                    ].join(', ')}`),
                ],
                bottomLines: [
                    {
                        ul: [
                            quickTextFormat(`**${getFromDict(EdgesTranslations, Edges.Construct)}**: +2 к восстановлению после Шока, половина урона от колющего оружия, иммунитет к прицельным выстрелам, ядам и болезням.`),
                            quickTextFormat(`**Водяная струя (Waterspout)**: Водные элементали могут выстрелить в противника струей воды. Эта атака наносит урон в пределах Шаблона Малого Взрыва (соседние противники могут пройти проверку Ловкости, чтобы избежать ее). Урон: Сила; Дальность 3/6/12; Скорострельность: 1.`),
                        ]
                    }
                ],
            }),
            getCharContent({
                border: borderColor.Alliance,
                leftOffset: false,
                image: 'paladin.png',
                bigImage: true,
                title: 'Гален Сильверхэнд (Galen Silverhand)',
                commonTitle: 'Человек Паладин',
                points: undefined,
                withPictLines: [
                    {
                        text: `Гален — сирота из Азерота, родители которого погибли в Первой войне против орков. Найденный рыцарями Лордерона, он был передан церкви. Когда архиепископ Фаол сформировал Рыцарей Серебряной Длани, он был взят на воспитание Орденом и стал одним из самых стойких его рыцарей.`,
                        alignment: 'justify',
                    },
                    {
                        text: `Недавний роспуск Ордена Серебряной Длани потряс Галена, но он по-прежнему клянется отстаивать идеалы Ордена и защищать земли людей.`,
                        alignment: 'justify',
                    },
                    quickTextFormat(`**Ранг**: ${getFromDict(RanksTranslations, Ranks.Veteran)} (55 опыта)`),
                ],
                bottomLines: [
                    getUnitAttributesContent({
                        [States.Agility]: '6',
                        [States.Smarts]: '4',
                        [States.Spirit]: '10',
                        [States.Strength]: '8',
                        [States.Vigor]: '8',
                    }),
                    getUnitSkillsContent({
                        [Skills.Fighting]: '10',
                        [Skills.Faith]: '8',
                        [Skills.Guts]: '8',
                        [Skills.Intimidation]: '8',
                        [Skills.Knowledge]: '4 (Религия)',
                        [Skills.Notice]: '4',
                        [Skills.Persuasion]: '6',
                        [Skills.Riding]: '6',
                    }),
                    getUnitCommonAttributesContent({
                        [States.Charisma]: '+2',
                        [States.Pace]: '6',
                        [States.Parry]: '7',
                        [States.Toughness]: '10 (6)',
                    }),
                    quickTextFormat(`**Изъяны**: ${[
                        `${getFromDict(HindrancesTranslations, Hindrances.Heroic)}`,
                        `${getFromDict(HindrancesTranslations, Hindrances.Stubborn)}`,
                    ].join(', ')}`),
                    quickTextFormat(`**Черты**: ${[
                        `${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Свет (The Light))`,
                        `${getFromDict(EdgesTranslations, Edges.Champion)}`,
                        `${getFromDict(EdgesTranslations, Edges.Charismatic)}`,
                        `${getFromDict(EdgesTranslations, Edges.Command)}`,
                        `${getFromDict(EdgesTranslations, Edges.HoldTheLine)}`,
                        `${getFromDict(EdgesTranslations, Edges.NaturalLeader)}`,
                        `${getFromDict(EdgesTranslations, Edges.SpellAura)}`,
                    ].join(', ')}`),
                    quickTextFormat(`**Свет (The Light) (Чудеса (Miracles))**: **Пункты Силы**: 15; **Заклинания**: ${[
                        `*${getFromDict(PowersTranslations, Powers.Armor)}*`,
                        `*${getFromDict(PowersTranslations, Powers.BoostLowerTrait)}*`,
                        `*${getFromDict(PowersTranslations, Powers.Healing)} (Святой свет (Holy Light))*`,
                    ].join(', ')}`),
                    quickTextFormat(`**Снаряжение**: ${[
                        `Усиленный латный доспех (+4)`,
                        `Адамантиновый Боевой молот (Сила+6, ББ 1, Двуручный)`,
                        `Лошадь боевая (Warhorse)`,
                    ].join(', ')}`),
                ],
            }),
            getCharContent({
                newPage: true,
                border: borderColor.Alliance,
                leftOffset: true,
                image: 'knight.png',
                bigImage: false,
                title: 'Сэр Даман Стурдигард (Sir Daman Sturdyguard)',
                commonTitle: 'Рыцарь Лордерона',
                points: '97',
                withPictLines: [
                    {
                        text: `Эти стойкие рыцари — стальной стержень сил Альянса, они врываются в бой в авангарде любой армии.`,
                        alignment: 'justify',
                    },
                    quickTextFormat(`**Личность**: ${'_'.repeat(persinalityLineLength)}`),
                    getUnitAttributesContent({
                        [States.Agility]: '6',
                        [States.Smarts]: '4',
                        [States.Spirit]: '6',
                        [States.Strength]: '8',
                        [States.Vigor]: '8',
                    }),
                ],
                bottomLines: [
                    getUnitSkillsContent({
                        [Skills.Fighting]: '8',
                        [Skills.Guts]: '8',
                        [Skills.Notice]: '4',
                        [Skills.Riding]: '6',
                    }),
                    getUnitCommonAttributesContent({
                        [States.Charisma]: '0',
                        [States.Pace]: '6',
                        [States.Parry]: '6',
                        [States.Toughness]: '10 (6)',
                    }),
                    quickTextFormat(`**Черты**: ${[
                        `${getFromDict(EdgesTranslations, Edges.Cavalry)}`,
                        `${getFromDict(EdgesTranslations, Edges.CombatReflexes)}`,
                        `${getFromDict(EdgesTranslations, Edges.Sweep)}`,
                    ].join(', ')}`),
                    quickTextFormat(`**Снаряжение**: ${[
                        `Хороший длинный меч (Сила+4)`,
                        `Пика (Сила+4, ББ 1, Досягаемость 2)`,
                        `Улучшеный латный достех (+4)`,
                        `Средний щит (+1 Парирование/+1 Броня против дальних атак)`,
                    ].join(', ')}`),
                    { text: `Лошадь боевая (Warhorse)`, style: 'header4', },
                    {
                        stack: [
                            getUnitAttributesContent({
                                [States.Agility]: '6',
                                [States.Smarts]: '4 (Ж)',
                                [States.Spirit]: '6',
                                [States.Strength]: '12+2',
                                [States.Vigor]: '10',
                            }),
                            getUnitSkillsContent({
                                [Skills.Fighting]: '8',
                                [Skills.Guts]: '8',
                                [Skills.Notice]: '4',
                            }),
                            getUnitCommonAttributesContent({
                                [States.Pace]: '8',
                                [States.Parry]: '6',
                                [States.Toughness]: '12 (10)',
                            }),
                            quickTextFormat(`**Черты**: ${[
                                `${getFromDict(EdgesTranslations, Edges.FleetFooted)} (d8 для Бега)`,
                                `${getFromDict(EdgesTranslations, Edges.Size)} +3`,
                                `Удар ногой (Kick) (Сила+1)`,
                            ].join(', ')}`),
                            quickTextFormat(`**Снаряжение**: ${[
                                `Кольчужная броня (+2)`,
                            ].join(', ')}`),
                        ],
                        margin: [paragraphOffset, 0, 0, 0],
                    },
                ],
            }),
            getCharContent({
                border: borderColor.Alliance,
                leftOffset: false,
                image: 'mountainking.png',
                bigImage: true,
                title: 'Тарн Стоунфордж (Târn Stoneforge)',
                commonTitle: 'Тан дворфов Стальгорна',
                points: undefined,
                withPictLines: [
                    {
                        text: `Тарн — тан клана Каменной Кузни из глубин дварфийского королевства Каз Модан. Его клан редко подвергался угрозам со стороны Орды в прошлом, что позволило Тарну и его народу свободно оттачивать свои навыки и исследовать связь с титанами, обнаруженную в конце Второй войны. Поэтому, когда Плеть обрушилась на его народ, тан клана Каменной Кузни был готов обрушить на них свою ярость.`,
                        alignment: 'justify',
                    },
                    quickTextFormat(`**Ранг**: ${getFromDict(RanksTranslations, Ranks.Veteran)} (58 опыта)`),
                ],
                bottomLines: [
                    getUnitAttributesContent({
                        [States.Agility]: '8',
                        [States.Smarts]: '6',
                        [States.Spirit]: '8',
                        [States.Strength]: '8',
                        [States.Vigor]: '10',
                    }),
                    getUnitSkillsContent({
                        [Skills.Fighting]: '10',
                        [Skills.Faith]: '8',
                        [Skills.Guts]: '8',
                        [Skills.Intimidation]: '8',
                        [Skills.Investigation]: '6',
                        [Skills.Knowledge]: '6 (История)',
                        [Skills.Notice]: '6',
                        [Skills.Taunt]: '6',
                        [Skills.Throwing]: '8',
                    }),
                    getUnitCommonAttributesContent({
                        [States.Charisma]: '0',
                        [States.Pace]: '5',
                        [States.Parry]: '7',
                        [States.Toughness]: '12 (7)',
                    }),
                    quickTextFormat(`**Изъяны**: ${[
                        `${getFromDict(HindrancesTranslations, Hindrances.Short)}`,
                        `${getFromDict(HindrancesTranslations, Hindrances.Curious)}`,
                        `${getFromDict(HindrancesTranslations, Hindrances.Stubborn)}`,
                        `${getFromDict(HindrancesTranslations, Hindrances.Quirk)}: Дворфы сделали все первыми`,
                    ].join(', ')}`),
                    quickTextFormat(`**Черты**: ${[
                        `${getFromDict(EdgesTranslations, Edges.LowLightVision)}`,
                        `${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Аватар (Avatar))`,
                        `${getFromDict(EdgesTranslations, Edges.Florentine)}`,
                        `${getFromDict(EdgesTranslations, Edges.Command)}`,
                        `${getFromDict(EdgesTranslations, Edges.Frenzy)}`,
                        `${getFromDict(EdgesTranslations, Edges.HardToKill)}`,
                    ].join(', ')}`),
                    quickTextFormat(`**Дворфийский Аватар (Dwarven Avatar) (Направление (Channeling))**: **Пункты Силы**: 15; **Силы**: ${[
                        `*${getFromDict(PowersTranslations, Powers.Smite)} (+ Оглушает Статистов)*`,
                        `*${getFromDict(PowersTranslations, Powers.Blast)} (Удар грома (Thunder Сlap), центр на себе, Оглушает Статистов)*`,
                    ].join(', ')}`),
                    quickTextFormat(`**Снаряжение**: ${[
                        `Мифриловые латы (+5)`,
                        `Адамантиновый Боевой Топор (Сила+5, ББ 1)`,
                        `Мифриловый Молот (Сила+3, 4/8/12, возвращается после броска)`,
                    ].join(', ')}`),
                ],
            }),
            getCharContent({
                newPage: true,
                border: borderColor.Alliance,
                leftOffset: true,
                image: 'mortarteam.png',
                bigImage: false,
                title: 'Хадран и Колм (Hadran and Colm)',
                commonTitle: 'Дворфийский Мортирный расчет',
                points: '81',
                withPictLines: [
                    {
                        text: `Не все ваши войны отвернулись от работы со сталью и паром. Эти стойкие мортирщики пришли на ваш призыв, как и их тан.`,
                        alignment: 'justify',
                    },
                    {
                        text: [
                            { text: `Хадран (Hadran)`, style: 'header4', },
                            '\t',
                            quickTextFormat(`**Личность**: ${'_'.repeat(persinalityLineLength)}`),
                        ]
                    },
                    {
                        text: [
                            { text: `Колм (Colm)`, style: 'header4', },
                            '\t\t\t',
                            quickTextFormat(`**Личность**: ${'_'.repeat(persinalityLineLength)}`),
                        ]
                    },
                ],
                bottomLines: [
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
                        [Skills.Notice]: '4',
                        [Skills.Repair]: '6',
                        [Skills.Shooting]: '8',
                    }),
                    getUnitCommonAttributesContent({
                        [States.Charisma]: '0',
                        [States.Pace]: '5',
                        [States.Parry]: '4',
                        [States.Toughness]: '8 (6)',
                    }),
                    quickTextFormat(`**Черты**: ${[
                        `${getFromDict(EdgesTranslations, Edges.LowLightVision)}`,
                        `${getFromDict(EdgesTranslations, Edges.Artillerist)}`,
                    ].join(', ')}`),
                    quickTextFormat(`**Снаряжение**: ${[
                        `Кожаная броня с заклепками (+2)`,
                        `Короткий меч (Сила+2)`,
                    ].join(', ')}`),
                    { text: `Мортира (Mortar)`, style: 'header4', },
                    {
                        stack: [
                            quickTextFormat(`**Урон**: 3d6+2 в Шаблоне Малого Взрыва`),
                            quickTextFormat(`**Дистанция**: **40/80/120**`),
                            quickTextFormat(`1 Действие на перезарядку; не может двигаться во время стрельбы/перезарядки. Возможность вести огонь непрямой наводкой`),
                            quickTextFormat(`**Боеприпасы**:\t***Много***\t*Мало*\t*Нет*`),
                        ],
                        margin: [paragraphOffset, 0, 0, 0],
                    }
                ],
            }),
            getCharContent({
                border: borderColor.Alliance,
                leftOffset: false,
                image: 'footman.png',
                bigImage: false,
                title: 'Пехотинцы (Foot Soldiers)',
                commonTitle: undefined,
                points: '40 каждый',
                withPictLines: [
                    {
                        text: `Человеческие пехотинцы, составляющие основу армий Лордерона, хорошо известны своим мастерством владения щитами и непоколебимой преданностью своему долгу.`,
                        alignment: 'justify',
                    },
                    {
                        text: [
                            { text: `Томас (Tomas)`, style: 'header4', },
                            '\t\t\t',
                            quickTextFormat(`**Личность**: ${'_'.repeat(persinalityLineLength)}`),
                        ]
                    },
                    {
                        text: [
                            { text: `Бредли (Bradly)`, style: 'header4', },
                            '\t\t',
                            quickTextFormat(`**Личность**: ${'_'.repeat(persinalityLineLength)}`),
                        ]
                    },
                    {
                        text: [
                            { text: `Колан (Colan)`, style: 'header4', },
                            '\t\t\t',
                            quickTextFormat(`**Личность**: ${'_'.repeat(persinalityLineLength)}`),
                        ]
                    },
                    {
                        text: [
                            { text: `Мавор (Mavor)`, style: 'header4', },
                            '\t\t\t',
                            quickTextFormat(`**Личность**: ${'_'.repeat(persinalityLineLength)}`),
                        ]
                    },
                    {
                        text: [
                            { text: `Дейлин (Daelen)`, style: 'header4', },
                            '\t\t',
                            quickTextFormat(`**Личность**: ${'_'.repeat(persinalityLineLength)}`),
                        ]
                    },
                ],
                bottomLines: [
                    getUnitAttributesContent({
                        [States.Agility]: '6',
                        [States.Smarts]: '4',
                        [States.Spirit]: '8',
                        [States.Strength]: '6',
                        [States.Vigor]: '6',
                    }),
                    getUnitSkillsContent({
                        [Skills.Fighting]: '8',
                        [Skills.Guts]: '8',
                        [Skills.Notice]: '4',
                    }),
                    getUnitCommonAttributesContent({
                        [States.Pace]: '6',
                        [States.Parry]: '6',
                        [States.Toughness]: '8 (5)',
                    }),
                    quickTextFormat(`**Черты**: ${[
                        `${getFromDict(EdgesTranslations, Edges.Block)}`,
                        `${getFromDict(EdgesTranslations, Edges.Defend)}`,
                    ].join(', ')}`),
                    quickTextFormat(`**Снаряжение**: ${[
                        `Качественный палаш (Сила+4)`,
                        `Латный доспех (+3)`,
                        `Каплевидный щит (+2 Парирование, +2 Броня против дальнего боя)`,
                    ].join(', ')}`),
                ],
            }),
            getCharContent({
                newPage: true,
                border: borderColor.Alliance,
                leftOffset: false,
                image: 'rifleman.png',
                bigImage: false,
                title: 'Дворфийские Cтрелки (Dwarven Riflemen)',
                commonTitle: undefined,
                points: '40 каждый',
                withPictLines: [
                    {
                        text: `Из осажденного королевства Каз Модан эти дворфы прибывают со своими легендарными Длинными Винтовками для укрепления сил Альянса.`,
                        alignment: 'justify',
                    },
                    {
                        text: [
                            { text: `Хурн (Hurn)`, style: 'header4', },
                            '\t\t\t\t\t',
                            quickTextFormat(`**Личность**: ${'_'.repeat(persinalityLineLength)}`),
                        ]
                    },
                    {
                        text: [
                            { text: `Мурад (Muradh)`, style: 'header4', },
                            '\t\t\t',
                            quickTextFormat(`**Личность**: ${'_'.repeat(persinalityLineLength)}`),
                        ]
                    },
                    {
                        text: [
                            { text: `Ангус (Angus)`, style: 'header4', },
                            '\t\t\t\t',
                            quickTextFormat(`**Личность**: ${'_'.repeat(persinalityLineLength)}`),
                        ]
                    },
                    {
                        text: [
                            { text: `Брадель (Bradhel)`, style: 'header4', },
                            '\t\t',
                            quickTextFormat(`**Личность**: ${'_'.repeat(persinalityLineLength)}`),
                        ]
                    },
                    {
                        text: [
                            { text: `Гровам (Grovam)`, style: 'header4', },
                            '\t\t',
                            quickTextFormat(`**Личность**: ${'_'.repeat(persinalityLineLength)}`),
                        ]
                    },
                ],
                bottomLines: [
                    getUnitAttributesContent({
                        [States.Agility]: '6',
                        [States.Smarts]: '4',
                        [States.Spirit]: '8',
                        [States.Strength]: '6',
                        [States.Vigor]: '8',
                    }),
                    getUnitSkillsContent({
                        [Skills.Fighting]: '4',
                        [Skills.Guts]: '8',
                        [Skills.Notice]: '6',
                        [Skills.Shooting]: '8',
                    }),
                    getUnitCommonAttributesContent({
                        [States.Pace]: '5',
                        [States.Parry]: '4',
                        [States.Toughness]: '8 (6)',
                    }),
                    quickTextFormat(`**Черты**: ${[
                        `${getFromDict(EdgesTranslations, Edges.LowLightVision)}`,
                        `${getFromDict(EdgesTranslations, Edges.Musketeer)}`,
                        `${getFromDict(EdgesTranslations, Edges.Marksman)}`,
                    ].join(', ')}`),
                    quickTextFormat(`**Снаряжение**: ${[
                        `Кожаная броня с заклепками (+2)`,
                        `Штык (Сила+2)`,
                        `Длинная винтовка (2d8+1, ББ 1, 15/30/60, 1 Действие на перезарядку)`,
                    ].join(', ')}`),
                    quickTextFormat(`**Боеприпасы**:\t*Очень много*\t***Много***\t*Мало*\t*Нет*`),
                ],
            }),
        ];
    }

    function getHordeCharacters() {
        return [
            {
                text: 'Орда (Horde)',
                style: 'header3',
                pageBreak: 'before',
                tocItem: true,
                tocMargin: [tocParagraphOffset * 2, 0, 0, 0],
            },
            getCharContent({
                border: borderColor.Horde,
                leftOffset: false,
                image: 'farseer.png',
                bigImage: true,
                title: `Гул'кар  Сокрушитель Бурь (Gul'kar Stormbreaker)`,
                commonTitle: 'Орк Шаман',
                points: undefined,
                withPictLines: [
                    {
                        text: `Гул'кар — один из последних шаманов древности. Он научился говорить с духами Дренора задолго до безумного падения Нер'зула и Гул'дана в магию чернокнижников. Долго преследуемый, теперь он помогает возрождать старые традиции, как один из советников-провидцев вождя и шамана Тралла.`,
                        alignment: 'justify',
                    },
                    quickTextFormat(`**Ранг**: ${getFromDict(RanksTranslations, Ranks.Veteran)} (59 опыта)`),
                    getUnitAttributesContent({
                        [States.Agility]: '6',
                        [States.Smarts]: '8',
                        [States.Spirit]: '10',
                        [States.Strength]: '6',
                        [States.Vigor]: '6',
                    }),
                ],
                bottomLines: [
                    getUnitSkillsContent({
                        [Skills.Fighting]: '6',
                        [Skills.Faith]: '10',
                        [Skills.Guts]: '8',
                        [Skills.Intimidation]: '6',
                        [Skills.Knowledge]: '8 (Духи)',
                        [Skills.Notice]: '8',
                        [Skills.Riding]: '6',
                        [Skills.Survival]: '6',
                        [Skills.Tracking]: '4',
                    }),
                    getUnitCommonAttributesContent({
                        [States.Charisma]: '-2 (0 для Орды)',
                        [States.Pace]: '6',
                        [States.Parry]: '5',
                        [States.Toughness]: '9 (6)',
                    }),
                    quickTextFormat(`**Изъяны**: ${[
                        `${getFromDict(HindrancesTranslations, Hindrances.SavageHeritage)}`,
                        `${getFromDict(HindrancesTranslations, Hindrances.Vengeful)}`,
                        `${getFromDict(HindrancesTranslations, Hindrances.Elderly)}`,
                        `${getFromDict(HindrancesTranslations, Hindrances.Cautious)}`,
                        `${getFromDict(HindrancesTranslations, Hindrances.Stubborn)}`,
                    ].join(', ')}`),
                    quickTextFormat(`**Черты**: ${[
                        `${getFromDict(EdgesTranslations, Edges.Brawny)}`,
                        `${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Шаман (Shaman))`,
                        `${getFromDict(EdgesTranslations, Edges.Shaman)}`,
                        `${getFromDict(EdgesTranslations, Edges.Cavalry)}`,
                        `${getFromDict(EdgesTranslations, Edges.NervesOfSteel)}`,
                    ].join(', ')}`),
                    quickTextFormat(`**Шаман (Shaman) (Чудеса (Miracles))**: **Пункты Силы**: 20; **Заклинания**: ${[
                        `*${getFromDict(PowersTranslations, Powers.Bolt)} (Цепная молния (Chain Lightning), +1 цель/подъем)*`,
                        `*${getFromDict(PowersTranslations, Powers.BoostLowerTrait)}*`,
                        `*${getFromDict(PowersTranslations, Powers.FarSight)}*`,
                        `*${getFromDict(PowersTranslations, Powers.Bloodlust)}*`,
                    ].join(', ')}`),
                    quickTextFormat(`**Снаряжение**: ${[
                        `Ториевый кольчужный хауберк (+3, игнорирует 1 ББ)`,
                        `Ториевый Боевой клинок (Сила+4, ББ 1)`,
                    ].join(', ')}`),
                    { text: `Лютоволк (Dire Wolf)`, style: 'header4', },
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
                            getUnitCommonAttributesContent({
                                [States.Pace]: '10',
                                [States.Parry]: '6',
                                [States.Toughness]: '6',
                            }),
                            quickTextFormat(`**Способности**: ${[
                                `${getFromDict(EdgesTranslations, Edges.FleetFooted)} (d10 для Бега)`,
                                `${getFromDict(EdgesTranslations, Edges.Size)} +1`,
                                `Укус (Bite) (Сила+2)`,
                                `${getFromDict(EdgesTranslations, Edges.GoForTheThroat)} (поражает наименее бронированную область при подъеме)`,
                            ].join(', ')}`),
                        ],
                        margin: [paragraphOffset, 0, 0, 0],
                    },
                ],
            }),
            getCharContent({
                newPage: true,
                border: borderColor.Horde,
                leftOffset: true,
                image: 'wolfrider.png',
                bigImage: false,
                title: `Каг'ар (Kag'ar)`,
                commonTitle: 'Волчий наездник',
                points: '96',
                withPictLines: [
                    {
                        text: `Возрожденные Траллом, волчьи наездники орков больше не являются кровожадными варварами, но они по-прежнему свирепы и грозны в бою.`,
                        alignment: 'justify',
                    },
                    quickTextFormat(`**Личность**: ${'_'.repeat(persinalityLineLength)}`),
                    getUnitAttributesContent({
                        [States.Agility]: '6',
                        [States.Smarts]: '6',
                        [States.Spirit]: '8',
                        [States.Strength]: '8',
                        [States.Vigor]: '8',
                    }),
                ],
                bottomLines: [
                    getUnitSkillsContent({
                        [Skills.Fighting]: '8',
                        [Skills.Guts]: '8',
                        [Skills.Intimidation]: '6',
                        [Skills.Notice]: '4',
                        [Skills.Riding]: '6',
                        [Skills.Throwing]: '6',
                    }),
                    getUnitCommonAttributesContent({
                        [States.Charisma]: '-2 (0 для Орды)',
                        [States.Pace]: '6',
                        [States.Parry]: '6',
                        [States.Toughness]: '10 (7)',
                    }),
                    quickTextFormat(`**Черты**: ${[
                        `${getFromDict(EdgesTranslations, Edges.Brawny)}`,
                        `${getFromDict(EdgesTranslations, Edges.Cavalry)}`,
                        `${getFromDict(EdgesTranslations, Edges.Berserk)}`,
                    ].join(', ')}`),
                    quickTextFormat(`**Снаряжение**: ${[
                        `Ториевый кольчужный хауберк (+3, игнорирует 1 ББ)`,
                        `Ториевый Боевой клинок (Сила+4, ББ 1)`,
                        `Сеть (Ловушки (Entraps))`,
                    ].join(', ')}`),
                    { text: `Лютоволк (Dire Wolf)`, style: 'header4', },
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
                            getUnitCommonAttributesContent({
                                [States.Pace]: '10',
                                [States.Parry]: '6',
                                [States.Toughness]: '6',
                            }),
                            quickTextFormat(`**Способности**: ${[
                                `${getFromDict(EdgesTranslations, Edges.FleetFooted)} (d10 для Бега)`,
                                `${getFromDict(EdgesTranslations, Edges.Size)} +1`,
                                `Укус (Bite) (Сила+2)`,
                                `${getFromDict(EdgesTranslations, Edges.GoForTheThroat)}`,
                            ].join(', ')}`),
                        ],
                        margin: [paragraphOffset, 0, 0, 0],
                    },
                ],
            }),
            getCharContent({
                border: borderColor.Horde,
                leftOffset: false,
                image: 'chieftain.png',
                bigImage: true,
                title: `Хурак Смертельный Рев (Hûrak Deathbellow)`,
                commonTitle: 'Вождь тауренов',
                points: undefined,
                withPictLines: [
                    {
                        text: `Хурак — мудрый и могущественный вождь тауренов. Уверенный в своей силе и сострадательный к молодой расе орков, он одолжил им свою мощь и мощь своего племени, чтобы защитить их от врагов и помочь им заново открыть их шаманские традиции прошлого. Его связь с землей и предками (через его тотем) дает ему огромную силу.`,
                        alignment: 'justify',
                    },
                    quickTextFormat(`**Ранг**: ${getFromDict(RanksTranslations, Ranks.Veteran)} (56 опыта)`),
                ],
                bottomLines: [
                    getUnitAttributesContent({
                        [States.Agility]: '4',
                        [States.Smarts]: '6',
                        [States.Spirit]: '7',
                        [States.Strength]: '12',
                        [States.Vigor]: '10',
                    }),
                    getUnitSkillsContent({
                        [Skills.Fighting]: '10',
                        [Skills.Faith]: '6',
                        [Skills.Guts]: '8',
                        [Skills.Intimidation]: '10',
                        [Skills.Survival]: '8',
                    }),
                    getUnitCommonAttributesContent({
                        [States.Charisma]: '0',
                        [States.Pace]: '7',
                        [States.Parry]: '7',
                        [States.Toughness]: '13 (10)',
                    }),
                    quickTextFormat(`**Изъяны**: ${[
                        `${getFromDict(HindrancesTranslations, Hindrances.Lumbering)}`,
                        `${getFromDict(HindrancesTranslations, Hindrances.AllThumbs)}`,
                        `${getFromDict(EdgesTranslations, Edges.Large)}`,
                        `${getFromDict(HindrancesTranslations, Hindrances.Heroic)}`,
                        `${getFromDict(HindrancesTranslations, Hindrances.Vow)} (Главное — защищать и направлять орков, чего бы это ни стоило)`,
                        `${getFromDict(HindrancesTranslations, Hindrances.Loyal)}`,
                    ].join(', ')}`),
                    quickTextFormat(`**Черты**: ${[
                        `${getFromDict(EdgesTranslations, Edges.Horns)} (Сила+2)`,
                        `${getFromDict(EdgesTranslations, Edges.Charge)}`,
                        `${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Тотемный Воин (Totem Warrior))`,
                        `${getFromDict(EdgesTranslations, Edges.Champion)}`,
                        `${getFromDict(EdgesTranslations, Edges.Command)}`,
                        `${getFromDict(EdgesTranslations, Edges.Inspire)}`,
                        `${getFromDict(EdgesTranslations, Edges.Fervor)}`,
                        `${getFromDict(EdgesTranslations, Edges.Sweep)}`,
                        `${getFromDict(EdgesTranslations, Edges.TrademarkWeapon)} (Алебарда (Halberd))`,
                    ].join(', ')}`),
                    quickTextFormat(`**Тотемный Воин (Totem Warrior) (Направление (Channeling))**: **Пункты Силы**: 15; **Силы**: ${[
                        `*${getFromDict(PowersTranslations, Powers.Smite)} (Оглушает)*`,
                        `*Поток огня (Fireburst) (Ударная Волна (Shockwave))*`,
                        `*${getFromDict(PowersTranslations, Powers.Blast)} (Громовая поступь (War Stomp), центр на персонаже, оглушает)*`,
                    ].join(', ')}`),
                    quickTextFormat(`**Снаряжение**: ${[
                        `Тяжелый кольчужный хауберк (+3)`,
                        `Ториевая Алебарда (Сила+4, ББ 1, Досягаемость 1)`,
                    ].join(', ')}`),
                ],
            }),
            getTipText([
                quickTextFormat(`Не уверен насчет "**${Hindrances.Lumbering}**", возможно, стоило перевести это как "**Лесозаготовка**", но такой изъян выглядел бы странно.`),
                quickTextFormat(`По поводу **${getFromDict(HindrancesTranslations, Hindrances.Lumbering)}**, **${getFromDict(EdgesTranslations, Edges.Charge)}**, **Поток огня (Fireburst)** никаких пояснений не прилагается, увы.`),
            ], true),
            getCharContent({
                border: borderColor.Horde,
                leftOffset: true,
                image: 'tauren.png',
                bigImage: false,
                title: `Грокка (Grokka)`,
                commonTitle: 'Таурен-воин',
                points: '56',
                withPictLines: [
                    {
                        text: `Эти свирепые воины, преданные своему вождю Хураку, используют свои тотемы как огромные дубины, чтобы прорубать широкую полосу среди своих противников.`,
                        alignment: 'justify',
                    },
                    quickTextFormat(`**Личность**: ${'_'.repeat(persinalityLineLength)}`),
                    getUnitAttributesContent({
                        [States.Agility]: '4',
                        [States.Smarts]: '4',
                        [States.Spirit]: '8',
                        [States.Strength]: '12',
                        [States.Vigor]: '10',
                    }),
                ],
                bottomLines: [
                    getUnitSkillsContent({
                        [Skills.Fighting]: '8',
                        [Skills.Guts]: '8',
                        [Skills.Intimidation]: '8',
                        [Skills.Notice]: '4',
                        [Skills.Survival]: '6',
                    }),
                    getUnitCommonAttributesContent({
                        [States.Charisma]: '0',
                        [States.Pace]: '6',
                        [States.Parry]: '6',
                        [States.Toughness]: '11 (10)',
                    }),
                    quickTextFormat(`**Изъяны**: ${[
                        `${getFromDict(HindrancesTranslations, Hindrances.Lumbering)}`,
                        `${getFromDict(EdgesTranslations, Edges.Large)}`,
                        `${getFromDict(HindrancesTranslations, Hindrances.AllThumbs)}`,
                    ].join(', ')}`),
                    quickTextFormat(`**Черты**: ${[
                        `${getFromDict(EdgesTranslations, Edges.Horns)} (Сила+2)`,
                        `${getFromDict(EdgesTranslations, Edges.Charge)}`,
                        `${getFromDict(EdgesTranslations, Edges.CombatReflexes)}`,
                        `${getFromDict(EdgesTranslations, Edges.Sweep)}`,
                    ].join(', ')}`),
                    quickTextFormat(`**Снаряжение**: ${[
                        `Толстые шкуры (+1)`,
                        `Тотем (Сил+3, ББ 2 против жесткой брони)`,
                    ].join(', ')}`),
                ],
            }),
            getCharContent({
                border: borderColor.Horde,
                leftOffset: false,
                image: 'shadowhunter.png',
                bigImage: true,
                title: `Рагат Кровопийца (Ragath Blood Drinker)`,
                commonTitle: 'Тролль Джунглей Охотник за Тенями (Ловец Духов)',
                points: undefined,
                withPictLines: [
                    {
                        text: `Рагат — один из величайших героев клана Темного Копья троллей джунглей. Мастер как боевых искусств, так и темной магии вуду, он хитер и беспощаден в охоте на своих врагов, после которой уничтожает их без жалости.`,
                        alignment: 'justify',
                    },
                    quickTextFormat(`**Ранг**: ${getFromDict(RanksTranslations, Ranks.Veteran)} (55 опыта)`),
                    getUnitAttributesContent({
                        [States.Agility]: '10',
                        [States.Smarts]: '6',
                        [States.Spirit]: '8',
                        [States.Strength]: '6',
                        [States.Vigor]: '6',
                    }),
                    getUnitSkillsContent({
                        [Skills.Fighting]: '6',
                        [Skills.Faith]: '8',
                        [Skills.Guts]: '8',
                        [Skills.Intimidation]: '8',
                        [Skills.Stealth]: '10',
                        [Skills.Survival]: '6',
                        [Skills.Throwing]: '10',
                        [Skills.Tracking]: '8',
                    }),
                ],
                bottomLines: [
                    getUnitCommonAttributesContent({
                        [States.Charisma]: '-2',
                        [States.Pace]: '6',
                        [States.Parry]: '5',
                        [States.Toughness]: '9 (6)',
                    }),
                    quickTextFormat(`**Изъяны**: ${[
                        `${getFromDict(HindrancesTranslations, Hindrances.LowCunning)}`,
                        `${getFromDict(HindrancesTranslations, Hindrances.AllThumbs)}`,
                        `${getFromDict(HindrancesTranslations, Hindrances.Bloodthirsty)}`,
                        `${getFromDict(HindrancesTranslations, Hindrances.Outsider)}`,
                        `${getFromDict(HindrancesTranslations, Hindrances.Stubborn)}`,
                        `${getFromDict(HindrancesTranslations, Hindrances.Overconfident)}`,
                        `${getFromDict(HindrancesTranslations, Hindrances.Quirk)} (шепчется с духами)`,
                    ].join(', ')}`),
                    quickTextFormat(`**Черты**: ${[
                        `${getFromDict(EdgesTranslations, Edges.FastRegeneration)}`,
                        `${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Вуду (Voodoo))`,
                        `${getFromDict(EdgesTranslations, Edges.Marksman)}`,
                        `${getFromDict(EdgesTranslations, Edges.Woodsman)}`,
                    ].join(', ')}`),
                    quickTextFormat(`**Вуду (Voodoo) (Чудеса (Miracles))**: **Пункты Силы**: 15; **Заклинания**: ${[
                        `*${getFromDict(PowersTranslations, Powers.BoostLowerTrait)}*`,
                        `*${getFromDict(PowersTranslations, Powers.DetectConcealArcana)}*`,
                        `*${getFromDict(PowersTranslations, Powers.Healing)}*`,
                    ].join(', ')}`),
                    quickTextFormat(`**Снаряжение**: ${[
                        `Бригантина (+3)`,
                        `Короткий меч (Сила+2)`,
                        `Лук и Ториевые Стрелы (2d6+1, ББ 2, 12/24/48)`,
                    ].join(', ')}`),
                ],
            }),
            getCharContent({
                newPage: true,
                border: borderColor.Horde,
                leftOffset: true,
                image: 'berserker.png',
                bigImage: false,
                title: `Кур'рукк (Kur'rukk)`,
                commonTitle: 'Наездник на летучей мыши',
                points: '100',
                withPictLines: [
                    {
                        text: `Хитрые и смертоносные, эти подданные Рагата летают на гигантских летучих мышах и с высоты сбрасывают вниз опасные зелья. Фанатично преданные Рагату, они даже готовы покончить с собой, если он прикажет.`,
                        alignment: 'justify',
                    },
                    quickTextFormat(`**Личность**: ${'_'.repeat(persinalityLineLength)}`),
                    getUnitAttributesContent({
                        [States.Agility]: '8',
                        [States.Smarts]: '4',
                        [States.Spirit]: '8',
                        [States.Strength]: '6',
                        [States.Vigor]: '8',
                    }),
                ],
                bottomLines: [
                    getUnitSkillsContent({
                        [Skills.Fighting]: '4',
                        [Skills.Guts]: '10',
                        [Skills.Intimidation]: '4',
                        [Skills.Notice]: '6',
                        [Skills.Stealth]: '6',
                        [Skills.Throwing]: '8',
                    }),
                    getUnitCommonAttributesContent({
                        [States.Charisma]: '0',
                        [States.Pace]: '6',
                        [States.Parry]: '4',
                        [States.Toughness]: '11 (10)',
                    }),
                    quickTextFormat(`**Изъяны**: ${[
                        `${getFromDict(HindrancesTranslations, Hindrances.AllThumbs)}`,
                        `${getFromDict(HindrancesTranslations, Hindrances.Outsider)}`,
                        `${getFromDict(HindrancesTranslations, Hindrances.Bloodthirsty)}`,
                    ].join(', ')}`),
                    quickTextFormat(`**Черты**: ${[
                        `${getFromDict(EdgesTranslations, Edges.FastRegeneration)}`,
                        `${getFromDict(EdgesTranslations, Edges.Cavalry)}`,
                        `${getFromDict(EdgesTranslations, Edges.SteadyHands)}`,
                        `${getFromDict(EdgesTranslations, Edges.RapidThrowing)}`,
                    ].join(', ')}`),
                    quickTextFormat(`**Снаряжение**: ${[
                        `Кожаная броня (+1)`,
                        `Зелья Жидкого Огня (3d6+2, Малый взрыв, 3/6/12)`,
                    ].join(', ')}`),
                    quickTextFormat(`**Боеприпасы**:\t*Очень много*\t***Много***\t*Мало*\t*Нет*`),
                    { text: `Гигантская летучая мышь (Giant Bat)`, style: 'header4', },
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
                                [Skills.Guts]: '6',
                                [Skills.Notice]: '10',
                                [Skills.Tracking]: '6',
                            }),
                            getUnitCommonAttributesContent({
                                [States.Pace]: '2 (Полет 12 дюймов, Подъем 6 дюймов)',
                                [States.Parry]: '4',
                                [States.Toughness]: '9',
                            }),
                            quickTextFormat(`**Способности**: ${[
                                `${getFromDict(EdgesTranslations, Edges.Size)} +3`,
                                `${getFromDict(EdgesTranslations, Edges.Flight)}`,
                                `${getFromDict(EdgesTranslations, Edges.Echolocation)}`,
                            ].join(', ')}`),
                        ],
                        margin: [paragraphOffset, 0, 0, 0],
                    },
                ],
            }),
            getCharContent({
                newPage: true,
                border: borderColor.Horde,
                leftOffset: false,
                image: 'grunt.png',
                bigImage: false,
                title: 'Орки Бугаи (Orc Grunts)',
                commonTitle: undefined,
                points: '41 каждый',
                withPictLines: [
                    {
                        text: `Основная часть Орды состоит из этих доблестных и смертоносных воинов. Известные в прошлом своей жестокостью и развратом, орки начали возвращаться к своим диким, но благородным корням.`,
                        alignment: 'justify',
                    },
                    {
                        text: [
                            { text: `Гарм (Garm)`, style: 'header4', },
                            '\t\t',
                            quickTextFormat(`**Личность**: ${'_'.repeat(persinalityLineLength)}`),
                        ]
                    },
                    {
                        text: [
                            { text: `Нурк (Nurk)`, style: 'header4', },
                            '\t\t',
                            quickTextFormat(`**Личность**: ${'_'.repeat(persinalityLineLength)}`),
                        ]
                    },
                    {
                        text: [
                            { text: `Кобла (Kobla)`, style: 'header4', },
                            '\t',
                            quickTextFormat(`**Личность**: ${'_'.repeat(persinalityLineLength)}`),
                        ]
                    },
                    {
                        text: [
                            { text: `Раж (Razh)`, style: 'header4', },
                            '\t\t',
                            quickTextFormat(`**Личность**: ${'_'.repeat(persinalityLineLength)}`),
                        ]
                    },
                    {
                        text: [
                            { text: `Зугар (Zugar)`, style: 'header4', },
                            '\t',
                            quickTextFormat(`**Личность**: ${'_'.repeat(persinalityLineLength)}`),
                        ]
                    },
                ],
                bottomLines: [
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
                    }),
                    getUnitCommonAttributesContent({
                        [States.Pace]: '6',
                        [States.Parry]: '6',
                        [States.Toughness]: '10 (7)',
                    }),
                    quickTextFormat(`**Черты**: ${[
                        `${getFromDict(EdgesTranslations, Edges.Brawny)}`,
                        `${getFromDict(EdgesTranslations, Edges.Berserk)}`,
                    ].join(', ')}`),
                    quickTextFormat(`**Снаряжение**: ${[
                        `Качественный Боевой Топор (Сила+4)`,
                        `Тяжелый кольчужный хауберк (+3)`,
                    ].join(', ')}`),
                ],
            }),
            getCharContent({
                border: borderColor.Horde,
                leftOffset: false,
                image: 'headhunter.png',
                bigImage: false,
                title: 'Тролли Охотники за головами (Troll Headhunters)',
                commonTitle: undefined,
                points: '41 каждый',
                withPictLines: [
                    {
                        text: `Дикие тролли-копьеметатели из племени Черного Копья долгое время помогали Орде в качестве уплаты долга Траллу за спасение племени от уничтожения.`,
                        alignment: 'justify',
                    },
                    {
                        text: [
                            { text: `Та'ззик (Tha'zzik)`, style: 'header4', },
                            '\t',
                            quickTextFormat(`**Личность**: ${'_'.repeat(persinalityLineLength)}`),
                        ]
                    },
                    {
                        text: [
                            { text: `Гиран (Giraan)`, style: 'header4', },
                            '\t\t',
                            quickTextFormat(`**Личность**: ${'_'.repeat(persinalityLineLength)}`),
                        ]
                    },
                    {
                        text: [
                            { text: `Тул (Thool)`, style: 'header4', },
                            '\t\t\t\t',
                            quickTextFormat(`**Личность**: ${'_'.repeat(persinalityLineLength)}`),
                        ]
                    },
                    {
                        text: [
                            { text: `Легоса (Legosa)`, style: 'header4', },
                            '\t',
                            quickTextFormat(`**Личность**: ${'_'.repeat(persinalityLineLength)}`),
                        ]
                    },
                    {
                        text: [
                            { text: `Накеле (Nakele)`, style: 'header4', },
                            '\t',
                            quickTextFormat(`**Личность**: ${'_'.repeat(persinalityLineLength)}`),
                        ]
                    },
                ],
                bottomLines: [
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
                        [Skills.Notice]: '6',
                        [Skills.Stealth]: '6',
                        [Skills.Tracking]: '4',
                        [Skills.Throwing]: '8',
                    }),
                    getUnitCommonAttributesContent({
                        [States.Pace]: '6',
                        [States.Parry]: '4',
                        [States.Toughness]: '8 (6)',
                    }),
                    quickTextFormat(`**Изъяны**: ${[
                        `${getFromDict(HindrancesTranslations, Hindrances.Outsider)}`,
                        `${getFromDict(HindrancesTranslations, Hindrances.Bloodthirsty)}`,
                        `${getFromDict(HindrancesTranslations, Hindrances.AllThumbs)}`,
                    ].join(', ')}`),
                    quickTextFormat(`**Черты**: ${[
                        `${getFromDict(EdgesTranslations, Edges.FastRegeneration)}`,
                        `${getFromDict(EdgesTranslations, Edges.Marksman)}`,
                        `${getFromDict(EdgesTranslations, Edges.RapidThrowing)}`,
                    ].join(', ')}`),
                    quickTextFormat(`**Снаряжение**: ${[
                        `Прочный кожаный доспех (+2)`,
                        `Качественные Метательные Копья (Сила+3, 4/8/16)`,
                    ].join(', ')}`),
                    quickTextFormat(`**Боеприпасы**:\t*Очень много*\t***Много***\t*Мало*\t*Нет*`),
                ],
            }),
        ];
    }

    function getSentinelsCharacters() {
        return [
            {
                text: 'Стражи (The Sentinels)',
                style: 'header3',
                pageBreak: 'before',
                tocItem: true,
                tocMargin: [tocParagraphOffset * 2, 0, 0, 0],
            },
            getCharContent({
                border: borderColor.Sentinels,
                leftOffset: false,
                image: 'priestess.png',
                bigImage: true,
                title: `Малани Серебряный Ветер (Malani Silverwind)`,
                commonTitle: 'Ночная Эльфийка - Жрица Луны',
                points: undefined,
                withPictLines: [
                    {
                        text: `Малани Серебряный Ветер не входит в число первых Стражей, завербованных Тирандой Шелест Ветра для защиты Калдорай. Она — дочь одного из этих стойких защитников. Рожденная и воспитанная для защиты Калимдора, она посвящает свое сердце и душу Элуне и делу, стоящему перед ней. Она сострадательна, если не тепла, со своими союзниками, но горе ее врагам.`,
                        alignment: 'justify',
                    },
                    quickTextFormat(`**Ранг**: ${getFromDict(RanksTranslations, Ranks.Veteran)} (58 опыта)`),
                    getUnitAttributesContent({
                        [States.Agility]: '8',
                        [States.Smarts]: '6',
                        [States.Spirit]: '10',
                        [States.Strength]: '6',
                        [States.Vigor]: '8',
                    }),
                ],
                bottomLines: [
                    getUnitSkillsContent({
                        [Skills.Fighting]: '6',
                        [Skills.Faith]: '8',
                        [Skills.Guts]: '8',
                        [Skills.Intimidation]: '6',
                        [Skills.Knowledge]: '(Религия)',
                        [Skills.Riding]: '6',
                        [Skills.Shooting]: '8',
                        [Skills.Stealth]: '8 (+4)',
                        [Skills.Survival]: '6',
                        [Skills.Tracking]: '6',
                    }),
                    getUnitCommonAttributesContent({
                        [States.Charisma]: '-2',
                        [States.Pace]: '6',
                        [States.Parry]: '5',
                        [States.Toughness]: '9 (6)',
                    }),
                    quickTextFormat(`**Изъяны**: ${[
                        `${getFromDict(HindrancesTranslations, Hindrances.AllThumbs)}`,
                        `${getFromDict(HindrancesTranslations, Hindrances.Solitary)}`,
                        `${getFromDict(HindrancesTranslations, Hindrances.Proud)}`,
                        `${getFromDict(HindrancesTranslations, Hindrances.Heroic)}`,
                        `${getFromDict(HindrancesTranslations, Hindrances.Bloodthirsty)}`,
                    ].join(', ')}`),
                    quickTextFormat(`**Черты**: ${[
                        `${getFromDict(EdgesTranslations, Edges.LowLightVision)}`,
                        `${getFromDict(EdgesTranslations, Edges.Shadowmeld)}`,
                        `${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Элуна (Elune))`,
                        `${getFromDict(EdgesTranslations, Edges.Priestess)}`,
                        `${getFromDict(EdgesTranslations, Edges.SpellAura)}`,
                        `${getFromDict(EdgesTranslations, Edges.Cavalry)}`,
                        `${getFromDict(EdgesTranslations, Edges.SteadyHands)}`,
                        `${getFromDict(EdgesTranslations, Edges.Command)}`,
                        `${getFromDict(EdgesTranslations, Edges.Inspire)}`,
                        `${getFromDict(EdgesTranslations, Edges.NaturalLeader)}`,
                    ].join(', ')}`),
                    quickTextFormat(`**Жрица Луны (Moon Priestess) (Чудеса (Miracles))**: **Пункты Силы**: 20; **Силы**: ${[
                        `*${getFromDict(PowersTranslations, Powers.Smite)} (Огненная Аура ( (Fire Aura)))*`,
                        `*${getFromDict(PowersTranslations, Powers.BoostLowerTrait)}*`,
                        `*${getFromDict(PowersTranslations, Powers.Quickness)}*`,
                        `*${getFromDict(PowersTranslations, Powers.Summon)} (Сова-разведчица (Owl Scout))*`,
                    ].join(', ')}`),
                    quickTextFormat(`**Снаряжение**: ${[
                        `Латы из Лунного серебра (+3)`,
                        `Эльфийский длинный лук (2d6+1, ББ 1, 15/30/60)`,
                        `Глефа из Лунного серебра (Сила+3, ББ 1, 4/8/16)`,
                    ].join(', ')}`),
                    { text: `Ночной саблезуб-Пантера (Nightsabre Panther)`, style: 'header4', },
                    {
                        stack: [
                            getUnitAttributesContent({
                                [States.Agility]: '8',
                                [States.Smarts]: '8 (Ж)',
                                [States.Spirit]: '10',
                                [States.Strength]: '12',
                                [States.Vigor]: '8',
                            }),
                            getUnitSkillsContent({
                                [Skills.Fighting]: '8',
                                [Skills.Guts]: '10',
                                [Skills.Intimidation]: '6',
                                [Skills.Notice]: '8',
                                [Skills.Stealth]: '8 (+4)',
                            }),
                            getUnitCommonAttributesContent({
                                [States.Pace]: '8',
                                [States.Parry]: '6',
                                [States.Toughness]: '8',
                            }),
                            quickTextFormat(`**Способности**: ${[
                                `Укус/Коготь (Bite/Claw) (Сила+2)`,
                                `${getFromDict(EdgesTranslations, Edges.Size)} +2`,
                                `${getFromDict(EdgesTranslations, Edges.Pounce)}`,
                            ].join(', ')}`),
                        ],
                        margin: [paragraphOffset, 0, 0, 0],
                    },
                ],
            }),
            getTipText([
                quickTextFormat(`В **Знании** тоже не моя опечатка. В оригинале: "***Intimidation d6, Knowledge (religion), Riding d6***".`),
            ]),
            getCharContent({
                newPage: true,
                border: borderColor.Sentinels,
                leftOffset: true,
                image: 'huntress.png',
                bigImage: false,
                title: `Фелоре (Felore)`,
                commonTitle: 'Охотница Калдорай',
                points: '102',
                withPictLines: [
                    {
                        text: `Охотницы Стражей патрулируют леса Калимдора с незапамятных для большинства рас времен. Свирепые, но молчаливые на своих ночных саблезубых пантерах, они — сила, с которой нужно считаться.`,
                        alignment: 'justify',
                    },
                    quickTextFormat(`**Личность**: ${'_'.repeat(persinalityLineLength)}`),
                    getUnitAttributesContent({
                        [States.Agility]: '8',
                        [States.Smarts]: '6',
                        [States.Spirit]: '8',
                        [States.Strength]: '8',
                        [States.Vigor]: '6',
                    }),
                ],
                bottomLines: [
                    getUnitSkillsContent({
                        [Skills.Fighting]: '6',
                        [Skills.Guts]: '8',
                        [Skills.Intimidation]: '6',
                        [Skills.Notice]: '6',
                        [Skills.Riding]: '6',
                        [Skills.Stealth]: '8 (+4)',
                        [Skills.Survival]: '6',
                        [Skills.Throwing]: '8',
                    }),
                    getUnitCommonAttributesContent({
                        [States.Charisma]: '-2',
                        [States.Pace]: '6',
                        [States.Parry]: '6',
                        [States.Toughness]: '11 (10)',
                    }),
                    quickTextFormat(`**Изъяны**: ${[
                        `${getFromDict(HindrancesTranslations, Hindrances.AllThumbs)}`,
                        `${getFromDict(HindrancesTranslations, Hindrances.Outsider)}`,
                        `${getFromDict(HindrancesTranslations, Hindrances.Proud)}`,
                    ].join(', ')}`),
                    quickTextFormat(`**Черты**: ${[
                        `${getFromDict(EdgesTranslations, Edges.LowLightVision)}`,
                        `${getFromDict(EdgesTranslations, Edges.Shadowmeld)}`,
                        `${getFromDict(EdgesTranslations, Edges.Cavalry)}`,
                        `${getFromDict(EdgesTranslations, Edges.SteadyHands)}`,
                        `${getFromDict(EdgesTranslations, Edges.Ricochet)} (${getFromDict(EdgesTranslations, Edges.RapidShot)})`,
                        `${getFromDict(EdgesTranslations, Edges.BeastMaster)} (Сова (Owl))`,
                    ].join(', ')}`),
                    quickTextFormat(`**Снаряжение**: ${[
                        `Латы из Лунного серебра (+3)`,
                        `Глефа из Лунного серебра (Сила+3, ББ 1, 4/8/16)`,
                    ].join(', ')}`),
                    { text: `Ночной саблезуб-Пантера (Nightsabre Panther)`, style: 'header4', },
                    {
                        stack: [
                            getUnitAttributesContent({
                                [States.Agility]: '8',
                                [States.Smarts]: '8 (Ж)',
                                [States.Spirit]: '10',
                                [States.Strength]: '12',
                                [States.Vigor]: '8',
                            }),
                            getUnitSkillsContent({
                                [Skills.Fighting]: '8',
                                [Skills.Guts]: '10',
                                [Skills.Intimidation]: '6',
                                [Skills.Notice]: '8',
                                [Skills.Stealth]: '8 (+4)',
                            }),
                            getUnitCommonAttributesContent({
                                [States.Pace]: '8',
                                [States.Parry]: '6',
                                [States.Toughness]: '8',
                            }),
                        ],
                        margin: [paragraphOffset, 0, 0, 0],
                    },
                ],
            }),
            getCharContent({
                border: borderColor.Sentinels,
                leftOffset: false,
                image: 'keeper.png',
                bigImage: true,
                title: `Тибериус Дубовый кулак (Tiberius Oakfist)`,
                commonTitle: 'Хранитель рощи',
                points: undefined,
                withPictLines: [
                    {
                        text: `Тибериус Дубовый Кулак — Дитя Кенария, потомок союза полубога с женщиной Калдорай. В нем заключена сила самого леса и связь с Природой. Хотя для Дитя Кенария необычно покидать леса Калдорай и неслыханно отправляться в такую ​​пустынную землю, как Нордскол, но у него есть на то свои причины. Когда была отправлена ​​первая экспедиция, для защиты лагеря были отправлены три семени Древних Защитников. Теперь Тибериус должен увидеть, что случилось с этими драгоценными и магическими семенами.`,
                        alignment: 'justify',
                    },
                    quickTextFormat(`**Ранг**: ${getFromDict(RanksTranslations, Ranks.Veteran)} (57 опыта)`),
                ],
                bottomLines: [
                    getUnitAttributesContent({
                        [States.Agility]: '6',
                        [States.Smarts]: '6',
                        [States.Spirit]: '8',
                        [States.Strength]: '6',
                        [States.Vigor]: '8',
                    }),
                    getUnitSkillsContent({
                        [Skills.Faith]: '10',
                        [Skills.Fighting]: '8',
                        [Skills.Guts]: '6',
                        [Skills.Healing]: '6',
                        [Skills.Intimidation]: '6',
                        [Skills.Notice]: '6',
                        [Skills.Survival]: '6',
                        [Skills.Tracking]: '6',
                    }),
                    getUnitCommonAttributesContent({
                        [States.Charisma]: '-2',
                        [States.Pace]: '7',
                        [States.Parry]: '6',
                        [States.Toughness]: '7 (6)',
                    }),
                    quickTextFormat(`**Изъяны**: ${[
                        `${getFromDict(HindrancesTranslations, Hindrances.AllThumbs)}`,
                        `${getFromDict(HindrancesTranslations, Hindrances.Outsider)}`,
                        `${getFromDict(HindrancesTranslations, Hindrances.Stubborn)}`,
                        `${getFromDict(HindrancesTranslations, Hindrances.Arrogant)}`,
                        `${getFromDict(HindrancesTranslations, Hindrances.Loyal)}`,
                    ].join(', ')}`),
                    quickTextFormat(`**Черты**: ${[
                        `${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Магия Природы (Nature Magic))`,
                        `${getFromDict(EdgesTranslations, Edges.NaturesFury)} (Сила+2 когти)`,
                        `${getFromDict(EdgesTranslations, Edges.Champion)}`,
                        `${getFromDict(EdgesTranslations, Edges.Command)}`,
                        `${getFromDict(EdgesTranslations, Edges.NaturalLeader)}`,
                        `${getFromDict(EdgesTranslations, Edges.SpellAura)}`,
                    ].join(', ')}`),
                    quickTextFormat(`**Снаряжение**: ${[
                        `Зачарованные когти (Когти - Сила+3)`,
                        `Зачарованная броня из шкур (+2 Брони, -1 ББ)`,
                    ].join(', ')}`),
                    quickTextFormat(`**Магия Природы (Nature Magic)**: **Пункты Силы**: 25; **Заклинания**: ${[
                        `*${getFromDict(PowersTranslations, Powers.OffensiveArmor)} (Шипы (Thorns))*`,
                        `*${getFromDict(PowersTranslations, Powers.Healing)}*`,
                        `*${getFromDict(PowersTranslations, Powers.Paralyze)}*`,
                        `*${getFromDict(PowersTranslations, Powers.Smite)}*`,
                    ].join(', ')}`),
                ],
            }),
            getCharContent({
                newPage: true,
                border: borderColor.Sentinels,
                leftOffset: true,
                image: 'druidtalon.png',
                bigImage: false,
                title: `Арномиус (Arnomius)`,
                commonTitle: 'Друид-ворон',
                points: '45',
                withPictLines: [
                    {
                        text: `Друиды-вороны клянутся в своей преданности тотему а Штормового Ворона и оказывают мощную поддержку армиям Стражей, выступая и в качестве заклинателей, и в качестве разведчиков.`,
                        alignment: 'justify',
                    },
                    quickTextFormat(`**Личность**: ${'_'.repeat(persinalityLineLength)}`),
                    getUnitAttributesContent({
                        [States.Agility]: '8',
                        [States.Smarts]: '8',
                        [States.Spirit]: '8',
                        [States.Strength]: '6',
                        [States.Vigor]: '8',
                    }),
                ],
                bottomLines: [
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
                        `${getFromDict(HindrancesTranslations, Hindrances.AllThumbs)}`,
                    ].join(', ')}`),
                    quickTextFormat(`**Черты**: ${[
                        `${getFromDict(EdgesTranslations, Edges.LowLightVision)}`,
                        `${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Магия Природы (Nature Magic))`,
                        `${getFromDict(EdgesTranslations, Edges.Druid)}`,
                        `${getFromDict(EdgesTranslations, Edges.ImprovedDodge)}`,
                    ].join(', ')}`),
                    quickTextFormat(`***Пункты Силы***: 15; ***Заклинания***: ${[
                        `*${getFromDict(PowersTranslations, Powers.BoostLowerTrait)}*`,
                        `*${getFromDict(PowersTranslations, Powers.Bolt)}*`,
                        `*${getFromDict(PowersTranslations, Powers.Stun)} (Циклон (Cyclone))*`,
                        `*${getFromDict(PowersTranslations, Powers.ShapeChange)}*`,
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
                                `Благословленные Когти/Клюв (Claws/Beak) (Сила+1, ББ 1)`,
                                getFromDict(EdgesTranslations, Edges.LowLightVision),
                                `${getFromDict(EdgesTranslations, Edges.NaturesStrength)} (+1 Броня)`,
                            ].join(', ')}`),
                            getUnitCommonAttributesContent({
                                [States.Pace]: '2',
                                [States.Parry]: '5',
                                [States.Toughness]: '7 (6)',
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
                        `Благословенный посох (Сила+2, ББ 1, +1 Парирование)`,
                    ].join(', ')}`),
                ],
            }),
            getCharContent({
                newPage: true,
                border: borderColor.Sentinels,
                leftOffset: false,
                image: 'demonhunter.png',
                bigImage: true,
                title: `Малекант Падший (Malecante the Fallen)`,
                commonTitle: 'Ночной эльф Охотник на демонов',
                points: undefined,
                withPictLines: [
                    {
                        text: `После того, как Иллидан восстановил Колодец Жизни (Well of Life), у многих Калдорай появилось сильное искушение снова использовать силу тайной магии. Малекант был одним из тех, кто поддался. Фактически, он поддался так основательно, что едва не стал рабом жестокого демона. Впрочем, ему повезло. Он открыл ритуал, связывающий демона в сосуде из стали и плоти. Он своевременно выполнил ритуал и искупил свою ошибку, обуздав магическую энергию демона, чтобы сражаться с другими представителями его вида и другими угрозами Калдорай.`,
                        alignment: 'justify',
                    },
                ],
                bottomLines: [
                    quickTextFormat(`**Ранг**: ${getFromDict(RanksTranslations, Ranks.Veteran)} (58 опыта)`),
                    getUnitAttributesContent({
                        [States.Agility]: '8',
                        [States.Smarts]: '8',
                        [States.Spirit]: '8',
                        [States.Strength]: '8',
                        [States.Vigor]: '8',
                    }),
                    getUnitSkillsContent({
                        [Skills.Fighting]: '10',
                        [Skills.Guts]: '10',
                        [Skills.Intimidation]: '8',
                        [Skills.Notice]: '8',
                        [Skills.Spellcasting]: '8',
                    }),
                    getUnitCommonAttributesContent({
                        [States.Charisma]: '-2 (-4 среди Калдорай)',
                        [States.Pace]: '6',
                        [States.Parry]: '7',
                        [States.Toughness]: '8 (5)',
                    }),
                    quickTextFormat(`**Изъяны**: ${[
                        `${getFromDict(HindrancesTranslations, Hindrances.AllThumbs)}`,
                        `${getFromDict(HindrancesTranslations, Hindrances.Solitary)}`,
                        `${getFromDict(HindrancesTranslations, Hindrances.Proud)}`,
                        `${getFromDict(HindrancesTranslations, Hindrances.BadEyes)} (Мистическое Ослепление (Mystic Blinding))`,
                        `${getFromDict(HindrancesTranslations, Hindrances.Bloodthirsty)}`,
                        `${getFromDict(HindrancesTranslations, Hindrances.CodeOfHonor)} (всегда давать противнику шанс защитить себя, демонстрируя свои возможности)`,
                    ].join(', ')}`),
                    quickTextFormat(`**Черты**: ${[
                        `${getFromDict(EdgesTranslations, Edges.LowLightVision)}`,
                        `${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Охотник на Демонов (Demon Hunter))`,
                        `${getFromDict(EdgesTranslations, Edges.TrademarkWeapon)} (Наполненный Демонической энергией Боевой клинок (Demon-Infused warblade))`,
                        `${getFromDict(EdgesTranslations, Edges.ImprovedDodge)}`,
                        `${getFromDict(EdgesTranslations, Edges.ImprovedFrenzy)}`,
                    ].join(', ')}`),
                    quickTextFormat(`**Охотник на демонов (Demon Hunter) (Направление (Channeling), Магия Чернокнижника (Warlock Magic))**: **Пункты Силы**: 15; **Заклинания**: ${[
                        `*${getFromDict(PowersTranslations, Powers.Smite)} (Охваченный Пламенем Боевой клинок (Flame-Wreathed Warblade))*`,
                        `*${getFromDict(PowersTranslations, Powers.ManaBurn)} (${getFromDict(PowersTranslations, Powers.Bolt)} + 1d6 урона мане)*`,
                        `*${getFromDict(PowersTranslations, Powers.OffensiveArmor)} (Жар Преисподней (Immolate))*`,
                    ].join(', ')}`),
                    quickTextFormat(`**Снаряжение**: ${[
                        `Броня из шкуры химеры (+3)`,
                        `Наполненный Демонической энергией Боевой клинок (Demon-Infused warblade) (Сила+4, ББ 1)`,
                    ].join(', ')}`),
                ],
            }),
            getCharContent({
                newPage: true,
                border: borderColor.Sentinels,
                leftOffset: true,
                image: 'spellbreaker.png',
                bigImage: false,
                title: `Мараканис (Marakanis)`,
                commonTitle: 'Эльф крови Разрушитель заклинаний/Ведьмак',
                points: '53',
                withPictLines: [
                    {
                        text: `Кровавые Эльфы Кель'Таласа с подозрением относятся ко многим сородичам Высшим Эльфам, что уж говорить про Калдорай. Малекант вступил с ними в союз, поскольку он понимает образ мышления Кровавых Эльфов и может оценить их методы.`,
                        alignment: 'justify',
                    },
                    quickTextFormat(`**Личность**: ${'_'.repeat(persinalityLineLength)}`),
                ],
                bottomLines: [
                    getUnitAttributesContent({
                        [States.Agility]: '8',
                        [States.Smarts]: '8',
                        [States.Spirit]: '8',
                        [States.Strength]: '6',
                        [States.Vigor]: '6',
                    }),
                    getUnitSkillsContent({
                        [Skills.Fighting]: '8',
                        [Skills.Guts]: '8',
                        [Skills.Knowledge]: '8 (Магия)',
                        [Skills.Notice]: '8',
                        [Skills.Spellcasting]: '8',
                    }),
                    getUnitCommonAttributesContent({
                        [States.Charisma]: '-2',
                        [States.Pace]: '6',
                        [States.Parry]: '7',
                        [States.Toughness]: '8 (5)',
                    }),
                    quickTextFormat(`**Изъяны**: ${[
                        `${getFromDict(HindrancesTranslations, Hindrances.Cautious)}`,
                        `${getFromDict(HindrancesTranslations, Hindrances.MagicAddiction)}`,
                    ].join(', ')}`),
                    quickTextFormat(`**Черты**: ${[
                        `${getFromDict(EdgesTranslations, Edges.LowLightVision)}`,
                        `${getFromDict(EdgesTranslations, Edges.ArcaneBackground)} (Магия (Magic))`,
                        `${getFromDict(EdgesTranslations, Edges.Wizard)}`,
                        `${getFromDict(EdgesTranslations, Edges.SpellBreaker)}`,
                        `${getFromDict(EdgesTranslations, Edges.ControlSpell)}`,
                        `${getFromDict(EdgesTranslations, Edges.ArcaneResistance)}`,
                        `${getFromDict(EdgesTranslations, Edges.Block)}`,
                    ].join(', ')}`),
                    quickTextFormat(`**Тайная Магия (Arcane Magic)**: **Пункты Силы**: 10; **Заклинания**: ${[
                        `*${getFromDict(PowersTranslations, Powers.ManaBurn)} (${getFromDict(PowersTranslations, Powers.Bolt)} + 1d6 урона мане)*`,
                        `*${getFromDict(PowersTranslations, Powers.Dispel)}*`,
                        `*${getFromDict(PowersTranslations, Powers.Feedback)} (${getFromDict(PowersTranslations, Powers.Smite)} + 1d4 урона мане)*`,
                    ].join(', ')}`),
                    quickTextFormat(`**Снаряжение**: ${[
                        `Качественный Двойной Меч (Fine Twin Sword) (Сила+3, +1 Парирование)`,
                        `Латный доспех (+3)`,
                        `Каплевидный щит (+2 Парирвоание, +2 Стойкости против дальнего боя)`,
                    ].join(', ')}`),
                ],
            }),
            getTipText([
                quickTextFormat(`Про ***${getFromDict(EdgesTranslations, Edges.ControlSpell)}*** тоже нет никаких пояснений. Возможно, имеется ввиду ***${getFromDict(EdgesTranslations, Edges.CaptureSpell)}***, но это не точно.`),
            ]),
            getCharContent({
                border: borderColor.Sentinels,
                leftOffset: false,
                image: 'archer.png',
                bigImage: false,
                title: 'Лучники Калдорай (Kaldorei Archers)',
                commonTitle: undefined,
                points: '44 каждый',
                withPictLines: [
                    {
                        text: `Передовые линии армии Стражей, скрытные и меткие лучники Ночных Эльфов вполне обоснованно внушают страх всем, кто с ними сталкивался.`,
                        alignment: 'justify',
                    },
                    {
                        text: [
                            { text: `Катрис (Kathris)`, style: 'header4', },
                            '\t\t',
                            quickTextFormat(`**Личность**: ${'_'.repeat(persinalityLineLength)}`),
                        ]
                    },
                    {
                        text: [
                            { text: `Тета (Theta)`, style: 'header4', },
                            '\t\t\t\t',
                            quickTextFormat(`**Личность**: ${'_'.repeat(persinalityLineLength)}`),
                        ]
                    },
                    {
                        text: [
                            { text: `Делас (Delas)`, style: 'header4', },
                            '\t\t\t',
                            quickTextFormat(`**Личность**: ${'_'.repeat(persinalityLineLength)}`),
                        ]
                    },
                    {
                        text: [
                            { text: `Ариэль (Ariel)`, style: 'header4', },
                            '\t\t\t',
                            quickTextFormat(`**Личность**: ${'_'.repeat(persinalityLineLength)}`),
                        ]
                    },
                    {
                        text: [
                            { text: `Манала (Manala)`, style: 'header4', },
                            '\t',
                            quickTextFormat(`**Личность**: ${'_'.repeat(persinalityLineLength)}`),
                        ]
                    },
                ],
                bottomLines: [
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
                        [Skills.Shooting]: '8',
                        [Skills.Stealth]: '6 (+4)',
                    }),
                    getUnitCommonAttributesContent({
                        [States.Pace]: '6',
                        [States.Parry]: '4',
                        [States.Toughness]: '7 (5)',
                    }),
                    quickTextFormat(`**Изъяны**: ${[
                        `${getFromDict(HindrancesTranslations, Hindrances.AllThumbs)}`,
                        `${getFromDict(HindrancesTranslations, Hindrances.Outsider)}`,
                        `${getFromDict(HindrancesTranslations, Hindrances.Proud)}`,
                    ].join(', ')}`),
                    quickTextFormat(`**Черты**: ${[
                        `${getFromDict(EdgesTranslations, Edges.LowLightVision)}`,
                        `${getFromDict(EdgesTranslations, Edges.Shadowmeld)}`,
                        `${getFromDict(EdgesTranslations, Edges.Marksman)}`,
                        `${getFromDict(EdgesTranslations, Edges.RapidShot)}`,
                    ].join(', ')}`),
                    quickTextFormat(`**Снаряжение**: ${[
                        `Кольчужная рубашка (+2)`,
                        `Эльфийский длинный лук (2d6, ББ 1, 15/30/60)`,
                    ].join(', ')}`),
                    quickTextFormat(`**Боеприпасы**:\t***Очень много***\t*Много*\t*Мало*\t*Нет*`),
                ],
            }),
            getCharContent({
                newPage: true,
                border: borderColor.Sentinels,
                leftOffset: false,
                image: 'glaivethrower.png',
                bigImage: false,
                title: 'Метатели глеф/Баллисты (Glaive Throwers)',
                commonTitle: undefined,
                points: '80 каждый',
                withPictLines: [
                    {
                        text: `Столь же жуткие, как и опасные, Метатели глеф Калдорай, похоже, действуют с помощью магии, без оператора. По правде говоря, эти смертоносные осадные машины приводятся в движение совместными усилиями двух Светлячков (Wisps), странных духов, которые могут быть духами мертвых Ночных Эльфов.`,
                        alignment: 'justify',
                    },
                    getUnitAttributesContent({
                        [States.Agility]: '4-2',
                        [States.Smarts]: '6',
                        [States.Spirit]: '8',
                        [States.Vigor]: '8',
                    }),
                ],
                bottomLines: [
                    getUnitSkillsContent({
                        [Skills.Guts]: '8',
                        [Skills.Notice]: '6',
                        [Skills.Shooting]: '8',
                    }),
                    getUnitCommonAttributesContent({
                        [States.Pace]: '4 (Ускорение 1)',
                        [States.Parry]: '2',
                        [States.Toughness]: '12 (4)',
                    }),
                    quickTextFormat(`**Урон**: 2d8, ББ 3. Также поражает цель на 2 дюйма позади основной цели, нанося тот же урон, но без ББ.`),
                    quickTextFormat(`**Дистанция**: 20/40/80`),
                    quickTextFormat(`**Перезарядка**: 1 Действие`),
                    quickTextFormat(`**Боеприпасы**:\t*Очень много*\t***Много***\t*Мало*\t*Нет*`),
                ],
            }),
        ];
    }

    return [
        {
            text: 'Заранее созданные персонажи',
            style: 'header2',
            pageBreak: 'before',
            tocItem: true,
            tocStyle: { bold: true, },
            tocMargin: [tocParagraphOffset, 0, 0, 0],
        },
        getAllianceCharacters(),
        getHordeCharacters(),
        getSentinelsCharacters(),


        getCharContent({
            border: borderColor.Sentinels,
            leftOffset: false,
            image: 'bloodmage.png',
            bigImage: true,
            title: `Title (Title)`,
            commonTitle: 'commonTitle',
            points: undefined,
            withPictLines: [
                {
                    text: `123`,
                    alignment: 'justify',
                },
                quickTextFormat(`**Ранг**: ${getFromDict(RanksTranslations, Ranks.Veteran)} (57 опыта)`),
            ],
            bottomLines: [
                getUnitAttributesContent({
                    [States.Agility]: '10',
                    [States.Smarts]: '10',
                    [States.Spirit]: '10',
                    [States.Strength]: '10',
                    [States.Vigor]: '10',
                }),
                getUnitSkillsContent({
                    [Skills.Fighting]: '10',
                }),
                getUnitCommonAttributesContent({
                    [States.Charisma]: '8',
                    [States.Pace]: '8',
                    [States.Parry]: '6',
                    [States.Toughness]: '10 (8)',
                }),
                quickTextFormat(`**Изъяны**: ${[
                    `${getFromDict(HindrancesTranslations, Hindrances.AllThumbs)}`,
                ].join(', ')}`),
                quickTextFormat(`**Черты**: ${[
                    `${getFromDict(EdgesTranslations, Edges.Armor)}`,
                ].join(', ')}`),
                quickTextFormat(`**Тайная Магия (Arcane Magic)**: **Пункты Силы**: 20; **Заклинания**: ${[
                    `*${getFromDict(PowersTranslations, Powers.Bolt)}*`,
                ].join(', ')}`),
                quickTextFormat(`**Снаряжение**: ${[
                    `aaaaa`,
                ].join(', ')}`),
            ],
        }),
        getCharContent({
            border: borderColor.Sentinels,
            leftOffset: true,
            image: 'bloodmage.png',
            bigImage: false,
            title: `Title (Title)`,
            commonTitle: 'commonTitle',
            points: '666',
            withPictLines: [
                {
                    text: `123`,
                    alignment: 'justify',
                },
                quickTextFormat(`**Личность**: ${'_'.repeat(persinalityLineLength)}`),
                getUnitAttributesContent({
                    [States.Agility]: '10',
                    [States.Smarts]: '10',
                    [States.Spirit]: '10',
                    [States.Strength]: '10',
                    [States.Vigor]: '10',
                }),
                getUnitSkillsContent({
                    [Skills.Fighting]: '10',
                }),
            ],
            bottomLines: [
                getUnitCommonAttributesContent({
                    [States.Charisma]: '8',
                    [States.Pace]: '8',
                    [States.Parry]: '6',
                    [States.Toughness]: '10 (8)',
                }),
                quickTextFormat(`**Изъяны**: ${[
                    `${getFromDict(HindrancesTranslations, Hindrances.AllThumbs)}`,
                ].join(', ')}`),
                quickTextFormat(`**Черты**: ${[
                    `${getFromDict(EdgesTranslations, Edges.Armor)}`,
                ].join(', ')}`),
                quickTextFormat(`**Тайная Магия (Arcane Magic)**: **Пункты Силы**: 20; **Заклинания**: ${[
                    `*${getFromDict(PowersTranslations, Powers.Bolt)}*`,
                ].join(', ')}`),
                quickTextFormat(`**Снаряжение**: ${[
                    `aaaaa`,
                ].join(', ')}`),
            ],
        }),
    ];
}

module.exports = function getAdventureContent() {
    return [
        {
            text: 'Приключение - Враг Моего Врага... (The Enemy of My Enemy...)',
            style: 'header1',
            pageBreak: 'before',
            tocItem: true,
            tocStyle: { bold: true, fontSize: 16, },
        },
        getAdventureText(),
        {
            text: 'Противники (The Opposition)',
            style: 'header2',
            tocItem: true,
            tocStyle: { bold: true, },
            tocMargin: [tocParagraphOffset, 0, 0, 0],
        },
        getOppositionContent(),
        getMapsContent(),
        getCharactersContent(),
    ];
};