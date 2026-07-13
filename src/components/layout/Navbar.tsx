import { Link } from "react-router-dom";
import Container from "../common/Container";

export default function Navbar() {
  return (
    <header className="border-b border-zinc-800 bg-zinc-950">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold text-sky-500"
          >
            🧉 MateHub
          </Link>

          <div className="flex gap-6">
            <Link
              to="/"
              className="text-zinc-300 hover:text-white"
            >
              Inicio
            </Link>

            <Link
              to="/profile"
              className="text-zinc-300 hover:text-white"
            >
              Perfil
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}