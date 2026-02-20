'use client';

import { useClerk, useUser } from '@clerk/nextjs';
import { Separator } from './ui/separator';
import { Avatar, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { CalendarDaysIcon, HomeIcon, LogInIcon, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { SheetClose } from './ui/sheet';
import Link from 'next/link';

const SidebarMenu = () => {
  const session = useUser();
  const router = useRouter();
  const { signOut } = useClerk();

  const handleLogin = () => {
    router.push('/sign-in');
  };

  const handleLogout = async () => {
    await signOut();
    router.push('/');
  };

  return (
    <div className="flex h-full flex-col gap-6 py-6">
      <div className="flex items-center justify-between px-5">
        <h2 className="font-bold">Menu</h2>
      </div>

      <Separator />

      {session?.user ? (
        <div className="flex items-center gap-3 px-5">
          <Avatar size="lg">
            <AvatarImage src={session.user.imageUrl} />
          </Avatar>
          <div className="mr-5 flex flex-col justify-center">
            <p className="text-sm font-semibold">{session.user.fullName}</p>
            <p className="text-muted-foreground text-xs">
              {session.user.emailAddresses[0]?.emailAddress}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between px-5">
          <div>
            <p className="text-base font-semibold">Olá. Entre na sua conta!</p>
          </div>
          <Button
            onClick={handleLogin}
            className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 rounded-full"
          >
            <span className="text-sm font-semibold">Entrar</span>
            <LogInIcon className="h-4 w-4" />
          </Button>
        </div>
      )}

      <div className="flex flex-col px-5">
        <SheetClose asChild>
          <Link href="/">
            <Button
              variant="ghost"
              className="h-auto w-full justify-start gap-3 rounded-full py-3"
            >
              <HomeIcon className="size-4" />
              <span className="text-sm font-medium">Início</span>
            </Button>
          </Link>
        </SheetClose>
        <SheetClose asChild>
          <Link href="/bookings">
            <Button
              variant="ghost"
              className="h-auto w-full justify-start gap-3 rounded-full py-3"
            >
              <CalendarDaysIcon className="size-4" />
              <span className="text-sm font-medium">Agendamentos</span>
            </Button>
          </Link>
        </SheetClose>
      </div>

      <Separator />

      {/* Menu Items */}
      <div className="flex flex-col gap-1 px-5">
        <Link
          href="/salons?search=trança"
          className="hover:bg-primary/10 h-auto w-full cursor-pointer rounded-full px-5 py-1"
        >
          <span className="text-sm font-medium">Trança</span>
        </Link>

        <Link
          href="/salons?search=fibra"
          className="hover:bg-primary/10 h-auto w-full cursor-pointer rounded-full px-5 py-1"
        >
          <span className="text-sm font-medium">Fibra</span>
        </Link>

        <Link
          href="/salons?search=hidratação"
          className="hover:bg-primary/10 h-auto w-full cursor-pointer rounded-full px-5 py-1"
        >
          <span className="text-sm font-medium">Hidratação</span>
        </Link>

        <Link
          href="/salons?search=sobrancelha"
          className="hover:bg-primary/10 h-auto w-full cursor-pointer rounded-full px-5 py-1"
        >
          <span className="text-sm font-medium">Sobrancelha</span>
        </Link>

        <Link
          href="/salons?search=massagem"
          className="hover:bg-primary/10 h-auto w-full cursor-pointer rounded-full px-5 py-1"
        >
          <span className="text-sm font-medium">Massagem</span>
        </Link>
        <Link
          href="/salons?search=finalização"
          className="hover:bg-primary/10 h-auto w-full cursor-pointer rounded-full px-5 py-1"
        >
          <span className="text-sm font-medium">Finalização</span>
        </Link>
      </div>

      <Separator />

      {/* Logout Button */}
      {session?.user && (
        <div className="px-5 py-3">
          <SheetClose asChild>
            <Button
              variant="ghost"
              onClick={handleLogout}
              className="text-muted-foreground w-full justify-start gap-3 rounded-full font-medium"
            >
              <LogOut className="h-4 w-4" />
              Sair da conta
            </Button>
          </SheetClose>
        </div>
      )}
    </div>
  );
};

export default SidebarMenu;
