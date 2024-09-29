const { States, StatesTranslations, Skills, SkillsTranslations, Hindrances, HindrancesTranslations, Ranks, RanksTranslations, Edges, EdgesTranslations, Powers, PowersTranslations, } = require('./settingTranslations');
const { paragraphOffset, tocParagraphOffset, getFontPath, getImagePath, quickTextFormat, getTipText, getHorizontalLine, getFromDict, } = require('./commonFunctions');
const getTitlePageContent = require('./parts/titlePage');
const getCharacterCreationContent = require('./parts/characterCreation');
const getBestiaryContent = require('./parts/bestiary');
const getUnitsBuildingsGearContent = require('./parts/unitsBuildingsGear');
const getHouseRulesContent = require('./parts/houseRules');
const getAdventureContent = require('./parts/adventure');

const fonts = {
    Roboto: {
        normal: getFontPath('Roboto-Regular.ttf'),
        bold: getFontPath('Roboto-Medium.ttf'),
        italics: getFontPath('Roboto-Italic.ttf'),
        bolditalics: getFontPath('Roboto-MediumItalic.ttf')
    },
};

const docDefinition = {
    info: {
        title: 'Savaged Warcraft Ru - v0.5',
        author: 'Dark Ark Lord',
        // subject: 'subject of document',
        // keywords: 'keywords for document',
    },
    pageSize: 'A4',
    pageOrientation: 'portrait',
    defaultStyle: {
        font: 'Roboto',
        fontSize: 12,
        alignment: 'justify',
    },
    styles: {
        header1: { fontSize: 26, bold: true, alignment: 'center', margin: [0, 10, 0, 10] },
        header2: { fontSize: 22, bold: true, alignment: 'center', margin: [0, 10, 0, 10] },
        header3: { fontSize: 18, bold: true, margin: [0, 10, 0, 10] },
        header4: { fontSize: 14, bold: true, margin: [0, 5, 0, 5] },
        tip: { fillColor: '#222', color: 'white', margin: 5 },
    },
    footer: function (currentPage, pageCount, pageSize) {
        return [
            { text: `стр. ${currentPage}`, bold: true, italics: true, alignment: 'right', margin: [0, 0, 10, 0] },
            { text: 'Savaged Warcraft Ru', bold: true, italics: true, alignment: 'left', margin: [10, 0, 0, 0] },
        ]
    },
    content: [
        getTitlePageContent(),
        {
            toc: {
                title: { text: 'Содержание', style: 'header1' }
            },
            pageBreak: 'before',
        },
        getCharacterCreationContent(),
        getBestiaryContent(),
        getUnitsBuildingsGearContent(),
        getHouseRulesContent(),
        getAdventureContent(),
    ],
};

module.exports = {
    fonts,
    docDefinition,
};