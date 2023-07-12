import {formatDistanceToNow} from 'date-fns'
import {BiListPlus} from 'react-icons/bi'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {
  VideoTitle,
  ViewsCount,
  ViewsDiv,
  PublishedAt,
  Dot,
  ViewsLikeDiv,
  LikeShareButton,
  LikeShareDiv,
  Hr,
  ContentDiv,
  VideoProfileLogo,
  NameSubscribersDiv,
  Name,
  Subs,
  Desc,
  Thumbnail,
} from './styledComponents'

const VideoItem = props => {
  const {videoDetails, onClickSave} = props
  const {
    id,
    title,
    thumbnailUrl,
    name,
    profileImageUrl,
    subscriberCount,
    viewCount,
    publishedAt,
    description,
  } = videoDetails

  const newDate = formatDistanceToNow(new Date(publishedAt), {addSuffix: true})

  const onClickSaveButton = () => {
    onClickSave(id)
  }

  return (
    <>
      <Thumbnail src={thumbnailUrl} alt={name} />
      <VideoTitle>{title}</VideoTitle>
      <ViewsLikeDiv>
        <ViewsDiv>
          <ViewsCount>{viewCount}</ViewsCount>
          <Dot>.</Dot>
          <PublishedAt>{newDate}</PublishedAt>
        </ViewsDiv>
        <LikeShareDiv>
          <LikeShareButton>
            <AiOutlineLike />
          </LikeShareButton>
          <LikeShareButton>
            <AiOutlineDislike />
          </LikeShareButton>
          <LikeShareButton onClick={onClickSaveButton}>
            <BiListPlus />
          </LikeShareButton>
        </LikeShareDiv>
      </ViewsLikeDiv>
      <Hr />
      <ContentDiv>
        <VideoProfileLogo src={profileImageUrl} alt={name} />
        <NameSubscribersDiv>
          <Name>{name}</Name>
          <Subs>{subscriberCount}</Subs>
        </NameSubscribersDiv>
      </ContentDiv>
      <Desc>{description}</Desc>
    </>
  )
}

export default VideoItem
