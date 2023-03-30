import {FC} from 'react';
import {Outlet} from "react-router-dom";
import {Container, Typography} from "@mui/material";
import {Wrapper} from "../../common";
import {NavBar} from "../../entities";
import styles from './styles.module.scss'
import {LayoutSubtitle} from "../../entities/layout-subtitle";
export const MainLayout:FC = () => {

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
                <LayoutSubtitle />
                <Wrapper>
                    <NavBar />
                    <Outlet />
                </Wrapper>
            </Container>
        </div>
    )
}