import Image from 'next/image';
import Header from './_components/header';
import SearchInput from './_components/search-inputs';
import banner from '../../public/banner.png';
import BookingItem from './_components/booking-item';
import { prisma } from '@/lib/prisma';
import SalonItem from './_components/salon-item';
import Footer from './_components/footer';
import {
  PageContainer,
  PageSection,
  PageSectionScroller,
  PageSectionTitle,
} from './_components/ui/page';
import QuickSearchButtons from './_components/quick-search-buttons';

export default async function Home() {
  const recomendedSalons = await prisma.salon.findMany({
    orderBy: {
      name: 'asc',
    },
  });
  const salons = await prisma.salon.findMany();
  return (
    <main>
      <Header />
      <PageContainer>
        <SearchInput />
        <QuickSearchButtons />
        <Image
          src={banner}
          alt="Banner Agende Agora!"
          sizes="100vw"
          className="h-auto w-full py-2"
        />

        <PageSection>
          <PageSectionTitle>Agendamentos</PageSectionTitle>
          <BookingItem
            serviceName="Corte de Cabelo"
            salonName="Beleza Fácil"
            salonImageUrl="https://i.ibb.co/wFmry8zX/04.png"
            date={new Date()}
          />
        </PageSection>

        <PageSection>
          <PageSectionTitle>Recomendados</PageSectionTitle>
          <PageSectionScroller>
            {recomendedSalons.map((salon) => (
              <SalonItem key={salon.id} salon={salon} />
            ))}
          </PageSectionScroller>
        </PageSection>

        <PageSection>
          <PageSectionTitle>Populares</PageSectionTitle>
          <PageSectionScroller>
            {salons.map((salon) => (
              <SalonItem key={salon.id} salon={salon} />
            ))}
          </PageSectionScroller>
        </PageSection>
      </PageContainer>
      <Footer />
    </main>
  );
}
