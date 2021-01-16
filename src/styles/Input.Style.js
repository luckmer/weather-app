import styled from "styled-components";


export const Article = styled.article`
    display:flex;
    justify-content:center;
    align-items:center;
    width: 100%;
    height: 100%;
    flex-direction:column;

`
export const Form = styled.form`
    input{
        font-weight: 700;
        width: 100%;
        border: 0;
        border-bottom: 2px solid  #9b9b9b;
        outline: 0;
        font-size: 1.3rem;
        padding: 7px 0;
        background: transparent;
        transition: all 0.2s;
        margin-bottom: 20px;
        display:flex;
        flex-direction:column;
        &:focus {
            transition: all  0.2s;
            padding-bottom: 6px;  
            border-image: linear-gradient(to right,  #11998e,#38ef7d);
            border-image-slice: 1;
        }
    }

`
export const Card = styled.div`
    position: relative;
    display: block;
    width: 45.8vw;
    margin-right: 1.5vw;
    display: flex;
    justify-content: center;
`
export const Main = styled.div`
    display: flex;
    width: 100%;
`;

export const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
position: relative;
border:0;
margin: auto;
font-size: 25px;
cursor: pointer;
background-color:#EAEAEA;

span{
    padding: 0 20px 0 20px;
    position: relative;
    background-repeat: repeat;
    transition: background-position 300ms;
    color:#333;
    &::before {
        content:'';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        mix-blend-mode: difference;
        background-color:white;
        transform-origin: 100% 0;
        transform: scale3d(0, 1, 1);
        transition: transform 300ms;
    }
    &:hover {
        span {
            background-position: 0 0;
        }
    &::before {
        transform-origin: 0 0;
        transform: scale3d(1, 1, 1);
    }
}
`