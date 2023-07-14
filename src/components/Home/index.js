import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineSearch, AiOutlineClose} from 'react-icons/ai'
import Header from '../Header'
import HomeItem from '../HomeItem'
import SideCommonDiv from '../SideCommonDiv'
import {
  SearchInput,
  SecondDiv,
  MainDiv,
  SearchDiv,
  SearchButton,
  BottomDiv,
  LoaderDiv,
  NoSearchResultsDiv,
  NoSearchResultsImg,
  NoSearchResultsHeading,
  NoSearchResultsPara,
  RetryButton,
  Ul,
  BannerButton,
  BannerCloseButton,
  BannerContainer,
  BannerImage,
  BannerLeftPart,
  BannerRightPart,
  BannerText,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const apiConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class Home extends Component {
  state = {
    apiStatus: apiConstants.initial,
    homeData: [],
    searchInput: '',
    bannerDisplay: 'flex',
  }

  componentDidMount() {
    this.getHomeItems()
  }

  getHomeItems = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: apiConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
      this.setState({homeData: updatedData, apiStatus: apiConstants.success})
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  onRetry = () => {
    this.getHomeItems()
  }

  renderInProgressView = () => (
    <LoaderDiv data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderDiv>
  )

  renderSuccessView = () => {
    const {homeData} = this.state
    const noSearchResults = homeData.length === 0
    return noSearchResults ? (
      <NoSearchResultsDiv>
        <NoSearchResultsImg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <NoSearchResultsHeading>No Search Results Found</NoSearchResultsHeading>
        <NoSearchResultsPara>
          Try different key words or remove search filter
        </NoSearchResultsPara>
        <RetryButton>Retry</RetryButton>
      </NoSearchResultsDiv>
    ) : (
      <Ul>
        {homeData.map(eachItem => (
          <HomeItem key={eachItem.id} homeDetails={eachItem} />
        ))}
      </Ul>
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

  renderHomePage = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.inProgress:
        return this.renderInProgressView()
      case apiConstants.success:
        return this.renderSuccessView()
      case apiConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearch = () => {
    this.getHomeItems()
  }

  onEnterSearch = event => {
    if (event.key === 'Enter') {
      this.getHomeItems()
    }
  }

  onCloseBanner = () => {
    this.setState({bannerDisplay: 'none'})
  }

  render() {
    const {searchInput, bannerDisplay} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          const bgColor = isDark ? '#0f0f0f' : '#f9f9f9'
          const color = isDark ? '#ebebeb' : '#0f0f0f'
          const display = bannerDisplay === 'flex' ? 'flex' : 'none'

          return (
            <MainDiv>
              <Header />
              <BottomDiv>
                <SideCommonDiv />
                <SecondDiv bgColor={bgColor} color={color}>
                  <BannerContainer data-testid="banner" display={display}>
                    <BannerLeftPart>
                      <BannerImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <BannerText>Buy Nxt Watch Premium</BannerText>
                      <BannerButton type="button">GET IT NOW</BannerButton>
                    </BannerLeftPart>
                    <BannerRightPart>
                      <BannerCloseButton
                        data-testid="close"
                        onClick={this.onCloseBanner}
                      >
                        <AiOutlineClose size={25} />
                      </BannerCloseButton>
                    </BannerRightPart>
                  </BannerContainer>
                  <SearchDiv>
                    <SearchInput
                      type="search"
                      placeholder="Search"
                      onChange={this.onChangeSearchInput}
                      value={searchInput}
                      onKeyDown={this.onEnterSearch}
                    />
                    <SearchButton
                      data-testid="searchButton"
                      type="button"
                      onClick={this.onClickSearch}
                    >
                      <AiOutlineSearch />
                    </SearchButton>
                  </SearchDiv>
                  {this.renderHomePage()}
                </SecondDiv>
              </BottomDiv>
            </MainDiv>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
