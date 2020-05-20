import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/Customer';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-customer-listing',
  templateUrl: './customer-listing.component.html',
  styleUrls: ['./customer-listing.component.css']
})
export class CustomerListingComponent implements OnInit {

  customers: Customer[];

  constructor(private service: CustomersService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.service.getAll(0).subscribe(customers => this.customers = customers);
  }

}
