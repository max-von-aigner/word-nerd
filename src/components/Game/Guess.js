import { range } from "../../utils";

export function Guess({ value }) {
  console.log({ value });

  return (
    <p class="guess">
      {range(5).map((num) => (
        <span key={num} className="cell">
          {value ? value.value[num] : undefined}
        </span>
      ))}
    </p>
  );
}
