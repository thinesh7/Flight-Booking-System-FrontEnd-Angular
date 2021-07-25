import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPassengersDetailsComponent } from './get-passengers-details.component';

describe('GetPassengersDetailsComponent', () => {
  let component: GetPassengersDetailsComponent;
  let fixture: ComponentFixture<GetPassengersDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPassengersDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPassengersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
