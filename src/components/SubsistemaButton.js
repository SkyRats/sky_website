export default function SubsistemaButton(props) {
  return (
    <button className="flex flex-col items-center transition duration-300 ease-in-out hover:scale-110">
      <img
        src={"/images/botao_" + props.src + ".png"}
        alt={"icone " + props.name}
        className="max-w-[12rem] w-auto"
      />
      <h1 className="text-lg">{props.name}</h1>
    </button>
  );
}