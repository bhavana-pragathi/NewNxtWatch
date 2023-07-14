import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiFillFire} from 'react-icons/ai'
import Header from '../Header'
import SideCommonDiv from '../SideCommonDiv'
import TrendingItem from '../TrendingItem'
import {
  MainDiv,
  BottomDiv,
  SecondDiv,
  NoSearchResultsDiv,
  NoSearchResultsImg,
  NoSearchResultsHeading,
  NoSearchResultsPara,
  RetryButton,
  LoaderDiv,
  TrendHeadingDiv,
  LogoDiv,
  TrendHeading,
  Ul,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class TrendingVideos extends Component {
  state = {trendingData: [], apiStatus: apiConstants.initial}

  componentDidMount() {
    this.getTrendingData()
  }

  getTrendingData = async () => {
    this.setState({apiStatus: apiConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        thumbnailUrl: eachItem.thumbnail_url,
        name: eachItem.channel.name,
        profileImageUrl: eachItem.channel.profile_image_url,
        viewCount: eachItem.view_count,
        publishedAt: eachItem.published_at,
      }))
      this.setState({
        trendingData: updatedData,
        apiStatus: apiConstants.success,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  onRetry = () => {
    this.getTrendingData()
  }

  renderSuccessView = () => {
    const {trendingData} = this.state
    return (
      <>
        <Ul>
          {trendingData.map(eachItem => (
            <TrendingItem key={eachItem.id} videoDetails={eachItem} />
          ))}
        </Ul>
      </>
    )
  }

  renderFailureView = () => (
    <NoSearchResultsDiv>
      <NoSearchResultsImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <NoSearchResultsHeading>
        Oops! Something Went Wrong
      </NoSearchResultsHeading>
      <NoSearchResultsPara>
        We are having some trouble to complete your request.
        <br />
        Please try again.
      </NoSearchResultsPara>
      <RetryButton onClick={this.onRetry}>Retry</RetryButton>
    </NoSearchResultsDiv>
  )

  renderLoadingView = () => (
    <LoaderDiv data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderDiv>
  )

  renderTrendingPage = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.inProgress:
        return this.renderLoadingView()
      case apiConstants.success:
        return this.renderSuccessView()
      case apiConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
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
                <SecondDiv
                  data-testid="trending"
                  bgColor={bgColor}
                  color={color}
                >
                  <TrendHeadingDiv>
                    <LogoDiv>
                      <AiFillFire size={35} color="#ff0000" />
                    </LogoDiv>
                    <TrendHeading>Trending</TrendHeading>
                  </TrendHeadingDiv>
                  {this.renderTrendingPage()}
                </SecondDiv>
              </BottomDiv>
            </MainDiv>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default TrendingVideos
