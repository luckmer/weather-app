import { useState } from "react";
import FilterCurrentDay from "./FilterCurrectDay";
import {TempCalculate,WindSpeed,Visibility,CurrentHour} from "./TempCalculate";
import Graph from "./Graph";
import styled from "styled-components";
import { current } from "@reduxjs/toolkit";

const Section = styled.section`
display: flex;
flex-flow: row wrap;
justify-content: space-around;
align-items:center;
`
const ActualDayStyle = styled.section`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
max-width: 95%;
margin: auto;
padding-top: 3vh;
padding-bottom: 3vh;
h1{
    font-size:3vw;
}

`

const CurrentImgStyle = styled.div`
display: flex;
align-items: center;
img{
    width: 100px;
    height: 100px;
    object-fit: scale-down;
}
div{
    width:100%;
}
span{
    font-size: 5rem;
}
`
const Hover = styled.section`
    &:hover{
        background-color:#fff;
    }
`

const Article = styled.article `
    padding : 0 11vw 0 11vw
`

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
            <div onClick={() => setFinder({ ...finder, filterSubject: _.day })}>
                <div>
                    <span>{_.day}</span>
                </div>
                <div>
                    <img src={_.img} alt={_.img} />
                </div>
                <div>
                    <span><TempCalculate temp={_.main.temp} /></span>
                </div>
                <div>{_.weather[0].description}</div>
            </div>
        </Hover>
    ));


    return (
        <Article>
            {MapActualDay}
            <h1>Current Day</h1>
            <Section>
                {MapData}
                <Graph HourFilter ={allWeek} />
            </Section>

        </Article>
    )
}

export default Context
