const { WordCaseForm, WordCountForm, TranslationsDictionaryManager } = require('../common/translationLib');

const Dictionaries = Object.freeze({
    States: 'States',
    Skills: 'Skills',
    Hindrances: 'Hindrances',
    Edges: 'Edges',
    Creatures: 'Creatures',
});

const Translations = new TranslationsDictionaryManager();

const States = Object.freeze({
    Agility: 'Agility',
    Smarts: 'Smarts',
    Spirit: 'Spirit',
    Strength: 'Strength',
    Vigor: 'Vigor',
    Charisma: 'Charisma',
});

(function StatesTranslations() {
    const res = Translations.createDict(Dictionaries.States);

    res.createTU(States.Agility)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Ловкость')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, 'Ловкости')
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, 'Ловкости')
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, 'Ловкость')
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, 'Ловкостью')
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, 'Ловкости');

    res.createTU(States.Smarts)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Смекалка')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, 'Смекалки')
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, 'Смекалке')
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, 'Смекалку')
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, 'Смекалкой')
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, 'Смекалке');

    res.createTU(States.Spirit)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Характер')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, 'Характера')
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, 'Характеру')
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, 'Характер')
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, 'Характером')
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, 'Характере');

    res.createTU(States.Strength)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Сила')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, 'Силы')
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, 'Силе')
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, 'Силу')
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, 'Силой')
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, 'Силе');

    res.createTU(States.Vigor)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Выносливость')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, 'Выносливости')
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, 'Выносливости')
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, 'Выносливость')
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, 'Выносливостью')
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, 'Выносливости');

    res.createTU(States.Charisma)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Харизма')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, 'Харизмы')
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, 'Харизме')
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, 'Харизму')
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, 'Харизмою')
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, 'Харизме');

    return res;
})();

const Skills = Object.freeze({
    Spellcasting: 'Spellcasting',
});

(function SkillsTranslations() {
    const res = Translations.createDict(Dictionaries.Skills);

    res.createTU(Skills.Spellcasting)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Колдовство')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, 'Колдовства')
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, 'Колдовству')
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, 'Колдовство')
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, 'Колдовством')
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, 'Колдовстве');

    return res;
})();

const Hindrances = Object.freeze({
    Cautious: 'Cautious',
    MagicAddiction: 'Magic Addiction',
    Vengeful: 'Vengeful',
});

(function HindrancesTranslations() {
    const res = Translations.createDict(Dictionaries.Hindrances);

    //

    return res;
})();

const Edges = Object.freeze({
    Agile: 'Agile',
    LowLightVision: 'Low-Light Vision',
    MagicAptitude: 'Magic Aptitude',
});

(function EdgesTranslations() {
    const res = Translations.createDict(Dictionaries.Edges);

    res.createTU('Agile')
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Ловкий');

    return res;
})();

const Creatures = Object.freeze({
    aaa: 'aaa',
});

(function CreaturesTranslations() {
    const res = Translations.createDict(Dictionaries.Creatures);

    //

    return res;
})();


module.exports = {
    WordCaseForm,
    WordCountForm,
    Dictionaries,
    States,
    Skills,
    Hindrances,
    Edges,
    Creatures,
    swTranslations: Translations.createPDFManager(),
};