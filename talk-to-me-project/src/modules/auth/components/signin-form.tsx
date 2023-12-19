import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import AuthActions from "../actions/auth-actions";

export default function SignInForm() {
  return (
    <Card>
      <form action={AuthActions.login}>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Input id="email" name="email" placeholder="Seu email" required />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Input
                id="password"
                name="password"
                placeholder="Sua senha"
                type="password"
                required
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button type="submit">Entrar</Button>
          <div className="text-primary text-sm mt-4">
            <span>
              Ainda não possui conta?
              <Link
                href="/pages/sign-up"
                className="ml-2  border-b border-primary"
              >
                Criar conta
              </Link>
            </span>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
}
