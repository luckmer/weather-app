import { useEffect } from "react";
const FilterCurrentDay = (data, finder, setFil,dailyHours) =>{
    
    useEffect(() =>{
        let filterS = dailyHours.slice();
        let filterData = data.slice();
        if (finder.filterSubject) {
            filterS = filterS.filter((item) => item.dayName
                .toLowerCase()
                .includes(
                    finder.filterSubject
                        .toLowerCase()
                        .trim()
                )
            );
        }

        if (finder.filterDay) {
            filterData = filterData.filter((item) => item.day
                .toLowerCase()
                .includes(
                    finder.filterDay
                        .toLowerCase()
                        .trim()
                )
            );
        }
        setFil({ currentDay: filterData , allWeek:filterS });

    }, [dailyHours,finder.filterDay,setFil,finder.filterSubject,data]);
}

export default FilterCurrentDay