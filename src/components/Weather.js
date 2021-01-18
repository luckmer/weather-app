import { useState } from "react";
import { useSelector } from "react-redux";
import CurrentDay from "../hooks/CurrentDay"

const Weather = () =>{
    const [state, setState] = useState("");
    const { container, DisplayData, DisplayForeCast, Filter } =  useSelector(state => state.Data);
    const displayCurrentDay = CurrentDay(DisplayForeCast);



    return (
        <article>
        {DisplayForeCast.map(({ day, img }) => (
                <div key={day}>
                    <button  onClick = {()=>setState(day)}> 
                        <img src ={img} alt ={img} />
                    </button>
                </div>
            ))}
            
        </article>
    )
}

export default Weather

