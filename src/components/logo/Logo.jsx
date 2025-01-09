import { Link } from "react-router-dom"
import { StyledHome } from "../../pages/home/home.styles";
import { StyledLogo } from "./logo.styles";

const Logo = () => {
    return (
        <Link to='/'>
            <StyledLogo src='/assets/shared/logo.svg' alt="" />
        </Link>
    );
};
export default Logo;