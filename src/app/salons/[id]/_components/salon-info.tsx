import { Avatar, AvatarImage } from '@/app/_components/ui/avatar';

interface SalonInfoProps {
  name: string;
  address: string;
  imageUrl: string;
}

const SalonInfo = ({ name, address, imageUrl }: SalonInfoProps) => {
  return (
    <div className="flex w-full flex-col gap-2 px-5 pt-6">
      <div className="flex flex-row items-center gap-2">
        <Avatar>
          <AvatarImage src={imageUrl} alt={name} />
        </Avatar>
        <h1 className="text-xl font-bold">{name}</h1>
      </div>
      <p className="text-sm text-gray-500">{address}</p>
    </div>
  );
};

export default SalonInfo;
