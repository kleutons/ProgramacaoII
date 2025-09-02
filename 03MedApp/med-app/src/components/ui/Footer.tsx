import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-4 px-6 text-center">
      <p className="text-sm">
        Desenvolvido por{" "}
        <Link
          href="https://kleuton.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition-colors underline"
        >
          @kleuton
        </Link>
      </p>
    </footer>
  );
}
