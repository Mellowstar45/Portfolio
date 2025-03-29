"use client";

import { FormEvent, useState } from "react";
import sendMail from "../actions/send-mail";
import { aptos } from "../utils/fonts";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMail(email, subject, content);
  };

  return (
    <section
      className="w-full flex items-center justify-center sm:p-6"
      id="contact"
    >
      <div className="w-full max-w-xl bg-[#FFC7AB] rounded-lg p-5 sm:p-6">
        <h2 className="text-3xl font-bold text-center mb-5 text-[#141414]">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className={`${aptos.className} block text-sm font-medium mb-1.5 text-[#141414]`}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-[#F8A47E] rounded-md text-[#141414] bg-white focus:outline-none"
              required
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className={`${aptos.className} block text-sm font-medium mb-1.5 text-[#141414]`}
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-3 py-2 border border-[#F8A47E] rounded-md text-[#141414] bg-white focus:outline-none"
              required
            />
          </div>

          <div>
            <label
              htmlFor="content"
              className={`${aptos.className} block text-sm font-medium mb-1.5 text-[#141414]`}
            >
              Message
            </label>
            <textarea
              id="content"
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-[#F8A47E] rounded-md text-[#141414] bg-white focus:outline-none"
              required
            />
          </div>

          <div className="flex justify-center mt-5">
            <button
              type="submit"
              className="bg-[#F2956A] text-white py-2 px-8 rounded-full font-medium hover:bg-[#F8A47E]/90 transition duration-300 text-sm"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
