import React, { useState } from "react";

export default function TranslateArabic({
  input,
  allowedWords,
  onCheck,
}: {
  input: string;
  allowedWords: string[];
  onCheck: (selectedWords: string[]) => void;
}) {
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [availableWords, setAvailableTitles] = useState<string[]>(allowedWords);

  const handleWordAdd = (word: string) => {
    setSelectedWords((prevSelectedWords) => {
      if (prevSelectedWords.includes(word)) {
        return prevSelectedWords.filter((w) => w !== word);
      }

      return [...prevSelectedWords, word];
    });

    setAvailableTitles((prevAvailableWords) => {
      return prevAvailableWords.filter((w) => w !== word);
    });
  };

  const handleWordRemove = (word: string) => {
    setSelectedWords((prevSelectedWords) => {
      return prevSelectedWords.filter((w) => w !== word);
    });

    setAvailableTitles((prevAvailableWords) => {
      return [...prevAvailableWords, word];
    });
  };

  return (
    <>
      <p className="text-4xl mb-4">{input}</p>
      <div className="border rounded w-full min-h-8 p-2 flex flex-wrap gap-1">
        {selectedWords.map((word) => (
          <p
            key={word}
            className="bg-neutral-200 px-2 rounded cursor-pointer w-fit select-none"
            onClick={() => handleWordRemove(word)}
          >
            {word}
          </p>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-2 mt-4 mx-8">
        {availableWords.map((word) => (
          <p
            key={word}
            className="bg-neutral-200 px-2 rounded cursor-pointer select-none"
            onClick={() => handleWordAdd(word)}
          >
            {word}
          </p>
        ))}
      </div>
      <button onClick={() => onCheck(selectedWords)}>Check</button>
    </>
  );
}
