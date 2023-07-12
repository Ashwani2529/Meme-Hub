import React, { useContext } from "react";
import "../index.css";
import notecontext from "./context/notes/notecontext";

const Noteitem = (props) => {
  const context=useContext(notecontext);
  const { note,updateNote} = props;
  const {deleteNote} = context;
  return (
    <div className="row col-md-3 mx-2">
      <div className="card">
        <div className="card-body">
          <p>
            <b className="boldy">Caption:- </b>
            {note.title}
          </p>
          <p>
            <b className="boldy">Tags:-</b>
            {note.tag}
          </p>
          <p>
            <b className="boldy">Meme:-</b>
            <img src={`../uploads/${note.description}`} alt="photo" />
          </p>
          <i className="far fa-trash-alt" onClick={()=>{deleteNote(note._id);props.showAlert("Deleted","success");}}></i>
          <i className="far fa-edit" onClick={()=>{updateNote(note);}}></i>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
