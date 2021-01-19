export const Api = async (location) =>
{
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
        const resp = await (await fetch(API(location), { origin: "cors" })).json();
        console.log(resp)
        const days = [
            'Sunday', 'Monday',
            'Tuesday', 'Wednesday',
            'Thursday', 'Friday', 'Saturday' 
        ];
        const values = [
            0, 7, 15,
            23, 31, 39
        ];
        const hours = [
            0, 1, 7,        
            7, 8, 9,       
            15, 16, 17,    
            23, 24, 25,    
            31, 32, 33,    
            37,38,39 ,     
        ];
        let dailyData = [];
        let dailyHours = [];
        let filteredData = resp.cod === "404" ? []: new Date(resp.list[0].dt * 1000);
        let dayName = resp.cod === "404" ? "" : days[filteredData.getDay()];
        let List = resp.code === "404" ? "" : resp.list
            
        if (List) {
            List.map((index, val) =>{
                if (hours.includes(val)) {
                    const { main: { temp }, dt_txt } = index;
                    filteredData = new Date(resp.list[val].dt * 1000);
                    dayName = days[filteredData.getDay()];

                    let data = { temp, dayName, dt_txt, location };

                    dailyHours.push(data)
                }
                if (values.includes(val)) {
                    filteredData = new Date(resp.list[val].dt * 1000);
                    dayName = days[filteredData.getDay()];
                    let sunrise = resp.city.sunrise;
                    let sunset = resp.city.sunset
                    let day = dayName;
                    let img = `https://openweathermap.org/img/w/${ index.weather[0].icon }.png`;
                    let total = { ...index, day, img, location,sunrise,sunset };
                    dailyData.push(total);
                }
                return {dailyData ,dailyHours}
            });
            return {dailyData ,dailyHours}    
        }
    } catch (err) {
        throw err
    }

}
