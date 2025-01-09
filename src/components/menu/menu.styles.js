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
right: 0px;
top: 0;
backdrop-filter: blur(50px);
`;

const StyledLink = styled(NavLink)``;

export  {StyledHamburguesa, StyledMenu, StyledLink};