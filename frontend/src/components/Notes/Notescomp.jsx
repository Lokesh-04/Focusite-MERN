import React, { useState } from "react";

const Notescomp = () => {
  const [notes, setNotes] = useState([{ id: 1, text: "" }]);
  const [newNote, setNewNote] = useState("");

  const handleNoteChange = (id, newText) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, text: newText } : note
      )
    );
  };

  const handleAddNote = () => {
    const newId = notes.length + 1;
    setNotes((prevNotes) => [...prevNotes, { id: newId, text: "" }]);
  };

  const handleClearNote = (id) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id && id !== notes.length ? { ...note, text: "" } : note
      )
    );
  };

  const handleDeleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <div>
      <h2>Notes</h2>
      {notes.map((note) => (
        <div key={note.id}>
          <textarea
            rows="5"
            cols="50"
            placeholder="Type your notes here..."
            value={note.id === notes.length ? newNote : note.text}
            onChange={(e) =>
              note.id === notes.length
                ? setNewNote(e.target.value)
                : handleNoteChange(note.id, e.target.value)
            }
          />
          <button onClick={() => handleClearNote(note.id)}>Clear</button>
          <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
        </div>
      ))}
      <button onClick={handleAddNote}>Add Note</button>
    </div>
  );
};

export default Notescomp;
