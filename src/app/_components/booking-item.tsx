import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Card } from './ui/card';

interface BookingItemProps {
  salonName: string;
  serviceName: string;
  salonImageUrl: string;
  date: Date;
}

const BookingItem = ({
  salonName,
  serviceName,
  salonImageUrl,
  date,
}: BookingItemProps) => {
  return (
    <Card className="flex flex-row items-center justify-between p-4">
      <div className="flex flex-col gap-2">
        <Badge className="bg-green-50 text-sm text-green-700 dark:bg-green-950 dark:text-green-300">
          Confirmado
        </Badge>
        <div className="flex flex-col gap-2">
          <p className="text-sm font-bold">{serviceName}</p>
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={salonImageUrl} alt={salonName} />
            </Avatar>
            <p className="text-sm">{salonName}</p>
          </div>
        </div>
      </div>

      <div className="flex h-full flex-col items-center justify-center border-l p-4 py-3">
        <p className="text-xs capitalize">
          {date.toLocaleDateString([], { month: 'long' })}
        </p>
        <p className='text-2xl'>{date.toLocaleDateString([], { day: '2-digit' })}</p>
        <p className="text-xs">
          {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
    </Card>
  );
};

export default BookingItem;
