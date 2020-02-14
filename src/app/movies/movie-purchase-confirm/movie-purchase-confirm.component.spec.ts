import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePurchaseConfirmComponent } from './movie-purchase-confirm.component';

describe('MoviePurchaseConfirmComponent', () => {
  let component: MoviePurchaseConfirmComponent;
  let fixture: ComponentFixture<MoviePurchaseConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviePurchaseConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePurchaseConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
