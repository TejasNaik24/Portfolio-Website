import React from "react";
import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        link="https://www.linkedin.com/in/tejas-naik2028"
        Icon={FaLinkedin}
      />
      <SingleContactSocial
        link="https://github.com/TejasNaik24"
        Icon={FaGithub}
      />
    </div>
  );
};

export default ContactSocial;
