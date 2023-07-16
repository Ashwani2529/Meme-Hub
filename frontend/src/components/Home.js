import React from "react";
import "../index.css";

const Home = (props) => {
  const {note}=props;

  return (
      <div className="row col-md-3 mx-1">
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
          </div>
        </div>
      </div>
  );
};

export default Home;
