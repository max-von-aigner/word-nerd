export function LoseBanner({ answer, gameFinished }) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{gameFinished && answer}</strong>.
      </p>
    </div>
  );
}
