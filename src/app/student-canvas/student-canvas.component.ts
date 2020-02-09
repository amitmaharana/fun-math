import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem, CdkDragRelease } from '@angular/cdk/drag-drop';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-student-canvas',
  templateUrl: './student-canvas.component.html',
  styleUrls: ['./student-canvas.component.scss']
})
export class StudentCanvasComponent implements OnInit {

  isAdvanced = true;
  isComputed;
  hasResult = false;

  canvas = [
  ];

  numbers = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0'
  ];

  basicOperations = [
    '+',
    '-',
    '×',
    '÷'
  ];

  advancedOperations = [
    '^',
    '%',
    '(',
    ')'
  ];

  relationalOperations = [
    '>',
    '<',
    '>=',
    '<=',
    '!='
  ];

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
    if (localStorage.getItem('classNum') === '1') {
      this.isAdvanced = false;
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      // Do Nothing
    } else {
      event.previousContainer.data.splice(event.previousIndex, 1);
    }
  }

  dropReplicate(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  calculate() {
    let expression = this.canvas.toString();
    for (let i = 0; i < expression.length; i++) {
      expression = expression.replace('×', '*');
      expression = expression.replace('÷', '/');
      expression = expression.replace('^', '**');
      expression = expression.replace(',', '');
    }
    try {
      this.isComputed = eval(expression);
      if (this.isComputed != null) {
        this.hasResult = true;
      } else {
        this.hasResult = false;
      }
    } catch (err) {
      this.snackBar.open('Invalid Expression!', 'Dismiss', {
        duration: 1500,
      });
      this.hasResult = false;
    }
  }

  clear() {
    this.hasResult = false;
    this.canvas = [];
  }
}
