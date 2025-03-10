import { range } from "../../utils";

export function Guess({ value }) {
  return (
    <p class="guess">
      {range(5).map((num) => (
        <span key={num} class="cell">
          {value ? value[num] : undefined}
        </span>
      ))}
    </p>
  );
}
