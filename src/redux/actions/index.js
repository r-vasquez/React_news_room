export const loadingError = bool => ({
  type: 'LOADING_ERROR',
  hasErrored: bool
});

export const loadingInProgress = bool => ({
  type: 'LOADING_IN_PROGRESS',
  isLoading: bool
});

export const clearNews = () => ({
  type: 'CLEAR_NEWS'
});

export const loadingSuccess = news => ({
  type: 'LOADING_SUCCESS',
  news
});

export const getNewsByCategory = category => {
  return dispatch => {
    dispatch(clearNews());

    dispatch(loadingError(false));

    dispatch(loadingInProgress(true));

    fetch(`https://api.canillitapp.com/news/category/${category}`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(loadingInProgress(false));
        return response.json();
      })
      .then(news => dispatch(loadingSuccess(news.slice(0, 10))))
      .catch(() => dispatch(loadingError(true)));
  };
};
