import React from "react";
import "./Modal.css";

const Modal = ({ show, closeModalHandler, }) => {
    return (
        <div className="modal-wrapper"
        style={{
            opacity: show ? '1' : '0'
        }}
        >
            <div className="modal-header">
                <span className="close-modal-btn">back arrow</span>
            </div>
            <div className="modal-content">
                <div className="modal-body">
                    <h4>Modal</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="modal-footer">
                    <button className="btn-cancel">Set Task</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;