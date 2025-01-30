import { Footer } from "flowbite-react";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";



const FooterComponent = () =>{
  return (
    <footer className="bg-transparent absolute w-full bottom-0 rounded-lg shadow-sm m-4">
    <div className="w-full mx-auto max-w-screen-xl p-4 flex md:items-center justify-end">
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <Link to="/politics" className="hover:underline me-4 md:me-6 text-gray-500 hover:text-white">Politicas</Link>
        </li>
        <li>
          <div className="mt-4 flex space-x-6 sm:mt-0 ">
            <Footer.Icon className="hover:text-white" target="_blank" href="https://www.instagram.com" icon={BsInstagram} />
          </div>
        </li>
    </ul>
    </div>
</footer>
  );
}

export default FooterComponent;