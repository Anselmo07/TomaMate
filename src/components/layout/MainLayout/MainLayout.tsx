import "./MainLayout.css";
import type { ReactNode } from "react";
import Header from "../Header/Header";

interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <>
      <Header />

      <main className="main">
        {children}
      </main>
    </>
  );
}