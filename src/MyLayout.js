import React, {Component} from 'react';

class MyLayout extends Component {
    render() {
        return (<div style={{border: '1px solid red'}}>MyLayout<p>I am a child of MyLayout custom component</p></div>);
    }
}

export default MyLayout;