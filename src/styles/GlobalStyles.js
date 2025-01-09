import { createGlobalStyle } from 'styled-components';
import './normalize.css';
export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    img {
        max-width: 100%;
        display: block;
    }

    ul {
        list-style: none;
        padding-left: 0;
        margin-top: 0;
        margin-bottom: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    body{
        margin: 0;
        color: #FFFFFF;
        font-family: "Barlow";
        background-color: #0B0D17; 
        padding: 24px;
        
    }

    h1{
        font-family: "Bellefair";
        margin-block: 0;
    }
    h2{
        font-family: "Barlow";
        margin-block: 0;
    }

`;