import React from "react";
import "./Usercard.css";

class Usercard extends React.Component {
  render() {
    return (
      <div className="Usercard">
        <p>{this.props.user.login}</p>
        <img src={this.props.user.avatar_url}/>
      </div>
    );
  }
}

export default Usercard;
