import React from "react";
import { Button } from "react-bootstrap";

const RestartButton = ({ restartGame }) => (
  <Button variant="secondary" onClick={restartGame}>
    Restart
  </Button>
);

export default RestartButton;
