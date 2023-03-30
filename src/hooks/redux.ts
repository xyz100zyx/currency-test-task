import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit"
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store"

export const useThunkDispatch = () => useDispatch<ThunkDispatch<RootState, any, AnyAction>>()
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;