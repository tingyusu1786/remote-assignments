import React from "react";

class WelcomeMsg extends React.Component {

  state = {
    msg: "Welcome message",
  }

  changeMsg = () => {
    this.setState({
      msg: "Have a good time!"
    });
  }

  render() {
    return (
      <section className="welcome" onClick={ this.changeMsg }>
        <h1 className="welcome-msg">{ this.state.msg }</h1>
      </section>
    );
  }
}

export default WelcomeMsg;