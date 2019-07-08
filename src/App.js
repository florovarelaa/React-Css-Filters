import React, { Component } from 'react';
import './App.css';
import Column50 from './components/Structure/Column50';
import Image from './components/Image/Image';
import Img from './images/leopard.jpg';
import Filter from './components/Filter/Filter';
import Row from './components/Structure/Row';
import ImageLoader from './components/ImageLoader/ImageLoader';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        blur: '0',
        brightness: '100',
        contrast: '1',
        grayscale: '0',
        invert: '0',
        opacity: '100',
        saturate: '100',
        sepia: '0',
        imageUrl: Img,
      };
      this.blurHandler = this.blurHandler.bind(this);
      this.brightnessHandler = this.brightnessHandler.bind(this);
      this.contrastHandler = this.contrastHandler.bind(this);
      this.grayscaleHandler = this.grayscaleHandler.bind(this);
      this.invertHandler = this.invertHandler.bind(this);
      this.opacityHandler = this.opacityHandler.bind(this);
      this.saturateHandler = this.saturateHandler.bind(this);
      this.sepiaHandler = this.sepiaHandler.bind(this);
      this.imageHandler = this.imageHandler.bind(this);
    }
  
  blurHandler(value) {
    this.setState({
      blur: value
    })
  }
  
  brightnessHandler(value) {
    this.setState({
      brightness: value
    })
  }
  
  contrastHandler(value) {
    this.setState({
      constrast: value
    })
  }
  
  grayscaleHandler(value) {
    this.setState({
      grayscale: value
    })
  }
  
  invertHandler(value) {
    this.setState({
      invert: value
    })
  }
  
  opacityHandler(value) {
    this.setState({
      opacity: value
    })
  }
  
  saturateHandler(value) {
    this.setState({
      saturate: value
    })
  }
  
  sepiaHandler(value) {
    this.setState({
      sepia: value
    })
  }

  imageHandler(url) {
    this.setState({
      imageUrl: url,
    })
  }
  
  render() {
    return (
      <Row >
        <Column50>
            <Filter image={Img} filter='blur' value={this.state.blur} handler={this.blurHandler}/>
            <Filter image={Img} filter='brightness' value={this.state.brightness} handler={this.brightnessHandler}/>
            <Filter image={Img} filter='contrast' value={this.state.contrast} handler={this.contrastHandler}/>
            <Filter image={Img} filter='grayscale' value={this.state.grayscale} handler={this.grayscaleHandler}/>
            <Filter image={Img} filter='invert' value={this.state.invert} handler={this.invertHandler}/>
            <Filter image={Img} filter='opacity' value={this.state.opacity} handler={this.opacityHandler}/>
            <Filter image={Img} filter='saturate' value={this.state.saturate} handler={this.saturateHandler}/>
            <Filter image={Img} filter='sepia' value={this.state.sepia} handler={this.sepiaHandler}/>
        </Column50>
        <Column50 flexDirectionColumn>
          <ImageLoader handler={this.imageHandler}/>
          <Image 
            blur={this.state.blur}
            brightness={this.state.brightness}
            contrast={this.state.contrast}
            grayscale={this.state.grayscale}
            invert={this.state.invert}
            opacity={this.state.opacity}
            saturate={this.state.saturate}
            sepia={this.state.sepia}
          />
        </Column50>
      </Row>    
    );
  }
}

export default App;
