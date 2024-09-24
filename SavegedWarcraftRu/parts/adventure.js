const { States, StatesTranslations, Skills, SkillsTranslations, Hindrances, HindrancesTranslations, Ranks, RanksTranslations, Edges, EdgesTranslations, Powers, PowersTranslations, } = require('../settingTranslations');
const { paragraphOffset, tocParagraphOffset, getFontPath, getImagePath, quickTextFormat, getTipText, getHorizontalLine, getFromDict, } = require('../commonFunctions');

module.exports = function getAdventureContent() {
    return [
        {
            text: 'Приключение - Враг Моего Врага... (The Enemy of My Enemy...)',
            style: 'header1',
            pageBreak: 'before',
            tocItem: true,
            tocStyle: { bold: true, fontSize: 16, },
        },
    ];
};