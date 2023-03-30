import React, {FC, useState} from 'react';
import {Container} from "@mui/material";
import {useAppSelector} from "../../hooks/redux";
import {StyledSelect} from "../../components/common/select/styled-select";
import {currencyListSelector, currencyStatusSelector} from "../../store/selectors/currency";
import {TableRates} from "../../components/widgets/table-rates";
import {Loader} from "../../components/common";
import {RequestStatusValue} from "../../utils/constants";

export const RatesPage: FC = () => {

    const [selectValue, setSelectValue] = useState('USD');
    const currencyList = useAppSelector(currencyListSelector);
    const currencyRequestStatus = useAppSelector(currencyStatusSelector);
    const isLoaderOpen = currencyRequestStatus === RequestStatusValue.PENDING
    const currencies = !!currencyList?.length ? currencyList : [selectValue]

    return (
        <Container
            maxWidth='lg'
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
                marginTop: '50px',
                alignItems: 'center'
            }}
        >
            <StyledSelect label='Currency' value={selectValue} onChange={setSelectValue} items={currencies}/>
            <TableRates base={selectValue}/>
            {isLoaderOpen && <Loader />}
        </Container>
    )
}