import React, { Component } from 'react';
import './structure.css';

class Column50 extends Component {
    getClass = () => {
        let classes = 'column50 row wrapper'
        if(this.props.flexDirectionColumn) {
            classes = 'column50 flexDirectionColumn wrapper'
        }
        return classes;
    }

    render(){
        return(
            <div className={this.getClass()}>
                {this.props.children}
            </div>
        )
    }
};

export default Column50;