class Answer{ }

class MultiAnswer{ }

class Question{
  constructor(title){
    this.id = 0;
    this.title = title;
  }

  applyAnswer(answer){
    return new Number(answer.questionId === this.id);
  }
}

class MultiSelectQuestion extends Question{
  applyAnswer(answer){
    var correct = 0;
    var i = 0;
    var answers = answer.getAnswersId();
    var max = answers.length;
    for(; i < max; ++i){
      correct += super.applyAnswer(answers[i]);
    }

    if(correct === 0){
      return 0;
    }

    return max / correct;
  }
}

 export { Answer, MultiAnswer, Question, MultiSelectQuestion };
