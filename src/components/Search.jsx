import { SearchIcon } from "lucide-react";
const Search = () => {
    return(
         <div className="flex gap-1 mr-20 px-4 bg-[#FFFFFF] py-2 rounded-lg  text-[#9197B3]">
            < SearchIcon/>
            <input type="text" placeholder="Search" className="outline-none" />
          </div>
    );
};

export default Search;