import React, { useRef } from 'react'
import './VideoPlayer.css'
import CodezillaVideo from '../../assets/CodezillaVideo.mp4'

const VideoPlayer = ({playstate,setplaystate}) => {

  const player = useRef(null);

  const closeplayer = (e) => {
    if(e.target === player.current){
      setplaystate(false);
      // to hide the video.
    }
  }

  return (
    <div className={`Videoplayer ${playstate ? '' : 'hide'}`} ref={player} onClick={closeplayer}>
      <video src={CodezillaVideo} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer