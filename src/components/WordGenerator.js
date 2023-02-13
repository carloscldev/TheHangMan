// getRandomWord.js
const wordList = [
  "obfuscation",
  "belligerent",
  "perfidious",
  "fastidious",
  "ineffable",
  "perspicacious",
  "obstreperous",
  "obtuse",
  "obdurate",
];

export default function getRandomWord() {
  return wordList[Math.floor(Math.random() * wordList.length)];
}
