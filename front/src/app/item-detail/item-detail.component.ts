import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ItemDetail} from './item-detail';
import {Item} from '../result-list/item';
import {RequestService} from '../request.service';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('300ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({transform: 'translateX(100%)'}))
      ])
    ])
  ],
})
export class ItemDetailComponent implements OnInit {
  @Output() back = new EventEmitter();
  @Input() show: boolean;
  private currentItem: Item;
  private itemDetail: ItemDetail;
  private detailField = ['Product', 'Photos', 'Shipping', 'Seller', 'Similar Products'];
  private activeTabIndex = 0;
  private onProgress = false;

  constructor(private requestService: RequestService) {
  }

  ngOnInit() {
  }

  selectedItem(item: Item) {
    if (this.currentItem !== item) {
      this.currentItem = item;
      this.updateData();
    }
  }

  updateData() {
    this.onProgress = true;
    this.itemDetail = null;
    this.requestService.getItemDetails(this.currentItem.itemID, this.currentItem.title).subscribe(item => {
      this.itemDetail = item;
      this.itemDetail.shipping = this.currentItem.shippingDetail;
      this.onProgress = false;
      console.log(this.itemDetail);
    });
  }

  goBack() {
    this.activeTabIndex = 0;
    this.back.emit();
  }

  getShareLink() {
    return 'https://www.facebook.com/dialog/share?app_id=420004688576679&display=popup&redirect_uri=http%3A%2F%2Flocalhost&quote=' +
      'Buy ' + this.currentItem.title + ' at $' + this.currentItem.price + ' from link below.&href=' + this.itemDetail.info.url;
  }

}
