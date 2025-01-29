import React, { useState } from 'react';
import { X } from 'lucide-react';

const SuggestionModal = ({ onClose }) => {
  const [email, setEmail] = useState('');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-xl mx-4 relative">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold text-black ml-4">Añadir sugerencia</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <p className="text-gray-700 mb-2">Antes dinos qué te gustaría hacer:</p>
            <div className="relative">
              <select
                className="w-full p-3 border rounded-lg appearance-none bg-white pr-10 text-gray-700"
                defaultValue=""
              >
                <option value="" disabled>Reportar un error</option>
                <option value="suggestion">Hacer una sugerencia</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <textarea
              className="w-full p-3 border rounded-lg h-32 text-gray-700 resize-none"
              placeholder="Tenemos tu opinión en cuenta, y a pesar de que no podamos responder personalmente, consideraremos todo lo que nos envíes. Si deseas mandarnos una sugerencia o reportar un problema, incluye todos los detalles relacionados"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-22 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
            >
              <div className="flex flex-col items-center justify-center pt-4 pb-4">
                <svg
                  className="w-8 h-8 mb-3 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click para subir</span> o arrastra los
                  archivos aquí
                </p>
                <p className="text-xs text-gray-500">
                  SVG, PNG, JPG o GIF (Máx. 800x400px)
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                multiple
                accept=".png,.jpg,.jpeg,.gif,.svg"
              />
            </label>
          </div>



          <div className="flex justify-end">
            <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-12 rounded-full">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestionModal;