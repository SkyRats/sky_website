import {useState} from 'react'
import CarometroButton from "../CarometroButton";

const pessoas = [
  {
    name: "Celina Lee",
    src: "celi",
    text: "link",
  },
  {
    name: "Renato da Silva",
    src: "renato",
    text: "link",
  },
  {
    name: "Sophia Celine",
    src: "soph",
    text: "link",
  },
];

export default function CCO() {
    const [text, setText] = useState( 'A Comissão Contra Opressão é um órgão supra subsistema que tem como papel garantir um ambiente confortável e inclusivo dentro da equipe. ')
    
    return (
    <div className="">
        <h1 className="text-3xl pb-5 pt-20 font-semibold" id="gestao">
          Comissão Contra Opressão
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


