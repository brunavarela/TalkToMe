"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import secondaryLogo from "./assets/secondary-logo.png";
import primaryLogo from "./assets/primary-logo.png";
import bgImage from "./assets/bg-image.png";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-foreground">
      <nav className="w-full p-4 absolute flex bg-background  z-10">
        <div className="w-1/2">
          <img src={primaryLogo.src} className="w-44" alt="Primary Logo" />
        </div>
        <div className="w-1/2 flex justify-end">
          <div className="flex space-x-2">
            <Button
              variant={"secondary"}
              size={"sm"}
              className="px-2 py-2"
              onClick={() => router.push("/pages/sign-in")}
            >
              {" "}
              Entrar
            </Button>
            <Button
              size={"sm"}
              className="px-2"
              onClick={() => router.push("/pages/sign-up")}
            >
              Criar conta
            </Button>
          </div>
        </div>
      </nav>
      <main className="flex-grow flex flex-col-reverse lg:flex-row">
        <div className="lg:w-1/2 flex flex-col items-center mt-6 lg:mt-40">
          <div className="mb-12 lg:mb-20 text-3xl lg:text-4xl text-primary text-center">
            <p>
              Boas vindas à sua{" "}
              <span className="lg:text-foreground font-bold">nova</span>
            </p>
            <p>
              <span className="lg:text-foreground font-bold">plataforma</span>{" "}
              de <span className="lg:text-foreground font-bold">chat</span>.
            </p>
          </div>
          <img
            src={secondaryLogo.src}
            className="w-72 mb-12 2xl:w-auto lg:w-96 xl:w-96 h-auto "
            alt="Secondary Logo"
          />
        </div>
        <div className="lg:w-1/2 relative">
          <img
            src={bgImage.src}
            className="w-full h-full object-cover"
            alt="Background Image"
          />
          <div className="absolute right-10 top-24 lg:right-14 lg:top-40 text-start text-base lg:text-2xl">
            <p className=" text-primary font-light">Crie sua conta.</p>
            <p className=" text-primary font-light">É grátis!</p>
          </div>
        </div>
      </main>
      <footer className="p-12 bg-background text-center mt-auto">
        <p className="text-primary my-4 text-sm">
          © 2023 BrunaDeveloper. Alguns direitos reservados.
        </p>
        <div className="flex justify-center text-primary text-4xl space-x-4">
          <Link
            href="https://www.linkedin.com/in/bruna-varela-borges-1124021b3/"
            target="_blank"
          >
            <FaLinkedin />
          </Link>
        </div>
      </footer>
    </div>
  );
}
