import React from "react"
import PropTypes from "prop-types";

function Timer({seconds}) {
    if(seconds < 0) {
        return null;
    }
    if(seconds === 0) {
        return <h1>Go</h1>
    }
    return <h1>{seconds}</h1>
}

Timer.propTypes = {
    seconds: PropTypes.number.isRequired
};

export default Timer;