import React, { Component } from 'react';
import './Filter.css';

class Filter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: '',
        }        
    };

    getStyle = (filter) => {
        return {
            backgroundImage: `url('${this.props.image}')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            filter: `${filter}`,
        }
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.value !== prevProps.value) {
            switch (this.props.filter) {
                case 'blur': 
                    this.setState({filter: `blur(${this.props.value/10 - 1}px)`})
                break;
                case 'brightness':
                    this.setState({filter: `brightness(${this.props.value/100})`})
                break;
                case 'contrast':
                    this.setState({filter: `contrast(${this.props.value})`});
                break;
                case 'grayscale':
                    this.setState({filter: `grayscale(${this.props.value}%)`});
                break;
                case 'invert': 
                    this.setState({filter: `invert(${this.props.value}%)`});
                break;
                case 'opacity':
                    this.setState({filter: `opacity(${this.props.value}%)`});
                break;
                case 'saturate':
                    this.setState({filter: `saturate(${this.props.value}%)`});
                break;
                case 'sepia': 
                    this.setState({filter: `sepia(${this.props.value}%)`})
                break;
                default: 
                    break;
            }
        }
    }

    handleChange = (event) => {
        this.props.handler(event.target.value)
    }   

    render() {
        return(
            <div className="filter50 center" style={this.getStyle(this.state.filter)}>
                <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    className="" 
                    defaultValue={this.props.value} 
                    onChange={this.handleChange}>
                </input>
            </div>
        )
    }
};

export default Filter;