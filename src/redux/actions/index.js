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

export const setActiveItem = active => ({
  type: 'SET_ACTIVE_ITEM',
  name: active
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

export const getLatestNews = () => {
  return dispatch => {
    dispatch(clearNews());

    dispatch(loadingError(false));

    dispatch(loadingInProgress(true));

    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();
    let day = today.getDate();

    fetch(`https://api.canillitapp.com/latest/${year}-${month}-${day}?page=1`)
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

export const getNewsByWord = word => {
  return dispatch => {
    if (word !== '') {
      dispatch(clearNews());

      dispatch(loadingError(false));

      dispatch(loadingInProgress(true));

      fetch(`https://api.canillitapp.com/search/${word}`)
        .then(response => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          dispatch(loadingInProgress(false));
          return response.json();
        })
        .then(news => dispatch(loadingSuccess(news.slice(0, 10))))
        .catch(() => dispatch(loadingError(true)));
    }
  };
};
