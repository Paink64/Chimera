import './Lobby.css';
import {useRef} from "react";

let stream;
function Lobby() {
    const videoRef = useRef()
    const shareScreen = async () => {
        if(navigator.mediaDevices.getDisplayMedia){
            stream=await navigator.mediaDevices.getDisplayMedia({
                audio:true,
                video:{
                    cursor:"always"
                }
            })
            console.log('stream',stream)
            videoRef.current.srcObject=stream
        }
    }


  return (
    <div className="Lobby">
        <button onClick={()=>{
            shareScreen()
        }}>Share Screen</button>
        <button>Stop Screen</button>

        <header className="App-header">
            <video width={800} height={800} ref={videoRef} autoPlay/>
        </header>
    </div>
  )
}

export default Lobby
