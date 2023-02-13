import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const HelpButton = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Help
      </Button>
      <Modal show={show} onHide={handleClose}>
       
        <Modal.Body>
          <p>
            The game is Hangman, where you try to guess the word by suggesting
            letters. You have 10 incorrect guesses before you lose the game. The
            word you need to guess is represented by underscores. Each time you
            guess a correct letter, the corresponding underscores will be filled
            with the letter.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default HelpButton;
