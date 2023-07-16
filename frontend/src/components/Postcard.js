import React from 'react';

function Postcard() {
  return (
    <div id="instaPostCard">
      <div className="columns is-vcentered mb-0 is-mobile" style={{ padding: '14px 16px 0px' }}>
        <div className="column is-1 pr-0" style={{ width: '55px' }}>
          <img id="profilePicture" alt="" style={{ backgroundImage: 'url("https://i.pinimg.com/originals/2c/a3/01/2ca301559a8f579fe5e17969f602bcda.jpg")' }} />
          <img className="story-icon is-hidden" id="storyIcon" src="https://i.pinimg.com/originals/2c/a3/01/2ca301559a8f579fe5e17969f602bcda.jpg" alt="story" />
        </div>
        <div className="column is-8 pl-0">
          <span className="label username-text mb-0">
            <span id="textUserName" style={{ fontWeight: 600 }}>maximep123</span>
            <span id="verifiedIcon" style={{ color: 'rgb(27, 149, 224)' }}>
              <svg width="14" height="14">
                <use href="/"></use>
              </svg>
            </span>
          </span>
          <p className="description-text" id="textDescription">
            <span id="idText">New Jersey, USA</span>
          </p>
        </div>
        <div className="column" style={{ width: '50%', padding: '0px' }}>
          <div className="has-text-right">
            <div className="action-btn"></div>
          </div>
        </div>
      </div>
      <div className="post-image1">
        <img id="postImage" src="https://media1.popsugar-assets.com/files/thumbor/q_eu4G_Yfvd1qUU7rkJYpC9Qalk/0x532:1560x2092/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/11/18/102/n/1922729/2010a3325dd3450317e273.27544324_/i/healthy-meal-prep-dinner-recipes.jpg" alt="post" />
      </div>
      <div className="tag-icon is-hidden" id="tagIconArea">
        <span className="material-icons has-text-white">
          <svg width="12" height="12">
            <use href="/"></use>
          </svg>
        </span>
      </div>
      <div id="imageCountBubblesArea"></div>
      <div id="likeCommShareBtnArea" style={{ padding: '18px 16px 14px' }}>
        <div className="post-card-icons-mobile-view" style={{ marginBottom: '12px' }}>
          <div className="icon-left">
            <span id="likeBtnArea" style={{ marginRight: '12px', cursor: 'pointer' }}>
              <svg id="likeOutlinedIcon" fill="#262626" height="24" viewBox="0 0 24 24" width="24" className="">
                <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
              </svg>
              <svg id="liked" fill="#ed4956" height="24" viewBox="0 0 48 48" width="24" className="is-hidden">
                <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
              </svg>
            </span>
            <span style={{ marginRight: '12px' }}>
              <svg id="commentIcon" color="#262626" height="24" viewBox="0 0 24 24" width="24">
                <path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </span>
            <span>
              <svg id="shareIcon" color="#262626" height="24" viewBox="0 0 24 24" width="24">
                <line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line>
                <polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon>
              </svg>
            </span>
          </div>
          <div className="icon-right">
            <span style={{ marginLeft: '200px' }}>
              <svg id="savePostIcon" color="#262626" height="24" viewBox="0 0 24 24" width="24">
                <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon>
              </svg>
            </span>
          </div>
        </div>
        <div id="likesCountTextArea">
          <span id="countLikes"></span>
          <span>12 likes</span>
        </div>
        <div id="postTextArea">
          <b id="postTextUserName" style={{ fontWeight: 630 }}>
            <a className="" href="/profile" style={{ color: 'black' }}>
              {' '}
              maximep123
            </a>
          </b>
          &nbsp;
          <span id="instaPostText" className="content-input">
            healthy lifestyle
          </span>
        </div>
        <div id="commentCountTextArea">
          <div style={{ cursor: 'pointer' }}>
            <span>View All 4 comments</span>
          </div>
        </div>
        <div className="columns is-mobile comment-area" id="commentArea2">
          <div className="column pb-0">
            <b id="commentUsername2" style={{ fontWeight: 630, cursor: 'pointer' }}>
              <a className="" href="/profile/chelphill" style={{ color: 'black' }}>
                {' '}
                chelphill
              </a>
            </b>
            &nbsp;
            <span id="commentText2">Hum!! Que delícia 😋!!👏👏</span>
          </div>
        </div>
        <div className="columns is-mobile comment-area" id="commentArea2">
          <div className="column pb-0">
            <b id="commentUsername2" style={{ fontWeight: 630, cursor: 'pointer' }}>
              <a className="" href="/profile/scotland7jimw" style={{ color: 'black' }}>
                {' '}
                scotland7jimw
              </a>
            </b>
            &nbsp;
            <span id="commentText2">I’m actually drooling 🤤</span>
          </div>
        </div>
        <div className="add-comment">
          <input type="text" placeholder="Add a comment..." value="" />
          <div className="send-icon">
            <i className="fa fa-send-o" value="send"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Postcard;
