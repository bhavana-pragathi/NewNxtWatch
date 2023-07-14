import Header from '../Header'
import SideCommonDiv from '../SideCommonDiv'
import {
  MainDiv,
  BottomDiv,
  SecondDiv,
  NoSearchResultsImg,
  NoSearchResultsHeading,
  NoSearchResultsPara,
  NotFoundDiv,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      const bgColor = isDark ? '#0f0f0f' : '#f9f9f9'
      const color = isDark ? '#ebebeb' : '#0f0f0f'
      return (
        <MainDiv>
          <Header />
          <BottomDiv>
            <SideCommonDiv />
            <SecondDiv bgColor={bgColor} color={color}>
              <NotFoundDiv>
                <NoSearchResultsImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                  alt="not found"
                />
                <NoSearchResultsHeading>Page Not Found</NoSearchResultsHeading>
                <NoSearchResultsPara>
                  We are sorry, the page you requested could not be found.
                </NoSearchResultsPara>
              </NotFoundDiv>
            </SecondDiv>
          </BottomDiv>
        </MainDiv>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
