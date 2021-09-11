import Dropdown from "./Dropdown";

const pages = [
  {
    name: "Quem somos",
    link: "#quem-somos",
  },
  {
    name: "A Equipe",
    link: "#equipe",
  },
  {
    name: "Conquistas",
    link: "#conquistas",
  },
  {
    name: "Projetos",
    link: "#projetos",
  },
  {
    name: "Parcerias",
    link: "#parcerias",
  },
  {
    name: "Apoia-se",
    link: "#apoia-se",
  },
];

export default function Header() {
  return (
    <div className="flex flex-row justify-between items-center">
      <span className="text-4xl">SkyRatos</span>

      <div className="flex flex-row">
        {pages.map((item) => (
          <a href={item.link} className='mx-3'> {item.name} </a>
        ))}
      </div>
    </div>
  );
}
