import { useState } from "react";
import { CollectData } from "../reducers/DataSlice";
import { nanoid } from "@reduxjs/toolkit";

import { useDispatch } from "react-redux";
const Input = () =>{
    const [filter, setFilter] = useState("");
    const dispatch = useDispatch()

    const handleSubmit = (e) =>{
        e.preventDefault();
        const data = { id: nanoid(), filter };
        dispatch(CollectData(data));
    };

    const InputForm = (
        <form onSubmit={handleSubmit}>
            <input
                value={filter}
                type="text"
                name="input"
                onChange={(e) => setFilter(e.target.value)} />
            <button type="submit">submit</button>
        </form>
    );

    return InputForm
}

export default Input
