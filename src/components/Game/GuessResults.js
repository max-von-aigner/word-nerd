import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import { Guess } from "./Guess";

export function GuessResults({ guesses }) {
  return (
    <div class="guess-results">
      {guesses.map(({ value, id }) => (
        <Guess value={value} key={id} />
      ))}
    </div>
  );
}
