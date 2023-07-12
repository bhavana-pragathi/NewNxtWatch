import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import SideCommonDiv from '../SideCommonDiv'
import VideoItem from '../VideoItem'
import {
  MainDiv,
  BottomDiv,
  RightSideDiv,
  LoaderDiv,
  NoSearchResultsDiv,
  NoSearchResultsHeading,
  NoSearchResultsImg,
  NoSearchResultsPara,
  RetryButton,
} from './styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class Video extends Component {
  state = {videoData: [], apiStatus: apiConstants.initial}

  componentDidMount() {
    this.getVideoData()
  }

  getVideoData = async () => {
    this.setState({apiStatus: apiConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.video_details.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        videoUrl: eachItem.video_url,
        thumbnailUrl: eachItem.thumbnail_url,
        name: eachItem.channel.name,
        profileImageUrl: eachItem.channel.profile_image_url,
        subscriberCount: eachItem.channel.subscriber_count,
        viewCount: eachItem.view_count,
        publishedAt: eachItem.published_at,
        description: eachItem.description,
      }))
      this.setState({
        videoData: updatedData,
        apiStatus: apiConstants.success,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  onRetry = () => {
    this.getVideoData()
  }

  renderSuccessView = () => {
    const {videoData} = this.state
    return (
      <>
        <VideoItem videoDetails={videoData} />
      </>
    )
  }

  renderLoadingView = () => (
    <LoaderDiv data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderDiv>
  )

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

  renderVideoPage = () => {
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
          <RightSideDiv>{this.renderVideoPage()}</RightSideDiv>
        </BottomDiv>
      </MainDiv>
    )
  }
}

export default Video
