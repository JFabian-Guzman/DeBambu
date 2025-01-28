
import { Button, Navbar } from "flowbite-react";

import logo from "../../../assets/logo_bambu.jpeg";

const theme = {
  "root": {
    "base": "bg-transparent fixed z-10 w-full top-0 my-0 py-5",
    "rounded": {
      "on": "rounded",
      "off": ""
    },
  },
  "brand": {
    "base": "flex items-center text-white hover:text-white",
  },
  "link": {
    "base": "flex items-center justify-center py-2 px-3 text-lg",
    "active": {
      "on": "text-green-600 bg-transparent hover:text-green-700",
      "off": "text-white bg-transparent hover:text-green-700 "
    },
    "disabled": {
      "on": "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
      "off": ""
    }
  }
};


const Nav = () => {
  return (
    <div className="flex items-center h-screen">
      <Navbar rounded className="w-full" theme={theme}>
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold">DeBambu</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="flex justify-center items-center">
          <Navbar.Link href="#" active>
            Inicio
          </Navbar.Link>
          <Navbar.Link href="#" className="flex justify-center items-center">
            Tienda
          </Navbar.Link>
          <Button className="bg-green-700">
              Iniciar Sesión
          </Button>
          <Navbar.Toggle />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Nav;