import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import type { RootState, AppDispatch } from '../store/redux/store'

export const useAppDispatch = ()=> useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useAppTheme = ()=>useAppSelector((state) => state.themeReducer.theme);
export const useAppLang = ()=>{
   const languageValues =  useAppSelector((state) => state.langReducer.values);
   const languageCode = useAppSelector((state) => state.langReducer.languageCode);
   return{languageValues,languageCode}
}