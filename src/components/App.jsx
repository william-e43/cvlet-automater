import React from 'react';
import {makePDF, makeDocDef} from '../helpers.js';
const d3 = require('d3-dsv');


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      csv: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(event) {
    const csvArr = d3.csvParse(event.target.value);
    this.setState({
      csv: csvArr.splice(0, csvArr.length)
    })
  }

  onSubmit () {
    console.log('csv: ', this.state.csv);
    this.state.csv.forEach((obj) => {
      const docDef = makeDocDef(obj);
      makePDF(docDef, `${obj['fileName']}WilliamEliasonCovLet`);
    })
  }

  render() {
    return(
      <div>
        <textarea style={{height: '400px', width: '500px'}}name="csv" onChange={this.handleChange}></textarea><br></br>
        <button onClick={this.onSubmit}>Click for CoverLetters</button>
      </div>
    )
  }
}

export default App;