import { AnyAction } from 'redux'
import { RootState } from './store'
import { ThunkAction } from 'redux-thunk'
import { fetchArticles, validateStatus } from '../../utils/https'
import { getNewsArticles } from './news-slice'
import { Article } from '../model/article'

export const thunkGetArticles =
    (): ThunkAction<void, RootState, unknown, AnyAction> =>
        async dispatch => {
            const getData = async () => {
                const response = await fetchArticles();
                if (validateStatus(response.status)) {
                    let articles: Article[] = response.data;
                    dispatch(
                        getNewsArticles(articles)
                    )
                }
            }
        }