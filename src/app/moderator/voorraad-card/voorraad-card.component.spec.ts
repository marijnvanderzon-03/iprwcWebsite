import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoorraadCardComponent } from './voorraad-card.component';

describe('VoorraadCardComponent', () => {
  let component: VoorraadCardComponent;
  let fixture: ComponentFixture<VoorraadCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoorraadCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoorraadCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
