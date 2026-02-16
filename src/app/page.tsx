import Image from "next/image";
import Header from "./_components/header";
import SearchInput from "./_components/search-inputs";
import banner from "../../public/banner.png";


export default function Home() {
  return (
    <div>
      <Header />
      <div className="px-5">
        <SearchInput />
        <Image src={banner} alt="Banner Agende Agora!" sizes="100vw" className="w-full h-auto py-5 " />
      </div>
    </div>
  );
}
