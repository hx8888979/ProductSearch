import {Component, Input, OnInit} from '@angular/core';
import {Seller} from '../item-detail';

@Component({
  selector: 'app-tab-seller',
  templateUrl: './tab-seller.component.html',
  styleUrls: ['./tab-seller.component.css']
})
export class TabSellerComponent implements OnInit {
  @Input() seller: Seller;

  constructor() {
  }

  ngOnInit() {
  }

  getStar() {
    if (this.seller.feedbackScore) {
      return parseInt(this.seller.feedbackScore, 10) >= 10000 ? 'stars' : 'star_border';
    }
    return '';
  }
}
