import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import AuthActions from "../actions/auth-actions";

export default function SignInForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Entrar</CardTitle>
      </CardHeader>
      <form action={AuthActions.login}>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Email</Label>
              <Input id="email" name="email" placeholder="Seu email" required />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Senha</Label>
              <Input
                id="password"
                name="password"
                placeholder="Uma senha forte"
                type="password"
                required
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="submit" variant="outline">
            Entrar
          </Button>
          <Link
            href="/pages/sign-up"
            className={buttonVariants({ variant: "link" })}
          >
            Criar conta
          </Link>
        </CardFooter>
      </form>
    </Card>
  );
}
