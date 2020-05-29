import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {SimilarProduct} from '../item-detail';

@Component({
  selector: 'app-tab-similar-products',
  templateUrl: './tab-similar-products.component.html',
  styleUrls: ['./tab-similar-products.component.css']
})
export class TabSimilarProductsComponent implements OnInit, OnChanges {
  @Input() similarProducts: SimilarProduct[];
  sortedProducts: SimilarProduct[];
  sortMethod = '0';
  sortOrder = '0';
  itemLimit = -1;

  constructor() {
  }

  ngOnInit() {
  }

  checkData() {
    if (!this.similarProducts || this.similarProducts.length === 0) {
      return true;
    }
    return false;
  }

  sort(change: boolean = false) {
    if (change) {
      this.sortedProducts = this.similarProducts.slice(0);
      return;
    }
    const method = parseInt(this.sortMethod, 10);
    const order = parseInt(this.sortOrder, 10);
    switch (method) {
      case 0:
        this.sortedProducts = this.similarProducts.slice(0);
        break;
      case 1:
        this.sortedProducts.sort((a, b) => (order === 0 ? 1 : -1) * a.productName.localeCompare(b.productName));
        break;
      case 2:
        this.sortedProducts.sort((a, b) => (order === 0 ? 1 : -1) * (parseInt(a.daysLeft, 10) - parseInt(b.daysLeft, 10)));
        break;
      case 3:
        this.sortedProducts.sort((a, b) => (order === 0 ? 1 : -1) * (parseFloat(a.price) - parseFloat(b.price)));
        break;
      case 4:
        this.sortedProducts.sort((a, b) => (order === 0 ? 1 : -1) * (parseFloat(a.shippingCost) - parseFloat(b.shippingCost)));
        break;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.similarProducts) {
      this.sort(true);
    }
  }
}
