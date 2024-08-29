const { WordCaseForm, WordCountForm, TranslationsDictionaryManager } = require('../common/translationLib');

const Dictionaries = Object.freeze({
    States: 'States',
    Skills: 'Skills',
    Hindrances: 'Hindrances',
    Edges: 'Edges',
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
    Spellcasting: 'Spellcasting',
    Repair: 'Repair',
});

(function SkillsTranslations() {
    const res = DictionariesManager.create(Dictionaries.Skills);

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
    Cautious: 'Cautious',
    Vengeful: 'Vengeful',
});

(function HindrancesTranslations() {
    const res = DictionariesManager.create(Dictionaries.Hindrances);

    //

    return res;
})();

const Edges = Object.freeze({
    LowLightVision: 'Low-Light Vision',
    Brawny: 'Brawny',
});

(function EdgesTranslations() {
    const res = DictionariesManager.create(Dictionaries.Edges);

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
    Creatures,
    CreaturesTranslations: DictionariesManager.get(Dictionaries.Creatures).createPDFManager(),
    Logger: DictionariesManager.getLoggerPdf(),
};