import Image from 'next/image';
import Header from './_components/header';
import SearchInput from './_components/search-inputs';
import banner from '../../public/banner.png';
import BookingItem from './_components/booking-item';
import { prisma } from '@/lib/prisma';
import SalonItem from './_components/salon-item';

export default async function Home() {
  const recomendedSalons = await prisma.salon.findMany({
    orderBy: {
      name: 'asc',
    },
  });
  const salons = await prisma.salon.findMany();
  return (
    <div>
      <Header />
      <div className="space-y-4 p-5">
        <SearchInput />
        <Image
          src={banner}
          alt="Banner Agende Agora!"
          sizes="100vw"
          className="h-auto w-full py-5"
        />
        <h2 className="text-foreground text-xs font-semibold uppercase">
          Agendamentos
        </h2>
        <BookingItem
          serviceName="Corte de Cabelo"
          salonName="Beleza Fácil"
          salonImageUrl="https://i.ibb.co/wFmry8zX/04.png"
          date={new Date()}
        />

        <h2 className="text-foreground text-xs font-semibold uppercase">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {recomendedSalons.map((salon) => (
            <SalonItem key={salon.id} salon={salon} />
          ))}
        </div>

        <h2 className="text-foreground text-xs font-semibold uppercase">
          Populares
        </h2>
        <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {salons.map((salon) => (
            <SalonItem key={salon.id} salon={salon} />
          ))}
        </div>
      </div>
    </div>
  );
}
