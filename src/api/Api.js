
export const Api = async (location) =>{
    const API = (location) => `
    https://api.openweathermap.org/data/2.5/weather?q=${ location }&appid=${ process.env.REACT_APP_API_KEY }
    `;

    try {
        return await (await fetch(API(location), { origin: "cors" })).json(); 
    } catch (err) {
        throw err
    }
}


