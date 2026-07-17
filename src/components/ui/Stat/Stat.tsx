import "./Stat.css";
import type { ReactNode } from "react";

interface StatProps {
  icon: ReactNode;
  value: string | number;
  label: string;
}

export default function Stat({
  icon,
  value,
  label,
}: StatProps) {
  return (
    <div className="stat">
      <div className="stat__icon">{icon}</div>

      <h3>{value}</h3>

      <span>{label}</span>
    </div>
  );
}