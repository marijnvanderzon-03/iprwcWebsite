import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrcerConfirmPopupComponent } from './orcer-confirm-popup.component';

describe('OrcerConfirmPopupComponent', () => {
  let component: OrcerConfirmPopupComponent;
  let fixture: ComponentFixture<OrcerConfirmPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrcerConfirmPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrcerConfirmPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
