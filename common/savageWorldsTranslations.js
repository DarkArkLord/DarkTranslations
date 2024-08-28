const { WordCaseForm, WordCountForm, TranslationsManager } = require('../common/translationLib');

const StatesTranslations = (function () {
    const res = new TranslationsManager();

    res.createTU('Agility')
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Ловкость')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, 'Ловкости')
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, 'Ловкости')
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, 'Ловкость')
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, 'Ловкостью')
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, 'Ловкости');

    res.createTU('Smarts')
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Смекалка')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, 'Смекалки')
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, 'Смекалке')
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, 'Смекалку')
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, 'Смекалкой')
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, 'Смекалке');

    res.createTU('Spirit')
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Характер')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, 'Характера')
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, 'Характеру')
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, 'Характер')
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, 'Характером')
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, 'Характере');

    res.createTU('Strength')
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Сила')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, 'Силы')
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, 'Силе')
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, 'Силу')
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, 'Силой')
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, 'Силе');

    res.createTU('Vigor')
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Выносливость')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, 'Выносливости')
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, 'Выносливости')
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, 'Выносливость')
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, 'Выносливостью')
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, 'Выносливости');

    res.createTU('Charisma')
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Харизма')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, 'Харизмы')
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, 'Харизме')
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, 'Харизму')
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, 'Харизмою')
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, 'Харизме');

    return res;
})();

const SkillsTranslations = (function () {
    const res = new TranslationsManager();

    //

    return res;
})();

const HindrancesTranslations = (function () {
    const res = new TranslationsManager();

    //

    return res;
})();

const EdgesTranslations = (function () {
    const res = new TranslationsManager();

    res.createTU('Agile')
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Ловкий');

    return res;
})();

const CreaturesTranslations = (function () {
    const res = new TranslationsManager();

    //

    return res;
})();


module.exports = {
    WordCountForm,
    WordCaseForm,
    StatesTranslations,
    SkillsTranslations,
    HindrancesTranslations,
    EdgesTranslations,
    CreaturesTranslations,
};