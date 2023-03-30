import {FC, useEffect} from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import {ITableRates} from "./interface";
import {useAppSelector, useThunkDispatch} from "../../../hooks/redux";
import {getNewCurrencyRatesAndList} from "../../../store/slices/currency/async-actions";
import styles from './styles.module.scss'
import {currencyStatusSelector, rateListSelector} from "../../../store/selectors/currency";
import {RequestStatusValue} from "../../../utils/constants";

export const TableRates: FC<ITableRates> = ({base}) => {

    const thunkDispatch = useThunkDispatch();
    const currencyStatus = useAppSelector(currencyStatusSelector)
    const rates = useAppSelector(rateListSelector)
    const rateKeys = Object.keys(rates || {});
    const isFulfilled = currencyStatus === RequestStatusValue.FULFILLED;
    const isRejected = currencyStatus === RequestStatusValue.REJECTED;

    useEffect(() => {
        thunkDispatch(getNewCurrencyRatesAndList({base}))
    }, [base, thunkDispatch])

    return isFulfilled ? (
        <TableContainer
            sx={{
                maxHeight: '300px',
                overflowY: 'scroll',
                background: 'transparent'
            }}
            component={Paper}
            className={styles.container}
        >
            <Table sx={{minWidth: 650}} aria-label="caption table">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Currency
                        </TableCell>
                        <TableCell>
                            Rate
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rateKeys.map((key, index) => (
                        <TableRow key={key}>
                            <TableCell>{key}</TableCell>
                            <TableCell>{(rates || {})[`${key}`]}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    ) : isRejected ? (
        <Typography>Что-то пошло не так :(<br/>Попробуйте перезагрузить страницу или свяжитесь с нами
            support@mail.ru</Typography>
    ) : null
}