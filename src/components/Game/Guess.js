import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";
  return <span className={className}>{letter}</span>;
}

export function Guess({ value, answer, setGameFinished, setGameWon }) {
  const result = checkGuess(value, answer);

  const statusArray = result && result.map((result) => result.status);

  function checkStatus(status) {
    return status === "correct";
  }
  const rightAnswerLogged = statusArray && statusArray.every(checkStatus);

  React.useEffect(() => {
    if (rightAnswerLogged) {
      setGameFinished(rightAnswerLogged), setGameWon(rightAnswerLogged);
    }
    [statusArray];
  });

  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={result ? result[num].letter : undefined}
          status={result ? result[num].status : undefined}
        />
      ))}
    </p>
  );
}
