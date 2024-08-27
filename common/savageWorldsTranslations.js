const { WordCaseForm, WordCountForm, TranslationsManager } = require('../common/translationLib');

const StatesTranslations = (function () {
    const res = new TranslationsManager();

    res.createTU('Agility')
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Ловкость')
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, 'Ловкостью');

    res.createTU('Smarts')
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Смекалка')
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, 'Смекалкой');

    res.createTU('Spirit')
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Характер')
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, 'Характером');

    res.createTU('Strength')
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Сила')
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, 'Силой');

    res.createTU('Vigor')
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Выносливость')
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, 'Выносливостью');

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