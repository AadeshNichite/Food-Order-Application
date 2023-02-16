import React from "react";
import UserContext from "../utils/userContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent - constructor");
  }

  componentDidMount() {
    console.log("parent - componentDidMount");
  }
  render() {
    console.log("parent - render");
    return (
      <div>
        <h1>About us</h1>
        <p>🤐🤐🤐🤐🤐🤐🤐🤐🤐🤐</p>
        <UserContext.Consumer>
          {({ user }) => (
            <h1 className="font-bold p-5">
              {user.name} - {user.email}
            </h1>
          )}
        </UserContext.Consumer>
      </div>
    );
  }
}
export default About;
