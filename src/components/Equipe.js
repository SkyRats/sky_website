import {useState} from 'react'
import SubsistemaButton from "./SubsistemaButton";

const subsistemas = [
  {
    name: "Gestão",
    src: "botao_gestao",
    text: "A gestão atua na organização interna da equipe, nas finanças e nos eventos tanto internos quanto externos, além de ser responsável pelos patrocínios e parcerias.",
  },
  {
    name: "Comunicação",
    src: "botao_comunicacao",
    text: "A comunicação é o subsistema encarregado pela administração das redes sociais e divulgações da equipe, assim como pela produção áudio-texto-visual.",
  },
  {
    name: "Hardware",
    src: "botao_hardware",
    text: "O hardware lida com calibração, pilotagem de drones, desenvolvimento de ambientes de simulação e desenvolvimento de circuitos e sistemas eletrônicos.",
  },
  {
    name: "Software",
    src: "botao_software",
    text: "O software é o subsistema que lida com inteligência artificial, visão computacional, simulações e sistemas de controle de forma a construir arquiteturas integradoras para a realização de missões autônomas.",
  },
  {
    name: "Mecânica",
    src: "botao_mecanica",
    text: "A mecânica é o subsistema responsável por projetar as estruturas do drone, como o frame, lidando com análise e otimização estrutural, desenvolvimento do design, análise de forças e manufatura.",
  },
];

export default function Equipe() {
  const [text, setText] = useState('A equipe é dividida em subsitemas, que focam em diferentes partes do trabalho de confecção, divulgação e organização interna. ')

  return (
    <div className="my-20 md:mt-0" id="equipe">
      <h1 className="text-3xl pb-5 pt-20 font-semibold" >
        A Equipe
      </h1>
      <p className="text-md md:text-lg mt-5">{text}</p>
      <div className="flex flex-row ml-16 md:ml-0 md:justify-between items-center flex-wrap">
        {subsistemas.map((sub) => (
          <SubsistemaButton src={sub.src} name={sub.name} key={sub.src} onClick={() => setText(sub.text)} />
        ))}
      </div>
    </div>
  );
}
