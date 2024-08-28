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
        return new TranslationsPDFElementBuilder(translationData);
    }
}

class TranslationsDictionary {
    #name;
    #data;
    constructor(name) {
        this.#name = name;
        this.#data = {};
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

        return this.#data[text] = transUnit;
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

    createPDFManager() {
        return new TranslationsDictionaryPDFManager(this);
    }
}

module.exports = {
    WordCountForm,
    WordCaseForm,
    TranslationsDictionary,
};