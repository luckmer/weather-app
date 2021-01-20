import styled from "styled-components";



export const NavBarContext = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (min-width: 651px){
    padding-bottom: 40px;
    }
    @media screen and (max-width: 651px){
    padding-bottom: 20px;
    }
    li{
        cursor:pointer;
        list-style-type: none;
        margin: 0 20px 0 10px;
        display: inline;
        padding-bottom: 50px;
    }

`;


export const Grid = styled.header`
    font-family: 'Anton', sans-serif;
    transition: opacity .2s ease-out;
    position: fixed;
    width: 100%;

    @media screen and (max-width: 651px){
        padding: 5vh 0 0 0;
        li,a{
            font-size: 3vw ;
        }
    }

    @media screen and (min-width: 651px){
        padding: 5vh 11vw 0 11vw;
    }

`;
