import "./Footer.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: .8 }}
      viewport={{ once: true }}
    >
      <div className="footer__container">

        <div className="footer__brand">

          <h2>🧉 TOMA MATE</h2>

          <p>
            No se trata solamente del mate,
            sino de las historias que compartimos.
          </p>

        </div>

        <nav className="footer__links">

          <Link to="/">
            Inicio
          </Link>

          <a href="#about">
            Nosotros
          </a>

          <a href="#how">
            Cómo funciona
          </a>

          <Link to="/dashboard">
            Dashboard
          </Link>

        </nav>

        <div className="footer__bottom">

          <p>

            Hecho con ❤️ y 🧉 desde Argentina.

          </p>

          <small>

            © 2026 Toma Mate

          </small>

        </div>

      </div>
    </motion.footer>
  );
}