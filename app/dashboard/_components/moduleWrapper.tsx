import { ReactNode } from "react";

export default function ModuleWrapper({ children }: { children: ReactNode }) {
  return (
    <section className="w-[90%] h-fit p-4 border-[1px] border-slate-500/50 mx-auto rounded-md shadow-md shadow-slate-500/40 mb-8">
      {children}
    </section>
  );
}
