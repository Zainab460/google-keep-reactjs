import React, { useState } from "react";
import "./Form.css";
import { uid } from "uid";

const Form = (props) => {
  // const [userInput,setUserInput] = useState({
  //   title:"",
  //   text:"",
  // })
  const { edit, selectedNote, handleModal } = props;
  const [title, setTitle] = useState((edit && selectedNote.title) || "");
  const [text, setText] = useState((edit && selectedNote.text) || "");
  const [activeForm, setActiveForm] = useState(edit);

  const titleChangeHandler = (event) => setTitle(event.target.value);
  const textChangeHandler = (event) => {
    setText(event.target.value);
    setActiveForm(true);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    // add data to array
    if (!edit) {
      props.addNote({
        id: uid(),
        title,
        text,
      });
      setTitle("");
      setText("");
      setActiveForm(false);
    } else {
      props.editNote({
        id: selectedNote.id,
        title,
        text,

      })
      handleModal();
    }
  };

  const formClickHandler = () => {
    console.log("form clicked on");
    // create state
    setActiveForm(true);
  };

  return (
    //Based on state output correct form
    <div>
      <div
        className="main-form active-form update-form "
        onClick={formClickHandler}
      >
        <form onSubmit={submitFormHandler} className={activeForm ? "form" : ""}>
          {activeForm && (
            <input
              onChange={titleChangeHandler}
              value={title}
              id="take-note"
              className="take-note"
              type="text"
              placeholder="Title"
            />
          )}
          <input
            onChange={textChangeHandler}
            value={text}
            id="note-title"
            className="note-title"
            type="text"
            placeholder="Take a note..."
          />
          {activeForm ? (
            <div className="sml-icons">
              <div className="fix">
                <div className="add-icons">
                  <div className="tooltip">
                    <span>
                      <i className="material-icons-outlined hover">add_alert</i>
                    </span>
                    <span className="tooltip-text">Remind me</span>
                  </div>
                  <div className="tooltip">
                    <span>
                      <i className="material-icons-outlined hover">
                        person_add
                      </i>
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
              </div>

              <div className="closer">
                <button className="close-btn">Close</button>
              </div>
            </div>
          ) : (
            <div className="sml-icons ">
              <div className="fix">
                <div className="tooltip">
                  <span>
                    <i className="material-icons-outlined hover">check_box</i>
                  </span>
                  <span className="tooltip-text">New List</span>
                </div>
                <div className="tooltip">
                  <span>
                    <i className="material-icons-outlined hover">brush</i>
                  </span>
                  <span className="tooltip-text">New Drawing</span>
                </div>
                <div className="tooltip">
                  <span>
                    <i className="material-icons-outlined hover">image</i>
                  </span>
                  <span className="tooltip-text">New Image</span>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;