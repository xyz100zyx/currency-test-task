import React from 'react';
import './App.css';
import {GlobalRoute} from "./components/router";
import {useAppSelector} from "./hooks/redux";
import {currencyStatusSelector} from "./store/selectors/currency";
import {RequestStatusValue} from "./utils/constants";
import {Loader} from "./components/common";

function App() {

  const currencyRequestStatus = useAppSelector(currencyStatusSelector)
  const isLoaderOpen = currencyRequestStatus === RequestStatusValue.PENDING

  return (
    <>
      <GlobalRoute />
      {isLoaderOpen && <Loader />}
    </>
  );
}

export default App;
