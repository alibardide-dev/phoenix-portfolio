import React from "react";
import Reveal from "./utils/Reveal";
import FlipText from "./FlipText";

function Contact() {
  return (
    <section className="relative w-full px-6 py-8 md:px-16 md:py-16">
      <div className="mx-auto w-full md:max-w-10/12">
        <div className="flex justify-center items-center">
          <Reveal>
            <p className="font-black text-4xl">
              Contact
              <span
                className="text-primary text-6xl"
                style={{ lineHeight: 0.35 }}
              >
                .
              </span>
            </p>
          </Reveal>
          <div className="grow h-px ml-6 bg-border" />
        </div>

        <Reveal width="100%">
          <div className="relative mt-12 overflow-hidden rounded-3xl bg-foreground/40 p-8 md:p-12">
            <div
              aria-hidden
              className="absolute -right-20 -top-20 size-64 rounded-full bg-primary opacity-15 blur-3xl"
            />
            <div className="relative flex flex-col gap-10 md:flex-row md:gap-12">
              <div className="w-full md:w-5/12">
                <h3 className="flex flex-wrap items-center gap-2 text-3xl md:text-4xl font-black text-stone-900 dark:text-white">
                  Hello{" "}
                  <span className="flex flex-row text-primary" style={{ lineHeight: 0.85 }}>
                    <FlipText>There</FlipText>!
                  </span>
                </h3>
                <p className="mt-3 leading-relaxed text-stone-600 dark:text-copy-light">
                  Request a quote, or just drop a hello in this contact form. My
                  inbox always has room for you.
                </p>
                <a
                  href="mailto:alibardide5124@gmail.com"
                  className="group mt-6 inline-flex items-center gap-2 text-sm text-stone-900 dark:text-stone-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    className="fill-primary size-5"
                  >
                    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280 320-200v-80L480-520 160-720v80l320 200Z" />
                  </svg>
                  <span className="border-b border-transparent transition ease-in-out group-hover:border-primary group-hover:text-primary">
                    alibardide5124@gmail.com
                  </span>
                </a>
              </div>

              <ContactForm>
                <ContactInput
                  name="name"
                  label="Name"
                  placeholder="What's your name?"
                  type="text"
                />
                <ContactInput
                  name="email"
                  label="Email"
                  placeholder="What's your email address?"
                  type="email"
                />
                <ContactTextArea
                  name="message"
                  label="Message"
                  placeholder="Write your message here."
                />
                <button
                  type="submit"
                  className="mt-2 inline-flex w-full justify-center rounded-lg bg-primary px-8 py-3 text-base font-semibold text-primary-content drop-shadow-md transition ease-in-out hover:bg-primary-dark hover:scale-105"
                >
                  Work With Me
                </button>
              </ContactForm>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const INPUT_CLASS =
  "w-full rounded-lg bg-background border border-border px-4 py-3 text-sm text-stone-900 dark:text-stone-200 placeholder:text-copy-lighter/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition ease-in-out";

const ContactForm = ({ children }) => {
  return (
    <form
      action="https://getform.io/f/paoxgwvb"
      method="post"
      className="flex flex-col gap-5 w-full md:w-7/12"
    >
      {children}
    </form>
  );
};

const ContactInput = ({ name, label, placeholder, type }) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-xs font-semibold uppercase tracking-widest text-copy-lighter"
      >
        {label}
      </label>
      <input
        id={name}
        required
        type={type}
        name={name}
        placeholder={placeholder}
        className={INPUT_CLASS}
      />
    </div>
  );
};

const ContactTextArea = ({ name, label, placeholder }) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-xs font-semibold uppercase tracking-widest text-copy-lighter"
      >
        {label}
      </label>
      <textarea
        id={name}
        required
        name={name}
        rows="6"
        placeholder={placeholder}
        className={INPUT_CLASS}
      />
    </div>
  );
};

export default Contact;
