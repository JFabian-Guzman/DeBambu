import img from "/home_image.jpg"

const ShopCard = () => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg">
            <a href="#">
                <img className="rounded-t-lg" src={img} alt="Gafas de sol de bambú estilizadas" />
            </a>
            <div className="p-5">
                <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Gafas de Sol  de Bambú 
                </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Diseño natural y liviano para máxima comodidad.
                </p>
                <p className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                ₡5,000 💰
                </p>
            </div>
        </div>
    )
}

export default ShopCard