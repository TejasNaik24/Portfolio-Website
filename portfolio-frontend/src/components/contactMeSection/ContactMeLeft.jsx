import React from "react";
import ContactForm from "./ContactForm";

const ContactMeLeft = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div>
        <h2 className="text-orange text-3xl mb-4">Get in Touch</h2>
        <p className="text-white">
          email me im will repsone
          <br />
          but you odnt need to reose
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactMeLeft;
