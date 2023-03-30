import {FC} from 'react';
import styles from "../../layouts/main/styles.module.scss";
import {AppRoutes, Text} from "../../../utils/constants";
import {Typography} from "@mui/material";
import {useLocation} from "react-router-dom";

export const LayoutSubtitle: FC = () => {

    const location = useLocation().pathname

    return (
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
    )
}