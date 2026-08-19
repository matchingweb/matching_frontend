export type ApiResponse<T> = ApiSuccess<T> | ApiFailure;

export type ApiSuccess<T> = {
  success: true;
  data: T;
  error?: never;
};

export type ApiFailure = {
  success: false;
  data?: never;
  error: ErrorResponse;
};

export type ErrorResponse = {
  code: string;
  message: string;
  fieldErrors?: FieldErrorDetail[];
};

export type FieldErrorDetail = {
  field: string;
  message: string;
};

export type ApiQueryValue = string | number | boolean | null | undefined;

export type ApiQuery = Record<string, ApiQueryValue>;
