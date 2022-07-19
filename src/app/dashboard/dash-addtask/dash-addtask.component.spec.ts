import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashAddtaskComponent } from './dash-addtask.component';

describe('DashAddtaskComponent', () => {
  let component: DashAddtaskComponent;
  let fixture: ComponentFixture<DashAddtaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashAddtaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashAddtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
