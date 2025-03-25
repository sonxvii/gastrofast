import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Catalog } from "./pages/catalog/Catalog"
import { Order } from "./pages/order/Order"
// import { Authorization } from "./pages/authorization/Authorization"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Catalog />}/>
      <Route path="/order" element={<Order/>}/>
      {/* <Route path="/auth" element={<Authorization/>}/> */}
    </Routes>
    </BrowserRouter>
  );
}
export default App;

