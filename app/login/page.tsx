"use client";

import useLogin from "@/hooks/useLogin";
import Button from "@/ui/button";
import CustomForm from "@/ui/form";
import Input from "@/ui/input";
import PageLayout from "@/ui/layout";
import Image from "next/image";

export default function LoginPage() {
  const { form, handleForm, handleLogin } = useLogin();

  return (
    <PageLayout showNavbar={false}>
      <div className="w-full min-h-full flex flex-col items-center justify-center">
        <div className="w-[400px] h-auto invert bg-transparent">
          <Image src={"/logo.png"} alt="logo" width={400} height={400} />
        </div>
        <CustomForm action={"/dashboard"}>
          <Input name="username" type="text" placeholder="Usuario" value={form.username} onChange={handleForm} />
          <Input name="password" type="password" placeholder="Contraseña" value={form.password} onChange={handleForm} />
          <Button text="Iniciar sesión" onClick={handleLogin} style="mt-4" />
        </CustomForm>
      </div>
    </PageLayout>
  );
}
