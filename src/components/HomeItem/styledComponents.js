import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  width: 25%;
  margin-bottom: 10px;
  margin-right: 20px;
`
export const Thumbnail = styled.img`
  height: 150px;
  width: 270px;
`
export const Title = styled.p`
  font-size: 11px;
`
export const ProfileImg = styled.img`
  height: 27px;
`
export const Name = styled.p`
  color: #64748b;
  font-size: 10px;
`
export const ViewsCount = styled.p`
  color: #64748b;
  font-size: 10px;
  margin-right: 10px;
`
export const PublishedAt = styled.p`
  color: #64748b;
  font-size: 10px;
`
export const ProfileDiv = styled.div`
  margin-top: 15px;
  margin-right: 5px;
`
export const BottomDiv = styled.div`
  display: flex;
  width: 270px;
`
export const ContentDiv = styled.div`
  flex-wrap: wrap;
`
export const ViewsDiv = styled.div`
  display: flex;
  align-items: center;
`
export const Dot = styled.p`
  font-weight: bold;
  color: #000000;
  font-size: 15px;
  margin-right: 10px;
`
export const LinkItem = styled(Link)`
  text-decoration: none;
`
