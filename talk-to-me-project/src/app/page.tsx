import { Button } from "@/components/ui/button";
import Link from "next/link";
import secondaryLogo from "./assets/secondary-logo.png";
import primaryLogo from "./assets/primary-logo.png";
import bgImage from "./assets/bg-image.png";
import { FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <body className="h-max">
      <nav className="w-full absolute flex bg-background">
        <div className="p-4 w-1/2">
          <img src={primaryLogo.src} className="w-44"></img>
        </div>
        <div className="p-4 flex justify-end w-1/2">
          <div className="flex space-x-2">
            <Button variant={"secondary"}>
              <Link href="/pages/sign-in">Entrar</Link>
            </Button>
            <Button>
              <Link href="/pages/sign-up">Criar conta</Link>
            </Button>
          </div>
        </div>
      </nav>
      <main className="flex bg-gradient-to-b from-background to-foreground ">
        <div className="w-1/2 flex flex-col items-center mt-40">
          <div className="w-100 flex flex-col space-y-1 mb-20">
            <text className="text-4xl text-primary">
              Boas vindas à sua <span className="text-foreground font-bold">nova</span>
            </text>
            <text className="text-4xl text-primary text-center">
              <span className="text-foreground font-bold">plataforma</span> de <span className="text-foreground font-bold">chat</span>.
            </text>
          </div>
          <img src={secondaryLogo.src} className="2xl:w-auto h-auto xl:w-96"></img>
        </div>
        <div className="w-1/2 flex flex-col items-center">
          <img src={bgImage.src} className="w-full h-full"></img>
          <div className="absolute right-14 top-40 text-start">
            <p className="text-2xl text-primary font-light">Crie sua conta.</p>
            <p className="text-2xl text-primary font-light">É grátis!</p>
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
