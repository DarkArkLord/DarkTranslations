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

class TranslationsDictionary {
    #data;
    constructor() {
        this.#data = {};
    }

    createTU(text) {
        if (this.#data[text]) {
            throw new Error(`Уже существует набор переводов для "${text}"`);
        }

        return this.#data[text] = new TranslationUnit();
    }

    setTU(text, transUnit) {
        if (this.#data[text]) {
            throw new Error(`Уже существует набор переводов для "${text}"`);
        }

        return this.#data[text] = transUnit;
    }

    copyTU(from, to) {
        if (!this.#data[from]) {
            throw new Error(`Не существует набора переводов для "${from}"`);
        }
        if (this.#data[to]) {
            throw new Error(`Уже существует набор переводов для "${to}"`);
        }

        return this.#data[text] = transUnit;
    }

    getTU(text) {
        return this.#data[text];
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

    constructor(translationData) {
        this.#translationData = translationData;

        this.#showTranslationFlag = true;
        this.#showOriginalFlag = false;
        this.#showPagesFlag = false;

        this.#bold = false;
        this.#italics = false;

        this.#pagesBrackets = false;
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
                parts.push('НЕТ ПЕРЕВОДА');
                hasError = true;
            }
        }

        if (this.#showOriginalFlag) {
            if (this.#translationData?.original) {
                parts.push(`(${this.#translationData.original})`);
            } else {
                parts.push('(НЕТ ОРИГИНАЛА)');
                hasError = true;
            }
        }

        if (this.#showPagesFlag) {
            if (this.#translationData?.pages) {
                if (this.#pagesBrackets) {
                    parts.push(`(${this.#translationData.pages})`);
                } else {
                    parts.push(`${this.#translationData.pages}`);
                }
            } else {
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

class TranslationsPDFManager {
    #dictionaryManager;
    constructor(dictionaryManager) {
        this.#dictionaryManager = dictionaryManager;
    }

    translate(text, dict, caseForm = WordCaseForm.NOMINATIVE, countForm = WordCountForm.SINGLE) {
        const tu = this.#dictionaryManager?.getDict(dict)?.getTU(text);
        return {
            translation: tu?.getTranslation(caseForm, countForm),
            original: text,
            pages: tu?.pagesInfo,
            dict,
            caseForm,
            countForm,
        };
    }

    translatePDF(text, dict, caseForm = WordCaseForm.NOMINATIVE, countForm = WordCountForm.SINGLE) {
        const translationData = this.translate(text, dict, caseForm, countForm);
        return new TranslationsPDFElementBuilder(translationData);
    }
}

class TranslationsDictionaryManager {
    #data;
    constructor() {
        this.#data = {};
    }

    createDict(key) {
        if (this.#data[key]) {
            throw new Error(`Уже существует словарь "${key}"`);
        }

        return this.#data[key] = new TranslationsDictionary();
    }

    setDict(key, transDict) {
        if (this.#data[key]) {
            throw new Error(`Уже существует словарь "${key}"`);
        }

        return this.#data[key] = transDict;
    }

    copyDict(from, to) {
        if (!this.#data[from]) {
            throw new Error(`Словарь "${from}" не существует`);
        }
        if (this.#data[to]) {
            throw new Error(`Уже существует словарь "${to}"`);
        }

        return this.#data[text] = transUnit;
    }

    getDict(key) {
        return this.#data[key];
    }

    createPDFManager() {
        return new TranslationsPDFManager(this);
    }
}

module.exports = {
    WordCountForm,
    WordCaseForm,
    TranslationsDictionaryManager,
};