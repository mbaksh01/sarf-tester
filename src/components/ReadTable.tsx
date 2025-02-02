import React, { useEffect } from "react";
import { useState } from "react";

interface ReadTableProps {
  selectedTitles: string[];
  numberOfQuestions: number;
}

const verbs = [
  { verb: "بَدَلَ" },
  { verb: "بَسَطَ" },
  { verb: "بَطَلَ" },
  { verb: "بَلَغَ" },
  { verb: "تَرَكَ" },
  { verb: "ثَبَتَ" },
  { verb: "حَدَثَ" },
  { verb: "حَرَثَ" },
  { verb: "حَشَرَ" },
  { verb: "حَصَدَ" },
  { verb: "حَضَرَ" },
];

const getRandomVerb = () => {
  const randomIndex = Math.floor(Math.random() * verbs.length);
  return verbs[randomIndex].verb;
};

export default function ReadTable({
  selectedTitles,
  numberOfQuestions,
}: ReadTableProps) {
  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState<{ title: string; verb: string }[]>(
    []
  );

  useEffect(() => {
    const generateQuestions = () => {
      let result: { title: string; verb: string }[] = [];
      let tempList = [...selectedTitles];
      while (result.length < numberOfQuestions && tempList.length > 0) {
        const randomIndex = Math.floor(Math.random() * tempList.length);
        result.push({ title: tempList[randomIndex], verb: getRandomVerb() });
      }
      return result;
    };

    setQuestions(generateQuestions());
  }, [selectedTitles, numberOfQuestions]);

  const handleNext = () => {
    if (index === questions.length - 1) {
      return;
    }

    setIndex(index + 1);
  };

  const handlePrevious = () => {
    if (index === 0) {
      return;
    }

    setIndex(index - 1);
  };

  return (
    <div>
      <h2 className="text-3xl mb-8 text-center">Quiz - Question {index + 1}</h2>
      {questions.length > 0 && (
        <div className="*:mb-4 flex flex-col items-center">
          <p className="text-2xl">Title: {questions[index].title}</p>
          <p className="text-2xl">Verb: {questions[index].verb}</p>
          <div className="w-full flex justify-between">
            <button
              className="px-2 py-1 border rounded hover:bg-gray-100 cursor-pointer justify-self-start"
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              className="px-2 py-1 border rounded hover:bg-gray-100 cursor-pointer justify-self-end"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
