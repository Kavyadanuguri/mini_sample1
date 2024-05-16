import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onRemoveToken = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="header-container1">
      <img
        className="header-image1"
        src="https://res.cloudinary.com/ddq7naafk/image/upload/v1715748048/b2toxuwmpascndcwebwb.png"
        alt="logo"
      />
      <button onClick={onRemoveToken} className="header-button1" type="button">
        Logout
      </button>
    </nav>
  )
}

export default withRouter(Header)
