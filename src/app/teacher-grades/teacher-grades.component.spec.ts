import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherGradesComponent } from './teacher-grades.component';

describe('TeacherGradesComponent', () => {
  let component: TeacherGradesComponent;
  let fixture: ComponentFixture<TeacherGradesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherGradesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
