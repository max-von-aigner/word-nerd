export function WinBanner() {
  // const rounds = gameFinished && gameFinished.rounds;

  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>#num guesses</strong>.
      </p>
    </div>
  );
}
