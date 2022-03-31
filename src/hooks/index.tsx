import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import type { RootState, AppDispatch } from '../store/redux/store'

export const useAppDispatch = ()=> useDispatch<AppDispatch>();