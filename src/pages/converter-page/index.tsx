import {FC} from 'react';
import {FormConverter} from "../../components/widgets/forms";
import {Typography} from "@mui/material";
import {ErrorsText, RequestStatusValue} from "../../utils/constants";
import {useAppSelector} from "../../hooks/redux";
import {currencyRateOneToOneSelector, currencyStatusSelector} from "../../store/selectors/currency";

export const ConverterPage: FC = () => {

    const rateResult = useAppSelector(currencyRateOneToOneSelector);
    const rateRequestStatus = useAppSelector(currencyStatusSelector)
    const isNeedViewResult = rateRequestStatus !== null && rateRequestStatus !== RequestStatusValue.PENDING && !!rateResult;
    const resultSting = !rateResult && rateRequestStatus === RequestStatusValue.REJECTED ? ErrorsText.CONVERT : `Результат конвертирования: ${rateResult}`

    return (
        <>
            <FormConverter />
            {isNeedViewResult && (
                <Typography
                variant="body1"
                component="h2"
                data-testid="converter-result"
                sx={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#282c34',
                    marginTop: '20px',
                    textAlign: 'center'
                }}
            >
                {resultSting}
            </Typography>)}
        </>
    )
}