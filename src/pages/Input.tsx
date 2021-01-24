import { CollectData, AddData, AddForeCast } from "../reducers/DataSlice";
import { useSelector, TypedUseSelectorHook,useDispatch } from 'react-redux'
import { Article, Card, Form, Button } from "../styles/Input.Style";
import {Api,fiveDayForecast} from "../api/Api"
import { useState,useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { RootData} from "../interfaces/Index.Interface";



const Input = () => {
    
    const [filter, setFilter] = useState({ filterSubject: "" });
    const dispatch = useDispatch()
    const useTypedSelector: TypedUseSelectorHook<RootData> = useSelector
    const isOn = useTypedSelector((state ) => state)
    let location  = isOn.container.filter

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
        setFilter({ ...filter, [e.target.name]: e.target.value });

    const InputForm = (
        <Form onSubmit={handleSubmit}>
            <input
            type="text"
            name="filterSubject"
            value={filter.filterSubject}
            onChange={handleChange}
            />
            <Button type="submit" >
                <span data-text ="Submit">Submit</span>
            </Button>
        </Form>
    );


    return (
        <Article>
                <Card>
                    {InputForm}
                </Card>
        </Article>
    )
}

export default Input