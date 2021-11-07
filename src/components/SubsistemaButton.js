export default function SubsistemaButton(props) {
  return (
    <button className="flex flex-col items-center transition duration-300 ease-in-out hover:scale-110 w-auto">
      <img
        src={"/images/botao_" + props.src + ".png"}
        alt={"icone " + props.name}
        className="w-[15vw]"
      />
      <h1 className="text-lg">{props.name}</h1>
    </button>
  );
}