import React, { Component } from 'react';
import './structure.css';

class Column50 extends Component {
    render(){
        return(
            <div className="column50 row wrapper">
                {this.props.children}
            </div>
        )
    }
};

export default Column50;