import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './modules/Shared/screens/Home'
import Login from './modules/Auth/screens/Auth'
import TermsAndConditions from "./modules/Auth/screens/TermsAndConditions";
import Shop from "./modules/Shared/screens/Shop";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/politics" element={<TermsAndConditions />} />
          <Route path="/shop" element={<Shop/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
