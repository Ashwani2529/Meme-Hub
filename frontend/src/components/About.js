import React from "react";
import "../index.css";
export default function About(props) {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white",
  };
 
  
  return (
    <div className="container"  style={{ backgroundImage: `url(${require('./images/img1.jpg')})` }}>
      <h1
        className="my-3"
        style={{ backgroundcolor: props.mode === "dark" ? "white" : "#042743",color:"black" }}
      >

<i class="bi bi-dash-lg"></i><i class="bi bi-dash-lg"></i> About MemeHUB <i class="bi bi-dash-lg"></i><i class="bi bi-dash-lg"></i>
      </h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item my-2">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Who We Are <span role="img" aria-label="smiley face">
                🗿
              </span></strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            Welcome to MemeHUB, the ultimate destination for meme enthusiasts! Our platform empowers users to express their creativity through hilarious memes, connect with fellow meme lovers, and engage in lively conversations. {" "}
           
            </div>
          </div>
        </div>
        <div className="accordion-item my-2">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Create & Share Memes <i class="bi bi-file-plus"></i></strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            Unleash your imagination! Create an account on MemeHUB and effortlessly share your meme masterpieces with the world. Craft your memes with captions, tags, and the perfect image. With seamless integration into MongoDB, your creations are securely stored and ready to spread laughter.
            </div>
          </div>
        </div>
        <div className="accordion-item my-2">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Profile Showcase <i class="bi bi-person-badge"></i></strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            Your meme journey, your profile. Our Profile section gives you a personalized space to manage your account details. Showcase your meme collection, track your interactions, and stay updated with your activity history. Express yourself through your profile and connect with others who share your sense of humor.
            </div>
          </div>
        </div>
        <div className="accordion-item my-2">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <strong>Community Interaction <i class="bi bi-people-fill"></i></strong>
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            The heartbeat of MemeHUB is our vibrant community. Our homepage is a melting pot of creativity, where you can dive into a diverse range of memes. Whether you're showcasing your own creations or discovering gems from fellow users, there's always something to enjoy.
            </div>
          </div>
        </div>
        <div className="accordion-item my-2">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              <strong>Chat & Connect <i class="bi bi-chat-left-text-fill"></i></strong>
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            Got something to say? Our integrated chat feature lets you interact with fellow MemeHUB users in real-time. Engage in lively discussions, exchange meme-making tips, or simply have a good laugh. Connect with meme lovers from all walks of life and build lasting connections.
            </div>
          </div>
        </div>
        <div className="accordion-item my-2" >
          <h2 className="accordion-header" id="headingSix">
            <button 
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              <strong  style={{marginLeft:'48%'}}><i class="bi bi-suit-heart-fill"></i></strong>
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            MemeHUB isn't just a platform; it's a celebration of humor and creativity. Join us today and be part of a community that believes in the power of laughter and connection. Share your memes, make friends, and let's create a meme revolution together!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
