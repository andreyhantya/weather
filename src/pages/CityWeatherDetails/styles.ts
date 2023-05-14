import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const DetailsWrapper = styled.div`
  width: 500px;
  padding: 0 0 20px;
  margin: 0 auto;
  border-radius: 5px;
  font-family: 'Arial', sans-serif;
`

export const Title = styled.h1`
  padding: 5px;
  border-radius: 5px;
  background-color: #4b4b4b;
  color: #fff;
  text-align: center;
`

export const InformationWrapper = styled.div`
  padding-bottom: 10px;
  border-radius: 5px;
  background-color: #c1c1c1;
  color: #000;
  text-align: center;
  font-family: 'Arial', sans-serif;
  font-weight: bold;
`

export const HomeLink = styled(Link)`
  padding: 15px 30px;
  margin: 10px auto;
  border-radius: 5px;
  display: block;
  background-color: #4a8749;
  color: #fff;
  text-align: center;
  font-family: 'Arial', sans-serif;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    background-color: #11660b;
  }
`
