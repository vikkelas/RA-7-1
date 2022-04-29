import React from "react";
import dateTimePretty from "./dateTimePrety";
function DateTime(props) {
    return (
        <p className="date">{props.date}</p>
    )
}
export default dateTimePretty(DateTime);