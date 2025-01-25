import React, { useState } from "react";

const Product = ({ product }) => {
  const { productName, productPrice, productDescription, productColors, productDetails, productImages } = product;

  const [mainImage, setMainImage] = useState(productImages[0]);

  const changeImage = (src) => {
    setMainImage(src);
  };

  return (
    <div className="bg-gray-100 w-screen h-screen flex items-center justify-center select-none overflow-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8">
            <img
              src={mainImage}
              alt="Product"
              className="w-full h-auto rounded-lg shadow-md mb-4"
            />
            <div className="flex gap-4 py-4 justify-center overflow-x-auto">
              {productImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                  onClick={() => changeImage(image)}
                />
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-2 text-black">{productName}</h2>
            <div className="mb-4">
              <span className="text-2xl font-bold mr-2 text-black">
                {new Intl.NumberFormat('es-CR', { style: 'currency', currency: 'CRC' }).format(productPrice)}
              </span>

            </div>

            <p className="text-gray-700 mb-6">{productDescription} </p>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-black">Color:</h3>
              <div className="flex space-x-2">
                {productColors.map((color, index) => (
                  <button
                    key={index}
                    style={{ backgroundColor: color }}
                    className="w-12 h-12 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2"
                  ></button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1 text-black">Cantidad:</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                defaultValue={1}
                className="w-20 text-center rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
                onInput={(e) => {
                  if (e.target.value < 1) {
                    e.target.value = 1;
                  }
                }}
              />
            </div>



            <div className="flex space-x-4 mb-6">
              <button
                className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                Añadir al carrito
              </button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-black">Detalles:</h3>
              <ul className="list-disc list-inside text-gray-700">
                {productDetails.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
