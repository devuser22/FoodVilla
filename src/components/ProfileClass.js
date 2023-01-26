import React from "react";
import { json } from "react-router-dom";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy name",
        bio: "Dummy Location",
        avatar_url: "<avatar_url>",
      },
    };
  }
  async componentDidMount() {
    const url = await fetch("https://api.github.com/users/devuser22");
    const json = await url.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  render() {
    return (
      <div>
        <h1>.......Profile Class component............</h1>
        <h2>{this.state.userInfo.name}</h2>
        <p>Bio - {this.state.userInfo.bio}</p>
        <img src={this.state.userInfo.avatar_url}></img>
      </div>
    );
  }
}

export default Profile;
