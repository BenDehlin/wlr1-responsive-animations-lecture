import {Component} from 'react'

class Example extends Component{
    constructor(){
        super()
        this.state = {
            // this is our piece of state that decides whether or
            // not the .pause class is applied to our box.
            spinning: true
        }
    }

    // this functions toggles us in and out of the spinning state
    // so we can alternate.
    animate = () => {
        this.setState({spinning: !this.state.spinning})
    }

    render(){
        return(
            // notice our containing div has the big-box class still
            <div className="big-box">
                {/* our item inside of the container will always have the styling
                of .small-box-three which gives it a size/color as well
                as the spin keyframes animation. This animation will be
                going by default but if we click the box it will set the
                state of spinning to be false. When that happens our box
                will conditionally be given a second className. This className
                sets the animation-play-state to be paused so it will stop
                mid-animation. If we want to start it again we simply click
                the box again and it will remove the pause class from our item. */}
                <div 
                onClick={this.animate} 
                className={`small-box-three ${this.state.spinning ? 'pause': ''}`}></div>
            </div>
        )
    }
}

export default Example