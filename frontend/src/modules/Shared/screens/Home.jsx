import '../styles/Home.css';
import Navbar from '../../Shared/components/Navbar';

const HomeScreen = () => {

  return (
    <div className='bg-[url(/home_image.jpg)] bg-cover bg-center bg-no-repeat flex items-center justify-center h-screen'>
      <div className="absolute w-full h-screen bg-gradient-to-b from-[rgba(0,0,0,0.25)] to-black"></div>
      <Navbar />
      <section className="w-screen h-screen content-center p-8 justify-center relative flex flex-col items-center">
        <h1 className="text-8xl font-bold relative">Bienvenido a <span className="text-green-600">DeBambu</span></h1>
        <p className="text-2xl mt-4 relative">Tu destino para un estilo de vida ecológico.</p>
        <button type="button" className="mt-6 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-10 py-3 text-center inline-flex items-center">
          <svg className="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
            <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
          </svg>
          Comprar
        </button>
      </section>
    </div>
  );
};

export default HomeScreen;
