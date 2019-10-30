import React from "react";

const PeiliContext = React.createContext();

class PeiliProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: false
    };
  }

  //handle sidebar button toggle
  handleSidebar = () => {
    console.log("handleSidebar clicked");
    this.setState(currentState => ({
      sidebarOpen: !currentState.sidebarOpen
    }));
  };
  render() {
    return (
      <PeiliContext.Provider
        value={{
          ...this.state,
          handleSidebar: this.handleSidebar
        }}
      >
        {this.props.children}
      </PeiliContext.Provider>
    );
  }
}

const PeiliConsumer = PeiliContext.Consumer;

export { PeiliConsumer, PeiliProvider, PeiliContext };
