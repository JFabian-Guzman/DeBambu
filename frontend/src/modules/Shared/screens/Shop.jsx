import ShopCard from "../components/ShopCard"
import NavBar from "../components/Navbar"

const Shop = () => {
  return (
    <>
    <div className="w-screen h-screen overflow-x-hidden">
      <div className="bg-[url(/bamboo_img.jpg)] bg-cover relative h-80 flex justify-center items-center top-0">
        <NavBar />
        <div className="absolute  top-0 w-full h-full bg-[rgba(0,0,0,0.60)] "></div>
        <h1 className="text-8xl text-white font-bold relative">Tienda</h1>
      </div >
      <div className="place-items-center gap-8 p-8 grid grid-cols-4 w-full min-h-full" >
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
      </div>
    </div>
    </>
  )
}

export default Shop