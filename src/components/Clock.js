// Attribution to react docs. Component built using tutorial
// import react 
import React from 'react';

// build Clock component as class
class Clock extends React.Component {
    // constructor function initalize this.state
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    // react function to track time when component was added to DOM
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }

    // react function to track time when component was removed from DOMG
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    // tick function using setState to update date object with new Date
    tick() {
        this.setState({date: new Date()});
    }

    // react render function, rendering component to DOM 
    render() {
        return (
            <div className='clock-container'>
                <h1>{this.state.date.toLocaleTimeString()}</h1>  
            </div>
        )
    }
}

// export CLock component 
export default Clock;