import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import AuthService from "../services/auth-service";

const prisma = new PrismaClient();

async function createAccount(formData: FormData) {
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

async function login(formData: FormData) {
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
    //aqui posso usar optmistic update para atualizar a tela
    console.log("Error");
    redirect("/pages/sign-in");
  }

  const isMatch = await bcrypt.compare(password, user?.password);

  // se email e senha não forem compatíveis
  if (!isMatch) {
    console.log("Usuário ou senha inválidos");
    redirect("/pages/sign-in");
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

const AuthActions = {
  createAccount,
  login,
};

export default AuthActions;
