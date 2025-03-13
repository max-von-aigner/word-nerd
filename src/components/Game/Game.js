import React, { useLayoutEffect } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { GuessInput } from "./GuessInput";
import { GuessResults } from "./GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
import { WinBanner } from "./WinBanner";
import { LoseBanner } from "./LoseBanner";

const answer = sample(WORDS);

console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [round, setRound] = React.useState(0);
  const [gameFinished, setGameFinished] = React.useState(false);

  function handleSubmitGuess(value) {
    const newGuess = {
      value: value,
      id: crypto.randomUUID(),
    };

    setGuesses([...guesses, newGuess]);
    const newCount = round + 1;
    setRound(newCount);
  }

  React.useEffect(() => {
    if (round > 5) {
      setGameFinished(true);
    }
  }, [round]);

  console.log({ gameFinished });

  return (
    <>
      {gameFinished && <WinBanner />}
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
