import React from "react";

const CorrectLetters = ({ word, correctLetters }) => {
  return (
    <div className="correct-letters-container">
      {word.split("").map((letter, index) => (
        <span
          key={index}
          className={`letter-container ${
            correctLetters.includes(letter) ? "show" : "hide"
          }`}
        ></span>
      ))}
    </div>
  );
};

export default CorrectLetters;
