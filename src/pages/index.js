import SkyratsIcon from "../assets/SkyratsIcon";
import Header from "../components/Header";
import QuemSomos from "../components/QuemSomos";
import Equipe from "../components/Equipe";

export default function Home() {
  return (
    <div className="text-gray-light m-0 p-0">
      <Header />

      <div className="mx-12">
        <SkyratsIcon className="mx-auto my-48 w-2/3 lg:w-2/5" />
        <QuemSomos />
        <Equipe />
        <Conquistas />
      </div>
    </div>
  );
}
