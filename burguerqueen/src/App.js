import { BrowserRouter, Routes, Route } from "react-router-dom";
import Order from "./components/Order/Order"
import InProcess from "./components/InProcess/InProcess";
import NotFound from "./components/NotFound/NotFound";
import NavBar from "./components/NavBar/NavBar"


function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={ <Order/> } />
        <Route path="/InProcess" element={ <InProcess/> } />
        <Route path="*" element={ <NotFound/> } />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
