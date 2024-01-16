import React, { Component } from 'react';

class Video extends Component {
  componentDidUpdate(prevProps) {
    // Check if the video prop has changed and is not undefined
    if (this.props.video && this.props.video !== prevProps.video) {
      this.videoRef.src = this.props.video;
    }
  }

  render() {
    return (
      <video  className="background-video" muted autoPlay loop style={{ opacity: 0.1 }} ref={(ref) => (this.videoRef = ref)}>
        {this.props.video && <source src={this.props.video} type="video/mp4" />}
      </video>
    );
  }
}

export default Video;
