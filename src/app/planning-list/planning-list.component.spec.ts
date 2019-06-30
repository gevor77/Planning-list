import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningListComponent } from './planning-list.component';

describe('PlanningListComponent', () => {
  let component: PlanningListComponent;
  let fixture: ComponentFixture<PlanningListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanningListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
