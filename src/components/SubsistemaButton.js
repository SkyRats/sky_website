export default function SubsistemaButton({src, name, ...props}) {
  return (
    <button className="flex flex-col items-center transition duration-300 ease-in-out hover:scale-110 w-auto"
            {...props}
    >
      <img
        src={"/images/" + src + ".png"}
        alt={"icone " + name}
        className="w-[25vw] md:w-[13vw]"
      />
      <h1 className="text-sm md:text-lg">{name}</h1>
    </button>
  );
}
