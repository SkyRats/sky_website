import Head from "next/head";
import SkyratsIcon from "../assets/SkyratsIcon";
import Header from "../components/Header";
import QuemSomos from "../components/QuemSomos";
import Equipe from "../components/Equipe";
import Conquistas from "../components/Conquistas";
import Projetos from "../components/Projetos";

export default function Home() {
  return (
    <div className="text-gray-light m-0 p-0">
      <Head>
        <title>Skyrats</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />

      <div className="mx-12">
        <SkyratsIcon className="mx-auto my-48 w-2/3 lg:w-2/5" />
        <QuemSomos />
        <Equipe />
        <Conquistas />
        <Projetos />
      </div>
    </div>
  );
}
