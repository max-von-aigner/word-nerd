import React from "react";

export function GuessInput({ handleSubmitGuess }) {
  const [input, setInput] = React.useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmitGuess(input);
        setInput("");
      }}
    >
      <label>Enter guess: </label>
      <input
        id="guess-input"
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value.toUpperCase())}
        pattern="[A-Z]{5}"
        minLength={5}
        maxLength={5}
      />
    </form>
  );
}
