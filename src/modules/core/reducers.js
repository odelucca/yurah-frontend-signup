import initialState from './initialState';

export default (state = initialState, action = {}) => {
  const { type } = action;

  switch(type) {
    default:
      return state;
  }
}