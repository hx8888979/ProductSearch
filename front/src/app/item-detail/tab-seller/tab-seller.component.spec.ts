import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSellerComponent } from './tab-seller.component';

describe('TabSellerComponent', () => {
  let component: TabSellerComponent;
  let fixture: ComponentFixture<TabSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
