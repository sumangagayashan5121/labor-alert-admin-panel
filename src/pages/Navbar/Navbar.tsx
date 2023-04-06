import { Link } from "react-router-dom";
import MenuItems from './MenuItems/MenuItems';
import { menuItems } from './menulist/menuItems';
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="nav-bar">
      <Link to="/">
        <h4 className="header">LABOR ALERT</h4>
      </Link>
      <div className="nav-bar-right">
        <ul className="menus">
          {menuItems.map((menu, index) => {
            const depthLevel = 0;
            return (
              <MenuItems
                items={menu}
                key={index}
                depthLevel={depthLevel}
              />
            );
          })}
        </ul>
      </div>


    </nav>
  );
};

export default Navbar;
