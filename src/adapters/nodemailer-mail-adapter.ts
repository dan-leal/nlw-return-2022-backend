import { MailAdapter, SendMailData } from './mail-adapter';
import nodemailer from 'nodemailer';
const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "122b0461a17d09",
      pass: "0399f28f9bdd96"
    }
});

export class NodemailerAdapter implements MailAdapter{
  async sendMail({subject, body}: SendMailData) {


    await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Daniel Leal <lealdaniel025@gmail.com>',
    subject,
    html: body
  })
  };
}
