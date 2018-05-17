import React from 'react'
import VideoListItem from './video_list_item'

const VideoList = (props) => {
  const videoItems = props.video.map((video1) => {
    return (
      <VideoListItem
      onVideoSelect = {props.onVideoSelect} 
      key={video1.etag}
      video2={video1}
      />);
  });
  return(

    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
}
export default VideoList;
