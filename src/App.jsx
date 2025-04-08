import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Catalog } from "./pages/catalog/Catalog";
import { Auth } from "./pages/auth/Auth";
import { Checkout } from "./pages/check-out/Checkout";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Catalog />}/>
      <Route path="/auth" element={<Auth/>}/>
      <Route path="/check-out" element={<Checkout/>}/>
    </Routes>
    </BrowserRouter>
  );
}
export default App;

