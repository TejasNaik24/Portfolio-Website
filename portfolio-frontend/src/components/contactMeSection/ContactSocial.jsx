import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        link="https://www.linkedin.com/in/tejas-naik2028"
        Icon={FaLinkedin}
      />
      <SingleContactSocial
        link="https://scholar.google.com/citations?user=M_OhGPAAAAAJ&hl=en"
        Icon={SiGooglescholar}
      />
      <SingleContactSocial
        link="https://github.com/TejasNaik24"
        Icon={FaGithub}
      />
    </div>
  );
};

export default ContactSocial;
