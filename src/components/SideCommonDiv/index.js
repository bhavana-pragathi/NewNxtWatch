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

const SideCommonDiv = () => (
  <FirstDiv>
    <FirstDivUpper>
      <Link to="/">
        <NameLogoDiv>
          <AiFillHome />
          <FirstDivName>Home</FirstDivName>
        </NameLogoDiv>
      </Link>
      <Link to="/trending">
        <NameLogoDiv>
          <AiFillFire />
          <FirstDivName>Trending</FirstDivName>
        </NameLogoDiv>
      </Link>
      <Link to="/gaming">
        <NameLogoDiv>
          <SiYoutubegaming />
          <FirstDivName>Gaming</FirstDivName>
        </NameLogoDiv>
      </Link>
      <Link to="/saved-videos">
        <NameLogoDiv>
          <BiListPlus />
          <FirstDivName>Saved Videos</FirstDivName>
        </NameLogoDiv>
      </Link>
    </FirstDivUpper>
    <FirstDivBottom>
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

export default SideCommonDiv
