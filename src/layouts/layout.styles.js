import styled from "styled-components";

const StyledLayout = styled.div`
height:100vh;
background-image:url(${({$backgrounds}) => $backgrounds.mobile});
`
export {StyledLayout}