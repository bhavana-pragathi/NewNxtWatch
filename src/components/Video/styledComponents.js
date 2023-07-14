import styled from 'styled-components'

export const BottomDiv = styled.ul`
  display: flex;
`
export const MainDiv = styled.div``
export const RightSideDiv = styled.div`
  width: 85%;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
`
export const LoaderDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 250px;
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
export const SuccessDiv = styled.div``

export const FirstDiv = styled.div`
  width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 650px;
`
export const NameLogoDiv = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
`
export const FirstDivName = styled.p`
  margin-left: 10px;
  font-size: 11px;
  font-weight: bold;
`
export const FirstDivUpper = styled.div``
export const FirstDivBottom = styled.div``

export const Contact = styled.p`
  font-size: 12px;
  font-weight: bold;
  margin-left: 20px;
`
export const IconsDiv = styled.div`
  display: flex;
`
export const Icon = styled.img`
  height: 20px;
  margin-right: 10px;
  margin-left: 20px;
`
export const ContactPara = styled.p`
  font-size: 12px;
  margin-left: 20px;
`
export const Ul = styled.ul`
  list-style-type: none;
`
