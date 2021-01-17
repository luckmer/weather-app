import { Input,Weather } from "../export";
import { useSelector } from "react-redux";


const Index = () =>{

    const state = useSelector(state => state.Data.DisplayData);
    
    return state  ?  <Weather/> :  <Input/>
}

export default Index
