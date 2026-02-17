import Image from 'next/image';
import Header from './_components/header';
import SearchInput from './_components/search-inputs';
import banner from '../../public/banner.png';
import BookingItem from './_components/booking-item';

const DateNow = new Date();

export default function Home() {
  return (
    <div>
      <Header />
      <div className="px-5">
        <SearchInput />
        <Image
          src={banner}
          alt="Banner Agende Agora!"
          sizes="100vw"
          className="h-auto w-full py-5"
        />
        <h2 className="pt-5 pb-3 font-bold uppercase">Agendamentos</h2>
        <BookingItem
          serviceName="Corte de Cabelo"
          salonName="Beleza Fácil"
          salonImageUrl="https://i.ibb.co/wFmry8zX/04.png"
          date={DateNow}
        />
      </div>
    </div>
  );
}
