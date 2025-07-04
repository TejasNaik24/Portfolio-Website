import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="hi" Image={HiOutlineMail} />
      <SingleInfo text="wahtup" Image={FiPhone} />
    </div>
  );
};

export default ContactInfo;
