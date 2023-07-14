import styled from 'styled-components'

export const FirstDiv = styled.div`
  width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 650px;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
`
export const NameLogoDiv = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.color};
`
export const FirstDivName = styled.p`
  margin-left: 10px;
  font-size: 11px;
  font-weight: bold;
  text-decoration: none;
`
export const FirstDivUpper = styled.div`
  margin-right: 20px;
  margin-left: 20px;
`
export const FirstDivBottom = styled.div`
  margin-right: 20px;
  margin-left: 20px;
  color: ${props => props.color};
`

export const Contact = styled.p`
  font-size: 12px;
  font-weight: bold;
`
export const IconsDiv = styled.div`
  display: flex;
`
export const Icon = styled.img`
  height: 20px;
  margin-right: 10px;
`
export const ContactPara = styled.p`
  font-size: 12px;
`
