import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function SignUpForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Faça seu cadastro</CardTitle>
      </CardHeader>
      <CardContent>
      <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" placeholder="Seu nome" required />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Email</Label>
              <Input id="email" placeholder="Seu email" required />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Senha</Label>
              <Input id="password" placeholder="Uma senha forte" required />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Senha</Label>
              <Input id="password-repeat" placeholder="Repita a senha" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Criar conta</Button>
        <span>Já possui conta? <Link href="/pages/sign-in">Entrar</Link></span>
      </CardFooter>
    </Card>
  );
}
