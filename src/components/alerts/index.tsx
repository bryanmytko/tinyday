interface IErrorProps {
  header: string;
  text: string;
}

const Error = ({ header, text }: IErrorProps) => (
  <div
    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded absolute top-0 left-0 w-full"
    role="alert"
  >
    <strong className="font-bold">{header}</strong>
    <span className="block sm:inline"> {text}</span>
  </div>
);

export { Error };
