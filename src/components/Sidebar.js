import { NavLink } from "react-router-dom";
import { UserIcon, BookOpenIcon, CogIcon } from "@heroicons/react/outline";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white fixed">
      <nav className="space-y-4 p-4">
        <NavLink to="/admin" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
          <UserIcon className="w-6 h-6" />
          <span>Admin</span>
        </NavLink>
        <NavLink to="/teacher" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
          <BookOpenIcon className="w-6 h-6" />
          <span>Teacher</span>
        </NavLink>
        <NavLink to="/student" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
          <CogIcon className="w-6 h-6" />
          <span>Student</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
