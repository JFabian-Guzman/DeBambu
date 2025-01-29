import React from "react";
import { useState } from "react";

const RegisterForms = ({ toggleForm }) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div className="flex justify-center items-center w-full min-h-screen p-4 select-none">
      <div className="w-full max-w-md p-4 m-4 rounded-md bg-white bg-opacity-70">
        <div className="w-full px-4 py-4">

          <form>
            <div className="mb-12 flex justify-center">
              <h3 className="text-gray-800 text-3xl font-extrabold text-center">Crea una cuenta</h3>
            </div>


            <div className="relative flex items-center gap-2">
              <input
                name="name"
                type="text"
                required
                className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 pl-9 pr-8 py-3 outline-none rounded-md"
                placeholder="Nombre"
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="black"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>

            <div className="relative flex items-center mt-8">
              <input
                name="phone"
                type="text"
                required
                className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 pl-9 pr-8 py-3 outline-none rounded-md"
                placeholder="Teléfono"
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="black"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>

            </div>

            <div className="relative flex items-center mt-8">
              <input
                name="email"
                type="email"
                required
                className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 pl-9 pr-8 py-3 outline-none rounded-md"
                placeholder="Correo electrónico"
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="black"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </div>


            <div className="relative flex items-center mt-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="black"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>

              <input
                name="password"
                type={showPassword ? 'text' : 'password'}
                required
                className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 pl-10 pr-8 py-3 outline-none rounded-md"
                placeholder="Contraseña"
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="black"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6 cursor-pointer"
                onClick={togglePassword}
              >
                {showPassword ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                ) : (
                  <>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </>
                )}
              </svg>
            </div>


            {/* ToDo: add terms and conditions section */}
            <div className="flex items-center mt-4">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />

              <label
                htmlFor="remember-me"
                className="ml-3 block text-sm text-gray-800">
                Acepto los
                <a
                  href=""
                  className="text-blue-600 font-semibold hover:underline ml-1">términos y condiciones</a>
              </label>
            </div>

            {/* ToDo: add the right colors */}
            <div className="mt-12">
              <button
                type="button"
                className="w-full py-2.5 px-4 text-sm tracking-wide rounded bg-blue-600 hover:bg-blue-700 text-white focus:outline-none">
                Crear cuenta
              </button>
            </div>


            <p className="flex justify-center items-center text-sm mt-4 text-gray-800">
              Ya tienes una cuenta?
              <a className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                onClick={toggleForm}>Inicia sesión aquí</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForms;