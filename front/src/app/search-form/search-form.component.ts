import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {SearchModel} from './search-model';
import {RequestService} from '../request.service';
import {debounceTime, delay, distinctUntilChanged, flatMap, map} from 'rxjs/operators';
import {of, Subject} from 'rxjs';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  @ViewChild('locationInput') locationInput;
  @Output() search = new EventEmitter<SearchModel>();
  @Output() reset = new EventEmitter();

  inputModel = new SearchModel();
  fromZip = false;
  hereZip: string;
  zips: string[];
  keyUp = new Subject<Event>();

  constructor(private requestService: RequestService) {
    this.keyUp.pipe(
      map(event => (event.target as HTMLInputElement).value),
      debounceTime(300),
      distinctUntilChanged(),
      flatMap(search => of(search).pipe(delay(150)))
    ).subscribe(value => {
      requestService.getZipHint(value).subscribe(zips => this.zips = zips);
    });
  }

  onReset(form) {
    form.reset(new SearchModel())
    this.fromZip = false;
    this.zips = null;
    this.reset.emit();
  }

  ngOnInit() {
    this.requestService.getLocation().subscribe(item => {
      this.hereZip = item.zip;
      console.log('fetched zip ' + item.zip);
    }, (err) => {
      alert('Some Error occurred When locate your location.\npage will be refreshed soon.');
      location.reload();
    });
  }

  submit() {
    const submitModel = Object.assign({}, this.inputModel);
    if (!this.fromZip) {
      submitModel.location = this.hereZip;
    }
    if (submitModel.category === '-1') {
      delete (submitModel.category);
    }
    this.search.emit(submitModel);
  }
}
