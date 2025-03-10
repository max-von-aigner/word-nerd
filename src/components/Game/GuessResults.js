// export function GuessList({ wordsList }) {
//   return (
//     <div class="guess-results">
//       {wordsList.map(({ label, id }) => (
//         <p key={id} class="guess">
//           <span class="cell"> {label && label.slice(0, 1)}</span>
//           <span class="cell"> {label && label.slice(1, 2)}</span>
//           <span class="cell"> {label && label.slice(2, 3)}</span>
//           <span class="cell"> {label && label.slice(3, 4)}</span>
//           <span class="cell"> {label && label.slice(4, 5)}</span>
//         </p>
//       ))}
//     </div>
//   );
// }

export function GuessResults({ wordsList }) {
  return (
    <div class="guess-results">
      {wordsList.map(({ label, id }) => (
        <p key={id} class="guess">
          {label
            .split("")
            .map((letter) =>
              !letter ? (
                <span class="cell"> </span>
              ) : (
                <span class="cell"> {letter || ""}</span>
              )
            )}

          {/* <span class="cell"> {label && label.slice(0, 1)}</span>
          <span class="cell"> {label && label.slice(1, 2)}</span>
          <span class="cell"> {label && label.slice(2, 3)}</span>
          <span class="cell"> {label && label.slice(3, 4)}</span>
          <span class="cell"> {label && label.slice(4, 5)}</span> */}
        </p>
      ))}
    </div>
  );
}
