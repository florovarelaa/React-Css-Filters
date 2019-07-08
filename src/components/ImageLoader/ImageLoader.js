import React, { Component } from 'react';
import './ImageLoader.css';

class ImageLoader extends Component {
    constructor (props) {
        super(props);
        this.state = {
            input: '',
        }
    }

    loadImage = () => {
        if (this.state.input !== '') {
            this.props.handler(this.state.input)
        }
    }

    handleChange = (event) => {
        this.setState({ input: event.target.value })
    }

    render() {
        return (
            <div className="bottomBlack">
                <button onClick={this.loadImage}>Load</button>
                <input type="text" placeholder="Insert image link" onChange={this.handleChange}></input>
            </div>
        );
    }
}

export default ImageLoader;