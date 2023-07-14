import ReactPlayer from 'react-player'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import {
  VideoPlayer,
  PlayVideoTitle,
  PlayVideoStatus,
  PlayVideoStatusContainer,
  PlayVideoDot,
  PlaySocialButtonsContainer,
  SocialButton,
  ButtonText,
  HrLine,
  ChannelImage,
  ChannelContainer,
  ChannelInfo,
  ChannelName,
  ChannelSubscribers,
  ChannelDescription,
  BtnContainer,
} from './styledComponents'

const VideoPlayerView = props => {
  const {videoDetails} = props
  return (
    <VideoPlayer>
      <ReactPlayer url={videoDetails.videoUrl} controls width="100%" />
      <PlayVideoTitle>{videoDetails.title}</PlayVideoTitle>
      <PlayVideoStatusContainer>
        <PlayVideoStatus>
          {videoDetails.viewCount} views
          <PlayVideoDot> &#8226; </PlayVideoDot>
          {videoDetails.publishedAt}
        </PlayVideoStatus>
        <PlaySocialButtonsContainer>
          <BtnContainer>
            <SocialButton type="button">
              <AiOutlineLike size={25} />
              <ButtonText>Like</ButtonText>
            </SocialButton>
          </BtnContainer>
          <BtnContainer>
            <SocialButton type="button">
              <AiOutlineDislike size={25} />
              <ButtonText>Dislike</ButtonText>
            </SocialButton>
          </BtnContainer>
          <BtnContainer>
            <SocialButton type="button">
              <BiListPlus size={25} />
              <ButtonText>Save</ButtonText>
            </SocialButton>
          </BtnContainer>
        </PlaySocialButtonsContainer>
      </PlayVideoStatusContainer>
      <HrLine />
      <ChannelContainer>
        <ChannelImage src={videoDetails.profileImageUrl} alt="channel logo" />
        <ChannelInfo>
          <ChannelName>{videoDetails.name}</ChannelName>
          <ChannelSubscribers>
            {videoDetails.subscriberCount} Subscribers
          </ChannelSubscribers>
          <ChannelDescription>{videoDetails.description}</ChannelDescription>
        </ChannelInfo>
      </ChannelContainer>
    </VideoPlayer>
  )
}

export default VideoPlayerView
