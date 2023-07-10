import { useState } from "react";
import Controls from "./Controls";
import video from "../../assets/videos/videomp4.mp4";
import img from "../../assets/images/avatar/avatar.jpg";
function Video({
    videoUrl = video,
    type = "",
    showControls = true,
    background = false,
}) {
    return (
        <div className=" relative w-full h-full">
            <video
                controls={showControls}
                className=" w-full h-full bg-gradient-to-b from-black via-gray-500 to-white object-contain"
                // poster="https://itseovn.com/img/imgqc/ga-lovemama-latop.jpg"
                src={videoUrl}
            >
                {/* <source src={videoUrl} type={type} /> */}
            </video>
            {/* <div className=" absolute bottom-0 left-0 w-full   ">
                <Controls />
            </div> */}
        </div>
    );
}

export default Video;
