import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceduresSectionComponent } from './procedures-section.component';

describe('ProceduresSectionComponent', () => {
  let component: ProceduresSectionComponent;
  let fixture: ComponentFixture<ProceduresSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProceduresSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProceduresSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
