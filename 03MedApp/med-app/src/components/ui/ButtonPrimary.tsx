interface ButtonPrimaryProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

export default function ButtonPrimary({
  label,
  onClick,
  type = "button",
  disabled = false,
  loading = false,
  className = "",
}: ButtonPrimaryProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={`w-full px-4 py-2 rounded-md font-semibold transition duration-200 flex items-center justify-center gap-2
        ${
          isDisabled
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-[#5CE1E6] hover:bg-[#88fbff] text-black cursor-pointer"
        }
        ${className}`}
    >
      {loading && (
        <svg
          className="mr-3 -ml-1 size-5 animate-spin text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {loading ? "Carregando..." : label}
    </button>
  );
}
