export const artistReducer = (state = [], action) => {
  const {
    type,
    payload
  } = action
  switch (type) {
    case 'ADD_ARTISTS':
      return [...state, ...payload.artists];
    default:
      return state
  }
};