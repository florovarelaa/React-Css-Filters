import React, { Component } from 'react';
import './Image.css';

class Image extends Component {

    getStyle = () => {
        return {
            backgroundImage: `url('${this.props.image}')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            filter: `blur(${this.props.blur}px) 
                    brightness(${this.props.brightness/100})
                    contrast(${this.props.contrast})
                    grayscale(${this.props.grayscale}%)
                    invert(${this.props.invert}%)
                    opacity(${this.props.opacity}%)
                    saturate(${this.props.saturate}%)
                    sepia(${this.props.sepia}%)`,
        }
    }

    render (){
        return(
            <div className="flex50" style={this.getStyle()}>
            </div>
        );
    }
}

export default Image;