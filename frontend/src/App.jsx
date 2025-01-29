import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './modules/Shared/screens/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
