import {Dispatch, SetStateAction} from "react";

export interface ISelect{
    value: string,
    onChange: Dispatch<SetStateAction<string>>,
    items: string[],
    label: string
}