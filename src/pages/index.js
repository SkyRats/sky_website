import Head from "next/head";
import SkyratsIcon from "../assets/SkyratsIcon";
import Header from "../components/Header";
import QuemSomos from "../components/QuemSomos";
import Equipe from "../components/Equipe";
import Conquistas from "../components/Conquistas";
import Projetos from "../components/Projetos";
import Patrocinios from "../components/Patrocinios";
import Apoie from "../components/Apoie";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div className="text-gray-light">
      <Head>
        <title>Skyrats</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />

      <div className="max-w-7xl xl:mx-auto mx-10 mt-8">
        
        <SkyratsIcon className="mx-auto my-[40vh] w-3/4 lg:w-1/2" />
        <QuemSomos />
        <Equipe />
        <Conquistas />
        <Projetos />
        <Patrocinios />
        <Apoie />
      </div>

      <Footer/>
      
    </div>
  );
}
