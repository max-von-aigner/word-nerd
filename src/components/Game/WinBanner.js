export function WinBanner({ roundCount }) {
  // const rounds = gameFinished && gameFinished.rounds;

  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>
          {" "}
          {roundCount} {roundCount === 1 ? "guess" : "guesses"}
        </strong>
        .
      </p>
    </div>
  );
}
