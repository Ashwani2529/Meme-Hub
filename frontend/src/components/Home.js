import React, { useEffect, useState } from "react";
import "./post.modulus.css";
const Home = (props) => {
  const { note } = props;
  const [names, setNames] = useState([]);
  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line
  }, []);

  const fetchUser = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/getall", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      setNames(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <div id="instaPostCard">
        <div
          className="columns is-vcentered mb-0 is-mobile"
          style={{ padding: "14px 16px 0px" }}
        >
          <div className="column is-1 pr-0" style={{ width: "55px" }}>
            <img id="profilePicture" alt="" />
          </div>
          <div className="column is-8 pl-0" style={{ marginTop: "-54px" }}>
            <span className="label username-text mb-0">
              {names.map((name, index) => (
                <span key={index}>
                  {name[0]}
                  {index !== names.length - 1}
                </span>
              ))}
              <span id="verifiedIcon" style={{ color: "rgb(27, 149, 224)" }}>
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
          <div className="column" style={{ width: "50%", padding: "0px" }}>
            <div className="has-text-right">
              <div className="action-btn"></div>
            </div>
          </div>
        </div>
        <div className="post-image1">
          <img
            className="imagebox"
            src={note.description}
            alt="Uploaded"
            style={{
              justifyContent: "center",
              objectFit: "cover",
              margin: "2px",
            }}
          />
        </div>
        <div className="tag-icon is-hidden" id="tagIconArea">
          <span className="material-icons has-text-white">
            <svg width="12" height="12">
              <use href="/"></use>
            </svg>
          </span>
        </div>

        <div className="caption my-3">
          <p>{note.title}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
