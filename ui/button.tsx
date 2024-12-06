type Button = {
  text: string;
  onClick: () => void;
  style?: string;
  type?: "primary" | "secondary" | "warning";
};

export default function Button({ text, onClick, style = "", type = "primary" }: Button) {
  const buttonType = {
    primary: "bg-black border-[1px] border-transparent text-white",
    secondary: "bg-white border-[1px] border-black text-slate-900",
    warning: "bg-red-700 border-[1px] border-transparent text-white",
  };
  return (
    <button
      className={`${buttonType[type]} min-w-[120px] transition-all duration-300 ease-in-out py-2 px-4 rounded ${style}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
