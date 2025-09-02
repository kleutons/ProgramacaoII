"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkMenuProps {
  url: string;
  text: string;
}

export default function LinkMenu({ url, text }: LinkMenuProps) {
  const pathname = usePathname();
  const isActive = pathname === url;

  return (
    <li>
      <Link
        href={url}
        className={`pb-1 transition-all ${
          isActive
            ? "border-b-2 border-[#5CE1E6] text-[#5CE1E6] font-bold"
            : "hover:border-b-2 hover:border-[#5CE1E6] hover:text-[#5CE1E6]"
        }`}
      >
        {text}
      </Link>
    </li>
  );
}
