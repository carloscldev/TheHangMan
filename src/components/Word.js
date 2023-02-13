import React from "react";

const Word = ({ word, correctLetters }) => {
  return (
    <div>
      {word.split("").map((letter, index) => (
        <span
          key={index}
          className={`letter ${
            correctLetters.includes(letter) ? "correct" : ""
          }`}
        >
          {letter}
        </span>
      ))}
    </div>
  );
};

export default Word;
