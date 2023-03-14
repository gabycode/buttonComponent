import "../App.css";

export default function LastButtonRow() {
  return (
    <div className="last-button-row--container">
      <div className="btns-container">
        <pre className="button-title">&lt;Button color="default" /&gt;</pre>
        <button className="btn-default">Default</button>
      </div>
      <div className="btns-container">
        <pre className="button-title">&lt;Button color="primary" /&gt;</pre>
        <button className="btn-primary">Default</button>
      </div>
      <div className="btns-container">
        <pre className="button-title">&lt;Button color="secondary" /&gt;</pre>
        <button className="btn-secondary">Default</button>
      </div>
      <div className="btns-container">
        <pre className="button-title">&lt;Button color="danger" /&gt;</pre>
        <button className="btn-danger">Default</button>
      </div>
    </div>
  );
}
