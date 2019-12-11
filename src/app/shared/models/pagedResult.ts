export interface PagedResults<T> {
  count: number;
  pageSize: number;
  pageIndex: number;
  data: T[];
}
