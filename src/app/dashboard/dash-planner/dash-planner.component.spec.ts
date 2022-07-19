import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashPlannerComponent } from './dash-planner.component';

describe('DashPlannerComponent', () => {
  let component: DashPlannerComponent;
  let fixture: ComponentFixture<DashPlannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashPlannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
