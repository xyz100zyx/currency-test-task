import {FC} from 'react';
import {ISelect} from "./interface";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

export const StyledSelect: FC<ISelect> = ({value, onChange, items, label}) => {

    return (
        <FormControl
            fullWidth
            sx={{
                maxWidth: '100%',
                width: '100%',

            }}
        >
            <InputLabel
                id="demo-simple-select-label"
                sx={{
                    zIndex: '20',
                    background: 'aquamarine',
                    borderRadius: '12px',
                    padding: '0 10px'
                }}
            >
                {label}
            </InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                label="Age"
                onChange={e => onChange(e.target.value)}
                sx={{
                    width: '100%',
                    maxWidth: '100%',
                }}
            >
                {items.map(item => <MenuItem value={item} key={item}>{item}</MenuItem>)}
            </Select>
        </FormControl>
    )
}