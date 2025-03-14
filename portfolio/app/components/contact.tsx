import { useState } from "react";
import sendMail from "../actions/send-mail";
import { Box } from "./shared/box";

const Contact = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  return (
    <Box id="contact" title="Get in Touch" layout="full-width">
      <form
        onSubmit={() => sendMail(name, subject, content)}
        className="space-y-6 max-w-xl mx-auto"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium mb-2 text-[#141414]"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            className="w-full px-3 py-2 border border-[#F2956A] rounded-md text-[#141414] bg-white"
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium mb-2 text-[#141414]"
          >
            Subject
          </label>
          <input
            type="subject"
            id="subject"
            name="subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            className="w-full px-3 py-2 border border-[#F2956A] rounded-md text-[#141414] bg-white"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium mb-2 text-[#141414]"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
            rows={4}
            className="w-full px-3 py-2 border border-[#F2956A] rounded-md text-[#141414] bg-white"
            required
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-[#F2956A]/80 text-[#141414] py-2 px-4 rounded-md font-semibold hover:bg-[#F2956A] transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </Box>
  );
};

export default Contact;
