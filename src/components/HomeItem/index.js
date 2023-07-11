import {
  Li,
  Thumbnail,
  ProfileDiv,
  ProfileImg,
  BottomDiv,
  Title,
  ContentDiv,
  Name,
  ViewsDiv,
  ViewsCount,
  PublishedAt,
  Dot,
} from './styledComponents'

const HomeItem = props => {
  const {homeDetails} = props
  const {
    title,
    thumbnailUrl,
    name,
    profileImageUrl,
    viewCount,
    publishedAt,
  } = homeDetails

  const onClickThumbnail = () => {}

  return (
    <Li>
      <Thumbnail onClick={onClickThumbnail} src={thumbnailUrl} alt={name} />
      <BottomDiv>
        <ProfileDiv>
          <ProfileImg src={profileImageUrl} alt={name} />
        </ProfileDiv>
        <ContentDiv>
          <Title>{title}</Title>
          <Name>{name}</Name>
          <ViewsDiv>
            <ViewsCount>{viewCount}</ViewsCount>
            <Dot>.</Dot>
            <PublishedAt>{publishedAt}</PublishedAt>
          </ViewsDiv>
        </ContentDiv>
      </BottomDiv>
    </Li>
  )
}

export default HomeItem
