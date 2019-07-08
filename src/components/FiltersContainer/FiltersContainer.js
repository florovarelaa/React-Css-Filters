import React, { Component } from 'react';
import Filter from '../Filter/Filter';
import './FiltersContainer.css';

class FiltersContainer extends Component {
    render() {
        return(
            <div>
                <Filter filter="blur"/>
                <Filter filter="brightness"/>
                <Filter filter="contrast"/>
                <Filter filter="drop-shadow"/>
                <Filter filter="grayscale"/>
                <Filter filter="hue-rotate"/>
                <Filter filter="invert"/>
                <Filter filter="opacity"/>
                <Filter filter="saturate"/>
                <Filter filter="sepia"/>
            </div>
        );
    }
}

export default FiltersContainer;