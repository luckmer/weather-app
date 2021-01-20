
export const  TempCalculate = ({temp}) => {
    let test = parseFloat(temp);
    let Celcius;
    Celcius =  Math.round(test - 273.15) 
    return <>{Celcius} &#176;</>
    
}


export const  WindSpeed = ({speed}) => {
    let WindSpeed;
    WindSpeed = Math.round(0.836 * Math.sqrt(Math.pow(speed, 3)) * 100) / 100;
    return <>{WindSpeed} </>
    
}

export const  Visibility = ({visibility}) => {
    let Visibile;
    Visibile = Math.floor(visibility / 1000);
    return <>{Visibile} km </>
    
}
