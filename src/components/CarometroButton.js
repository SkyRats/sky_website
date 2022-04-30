export default function CarometroButton({src, name, ...props}) {
    return (
      <button className="flex flex-col items-center px-2 py-4 transition duration-300 ease-in-out hover:scale-110"
              {...props}
      >
        <div className= "flex flex-col items-center mb-2 hexagon">
        <img
          src={"/images/carometro_img/" + src + ".png"}
          alt={"icone " + name}
          className="h-[30vw] w-[30vw] object-cover"
        />
        </div>

        <h1 className="text-sm md:text-lg">{name}</h1>

      </button>
    );
  }
  