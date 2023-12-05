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


export default function SignInForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Entrar</CardTitle>
      </CardHeader>
      <CardContent>
      <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Email</Label>
              <Input id="email" placeholder="Seu email" required />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Senha</Label>
              <Input id="password" placeholder="Uma senha forte" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Entrar</Button>
        <span>Ainda não possui conta?<Link href="/pages/sign-up">Criar conta</Link></span>
      </CardFooter>
    </Card>
  );
}
