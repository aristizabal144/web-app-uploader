import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourRegisterComponent } from './hour-register.component';

describe('HourRegisterComponent', () => {
  let component: HourRegisterComponent;
  let fixture: ComponentFixture<HourRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HourRegisterComponent]
    });
    fixture = TestBed.createComponent(HourRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
