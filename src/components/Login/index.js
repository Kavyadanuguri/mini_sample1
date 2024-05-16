import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {username: '', password: '', isChecked: false, errorMsg: ''}

  getSuccessView = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  errorView = error => {
    this.setState({errorMsg: error})
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.getSuccessView(data.jwt_token)
      this.setState({username: '', password: '', errorMsg: ''})
    } else {
      this.errorView(data.error_msg)
    }
  }

  getUserName = event => {
    this.setState({username: event.target.value})
  }

  getPassword = event => {
    this.setState({password: event.target.value})
  }

  getCheck = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  render() {
    const {username, password, isChecked, errorMsg} = this.state
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return Redirect('/')
    }
    return (
      <div className="login-bg-container">
        <form onSubmit={this.onSubmitForm} className="login-container1">
          <img
            className="login-image1"
            src="https://res.cloudinary.com/ddq7naafk/image/upload/v1715748048/b2toxuwmpascndcwebwb.png"
            alt="logo"
          />
          <div className="login-container2">
            <label className="login-label1" htmlFor="login-input1">
              USERNAME
            </label>
            <input
              value={username}
              onChange={this.getUserName}
              className="login-input1"
              id="login-input1"
              type="text"
            />
          </div>
          <div className="login-container2">
            <label className="login-label1" htmlFor="login-input2">
              PASSWORD
            </label>
            <input
              value={password}
              onChange={this.getPassword}
              className="login-input1"
              id="login-input2"
              type={isChecked ? 'text' : 'password'}
            />
          </div>
          <div className="login-container3">
            <input
              onClick={this.getCheck}
              className="login-check"
              id="login-input3"
              type="checkbox"
            />
            <label htmlFor="login-input3">Show Password</label>
          </div>
          <button className="login-button" type="submit">
            Login
          </button>
          <p className="login-error">{errorMsg}</p>
        </form>
      </div>
    )
  }
}

export default Login
