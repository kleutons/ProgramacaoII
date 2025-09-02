import { ReactNode } from "react";

interface FormContainerProps {
  onSubmit: (e: React.FormEvent) => void;
  children: ReactNode;
  errorMessage?: string;
  className?: string;
}

export default function FormData({
  onSubmit,
  children,
  errorMessage,
  className = "",
}: FormContainerProps) {
  return (
    <form onSubmit={onSubmit} className={`w-full text-blue-200 p-6 space-y-6 ${className}`}>
      {children}
      {errorMessage && <div className="text-rose-300 text-sm">⭕️ {errorMessage}</div>}
    </form>
  );
}
