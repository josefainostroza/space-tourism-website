import styled from "styled-components";

const StyledHome = styled.div`
 
 padding: 24px;
 display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
 gap: 24px;
`;

const StyledSubtitle = styled.h2`
 font-size: 16px;
 font-weight: 400;
text-align:center;
`;
const StyledTitle = styled.h1`
font-size: 80px;
text-align:center;
`;
const StyledText = styled.p`
  font-size: 15px;
 font-weight: 400;
 text-align:center;
`;

const StyledExplore = styled.span`

font-family: "Bellefair";
font-size: 18px;
padding: 62px 34px;
background-color: #ffffff;
border-radius: 1000px;
width: 144px; 
color: #0B0D17;

`;
export { StyledHome,StyledSubtitle, StyledTitle, StyledText, StyledExplore};