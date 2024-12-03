import { ReactNode } from "react";
import Form, { FormProps } from "next/form";

export default function CustomForm({ action, children, ...rest }: FormProps & { children: ReactNode }) {
  return (
    <div className="w-full max-w-[800px] h-full">
      <Form action={action} {...rest} className="w-full flex flex-col items-center justify-center">
        {children}
      </Form>
    </div>
  );
}
