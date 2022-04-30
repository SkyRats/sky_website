import {useState} from 'react'
import CarometroButton from "../CarometroButton";

const pessoas = [
  {
    name: "Felipe Cardenas",
    src: "cardenas",
    text: "link",
  },
  {
    name: "Artur Paparounis",
    src: "papas",
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
    name: "Enzo Belém",
    src: "enzo",
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
    name: "Marcos Paulo",
    src: "marcos",
    text: "link",
  },
  {
    name: "Matheus Hosomi",
    src: "hosomi",
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
    name: "Weslley de Oliveira",
    src: "weslley",
    text: "link",
  },
];

export default function Hardware() {
    const [text, setText] = useState( 'O hardware lida com calibração, pilotagem de drones, desenvolvimento de ambientes de simulação e desenvolvimento de circuitos e sistemas eletrônicos. ')
    
    return (
    <div className="">
        <h1 className="text-3xl pb-5 pt-20 font-semibold" id="gestao">
          Hardware
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


