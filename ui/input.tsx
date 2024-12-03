type Input = {
  placeholder: string;
  type: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
};

export default function Input({ placeholder, type, value, onChange, name }: Input) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      className="border-[0.8px] border-slate-300/70 shadow-sm shadow-slate-500/40 h-[48px] rounded-md min-w-[120px] w-full max-w-[350px] px-4 my-2 focus:outline-none"
    />
  );
}
