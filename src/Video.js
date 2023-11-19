// rfce

import React, { useEffect, useState } from 'react'
import Header from './Header'
import {LiaThumbsDown, LiaThumbsUp, LiaDownloadSolid} from 'react-icons/lia'
import {PiShareFatLight} from 'react-icons/pi'
import allVideos from './useful-data-main/videos.json'

import tmkoc from './images/tmkoc.jpg'
import avtar from './images/avtar.png'
import { Link } from 'react-router-dom'

function VideoInfo(){
  return (<>
    <h5 class="video-title">
      Kalank Title Track - Lyrical | Alia Bhatt , Varun Dhawan | Arijit Singh | Pritam| Amitabh
    </h5>
    <div class="video-details">
      <div class="channel-info">
        <img src={avtar} height={'30px'} width={'30px'}/>
        <div className='channel-name'>
          <h6 className='margin-0'>Zee Music Company</h6>
          <p className='margin-0'>102M subscribers</p>
        </div>
        <button className='subscribe'>Subscribe</button>
      </div>
      <div class="video-action-buttons">
        <button>
          <LiaThumbsUp size={'1.4rem'} />597K | <LiaThumbsDown size={'1.4rem'} />
        </button>
        <button>
          <PiShareFatLight size={'1.4rem'}/> Share
        </button>
        <button>
          <LiaDownloadSolid size={'1.4rem'}/>
            Download
        </button>
      </div>
    </div>
    <div class="video-desc">
      <p>434K views &nbsp; 1 year ago</p>
      <p>Here is the compilation video for all the random suggestions Shukla Ji gave from 
                  the film Chhalaang. Watch this video for non stop laughter and let us know in 
                  the comments which suggestion did you relate with the most.
                  </p>
    </div>
  </>)
}

function SuggestedVideos(props){
  let video = props.video;
  return (
    <>
      <div className='suggested-video'>
        <div className='suggestion-image'>
          <Link to={`/video?id=${video.id}`} onClick={() => props.setVideo(video.id)}>
            <img src={video.thumbnail.url} title={video.title}/>
          </Link>
        </div>
        <div className='suggestion-content'>
          <div className='video-info'>
            <p class="track-title margin-0 video-info-title">
              {video.title}
            </p>
            <p class="margin-0 smaller-fontsize">{video.channelName}</p>
            <p class="margin-0 smaller-fontsize">{video.views} views . {video.uploadedAt} ago</p>
          </div>
        </div>
      </div>
    </>
  );
}

function Video() {
  // let videos = [1, 2, 3, 4, 5, 6, 7, 8]
  const [currVideoId, setCurrentVideoId] = useState("");

  useEffect(() => {
      // Create a new URL object
    let address = new URL(window.location);

    // Get searchParameters property of the URL object
    let queryParameters = address.searchParams;

    // Retrieve specific query parameters
    let currentVideoId = queryParameters.get("id");

    setCurrentVideoId(currentVideoId);
  }, [])
  let videos = allVideos;

  return (
    <div>
      {/* <p>Video comp</p>
      <h4>Time Left : {seconds}</h4> */}
      <Header />
      <div className='video-main-page'>
        <div className='video-frame'>
          <iframe className='iframe-video' src={`https://www.youtube.com/embed/${currVideoId}?si=wzrbZX_JVDirQuKX?rel=0&mute=1&autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <VideoInfo />
        </div>
        <div className='suggestions'>
          <p> Suggested Videos</p>
          {videos.map((video) => {
            return (<SuggestedVideos video={video} setVideo={setCurrentVideoId} />);
          })}
        </div>
      </div>
    </div>
  )
}

export default Video

