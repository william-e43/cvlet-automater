import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      placeholder: true
    }
    this.helper = this.helper.bind(this);
  }

  render() {
    return(
      <div>
        <button onClick={this.helper}>Click for PDF</button>
      </div>
    )
  }
}

export default App;