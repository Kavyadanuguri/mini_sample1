import {Component} from 'react'
import Header from '../Header'
import './index.css'

class QuizGame extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="quiz-bg-container">
          <div className="quiz-container1">
            <div className="quiz-con11">
              <div className="quiz-con111">
                <p className="quiz-p1">Question</p>
                <p className="quiz-p2">1/20</p>
              </div>
              <p className="quiz-p3">15</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default QuizGame
