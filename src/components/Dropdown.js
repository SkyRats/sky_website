import { MenuIcon } from "@heroicons/react/solid";
import { Menu, Transition } from "@headlessui/react";

export default function Dropdown({pages}) {
  return (
    <Menu as="div" className="relative inline-block text-right">
      <Menu.Button className="bg-gray-dark bg-opacity-60 hover:bg-opacity-80 p-1 rounded-lg shadow-lg">
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
        <Menu.Items className="absolute right-0 w-56 mt-1 origin-top-right bg-gray-dark bg-opacity-80 rounded-lg shadow-lg flex flex-col p-1">
          {pages.map((item) => (
            <Menu.Item key={item.name}>
              <Link
                href={item.link}
                className="rounded-md w-full p-2 text-lg hover:bg-gray-dark"
              >
                {" "}
                {item.name}{" "}
              </Link>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
