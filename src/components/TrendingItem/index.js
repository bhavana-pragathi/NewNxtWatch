import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import {
  Li,
  Thumbnail,
  Title,
  ContentDiv,
  Name,
  ViewsDiv,
  ViewsCount,
  PublishedAt,
  Dot,
  LinkItem,
} from './styledComponents'

const TrendingItem = props => {
  const {trendingDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    name,
    viewCount,
    publishedAt,
  } = trendingDetails
  const newDate = formatDistanceToNow(new Date(publishedAt), {addSuffix: true})

  return (
    <LinkItem to={`/videos/${id}`}>
      <Li>
        <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
        <ContentDiv>
          <Title>{title}</Title>
          <Name>{name}</Name>
          <ViewsDiv>
            <ViewsCount>{viewCount}</ViewsCount>
            <Dot>
              <BsDot />
            </Dot>
            <PublishedAt>{newDate}</PublishedAt>
          </ViewsDiv>
        </ContentDiv>
      </Li>
    </LinkItem>
  )
}

export default TrendingItem
