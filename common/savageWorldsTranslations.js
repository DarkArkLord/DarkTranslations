const { WordCaseForm, WordCountForm, TranslationsDictionaryManager } = require('../common/translationLib');

const Dictionaries = Object.freeze({
    States: 'States',
    Skills: 'Skills',
    Hindrances: 'Hindrances',
    Edges: 'Edges',
    Powers: 'Powers',
    Equipment: 'Equipment',
    Creatures: 'Creatures',
});

const DictionariesManager = new TranslationsDictionaryManager(true);

const States = Object.freeze({
    Agility: 'Agility',
    Smarts: 'Smarts',
    Spirit: 'Spirit',
    Strength: 'Strength',
    Vigor: 'Vigor',
    Charisma: 'Charisma',
});

(function StatesTranslations() {
    const res = DictionariesManager.create(Dictionaries.States);

    res.create(States.Agility)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Ловкость')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, 'Ловкости')
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, 'Ловкости')
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, 'Ловкость')
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, 'Ловкостью')
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, 'Ловкости');

    res.create(States.Smarts)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Смекалка')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, 'Смекалки')
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, 'Смекалке')
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, 'Смекалку')
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, 'Смекалкой')
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, 'Смекалке');

    res.create(States.Spirit)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Характер')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, 'Характера')
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, 'Характеру')
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, 'Характер')
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, 'Характером')
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, 'Характере');

    res.create(States.Strength)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Сила')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, 'Силы')
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, 'Силе')
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, 'Силу')
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, 'Силой')
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, 'Силе');

    res.create(States.Vigor)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Выносливость')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, 'Выносливости')
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, 'Выносливости')
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, 'Выносливость')
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, 'Выносливостью')
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, 'Выносливости');

    res.create(States.Charisma)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Харизма')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, 'Харизмы')
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, 'Харизме')
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, 'Харизму')
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, 'Харизмою')
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, 'Харизме');

    return res;
})();

const Skills = Object.freeze({
    Boating: 'Boating',
    Climbing: 'Climbing',
    Driving: 'Driving',
    Fighting: 'Fighting',
    Gambling: 'Gambling',
    Healing: 'Healing',
    Intimidation: 'Intimidation',
    Investigation: 'Investigation',
    Knowledge: 'Knowledge',
    Lockpicking: 'Lockpicking',
    Notice: 'Notice',
    Persuasion: 'Persuasion',
    Piloting: 'Piloting',
    Repair: 'Repair',
    Riding: 'Riding',
    Shooting: 'Shooting',
    Stealth: 'Stealth',
    Streetwise: 'Streetwise',
    Survival: 'Survival',
    Swimming: 'Swimming',
    Taunt: 'Taunt',
    Throwing: 'Throwing',
    Tracking: 'Tracking',
    // Arcane Skills
    Spellcasting: 'Spellcasting',
});

(function SkillsTranslations() {
    const res = DictionariesManager.create(Dictionaries.Skills);

    res.create(Skills.Boating)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Судовождение')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Skills.Climbing)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Лазанье')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, 'Лазанья')
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Skills.Driving)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Вождение')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Skills.Fighting)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Драка')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Skills.Gambling)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Азартные игры')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Skills.Healing)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Лечение')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Skills.Intimidation)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Запугивание')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Skills.Investigation)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Расследование')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Skills.Knowledge)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Знание')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Skills.Lockpicking)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Взлом')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Skills.Notice)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Внимание')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Skills.Persuasion)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Убеждение')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, 'Убеждения')
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, 'Убеждение')
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Skills.Piloting)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Пилотирование')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Skills.Repair)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Ремонт')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, 'Ремонта')
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, 'Ремонт')
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, 'Ремонтом')
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Skills.Riding)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Верховая езда')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Skills.Shooting)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Стрельба')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Skills.Stealth)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Маскировка')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, 'Маскировки')
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, 'Маскировке')
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Skills.Streetwise)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Уличное чутьё')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, 'Уличного чутья')
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Skills.Survival)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Выживание')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Skills.Swimming)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Плавание')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Skills.Taunt)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Провокация')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Skills.Throwing)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Метание')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Skills.Tracking)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Выслеживание')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, 'Выслеживания')
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, 'Выслеживание')
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, 'Выслеживанием')
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    // Arcane Skills
    res.create(Skills.Spellcasting)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Колдовство')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, 'Колдовства')
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, 'Колдовству')
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, 'Колдовство')
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, 'Колдовством')
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, 'Колдовстве');

    return res;
})();

const Hindrances = Object.freeze({
    AllThumbs: 'AllThumbs',
    Anemic: 'Anemic',
    Arrogant: 'Arrogant',
    BadEyes: 'BadEyes',
    BadLuck: 'BadLuck',
    BigMouth: 'BigMouth',
    Blind: 'Blind',
    Bloodthirsty: 'Bloodthirsty',
    Cautious: 'Cautious',
    Clueless: 'Clueless',
    CodeOfHonor: 'CodeOfHonor',
    Curious: 'Curious',
    DeathWish: 'DeathWish',
    Delusional: 'Delusional',
    DoubtingThomas: 'DoubtingThomas',
    Elderly: 'Elderly',
    Enemy: 'Enemy',
    Greedy: 'Greedy',
    Habit: 'Habit',
    HardOfHearing: 'HardOfHearing',
    Heroic: 'Heroic',
    Illiterate: 'Illiterate',
    Lame: 'Lame',
    Loyal: 'Loyal',
    Mean: 'Mean',
    Obese: 'Obese',
    OneArm: 'OneArm',
    OneEye: 'OneEye',
    OneLeg: 'OneLeg',
    Outsider: 'Outsider',
    Overconfident: 'Overconfident',
    Pacifist: 'Pacifist',
    Phobia: 'Phobia',
    Poverty: 'Poverty',
    Quirk: 'Quirk',
    Small: 'Small',
    Stubborn: 'Stubborn',
    Ugly: 'Ugly',
    Vengeful: 'Vengeful',
    Vow: 'Vow',
    Wanted: 'Wanted',
    Yellow: 'Yellow',
    Young: 'Young',
});

(function HindrancesTranslations() {
    const res = DictionariesManager.create(Dictionaries.Hindrances);

    res.create(Hindrances.AllThumbs)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Hindrances.Anemic)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Hindrances.Arrogant)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Hindrances.BadEyes)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Hindrances.BadLuck)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Hindrances.BigMouth)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Hindrances.Blind)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Hindrances.Bloodthirsty)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Hindrances.Cautious)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Hindrances.Clueless)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Hindrances.CodeOfHonor)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Hindrances.Curious)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Hindrances.DeathWish)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Hindrances.Delusional)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Hindrances.DoubtingThomas)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Hindrances.Elderly)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Hindrances.Enemy)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Hindrances.Greedy)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Hindrances.Habit)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Hindrances.HardOfHearing)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Hindrances.Heroic)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Hindrances.Illiterate)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Hindrances.Lame)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Hindrances.Loyal)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Hindrances.Mean)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Hindrances.Obese)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Hindrances.OneArm)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Hindrances.OneEye)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Hindrances.OneLeg)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Hindrances.Outsider)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Hindrances.Overconfident)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Hindrances.Pacifist)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Hindrances.Phobia)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Hindrances.Poverty)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Hindrances.Quirk)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Hindrances.Small)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Hindrances.Stubborn)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Hindrances.Ugly)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Hindrances.Vengeful)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Hindrances.Vow)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Hindrances.Wanted)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Hindrances.Yellow)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Hindrances.Young)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    return res;
})();

const Edges = Object.freeze({
    //#region Base edges
    Ace: 'Ace',
    Acrobat: 'Acrobat',
    Adept: 'Adept',
    Alertness: 'Alertness',
    Ambidextrous: 'Ambidextrous',
    ArcaneBackground: 'ArcaneBackground',
    ArcaneResistance: 'ArcaneResistance',
    ImprovedArcaneResistance: 'ImprovedArcaneResistance',
    Assassin: 'Assassin',
    Attractive: 'Attractive',
    VeryAttractive: 'VeryAttractive',
    BeastBond: 'BeastBond',
    BeastMaster: 'BeastMaster',
    Berserk: 'Berserk',
    Block: 'Block',
    ImprovedBlock: 'ImprovedBlock',
    Brave: 'Brave',
    Brawler: 'Brawler',
    Bruiser: 'Bruiser',
    Brawny: 'Brawny',
    Champion: 'Champion',
    Charismatic: 'Charismatic',
    CombatReflexes: 'CombatReflexes',
    Command: 'Command',
    CommandPresence: 'CommandPresence',
    CommonBond: 'CommonBond',
    Connections: 'Connections',
    Counterattack: 'Counterattack',
    ImprovedCounterattack: 'ImprovedCounterattack',
    DangerSense: 'DangerSense',
    DeadShot: 'DeadShot',
    Dodge: 'Dodge',
    ImprovedDodge: 'ImprovedDodge',
    Elan: 'Elan',
    Extraction: 'Extraction',
    ImprovedExtraction: 'ImprovedExtraction',
    FastHealer: 'FastHealer',
    Fervor: 'Fervor',
    FirstStrike: 'FirstStrike',
    ImprovedFirstStrike: 'ImprovedFirstStrike',
    FleetFooted: 'FleetFooted',
    Florentine: 'Florentine',
    Followers: 'Followers',
    Frenzy: 'Frenzy',
    ImprovedFrenzy: 'ImprovedFrenzy',
    Gadgeteer: 'Gadgeteer',
    GiantKiller: 'GiantKiller',
    HardToKill: 'HardToKill',
    HarderToKill: 'HarderToKill',
    Healer: 'Healer',
    HoldTheLine: 'HoldTheLine',
    HolyWarrior: 'HolyWarrior',
    UnholyWarrior: 'UnholyWarrior',
    ImprovisationalFighter: 'ImprovisationalFighter',
    Inspire: 'Inspire',
    Investigator: 'Investigator',
    JackOfAllTrades: 'JackOfAllTrades',
    KillerInstinct: 'KillerInstinct',
    LeaderOfMen: 'LeaderOfMen',
    LevelHeaded: 'LevelHeaded',
    ImprovedLeveHeaded: 'ImprovedLeveHeaded',
    Linguist: 'Linguist',
    LiquidCourage: 'LiquidCourage',
    Luck: 'Luck',
    GreatLuck: 'GreatLuck',
    Marksman: 'Marksman',
    MartialArtist: 'MartialArtist',
    ImprovedMartialArtist: 'ImprovedMartialArtist',
    MartialArtsMaster: 'MartialArtsMaster',
    McGyver: 'McGyver',
    Mentalist: 'Mentalist',
    MightyBlow: 'MightyBlow',
    MrFixIt: 'MrFixIt',
    NaturalLeader: 'NaturalLeader',
    NervesOfSteel: 'NervesOfSteel',
    ImprovedNervesOfSteel: 'ImprovedNervesOfSteel',
    NewPower: 'NewPower',
    Noble: 'Noble',
    NoMercy: 'NoMercy',
    PowerPoints: 'PowerPoints',
    PowerSurge: 'PowerSurge',
    Professional: 'Professional',
    Expert: 'Expert',
    Master: 'Master',
    Quick: 'Quick',
    QuickDraw: 'QuickDraw',
    RapidRecharge: 'RapidRecharge',
    ImprovedRapidRecharge: 'ImprovedRapidRecharge',
    Rich: 'Rich',
    FilthyRich: 'FilthyRich',
    RockAndRoll: 'RockAndRoll',
    Scavenger: 'Scavenger',
    Scholar: 'Scholar',
    Sidekick: 'Sidekick',
    SoulDrain: 'SoulDrain',
    SteadyHands: 'SteadyHands',
    Sweep: 'Sweep',
    ImprovedSweep: 'ImprovedSweep',
    StrongWilled: 'StrongWilled',
    Tactician: 'Tactician',
    Thief: 'Thief',
    ToughAsNails: 'ToughAsNails',
    ImprovedToughAsNails: 'ImprovedToughAsNails',
    TrademarkWeapon: 'TrademarkWeapon',
    ImprovedTrademarkWeapon: 'ImprovedTrademarkWeapon',
    TwoFisted: 'TwoFisted',
    WeaponMaster: 'WeaponMaster',
    MasterOfArms: 'MasterOfArms',
    Wizard: 'Wizard',
    Woodsman: 'Woodsman',
    //#endregion
    //#region Monsters edges
    Aquatic: 'Aquatic',
    Armor: 'Armor',
    Burrowing: 'Burrowing',
    Construct: 'Construct',
    Elemental: 'Elemental',
    Ethereal: 'Ethereal',
    Fear: 'Fear',
    Fearless: 'Fearless',
    Flight: 'Flight',
    Gargantuan: 'Gargantuan',
    Hardy: 'Hardy',
    Infection: 'Infection',
    Infravision: 'Infravision',
    Immunity: 'Immunity',
    Invulnerability: 'Invulnerability',
    LowLightVision: 'Low-Light Vision',
    Paralysis: 'Paralysis',
    Poison: 'Poison',
    Regeneration: 'Regeneration',
    Size: 'Size',
    Small: 'Small',
    Large: 'Large',
    Huge: 'Huge',
    Strength: 'Strength',
    Stun: 'Stun',
    Undead: 'Undead',
    WallWalker: 'Wall Walker',
    Weakness: 'Weakness',
    //#endregion
    //#region Ranks edges
    Novice: 'Novice',
    Seasoned: 'Seasoned',
    Veteran: 'Veteran',
    Heroic: 'Heroic',
    Legendary: 'Legendary',
    //#endregion
    //#region Warcraft edges
    Defend: 'Defend',
    //#endregion
});

(function EdgesTranslations() {
    const res = DictionariesManager.create(Dictionaries.Edges);

    //#region Base edges
    res.create(Edges.Ace)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Acrobat)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Adept)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Alertness)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Ambidextrous)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.ArcaneBackground)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.ArcaneResistance)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.ImprovedArcaneResistance)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Assassin)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Attractive)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.VeryAttractive)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.BeastBond)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.BeastMaster)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Berserk)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Block)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.ImprovedBlock)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Brave)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Brawler)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Bruiser)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Brawny)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Champion)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Charismatic)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.CombatReflexes)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Command)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.CommandPresence)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.CommonBond)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Connections)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Counterattack)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.ImprovedCounterattack)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.DangerSense)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.DeadShot)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Dodge)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.ImprovedDodge)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Elan)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Extraction)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.ImprovedExtraction)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.FastHealer)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Fervor)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.FirstStrike)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.ImprovedFirstStrike)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.FleetFooted)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Florentine)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Followers)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Frenzy)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.ImprovedFrenzy)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Gadgeteer)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.GiantKiller)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.HardToKill)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.HarderToKill)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Healer)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.HoldTheLine)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.HolyWarrior)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.UnholyWarrior)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.ImprovisationalFighter)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Inspire)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Investigator)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.JackOfAllTrades)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.KillerInstinct)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.LeaderOfMen)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.LevelHeaded)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.ImprovedLeveHeaded)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Linguist)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.LiquidCourage)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Luck)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.GreatLuck)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Marksman)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.MartialArtist)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.ImprovedMartialArtist)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.MartialArtsMaster)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.McGyver)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Mentalist)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.MightyBlow)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.MrFixIt)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.NaturalLeader)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.NervesOfSteel)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.ImprovedNervesOfSteel)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.NewPower)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Noble)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.NoMercy)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.PowerPoints)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.PowerSurge)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Professional)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Expert)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Master)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Quick)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.QuickDraw)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.RapidRecharge)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.ImprovedRapidRecharge)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Rich)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.FilthyRich)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.RockAndRoll)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Scavenger)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Scholar)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Sidekick)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.SoulDrain)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.SteadyHands)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Sweep)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.ImprovedSweep)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.StrongWilled)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Tactician)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Thief)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.ToughAsNails)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.ImprovedToughAsNails)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.TrademarkWeapon)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.ImprovedTrademarkWeapon)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.TwoFisted)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.WeaponMaster)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.MasterOfArms)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Wizard)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Woodsman)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);
    //#endregion

    //#region Monsters edges
    res.create(Edges.Aquatic)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Armor)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Burrowing)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Construct)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Elemental)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Ethereal)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Fear)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Fearless)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Flight)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Gargantuan)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Hardy)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Infection)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Infravision)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Immunity)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Invulnerability)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.LowLightVision)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Paralysis)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Poison)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Regeneration)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Size)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Small)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Large)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Huge)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Strength)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Stun)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Undead)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.WallWalker)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Weakness)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);
    //#endregion

    //#region Ranks edges
    res.create(Edges.Novice)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Seasoned)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Veteran)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Heroic)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Edges.Legendary)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);
    //#endregion

    //#region Warcraft edges
    res.create(Edges.Defend)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);
    //#endregion

    return res;
})();

const Powers = Object.freeze({
    //#region Base powers
    Armor: 'Armor',
    Banish: 'Banish',
    Barrier: 'Barrier',
    BeastFriend: 'Beast Friend',
    Blast: 'Blast',
    Blind: 'Blind',
    Bolt: 'Bolt',
    BoostLowerTrait: 'Boost/Lower Trait',
    BoostTrait: 'Boost Trait',
    LowerTrait: 'Lower Trait',
    Burrow: 'Burrow',
    Burst: 'Burst',
    Confusion: 'Confusion',
    DamageField: 'Damage Field',
    Darksight: 'Darksight',
    Deflection: 'Deflection',
    DetectConcealArcana: 'Detect/Conceal Arcana',
    DetectArcana: 'Detect Arcana',
    ConcealArcana: 'Conceal Arcana',
    Disguise: 'Disguise',
    Dispel: 'Dispel',
    Divination: 'Divination',
    DrainPowerPoints: 'Drain Power Points',
    ElementalManipulation: 'Elemental Manipulation',
    Entangle: 'Entangle',
    EnvironmentalProtection: 'Environmental Protection',
    Farsight: 'Farsight',
    Fear: 'Fear',
    Fly: 'Fly',
    GreaterHealing: 'Greater Healing',
    GrowthShrink: 'Growth/Shrink',
    Growth: 'Growth',
    Shrink: 'Shrink',
    Havoc: 'Havoc',
    Healing: 'Healing',
    Intangibility: 'Intangibility',
    Invisibility: 'Invisibility',
    LightObscure: 'Light/Obscure',
    Light: 'Light',
    Obscure: 'Obscure',
    MindReading: 'Mind Reading',
    Pummel: 'Pummel',
    Puppet: 'Puppet',
    Quickness: 'Quickness',
    ShapeChange: 'Shape Change',
    Slow: 'Slow',
    Slumber: 'Slumber',
    Smite: 'Smite',
    SpeakLanguage: 'Speak Language',
    Speed: 'Speed',
    Stun: 'Stun',
    Succor: 'Succor',
    SummonAlly: 'Summon Ally',
    Telekinesis: 'Telekinesis',
    Teleport: 'Teleport',
    WallWalker: 'Wall Walker',
    WarriorsGift: `Warrior's Gift`,
    Zombie: 'Zombie',
    //#endregion
    //#region Warcraft powers
    aaaaaaaaa: 'aaaaaaaaa',
    //#endregion
});

(function PowersTranslations() {
    const res = DictionariesManager.create(Dictionaries.Powers);

    //#region Base powers
    res.create(Powers.Armor)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.Banish)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.Barrier)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.BeastFriend)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.Blast)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.Blind)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.Bolt)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.BoostLowerTrait)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.BoostTrait)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.LowerTrait)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.Burrow)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.Burst)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.Confusion)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.DamageField)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.Darksight)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.Deflection)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.DetectConcealArcana)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.DetectArcana)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.ConcealArcana)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.Disguise)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.Dispel)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.Divination)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.DrainPowerPoints)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.ElementalManipulation)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.Entangle)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.EnvironmentalProtection)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.Farsight)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.Fear)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.Fly)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.GreaterHealing)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.GrowthShrink)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.Growth)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.Shrink)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.Havoc)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.Healing)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.Intangibility)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.Invisibility)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.LightObscure)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.Light)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.Obscure)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.MindReading)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.Pummel)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.Puppet)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.Quickness)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.ShapeChange)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.Slow)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.Slumber)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.Smite)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.SpeakLanguage)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.Speed)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.Stun)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.Succor)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.SummonAlly)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.Telekinesis)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.Teleport)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.WallWalker)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.WarriorsGift)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Powers.Zombie)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);
    //#endregion

    return res;
})();

const Equipment = Object.freeze({
    aaa: 'aaa',
});

(function EquipmentTranslations() {
    const res = DictionariesManager.create(Dictionaries.Equipment);

    //

    return res;
})();

const Creatures = Object.freeze({
    aaa: 'aaa',
});

(function CreaturesTranslations() {
    const res = DictionariesManager.create(Dictionaries.Creatures);

    //

    return res;
})();


module.exports = {
    WordCaseForm,
    WordCountForm,
    States,
    StatesTranslations: DictionariesManager.get(Dictionaries.States).createPDFManager(),
    Skills,
    SkillsTranslations: DictionariesManager.get(Dictionaries.Skills).createPDFManager(),
    Hindrances,
    HindrancesTranslations: DictionariesManager.get(Dictionaries.Hindrances).createPDFManager(),
    Edges,
    EdgesTranslations: DictionariesManager.get(Dictionaries.Edges).createPDFManager(),
    Powers,
    PowersTranslations: DictionariesManager.get(Dictionaries.Powers).createPDFManager(),
    Equipment,
    EquipmentTranslations: DictionariesManager.get(Dictionaries.Equipment).createPDFManager(),
    Creatures,
    CreaturesTranslations: DictionariesManager.get(Dictionaries.Creatures).createPDFManager(),
    Logger: DictionariesManager.getLoggerPdf(),
};