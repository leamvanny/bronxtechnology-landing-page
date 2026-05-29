interface ButtonComponentProps {
  children: string;
  onClick: () => void;
}

const ButtonComponent = ({ children, onClick }: ButtonComponentProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-primary text-sm text-white py-2 px-4 rounded-lg hover:bg-secondary transition-colors active:scale-95"
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
