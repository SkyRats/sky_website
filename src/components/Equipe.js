import SubsistemaButton from "./SubsistemaButton";

const subsistemas = [
  {
    name: "Co-capitania",
    src: "cocapitania",
  },
  {
    name: "Gestão",
    src: "gestao",
  },
  {
    name: "Comunicação",
    src: "comunicacao",
  },
  {
    name: "CCO",
    src: "cco",
  },
  {
    name: "Hardware",
    src: "hardware",
  },
  {
    name: "Software",
    src: "software",
  },
  {
    name: "Mecânica",
    src: "mecanica",
  },
  {
    name: "Ex-membros",
    src: "exmembros",
  },
];

export default function Equipe() {
  return (
    <div>
      <h1 className="text-3xl" id="equipe">
        A Equipe
      </h1>

      <div className="flex flex-row flex-wrap justify-around">
        {subsistemas.map((sub) => (
          <SubsistemaButton src={sub.src} name={sub.name} />
        ))}
      </div>
    </div>
  );
}
