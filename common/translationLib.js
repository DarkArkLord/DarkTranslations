const WordCountForm = Object.freeze({
    SINGLE: 'ЕДИНСТВЕННОЕ',
    MANY: 'МНОЖЕСТВЕННОЕ',
});

const WordCaseForm = Object.freeze({
    NOMINATIVE: 'ИМЕНИТЕЛЬНЫЙ',
    GENITIVE: 'РОДИТЕЛЬНЫЙ',
    ACCUSATIVE: 'ВИНИТЕЛЬНЫЙ',
    DATIVE: 'ДАТЕЛЬНЫЙ',
    INSTRUMENTAL: 'ТВОРИТЕЛЬНЫЙ',
    PREPOSITIONAL: 'ПРЕДЛОЖНЫЙ',
});

class TranslationUnit {
    constructor() {
        this.data = {};
        this.pagesInfo = undefined;
    }

    addTranslation(caseForm, countForm, text) {
        if (this.data[caseForm]?.[countForm]) {
            throw new Error(`Перевод для падежа "${caseForm}" и числа "${countForm}" уже есть перевод "${this.data[caseForm][countForm]}", попытка добавить "${text}"`);
        }

        this.data = this.data ?? {};
        this.data[caseForm] = this.data[caseForm] ?? {};
        this.data[caseForm][countForm] = text;

        return this;
    }

    setPages(text) {
        if (this.pagesInfo) {
            throw new Error(`Уже есть данные о страницах "${this.pagesInfo}", попытка добавить "${text}"`);
        }

        this.pagesInfo = text;

        return this;
    }

    getTranslation(caseForm, countForm) {
        return this.data?.[caseForm]?.[countForm];
    }
}

class TranslationsBuilder {
    constructor(translationData) {
        this.translationData = translationData;

        this.showTranslationFlag = false;
        this.showOriginalFlag = false;
        this.showPagesFlag = false;

        this.bold = false;
        this.italic = false;

        this.pagesBrackets = false;
    }

    configure(showTranslation, showOriginal, showPages, bold, italic, pagesBrackets) {
        this.showTranslationFlag = showTranslation;
        this.showOriginalFlag = showOriginal;
        this.showPagesFlag = showPages;

        this.bold = bold;
        this.italic = italic;

        this.pagesBrackets = pagesBrackets;

        return this;
    }

    create() {
        let hasError = false;
        const parts = [];

        if (this.showTranslationFlag) {
            if (this.translationData?.translation) {
                parts.push(this.translationData.translation);
            } else {
                parts.push('НЕТ ПЕРЕВОДА');
                hasError = true;
            }
        }

        if (this.showOriginalFlag) {
            if (this.translationData?.original) {
                parts.push(`(${this.translationData.original})`);
            } else {
                parts.push('(НЕТ ОРИГИНАЛА)');
                hasError = true;
            }
        }

        if (this.showPagesFlag) {
            if (this.translationData?.pages) {
                if (this.pagesBrackets) {
                    parts.push(`(${this.translationData.pages})`);
                } else {
                    parts.push(`${this.translationData.pages}`);
                }
            } else {
                parts.push('НЕТ СТРАНИЦ');
                hasError = true;
            }
        }

        if (hasError) {
            parts.push(`(${this.translationData.original}: ${this.translationData?.caseForm}, ${this.translationData?.countForm})`)
        }

        const result = { text: parts.join(' ') };

        if (this.bold) {
            result.bold = true;
        }

        if (this.italic) {
            result.italic = true;
        }

        if (hasError) {
            result.color = 'red';
        }

        return result;
    }
}

class TranslationsManager {
    constructor() {
        this.data = {};
    }

    createTU(text) {
        if (this.data[text]) {
            throw new Error(`Уже существует набор переводов для "${text}"`);
        }

        return this.data[text] = new TranslationUnit();
    }

    setTU(text, transUnit) {
        if (this.data[text]) {
            throw new Error(`Уже существует набор переводов для "${text}"`);
        }

        return this.data[text] = transUnit;
    }

    getTU(text) {
        return this.data[text];
    }

    getTranslation(text, caseForm = WordCaseForm.NOMINATIVE, countForm = WordCountForm.SINGLE) {
        const tu = this.getTU(text);
        return {
            translation: tu?.getTranslation(caseForm, countForm),
            original: text,
            pages: tu?.pagesInfo,
            caseForm,
            countForm,
        };
    }

    getTranslationBuilder(text, caseForm = WordCaseForm.NOMINATIVE, countForm = WordCountForm.SINGLE) {
        const translationData = this.getTranslation(text, caseForm, countForm);
        return new TranslationsBuilder(translationData);
    }
}

module.exports = {
    WordCountForm,
    WordCaseForm,
    TranslationsManager,
};