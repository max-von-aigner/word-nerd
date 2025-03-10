import React from "react";

export function GuessInput({ handleSubmit }) {
  const [input, setInput] = React.useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(input);
        setInput("");
      }}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <label>Enter guess: </label>
      <input
        id="guess-input"
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value.toUpperCase())}
        pattern="[A-Z]{5}"
      />
    </form>
  );
}
