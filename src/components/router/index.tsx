import {FC} from 'react';
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import {MainLayout} from "../layouts/main";
import {AppRoutes} from "../../utils/constants";
import {RatesPage} from "../../pages/rates-page";
import {ConverterPage} from "../../pages";

export const GlobalRoute:FC = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout />}>
                    <Route index={true} element={<Navigate to={AppRoutes.FORM_CONVERTER} />} />
                    <Route path={AppRoutes.FORM_CONVERTER} element={<ConverterPage />} />
                    <Route path={AppRoutes.TABLE_RATES} element={<RatesPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}