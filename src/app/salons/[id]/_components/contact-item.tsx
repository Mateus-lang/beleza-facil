'use client';

import { SmartphoneIcon } from 'lucide-react';
import { Button } from '@/app/_components/ui/button';
import { toast } from 'sonner';

interface ContactItemProps {
  phone: string;
}

const ContactItem = ({ phone }: ContactItemProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(phone);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <SmartphoneIcon className="text-foreground size-6" />
        <p className="text-foreground text-sm">{phone}</p>
      </div>
      <Button
        variant="outline"
        size="sm"
        className="rounded-full"
        onClick={() => {
          handleCopy();
          toast('Número copiado para a área de transferência!', {
            position: 'bottom-right',
          });
        }}
      >
        Copiar
      </Button>
    </div>
  );
};

export default ContactItem;
