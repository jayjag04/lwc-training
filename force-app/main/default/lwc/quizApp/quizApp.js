import { LightningElement } from "lwc";

export default class QuizApp extends LightningElement {
  selected = {};
  correctAnswers = 0;
  isSubmitted = false;

  myQuestions = [
    {
      id: "Question1",
      question: "Which one of the following is not a template loop?",
      answers: {
        a: "for:each",
        b: "iterator",
        c: "map loop"
      },
      correctAnswer: "c"
    },
    {
      id: "Question2",
      question: "Which of the file is invald in LWC component folder?",
      answers: {
        a: ".svg",
        b: ".apex",
        c: ".js"
      },
      correctAnswer: "b"
    },
    {
      id: "Question3",
      question: "WHich one of the following is not a directive?",
      answers: {
        a: "for:each",
        b: "if:true",
        c: "@track"
      },
      correctAnswer: "c"
    }
  ];

  changeHandler(event) {
    const { name, value } = event.target;
    this.selected = { ...this.selected, [name]: value };
    //console.log(this.selected);
  }

  get allNotSelected() {
    return Object.keys(this.selected).length !== this.myQuestions.length;
  }
  // form reset handler
  resethandler(event) {
    this.selected = {};
    this.correctAnswers = 0;
    this.isSubmitted = false;
  }
  // form submit handler
  submithandler(event) {
    this.isSubmitted = true;
    event.preventDefault();
    this.correctAnswers = this.myQuestions.reduce(
      (accumulator, currentValue, currentIndex, array) => {
        if (currentValue.correctAnswer === this.selected[currentValue.id])
          return accumulator + 1;
        return accumulator;
      },
      0
    );
    console.log(this.correctAnswers);
  }

  get isScoredFull() {
    return `slds-text-heading_large ${
      this.myQuestions.length == this.correctAnswers
        ? "slds-text-color_success"
        : "slds-text-color_error"
    }`;
  }
}
