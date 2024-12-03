type Button = {
  text: string;
  onClick: () => void;
  style?: string;
};

export default function Button({ text, onClick, style = "" }: Button) {
  return (
    <button
      className={`bg-black transition-all duration-300 ease-in-out text-white py-2 px-4 rounded ${style}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
