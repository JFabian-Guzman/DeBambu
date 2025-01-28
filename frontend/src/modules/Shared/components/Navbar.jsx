
"use client";

import { Navbar } from "flowbite-react";

const theme = {
  "brand": {
    "base": "flex items-center text-white hover:text-white",
  },
  "link": {
    "base": "block py-2 pl-3 pr-4 md:p-0 text-white hover:text-green-500 text-lg",
    "active": {
      "on": "bg-green-50 text-white dark:text-white md:bg-transparent md:text-green-700",
      "off": "text-white border-b border-gray-100 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-green-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
    },
    "disabled": {
      "on": "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
      "off": ""
    }
  },
};

const Nav = () => {
  return (
    <Navbar fluid rounded className="fixed z-10 w-full top-0 bg-transparent my-0 py-3 sm:px-12 md:px-24 lg:px-32 xl:px-40 2xl:px-48" theme={theme}>
      <Navbar.Brand href="/">
      <span className="self-center whitespace-nowrap text-xl font-semibold ">DeBambu</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
      <Navbar.Link href="#" active >
      Home
      </Navbar.Link>
      <Navbar.Link href="#"  >Services</Navbar.Link>
      <Navbar.Link href="#"  >Pricing</Navbar.Link>
      <Navbar.Link href="#"  >Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    );
}

export default Nav;