import React, { useContext ,useState,useEffect} from "react";
import "../index.css";
import "./post.modulus.css";
import notecontext from "./context/notes/notecontext";

const Noteitem = (props) => {
  const context=useContext(notecontext);
  const { note,updateNote} = props;
  const {deleteNote} = context;

  const [credentials, setCredentials] = useState({
    name: ""
  });
  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    try {
      
      const response = await fetch("http://localhost:5000/api/auth/getuser",{
        method:'POST',
        headers:{
          "Content-Type": "application/json"
        },
        body:JSON.stringify({"email":localStorage.getItem('email')})
      });
      const data = await response.json();
      setCredentials(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    // <div className="row col-md-3 mx-2">
    //   <div className="card">
    <div className="container">
      <div id="instaPostCard">
      <div className="columns is-vcentered mb-0 is-mobile" style={{ padding: '14px 16px 0px' }}>
        <div className="column is-1 pr-0" style={{ width: '55px' }}>
        <img id="profilePicture" alt=""  />
        </div>
        <div className="column is-8 pl-0" style={{marginTop:'-54px'}}>
          <span className="label username-text mb-0">
            <span id="textUserName" style={{ fontWeight: 600 }}>{credentials.name}</span>
            <span id="verifiedIcon" style={{ color: 'rgb(27, 149, 224)' }}>
              <svg width="14" height="14">
                <use href="/"></use>
              </svg>
            </span>
          </span>
          <p>
           
            {note.tag}
          </p>
        </div>
        <div className="column" style={{ width: '50%', padding: '0px' }}>
          <div className="has-text-right">
            <div className="action-btn"></div>
          </div>
        </div>
      </div>
      {/* <div className="post-image1">
            <img src={`../uploads/${note.description}`} alt="photo" />
        </div> */}

<div className="post-image1">
        <img id="postImage" alt=""  src='https://images.unsplash.com/photo-1689625294577-6f0c8fc49dcf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'/>
      </div>
      <div className="tag-icon is-hidden" id="tagIconArea">
        <span className="material-icons has-text-white">
          <svg width="12" height="12">
            <use href="/"></use>
          </svg>
        </span>
      </div>
      <div id="imageCountBubblesArea">  <i className="far fa-trash-alt" onClick={()=>{deleteNote(note._id);props.showAlert("Deleted","success");}}></i>
          <i className="far fa-edit" onClick={()=>{updateNote(note);}}></i></div>
      <div className='caption my-2'>
      <p>
           
            {note.title}
          </p>
      </div>
    </div>
    </div>

      //   <div className="card-body">
      //     <p>
      //       <b className="boldy">Caption:- </b>
      //       {note.title}
      //     </p>
      //     <p>
      //       <b className="boldy">Tags:-</b>
      //       {note.tag}
      //     </p>
      //     <p>
      //       <b className="boldy">Meme:-</b>
      //       <img src={`../uploads/${note.description}`} alt="photo" />
      //     </p>
      //     <i className="far fa-trash-alt" onClick={()=>{deleteNote(note._id);props.showAlert("Deleted","success");}}></i>
      //     <i className="far fa-edit" onClick={()=>{updateNote(note);}}></i>
      //   </div>
      // </div>
    // </div>
  );
};

export default Noteitem;
