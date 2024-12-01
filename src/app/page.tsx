// pages/index.js (ou page.jsx)

import Head from "next/head";
import Header from "../components/Header"; // Se já tiver esse componente
import Footer from "../components/Footer"; // Se já tiver esse componente
import Banner from "../components/Banner"; // Se já tiver esse componente
import Sobre from "../components/Sobre"; // Se já tiver esse componente
import LocalSection from "../components/LocalSection"; // Se já tiver esse componente
import Hours from "../components/Hours";
import Beneficios from "../components/Beneficios";
import VideoSection from "../components/VideoSection";
import ImageGallery from "../components/ImageGallery";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bald Troop Barbearia</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <main>
        <Banner />
        <Sobre />
        <LocalSection />
        <Hours />
        <Beneficios />
        <VideoSection />
        <ImageGallery />
      </main>
      <Footer />
    </div>
  );
}
