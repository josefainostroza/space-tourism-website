import styled from 'styled-components';

const StyledHome = styled.div`
	padding: 24px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 24px;

	@media screen and (width>=1024px) {
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-top: 300px;
	}
`;

const StyledSubtitle = styled.h2`
	font-size: 16px;
	font-weight: 400;
	text-align: center;

	@media screen and (width>=768px) {
		font-size: 28px;
	}
	@media screen and (width>=1024px) {
		font-size: 28px;
	}
`;
const StyledTitle = styled.h1`
	font-size: 80px;
	text-align: center;

	@media screen and (width>=768px) {
		font-size: 144px;
	}
	@media screen and (width>=1024px) {
		font-size: 144px;
	}
`;
const StyledText = styled.p`
	font-size: 15px;
	font-weight: 400;
	text-align: center;

	@media screen and (width>=768px) {
		font-size: 16px;
		padding: 0px 128px;
	}
	@media screen and (width>=1024px) {
		font-size: 16px;
		text-align: start;
	}
`;

const StyledExplore = styled.span`
	font-family: 'Bellefair';
	font-size: 18px;
	padding: 62px 34px;
	background-color: #ffffff;
	border-radius: 50%;
	width: 144px;
	color: #0b0d17;

	@media screen and (width>=768px) {
		font-size: 32px;
		width: 272px;
		padding: 118px 78px;
	}
	@media screen and (width>=1024px) {
		font-size: 32px;
		width: 272px;
		padding: 118px 78px;
	}
`;
export { StyledHome, StyledSubtitle, StyledTitle, StyledText, StyledExplore };
