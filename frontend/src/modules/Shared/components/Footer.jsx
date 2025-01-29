import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const theme = 
{
  "root": {
    "base": "w-full absolute bottom-0 bg-transparent md:flex md:items-center md:justify-between",
    "container": "w-full p-6",
    "bgDark": ""
  },
};

const FooterComponent = () =>{
  return (
    <Footer container theme={theme}>
      <Footer.Copyright href="#" by={<span className="text-white">DeBambu</span>} year={2025} />
      <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center ">
        <Footer.Icon className="hover:text-white" href="#" icon={BsInstagram} />
      </div>
    </Footer>
  );
}

export default FooterComponent;