import { SearchIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const SearchInput = () => {
  return (
    <div className="flex items-center gap-2">
      <Input
        type="text"
        className="border-border rounded-full"
        placeholder="Buscar serviços ou salões..."
      />
      <Button className="rounded-full" size="icon" variant="default">
        <SearchIcon />
      </Button>
    </div>
  );
};

export default SearchInput;
