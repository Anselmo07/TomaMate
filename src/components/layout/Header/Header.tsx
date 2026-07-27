import "./Header.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      className="header"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: .6 }}
    >
      <div className="header__container">

        <Link
          to="/"
          className="logo"
        >
          🧉

          <span>TOMA MATE</span>

        </Link>

        <nav>

          <Link to="/">
            Inicio
          </Link>

          <a href="#about">
            Nosotros
          </a>

          <a href="#how">
            Cómo funciona
          </a>

        </nav>

        <button className="header__button">

          Comenzar

        </button>

      </div>

    </motion.header>
  );
}