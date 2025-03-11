import React, { useLayoutEffect } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { GuessInput } from "./GuessInput";
import { GuessResults } from "./GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

const answer = sample(WORDS);

console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(value) {
    const newGuess = {
      value: value,
      id: crypto.randomUUID(),
    };

    setGuesses([...guesses, newGuess]);
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
