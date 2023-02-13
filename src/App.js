import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Hangman from "./components/Hangman";
import GuessedLetters from "./components/GuessedLetters";
import Word from "./components/Word";
import Help from "./components/Help";
import getRandomWord from "./components/WordGenerator";

const App = () => {
  const [word, setWord] = useState("");
  const [displayWord, setDisplayWord] = useState("");
  const [correctLetters, setCorrectLetters] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [showHelp, setShowHelp] = useState(true);



  const restartGame = () => {
    setWord(getRandomWord());
    setCorrectLetters([]);
    setIncorrectGuesses(0);
    setShowAlert(false);
  };

  useEffect(() => {
    setWord(getRandomWord());
    setDisplayWord(word.replace(/\w/g, "_"));
  }, []);

  const checkLoss = useCallback(() => {
    if (incorrectGuesses === 10) {
      setAlertMessage(`You lose! The word was "${word}"`);
      setShowAlert(true);
    }
  }, [incorrectGuesses, word]);

  const checkWin = useCallback(() => {
    if (word.split("").every((letter) => correctLetters.includes(letter))) {
      setAlertMessage("You win!");
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [correctLetters, word]);

useEffect(() => {
  checkWin();
  let newDisplayWord = "";
  for (let i = 0; i < word.length; i++) {
    if (correctLetters.includes(word[i])) {
      newDisplayWord += word[i];
    } else {
      newDisplayWord += "_";
    }
  }
  setDisplayWord(newDisplayWord);
}, [correctLetters, checkWin, word]);

  const handleGuess = (event) => {
    event.preventDefault();
    const guess = event.target.elements.guess.value.toLowerCase();
    if (word.includes(guess) && !correctLetters.includes(guess)) {
      setCorrectLetters([...correctLetters, guess]);
    } else if (!word.includes(guess) && !correctLetters.includes(guess)) {
      setIncorrectGuesses((incorrectGuesses) => incorrectGuesses + 1);
      checkLoss();
    } else {
      setAlertMessage("You already guessed that letter");
      setShowAlert(true);
    }
    event.target.elements.guess.value = "";
  };

  return (
    <Container className="p-5">
      <div className="container">
        <Row>
          <h1>The Hangman</h1>
          <Col xs={12} md={6} className="my-auto">
            <Hangman incorrectGuesses={incorrectGuesses} />
          </Col>
          <Col xs={12} md={6} className="my-auto">
            <Word word={displayWord} correctLetters={correctLetters} />
            <Container className="p-5 text-center">
              <GuessedLetters word={word} correctLetters={correctLetters} />
              <Form onSubmit={handleGuess} style={{ marginTop: "30px" }}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label class="guess">Guess a letter</Form.Label>
                  <Form.Control
                    type="text"
                    name="guess"
                    maxLength={1}
                    autoComplete="off"
                    required
                  />
                  <Form style={{ marginTop: "30px" }}></Form>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Guess
                </Button>{" "}
                <Button variant="secondary" onClick={restartGame}>
                  Restart
                </Button>
                {showAlert && (
                  <Alert variant="danger" className="mt-3">
                    {alertMessage}
                  </Alert>
                )}
                {showHelp && <Help setShowHelp={setShowHelp} />}
              </Form>
            </Container>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default App;
