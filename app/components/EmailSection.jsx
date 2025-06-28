"use client";
import React, { useRef, useState } from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const EmailSection = () => {
  const form = useRef();
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
        form.current.reset();
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "Message sent successfully!",
          text: "Thank you! I’ll get back to you soon.",
          confirmButtonColor: "#6366f1",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
      },
      (error) => {
        console.error(error.text);
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "error",
          title: "Something went wrong",
          text: "Please try again later.",
          confirmButtonColor: "#ef4444",
          showConfirmButton: false,
          timer: 3000,
        });
      }
    );
  };
  return (
    <section id="contact" className="my-16">
      <h2 className="text-4xl font-bold my-16 text-center text-white">
        Contact
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
        <div className="z-10">
          <h5 className="text-xl font-bold text-white my-2">
            Let&apos;s Connect
          </h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            {" "}
            I&apos;m currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I&apos;ll
            try my best to get back to you!
          </p>
          <div className="socials flex flex-row gap-2">
            <Link
              href="https://github.com/abdulbariks"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image src={GithubIcon} alt="Github Icon" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/abdul-barik1997/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image src={LinkedinIcon} alt="Linkedin Icon" />
            </Link>
          </div>
        </div>
        <form className="flex flex-col" ref={form} onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Enter Your Email Subject"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-slate-800 text-white font-medium py-2.5 px-5 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
