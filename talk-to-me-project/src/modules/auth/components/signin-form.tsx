"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AuthActions from "../actions/auth-actions";
import { useState, FormEvent } from "react";

export default function SignInForm() {
  const [invalidEmail, setInvalidEmail] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const success = await AuthActions.login(formData);

    if (!success) {
      setInvalidEmail(true);
    } else {
      setInvalidEmail(false);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
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
              {invalidEmail && (
                <span className="text-red-500 text-center">
                  Usuário ou senha inválidos
                </span>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button type="submit" variant={"secondary"}>
            Entrar
          </Button>
          <div className="text-primary text-sm mt-4 w-64 text-center">
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
