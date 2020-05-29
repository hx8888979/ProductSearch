import {Component, Input, OnInit} from '@angular/core';
import {Shipping} from '../item-detail';

@Component({
  selector: 'app-tab-shipping',
  templateUrl: './tab-shipping.component.html',
  styleUrls: ['./tab-shipping.component.css']
})
export class TabShippingComponent implements OnInit {
  @Input() shipping: Shipping;

  constructor() { }

  ngOnInit() {
  }

  private getShipping(price: string) {
    return parseFloat(price) === 0 ? 'Free Shipping' : '$' + price;
  }
}
