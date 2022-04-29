import React from "react";
import DateTime from "./DateTime";
function Video(props) {
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen/>
            <DateTime date={props.date}/>
        </div>
    )
}
export default Video;