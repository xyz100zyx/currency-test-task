import {FC} from 'react';
import {createPortal} from "react-dom";
import {Container} from "@mui/material";
import styles from './styles.module.scss'
import iconLoader from '../../../assets/loader-icon.svg';

export const Loader: FC = ( ) => {

    return createPortal((
        <Container
            sx={{
                maxWidth: '100% !important',
                width: '100%',
                height: '100vh',
                background: 'rgba(54, 54, 54, 0.3)',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                top: '0',
                left: '0',
                zIndex: '1000'
            }}
        >
            <img className={styles.loader} src={iconLoader} alt="loader"/>
        </Container>
    ), document.body)
}