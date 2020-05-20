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

  customer: Customer;

  constructor() { 
    this.customer = new Customer(
      "ABC",
      "1200",
      [new Picture("https://i.picsum.photos/id/146/200/300.jpg"), new Picture("https://i.picsum.photos/id/146/200/300.jpg")] ,
      12,
      new Name("John", "Doe"),
      "Japan CO",
      "email@provider.com",
      "111-222",
      "Bech St",
      "I'm cool",
      "10/11/2019",
      "10.5",
      "11.2",
      [new Contact(1, "Mary", "10/12/2020"), new Contact(2, "Joe", "20/10/2020")],
      "Phone"
    );
  }

  ngOnInit(): void {
  }

}
