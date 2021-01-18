
const  TempCalculate = (countryData) => {
    let data  = countryData.main.temp;
    let temp = parseFloat(data);


    let Celcius;
    let Fahrenheit;
    let Kelvin;


    Celcius =  Math.round(temp - 273.15) 
    Fahrenheit = Math.round(Celcius * 9 / 5 + 32)
    Kelvin = Math.round(Celcius + 273.15)
    
    return { Celcius, Fahrenheit, Kelvin };
}

export default TempCalculate
