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
} from './styledComponents'

const TrendingItem = props => {
  const {trendingDetails} = props
  const {title, thumbnailUrl, name, viewCount, publishedAt} = trendingDetails

  return (
    <Li>
      <Thumbnail src={thumbnailUrl} alt={name} />
      <ContentDiv>
        <Title>{title}</Title>
        <Name>{name}</Name>
        <ViewsDiv>
          <ViewsCount>{viewCount}</ViewsCount>
          <Dot>.</Dot>
          <PublishedAt>{publishedAt}</PublishedAt>
        </ViewsDiv>
      </ContentDiv>
    </Li>
  )
}

export default TrendingItem
