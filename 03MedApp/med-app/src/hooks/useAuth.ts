import { useState } from "react";
import { useRouter } from "next/navigation";
import { apiRequest } from "@/src/utils/api";
import Cookies from "js-cookie";

const TOKEN_KEY = "auth_token";

export default function useAuth() {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSetToken = (token?: string, isNew?: boolean) => {
    if (token) {
      if (isNew) Cookies.set(TOKEN_KEY, token, { expires: 1 / 24 });
      setToken(token);
      setIsAuthenticated(true);
    } else {
      Cookies.remove(TOKEN_KEY);
      setToken(null);
      setIsAuthenticated(false);
    }
  };

  const initAuth = () => {
    const storedToken = Cookies.get(TOKEN_KEY);

    if (storedToken) {
      handleSetToken(storedToken);
      router.push("/app/home");
    } else {
      handleSetToken();
      router.push("/login");
    }
  };

  // Login states
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!username.trim() || !password.trim()) {
      setError("Preencha todos os campos corretamente.");
      return;
    }

    setLoading(true);
    try {
      const result = await apiRequest<{ token?: string }>({
        method: "POST",
        endpoint: "/login",
        body: { login: username, password },
      });

      if (result.token) {
        handleSetToken(result.token, true);
        router.push("/app/home");
      }
    } catch (err: any) {
      setError(err.message || "Credenciais inválidas.");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    handleSetToken();
    router.push("/login");
  };

  return {
    token,
    isAuthenticated,
    initAuth,
    login: {
      username,
      setUsername,
      password,
      setPassword,
      loading,
      error,
      handleSubmit,
    },
    logout,
  };
}
