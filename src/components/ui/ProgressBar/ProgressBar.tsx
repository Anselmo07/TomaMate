import "./ProgressBar.css";

interface ProgressBarProps {
  value: number;
  max: number;
}

export default function ProgressBar({
  value,
  max,
}: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className="progress">
      <div
        className="progress__fill"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}