export default function SubsistemaButton(props) {
  return (
    <div className="flex flex-col items-center">
      <img
        src={"/images/botao_" + props.src + ".png"}
        alt={"icone " + props.name}
        className="w-56"
      />
      <h1>{props.name}</h1>
    </div>
  );
}
