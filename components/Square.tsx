type Player = 'X' | 'O' | 'VELHA' | null;
function Square({
  value,
  onClick,
  winner,
}: {
  winner: string | null;
  value: string | null;
  onClick: () => void;
}) {
  if (!value) {
    return (
      <button className="square" onClick={onClick} disabled={Boolean(winner)} />
    );
  }
  return (
    <button className={`square square_${value.toLocaleLowerCase()}`} disabled>
      {value}
    </button>
  );
}
export default Square;
