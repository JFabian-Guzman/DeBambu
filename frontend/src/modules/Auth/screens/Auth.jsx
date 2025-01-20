import LoginForms from '../components/LoginForms';
import background from '../../../assets/loginBackground.jpg';

const Auth = () => {
  return (
    <div
      className="w-screen h-screen bg-blue-100 dark:bg-blue-900 flex items-center justify-center"
      style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <LoginForms />
    </div>
  );
};

export default Auth;
