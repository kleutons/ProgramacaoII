import { API_URL } from "@/src/config";

type Method = "GET" | "POST" | "PUT" | "DELETE";

interface RequestOptions {
  method?: Method;
  endpoint: string;
  body?: any;
  headers?: HeadersInit;
  token?: string;
}

export async function apiRequest<T>({
  method = "GET",
  endpoint,
  body,
  headers = {},
  token,
}: RequestOptions): Promise<T> {
  const config: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  if (body) {
    config.body = JSON.stringify(body);
  }

  const response = await fetch(`${API_URL}${endpoint}`, config);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Erro na requisição");
  }

  return data;
}
