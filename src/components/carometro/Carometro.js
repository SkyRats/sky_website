import {useState} from 'react'
import SubsistemaButton from "./SubsistemaButton";

const projetos = [
  {
    name: "Gaiola de Testes",
    src: "botao_gaiola",
    text: "Em 2018, um dos primeiros projetos desenvolvidos foi a implantação de uma gaiola de testes para drones no CITI-USP, a fim de que as missões projetadas fossem testadas de forma segura e estruturada, o que foi fundamental para a evolução dos protótipos.",
  },
  {
    name: "Base de Drones",
    src: "botao_base_drones",
    text: "A base de drones consiste em um projeto de 5 drones, capazes de autonomamente realizar praticamente qualquer missão no âmbito de segurança, desastres naturais e busca e resgate. Tais drones são: Indoor, um drone de médio porte, equipado com os mais variados tipos de sensores e equipamentos para atuar em ambientes internos; o Outdoor, um octacoptero com alta capacidade de carregamento e de filmagem, atuante através de 4G; e por fim, o Swarm, que são pequenos drones de alto desempenho capazes de realizar missões em ambientes externos em conjunto.",
  },
  {
    name: "Colibri",
    src: "botao_colibri",
    text: "O Colibri, nome de uma ave endêmica da América do Sul, é um mini drone 100% brasileiro. Sua controladora de voo é uma adaptação da Pulga Board, microcontroladora produzida pela Caninos Loucos, também sediada no CITI.",
  },
  {
    name: "S10",
    src: "botao_s10",
    text: "O drone S10 foi um projeto desenvolvido pelos novos integrantes da equipe no hardware e na mecânica, no ano de 2021, para que eles se familiarizassem com o processo de dimensionamento e construção de um drone. Ele tem como objetivo ser um drone compacto e barato, capaz de executar voos controlados por celular, transmissão em tempo real de vídeo e testes mais simples, internos ou externos.",
  },
];

export default function Carometro() {
  const [text, setText] = useState('Estes são os projetos que a equipe realizou ou está realizando até o momento presente. ')

  return (
    <div className="md:mt-0" id="projetos">
      <h1 className="text-3xl pb-5 pt-20 font-semibold" >
        Carômetro da equipe
      </h1>
      <p className="text-md md:text-lg ">{text}</p>
      <div className="flex flex-row justify-between items-center flex-wrap mt-3">
        {projetos.map((pjt) => (
          <SubsistemaButton src={pjt.src} name={pjt.name} key={pjt.src} onClick={() => setText(pjt.text)} />
        ))}
      </div>
    </div>
  );
}