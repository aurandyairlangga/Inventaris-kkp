

const Menu = ({ title, icon }) => {
  return (
    <div className="flex items-center p-1.5 gap-3.5 text-lg  hover:bg-indigo-700 hover:text-white rounded-lg">
      {icon}
      {title}
    </div>

    
  );
};

export default Menu;
