import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { headers } from "../constants"


export const getCountryData = createAsyncThunk(
    "covid/getCountryData", async ({ code,query }) => {
        const params = { iso: code, q:query };

        const req = await axios.get('https://covid-19-statistics.p.rapidapi.com/reports',
            { params, headers });

        const req2 = await axios.get(
            code
             ? `https://restcountries.com/v3.1/alpha/${code}`
             : `https://restcountries.com/v3.1/name/${query}`)

        const responses = await Promise.all([req,req2])

        const covid = {
            ...responses[0].data.data[0],
            ...responses[0].data.data[0].region, 
        };


        delete covid.region;
        delete covid.cities;


        return { covid,country:responses[1].data[0] }
    })