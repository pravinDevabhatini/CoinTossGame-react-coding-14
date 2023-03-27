// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    isHead: true,
    total: 0,
    heads: 0,
    tails: 0,
  }

  onChange = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult % 2 === 0) {
      this.setState(prevState => ({
        isHead: true,
        total: prevState.total + 1,
        heads: prevState.heads + 1,
      }))
    } else {
      this.setState(prevState => ({
        isHead: false,
        total: prevState.total + 1,
        tails: prevState.tails + 1,
      }))
    }
  }

  render() {
    const {total, heads, tails, isHead} = this.state

    const srcImage = isHead
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="app-container">
        <div className="card-container">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={srcImage} alt="toss result" className="toss-image" />
          <button type="button" onClick={this.onChange}>
            Toss coin
          </button>
          <div className="count-container">
            <p className="paragraph">Total: {total} </p>
            <p className="paragraph">Heads: {heads}</p>
            <p className="paragraph">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
