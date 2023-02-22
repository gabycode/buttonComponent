import { useState } from "react";
import "../App.css";

export default function Sidebar() {
  const [visible, setVisible] = useState(false);

  const toggleSidebar = () => {
    setVisible(!visible);
  };
  return (
    <div className="sidebar">
      <h1 className="title">
        <span className="red-dev">Dev</span>
        challenges.io
      </h1>
      <span class="material-icons" onClick={toggleSidebar}>
        menu
      </span>
      <div className={`sidebar-items ${visible ? "expanded" : ""}`}>
        <p className="sidebar-item">Colors</p>
        <p className="sidebar-item">Typography</p>
        <p className="sidebar-item">Spaces</p>
        <p className="sidebar-item selected">Buttons</p>
        <p className="sidebar-item">Inputs</p>
        <p className="sidebar-item">Grid</p>
      </div>
    </div>
  );
}
