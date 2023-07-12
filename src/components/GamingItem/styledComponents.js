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

export const ViewsCount = styled.p`
  color: #64748b;
  font-size: 10px;
  margin-right: 10px;
`
export const LinkItem = styled(Link)`
  text-decoration: none;
`
