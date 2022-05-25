import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "e5ed62ac347a01",
    pass: "9333d03a3450df"
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