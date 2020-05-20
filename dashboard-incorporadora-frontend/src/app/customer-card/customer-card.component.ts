import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../model/Customer';
import { Name } from '../model/Name';
import { Picture } from '../model/Picture';
import { Contact } from '../model/Contact';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css']
})
export class CustomerCardComponent implements OnInit {

  @Input()
  customer: Customer;

  constructor() {
  }

  ngOnInit(): void {
  }

}
