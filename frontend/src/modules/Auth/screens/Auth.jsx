import { useState } from 'react';
import LoginForms from '../components/LoginForms';
import RegisterForms from '../components/RegisterForms';
import background from '../../../assets/loginBackground.jpg';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div
      className="w-screen h-screen bg-blue-100 dark:bg-blue-900 flex items-center justify-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {isLogin ? (
        <LoginForms toggleForm={toggleForm} />
      ) : (
        <RegisterForms toggleForm={toggleForm} />
      )}
    </div>
  );
};

export default Auth;
