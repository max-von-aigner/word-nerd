import React from "react";
import { range } from "../../utils";

export function Guess({ guessObject }) {
  function getStatus(num) {
    if (!guessObject || !guessObject.checkedValue) {
      return "";
    }
    return guessObject.checkedValue[num].status || "";
  }

  function getLetter(num) {
    if (!guessObject || !guessObject.checkedValue) {
      return undefined;
    }
    return guessObject.checkedValue[num].letter;
  }

  return (
    <p className="guess">
      {range(5).map((num) => (
        <span key={num} className={`cell ${getStatus(num)}`}>
          {getLetter(num)}
        </span>
      ))}
    </p>
  );
}
