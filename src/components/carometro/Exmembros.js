

const pessoas = [
  {
    name: "Lucia de Santi",
    src: "lucia",
    text: "link",
  },
  {
    name: "Rafael Varanda",
    src: "varanda",
    text: "link",
  },
  {
    name: "Matheus Vasconcelos",
    src: "matheus",
    text: "link",
  },
  {
    name: "Fabio Lee",
    src: "fabio",
    text: "link",
  },
];




export default function Exmembros() {
    
  return (
      <div>
        <div className="flex items-center flex-col-reverse md:flex-row">
            <h1 className="text-3xl pb-5 pt-20 font-semibold" id="exmembros">
              Ex-membros
            </h1>
        </div>
      </div>
    );
}