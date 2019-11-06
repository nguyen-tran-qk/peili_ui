import React from "react";

import strengthsData from "./strengthsData";
import organizationsData from "./organizationsData";

const PeiliContext = React.createContext();

class PeiliProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: false,
      email: "",
      password: "",
      strengthsData,
      organizationsData
    };
  }

  //handle sidebar button toggle
  handleSidebar = () => {
    //console.log("handleSidebar clicked");
    this.setState(currentState => ({
      sidebarOpen: !currentState.sidebarOpen
    }));
  };

  //handle input change
  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <PeiliContext.Provider
        value={{
          ...this.state,
          handleSidebar: this.handleSidebar,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </PeiliContext.Provider>
    );
  }
}

const PeiliConsumer = PeiliContext.Consumer;

export { PeiliConsumer, PeiliProvider, PeiliContext };
