import { useDispatch } from "react-redux";
import { Test } from "../reducers/DataSlice";
import { Grid, NavBarContext } from "../styles/NavBarContext";


const NavBar = () =>{
    const dispatch = useDispatch()
    return (
        <Grid>
        <NavBarContext>
            <ul>
                <li>Weather</li>
            </ul>
            <ul>
                <li onClick = {()=>dispatch(Test())}>
                    Search
                </li>
            </ul>
        </NavBarContext>
    </Grid>
    )   
}

export default NavBar
