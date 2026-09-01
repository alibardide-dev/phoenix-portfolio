import React from "react";
import Reveal from "./utils/Reveal";
import FlipText from "./FlipText";

function Contact() {
  return (
    <div className="w-11/12 md:w-10/12 my-10 rounded-lg border-dashed border-2 border-background dark:border-copy mx-auto">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 px-4 my-10">
        <div className="flex flex-col w-full md:w-4/12">
          <Reveal>
            <h3 className="flex flex-wrap gap-2 items-center text-4xl font-black">
              Hello{" "}
              <span
                className="flex flex-row text-primary"
                style={{ lineHeight: 0.85 }}
              >
                <FlipText>There</FlipText>!
              </span>
            </h3>
          </Reveal>
          <Reveal>
            <p className="flex flex-wrap gap-1 items-center text-md font-regular">
              Request a qoute, or just drop a hello
              in this contact form. My inbox always has room for you.
            </p>
          </Reveal>
          <div className="w-full mt-10 font-light text-sm">
            <Reveal>
              <p>Email: alibardide5124@gmail.com</p>
            </Reveal>
          </div>
        </div>
        <ContactForm>
          <ContactInput
            name="name"
            placeholder="What's your name?"
            type="text"
          />
          <ContactInput
            name="email"
            placeholder="What's your email address?"
            type="email"
          />
          <ContactTextArea
            name="message"
            placeholder="Write you message here."
          />

          <button
            type="submit"
            className="text-center justify-end inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-blue-500 drop-shadow-md hover:stroke-white transition ease-in-out hover:bg-violet-500 hover:scale-110 mx-auto"
          >
            Work With Me
          </button>
        </ContactForm>
      </div>
    </div>
  );
}

const INPUT_CLASS =
  "transition ease-in-out p-2 bg-foreground border-2 focus:border-blue-500 rounded-md focus:outline-none hover:border-blue-300";

const ContactForm = ({ children }) => {
  return (
    <form
      action="https://getform.io/f/paoxgwvb"
      method="post"
      className="flex flex-col gap-4 w-full md:w-6/12 mt-10 md:mt-0"
    >
      {children}
    </form>
  );
};

const ContactInput = ({ name, placeholder, type }) => {
  return (
    <div
      className="flex flex-col"
    >
      <p>{placeholder}</p>
      <input required type={type} name={name} className={INPUT_CLASS} />
    </div>
  );
};

const ContactTextArea = ({ name, placeholder }) => {
  return (
    <div
      className="flex flex-col"
    >
      <p>{placeholder}</p>
      <textarea required name={name} rows="10" className={INPUT_CLASS} />
    </div>
  );
};

export default Contact;
