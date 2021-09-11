import SkyratsIcon from "../assets/SkyratsIcon";
import Header from "../components/Header";
import QuemSomos from "../components/QuemSomos";

export default function Home() {
  return (
    <div className="bg-gray text-gray-light">
      <Header />
      <div className="px-8 py-6">
        <SkyratsIcon className="mx-auto my-36" />
        <QuemSomos />
      </div>
    </div>
  );
}
