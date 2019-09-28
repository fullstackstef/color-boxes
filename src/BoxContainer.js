import React, { Component } from 'react';
import Box from './Box';
import { randomRGB } from './helpers'
import './BoxContainer.scss';

class BoxContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            randomColors: Array.from({length: this.props.numOfBoxes})
                .map(el => randomRGB())
        }
    }

    static defaultProps = {
        numOfBoxes: 16
    }

    render() {
        return (
            <div className="Boxes">
                {
                    this.state.randomColors.map((el, i) => <Box color={el} key={i} colors={this.state.randomColors}/>)
                }
            </div>
        )
    }
}

export default BoxContainer;