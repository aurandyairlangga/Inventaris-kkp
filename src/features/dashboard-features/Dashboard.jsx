import Search from "@/components/Search";
import StatsCards from "./StatsCards";
import AllCustomers from "./AllCustomers";

const Dashboard = () => {
  return (
    <div>
      <div className="flex justify-between mt-6">
        <div className="flex ml-20 font-medium text-2xl">
          <h1>Hallo Aurandy</h1>
          <h1>👋🏻</h1>
          <p></p>
        </div>
        {/* Bikin jadi component Search Input */}
        <Search />
      </div>

      <StatsCards />

      {/* CARD: All Customers */}
      {/* <Button variant="primary">Primary</Button>
        <Button variant="secondary">Primary</Button>
        <Button variant="tertiary">Primary</Button> */}
      <AllCustomers />
    </div>
  );
};

export default Dashboard;
