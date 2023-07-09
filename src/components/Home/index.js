import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineSearch, AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import Header from '../Header'
import HomeItem from '../HomeItem'
import {
  SearchInput,
  SecondDiv,
  MainDiv,
  SearchDiv,
  SearchButton,
  FirstDiv,
  FirstDivName,
  NameLogoDiv,
  BottomDiv,
  LoaderDiv,
  NoSearchResultsDiv,
  NoSearchResultsImg,
  NoSearchResultsHeading,
  NoSearchResultsPara,
  RetryButton,
  Ul,
} from './styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class Home extends Component {
  state = {apiStatus: apiConstants.initial, homeData: [], searchInput: ''}

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
        alt="failure image"
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

  render() {
    const {searchInput} = this.state
    return (
      <MainDiv>
        <Header />
        <BottomDiv>
          <FirstDiv>
            <NameLogoDiv>
              <AiFillHome />
              <FirstDivName>Home</FirstDivName>
            </NameLogoDiv>
            <NameLogoDiv>
              <AiFillFire />
              <FirstDivName>Trending</FirstDivName>
            </NameLogoDiv>
            <NameLogoDiv>
              <SiYoutubegaming />
              <FirstDivName>Gaming</FirstDivName>
            </NameLogoDiv>
            <NameLogoDiv>
              <BiListPlus />
              <FirstDivName>Saved Videos</FirstDivName>
            </NameLogoDiv>
          </FirstDiv>
          <SecondDiv>
            <SearchDiv>
              <SearchInput
                type="search"
                placeholder="Search"
                onChange={this.onChangeSearchInput}
                value={searchInput}
                onKeyDown={this.onEnterSearch}
              />
              <SearchButton type="button" onClick={this.onClickSearch}>
                <AiOutlineSearch />
              </SearchButton>
            </SearchDiv>
            {this.renderHomePage()}
          </SecondDiv>
        </BottomDiv>
      </MainDiv>
    )
  }
}

export default Home
