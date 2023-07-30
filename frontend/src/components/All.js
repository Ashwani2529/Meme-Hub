import React, { useEffect, useContext } from "react";
import notecontext from "./context/notes/notecontext";
import Home from "./Home";
import "../App.css";
const All = (props) => {
  const context = useContext(notecontext);
  const { notes, fetchEverything } = context;

  useEffect(() => {
    fetchEverything();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h2 className="my-3">HOMEPAGE</h2>
      <div className="row my-3">
        {Array.from(notes).map((note) => (
          <Home
            name={note.user}
            key={note._id}
            fetchEverything={fetchEverything}
            showAlert={props.showAlert}
            note={note}
          />
        ))}
        ;
      </div>
    </>
  );
};

export default All;
