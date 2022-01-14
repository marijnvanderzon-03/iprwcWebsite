import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToegevoegdPopupComponent } from './toegevoegd-popup.component';

describe('ToegevoegdPopupComponent', () => {
  let component: ToegevoegdPopupComponent;
  let fixture: ComponentFixture<ToegevoegdPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToegevoegdPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToegevoegdPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
