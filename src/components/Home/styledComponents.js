import styled from 'styled-components'

export const MainDiv = styled.div``
export const BottomDiv = styled.div`
  display: flex;
`
export const SecondDiv = styled.div`
  background-color: ${props => props.bgColor};
  padding: 20px;
  width: 85%;
  color: ${props => props.color};
`
export const SearchDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  margin-left: 40px;
  margin-top: 20px;
`
export const SearchInput = styled.input`
  font-size: 10px;
  height: 22px;
  width: 300px;
  padding-left: 9px;
  outline: none;
`
export const SearchButton = styled.button`
  background-color: #ebebeb;
  border-width: 1px;
  border-color: #64748b;
  height: 22px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const LoaderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
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
export const Ul = styled.ul`
  list-style-type: none;
  flex-wrap: wrap;
  display: flex;
`
export const SideCommonDivMain = styled.div`
  margin-left: 20px;
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  width: 100%;
  background-size: cover;
  height: 200px;
  display: ${props => props.display};
  justify-content: space-between;
  padding: 20px;
`
export const BannerLeftPart = styled.div`
  width: 50%;
`
export const BannerRightPart = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const BannerImage = styled.img`
  width: 80px;
  height: 30px;
`
export const BannerButton = styled.button`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border: 1px solid #000000;
  color: #000000;
  background: none;
`
export const BannerText = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #000000;
  @media screen and (min-width: 576px) {
    font-size: 20px;
  }
`
export const BannerCloseButton = styled.button`
  border: none;
  background: none;
  height: 25px;
`
