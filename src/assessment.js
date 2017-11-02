import dimensions from './dimensions'

class Assessment {
  constructor() {
    this.AssessmentResult = {
      'Adaptive': 0, 'Integrity': 0,
      'Collaborative': 0, 'Result': 0,
      'Customer': 0, 'Detail': 0
    };
    this.questions = []
    this.dimension = null
    this.question = null
  }

  generateQuestions() {
    const dimensionTags = [
      'Adaptive', 'Integrity', 'Collaborative',
      'Result', 'Customer', 'Detail'
    ]
    let i = 0
    while (i < 30) {
      this.questions.push({
        title: 'Pick the answer that describes you best:',
        option1: {
          dimension: this.getRandomItem(dimensionTags),
          answer: this.getRandomAnswer(this.dimension)
        },
        option2: {
          dimension: this.getRandomItem(dimensionTags),
          answer: this.getRandomAnswer(this.dimension)
        }
      })
      i++
    }
  }

  getRandomAnswer(dimension) {
    let answer = null
    dimensions.filter(value => {
      if (value.name === dimension) {
        answer = this.getRandomItem(value.answers)
      }
    })
    return answer
  }

  getRandomItem(items) {
    let value = items[Math.round(Math.random()*items.length)]
    if (value === this.dimension) {
      value = items[Math.floor(Math.random()*items.length)]
    }
    this.dimension = value
    return value
  }

  getQuestion(questions) {
    let question = questions[Math.round(Math.random()*questions.length)]
    if (question === this.question) {
      question = questions[Math.floor(Math.random()*questions.length)]
    }
    this.question = question
    return question
  }

  chooseAnswer(answer) {
    switch (answer.dimension) {
      case 'Adaptive':
        this.AssessmentResult['Adaptive'] += 1
        break;
      case 'Integrity':
        this.AssessmentResult['Integrity'] += 1
        break;
      case 'Collaborative':
        this.AssessmentResult['Collaborative'] += 1
        break;
      case 'Result':
        this.AssessmentResult['Result'] += 1
        break;
      case 'Customer':
        this.AssessmentResult['Customer'] += 1
        break;
      case 'Detail':
        this.AssessmentResult['Detail'] += 1
        break;
      default:
        this.AssessmentResult = {
          'Adaptive': 0, 'Integrity': 0,
          'Collaborative': 0, 'Result': 0,
          'Customer': 0, 'Detail': 0
        }
    }
    return this.AssessmentResult
  }
}

export default Assessment;
