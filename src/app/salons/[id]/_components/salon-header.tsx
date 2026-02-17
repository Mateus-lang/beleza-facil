'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ChevronLeftIcon } from 'lucide-react';
import { Button } from '@/app/_components/ui/button';

interface SalonHeaderProps {
  imageUrl: string;
}

const SalonHeader = ({ imageUrl }: SalonHeaderProps) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="relative h-62.5 w-full">
      <Image
        src={imageUrl}
        alt="Imagem do salão"
        fill
        className="object-cover"
      />
      <Button
        variant="outline"
        size="icon"
        className="absolute top-6 left-5 rounded-full bg-white"
        onClick={handleBack}
      >
        <ChevronLeftIcon className="text-foreground" />
      </Button>
    </div>
  );
};

export default SalonHeader;
