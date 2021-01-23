import { useState,useEffect } from "react";
import{ActualDayStyle, CurrentImgStyle, Hover,Padding, CurrentDay, MapStyle, GraphStyle,
Card,Header,Img,Table
} from "../styles/MapStyle";
import { FilterProps, FinderHook, FillData } from "../interfaces/Context.Interface";
import {TempCalculate,WindSpeed,Visibility} from "./TempCalculate";
import {Graph} from "../export";

const Context = ({ data,dailyHours,displayCurrentDay }: FilterProps) => {
    const [finder, setFinder] = useState<FinderHook>({ filterDay: displayCurrentDay, filterSubject: "" });
    const [fill, setFil] = useState<FillData>({ currentDay: [], filterWeek: [] });
    
        useEffect(() => {
            let filterS = dailyHours.slice();
            let filterData = data.slice();

            if (finder.filterSubject) {
                filterS = filterS.filter(({dayName} : any ) => dayName
                    .toLowerCase()
                    .includes(
                        finder.filterSubject
                            .toLowerCase()
                            .trim()
                    )
                );
            }

            if (finder.filterDay) {
                filterData = filterData.filter(({ day }: any) => day
                    .toLowerCase()
                    .includes(
                        finder.filterDay
                            .toLowerCase()
                            .trim()
                    )
                );
            }
            setFil({ currentDay: filterData, filterWeek: filterS });
            
        }, [dailyHours, finder.filterDay,finder.filterSubject,data]);

    const MapActualDay = fill.currentDay.map((_)  => (
        <ActualDayStyle key={_.day}>
            <div>
                <h1>{_.location}</h1>
            </div>
            <CurrentImgStyle>
                <div>
                    <img src={_.img} alt={_.img} />
                </div>
                <div>
                    <span>
                        <TempCalculate temp={_.main.temp} />
                    </span>
                </div>
            </CurrentImgStyle>
            <div>
                <p>feels like<TempCalculate temp={_.main.feels_like} />
                    &nbsp;&nbsp;&nbsp;
                    Wind speed <WindSpeed speed={_.wind.speed} />
                    &nbsp;&nbsp;&nbsp;
                    Visibility <Visibility visibility={_.visibility} />
                </p>
            </div>
        </ActualDayStyle>
    ));

    const MapData = data.map((_) => (
        <Hover key={_.day}>
            <Card onClick={() => setFinder({ ...finder, filterSubject: _.day })}>
                <Header>
                    <span>{_.day}</span>
                </Header>
                <Img>
                    <div>
                        <img src={_.img} alt={_.img} />
                    </div>
                    <div>
                        <span><TempCalculate temp={_.main.temp} /></span>
                    </div>
                </Img>
                <Header>{_.weather[0].description}</Header>
            </Card>
        </Hover>
    ));

    const TestData = fill.currentDay.map((_) =>{
        let up : any = _.sunrise
        let down = _.sunset
        let date = new Date(up *1000);
        let newS = new Date(down *1000);
        let hr = date.getHours();
        let hs = newS.getHours();

        return (
            <tbody key ={_.day}>
                <tr >
                    <td>location { _.location }&nbsp; </td>
                    <td> date { _.dt_txt}</td>
                </tr>
                <tr >
                    <td>sunrise { hr}</td>
                    <td>sunset { hs}</td>
                </tr>
            </tbody>
        )
    });

    return (
        <Padding>
            <div>
                {MapActualDay}
            </div>
            <CurrentDay>
                <h1>Current Day</h1>
            </CurrentDay>
            <section>
                <MapStyle>
                    {MapData}
                </MapStyle>
                <GraphStyle>
                    <Graph HourFilter ={fill.filterWeek} />
                </GraphStyle>
            </section>
            <Table>
            <thead>
                <tr>
                    <th >Details</th>
                </tr>
                </thead>
            {TestData}
                
            </Table>
        </Padding>
    )
}

export default Context