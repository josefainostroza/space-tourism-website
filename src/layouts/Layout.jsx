import { Outlet, useLocation } from "react-router-dom"
import { StyledLayout } from "./layout.styles";
import Header from "../components/header/Header";
import { BACKGROUNDS } from "../components/constants/backgrounds";

const Layout = () => {
    const {pathname} = useLocation();
    const backgrounds = getBackgroundImages(pathname);
    return (
        <StyledLayout $backgrounds={backgrounds}>
        <Header/>
        <Outlet/>
        </StyledLayout>
    )
}

const getBackgroundImages = path => {
    if (path === '/') return BACKGROUNDS.HOME;

    const finalPath = path.substring(1).toUpperCase();

    return BACKGROUNDS[finalPath]
}
export default Layout;