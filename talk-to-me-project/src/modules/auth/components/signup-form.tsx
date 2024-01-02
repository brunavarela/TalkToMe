import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import AuthActions from "../actions/auth-actions";

export default function SignUpForm() {
  return (
    <Card>
      <form action={AuthActions.createAccount}>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Input id="name" name="name" placeholder="Seu nome" required />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Input id="email" name="email" placeholder="Seu email" required />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Uma senha forte"
                required
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button type="submit">Criar conta</Button>
          <div className="text-primary text-sm mt-4 w-64 text-center">
            <span>
              Já possui conta?
              <Link
                href="/pages/sign-in"
                className="ml-2 border-b border-primary"
              >
                Entrar
              </Link>
            </span>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
}
