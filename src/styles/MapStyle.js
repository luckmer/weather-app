import styled from "styled-components";


export const ActualDayStyle = styled.section`

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
max-width: 95%;
margin: auto;
padding-top: 3vh;
padding-bottom: 3vh;
h1{
    font-size:3vw;
}



@media screen and (max-width: 500px){
    h1{
        font-size:24px;
    }
    p{
        line-height:30px;
        text-align:center;
    }

}

`;
export const CurrentImgStyle = styled.div`
display: flex;
align-items: center;
img{
    width: 100px;
    height: 100px;
    object-fit: scale-down;
}
div{
    width:100%;
}
span{
    font-size: 5rem;
}
`;


export const Padding = styled.article`
padding : 0 11vw 8vw 11vw;
@media screen and (max-width : 500px){
    padding : 0 6vw 8vw 5vw;

}
`;


export const CurrentDay = styled.div`
    padding: 3vh 2vw 3vh 2vw;
    h1{
        font-size:2vw;
    }
    @media screen and (max-width : 500px){
        h1{
            font-size:30px;
        }
    }
`;

//weather panels
export const MapStyle = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: center;
align-items:center;
padding-bottom : 4vw;
`;

export const GraphStyle = styled.section`
    max-width: 60em;
    margin: auto;
    padding:0 2vw 5vw 2vw;
    display: flex;
    justify-content: center;
    align-items: center;

`;


export const Hover = styled.section`
    &:hover{
        background-color:#fff;
    }
`;
export const Card = styled.div`
    display:flex;
    margin: 0 1vw 0 1vw;
    justify-content: center;
    flex-direction: column;
    @media screen and (max-width: 500px){
        padding:0 6px 30px 6px ;
    }
`
export const Header = styled.div`
    
    width:10em;
    color: #333;
    float:left;
    text-align:left;
    margin:auto;
    font-size: 15px;
    font-weight: 700;
    padding: 5px 15px;
    @media screen and (max-width : 500px){
        width:5em;
    }
`
export const Img = styled.div`
    div{
    margin: auto;
    max-width: 40px;
    }

    span{
        font-size:30px;
        margin:auto;
        max-width:40px;
    }
`
//table 

export const Table = styled.table`
border: 1px solid #EFF2F9;
background-color: #fff;
margin:auto;

td {
    text-align:center;
    padding:5px 15px 5px 15px;
    border: 1px solid #EFF2F9;
    color:#333;
}   

thead,
tfoot {
    background-color: #fff;
    color: #333;
}

`