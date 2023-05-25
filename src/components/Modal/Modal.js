import React, { useState } from "react";
import "./Modal.css";
import "../Form/Form";
import Form from "../Form/Form";

const Modal = (props) => {
  const { isOpenModal, selectedNote, handleModal,editNote } = props;
  const [isMouseOver, setMouseOver] = useState(false);

  const overForm = () => {
    !isMouseOver && handleModal();
  };
  const handleMouseOverModal = () => {
    setMouseOver(true);
  };
  const handleMouseOutModal = () => {
    setMouseOver(false);
  };
  return (
    <div
      className={`modal ${isOpenModal ? "open-modal" : ""}`}
      onClick={overForm}
    >
      <div
        className="modal-content"
        onMouseOver={handleMouseOverModal}
        onMouseOut={handleMouseOutModal}
      >
        {/* <div className="main-form update-form">
            <form className="form" id="modal-form">
              <input id="modal-title" 
                    className="take-note" 
                    type="text" 
                    placeholder="Title"/>
              <input id="modal-text" 
                     className="note-title" 
                     type="text" 
                     placeholder="Take a note..."/>
              <div className="sml-icons">
                <div className="add-icons">
                  <div className="tooltip">
                    <span>
                      <i className="material-icons-outlined hover">add_alert</i>
                    </span>
                    <span className="tooltip-text">Remind me</span>
                  </div>
                  <div className="tooltip">
                    <span>
                      <i className="material-icons-outlined hover">person_add</i>
                    </span>
                    <span className="tooltip-text">Collaborator</span>
                  </div>
                  <div className="tooltip">
                    <span>
                      <i className="material-icons-outlined hover">palette</i>
                    </span>
                    <span className="tooltip-text">Change Color</span>
                  </div>
                  <div className="tooltip">
                    <span>
                      <i className="material-icons-outlined hover">image</i>
                    </span>
                    <span className="tooltip-text">Add Image</span>
                  </div>
                  <div className="tooltip">
                    <span>
                      <i className="material-icons-outlined hover">archive</i>
                      </span>
                    <span className="tooltip-text">Archive</span>
                  </div>
                  <div className="tooltip">
                    <span>
                      <i className="material-icons-outlined hover">more_vert</i>
                    </span>
                    <span className="tooltip-text">More</span>
                  </div>
                  <div className="tooltip">
                    <span>
                      <i className="material-icons-outlined hover">undo</i>
                    </span>
                    <span className="tooltip-text">Undo</span>
                  </div>
                  <div className="tooltip">
                    <span>
                      <i className="material-icons-outlined hover">redo</i>
                    </span>
                    <span className="tooltip-text">Redo</span>  
                  </div>
                </div>
                <div className="closer">
                  <button className="close-btn" id="modal-btn">Close</button>
                </div>
              </div>
            </form>
          </div> */}
        <Form selectedNote={selectedNote} handleModal={handleModal} editNote ={editNote} edit />
      </div>
    </div>
  );
};

export default Modal;