import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFifthGradeComponent } from './student-fifth-grade.component';

describe('StudentFifthGradeComponent', () => {
  let component: StudentFifthGradeComponent;
  let fixture: ComponentFixture<StudentFifthGradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentFifthGradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFifthGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
