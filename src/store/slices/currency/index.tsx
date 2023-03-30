import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IInitialState} from "./interface";
import {fetchOneToOne, getNewCurrencyRatesAndList} from "./async-actions";
import {RequestStatusValue} from "../../../utils/constants";
import {Rate} from "../../../utils/types";

const initialState: IInitialState = {
    rateOneToOne: null,
    status: null,
    textError: null,
    currencyList: [],
    rateList: null
}

const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        setNullableRateOneToOne: (state) => {
            state.rateOneToOne = null;
        },
        setCurrencyList: (state, action: PayloadAction<Record<string, string>>) => {
            let res: string[] = [];
            for(let key in action.payload){
                res = [...res, key]
            }
            state.currencyList = res
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchOneToOne.pending, (state) => {
            state.rateOneToOne = null;
            state.status = RequestStatusValue.PENDING;
            state.textError = null;
        });
        builder.addCase(fetchOneToOne.fulfilled, (state, action: PayloadAction<Rate>) => {
            state.rateOneToOne = action.payload.result;
            state.status = RequestStatusValue.FULFILLED;
            state.textError = null;
        });
        builder.addCase(fetchOneToOne.rejected, (state, action) => {
            const rejectedItem = JSON.parse(action.payload as string);
            state.rateOneToOne = null;
            state.status = RequestStatusValue.REJECTED;
            state.textError = rejectedItem.message;
        });
        builder.addCase(getNewCurrencyRatesAndList.pending, (state) => {
            state.rateOneToOne = null;
            state.status = RequestStatusValue.PENDING;
            state.textError = null;
            state.rateList = null;
        });
        builder.addCase(getNewCurrencyRatesAndList.fulfilled, (state, action) => {
            state.rateOneToOne = null;
            state.status = RequestStatusValue.FULFILLED;
            state.textError = null;
            state.rateList = action.payload.rates
        });
        builder.addCase(getNewCurrencyRatesAndList.rejected, (state, action) => {
            const rejectedItem = JSON.parse(action.payload as string);
            state.rateOneToOne = null;
            state.status = RequestStatusValue.REJECTED;
            state.textError = rejectedItem.message;
            state.rateList = null
        })
    }
})

export const {setNullableRateOneToOne, setCurrencyList} = currencySlice.actions
export default currencySlice.reducer;
