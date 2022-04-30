import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cocapitania from "../components/carometro/Cocapitania";
import CCO from "../components/carometro/CCO";
import Comunicacao from "../components/carometro/Comunicacao";
import Exmembros from "../components/carometro/Exmembros";
import Gestao from "../components/carometro/Gestao";
import Hardware from "../components/carometro/Hardware";
import Mecanica from "../components/carometro/Mecanica";
import Software from "../components/carometro/Software";

export default function Home() {
    return (
      <div className="text-gray-light m-0 p-0">
        <Head>
          <title>Skyrats</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
  
        <Header />
  
        <div className="max-w-7xl xl:mx-auto mx-10 pt-8">
            <Cocapitania />
            <Comunicacao />
            <Gestao />
            <Hardware />
            <Mecanica />
            <Software />
            <CCO />

        </div>

        <Footer/>
        
      </div>
    );
  }
  