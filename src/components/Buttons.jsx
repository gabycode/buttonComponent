import { useState } from "react";
import "../App.css";

export default function Buttons() {
  const [disable, setDisable] = useState(false);

  return (
    <div className="main">
      <h1 className="title">Buttons</h1>

      <div className="button-row">
        <div className="btns-container">
          <pre className="button-title normal">&lt;Button /&gt;</pre>
          <button className="normal">Default</button>
        </div>
        <div className="btns-container">
          <pre className="button-subtitle">&:hover, &:focus</pre>
          <button className="normal">Default</button>
        </div>
      </div>

      <div className="button-row">
        <div className="btns-container">
          <pre className="button-title outline">
            &lt;Button variant="outline" /&gt;
          </pre>
          <button className="outline">Default</button>
        </div>
        <div className="btns-container">
          <pre className="button-subtitle">&:hover, &:focus</pre>
          <button className="outline">Default</button>
        </div>
      </div>

      <div className="button-row">
        <div className="btns-container">
          <pre className="button-title text">
            &lt;Button variant="text" /&gt;
          </pre>
          <button className="text">Default</button>
        </div>
        <div className="btns-container">
          <pre className="button-subtitle">&:hover, &:focus</pre>
          <button className="text">Default</button>
        </div>
      </div>

      <div className="button-row">
        <div className="btns-container">
          <pre className="button-title disableShadow">
            &lt;Button disableShadow /&gt;
          </pre>
          <button disableShadow className="disableShadow">
            Default
          </button>
        </div>
      </div>

      <div className="button-row">
        <div className="btns-container">
          <pre className="button-title disabled">
            &lt;Button {disable ? "disabled" : ""} /&gt;
          </pre>
          <button
            onClick={() => setDisable(!disable)}
            className={disable ? "disable" : "not-disable"}>
            {disable ? "Disabled" : "Default"}
          </button>
        </div>
      </div>
    </div>
  );
}
