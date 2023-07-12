import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
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
  LinkItem,
} from './styledComponents'

const HomeItem = props => {
  const {homeDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    name,
    profileImageUrl,
    viewCount,
    publishedAt,
  } = homeDetails

  const newDate = formatDistanceToNow(new Date(publishedAt), {addSuffix: true})

  return (
    <LinkItem to={`/videos/${id}`}>
      <Li>
        <Thumbnail src={thumbnailUrl} alt={name} />
        <BottomDiv>
          <ProfileDiv>
            <ProfileImg src={profileImageUrl} alt={name} />
          </ProfileDiv>
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
        </BottomDiv>
      </Li>
    </LinkItem>
  )
}

export default HomeItem
