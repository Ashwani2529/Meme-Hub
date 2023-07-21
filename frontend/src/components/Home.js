import React, { useEffect,useState } from "react";
// import "../index.css";
import "./post.modulus.css";
const Home = (props) => {
  const {note}=props;
  const [name, setNotes] = useState({name:""});
  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/getall",{
        method:'POST',
        headers:{
          "Content-Type": "application/json"
        },});
        const data = await response.json();
      setNotes(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (

    <div className="container">
    <div id="instaPostCard">
    <div className="columns is-vcentered mb-0 is-mobile" style={{ padding: '14px 16px 0px' }}>
      <div className="column is-1 pr-0" style={{ width: '55px' }}>
      <img id="profilePicture" alt=""  />
      </div>
      <div className="column is-8 pl-0" style={{marginTop:'-54px'}}>
        <span className="label username-text mb-0">
          <span id="textUserName" style={{ fontWeight: 600 }}>                
                 {note.user} 
              </span>
          <span id="verifiedIcon" style={{ color: 'rgb(27, 149, 224)' }}>
            <svg width="14" height="14">
              <use href="/"></use>
            </svg>
          </span>
        </span>
        <p>
            <b className="description-text" id="textDescription"></b>
            {note.tag}
          </p>
      </div>
      <div className="column" style={{ width: '50%', padding: '0px' }}>
        <div className="has-text-right">
          <div className="action-btn"></div>
        </div>
      </div>
    </div>
    <div className="post-image1">
           
          <img src={`../uploads/${note.description}`} alt="photo" />
      
    </div>
    <div className="tag-icon is-hidden" id="tagIconArea">
      <span className="material-icons has-text-white">
        <svg width="12" height="12">
          <use href="/"></use>
        </svg>
      </span>
    </div>
    
    <div className='caption my-3'>
    <p>
           
              {note.title}
             </p>
    </div>
  </div>
  </div>

      // <div className="row col-md-3 mx-1">
      //   <div className="card">
      //     <div className="card-body">
      //     <p>
      //           <b className="boldy">Name:- </b>
      //           {note.name} 
      //         </p>
      //       <p>
      //         <b className="boldy">Caption:- </b>
      //         {note.title}
      //       </p>
      //       <p>
      //         <b className="boldy">Tags:-</b>
      //         {note.tag}
      //       </p>
      //       <p>
      //         <b className="boldy">Meme:-</b>
      //         <img src={`../uploads/${note.description}`} alt="photo" />
      //       </p>
      //     </div>
      //   </div>
      // </div>
  );
};

export default Home;
