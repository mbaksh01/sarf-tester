import React, { useState } from "react";
import TitleSelector from "../components/TitleSelector.tsx";
import Quiz from "../components/Quiz.tsx";

export default function Titles() {
  const [selectedTitles, setSelectedTitles] = useState<string[]>([]);
  const [startQuiz, setStartQuiz] = useState(false);

  const handleSelectionChange = (newSelectedTitles: string[]) => {
    setSelectedTitles(newSelectedTitles);
  };

  const handleStartQuiz = () => {
    setStartQuiz(true);
  };

  return (
    <main className="p-4">
      <div className="flex flex-col items-center *:mb-4">
        {!startQuiz && (
          <>
            <h1 className="text-2xl">Select test options</h1>
            <div className="flex-col gap-4 justify-center *:mb-4 !mb-0">
              <div>
                <h2 className="text-center text-xl mb-4">
                  Titles you want to test
                </h2>
                <TitleSelector onSelectionChange={handleSelectionChange} />
              </div>
              <div className="bg-neutral-600 w-full h-[1px]"></div>
              <div>
                <h2 className="text-center text-xl mb-4">Options</h2>
                <div className="flex flex-col">
                  <div className="flex gap-4">
                    <label htmlFor="number-of-questions">
                      Number of questions
                    </label>
                    <input
                      id="number-of-questions"
                      type="number"
                      className="rounded-lg border px-2 w-14"
                      defaultValue="10"
                      max={99}
                      min={1}
                    />
                  </div>
                </div>
              </div>
            </div>
            <button
              className="rounded-lg border px-4 cursor-pointer hover:bg-gray-100"
              onClick={handleStartQuiz}
            >
              Start
            </button>
          </>
        )}

        {startQuiz && (
          <Quiz selectedTitles={selectedTitles} numberOfQuestions={10} />
        )}
      </div>
    </main>
  );
}
