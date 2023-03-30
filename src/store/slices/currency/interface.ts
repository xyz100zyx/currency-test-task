import {RequestStatus} from "../../../utils/types";

export interface IInitialState {
    status: RequestStatus | null,
    textError: string | null,
    rateOneToOne: number | null,
    currencyList: string[] | null,
    rateList: Record<string, string> | null
}