
import { Button, Navbar } from "flowbite-react";

const theme = {
  "root": {
    "base": "bg-transparent fixed z-10 w-full top-0 my-0 p-6",
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

const themeButton = {
  color: {
    "light": "enabled:hover:border-white bg-transparent text-white   enabled:hover:bg-transparent ",
  }
};

const Nav = () => {
  return (
    <div className="flex items-center h-screen">
      <Navbar fluid rounded className="w-full" theme={theme}>
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
          <Button color="light" theme={themeButton}>
          <svg className="w-6 h-6 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeWidth="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
          </svg>
          </Button>
          <Navbar.Toggle />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Nav;