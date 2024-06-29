import { ReactElement } from "react";
import { Link } from "react-router-dom";

type TSidebarSubMenu = {
  subMenu: string;
  isActive: string;
  url: string;
};

export default function SidebarSubMenu({ subMenu, isActive, url }: TSidebarSubMenu): ReactElement {
  return (
    <>
      <li className={isActive == "true" ? "list-group-item list-sub-menu active" : "list-group-item list-sub-menu"}>
        <Link to={url} className="nav-link fw-bold">
          {subMenu}
        </Link>
      </li>
    </>
  );
}