import React from "react";

import InputField from './InputField';
import OutputField from './OutputField';
class App extends React.Component {
  state = {
    markdown: ''
  }
  onchangeText = (value) => {
    this.setState({ markdown: value });
  }
  render() {
    let value = this.state.markdown; 
    return( 
      <div className="row">
        <div className='col-md-6'>
          <h3 className="bg-info text-center">Place your input</h3>
          <InputField 
            onchangeText= {this.onchangeText}
            value = {value}
          />
        </div>
        <div className='col-md-6'>
          <h3 className="bg-success text-center">Your input</h3>
          <OutputField value = {value}/>
        </div>
      </div>
      
    );
  }
}

export default App;
