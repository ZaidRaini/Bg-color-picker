import { AxiosError } from 'axios';

export interface CustomError extends Error {
  statusCode?: number;
}

export type AppError = Error | AxiosError<CustomError>;
