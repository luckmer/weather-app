import Context from "../components/Context";
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import {RootWeather } from "../interfaces/Index.Interface";



const Weather = () =>{
    const useTypedSelector: TypedUseSelectorHook<RootWeather> = useSelector
    const { DisplayForeCast } = useTypedSelector((state) => state);
    
    let data= DisplayForeCast.dailyData.map((data) => data);
    let daily = DisplayForeCast.dailyHours.map((day) => day);
    
    let daylist: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
    
    let today = new Date();
    let day = today.getDay();
    let displayCurrentDay = daylist[day];

    return <Context data={data} dailyHours={daily} displayCurrentDay={displayCurrentDay} />
}

export default Weather

