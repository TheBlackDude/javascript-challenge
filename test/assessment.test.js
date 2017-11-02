import Assessment from '../src/assessment'

// Feel free to rewrite this test suite. This is provided as guidance.
describe('The Assessment', () => {
  describe('generateQuestions', () => {
    it('should generate 30 questions', () => {
      const assessment = new Assessment()
      assessment.generateQuestions()
      expect(assessment.questions).toHaveLength(30);
      expect(assessment.questions).not.toHaveLength(31)
    });
  })
  describe('getQuestion', () => {
    it('should get random questions', () => {
      const assessment = new Assessment()
      assessment.generateQuestions()
      const question1 = assessment.getQuestion(assessment.questions)
      const question2 = assessment.getQuestion(assessment.questions)
      expect(question1).not.toEqual(question2)
    });
    it('should provide two possible answers', () => {
      const assessment = new Assessment()
      assessment.generateQuestions()
      const question = assessment.getQuestion(assessment.questions)
      expect(question.option1).toBeDefined()
      expect(question.option2).toBeDefined()
    });
    it('should always display different answers', () => {
      const assessment = new Assessment()
      assessment.generateQuestions()
      const question1 = assessment.getQuestion(assessment.questions)
      const question2 = assessment.getQuestion(assessment.questions)
      expect(question1.option1.answer).not.toEqual(question2.option1.answer)
    });
  });
  describe('chooseAnswer', () => {
    it('should increment dimension based on answer', () => {
      const assessment = new Assessment()
      assessment.generateQuestions()
      const question = assessment.getQuestion(assessment.questions)
      const defaultResults = {
        'Adaptive': 0, 'Integrity': 0,
        'Collaborative': 0, 'Result': 0,
        'Customer': 0, 'Detail': 0
      }
      expect(assessment.AssessmentResult).toEqual(defaultResults)
      assessment.chooseAnswer(question.option1)
      assessment.chooseAnswer(question.option1)
      assessment.chooseAnswer(question.option2)
      expect(assessment.AssessmentResult).not.toEqual(defaultResults)
    });
    it('should return defaultResults if answer is not found', () => {
      const assessment = new Assessment()
      const defaultResults = {
        'Adaptive': 0, 'Integrity': 0,
        'Collaborative': 0, 'Result': 0,
        'Customer': 0, 'Detail': 0
      }
      assessment.chooseAnswer('not a possible answer')
      expect(assessment.AssessmentResult).toEqual(defaultResults)
    });
  });
});
