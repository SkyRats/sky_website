import {useState} from 'react'
import CarometroButton from "../CarometroButton";

const pessoas = [
  {
    name: "Thomas Lutes",
    src: "thomas",
    text: "link",
  },
  {
    name: "Felipe Almeida",
    src: "almeida",
    text: "link",
  },
  {
    name: "Felipe Mizumoto",
    src: "kenji",
    text: "link",
  },
  {
    name: "Fernanda Akemi",
    src: "fefi",
    text: "link",
  },
  {
    name: "Gabriel Ziroldo",
    src: "ziroldo",
    text: "link",
  },
  {
    name: "João Pedro Moraes",
    src: "jp",
    text: "link",
  },
  {
    name: "Julia Silberman",
    src: "julia",
    text: "link",
  },
  {
    name: "Lucas Silveira",
    src: "lucaseduardo",
    text: "link",
  },
  {
    name: "Lucia de Santi",
    src: "lucia",
    text: "link",
  },
  {
    name: "Matteus Hideki",
    src: "hideki",
    text: "link",
  },
  {
    name: "Miyuki Yamashita",
    src: "miyuki",
    text: "link",
  },
  {
    name: "Rafael Varanda",
    src: "varanda",
    text: "link",
  },
];

export default function Mecanica() {
    const [text, setText] = useState( 'A mecânica é o subsistema responsável por projetar as estruturas do drone, como o frame, lidando com análise e otimização estrutural, desenvolvimento do design, análise de forças e manufatura. ')
    
    return (
    <div className="">
        <h1 className="text-3xl pb-5 pt-20 font-semibold" id="gestao">
          Mecanica
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