import SideMenu from "../components/SideMenu";
import General from "../components/General.jsx";

const Profile = () => {
  return (
    <div className="bg-gray-100 h-screen w-screen flex">
      <div className="flex-none">
        <SideMenu />
      </div>

      <div className="flex-grow">
        <General />
      </div>
    </div>
  );
};

export default Profile;
