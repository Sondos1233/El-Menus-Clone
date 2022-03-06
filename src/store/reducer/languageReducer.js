const initial = {
    lang: "العربية",
};

  
  export default function languageReducer(state = initial, action) {
    switch (action.type) {
      case "SET_LANGUAGE":
        return {
          ...state,
          lang: action.payload,
        };
  
      default:
        return state;
    }
  }
  