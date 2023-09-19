class Question {
    constructor() {
      document.querySelector("#title").innerHTML =
        "Translation Quiz: Choose the Correct Translation for Each Word!!!";
      this.ask = document.getElementById("ask");
      this.answer = document.getElementById("answer");
      this.subBtn = document.getElementById("submit");
      // this.inp = document.querySelector("input");
      this.index = 0;
      this.createQuestion();
    }

    createQuestion() {
      let view = `<h2>What is the correct translation for ${
        questionsArray[this.index].question
      }? </h2>`;
      for (let question of questionsArray[this.index].choices) {
        view += `<input type="radio" name="answer" value="${question}" id="${question}" />
        <label for="${question}">${question}</label><br>`;
      }
      this.ask.innerHTML = view;
    }

    showAnswer() {
      this.subBtn.addEventListener("click", () => {
        const answerValue = document.querySelector(
          "input[name='answer']:checked"
        );
        if (answerValue === null) {
          this.answer.innerHTML = "Please select an answer";
        } else if (
          answerValue.value !==
          questionsArray[this.index].choices[
            questionsArray[this.index].answer
          ]
        ) {
          this.answer.innerHTML = `The word ${answerValue.value} is incorrect, try again`;
        } else if (this.index === questionsArray.length - 1) {
          answer.innerHTML = null;
          const next = confirm(`Quiz complete, Click OK to start over`);
          if (next) {
            this.index = 0;
            this.createQuestion();
          }
        } else {
          this.answer.innerHTML = null;
          const next = confirm(
            `The word ${answerValue.value} is correct, Press OK to continue.`
          );
          if (next) {
            this.index++;
            this.createQuestion();
          }
        }
      });
    }
  }
  const question = new Question();
  question.showAnswer();

  class ComplitQuestion {
    constructor() {
      document.querySelector("#t").innerHTML =
        "Complete Translation Quiz: Complete the correct translation";
      this.ask1 = document.getElementById("ask1");
      this.answer1 = document.getElementById("answer1");
      this.subBtn1 = document.getElementById("submit1");
      this.index1 = 0;
      this.createQuestion1();
    }

    createQuestion1() {
      let view1 = `<h2>Please complete the correct translation for ${
        questionsArray2[this.index1].english
      }? </h2> <label for="answer1">${
        questionsArray2[this.index1].english
      }:</label> <input type="text" name="answer1" id="answer1"/>
      `;
      this.ask1.innerHTML = view1;
      }

    checkAnswer(){
      this.subBtn1.addEventListener("click", () => {
      const answerValue1 = document.querySelector("input[name='answer1']");
      console.log(answerValue1.value);
      if (answerValue1 === null){
        this.answer1.innerHTML = "Please enter an answer";
      } else if (answerValue1.value !== questionsArray2[this.index1].hebrew){
        this.answer1.innerHTML = `The word ${answerValue1.value} is incorrect, try again`;
      } else if (this.index1 === questionsArray2.length - 1){
        
        answer1.innerHTML = null;
        const next = confirm(`Quiz complete, Click OK to start over`);
        if (next) {
          this.index1 = 0;
          this.createQuestion1();
        }
      } else {
        this.answer1.innerHTML = `The word ${answerValue1.value} is correct.`;
            this.index1++;
          this.createQuestion1();
        }
      }
    
    )}
  }
  const complitQuestion = new ComplitQuestion();
  complitQuestion.checkAnswer();