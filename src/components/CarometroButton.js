export default function CarometroButton({src, name, ...props}) {
    return (
      <button className="flex flex-col items-center transition duration-300 ease-in-out hover:scale-110"
              {...props}
      >
        <div class= "hexagon">
        <img
          src={"/images/carometro_img/" + src + ".png"}
          alt={"icone " + name}
          className="w-[25vw] md:w-[13vw] object-cover linear-gradient(to bottom, gray, white)"
        />
        </div>

        <h1 className="text-sm md:text-lg">{name}</h1>

      </button>
    );
  }
  