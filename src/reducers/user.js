const initialState = {
  // ici l'état initial
  isLogged: false,
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default: return { ...state };
  }
};

export default userReducer;
