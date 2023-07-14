import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {FaMoon} from 'react-icons/fa'
import {BiSun} from 'react-icons/bi'
import {
  HeaderNav,
  HeaderLogo,
  HeaderItems,
  HeaderProfile,
  LogoutButton,
  ThemeButton,
  CloseContainer,
  CloseButton,
  Desc,
  Buttons,
  ConfirmButton,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark, toggleTheme} = value
      const color = isDark ? '#ffffff' : '#00306e'
      const bgColor = isDark ? '#231f20' : '#f1f5f9'

      const onClickTheme = () => {
        toggleTheme()
      }

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <HeaderNav bgColor={bgColor}>
          <Link to="/">
            <HeaderLogo
              src={
                isDark
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
          </Link>
          <HeaderItems>
            <ThemeButton
              type="button"
              data-testid="theme"
              onClick={onClickTheme}
            >
              {isDark ? (
                <BiSun color="#ffffff" size={20} />
              ) : (
                <FaMoon size={20} />
              )}
            </ThemeButton>
            <HeaderProfile
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Popup
              modal
              trigger={
                <LogoutButton type="button" bgColor={bgColor} color={color}>
                  Logout
                </LogoutButton>
              }
            >
              {close => (
                <CloseContainer>
                  <Desc>Are you sure, you want to logout</Desc>
                  <Buttons>
                    <CloseButton
                      type="button"
                      onClick={() => close()}
                      data-testid="closeButton"
                    >
                      Cancel
                    </CloseButton>
                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </Buttons>
                </CloseContainer>
              )}
            </Popup>
          </HeaderItems>
        </HeaderNav>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
