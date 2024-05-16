import {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="home-bg-container">
          <div className="home-container1">
            <img
              className="home-image1"
              alt="start quiz game"
              src="https://assets.ccbp.in/frontend/react-js/quiz-game-start-the-quiz-img.png"
            />
            <p className="home-p1">
              How Many Of These Questions Do You Actually Know?
            </p>
            <p className="home-p2">
              Test yourself with these easy quiz questions and answers
            </p>
            <Link to="/quizGame">
              <button className="home-btn1" type="button">
                Start Quiz
              </button>
            </Link>
          </div>
        </div>
      </>
    )
  }
}

export default Home
