// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    input: 0,
  }

  onInputChange = event => {
    const count = event.target.value.length
    this.setState({input: count})
  }

  render() {
    const {input} = this.state
    return (
      <div className="bg-container">
        <div className="calculate-container">
          <div className="content-container">
            <div className="content">
              <h1 className="heading">Calculate the Letters you enter</h1>
              <label htmlFor="input-element" className="para">
                Enter the phrase
              </label>
              <input
                type="text"
                className="control input"
                onChange={this.onInputChange}
                placeholder="Enter the Phrase"
                id="input-element"
              />
              <button className="button" type="button">
                <p>No.of letters: {input}</p>
              </button>
            </div>
          </div>
          <div className="img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              className="img"
              alt="letters calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
