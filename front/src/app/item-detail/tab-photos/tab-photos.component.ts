import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab-photos',
  templateUrl: './tab-photos.component.html',
  styleUrls: ['./tab-photos.component.css']
})
export class TabPhotosComponent implements OnInit {
  @Input() photos: string[];

  constructor() {
  }

  ngOnInit() {
  }

}
