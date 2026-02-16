import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const SearchInput = () => {
  return (
    <div className="flex gap-2 items-center ">
      <Input type="text" className="rounded-full border-border" placeholder="Buscar serviços ou salões..." />
      <Button className="rounded-full" size="icon" variant="default">
        <SearchIcon />
      </Button>
    </div>
  );
}

export default SearchInput;