import React from "react";
import { useState } from "react";

const titles = [
  {
    name: "ماضى معروف مثبت",
    translation: "Past Tense Active Positive",
  },
  {
    name: "ماضى معروف منفى",
    translation: "Past Tense Active Negative",
  },
  {
    name: "ماضى مجهول مثبت",
    translation: "Past Tense Passive Positive",
  },
  {
    name: "ماضى مجهول منفى",
    translation: "Past Tense Passive Negative",
  },
  {
    name: "مضارع معروف مثبت",
    translation: "Present/Future Tense Active Positive",
  },
  {
    name: "مضارع معروف منفى",
    translation: "Present/Future Tense Active Negative",
  },
  {
    name: "مضارع مجهول مثبت",
    translation: "Present/Future Tense Passive Positive",
  },
  {
    name: "مضارع مجهول منفى",
    translation: "Present/Future Tense Passive Negative",
  },
];

export default function TitleSelector({
  onSelectionChange,
}: {
  onSelectionChange?: (selectedTitles: string[]) => void;
}) {
  const [selectedTitles, setSelectedTitles] = useState<string[]>([]);

  const handleTitleSelect = (title: string) => {
    setSelectedTitles((prevSelectedTitles) => {
      const newSelectedTitles = prevSelectedTitles.includes(title)
        ? prevSelectedTitles.filter((t) => t !== title)
        : [...prevSelectedTitles, title];

      if (onSelectionChange) {
        onSelectionChange(newSelectedTitles);
      }

      return newSelectedTitles;
    });
  };

  return (
    <ul>
      {titles.map((title, i) => (
        <li className="text-2xl mb-2 cursor-pointer" key={i}>
          <input
            type="checkbox"
            name={`title-${i}`}
            id={`title-${i}`}
            className="mr-4"
            checked={selectedTitles.includes(title.name)}
            onChange={() => handleTitleSelect(title.name)}
          />
          <label
            htmlFor={`title-${i}`}
            className="select-none whitespace-nowrap"
          >
            {title.name}
          </label>
        </li>
      ))}
    </ul>
  );
}
