import { SubmitFeedbackUseCase } from './submit-feedback-use-cases';

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();


  // no teste unitário, utilizamos dependências 'mocadas'/apagadas
  // se incluir vira teste de infraestrutura
 const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
  )
describe('Submit Feedback', () => {
  it('should be able to submit a feedback', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'example comment',
      screenshot: 'data:image/png;base64,aishdpiuahsidhsadah132'
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it('should not able to submit feedback without type', async () => {
    await expect(submitFeedback.execute({
      type: '',
      comment: 'example comment',
      screenshot: 'data:image/png;base64,aishdpiuahsidhsadah132'
    })).rejects.toThrow();
  });


   it('should not able to submit feedback without comment', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/jpg;base64,aishdpiuahsidhsadah132'
    })).rejects.toThrow();
   });

   it('should not able to submit feedback without comment', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'ta tudo bugado',
      screenshot: 'test.jpg'
    })).rejects.toThrow();
   });
})
