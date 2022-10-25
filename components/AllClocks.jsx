import React, { Component } from 'react';
import Clock from './Clock';
class AllClocks extends Component {
    constructor(props) {
        super(props);
        this.resetAll = this.resetAll.bind(this)
        this.randomAll = this.randomAll.bind(this)
        this.doubleAll = this.doubleAll.bind(this)
        this.reset = this.reset.bind(this)
        this.double = this.double.bind(this)
       

    }
    state = { 'Israel': 1, "Europe/London": 1, 'America/New_York': 1 }

    random() { return Math.floor(Math.random() * 10) + 1 }
    resetAll() {
        this.setState({ 'Israel': 1, "Europe/London": 1, 'America/New_York': 1 })
    }
    randomAll() {
        this.setState({ 'Israel': this.random(), "Europe/London": this.random(), 'America/New_York': this.random() })
    }
    doubleAll() {
        this.setState({
            'Israel': this.state['Israel'] * 2,
            "Europe/London": this.state["Europe/London"] * 2,
            'America/New_York': this.state["America/New_York"] * 2
        })
    }

    reset(e) { 
        console.log(e.target.name);
       this.setState({ [e.target.name]: 1})
    }
    double(e) {  
        console.log(e.target.name);
       this.setState({ [e.target.name]: this.state[e.target.name] * 2})
    }
   

    render() {
        return (
            <React.Fragment>
                <h1>All Clocks</h1>
                <button onClick={this.resetAll}>reset all</button>
                <button onClick={this.randomAll}>random all</button>
                <button onClick={this.doubleAll}>double all</button>
                <Clock timeZone={'Israel'} 
                updateInterval={this.state['Israel'] * 1000} 
                reset={this.reset}
                double={this.double}
                random={this.random}
                />
                <Clock 
                timeZone={"Europe/London"} 
                updateInterval={this.state["Europe/London"] * 1000} 
                reset={this.reset}
                double={this.double}
                random={this.random}
                />
                <Clock timeZone={'America/New_York'}
                 updateInterval={this.state['America/New_York'] * 1000}
                 reset={this.reset}
                double={this.double}
                random={this.random}
                 />

            </React.Fragment>
        );
    }
}

export default AllClocks;