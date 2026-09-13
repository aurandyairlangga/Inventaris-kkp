import { BrowserRouter, Route, Routes } from "react-router";
import DashboardPage from "./pages/dashboard/DashboardPage";
import IncomePage from "./pages/produk/IncomePage";
import Layout from "./components/layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path="produk"></Route> 
          <Route path="customers"></Route> 
          <Route path="promote"></Route> 
          <Route path="help"></Route> 
          <Route path="income">
            <Route index element={<IncomePage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
