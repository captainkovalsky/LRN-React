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

class MultiSelectQuestion extend Question{
  applyAnswer(answer){
    var correct = 0;
    let i = 0;
    let max = answer.getAnswers().length;

    for(; i < max; ++i ){

    }
  }
}
