import React, { useLayoutEffect } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { GuessInput } from "./GuessInput";
import { GuessResults } from "./GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [wordsList, setWordsList] = React.useState(
    Array.from({ length: 5 }, () => ({ label: "", id: crypto.randomUUID() }))
  );

  console.info(wordsList);

  function addWord(label) {
    const firstEmptyLabelIndex = wordsList.findIndex(
      (word) => word.label === ""
    );

    if (firstEmptyLabelIndex === -1) {
      return;
    }
    {
      const newWordsList = [...wordsList];
      newWordsList[firstEmptyLabelIndex] = {
        label: label,
        id: crypto.randomUUID(),
      };
      setWordsList(newWordsList);
    }
  }
  return (
    <>
      <GuessInput handleSubmit={addWord} />

      <GuessResults wordsList={wordsList} />
    </>
  );
}

export default Game;
