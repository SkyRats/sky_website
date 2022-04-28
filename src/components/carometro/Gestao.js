import {useState} from 'react'
import CarometroButton from "../CarometroButton";

const pessoas = [
  {
    name: "Artur Paparounis",
    src: "papas",
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
    name: "Carine Guzzi",
    src: "cari",
    text: "link",
  },
  {
    name: "Celina Lee",
    src: "celi",
    text: "link",
  },
  {
    name: "Dayane Pereira",
    src: "dayane",
    text: "link",
  },
  {
    name: "Enzo Belém",
    src: "enzo",
    text: "link",
  },
  {
    name: "Fabio Lee",
    src: "fabio",
    text: "link",
  },
  {
    name: "Felipe Almeida",
    src: "almeida",
    text: "link",
  },
  {
    name: "Felipe Cardenas",
    src: "cardenas",
    text: "link",
  },
  {
    name: "Felipe Jordão",
    src: "jordao",
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
    name: "Gabriel Akira",
    src: "akira",
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
    name: "Gabriel Ziroldo",
    src: "ziroldo",
    text: "link",
  },
  {
    name: "Gabriela Ishikawa",
    src: "gabs",
    text: "link",
  },
  {
    name: "Gustavo Hungerbuhler",
    src: "gustavo",
    text: "link",
  },
  {
    name: "Henrique Barros",
    src: "barros",
    text: "link",
  },
  {
    name: "Henrique Kawamura",
    src: "kawamura",
    text: "link",
  },
  {
    name: "Igor Tresolavy",
    src: "igor",
    text: "link",
  },
  {
    name: "João Guazzelli",
    src: "guazzelli",
    text: "link",
  },
  {
    name: "João Albiero",
    src: "albiero",
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
    name: "Kléber Keithi",
    src: "kleber",
    text: "link",
  },
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
  {
    name: "Lucas Silveira",
    src: "lucaseduardo",
    text: "link",
  },
  {
    name: "Lucas Felipe",
    src: "lucasfelipe",
    text: "link",
  },
  {
    name: "Lucas Galvão",
    src: "lucasgalvao",
    text: "link",
  },
  {
    name: "Lucia de Santi",
    src: "lucia",
    text: "link",
  },
  {
    name: "Marcos Paulo",
    src: "marcos",
    text: "link",
  },
  {
    name: "Mateus Bonelli",
    src: "bonelli",
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
    name: "Matheus Vasconcelos",
    src: "matheus",
    text: "link",
  },
  {
    name: "Matteus Hideki",
    src: "hideki",
    text: "link",
  },
  {
    name: "Miguel Aguena",
    src: "miguel",
    text: "link",
  },
  {
    name: "Miyuki Yamashita",
    src: "miyuki",
    text: "link",
  },
  {
    name: "Murilo Augusto",
    src: "muriloa",
    text: "link",
  },
  {
    name: "Murilo Ferreira",
    src: "murilof",
    text: "link",
  },
  {
    name: "Paulo Orglmeister",
    src: "paulo",
    text: "link",
  },
  {
    name: "Pedro Fuoco",
    src: "fuoco",
    text: "link",
  },
  {
    name: "Rafael Varanda",
    src: "varanda",
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
    name: "Thomas Lutes",
    src: "thomas",
    text: "link",
  },
  {
    name: "Tomaz Suller",
    src: "tomaz",
    text: "link",
  },
  {
    name: "Weslley de Oliveira",
    src: "weslley",
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

