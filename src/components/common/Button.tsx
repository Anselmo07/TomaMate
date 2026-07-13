import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`rounded-lg bg-sky-600 px-4 py-2 font-semibold text-white transition hover:bg-sky-500 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}