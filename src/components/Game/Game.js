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
import { ResetButton } from "./ResetButton";

const answer = sample(WORDS);

console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [round, setRound] = React.useState(0);
  const [gameFinished, setGameFinished] = React.useState(false);
  const [gameWon, setGameWon] = React.useState(false);

  function handleSubmitGuess(value) {
    const newGuess = {
      value: value,
      id: crypto.randomUUID(),
    };

    setGuesses([...guesses, newGuess]);
    const newCount = round + 1;
    setRound(newCount);
  }

  function resetGame() {
    setGameFinished(false);
    setRound(0);
    setGuesses([]);
    setGameWon(false);
  }

  React.useEffect(() => {
    if (round > 5) {
      setGameFinished(true);
    }
  }, [round]);

  console.log({ gameFinished, gameWon, round });

  const playerWon = gameFinished & gameWon ? true : false;

  const playerLost = gameFinished & !gameWon ? true : false;

  return (
    <>
      {playerWon && <WinBanner roundCount={round} />}
      {playerLost && <LoseBanner answer={answer} />}
      <GuessResults
        guesses={guesses}
        answer={answer}
        setGameFinished={setGameFinished}
        setGameWon={setGameWon}
      />
      {gameFinished && <ResetButton handleClick={resetGame} />}
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
