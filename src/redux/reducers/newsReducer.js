export const news = (state = [], action) => {
  switch (action.type) {
    case 'LOADING_SUCCESS':
      return action.news;
    case 'CLEAR_NEWS':
      return [];
    default:
      return state;
  }
};
