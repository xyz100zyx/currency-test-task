import {RootState} from "../../index";

export const currencyStatusSelector = (state: RootState) => state.currency.status
export const currencyErrorSelector = (state: RootState) => state.currency.textError
export const currencyRateOneToOneSelector = (state: RootState) => state.currency.rateOneToOne
export const currencyListSelector = (state: RootState) => state.currency.currencyList
export const rateListSelector = (state: RootState) => state.currency.rateList

