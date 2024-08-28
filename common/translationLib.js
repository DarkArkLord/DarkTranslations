const WordCountForm = Object.freeze({
    SINGLE: 'ЕДИНСТВЕННОЕ',
    MANY: 'МНОЖЕСТВЕННОЕ',
});

const WordCaseForm = Object.freeze({
    NOMINATIVE: 'ИМЕНИТЕЛЬНЫЙ',
    GENITIVE: 'РОДИТЕЛЬНЫЙ',
    DATIVE: 'ДАТЕЛЬНЫЙ',
    ACCUSATIVE: 'ВИНИТЕЛЬНЫЙ',
    INSTRUMENTAL: 'ТВОРИТЕЛЬНЫЙ',
    PREPOSITIONAL: 'ПРЕДЛОЖНЫЙ',
});

class TranslationUnit {
    #data;
    #pagesInfo;
    constructor() {
        this.#data = {};
        this.#pagesInfo = undefined;
    }

    addTranslation(caseForm, countForm, text) {
        if (this.#data[caseForm]?.[countForm]) {
            throw new Error(`Перевод для падежа "${caseForm}" и числа "${countForm}" уже есть перевод "${this.#data[caseForm][countForm]}", попытка добавить "${text}"`);
        }

        this.#data = this.#data ?? {};
        this.#data[caseForm] = this.#data[caseForm] ?? {};
        this.#data[caseForm][countForm] = text;

        return this;
    }

    setPages(text) {
        if (this.#pagesInfo) {
            throw new Error(`Уже есть данные о страницах "${this.#pagesInfo}", попытка добавить "${text}"`);
        }

        this.#pagesInfo = text;

        return this;
    }

    getTranslation(caseForm, countForm) {
        return this.#data?.[caseForm]?.[countForm];
    }
}

class TranslationsLoggerPDF {
    #enable;
    #data;
    constructor(enable, data) {
        this.#enable = enable;
        this.#data = data;
    }

    isEnable() {
        return this.#enable;
    }

    toPdf() {
        if (!this.#enable) {
            return [];
        }

        const dictKeys = Object.keys(this.#data);
        if (dictKeys.length > 0) {
            return [
                {
                    svg: '<svg width="500" height="5" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="2" x2="500" y2="2" style="stroke:#F00;stroke-width:5" /></svg>',
                    width: 500,
                    alignment: 'center',
                    pageBreak: 'before',
                    margin: [0, 10, 0, 10],
                },
                {
                    text: 'Список ошибок:',
                    bold: true,
                    color: '#F00',
                },
                {
                    ul: Object.keys(this.#data).map(dictName => {
                        return [
                            { text: `${dictName}: ${this.#data[dictName].count} ошибок`, bold: true },
                            {
                                ul: Object.keys(this.#data[dictName].errors).map(word => {
                                    return [
                                        { text: `${word}:`, color: 'black' },
                                        {
                                            ul: Object.keys(this.#data[dictName].errors[word].trans).map(caseForm => {
                                                return [
                                                    { text: `${caseForm}:`, italics: true, },
                                                    {
                                                        ul: Object.keys(this.#data[dictName].errors[word].trans[caseForm]).map(countForm => {
                                                            const errorsCount = this.#data[dictName].errors[word].trans[caseForm][countForm];
                                                            return {
                                                                text: [
                                                                    { text: countForm, italics: true },
                                                                    { text: `: ${errorsCount}`, color: 'black' },
                                                                ],
                                                                fontSize: 10,
                                                            };
                                                        }),
                                                    }
                                                ];
                                            }),
                                            fontSize: 10,
                                        },
                                    ];
                                }),
                            },
                        ];
                    }),
                    color: '#F00',
                },
                {
                    svg: '<svg width="500" height="5" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="2" x2="500" y2="2" style="stroke:#F00;stroke-width:5" /></svg>',
                    width: 500,
                    alignment: 'center',
                    margin: [0, 10, 0, 10],
                },
            ];
        } else {
            return [
                {
                    svg: '<svg width="500" height="5" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="2" x2="500" y2="2" style="stroke:#0F0;stroke-width:5" /></svg>',
                    width: 500,
                    alignment: 'center',
                    pageBreak: 'before',
                    margin: [0, 10, 0, 10],
                },
                {
                    text: 'Нет ошибок!',
                    color: '#0F0',
                    background: '#555',
                    margin: [0, 10, 0, 10],
                },
                {
                    svg: '<svg width="500" height="5" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="2" x2="500" y2="2" style="stroke:#0F0;stroke-width:5" /></svg>',
                    width: 500,
                    alignment: 'center',
                    margin: [0, 10, 0, 10],
                },
            ]
        }
    }
}

class TranslationsLogger {
    #enable;
    #data;
    constructor(enable) {
        this.#enable = enable;
        this.#data = {};
    }

    isEnable() {
        return this.#enable;
    }

    #getDict(dict) {
        return this.#data[dict] = this.#data[dict] ?? { errors: {}, count: 0 };
    }

    #getWord(dict, word) {
        return dict.errors[word] = dict.errors[word] ?? { trans: {}, pages: 0 };
    }

    logNoData(transData) {
        const dict = this.#getDict(transData.dict);
        dict.count++;

        const word = this.#getWord(dict, transData.original);
        const caseForm = word.trans[transData.caseForm] = word.trans[transData.caseForm] ?? {};
        caseForm[transData.countForm] = (caseForm[transData.countForm] ?? 0) + 1;
    }

    logNoPages(transData) {
        const dict = this.#getDict(transData.dict);
        dict.count++;

        const word = this.#getWord(dict, transData.original);
        word.pages++;
    }

    toPdf() {
        return new TranslationsLoggerPDF(this.#enable, this.#data);
    }
}

class TranslationsPDFElementBuilder {
    #translationData;
    #showTranslationFlag;
    #showOriginalFlag;
    #showPagesFlag;
    #bold;
    #italics;
    #pagesBrackets;

    #logger;

    constructor(translationData, logger) {
        this.#translationData = translationData;

        this.#showTranslationFlag = true;
        this.#showOriginalFlag = false;
        this.#showPagesFlag = false;

        this.#bold = false;
        this.#italics = false;

        this.#pagesBrackets = false;

        this.#logger = logger;
    }

    hideTranslation() {
        this.#showTranslationFlag = false;
        return this;
    }

    showOriginal() {
        this.#showOriginalFlag = true;
        return this;
    }

    showPages(pagesBrackets) {
        this.#showPagesFlag = true;
        this.#pagesBrackets = pagesBrackets;
        return this;
    }

    format(bold, italics) {
        this.#bold = bold;
        this.#italics = italics;
        return this;
    }

    create() {
        let hasError = false;
        const parts = [];

        if (this.#showTranslationFlag) {
            if (this.#translationData?.translation) {
                parts.push(this.#translationData.translation);
            } else {
                if (this.#logger.isEnable()) {
                    this.#logger.logNoData(this.#translationData);
                }
                parts.push('НЕТ ПЕРЕВОДА');
                hasError = true;
            }
        }

        if (this.#showOriginalFlag) {
            parts.push(`(${this.#translationData.original})`);
        }

        if (this.#showPagesFlag) {
            if (this.#translationData?.pages) {
                if (this.#pagesBrackets) {
                    parts.push(`(${this.#translationData.pages})`);
                } else {
                    parts.push(`${this.#translationData.pages}`);
                }
            } else {
                if (this.#logger.isEnable()) {
                    this.#logger.logNoPages(this.#translationData);
                }
                parts.push('НЕТ СТРАНИЦ');
                hasError = true;
            }
        }

        if (hasError) {
            parts.push(`(${this.#translationData?.dict}[${this.#translationData.original}]: ${this.#translationData?.caseForm}, ${this.#translationData?.countForm})`)
        }

        const result = { text: parts.join(' ') };

        if (this.#bold) {
            result.bold = true;
        }

        if (this.#italics) {
            result.italics = true;
        }

        if (hasError) {
            result.color = 'red';
        }

        return result;
    }
}

class TranslationsDictionaryPDFManager {
    #dictionary;
    constructor(dictionary) {
        this.#dictionary = dictionary;
    }

    translate(text, caseForm = WordCaseForm.NOMINATIVE, countForm = WordCountForm.SINGLE) {
        return this.#dictionary.translate(text, caseForm, countForm);
    }

    pdf(text, caseForm = WordCaseForm.NOMINATIVE, countForm = WordCountForm.SINGLE) {
        const translationData = this.#dictionary.translate(text, caseForm, countForm);
        return new TranslationsPDFElementBuilder(translationData, this.#dictionary.getLogger());
    }

    logsPdf() {
        return this.#dictionary.getLogger().toPdf();
    }
}

class TranslationsDictionary {
    #name;
    #data;
    #logger;
    constructor(name, logger) {
        this.#name = name;
        this.#data = {};
        this.#logger = logger;
    }

    create(text) {
        if (this.#data[text]) {
            throw new Error(`Уже существует набор переводов для "${text}"`);
        }

        return this.#data[text] = new TranslationUnit();
    }

    set(text, transUnit) {
        if (this.#data[text]) {
            throw new Error(`Уже существует набор переводов для "${text}"`);
        }

        return this.#data[text] = transUnit;
    }

    copy(from, to) {
        if (!this.#data[from]) {
            throw new Error(`Не существует набора переводов для "${from}"`);
        }
        if (this.#data[to]) {
            throw new Error(`Уже существует набор переводов для "${to}"`);
        }

        return this.#data[to] = this.#data[from];
    }

    get(text) {
        return this.#data[text];
    }

    translate(text, caseForm = WordCaseForm.NOMINATIVE, countForm = WordCountForm.SINGLE) {
        const tu = this.get(text);
        return {
            translation: tu?.getTranslation(caseForm, countForm),
            original: text,
            pages: tu?.pagesInfo,
            dict: this.#name,
            caseForm,
            countForm,
        };
    }

    getLogger() {
        return this.#logger;
    }

    createPDFManager() {
        return new TranslationsDictionaryPDFManager(this);
    }
}

class TranslationsDictionaryManager {
    #data;
    #logger;
    constructor(loggerEnabled) {
        this.#data = {};
        this.#logger = new TranslationsLogger(loggerEnabled);
    }

    create(key) {
        if (this.#data[key]) {
            throw new Error(`Уже существует словарь "${key}"`);
        }

        return this.#data[key] = new TranslationsDictionary(key, this.#logger);
    }

    set(key, dict) {
        if (this.#data[key]) {
            throw new Error(`Уже существует словарь "${key}"`);
        }

        return this.#data[key] = dict;
    }

    copy(from, to) {
        if (!this.#data[from]) {
            throw new Error(`Не существует словарь "${from}"`);
        }
        if (this.#data[to]) {
            throw new Error(`Уже существует словарь "${to}"`);
        }

        return this.#data[to] = this.#data[from];
    }

    get(key) {
        return this.#data[key];
    }

    getLoggerPdf() {
        return this.#logger.toPdf();
    }
}

module.exports = {
    WordCountForm,
    WordCaseForm,
    TranslationsDictionaryManager,
};