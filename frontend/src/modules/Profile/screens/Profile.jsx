import { useState } from "react";
import SideMenu from "../components/SideMenu";
import General from "../components/General.jsx";
import Orders from "../components/Orders.jsx";
import Payment from "../components/Payment.jsx";
import Settings from "../components/Settings.jsx";
import ShippingAddress from "../components/ShippingAddress.jsx";
// import Help from "../components/Help.jsx";
import Suggestions from "../components/Suggestions.jsx";


const Profile = () => {
  const [selectedOption, setSelectedOption] = useState("general");

  const handleMenuClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="bg-gray-100 h-screen w-screen flex">
      <div className="flex-none">
        <SideMenu onMenuClick={handleMenuClick} />
      </div>

      <div className="flex-grow">
        {selectedOption === "general" && <General />}
        {selectedOption === "orders" && <Orders />}
        {selectedOption === "payment" && <Payment />}
        {selectedOption === "settings" && <Settings />}
        {selectedOption === "shippingAddress" && <ShippingAddress />}

        {/* {selectedOption === "help" && <Help />} */}
        {selectedOption === "suggestions" && <Suggestions />}
      </div>
    </div>
  );
};

export default Profile;
