import React, { useState } from "react";

class MainContent extends React.Component {

  state = {
    style: {display: 'none'}
  }

  showMore = () => {
    this.setState({
      style: {display: 'grid'}
    });
  }

  // use Hook to toggle

  render() {
    return (
      <main>
        <section className="content">

          <h2 >Section Title</h2>
          <div className="content-boxes">
            <div className="content-box">Content Box 1</div>
            <div className="content-box">Content Box 2</div>
            <div className="content-box">Content Box 3</div>
            <div className="content-box">Content Box 4</div>
          </div>

          <button className="button" id="btn-more" name="button" onClick={ this.showMore }>
            Call to Action
          </button>

          <div className="content-boxes" style={this.state.style} >
            <div className="content-box">Content Box 5</div>
            <div className="content-box">Content Box 6</div>
            <div className="content-box">Content Box 7</div>
            <div className="content-box">Content Box 8</div>
          </div>

        </section>
      </main>
    );
  }
}

export default MainContent;