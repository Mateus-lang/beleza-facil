import { Salon } from '@/generated/prisma/client';
import Image from 'next/image';

interface SalonItemProps {
  salon: Salon;
}

const SalonItem = ({ salon }: SalonItemProps) => {
  return (
    <div className="relative min-h-50 min-w-72.5 rounded-xl p-4">
      <div className="absolute top-0 left-0 z-10 h-full w-full rounded-lg bg-linear-to-t from-black to-transparent" />
      <Image
        src={salon.imageUrl}
        fill
        alt={salon.name}
        className="rounded-xl object-cover"
      />
      <div className="absolute right-0 bottom-0 left-0 z-20 p-4">
        <h3 className="text-lg font-bold text-white">{salon.name}</h3>
        <p className="text-sm text-white">{salon.address}</p>
      </div>
    </div>
  );
};

export default SalonItem;
