export interface BackendResponseDto<T> {
  statusCode: number;
  data: T;
}