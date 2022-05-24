import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "bb7ef328b55d71",
    pass: "76021a61cf50d4"
  }
})

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    transport.sendMail({
    from: "Equipe Feedget <oi@feedget.com>",
    to: "Rafael Dantas <rafaeldantas461@gmail.com",
    subject,
    html: body,
  });
  };
}