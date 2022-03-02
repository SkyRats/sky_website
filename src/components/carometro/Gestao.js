import {useState} from 'react'
import CarometroButton from "../CarometroButton";

const pessoas = [
  {
    name: "Fulano1",
    src: "fulano1",
    text: "link",
  },
  {
    name: "Fulano2",
    src: "fulano2",
    text: "link",
  },
  {
    name: "Fulano3",
    src: "fulano3",
    text: "link",
  },
  {
    name: "Fulano4",
    src: "fulano4",
    text: "link",
  },
];

export default function Gestao() {
    const [text, setText] = useState( 'A gestão atua na organização interna da equipe, nas finanças e nos eventos tanto internos quanto externos, além de ser responsável pelos patrocínios e parcerias.')
    
    return (
    <div className="flex items-center flex-col-reverse md:flex-row">
        <h1 className="text-3xl pb-5 pt-20 font-semibold" id="gestao">
          Gestão
        </h1>
        <p className="text-md md:text-lg md:mb-8">{text}</p>
        <div className="flex flex-row justify-between items-center flex-wrap mt-3">
            {pessoas.map((pjt) => (
                <CarometroButton src={pjt.src} name={pjt.name} key={pjt.src} onClick={() => setText(pjt.text)} />
            ))}
        </div>
      </div>
    );
}

