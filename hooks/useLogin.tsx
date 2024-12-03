import { useAuth } from "@/context/auth";
import { useState } from "react";

type Form = {
  username: string;
  password: string;
};

export default function useLogin() {
  const { login } = useAuth();
  const [form, setForm] = useState<Form>({
    username: "",
    password: "",
  });

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleLogin = () => login(form.username, form.password);

  return { form, handleForm, handleLogin };
}
