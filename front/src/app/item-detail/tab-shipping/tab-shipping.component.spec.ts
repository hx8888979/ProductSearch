import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabShippingComponent } from './tab-shipping.component';

describe('TabShippingComponent', () => {
  let component: TabShippingComponent;
  let fixture: ComponentFixture<TabShippingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabShippingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
