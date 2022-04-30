import {useState} from 'react'
import CarometroButton from "../CarometroButton";

const pessoas = [
  {
    name: "Bento Brandani",
    src: "bento",
    text: "link",
  },  
  {
    name: "Brenda Moreira",
    src: "brenda",
    text: "link",
  },
  {
    name: "Celina Lee",
    src: "celi",
    text: "link",
  },
  {
    name: "Felipe Cardenas",
    src: "cardenas",
    text: "link",
  },
  {
    name: "Fernanda Akemi",
    src: "fefi",
    text: "link",
  },
  {
    name: "Gabriela Ishikawa",
    src: "gabs",
    text: "link",
  },
  {
    name: "João Mitterhoffer",
    src: "mitter",
    text: "link",
  },
  {
    name: "Matheus Hosomi",
    src: "hosomi",
    text: "link",
  },
  {
    name: "Matteus Hideki",
    src: "hideki",
    text: "link",
  },
  {
    name: "Pedro Fuoco",
    src: "fuoco",
    text: "link",
  },
  {
    name: "Sophia Celine",
    src: "soph",
    text: "link",
  },
];

export default function Comunicacao() {
  const [text, setText] = useState( 'A comunicação é o subsistema encarregado pela administração das redes sociais e divulgações da equipe, assim como pela produção áudio-texto-visual. ')
  
  return (
  <div className="">
      <h1 className="text-3xl pb-5 pt-20 font-semibold" id="gestao">
      Comunicação
      </h1>
      <p className="text-md md:text-lg md:mb-8">{text}</p>
      <div className="flex flex-row place-content-around items-center flex-wrap mt-3">
          {pessoas.map((pjt) => (
              <CarometroButton src={pjt.src} name={pjt.name} key={pjt.src}/>
          ))}
      </div>
    </div>
  );
}