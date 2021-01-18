
const CurrentDay = (ForeCastData) =>{
    let data = ForeCastData.map((data) => data),
        today = new Date(),
        day = today.getDay(),
        daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"],
        displayCurrentDay = daylist[day];

    return data
    .slice()
    .filter((item) => item.day
        .toLowerCase()
        .includes(displayCurrentDay
            .toLowerCase()
    ))
    
}

export default CurrentDay
