import styled from "styled-components"
import { useDispatch,useSelector } from "react-redux";
import { Test } from "../reducers/DataSlice";


const Grid = styled.header`
box-shadow: 11px 11px 52px -14px rgba(0, 0, 0, 0.2);
background-color: #EFF2F9;
ul{
    display: flex;
    width: 100vw;
    justify-content: space-between;
    padding : 2vh 1vw 3vh 1vw;
    align-items: center;
    flex-direction: row;
    list-style-type: none;
    }
`
const Li = styled.li`
text-decoration: none;
text-transform: uppercase;
font-weight: lighter;
line-height: 1px;
color: #1d1d1d;
`
const Button = styled.button`
text-decoration: none;
text-transform: uppercase;
font-weight:bold;
color: #1d1d1d;
cursor:pointer;
border:0;
`


const NavBar = () =>
{
    const dispatch = useDispatch()
    

    return (
        <Grid>
            <ul>
                <Li>
                    Weather
                </Li>
                <Li>
                    <Button onClick = {()=>dispatch(Test())} >
                        <span>Search</span>
                    </Button>
                </Li>
            </ul>
        </Grid>
    )   
}

export default NavBar
