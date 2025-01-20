import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledHamburguesa = styled.img`
	position: absolute;
	width: 24px;
	height: 21px;
	right: 24px;
	top: 33px;
	z-index: 10;

	@media screen and (width>=768px) {
		display: none;
	}

	@media screen and (width>=1024px) {
		display: none;
	}
`;

const StyledMenu = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 32px;
	position: absolute;
	background-color: rgb(11, 13, 23, 0.15);
	width: 254px;
	height: 100vh;
	padding-top: 29px;
	padding-left: 32px;
	right: 0px;
	top: 0;
	backdrop-filter: blur(50px);
	translate: ${({ $isOpen }) => ($isOpen ? '0' : '100%')};

	@media screen and (width>=768px) {
		top: -25px;
		right: -25px;
		position: relative;
		flex-direction: row;
		padding-top: 39px;
		padding-left: 32px;
		gap: 48px;
		width: 640px;
		height: 96px;
		translate: unset;
		background-color: rgb(255, 255, 255, 0.05);
		backdrop-filter: blur(70px);
	}
	@media screen and (width>=1024px) {
		flex-direction: row;
		gap: 48px;
		top: 0px;
		right: -25px;
	}
`;

const StyledLink = styled(NavLink)``;

export { StyledHamburguesa, StyledMenu, StyledLink };
