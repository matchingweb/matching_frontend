import type { ErrorResponse } from "@/shared/api/types";

export class ApiError extends Error {
  readonly status: number;
  readonly code: string;
  readonly fieldErrors: ErrorResponse["fieldErrors"];

  constructor(status: number, error: ErrorResponse) {
    super(error.message);
    this.name = "ApiError";
    this.status = status;
    this.code = error.code;
    this.fieldErrors = error.fieldErrors;
  }
}
