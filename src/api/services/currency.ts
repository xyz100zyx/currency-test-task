import {$api} from "../index";
import {AxiosError} from 'axios'
import {API_KEY, HOST, RequestEndpoints} from "../../utils/constants";
import {CurrencyListResponse, CurrencyRatesResponse, FetchedError, Rate} from "../../utils/types";

export abstract class CurrencyService{

    static async fetchOneToOne(count: number, from: string, to: string){
        const response = await $api.get<Rate | FetchedError, any>(
            `${HOST}${RequestEndpoints.CONVERT}`,
            {
                params: {
                    'to': to,
                    'from': from,
                    'amount': count
                },
                headers: {
                    'apikey': API_KEY
                }
            }).catch((err) => {
            const { data } = err.response;
            throw new AxiosError(JSON.stringify(data));
        });
        return response?.data;
    }

    static async getCurrencyRates(base: string){
        const response = await $api.get<CurrencyRatesResponse | FetchedError, any>(
            `${HOST}${RequestEndpoints.CURRENCY_RATES}`,
            {
                params: {
                    'base': base
                },
                headers: {
                    'apikey': API_KEY
                }
            }
        ).catch((err) => {
            const { data } = err.response;
            throw new AxiosError(JSON.stringify(data));
        });
        return response?.data;
    }

    static async getCurrencyList(){
        const response = await $api.get<CurrencyListResponse | FetchedError, any>(
            `${HOST}${RequestEndpoints.CURRENCY_LIST}`,
            {
                headers: {
                    'apikey': API_KEY
                }
            }
        ).catch((err) => {
            const { data } = err.response;
            throw new AxiosError(JSON.stringify(data));
        });
        return response?.data;
    }

}