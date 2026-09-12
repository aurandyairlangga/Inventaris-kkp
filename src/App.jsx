import Sidebar from "./components/Sidebar";
import Table from "./components/Table";
import Cards from "./components/Cards";
import Search from "./components/Search";

const App = () => {
  return (
    <div className="flex h-dvh overflow-hidden">
      <Sidebar />
      <div className="overflow-y-auto w-full px-3 pb-5">
        {/* Header */}
        <div className="flex justify-between mt-6">
          <div className="flex ml-20 font-medium text-2xl">
            <h1>Hallo Aurandy</h1>
            <h1>👋🏻</h1>
            <p></p>
          </div>
          {/* Bikin jadi component Search Input */}
          <Search />
        </div>

        {/* CARD */}
        {/* Card nya dibikin jadi component (biar bisa dipake dibawah juga) */}

        {/* Total customer, member dan active now dibikin jadi 1 component */}

        {/* Total Customers */}
        {/* Members */}
        {/* Active Now */}
        <Cards />

        {/* CARD: All Customers */}
        <Table />
      </div>
    </div>
  );
};

export default App;
