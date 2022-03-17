export default function CarometroButton({src, name, ...props}) {
    return (
      <button className="flex flex-col items-center transition duration-300 ease-in-out hover:scale-110"
              {...props}
      >
        <img
          src={"/images/carometro_img/" + src + ".jpg"}
          alt={"icone " + name}
          className="h-24 w-auto object-cover rounded-full"
        />
        <h1 className="text-sm md:text-lg">{name}</h1>
      </button>
    );
  }
  