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
    <div>
      <Card>
        <div className="flex flex-col gap-2 px-3 py-2">
          <Badge className="bg-green-50 text-sm text-green-700 dark:bg-green-950 dark:text-green-300">
            Confirmado
          </Badge>
          <p className="text-sm">{serviceName}</p>
        </div>
      </Card>
    </div>
  );
};

export default BookingItem;
