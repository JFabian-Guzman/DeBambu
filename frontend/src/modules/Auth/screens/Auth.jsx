import { useState, useRef } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import LoginForms from '../components/LoginForms';
import RegisterForms from '../components/RegisterForms';
import background from '../../../assets/loginBackground.jpg';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  
  const toggleForm = () => setIsLogin(!isLogin);
  
  const transitionRef = useRef(null);

  return (
    <div
      className="w-screen h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <SwitchTransition>
        <CSSTransition
          nodeRef={transitionRef}
          key={isLogin}
          timeout={300}
          classNames={{
            enter: 'opacity-0 translate-y-4',
            enterActive: 'opacity-100 translate-y-0 transition duration-200',
            exit: 'opacity-100 translate-y-0',
            exitActive: 'opacity-0 -translate-y-4 transition duration-200',
          }}
          unmountOnExit
        >
          <div
            ref={transitionRef}
            style={{ minWidth: '700px' }} // Prevent shrinking by setting minHeight
            className="flex items-center justify-center" // Ensures proper alignment
          >
            {isLogin ? (
              <LoginForms toggleForm={toggleForm} />
            ) : (
              <RegisterForms toggleForm={toggleForm} />
            )}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default Auth;
