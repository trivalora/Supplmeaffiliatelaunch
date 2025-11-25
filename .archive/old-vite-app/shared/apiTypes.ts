// Shared API Type Definitions
export interface ApiMeta {
  generatedAt: string;
  ttlSeconds?: number;
}

export interface ApiSuccess<T> {
  ok: true;
  data: T;
  meta?: ApiMeta;
}

export interface ApiError {
  ok: false;
  error: {
    message: string;
    code?: string;
  };
  meta?: ApiMeta;
}

export type ApiResponse<T> = ApiSuccess<T> | ApiError;

export function makeSuccess<T>(data: T, meta?: ApiMeta): ApiSuccess<T> {
  return { ok: true, data, meta }; }
export function makeError(message: string, code?: string, meta?: ApiMeta): ApiError {
  return { ok: false, error: { message, code }, meta }; }
