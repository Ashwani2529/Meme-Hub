import React from 'react';
import "./post.modulus.css";
function Postcard() {
  return (
    <div className="container">
    <div id="instaPostCard">
      <div className="columns is-vcentered mb-0 is-mobile" style={{ padding: '14px 16px 0px' }}>
        <div className="column is-1 pr-0" style={{ width: '55px' }}>
        <img id="profilePicture" alt=""  />

  
        </div>
        <div className="column is-8 pl-0" style={{marginTop:'-54px'}}>
          <span className="label username-text mb-0">
            <span id="textUserName" style={{ fontWeight: 600 }}>Prashant Pal</span>
            <span id="verifiedIcon" style={{ color: 'rgb(27, 149, 224)' }}>
              <svg width="14" height="14">
                <use href="/"></use>
              </svg>
            </span>
          </span>
          <p className="description-text" id="textDescription">
            <span id="idText">Lucknow, U.P </span>
          </p>
        </div>
        <div className="column" style={{ width: '50%', padding: '0px' }}>
          <div className="has-text-right">
            <div className="action-btn"></div>
          </div>
        </div>
      </div>
      <div className="post-image1">
        <img id="postImage" alt=""  src='https://plus.unsplash.com/premium_photo-1688431299086-bf835ca28a9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'/>
      </div>
      <div className="tag-icon is-hidden" id="tagIconArea">
        <span className="material-icons has-text-white">
          <svg width="12" height="12">
            <use href="/"></use>
          </svg>
        </span>
      </div>
      <div id="imageCountBubblesArea"></div>
      
    </div>
    <div id="instaPostCard">
      <div className="columns is-vcentered mb-0 is-mobile" style={{ padding: '14px 16px 0px' }}>
        <div className="column is-1 pr-0" style={{ width: '55px' }}>
        <img id="profilePicture" alt=""  src="https://images.unsplash.com/photo-1594167154836-838be958f605?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />

  
        </div>
        <div className="column is-8 pl-0" style={{marginTop:'-54px'}}>
          <span className="label username-text mb-0">
            <span id="textUserName" style={{ fontWeight: 600 }}>Yash Gupta</span>
            <span id="verifiedIcon" style={{ color: 'rgb(27, 149, 224)' }}>
              <svg width="14" height="14">
                <use href="/"></use>
              </svg>
            </span>
          </span>
          <p className="description-text" id="textDescription">
            <span id="idText">Tanda, U.P </span>
          </p>
        </div>
        <div className="column" style={{ width: '50%', padding: '0px' }}>
          <div className="has-text-right">
            <div className="action-btn"></div>
          </div>
        </div>
      </div>
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
      <div id="imageCountBubblesArea"></div>
      
    </div>
    </div>
  );
}

export default Postcard;
