import { TranslationBuilder } from '../src/translationBuilder';

describe('Past Active Positive', () => {
    const translations = [
        "He one male helped",
        "They two males helped",
        "They many males helped",
        "She one female helped",
        "They two females helped",
        "They many females helped",
        "You one male helped",
        "You two males helped",
        "You many males helped",
        "You one female helped",
        "You two females helped",
        "You many females helped",
        "I one male or female helped",
        "We many males or females helped",
    ];

    translations.forEach((expected, index) => {
        it(`Form ${index + 1}`, () => {
            const translation = TranslationBuilder.pastActivePositive("helped", index + 1);
            expect(translation).toBe(expected);
        });
    });
});

describe('Past Active Negative', () => {
    const translations = [
        "He one male did not help",
        "They two males did not help",
        "They many males did not help",
        "She one female did not help",
        "They two females did not help",
        "They many females did not help",
        "You one male did not help",
        "You two males did not help",
        "You many males did not help",
        "You one female did not help",
        "You two females did not help",
        "You many females did not help",
        "I one male or female did not help",
        "We many males or females did not help",
    ];

    translations.forEach((expected, index) => {
        it(`Form ${index + 1}`, () => {
            const translation = TranslationBuilder.pastActiveNegative("help", index + 1);
            expect(translation).toBe(expected);
        });
    });
});

describe('Past Passive Positive', () => {
    const translations = [
        "He one male was helped",
        "They two males were helped",
        "They many males were helped",
        "She one female was helped",
        "They two females were helped",
        "They many females were helped",
        "You one male was helped",
        "You two males were helped",
        "You many males were helped",
        "You one female was helped",
        "You two females were helped",
        "You many females were helped",
        "I one male or female was helped",
        "We many males or females were helped",
    ];

    translations.forEach((expected, index) => {
        it(`Form ${index + 1}`, () => {
            const translation = TranslationBuilder.pastPassivePositive("helped", index + 1);
            expect(translation).toBe(expected);
        });
    });
});

describe('Past Passive Negative', () => {
    const translations = [
        "He one male was not helped",
        "They two males were not helped",
        "They many males were not helped",
        "She one female was not helped",
        "They two females were not helped",
        "They many females were not helped",
        "You one male was not helped",
        "You two males were not helped",
        "You many males were not helped",
        "You one female was not helped",
        "You two females were not helped",
        "You many females were not helped",
        "I one male or female was not helped",
        "We many males or females were not helped",
    ];

    translations.forEach((expected, index) => {
        it(`Form ${index + 1}`, () => {
            const translation = TranslationBuilder.pastPassiveNegative("helped", index + 1);
            expect(translation).toBe(expected);
        });
    });
});