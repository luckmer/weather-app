import { Input,Weather } from "../export";
import { useSelector } from "react-redux";
const Index = () =>{
    const state = useSelector(state => state.Data.DisplayData);
    if (state.cod === "404") return <div> {state.message} </div>

    return state ? <Weather /> : <Input/>
}

export default Index