import { ReactNode } from "react";

interface FormContainerProps {
  onSubmit: (e: React.FormEvent) => void;
  children: ReactNode;
  title?: string;
  errorMessage?: string;
  className?: string;
}

export default function FormLogin({
  onSubmit,
  children,
  title,
  errorMessage,
  className = "",
}: FormContainerProps) {
  return (
    <form
      onSubmit={onSubmit}
      className={`w-full max-w-md bg-[#0C1115] text-blue-200 shadow-black shadow-2xl rounded-lg p-6 space-y-6 ${className}`}
    >
      {title && <h2 className="text-3xl font-bold text-center text-blue-100">{title}</h2>}

      {children}

      {errorMessage && <div className="text-rose-300 text-sm">⭕️ {errorMessage}</div>}
    </form>
  );
}
