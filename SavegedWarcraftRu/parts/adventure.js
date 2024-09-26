const { States, StatesTranslations, Skills, SkillsTranslations, Hindrances, HindrancesTranslations, Ranks, RanksTranslations, Edges, EdgesTranslations, Powers, PowersTranslations, } = require('../settingTranslations');
const { paragraphOffset, tocParagraphOffset, getFontPath, getImagePath, quickTextFormat, getTipText, getHorizontalLine, getFromDict, } = require('../commonFunctions');

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
    function getUnitContent(data) {
        const titleText = data.points ? {
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
        } : {
            text: data.title,
            style: 'header4',
        };

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
                        titleText,
                    ],
                ]
            }
        } : titleText;

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
        // const commonAttributesList = [States.Pace, States.Parry, States.Toughness];
        const commonAttributesText = Object.keys(data)
            .map(key => `**${StatesTranslations[key]}**: ${data?.[key]}`)
            .join('; ');
        return quickTextFormat(commonAttributesText);
    }

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
            isWildCard: false,
            title: 'aaaaaa (aaaaaaa)',
            points: undefined,
            lines: [
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
                quickTextFormat(`**Особые способности**: ${[
                    `${getFromDict(EdgesTranslations, Edges.Armor)}`,
                ].join(', ')}`),
                getUnitCommonAttributesContent({
                    [States.Pace]: '10',
                    [States.Parry]: '10',
                    [States.Toughness]: '10 (10)',
                }),
                quickTextFormat(`**Снаряжение**: ${[
                    `aaaaaaa`,
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
    ];
};