import { NodemailerAdapter } from './adapters/nodemailer-mail-adapter';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-cases';
import express from 'express';
export const routes = express.Router()


routes.post('/feedbacks', async (req, res) => {
  const {type, comment, screenshot} = req.body;

  // consolida com o banco a forma do envio pela determinada ORM, define dependência
  const prismaFeedbackRepository = new PrismaFeedbacksRepository()
  const nodemailerAdapter = new NodemailerAdapter()

  // função aguarda as classes/função para realizar o envio
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbackRepository,
    nodemailerAdapter
  )

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot
  })




  return res.status(201).send()
})
