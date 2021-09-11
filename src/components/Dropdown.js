import { MenuIcon } from "@heroicons/react/solid";
import { Menu, Transition } from "@headlessui/react";

const pages = [
  {
    name: "Quem somos",
    link: "#quem-somos",
  },
  {
    name: "A Equipe",
    link: "#equipe",
  },
  {
    name: "Conquistas",
    link: "#conquistas",
  },
  {
    name: "Projetos",
    link: "#projetos",
  },
  {
    name: "Parcerias",
    link: "#parcerias",
  },
  {
    name: "Apoia-se",
    link: "#apoia-se",
  },
];

export default function Dropdown() {
  return (
    <Menu as="div" className="relative inline-block text-right">
      <Menu.Button className="bg-gray-dark bg-opacity-20 hover:bg-opacity-40 p-1 rounded-md shadow-lg">
        <MenuIcon className="w-10 h-10" />
      </Menu.Button>

      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-gray-dark rounded-md shadow-lg flex flex-col p-1">
          {pages.map((item) => (
            <Menu.Item>
              <a
                href={item.link}
                className="rounded-md w-full p-2 text-lg hover:bg-gray"
              >
                {" "}
                {item.name}{" "}
              </a>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
