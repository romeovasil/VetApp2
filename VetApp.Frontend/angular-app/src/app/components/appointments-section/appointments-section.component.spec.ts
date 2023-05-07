import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsSectionComponent } from './appointments-section.component';

describe('AppointmentsSectionComponent', () => {
  let component: AppointmentsSectionComponent;
  let fixture: ComponentFixture<AppointmentsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
