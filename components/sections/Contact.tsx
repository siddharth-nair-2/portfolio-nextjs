"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { montserrat } from "@/app/fonts";
import ReactGA from "react-ga4";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    ReactGA.event({
      action: "submit_form",
      category: "Contact",
      label: form.name,
    });

    emailjs
      .send(
        "service_xfwnmxk",
        "template_l3i7oor",
        {
          from_name: form.name,
          to_name: "Siddharth",
          from_email: form.email,
          to_email: "nairsid2@gmail.com",
          message: form.message,
        },
        "BeEAz0RKLXKOdIrZe"
      )
      .then(
        () => {
          setLoading(false);
          toast.success(
            "Thank You. I will get back to you as soon as possible!",
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            }
          );
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong!");
        }
      );
  };

  return (
    <section
      className=" max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
      id="contact"
    >
      <ToastContainer />
      <p className="text-lg text-textGreen font-semibold flex items-center tracking-wide">
        04. What&apos;s Next?
      </p>
      <h2 className="text-5xl font-semibold">Get In Touch</h2>
      <div className=" mt-12 w-full md:w-2/3 lg:w-1/2 rounded-lg bg-[#112240] p-7 flex flex-col justify-between group">
        <form
          ref={formRef}
          className="flex flex-col gap-8"
          onSubmit={handleSubmit}
        >
          <label className="flex flex-col">
            <span className="mb-4 text-xl font-semibold tracking-wide hover:text-textGreen">
              Your Name
            </span>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your good name."
              className={`bg-textLight text-[#112240] ${montserrat.className} py-4 px-6 placeholder:text-[#717379] rounded-lg outlined-none border-none font-medium`}
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-4 text-xl font-semibold tracking-wide hover:text-textGreen">
              Your Email
            </span>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your Email ID."
              className={`bg-textLight text-[#112240] ${montserrat.className}  py-4 px-6 placeholder:text-[#717379] rounded-lg outlined-none border-none font-medium`}
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-4 text-xl font-semibold tracking-wide hover:text-textGreen">
              Your Message
            </span>
            <textarea
              rows={7}
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me a little about yourself and what you're looking for."
              className={`bg-textLight text-[#112240] ${montserrat.className} py-4 px-6 placeholder:text-[#717379] rounded-lg outlined-none border-none font-medium`}
            />
          </label>

          <button
            type="submit"
            className="mx-auto w-40 h-14 border border-textGreen mt-6 text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
