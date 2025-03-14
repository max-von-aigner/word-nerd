export function WinBanner({ roundCount }) {
  // const rounds = gameFinished && gameFinished.rounds;

  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        {roundCount === 1 ? (
          <strong> {roundCount} guess</strong>
        ) : (
          <strong> {roundCount} guesses</strong>
        )}
        {/* <strong> {roundCount} guesses</strong>. */}
      </p>
    </div>
  );
}
