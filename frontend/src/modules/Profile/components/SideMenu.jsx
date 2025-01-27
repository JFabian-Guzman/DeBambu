import { useState } from 'react';

const SideMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <div
        className="md:hidden shadow-md rounded-md p-4 fixed top-4 right-10 z-10 cursor-pointer"
        onClick={toggleMenu}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6" onClick={toggleMenu}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
      <div
        className={`bg-white shadow-md h-screen w-64 md:w-48 lg:w-64 fixed top-0 left-0 z-20 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 md:static`}
      >
        <div className="px-4 py-5 text-black font-medium">Mi Cuenta</div>
        <div className="flex flex-col">
          <a href="#" className="py-3 px-4 text-gray-500 hover:bg-gray-100 transition-colors">
            General
          </a>
          <a href="#" className="py-3 px-4 text-gray-500 hover:bg-gray-100 transition-colors">
            Pedidos
          </a>
          <a href="#" className="py-3 px-4 text-gray-500 hover:bg-gray-100 transition-colors">
            Pago
          </a>
          <a href="#" className="py-3 px-4 text-gray-500 hover:bg-gray-100 transition-colors">
            Ajustes
          </a>
          <a href="#" className="py-3 px-4 text-gray-500 hover:bg-gray-100 transition-colors">
            Dirección de envío
          </a>

          <div className="border-b border-gray-200 ml-4 w-4/5"></div>

          <a href="#" className="py-3 px-4 text-gray-500 hover:bg-gray-100 transition-colors">
            Centro de ayuda
          </a>
          <a href="#" className="py-3 px-4 text-gray-500 hover:bg-gray-100 transition-colors">
            Sugerencias
          </a>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"
          onClick={closeMenu}
        />
      )}
    </div>
  );
};

export default SideMenu;
