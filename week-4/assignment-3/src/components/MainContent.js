import React from "react";

class MainContent extends React.Component {

  state = {
    style: {display: 'none'},
    showed: false
  }

  toggleMore = () => {
    this.setState(prevState => {
      if (prevState.showed) {
        return {
          style: {display: 'none'},
          showed: false
        }
      } else {
        return {
          style: {display: 'grid'},
          showed: true
        }
      }
    });
  }

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

          <button className="button" id="btn-more" name="button" onClick={ this.toggleMore }>
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