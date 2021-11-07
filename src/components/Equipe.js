import SubsistemaButton from "./SubsistemaButton";

const subsistemas = [
  {
    name: "Gestão",
    src: "gestao",
    text: "A gestão atua na organização interna da equipe, nas finanças e nos eventos tanto internos quanto externos, além de ser responsável pelos patrocínios e parcerias.",
  },
  {
    name: "Comunicação",
    src: "comunicacao",
    text: "A comunicação é o subsistema encarregado pela administração das redes sociais e divulgações da equipe, assim como pela produção áudio-texto-visual.",
  },
  {
    name: "Hardware",
    src: "hardware",
    text: "O hardware lida com calibração, pilotagem de drones, desenvolvimento de ambientes de simulação e desenvolvimento de circuitos e sistemas eletrônicos.",
  },
  {
    name: "Software",
    src: "software",
    text: "O software é o subsistema que lida com inteligência artificial, visão computacional, simulações e sistemas de controle de forma a construir arquiteturas integradoras para a realização de missões autônomas.",
  },
  {
    name: "Mecânica",
    src: "mecanica",
    text: "A mecânica é o subsistema responsável por projetar as estruturas do drone, como o frame, lidando com análise e otimização estrutural, desenvolvimento do design, análise de forças e manufatura.",
  },
];

export default function Equipe() {
  return (
    <div className="mb-20">
      <h1 className="text-3xl" id="equipe">
        A Equipe
      </h1>
      <p className="text-lg mt-5">A equipe é dividida em subsitemas, que focam em diferentes partes do trabalho de confecção, divulgação e organização interna. </p>
      <div className="flex flex-row justify-between items-center flex-wrap">
        {subsistemas.map((sub) => (
          <SubsistemaButton src={sub.src} name={sub.name} />
        ))}
      </div>

      
    </div>
  );
}
