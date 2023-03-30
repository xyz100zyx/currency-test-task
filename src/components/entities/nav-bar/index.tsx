import {FC} from 'react';
import Box from '@mui/material/Box';
import {StyledNavLink} from "../../common";
import {useLocation} from "react-router-dom";

export const NavBar: FC = () => {

    const location = useLocation();
    const path = location.pathname.slice(1);

    //need to keep in CONSTANTS file
    const pathWithForm = 'form';
    const pathWithRates = 'rates';

    const isActiveConverter = path === pathWithForm;
    const isActiveTable = path === pathWithRates;

    return (

        <Box
            component='div'
            sx={{
                display: "flex",
                gap: "40px"
            }}
        >
            <StyledNavLink text='Currency table' to='/rates' variant={isActiveTable ? 'colored' : 'outlined'} />
            <StyledNavLink text='Currency converter' to='/form' variant={isActiveConverter ? 'colored' : 'outlined'} />
        </Box>
    )
}