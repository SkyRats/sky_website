import Link from "next/link";
import SkyratsLogo from "../assets/SkyratsLogo";
import Dropdown from "./Dropdown";

const pages = [
  {
    name: "Quem somos",
    link: "#quem-somos",
    key: "quemsomoskey",
  },
  {
    name: "A Equipe",
    link: "#equipe",
    key: "aequipekey",
  },
  {
    name: "Conquistas",
    link: "#conquistas",
    key: "conquistaskey",
  },
  {
    name: "Projetos",
    link: "#projetos",
    key: "projetoskey",
  },
  {
    name: "Parcerias",
    link: "#parcerias",
    key: "parceriaskey",
  },
  {
    name: "Apoie-nos",
    link: "#apoia-se",
    key: "apoiasekey",
  },
];

export default function Header() {
  return (
    <div className="fixed top-0 z-10 px-8 py-6 w-full flex flex-row justify-between items-center items-top bg-gradient-to-b from-gray-dark to-transparent">
      <Link href="/">
        <a>
          <SkyratsLogo className="w-[65vw] md:w-[30vw]" />
        </a>
      </Link>

      <Dropdown pages={pages} />
    </div>
  );
}
