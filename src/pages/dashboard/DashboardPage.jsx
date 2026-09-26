

import AllCustomers from "../../features/dashboard/AllCustomers";
import Cards from "../../components/Cards";

const DashboardPage = () => {
  return (
   <div><div className="flex justify-between mt-6">
          <div className="flex ml-20 font-medium text-2xl">
            <h1>Hallo Aurandy</h1>
            <h1>👋🏻</h1>
            <p></p>
          </div>
          {/* Bikin jadi component Search Input */}
          <search />
        </div>

        <Cards />

        {/* CARD: All Customers */}
        {/* <Button variant="primary">Primary</Button>
        <Button variant="secondary">Primary</Button>
        <Button variant="tertiary">Primary</Button> */}
        <AllCustomers />
      </div>
  );
};

export default DashboardPage;

 
