import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-student-first-grade",
  templateUrl: "./student-first-grade.component.html",
  styleUrls: ["./student-first-grade.component.scss"]
})
export class StudentFirstGradeComponent implements OnInit {
  public i: number = 0;
  public question: any;
  public incorrectLabel: boolean = false;
  public correctLabel: boolean = false;
  public countingQuestions = [
    {
      ID: "1",
      description: "Counting Problems",
      extradescription: "Count the total number of doughnuts you can see",
      images: [
        {
          name: "class1/doughnut.jpg"
        },
        {
          name: "class1/doughnut.jpg"
        },
        {
          name: "class1/doughnut.jpg"
        },
        {
          name: "class1/doughnut.jpg"
        },
        {
          name: "class1/doughnut.jpg"
        },
        {
          name: "class1/doughnut.jpg"
        }
      ],
      answers: {
        type: "button",
        buttons: [
          {
            id: "1",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "2",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "3",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "4",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "5",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "6",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "7",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "8",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "9",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "10",
            name: "",
            image: "",
            description: ""
          }
        ]
      },
      correctAnswer: "6",
      correctAnswers: {
        type: "button",
        buttons: [
          {
            id: "6",
            name: "",
            image: "",
            description: ""
          }
        ]
      }
    },
    {
      ID: "2",
      description: "Counting Problems",
      extradescription: "Select the box that displays 4 alarm clocks",
      images: [
        {
          name: "class1/c1s1q1.jpg"
        }
      ],
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
          }
        ]
      },
      correctAnswer: "B",
      correctAnswers: {
        type: "button",
        buttons: [
          {
            id: "B",
            name: "",
            image: "",
            description: ""
          }
        ]
      }
    },
    {
      ID: "3",
      description: "Counting Problems",
      extradescription:
        "A full frame has 10 hearts. How many more hearts do you need to make 10?",
      images: [
        {
          name: "class1/c1s1q2.jpg"
        }
      ],
      answers: {
        type: "button",
        buttons: [
          {
            id: "1",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "2",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "3",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "4",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "5",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "6",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "7",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "8",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "9",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "10",
            name: "",
            image: "",
            description: ""
          }
        ]
      },
      correctAnswer: "6",
      correctAnswers: {
        type: "button",
        buttons: [
          {
            id: "6",
            name: "",
            image: "",
            description: ""
          }
        ]
      }
    },
    {
      ID: "4",
      description: "Counting Problems",
      extradescription:
        "Count the total number of blocks. Then fill in the missing numbers.",
      images: [
        {
          name: "class1/c1s1q3.jpg"
        }
      ],
      answers: {
        type: "textbox",
        fields: [
          { answertext: "", answerunit: "tens + " },
          { answertext: "", answerunit: "ones = 14 " }
        ]
      },
      correctAnswer: "4" //1:4
    },
    {
      ID: "5",
      description: "Counting Problems",
      extradescription: "Is the number of flowers even or odd?",
      images: [
        {
          name: "class1/c1s1q4.jpg"
        }
      ],
      answers: {
        type: "button",
        buttons: [
          {
            id: "Even",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "Odd",
            name: "",
            image: "",
            description: ""
          }
        ]
      },
      correctAnswer: "Even"
    },
    {
      ID: "6",
      description: "Counting Problems",
      extradescription: "Count the paws by 2s?",
      images: [
        {
          name: "class1/c1s1q6.jpg"
        }
      ],
      answers: {
        type: "textbox",
        fields: [
          { answertext: "How many paws are there in all?   ", answerunit: "" }
        ]
      },
      correctAnswer: "8"
    },
    {
      ID: "7",
      description: "Counting Problems",
      extradescription: "How do you write this number using words?  23 ",
      images: [],
      answers: {
        type: "button",
        buttons: [
          {
            id: "Twenty Three",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "Nineteen",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "Twenty",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "Two Three",
            name: "",
            image: "",
            description: ""
          }
        ]
      },
      correctAnswer: "Twenty Three"
    },
    {
      ID: "8",
      description: "Counting Problems",
      extradescription: "Count the total number number of balls",
      images: [
        {
          name: "class1/ball2.jpg"
        },
        {
          name: "class1/ball2.jpg"
        },
        {
          name: "class1/ball2.jpg"
        },
        {
          name: "class1/ball2.jpg"
        }
      ],
      answers: {
        type: "button",
        buttons: [
          {
            id: "5",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "8",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "4",
            name: "",
            image: "",
            description: ""
          }
        ]
      },
      correctAnswer: "4"
    }
  ];
  public additionQuestions = [
    {
      ID: "1",
      description: "Understanding Addition",
      extradescription:
        "There is 1 orange cube and 5 blue cubes. Add to find how many cubes there are in all.",
      images: [
        {
          name: "class1/c1s2q1.jpg"
        }
      ],
      answers: {
        type: "textbox",
        fields: [{ answertext: "Your answer: ", answerunit: "" }]
      },
      correctAnswer: "6"
    },
    {
      ID: "2",
      description: "Understanding Addition",
      extradescription: "ADD",
      images: [
        {
          name: "class1/c1s2q2.jpg"
        }
      ],
      answers: {
        type: "textbox",
        fields: [{ answertext: "Your answer: ", answerunit: "" }]
      },
      correctAnswer: "4"
    },
    {
      ID: "3",
      description: "Understanding Addition",
      extradescription: "Which diagram represents the expression  2 + 5 = 7 ?",
      images: [
        {
          name: "class1/c1s2q3.jpg"
        }
      ],
      answers: {
        type: "button",
        buttons: [
          {
            id: "First",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "Second",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "Both",
            name: "",
            image: "",
            description: ""
          }
        ]
      },
      correctAnswer: "First"
    },
    {
      ID: "4",
      description: "Understanding Addition",
      extradescription: "Which addition sentence does the picture show?",
      images: [
        {
          name: "class1/c1s2q4.jpg"
        }
      ],
      answers: {
        type: "button",
        buttons: [
          {
            id: "2 + 3 = 5",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "3 + 3 = 6",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "3 + 4 = 7",
            name: "",
            image: "",
            description: ""
          }
        ]
      },
      correctAnswer: "3 + 4 = 7"
    },
    {
      ID: "5",
      description: "Understanding Addition",
      extradescription: "3 and 2 make 5.",
      images: [],
      answers: {
        type: "textbox",
        fields: [
          {
            answertext: "Write this as an addition sentence (using + and =)",
            answerunit: ""
          }
        ]
      },
      correctAnswer: "(3+2)=5"
    }
  ];
  public subtractionQuestions = [
    {
      ID: "1",
      description: "Understanding Subtraction",
      extradescription:
        "Here are 7 cubes in all. Take away 3 green cubes. Write down how many cubes remain.",
      images: [
        {
          name: "class1/c1s3q1.jpg"
        }
      ],
      answers: {
        type: "textbox",
        fields: [{ answertext: "Subtract:   7 - 3 = ", answerunit: "" }]
      },
      correctAnswer: "4"
    },
    {
      ID: "2",
      description: "Understanding Subtraction",
      extradescription: "SUBTRACT",
      images: [
        {
          name: "class1/c1s3q2.jpg"
        }
      ],
      answers: {
        type: "textbox",
        fields: [{ answertext: " 7 - 3 = ", answerunit: "" }]
      },
      correctAnswer: "4"
    },
    {
      ID: "3",
      description: "Understanding Subtraction",
      extradescription: "Which picture shows 4 - 3 = 1 ?",
      images: [
        {
          name: "class1/c1s3q3.jpg"
        }
      ],
      answers: {
        type: "button",
        buttons: [
          {
            id: "First",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "Second",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "Third",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "Fourth",
            name: "",
            image: "",
            description: ""
          }
        ]
      },
      correctAnswer: "Second"
    },
    {
      ID: "4",
      description: "Understanding Subtraction",
      extradescription:
        "Write a subtraction sentence based on the picture (For ex: 3-1=2)",
      images: [
        {
          name: "class1/c1s3q4.jpg"
        }
      ],
      answers: {
        type: "textbox",
        fields: [
          {
            answertext: "",
            answerunit: ""
          }
        ]
      },
      correctAnswer: "(9-4)=5"
    },
    {
      ID: "5",
      description: "Understanding Subtraction",
      extradescription: "6 take away 4 is 2",
      images: [],
      answers: {
        type: "textbox",
        fields: [
          {
            answertext: "Write this as a subtraction sentence (using - and =)",
            answerunit: ""
          }
        ]
      },
      correctAnswer: "(6-4)=2"
    }
  ];
  public mixedOpQuestions = [
    {
      ID: "1",
      description: "Mixed Operations",
      extradescription: "How do you make 7?",
      images: [],
      answers: {
        type: "button",
        buttons: [
          {
            id: "3 + 3",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "1 + 6",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "2 + 6",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "8 - 2",
            name: "",
            image: "",
            description: ""
          }
        ]
      },
      correctAnswer: "1 + 6"
    },
    {
      ID: "2",
      description: "Mixed Operations",
      extradescription:
        "Which sign is missing in the place of question mark.  5 ? 1 = 4",
      images: [],
      answers: {
        type: "button",
        buttons: [
          {
            id: "+",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "-",
            name: "",
            image: "",
            description: ""
          }
        ]
      },
      correctAnswer: "-"
    },
    {
      ID: "3",
      description: "Mixed Operations",
      extradescription:
        "8 of the pairs of shoes in a particular shoe store are black. There are 11 pair of shoes in the store in all. How many of the pairs of shoes are not black? ",
      images: [],
      answers: {
        type: "textbox",
        fields: [
          {
            answertext: "",
            answerunit: "  pairs of shoes"
          }
        ]
      },
      correctAnswer: "3"
    },
    {
      ID: "4",
      description: "Mixed Operations",
      extradescription: "In this problem, what is 45?",
      images: [
        {
          name: "class1/c1s4q4.jpg"
        }
      ],
      answers: {
        type: "button",
        buttons: [
          {
            id: "Difference",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "Sum",
            name: "",
            image: "",
            description: ""
          }
        ]
      },
      correctAnswer: "Sum"
    },
    {
      ID: "5",
      description: "Mixed Operations",
      extradescription: "How do you make 12?",
      images: [],
      answers: {
        type: "button",
        buttons: [
          {
            id: "7 + 4",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "2 + 11",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "16 - 4",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "11 - 0",
            name: "",
            image: "",
            description: ""
          }
        ]
      },
      correctAnswer: "16 - 4"
    }
  ];
  public comparisonQuestions = [
    {
      ID: "1",
      description: "Comparison Problems",
      extradescription: "Which group has fewer?",
      images: [
        {
          name: "class1/c1s5q1.jpg"
        }
      ],
      answers: {
        type: "button",
        buttons: [
          {
            id: "First",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "Second",
            name: "",
            image: "",
            description: ""
          }
        ]
      },
      correctAnswer: "Second"
    },
    {
      ID: "2",
      description: "Comparison Problems",
      extradescription: "Which words make this statement true?  9 __ 7 ",
      images: [],
      answers: {
        type: "button",
        buttons: [
          {
            id: " is greater than ",
            name: "",
            image: "",
            description: ""
          },
          {
            id: " is less than ",
            name: "",
            image: "",
            description: ""
          },
          {
            id: " is equal to ",
            name: "",
            image: "",
            description: ""
          }
        ]
      },
      correctAnswer: " is greater than "
    },
    {
      ID: "3",
      description: "Comparison Problems ",
      extradescription: "Which sign makes this statement true?  8 __ 8 ",
      images: [],
      answers: {
        type: "button",
        buttons: [
          {
            id: " > ",
            name: "",
            image: "",
            description: ""
          },
          {
            id: " = ",
            name: "",
            image: "",
            description: ""
          },
          {
            id: " < ",
            name: "",
            image: "",
            description: ""
          }
        ]
      },
      correctAnswer: " = "
    },
    {
      ID: "4",
      description: "Comparison Problems",
      extradescription:
        "Oscar has fewer dogs than Annie does. If Annie has 3 dogs, how many dogs can Oscar possibly have?",
      images: [],
      answers: {
        type: "button",
        buttons: [
          {
            id: "2",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "5",
            name: "",
            image: "",
            description: ""
          }
        ]
      },
      correctAnswer: "2"
    }
  ];
  public measurementQuestions = [
    {
      ID: "1",
      description: "Measurement Problems",
      extradescription: "Which building is the shortest?",
      images: [
        {
          name: "class1/c1s6q1.jpg"
        }
      ],
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
          }
        ]
      },
      correctAnswer: "B"
    },
    {
      ID: "2",
      description: "Measurement Problems",
      extradescription: "Which lighthouse is the widest? ",
      images: [
        {
          name: "class1/c1s6q2.jpg"
        }
      ],
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
          }
        ]
      },
      correctAnswer: "C"
    },
    {
      ID: "3",
      description: "Measurement Problems",
      extradescription: "Which is lighter? ",
      images: [
        {
          name: "class1/c1s6q3.jpg"
        }
      ],
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
          }
        ]
      },
      correctAnswer: "B"
    },
    {
      ID: "4",
      description: "Measurement Problems",
      extradescription: "Which bag holds more?",
      images: [
        {
          name: "class1/c1s6q4.jpg"
        }
      ],
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
          }
        ]
      },
      correctAnswer: "A"
    },
    {
      ID: "5",
      description: "Measurement Problems",
      extradescription:
        "Which is a better estimate for the length of a house key?",
      images: [
        {
          name: "class1/c1s6q5.jpg"
        }
      ],
      answers: {
        type: "button",
        buttons: [
          {
            id: "3 inches",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "3 feet",
            name: "",
            image: "",
            description: ""
          }
        ]
      },
      correctAnswer: "3 inches"
    }
  ];
  public patternQuestions = [
    {
      ID: "1",
      description: "Patterns",
      extradescription: "What number comes next in the given pattern?",
      images: [
        {
          name: "class1/1.jpg"
        },
        {
          name: "class1/2.jpg"
        },
        {
          name: "class1/2.jpg"
        },
        {
          name: "class1/1.jpg"
        },
        {
          name: "class1/2.jpg"
        },
        {
          name: "class1/2.jpg"
        },
        {
          name: "counting/qmark.jpg"
        }
      ],
      answers: {
        type: "image",
        buttons: [
          {
            id: "1",
            name: "",
            image: "class1/1.jpg",
            description: ""
          },
          {
            id: "2",
            name: "",
            image: "class1/2.jpg",
            description: ""
          }
        ]
      },
      correctAnswer: "1"
    },
    {
      ID: "2",
      description: "Patterns",
      extradescription: "What number comes next in the given pattern?",
      images: [
        {
          name: "class1/5.jpg"
        },
        {
          name: "class1/1.jpg"
        },
        {
          name: "class1/6.jpg"
        },
        {
          name: "class1/5.jpg"
        },
        {
          name: "class1/1.jpg"
        },
        {
          name: "class1/6.jpg"
        },
        {
          name: "class1/5.jpg"
        },
        {
          name: "class1/1.jpg"
        },
        {
          name: "counting/qmark.jpg"
        }
      ],
      answers: {
        type: "image",
        buttons: [
          {
            id: "1",
            name: "",
            image: "class1/1.jpg",
            description: ""
          },
          {
            id: "5",
            name: "",
            image: "class1/5.jpg",
            description: ""
          },
          {
            id: "6",
            name: "",
            image: "class1/6.jpg",
            description: ""
          }
        ]
      },
      correctAnswer: "6"
    }
  ];
  public shapesQuestions = [
    {
      ID: "1",
      description: "Shapes",
      extradescription: "What shape is this?",
      images: [
        {
          name: "class1/c1s8q1.jpg"
        }
      ],
      answers: {
        type: "button",
        buttons: [
          {
            id: "Triangle",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "Square",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "Rectangle",
            name: "",
            image: "",
            description: ""
          }
        ]
      },
      correctAnswer: "Triangle"
    },
    {
      ID: "2",
      description: "Shapes",
      extradescription: "Pick all the circles",
      images: [
        {
          name: "class1/c1s8q2.jpg"
        }
      ],
      answers: {
        type: "button",
        buttons: [
          {
            id: "2, 3, 5",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "1",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "1, 5, 6",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "1, 6",
            name: "",
            image: "",
            description: ""
          }
        ]
      },
      correctAnswer: "1, 6"
    },
    {
      ID: "3",
      description: "Shapes",
      extradescription: "Which shape has 5 corners? ",
      images: [
        {
          name: "class1/c1s8q3.jpg"
        }
      ],
      answers: {
        type: "button",
        buttons: [
          {
            id: "1, 3",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "1",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "4",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "2",
            name: "",
            image: "",
            description: ""
          }
        ]
      },
      correctAnswer: "1"
    },
    {
      ID: "4",
      description: "Shapes",
      extradescription: "Which shape has 3 equal sides?",
      images: [
        {
          name: "class1/c1s8q4.jpg"
        }
      ],
      answers: {
        type: "button",
        buttons: [
          {
            id: "1",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "2",
            name: "",
            image: "",
            description: ""
          }
        ]
      },
      correctAnswer: "1"
    },
    {
      ID: "5",
      description: "Shapes",
      extradescription: "Is this shape open or closed?",
      images: [
        {
          name: "class1/c1s8q5.jpg"
        }
      ],
      answers: {
        type: "button",
        buttons: [
          {
            id: "Open",
            name: "",
            image: "",
            description: ""
          },
          {
            id: "Closed",
            name: "",
            image: "",
            description: ""
          }
        ]
      },
      correctAnswer: "Closed"
    }
  ];

  test_for_pattern = false;
  buttonselected: string;
  labelstringC1S1Q1: string;
  labelstringC1S1Q2: string;
  labelstringC1S7Q1: string;
  labelstringC1S7Q2: string;

  public JSONArr: any[] = [];
  constructor() {
    this.labelstringC1S1Q1 = "";
    this.labelstringC1S1Q2 = "";
    this.labelstringC1S7Q1 = "";
    this.labelstringC1S7Q2 = "";

    this.JSONArr.push(this.countingQuestions[0]);
    this.JSONArr.push(this.countingQuestions[1]);
    this.JSONArr.push(this.countingQuestions[2]);
    console.log(JSON.stringify(this.JSONArr));
  }

  ngOnInit() {
    this.countingProblems();
  }
  countingProblems(): void {
    this.test_for_pattern = true;
    this.question = this.countingQuestions;
    this.i = 0;
  }
  additionProblems(): void {
    this.test_for_pattern = true;
    this.question = this.additionQuestions;
    this.i = 0;
  }
  subtractionProblems(): void {
    this.test_for_pattern = true;
    this.question = this.subtractionQuestions;
    this.i = 0;
  }
  mixedOpProblems(): void {
    this.test_for_pattern = true;
    this.question = this.mixedOpQuestions;
    this.i = 0;
  }
  comparisonProblems(): void {
    this.test_for_pattern = true;
    this.question = this.comparisonQuestions;
    this.i = 0;
  }
  measurementProblems(): void {
    this.test_for_pattern = true;
    this.question = this.measurementQuestions;
    this.i = 0;
  }
  patternProblems(): void {
    this.test_for_pattern = true;
    this.question = this.patternQuestions;
    this.i = 0;
  }
  shapesProblems(): void {
    this.test_for_pattern = true;
    this.question = this.shapesQuestions;
    this.i = 0;
  }

  changeLabelNameC1S1Q1(buttonselected) {
    if (buttonselected == "4") {
      this.labelstringC1S1Q1 = "Correct";
    } else {
      this.labelstringC1S1Q1 = "Incorrect";
    }
    return this.labelstringC1S1Q1;
  }

  changeLabelNameC1S1Q2(buttonselected) {
    if (buttonselected == "10") {
      this.labelstringC1S1Q2 = "Correct";
    } else {
      this.labelstringC1S1Q2 = "Incorrect";
    }
    return this.labelstringC1S1Q2;
  }

  changeLabelNameC1S7Q1(buttonselected) {
    if (buttonselected == "2") {
      this.labelstringC1S7Q1 = "Correct";
    } else {
      this.labelstringC1S7Q1 = "Incorrect";
    }
    return this.labelstringC1S7Q1;
  }

  changeLabelNameC1S7Q2(buttonselected) {
    if (buttonselected == "6") {
      this.labelstringC1S7Q2 = "Correct";
    } else {
      this.labelstringC1S7Q2 = "Incorrect";
    }
    return this.labelstringC1S7Q2;
  }
  // goToNextQuestion(questionNumber: string) {
  //   if (questionNumber == "displayPattern_2") {
  //     this.displayPatterns_2 = true;
  //   } else if (questionNumber == "displayCounting_2") {
  //     this.displayCounting_2 = true;
  //   }

  // }

  evaluateAnswer(correctAnswer: string, selectedAnswer: string) {
    if (correctAnswer == selectedAnswer) {
      this.correctLabel = true;
      this.incorrectLabel = false;
    } else {
      this.correctLabel = false;
      this.incorrectLabel = true;
    }
    console.log(correctAnswer);
    console.log(selectedAnswer);
  }
}
