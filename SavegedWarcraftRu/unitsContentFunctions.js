const { States, StatesTranslations, Skills, SkillsTranslations, Hindrances, HindrancesTranslations, Ranks, RanksTranslations, Edges, EdgesTranslations, Powers, PowersTranslations, } = require('./settingTranslations');
const { paragraphOffset, tocParagraphOffset, getFontPath, getImagePath, quickTextFormat, getTipText, getHorizontalLine, getFromDict, } = require('./commonFunctions');

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

module.exports = {
    getUnitContent,
    getUnitAttributesContent,
    getUnitSkillsContent,
    getUnitCommonAttributesContent,
};