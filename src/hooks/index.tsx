import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import type { RootState, AppDispatch } from '../store/redux/store'

export const useAppDispatch = ()=> useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useAppTheme = ()=>{
    return useAppSelector((state) => state.themeReducer.theme);
}