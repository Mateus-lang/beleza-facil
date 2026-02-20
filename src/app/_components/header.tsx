import Image from 'next/image';
import { MenuIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import SidebarMenu from './sidebar';

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white px-5 py-6">
      <Image src="/logo.svg" alt="Beleza Fácil" width={100} height={26.09} />
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <MenuIcon className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SidebarMenu/>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
