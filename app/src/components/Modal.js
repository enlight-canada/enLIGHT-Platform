import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
  return ReactDOM.createPortal(
    <div onClick={} className="ui dimmer modals visible active">
      <div onClick={e => e.stopPropagation()} className="ui standard modal visible active">
        <div className="header">Modal Title</div>
        <div className="content">
          Modal content -> Use this modal as a CONFIRM delete screen
        </div>
        <div className="actions">
          Modal Actions like buttons to accept or cancel
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;