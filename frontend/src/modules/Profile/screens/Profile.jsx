import SideMenu from "../components/SideMenu";
import General from "../components/General.jsx";
import Orders from "../components/Orders.jsx";
import Payment from "../components/Payment.jsx";

const Profile = () => {
  return (
    <div className="bg-gray-100 h-screen w-screen flex">
      <div className="flex-none">
        <SideMenu />
      </div>

      <div className="flex-grow">
        <Payment />
      </div>
    </div>
  );
};

export default Profile;
