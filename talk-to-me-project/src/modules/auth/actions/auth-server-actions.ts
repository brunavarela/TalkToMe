"use server";

import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import AuthService from "../services/auth-service";

const prisma = new PrismaClient();

export async function createAccount(formData: FormData) {
  "use server";

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const hashPassword = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashPassword,
    },
  });

  redirect("/pages/sign-in");
}

export async function login(formData: FormData) {
  "use server";

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  // se o usuário não existir
  if (!user) {
    // retornar false indicando falha no login
    return false;
  }

  const isMatch = await bcrypt.compare(password, user?.password);

  // se email e senha não forem compatíveis
  if (!isMatch) {
    console.log("Usuário ou senha inválidos");
    return false;
  }

  // Se o usuário e a senha forem válidos
  // criar aqui a sessão com JWT
  await AuthService.createSessionToken({
    sub: user.id,
    name: user.name,
    email: user.email,
  });
  redirect("/pages/dashboard");
}

