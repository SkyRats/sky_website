import SkyratsIcon from "../assets/SkyratsIcon";
import Conquistas from "../components/Conquistas";
import Equipe from "../components/Equipe";
import Header from "../components/Header";
import QuemSomos from "../components/QuemSomos";

export default function Home() {
  return (
    <div className="text-gray-light">
      <Header />

      <div className="px-12 py-6">
        <SkyratsIcon className="mx-auto my-48" />
        <QuemSomos />
        <Equipe />
        <Conquistas />
      </div>
    </div>
  );
}
