import ThemeContext from '../../context/ThemeContext'
import {
  ItemLink,
  TrendingListItem,
  TrendingThumbNailImage,
  TrendingVideoDetails,
  TrendingProfileImage,
  TrendingContentSection,
  TrendingTitle,
  TrendingChannelName,
  TrendingViewsAndDate,
  TrendingDot,
} from './styledComponents'

const VideoItem = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = videoDetails
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        const color = isDark ? '#f9f9f9' : '#231f20'
        return (
          <ItemLink to={`/videos/${id}`} className="link">
            <TrendingListItem>
              <TrendingThumbNailImage
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <TrendingVideoDetails>
                <TrendingProfileImage
                  src={profileImageUrl}
                  alt="channel logo"
                />
                <TrendingContentSection>
                  <TrendingTitle color={color}>{title}</TrendingTitle>
                  <TrendingChannelName>{name}</TrendingChannelName>
                  <TrendingViewsAndDate>
                    {viewCount} views<TrendingDot> &#8226; </TrendingDot>
                    {publishedAt}
                  </TrendingViewsAndDate>
                </TrendingContentSection>
              </TrendingVideoDetails>
            </TrendingListItem>
          </ItemLink>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoItem
