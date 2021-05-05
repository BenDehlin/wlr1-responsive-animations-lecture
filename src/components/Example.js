import {Component} from 'react'

class Example extends Component{
    constructor(){
        super()
        this.state = {
            spinning: true
        }
    }

    animate = () => {
        this.setState({spinning: !this.state.spinning})
    }

    render(){
        return(
            <div className="big-box">
                <div onClick={this.animate} className={`small-box-three ${this.state.spinning ? 'pause': ''}`}></div>
            </div>
        )
    }
}

export default Example