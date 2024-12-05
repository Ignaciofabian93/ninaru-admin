import { ReactNode } from "react";
import Navbar from "./navbar";

export default function PageLayout({ children, showNavbar = true }: { children: ReactNode; showNavbar?: boolean }) {
  return (
    <main className="w-full h-full flex flex-col">
      {showNavbar && <Navbar />}
      <section className={`w-full ${showNavbar ? "h-[calc(100vh_-_64px)]" : "h-[100vh]"} px-4 py-8`}>
        {children}
      </section>
    </main>
  );
}
