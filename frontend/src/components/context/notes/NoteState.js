import notecontext from "./notecontext";
import React, {useEffect, useState } from "react";
const NoteState = (props) => {
  const host = "http://localhost:5000";
  const initNotes = [];
  const [notes, setNotes] = useState(initNotes);
 
  useEffect(() => {
    fetchEverything();
    // eslint-disable-next-line
  }, []);

   //fetchEverything
  const fetchEverything = async () => {
    const response = await fetch(`${host}/api/notes/fetcheverything`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  //fetchNotes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      }
    });
    const json = await response.json();
    setNotes(json);
  };
  //Add Note
  const addNote = async (title, tag, description) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "auth-token":localStorage.getItem('token')},
      body: JSON.stringify({ title, tag, description }),
    });
    const note = await response.json();
    // console.log(note);
    setNotes([...notes, note]);
  };
  //Delete Note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')      }
    });
    const json=response.json();
    console.log(json);
    const newNotes = notes.filter((note) => {
      return note._id !== id
    })
    setNotes(newNotes);
  };
  const getUser=async(id)=>{
    const response=await fetch(`${host}/api/auth/getuser/${id}`,{
      method:"GET",
      headers:{
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')    },
      
    });const json = await response.json();
    setNotes(json);
  }
  //Edit Note
  const editNote = async (id, title, tag, description) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')      },
      body: JSON.stringify({ title, tag, description })
    });
    const json = await response.json();
    console.log(json);
    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].tag = tag;
        newNotes[index].description = description;
        break;
      }
    }
    setNotes(newNotes);
  }
  return (
    <notecontext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes,fetchEverything,getUser }}>
      {props.children}
    </notecontext.Provider>
  )
}
export default NoteState;