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
    <Menu as="div" className="flex flex-col items-end">
      <Menu.Button>
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
        <Menu.Items className="flex flex-col text-right">
          {pages.map((item) => (
            <Menu.Item>
              <a
                href={item.link}
                className="text-xl text-gray-light hover:text-gray-lightest"
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
