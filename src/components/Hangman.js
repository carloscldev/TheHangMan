import React from "react";
import "../hangman.css";

const Hangman = ({ incorrectGuesses }) => {
  return <div className={`hangman incorrect-${incorrectGuesses}`}></div>;
};

export default Hangman;
