import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400&display=swap');

*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

html, body, #root {
    height: 100%;   
}

body{
    font: 14px, 'Roboto', sans-serif;
    background-color:#FAFAFA;
    color: #333;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased !important;
    .pageManager{
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
    }
}

ul{
    list-style: none;
}

a{
     text-decoration: none;
}
`;

export const colors = {
    purple: "#2B2554", 
    purpleAscent: "#E5E0EE",
    orange: "#FF5E03",
    red: "#F55454",
    white: "#FAFAFA",
    yellow: "#FFF6AA",
}

export const shadow = {
    big: " 0px 5px 10px 0px #0000004D",
    small:  "0px 4px 4px 0px #00000040"
}

export const margin = {
    big: "1.75rem",
    medium:"1rem",
    small:"0.5rem",
}

export const padding = {
    big: "1rem",
    medium:"0.5rem",
    small:"0.25rem",
}

export const border = {
    size: {
        big: "1.5rem",
        medium: "1rem",
        small: "0.5rem",
    },
    radius: {
        big: "2rem",
        medium: "1.25rem",
        small: "0.75rem",
    },
    color: {
        lilac: "4px solid rgba(166, 145, 225, 1)",
        dark: "4px solid rgba(0, 0, 0, 0,3)"
    }
}

export const button = {
    size:{
        big:"3rem",
        medium:"2rem",
        small: "1.5rem",
    },
    font:{
        big:"1.5rem",
        medium: "1.25rem",
        small: "1rem",
    }
}

export const font = {

    big: "2rem",
    medium: "1.5rem",
    small: "1.25rem",

}

export const gradient = {
    orangeLight: "linear-gradient(180deg, #F58E54 0%, #F55454 100%)",
    orangeDark:"linear-gradient(180deg, rgba(255, 94, 3, 0.7) 34.38%, #B71676 100%)",
    purpleDark: "linear-gradient(180deg, #271F56 0%, #05073C 100%)",
    purpleLight: "linear-gradient(180deg, #362E69 0%, #1E1749 100%)"
}


