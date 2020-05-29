import {Component, OnInit, ViewChild} from '@angular/core';
import {RequestService} from '../request.service';
import {SearchModel} from '../search-form/search-model';
import {Item} from './item';
import {animate, style, transition, trigger} from '@angular/animations';
import {ItemDetailComponent} from '../item-detail/item-detail.component';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css'],
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
export class ResultListComponent implements OnInit {
  @ViewChild(ItemDetailComponent)
  itemDetailComponent: ItemDetailComponent;
  private showDetail = false;
  private isWishList = false;
  private items: Item[];
  private historySearchResult: Item[];
  private currentPage = 0;
  private selectedItem: Item = null;
  private onProgress = false;
  private warning: string = null;
  private lastSubscription: Subscription = null;

  constructor(private requestService: RequestService) {
  }

  ngOnInit(): void {
  }

  private changeList(isWishList: boolean) {
    if (isWishList !== this.isWishList) {
      this.isWishList = isWishList;
      this.selectedItem = null;
      if (this.isWishList) {
        if (this.items) {
          this.historySearchResult = this.items;
        }
        this.attachWishListData();
      } else if (this.historySearchResult) {
        this.items = this.historySearchResult;
        this.historySearchResult = null;
      } else {
        this.items = null;
      }
      this.warning = null;
      this.checkData();
    }
  }

  private cutTitle(title: string) {
    if (title.length > 35) {
      const temp = title.split(' ');
      let len = 36;
      title = '';
      for (const word of temp) {
        len -= 1 + word.length;
        if (len >= 0) {
          title += word + ' ';
        } else {
          break;
        }
      }
      title = title.trim();
      title += '...';
    }
    return title;
  }

  private attachWishListData() {
    this.items = this.requestService.requestWishList();
    this.checkData();
  }

  private checkData() {
    if (this.items && this.items.length === 0) {
      this.warning = 'No Records.';
    }
  }

  fetchSearchResult(searchData: SearchModel) {
    this.reset();
    this.onProgress = true;
    this.lastSubscription = this.requestService.getSearchResults(searchData).subscribe(items => {
      this.reset();
      this.items = items;
      this.onProgress = false;
      this.checkData();
      console.log(this.items);
    }, err => {
      this.reset();
      this.items = null;
      this.onProgress = false;
      this.warning = err.message;
    });
  }

  reset() {
    this.showDetail = false;
    this.warning = null;
    this.currentPage = 0;
    this.selectedItem = null;
    this.isWishList = false;
    this.items = this.historySearchResult = null;
    if (this.onProgress) {
      this.lastSubscription.unsubscribe();
      this.onProgress = false;
      this.lastSubscription = null;
    }
  }

  private getTotalShopping() {
    let amount = 0;
    for (const item of this.items) {
      amount += parseFloat(item.price);
    }
    return amount.toFixed(2);
  }

  private getSlicePoint(isStart: boolean): number {
    if (isStart) {
      return this.isWishList ? 0 : this.currentPage * 10;
    } else {
      return this.isWishList ? this.items.length : (this.currentPage + 1) * 10;
    }
  }

  private getPageNum() {
    return this.items ? Array(Math.ceil(this.items.length / 10)) : [];
  }

  private getDetail(id?: number) {
    if (id != null && id < this.items.length) {
      this.selectedItem = this.items[id];
    }
    this.showDetail = true;
    this.itemDetailComponent.selectedItem(this.selectedItem);
  }

  private getShipping(price: string) {
    if (price !== 'N/A') {
      return parseFloat(price) === 0 ? 'Free Shipping' : '$' + price;
    }
    return price;
  }
}

