import React, { useEffect,useState } from "react";
import "../index.css";

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
      <div className="row col-md-3 mx-1">
        <div className="card">
          <div className="card-body">
          <p>
                <b className="boldy">Name:- </b>
                {note.name} 
              </p>
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
          </div>
        </div>
      </div>
  );
};

export default Home;
