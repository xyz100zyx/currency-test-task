import {FC} from 'react';
import {Container} from "@mui/material";
import {IWrapper} from "./interface";
import styles from './styles.module.scss' ;

export const Wrapper: FC<IWrapper> = ({children}) => (
    <Container
        maxWidth="lg"
        className={styles.wrapper}
    >
        {children}
    </Container>
)