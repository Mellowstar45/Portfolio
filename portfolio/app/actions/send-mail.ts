"use server";

import AdminMailer from "lowback-admin-mailer";
const mailer = new AdminMailer(process.env.SECRET_KEY);

export default async function sendMail(
  email: string,
  subject: string,
  content: string
): Promise<{ success: boolean; message: string }> {
  if (!email || !subject || !content) {
    return { success: false, message: "All fields are required." };
  }

  const fullContent = `Email: ${email}\n\n${content}`;

  return mailer
    .subject(subject)
    .to("nicolasramanantsoa345@gmail.com")
    .send(fullContent)
    .then(() => ({ success: true, message: "Email sent successfully." }))
    .catch((e: string) => ({ success: false, message: e }));
}
