import {fireEvent, render, screen, waitFor} from '@testing-library/react'
import App from "./App";
import {store} from "./store";
import {Provider} from "react-redux";
import React from "react";
import {Text} from "./utils/constants";
import userEvent from "@testing-library/user-event";

describe('Logic of request from types value works correctly', () => {
    beforeEach(() => {
        render(<Provider store={store}>
            <App/>
        </Provider>)
    })

    it('Hint of input element works correctly on error', async () => {
        const input = screen.getByTestId<HTMLInputElement>("input-converter")
        fireEvent.change(input, {target: {value: '123d sd1'}})
        expect(screen.getByTestId("input-converter")).toHaveValue('123d sd1')
        const btnRate = screen.getByTestId("btn-convert")
        userEvent.click(btnRate)

        expect(screen.getByText(/Введите в формате "15 USD in RUB"/i)).toBeInTheDocument()
        const label = document.querySelector("label");
        expect(label?.style.color).toBe('')
    })

    it('Loader is showed in layout', async () => {
        const input = screen.getByTestId("input-converter");
        userEvent.type(input, '10000 BYN in USD');
        const btnRate = screen.getByTestId("btn-convert")
        userEvent.click(btnRate)

        await waitFor(() => {
            expect(screen.getByTestId('loader')).toBeInTheDocument()
        })
    })
})

describe(' Navigation bar logic works correctly', () => {
    beforeEach(() => {
        render(<Provider store={store}>
            <App/>
        </Provider>)
    })
    it('Navigation bar exists in the dom', () => {
        expect(screen.getByTestId('navigation-bar')).toBeInTheDocument()
    })

    it('Navigation bar links works correctly at start app', () => {
        expect(screen.getByTestId('subtitle')).toHaveTextContent(Text.TITLE_CONVERT)
    })

    it('Navigation bar links work correctly when click on it', async () => {
        const navLink = screen.getByTestId('nav-to-rates');
        userEvent.click(navLink);

        await waitFor(() => {
            expect(screen.getByTestId('subtitle')).toHaveTextContent(Text.TITLE_RATES)
        })
    })
})