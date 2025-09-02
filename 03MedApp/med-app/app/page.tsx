"use client";
import { useEffect } from "react";
import useAuth from "@/src/hooks/useAuth";

export default function AppIndex() {
  const { initAuth } = useAuth();

  useEffect(() => {
    initAuth();
  }, []);

  return <div>Redirecionando...</div>;
}
