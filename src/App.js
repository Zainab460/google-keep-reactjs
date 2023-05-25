import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Form from "./components/Form/Form";
import Notes from "./components/Notes/Notes";
import Modal from "./components/Modal/Modal";
// like html elements
const NOTES = [];
const App = () => {
  const [notes, setNotes] = useState(NOTES);
  const [selectedNote, setSelectedNote] = useState({});
  const [isOpenModal, setOpenModal] = useState(false);

  const addNote = (note) => {
    setNotes((prevNotes) => {
      return [...notes, note];
    });
  };
  const editNote = (editedNote) => {
    setNotes((prevNotes) => {
      const newNote = prevNotes.map (note => {
        console.log("before", note)
        if (editedNote.id === note.id) {
          note.title = editedNote.title;
          note.text = editedNote.text;
        } 
        console.log("After", note)
        return note
      })
      return newNote
    });
  }
  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => id !== note.id);
    });
  };
  const handleModal = () => {
    setOpenModal((prevNotes) => {
      // return !prevNotes
      if (prevNotes) {
        return false;
      } else {
        return true;
      }
    });
  };

  return (
    <div>
      <Navbar />
      <Sidebar />
      <Form addNote={addNote} />
      <Notes
        notes={notes}
        deleteNote={deleteNote}
        handleModal={handleModal}
        setSelectedNote={setSelectedNote}
      />
      {isOpenModal && (<Modal isOpenModal={isOpenModal} selectedNote ={selectedNote} handleModal={handleModal} editNote ={editNote}/>)}
      
    </div>
  );
};

export default App;
