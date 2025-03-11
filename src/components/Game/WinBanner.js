export function WinBanner({ gameFinished }) {
  const rounds = gameFinished && gameFinished.rounds;

  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{rounds} guesses</strong>.
      </p>
    </div>
  );
}
