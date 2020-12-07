export const activeItem = (state = 'home', action) => {
  switch (action.type) {
    case 'SET_ACTIVE_ITEM':
      return action.name;
    default:
      return state;
  }
};
