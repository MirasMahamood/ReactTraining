import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="nav">
      <div>
        <Link to="/department">Department</Link>
      </div>
      <div>
        <Link to="/employee">Employee</Link>
      </div>
      <div>
        <Link to="/logout">Logout</Link>
      </div>
    </nav>
  );
}

export default Menu;
