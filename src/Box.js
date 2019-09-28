import React, { Component } from 'react';
import { randomRGB } from './helpers';
import './Box.scss'

class Box extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: this.props.color
        }

        this.handleClick = this.handleClick.bind(this);
    }

    generateColor() {
        const color = randomRGB();
        this.setState(currSt => ({color: color}));
    }

    handleClick() {
        this.generateColor();
    }

    render() {
        return <div 
            className="Box" 
            style={{backgroundColor: this.state.color}}
            onClick={this.handleClick}
            >
        </div>
    }
}

export default Box;