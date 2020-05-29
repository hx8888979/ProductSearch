import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Item} from './result-list/item';
import {SearchModel} from './search-form/search-model';
import {ItemDetail} from './item-detail/item-detail';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) {
    this.initWishList();
  }

  private wishList: Item[];
  private wishListLookup: Set<string>;

  initWishList() {
    this.wishListLookup = new Set<string>();
    this.wishList = JSON.parse(window.localStorage.getItem('wishList'));
    if (this.wishList) {
      for (const item of this.wishList) {
        this.wishListLookup.add(item.itemID);
      }
    } else {
      this.wishList = new Array<Item>();
    }
  }

  deleteWishListItem(id: string) {
    if (this.wishListLookup.has(id)) {
      this.wishList.splice(this.wishList.findIndex(item => item.itemID === id), 1);
      this.wishListLookup.delete(id);
      window.localStorage.setItem('wishList', JSON.stringify(this.wishList));
    }
  }

  isInWishList(id: string): boolean {
    return this.wishListLookup.has(id);
  }

  addWishListItem(item: Item) {
    if (!this.wishListLookup.has(item.itemID)) {
      this.wishList.push(item);
      this.wishListLookup.add(item.itemID);
      window.localStorage.setItem('wishList', JSON.stringify(this.wishList));
    }
  }

  requestWishList() {
    return this.wishList;
  }

  getLocation(): Observable<any> {
    return this.http.get('http://ip-api.com/json');
  }

  getZipHint(q: string): Observable<string []> {
    return this.http.get<string []>('/zip?q=' + q);
  }

  getSearchResults(searchModel: SearchModel): Observable<Item[]> {
    let urlParams = new HttpParams();
    Object.keys(searchModel).forEach(value => {
      if (!(searchModel[value] === '' || !searchModel[value])) {
        urlParams = urlParams.set(value, searchModel[value]);
      }
    });
    return this.http.get<Item[]>('/search', {params: urlParams});
  }

  getItemDetails(id: string, title: string): Observable<ItemDetail> {
    let urlParams = new HttpParams();
    urlParams = urlParams.set('itemID', id).set('itemTitle', title);
    return this.http.get<ItemDetail>('/itemDetail', {params: urlParams});
  }
}
