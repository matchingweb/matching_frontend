import { env } from "@/shared/config/env";
import { ApiError } from "@/shared/api/error";
import type { ApiQuery, ApiResponse, ErrorResponse } from "@/shared/api/types";

type ApiClientOptions = Omit<RequestInit, "body"> & {
  body?: unknown;
  query?: ApiQuery;
  accessToken?: string;
};

const defaultError: ErrorResponse = {
  code: "CLIENT_UNKNOWN",
  message: "요청 처리 중 오류가 발생했습니다.",
};

function buildUrl(path: string, query?: ApiQuery) {
  const url = new URL(path, env.apiBaseUrl);

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        url.searchParams.set(key, String(value));
      }
    });
  }

  return url.toString();
}

function buildHeaders(headersInit: HeadersInit | undefined, body: unknown, accessToken?: string) {
  const headers = new Headers(headersInit);

  if (body !== undefined && !(body instanceof FormData)) {
    headers.set("Content-Type", "application/json");
  }

  if (accessToken) {
    headers.set("Authorization", `Bearer ${accessToken}`);
  }

  return headers;
}

async function parseResponse<T>(response: Response): Promise<ApiResponse<T>> {
  const text = await response.text();

  if (!text) {
    return { success: true, data: undefined as T };
  }

  return JSON.parse(text) as ApiResponse<T>;
}

export async function apiClient<T>(path: string, options: ApiClientOptions = {}) {
  const { body, query, accessToken, ...fetchOptions } = options;
  const response = await fetch(buildUrl(path, query), {
    ...fetchOptions,
    headers: buildHeaders(options.headers, body, accessToken),
    body: body === undefined || body instanceof FormData ? body : JSON.stringify(body),
  });

  const payload = await parseResponse<T>(response);

  if (!response.ok || !payload.success) {
    throw new ApiError(response.status, payload.error ?? defaultError);
  }

  return payload.data;
}
