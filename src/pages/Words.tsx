import React, { useState } from "react";
import TitleSelector from "../components/TitleSelector.tsx";
import { FormBuilder } from "../formBuilder.ts";
import TranslateArabic from "../components/TranslateArabic.tsx";
import { TranslationBuilder } from "../translationBuilder.ts";

const getRandomRowNumber = () => {
  return Math.floor(Math.random() * 14) + 1;
};

const titles = [
  {
    name: "ماضى معروف مثبت",
    translation: "Past Tense Active Positive",
    getRandomForm: (
      r1: string,
      r2: string,
      r3: string
    ): { form: string; translation: string } => {
      const rowNumber = getRandomRowNumber();
      return {
        form: FormBuilder.pastActivePositive(r1, r2, r3, "", rowNumber),
        translation: TranslationBuilder.pastActivePositive("helped", rowNumber),
      };
    },
  },
  {
    name: "ماضى معروف منفى",
    translation: "Past Tense Active Negative",
    getRandomForm: (
      r1: string,
      r2: string,
      r3: string
    ): { form: string; translation: string } => {
      const rowNumber = getRandomRowNumber();
      return {
        form: FormBuilder.pastActiveNegative(r1, r2, r3, "", rowNumber),
        translation: TranslationBuilder.pastActiveNegative("help", rowNumber),
      };
    },
  },
  {
    name: "ماضى مجهول مثبت",
    translation: "Past Tense Passive Positive",
    getRandomForm: (
      r1: string,
      r2: string,
      r3: string
    ): { form: string; translation: string } => {
      const rowNumber = getRandomRowNumber();
      return {
        form: FormBuilder.pastPassivePositive(r1, r2, r3, rowNumber),
        translation: TranslationBuilder.pastPassivePositive(
          "helped",
          rowNumber
        ),
      };
    },
  },
  {
    name: "ماضى مجهول منفى",
    translation: "Past Tense Passive Negative",
    getRandomForm: (
      r1: string,
      r2: string,
      r3: string
    ): { form: string; translation: string } => {
      const rowNumber = getRandomRowNumber();
      return {
        form: FormBuilder.pastPassiveNegative(r1, r2, r3, rowNumber),
        translation: TranslationBuilder.pastPassiveNegative(
          "helped",
          rowNumber
        ),
      };
    },
  },
  // {
  //   name: "مضارع معروف مثبت",
  //   translation: "Present/Future Tense Active Positive",
  // },
  // {
  //   name: "مضارع معروف منفى",
  //   translation: "Present/Future Tense Active Negative",
  // },
  // {
  //   name: "مضارع مجهول مثبت",
  //   translation: "Present/Future Tense Passive Positive",
  // },
  // {
  //   name: "مضارع مجهول منفى",
  //   translation: "Present/Future Tense Passive Negative",
  // },
];

const verbs = [
  { verb: "بَدَلَ", r1: "ب", r2: "د", r3: "ل" },
  { verb: "بَسَطَ", r1: "ب", r2: "س", r3: "ط" },
  { verb: "بَطَلَ", r1: "ب", r2: "ط", r3: "ل" },
  { verb: "بَلَغَ", r1: "ب", r2: "ل", r3: "خ" },
  { verb: "تَرَكَ", r1: "ت", r2: "ر", r3: "ك" },
  { verb: "ثَبَتَ", r1: "ث", r2: "ب", r3: "ت" },
  { verb: "حَدَثَ", r1: "ح", r2: "د", r3: "ث" },
  { verb: "حَرَثَ", r1: "ح", r2: "ر", r3: "ث" },
  { verb: "حَشَرَ", r1: "ح", r2: "ش", r3: "ر" },
  { verb: "حَصَدَ", r1: "ح", r2: "ص", r3: "د" },
  { verb: "حَضَرَ", r1: "ح", r2: "ض", r3: "ر" },
];

const sentenceWords = [
  "He",
  "She",
  "They",
  "You",
  "I",
  "We",
  "one",
  "two",
  "many",
  "male(s)",
  "female(s)",
  "is",
  "are",
  "helping",
  "helped",
  "help",
  "will",
  "not",
  "did",
  "or",
  "were",
  "was",
];

const getRandomVerb = () => {
  const randomIndex = Math.floor(Math.random() * verbs.length);
  return verbs[randomIndex];
};

export default function Words() {
  const [selectedTitles, setSelectedTitles] = useState<string[]>([]);

  const [form, setForm] = useState<{ form: string; translation: string }>();

  const handleSelectionChange = (newSelectedTitles: string[]) => {
    setSelectedTitles(newSelectedTitles);
  };

  const handleStart = () => {
    const title = titles.find(
      (title) =>
        title.name ===
        selectedTitles[Math.floor(Math.random() * selectedTitles.length)]
    );

    if (title?.getRandomForm) {
      const verb = getRandomVerb();
      setForm(title.getRandomForm(verb.r1, verb.r2, verb.r3));
    }
  };

  const handleCheck = (selectedWords: string[]) => {
    if (!form) {
      return;
    }

    const formWords = form.translation.split(" ");
    const correct = formWords.every((word, index) => {
      if (
        selectedWords[index] === "male(s)" &&
        (word === "males" || word === "male")
      ) {
        return true;
      }

      if (
        selectedWords[index] === "female(s)" &&
        (word === "females" || word === "female")
      ) {
        return true;
      }

      return word === selectedWords[index];
    });

    console.log(formWords, selectedWords);

    if (correct) {
      alert("Correct!");
    } else {
      alert("Incorrect!");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-4 mb-4">
        <h1 className="text-2xl text-center">
          Select the titles you want to be tested on
        </h1>
        <TitleSelector
          titles={titles}
          onSelectionChange={handleSelectionChange}
        />
      </div>
      <button onClick={handleStart} className="mb-8">
        Start
      </button>
      {form && (
        <TranslateArabic
          input={form.form}
          allowedWords={sentenceWords}
          onCheck={handleCheck}
        />
      )}
    </main>
  );
}
