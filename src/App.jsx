import { BrowserRouter, Route, Routes } from "react-router";
import DashboardPage from "./pages/dashboard/DashboardPage";
import Layout from "./layouts/main/MainLayout";
import ProductPage from "./pages/product/ProductPage";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="dataAsset"></Route>
          <Route path="borrowing"></Route>
          <Route path="maintenance"></Route>
          <Route path="help"></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
