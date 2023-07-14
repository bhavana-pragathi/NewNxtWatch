import {Link} from 'react-router-dom'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import {
  FirstDiv,
  NameLogoDiv,
  FirstDivUpper,
  FirstDivName,
  FirstDivBottom,
  Contact,
  IconsDiv,
  Icon,
  ContactPara,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const SideCommonDiv = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      const bgColor = isDark ? '#0f0f0f' : '#f9f9f9'
      const color = isDark ? '#ebebeb' : '#0f0f0f'
      return (
        <FirstDiv bgColor={bgColor}>
          <FirstDivUpper>
            <Link to="/">
              <NameLogoDiv color={color}>
                <AiFillHome />
                <FirstDivName>Home</FirstDivName>
              </NameLogoDiv>
            </Link>
            <Link to="/trending">
              <NameLogoDiv color={color}>
                <AiFillFire />
                <FirstDivName>Trending</FirstDivName>
              </NameLogoDiv>
            </Link>
            <Link to="/gaming">
              <NameLogoDiv color={color}>
                <SiYoutubegaming />
                <FirstDivName>Gaming</FirstDivName>
              </NameLogoDiv>
            </Link>
            <Link to="/saved-videos">
              <NameLogoDiv color={color}>
                <BiListPlus />
                <FirstDivName>Saved Videos</FirstDivName>
              </NameLogoDiv>
            </Link>
          </FirstDivUpper>
          <FirstDivBottom color={color}>
            <Contact>CONTACT US</Contact>
            <IconsDiv>
              <Icon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <Icon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <Icon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </IconsDiv>
            <ContactPara>
              Enjoy! Now to see your channels and recommendations!
            </ContactPara>
          </FirstDivBottom>
        </FirstDiv>
      )
    }}
  </ThemeContext.Consumer>
)

export default SideCommonDiv
