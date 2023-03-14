import { useState } from "react";
import "../App.css";
import LastButtonRow from "./LastButtonRow";

export default function Buttons() {
  const [disable, setDisable] = useState(false);
  const [textDisable, setTextDisable] = useState(false);
  const [iconOnEnd, setIconOnEnd] = useState(false);
  const [size, setSize] = useState("small");

  const handleClick = () => {
    if (size === "small") {
      setSize("medium");
    } else if (size === "medium") {
      setSize("large");
    } else {
      setSize("small");
    }
  };

  return (
    <div className="main">
      <h1 className="title">Buttons</h1>

      <div className="button-row">
        <div className="btns-container">
          <pre className="button-title normal">&lt;Button /&gt;</pre>
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
      </div>

      <div className="button-row">
        <div className="btns-container">
          <pre className="button-title text">
            &lt;Button variant="text" /&gt;
          </pre>
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
          <pre className="button-title text-disabled">
            &lt;Button{disable ? " disabled" : ""} /&gt;
          </pre>
          <button
            onClick={() => setDisable(!disable)}
            className={disable ? "disable" : "not-disable"}>
            {disable ? "Disabled" : "Default"}
          </button>
        </div>
        <div className="btns-container">
          <pre className="button-title disabled">
            &lt;Button variant="text"{textDisable ? " disabled" : ""} /&gt;
          </pre>
          <button
            onClick={() => setTextDisable(!textDisable)}
            className={textDisable ? " disable" : "text-not-disable"}>
            {textDisable ? "Disabled" : "Default"}
          </button>
        </div>
      </div>

      <div className="button-row">
        <div className="btns-container">
          <pre className="button-title">
            &lt;Button {iconOnEnd ? "startIcon=" : "endIcon="}"fa-solid
            fa-cart-shopping" /&gt;
          </pre>
          <button
            onClick={() => setIconOnEnd(!iconOnEnd)}
            className="btn-icons button-with-icon">
            {iconOnEnd ? (
              <>
                <i className="fa-solid fa-cart-shopping"></i>Default
              </>
            ) : (
              <>
                Default
                <i className="fa-solid fa-cart-shopping"></i>
              </>
            )}
          </button>
        </div>
      </div>

      <div className="button-row">
        <div className="btns-container">
          <pre className="button-title">
            &lt;Button size="{`${size}`}" /&gt;
          </pre>
          <button className={`btn-sizes button-${size}`} onClick={handleClick}>
            Default
          </button>
        </div>
      </div>

      <div className="button-row">
        <LastButtonRow />
      </div>
    </div>
  );
}
