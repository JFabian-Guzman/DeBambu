import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './modules/Shared/screens/Home'
import Login from './modules/Auth/screens/Auth'
import TermsAndConditions from "./modules/Auth/screens/TermsAndConditions";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/politics" element={<TermsAndConditions />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
