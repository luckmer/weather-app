import { useState } from "react";
import{
ActualDayStyle, CurrentImgStyle, Hover,
Padding, CurrentDay, MapStyle, GraphStyle,
Card,Header,Img,Table
} from "../styles/MapStyle";
import {TempCalculate,WindSpeed,Visibility} from "./TempCalculate";
import {Graph,FilterCurrentDay} from "../export";

const Context = ({ DisplayForeCast, data, displayCurrentDay,dailyHours }) =>{
    const [finder, setFinder] = useState({ filterDay: displayCurrentDay, filterSubject: "" });
    const [{currentDay,allWeek}, setFil] = useState({ currentDay: [], allWeek: [] });
    FilterCurrentDay(data, finder, setFil,dailyHours);

    
    const MapActualDay = currentDay.map((_) => (
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


    const MapData = DisplayForeCast.map((_) => (
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

    const TableData = () =>{
        const TestData = currentDay.map((_) =>{
            let up = _.sunrise
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
        return TestData
    }

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
                    <Graph HourFilter ={allWeek} />
                </GraphStyle>
            </section>
            <Table>
            <thead>
                <tr>
                    <th colSpan="2">Details</th>
                </tr>
            </thead>
            <TableData/>
            </Table>
        </Padding>
    )
}

export default Context
