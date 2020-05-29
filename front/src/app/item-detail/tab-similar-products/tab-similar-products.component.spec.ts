import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSimilarProductsComponent } from './tab-similar-products.component';

describe('TabSimilarProductsComponent', () => {
  let component: TabSimilarProductsComponent;
  let fixture: ComponentFixture<TabSimilarProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabSimilarProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabSimilarProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
