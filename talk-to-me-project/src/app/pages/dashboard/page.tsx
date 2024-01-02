import UsersList from "@/modules/users/components/users-list";
import Link from "next/link";
import { GrHostMaintenance } from "react-icons/gr";

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-foreground">
      <main className="flex-grow flex flex-col justify-center items-center md:mt-20">
        <div className="flex flex-col text-center items-center space-y-6 text-primary mb-12">
          <div className="text-6xl">
            <GrHostMaintenance />
          </div>
          <div className="text-xl">
            <h1>Olá! A página está em construção.</h1>
            <h2>Volte em breve!</h2>
          </div>
          <div className="border-b border-primary">
            <Link href="/api/logout">Sair</Link>
          </div>
        </div>
      </main>
    </div>
  );
}

// /* <UsersList/>
