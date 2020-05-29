import {Component, Input, OnInit} from '@angular/core';
import {Info} from '../item-detail';


@Component({
  selector: 'app-tab-info',
  templateUrl: './tab-info.component.html',
  styleUrls: ['./tab-info.component.css']
})
export class TabInfoComponent implements OnInit {
  @Input() info: Info;

  constructor() {
  }

  ngOnInit() {
  }

}
