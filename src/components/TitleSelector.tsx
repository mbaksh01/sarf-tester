import React from "react";
import { useState } from "react";

export default function TitleSelector({
  titles,
  onSelectionChange,
}: {
  titles: { name: string }[];
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
