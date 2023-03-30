import {ChangeEvent, FC, FormEvent, useState} from 'react';
import {Button, Input, InputLabel} from '@mui/material';
import styles from './styles.module.scss'
import {useThunkDispatch} from "../../../../hooks/redux";
import {fetchOneToOne} from "../../../../store/slices/currency/async-actions";
import {useDispatch} from "react-redux";
import {setNullableRateOneToOne} from "../../../../store/slices/currency";

export const FormConverter: FC = () => {

    const [value, setValue] = useState<string>('1000 USD in BYN');
    const [isError, setError] = useState(false)
    const thunkDispatch = useThunkDispatch();
    const dispatch = useDispatch()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const items = value.split(' ');
        if(items.length === 4){
            const [count, currencyFrom, _, currencyTo] = items
            thunkDispatch(fetchOneToOne({count: Number(count), currencyFrom, currencyTo}))
        }
        else{
            setError(true);
            dispatch(setNullableRateOneToOne())
        }
    }

    const onChangeInputHandler = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setError(false);
        setValue(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <InputLabel
                htmlFor='input-converter'
                sx={{
                    fontSize: '14px',
                    color: isError ? 'red' : '#f3s3s'
                }}
            >Введите в формате "15 USD in RUB"</InputLabel>
            <Input
                inputProps={{ "data-testid": "input-converter" }}
                id='input-converter'
                error={isError}
                type='text'
                sx={{
                    padding: '4px 8px',
                    color: '#363636',
                    maxWidth: '100%',
                    width: '100%'
                }}
                value={value}
                onChange={(e) => onChangeInputHandler(e)}
            />
            <Button
                sx={{
                    width: '100%',
                    marginTop: '20px',
                    textTransform: "uppercase"
                }}
                type='submit'
                variant='contained'
                data-testid= "btn-convert"
            >
                get converted value
            </Button>
        </form>
    )
}