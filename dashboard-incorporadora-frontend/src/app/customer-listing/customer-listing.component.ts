import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../model/Customer';
import { CustomersService } from '../customers.service';
import { ServiceRequest } from '../ServiceRequest';

@Component({
  selector: 'app-customer-listing',
  templateUrl: './customer-listing.component.html',
  styleUrls: ['./customer-listing.component.css']
})
export class CustomerListingComponent implements OnInit {

  customers: Customer[];
  pages: number[];
  currentPage: number;
  currentOrder: string;
  @Input() startDate: Date;
  @Input() endDate: Date;

  constructor(private service: CustomersService) {
    this.currentPage = 0;
    this.currentOrder = "ATOZ";
  }

  ngOnInit(): void {
    this.loadData(this.buildServiceRequest());
  }

  loadData(request: ServiceRequest): void {
    this.service.getAll(request).subscribe(
      page => {
        this.customers = page.content;
        this.pages = new Array(page.totalPages);
    });
  }

  buildServiceRequest(): ServiceRequest {
    return new ServiceRequest(
      this.currentPage,
      this.currentOrder,
      this.startDate,
      this.endDate);
  }

  changePage($event): void {
    this.currentPage = $event;
    this.loadData(this.buildServiceRequest());
  }

  changeOrder($event): void {
    this.currentOrder = $event;
    this.loadData(this.buildServiceRequest());
  }

  filterByDate(): void {
    this.loadData(this.buildServiceRequest());
  }

}
