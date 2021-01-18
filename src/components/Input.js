import { CollectData, AddData, AddForeCast } from "../reducers/DataSlice";
import { Article, Card, Form, Button } from "../styles/Input.Style";
import { useDispatch, useSelector } from "react-redux";
import {Api,fiveDayForecast} from "../api/Api"
import { useState,useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";


const Input = () =>{
    
    const [filter, setFilter] = useState({ filterSubject: "" });
    const dispatch = useDispatch()
    const data = useSelector(state => state.Data)
    let location = data.container.filter


    const handleSubmit = (e) =>{
        e.preventDefault();
        if (typeof filter.filterSubject === "string" && filter.filterSubject.length >= 3) {
            const data = { id: nanoid(), filter: filter.filterSubject };
            dispatch(CollectData(data));
            setFilter({filterSubject:""})
        } 
    };

    useEffect(()=> {
        if (typeof location === 'undefined') return 
        const data = async () =>{
            const context = await Api(location);
            const ForeCast = await fiveDayForecast(location);
            dispatch(AddForeCast(ForeCast))
            dispatch(AddData(context));
        }
        data(); 
    }, [location, dispatch]);

    const handleChange = (e) => setFilter({ ...filter, [e.target.name]: e.target.value });

    const InputForm = (
        <Form onSubmit={handleSubmit}>
            <input
            type="text"
            name="filterSubject"
            value={filter.filterSubject}
            onChange={handleChange}
            />
            <Button type="submit" data-text="GITHUB">
                <span data-text ="Submit">Submit</span>
            </Button>
        </Form>
    );


    return (
        <Article>
            <div>
                <Card>
                    {InputForm}
                </Card>
            </div>
        </Article>
    )
}

export default Input