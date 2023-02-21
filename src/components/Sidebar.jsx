import "../App.css";

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <h1 className="title">
        <span className="red-dev">Dev</span>challenges.io
      </h1>
      <div className="sidebar-items">
        <p className="sidebar-item">Colors</p>
        <p className="sidebar-item">Typography</p>
        <p className="sidebar-item">Spaces</p>
        <p className="selected">Buttons</p>
        <p className="sidebar-item">Inputs</p>
        <p className="sidebar-item">Grid</p>
      </div>
    </div>
  );
}
