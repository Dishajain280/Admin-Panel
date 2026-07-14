import React from "react";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
  BsX,
} from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
  openSidebarToggle: boolean;
  OpenSidebar: () => void;
}

function Sidebar({ openSidebarToggle, OpenSidebar }: SidebarProps) {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" /> SHOP
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          <BsX />
        </span>
      </div>

      <ul className="sidebar-list">
        <li className={`sidebar-list-item ${isActive("/")}`}>
          <Link to="/" onClick={openSidebarToggle ? OpenSidebar : undefined}>
            <BsGrid1X2Fill className="icon" /> Dashboard
          </Link>
        </li>
        <li className={`sidebar-list-item ${isActive("/product")}`}>
          <Link to="/product" onClick={openSidebarToggle ? OpenSidebar : undefined}>
            <BsFillArchiveFill className="icon" /> Products
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="#" style={{ cursor: "not-allowed", opacity: 0.6 }}>
            <BsFillGrid3X3GapFill className="icon" /> Categories
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="#" style={{ cursor: "not-allowed", opacity: 0.6 }}>
            <BsPeopleFill className="icon" /> Customers
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="#" style={{ cursor: "not-allowed", opacity: 0.6 }}>
            <BsListCheck className="icon" /> Inventory
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="#" style={{ cursor: "not-allowed", opacity: 0.6 }}>
            <BsMenuButtonWideFill className="icon" /> Reports
          </Link>
        </li>
        <li className={`sidebar-list-item ${isActive("/settings")}`}>
          <Link to="/settings" onClick={openSidebarToggle ? OpenSidebar : undefined}>
            <BsFillGearFill className="icon" /> Settings
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;