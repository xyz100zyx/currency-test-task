import {createAsyncThunk} from "@reduxjs/toolkit";
import {CurrencyListResponse, CurrencyRatesResponse, Rate} from "../../../utils/types";
import {CurrencyService} from "../../../api/services/currency";
import {setCurrencyList} from "./index";

export const fetchOneToOne = createAsyncThunk<Rate, {count: number, currencyFrom: string, currencyTo: string}, {rejectValue: string}>(
    'currency/oneToOne',
    async (params, {rejectWithValue}: any) => {
        try{
            return await CurrencyService.fetchOneToOne(params.count, params.currencyFrom, params.currencyTo)
        }catch(err: any){
            return rejectWithValue(err.message);
        }
    }
)

export const getCurrencyRates = createAsyncThunk<CurrencyRatesResponse, {base: string}, {rejectValue: string}>(
    'currency/currencyRates',
    async (params, {rejectWithValue}: any) => {
        try{
            return await CurrencyService.getCurrencyRates(params.base)
        }catch(err: any){
            return rejectWithValue(err.message);
        }
    }
);

export const getCurrencyList = createAsyncThunk<CurrencyListResponse, undefined, {rejectValue: string}>(
    'currency/currencyList',
    async (_, {rejectWithValue}: any) => {
        try{
            return await CurrencyService.getCurrencyList()
        }catch(err: any){
            return rejectWithValue(err.message);
        }
    }
);

export const getNewCurrencyRatesAndList = createAsyncThunk<CurrencyRatesResponse, {base: string}, {rejectValue: string}>(
    'currency/currencyRatesAndList',
    async (params, {rejectWithValue, dispatch}: any) => {
        try{
            const list = await CurrencyService.getCurrencyList();
            dispatch(setCurrencyList(list.symbols))
            return await CurrencyService.getCurrencyRates(params.base);
        }catch(err: any){
            return rejectWithValue(err.message);
        }
    }
)