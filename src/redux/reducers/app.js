const SET_WINDOW_WIDTH = "SET-WINDOW-WIDTH";

let initialState = {
  windowWidth: window.innerWidth,
  isMobile: window.innerWidth < 608,
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_WINDOW_WIDTH:
      return {
        ...state,
        windowWidth: window.innerWidth,
        isMobile: window.innerWidth < 608,
      };
    default:
      return state;
  }
}

export function setWindowWidth() {
  return {
    type: SET_WINDOW_WIDTH,
  };
}

export default appReducer;
