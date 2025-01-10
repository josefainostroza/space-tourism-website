import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledHamburguesa = styled.img`
position: absolute;
width:24px;
height:21px;
right:24px;
top: 33px;
z-index: 10;
`;

const StyledMenu = styled.ul`
position: absolute;
background-color: rgb(11, 13, 23, 0.15);
width: 254px;
height: 100vh;
padding-top: 133px;
padding-left: 32px;
right: 0px;
top: 0;
backdrop-filter: blur(50px);
translate: ${({ $isOpen }) => ($isOpen ? '0' : '100%')};

`;

const StyledLink = styled(NavLink)`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: start;
margin: 32px;
`;

export  {StyledHamburguesa, StyledMenu, StyledLink};