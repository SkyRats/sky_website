import {useState} from 'react'
import CarometroButton from "../CarometroButton";

const pessoas = [  
  {
    name: "Fernanda Akemi",
    src: "fefi",
    text: "link",
  },
  {
    name: "Celina Lee",
    src: "celi",
    text: "link",
  },
  {
    name: "Felipe Almeida",
    src: "almeida",
    text: "link",
  },

  {
    name: "Felipe Jordão",
    src: "jordao",
    text: "link",
  },

  {
    name: "Gabriel Pereira",
    src: "pereira",
    text: "link",
  },
  {
    name: "Gabriel Ribeiro",
    src: "ribeiro",
    text: "link",
  },
  {
    name: "João Cabral",
    src: "cabral",
    text: "link",
  },
  {
    name: "João Mitterhoffer",
    src: "mitter",
    text: "link",
  },
  {
    name: "Kléber Keithi",
    src: "kleber",
    text: "link",
  },
  {
    name: "Mateus Mizote",
    src: "mizote",
    text: "link",
  },
  {
    name: "Matheus Hosomi",
    src: "hosomi",
    text: "link",
  },
  {
    name: "Miyuki Yamashita",
    src: "miyuki",
    text: "link",
  },
];

export default function Gestao() {
    const [text, setText] = useState( 'A gestão atua na organização interna da equipe, nas finanças e nos eventos tanto internos quanto externos, além de ser responsável pelos patrocínios e parcerias.')
    
    return (
    <div className="">
        <h1 className="text-3xl pb-5 pt-20 font-semibold" id="gestao">
          Gestão
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

