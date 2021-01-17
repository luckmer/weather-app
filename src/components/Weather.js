import {useSelector } from "react-redux";
const Weather = () =>{
    const countryData = useSelector(state => state.Data.DisplayData);
    const ForeCastData = useSelector(state => state.Data.DisplayForeCast);

    

    return (
        <article>
            
            
        </article>
    )
}

export default Weather
