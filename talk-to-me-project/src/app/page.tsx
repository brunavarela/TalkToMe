import { Button } from "@/components/ui/button";
import Link from "next/link";
import secondaryLogo from "./assets/secondary-logo.png";
import primaryLogo from "./assets/primary-logo.png";
import { FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <body className="h-max">
      <main className="flex bg-gradient-to-b from-background to-foreground min-h-screen items-center p-24">
        <div className="w-1/2 flex flex-col items-center">
          <div className="w-1/2 flex flex-col items-center space-y-3 mb-16">
            <img src={primaryLogo.src} className="w-44 h-auto"></img>
            <text className="text-xl text-primary">
              Encontre. Converse. Confie.
            </text>
          </div>
          <img src={secondaryLogo.src} className="w-96 h-auto"></img>
        </div>
        <div className="w-1/2 flex flex-col items-center">
          <text className="text-3xl text-primary font-semibold px-32 text-center mb-20">
            Boa vindas à sua nova plataforma de chat.
          </text>
          <div className="flex flex-col items-center space-y-3">
            <Button>
              <Link href="/pages/sign-in">Entrar</Link>
            </Button>
            <Button variant={"secondary"}>
              <Link href="/pages/sign-up">Criar conta</Link>
            </Button>
          </div>
        </div>
      </main>
      <footer className="bg-background p-12 flex flex-col items-center space-y-6">
        <nav className="text-primary space-x-6 ">
          <a>Contato</a>
          <a>Termos de uso</a>
          <a>Preferências</a>
        </nav>
        <span className="text-primary">
          © 2023 BrunaDeveloper. Todos os direitos reservados.
        </span>
        <div className="flex text-primary text-4xl"> </div>
        <Link
          href="https://www.linkedin.com/in/bruna-varela-borges-1124021b3/"
          target="_blank"
          className="flex text-primary text-4xl"
        >
          <FaLinkedin />
        </Link>
      </footer>
    </body>
  );
}
