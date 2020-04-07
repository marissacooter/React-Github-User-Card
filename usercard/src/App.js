import React from "react";
import axios from "axios";
import "./App.css";
import "./Usercard.css";
import Usercard from "./Usercard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      followers: []
    };
  }
  componentDidMount() {
    axios
      .get("https://api.github.com/users/marissacooter")
      .then((response) => {
        console.log(response);
        this.setState({
          user: response.data,
        });
      })
      .catch((error) => {
        console.log("the data was not returned", error);
      });

    axios
      .get("https://api.github.com/users/marissacooter/followers")
      .then((response) => {
        console.log(response);
        this.setState({
          followers: response.data,
        });
      })
      .catch((error) => {
        console.log("the data was not returned", error);
      });  
  }

  render() {
    return (
    <div>
      {this.state.user && <Usercard user={this.state.user}/>}

      {this.state.followers && this.state.followers.map((follower, idx) => {
          return (
            <Usercard user={follower}/>
          )
        })}
    </div>
    )
  }
}

export default App;
