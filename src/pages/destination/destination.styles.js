import styled from 'styled-components';

const StyledNumber = styled.div`
	display: flex;
	color: rgb(255, 255, 255, 0.25);
`;
const StyledButton = styled.button`
	border: none;
	background-color: transparent;
	color: aliceblue;
	padding-bottom: 15px;
	border-bottom: ${({ $active }) => ($active ? '3px solid aliceblue' : 'none')};
	margin-bottom: 54px;
	font-size: 14px;
`;

const StyledImage = styled.img`
	width: 150px;
	margin-bottom: 59px;

	@media screen and (width>=768px) {
		width: 300px;
	}

	@media screen and (width>=1024px) {
		width: 480px;
	}
`;

const StyledTitle = styled.div`
	display: flex;
	flex-direction: row;
	gap: 24px;
	margin-top: 24px;
	margin-bottom: 51px;
`;

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const StyledName = styled.h1`
	font-size: 56px;
`;
const StyledText = styled.p`
	font-size: 15px;
	padding: 0px 24px;
	line-height: 180%;
	text-align: center;
`;
const StyledLine = styled.span`
	width: 327px;
	height: 0.5px;
	background-color: rgb(255, 255, 255, 0.4);
	margin-bottom: 24px;
`;
const StyledTextKm = styled.h1`
	font-size: 14px;
`;
const StyledNumberKm = styled.h1`
	font-size: 28px;
	margin-bottom: 24px;
`;
const StyledContentDatos = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 12px;
`;

export {
	StyledNumber,
	StyledButton,
	StyledImage,
	StyledTitle,
	StyledContainer,
	StyledName,
	StyledText,
	StyledLine,
	StyledTextKm,
	StyledNumberKm,
	StyledContentDatos
};
