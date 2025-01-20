import styled from 'styled-components';

const StyledLayout = styled.div`
	height: 100vh;
	background-image: url(${({ $backgrounds }) => $backgrounds.mobile});
	background-repeat: no-repeat;
	background-size: cover;

	@media screen and (width>=768px) {
		background-image: url(${({ $backgrounds }) => $backgrounds.tablet});
		background-repeat: no-repeat;
	}

	@media screen and (width>=1024px) {
		background-image: url(${({ $backgrounds }) => $backgrounds.desktop});
		background-repeat: no-repeat;
	}
`;
export { StyledLayout };
