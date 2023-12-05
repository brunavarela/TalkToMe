import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Sua nova plataforma de chat</h1>
      <Button><Link href="/pages/sign-in">Entrar</Link></Button>
      <Button><Link href="/pages/sign-up">Criar conta</Link></Button>
    </main>
  );
}
