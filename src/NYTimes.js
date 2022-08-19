import React, { Component } from 'react';
import News from './News';

class NYTimes extends Component{
    static defaultProps = {
        topics: ["home","world","politics","magazine","technology","science","health","sports","arts","fashion","food","travel"]
    }

    constructor(){
        super();
        this.state = {
            currentTopic: "home"
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        this.setState({currentTopic: e.target.outerText});
    }
    
    render(){
        return(
            <div className='Times'>
                <h1>New York Times Top Stories</h1>
                <div className='navbar'>
                    {
                        this.props.topics.map(topic => (
                            <div onClick={this.handleClick} className='topic'>{topic}</div>
                        ))
                    }
                </div>
                <News topic={this.state.currentTopic}/>
            </div>
        )
    }
}

export default NYTimes;