import styled from 'styled-components'

export const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`
export const BottomDiv = styled.ul`
  display: flex;
`
export const NoSearchResultsDiv = styled.div`
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
export const RetryButton = styled.button`
  background-color: #4f46e5;
  border: none;
  border-radius: 3px;
  height: 27px;
  width: 70px;
  color: #ffffff;
  font-size: 10px;
`
export const LoaderDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 180px;
`
export const RightSideDiv = styled.div`
  width: 85%;
  background-color: ${props => props.bgColor};
`
export const TrendHeadingDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: ${props => props.color};
`
export const LogoDiv = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 30px;
  background-color: #000000;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const TrendHeading = styled.h1``
export const MainDiv = styled.div``
