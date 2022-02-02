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
    background: #ecf1f8;
    color: #333;
    -webkit-font-smoothing: antialiased !important;
}

ul{
    list-style: none;
}
`;

export const colors = {
    purple: "#2B2554", 
    purpleAscent: "#E5E0EE",
    orange: "#FF5E03",
    red: "#F55454",
    white: "#FAFAFA"
}

export const shadow = {
    big: " 0px 5px 10px 0px #0000004D",
    small:  "0px 4px 4px 0px #00000040"
}

export const spacing = {
    greatMargin: "1.75rem",
    greatPadding: "1.5rem",
    mediumMargin:"1rem",
    mediumPadding:"0.75rem",
    smallMargin:"0.5rem",
    smallPadding:"0.25rem"
}

export const margin = {
    big: "1.75rem",
    medium:"1rem",
    small:"0.5rem",
}

export const padding = {
    great: "1.5rem",
    medium:"0.75rem",
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
    size:{
        big: "2rem",
        medium: "1.5rem",
        small: "1.25rem",
    },
}

export const gradient = {
    light: "linear-gradient(180deg, #F58E54 0%, #F55454 100%)",
    dark:"linear-gradient(180deg, rgba(255, 94, 3, 0.7) 34.38%, #B71676 100%)",
}


