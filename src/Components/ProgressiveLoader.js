import React, { Component } from 'react';
import './ProgressiveLoader.css';

export default class ProgressiveLoader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading : true
        }

        this.mainImage = null;
    }

    componentDidMount() {
        const mainLoaderImg = new Image();
        mainLoaderImg.src = this.props.srcLoaded;
        mainLoaderImg.onload = () => {
            this.mainImage.setAttribute(
                'style',
                `background-image: url('${this.props.srcLoaded}')`
            );
            this.mainImage.classList.add('main-image-fade-in');
            this.setState({loaded:false});
        }
    };

    render() {
        const loaderStyle = this.state.loading ? {display : "block"}:{display:"none"};
        return (
            <div className="main-image-container">
                <div className="main-image-loaded"
                    ref={imageLoadedElem => this.mainImage = imageLoadedElem}>
                </div>
                <div style={loaderStyle} className="preload-animated-background">
                </div>
            </div>
        )
    }
}