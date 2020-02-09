import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmnetViewComponent } from './assignmnet-view.component';

describe('AssignmnetViewComponent', () => {
  let component: AssignmnetViewComponent;
  let fixture: ComponentFixture<AssignmnetViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AssignmnetViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmnetViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
