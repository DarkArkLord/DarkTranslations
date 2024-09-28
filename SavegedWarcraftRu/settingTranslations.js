const { States, StatesTranslations, Skills, SkillsTranslations, Hindrances, HindrancesTranslations, Ranks, RanksTranslations, Edges, EdgesTranslations, Powers, PowersTranslations, } = require('../common/savageWorldsTranslations');

const SettingHindrances = Object.freeze({
    MagicAddiction: 'Magic Addiction',
    Short: 'Short',
    SavageHeritage: 'Savage Heritage',
});

const SettingHindrancesTranslations = Object.freeze({
    [SettingHindrances.MagicAddiction]: 'Зависимость от магии',
    [SettingHindrances.Short]: 'Низкорослый',
    [SettingHindrances.SavageHeritage]: 'Дикое наследие',
});

const SettingEdges = Object.freeze({
    Defend: 'Defend',
    ImprovedDefend: 'Improved Defend',
    RapidShot: 'Rapid Shot',
    ImprovedRapidShot: 'Improved Rapid Shot',
    StrafingRun: 'Strafing Run',
    TwoArrowsNocked: 'Two Arrows Nocked',
    HailOfArrows: 'Hail of Arrows',
    ArcaneUndead: 'Arcane Undead',
    BrillianceAura: 'Brilliance Aura',
    CaptureSpell: 'Capture Spell',
    ImprovedCaptureSpell: 'Improved Capture Spell',
    CreateUndead: 'Create Undead',
    DarkRitual: 'Dark Ritual',
    DrainSpell: 'Drain Spell',
    MagicalBeastForm: 'Magical Beast Form',
    SpellAura: 'Spell Aura',
    Artillerist: 'Artillerist',
    Cavalry: 'Cavalry',
    DruidPriestShaman: 'Druid/Priest/Shaman',
    Druid: 'Druid',
    Priest: 'Priest',
    Shaman: 'Shaman',
    Musketeer: 'Musketeer',
    Necromancer: 'Necromancer',
    SpellBreaker: 'Spell Breaker',
    Warlock: 'Warlock',
    NaturesFury: 'Nature’s Fury',
    GoForTheThroat: 'Go For the Throat',
});

const SettingEdgesTranslations = Object.freeze({
    [SettingEdges.Defend]: 'Оборона',
    [SettingEdges.ImprovedDefend]: 'Улучшенная Оборона',
    [SettingEdges.RapidShot]: 'Быстрый выстрел',
    [SettingEdges.ImprovedRapidShot]: 'Улучшенный быстрый выстрел',
    [SettingEdges.StrafingRun]: 'Бреющий полет',
    [SettingEdges.TwoArrowsNocked]: 'Две стрелы на тетиве',
    [SettingEdges.HailOfArrows]: 'Град стрел',
    [SettingEdges.ArcaneUndead]: 'Магическая нежить',
    [SettingEdges.BrillianceAura]: 'Аура великолепия',
    [SettingEdges.CaptureSpell]: 'Захват заклинания',
    [SettingEdges.ImprovedCaptureSpell]: 'Улучшенный захват заклинания',
    [SettingEdges.CreateUndead]: 'Создание нежити',
    [SettingEdges.DarkRitual]: 'Темный ритуал',
    [SettingEdges.DrainSpell]: 'Истощение заклинания',
    [SettingEdges.MagicalBeastForm]: 'Форма магического зверя',
    [SettingEdges.SpellAura]: 'Аура заклинания',
    [SettingEdges.Artillerist]: 'Артиллерист',
    [SettingEdges.Cavalry]: 'Кавалерия',
    [SettingEdges.DruidPriestShaman]: 'Друид/Жрец/Шаман',
    [SettingEdges.Druid]: 'Друид',
    [SettingEdges.Priest]: 'Жрец',
    [SettingEdges.Shaman]: 'Шаман',
    [SettingEdges.Musketeer]: 'Мушкетер',
    [SettingEdges.Necromancer]: 'Некромант',
    [SettingEdges.SpellBreaker]: 'Разрушитель заклинаний',
    [SettingEdges.Warlock]: 'Чернокнижник',
    [SettingEdges.NaturesFury]: 'Ярость природы',
    [SettingEdges.GoForTheThroat]: 'Вцепиться в горло/инстинкт хищника',
});

const SettingPowers = Object.freeze({
    // Заглушка для оригинальных сил
    SlowOriginal: 'SlowOriginal',
    // Новые силы
    ArmorOffensive: 'Armor, Offensive',
    BlastContinuous: 'Blast, Continuous',
    Blight: 'Blight',
    Bloodlust: 'Bloodlust',
    Bombardment: 'Bombardment',
    Contact: 'Contact',
    Doom: 'Doom',
    EtherealForm: 'Ethereal Form',
    FarSight: 'Far Sight',
    Inferno: 'Inferno',
    InnerFire: 'Inner Fire',
    LifeDrain: 'Life Drain',
    Mend: 'Mend',
    Slow: 'Slow',
    Summon: 'Summon',
    TransformOther: 'Transform Other',
    // Силы без описания
    ManaBurn: 'Mana Burn',
    AntiMagicShell: 'Anti-Magic Shell',
    ContinuousBlast: 'Continuous Blast',
    OffensiveArmor: 'Offensive Armor',
    FrostNova: 'Frost Nova',
    DeathCoil: 'Death Coil',
    DeathPact: 'Death Pact',
    Paralyze: 'Paralyze',
});

const SettingPowersTranslations = Object.freeze({
    // Заглушка для оригинальных сил
    [SettingPowers.SlowOriginal]: PowersTranslations[Powers.Slow],
    // Новые силы
    [SettingPowers.ArmorOffensive]: 'Наступательная Броня',
    [SettingPowers.BlastContinuous]: 'Продолжительный взрыв',
    [SettingPowers.Blight]: 'Порча',
    [SettingPowers.Bloodlust]: 'Жажда крови',
    [SettingPowers.Bombardment]: 'Бомбардировка',
    [SettingPowers.Contact]: 'Контакт',
    [SettingPowers.Doom]: 'Рок',
    [SettingPowers.EtherealForm]: 'Эфирная форма',
    [SettingPowers.FarSight]: 'Зоркость',
    [SettingPowers.Inferno]: 'Инферно',
    [SettingPowers.InnerFire]: 'Внутренний огонь',
    [SettingPowers.LifeDrain]: 'Высасывание жизни',
    [SettingPowers.Mend]: 'Починка',
    [SettingPowers.Slow]: 'Замедление',
    [SettingPowers.Summon]: 'Призыв',
    [SettingPowers.TransformOther]: 'Преобразование другого',
    // Силы без описания
    [SettingPowers.ManaBurn]: 'Сжигание маны',
    [SettingPowers.AntiMagicShell]: 'Доспех Антимагии',
    [SettingPowers.ContinuousBlast]: 'Продолжительный взрыв',
    [SettingPowers.OffensiveArmor]: 'Наступательная Броня',
    [SettingPowers.FrostNova]: 'Кольцо льда',
    [SettingPowers.DeathCoil]: 'Лик смерти',
    [SettingPowers.DeathPact]: 'Смертельный союз',
    [SettingPowers.Paralyze]: 'Паралич',
});

module.exports = {
    States,
    StatesTranslations,
    Skills,
    SkillsTranslations,
    Hindrances: Object.freeze({
        ...Hindrances,
        ...SettingHindrances,
    }),
    HindrancesTranslations: Object.freeze({
        ...HindrancesTranslations,
        ...SettingHindrancesTranslations,
    }),
    Ranks,
    RanksTranslations,
    Edges: Object.freeze({
        ...Edges,
        ...SettingEdges,
    }),
    EdgesTranslations: Object.freeze({
        ...EdgesTranslations,
        ...SettingEdgesTranslations,
    }),
    Powers: Object.freeze({
        ...Powers,
        ...SettingPowers,
    }),
    PowersTranslations: Object.freeze({
        ...PowersTranslations,
        ...SettingPowersTranslations,
    }),
};