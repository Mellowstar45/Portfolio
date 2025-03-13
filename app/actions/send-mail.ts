"use server";
import AdminMailer from "lowback-admin-mailer";
const mailer = new AdminMailer(process.env.SECRET_KEY);

export default async function sendMail(
  name: string,
  subject: string,
  content: string
): Promise<{ success: boolean; message: string }> {
  if (!name || !subject || !content) {
    return { success: false, message: "All fields are required." };
  }

  try {
    await mailer
      .send(content)
      .subject(`From ${name}: ${subject}`)
      .to("nicolasramanantsoa345@gmail.com");

    return { success: true, message: "Email sent successfully." };
  } catch (error) {
    console.error("Error sending email:", error);

    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}
