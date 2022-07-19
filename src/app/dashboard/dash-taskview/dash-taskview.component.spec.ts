import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashTaskviewComponent } from './dash-taskview.component';

describe('DashTaskviewComponent', () => {
  let component: DashTaskviewComponent;
  let fixture: ComponentFixture<DashTaskviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashTaskviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashTaskviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
