var harakat = {
    fatha: '\u064E',
    kasra: '\u0650',
    damma: '\u064F',
    sukun: '\u0652',
    tashdid: '\u0651',
}

var arabicLetters = {
    alif: '\u0627',
    ba: '\u0628',
    ta: '\u062A',
    tha: '\u062B',
    jim: '\u062C',
    ha: '\u062D',
    kha: '\u062E',
    dal: '\u062F',
    dhal: '\u0630',
    ra: '\u0631',
    zay: '\u0632',
    sin: '\u0633',
    shin: '\u0634',
    sad: '\u0635',
    dad: '\u0636',
    ta2: '\u0637',
    dha: '\u0638',
    ain: '\u0639',
    ghain: '\u063A',
    fa: '\u0641',
    qaf: '\u0642',
    kaf: '\u0643',
    lam: '\u0644',
    mim: '\u0645',
    nun: '\u0646',
    ha2: '\u0647',
    waw: '\u0648',
    ya: '\u064A',
};

export class FormBuilder {
    static pastActivePositive(r1: string, r2: string, r3: string, baab: string, row: number): string {
        const root = `${r1}${harakat.fatha}${r2}${harakat.fatha}${r3}`;
        return this.formPastTenseTable(root, row);
    }

    static pastActiveNegative(r1: string, r2: string, r3: string, baab: string, row: number): string {
        const root = this.pastActivePositive(r1, r2, r3, baab, row);
        return `${arabicLetters.mim}${harakat.fatha}${arabicLetters.alif} ${root}`;
    }

    static pastPassivePositive(r1: string, r2: string, r3: string, row: number): string {
        const root = `${r1}${harakat.damma}${r2}${harakat.kasra}${r3}`;
        return this.formPastTenseTable(root, row);
    }

    static pastPassiveNegative(r1: string, r2: string, r3: string, row: number): string {
        const root = this.pastPassivePositive(r1, r2, r3, row);
        return `${arabicLetters.mim}${harakat.fatha}${arabicLetters.alif} ${root}`;
    }

    private static formPastTenseTable(root: string, row: number): string | string {
        switch (row) {
            case 1:
                return `${root}${harakat.fatha}`;
            case 2:
                return `${root}${harakat.fatha}${arabicLetters.alif}`;
            case 3:
                return `${root}${harakat.damma}${arabicLetters.waw}${harakat.sukun}${arabicLetters.alif}`;
            case 4:
                return `${root}${harakat.fatha}${arabicLetters.ta}${harakat.sukun}`;
            case 5:
                return `${root}${harakat.fatha}${arabicLetters.ta}${harakat.fatha}${arabicLetters.alif}`;
            case 6:
                return `${root}${harakat.sukun}${arabicLetters.nun}${harakat.fatha}`;
            case 7:
                return `${root}${harakat.sukun}${arabicLetters.ta}${harakat.fatha}`;
            case 8:
                return `${root}${harakat.sukun}${arabicLetters.ta}${harakat.damma}${arabicLetters.mim}${harakat.fatha}${arabicLetters.alif}`;
            case 9:
                return `${root}${harakat.sukun}${arabicLetters.ta}${harakat.damma}${arabicLetters.mim}${harakat.sukun}`;
            case 10:
                return `${root}${harakat.sukun}${arabicLetters.ta}${harakat.kasra}`;
            case 11:
                return `${root}${harakat.sukun}${arabicLetters.ta}${harakat.damma}${arabicLetters.mim}${harakat.fatha}${arabicLetters.alif}`;
            case 12:
                return `${root}${harakat.sukun}${arabicLetters.ta}${harakat.damma}${arabicLetters.nun}${harakat.tashdid}${harakat.fatha}`;
            case 13:
                return `${root}${harakat.sukun}${arabicLetters.ta}${harakat.damma}`;
            case 14:
                return `${root}${harakat.sukun}${arabicLetters.nun}${harakat.fatha}${arabicLetters.alif}`;
            default:
                return 'Error: Invalid row number';
        }
    }
}