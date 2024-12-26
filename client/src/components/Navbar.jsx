import { NavLink } from "react-router-dom";
import dentistLogo from "../assets/dentist.png";

export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center mb-6">
        <NavLink to="/">
        <div>
        <img alt="MERN Employee Management App logo" className="h-10 inline" src={dentistLogo}></img>
        <h1 className="text-2xl font-bold ">Employee Manager</h1>
        </div>
        </NavLink>

        <NavLink className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3" to="/create">
          Create Employee
        </NavLink>
      </nav>
    </div>
  );
}
