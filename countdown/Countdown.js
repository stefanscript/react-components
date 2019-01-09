import React, {Fragment} from "react"
import PropTypes from "prop-types";
import Timer from "./Timer";

class Countdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            seconds: 3
        };

        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        this.secondsRemaining = this.state.seconds;
        this.intervalHandler = setInterval(this.tick, 1000);
    }

    tick() {

        const sec = this.secondsRemaining;

        this.setState({
             seconds: sec
        });

        if(sec === -1) {
            clearInterval(this.intervalHandler);
        }

        this.secondsRemaining--;
    }

    render() {
        return (
            <Fragment>
                <Timer seconds={this.state.seconds}/>
            </Fragment>
        )
    }

}

Countdown.propTypes = {
    seconds: PropTypes.number.isRequired
};

export default Countdown;