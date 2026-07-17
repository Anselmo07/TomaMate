import MainLayout from "../../components/layout/MainLayout/MainLayout";
import Card from "../../components/ui/Card/Card";

import "./Home.css";

export default function Home() {
  return (
    <MainLayout>
      <div className="home-grid">
        <Card>
          <h2>👋 Bienvenido a MateHub</h2>
          <p>Acá irá la información del usuario.</p>
        </Card>

        <Card>
          <h2>🧉 ¿Tomaste mate hoy?</h2>
          <p>Acá irá el formulario para registrar el día.</p>
        </Card>

        <Card>
          <h2>📅 Contribuciones</h2>
          <p>Acá irá el Heatmap.</p>
        </Card>

        <Card>
          <h2>📊 Estadísticas</h2>
          <p>Acá irán las estadísticas rápidas.</p>
        </Card>
      </div>
    </MainLayout>
  );
}