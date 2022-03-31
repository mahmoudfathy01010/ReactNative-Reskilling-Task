import { AnyAction } from 'redux'
import { RootState } from './store'
import { ThunkAction } from 'redux-thunk'
import { fetchArticles } from '../../utils/https'
import { getNewsArticles } from './news-slice'

export const thunkGetArticles =
    (): ThunkAction<void, RootState, unknown, AnyAction> =>
        async dispatch => {
            const getData = async () => {
                const response = await fetchArticles();
                dispatch(
                    getNewsArticles(response)
                )
            }
        }