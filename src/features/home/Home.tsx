import MainLayout from "../../components/layout/MainLayout/MainLayout";
import Container from "../../components/layout/Container/Container";

import Hero from "./components/Hero";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import HowToPrepareMate from "./components/HowToPrepareMate";
// import HeatmapPreview from "./components/HeatmapPreview";
// import Collectibles from "./components/Collectibles";
// import CTA from "./components/CTA";
// import Footer from "./components/Footer";

export default function Home() {
  return (
    <MainLayout>
      <Container>
        <Hero />
      </Container>

      <Container>
        <About />
      </Container>

      <HowItWorks />

      <Container>
        <HowToPrepareMate />
      </Container>

      {/* <HeatmapPreview />

      <Container>
        <Collectibles />
      </Container>

      <Container>
        <CTA />
      </Container>

      <Footer /> */}
    </MainLayout>
  );
}