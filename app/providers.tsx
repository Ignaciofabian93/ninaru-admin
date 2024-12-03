import { ReactNode } from "react";
import { AuthProvider } from "@/context/auth";

export default function Providers({ children }: { children: ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
