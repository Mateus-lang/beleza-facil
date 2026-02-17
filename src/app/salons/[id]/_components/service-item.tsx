import Image from 'next/image';
import { Button } from '@/app/_components/ui/button';
import type { SalonServiceModel } from '@/generated/prisma/models/SalonService';

interface ServiceItemProps {
  service: SalonServiceModel;
}

const ServiceItem = ({ service }: ServiceItemProps) => {
  const formattedPrice = (service.priceInCents / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <div className="border-border bg-card flex gap-3 rounded-2xl border p-3">
      <div className="relative size-27.5 shrink-0 overflow-hidden rounded-lg">
        <Image
          src={service.imageUrl}
          alt={service.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div className="flex flex-col gap-1">
          <h3 className="text-card-foreground text-sm font-bold">
            {service.name}
          </h3>
          <p className="text-muted-foreground line-clamp-2 text-sm">
            {service.description}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-card-foreground text-sm font-bold">
            {formattedPrice}
          </p>
          <Button size="sm" className="rounded-full">
            Reservar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
