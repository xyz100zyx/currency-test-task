import {FC} from 'react';
import {Outlet, useLocation} from "react-router-dom";
import {Container, Typography} from "@mui/material";
import {Wrapper} from "../../common";
import {NavBar} from "../../entities";
import {AppRoutes, Text} from "../../../utils/constants";
import styles from './styles.module.scss'

export const MainLayout:FC = () => {

    const location = useLocation().pathname

    return (
        <div>
            <Container
                sx={{
                    display: "flex",
                    minHeight: "100vh",
                    justifyContent: "center",
                    alignItems: "center",
                    maxWidth: "100% !important",
                    flexDirection: "column",
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        textAlign: 'center',
                        color: "#363636"
                    }}
                    className={styles.title}
                >
                    Currency Converter by<br/>LLC «AlgoBrains Solutions»
                </Typography>
                <Typography
                    data-testid="subtitle"
                    variant="h6"
                    sx={{
                        textAlign: "center",
                        color: "#363636",
                        opacity: "0.8",
                        marginTop: "20px"
                    }}
                    className={styles.subtitle}
                >
                    {location === AppRoutes.FORM_CONVERTER ? Text.TITLE_CONVERT : Text.TITLE_RATES}
                </Typography>
                <Wrapper>
                    <NavBar />
                    <Outlet />
                </Wrapper>
            </Container>
        </div>
    )
}