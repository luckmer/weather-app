export const Api = async (location) =>{
    const API = (location) => `https://api.openweathermap.org/data/2.5/weather?q=${ location }&appid=${ process.env.REACT_APP_API_KEY }`;

    try {
        return await (await fetch(API(location), { origin: "cors" })).json();
    } catch (err) {
        throw err
    }
}
export const fiveDayForecast = async (location) =>{

    const API = () => `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${ process.env.REACT_APP_API_KEY }`
    
    try {
        
        const resp = await (await fetch(API(location), { origin: "cors" })).json();
        let List = resp.list;
        let dailyData ={}

        List.map(item =>{
            const dateTime = new Date(item.dt * 1000 );
            const day = dateTime.getDate();
            const time = dateTime.getHours();

            if (!dailyData[day]) {
                dailyData[day]=[];
                dailyData[day].push({...item,day,time});    
            }
            return dailyData
        });
        return dailyData

    } catch (err) {
        throw err
    }

}
