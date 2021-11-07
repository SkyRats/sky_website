export default function SubsistemaButton({src, name, ...props}) {
  return (
    <button className="flex flex-col items-center transition duration-300 ease-in-out hover:scale-110 w-auto"
            {...props}
    >
      <img
        src={"/images/botao_" + src + ".png"}
        alt={"icone " + name}
        className="w-[15vw]"
      />
      <h1 className="text-lg">{name}</h1>
    </button>
  );
}
