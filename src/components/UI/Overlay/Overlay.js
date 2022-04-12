import ReactDOM from "react-dom";
import classes from "./Overlay.module.css";

const Overlay = () => {
  const Backdrop = (props) => {
    return <div className={classes.backdrop} />;
  };

  const OverlayModal = (props) => {
    return (
      <div className={classes.overlayModal}>
        <div className={classes.overlayContent}>{props.children}</div>
      </div>
    );
  };

  const portalEl = document.getElementById("overlay");

  const Overlay = (props) => {
    return (
      <>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalEl)}
        {ReactDOM.createPortal(
          <OverlayModal>{props.children}</OverlayModal>,
          portalEl
        )}
      </>
    );
  };
};

export default Overlay;
