import { prisma } from "./prisma";
import nodemailer from 'nodemailer';
import express from "express";

const app = express();

app.use(express.json());

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "bb7ef328b55d71",
    pass: "76021a61cf50d4"
  }
})

app.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    },
  });

  transport.sendMail({
    from: "Equipe Feedget <oi@feedget.com>",
    to: "Rafael Dantas <rafaeldantas461@gmail.com",
    subject: "Novo feedback",
    html: [
      `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
      `<p>Tipo do feedback: ${type}</p>`,
      `<p>Comentário: ${comment}</p>`,
      `</div>`
    ].join('\n')
  });

  return res.status(201).json({ data: feedback });
});

app.listen(3333, () => {
  console.log("Rodando...");
});
