import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import Header from '../Header'
import SideCommonDiv from '../SideCommonDiv'
import GamingItem from '../GamingItem'
import {
  MainDiv,
  Ul,
  BottomDiv,
  NoSearchResultsDiv,
  NoSearchResultsImg,
  NoSearchResultsHeading,
  NoSearchResultsPara,
  RetryButton,
  LoaderDiv,
  RightSideDiv,
  TrendHeadingDiv,
  LogoDiv,
  TrendHeading,
} from './styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {gamingData: [], apiStatus: apiConstants.initial}

  componentDidMount() {
    this.getGamingData()
  }

  getGamingData = async () => {
    this.setState({apiStatus: apiConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
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
        viewCount: eachItem.view_count,
      }))
      this.setState({
        gamingData: updatedData,
        apiStatus: apiConstants.success,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  onRetry = () => {
    this.getGamingData()
  }

  renderSuccessView = () => {
    const {gamingData} = this.state
    return (
      <>
        <Ul>
          {gamingData.map(eachItem => (
            <GamingItem key={eachItem.id} gamingDetails={eachItem} />
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

  renderGamingPage = () => {
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
      <MainDiv>
        <Header />
        <BottomDiv>
          <SideCommonDiv />
          <RightSideDiv>
            <TrendHeadingDiv>
              <LogoDiv>
                <SiYoutubegaming style={{color: 'Red'}} />
              </LogoDiv>
              <TrendHeading>Gaming</TrendHeading>
            </TrendHeadingDiv>
            {this.renderGamingPage()}
          </RightSideDiv>
        </BottomDiv>
      </MainDiv>
    )
  }
}

export default Gaming
