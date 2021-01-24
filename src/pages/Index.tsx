import { Input,Weather } from "../export";
import { useSelector,TypedUseSelectorHook } from "react-redux";
import {RootState } from "../interfaces/Index.Interface";


const Index = () =>{
    const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
    const state = useTypedSelector((state) => state.DisplayData)
    if (state.cod === "404") return <div> {state.message} </div>

    return  state ? <Weather/> :  <Input/>
}

export default Index