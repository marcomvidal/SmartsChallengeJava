import { Customer } from './Customer';

export class Page {
  totalPages: number;
  totalElements: number;
  numberOfElements: number;
  first: boolean;
  last: boolean;
  size: number;
  empty: boolean;
  content: Customer[];
}