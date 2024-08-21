import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_yktysm4", "template_ke9kjnw", form.current, {
        publicKey: "aBDXrAcfzsB5wAepi",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Your message has been sent! We'll get back to you shortly.");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section
      className="max-w-screen mt-20"
      id="contact"
    >
      <div className="border-t border-[#B3B3B3] w-[15rem]"></div>
      <div className="px-10 md:px-32 py-4">
        <div className="pb-8">
          <h2 className="text-2xl font-normal lg:mb-20 mb-6">Contact</h2>
        </div>
        <div className="flex flex-col md:flex-row md:gap-10 items-start justify-center max-w-screen">
          {/* info */}
          <div className="flex flex-col justify-center items-start space-y-2 w-[80vw] md:w-1/2">
            <h2 className="text-2xl  text-[#666666]">Have an awesome project idea?</h2>
            <p className="text-4xl font-medium pb-8">
              I am currently open to full-time, <br /> contract or part-time
              <br />
              opportunities in <br /> Front End Development.
            </p>

            <div className="text-xl">
              <h2 className="py-1 text-[#666666]">Contact Details</h2>
              <div className="flex items-center gap-4 py-1">
                <HiOutlineMail size={25} />
                <p>oyinbolaji05@gmail.com</p>
              </div>
              <div className="flex items-center gap-4 py-1">
                <FaPhone size={20} />
                <p>+234 810 328 6788</p>
              </div>
            </div>
          </div>

          {/* contact form */}
          <div class="bg-white shadow-2xl p-8 rounded-lg w-[80vw] md:w-1/2">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="text-lg"
            >
              <input
                type="text"
                name="from_name"
                placeholder="Your Full Name"
                required
                className="bg-[#F2F2F2] text-[#333333] mt-3 block w-full px-3 py-4 border rounded-md shadow-sm focus:outline-none focus:ring-[#333333] focus:border-[#333333]"
              />
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="bg-[#F2F2F2] text-[#333333] mt-3 block w-full px-3 py-4 border rounded-md shadow-sm focus:outline-none focus:ring-[#333333] focus:border-[#333333]"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                required
                className="bg-[#F2F2F2] text-[#333333] mt-3 block w-full px-3 py-4 border rounded-md shadow-sm focus:outline-none focus:ring-[#333333] focus:border-[#333333]"
              ></textarea>
              <button
                type="submit"
                className="w-full px-4 py-4 mt-10 bg-[#666666] text-white font-semibold rounded-[1000px] shadow-sm hover:bg-[#333333] focus:outline-none focus:ring-2 focus:ring-[#333333] focus:border-[#333333]"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
