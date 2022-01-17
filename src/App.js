import React from "react";
import "./index.css";
import axios from "axios";
class App extends React.Component {
  state = { counter: 0, isLightOn: false, fact: "Nothing yet :)" };

  handleCounter() {
    this.setState({ counter: this.state.counter + 1 });
  }
  handleLight() {
    this.setState({ isLightOn: !this.state.isLightOn });
  }
  getRandomFact() {
    var tempThis = this;
    axios
      .get("https://uselessfacts.jsph.pl/random.json?language=en")
      .then(function (response) {
        // handle success
        console.log(response.data.text);
        tempThis.setState({fact: response.data.text});
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });

  }
  render() {
    return (
      <div className="App">
        <p className="makeMeRed">Hello World</p>
        {/* Counter state manip */}
        <p>{this.state.counter}</p>
        <button onClick={() => this.handleCounter()}>+1</button>

        {/* True or False state manip */}
        <p>is light on? {this.state.isLightOn.toString()}</p>
        <button onClick={() => this.handleLight()}>Turn off the light!!</button>

        <p className={this.state.isLightOn ? "makeMeRed" : "makeMeBlue"}>
          PARTY
        </p>

        <button onClick={() => this.getRandomFact()}>Get a fact</button>
        <p>{this.state.fact}</p>
      </div>
    );
  }
}

export default App;
