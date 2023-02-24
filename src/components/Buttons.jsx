import "../App.css";

export default function Buttons() {
  return (
    <div className="main">
      <h1 className="title">Buttons</h1>

      <div className="button-row">
        <div className="btns-container">
          <pre className="button-subtitle">&lt;Button /&gt;</pre>
          <button>Default</button>
        </div>
        <div className="btns-container">
          <pre className="button-subtitle">&:hover, &:focus</pre>
          <button>Default</button>
        </div>
      </div>

      <div className="button-row">
        <div className="btns-container">
          <pre className="button-subtitle">
            &lt;Button variant="outline" /&gt;
          </pre>
          <button>Default</button>
        </div>
        <div className="btns-container">
          <pre className="button-subtitle">&:hover, &:focus</pre>
          <button>Default</button>
        </div>
      </div>

      <div className="button-row">
        <div className="btns-container">
          <pre className="button-subtitle">&lt;Button variant="text" /&gt;</pre>
          <button>Default</button>
        </div>
        <div className="btns-container">
          <pre className="button-subtitle">&:hover, &:focus</pre>
          <button>Default</button>
        </div>
      </div>
    </div>
  );
}
