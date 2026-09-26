import { BrowserRouter, Route, Routes } from "react-router";
import DashboardPage from "./pages/dashboard/DashboardPage";
import Layout from "./layouts/MainLayout";
import ProdukPage from "./pages/Produk/ProdukPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path="produk" element={<ProdukPage />} />
          <Route path="customers"></Route>
          <Route path="promote"></Route>
          <Route path="help"></Route>
          <Route path="inventaris"></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
