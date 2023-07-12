import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import {
  HeaderNav,
  HeaderLogo,
  HeaderItems,
  HeaderProfile,
  LogoutButton,
  ThemeButton,
} from './styledComponents'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <HeaderNav>
      <Link to="/">
        <HeaderLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="website logo"
        />
      </Link>
      <HeaderItems>
        <ThemeButton type="button" data-testid="theme">
          <FaMoon style={{height: 25}} />
        </ThemeButton>
        <HeaderProfile
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
          alt="profile"
        />
        <LogoutButton type="button" onClick={onClickLogout}>
          Logout
        </LogoutButton>
      </HeaderItems>
    </HeaderNav>
  )
}

export default withRouter(Header)
