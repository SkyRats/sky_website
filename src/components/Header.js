import Dropdown from "./Dropdown";

export default function Header() {
  return (
    <div className="flex flex-row justify-between">
      <span className='text-4xl'>SkyRatos</span> <Dropdown />
    </div>
  );
}
