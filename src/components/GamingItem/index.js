import {Li, Thumbnail, Title, ViewsCount} from './styledComponents'

const GamingItem = props => {
  const {gamingDetails} = props
  const {title, thumbnailUrl, viewCount} = gamingDetails
  return (
    <Li>
      <Thumbnail src={thumbnailUrl} alt={title} />
      <Title>{title}</Title>
      <ViewsCount>{viewCount} Watching Worldwide</ViewsCount>
    </Li>
  )
}

export default GamingItem
