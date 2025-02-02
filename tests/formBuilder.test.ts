import { FormBuilder } from '../src/formBuilder';

describe('Past Active Positive', () => {
    const translations = [
        "نَصَرَ",
        "نَصَرَا",
        "نَصَرُوْا",
        "نَصَرَتْ",
        "نَصَرَتَا",
        "نَصَرْنَ",
        "نَصَرْتَ",
        "نَصَرْتُمَا",
        "نَصَرْتُمْ",
        "نَصَرْتِ",
        "نَصَرْتُمَا",
        "نَصَرْتُنَّ",
        "نَصَرْتُ",
        "نَصَرْنَا",
    ];

    translations.forEach((expected, index) => {
        it(`Form ${index + 1}`, () => {
            const r1 = "ن";
            const r2 = "ص";
            const r3 = "ر";
            const translation = FormBuilder.pastActivePositive(r1, r2, r3, "", index + 1);
            expect(translation).toBe(expected);
        });
    });
});

describe('Past Active Negative', () => {
    const translations = [
        "مَا نَصَرَ",
        "مَا نَصَرَا",
        "مَا نَصَرُوْا",
        "مَا نَصَرَتْ",
        "مَا نَصَرَتَا",
        "مَا نَصَرْنَ",
        "مَا نَصَرْتَ",
        "مَا نَصَرْتُمَا",
        "مَا نَصَرْتُمْ",
        "مَا نَصَرْتِ",
        "مَا نَصَرْتُمَا",
        "مَا نَصَرْتُنَّ",
        "مَا نَصَرْتُ",
        "مَا نَصَرْنَا",
    ];

    translations.forEach((expected, index) => {
        it(`Form ${index + 1}`, () => {
            const r1 = "ن";
            const r2 = "ص";
            const r3 = "ر";
            const translation = FormBuilder.pastActiveNegative(r1, r2, r3, "", index + 1);
            expect(translation).toBe(expected);
        });
    });
});

describe('Past Passive Positive', () => {
    const translations = [
        "نُصِرَ",
        "نُصِرَا",
        "نُصِرُوْا",
        "نُصِرَتْ",
        "نُصِرَتَا",
        "نُصِرْنَ",
        "نُصِرْتَ",
        "نُصِرْتُمَا",
        "نُصِرْتُمْ",
        "نُصِرْتِ",
        "نُصِرْتُمَا",
        "نُصِرْتُنَّ",
        "نُصِرْتُ",
        "نُصِرْنَا",
    ];

    translations.forEach((expected, index) => {
        it(`Form ${index + 1}`, () => {
            const r1 = "ن";
            const r2 = "ص";
            const r3 = "ر";
            const translation = FormBuilder.pastPassivePositive(r1, r2, r3, index + 1);
            expect(translation).toBe(expected);
        });
    });
});

describe('Past Passive Negative', () => {
    const translations = [
        "مَا نُصِرَ",
        "مَا نُصِرَا",
        "مَا نُصِرُوْا",
        "مَا نُصِرَتْ",
        "مَا نُصِرَتَا",
        "مَا نُصِرْنَ",
        "مَا نُصِرْتَ",
        "مَا نُصِرْتُمَا",
        "مَا نُصِرْتُمْ",
        "مَا نُصِرْتِ",
        "مَا نُصِرْتُمَا",
        "مَا نُصِرْتُنَّ",
        "مَا نُصِرْتُ",
        "مَا نُصِرْنَا",
    ];

    translations.forEach((expected, index) => {
        it(`Form ${index + 1}`, () => {
            const r1 = "ن";
            const r2 = "ص";
            const r3 = "ر";
            const translation = FormBuilder.pastPassiveNegative(r1, r2, r3, index + 1);
            expect(translation).toBe(expected);
        });
    });
});