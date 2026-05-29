interface InputComponentProps {
  type: string;
  placeholder: string;
}

const InputComponent = ({ type, placeholder }: InputComponentProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
    />
  );
};

export default InputComponent;
