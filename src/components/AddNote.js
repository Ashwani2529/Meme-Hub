import React,{useContext,useState} from 'react';
import "../index.css";
import notecontext from "./context/notes/notecontext";
// import { toHaveDescription } from '@testing-library/jest-dom/dist/matchers';
const AddNote=(props)=> {
    const context = useContext(notecontext);
  const {addNote } = context;
  const [note, setNote]= useState({title:"",tag:"",description:""})
  const handleClick=(e)=>{
    e.preventDefault();
    addNote(note.title,note.tag,note.description);
    setNote({title: "",  tag: "",description: ""});
    props.showAlert("File Added","success");
  }
  
  const onChange=(e)=>{ 
    setNote({...note,[e.target.id]:e.target.value,[e.target.name]:e.target.value})
  }
  return (
  <>
    <div className="container my-5">
    <h1 className="heading">
      <b>Upload New Meme</b>
    </h1>
  </div>
  <div className='container'>
  <form id="form" method="post" encType='multiport/form-data'>
    <div className="col-sm-6 mx-1">
      <label id="sr-only" htmlFor="title">
        Caption
      </label>
      <textarea
        className="form-control"
        id="title"
        value={note.title}
        rows="4" // Increase the number of rows to increase the height
        placeholder=""
        onChange={onChange}
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
        rows="2" // Increase the number of rows to increase the height
        placeholder="#"
        onChange={onChange}
      ></textarea>
    </div>
    <div className="form-group col-sm-4 my-4">
      <label id="description" htmlFor="description">
        Image
      </label>
      <input
        type="file"
        className="form-control"
        name="description"
        id="description"
        value={note.description}
        onChange={onChange}
        required
      />
    </div>
    <button type="submit" className="btn btn-primary my-1" onClick={handleClick}>
      Post
    </button>
  </form>
  </div>
  </>
  )
}

export default AddNote