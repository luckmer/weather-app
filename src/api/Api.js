export const Api = async (location) =>{
    const API = (location) => `https://api.openweathermap.org/data/2.5/weather?q=${ location }&appid=${ process.env.REACT_APP_API_KEY }`;

    try {
        return await (await fetch(API(location), { origin: "cors" })).json();
    } catch (err) {
        throw err
    }
}
export const fiveDayForecast = async (location) =>{
    const API = () => `https://api.openweathermap.org/data/2.5/forecast?q=${ location }&appid=${ process.env.REACT_APP_API_KEY }`
    
    try {
        
        const  resp = await (await fetch(API(location), { origin: "cors" })).json();
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const values = [0, 7, 15, 23, 31, 39];

        let filteredData = new Date(resp.list[0].dt * 1000);
        let dayName = days[filteredData.getDay()];
        let List = resp.list;
        let dailyData = [];

        List.map((index, val) =>{
            if (values.includes(val)) {
                filteredData = new Date(resp.list[val].dt * 1000);
                dayName = days[filteredData.getDay()];
                
                let day = dayName;
                let img = `https://openweathermap.org/img/w/${ index.weather[0].icon }.png`;
                let total = { ...index, day, img };
                dailyData.push(total);
            }
            return dailyData
        });
        return dailyData
        
    } catch (err) {
        throw err
    }

}