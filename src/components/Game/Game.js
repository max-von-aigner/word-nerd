import React, { useLayoutEffect } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { GuessInput } from "./GuessInput";
import { GuessResults } from "./GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(value) {
    const newGuess = {
      value: value,
      id: crypto.randomUUID(),
    };
    const newGuesses = [...guesses, newGuess];
    setGuesses(newGuesses);
    console.info(guesses);
  }

  return (
    <>
      <GuessInput handleSubmitGuess={handleSubmitGuess} />

      <GuessResults guesses={guesses} />
    </>
  );
}

export default Game;
