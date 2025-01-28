import { useState } from 'react';
import LoginForms from '../components/LoginForms';
import RegisterForms from '../components/RegisterForms';
import background from '../../../assets/loginBackground.jpg';

const Auth = () => {
  const [selectedForm, setSelectedForm] = useState("login");

  const toggleForm = () => setSelectedForm(prev => (prev === "login" ? "register" : "login"));

  return (
    <div
      className="w-screen h-screen flex items-center justify-center p-4" // Añadido padding
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full max-w-[600px] md:w-[600px] flex items-center justify-center">
        {selectedForm === "login" ? (
          <LoginForms toggleForm={toggleForm} />
        ) : (
          <RegisterForms toggleForm={toggleForm} />
        )}
      </div>
    </div>
  );
};

export default Auth;