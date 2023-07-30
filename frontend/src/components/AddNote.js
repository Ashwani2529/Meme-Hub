import React, { useContext, useState } from "react";
import "../index.css";
import notecontext from "./context/notes/notecontext";

const AddNote = (props) => {
  const context = useContext(notecontext);
  const { addNote } = context;
  const [note, setNote] = useState({
    title: "",
    tag: "",
    description: "",
    imagePreview: null,
  });

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.files) {
      const reader = new FileReader();
      const File = e.target.files[0];
      reader.readAsDataURL(File);
      reader.onload = () => {
        addNote(note.title, note.tag, reader.result);
        setNote({ title: "", tag: "", description: "", imagePreview: null });
        props.showAlert("File Added", "success");
      };
    } else {
      console.log("file null hai");
    }
  };

  return (
    <>
      <div className="container my-5">
        <h1 className="heading">
          <b>Upload New Meme</b>
        </h1>
      </div>
      <div className="container">
        <form id="form">
          <div className="col-sm-6 mx-1">
            <label id="sr-only" htmlFor="title">
              Caption
            </label>
            <textarea
              className="form-control"
              id="title"
              value={note.title}
              rows="4"
              placeholder=""
              onChange={(e) => setNote({ ...note, title: e.target.value })}
              required
            ></textarea>
          </div>
          <div className="col-sm-4 mx-1 my-4">
            <label id="sr-only" htmlFor="tag">
              Tags
            </label>
            <textarea
              className="form-control"
              value={note.tag}
              id="tag"
              rows="2"
              placeholder="#"
              onChange={(e) => setNote({ ...note, tag: e.target.value })}
            ></textarea>
          </div>
          <div className="form-group col-sm-4 my-4">
            <label id="descriptionLabel" htmlFor="fileInput">
              Image
            </label>
            <input
              type="file"
              className="form-control"
              name="description"
              id="fileInput"
              onChange={handleClick}
              required
            />
          </div>
          {note.imagePreview && (
            <div className="form-group col-sm-4 my-4">
              <label htmlFor="image-preview">Image Preview:</label>
              <img
                src={note.imagePreview}
                alt="Preview"
                className="img-fluid"
              />
            </div>
          )}
          <button
            type="submit"
            className="btn btn-primary my-1"
            onClick={handleClick}
          >
            Post
          </button>
        </form>
      </div>
    </>
  );
};

export default AddNote;
