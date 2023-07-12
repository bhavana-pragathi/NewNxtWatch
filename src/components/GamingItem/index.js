import {Li, Thumbnail, Title, ViewsCount, LinkItem} from './styledComponents'

const GamingItem = props => {
  const {gamingDetails} = props
  const {id, title, thumbnailUrl, viewCount} = gamingDetails
  return (
    <LinkItem to={`/videos/${id}`}>
      <Li>
        <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
        <Title>{title}</Title>
        <ViewsCount>{viewCount} Watching Worldwide</ViewsCount>
      </Li>
    </LinkItem>
  )
}

export default GamingItem
