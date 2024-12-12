import React, { Component, createRef } from "react";
import { Route, Routes, HashRouter } from "react-router-dom"; // Import Routes
import NavBar from "./components/navigation/NavBar";
import HomePage from "./components/pages/HomePage";
import 'materialize-css/dist/css/materialize.min.css';
import './components/styles/App.css';

class App extends Component {


  constructor(props) {
    super(props)
    this.state = {
      isNavbarOpen: false,  //track if the navbar is expanded
      marginTop: 0
    };
  }


  toggleNavbar = () => {
    // console.log("Previous state")
    // console.log(!this.state.isNavbarOpen)
    this.setState((prevState) => ({
      isNavbarOpen: !prevState.isNavbarOpen
    }))
  }

  //Function to dynamically set margin-top of main content
  updateMarginTop = (height) => {
    this.setState({ marginTop: height })
  }

  render() {

    return (
      <HashRouter>
        <div className="App">
          <NavBar
            isNavbarOpen={this.state.isNavbarOpen}
            onToggle={this.toggleNavbar}
            updateMarginTop={this.updateMarginTop} />
          <main className="main-content" style={{ marginTop: this.state.marginTop }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
        </div>
      </HashRouter>
    );
  }
}

export default App;
