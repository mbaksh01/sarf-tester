export class TranslationBuilder {
    static pastActivePositive(word: string, row: number): string {
        return this.pastTenseTranslationBuilder(word, false, true, row);
    }

    static pastActiveNegative(word: string, row: number): string {
        return this.pastTenseTranslationBuilder(word, true, true, row);
    }

    static pastPassivePositive(word: string, row: number): string {
        return this.pastTenseTranslationBuilder(word, false, false, row);
    }

    static pastPassiveNegative(word: string, row: number): string {
        return this.pastTenseTranslationBuilder(word, true, false, row);
    }

    private static pastTenseTranslationBuilder(word: string, isNegative: boolean, isActive: boolean, row: number): string {
        let base = "";

        switch (row) {
            case 1:
                base = `He one male`;
                break;
            case 2:
                base = `They two males`;
                break;
            case 3:
                base = `They many males`;
                break;
            case 4:
                base = `She one female`;
                break;
            case 5:
                base = `They two females`;
                break;
            case 6:
                base = `They many females`;
                break;
            case 7:
                base = `You one male`;
                break;
            case 8:
                base = `You two males`;
                break;
            case 9:
                base = `You many males`;
                break;
            case 10:
                base = `You one female`;
                break;
            case 11:
                base = `You two females`;
                break;
            case 12:
                base = `You many females`;
                break;
            case 13:
                base = `I one male or female`;
                break;
            case 14:
                base = `We many males or females`;
                break;
            default:
                return 'Error: Invalid row number';
        }

        if (isNegative) {
            if (isActive) {
                base = `${base} did not ${word}`;
            }
            else {
                base = `${base} ${[1, 4, 7, 10, 13].includes(row) ? "was" : "were"} not ${word}`;
            }
        }
        else {
            if (isActive) {
                base = `${base} ${word}`;
            }
            else {
                base = `${base} ${[1, 4, 7, 10, 13].includes(row) ? "was" : "were"} ${word}`;
            }
        }

        return base;
    }
}