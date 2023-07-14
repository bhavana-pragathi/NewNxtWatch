import styled from 'styled-components'

export const MainDiv = styled.div``
export const BottomDiv = styled.div`
  display: flex;
`
export const SecondDiv = styled.div`
  background-color: #f1f1f1;
  padding: 20px;
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
`
export const NotFoundDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoSearchResultsImg = styled.img`
  width: 30%;
`
export const NoSearchResultsHeading = styled.h1`
  font-size: 20px;
`
export const NoSearchResultsPara = styled.p`
  font-size: 13px;
  color: #7e858e;
`
