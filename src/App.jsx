import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import { NavBar } from "./components/navBar/NavBar";
import { ItemDetailContainer } from "./components/containers/itemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/containers/itemListContainer/ItemListContainer";
import { PageNotFound } from "./components/pageNotFound/PageNotFound";
import { Cart } from "./components/containers/cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/detail/:productId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<PageNotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
