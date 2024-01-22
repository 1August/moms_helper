import { Header } from "@/components/Header";
import { Outlet } from "react-router-dom";
import { SidebarFilter } from '@/components/SidebarFilter'
import { Container } from '@/components/Container'
import { cn } from '@/utils/utils.ts'

export const Shoppy = () => {
  return (
    <>
      <Header />
      <Container className={cn('mt-8 grid md:grid-cols-[16rem_1fr] gap-8')}>
        <SidebarFilter />
        <Outlet />
      </Container>
    </>
  );
};
