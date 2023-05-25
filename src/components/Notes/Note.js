import React, { useState } from "react";
const Note = (props) => {
  const { handleModal, note, setSelectedNote } = props;
  const [activeHover, setHover] = useState(false);

  const noteChangeHandler = () => {
    handleModal();
    setSelectedNote(note);
  };

  const hoverHandler = () => {
    setHover(true);
  };
  const hoverOutHandler = () => {
    setHover(false);
  };
  const deleteHandler = () => {
    props.deleteNote(props.id);
  };

  return (
    <div
      className="note"
      id={note.id}
      onClick={noteChangeHandler}
      onMouseOver={hoverHandler}
      onMouseOut={hoverOutHandler}
    >
      {activeHover && (
        <span>
          <i className="material-icons check-circle">check_circle</i>
        </span>
      )}

      <div className="title">{note.title}</div>
      <div className="text">{note.text}</div>

      <div
        className="note-footer"
        style={{ visibility: activeHover ? "visible" : "hidden" }}
      >
        <div className="tooltip">
          <span className="space">
            <i className="material-icons-outlined hover">add_alert</i>
          </span>
          <span className="tooltip-text">Remind me</span>
        </div>
        <div className="tooltip">
          <span className="space">
            <i className="material-icons-outlined hover">person_add</i>
          </span>
          <span className="tooltip-text">Collaborator</span>
        </div>
        <div className="tooltip">
          <span className="space">
            <i className="material-icons-outlined hover">palette</i>
          </span>
          <span className="tooltip-text">Change Color</span>
        </div>
        <div className="tooltip">
          <span className="space">
            <i className="material-icons-outlined hover">image</i>
          </span>
          <span className="tooltip-text">Add Image</span>
        </div>
        <div className="tooltip archive" onClick={deleteHandler}>
          <span className="space">
            <i className="material-icons-outlined hover">archive</i>
          </span>
          <span className="tooltip-text ">Archive</span>
        </div>
        <div className="tooltip">
          <span className="space">
            <i className="material-icons-outlined hover">more_vert</i>
          </span>
          <span className="tooltip-text">More</span>
        </div>
      </div>
    </div>
  );
};
export default Note;