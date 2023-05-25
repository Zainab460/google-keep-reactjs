import Note from "./Note";
import "./Notes.css";

const Notes = (props) => {
  const { notes, deleteNote, handleModal, setSelectedNote } = props;

  return (
    <div className="notes">
      {notes.length === 0 ? (
        <div className="notes">
          <p>Notes you add appear here</p>
        </div>
      ) : (
        notes.map((note, index) => (
          <Note
            key={index}
            note={note}
            // id={note.id}
            // title={note.title}
            // text={note.text}
            deleteNote={deleteNote}
            handleModal={handleModal}
            setSelectedNote={setSelectedNote}
          />
        ))
      )}
      {/* <Note id = {notes[0].id} title = {notes[0].title} text ={notes[0].text}/> */}
    </div>
  );
};

export default Notes;
