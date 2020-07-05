import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const HeadLink = styled(Link)`
    display:${props => props.display};
    padding:10px 20px 10px 20px;
    
    &:focus{
        color: black;
    }

    &:hover{
        color: black;
        text-decoration:none;

    }
`

