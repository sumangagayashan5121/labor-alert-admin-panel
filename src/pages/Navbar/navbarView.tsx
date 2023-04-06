import { NavBarViewProps } from "./navbarContainer";
import { Link } from "react-router-dom";
import MenuItems from './MenuItems/MenuItems';
import { menuItems } from './menulist/menuItems';
import {
  button, header, menus, nav_bar, nav_bar_right
} from "./navbar.css";
import "./Navbar.css";

const NavBarView = (props: NavBarViewProps): JSX.Element => {
  return (
    <nav className={nav_bar}>
      <Link to="/">
        <h4 className={header}>LABOR ALERT</h4>
      </Link>
      <div className={nav_bar_right}>
        <ul className={menus}>
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
        <button className={button} onClick={async (e) => await props.onSubmit(e)}>LOGOUT</button>
      </div>


    </nav>
  );
};

export { NavBarView };
