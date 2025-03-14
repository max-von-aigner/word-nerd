import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import { Guess } from "./Guess";

export function GuessResults({ guesses, answer, setGameFinished, setGameWon }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess
          answer={answer}
          key={num}
          value={guesses[num] ? guesses[num].value : undefined}
          setGameFinished={setGameFinished}
          setGameWon={setGameWon}
        />
      ))}
    </div>
  );
}
