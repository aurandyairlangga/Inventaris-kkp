import { NavLink } from "react-router";
import cn from "../utils/cn";

const Menu = ({ title, icon, to = "/" }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "flex items-center p-1.5 gap-3.5 text-lg  hover:bg-indigo-700 hover:text-white rounded-lg",
          isActive ? "text-green-500" : "",
        )
      }
    >
      {icon}
      {title}
    </NavLink>
  );
};

export default Menu;
