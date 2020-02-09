import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCanvasComponent } from './student-canvas.component';

describe('StudentCanvasComponent', () => {
  let component: StudentCanvasComponent;
  let fixture: ComponentFixture<StudentCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StudentCanvasComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
