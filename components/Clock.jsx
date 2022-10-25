import React, { Component } from 'react'

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date() 
        }
    }
    render() {
        const timeZone = this.props.timeZone;
        return (
            <React.Fragment>
            <div> 
                {timeZone} {this.state.time.toLocaleTimeString( { timeZone: `${this.props.timeZone}` }) } update {this.props.updateInterval / 1000} Sec
            </div>
            <button onClick={this.props.reset} name={timeZone}>reset</button>
            <button onClick={this.props.double} name={timeZone}>double</button>
            <button onClick={()=>this.setState({ time: new Date()})}>update now</button>
          
            </React.Fragment>
        );
    }
    
    componentDidMount() {
        console.log('componentDidMount');
        this.timrId = setInterval(() => this.setState({ time: new Date()}), this.props.updateInterval)
    }
    componentDidUpdate(){
        console.log('componentDidUpdate');
        clearInterval(this.timrId)
        this.timrId = setInterval(() => this.setState({ time: new Date()}), this.props.updateInterval)
    }
    shouldComponentUpdate(nextProps, state){
return nextProps.updateInterval !== state.updateInterval
    }

    componentWillUnmount() {
        clearInterval(this.timrId)
    }
}

export default Clock;