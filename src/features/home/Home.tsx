import MainLayout from "../../components/layout/MainLayout/MainLayout";

import Hero from "./components/Hero";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
// import HowToPrepareMate from "./components/HowToPrepareMate";
// import HeatmapPreview from "./components/HeatmapPreview";
// import Collectibles from "./components/Collectibles";
// import CTA from "./components/CTA";
// import Footer from "./components/Footer";

import "./Home.css";

export default function Home() {
  return (
    <MainLayout>
      <div className="home">
        <Hero />

         <About />

         <HowItWorks />

        {/* <HowToPrepareMate />

        <HeatmapPreview />

        <Collectibles />

        <CTA />

        <Footer /> */}
      </div>
    </MainLayout>
  );
}