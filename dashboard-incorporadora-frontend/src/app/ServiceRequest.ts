export class ServiceRequest {
  page: number;
  order: string;
  startDate: Date;
  endDate: Date;

  constructor(page: number, order: string, startDate?: Date, endDate?: Date) {
    this.page = page;
    this.order = order;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}