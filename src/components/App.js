import React from "react";

import InputField from './InputField';

class App extends React.Component {
  state = {
    markdown: ''
  }
  onchangeText = (value) => {
    this.setState({ markdown: value });
    console.log(this.state.markdown);
  }
  render() {
    return( 
      <div>
        Working
        <InputField 
          onchangeText= {this.onchangeText}
          value = {this.state.markdown}
        />
      </div>
    );
  }
}

export default App;
