import { QueryClient, QueryFunction } from "@tanstack/react-query";
import { env } from "./env";

export function getApiUrl(pathOrUrl: string): string {
  // If it's an absolute URL, return as-is
  try {
    const u = new URL(pathOrUrl);
    return u.toString();
  } catch {
    // not an absolute URL
  }

  // If it starts with / and API_BASE_URL is configured, prefix it
  if (pathOrUrl.startsWith("/") && env.API_BASE_URL) {
    return `${env.API_BASE_URL}${pathOrUrl}`;
  }

  // Otherwise return as-is (relative fetch)
  return pathOrUrl;
}

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  const res = await fetch(getApiUrl(url), {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });

  await throwIfResNotOk(res);
  return res;
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    const key = queryKey.join("/") as string;
    const res = await fetch(getApiUrl(key), {
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
