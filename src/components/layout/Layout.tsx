import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <main className="py-8">
        <Outlet />
      </main>
    </div>
  );
}