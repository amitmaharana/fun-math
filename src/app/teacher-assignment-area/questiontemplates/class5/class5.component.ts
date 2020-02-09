import { Component, OnInit, Input } from "@angular/core";
import { TeacherAssignmentAreaComponent } from "src/app/teacher-assignment-area/teacher-assignment-area.component";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ValidatorFn,
  NgForm
} from "@angular/forms";
import { ThrowStmt } from "@angular/compiler";
import { QuestionModel } from "../../question-model";
import { TeacherService } from "../../teacher.service";
import { HttpClient } from "@angular/common/http";
import { AssignmentService } from "src/app/assignmnet-view/assignment.service";

@Component({
  selector: "app-class5",
  templateUrl: "./class5.component.html",
  styleUrls: ["./class5.component.scss"]
})
export class Class5Component implements OnInit {
  url = "https://funmath-backend.appspot.com/user/publishAssignment";
  getAssignmentURL = "https://funmath-backend.appspot.com/user/assignment/getAssignments/";
  date = new FormControl();
  startDate = new Date();
  public selected: string;
  public selectedList: any;
  public assignmentList: any[] = [];
  public assignments: any[] = [];
  public questionList: any;
  public request: any[] = [];
  public jsonString: string = "";
  public jsonArr: any[] = [];
  questionObject: QuestionModel;
  public mulndivQL = [
    {
      ID: "c5s2q1",
      description: "Word problem",
      images: [],
      extradescription:
        "A university bookstore ordered 8 shipments of notebooks. There were 389 notebooks in each shipment. How many notebooks did the bookstore store in all?",
      answers: {
        type: "textbox",
        fields: [{ answertext: "", answerunit: "  notebooks" }]
      },
      correctAnswer: "3112",
      correctAnswers: {
        type: "textbox",
        fields: [{ actualanswer: "3112" }]
      }
    },
    {
      ID: "c5s2q2",
      description: "Complete the pattern",
      images: [{ name: "../../assets/class5/c5s2q2.jpg" }],
      extradescription: "",
      answers: {
        type: "textbox",
        fields: [
          { answertext: "Value of A", answerunit: "" },
          { answertext: "Value of B", answerunit: "" },
          { answertext: "Value of C", answerunit: "" },
          { answertext: "Value of D", answerunit: "" },
          { answertext: "Value of E", answerunit: "" }
        ]
      },
      correctAnswer: "A:3;B:3;C:2100;D:7000;E:70000",
      correctAnswers: {
        type: "textbox",
        fields: [{ actualanswer: "A:3;B:3;C:2100;D:7000;E:70000" }]
      }
    },
    {
      ID: "c5s2q3",
      description:
        "Type the missing number. Hint: Use associative property of multiplication.",
      images: [{ name: "../../assets/class5/c5s2q3.jpg" }],
      extradescription: "",
      answers: {
        type: "textbox",
        fields: [{ answertext: "Value of A", answerunit: "" }]
      },
      correctAnswer: "28",
      correctAnswers: {
        type: "textbox",
        fields: [{ actualanswer: "28" }]
      }
    },
    {
      ID: "c5s2q4",
      description: "Which property of multiplication is shown?",
      images: [{ name: "../../assets/class5/c5s2q4.jpg" }],
      extradescription: "",
      answers: {
        type: "button",
        buttons: [
          {
            id: "Commutative",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "Associative",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "Distributive",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "Zero",
            name: "",
            image: "",
            description: ""
          }
        ]
      },
      correctAnswer: "Distributive",
      correctAnswers: {
        type: "button",
        buttons: [{ actualanswer: "Distributive" }]
      }
    },
    {
      ID: "c5s2q5",
      description: "Use properties to find the product",
      images: [{ name: "../../assets/class5/c5s2q5.jpg" }],
      extradescription: "",
      answers: {
        type: "textbox",
        fields: [
          { answertext: "Value of A   ", answerunit: "" },
          { answertext: "Value of B   ", answerunit: "" },
          { answertext: "Value of C   ", answerunit: "" },
          { answertext: "Value of D   ", answerunit: "" }
        ]
      },
      correctAnswer: "A:6;B:6;C:30;D:180",
      correctAnswers: {
        type: "textbox",
        fields: [{ actualanswer: "A:6;B:6;C:30;D:180" }]
      }
    },
    {
      ID: "c5s2q6",
      description: "Word problem",
      images: [],
      extradescription:
        "Tess bought 12 flowers and divided them equally into 3 bouquets. How many flowers are in each bouquet?",
      answers: {
        type: "textbox",
        fields: [{ answertext: "", answerunit: "flowers" }]
      },
      correctAnswer: "4",
      correctAnswers: {
        type: "textbox",
        fields: [{ actualanswer: "4" }]
      }
    },
    {
      ID: "c5s2q7",
      description: "Complete the pattern",
      images: [{ name: "../../assets/class5/c5s2q7.jpg" }],
      extradescription: "",
      answers: {
        type: "textbox",
        fields: [
          { answertext: "Value of A   ", answerunit: "" },
          { answertext: "Value of B   ", answerunit: "" },
          { answertext: "Value of C   ", answerunit: "" }
        ]
      },
      correctAnswer: "A:21;B:300;C:7",
      correctAnswers: {
        type: "textbox",
        fields: [{ actualanswer: "A:21;B:300;C:7" }]
      }
    },
    {
      ID: "c5s2q8",
      description: "Solve",
      images: [],
      extradescription:
        "Which expression will give a better whole-number estimate for 4766/64 ?",
      answers: {
        type: "button",
        buttons: [
          {
            id: "4800 / 60",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "4500 / 90",
            name: "",
            image: "",
            description: ""
          }
        ]
      },
      correctAnswer: "4800 / 60",
      correctAnswers: {
        type: "button",
        buttons: [{ actualanswer: "4800 / 60" }]
      }
    },
    {
      ID: "c5s2q9",
      description: "Solve",
      images: [{ name: "../../assets/class5/c5s2q9.jpg" }],
      extradescription: "Estimate which sign makes the above statement true",
      answers: {
        type: "button",
        buttons: [
          {
            id: ">",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "<",
            name: "",
            image: "",
            description: ""
          }
        ]
      },
      correctAnswer: "<",
      correctAnswers: {
        type: "button",
        buttons: [{ actualanswer: "<" }]
      }
    },
    {
      ID: "c5s2q10",
      description: "Property of multiplication and division",
      images: [],
      extradescription: "If   10 * 9 = 90,  then  90 / A = 9",
      answers: {
        type: "textbox",
        fields: [{ answertext: "Value of A", answerunit: "" }]
      },
      correctAnswer: "10",
      correctAnswers: {
        type: "textbox",
        fields: [{ actualanswer: "10" }]
      }
    }
  ];
  public addnsubQL = [
    {
      ID: "c5s1q1",
      description: "Add the following numbers and find the unknown entities",
      images: [{ name: "../../assets/c5s1/c5s1q1.jpg" }],
      extradescription: "",
      answers: {
        type: "textbox",
        fields: [
          { answertext: "Value of a", answerunit: "" },
          { answertext: "Value of b", answerunit: "" },
          { answertext: "Value of c", answerunit: "" }
        ]
      },
      correctAnswers: {
        type: "textbox",
        fields: [{ actualanswer: "" }]
      }
    },
    {
      ID: "c5s1q2",
      description:
        "Subtract the following numbers and find the unknown entities",
      images: [{ name: "../../assets/c5s1/c5s1q2.jpg" }],
      extradescription: "",
      answers: {
        type: "textbox",
        fields: [
          { answertext: "Value of a", answerunit: "" },
          { answertext: "Value of b", answerunit: "" }
        ]
      },
      correctAnswers: {
        type: "textbox",
        fields: [{ actualanswer: "" }]
      }
    },
    {
      ID: "c5s1q3",
      description:
        "Write down two numbers from the box to complete the addition sentence",
      images: [{ name: "../../assets/c5s1/c5s1q3.jpg" }],
      extradescription: "",
      answers: {
        type: "textbox",
        fields: [
          { answertext: "The two numbers", answerunit: "and" },
          { answertext: "", answerunit: "have sum of 413." }
        ]
      },
      correctAnswers: {
        type: "textbox",
        fields: [{ actualanswer: "" }]
      }
    },
    {
      ID: "c5s1q4",
      description: "Word problem",
      images: [],
      extradescription:
        "Last year, apple producers in XYZ county produced 7074 apples. This year, those same farms produced 9898 apples. How many more apples did the farms produce this year?",
      answers: {
        type: "textbox",
        fields: [{ answertext: "", answerunit: "apples" }]
      },
      correctAnswers: {
        type: "textbox",
        fields: [{ actualanswer: "" }]
      }
    },
    {
      ID: "c5s1q5",
      description: "Word problem",
      images: [],
      extradescription:
        "A treasure hunter discovered a buried treasure with 7005 gems. 88 of the gems were diamonds, and the rest were rubies. How many rubies were there?",
      answers: {
        type: "textbox",
        fields: [{ answertext: "", answerunit: "rubies" }]
      },
      correctAnswers: {
        type: "textbox",
        fields: [{ actualanswer: "" }]
      }
    },
    {
      ID: "c5s1q6",
      description: "Word problem",
      images: [],
      extradescription:
        "Yoshi is a beekeeper. Last year, he harvested 1220 kilograms of honey. This year he bought some new hives and increased the harvest by 1885 kilograms. How many kilograms of honey did Yoshi harvest this year?",
      answers: {
        type: "textbox",
        fields: [{ answertext: "", answerunit: "kilograms" }]
      },
      correctAnswers: {
        type: "textbox",
        fields: [{ actualanswer: "" }]
      }
    }
  ];
  public exponentsQL = [
    {
      ID: "c5s3q1",
      description:
        "Which of the following is equivalent of the below expression?",
      images: [{ name: "../../assets/class5/c5s3q1.jpg" }],
      extradescription: "",
      answers: {
        type: "button",
        buttons: [
          {
            id: "A",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "B",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "C",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "D",
            name: "",
            image: "",
            description: ""
          }
        ]
      },
      correctAnswer: "C",
      correctAnswers: {
        type: "button",
        buttons: [{ actualanswer: "C" }]
      }
    },
    {
      ID: "c5s3q2",
      description: "Answer the question given below",
      images: [{ name: "../../assets/class5/c5s3q2.jpg" }],
      extradescription: "",
      answers: {
        type: "button",
        buttons: [
          {
            id: "A",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "B",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "C",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "D",
            name: "",
            image: "",
            description: ""
          }
        ]
      },
      correctAnswer: "D",
      correctAnswers: {
        type: "button",
        buttons: [{ actualanswer: "D" }]
      }
    },
    {
      ID: "c5s3q3",
      description: "Solve",
      images: [{ name: "../../assets/class5/c5s3q3.jpg" }],
      extradescription: "",
      answers: {
        type: "textbox",
        fields: [{ answertext: "Your answer", answerunit: "" }]
      },
      correctAnswer: "729",
      correctAnswers: {
        type: "textbox",
        fields: [{ actualanswer: "729" }]
      }
    },
    {
      ID: "c5s3q4",
      description: "Word problem",
      images: [{ name: "../../assets/class5/c5s3q4.jpg" }],
      extradescription: "",
      answers: {
        type: "textbox",
        fields: [{ answertext: "Value of A", answerunit: "" }]
      },
      correctAnswer: "3",
      correctAnswers: {
        type: "textbox",
        fields: [{ actualanswer: "3" }]
      }
    }
  ];

  @Input() classSelected: string;
  public showDialog: boolean;

  callThisMethod(selected): boolean {
    if (selected == "c5s1") {
      this.questionList = this.addnsubQL;
    } else if (selected == "c5s2") {
      this.questionList = this.mulndivQL;
    } else if (selected == "c5s3") {
      this.questionList = this.exponentsQL;
    } else {
      return false;
    }
    return true;
  }
  constructor(
    public dialog: MatDialog,
    private http: HttpClient,
    private assignmentService: AssignmentService
  ) {
    console.log("Addition and Subtraction");
    console.log(JSON.stringify(this.addnsubQL));
    console.log("Multiplication and Division");
    console.log(JSON.stringify(this.mulndivQL));
    console.log("Understanding Exponents");
    console.log(JSON.stringify(this.exponentsQL));
  }

  ngOnInit() {}

  createAssignment(e: NgForm) {
    this.selectedList = e.value;

    // duedate: this.date.value != null
    //   ? this.date.value.toISOString().substring(0, 10)
    //   : null;

    for (let key in this.selectedList) {
      let value = this.selectedList[key];
      if (value == true) {
        this.assignmentList.push(key);
      }
    }

    for (let i in this.questionList) {
      for (let j in this.assignmentList) {
        if (this.questionList[i].ID == this.assignmentList[j]) {
          this.jsonArr.push(this.questionList[i]);
        }
      }
    }
    console.log(this.jsonArr);
    console.log(JSON.stringify(this.jsonArr));

    this.openDialog();
    this.assignmentService
      // .getAssignments(+localStorage.getItem("classNum"))
      .getAssignments(5)
      .subscribe(assignments => {
        {
          this.assignments = assignments;
          let assignmentNumber: Number = 0;
          assignmentNumber = this.assignments.length + 1;
          console.log(assignmentNumber);
          const obj = {
            assignmentNumber: "Assignment_" + assignmentNumber,
            classNumber: "5",
            dueDate:
              e.value.date != null
                ? e.value.date.toISOString().substring(0, 10)
                : null,
            questionList: JSON.stringify(this.jsonArr),
            totalPoints: this.jsonArr.length * 10
          };
          this.http.post(this.url, obj).subscribe(res => {
            console.log("Res ", res);
          });

          e.reset();
        }
      });
    // const obj = {
    //   assignmentNumber: "Assignment_7",
    //   classNumber: "5",
    //   dueDate:
    //     e.value.date != null
    //       ? e.value.date.toISOString().substring(0, 10)
    //       : null,
    //   questionList: JSON.stringify(this.jsonArr),
    //   totalPoints: this.jsonArr.length * 10
    // };
    // this.http.post(this.url, obj).subscribe(res => {
    //   console.log("Res ", res);
    // });

    // e.reset();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmationDialog, {});
    this.showDialog = true;
  }
}

@Component({
  selector: "confirmation-dialog",
  templateUrl: "confirmation-dialog.html"
})
export class ConfirmationDialog {
  constructor(public dialogRef: MatDialogRef<ConfirmationDialog>) {}

  onOKClick(): void {
    this.dialogRef.close();
  }
}
