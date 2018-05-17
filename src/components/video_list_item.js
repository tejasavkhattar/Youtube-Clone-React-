import React from 'react'

const VideoListItem = (props) => {
  const onVideoSelect1 = props.onVideoSelect;
  const video = props.video2;
  const imageURL = video.snippet.thumbnails.default.url;

  return(
    <li onClick={() => onVideoSelect1(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageURL} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;
