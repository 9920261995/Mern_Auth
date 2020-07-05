import styled from 'styled-components'
import { Card, Container,Col } from 'react-bootstrap'


export const Contain =  styled(Container)`
    /* background-color:gray; */
    padding-top:100px;
    padding-bottom:100px;
    

`

export const SignUpCard =  styled(Card)`
    background-color:whitesmoke;
    
   

`
export const Column = styled(Col)`
    padding:50px 60px;   

    display:block;
    /* text-align:center; */



`
export const ImageCol = styled(Col)`
  @media screen and (max-width: 991px) {
      display:none;
  
  }

`
export const Image = styled.img`
    height: auto;
    width:100%

`
