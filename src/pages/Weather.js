
import { useSelector } from "react-redux";
import Context from "../components/Context";



const Weather = () =>{
    const {DisplayForeCast:{dailyData,dailyHours} } = useSelector(state => state.Data);

    let data = dailyData.map((data) => data);
    let daily = dailyHours.map((day) => day)
    let daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
    let today = new Date();
    let day = today.getDay();
    let displayCurrentDay = daylist[day];

    
    return <Context
        DisplayForeCast={dailyData}
        data={data}
        dailyHours ={daily}
        displayCurrentDay={displayCurrentDay}
    />


}

export default Weather

