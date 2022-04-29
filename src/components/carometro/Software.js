import {useState} from 'react'
import CarometroButton from "../CarometroButton";

const pessoas = [
  {
    name: "Pedro Fuoco",
    src: "fuoco",
    text: "link",
  },
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
    name: "Dayane Pereira",
    src: "day",
    text: "link",
  },
  {
    name: "Fabio Lee",
    src: "fabio",
    text: "link",
  },
  {
    name: "Fernando Gentil",
    src: "gentil",
    text: "link",
  },
  {
    name: "Fernando Zolubas",
    src: "zolubas",
    text: "link",
  },
  {
    name: "Gabriel Pereira",
    src: "pereira",
    text: "link",
  },
  {
    name: "Gabriela Ishikawa",
    src: "gabs",
    text: "link",
  },
  {
    name: "Igor Tresolavy",
    src: "igor",
    text: "link",
  },
  {
    name: "Lucas Galvão",
    src: "lucasgalvao",
    text: "link",
  },
  {
    name: "Mateus Bonelli",
    src: "bonelli",
    text: "link",
  },
  {
    name: "Matheus Vasconcelos",
    src: "matheus",
    text: "link",
  },
  {
    name: "Renato da Silva",
    src: "renato",
    text: "link",
  },
  {
    name: "Ricardo Chiquetto",
    src: "rick",
    text: "link",
  },
  {
    name: "Sophia Celine",
    src: "soph",
    text: "link",
  },
  {
    name: "Tomaz Suller",
    src: "tomaz",
    text: "link",
  },
];

export default function Software() {
    const [text, setText] = useState( 'O software é o subsistema que lida com inteligência artificial, visão computacional, simulações e sistemas de controle de forma a construir arquiteturas integradoras para a realização de missões autônomas. ')
    
    return (
    <div className="">
        <h1 className="text-3xl pb-5 pt-20 font-semibold" id="gestao">
          Software
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

