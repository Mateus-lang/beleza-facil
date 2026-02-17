import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import SalonHeader from './_components/salon-header';
import SalonInfo from './_components/salon-info';
import SectionTitle from './_components/section-title';
import ServiceItem from './_components/service-item';
import ContactItem from './_components/contact-item';
import { Separator } from '@/app/_components/ui/separator';
import Footer from '@/app/_components/footer';

const SalonPage = async (props: PageProps<'/salons/[id]'>) => {
  const { id } = await props.params;

  const salon = await prisma.salon.findUnique({
    where: {
      id,
    },
    include: {
      services: true,
    },
  });

  if (!salon) {
    return notFound();
  }

  return (
    <main>
      <SalonHeader imageUrl={salon.imageUrl} />
      <div className="bg-background relative z-10 -mt-6 rounded-t-3xl">
        <SalonInfo
          name={salon.name}
          address={salon.address}
          imageUrl={salon.imageUrl}
        />

        <Separator className="my-6" />

        {/* Sobre Nós */}
        <section className="flex flex-col gap-3 px-5">
          <SectionTitle>Sobre nós</SectionTitle>
          <p className="text-foreground text-sm">{salon.description}</p>
        </section>

        <Separator className="my-6" />

        {/* Serviços */}
        <section className="flex flex-col gap-3 px-5">
          <SectionTitle>Serviços</SectionTitle>
          <div className="flex flex-col gap-3">
            {salon.services.map((service) => (
              <ServiceItem key={service.id} service={service} />
            ))}
          </div>
        </section>

        <Separator className="my-6" />

        {/* Contato */}
        <section className="flex flex-col gap-3 px-5">
          <SectionTitle>Contato</SectionTitle>
          <div className="flex flex-col gap-3">
            {salon.phones.map((phone) => (
              <ContactItem key={phone} phone={phone} />
            ))}
          </div>
        </section>

        <div className="pt-16">
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default SalonPage;
