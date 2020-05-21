import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Button } from './Button';

@Component({
  selector: 'app-order-buttons',
  templateUrl: './order-buttons.component.html',
  styleUrls: ['./order-buttons.component.css']
})
export class OrderButtonsComponent implements OnInit {

  isChecked: boolean;
  buttons: Button[] = [
    new Button("- Budget", "LOWERBUDGET"),
    new Button("+ Budget", "HIGHERBUDGET"),
    new Button("A-Z", "ATOZ"),
    new Button("Z-A", "ZTOA")
  ];
  
  @Output()
  changeOrderEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changeOrder($selected) {
    this.changeOrderEvent.emit($selected);
  }

}
