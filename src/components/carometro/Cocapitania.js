import {useState} from 'react'
import CarometroButton from "../CarometroButton";

const pessoas = [
  {
    name: "Larissa Fontes",
    src: "lari",
    text: "link",
  },
  {
    name: "Leonardo Leite",
    src: "leo",
    text: "link",
  },
];

export default function Cocapitania() {
    const [text, setText] = useState( 'A Co-Capitania é a junção dos dois cargos responsáveis pela representação e organização da equipe.')
    
    return (
    <div className="">
        <h1 className="text-3xl pb-5 pt-20 font-semibold" id="gestao">
          Co-Capitania
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