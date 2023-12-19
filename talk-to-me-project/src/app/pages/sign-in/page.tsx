import SignInForm from "@/modules/auth/components/signin-form";
import primaryLogo from "../../assets/primary-logo.png";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-foreground">
      <nav className="w-full justify-center p-4 absolute flex bg-background z-10">
        <Link href="/">
          <img
            src={primaryLogo.src}
            className="w-32 lg:w-44"
            alt="Primary Logo"
          />
        </Link>
      </nav>
      <main className="flex-grow flex flex-col justify-center lg:flex-row">
        <div className="flex flex-col text-center space-y-6 text-primary mb-12">
          <span>Encontre. Converse. Confie.</span>
          <h1 className="font-bold text-xl">Entrar</h1>
        </div>
        <SignInForm></SignInForm>
      </main>
    </div>
  );
}
