import React, {Fragment}  from "react";

import ReactDom from "react-dom";
import classes from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

function ModalOverlay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

const portalEl = document.getElementById("overlays");
console.log(portalEl)

function Modal(props) {
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop onClose={props.onHideCart}/>,  portalEl)}
      {
        ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,  portalEl)
      }
    </Fragment>
  );
}

export default Modal;
